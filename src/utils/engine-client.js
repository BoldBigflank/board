import { streamAll } from "../io/websocket";
import { makeQueryString, httpToWsProtocol, join } from "./url";
import { loadSvgs, getSvg, svgExists } from "./inline-svg";

const DEFAULT_SNAKE_HEAD = "default";
const DEFAULT_SNAKE_TAIL = "default";
const APP_VERSION = process.env.REACT_APP_VERSION;

async function get(url, query) {
  const response = await fetch(url + makeQueryString(query));
  if (response.status === 200) {
    return Promise.resolve(response.json());
  } else {
    return Promise.resolve(response.json()).then(responseJson => {
      console.error(responseJson.error);
      return Promise.reject(responseJson.error);
    });
  }
}

export function delay(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

export function getReadableCauseOfDeath(death) {
  // See https://github.com/BattlesnakeOfficial/rules/blob/master/standard.go
  switch (death.cause) {
    case "snake-collision":
      return `Ran into ${death.eliminatedBy}'s body`;
    case "snake-self-collision":
      return "Collided with itself";
    case "starvation": // DEPRECATED, REMOVE ME
      return "Out of health";
    case "out-of-health":
      return "Out of health";
    case "head-collision":
      return `Lost head-to-head with ${death.eliminatedBy}`;
    case "wall-collision":
      return "Moved out of bounds";
    case "squad-eliminated":
      return "Squad was eliminated";
    default:
      return death.cause;
  }
}

// Gets a list of all unique SVG paths required by the snakes.
function getAllSvgs(snakes) {
  const all = snakes.reduce((result, snake) => {
    return result.concat([snake.HeadType, snake.TailType]);
  }, []);
  const unique = new Set(all);
  return Array.from(unique);
}

async function assignHeadAndTailUrls(snakes) {
  for (const snake of snakes) {
    // Assign default if missing
    if (!snake.HeadType) {
      snake.HeadType = DEFAULT_SNAKE_HEAD;
    }
    if (!snake.TailType) {
      snake.TailType = DEFAULT_SNAKE_TAIL;
    }

    // Format as actual URL if it's just a name
    snake.HeadType = getSnakeHeadSvgUrl(snake.HeadType);
    snake.TailType = getSnakeTailSvgUrl(snake.TailType);

    if (!(await svgExists(snake.HeadType))) {
      snake.HeadType = getSnakeHeadSvgUrl(DEFAULT_SNAKE_HEAD);
    }
    if (!(await svgExists(snake.TailType))) {
      snake.TailType = getSnakeTailSvgUrl(DEFAULT_SNAKE_TAIL);
    }
  }
}

async function setHeadAndTailSvgs(snakes) {
  await assignHeadAndTailUrls(snakes);
  await loadSvgs(getAllSvgs(snakes));

  for (const snake of snakes) {
    snake.HeadSvg = getSvg(snake.HeadType);
    snake.TailSvg = getSvg(snake.TailType);
  }
}

function isIllegalSvgPath(nameOrPath) {
  return nameOrPath.indexOf("/") >= 0 || nameOrPath.indexOf(".") >= 0;
}

function svgUrlFromName(base, relative) {
  //appending the git hash of this version allows for cache busting on deploy
  const extension = ".svg?board_version=" + APP_VERSION;
  return join("https://media.battlesnake.com", base, relative) + extension;
}

function getSnakeHeadSvgUrl(path) {
  const effectivePath = isIllegalSvgPath(path) ? DEFAULT_SNAKE_HEAD : path;
  return svgUrlFromName("/snakes/heads", effectivePath);
}

function getSnakeTailSvgUrl(path) {
  const effectivePath = isIllegalSvgPath(path) ? DEFAULT_SNAKE_TAIL : path;
  return svgUrlFromName("/snakes/tails", effectivePath);
}

async function prepareFrame(frame) {
  await setHeadAndTailSvgs(frame.Snakes);
}

export function fetchGameInfo(baseUrl, gameId) {
  const url = join(baseUrl, `games/${gameId}`);
  return get(url);
}

export async function streamAllEvents(baseUrl, gameId, receiveEvent) {
  const game = await fetchGameInfo(baseUrl, gameId);

  let chain = Promise.resolve();
  function onEngineEvent(engineEvent) {
    if (engineEvent.Type) {
      const eventData = engineEvent.Data || engineEvent;

      chain = chain.then(async () => {
        if (engineEvent.Type === "frame") {
          await prepareFrame(eventData);
        }
        return receiveEvent(game, engineEvent.Type, eventData);
      });
    }
    return engineEvent.Type && engineEvent.Type === "game_end";
  }

  const wsUrl = join(httpToWsProtocol(baseUrl), `games/${gameId}/events`);
  await streamAll(wsUrl, onEngineEvent);
  await chain;
}

export function getFrameByTurn(frames, turn) {
  return frames.filter(frame => frame.turn === turn)[0];
}
