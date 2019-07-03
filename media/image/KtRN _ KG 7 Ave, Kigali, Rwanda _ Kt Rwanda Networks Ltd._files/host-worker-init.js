!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],t):"object"==typeof exports?exports["host-worker-init"]=t(require("lodash")):e["host-worker-init"]=t(e.lodash)}(this,function(e){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=14)}([function(t,r){t.exports=e},,function(e,t,r){"use strict";e.exports={APPS:{SANTA_MEMBERS:{appDefId:"14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9"},FORM_BUILDER:{appDefId:"14ce1214-b278-a7e4-1373-00cebd1bef7c"}},WIX_CODE_NAMESPACES_AND_ELEMENTORY_SUPPORT_PATH:"/wixCodeNamespacesAndElementorySupport.min.js",DATA_BINDING:"dataBinding",SEMI_NATIVE_SDK_URL:"http://static.parastorage.com/services/semi-native-sdk/1.3.0/lib/wix.min.js",PM_RPC_INTENTS:{INVOKE:"invoke",RPC_RESOLVE:"rpc-resolve",RPC_REJECT:"rpc-reject",API_DESCRIPTION:"api-desc",INVOKE_FUNCTION:"invoke-func",RESOLVE:"resolve",REJECT:"reject",REQUEST_API:"request-api"},WIX_CODE:{MESSAGE_INTENT:{WIX_CODE_MESSAGE:"WIX_CODE",WIX_CODE_SITE_API:"WIX_CODE_SITE_API",WIX_CODE_APP_API:"WIX_CODE_APP_API",SANTA_APPLICATION_CHANNEL_MESSAGE_RESPONSE:"SANTA_APPLICATION_CHANNEL_MESSAGE_RESPONSE",SANTA_APPLICATION_CHANNEL_MESSAGE:"SANTA_APPLICATION_CHANNEL_MESSAGE"},MESSAGE_TYPE:{CONSOLE:"console",IFRAME_COMMAND:"wix_code_iframe_command",GOOGLE_ANALYTICS:"googleAnalytics",UPDATE_WIX_CODE_MODEL_DATA_AFTER_LOGIN:"update_wix_code_model_data_after_login",REQUEST_API:"REQUEST_API",PERFORMANCE_METRICS_READY:"performance_metrics_ready",PLATFORM_PUBLIC_API_PREFIX:"viewer_platform_public_api_",OPEN_MESSAGE_CHANNEL:"openMessageChannel",SANTA_READY:"santaReady",SANTA_PAGE_CHANGE:"santaPageChange",UPDATE_BI_DATA:"update_bi_data"}}}},,,,,function(e,t,r){"use strict";var o=r(0),n=r(15),s="platform_app_";function i(e){var t={},r=Object.keys(e).filter(function(e){return"string"==typeof e&&o.startsWith(e,s)}),n=Array.isArray(r),i=0;for(r=n?r:r[Symbol.iterator]();;){var a;if(n){if(i>=r.length)break;a=r[i++]}else{if((i=r.next()).done)break;a=i.value}var c=a;t[c.replace(s,"")]=e.getItem(c)}return t}e.exports={get:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]?{localStorage:window.localStorage,sessionStorage:window.sessionStorage,memoryStorage:new n}:{localStorage:new n,sessionStorage:new n,memoryStorage:new n};return{serialize:function(){return JSON.stringify({local:i(e.localStorage),session:i(e.sessionStorage),memory:i(e.memoryStorage)})},setItem:function(t,r,o){e[t].setItem(s+r,o)}}}}},function(e,t,r){"use strict";var o=r(0),n=r(7),s=r(16),i=r(2);function a(){return"undefined"==typeof window||window.isPseudoWindow}function c(){var e="undefined"!=typeof window&&!window.clientSideRender,t=a();return{viewMode:this._hostProps.viewMode,locale:this._hostProps.locale,storage:this._storageManager.serialize(),userWarmup:this._hostProps.userWarmup,renderCycle:e&&!t?2:1,renderingEnv:t?"backend":"browser"}}var u=function(e,t){return o.startsWith(e,t)||o.startsWith(e,"http://localhost")||o.startsWith(e,"https://localhost")};function d(e,t,r,n){var i=0;return a()||(r=r&&window.fetch&&!function(e){return e.navigator&&/Edge|Trident/.test(e.navigator.userAgent)}(window),o.forEach(e,function(e){if(r&&u(e.url,n))++i,window.fetch(e.url).then(function(e){return e.arrayBuffer()}).then(function(r){t.postMessage(s.scriptImportMessage(e.url,r),[r])});else{var o="prefetch-"+e.id;if(!window.document.getElementById(o)){var a=window.document.createElement("link");a.setAttribute("rel","prefetch"),a.setAttribute("href",e.url),a.setAttribute("id",o),window.document.head.appendChild(a)}}})),i}function p(e,t){if(!this._standbyWorker){var r=new window.Worker(this._hostProps.workerUrl);r.addEventListener("message",this.onmessage),this._standbyWorker=r,function(e,t,r){var n=this._options,a=n.applications,u=n.shouldUseWixCodeScripts,p=l(a),f=a.concat(p),_=this._hostProps,g=_.openExperiments,h=_.baseVersion,m=_.santaBase,E=_.csrfToken,S=this._hostProps.biSessionData;r&&(S=o.assign(S,r));var w={id:"namespaces-sdk",url:this._options.namespacesSdkSource},y={id:"external-components",url:this._options.externalComponentsSource},A={id:"wixCodeNamespacesAndElementorySupport",url:this._options.wixCodeNamespacesAndElementorySupportSource},I={id:"wixCodeViewerApp",url:this._options.wixCodeViewerAppSource},M=d(function(e,t,r,n){var s=o.clone(e);return(n||o.some(t,function(e){return e.id===i.DATA_BINDING||e.shouldUseWixCodeScripts}))&&(s=s.concat(r)),s.concat(t)}([w,y],f,[A,I],u),this._standbyWorker,e,t),b={sdkParameters:c.call(this),isDebug:this._options.isDebug,santaVersion:h,wixCodeBase:m+"/node_modules/santa-wix-code",sdkSource:"bundled",namespacesSdkSource:w.url,externalComponentsSource:y.url,applications:JSON.stringify(f),wixCodeNamespacesAndElementorySupportSource:A.url,wixCodeViewerAppSource:I.url,biSessionData:S,openExperiments:g,shouldUseWixCodeScripts:u,csrfToken:E},v=s.bootstrapMessage(b,M);this._standbyWorker.postMessage(v)}.call(this,!!e,this._hostProps.staticServerUrl,t)}}var l=function(e){return o(e).filter("controllerScriptMap").flatMap(function(e){return o.map(e.controllerScriptMap,function(t,r){return{id:r,url:t,appDefinitionId:e.id,isControllerScript:!0}})}).value()};function f(e,t){var r=this;return e.reduce(function(e,n){var s;return o.assign(e,((s={})[n]=r._hostProps.getUserCodeUrlsDetails(t,n),s))},{})}function _(e){this.has(e)||(p.call(this),function(e){this._workers[e]=this._standbyWorker,this._standbyWorker=null}.call(this,e))}function g(e){var t=this;return function(r){var n=r.data;o.isMatch(n,{intent:"BROWSER_API",type:"setToStorage"})&&function(e){var t=this,r=e.type,n=e.key,i=e.value;this._storageManager.setItem(r,n,i);var a=s.storageWasUpdatedMessage(this._storageManager.serialize());o.forEach(this._workers,function(e,r){t.send(r,a)})}.call(t,n.data),e(r)}}function h(e,t){var r,n,s=[],i=o.find(e,{id:t});return i&&s.push((n=(r=i).appConfig.userScript,{id:r.id,url:n.url,scriptName:n.scriptName,displayName:n.displayName,routerData:r.routerData})),s}var m=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._hostProps=function(e){var t={getElementoryArguments:function(){return null},getUserCodeUrlsDetails:h,loadUserCode:!0,viewMode:"site",locale:"",userWarmup:null,workerUrl:"",santaBase:"",baseVersion:"",openExperiments:[],biSessionData:{}};return o.assign({},t,e)}(t),this._options=n,this._workers={},this._terminatedWorkers={},this._standbyWorker=null,this._storageManager=r}return e.prototype.has=function(e){return Boolean(this._workers[e])},e.prototype.initialize=function(e,t){this.onmessage=function(e){return function(t){var r=t.data,n=t.ports;o.includes(i.PM_RPC_INTENTS,r.intent)&&window.postMessage(r,"*",n),e(t)}}.call(this,g.call(this,function(t){var r=t.data;return e(r)})),p.call(this,t)},e.prototype.send=function(e,t,r){var o=s.isStopMessage(t)?this._terminatedWorkers[e]:this._workers[e];o&&(r?o.postMessage(t,r):o.postMessage(t))},e.prototype.get=function(e){return this._workers[e]},e.prototype.handleWidgetsCommand=function(e,t){var r=this;switch(e.type){case"load_user_code":if(!this._hostProps.loadUserCode)break;(function(e){var t=this;Object.keys(e).forEach(function(r){var o=e[r];d(o),_.call(t,r),t.send(r,s.loadUserCodeMessage(r,o))})}).call(this,f.call(this,e.rootIds,e.widgets));break;case"load_user_generated_apps":(function(e,t){var r=this;e.forEach(function(e){var o=l(t),n=t.concat(o);d(n),_.call(r,e),r.send(e,s.loadUserGeneratedApps(e,n))})}).call(this,e.rootIds,e.applications);break;case"load_widgets":(function(e){var t=this,r=e.applications,n=e.rootIds,i=e.wixCodeScriptsByRootId,a=e.elementoryArguments,u=e.routersMap,d=e.sdkParameters,p=e.rgisByRootId,l=e.biSessionData;n.forEach(function(e){_.call(t,e);var n=o.assign({},d,c.call(t));t.send(e,s.loadMessage(e,a,i[e],r,n,u,t._storageManager.serialize(),p[e],l))})}).call(this,{applications:o.reject(e.widgets,o.overSome({type:"Page"},{type:"Popup"},{type:"masterPage"})),rootIds:e.rootIds,wixCodeScriptsByRootId:f.call(this,e.rootIds,e.widgets),elementoryArguments:this._hostProps.getElementoryArguments(e.widgets),routersMap:e.routersMap,sdkParameters:e.sdkParameters,rgisByRootId:e.rgisByRootId,biSessionData:e.biSessionData});break;case"init_widgets":o.forEach(e.contexts,function(e,t){if(!r.has(t))throw new Error("Context id "+t+" is not loaded");r.send(t,s.initMessage(t,e))});break;case"start_widgets":if(!e.contexts)throw new Error("Start message must contain contexts property");o.forEach(e.contexts,function(e,t){if(!r.has(t))throw new Error("Context id "+t+" is not loaded");r.send(t,s.startMessage(e,t))});break;case"trigger_onRender":p.call(this,void 0,e.biDataUpdates),this.send(e.contextId,e);break;case"stop_widgets":o.forEach(e.widgetIds,function(e){(function(e){var t=this,r=this._workers[e];return!!r&&(delete this._workers[e],this._terminatedWorkers[e]=r,o.defer(function(){t.send(e,s.stopMessage(e)),delete t._terminatedWorkers[e]}),!0)}).call(r,e)});break;case"update_wix_code_model_data_after_login":o.forEach(e.rootIds,function(t){r.send(t,s.updateWixCodeModelDataAfterLoginMessage(t,r._hostProps.getElementoryArguments(e.widgets)))});break;case"update_bi_data":this.send(e.contextId,s.biUpdateMessage(e));break;default:this.has(e.contextId)&&this.send(e.contextId,e,t)}},e.prototype.terminateStandbyWorker=function(){this._standbyWorker&&(this._standbyWorker.terminate(),this._standbyWorker=null)},e}();e.exports={getWorkerManager:function(e,t,r){return new m(e,n.get(t),r)}}},function(e,t,r){"use strict";e.exports={get:function(){var e=[],t=null;return{sendOrHoldMessage:function(r,o){t?t(r,o):e.push({message:r,ports:o})},setMessageHandler:function(r){for(t=r;e.length>0;){var o=e.shift();t(o.message,o.ports)}}}}}},,,,,function(e,t,r){"use strict";var o=r(7),n=r(8),s=r(2),i=r(17),a=r(9);e.exports={storageFacade:o,constants:s,workerMessagesService:i,messageProxy:a,workerManagerFactory:n}},function(e,t,r){"use strict";var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return e.prototype.setItem=function(e,t){this[e]=String(t)},e.prototype.getItem=function(e){return this[e]||null},e.prototype.removeItem=function(e){delete this[e]},e.prototype.clear=function(){var e=this;Object.keys(this).forEach(function(t){return e.removeItem(t)})},e.prototype.toJSON=function(){return this.storage.toJSON()},e}();e.exports=o},function(e,t,r){"use strict";e.exports={bootstrapMessage:function(e,t){return{type:"wix_code_worker_bootstrap",bootstrapArguments:e,fetchScriptsCount:t}},loadUserCodeMessage:function(e,t){return{type:"wix_code_worker_load_user_code",workerId:e,wixCode:t}},loadUserGeneratedApps:function(e,t){return{type:"wix_code_load_user_generated_apps",workerId:e,applications:t}},loadMessage:function(e,t,r,o,n,s,i,a,c){return{type:"wix_code_worker_load",workerId:e,elementoryArguments:t,wixCode:r,applications:o,sdkParameters:n,routersMap:s,storage:i,rgi:a,biSessionData:c}},initMessage:function(e,t){return{type:"wix_code_worker_init",id:e,apps:t}},startMessage:function(e,t){return{type:"wix_code_worker_start",context:e,id:t}},storageWasUpdatedMessage:function(e){return{type:"storageWasUpdated",storageValue:e}},updateWixCodeModelDataAfterLoginMessage:function(e,t){return{type:"update_wix_code_model_data_after_login",workerId:e,elementoryArguments:t}},scriptImportMessage:function(e,t){return{type:"script_import_message",url:e,script:t}},stopMessage:function(e){return{contextId:e,type:"stop"}},isStopMessage:function(e){return"stop"===e.type},biUpdateMessage:function(e){return{type:"wix_code_worker_bi_data_update",updates:e.updates}}}},function(e,t,r){"use strict";var o=r(0),n=r(8),s=r(9),i=r(2);e.exports={getAPI:function(){var e=s.get(),t=[],r=[],a=!1,c=void 0;function u(e){t.forEach(function(t){t(e)})}return{init:function(t){var r=function(e){return o.assign({applications:[],fetchScripts:!0},e)}(t),s=r.workerProps,i=r.fetchScripts;(c=n.getWorkerManager(s,function(){try{return window.localStorage.setItem("",""),window.localStorage.removeItem(""),!0}catch(e){return!1}}(),r)).initialize(u,i),e.setMessageHandler(function(e,t){return c.handleWidgetsCommand(e,t)}),a=!0},sendMessage:function(t,n){var s={intent:i.WIX_CODE.MESSAGE_INTENT.WIX_CODE_MESSAGE};(t=o.defaults({},t,s))&&e.sendOrHoldMessage(function(e){return r.reduce(function(e,t){return t(e)},e)}(t),n)},sendOrHoldMessage:function(t){e.sendOrHoldMessage(t)},registerMessageHandler:function(e){t.push(e)},registerMessageModifier:function(e){r.push(e)},isAppInitiated:function(){return a},getWorkerById:function(e){return c&&c.get(e)},destroyAppsContainer:function(){c&&(c.terminateStandbyWorker(),a=!1,e=s.get())}}}}}])});
//# sourceMappingURL=host-worker-init.js.map