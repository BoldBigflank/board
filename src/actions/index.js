import { delay, getFrameByTurn, streamAllEvents } from "../utils/engine-client";
import * as types from "./action-types";

// Sort of a hack, until we have persisted playback options
let DEFAULT_FPS = 10;
try {
  DEFAULT_FPS = localStorage.getItem("frameRate") || 10;
} catch (err) {
  console.log("unable to load localStorage");
}

export const setGameOptions = gameOptions => ({
  type: types.SET_GAME_OPTIONS,
  gameOptions
});

export const setTheme = theme => ({
  type: types.SET_THEME,
  theme
});

export const setThoughts = thoughts => ({
  type: types.SET_THOUGHTS,
  thoughts
});

export const gameOver = () => ({
  type: types.GAME_OVER
});

export const gameNotFound = () => ({
  type: types.GAME_NOT_FOUND
});

export const requestFrames = () => ({
  type: types.REQUEST_FRAMES
});

export const receiveFrame = (game, frame) => ({
  type: types.RECEIVE_FRAME,
  game,
  frame
});

export const receiveEventEnd = (game, endEvent, frame) => ({
  type: types.RECEIVE_EVENT_END,
  game,
  endEvent,
  frame
});

export const setCurrentFrame = frame => ({
  type: types.SET_CURRENT_FRAME,
  frame
});

export const pauseGame = () => ({
  type: types.PAUSE_GAME
});

export const resumeGame = () => ({
  type: types.RESUME_GAME
});

export const highlightSnake = snakeId => ({
  type: types.HIGHLIGHT_SNAKE,
  snakeId
});

export const fetchFrames = () => {
  return async (dispatch, getState) => {
    const {
      autoplay,
      engine: engineUrl,
      game: gameId,
      turn
    } = getState().game.gameOptions;

    dispatch(requestFrames());

    try {
      await streamAllEvents(engineUrl, gameId, (game, eventType, eventData) => {
        if (eventType === "frame") {
          const frame = eventData;
          // Workaround for bug where turn exluded on turn 0
          frame.Turn = frame.Turn || 0;
          dispatch(receiveFrame(game, frame));

          // Workaround to render the first frame into the board
          if (frame.Turn === 0) {
            const frame = getState().game.frames[0];
            dispatch(setCurrentFrame(frame));

            if (autoplay) {
              dispatch(resumeGame());
              dispatch(playFromFrame(frame));
            }
          }
        } else if (eventType === "game_end") {
          const numFrames = getState().game.frames.length;
          const frame = getState().game.frames[numFrames - 1];
          frame.gameOver = true;
          dispatch(receiveEventEnd(game, eventData, frame));
        }
      });
    } catch (e) {
      return dispatch(gameNotFound());
    }

    // Only navigate to the specified frame if it is within the
    // amount of frames available in the game
    if (turn && turn <= getState().game.frames.length) {
      const frame = getState().game.frames[turn];
      dispatch(setCurrentFrame(frame));
    }
  };
};

export const playFromFrame = frame => {
  return async (dispatch, getState) => {
    const { frameRate } = getState().game.gameOptions;
    const frames = getState().game.frames.slice(); // Don't modify in place
    const frameIndex = frames.indexOf(frame);
    const slicedFrames = frames.slice(frameIndex);

    const ceiledFps = Math.ceil(frameRate || DEFAULT_FPS);
    const delayMillis = 1000 / ceiledFps;

    for (const frame of slicedFrames) {
      if (getState().game.paused) return;
      dispatch(setCurrentFrame(frame));
      await delay(delayMillis);
    }

    const lastFrame = slicedFrames[slicedFrames.length - 1];
    if (lastFrame.gameOver) {
      if (!getState().game.paused) {
        if (getState().game.gameOptions.loop) {
          const frame = getFrameByTurn(frames, 0);
          dispatch(playFromFrame(frame));
        } else {
          dispatch(gameOver());
        }
      }
    } else {
      dispatch(playFromFrame(lastFrame));
    }
  };
};

export const reloadGame = () => {
  return async (dispatch, getState) => {
    const { frames, paused } = getState().game;
    if (paused) {
      const frame = getFrameByTurn(frames, 0);
      dispatch(setCurrentFrame(frame));
    }
  };
};

export const toggleGamePause = () => {
  return async (dispatch, getState) => {
    const { currentFrame, paused } = getState().game;

    if (paused) {
      dispatch(resumeGame());
      dispatch(playFromFrame(currentFrame));
    } else {
      dispatch(pauseGame());
    }
  };
};

export const toggleTheme = themeToSet => {
  return async dispatch => {
    dispatch(setTheme(themeToSet));
  };
};

export const showThoughts = themeToSet => {
  return async (dispatch, getState) => {
    const { currentFrame, grid, ruleset } = getState().game;
    const { food, snakes, turn, hazards } = currentFrame;
    const url = "http://localhost:5555/move";
    try {
      const postSnakes = snakes.map(s => ({
        ...s,
        head: s.body[0],
        length: s.body.length
      }));

      const gameState = {
        game: {
          ruleset: {
            name: "royale",
            version: "1",
            settings: {
              foodSpawnChance: ruleset.foodSpawnChance,
              minimumFood: ruleset.minimumFood,
              hazardDamagePerTurn: ruleset.damagePerTurn,
              royale: {
                shrinkEveryNTurns: ruleset.shrinkEveryNTurns
              },
              squad: {
                allowBodyCollisions: false,
                sharedElimination: false,
                sharedHealth: false,
                sharedLength: false
              }
            }
          }
        },
        turn,
        board: {
          ...grid,
          food,
          snakes: postSnakes,
          hazards
        },
        you: postSnakes.find(s => s.author === "BoldBigflank")
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(gameState)
      });
      const responseJson = await response.json();
      console.log(JSON.stringify(responseJson, null, 2));
      dispatch(setThoughts(responseJson.thoughts));
    } catch (err) {
      console.error(err);
    }
  };
};

export const stepForwardFrame = () => {
  return async (dispatch, getState) => {
    const { currentFrame, frames } = getState().game;
    const nextTurn = currentFrame.turn + 1;
    const nextFrame = getFrameByTurn(frames, nextTurn);
    if (nextFrame) {
      dispatch(setCurrentFrame(nextFrame));
    }
  };
};

export const stepBackwardFrame = () => {
  return async (dispatch, getState) => {
    const { currentFrame, frames } = getState().game;
    const prevTurn = currentFrame.turn - 1;
    const prevFrame = getFrameByTurn(frames, prevTurn);
    if (prevFrame) {
      dispatch(setCurrentFrame(prevFrame));
    }
  };
};

export const togglePlayButtons = showHide => ({
  type: types.TOGGLE_SETTINGS_VIEW,
  showHide
});

export const themeChanged = theme => ({
  type: types.THEME_CHANGED,
  theme
});
