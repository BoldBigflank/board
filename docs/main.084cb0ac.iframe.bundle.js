(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{162:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_runner_work_board_board_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(211),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(65),errorColor=(__webpack_require__(842),{color:_theme__WEBPACK_IMPORTED_MODULE_2__.a.danger});var ErrorMessage=function ErrorMessage(props){var code,message;if(props.error){var _props$error$toString=props.error.toString().split(":"),_props$error$toString2=Object(_home_runner_work_board_board_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_props$error$toString,2);code=_props$error$toString2[0],message=_props$error$toString2[1]}return Number(code)?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"error-message",style:errorColor},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"material-icons material-icons-inline"},function getIcon(code){return code?"error":""}(code)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,message)):""};ErrorMessage.__docgenInfo={description:"",methods:[],displayName:"ErrorMessage"},__webpack_exports__.a=ErrorMessage,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/scoreboard/error-message/ErrorMessage.jsx"]={name:"ErrorMessage",docgenInfo:ErrorMessage.__docgenInfo,path:"src/components/scoreboard/error-message/ErrorMessage.jsx"})},163:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_runner_work_board_board_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(211),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),style={color:__webpack_require__(65).a.danger,cursor:"pointer",margin:0,padding:0};var StatusIndicator=function StatusIndicator(_ref){var _ref$errorMessage=_ref.errorMessage,errorMessage=void 0===_ref$errorMessage?"":_ref$errorMessage,_ref$clickHandler=_ref.clickHandler,clickHandler=void 0===_ref$clickHandler?function(){}:_ref$clickHandler,_errorMessage$toStrin=errorMessage.toString().split(":"),code=Object(_home_runner_work_board_board_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_errorMessage$toStrin,1)[0];return Number(code)?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style,onClick:clickHandler},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"material-icons material-icons-inline"},function getIcon(code){return code?"error":"warning"}(code))):""};StatusIndicator.__docgenInfo={description:"",methods:[],displayName:"StatusIndicator",props:{errorMessage:{defaultValue:{value:'""',computed:!1},required:!1},clickHandler:{defaultValue:{value:"() => {}",computed:!1},required:!1}}},__webpack_exports__.a=StatusIndicator,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/scoreboard/status-indicator/StatusIndicator.jsx"]={name:"StatusIndicator",docgenInfo:StatusIndicator.__docgenInfo,path:"src/components/scoreboard/status-indicator/StatusIndicator.jsx"})},460:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[],void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof(__WEBPACK_AMD_DEFINE_FACTORY__=function(){if("WebSocket"in window)return ReconnectingWebSocket.prototype.onopen=function(event){},ReconnectingWebSocket.prototype.onclose=function(event){},ReconnectingWebSocket.prototype.onconnecting=function(event){},ReconnectingWebSocket.prototype.onmessage=function(event){},ReconnectingWebSocket.prototype.onerror=function(event){},ReconnectingWebSocket.debugAll=!1,ReconnectingWebSocket.CONNECTING=WebSocket.CONNECTING,ReconnectingWebSocket.OPEN=WebSocket.OPEN,ReconnectingWebSocket.CLOSING=WebSocket.CLOSING,ReconnectingWebSocket.CLOSED=WebSocket.CLOSED,ReconnectingWebSocket;function ReconnectingWebSocket(url,protocols,options){var settings={debug:!1,automaticOpen:!0,reconnectInterval:1e3,maxReconnectInterval:3e4,reconnectDecay:1.5,timeoutInterval:2e3,maxReconnectAttempts:null,binaryType:"blob"};for(var key in options||(options={}),settings)void 0!==options[key]?this[key]=options[key]:this[key]=settings[key];this.url=url,this.reconnectAttempts=0,this.readyState=WebSocket.CONNECTING,this.protocol=null;var ws,self=this,forcedClose=!1,timedOut=!1,eventTarget=document.createElement("div");function generateEvent(s,args){var evt=document.createEvent("CustomEvent");return evt.initCustomEvent(s,!1,!1,args),evt}eventTarget.addEventListener("open",(function(event){self.onopen(event)})),eventTarget.addEventListener("close",(function(event){self.onclose(event)})),eventTarget.addEventListener("connecting",(function(event){self.onconnecting(event)})),eventTarget.addEventListener("message",(function(event){self.onmessage(event)})),eventTarget.addEventListener("error",(function(event){self.onerror(event)})),this.addEventListener=eventTarget.addEventListener.bind(eventTarget),this.removeEventListener=eventTarget.removeEventListener.bind(eventTarget),this.dispatchEvent=eventTarget.dispatchEvent.bind(eventTarget),this.open=function(reconnectAttempt){if((ws=new WebSocket(self.url,protocols||[])).binaryType=this.binaryType,reconnectAttempt){if(this.maxReconnectAttempts&&this.reconnectAttempts>this.maxReconnectAttempts)return}else eventTarget.dispatchEvent(generateEvent("connecting")),this.reconnectAttempts=0;(self.debug||ReconnectingWebSocket.debugAll)&&console.debug("ReconnectingWebSocket","attempt-connect",self.url);var localWs=ws,timeout=setTimeout((function(){(self.debug||ReconnectingWebSocket.debugAll)&&console.debug("ReconnectingWebSocket","connection-timeout",self.url),timedOut=!0,localWs.close(),timedOut=!1}),self.timeoutInterval);ws.onopen=function(event){clearTimeout(timeout),(self.debug||ReconnectingWebSocket.debugAll)&&console.debug("ReconnectingWebSocket","onopen",self.url),self.protocol=ws.protocol,self.readyState=WebSocket.OPEN,self.reconnectAttempts=0;var e=generateEvent("open");e.isReconnect=reconnectAttempt,reconnectAttempt=!1,eventTarget.dispatchEvent(e)},ws.onclose=function(event){if(clearTimeout(timeout),ws=null,forcedClose)self.readyState=WebSocket.CLOSED,eventTarget.dispatchEvent(generateEvent("close"));else{self.readyState=WebSocket.CONNECTING;var e=generateEvent("connecting");e.code=event.code,e.reason=event.reason,e.wasClean=event.wasClean,eventTarget.dispatchEvent(e),reconnectAttempt||timedOut||((self.debug||ReconnectingWebSocket.debugAll)&&console.debug("ReconnectingWebSocket","onclose",self.url),eventTarget.dispatchEvent(generateEvent("close")));var timeout=self.reconnectInterval*Math.pow(self.reconnectDecay,self.reconnectAttempts);setTimeout((function(){self.reconnectAttempts++,self.open(!0)}),timeout>self.maxReconnectInterval?self.maxReconnectInterval:timeout)}},ws.onmessage=function(event){(self.debug||ReconnectingWebSocket.debugAll)&&console.debug("ReconnectingWebSocket","onmessage",self.url,event.data);var e=generateEvent("message");e.data=event.data,eventTarget.dispatchEvent(e)},ws.onerror=function(event){(self.debug||ReconnectingWebSocket.debugAll)&&console.debug("ReconnectingWebSocket","onerror",self.url,event),eventTarget.dispatchEvent(generateEvent("error"))}},1==this.automaticOpen&&this.open(!1),this.send=function(data){if(ws)return(self.debug||ReconnectingWebSocket.debugAll)&&console.debug("ReconnectingWebSocket","send",self.url,data),ws.send(data);throw"INVALID_STATE_ERR : Pausing to reconnect websocket"},this.close=function(code,reason){void 0===code&&(code=1e3),forcedClose=!0,ws&&ws.close(code,reason)},this.refresh=function(){ws&&ws.close()}}})?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},481:function(module,exports,__webpack_require__){__webpack_require__(482),__webpack_require__(643),__webpack_require__(644),__webpack_require__(846),__webpack_require__(847),__webpack_require__(853),__webpack_require__(854),__webpack_require__(852),__webpack_require__(848),__webpack_require__(855),__webpack_require__(849),__webpack_require__(850),__webpack_require__(856),module.exports=__webpack_require__(839)},549:function(module,exports){},644:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(344)},65:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return colors})),__webpack_require__.d(__webpack_exports__,"b",(function(){return themes}));var colors={pageBackground:"transparent",gridDot:"#6a208f",gridCellBackground:"#f1f1f1",gridCellBackgroundDark:"#D6D5EA",food:"#ff5c75",hazard:"#000000",hazardOpacity:"0.4",overlapSnake:"#AAAAAA",healthBar:"#0f0",healthBarBackground:"#fefefe",healthBarOutline:"#666",healthBarDeathBackground:"#f1f1f1",healthBarDeathBackgroundDark:"#59526b",lightText:"#efefef",darkText:"#222",blue:"#007bff",indigo:"#6610f2",purple:"#6f42c1",pink:"#e83e8c",red:"#dc3545",orange:"#fd7e14",yellow:"#ffc107",green:"#28a745",teal:"#20c997",cyan:"#17a2b8",white:"#fff",gray:"#6c757d",grayLight:"#f1f1f1",grayDark:"#343a40",primary:"#007bff",secondary:"#6c757d",success:"#28a745",info:"#17a2b8",warning:"#ffc107",danger:"#dc3545",light:"#f8f9fa",dark:"#343a40"},themes={dark:"dark",light:"light"}},839:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(344).configure)([__webpack_require__(840),__webpack_require__(841)],module,!1)}).call(this,__webpack_require__(193)(module))},840:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=840},841:function(module,exports,__webpack_require__){var map={"./components/Avatar.stories.jsx":851,"./components/scoreboard/error-message/ErrorMessage.stories.jsx":844,"./components/scoreboard/status-indicator/StatusIndicator.stories.jsx":845};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=841},842:function(module,exports,__webpack_require__){},843:function(module,exports,__webpack_require__){},844:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DisplayError",(function(){return DisplayError})),__webpack_require__.d(__webpack_exports__,"NoError",(function(){return NoError}));var _home_runner_work_board_board_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(43),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(162);__webpack_exports__.default={title:"Components/ErrorMessage",component:_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__.a};var Template=function Template(args){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__.a,args)},DisplayError=Template.bind({});DisplayError.args={error:"1: Lorem oopsum error message here."};var NoError=Template.bind({});NoError.args={error:""},DisplayError.parameters=Object(_home_runner_work_board_board_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <ErrorMessage {...args} />"}},DisplayError.parameters),NoError.parameters=Object(_home_runner_work_board_board_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <ErrorMessage {...args} />"}},NoError.parameters)},845:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DisplayError",(function(){return DisplayError})),__webpack_require__.d(__webpack_exports__,"NoError",(function(){return NoError}));var _home_runner_work_board_board_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(43),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_StatusIndicator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(163);__webpack_exports__.default={title:"Components/StatusIndicator",component:_StatusIndicator__WEBPACK_IMPORTED_MODULE_2__.a,argTypes:{clickHandler:{action:"clicked"}}};var Template=function Template(args){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StatusIndicator__WEBPACK_IMPORTED_MODULE_2__.a,args)},DisplayError=Template.bind({});DisplayError.args={errorMessage:"1:Lorem oopsum"};var NoError=Template.bind({});NoError.args={errorMessage:""},DisplayError.parameters=Object(_home_runner_work_board_board_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <StatusIndicator {...args} />"}},DisplayError.parameters),NoError.parameters=Object(_home_runner_work_board_board_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <StatusIndicator {...args} />"}},NoError.parameters)},851:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Empty",(function(){return Empty})),__webpack_require__.d(__webpack_exports__,"FullHealthSnake",(function(){return FullHealthSnake})),__webpack_require__.d(__webpack_exports__,"DeadSnake",(function(){return DeadSnake})),__webpack_require__.d(__webpack_exports__,"GreenSnake",(function(){return GreenSnake})),__webpack_require__.d(__webpack_exports__,"LowHealthSnake",(function(){return LowHealthSnake})),__webpack_require__.d(__webpack_exports__,"ErrorSnake",(function(){return ErrorSnake})),__webpack_require__.d(__webpack_exports__,"TimingsSnake",(function(){return TimingsSnake}));var objectSpread2=__webpack_require__(43),react=__webpack_require__(0),react_default=__webpack_require__.n(react),classCallCheck=__webpack_require__(457),createClass=__webpack_require__(458),assertThisInitialized=__webpack_require__(210),inherits=__webpack_require__(462),createSuper=__webpack_require__(461),taggedTemplateLiteral=__webpack_require__(459),styled_browser_esm=__webpack_require__(71),src_theme=__webpack_require__(65);__webpack_require__(294),__webpack_require__(48),__webpack_require__(88),__webpack_require__(460);Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).REACT_APP_VERSION;var _templateObject,ErrorMessage=__webpack_require__(162),StatusIndicator=(__webpack_require__(843),__webpack_require__(163)),AvatarWrapper=Object(styled_browser_esm.a)("div")(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n\n  opacity: ",";\n"])),(function(props){return props.isEliminated?"0.5":"1.0"})),Name=Object(styled_browser_esm.a)("span")((function(_ref){return{display:"block",textShadow:_ref.theme===src_theme.b.dark?"0 1px 2px rgba(0,0,0,0.90)":null}})),Length=Object(styled_browser_esm.a)("span")((function(_ref2){return{marginLeft:"auto",textShadow:_ref2.theme===src_theme.b.dark?"0 1px 2px rgba(0,0,0,0.90)":null}})),AuthorWrapper=Object(styled_browser_esm.a)("div")({fontSize:"1rem",fontWeight:"400",display:"flex",flexDirection:"row",height:"1.25rem"}),Author=Object(styled_browser_esm.a)("span")((function(_ref3){return{display:"block",flexGrow:1,textShadow:_ref3.theme===src_theme.b.dark?"0 1px 2px rgba(0,0,0,0.90)":null}})),Latency=Object(styled_browser_esm.a)("span")((function(_ref4){var theme=_ref4.theme,latency=_ref4.latency;return{color:"0"===latency?"red":"inherit",marginLeft:"auto",textShadow:theme===src_theme.b.dark?"0 1px 2px rgba(0,0,0,0.90)":null,display:""===latency?"none":"block"}})),HealthBarWrapper=Object(styled_browser_esm.a)("div")({marginTop:"0.2rem",width:"100%",height:"1.0rem",background:src_theme.a.healthBarBackground,borderRadius:"1.5rem"}),HealthBar=Object(styled_browser_esm.a)("div")((function(_ref5){return{height:"100%",backgroundColor:_ref5.color,borderRadius:"inherit"}})),CauseOfDeath=Object(styled_browser_esm.a)("div")((function(_ref6){return{width:"100%",marginTop:"0.2rem",fontSize:"1rem",lineHeight:"1rem",color:_ref6.theme===src_theme.b.dark?src_theme.a.lightText:src_theme.a.darkText}})),components_avatar_Avatar=function(_React$Component){Object(inherits.a)(Avatar,_React$Component);var _super=Object(createSuper.a)(Avatar);function Avatar(props){var _this;return Object(classCallCheck.a)(this,Avatar),(_this=_super.call(this,props)).state={showError:!1},_this.toggleErrorMessage=_this.toggleErrorMessage.bind(Object(assertThisInitialized.a)(_this)),_this}return Object(createClass.a)(Avatar,[{key:"render",value:function render(){var _this2=this;return react_default.a.createElement(AvatarWrapper,{isEliminated:!!this.props.snake.death},react_default.a.createElement("div",{className:"row"},react_default.a.createElement(Name,null,this.props.snake.name),react_default.a.createElement(Length,null,this.props.snake.body.length)),react_default.a.createElement(AuthorWrapper,null,react_default.a.createElement(Author,null,"by ",this.props.snake.author),react_default.a.createElement(StatusIndicator.a,{errorMessage:this.props.snake.error,clickHandler:function clickHandler(e){return _this2.toggleErrorMessage(e)}}),react_default.a.createElement(Latency,{latency:this.props.snake.latency},this.props.snake.latency," ms")),this.props.snake.death?react_default.a.createElement(CauseOfDeath,{theme:this.props.theme},function getReadableCauseOfDeath(death){switch(death.cause){case"snake-collision":return"Ran into ".concat(death.eliminatedBy,"'s body");case"snake-self-collision":return"Collided with itself";case"starvation":case"out-of-health":return"Out of health";case"head-collision":return"Lost head-to-head with ".concat(death.eliminatedBy);case"wall-collision":return"Moved out of bounds";case"squad-eliminated":return"Squad was eliminated";default:return death.cause}}(this.props.snake.death)):react_default.a.createElement(HealthBarWrapper,null,react_default.a.createElement(HealthBar,{color:this.props.snake.color,style:{width:"".concat(this.props.snake.health,"%")}})),react_default.a.createElement(ErrorMessage.a,{error:this.state.showError?this.props.snake.error:""}))}},{key:"toggleErrorMessage",value:function toggleErrorMessage(e){e.target!==e.currentTarget&&this.setState({showError:!this.state.showError})}}]),Avatar}(react_default.a.Component);components_avatar_Avatar.__docgenInfo={description:"",methods:[{name:"toggleErrorMessage",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null}],displayName:"Avatar"};var avatar=components_avatar_Avatar;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/avatar.jsx"]={name:"Avatar",docgenInfo:components_avatar_Avatar.__docgenInfo,path:"src/components/avatar.jsx"});__webpack_exports__.default={title:"Components/Avatar",component:avatar};var defaultSnake={body:[],color:"#000000",_id:"totally-unique-id",name:"Sir Hiss",effectiveSpace:3,health:100,latency:100,error:"",timing:{},isDead:!1,death:{cause:"collided with wall",turn:1,eliminatedBy:""},head:"default",tail:"default",headSvg:"",tailSvg:"",squad:"Squad name",author:"Autherhandle",shout:"This is my shout"},Avatar_stories_Template=function Template(args){return react_default.a.createElement(avatar,args)},Empty=Avatar_stories_Template.bind({});Empty.args={snake:defaultSnake};var fullHealthSnake=Object(objectSpread2.a)({},defaultSnake);fullHealthSnake.death=null;var FullHealthSnake=Avatar_stories_Template.bind({});FullHealthSnake.args={snake:fullHealthSnake};var DeadSnake=Avatar_stories_Template.bind({});DeadSnake.args={snake:defaultSnake};var greenSnake=Object(objectSpread2.a)({},fullHealthSnake);greenSnake.color="#008800";var GreenSnake=Avatar_stories_Template.bind({});GreenSnake.args={snake:greenSnake};var lowHealthSnake=Object(objectSpread2.a)({},fullHealthSnake);lowHealthSnake.health=10;var LowHealthSnake=Avatar_stories_Template.bind({});LowHealthSnake.args={snake:lowHealthSnake};var errorSnake=Object(objectSpread2.a)({},fullHealthSnake);errorSnake.error="1:Lorem ooopsum";var ErrorSnake=Avatar_stories_Template.bind({});ErrorSnake.args={snake:errorSnake};var timingsSnake=Object(objectSpread2.a)({},fullHealthSnake);timingsSnake.latency=5,timingsSnake.timing={Connect:0,DNS:0,FirstByte:0,Latency:503520,TLS:0};var TimingsSnake=Avatar_stories_Template.bind({});TimingsSnake.args={snake:timingsSnake},Empty.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Avatar {...args} />"}},Empty.parameters),FullHealthSnake.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Avatar {...args} />"}},FullHealthSnake.parameters),DeadSnake.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Avatar {...args} />"}},DeadSnake.parameters),GreenSnake.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Avatar {...args} />"}},GreenSnake.parameters),LowHealthSnake.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Avatar {...args} />"}},LowHealthSnake.parameters),ErrorSnake.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Avatar {...args} />"}},ErrorSnake.parameters),TimingsSnake.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Avatar {...args} />"}},TimingsSnake.parameters)},856:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(863),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[481,2,3]]]);