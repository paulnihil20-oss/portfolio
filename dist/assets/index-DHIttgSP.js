var Xy=Object.defineProperty;var Wy=(o,e,i)=>e in o?Xy(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var nd=(o,e,i)=>Wy(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Yv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var id={exports:{}},Co={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function qy(){if(U0)return Co;U0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Co.Fragment=e,Co.jsx=i,Co.jsxs=i,Co}var O0;function Yy(){return O0||(O0=1,id.exports=qy()),id.exports}var g=Yy(),ad={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function Zy(){if(P0)return ut;P0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function b(E){return E===null||typeof E!="object"?null:(E=y&&E[y]||E["@@iterator"],typeof E=="function"?E:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function x(E,G,ae){this.props=E,this.context=G,this.refs=M,this.updater=ae||T}x.prototype.isReactComponent={},x.prototype.setState=function(E,G){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,G,"setState")},x.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function O(){}O.prototype=x.prototype;function L(E,G,ae){this.props=E,this.context=G,this.refs=M,this.updater=ae||T}var D=L.prototype=new O;D.constructor=L,A(D,x.prototype),D.isPureReactComponent=!0;var X=Array.isArray;function k(){}var I={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function U(E,G,ae){var j=ae.ref;return{$$typeof:o,type:E,key:G,ref:j!==void 0?j:null,props:ae}}function R(E,G){return U(E.type,G,E.props)}function V(E){return typeof E=="object"&&E!==null&&E.$$typeof===o}function ce(E){var G={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ae){return G[ae]})}var fe=/\/+/g;function ye(E,G){return typeof E=="object"&&E!==null&&E.key!=null?ce(""+E.key):G.toString(36)}function xe(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(k,k):(E.status="pending",E.then(function(G){E.status==="pending"&&(E.status="fulfilled",E.value=G)},function(G){E.status==="pending"&&(E.status="rejected",E.reason=G)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function F(E,G,ae,j,te){var he=typeof E;(he==="undefined"||he==="boolean")&&(E=null);var le=!1;if(E===null)le=!0;else switch(he){case"bigint":case"string":case"number":le=!0;break;case"object":switch(E.$$typeof){case o:case e:le=!0;break;case _:return le=E._init,F(le(E._payload),G,ae,j,te)}}if(le)return te=te(E),le=j===""?"."+ye(E,0):j,X(te)?(ae="",le!=null&&(ae=le.replace(fe,"$&/")+"/"),F(te,G,ae,"",function(Le){return Le})):te!=null&&(V(te)&&(te=R(te,ae+(te.key==null||E&&E.key===te.key?"":(""+te.key).replace(fe,"$&/")+"/")+le)),G.push(te)),1;le=0;var Te=j===""?".":j+":";if(X(E))for(var Ce=0;Ce<E.length;Ce++)j=E[Ce],he=Te+ye(j,Ce),le+=F(j,G,ae,he,te);else if(Ce=b(E),typeof Ce=="function")for(E=Ce.call(E),Ce=0;!(j=E.next()).done;)j=j.value,he=Te+ye(j,Ce++),le+=F(j,G,ae,he,te);else if(he==="object"){if(typeof E.then=="function")return F(xe(E),G,ae,j,te);throw G=String(E),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return le}function ee(E,G,ae){if(E==null)return E;var j=[],te=0;return F(E,j,"","",function(he){return G.call(ae,he,te++)}),j}function J(E){if(E._status===-1){var G=E._result;G=G(),G.then(function(ae){(E._status===0||E._status===-1)&&(E._status=1,E._result=ae)},function(ae){(E._status===0||E._status===-1)&&(E._status=2,E._result=ae)}),E._status===-1&&(E._status=0,E._result=G)}if(E._status===1)return E._result.default;throw E._result}var be=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},z={map:ee,forEach:function(E,G,ae){ee(E,function(){G.apply(this,arguments)},ae)},count:function(E){var G=0;return ee(E,function(){G++}),G},toArray:function(E){return ee(E,function(G){return G})||[]},only:function(E){if(!V(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ut.Activity=v,ut.Children=z,ut.Component=x,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=L,ut.StrictMode=s,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ut.__COMPILER_RUNTIME={__proto__:null,c:function(E){return I.H.useMemoCache(E)}},ut.cache=function(E){return function(){return E.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(E,G,ae){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var j=A({},E.props),te=E.key;if(G!=null)for(he in G.key!==void 0&&(te=""+G.key),G)!q.call(G,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&G.ref===void 0||(j[he]=G[he]);var he=arguments.length-2;if(he===1)j.children=ae;else if(1<he){for(var le=Array(he),Te=0;Te<he;Te++)le[Te]=arguments[Te+2];j.children=le}return U(E.type,te,j)},ut.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:c,_context:E},E},ut.createElement=function(E,G,ae){var j,te={},he=null;if(G!=null)for(j in G.key!==void 0&&(he=""+G.key),G)q.call(G,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(te[j]=G[j]);var le=arguments.length-2;if(le===1)te.children=ae;else if(1<le){for(var Te=Array(le),Ce=0;Ce<le;Ce++)Te[Ce]=arguments[Ce+2];te.children=Te}if(E&&E.defaultProps)for(j in le=E.defaultProps,le)te[j]===void 0&&(te[j]=le[j]);return U(E,he,te)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(E){return{$$typeof:h,render:E}},ut.isValidElement=V,ut.lazy=function(E){return{$$typeof:_,_payload:{_status:-1,_result:E},_init:J}},ut.memo=function(E,G){return{$$typeof:p,type:E,compare:G===void 0?null:G}},ut.startTransition=function(E){var G=I.T,ae={};I.T=ae;try{var j=E(),te=I.S;te!==null&&te(ae,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(k,be)}catch(he){be(he)}finally{G!==null&&ae.types!==null&&(G.types=ae.types),I.T=G}},ut.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ut.use=function(E){return I.H.use(E)},ut.useActionState=function(E,G,ae){return I.H.useActionState(E,G,ae)},ut.useCallback=function(E,G){return I.H.useCallback(E,G)},ut.useContext=function(E){return I.H.useContext(E)},ut.useDebugValue=function(){},ut.useDeferredValue=function(E,G){return I.H.useDeferredValue(E,G)},ut.useEffect=function(E,G){return I.H.useEffect(E,G)},ut.useEffectEvent=function(E){return I.H.useEffectEvent(E)},ut.useId=function(){return I.H.useId()},ut.useImperativeHandle=function(E,G,ae){return I.H.useImperativeHandle(E,G,ae)},ut.useInsertionEffect=function(E,G){return I.H.useInsertionEffect(E,G)},ut.useLayoutEffect=function(E,G){return I.H.useLayoutEffect(E,G)},ut.useMemo=function(E,G){return I.H.useMemo(E,G)},ut.useOptimistic=function(E,G){return I.H.useOptimistic(E,G)},ut.useReducer=function(E,G,ae){return I.H.useReducer(E,G,ae)},ut.useRef=function(E){return I.H.useRef(E)},ut.useState=function(E){return I.H.useState(E)},ut.useSyncExternalStore=function(E,G,ae){return I.H.useSyncExternalStore(E,G,ae)},ut.useTransition=function(){return I.H.useTransition()},ut.version="19.2.8",ut}var I0;function Lh(){return I0||(I0=1,ad.exports=Zy()),ad.exports}var nt=Lh();const Ky=Yv(nt);var sd={exports:{}},Ro={},rd={exports:{}},od={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function Qy(){return z0||(z0=1,(function(o){function e(F,ee){var J=F.length;F.push(ee);e:for(;0<J;){var be=J-1>>>1,z=F[be];if(0<l(z,ee))F[be]=ee,F[J]=z,J=be;else break e}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var ee=F[0],J=F.pop();if(J!==ee){F[0]=J;e:for(var be=0,z=F.length,E=z>>>1;be<E;){var G=2*(be+1)-1,ae=F[G],j=G+1,te=F[j];if(0>l(ae,J))j<z&&0>l(te,ae)?(F[be]=te,F[j]=J,be=j):(F[be]=ae,F[G]=J,be=G);else if(j<z&&0>l(te,J))F[be]=te,F[j]=J,be=j;else break e}}return ee}function l(F,ee){var J=F.sortIndex-ee.sortIndex;return J!==0?J:F.id-ee.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,v=null,y=3,b=!1,T=!1,A=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(F){for(var ee=i(p);ee!==null;){if(ee.callback===null)s(p);else if(ee.startTime<=F)s(p),ee.sortIndex=ee.expirationTime,e(m,ee);else break;ee=i(p)}}function X(F){if(A=!1,D(F),!T)if(i(m)!==null)T=!0,k||(k=!0,ce());else{var ee=i(p);ee!==null&&xe(X,ee.startTime-F)}}var k=!1,I=-1,q=5,U=-1;function R(){return M?!0:!(o.unstable_now()-U<q)}function V(){if(M=!1,k){var F=o.unstable_now();U=F;var ee=!0;try{e:{T=!1,A&&(A=!1,O(I),I=-1),b=!0;var J=y;try{t:{for(D(F),v=i(m);v!==null&&!(v.expirationTime>F&&R());){var be=v.callback;if(typeof be=="function"){v.callback=null,y=v.priorityLevel;var z=be(v.expirationTime<=F);if(F=o.unstable_now(),typeof z=="function"){v.callback=z,D(F),ee=!0;break t}v===i(m)&&s(m),D(F)}else s(m);v=i(m)}if(v!==null)ee=!0;else{var E=i(p);E!==null&&xe(X,E.startTime-F),ee=!1}}break e}finally{v=null,y=J,b=!1}ee=void 0}}finally{ee?ce():k=!1}}}var ce;if(typeof L=="function")ce=function(){L(V)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ye=fe.port2;fe.port1.onmessage=V,ce=function(){ye.postMessage(null)}}else ce=function(){x(V,0)};function xe(F,ee){I=x(function(){F(o.unstable_now())},ee)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(F){switch(y){case 1:case 2:case 3:var ee=3;break;default:ee=y}var J=y;y=ee;try{return F()}finally{y=J}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(F,ee){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var J=y;y=F;try{return ee()}finally{y=J}},o.unstable_scheduleCallback=function(F,ee,J){var be=o.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?be+J:be):J=be,F){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=J+z,F={id:_++,callback:ee,priorityLevel:F,startTime:J,expirationTime:z,sortIndex:-1},J>be?(F.sortIndex=J,e(p,F),i(m)===null&&F===i(p)&&(A?(O(I),I=-1):A=!0,xe(X,J-be))):(F.sortIndex=z,e(m,F),T||b||(T=!0,k||(k=!0,ce()))),F},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(F){var ee=y;return function(){var J=y;y=ee;try{return F.apply(this,arguments)}finally{y=J}}}})(od)),od}var B0;function Jy(){return B0||(B0=1,rd.exports=Qy()),rd.exports}var ld={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function $y(){if(F0)return Dn;F0=1;var o=Lh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Dn.flushSync=function(m){var p=d.T,_=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=_,s.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:b}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.8",Dn}var k0;function eS(){if(k0)return ld.exports;k0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ld.exports=$y(),ld.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function tS(){if(H0)return Ro;H0=1;var o=Jy(),e=Lh(),i=eS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var S=!1,w=u.child;w;){if(w===a){S=!0,a=u,r=f;break}if(w===r){S=!0,r=u,a=f;break}w=w.sibling}if(!S){for(w=f.child;w;){if(w===a){S=!0,a=f,r=u;break}if(w===r){S=!0,r=f,a=u;break}w=w.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function ye(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case k:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case L:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:ye(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return ye(t(n))}catch{}}return null}var xe=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},be=[],z=-1;function E(t){return{current:t}}function G(t){0>z||(t.current=be[z],be[z]=null,z--)}function ae(t,n){z++,be[z]=t.current,t.current=n}var j=E(null),te=E(null),he=E(null),le=E(null);function Te(t,n){switch(ae(he,n),ae(te,t),ae(j,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?n0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=n0(n),t=i0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}G(j),ae(j,t)}function Ce(){G(j),G(te),G(he)}function Le(t){t.memoizedState!==null&&ae(le,t);var n=j.current,a=i0(n,t.type);n!==a&&(ae(te,t),ae(j,a))}function Je(t){te.current===t&&(G(j),G(te)),le.current===t&&(G(le),Eo._currentValue=J)}var et,Ye;function B(t){if(et===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);et=n&&n[1]||"",Ye=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+et+t+Ye}var Pt=!1;function tt(t,n){if(!t||Pt)return"";Pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(de){var re=de}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(de){re=de}t.call(Se.prototype)}}else{try{throw Error()}catch(de){re=de}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(de){if(de&&re&&typeof de.stack=="string")return[de.stack,re.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),S=f[0],w=f[1];if(S&&w){var H=S.split(`
`),ie=w.split(`
`);for(u=r=0;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(r===H.length||u===ie.length)for(r=H.length-1,u=ie.length-1;1<=r&&0<=u&&H[r]!==ie[u];)u--;for(;1<=r&&0<=u;r--,u--)if(H[r]!==ie[u]){if(r!==1||u!==1)do if(r--,u--,0>u||H[r]!==ie[u]){var me=`
`+H[r].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=r&&0<=u);break}}}finally{Pt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?B(a):""}function it(t,n){switch(t.tag){case 26:case 27:case 5:return B(t.type);case 16:return B("Lazy");case 13:return t.child!==n&&n!==null?B("Suspense Fallback"):B("Suspense");case 19:return B("SuspenseList");case 0:case 15:return tt(t.type,!1);case 11:return tt(t.type.render,!1);case 1:return tt(t.type,!0);case 31:return B("Activity");default:return""}}function Ge(t){try{var n="",a=null;do n+=it(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var xt=Object.prototype.hasOwnProperty,Fe=o.unstable_scheduleCallback,P=o.unstable_cancelCallback,C=o.unstable_shouldYield,se=o.unstable_requestPaint,ge=o.unstable_now,Ee=o.unstable_getCurrentPriorityLevel,_e=o.unstable_ImmediatePriority,je=o.unstable_UserBlockingPriority,Re=o.unstable_NormalPriority,ke=o.unstable_LowPriority,gt=o.unstable_IdlePriority,we=o.log,He=o.unstable_setDisableYieldValue,qe=null,We=null;function ze(t){if(typeof we=="function"&&He(t),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(qe,t)}catch{}}var at=Math.clz32?Math.clz32:K,ft=Math.log,Ft=Math.LN2;function K(t){return t>>>=0,t===0?32:31-(ft(t)/Ft|0)|0}var Ne=256,pe=262144,Me=4194304;function De(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ue(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var w=r&134217727;return w!==0?(r=w&~f,r!==0?u=De(r):(S&=w,S!==0?u=De(S):a||(a=w&~t,a!==0&&(u=De(a))))):(w=r&~f,w!==0?u=De(w):S!==0?u=De(S):a||(a=r&~t,a!==0&&(u=De(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function rt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Qt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hn(){var t=Me;return Me<<=1,(Me&62914560)===0&&(Me=4194304),t}function Rt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Mn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gi(t,n,a,r,u,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,H=t.expirationTimes,ie=t.hiddenUpdates;for(a=S&~a;0<a;){var me=31-at(a),Se=1<<me;w[me]=0,H[me]=-1;var re=ie[me];if(re!==null)for(ie[me]=null,me=0;me<re.length;me++){var de=re[me];de!==null&&(de.lane&=-536870913)}a&=~Se}r!==0&&Pr(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function Pr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-at(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Ir(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-at(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function Ri(t,n){var a=n&-n;return a=(a&42)!==0?1:Wa(a),(a&(t.suspendedLanes|n))!==0?0:a}function Wa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ws(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function zr(){var t=ee.p;return t!==0?t:(t=window.event,t===void 0?32:A0(t.type))}function qa(t,n){var a=ee.p;try{return ee.p=t,n()}finally{ee.p=a}}var vi=Math.random().toString(36).slice(2),$t="__reactFiber$"+vi,bn="__reactProps$"+vi,Bi="__reactContainer$"+vi,Br="__reactEvents$"+vi,Zc="__reactListeners$"+vi,Kc="__reactHandles$"+vi,Ko="__reactResources$"+vi,Ya="__reactMarker$"+vi;function Fr(t){delete t[$t],delete t[bn],delete t[Br],delete t[Zc],delete t[Kc]}function N(t){var n=t[$t];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Bi]||a[$t]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=u0(t);t!==null;){if(a=t[$t])return a;t=u0(t)}return n}t=a,a=t.parentNode}return null}function Q(t){if(t=t[$t]||t[Bi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function oe(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ue(t){var n=t[Ko];return n||(n=t[Ko]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(t){t[Ya]=!0}var Ae=new Set,Oe={};function Ie(t,n){Be(t,n),Be(t+"Capture",n)}function Be(t,n){for(Oe[t]=n,t=0;t<n.length;t++)Ae.add(n[t])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},Ze={};function Tt(t){return xt.call(Ze,t)?!0:xt.call(lt,t)?!1:ot.test(t)?Ze[t]=!0:(lt[t]=!0,!1)}function At(t,n,a){if(Tt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function qt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Nt(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ct(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function pn(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ct(t){if(!t._valueTracker){var n=Qe(t)?"checked":"value";t._valueTracker=pn(t,n,""+t[n])}}function Fn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Qe(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function xi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var On=/[\n"\\]/g;function xn(t){return t.replace(On,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function kt(t,n,a,r,u,f,S,w){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ct(n)):t.value!==""+ct(n)&&(t.value=""+ct(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Nn(t,S,ct(n)):a!=null?Nn(t,S,ct(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+ct(w):t.removeAttribute("name")}function Pn(t,n,a,r,u,f,S,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ct(t);return}a=a!=null?""+ct(a):"",n=n!=null?""+ct(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=w?t.checked:!!r,t.defaultChecked=!!r,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Ct(t)}function Nn(t,n,a){n==="number"&&xi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function en(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ct(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function En(t,n,a){if(n!=null&&(n=""+ct(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ct(a):""}function Cs(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(xe(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ct(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Ct(t)}function kn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var kx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $h(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||kx.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ep(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&$h(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&$h(t,f,n[f])}function Qc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(t){return Gx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Fi(){}var Jc=null;function $c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rs=null,Ns=null;function tp(t){var n=Q(t);if(n&&(t=n.stateNode)){var a=t[bn]||null;e:switch(t=n.stateNode,n.type){case"input":if(kt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[bn]||null;if(!u)throw Error(s(90));kt(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Fn(r)}break e;case"textarea":En(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&en(t,!!a.multiple,n,!1)}}}var eu=!1;function np(t,n,a){if(eu)return t(n,a);eu=!0;try{var r=t(n);return r}finally{if(eu=!1,(Rs!==null||Ns!==null)&&(Bl(),Rs&&(n=Rs,t=Ns,Ns=Rs=null,tp(n),t)))for(n=0;n<t.length;n++)tp(t[n])}}function kr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[bn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(ki)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){tu=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{tu=!1}var ha=null,nu=null,Jo=null;function ip(){if(Jo)return Jo;var t,n=nu,a=n.length,r,u="value"in ha?ha.value:ha.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(r=1;r<=S&&n[a-r]===u[f-r];r++);return Jo=u.slice(t,1<r?1-r:void 0)}function $o(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function ap(){return!1}function Hn(t){function n(a,r,u,f,S){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?el:ap,this.isPropagationStopped=ap,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Hn(Za),Gr=v({},Za,{view:0,detail:0}),Vx=Hn(Gr),iu,au,Vr,nl=v({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vr&&(Vr&&t.type==="mousemove"?(iu=t.screenX-Vr.screenX,au=t.screenY-Vr.screenY):au=iu=0,Vr=t),iu)},movementY:function(t){return"movementY"in t?t.movementY:au}}),sp=Hn(nl),jx=v({},nl,{dataTransfer:0}),Xx=Hn(jx),Wx=v({},Gr,{relatedTarget:0}),su=Hn(Wx),qx=v({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),Yx=Hn(qx),Zx=v({},Za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kx=Hn(Zx),Qx=v({},Za,{data:0}),rp=Hn(Qx),Jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=e_[t])?!!n[t]:!1}function ru(){return t_}var n_=v({},Gr,{key:function(t){if(t.key){var n=Jx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=$o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$x[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(t){return t.type==="keypress"?$o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),i_=Hn(n_),a_=v({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=Hn(a_),s_=v({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),r_=Hn(s_),o_=v({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),l_=Hn(o_),c_=v({},nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),u_=Hn(c_),f_=v({},Za,{newState:0,oldState:0}),d_=Hn(f_),h_=[9,13,27,32],ou=ki&&"CompositionEvent"in window,jr=null;ki&&"documentMode"in document&&(jr=document.documentMode);var p_=ki&&"TextEvent"in window&&!jr,lp=ki&&(!ou||jr&&8<jr&&11>=jr),cp=" ",up=!1;function fp(t,n){switch(t){case"keyup":return h_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function m_(t,n){switch(t){case"compositionend":return dp(n);case"keypress":return n.which!==32?null:(up=!0,cp);case"textInput":return t=n.data,t===cp&&up?null:t;default:return null}}function g_(t,n){if(Ds)return t==="compositionend"||!ou&&fp(t,n)?(t=ip(),Jo=nu=ha=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return lp&&n.locale!=="ko"?null:n.data;default:return null}}var v_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!v_[t.type]:n==="textarea"}function pp(t,n,a,r){Rs?Ns?Ns.push(r):Ns=[r]:Rs=r,n=Xl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Xr=null,Wr=null;function x_(t){Kg(t,0)}function il(t){var n=oe(t);if(Fn(n))return t}function mp(t,n){if(t==="change")return n}var gp=!1;if(ki){var lu;if(ki){var cu="oninput"in document;if(!cu){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),cu=typeof vp.oninput=="function"}lu=cu}else lu=!1;gp=lu&&(!document.documentMode||9<document.documentMode)}function xp(){Xr&&(Xr.detachEvent("onpropertychange",_p),Wr=Xr=null)}function _p(t){if(t.propertyName==="value"&&il(Wr)){var n=[];pp(n,Wr,t,$c(t)),np(x_,n)}}function __(t,n,a){t==="focusin"?(xp(),Xr=n,Wr=a,Xr.attachEvent("onpropertychange",_p)):t==="focusout"&&xp()}function y_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return il(Wr)}function S_(t,n){if(t==="click")return il(n)}function M_(t,n){if(t==="input"||t==="change")return il(n)}function b_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Qn=typeof Object.is=="function"?Object.is:b_;function qr(t,n){if(Qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!xt.call(n,u)||!Qn(t[u],n[u]))return!1}return!0}function yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sp(t,n){var a=yp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=yp(a)}}function Mp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Mp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function bp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=xi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=xi(t.document)}return n}function uu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var E_=ki&&"documentMode"in document&&11>=document.documentMode,Ls=null,fu=null,Yr=null,du=!1;function Ep(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;du||Ls==null||Ls!==xi(r)||(r=Ls,"selectionStart"in r&&uu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&qr(Yr,r)||(Yr=r,r=Xl(fu,"onSelect"),0<r.length&&(n=new tl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Ls)))}function Ka(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Us={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},hu={},Tp={};ki&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Qa(t){if(hu[t])return hu[t];if(!Us[t])return t;var n=Us[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Tp)return hu[t]=n[a];return t}var Ap=Qa("animationend"),wp=Qa("animationiteration"),Cp=Qa("animationstart"),T_=Qa("transitionrun"),A_=Qa("transitionstart"),w_=Qa("transitioncancel"),Rp=Qa("transitionend"),Np=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function _i(t,n){Np.set(t,n),Ie(n,[t])}var al=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ri=[],Os=0,mu=0;function sl(){for(var t=Os,n=mu=Os=0;n<t;){var a=ri[n];ri[n++]=null;var r=ri[n];ri[n++]=null;var u=ri[n];ri[n++]=null;var f=ri[n];if(ri[n++]=null,r!==null&&u!==null){var S=r.pending;S===null?u.next=u:(u.next=S.next,S.next=u),r.pending=u}f!==0&&Dp(a,u,f)}}function rl(t,n,a,r){ri[Os++]=t,ri[Os++]=n,ri[Os++]=a,ri[Os++]=r,mu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function gu(t,n,a,r){return rl(t,n,a,r),ol(t)}function Ja(t,n){return rl(t,null,null,n),ol(t)}function Dp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-at(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function ol(t){if(50<vo)throw vo=0,Af=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ps={};function C_(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,n,a,r){return new C_(t,n,a,r)}function vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hi(t,n){var a=t.alternate;return a===null?(a=Jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Lp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ll(t,n,a,r,u,f){var S=0;if(r=t,typeof t=="function")vu(t)&&(S=1);else if(typeof t=="string")S=Uy(t,a,j.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=Jn(31,a,n,u),t.elementType=U,t.lanes=f,t;case A:return $a(a.children,u,f,n);case M:S=8,u|=24;break;case x:return t=Jn(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case X:return t=Jn(13,a,n,u),t.elementType=X,t.lanes=f,t;case k:return t=Jn(19,a,n,u),t.elementType=k,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:S=10;break e;case O:S=9;break e;case D:S=11;break e;case I:S=14;break e;case q:S=16,r=null;break e}S=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Jn(S,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function $a(t,n,a,r){return t=Jn(7,t,r,n),t.lanes=a,t}function xu(t,n,a){return t=Jn(6,t,null,n),t.lanes=a,t}function Up(t){var n=Jn(18,null,null,0);return n.stateNode=t,n}function _u(t,n,a){return n=Jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Op=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=Op.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ge(n)},Op.set(t,n),n)}return{value:t,source:n,stack:Ge(n)}}var Is=[],zs=0,cl=null,Zr=0,li=[],ci=0,pa=null,Ni=1,Di="";function Gi(t,n){Is[zs++]=Zr,Is[zs++]=cl,cl=t,Zr=n}function Pp(t,n,a){li[ci++]=Ni,li[ci++]=Di,li[ci++]=pa,pa=t;var r=Ni;t=Di;var u=32-at(r)-1;r&=~(1<<u),a+=1;var f=32-at(n)+u;if(30<f){var S=u-u%5;f=(r&(1<<S)-1).toString(32),r>>=S,u-=S,Ni=1<<32-at(n)+u|a<<u|r,Di=f+t}else Ni=1<<f|a<<u|r,Di=t}function yu(t){t.return!==null&&(Gi(t,1),Pp(t,1,0))}function Su(t){for(;t===cl;)cl=Is[--zs],Is[zs]=null,Zr=Is[--zs],Is[zs]=null;for(;t===pa;)pa=li[--ci],li[ci]=null,Di=li[--ci],li[ci]=null,Ni=li[--ci],li[ci]=null}function Ip(t,n){li[ci++]=Ni,li[ci++]=Di,li[ci++]=pa,Ni=n.id,Di=n.overflow,pa=t}var Tn=null,Yt=null,wt=!1,ma=null,ui=!1,Mu=Error(s(519));function ga(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kr(oi(n,t)),Mu}function zp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[$t]=t,n[bn]=r,a){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(a=0;a<_o.length;a++)yt(_o[a],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),Pn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),Cs(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||e0(n.textContent,a)?(r.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),r.onScroll!=null&&yt("scroll",n),r.onScrollEnd!=null&&yt("scrollend",n),r.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||ga(t,!0)}function Bp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:Tn=Tn.return}}function Bs(t){if(t!==Tn)return!1;if(!wt)return Bp(t),wt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Hf(t.type,t.memoizedProps)),a=!a),a&&Yt&&ga(t),Bp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=c0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=c0(t)}else n===27?(n=Yt,Na(t.type)?(t=Wf,Wf=null,Yt=t):Yt=n):Yt=Tn?di(t.stateNode.nextSibling):null;return!0}function es(){Yt=Tn=null,wt=!1}function bu(){var t=ma;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),ma=null),t}function Kr(t){ma===null?ma=[t]:ma.push(t)}var Eu=E(null),ts=null,Vi=null;function va(t,n,a){ae(Eu,n._currentValue),n._currentValue=a}function ji(t){t._currentValue=Eu.current,G(Eu)}function Tu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Au(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;e:for(;f!==null;){var w=f;f=u;for(var H=0;H<n.length;H++)if(w.context===n[H]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),Tu(f.return,a,t),r||(S=null);break e}f=w.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Tu(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Fs(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var w=u.type;Qn(u.pendingProps.value,S.value)||(t!==null?t.push(w):t=[w])}}else if(u===le.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Eo):t=[Eo])}u=u.return}t!==null&&Au(n,t,a,r),n.flags|=262144}function ul(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ns(t){ts=t,Vi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Fp(ts,t)}function fl(t,n){return ts===null&&ns(t),Fp(t,n)}function Fp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(t===null)throw Error(s(308));Vi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Vi=Vi.next=n;return a}var R_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},N_=o.unstable_scheduleCallback,D_=o.unstable_NormalPriority,rn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wu(){return{controller:new R_,data:new Map,refCount:0}}function Qr(t){t.refCount--,t.refCount===0&&N_(D_,function(){t.controller.abort()})}var Jr=null,Cu=0,ks=0,Hs=null;function L_(t,n){if(Jr===null){var a=Jr=[];Cu=0,ks=Lf(),Hs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Cu++,n.then(kp,kp),n}function kp(){if(--Cu===0&&Jr!==null){Hs!==null&&(Hs.status="fulfilled");var t=Jr;Jr=null,ks=0,Hs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function U_(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Hp=F.S;F.S=function(t,n){Eg=ge(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&L_(t,n),Hp!==null&&Hp(t,n)};var is=E(null);function Ru(){var t=is.current;return t!==null?t:Wt.pooledCache}function dl(t,n){n===null?ae(is,is.current):ae(is,n.pool)}function Gp(){var t=Ru();return t===null?null:{parent:rn._currentValue,pool:t}}var Gs=Error(s(460)),Nu=Error(s(474)),hl=Error(s(542)),pl={then:function(){}};function Vp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function jp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Fi,Fi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Wp(t),t;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Wp(t),t}throw ss=n,Gs}}function as(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ss=a,Gs):a}}var ss=null;function Xp(){if(ss===null)throw Error(s(459));var t=ss;return ss=null,t}function Wp(t){if(t===Gs||t===hl)throw Error(s(483))}var Vs=null,$r=0;function ml(t){var n=$r;return $r+=1,Vs===null&&(Vs=[]),jp(Vs,t,n)}function eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function gl(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function qp(t){function n($,W){if(t){var ne=$.deletions;ne===null?($.deletions=[W],$.flags|=16):ne.push(W)}}function a($,W){if(!t)return null;for(;W!==null;)n($,W),W=W.sibling;return null}function r($){for(var W=new Map;$!==null;)$.key!==null?W.set($.key,$):W.set($.index,$),$=$.sibling;return W}function u($,W){return $=Hi($,W),$.index=0,$.sibling=null,$}function f($,W,ne){return $.index=ne,t?(ne=$.alternate,ne!==null?(ne=ne.index,ne<W?($.flags|=67108866,W):ne):($.flags|=67108866,W)):($.flags|=1048576,W)}function S($){return t&&$.alternate===null&&($.flags|=67108866),$}function w($,W,ne,ve){return W===null||W.tag!==6?(W=xu(ne,$.mode,ve),W.return=$,W):(W=u(W,ne),W.return=$,W)}function H($,W,ne,ve){var Ke=ne.type;return Ke===A?me($,W,ne.props.children,ve,ne.key):W!==null&&(W.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===q&&as(Ke)===W.type)?(W=u(W,ne.props),eo(W,ne),W.return=$,W):(W=ll(ne.type,ne.key,ne.props,null,$.mode,ve),eo(W,ne),W.return=$,W)}function ie($,W,ne,ve){return W===null||W.tag!==4||W.stateNode.containerInfo!==ne.containerInfo||W.stateNode.implementation!==ne.implementation?(W=_u(ne,$.mode,ve),W.return=$,W):(W=u(W,ne.children||[]),W.return=$,W)}function me($,W,ne,ve,Ke){return W===null||W.tag!==7?(W=$a(ne,$.mode,ve,Ke),W.return=$,W):(W=u(W,ne),W.return=$,W)}function Se($,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=xu(""+W,$.mode,ne),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case b:return ne=ll(W.type,W.key,W.props,null,$.mode,ne),eo(ne,W),ne.return=$,ne;case T:return W=_u(W,$.mode,ne),W.return=$,W;case q:return W=as(W),Se($,W,ne)}if(xe(W)||ce(W))return W=$a(W,$.mode,ne,null),W.return=$,W;if(typeof W.then=="function")return Se($,ml(W),ne);if(W.$$typeof===L)return Se($,fl($,W),ne);gl($,W)}return null}function re($,W,ne,ve){var Ke=W!==null?W.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return Ke!==null?null:w($,W,""+ne,ve);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case b:return ne.key===Ke?H($,W,ne,ve):null;case T:return ne.key===Ke?ie($,W,ne,ve):null;case q:return ne=as(ne),re($,W,ne,ve)}if(xe(ne)||ce(ne))return Ke!==null?null:me($,W,ne,ve,null);if(typeof ne.then=="function")return re($,W,ml(ne),ve);if(ne.$$typeof===L)return re($,W,fl($,ne),ve);gl($,ne)}return null}function de($,W,ne,ve,Ke){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return $=$.get(ne)||null,w(W,$,""+ve,Ke);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case b:return $=$.get(ve.key===null?ne:ve.key)||null,H(W,$,ve,Ke);case T:return $=$.get(ve.key===null?ne:ve.key)||null,ie(W,$,ve,Ke);case q:return ve=as(ve),de($,W,ne,ve,Ke)}if(xe(ve)||ce(ve))return $=$.get(ne)||null,me(W,$,ve,Ke,null);if(typeof ve.then=="function")return de($,W,ne,ml(ve),Ke);if(ve.$$typeof===L)return de($,W,ne,fl(W,ve),Ke);gl(W,ve)}return null}function Ve($,W,ne,ve){for(var Ke=null,Dt=null,Xe=W,ht=W=0,Mt=null;Xe!==null&&ht<ne.length;ht++){Xe.index>ht?(Mt=Xe,Xe=null):Mt=Xe.sibling;var Lt=re($,Xe,ne[ht],ve);if(Lt===null){Xe===null&&(Xe=Mt);break}t&&Xe&&Lt.alternate===null&&n($,Xe),W=f(Lt,W,ht),Dt===null?Ke=Lt:Dt.sibling=Lt,Dt=Lt,Xe=Mt}if(ht===ne.length)return a($,Xe),wt&&Gi($,ht),Ke;if(Xe===null){for(;ht<ne.length;ht++)Xe=Se($,ne[ht],ve),Xe!==null&&(W=f(Xe,W,ht),Dt===null?Ke=Xe:Dt.sibling=Xe,Dt=Xe);return wt&&Gi($,ht),Ke}for(Xe=r(Xe);ht<ne.length;ht++)Mt=de(Xe,$,ht,ne[ht],ve),Mt!==null&&(t&&Mt.alternate!==null&&Xe.delete(Mt.key===null?ht:Mt.key),W=f(Mt,W,ht),Dt===null?Ke=Mt:Dt.sibling=Mt,Dt=Mt);return t&&Xe.forEach(function(Pa){return n($,Pa)}),wt&&Gi($,ht),Ke}function $e($,W,ne,ve){if(ne==null)throw Error(s(151));for(var Ke=null,Dt=null,Xe=W,ht=W=0,Mt=null,Lt=ne.next();Xe!==null&&!Lt.done;ht++,Lt=ne.next()){Xe.index>ht?(Mt=Xe,Xe=null):Mt=Xe.sibling;var Pa=re($,Xe,Lt.value,ve);if(Pa===null){Xe===null&&(Xe=Mt);break}t&&Xe&&Pa.alternate===null&&n($,Xe),W=f(Pa,W,ht),Dt===null?Ke=Pa:Dt.sibling=Pa,Dt=Pa,Xe=Mt}if(Lt.done)return a($,Xe),wt&&Gi($,ht),Ke;if(Xe===null){for(;!Lt.done;ht++,Lt=ne.next())Lt=Se($,Lt.value,ve),Lt!==null&&(W=f(Lt,W,ht),Dt===null?Ke=Lt:Dt.sibling=Lt,Dt=Lt);return wt&&Gi($,ht),Ke}for(Xe=r(Xe);!Lt.done;ht++,Lt=ne.next())Lt=de(Xe,$,ht,Lt.value,ve),Lt!==null&&(t&&Lt.alternate!==null&&Xe.delete(Lt.key===null?ht:Lt.key),W=f(Lt,W,ht),Dt===null?Ke=Lt:Dt.sibling=Lt,Dt=Lt);return t&&Xe.forEach(function(jy){return n($,jy)}),wt&&Gi($,ht),Ke}function Vt($,W,ne,ve){if(typeof ne=="object"&&ne!==null&&ne.type===A&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case b:e:{for(var Ke=ne.key;W!==null;){if(W.key===Ke){if(Ke=ne.type,Ke===A){if(W.tag===7){a($,W.sibling),ve=u(W,ne.props.children),ve.return=$,$=ve;break e}}else if(W.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===q&&as(Ke)===W.type){a($,W.sibling),ve=u(W,ne.props),eo(ve,ne),ve.return=$,$=ve;break e}a($,W);break}else n($,W);W=W.sibling}ne.type===A?(ve=$a(ne.props.children,$.mode,ve,ne.key),ve.return=$,$=ve):(ve=ll(ne.type,ne.key,ne.props,null,$.mode,ve),eo(ve,ne),ve.return=$,$=ve)}return S($);case T:e:{for(Ke=ne.key;W!==null;){if(W.key===Ke)if(W.tag===4&&W.stateNode.containerInfo===ne.containerInfo&&W.stateNode.implementation===ne.implementation){a($,W.sibling),ve=u(W,ne.children||[]),ve.return=$,$=ve;break e}else{a($,W);break}else n($,W);W=W.sibling}ve=_u(ne,$.mode,ve),ve.return=$,$=ve}return S($);case q:return ne=as(ne),Vt($,W,ne,ve)}if(xe(ne))return Ve($,W,ne,ve);if(ce(ne)){if(Ke=ce(ne),typeof Ke!="function")throw Error(s(150));return ne=Ke.call(ne),$e($,W,ne,ve)}if(typeof ne.then=="function")return Vt($,W,ml(ne),ve);if(ne.$$typeof===L)return Vt($,W,fl($,ne),ve);gl($,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,W!==null&&W.tag===6?(a($,W.sibling),ve=u(W,ne),ve.return=$,$=ve):(a($,W),ve=xu(ne,$.mode,ve),ve.return=$,$=ve),S($)):a($,W)}return function($,W,ne,ve){try{$r=0;var Ke=Vt($,W,ne,ve);return Vs=null,Ke}catch(Xe){if(Xe===Gs||Xe===hl)throw Xe;var Dt=Jn(29,Xe,null,$.mode);return Dt.lanes=ve,Dt.return=$,Dt}finally{}}}var rs=qp(!0),Yp=qp(!1),xa=!1;function Du(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ya(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(It&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ol(t),Dp(t,null,a),n}return rl(t,r,n,a),ol(t)}function to(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ir(t,a)}}function Uu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ou=!1;function no(){if(Ou){var t=Hs;if(t!==null)throw t}}function io(t,n,a,r){Ou=!1;var u=t.updateQueue;xa=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var H=w,ie=H.next;H.next=null,S===null?f=ie:S.next=ie,S=H;var me=t.alternate;me!==null&&(me=me.updateQueue,w=me.lastBaseUpdate,w!==S&&(w===null?me.firstBaseUpdate=ie:w.next=ie,me.lastBaseUpdate=H))}if(f!==null){var Se=u.baseState;S=0,me=ie=H=null,w=f;do{var re=w.lane&-536870913,de=re!==w.lane;if(de?(St&re)===re:(r&re)===re){re!==0&&re===ks&&(Ou=!0),me!==null&&(me=me.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ve=t,$e=w;re=n;var Vt=a;switch($e.tag){case 1:if(Ve=$e.payload,typeof Ve=="function"){Se=Ve.call(Vt,Se,re);break e}Se=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=$e.payload,re=typeof Ve=="function"?Ve.call(Vt,Se,re):Ve,re==null)break e;Se=v({},Se,re);break e;case 2:xa=!0}}re=w.callback,re!==null&&(t.flags|=64,de&&(t.flags|=8192),de=u.callbacks,de===null?u.callbacks=[re]:de.push(re))}else de={lane:re,tag:w.tag,payload:w.payload,callback:w.callback,next:null},me===null?(ie=me=de,H=Se):me=me.next=de,S|=re;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;de=w,w=de.next,de.next=null,u.lastBaseUpdate=de,u.shared.pending=null}}while(!0);me===null&&(H=Se),u.baseState=H,u.firstBaseUpdate=ie,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),Ta|=S,t.lanes=S,t.memoizedState=Se}}function Zp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Kp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Zp(a[t],n)}var js=E(null),vl=E(0);function Qp(t,n){t=$i,ae(vl,t),ae(js,n),$i=t|n.baseLanes}function Pu(){ae(vl,$i),ae(js,js.current)}function Iu(){$i=vl.current,G(js),G(vl)}var $n=E(null),fi=null;function Sa(t){var n=t.alternate;ae(an,an.current&1),ae($n,t),fi===null&&(n===null||js.current!==null||n.memoizedState!==null)&&(fi=t)}function zu(t){ae(an,an.current),ae($n,t),fi===null&&(fi=t)}function Jp(t){t.tag===22?(ae(an,an.current),ae($n,t),fi===null&&(fi=t)):Ma()}function Ma(){ae(an,an.current),ae($n,$n.current)}function ei(t){G($n),fi===t&&(fi=null),G(an)}var an=E(0);function xl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jf(a)||Xf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Xi=0,dt=null,Ht=null,on=null,_l=!1,Xs=!1,os=!1,yl=0,ao=0,Ws=null,O_=0;function tn(){throw Error(s(321))}function Bu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Qn(t[a],n[a]))return!1;return!0}function Fu(t,n,a,r,u,f){return Xi=f,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?Pm:ef,os=!1,f=a(r,u),os=!1,Xs&&(f=em(n,a,r,u)),$p(t),f}function $p(t){F.H=oo;var n=Ht!==null&&Ht.next!==null;if(Xi=0,on=Ht=dt=null,_l=!1,ao=0,Ws=null,n)throw Error(s(300));t===null||ln||(t=t.dependencies,t!==null&&ul(t)&&(ln=!0))}function em(t,n,a,r){dt=t;var u=0;do{if(Xs&&(Ws=null),ao=0,Xs=!1,25<=u)throw Error(s(301));if(u+=1,on=Ht=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=Im,f=n(a,r)}while(Xs);return f}function P_(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?so(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(dt.flags|=1024),n}function ku(){var t=yl!==0;return yl=0,t}function Hu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Gu(t){if(_l){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}_l=!1}Xi=0,on=Ht=dt=null,Xs=!1,ao=yl=0,Ws=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?dt.memoizedState=on=t:on=on.next=t,on}function sn(){if(Ht===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=on===null?dt.memoizedState:on.next;if(n!==null)on=n,Ht=t;else{if(t===null)throw dt.alternate===null?Error(s(467)):Error(s(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},on===null?dt.memoizedState=on=t:on=on.next=t}return on}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(t){var n=ao;return ao+=1,Ws===null&&(Ws=[]),t=jp(Ws,t,n),n=dt,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?Pm:ef),t}function Ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return so(t);if(t.$$typeof===L)return An(t)}throw Error(s(438,String(t)))}function Vu(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=dt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=R;return n.index++,a}function Wi(t,n){return typeof n=="function"?n(t):n}function bl(t){var n=sn();return ju(n,Ht,t)}function ju(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var w=S=null,H=null,ie=n,me=!1;do{var Se=ie.lane&-536870913;if(Se!==ie.lane?(St&Se)===Se:(Xi&Se)===Se){var re=ie.revertLane;if(re===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),Se===ks&&(me=!0);else if((Xi&re)===re){ie=ie.next,re===ks&&(me=!0);continue}else Se={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(w=H=Se,S=f):H=H.next=Se,dt.lanes|=re,Ta|=re;Se=ie.action,os&&a(f,Se),f=ie.hasEagerState?ie.eagerState:a(f,Se)}else re={lane:Se,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(w=H=re,S=f):H=H.next=re,dt.lanes|=Se,Ta|=Se;ie=ie.next}while(ie!==null&&ie!==n);if(H===null?S=f:H.next=w,!Qn(f,t.memoizedState)&&(ln=!0,me&&(a=Hs,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=H,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Xu(t){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=t(f,S.action),S=S.next;while(S!==u);Qn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function tm(t,n,a){var r=dt,u=sn(),f=wt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Qn((Ht||u).memoizedState,a);if(S&&(u.memoizedState=a,ln=!0),u=u.queue,Yu(am.bind(null,r,u,t),[t]),u.getSnapshot!==n||S||on!==null&&on.memoizedState.tag&1){if(r.flags|=2048,qs(9,{destroy:void 0},im.bind(null,r,u,a,n),null),Wt===null)throw Error(s(349));f||(Xi&127)!==0||nm(r,n,a)}return a}function nm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Sl(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function im(t,n,a,r){n.value=a,n.getSnapshot=r,sm(n)&&rm(t)}function am(t,n,a){return a(function(){sm(n)&&rm(t)})}function sm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Qn(t,a)}catch{return!0}}function rm(t){var n=Ja(t,2);n!==null&&Wn(n,t,2)}function Wu(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),os){ze(!0);try{a()}finally{ze(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:t},n}function om(t,n,a,r){return t.baseState=a,ju(t,Ht,typeof r=="function"?r:Wi)}function I_(t,n,a,r,u){if(Al(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};F.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,lm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function lm(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=F.T,S={};F.T=S;try{var w=a(u,r),H=F.S;H!==null&&H(S,w),cm(t,n,w)}catch(ie){qu(t,n,ie)}finally{f!==null&&S.types!==null&&(f.types=S.types),F.T=f}}else try{f=a(u,r),cm(t,n,f)}catch(ie){qu(t,n,ie)}}function cm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){um(t,n,r)},function(r){return qu(t,n,r)}):um(t,n,a)}function um(t,n,a){n.status="fulfilled",n.value=a,fm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,lm(t,a)))}function qu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,fm(n),n=n.next;while(n!==r)}t.action=null}function fm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function dm(t,n){return n}function hm(t,n){if(wt){var a=Wt.formState;if(a!==null){e:{var r=dt;if(wt){if(Yt){t:{for(var u=Yt,f=ui;u.nodeType!==8;){if(!f){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Yt=di(u.nextSibling),r=u.data==="F!";break e}}ga(r)}r=!1}r&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dm,lastRenderedState:n},a.queue=r,a=Lm.bind(null,dt,r),r.dispatch=a,r=Wu(!1),f=$u.bind(null,dt,!1,r.queue),r=In(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=I_.bind(null,dt,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function pm(t){var n=sn();return mm(n,Ht,t)}function mm(t,n,a){if(n=ju(t,n,dm)[0],t=bl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=so(n)}catch(S){throw S===Gs?hl:S}else r=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,qs(9,{destroy:void 0},z_.bind(null,u,a),null)),[r,f,t]}function z_(t,n){t.action=n}function gm(t){var n=sn(),a=Ht;if(a!==null)return mm(n,a,t);sn(),n=n.memoizedState,a=sn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function qs(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Sl(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function vm(){return sn().memoizedState}function El(t,n,a,r){var u=In();dt.flags|=t,u.memoizedState=qs(1|n,{destroy:void 0},a,r===void 0?null:r)}function Tl(t,n,a,r){var u=sn();r=r===void 0?null:r;var f=u.memoizedState.inst;Ht!==null&&r!==null&&Bu(r,Ht.memoizedState.deps)?u.memoizedState=qs(n,f,a,r):(dt.flags|=t,u.memoizedState=qs(1|n,f,a,r))}function xm(t,n){El(8390656,8,t,n)}function Yu(t,n){Tl(2048,8,t,n)}function B_(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Sl(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function _m(t){var n=sn().memoizedState;return B_({ref:n,nextImpl:t}),function(){if((It&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function ym(t,n){return Tl(4,2,t,n)}function Sm(t,n){return Tl(4,4,t,n)}function Mm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function bm(t,n,a){a=a!=null?a.concat([t]):null,Tl(4,4,Mm.bind(null,n,t),a)}function Zu(){}function Em(t,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Bu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Tm(t,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Bu(n,r[1]))return r[0];if(r=t(),os){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[r,n],r}function Ku(t,n,a){return a===void 0||(Xi&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Ag(),dt.lanes|=t,Ta|=t,a)}function Am(t,n,a,r){return Qn(a,n)?a:js.current!==null?(t=Ku(t,a,r),Qn(t,n)||(ln=!0),t):(Xi&42)===0||(Xi&1073741824)!==0&&(St&261930)===0?(ln=!0,t.memoizedState=a):(t=Ag(),dt.lanes|=t,Ta|=t,n)}function wm(t,n,a,r,u){var f=ee.p;ee.p=f!==0&&8>f?f:8;var S=F.T,w={};F.T=w,$u(t,!1,n,a);try{var H=u(),ie=F.S;if(ie!==null&&ie(w,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var me=U_(H,r);ro(t,n,me,ii(t))}else ro(t,n,r,ii(t))}catch(Se){ro(t,n,{then:function(){},status:"rejected",reason:Se},ii())}finally{ee.p=f,S!==null&&w.types!==null&&(S.types=w.types),F.T=S}}function F_(){}function Qu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Cm(t).queue;wm(t,u,n,J,a===null?F_:function(){return Rm(t),a(r)})}function Cm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Rm(t){var n=Cm(t);n.next===null&&(n=t.alternate.memoizedState),ro(t,n.next.queue,{},ii())}function Ju(){return An(Eo)}function Nm(){return sn().memoizedState}function Dm(){return sn().memoizedState}function k_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();t=_a(a);var r=ya(n,t,a);r!==null&&(Wn(r,n,a),to(r,n,a)),n={cache:wu()},t.payload=n;return}n=n.return}}function H_(t,n,a){var r=ii();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Al(t)?Um(n,a):(a=gu(t,n,a,r),a!==null&&(Wn(a,t,r),Om(a,n,r)))}function Lm(t,n,a){var r=ii();ro(t,n,a,r)}function ro(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(t))Um(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,w=f(S,a);if(u.hasEagerState=!0,u.eagerState=w,Qn(w,S))return rl(t,n,u,0),Wt===null&&sl(),!1}catch{}finally{}if(a=gu(t,n,u,r),a!==null)return Wn(a,t,r),Om(a,n,r),!0}return!1}function $u(t,n,a,r){if(r={lane:2,revertLane:Lf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Al(t)){if(n)throw Error(s(479))}else n=gu(t,a,r,2),n!==null&&Wn(n,t,2)}function Al(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function Um(t,n){Xs=_l=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Om(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ir(t,a)}}var oo={readContext:An,use:Ml,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};oo.useEffectEvent=tn;var Pm={readContext:An,use:Ml,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:xm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,El(4194308,4,Mm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return El(4194308,4,t,n)},useInsertionEffect:function(t,n){El(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var r=t();if(os){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=In();if(a!==void 0){var u=a(n);if(os){ze(!0);try{a(n)}finally{ze(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=H_.bind(null,dt,t),[r.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=Wu(t);var n=t.queue,a=Lm.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Zu,useDeferredValue:function(t,n){var a=In();return Ku(a,t,n)},useTransition:function(){var t=Wu(!1);return t=wm.bind(null,dt,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=dt,u=In();if(wt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Wt===null)throw Error(s(349));(St&127)!==0||nm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,xm(am.bind(null,r,f,t),[t]),r.flags|=2048,qs(9,{destroy:void 0},im.bind(null,r,f,a,n),null),a},useId:function(){var t=In(),n=Wt.identifierPrefix;if(wt){var a=Di,r=Ni;a=(r&~(1<<32-at(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=O_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ju,useFormState:hm,useActionState:hm,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=$u.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Vu,useCacheRefresh:function(){return In().memoizedState=k_.bind(null,dt)},useEffectEvent:function(t){var n=In(),a={impl:t};return n.memoizedState=a,function(){if((It&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ef={readContext:An,use:Ml,useCallback:Em,useContext:An,useEffect:Yu,useImperativeHandle:bm,useInsertionEffect:ym,useLayoutEffect:Sm,useMemo:Tm,useReducer:bl,useRef:vm,useState:function(){return bl(Wi)},useDebugValue:Zu,useDeferredValue:function(t,n){var a=sn();return Am(a,Ht.memoizedState,t,n)},useTransition:function(){var t=bl(Wi)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:tm,useId:Nm,useHostTransitionStatus:Ju,useFormState:pm,useActionState:pm,useOptimistic:function(t,n){var a=sn();return om(a,Ht,t,n)},useMemoCache:Vu,useCacheRefresh:Dm};ef.useEffectEvent=_m;var Im={readContext:An,use:Ml,useCallback:Em,useContext:An,useEffect:Yu,useImperativeHandle:bm,useInsertionEffect:ym,useLayoutEffect:Sm,useMemo:Tm,useReducer:Xu,useRef:vm,useState:function(){return Xu(Wi)},useDebugValue:Zu,useDeferredValue:function(t,n){var a=sn();return Ht===null?Ku(a,t,n):Am(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Xu(Wi)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:tm,useId:Nm,useHostTransitionStatus:Ju,useFormState:gm,useActionState:gm,useOptimistic:function(t,n){var a=sn();return Ht!==null?om(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:Dm};Im.useEffectEvent=_m;function tf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var nf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ii(),u=_a(r);u.payload=n,a!=null&&(u.callback=a),n=ya(t,u,r),n!==null&&(Wn(n,t,r),to(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ii(),u=_a(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ya(t,u,r),n!==null&&(Wn(n,t,r),to(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ii(),r=_a(a);r.tag=2,n!=null&&(r.callback=n),n=ya(t,r,a),n!==null&&(Wn(n,t,a),to(n,t,a))}};function zm(t,n,a,r,u,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,S):n.prototype&&n.prototype.isPureReactComponent?!qr(a,r)||!qr(u,f):!0}function Bm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&nf.enqueueReplaceState(n,n.state,null)}function ls(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Fm(t){al(t)}function km(t){console.error(t)}function Hm(t){al(t)}function wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Gm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function af(t,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(t,n)},a}function Vm(t){return t=_a(t),t.tag=3,t}function jm(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){Gm(n,a,r)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Gm(n,a,r),typeof u!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})})}function G_(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Fs(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?Fl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Rf(t,r,u)),!1;case 22:return a.flags|=65536,r===pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Rf(t,r,u)),!1}throw Error(s(435,a.tag))}return Rf(t,r,u),Fl(),!1}if(wt)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Mu&&(t=Error(s(422),{cause:r}),Kr(oi(t,a)))):(r!==Mu&&(n=Error(s(423),{cause:r}),Kr(oi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=oi(r,a),u=af(t.stateNode,r,u),Uu(t,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:r});if(f=oi(f,a),go===null?go=[f]:go.push(f),nn!==4&&(nn=2),n===null)return!0;r=oi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=af(a.stateNode,r,t),Uu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Vm(u),jm(u,t,a,r),Uu(a,u),!1}a=a.return}while(a!==null);return!1}var sf=Error(s(461)),ln=!1;function wn(t,n,a,r){n.child=t===null?Yp(n,null,a,r):rs(n,t.child,a,r)}function Xm(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var S={};for(var w in r)w!=="ref"&&(S[w]=r[w])}else S=r;return ns(n),r=Fu(t,n,a,S,f,u),w=ku(),t!==null&&!ln?(Hu(t,n,u),qi(t,n,u)):(wt&&w&&yu(n),n.flags|=1,wn(t,n,r,u),n.child)}function Wm(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!vu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,qm(t,n,f,r,u)):(t=ll(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!hf(t,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:qr,a(S,r)&&t.ref===n.ref)return qi(t,n,u)}return n.flags|=1,t=Hi(f,r),t.ref=n.ref,t.return=n,n.child=t}function qm(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(qr(f,r)&&t.ref===n.ref)if(ln=!1,n.pendingProps=r=f,hf(t,u))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,qi(t,n,u)}return rf(t,n,a,r,u)}function Ym(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Zm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&dl(n,f!==null?f.cachePool:null),f!==null?Qp(n,f):Pu(),Jp(n);else return r=n.lanes=536870912,Zm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(dl(n,f.cachePool),Qp(n,f),Ma(),n.memoizedState=null):(t!==null&&dl(n,null),Pu(),Ma());return wn(t,n,u,a),n.child}function lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Zm(t,n,a,r,u){var f=Ru();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&dl(n,null),Pu(),Jp(n),t!==null&&Fs(t,n,r,!0),n.childLanes=u,null}function Cl(t,n){return n=Nl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Km(t,n,a){return rs(n,t.child,null,a),t=Cl(n,n.pendingProps),t.flags|=2,ei(n),n.memoizedState=null,t}function V_(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(wt){if(r.mode==="hidden")return t=Cl(n,r),n.lanes=536870912,lo(null,t);if(zu(n),(t=Yt)?(t=l0(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:pa!==null?{id:Ni,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=Up(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw ga(n);return n.lanes=536870912,null}return Cl(n,r)}var f=t.memoizedState;if(f!==null){var S=f.dehydrated;if(zu(n),u)if(n.flags&256)n.flags&=-257,n=Km(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(ln||Fs(t,n,a,!1),u=(a&t.childLanes)!==0,ln||u){if(r=Wt,r!==null&&(S=Ri(r,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,Ja(t,S),Wn(r,t,S),sf;Fl(),n=Km(t,n,a)}else t=f.treeContext,Yt=di(S.nextSibling),Tn=n,wt=!0,ma=null,ui=!1,t!==null&&Ip(n,t),n=Cl(n,r),n.flags|=4096;return n}return t=Hi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Rl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function rf(t,n,a,r,u){return ns(n),a=Fu(t,n,a,r,void 0,u),r=ku(),t!==null&&!ln?(Hu(t,n,u),qi(t,n,u)):(wt&&r&&yu(n),n.flags|=1,wn(t,n,a,u),n.child)}function Qm(t,n,a,r,u,f){return ns(n),n.updateQueue=null,a=em(n,r,a,u),$p(t),r=ku(),t!==null&&!ln?(Hu(t,n,f),qi(t,n,f)):(wt&&r&&yu(n),n.flags|=1,wn(t,n,a,f),n.child)}function Jm(t,n,a,r,u){if(ns(n),n.stateNode===null){var f=Ps,S=a.contextType;typeof S=="object"&&S!==null&&(f=An(S)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=nf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Du(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?An(S):Ps,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(tf(n,a,S,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&nf.enqueueReplaceState(f,f.state,null),io(n,r,f,u),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var w=n.memoizedProps,H=ls(a,w);f.props=H;var ie=f.context,me=a.contextType;S=Ps,typeof me=="object"&&me!==null&&(S=An(me));var Se=a.getDerivedStateFromProps;me=typeof Se=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||ie!==S)&&Bm(n,f,r,S),xa=!1;var re=n.memoizedState;f.state=re,io(n,r,f,u),no(),ie=n.memoizedState,w||re!==ie||xa?(typeof Se=="function"&&(tf(n,a,Se,r),ie=n.memoizedState),(H=xa||zm(n,a,H,r,re,ie,S))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ie),f.props=r,f.state=ie,f.context=S,r=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Lu(t,n),S=n.memoizedProps,me=ls(a,S),f.props=me,Se=n.pendingProps,re=f.context,ie=a.contextType,H=Ps,typeof ie=="object"&&ie!==null&&(H=An(ie)),w=a.getDerivedStateFromProps,(ie=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==Se||re!==H)&&Bm(n,f,r,H),xa=!1,re=n.memoizedState,f.state=re,io(n,r,f,u),no();var de=n.memoizedState;S!==Se||re!==de||xa||t!==null&&t.dependencies!==null&&ul(t.dependencies)?(typeof w=="function"&&(tf(n,a,w,r),de=n.memoizedState),(me=xa||zm(n,a,me,r,re,de,H)||t!==null&&t.dependencies!==null&&ul(t.dependencies))?(ie||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,de,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,de,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=de),f.props=r,f.state=de,f.context=H,r=me):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Rl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=rs(n,t.child,null,u),n.child=rs(n,null,a,u)):wn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=qi(t,n,u),t}function $m(t,n,a,r){return es(),n.flags|=256,wn(t,n,a,r),n.child}var of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lf(t){return{baseLanes:t,cachePool:Gp()}}function cf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ni),t}function eg(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(u?Sa(n):Ma(),(t=Yt)?(t=l0(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:pa!==null?{id:Ni,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=Up(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw ga(n);return Xf(t)?n.lanes=32:n.lanes=536870912,null}var w=r.children;return r=r.fallback,u?(Ma(),u=n.mode,w=Nl({mode:"hidden",children:w},u),r=$a(r,u,a,null),w.return=n,r.return=n,w.sibling=r,n.child=w,r=n.child,r.memoizedState=lf(a),r.childLanes=cf(t,S,a),n.memoizedState=of,lo(null,r)):(Sa(n),uf(n,w))}var H=t.memoizedState;if(H!==null&&(w=H.dehydrated,w!==null)){if(f)n.flags&256?(Sa(n),n.flags&=-257,n=ff(t,n,a)):n.memoizedState!==null?(Ma(),n.child=t.child,n.flags|=128,n=null):(Ma(),w=r.fallback,u=n.mode,r=Nl({mode:"visible",children:r.children},u),w=$a(w,u,a,null),w.flags|=2,r.return=n,w.return=n,r.sibling=w,n.child=r,rs(n,t.child,null,a),r=n.child,r.memoizedState=lf(a),r.childLanes=cf(t,S,a),n.memoizedState=of,n=lo(null,r));else if(Sa(n),Xf(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var ie=S.dgst;S=ie,r=Error(s(419)),r.stack="",r.digest=S,Kr({value:r,source:null,stack:null}),n=ff(t,n,a)}else if(ln||Fs(t,n,a,!1),S=(a&t.childLanes)!==0,ln||S){if(S=Wt,S!==null&&(r=Ri(S,a),r!==0&&r!==H.retryLane))throw H.retryLane=r,Ja(t,r),Wn(S,t,r),sf;jf(w)||Fl(),n=ff(t,n,a)}else jf(w)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Yt=di(w.nextSibling),Tn=n,wt=!0,ma=null,ui=!1,t!==null&&Ip(n,t),n=uf(n,r.children),n.flags|=4096);return n}return u?(Ma(),w=r.fallback,u=n.mode,H=t.child,ie=H.sibling,r=Hi(H,{mode:"hidden",children:r.children}),r.subtreeFlags=H.subtreeFlags&65011712,ie!==null?w=Hi(ie,w):(w=$a(w,u,a,null),w.flags|=2),w.return=n,r.return=n,r.sibling=w,n.child=r,lo(null,r),r=n.child,w=t.child.memoizedState,w===null?w=lf(a):(u=w.cachePool,u!==null?(H=rn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Gp(),w={baseLanes:w.baseLanes|a,cachePool:u}),r.memoizedState=w,r.childLanes=cf(t,S,a),n.memoizedState=of,lo(t.child,r)):(Sa(n),a=t.child,t=a.sibling,a=Hi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function uf(t,n){return n=Nl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Nl(t,n){return t=Jn(22,t,null,n),t.lanes=0,t}function ff(t,n,a){return rs(n,t.child,null,a),t=uf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function tg(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Tu(t.return,n,a)}function df(t,n,a,r,u,f){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=r,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function ng(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var S=an.current,w=(S&2)!==0;if(w?(S=S&1|2,n.flags|=128):S&=1,ae(an,S),wn(t,n,r,a),r=wt?Zr:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tg(t,a,n);else if(t.tag===19)tg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&xl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),df(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&xl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}df(n,!0,a,null,f,r);break;case"together":df(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function qi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ta|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Fs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Hi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Hi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function hf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ul(t)))}function j_(t,n,a){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),va(n,rn,t.memoizedState.cache),es();break;case 27:case 5:Le(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?eg(t,n,a):(Sa(n),t=qi(t,n,a),t!==null?t.sibling:null);Sa(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Fs(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return ng(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ae(an,an.current),r)break;return null;case 22:return n.lanes=0,Ym(t,n,a,n.pendingProps);case 24:va(n,rn,t.memoizedState.cache)}return qi(t,n,a)}function ig(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!hf(t,a)&&(n.flags&128)===0)return ln=!1,j_(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,wt&&(n.flags&1048576)!==0&&Pp(n,Zr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(t=as(n.elementType),n.type=t,typeof t=="function")vu(t)?(r=ls(t,r),n.tag=1,n=Jm(null,n,t,r,a)):(n.tag=0,n=rf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=Xm(null,n,t,r,a);break e}else if(u===I){n.tag=14,n=Wm(null,n,t,r,a);break e}}throw n=ye(t)||t,Error(s(306,n,""))}}return n;case 0:return rf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=ls(r,n.pendingProps),Jm(t,n,r,u,a);case 3:e:{if(Te(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Lu(t,n),io(n,r,null,a);var S=n.memoizedState;if(r=S.cache,va(n,rn,r),r!==f.cache&&Au(n,[rn],a,!0),no(),r=S.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=$m(t,n,r,a);break e}else if(r!==u){u=oi(Error(s(424)),n),Kr(u),n=$m(t,n,r,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Yt=di(t.firstChild),Tn=n,wt=!0,ma=null,ui=!0,a=Yp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(es(),r===u){n=qi(t,n,a);break e}wn(t,n,r,a)}n=n.child}return n;case 26:return Rl(t,n),t===null?(a=p0(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,t=n.pendingProps,r=Wl(he.current).createElement(a),r[$t]=n,r[bn]=t,Cn(r,a,t),Y(r),n.stateNode=r):n.memoizedState=p0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Le(n),t===null&&wt&&(r=n.stateNode=f0(n.type,n.pendingProps,he.current),Tn=n,ui=!0,u=Yt,Na(n.type)?(Wf=u,Yt=di(r.firstChild)):Yt=u),wn(t,n,n.pendingProps.children,a),Rl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((u=r=Yt)&&(r=yy(r,n.type,n.pendingProps,ui),r!==null?(n.stateNode=r,Tn=n,Yt=di(r.firstChild),ui=!1,u=!0):u=!1),u||ga(n)),Le(n),u=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,r=f.children,Hf(u,f)?r=null:S!==null&&Hf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Fu(t,n,P_,null,null,a),Eo._currentValue=u),Rl(t,n),wn(t,n,r,a),n.child;case 6:return t===null&&wt&&((t=a=Yt)&&(a=Sy(a,n.pendingProps,ui),a!==null?(n.stateNode=a,Tn=n,Yt=null,t=!0):t=!1),t||ga(n)),null;case 13:return eg(t,n,a);case 4:return Te(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=rs(n,null,r,a):wn(t,n,r,a),n.child;case 11:return Xm(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,va(n,n.type,r.value),wn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,ns(n),u=An(u),r=r(u),n.flags|=1,wn(t,n,r,a),n.child;case 14:return Wm(t,n,n.type,n.pendingProps,a);case 15:return qm(t,n,n.type,n.pendingProps,a);case 19:return ng(t,n,a);case 31:return V_(t,n,a);case 22:return Ym(t,n,a,n.pendingProps);case 24:return ns(n),r=An(rn),t===null?(u=Ru(),u===null&&(u=Wt,f=wu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Du(n),va(n,rn,u)):((t.lanes&a)!==0&&(Lu(t,n),io(n,null,null,a),no()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),va(n,rn,r)):(r=f.cache,va(n,rn,r),r!==u.cache&&Au(n,[rn],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Yi(t){t.flags|=4}function pf(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Ng())t.flags|=8192;else throw ss=pl,Nu}else t.flags&=-16777217}function ag(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!_0(n))if(Ng())t.flags|=8192;else throw ss=pl,Nu}function Dl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?hn():536870912,t.lanes|=n,Qs|=n)}function co(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function X_(t,n,a){var r=n.pendingProps;switch(Su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ji(rn),Ce(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Bs(n)?Yi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,bu())),Zt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Yi(n),f!==null?(Zt(n),ag(n,f)):(Zt(n),pf(n,u,null,r,a))):f?f!==t.memoizedState?(Yi(n),Zt(n),ag(n,f)):(Zt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Yi(n),Zt(n),pf(n,u,t,r,a)),null;case 27:if(Je(n),a=he.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}t=j.current,Bs(n)?zp(n):(t=f0(u,r,a),n.stateNode=t,Yi(n))}return Zt(n),null;case 5:if(Je(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}if(f=j.current,Bs(n))zp(n);else{var S=Wl(he.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?S.createElement("select",{is:r.is}):S.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?S.createElement(u,{is:r.is}):S.createElement(u)}}f[$t]=n,f[bn]=r;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;e:switch(Cn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Yi(n)}}return Zt(n),pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Yi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=he.current,Bs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[$t]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||e0(t.nodeValue,a)),t||ga(n,!0)}else t=Wl(t).createTextNode(r),t[$t]=n,n.stateNode=t}return Zt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Bs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[$t]=n}else es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),t=!1}else a=bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Zt(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Bs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[$t]=n}else es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),u=!1}else u=bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Dl(n,n.updateQueue),Zt(n),null);case 4:return Ce(),t===null&&If(n.stateNode.containerInfo),Zt(n),null;case 10:return ji(n.type),Zt(n),null;case 19:if(G(an),r=n.memoizedState,r===null)return Zt(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)co(r,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=xl(t),f!==null){for(n.flags|=128,co(r,!1),t=f.updateQueue,n.updateQueue=t,Dl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Lp(a,t),a=a.sibling;return ae(an,an.current&1|2),wt&&Gi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&ge()>Il&&(n.flags|=128,u=!0,co(r,!1),n.lanes=4194304)}else{if(!u)if(t=xl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Dl(n,t),co(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!wt)return Zt(n),null}else 2*ge()-r.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,u=!0,co(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=ge(),t.sibling=null,a=an.current,ae(an,u?a&1|2:a&1),wt&&Gi(n,r.treeForkCount),t):(Zt(n),null);case 22:case 23:return ei(n),Iu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&Dl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&G(is),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ji(rn),Zt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function W_(t,n){switch(Su(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ji(rn),Ce(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(s(340));es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ei(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return G(an),null;case 4:return Ce(),null;case 10:return ji(n.type),null;case 22:case 23:return ei(n),Iu(),t!==null&&G(is),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ji(rn),null;case 25:return null;default:return null}}function sg(t,n){switch(Su(n),n.tag){case 3:ji(rn),Ce();break;case 26:case 27:case 5:Je(n);break;case 4:Ce();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:G(an);break;case 10:ji(n.type);break;case 22:case 23:ei(n),Iu(),t!==null&&G(is);break;case 24:ji(rn)}}function uo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,S=a.inst;r=f(),S.destroy=r}a=a.next}while(a!==u)}}catch(w){Bt(n,n.return,w)}}function ba(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var S=r.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,u=n;var H=a,ie=w;try{ie()}catch(me){Bt(u,H,me)}}}r=r.next}while(r!==f)}}catch(me){Bt(n,n.return,me)}}function rg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Kp(n,a)}catch(r){Bt(t,t.return,r)}}}function og(t,n,a){a.props=ls(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Bt(t,n,r)}}function fo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){Bt(t,n,u)}}function Li(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Bt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Bt(t,n,u)}else a.current=null}function lg(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Bt(t,t.return,u)}}function mf(t,n,a){try{var r=t.stateNode;py(r,t.type,a,n),r[bn]=n}catch(u){Bt(t,t.return,u)}}function cg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Na(t.type)||t.tag===4}function gf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Na(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fi));else if(r!==4&&(r===27&&Na(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(vf(t,n,a),t=t.sibling;t!==null;)vf(t,n,a),t=t.sibling}function Ll(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Na(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ll(t,n,a),t=t.sibling;t!==null;)Ll(t,n,a),t=t.sibling}function ug(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,r,a),n[$t]=t,n[bn]=a}catch(f){Bt(t,t.return,f)}}var Zi=!1,cn=!1,xf=!1,fg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function q_(t,n){if(t=t.containerInfo,Ff=$l,t=bp(t),uu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var S=0,w=-1,H=-1,ie=0,me=0,Se=t,re=null;t:for(;;){for(var de;Se!==a||u!==0&&Se.nodeType!==3||(w=S+u),Se!==f||r!==0&&Se.nodeType!==3||(H=S+r),Se.nodeType===3&&(S+=Se.nodeValue.length),(de=Se.firstChild)!==null;)re=Se,Se=de;for(;;){if(Se===t)break t;if(re===a&&++ie===u&&(w=S),re===f&&++me===r&&(H=S),(de=Se.nextSibling)!==null)break;Se=re,re=Se.parentNode}Se=de}a=w===-1||H===-1?null:{start:w,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(kf={focusedElem:t,selectionRange:a},$l=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ve=ls(a.type,u);t=r.getSnapshotBeforeUpdate(Ve,f),r.__reactInternalSnapshotBeforeUpdate=t}catch($e){Bt(a,a.return,$e)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Vf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Vf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function dg(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(t,a),r&4&&uo(5,a);break;case 1:if(Qi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Bt(a,a.return,S)}else{var u=ls(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Bt(a,a.return,S)}}r&64&&rg(a),r&512&&fo(a,a.return);break;case 3:if(Qi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Kp(t,n)}catch(S){Bt(a,a.return,S)}}break;case 27:n===null&&r&4&&ug(a);case 26:case 5:Qi(t,a),n===null&&r&4&&lg(a),r&512&&fo(a,a.return);break;case 12:Qi(t,a);break;case 31:Qi(t,a),r&4&&mg(t,a);break;case 13:Qi(t,a),r&4&&gg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ny.bind(null,a),My(t,a))));break;case 22:if(r=a.memoizedState!==null||Zi,!r){n=n!==null&&n.memoizedState!==null||cn,u=Zi;var f=cn;Zi=r,(cn=n)&&!f?Ji(t,a,(a.subtreeFlags&8772)!==0):Qi(t,a),Zi=u,cn=f}break;case 30:break;default:Qi(t,a)}}function hg(t){var n=t.alternate;n!==null&&(t.alternate=null,hg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Fr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Gn=!1;function Ki(t,n,a){for(a=a.child;a!==null;)pg(t,n,a),a=a.sibling}function pg(t,n,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(qe,a)}catch{}switch(a.tag){case 26:cn||Li(a,n),Ki(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Li(a,n);var r=Jt,u=Gn;Na(a.type)&&(Jt=a.stateNode,Gn=!1),Ki(t,n,a),So(a.stateNode),Jt=r,Gn=u;break;case 5:cn||Li(a,n);case 6:if(r=Jt,u=Gn,Jt=null,Ki(t,n,a),Jt=r,Gn=u,Jt!==null)if(Gn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:Jt!==null&&(Gn?(t=Jt,r0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),sr(t)):r0(Jt,a.stateNode));break;case 4:r=Jt,u=Gn,Jt=a.stateNode.containerInfo,Gn=!0,Ki(t,n,a),Jt=r,Gn=u;break;case 0:case 11:case 14:case 15:ba(2,a,n),cn||ba(4,a,n),Ki(t,n,a);break;case 1:cn||(Li(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&og(a,n,r)),Ki(t,n,a);break;case 21:Ki(t,n,a);break;case 22:cn=(r=cn)||a.memoizedState!==null,Ki(t,n,a),cn=r;break;default:Ki(t,n,a)}}function mg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{sr(t)}catch(a){Bt(n,n.return,a)}}}function gg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{sr(t)}catch(a){Bt(n,n.return,a)}}function Y_(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new fg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new fg),n;default:throw Error(s(435,t.tag))}}function Ul(t,n){var a=Y_(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=iy.bind(null,t,r);r.then(u,u)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,S=n,w=S;e:for(;w!==null;){switch(w.tag){case 27:if(Na(w.type)){Jt=w.stateNode,Gn=!1;break e}break;case 5:Jt=w.stateNode,Gn=!1;break e;case 3:case 4:Jt=w.stateNode.containerInfo,Gn=!0;break e}w=w.return}if(Jt===null)throw Error(s(160));pg(f,S,u),Jt=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)vg(n,t),n=n.sibling}var yi=null;function vg(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),jn(t),r&4&&(ba(3,t,t.return),uo(3,t),ba(5,t,t.return));break;case 1:Vn(n,t),jn(t),r&512&&(cn||a===null||Li(a,a.return)),r&64&&Zi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=yi;if(Vn(n,t),jn(t),r&512&&(cn||a===null||Li(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){e:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ya]||f[$t]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,r,a),f[$t]=t,Y(f),r=f;break e;case"link":var S=v0("link","href",u).get(r+(a.href||""));if(S){for(var w=0;w<S.length;w++)if(f=S[w],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(w,1);break t}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;case"meta":if(S=v0("meta","content",u).get(r+(a.content||""))){for(w=0;w<S.length;w++)if(f=S[w],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(w,1);break t}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[$t]=t,Y(f),r=f}t.stateNode=r}else x0(u,t.type,t.stateNode);else t.stateNode=g0(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?x0(u,t.type,t.stateNode):g0(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&mf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),jn(t),r&512&&(cn||a===null||Li(a,a.return)),a!==null&&r&4&&mf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),jn(t),r&512&&(cn||a===null||Li(a,a.return)),t.flags&32){u=t.stateNode;try{kn(u,"")}catch(Ve){Bt(t,t.return,Ve)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,mf(t,u,a!==null?a.memoizedProps:u)),r&1024&&(xf=!0);break;case 6:if(Vn(n,t),jn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ve){Bt(t,t.return,Ve)}}break;case 3:if(Zl=null,u=yi,yi=ql(n.containerInfo),Vn(n,t),yi=u,jn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{sr(n.containerInfo)}catch(Ve){Bt(t,t.return,Ve)}xf&&(xf=!1,xg(t));break;case 4:r=yi,yi=ql(t.stateNode.containerInfo),Vn(n,t),jn(t),yi=r;break;case 12:Vn(n,t),jn(t);break;case 31:Vn(n,t),jn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ul(t,r)));break;case 13:Vn(n,t),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pl=ge()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ul(t,r)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ie=Zi,me=cn;if(Zi=ie||u,cn=me||H,Vn(n,t),cn=me,Zi=ie,jn(t),r&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||Zi||cn||cs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=H.stateNode;var Se=H.memoizedProps.style,re=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;w.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(Ve){Bt(H,H.return,Ve)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Ve){Bt(H,H.return,Ve)}}}else if(n.tag===18){if(a===null){H=n;try{var de=H.stateNode;u?o0(de,!0):o0(H.stateNode,!1)}catch(Ve){Bt(H,H.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ul(t,a))));break;case 19:Vn(n,t),jn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ul(t,r)));break;case 30:break;case 21:break;default:Vn(n,t),jn(t)}}function jn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(cg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=gf(t);Ll(t,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(kn(S,""),a.flags&=-33);var w=gf(t);Ll(t,w,S);break;case 3:case 4:var H=a.stateNode.containerInfo,ie=gf(t);vf(t,ie,H);break;default:throw Error(s(161))}}catch(me){Bt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function xg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;xg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)dg(t,n.alternate,n),n=n.sibling}function cs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ba(4,n,n.return),cs(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&og(n,n.return,a),cs(n);break;case 27:So(n.stateNode);case 26:case 5:Li(n,n.return),cs(n);break;case 22:n.memoizedState===null&&cs(n);break;case 30:cs(n);break;default:cs(n)}t=t.sibling}}function Ji(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Ji(u,f,a),uo(4,f);break;case 1:if(Ji(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){Bt(r,r.return,ie)}if(r=f,u=r.updateQueue,u!==null){var w=r.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Zp(H[u],w)}catch(ie){Bt(r,r.return,ie)}}a&&S&64&&rg(f),fo(f,f.return);break;case 27:ug(f);case 26:case 5:Ji(u,f,a),a&&r===null&&S&4&&lg(f),fo(f,f.return);break;case 12:Ji(u,f,a);break;case 31:Ji(u,f,a),a&&S&4&&mg(u,f);break;case 13:Ji(u,f,a),a&&S&4&&gg(u,f);break;case 22:f.memoizedState===null&&Ji(u,f,a),fo(f,f.return);break;case 30:break;default:Ji(u,f,a)}n=n.sibling}}function _f(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Qr(a))}function yf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qr(t))}function Si(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_g(t,n,a,r),n=n.sibling}function _g(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Si(t,n,a,r),u&2048&&uo(9,n);break;case 1:Si(t,n,a,r);break;case 3:Si(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qr(t)));break;case 12:if(u&2048){Si(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,w=f.onPostCommit;typeof w=="function"&&w(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Bt(n,n.return,H)}}else Si(t,n,a,r);break;case 31:Si(t,n,a,r);break;case 13:Si(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Si(t,n,a,r):ho(t,n):f._visibility&2?Si(t,n,a,r):(f._visibility|=2,Ys(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&_f(S,n);break;case 24:Si(t,n,a,r),u&2048&&yf(n.alternate,n);break;default:Si(t,n,a,r)}}function Ys(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,S=n,w=a,H=r,ie=S.flags;switch(S.tag){case 0:case 11:case 15:Ys(f,S,w,H,u),uo(8,S);break;case 23:break;case 22:var me=S.stateNode;S.memoizedState!==null?me._visibility&2?Ys(f,S,w,H,u):ho(f,S):(me._visibility|=2,Ys(f,S,w,H,u)),u&&ie&2048&&_f(S.alternate,S);break;case 24:Ys(f,S,w,H,u),u&&ie&2048&&yf(S.alternate,S);break;default:Ys(f,S,w,H,u)}n=n.sibling}}function ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:ho(a,r),u&2048&&_f(r.alternate,r);break;case 24:ho(a,r),u&2048&&yf(r.alternate,r);break;default:ho(a,r)}n=n.sibling}}var po=8192;function Zs(t,n,a){if(t.subtreeFlags&po)for(t=t.child;t!==null;)yg(t,n,a),t=t.sibling}function yg(t,n,a){switch(t.tag){case 26:Zs(t,n,a),t.flags&po&&t.memoizedState!==null&&Oy(a,yi,t.memoizedState,t.memoizedProps);break;case 5:Zs(t,n,a);break;case 3:case 4:var r=yi;yi=ql(t.stateNode.containerInfo),Zs(t,n,a),yi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=po,po=16777216,Zs(t,n,a),po=r):Zs(t,n,a));break;default:Zs(t,n,a)}}function Sg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,bg(r,t)}Sg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Mg(t),t=t.sibling}function Mg(t){switch(t.tag){case 0:case 11:case 15:mo(t),t.flags&2048&&ba(9,t,t.return);break;case 3:mo(t);break;case 12:mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ol(t)):mo(t);break;default:mo(t)}}function Ol(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,bg(r,t)}Sg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ba(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}t=t.sibling}}function bg(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Qr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,_n=r;else e:for(a=t;_n!==null;){r=_n;var u=r.sibling,f=r.return;if(hg(r),r===a){_n=null;break e}if(u!==null){u.return=f,_n=u;break e}_n=f}}}var Z_={getCacheForType:function(t){var n=An(rn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(rn).controller.signal}},K_=typeof WeakMap=="function"?WeakMap:Map,It=0,Wt=null,_t=null,St=0,zt=0,ti=null,Ea=!1,Ks=!1,Sf=!1,$i=0,nn=0,Ta=0,us=0,Mf=0,ni=0,Qs=0,go=null,Xn=null,bf=!1,Pl=0,Eg=0,Il=1/0,zl=null,Aa=null,mn=0,wa=null,Js=null,ea=0,Ef=0,Tf=null,Tg=null,vo=0,Af=null;function ii(){return(It&2)!==0&&St!==0?St&-St:F.T!==null?Lf():zr()}function Ag(){if(ni===0)if((St&536870912)===0||wt){var t=pe;pe<<=1,(pe&3932160)===0&&(pe=262144),ni=t}else ni=536870912;return t=$n.current,t!==null&&(t.flags|=32),ni}function Wn(t,n,a){(t===Wt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&($s(t,0),Ca(t,St,ni,!1)),Mn(t,a),((It&2)===0||t!==Wt)&&(t===Wt&&((It&2)===0&&(us|=a),nn===4&&Ca(t,St,ni,!1)),Ui(t))}function wg(t,n,a){if((It&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||rt(t,n),u=r?$_(t,n):Cf(t,n,!0),f=r;do{if(u===0){Ks&&!r&&Ca(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Q_(a)){u=Cf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var w=t;u=go;var H=w.current.memoizedState.isDehydrated;if(H&&($s(w,S).flags|=256),S=Cf(w,S,!1),S!==2){if(Sf&&!H){w.errorRecoveryDisabledLanes|=f,us|=f,u=4;break e}f=Xn,Xn=u,f!==null&&(Xn===null?Xn=f:Xn.push.apply(Xn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){$s(t,0),Ca(t,n,0,!0);break}e:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ca(r,n,ni,!Ea);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Pl+300-ge(),10<u)){if(Ca(r,n,ni,!Ea),Ue(r,0,!0)!==0)break e;ea=n,r.timeoutHandle=a0(Cg.bind(null,r,a,Xn,zl,bf,n,ni,us,Qs,Ea,f,"Throttled",-0,0),u);break e}Cg(r,a,Xn,zl,bf,n,ni,us,Qs,Ea,f,null,-0,0)}}break}while(!0);Ui(t)}function Cg(t,n,a,r,u,f,S,w,H,ie,me,Se,re,de){if(t.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},yg(n,f,Se);var Ve=(f&62914560)===f?Pl-ge():(f&4194048)===f?Eg-ge():0;if(Ve=Py(Se,Ve),Ve!==null){ea=f,t.cancelPendingCommit=Ve(Ig.bind(null,t,n,f,a,r,u,S,w,H,me,Se,null,re,de)),Ca(t,f,S,!ie);return}}Ig(t,n,f,a,r,u,S,w,H)}function Q_(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(t,n,a,r){n&=~Mf,n&=~us,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-at(u),S=1<<f;r[f]=-1,u&=~S}a!==0&&Pr(t,a,n)}function Bl(){return(It&6)===0?(xo(0),!1):!0}function wf(){if(_t!==null){if(zt===0)var t=_t.return;else t=_t,Vi=ts=null,Gu(t),Vs=null,$r=0,t=_t;for(;t!==null;)sg(t.alternate,t),t=t.return;_t=null}}function $s(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,vy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ea=0,wf(),Wt=t,_t=a=Hi(t.current,null),St=n,zt=0,ti=null,Ea=!1,Ks=rt(t,n),Sf=!1,Qs=ni=Mf=us=Ta=nn=0,Xn=go=null,bf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-at(r),f=1<<u;n|=t[u],r&=~f}return $i=n,sl(),a}function Rg(t,n){dt=null,F.H=oo,n===Gs||n===hl?(n=Xp(),zt=3):n===Nu?(n=Xp(),zt=4):zt=n===sf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,_t===null&&(nn=1,wl(t,oi(n,t.current)))}function Ng(){var t=$n.current;return t===null?!0:(St&4194048)===St?fi===null:(St&62914560)===St||(St&536870912)!==0?t===fi:!1}function Dg(){var t=F.H;return F.H=oo,t===null?oo:t}function Lg(){var t=F.A;return F.A=Z_,t}function Fl(){nn=4,Ea||(St&4194048)!==St&&$n.current!==null||(Ks=!0),(Ta&134217727)===0&&(us&134217727)===0||Wt===null||Ca(Wt,St,ni,!1)}function Cf(t,n,a){var r=It;It|=2;var u=Dg(),f=Lg();(Wt!==t||St!==n)&&(zl=null,$s(t,n)),n=!1;var S=nn;e:do try{if(zt!==0&&_t!==null){var w=_t,H=ti;switch(zt){case 8:wf(),S=6;break e;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var ie=zt;if(zt=0,ti=null,er(t,w,H,ie),a&&Ks){S=0;break e}break;default:ie=zt,zt=0,ti=null,er(t,w,H,ie)}}J_(),S=nn;break}catch(me){Rg(t,me)}while(!0);return n&&t.shellSuspendCounter++,Vi=ts=null,It=r,F.H=u,F.A=f,_t===null&&(Wt=null,St=0,sl()),S}function J_(){for(;_t!==null;)Ug(_t)}function $_(t,n){var a=It;It|=2;var r=Dg(),u=Lg();Wt!==t||St!==n?(zl=null,Il=ge()+500,$s(t,n)):Ks=rt(t,n);e:do try{if(zt!==0&&_t!==null){n=_t;var f=ti;t:switch(zt){case 1:zt=0,ti=null,er(t,n,f,1);break;case 2:case 9:if(Vp(f)){zt=0,ti=null,Og(n);break}n=function(){zt!==2&&zt!==9||Wt!==t||(zt=7),Ui(t)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:Vp(f)?(zt=0,ti=null,Og(n)):(zt=0,ti=null,er(t,n,f,7));break;case 5:var S=null;switch(_t.tag){case 26:S=_t.memoizedState;case 5:case 27:var w=_t;if(S?_0(S):w.stateNode.complete){zt=0,ti=null;var H=w.sibling;if(H!==null)_t=H;else{var ie=w.return;ie!==null?(_t=ie,kl(ie)):_t=null}break t}}zt=0,ti=null,er(t,n,f,5);break;case 6:zt=0,ti=null,er(t,n,f,6);break;case 8:wf(),nn=6;break e;default:throw Error(s(462))}}ey();break}catch(me){Rg(t,me)}while(!0);return Vi=ts=null,F.H=r,F.A=u,It=a,_t!==null?0:(Wt=null,St=0,sl(),nn)}function ey(){for(;_t!==null&&!C();)Ug(_t)}function Ug(t){var n=ig(t.alternate,t,$i);t.memoizedProps=t.pendingProps,n===null?kl(t):_t=n}function Og(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Qm(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=Qm(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Gu(n);default:sg(a,n),n=_t=Lp(n,$i),n=ig(a,n,$i)}t.memoizedProps=t.pendingProps,n===null?kl(t):_t=n}function er(t,n,a,r){Vi=ts=null,Gu(n),Vs=null,$r=0;var u=n.return;try{if(G_(t,u,n,a,St)){nn=1,wl(t,oi(a,t.current)),_t=null;return}}catch(f){if(u!==null)throw _t=u,f;nn=1,wl(t,oi(a,t.current)),_t=null;return}n.flags&32768?(wt||r===1?t=!0:Ks||(St&536870912)!==0?t=!1:(Ea=t=!0,(r===2||r===9||r===3||r===6)&&(r=$n.current,r!==null&&r.tag===13&&(r.flags|=16384))),Pg(n,t)):kl(n)}function kl(t){var n=t;do{if((n.flags&32768)!==0){Pg(n,Ea);return}t=n.return;var a=X_(n.alternate,n,$i);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=t}while(n!==null);nn===0&&(nn=5)}function Pg(t,n){do{var a=W_(t.alternate,t);if(a!==null){a.flags&=32767,_t=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_t=t;return}_t=t=a}while(t!==null);nn=6,_t=null}function Ig(t,n,a,r,u,f,S,w,H){t.cancelPendingCommit=null;do Hl();while(mn!==0);if((It&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=mu,gi(t,a,f,S,w,H),t===Wt&&(_t=Wt=null,St=0),Js=n,wa=t,ea=a,Ef=f,Tf=u,Tg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ay(Re,function(){return Hg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=F.T,F.T=null,u=ee.p,ee.p=2,S=It,It|=4;try{q_(t,n,a)}finally{It=S,ee.p=u,F.T=r}}mn=1,zg(),Bg(),Fg()}}function zg(){if(mn===1){mn=0;var t=wa,n=Js,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var r=ee.p;ee.p=2;var u=It;It|=4;try{vg(n,t);var f=kf,S=bp(t.containerInfo),w=f.focusedElem,H=f.selectionRange;if(S!==w&&w&&w.ownerDocument&&Mp(w.ownerDocument.documentElement,w)){if(H!==null&&uu(w)){var ie=H.start,me=H.end;if(me===void 0&&(me=ie),"selectionStart"in w)w.selectionStart=ie,w.selectionEnd=Math.min(me,w.value.length);else{var Se=w.ownerDocument||document,re=Se&&Se.defaultView||window;if(re.getSelection){var de=re.getSelection(),Ve=w.textContent.length,$e=Math.min(H.start,Ve),Vt=H.end===void 0?$e:Math.min(H.end,Ve);!de.extend&&$e>Vt&&(S=Vt,Vt=$e,$e=S);var $=Sp(w,$e),W=Sp(w,Vt);if($&&W&&(de.rangeCount!==1||de.anchorNode!==$.node||de.anchorOffset!==$.offset||de.focusNode!==W.node||de.focusOffset!==W.offset)){var ne=Se.createRange();ne.setStart($.node,$.offset),de.removeAllRanges(),$e>Vt?(de.addRange(ne),de.extend(W.node,W.offset)):(ne.setEnd(W.node,W.offset),de.addRange(ne))}}}}for(Se=[],de=w;de=de.parentNode;)de.nodeType===1&&Se.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Se.length;w++){var ve=Se[w];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}$l=!!Ff,kf=Ff=null}finally{It=u,ee.p=r,F.T=a}}t.current=n,mn=2}}function Bg(){if(mn===2){mn=0;var t=wa,n=Js,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var r=ee.p;ee.p=2;var u=It;It|=4;try{dg(t,n.alternate,n)}finally{It=u,ee.p=r,F.T=a}}mn=3}}function Fg(){if(mn===4||mn===3){mn=0,se();var t=wa,n=Js,a=ea,r=Tg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,Js=wa=null,kg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Aa=null),ws(a),n=n.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(qe,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=F.T,u=ee.p,ee.p=2,F.T=null;try{for(var f=t.onRecoverableError,S=0;S<r.length;S++){var w=r[S];f(w.value,{componentStack:w.stack})}}finally{F.T=n,ee.p=u}}(ea&3)!==0&&Hl(),Ui(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Af?vo++:(vo=0,Af=t):vo=0,xo(0)}}function kg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Qr(n)))}function Hl(){return zg(),Bg(),Fg(),Hg()}function Hg(){if(mn!==5)return!1;var t=wa,n=Ef;Ef=0;var a=ws(ea),r=F.T,u=ee.p;try{ee.p=32>a?32:a,F.T=null,a=Tf,Tf=null;var f=wa,S=ea;if(mn=0,Js=wa=null,ea=0,(It&6)!==0)throw Error(s(331));var w=It;if(It|=4,Mg(f.current),_g(f,f.current,S,a),It=w,xo(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(qe,f)}catch{}return!0}finally{ee.p=u,F.T=r,kg(t,n)}}function Gg(t,n,a){n=oi(a,n),n=af(t.stateNode,n,2),t=ya(t,n,2),t!==null&&(Mn(t,2),Ui(t))}function Bt(t,n,a){if(t.tag===3)Gg(t,t,a);else for(;n!==null;){if(n.tag===3){Gg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Aa===null||!Aa.has(r))){t=oi(a,t),a=Vm(2),r=ya(n,a,2),r!==null&&(jm(a,r,n,t),Mn(r,2),Ui(r));break}}n=n.return}}function Rf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new K_;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Sf=!0,u.add(a),t=ty.bind(null,t,n,a),n.then(t,t))}function ty(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(St&a)===a&&(nn===4||nn===3&&(St&62914560)===St&&300>ge()-Pl?(It&2)===0&&$s(t,0):Mf|=a,Qs===St&&(Qs=0)),Ui(t)}function Vg(t,n){n===0&&(n=hn()),t=Ja(t,n),t!==null&&(Mn(t,n),Ui(t))}function ny(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Vg(t,a)}function iy(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Vg(t,a)}function ay(t,n){return Fe(t,n)}var Gl=null,tr=null,Nf=!1,Vl=!1,Df=!1,Ra=0;function Ui(t){t!==tr&&t.next===null&&(tr===null?Gl=tr=t:tr=tr.next=t),Vl=!0,Nf||(Nf=!0,ry())}function xo(t,n){if(!Df&&Vl){Df=!0;do for(var a=!1,r=Gl;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var S=r.suspendedLanes,w=r.pingedLanes;f=(1<<31-at(42|t)+1)-1,f&=u&~(S&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,qg(r,f))}else f=St,f=Ue(r,r===Wt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||rt(r,f)||(a=!0,qg(r,f));r=r.next}while(a);Df=!1}}function sy(){jg()}function jg(){Vl=Nf=!1;var t=0;Ra!==0&&gy()&&(t=Ra);for(var n=ge(),a=null,r=Gl;r!==null;){var u=r.next,f=Xg(r,n);f===0?(r.next=null,a===null?Gl=u:a.next=u,u===null&&(tr=a)):(a=r,(t!==0||(f&3)!==0)&&(Vl=!0)),r=u}mn!==0&&mn!==5||xo(t),Ra!==0&&(Ra=0)}function Xg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-at(f),w=1<<S,H=u[S];H===-1?((w&a)===0||(w&r)!==0)&&(u[S]=Qt(w,n)):H<=n&&(t.expiredLanes|=w),f&=~w}if(n=Wt,a=St,a=Ue(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&P(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||rt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&P(r),ws(a)){case 2:case 8:a=je;break;case 32:a=Re;break;case 268435456:a=gt;break;default:a=Re}return r=Wg.bind(null,t),a=Fe(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&P(r),t.callbackPriority=2,t.callbackNode=null,2}function Wg(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Hl()&&t.callbackNode!==a)return null;var r=St;return r=Ue(t,t===Wt?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(wg(t,r,n),Xg(t,ge()),t.callbackNode!=null&&t.callbackNode===a?Wg.bind(null,t):null)}function qg(t,n){if(Hl())return null;wg(t,n,!0)}function ry(){xy(function(){(It&6)!==0?Fe(_e,sy):jg()})}function Lf(){if(Ra===0){var t=ks;t===0&&(t=Ne,Ne<<=1,(Ne&261888)===0&&(Ne=256)),Ra=t}return Ra}function Yg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Qo(""+t)}function Zg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function oy(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Yg((u[bn]||null).action),S=r.submitter;S&&(n=(n=S[bn]||null)?Yg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var w=new tl("action","action",null,r,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ra!==0){var H=S?Zg(u,S):new FormData(u);Qu(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(w.preventDefault(),H=S?Zg(u,S):new FormData(u),Qu(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Uf=0;Uf<pu.length;Uf++){var Of=pu[Uf],ly=Of.toLowerCase(),cy=Of[0].toUpperCase()+Of.slice(1);_i(ly,"on"+cy)}_i(Ap,"onAnimationEnd"),_i(wp,"onAnimationIteration"),_i(Cp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(T_,"onTransitionRun"),_i(A_,"onTransitionStart"),_i(w_,"onTransitionCancel"),_i(Rp,"onTransitionEnd"),Be("onMouseEnter",["mouseout","mouseover"]),Be("onMouseLeave",["mouseout","mouseover"]),Be("onPointerEnter",["pointerout","pointerover"]),Be("onPointerLeave",["pointerout","pointerover"]),Ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ie("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function Kg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var S=r.length-1;0<=S;S--){var w=r[S],H=w.instance,ie=w.currentTarget;if(w=w.listener,H!==f&&u.isPropagationStopped())break e;f=w,u.currentTarget=ie;try{f(u)}catch(me){al(me)}u.currentTarget=null,f=H}else for(S=0;S<r.length;S++){if(w=r[S],H=w.instance,ie=w.currentTarget,w=w.listener,H!==f&&u.isPropagationStopped())break e;f=w,u.currentTarget=ie;try{f(u)}catch(me){al(me)}u.currentTarget=null,f=H}}}}function yt(t,n){var a=n[Br];a===void 0&&(a=n[Br]=new Set);var r=t+"__bubble";a.has(r)||(Qg(n,t,2,!1),a.add(r))}function Pf(t,n,a){var r=0;n&&(r|=4),Qg(a,t,r,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function If(t){if(!t[jl]){t[jl]=!0,Ae.forEach(function(a){a!=="selectionchange"&&(uy.has(a)||Pf(a,!1,t),Pf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,Pf("selectionchange",!1,n))}}function Qg(t,n,a,r){switch(A0(n)){case 2:var u=By;break;case 8:u=Fy;break;default:u=Qf}a=u.bind(null,n,a,t),u=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function zf(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var S=r.tag;if(S===3||S===4){var w=r.stateNode.containerInfo;if(w===u)break;if(S===4)for(S=r.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;w!==null;){if(S=N(w),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){r=f=S;continue e}w=w.parentNode}}r=r.return}np(function(){var ie=f,me=$c(a),Se=[];e:{var re=Np.get(t);if(re!==void 0){var de=tl,Ve=t;switch(t){case"keypress":if($o(a)===0)break e;case"keydown":case"keyup":de=i_;break;case"focusin":Ve="focus",de=su;break;case"focusout":Ve="blur",de=su;break;case"beforeblur":case"afterblur":de=su;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=Xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=r_;break;case Ap:case wp:case Cp:de=Yx;break;case Rp:de=l_;break;case"scroll":case"scrollend":de=Vx;break;case"wheel":de=u_;break;case"copy":case"cut":case"paste":de=Kx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=op;break;case"toggle":case"beforetoggle":de=d_}var $e=(n&4)!==0,Vt=!$e&&(t==="scroll"||t==="scrollend"),$=$e?re!==null?re+"Capture":null:re;$e=[];for(var W=ie,ne;W!==null;){var ve=W;if(ne=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ne===null||$===null||(ve=kr(W,$),ve!=null&&$e.push(yo(W,ve,ne))),Vt)break;W=W.return}0<$e.length&&(re=new de(re,Ve,null,a,me),Se.push({event:re,listeners:$e}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",re&&a!==Jc&&(Ve=a.relatedTarget||a.fromElement)&&(N(Ve)||Ve[Bi]))break e;if((de||re)&&(re=me.window===me?me:(re=me.ownerDocument)?re.defaultView||re.parentWindow:window,de?(Ve=a.relatedTarget||a.toElement,de=ie,Ve=Ve?N(Ve):null,Ve!==null&&(Vt=c(Ve),$e=Ve.tag,Ve!==Vt||$e!==5&&$e!==27&&$e!==6)&&(Ve=null)):(de=null,Ve=ie),de!==Ve)){if($e=sp,ve="onMouseLeave",$="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&($e=op,ve="onPointerLeave",$="onPointerEnter",W="pointer"),Vt=de==null?re:oe(de),ne=Ve==null?re:oe(Ve),re=new $e(ve,W+"leave",de,a,me),re.target=Vt,re.relatedTarget=ne,ve=null,N(me)===ie&&($e=new $e($,W+"enter",Ve,a,me),$e.target=ne,$e.relatedTarget=Vt,ve=$e),Vt=ve,de&&Ve)t:{for($e=fy,$=de,W=Ve,ne=0,ve=$;ve;ve=$e(ve))ne++;ve=0;for(var Ke=W;Ke;Ke=$e(Ke))ve++;for(;0<ne-ve;)$=$e($),ne--;for(;0<ve-ne;)W=$e(W),ve--;for(;ne--;){if($===W||W!==null&&$===W.alternate){$e=$;break t}$=$e($),W=$e(W)}$e=null}else $e=null;de!==null&&Jg(Se,re,de,$e,!1),Ve!==null&&Vt!==null&&Jg(Se,Vt,Ve,$e,!0)}}e:{if(re=ie?oe(ie):window,de=re.nodeName&&re.nodeName.toLowerCase(),de==="select"||de==="input"&&re.type==="file")var Dt=mp;else if(hp(re))if(gp)Dt=M_;else{Dt=y_;var Xe=__}else de=re.nodeName,!de||de.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ie&&Qc(ie.elementType)&&(Dt=mp):Dt=S_;if(Dt&&(Dt=Dt(t,ie))){pp(Se,Dt,a,me);break e}Xe&&Xe(t,re,ie),t==="focusout"&&ie&&re.type==="number"&&ie.memoizedProps.value!=null&&Nn(re,"number",re.value)}switch(Xe=ie?oe(ie):window,t){case"focusin":(hp(Xe)||Xe.contentEditable==="true")&&(Ls=Xe,fu=ie,Yr=null);break;case"focusout":Yr=fu=Ls=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,Ep(Se,a,me);break;case"selectionchange":if(E_)break;case"keydown":case"keyup":Ep(Se,a,me)}var ht;if(ou)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Ds?fp(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(lp&&a.locale!=="ko"&&(Ds||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Ds&&(ht=ip()):(ha=me,nu="value"in ha?ha.value:ha.textContent,Ds=!0)),Xe=Xl(ie,Mt),0<Xe.length&&(Mt=new rp(Mt,t,null,a,me),Se.push({event:Mt,listeners:Xe}),ht?Mt.data=ht:(ht=dp(a),ht!==null&&(Mt.data=ht)))),(ht=p_?m_(t,a):g_(t,a))&&(Mt=Xl(ie,"onBeforeInput"),0<Mt.length&&(Xe=new rp("onBeforeInput","beforeinput",null,a,me),Se.push({event:Xe,listeners:Mt}),Xe.data=ht)),oy(Se,t,ie,a,me)}Kg(Se,n)})}function yo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Xl(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=kr(t,a),u!=null&&r.unshift(yo(t,u,f)),u=kr(t,n),u!=null&&r.push(yo(t,u,f))),t.tag===3)return r;t=t.return}return[]}function fy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Jg(t,n,a,r,u){for(var f=n._reactName,S=[];a!==null&&a!==r;){var w=a,H=w.alternate,ie=w.stateNode;if(w=w.tag,H!==null&&H===r)break;w!==5&&w!==26&&w!==27||ie===null||(H=ie,u?(ie=kr(a,f),ie!=null&&S.unshift(yo(a,ie,H))):u||(ie=kr(a,f),ie!=null&&S.push(yo(a,ie,H)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var dy=/\r\n?/g,hy=/\u0000|\uFFFD/g;function $g(t){return(typeof t=="string"?t:""+t).replace(dy,`
`).replace(hy,"")}function e0(t,n){return n=$g(n),$g(t)===n}function Gt(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||kn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&kn(t,""+r);break;case"className":qt(t,"class",r);break;case"tabIndex":qt(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":qt(t,a,r);break;case"style":ep(t,r,f);break;case"data":if(n!=="object"){qt(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Qo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(t,n,"name",u.name,u,null),Gt(t,n,"formEncType",u.formEncType,u,null),Gt(t,n,"formMethod",u.formMethod,u,null),Gt(t,n,"formTarget",u.formTarget,u,null)):(Gt(t,n,"encType",u.encType,u,null),Gt(t,n,"method",u.method,u,null),Gt(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Qo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Fi);break;case"onScroll":r!=null&&yt("scroll",t);break;case"onScrollEnd":r!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Qo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":yt("beforetoggle",t),yt("toggle",t),At(t,"popover",r);break;case"xlinkActuate":Nt(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Nt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Nt(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Nt(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Nt(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Nt(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":At(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Hx.get(a)||a,At(t,a,r))}}function Bf(t,n,a,r,u,f){switch(a){case"style":ep(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?kn(t,r):(typeof r=="number"||typeof r=="bigint")&&kn(t,""+r);break;case"onScroll":r!=null&&yt("scroll",t);break;case"onScrollEnd":r!=null&&yt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Fi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[bn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break e}a in t?t[a]=r:r===!0?t.setAttribute(a,""):At(t,a,r)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(t,n,f,S,a,null)}}u&&Gt(t,n,"srcSet",a.srcSet,a,null),r&&Gt(t,n,"src",a.src,a,null);return;case"input":yt("invalid",t);var w=f=S=u=null,H=null,ie=null;for(r in a)if(a.hasOwnProperty(r)){var me=a[r];if(me!=null)switch(r){case"name":u=me;break;case"type":S=me;break;case"checked":H=me;break;case"defaultChecked":ie=me;break;case"value":f=me;break;case"defaultValue":w=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:Gt(t,n,r,me,a,null)}}Pn(t,f,w,H,ie,S,u,!1);return;case"select":yt("invalid",t),r=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":f=w;break;case"defaultValue":S=w;break;case"multiple":r=w;default:Gt(t,n,u,w,a,null)}n=f,a=S,t.multiple=!!r,n!=null?en(t,!!r,n,!1):a!=null&&en(t,!!r,a,!0);return;case"textarea":yt("invalid",t),f=u=r=null;for(S in a)if(a.hasOwnProperty(S)&&(w=a[S],w!=null))switch(S){case"value":r=w;break;case"defaultValue":u=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Gt(t,n,S,w,a,null)}Cs(t,r,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(r=a[H],r!=null))switch(H){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Gt(t,n,H,r,a,null)}return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(r=0;r<_o.length;r++)yt(_o[r],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(r=a[ie],r!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(t,n,ie,r,a,null)}return;default:if(Qc(n)){for(me in a)a.hasOwnProperty(me)&&(r=a[me],r!==void 0&&Bf(t,n,me,r,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(r=a[w],r!=null&&Gt(t,n,w,r,a,null))}function py(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,w=null,H=null,ie=null,me=null;for(de in a){var Se=a[de];if(a.hasOwnProperty(de)&&Se!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":H=Se;default:r.hasOwnProperty(de)||Gt(t,n,de,null,r,Se)}}for(var re in r){var de=r[re];if(Se=a[re],r.hasOwnProperty(re)&&(de!=null||Se!=null))switch(re){case"type":f=de;break;case"name":u=de;break;case"checked":ie=de;break;case"defaultChecked":me=de;break;case"value":S=de;break;case"defaultValue":w=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:de!==Se&&Gt(t,n,re,de,r,Se)}}kt(t,S,w,H,ie,me,f,u);return;case"select":de=S=w=re=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":de=H;default:r.hasOwnProperty(f)||Gt(t,n,f,null,r,H)}for(u in r)if(f=r[u],H=a[u],r.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":re=f;break;case"defaultValue":w=f;break;case"multiple":S=f;default:f!==H&&Gt(t,n,u,f,r,H)}n=w,a=S,r=de,re!=null?en(t,!!a,re,!1):!!r!=!!a&&(n!=null?en(t,!!a,n,!0):en(t,!!a,a?[]:"",!1));return;case"textarea":de=re=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!r.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Gt(t,n,w,null,r,u)}for(S in r)if(u=r[S],f=a[S],r.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":re=u;break;case"defaultValue":de=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Gt(t,n,S,u,r,f)}En(t,re,de);return;case"option":for(var Ve in a)if(re=a[Ve],a.hasOwnProperty(Ve)&&re!=null&&!r.hasOwnProperty(Ve))switch(Ve){case"selected":t.selected=!1;break;default:Gt(t,n,Ve,null,r,re)}for(H in r)if(re=r[H],de=a[H],r.hasOwnProperty(H)&&re!==de&&(re!=null||de!=null))switch(H){case"selected":t.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:Gt(t,n,H,re,r,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)re=a[$e],a.hasOwnProperty($e)&&re!=null&&!r.hasOwnProperty($e)&&Gt(t,n,$e,null,r,re);for(ie in r)if(re=r[ie],de=a[ie],r.hasOwnProperty(ie)&&re!==de&&(re!=null||de!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:Gt(t,n,ie,re,r,de)}return;default:if(Qc(n)){for(var Vt in a)re=a[Vt],a.hasOwnProperty(Vt)&&re!==void 0&&!r.hasOwnProperty(Vt)&&Bf(t,n,Vt,void 0,r,re);for(me in r)re=r[me],de=a[me],!r.hasOwnProperty(me)||re===de||re===void 0&&de===void 0||Bf(t,n,me,re,r,de);return}}for(var $ in a)re=a[$],a.hasOwnProperty($)&&re!=null&&!r.hasOwnProperty($)&&Gt(t,n,$,null,r,re);for(Se in r)re=r[Se],de=a[Se],!r.hasOwnProperty(Se)||re===de||re==null&&de==null||Gt(t,n,Se,re,r,de)}function t0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function my(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,S=u.initiatorType,w=u.duration;if(f&&w&&t0(S)){for(S=0,w=u.responseEnd,r+=1;r<a.length;r++){var H=a[r],ie=H.startTime;if(ie>w)break;var me=H.transferSize,Se=H.initiatorType;me&&t0(Se)&&(H=H.responseEnd,S+=me*(H<w?1:(w-ie)/(H-ie)))}if(--r,n+=8*(f+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ff=null,kf=null;function Wl(t){return t.nodeType===9?t:t.ownerDocument}function n0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Hf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function gy(){var t=window.event;return t&&t.type==="popstate"?t===Gf?!1:(Gf=t,!0):(Gf=null,!1)}var a0=typeof setTimeout=="function"?setTimeout:void 0,vy=typeof clearTimeout=="function"?clearTimeout:void 0,s0=typeof Promise=="function"?Promise:void 0,xy=typeof queueMicrotask=="function"?queueMicrotask:typeof s0<"u"?function(t){return s0.resolve(null).then(t).catch(_y)}:a0;function _y(t){setTimeout(function(){throw t})}function Na(t){return t==="head"}function r0(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),sr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")So(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,So(a);for(var f=a.firstChild;f;){var S=f.nextSibling,w=f.nodeName;f[Ya]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&So(t.ownerDocument.body);a=u}while(a);sr(n)}function o0(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Vf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),Fr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function yy(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ya])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function Sy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function l0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function jf(t){return t.data==="$?"||t.data==="$~"}function Xf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function My(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Wf=null;function c0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function u0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function f0(t,n,a){switch(n=Wl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function So(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Fr(t)}var hi=new Map,d0=new Set;function ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ta=ee.d;ee.d={f:by,r:Ey,D:Ty,C:Ay,L:wy,m:Cy,X:Ny,S:Ry,M:Dy};function by(){var t=ta.f(),n=Bl();return t||n}function Ey(t){var n=Q(t);n!==null&&n.tag===5&&n.type==="form"?Rm(n):ta.r(t)}var nr=typeof document>"u"?null:document;function h0(t,n,a){var r=nr;if(r&&typeof n=="string"&&n){var u=xn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),d0.has(u)||(d0.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Cn(n,"link",t),Y(n),r.head.appendChild(n)))}}function Ty(t){ta.D(t),h0("dns-prefetch",t,null)}function Ay(t,n){ta.C(t,n),h0("preconnect",t,n)}function wy(t,n,a){ta.L(t,n,a);var r=nr;if(r&&t&&n){var u='link[rel="preload"][as="'+xn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xn(a.imageSizes)+'"]')):u+='[href="'+xn(t)+'"]';var f=u;switch(n){case"style":f=ir(t);break;case"script":f=ar(t)}hi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(Mo(f))||n==="script"&&r.querySelector(bo(f))||(n=r.createElement("link"),Cn(n,"link",t),Y(n),r.head.appendChild(n)))}}function Cy(t,n){ta.m(t,n);var a=nr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xn(r)+'"][href="'+xn(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ar(t)}if(!hi.has(f)&&(t=v({rel:"modulepreload",href:t},n),hi.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}r=a.createElement("link"),Cn(r,"link",t),Y(r),a.head.appendChild(r)}}}function Ry(t,n,a){ta.S(t,n,a);var r=nr;if(r&&t){var u=ue(r).hoistableStyles,f=ir(t);n=n||"default";var S=u.get(f);if(!S){var w={loading:0,preload:null};if(S=r.querySelector(Mo(f)))w.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(f))&&qf(t,a);var H=S=r.createElement("link");Y(H),Cn(H,"link",t),H._p=new Promise(function(ie,me){H.onload=ie,H.onerror=me}),H.addEventListener("load",function(){w.loading|=1}),H.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Yl(S,n,r)}S={type:"stylesheet",instance:S,count:1,state:w},u.set(f,S)}}}function Ny(t,n){ta.X(t,n);var a=nr;if(a&&t){var r=ue(a).hoistableScripts,u=ar(t),f=r.get(u);f||(f=a.querySelector(bo(u)),f||(t=v({src:t,async:!0},n),(n=hi.get(u))&&Yf(t,n),f=a.createElement("script"),Y(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Dy(t,n){ta.M(t,n);var a=nr;if(a&&t){var r=ue(a).hoistableScripts,u=ar(t),f=r.get(u);f||(f=a.querySelector(bo(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&Yf(t,n),f=a.createElement("script"),Y(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function p0(t,n,a,r){var u=(u=he.current)?ql(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ir(a.href),a=ue(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ir(a.href);var f=ue(u).hoistableStyles,S=f.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=u.querySelector(Mo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),f||Ly(u,t,a,S.state))),n&&r===null)throw Error(s(528,""));return S}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ar(a),a=ue(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ir(t){return'href="'+xn(t)+'"'}function Mo(t){return'link[rel="stylesheet"]['+t+"]"}function m0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Ly(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Cn(n,"link",a),Y(n),t.head.appendChild(n))}function ar(t){return'[src="'+xn(t)+'"]'}function bo(t){return"script[async]"+t}function g0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+xn(a.href)+'"]');if(r)return n.instance=r,Y(r),r;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Y(r),Cn(r,"style",u),Yl(r,a.precedence,t),n.instance=r;case"stylesheet":u=ir(a.href);var f=t.querySelector(Mo(u));if(f)return n.state.loading|=4,n.instance=f,Y(f),f;r=m0(a),(u=hi.get(u))&&qf(r,u),f=(t.ownerDocument||t).createElement("link"),Y(f);var S=f;return S._p=new Promise(function(w,H){S.onload=w,S.onerror=H}),Cn(f,"link",r),n.state.loading|=4,Yl(f,a.precedence,t),n.instance=f;case"script":return f=ar(a.src),(u=t.querySelector(bo(f)))?(n.instance=u,Y(u),u):(r=a,(u=hi.get(f))&&(r=v({},a),Yf(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),Y(u),Cn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Yl(r,a.precedence,t));return n.instance}function Yl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,S=0;S<r.length;S++){var w=r[S];if(w.dataset.precedence===n)f=w;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Yf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Zl=null;function v0(t,n,a){if(Zl===null){var r=new Map,u=Zl=new Map;u.set(a,r)}else u=Zl,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ya]||f[$t]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var w=r.get(S);w?w.push(f):r.set(S,[f])}}return r}function x0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Uy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function _0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Oy(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ir(r.href),f=n.querySelector(Mo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Kl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Y(f);return}f=n.ownerDocument||n,r=m0(r),(u=hi.get(u))&&qf(r,u),f=f.createElement("link"),Y(f);var S=f;S._p=new Promise(function(w,H){S.onload=w,S.onerror=H}),Cn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Kl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Zf=0;function Py(t,n){return t.stylesheets&&t.count===0&&Jl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Jl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Zf===0&&(Zf=62500*my());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Jl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Zf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ql=null;function Jl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ql=new Map,n.forEach(Iy,t),Ql=null,Kl.call(t))}function Iy(t,n){if(!(n.state.loading&4)){var a=Ql.get(t);if(a)var r=a.get(null);else{a=new Map,Ql.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),r=S)}r&&a.set(null,r)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||r,f===r&&a.set(null,u),a.set(S,u),this.count++,r=Kl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Eo={$$typeof:L,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function zy(t,n,a,r,u,f,S,w,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function y0(t,n,a,r,u,f,S,w,H,ie,me,Se){return t=new zy(t,n,a,S,H,ie,me,Se,w),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),t.current=f,f.stateNode=t,n=wu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Du(f),t}function S0(t){return t?(t=Ps,t):Ps}function M0(t,n,a,r,u,f){u=S0(u),r.context===null?r.context=u:r.pendingContext=u,r=_a(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ya(t,r,n),a!==null&&(Wn(a,t,n),to(a,t,n))}function b0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Kf(t,n){b0(t,n),(t=t.alternate)&&b0(t,n)}function E0(t){if(t.tag===13||t.tag===31){var n=Ja(t,67108864);n!==null&&Wn(n,t,67108864),Kf(t,67108864)}}function T0(t){if(t.tag===13||t.tag===31){var n=ii();n=Wa(n);var a=Ja(t,n);a!==null&&Wn(a,t,n),Kf(t,n)}}var $l=!0;function By(t,n,a,r){var u=F.T;F.T=null;var f=ee.p;try{ee.p=2,Qf(t,n,a,r)}finally{ee.p=f,F.T=u}}function Fy(t,n,a,r){var u=F.T;F.T=null;var f=ee.p;try{ee.p=8,Qf(t,n,a,r)}finally{ee.p=f,F.T=u}}function Qf(t,n,a,r){if($l){var u=Jf(r);if(u===null)zf(t,n,r,ec,a),w0(t,r);else if(Hy(u,t,n,a,r))r.stopPropagation();else if(w0(t,r),n&4&&-1<ky.indexOf(t)){for(;u!==null;){var f=Q(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=De(f.pendingLanes);if(S!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var H=1<<31-at(S);w.entanglements[1]|=H,S&=~H}Ui(f),(It&6)===0&&(Il=ge()+500,xo(0))}}break;case 31:case 13:w=Ja(f,2),w!==null&&Wn(w,f,2),Bl(),Kf(f,2)}if(f=Jf(r),f===null&&zf(t,n,r,ec,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else zf(t,n,r,null,a)}}function Jf(t){return t=$c(t),$f(t)}var ec=null;function $f(t){if(ec=null,t=N(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ec=t,null}function A0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ee()){case _e:return 2;case je:return 8;case Re:case ke:return 32;case gt:return 268435456;default:return 32}default:return 32}}var ed=!1,Da=null,La=null,Ua=null,To=new Map,Ao=new Map,Oa=[],ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w0(t,n){switch(t){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function wo(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Q(n),n!==null&&E0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Hy(t,n,a,r,u){switch(n){case"focusin":return Da=wo(Da,t,n,a,r,u),!0;case"dragenter":return La=wo(La,t,n,a,r,u),!0;case"mouseover":return Ua=wo(Ua,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return To.set(f,wo(To.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Ao.set(f,wo(Ao.get(f)||null,t,n,a,r,u)),!0}return!1}function C0(t){var n=N(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,qa(t.priority,function(){T0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,qa(t.priority,function(){T0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Jf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Jc=r,a.target.dispatchEvent(r),Jc=null}else return n=Q(a),n!==null&&E0(n),t.blockedOn=a,!1;n.shift()}return!0}function R0(t,n,a){tc(t)&&a.delete(n)}function Gy(){ed=!1,Da!==null&&tc(Da)&&(Da=null),La!==null&&tc(La)&&(La=null),Ua!==null&&tc(Ua)&&(Ua=null),To.forEach(R0),Ao.forEach(R0)}function nc(t,n){t.blockedOn===n&&(t.blockedOn=null,ed||(ed=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Gy)))}var ic=null;function N0(t){ic!==t&&(ic=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ic===t&&(ic=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if($f(r||a)===null)continue;break}var f=Q(a);f!==null&&(t.splice(n,3),n-=3,Qu(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function sr(t){function n(H){return nc(H,t)}Da!==null&&nc(Da,t),La!==null&&nc(La,t),Ua!==null&&nc(Ua,t),To.forEach(n),Ao.forEach(n);for(var a=0;a<Oa.length;a++){var r=Oa[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)C0(a),a.blockedOn===null&&Oa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],S=u[bn]||null;if(typeof f=="function")S||N0(a);else if(S){var w=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[bn]||null)w=S.formAction;else if($f(u)!==null)continue}else w=S.action;typeof w=="function"?a[r+1]=w:(a.splice(r,3),r-=3),N0(a)}}}function D0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function td(t){this._internalRoot=t}ac.prototype.render=td.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ii();M0(a,r,t,n,null,null)},ac.prototype.unmount=td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;M0(t.current,2,null,t,null,null),Bl(),n[Bi]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var n=zr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,t),a===0&&C0(t)}};var L0=e.version;if(L0!=="19.2.8")throw Error(s(527,L0,"19.2.8"));ee.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Vy={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{qe=sc.inject(Vy),We=sc}catch{}}return Ro.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=Fm,f=km,S=Hm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=y0(t,1,!1,null,null,a,r,null,u,f,S,D0),t[Bi]=n.current,If(t),new td(n)},Ro.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=Fm,S=km,w=Hm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=y0(t,1,!0,n,a??null,r,u,H,f,S,w,D0),n.context=S0(null),a=n.current,r=ii(),r=Wa(r),u=_a(r),u.callback=null,ya(a,u,r),a=r,n.current.lanes=a,Mn(n,a),Ui(n),t[Bi]=n.current,If(t),new ac(n)},Ro.version="19.2.8",Ro}var G0;function nS(){if(G0)return sd.exports;G0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),sd.exports=tS(),sd.exports}var iS=nS();const aS=Yv(iS),sS=()=>{const[o,e]=nt.useState({x:-100,y:-100}),[i,s]=nt.useState({x:-100,y:-100}),[l,c]=nt.useState("default"),[d,h]=nt.useState(""),[m,p]=nt.useState(!1),[_,v]=nt.useState(!1),[y,b]=nt.useState(!1),T=nt.useRef(0);return nt.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches)return;const A=D=>{v(!0);const X=D.target;let k=D.clientX,I=D.clientY;if(X){const q=X.closest("[data-magnetic]");if(q){const R=q.getBoundingClientRect(),V=R.left+R.width/2,ce=R.top+R.height/2;k=V+(D.clientX-V)*.35,I=ce+(D.clientY-ce)*.35,b(!0)}else b(!1);const U=X.closest("[data-cursor]");if(U){const R=U.getAttribute("data-cursor")||"";h(R),R.includes("ORBIT")||R.includes("3D")?c("3d"):R.includes("VIEW")||R.includes("EXPLORE")?c("view"):R.includes("COPY")?c("copy"):R.includes("OPEN")||R.includes("RESUME")?c("open"):c("pointer")}else X.closest('a, button, input, textarea, select, [role="button"]')?(c("pointer"),h("")):(c("default"),h(""))}e({x:k,y:I})},M=()=>p(!0),x=()=>p(!1),O=()=>v(!1),L=()=>v(!0);return window.addEventListener("mousemove",A,{passive:!0}),window.addEventListener("mousedown",M),window.addEventListener("mouseup",x),document.addEventListener("mouseleave",O),document.addEventListener("mouseenter",L),()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mousedown",M),window.removeEventListener("mouseup",x),document.removeEventListener("mouseleave",O),document.removeEventListener("mouseenter",L)}},[]),nt.useEffect(()=>{const A=()=>{s(M=>{const x=y?.3:.2;return{x:M.x+(o.x-M.x)*x,y:M.y+(o.y-M.y)*x}}),T.current=requestAnimationFrame(A)};return T.current=requestAnimationFrame(A),()=>cancelAnimationFrame(T.current)},[o,y]),_?g.jsxs(g.Fragment,{children:[g.jsx("div",{className:`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 hidden md:block ${m?"scale-75":l==="3d"?"scale-0":"scale-100"}`,style:{transform:`translate3d(${o.x}px, ${o.y}px, 0)`},children:g.jsx("div",{className:`rounded-full transition-all duration-200 ${l==="view"?"w-1.5 h-1.5 bg-cobalt":l==="pointer"?"w-2 h-2 bg-cobalt":"w-2 h-2 bg-ink"}`})}),g.jsx("div",{className:"fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center transition-all duration-300 ease-out",style:{transform:`translate3d(${i.x}px, ${i.y}px, 0)`},children:l==="3d"?g.jsxs("div",{className:"relative flex items-center justify-center w-14 h-14 rounded-full border border-cobalt/80 bg-ink/5 backdrop-blur-[2px] animate-spin-slow",children:[g.jsx("span",{className:"absolute text-[8px] font-mono text-cobalt font-bold tracking-widest uppercase",children:"ORBIT"}),g.jsx("div",{className:"absolute top-0 w-1.5 h-[1px] bg-cobalt"}),g.jsx("div",{className:"absolute bottom-0 w-1.5 h-[1px] bg-cobalt"}),g.jsx("div",{className:"absolute left-0 w-[1px] h-1.5 bg-cobalt"}),g.jsx("div",{className:"absolute right-0 w-[1px] h-1.5 bg-cobalt"})]}):d?g.jsxs("div",{className:`px-3 py-1 bg-ink text-canvas font-mono text-[10px] font-semibold uppercase tracking-widest border border-ink shadow-xl flex items-center gap-1.5 transition-transform duration-200 ${m?"scale-90":"scale-100"}`,children:[g.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cobalt animate-pulse"}),g.jsx("span",{children:d})]}):l==="pointer"?g.jsx("div",{className:`w-10 h-10 rounded-full border border-cobalt bg-cobalt/10 backdrop-blur-[1px] transition-all duration-200 ${m?"scale-75":"scale-100"}`}):g.jsx("div",{className:`w-6 h-6 rounded-full border border-rule transition-all duration-200 ${m?"scale-50 border-ink":"scale-100"}`})})]}):null},rS=()=>{const[o,e]=nt.useState(0);return nt.useEffect(()=>{const i=()=>{const s=document.documentElement.scrollHeight-window.innerHeight;if(s>0){const l=window.scrollY/s*100;e(l)}};return window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[]),g.jsx("div",{className:"fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent pointer-events-none",children:g.jsx("div",{className:"h-full bg-cobalt transition-all duration-75 ease-out",style:{width:`${o}%`}})})};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zv=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=nt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...h},m)=>nt.createElement("svg",{ref:m,...lS,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:Zv("lucide",l),...h},[...d.map(([p,_])=>nt.createElement(p,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=(o,e)=>{const i=nt.forwardRef(({className:s,...l},c)=>nt.createElement(cS,{ref:c,iconNode:e,className:Zv(`lucide-${oS(o)}`,s),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]],fS=Ot("ArrowDownRight",uS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Kv=Ot("ArrowRight",dS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Qv=Ot("ArrowUpRight",hS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],mS=Ot("ArrowUp",pS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Jv=Ot("Award",gS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],xS=Ot("BookOpen",vS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],yS=Ot("Check",_S);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],MS=Ot("CircleCheck",SS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],ES=Ot("Clock",bS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],AS=Ot("CodeXml",TS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],CS=Ot("Code",wS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]],NS=Ot("Command",RS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],LS=Ot("Copy",DS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],OS=Ot("Cpu",US);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],$v=Ot("Download",PS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Uh=Ot("ExternalLink",IS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],BS=Ot("FileCheck",zS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Fo=Ot("FileText",FS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Xc=Ot("Github",kS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],GS=Ot("GraduationCap",HS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],ex=Ot("Linkedin",VS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],tx=Ot("Mail",jS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],nx=Ot("MapPin",XS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],qS=Ot("Menu",WS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],ZS=Ot("Phone",YS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],QS=Ot("Search",KS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],$S=Ot("Send",JS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Gd=Ot("Sparkles",eM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],zo=Ot("Terminal",tM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],iM=Ot("Volume2",nM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],sM=Ot("VolumeX",aM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Go=Ot("X",rM);class oM{constructor(){nd(this,"ctx",null);nd(this,"isMuted",!0);this.isMuted=!0}initCtx(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted||(this.initCtx(),this.playBlip(520,.04)),this.isMuted}getMuted(){return this.isMuted}playHover(){if(!this.isMuted&&(this.initCtx(),!!this.ctx))try{const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(440,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(880,this.ctx.currentTime+.03),i.gain.setValueAtTime(.015,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.04),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}catch{}}playClick(){if(!this.isMuted&&(this.initCtx(),!!this.ctx))try{const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(220,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(110,this.ctx.currentTime+.06),i.gain.setValueAtTime(.04,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.06),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.06)}catch{}}playBlip(e=600,i=.05){if(!this.isMuted&&(this.initCtx(),!!this.ctx))try{const s=this.ctx.createOscillator(),l=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(e,this.ctx.currentTime),l.gain.setValueAtTime(.03,this.ctx.currentTime),l.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+i),s.connect(l),l.connect(this.ctx.destination),s.start(),s.stop(this.ctx.currentTime+i)}catch{}}}const st=new oM,fn={name:"Paul Nihil",initials:"PN",title:"Computer Science Engineer & Full-Stack Developer",coordinates:"9.9252° N, 78.1198° E // 13.0673° N, 80.2217° E",email:"paulnihil20@gmail.com",phone:"+91 80122 23232",github:"https://github.com/paulnihil20-oss",linkedin:"https://www.linkedin.com/in/paulnihil-p-150a54328",resumePdf:"/Paul_Nihil_Resume.pdf",edition:"2026 EDITION // ARCHIVE NO. 01"},V0=[{id:"smart-traffic",number:"01",title:"Smart Traffic Signal & Emergency Priority System",category:"Edge AI / Computer Vision / IoT",year:"2025",role:"Lead Developer & Computer Vision Engineer",tagline:"Autonomous traffic signal optimization with real-time emergency ambulance routing.",description:"An AI-powered traffic management system that uses motion cameras and computer vision to dynamically calculate optimal signal timings based on real-time vehicle density. Automatically detects emergency service vehicles (ambulances, fire engines) and coordinates with city grid signals to grant immediate priority corridors from incident point to medical centers.",problem:"Urban intersections suffer from static timer delays, causing congestion and severe transit delays for emergency ambulances navigating traffic gridlock.",solution:"Engineered an edge computer vision pipeline with OpenCV and Python that counts live vehicles per lane, dynamically adjusts signal durations, and triggers instant green corridor sequencing upon detecting emergency vehicles.",architecture:["Edge Camera Feed & Video Stream Preprocessing","YOLO / OpenCV Object Detection & Vehicle Density Estimator","Dynamic Signal Timing Optimizer (Density-Weighted Algorithm)","Emergency Vehicle Siren & Visual Beacon Detection Protocol","IoT Microcontroller Signal Relay / Grid Dispatch Interface"],metrics:["Up to 40% reduction in peak-hour intersection waiting time","< 150ms vehicle detection latency per frame on edge hardware","Automatic fail-safe protocol for concurrent emergency requests"],technologies:["Python","OpenCV","AI / ML","IoT","REST APIs"],githubUrl:"https://github.com/paulnihil20-oss/smart-accident",image:"/images/smart_traffic.png"},{id:"fintech-platform",number:"02",title:"FinTech Intelligent Financial Tracker",category:"Full-Stack Web & Financial Analytics",year:"2024",role:"Full Stack Engineer & UI Architect",tagline:"Automated personal finance tracking engine powered by bank SMS parsing and live gold rate telemetry.",description:"A smart financial management platform tailored for middle-class families. Eliminates manual bookkeeping by parsing bank transaction SMS alerts into structured financial ledgers. Provides real-time category expense breakdowns, predictive monthly budget forecasting, and integrated live market commodity metrics including gold and silver rates.",problem:"Most budget apps require tedious manual expense entry, leading to low user retention and inaccurate personal financial visibility.",solution:"Built an automated ingest pipeline that parses transactional SMS data with regular expression heuristics, categorizes merchant transactions automatically, and provides interactive visual cashflow dashboards.",architecture:["SMS Gateway / Webhook Transaction Parser Engine","Categorization Rules & Merchant Normalization Engine","Real-Time Live Commodity & Gold Rate REST API Feeds","Interactive Expense Telemetry & Visual Cashflow Graphs","Encrypted Local & Cloud Database Ledger Persistence"],metrics:["Zero manual entry required for 90%+ of standard bank transactions","Live commodity price updates synced via external financial APIs","Sub-second dashboard loading with optimized client-side state"],technologies:["JavaScript","HTML5","CSS3","SMS API","Financial REST APIs"],githubUrl:"https://github.com/paulnihil20-oss/lulaby",image:"/images/fintech.png"},{id:"approvex",number:"03",title:"ApproveX Campus Workflow Automation Platform",category:"Enterprise Web Application",year:"2024",role:"Full-Stack Developer & Database Architect",tagline:"Paperless digital clearance and multi-tier approval system for educational institutions.",description:"A comprehensive campus administrative management platform that digitizes student leave applications, on-duty permissions, and faculty sign-offs. Replaces physical signature chasing and paper forms with an auditable, multi-role digital approval matrix complete with status tracking and administrative oversight.",problem:"Traditional university paper approvals waste hours for students and staff, frequently causing lost documents, delays, and zero audit trails.",solution:"Designed a structured role-based access platform (Student, Faculty Advisor, HOD, Dean) with instant notification triggers, digital status stamping, and centralized record archiving.",architecture:["Role-Based Access Control (RBAC) & Authentication Module","Multi-Tier Workflow Engine with State Machine Transitions","Relational Schema on MySQL for Audit Logs & Application History","Responsive Web Client with Real-Time Approval Status Badges","Administrative Analytics Dashboard for Departmental Reporting"],metrics:["100% elimination of paper requisition forms","Approval turnaround dropped from days to minutes","Tamper-proof digital timestamping for all signed clearances"],technologies:["Java","HTML5","CSS3","JavaScript","MySQL","JDBC"],githubUrl:"https://github.com/paulnihil20-oss/approvex",image:"/images/approvex.png"}],j0=[{id:"oracle-sql",number:"01",title:"Oracle Database Programming with SQL",issuer:"Oracle Academy",year:"2024",category:"Database Architecture",description:"Comprehensive professional certification covering relational database concepts, complex SQL queries, subqueries, join operations, constraints, schema design, and high-performance data manipulation on Oracle Database systems.",skills:["SQL DDL/DML","Data Modeling","Subqueries & Joins","Database Optimization","Relational Schema"],pdfPath:"/certificates/oracle_sql.pdf",badge:"ORACLE ACADEMY"},{id:"oracle-plsql",number:"02",title:"Oracle Database Programming with PL/SQL",issuer:"Oracle Academy",year:"2024",category:"Procedural Database Programming",description:"Validated expertise in procedural database architecture including stored procedures, functions, packages, database triggers, exception handling, cursor management, and enterprise backend transaction management.",skills:["PL/SQL Procedures","Database Triggers","Stored Functions","Cursors & Transactions","Error Handling"],pdfPath:"/certificates/oracle_plsql.pdf",badge:"ORACLE ACADEMY"},{id:"java-pro",number:"03",title:"Java Professional Developer Certification",issuer:"Udemy Professional",year:"2024",category:"Software Engineering",description:"Extensive programming certification covering Object-Oriented Programming (OOP), Java Collections Framework, Multi-threading, File I/O, Exception Handling, Data Structures, and Enterprise Application Design Patterns.",skills:["Java Core & OOP","Collections Framework","Multi-Threading","Design Patterns","Data Structures"],pdfPath:"/certificates/java_certificate.pdf",badge:"UDEMY CERTIFIED"},{id:"figma-ux",number:"04",title:"UI/UX Design & Prototyping Workshop",issuer:"Figma Design Workshop",year:"2023",category:"User Interface & Interaction Design",description:"Hands-on design certification focused on modern UI/UX design systems, component architecture, auto-layout, interactive high-fidelity prototyping, design tokens, and developer handoff workflows.",skills:["Design Systems","Auto-Layout","Interactive Prototyping","Component Architecture","Wireframing"],pdfPath:"/certificates/figma.pdf",badge:"FIGMA WORKSHOP"}],lM=[{year:"2022 – 2026",period:"PRESENT",title:"B.E. in Computer Science Engineering",institution:"Loyola-ICAM College of Engineering and Technology (LICET)",location:"Chennai, Tamil Nadu",category:"EDUCATION",description:"Undergraduate engineering degree encompassing data structures, algorithms, operating systems, database management systems, computer networks, and full-stack software architecture. Actively engaged in technical symposiums and open-source project development.",highlights:["Comprehensive focus on Software Engineering & Object-Oriented Systems","Database programming with Oracle SQL and MySQL","Building practical software projects addressing civic and campus workflow needs"]},{year:"2024 – 2025",period:"PROJECTS & RESEARCH",title:"Edge AI & Enterprise Systems Development",institution:"Independent & Academic Research",location:"Chennai / Madurai",category:"PROJECT",description:"Engineered Smart Traffic Signal with OpenCV edge detection, ApproveX campus workflow software, and FinTech transaction analytics platform.",highlights:["Applied computer vision to civic traffic optimization problems","Developed end-to-end full stack web platforms with Java & JavaScript"]},{year:"2024",period:"CREDENTIALS",title:"Professional Certifications in Oracle SQL, PL/SQL & Java",institution:"Oracle Academy & Udemy",location:"Global / Online",category:"CERTIFICATION",description:"Completed comprehensive rigorous certifications validating database engineering and object-oriented backend programming.",highlights:["Oracle Academy certified in SQL & PL/SQL procedural programming","Advanced Java enterprise foundations"]},{year:"2020 – 2022",period:"COMPLETED",title:"Higher Secondary Certificate (HSC) — Computer Science & Math",institution:"Maharishi Vidya Mandir Sr. Sec. School",location:"Madurai, Tamil Nadu",category:"EDUCATION",description:"Completed higher secondary education with distinction in Computer Science, Mathematics, and Physical Sciences, laying foundational programming and algorithmic reasoning.",highlights:["Core focus on Computer Science and Advanced Mathematics","First principles of C and procedural logic"]},{year:"2020",period:"COMPLETED",title:"Secondary School Leaving Certificate (SSLC)",institution:"Maharishi Vidya Mandir Sr. Sec. School",location:"Madurai, Tamil Nadu",category:"EDUCATION",description:"Graduated secondary school with excellent academic standing, discovering a keen passion for computing and digital systems.",highlights:["Academic excellence across sciences and mathematics"]}],rc=[{category:"PROGRAMMING LANGUAGES",code:"01",skills:[{name:"Java",level:"Advanced",experience:"3+ Years",description:"Core OOP, Collections, Multithreading, JDBC, Design Patterns"},{name:"Python",level:"Advanced",experience:"2+ Years",description:"Computer Vision (OpenCV), Scripting, Data Processing, ML basics"},{name:"SQL",level:"Expert",experience:"2+ Years",description:"Complex Queries, Subqueries, Joins, Schema Design, Optimization"},{name:"PL/SQL",level:"Proficient",experience:"1+ Years",description:"Stored Procedures, Triggers, Functions, Cursor Management"},{name:"C",level:"Advanced",experience:"2+ Years",description:"Memory Management, Pointers, Algorithms, Systems Foundations"},{name:"JavaScript (ES6+)",level:"Advanced",experience:"2+ Years",description:"DOM Manipulation, Async/Await, Web APIs, Modern Frontends"}]},{category:"FRONTEND ARCHITECTURE",code:"02",skills:[{name:"React",level:"Proficient",experience:"1+ Years",description:"Component Architecture, Hooks, State Management, SPAs"},{name:"HTML5 & Semantic Web",level:"Expert",experience:"3+ Years",description:"Accessible Markup, SEO Standards, Cross-Browser Compatibility"},{name:"CSS3 & Modern Layouts",level:"Expert",experience:"3+ Years",description:"Flexbox, CSS Grid, Custom Properties, Kinetic Animations"},{name:"Tailwind CSS",level:"Advanced",experience:"2+ Years",description:"Utility-First Systems, Custom Design Tokens, Responsive Grids"},{name:"UI / UX Design",level:"Advanced",experience:"2+ Years",description:"Visual Hierarchy, Typography, Design Systems, User Research"}]},{category:"BACKEND & DATABASE",code:"03",skills:[{name:"MySQL",level:"Advanced",experience:"2+ Years",description:"Relational Database Design, Indexing, Transaction Handling"},{name:"Oracle Database",level:"Advanced",experience:"2+ Years",description:"Enterprise Data Structures, Stored Procedures, PL/SQL Execution"},{name:"RESTful API Design",level:"Advanced",experience:"2+ Years",description:"Endpoint Architecture, JSON Serialization, HTTP Methods"},{name:"Node.js Basics",level:"Intermediate",experience:"1+ Years",description:"Server Execution, Express Routing, Backend Middleware"},{name:"JDBC",level:"Advanced",experience:"2+ Years",description:"Java Database Connectivity, Connection Pools, Prepared Statements"}]},{category:"ENGINEERING TOOLS & WORKFLOW",code:"04",skills:[{name:"Git & GitHub",level:"Advanced",experience:"3+ Years",description:"Version Control, Branching Strategies, Pull Requests, CI/CD"},{name:"Figma",level:"Advanced",experience:"2+ Years",description:"High-Fidelity Wireframes, Prototyping, Component Libraries"},{name:"VS Code",level:"Expert",experience:"3+ Years",description:"Developer Tooling, Debugging, Extensions, Workflow Tuning"},{name:"Linux / Terminal",level:"Proficient",experience:"2+ Years",description:"Shell Commands, Scripting, Process Management, Git CLI"}]}],cM=[{id:"fluid-kinetic",title:"Kinetic WebGL Fluid Vector Field",description:"An interactive real-time vector field that creates fluid particle currents responding to cursor acceleration and velocity.",tech:"Three.js / WebGL / GLSL"},{id:"topo-mesh",title:"Mathematical Topographic Mesh Deformer",description:"Parametric wireframe mesh with real-time Perlin noise elevation waves calculated dynamically in 3D space.",tech:"Three.js / Shader Shading"},{id:"ascii-renderer",title:"Real-Time ASCII Typographic Canvas",description:"Converts 3D geometry renders into dynamic high-contrast ASCII character matrices in real-time.",tech:"Canvas API / Monospace Matrix"}],uM=({onOpenCommandPalette:o,onOpenResume:e})=>{const[i,s]=nt.useState(!1),[l,c]=nt.useState(st.getMuted()),[d,h]=nt.useState(!1),[m,p]=nt.useState("hero");nt.useEffect(()=>{const y=()=>{s(window.scrollY>40);const b=["hero","statement","work","about","skills","timeline","certificates","playground","contact"],T=window.scrollY+200;for(const A of b){const M=document.getElementById(A);if(M){const x=M.offsetTop,O=M.offsetHeight;if(T>=x&&T<x+O){p(A);break}}}};return window.addEventListener("scroll",y),()=>window.removeEventListener("scroll",y)},[]);const _=()=>{const y=st.toggleMute();c(y)},v=[{name:"Work",href:"#work"},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Experience",href:"#timeline"},{name:"Archive",href:"#certificates"},{name:"Playground",href:"#playground"},{name:"Contact",href:"#contact"}];return g.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${i?"bg-canvas/90 backdrop-blur-md border-b border-rule py-3":"bg-transparent py-5 border-b border-transparent"}`,children:[g.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between",children:[g.jsxs("a",{href:"#hero",onClick:()=>st.playClick(),className:"flex items-center gap-3 group","data-cursor":"TOP",children:[g.jsx("span",{className:"font-display font-bold text-lg text-ink tracking-tight",children:fn.initials}),g.jsx("span",{className:"font-mono text-[11px] text-ink-muted uppercase tracking-widest border-l border-rule pl-3 hidden sm:inline-block",children:"01 // PORTFOLIO"})]}),g.jsx("nav",{className:"hidden md:flex items-center gap-7",children:v.map(y=>{const b=m===y.href.substring(1);return g.jsxs("a",{href:y.href,onClick:()=>st.playClick(),onMouseEnter:()=>st.playHover(),className:`font-mono text-xs uppercase tracking-widest transition-colors relative py-1 ${b?"text-ink font-semibold":"text-ink-muted hover:text-ink"}`,children:[y.name,b&&g.jsx("span",{className:"absolute bottom-0 left-0 w-full h-[1.5px] bg-cobalt"})]},y.name)})}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsxs("button",{onClick:()=>{st.playClick(),e()},className:"hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-rule hover:border-ink bg-transparent text-ink font-mono text-xs uppercase tracking-wider transition-colors","data-cursor":"RESUME",children:[g.jsx(Fo,{className:"w-3.5 h-3.5 text-cobalt"}),g.jsx("span",{children:"Resume"})]}),g.jsx("button",{onClick:_,"aria-label":l?"Unmute Audio Feedback":"Mute Audio Feedback",className:"p-1.5 border border-rule hover:border-ink text-ink-muted hover:text-ink transition-colors",title:l?"Sound: OFF (Click to Enable)":"Sound: ON (Click to Mute)",children:l?g.jsx(sM,{className:"w-4 h-4"}):g.jsx(iM,{className:"w-4 h-4 text-cobalt"})}),g.jsxs("button",{onClick:()=>{st.playClick(),o()},className:"hidden lg:flex items-center gap-2 px-3 py-1.5 border border-rule hover:border-ink text-ink-muted hover:text-ink font-mono text-xs transition-colors",title:"Command Palette (Ctrl+K)",children:[g.jsx(NS,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"⌘K"})]}),g.jsx("button",{onClick:()=>{st.playClick(),h(!d)},"aria-label":"Toggle Navigation Menu",className:"p-1.5 border border-rule hover:border-ink md:hidden text-ink",children:d?g.jsx(Go,{className:"w-5 h-5"}):g.jsx(qS,{className:"w-5 h-5"})})]})]}),d&&g.jsxs("div",{className:"md:hidden bg-canvas border-b border-rule px-6 py-6 space-y-4 animate-in slide-in-from-top-2",children:[g.jsx("div",{className:"flex flex-col space-y-3",children:v.map(y=>g.jsxs("a",{href:y.href,onClick:()=>{st.playClick(),h(!1)},className:"font-mono text-sm uppercase tracking-widest text-ink py-2 border-b border-rule/50 flex items-center justify-between",children:[g.jsx("span",{children:y.name}),g.jsx("span",{className:"text-xs text-ink-muted font-normal",children:"→"})]},y.name))}),g.jsx("div",{className:"pt-2 flex items-center justify-between gap-3",children:g.jsxs("button",{onClick:()=>{st.playClick(),h(!1),e()},className:"w-full flex items-center justify-center gap-2 py-2.5 bg-ink text-canvas font-mono text-xs uppercase tracking-widest",children:[g.jsx(Fo,{className:"w-4 h-4 text-cobalt"}),g.jsx("span",{children:"View Full Resume"})]})})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oh="173",fM=0,X0=1,dM=2,ix=1,hM=2,oa=3,Xa=0,Zn=1,Pi=2,Va=0,br=1,W0=2,q0=3,Y0=4,pM=5,_s=100,mM=101,gM=102,vM=103,xM=104,_M=200,yM=201,SM=202,MM=203,Vd=204,jd=205,bM=206,EM=207,TM=208,AM=209,wM=210,CM=211,RM=212,NM=213,DM=214,Xd=0,Wd=1,qd=2,Ar=3,Yd=4,Zd=5,Kd=6,Qd=7,ax=0,LM=1,UM=2,ja=0,OM=1,PM=2,IM=3,sx=4,zM=5,BM=6,FM=7,rx=300,wr=301,Cr=302,Jd=303,$d=304,Wc=306,eh=1e3,Ms=1001,th=1002,wi=1003,kM=1004,oc=1005,Ii=1006,cd=1007,bs=1008,fa=1009,ox=1010,lx=1011,ko=1012,Ph=1013,Es=1014,la=1015,Vo=1016,Ih=1017,zh=1018,Rr=1020,cx=35902,ux=1021,fx=1022,Ai=1023,dx=1024,hx=1025,Er=1026,Nr=1027,px=1028,Bh=1029,mx=1030,Fh=1031,kh=1033,Lc=33776,Uc=33777,Oc=33778,Pc=33779,nh=35840,ih=35841,ah=35842,sh=35843,rh=36196,oh=37492,lh=37496,ch=37808,uh=37809,fh=37810,dh=37811,hh=37812,ph=37813,mh=37814,gh=37815,vh=37816,xh=37817,_h=37818,yh=37819,Sh=37820,Mh=37821,Ic=36492,bh=36494,Eh=36495,gx=36283,Th=36284,Ah=36285,wh=36286,HM=3200,GM=3201,vx=0,VM=1,Ga="",mi="srgb",Dr="srgb-linear",Bc="linear",jt="srgb",rr=7680,Z0=519,jM=512,XM=513,WM=514,xx=515,qM=516,YM=517,ZM=518,KM=519,K0=35044,Q0="300 es",ca=2e3,Fc=2001;class Ur{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ud=Math.PI/180,Ch=180/Math.PI;function jo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function bt(o,e,i){return Math.max(e,Math.min(i,o))}function QM(o,e){return(o%e+e)%e}function fd(o,e,i){return(1-i)*o+i*e}function No(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function qn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,i=0){vt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,i,s,l,c,d,h,m,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p)}set(e,i,s,l,c,d,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],_=s[4],v=s[7],y=s[2],b=s[5],T=s[8],A=l[0],M=l[3],x=l[6],O=l[1],L=l[4],D=l[7],X=l[2],k=l[5],I=l[8];return c[0]=d*A+h*O+m*X,c[3]=d*M+h*L+m*k,c[6]=d*x+h*D+m*I,c[1]=p*A+_*O+v*X,c[4]=p*M+_*L+v*k,c[7]=p*x+_*D+v*I,c[2]=y*A+b*O+T*X,c[5]=y*M+b*L+T*k,c[8]=y*x+b*D+T*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*d*_-i*h*p-s*c*_+s*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*d-h*p,y=h*m-_*c,b=p*c-d*m,T=i*v+s*y+l*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(l*p-_*s)*A,e[2]=(h*s-l*d)*A,e[3]=y*A,e[4]=(_*i-l*m)*A,e[5]=(l*c-h*i)*A,e[6]=b*A,e[7]=(s*m-p*i)*A,e[8]=(d*i-s*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(dd.makeScale(e,i)),this}rotate(e){return this.premultiply(dd.makeRotation(-e)),this}translate(e,i){return this.premultiply(dd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dd=new pt;function _x(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function kc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function JM(){const o=kc("canvas");return o.style.display="block",o}const J0={};function yr(o){o in J0||(J0[o]=!0,console.warn(o))}function $M(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function eb(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tb(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $0=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ev=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nb(){const o={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===jt&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===jt&&(l.r=Tr(l.r),l.g=Tr(l.g),l.b=Tr(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Bc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Dr]:{primaries:e,whitePoint:s,transfer:Bc,toXYZ:$0,fromXYZ:ev,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:s,transfer:jt,toXYZ:$0,fromXYZ:ev,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),o}const Ut=nb();function ua(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Tr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let or;class ib{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{or===void 0&&(or=kc("canvas")),or.width=e.width,or.height=e.height;const s=or.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=or}return i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=kc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ua(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ua(i[s]/255)*255):i[s]=ua(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ab=0;class yx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(hd(l[d].image)):c.push(hd(l[d]))}else c=hd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function hd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ib.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sb=0;class Kn extends Ur{constructor(e=Kn.DEFAULT_IMAGE,i=Kn.DEFAULT_MAPPING,s=Ms,l=Ms,c=Ii,d=bs,h=Ai,m=fa,p=Kn.DEFAULT_ANISOTROPY,_=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=jo(),this.name="",this.source=new yx(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eh:e.x=e.x-Math.floor(e.x);break;case Ms:e.x=e.x<0?0:1;break;case th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eh:e.y=e.y-Math.floor(e.y);break;case Ms:e.y=e.y<0?0:1;break;case th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=rx;Kn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,i=0,s=0,l=1){Xt.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],_=m[4],v=m[8],y=m[1],b=m[5],T=m[9],A=m[2],M=m[6],x=m[10];if(Math.abs(_-y)<.01&&Math.abs(v-A)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+y)<.1&&Math.abs(v+A)<.1&&Math.abs(T+M)<.1&&Math.abs(p+b+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(b+1)/2,X=(x+1)/2,k=(_+y)/4,I=(v+A)/4,q=(T+M)/4;return L>D&&L>X?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=k/s,c=I/s):D>X?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=k/l,c=q/l):X<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(X),s=I/c,l=q/c),this.set(s,l,c,i),this}let O=Math.sqrt((M-T)*(M-T)+(v-A)*(v-A)+(y-_)*(y-_));return Math.abs(O)<.001&&(O=1),this.x=(M-T)/O,this.y=(v-A)/O,this.z=(y-_)/O,this.w=Math.acos((p+b+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this.w=bt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this.w=bt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rb extends Ur{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Xt(0,0,e,i),this.scissorTest=!1,this.viewport=new Xt(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Kn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const i=Object.assign({},e.texture.image);return this.texture.source=new yx(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends rb{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Sx extends Kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wi,this.minFilter=wi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ob extends Kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wi,this.minFilter=wi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3];const y=c[d+0],b=c[d+1],T=c[d+2],A=c[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v;return}if(h===1){e[i+0]=y,e[i+1]=b,e[i+2]=T,e[i+3]=A;return}if(v!==A||m!==y||p!==b||_!==T){let M=1-h;const x=m*y+p*b+_*T+v*A,O=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const X=Math.sqrt(L),k=Math.atan2(X,x*O);M=Math.sin(M*k)/X,h=Math.sin(h*k)/X}const D=h*O;if(m=m*M+y*D,p=p*M+b*D,_=_*M+T*D,v=v*M+A*D,M===1-h){const X=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=X,p*=X,_*=X,v*=X}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[d],y=c[d+1],b=c[d+2],T=c[d+3];return e[i]=h*T+_*v+m*b-p*y,e[i+1]=m*T+_*y+p*v-h*b,e[i+2]=p*T+_*b+h*y-m*v,e[i+3]=_*T-h*v-m*y-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),v=h(c/2),y=m(s/2),b=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=y*_*v+p*b*T,this._y=p*b*v-y*_*T,this._z=p*_*T+y*b*v,this._w=p*_*v-y*b*T;break;case"YXZ":this._x=y*_*v+p*b*T,this._y=p*b*v-y*_*T,this._z=p*_*T-y*b*v,this._w=p*_*v+y*b*T;break;case"ZXY":this._x=y*_*v-p*b*T,this._y=p*b*v+y*_*T,this._z=p*_*T+y*b*v,this._w=p*_*v-y*b*T;break;case"ZYX":this._x=y*_*v-p*b*T,this._y=p*b*v+y*_*T,this._z=p*_*T-y*b*v,this._w=p*_*v+y*b*T;break;case"YZX":this._x=y*_*v+p*b*T,this._y=p*b*v+y*_*T,this._z=p*_*T-y*b*v,this._w=p*_*v-y*b*T;break;case"XZY":this._x=y*_*v-p*b*T,this._y=p*b*v-y*_*T,this._z=p*_*T+y*b*v,this._w=p*_*v+y*b*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],y=s+h+v;if(y>0){const b=.5/Math.sqrt(y+1);this._w=.25/b,this._x=(_-m)*b,this._y=(c-p)*b,this._z=(d-l)*b}else if(s>h&&s>v){const b=2*Math.sqrt(1+s-h-v);this._w=(_-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(c+p)/b}else if(h>v){const b=2*Math.sqrt(1+h-s-v);this._w=(c-p)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+_)/b}else{const b=2*Math.sqrt(1+v-s-h);this._w=(d-l)/b,this._x=(c+p)/b,this._y=(m+_)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+d*h+l*p-c*m,this._y=l*_+d*m+c*h-s*p,this._z=c*_+d*p+s*m-l*h,this._w=d*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,d=this._w;let h=d*e._w+s*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=s,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const b=1-i;return this._w=b*d+i*this._w,this._x=b*s+i*this._x,this._y=b*l+i*this._y,this._z=b*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,h),v=Math.sin((1-i)*_)/p,y=Math.sin(i*_)/p;return this._w=d*v+this._w*y,this._x=s*v+this._x*y,this._y=l*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(tv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(tv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),_=2*(h*i-c*l),v=2*(c*s-d*i);return this.x=i+m*p+d*v-h*_,this.y=s+m*_+h*p-c*v,this.z=l+m*v+c*_-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pd=new Z,tv=new Xo;class Wo{constructor(e=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Mi):Mi.fromBufferAttribute(c,d),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),lc.copy(s.boundingBox)),lc.applyMatrix4(e.matrixWorld),this.union(lc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),cc.subVectors(this.max,Do),lr.subVectors(e.a,Do),cr.subVectors(e.b,Do),ur.subVectors(e.c,Do),Ia.subVectors(cr,lr),za.subVectors(ur,cr),fs.subVectors(lr,ur);let i=[0,-Ia.z,Ia.y,0,-za.z,za.y,0,-fs.z,fs.y,Ia.z,0,-Ia.x,za.z,0,-za.x,fs.z,0,-fs.x,-Ia.y,Ia.x,0,-za.y,za.x,0,-fs.y,fs.x,0];return!md(i,lr,cr,ur,cc)||(i=[1,0,0,0,1,0,0,0,1],!md(i,lr,cr,ur,cc))?!1:(uc.crossVectors(Ia,za),i=[uc.x,uc.y,uc.z],md(i,lr,cr,ur,cc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const na=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Mi=new Z,lc=new Wo,lr=new Z,cr=new Z,ur=new Z,Ia=new Z,za=new Z,fs=new Z,Do=new Z,cc=new Z,uc=new Z,ds=new Z;function md(o,e,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){ds.fromArray(o,c);const h=l.x*Math.abs(ds.x)+l.y*Math.abs(ds.y)+l.z*Math.abs(ds.z),m=e.dot(ds),p=i.dot(ds),_=s.dot(ds);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const lb=new Wo,Lo=new Z,gd=new Z;class qo{constructor(e=new Z,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):lb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Lo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(gd)),this.expandByPoint(Lo.copy(e.center).sub(gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ia=new Z,vd=new Z,fc=new Z,Ba=new Z,xd=new Z,dc=new Z,_d=new Z;class Hh{constructor(e=new Z,i=new Z(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ia)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ia.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ia.copy(this.origin).addScaledVector(this.direction,i),ia.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){vd.copy(e).add(i).multiplyScalar(.5),fc.copy(i).sub(e).normalize(),Ba.copy(this.origin).sub(vd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(fc),h=Ba.dot(this.direction),m=-Ba.dot(fc),p=Ba.lengthSq(),_=Math.abs(1-d*d);let v,y,b,T;if(_>0)if(v=d*m-h,y=d*h-m,T=c*_,v>=0)if(y>=-T)if(y<=T){const A=1/_;v*=A,y*=A,b=v*(v+d*y+2*h)+y*(d*v+y+2*m)+p}else y=c,v=Math.max(0,-(d*y+h)),b=-v*v+y*(y+2*m)+p;else y=-c,v=Math.max(0,-(d*y+h)),b=-v*v+y*(y+2*m)+p;else y<=-T?(v=Math.max(0,-(-d*c+h)),y=v>0?-c:Math.min(Math.max(-c,-m),c),b=-v*v+y*(y+2*m)+p):y<=T?(v=0,y=Math.min(Math.max(-c,-m),c),b=y*(y+2*m)+p):(v=Math.max(0,-(d*c+h)),y=v>0?c:Math.min(Math.max(-c,-m),c),b=-v*v+y*(y+2*m)+p);else y=d>0?-c:c,v=Math.max(0,-(d*y+h)),b=-v*v+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(vd).addScaledVector(fc,y),b}intersectSphere(e,i){ia.subVectors(e.center,this.origin);const s=ia.dot(this.direction),l=ia.dot(ia)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),_>=0?(c=(e.min.y-y.y)*_,d=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,d=(e.min.y-y.y)*_),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),v>=0?(h=(e.min.z-y.z)*v,m=(e.max.z-y.z)*v):(h=(e.max.z-y.z)*v,m=(e.min.z-y.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ia)!==null}intersectTriangle(e,i,s,l,c){xd.subVectors(i,e),dc.subVectors(s,e),_d.crossVectors(xd,dc);let d=this.direction.dot(_d),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ba.subVectors(this.origin,e);const m=h*this.direction.dot(dc.crossVectors(Ba,dc));if(m<0)return null;const p=h*this.direction.dot(xd.cross(Ba));if(p<0||m+p>d)return null;const _=-h*Ba.dot(_d);return _<0?null:this.at(_/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,i,s,l,c,d,h,m,p,_,v,y,b,T,A,M){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p,_,v,y,b,T,A,M)}set(e,i,s,l,c,d,h,m,p,_,v,y,b,T,A,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=_,x[10]=v,x[14]=y,x[3]=b,x[7]=T,x[11]=A,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/fr.setFromMatrixColumn(e,0).length(),c=1/fr.setFromMatrixColumn(e,1).length(),d=1/fr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const y=d*_,b=d*v,T=h*_,A=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=b+T*p,i[5]=y-A*p,i[9]=-h*m,i[2]=A-y*p,i[6]=T+b*p,i[10]=d*m}else if(e.order==="YXZ"){const y=m*_,b=m*v,T=p*_,A=p*v;i[0]=y+A*h,i[4]=T*h-b,i[8]=d*p,i[1]=d*v,i[5]=d*_,i[9]=-h,i[2]=b*h-T,i[6]=A+y*h,i[10]=d*m}else if(e.order==="ZXY"){const y=m*_,b=m*v,T=p*_,A=p*v;i[0]=y-A*h,i[4]=-d*v,i[8]=T+b*h,i[1]=b+T*h,i[5]=d*_,i[9]=A-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const y=d*_,b=d*v,T=h*_,A=h*v;i[0]=m*_,i[4]=T*p-b,i[8]=y*p+A,i[1]=m*v,i[5]=A*p+y,i[9]=b*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const y=d*m,b=d*p,T=h*m,A=h*p;i[0]=m*_,i[4]=A-y*v,i[8]=T*v+b,i[1]=v,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=b*v+T,i[10]=y-A*v}else if(e.order==="XZY"){const y=d*m,b=d*p,T=h*m,A=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=y*v+A,i[5]=d*_,i[9]=b*v-T,i[2]=T*v-b,i[6]=h*_,i[10]=A*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cb,e,ub)}lookAt(e,i,s){const l=this.elements;return ai.subVectors(e,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Fa.crossVectors(s,ai),Fa.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Fa.crossVectors(s,ai)),Fa.normalize(),hc.crossVectors(ai,Fa),l[0]=Fa.x,l[4]=hc.x,l[8]=ai.x,l[1]=Fa.y,l[5]=hc.y,l[9]=ai.y,l[2]=Fa.z,l[6]=hc.z,l[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],_=s[1],v=s[5],y=s[9],b=s[13],T=s[2],A=s[6],M=s[10],x=s[14],O=s[3],L=s[7],D=s[11],X=s[15],k=l[0],I=l[4],q=l[8],U=l[12],R=l[1],V=l[5],ce=l[9],fe=l[13],ye=l[2],xe=l[6],F=l[10],ee=l[14],J=l[3],be=l[7],z=l[11],E=l[15];return c[0]=d*k+h*R+m*ye+p*J,c[4]=d*I+h*V+m*xe+p*be,c[8]=d*q+h*ce+m*F+p*z,c[12]=d*U+h*fe+m*ee+p*E,c[1]=_*k+v*R+y*ye+b*J,c[5]=_*I+v*V+y*xe+b*be,c[9]=_*q+v*ce+y*F+b*z,c[13]=_*U+v*fe+y*ee+b*E,c[2]=T*k+A*R+M*ye+x*J,c[6]=T*I+A*V+M*xe+x*be,c[10]=T*q+A*ce+M*F+x*z,c[14]=T*U+A*fe+M*ee+x*E,c[3]=O*k+L*R+D*ye+X*J,c[7]=O*I+L*V+D*xe+X*be,c[11]=O*q+L*ce+D*F+X*z,c[15]=O*U+L*fe+D*ee+X*E,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],y=e[10],b=e[14],T=e[3],A=e[7],M=e[11],x=e[15];return T*(+c*m*v-l*p*v-c*h*y+s*p*y+l*h*b-s*m*b)+A*(+i*m*b-i*p*y+c*d*y-l*d*b+l*p*_-c*m*_)+M*(+i*p*v-i*h*b-c*d*v+s*d*b+c*h*_-s*p*_)+x*(-l*h*_-i*m*v+i*h*y+l*d*v-s*d*y+s*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],y=e[10],b=e[11],T=e[12],A=e[13],M=e[14],x=e[15],O=v*M*p-A*y*p+A*m*b-h*M*b-v*m*x+h*y*x,L=T*y*p-_*M*p-T*m*b+d*M*b+_*m*x-d*y*x,D=_*A*p-T*v*p+T*h*b-d*A*b-_*h*x+d*v*x,X=T*v*m-_*A*m-T*h*y+d*A*y+_*h*M-d*v*M,k=i*O+s*L+l*D+c*X;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return e[0]=O*I,e[1]=(A*y*c-v*M*c-A*l*b+s*M*b+v*l*x-s*y*x)*I,e[2]=(h*M*c-A*m*c+A*l*p-s*M*p-h*l*x+s*m*x)*I,e[3]=(v*m*c-h*y*c-v*l*p+s*y*p+h*l*b-s*m*b)*I,e[4]=L*I,e[5]=(_*M*c-T*y*c+T*l*b-i*M*b-_*l*x+i*y*x)*I,e[6]=(T*m*c-d*M*c-T*l*p+i*M*p+d*l*x-i*m*x)*I,e[7]=(d*y*c-_*m*c+_*l*p-i*y*p-d*l*b+i*m*b)*I,e[8]=D*I,e[9]=(T*v*c-_*A*c-T*s*b+i*A*b+_*s*x-i*v*x)*I,e[10]=(d*A*c-T*h*c+T*s*p-i*A*p-d*s*x+i*h*x)*I,e[11]=(_*h*c-d*v*c-_*s*p+i*v*p+d*s*b-i*h*b)*I,e[12]=X*I,e[13]=(_*A*l-T*v*l+T*s*y-i*A*y-_*s*M+i*v*M)*I,e[14]=(T*h*l-d*A*l-T*s*m+i*A*m+d*s*M-i*h*M)*I,e[15]=(d*v*l-_*h*l+_*s*m-i*v*m-d*s*y+i*h*y)*I,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,h=e.y,m=e.z,p=c*d,_=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*d,0,p*m-l*h,_*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,_=d+d,v=h+h,y=c*p,b=c*_,T=c*v,A=d*_,M=d*v,x=h*v,O=m*p,L=m*_,D=m*v,X=s.x,k=s.y,I=s.z;return l[0]=(1-(A+x))*X,l[1]=(b+D)*X,l[2]=(T-L)*X,l[3]=0,l[4]=(b-D)*k,l[5]=(1-(y+x))*k,l[6]=(M+O)*k,l[7]=0,l[8]=(T+L)*I,l[9]=(M-O)*I,l[10]=(1-(y+A))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=fr.set(l[0],l[1],l[2]).length();const d=fr.set(l[4],l[5],l[6]).length(),h=fr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],bi.copy(this);const p=1/c,_=1/d,v=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=_,bi.elements[5]*=_,bi.elements[6]*=_,bi.elements[8]*=v,bi.elements[9]*=v,bi.elements[10]*=v,i.setFromRotationMatrix(bi),s.x=c,s.y=d,s.z=h,this}makePerspective(e,i,s,l,c,d,h=ca){const m=this.elements,p=2*c/(i-e),_=2*c/(s-l),v=(i+e)/(i-e),y=(s+l)/(s-l);let b,T;if(h===ca)b=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(h===Fc)b=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,c,d,h=ca){const m=this.elements,p=1/(i-e),_=1/(s-l),v=1/(d-c),y=(i+e)*p,b=(s+l)*_;let T,A;if(h===ca)T=(d+c)*v,A=-2*v;else if(h===Fc)T=c*v,A=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-b,m[2]=0,m[6]=0,m[10]=A,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const fr=new Z,bi=new Kt,cb=new Z(0,0,0),ub=new Z(1,1,1),Fa=new Z,hc=new Z,ai=new Z,nv=new Kt,iv=new Xo;class zi{constructor(e=0,i=0,s=0,l=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],y=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return nv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return iv.setFromEuler(this),this.setFromQuaternion(iv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Mx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fb=0;const av=new Z,dr=new Xo,aa=new Kt,pc=new Z,Uo=new Z,db=new Z,hb=new Xo,sv=new Z(1,0,0),rv=new Z(0,1,0),ov=new Z(0,0,1),lv={type:"added"},pb={type:"removed"},hr={type:"childadded",child:null},yd={type:"childremoved",child:null};class Sn extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new Z,i=new zi,s=new Xo,l=new Z(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Kt},normalMatrix:{value:new pt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return dr.setFromAxisAngle(e,i),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,i){return dr.setFromAxisAngle(e,i),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(sv,e)}rotateY(e){return this.rotateOnAxis(rv,e)}rotateZ(e){return this.rotateOnAxis(ov,e)}translateOnAxis(e,i){return av.copy(e).applyQuaternion(this.quaternion),this.position.add(av.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(sv,e)}translateY(e){return this.translateOnAxis(rv,e)}translateZ(e){return this.translateOnAxis(ov,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?pc.copy(e):pc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Uo,pc,this.up):aa.lookAt(pc,Uo,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),dr.setFromRotationMatrix(aa),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lv),hr.child=e,this.dispatchEvent(hr),hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(pb),yd.child=e,this.dispatchEvent(yd),yd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lv),hr.child=e,this.dispatchEvent(hr),hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,db),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,hb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),_=d(e.images),v=d(e.shapes),y=d(e.skeletons),b=d(e.animations),T=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),b.length>0&&(s.animations=b),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Sn.DEFAULT_UP=new Z(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new Z,sa=new Z,Sd=new Z,ra=new Z,pr=new Z,mr=new Z,cv=new Z,Md=new Z,bd=new Z,Ed=new Z,Td=new Xt,Ad=new Xt,wd=new Xt;class Ti{constructor(e=new Z,i=new Z,s=new Z){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ei.subVectors(e,i),l.cross(Ei);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ei.subVectors(l,i),sa.subVectors(s,i),Sd.subVectors(e,i);const d=Ei.dot(Ei),h=Ei.dot(sa),m=Ei.dot(Sd),p=sa.dot(sa),_=sa.dot(Sd),v=d*p-h*h;if(v===0)return c.set(0,0,0),null;const y=1/v,b=(p*m-h*_)*y,T=(d*_-h*m)*y;return c.set(1-b-T,T,b)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(e,i,s,l,c,d,h,m){return this.getBarycoord(e,i,s,l,ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ra.x),m.addScaledVector(d,ra.y),m.addScaledVector(h,ra.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Td.setScalar(0),Ad.setScalar(0),wd.setScalar(0),Td.fromBufferAttribute(e,i),Ad.fromBufferAttribute(e,s),wd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Td,c.x),d.addScaledVector(Ad,c.y),d.addScaledVector(wd,c.z),d}static isFrontFacing(e,i,s,l){return Ei.subVectors(s,i),sa.subVectors(e,i),Ei.cross(sa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Ei.cross(sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ti.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ti.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,h;pr.subVectors(l,s),mr.subVectors(c,s),Md.subVectors(e,s);const m=pr.dot(Md),p=mr.dot(Md);if(m<=0&&p<=0)return i.copy(s);bd.subVectors(e,l);const _=pr.dot(bd),v=mr.dot(bd);if(_>=0&&v<=_)return i.copy(l);const y=m*v-_*p;if(y<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector(pr,d);Ed.subVectors(e,c);const b=pr.dot(Ed),T=mr.dot(Ed);if(T>=0&&b<=T)return i.copy(c);const A=b*p-m*T;if(A<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(s).addScaledVector(mr,h);const M=_*T-b*v;if(M<=0&&v-_>=0&&b-T>=0)return cv.subVectors(c,l),h=(v-_)/(v-_+(b-T)),i.copy(l).addScaledVector(cv,h);const x=1/(M+A+y);return d=A*x,h=y*x,i.copy(s).addScaledVector(pr,d).addScaledVector(mr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Cd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Et{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Ut.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ut.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Ut.workingColorSpace){if(e=QM(e,1),i=bt(i,0,1),s=bt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Cd(d,c,e+1/3),this.g=Cd(d,c,e),this.b=Cd(d,c,e-1/3)}return Ut.toWorkingColorSpace(this,l),this}setStyle(e,i=mi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const s=bx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Ut.fromWorkingColorSpace(Un.copy(this),e),Math.round(bt(Un.r*255,0,255))*65536+Math.round(bt(Un.g*255,0,255))*256+Math.round(bt(Un.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ut.workingColorSpace){Ut.fromWorkingColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,c=Un.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=_<=.5?v/(d+h):v/(2-d-h),d){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=mi){Ut.fromWorkingColorSpace(Un.copy(this),e);const i=Un.r,s=Un.g,l=Un.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ka),this.setHSL(ka.h+e,ka.s+i,ka.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ka),e.getHSL(mc);const s=fd(ka.h,mc.h,i),l=fd(ka.s,mc.s,i),c=fd(ka.l,mc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Et;Et.NAMES=bx;let mb=0;class As extends Ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=br,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vd,this.blendDst=jd,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Z0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(s.blending=this.blending),this.side!==Xa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Vd&&(s.blendSrc=this.blendSrc),this.blendDst!==jd&&(s.blendDst=this.blendDst),this.blendEquation!==_s&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Z0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ho extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=ax,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new Z,gc=new vt;let gb=0;class Ci{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=K0,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(e),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=No(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=qn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=No(i,this.array)),i}setX(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=No(i,this.array)),i}setY(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=No(i,this.array)),i}setZ(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=No(i,this.array)),i}setW(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array),c=qn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==K0&&(e.usage=this.usage),e}}class Ex extends Ci{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Tx extends Ci{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class dn extends Ci{constructor(e,i,s){super(new Float32Array(e),i,s)}}let vb=0;const pi=new Kt,Rd=new Sn,gr=new Z,si=new Wo,Oo=new Wo,yn=new Z;class Bn extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_x(e)?Tx:Ex)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,s){return pi.makeTranslation(e,i,s),this.applyMatrix4(pi),this}scale(e,i,s){return pi.makeScale(e,i,s),this.applyMatrix4(pi),this}lookAt(e){return Rd.lookAt(e),Rd.updateMatrix(),this.applyMatrix4(Rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new dn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];si.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Oo.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(si.min,Oo.min),si.expandByPoint(yn),yn.addVectors(si.max,Oo.max),si.expandByPoint(yn)):(si.expandByPoint(Oo.min),si.expandByPoint(Oo.max))}si.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)yn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)yn.fromBufferAttribute(h,p),m&&(gr.fromBufferAttribute(e,p),yn.add(gr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let q=0;q<s.count;q++)h[q]=new Z,m[q]=new Z;const p=new Z,_=new Z,v=new Z,y=new vt,b=new vt,T=new vt,A=new Z,M=new Z;function x(q,U,R){p.fromBufferAttribute(s,q),_.fromBufferAttribute(s,U),v.fromBufferAttribute(s,R),y.fromBufferAttribute(c,q),b.fromBufferAttribute(c,U),T.fromBufferAttribute(c,R),_.sub(p),v.sub(p),b.sub(y),T.sub(y);const V=1/(b.x*T.y-T.x*b.y);isFinite(V)&&(A.copy(_).multiplyScalar(T.y).addScaledVector(v,-b.y).multiplyScalar(V),M.copy(v).multiplyScalar(b.x).addScaledVector(_,-T.x).multiplyScalar(V),h[q].add(A),h[U].add(A),h[R].add(A),m[q].add(M),m[U].add(M),m[R].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let q=0,U=O.length;q<U;++q){const R=O[q],V=R.start,ce=R.count;for(let fe=V,ye=V+ce;fe<ye;fe+=3)x(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const L=new Z,D=new Z,X=new Z,k=new Z;function I(q){X.fromBufferAttribute(l,q),k.copy(X);const U=h[q];L.copy(U),L.sub(X.multiplyScalar(X.dot(U))).normalize(),D.crossVectors(k,U);const V=D.dot(m[q])<0?-1:1;d.setXYZW(q,L.x,L.y,L.z,V)}for(let q=0,U=O.length;q<U;++q){const R=O[q],V=R.start,ce=R.count;for(let fe=V,ye=V+ce;fe<ye;fe+=3)I(e.getX(fe+0)),I(e.getX(fe+1)),I(e.getX(fe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,b=s.count;y<b;y++)s.setXYZ(y,0,0,0);const l=new Z,c=new Z,d=new Z,h=new Z,m=new Z,p=new Z,_=new Z,v=new Z;if(e)for(let y=0,b=e.count;y<b;y+=3){const T=e.getX(y+0),A=e.getX(y+1),M=e.getX(y+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,M),_.subVectors(d,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,M),h.add(_),m.add(_),p.add(_),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,b=i.count;y<b;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),_.subVectors(d,c),v.subVectors(l,c),_.cross(v),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)yn.fromBufferAttribute(e,i),yn.normalize(),e.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,y=new p.constructor(m.length*_);let b=0,T=0;for(let A=0,M=m.length;A<M;A++){h.isInterleavedBufferAttribute?b=m[A]*h.data.stride+h.offset:b=m[A]*_;for(let x=0;x<_;x++)y[T++]=p[b++]}return new Ci(y,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Bn,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const y=p[_],b=e(y,s);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,y=p.length;v<y;v++){const b=p[v];_.push(b.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let y=0,b=v.length;y<b;y++)_.push(v[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,_=d.length;p<_;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uv=new Kt,hs=new Hh,vc=new qo,fv=new Z,xc=new Z,_c=new Z,yc=new Z,Nd=new Z,Sc=new Z,dv=new Z,Mc=new Z;class Rn extends Sn{constructor(e=new Bn,i=new Ho){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Sc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(Nd.fromBufferAttribute(v,e),d?Sc.addScaledVector(Nd,_):Sc.addScaledVector(Nd.sub(i),_))}i.add(Sc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),vc.copy(s.boundingSphere),vc.applyMatrix4(c),hs.copy(e.ray).recast(e.near),!(vc.containsPoint(hs.origin)===!1&&(hs.intersectSphere(vc,fv)===null||hs.origin.distanceToSquared(fv)>(e.far-e.near)**2))&&(uv.copy(c).invert(),hs.copy(e.ray).applyMatrix4(uv),!(s.boundingBox!==null&&hs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,hs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,y=c.groups,b=c.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,A=y.length;T<A;T++){const M=y[T],x=d[M.materialIndex],O=Math.max(M.start,b.start),L=Math.min(h.count,Math.min(M.start+M.count,b.start+b.count));for(let D=O,X=L;D<X;D+=3){const k=h.getX(D),I=h.getX(D+1),q=h.getX(D+2);l=bc(this,x,e,s,p,_,v,k,I,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),A=Math.min(h.count,b.start+b.count);for(let M=T,x=A;M<x;M+=3){const O=h.getX(M),L=h.getX(M+1),D=h.getX(M+2);l=bc(this,d,e,s,p,_,v,O,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,A=y.length;T<A;T++){const M=y[T],x=d[M.materialIndex],O=Math.max(M.start,b.start),L=Math.min(m.count,Math.min(M.start+M.count,b.start+b.count));for(let D=O,X=L;D<X;D+=3){const k=D,I=D+1,q=D+2;l=bc(this,x,e,s,p,_,v,k,I,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),A=Math.min(m.count,b.start+b.count);for(let M=T,x=A;M<x;M+=3){const O=M,L=M+1,D=M+2;l=bc(this,d,e,s,p,_,v,O,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function xb(o,e,i,s,l,c,d,h){let m;if(e.side===Zn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,e.side===Xa,h),m===null)return null;Mc.copy(h),Mc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Mc);return p<i.near||p>i.far?null:{distance:p,point:Mc.clone(),object:o}}function bc(o,e,i,s,l,c,d,h,m,p){o.getVertexPosition(h,xc),o.getVertexPosition(m,_c),o.getVertexPosition(p,yc);const _=xb(o,e,i,s,xc,_c,yc,dv);if(_){const v=new Z;Ti.getBarycoord(dv,xc,_c,yc,v),l&&(_.uv=Ti.getInterpolatedAttribute(l,h,m,p,v,new vt)),c&&(_.uv1=Ti.getInterpolatedAttribute(c,h,m,p,v,new vt)),d&&(_.normal=Ti.getInterpolatedAttribute(d,h,m,p,v,new Z),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new Z,materialIndex:0};Ti.getNormal(xc,_c,yc,y.normal),_.face=y,_.barycoord=v}return _}class Yo extends Bn{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],_=[],v=[];let y=0,b=0;T("z","y","x",-1,-1,s,i,e,d,c,0),T("z","y","x",1,-1,s,i,-e,d,c,1),T("x","z","y",1,1,e,s,i,l,d,2),T("x","z","y",1,-1,e,s,-i,l,d,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new dn(p,3)),this.setAttribute("normal",new dn(_,3)),this.setAttribute("uv",new dn(v,2));function T(A,M,x,O,L,D,X,k,I,q,U){const R=D/I,V=X/q,ce=D/2,fe=X/2,ye=k/2,xe=I+1,F=q+1;let ee=0,J=0;const be=new Z;for(let z=0;z<F;z++){const E=z*V-fe;for(let G=0;G<xe;G++){const ae=G*R-ce;be[A]=ae*O,be[M]=E*L,be[x]=ye,p.push(be.x,be.y,be.z),be[A]=0,be[M]=0,be[x]=k>0?1:-1,_.push(be.x,be.y,be.z),v.push(G/I),v.push(1-z/q),ee+=1}}for(let z=0;z<q;z++)for(let E=0;E<I;E++){const G=y+E+xe*z,ae=y+E+xe*(z+1),j=y+(E+1)+xe*(z+1),te=y+(E+1)+xe*z;m.push(G,ae,te),m.push(ae,j,te),J+=6}h.addGroup(b,J,U),b+=J,y+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function zn(o){const e={};for(let i=0;i<o.length;i++){const s=Lr(o[i]);for(const l in s)e[l]=s[l]}return e}function _b(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Ax(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const yb={clone:Lr,merge:zn};var Sb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class da extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sb,this.fragmentShader=Mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=_b(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class wx extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=ca}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new Z,hv=new vt,pv=new vt;class Yn extends wx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ch*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ch*2*Math.atan(Math.tan(ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-e/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ha.x,Ha.y).multiplyScalar(-e/Ha.z)}getViewSize(e,i){return this.getViewBounds(e,hv,pv),i.subVectors(pv,hv)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ud*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vr=-90,xr=1;class bb extends Sn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Yn(vr,xr,e,i);l.layers=this.layers,this.add(l);const c=new Yn(vr,xr,e,i);c.layers=this.layers,this.add(c);const d=new Yn(vr,xr,e,i);d.layers=this.layers,this.add(d);const h=new Yn(vr,xr,e,i);h.layers=this.layers,this.add(h);const m=new Yn(vr,xr,e,i);m.layers=this.layers,this.add(m);const p=new Yn(vr,xr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===ca)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Fc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,_]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(v,y,b),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Cx extends Kn{constructor(e,i,s,l,c,d,h,m,p,_){e=e!==void 0?e:[],i=i!==void 0?i:wr,super(e,i,s,l,c,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Eb extends Ts{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Cx(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ii}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Yo(5,5,5),c=new da({name:"CubemapFromEquirect",uniforms:Lr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:Va});c.uniforms.tEquirect.value=i;const d=new Rn(l,c),h=i.minFilter;return i.minFilter===bs&&(i.minFilter=Ii),new bb(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,s,l){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}class Sr extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tb={type:"move"};class Dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const A of e.hand.values()){const M=i.getJointPose(A,s),x=this._getHandJoint(p,A);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=_.position.distanceTo(v.position),b=.02,T=.005;p.inputState.pinching&&y>b+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=b-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Tb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Sr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Gh extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ld=new Z,Ab=new Z,wb=new pt;class vs{constructor(e=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Ld.subVectors(s,i).cross(Ab.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Ld),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||wb.getNormalMatrix(e),l=this.coplanarPoint(Ld).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new qo,Ec=new Z;class Vh{constructor(e=new vs,i=new vs,s=new vs,l=new vs,c=new vs,d=new vs){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ca){const s=this.planes,l=e.elements,c=l[0],d=l[1],h=l[2],m=l[3],p=l[4],_=l[5],v=l[6],y=l[7],b=l[8],T=l[9],A=l[10],M=l[11],x=l[12],O=l[13],L=l[14],D=l[15];if(s[0].setComponents(m-c,y-p,M-b,D-x).normalize(),s[1].setComponents(m+c,y+p,M+b,D+x).normalize(),s[2].setComponents(m+d,y+_,M+T,D+O).normalize(),s[3].setComponents(m-d,y-_,M-T,D-O).normalize(),s[4].setComponents(m-h,y-v,M-A,D-L).normalize(),i===ca)s[5].setComponents(m+h,y+v,M+A,D+L).normalize();else if(i===Fc)s[5].setComponents(h,v,A,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ec.x=l.normal.x>0?e.max.x:e.min.x,Ec.y=l.normal.y>0?e.max.y:e.min.y,Ec.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rx extends As{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hc=new Z,Gc=new Z,mv=new Kt,Po=new Hh,Tc=new qo,Ud=new Z,gv=new Z;class Cb extends Sn{constructor(e=new Bn,i=new Rx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Hc.fromBufferAttribute(i,l-1),Gc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Hc.distanceTo(Gc);e.setAttribute("lineDistance",new dn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(l),Tc.radius+=c,e.ray.intersectsSphere(Tc)===!1)return;mv.copy(l).invert(),Po.copy(e.ray).applyMatrix4(mv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=s.index,y=s.attributes.position;if(_!==null){const b=Math.max(0,d.start),T=Math.min(_.count,d.start+d.count);for(let A=b,M=T-1;A<M;A+=p){const x=_.getX(A),O=_.getX(A+1),L=Ac(this,e,Po,m,x,O,A);L&&i.push(L)}if(this.isLineLoop){const A=_.getX(T-1),M=_.getX(b),x=Ac(this,e,Po,m,A,M,T-1);x&&i.push(x)}}else{const b=Math.max(0,d.start),T=Math.min(y.count,d.start+d.count);for(let A=b,M=T-1;A<M;A+=p){const x=Ac(this,e,Po,m,A,A+1,A);x&&i.push(x)}if(this.isLineLoop){const A=Ac(this,e,Po,m,T-1,b,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Ac(o,e,i,s,l,c,d){const h=o.geometry.attributes.position;if(Hc.fromBufferAttribute(h,l),Gc.fromBufferAttribute(h,c),i.distanceSqToSegment(Hc,Gc,Ud,gv)>s)return;Ud.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Ud);if(!(p<e.near||p>e.far))return{distance:p,point:gv.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class Nx extends As{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vv=new Kt,Rh=new Hh,wc=new qo,Cc=new Z;class Rb extends Sn{constructor(e=new Bn,i=new Nx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),wc.copy(s.boundingSphere),wc.applyMatrix4(l),wc.radius+=c,e.ray.intersectsSphere(wc)===!1)return;vv.copy(l).invert(),Rh.copy(e.ray).applyMatrix4(vv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,v=s.attributes.position;if(p!==null){const y=Math.max(0,d.start),b=Math.min(p.count,d.start+d.count);for(let T=y,A=b;T<A;T++){const M=p.getX(T);Cc.fromBufferAttribute(v,M),xv(Cc,M,m,l,e,i,this)}}else{const y=Math.max(0,d.start),b=Math.min(v.count,d.start+d.count);for(let T=y,A=b;T<A;T++)Cc.fromBufferAttribute(v,T),xv(Cc,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function xv(o,e,i,s,l,c,d){const h=Rh.distanceSqToPoint(o);if(h<i){const m=new Z;Rh.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Dx extends Kn{constructor(e,i,s,l,c,d,h,m,p,_=Er){if(_!==Er&&_!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Er&&(s=Es),s===void 0&&_===Nr&&(s=Rr),super(null,l,c,d,h,m,_,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:wi,this.minFilter=m!==void 0?m:wi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class qc extends Bn{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],d=[];h(l),p(s),_(),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(c.slice(),3)),this.setAttribute("uv",new dn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(O){const L=new Z,D=new Z,X=new Z;for(let k=0;k<i.length;k+=3)b(i[k+0],L),b(i[k+1],D),b(i[k+2],X),m(L,D,X,O)}function m(O,L,D,X){const k=X+1,I=[];for(let q=0;q<=k;q++){I[q]=[];const U=O.clone().lerp(D,q/k),R=L.clone().lerp(D,q/k),V=k-q;for(let ce=0;ce<=V;ce++)ce===0&&q===k?I[q][ce]=U:I[q][ce]=U.clone().lerp(R,ce/V)}for(let q=0;q<k;q++)for(let U=0;U<2*(k-q)-1;U++){const R=Math.floor(U/2);U%2===0?(y(I[q][R+1]),y(I[q+1][R]),y(I[q][R])):(y(I[q][R+1]),y(I[q+1][R+1]),y(I[q+1][R]))}}function p(O){const L=new Z;for(let D=0;D<c.length;D+=3)L.x=c[D+0],L.y=c[D+1],L.z=c[D+2],L.normalize().multiplyScalar(O),c[D+0]=L.x,c[D+1]=L.y,c[D+2]=L.z}function _(){const O=new Z;for(let L=0;L<c.length;L+=3){O.x=c[L+0],O.y=c[L+1],O.z=c[L+2];const D=M(O)/2/Math.PI+.5,X=x(O)/Math.PI+.5;d.push(D,1-X)}T(),v()}function v(){for(let O=0;O<d.length;O+=6){const L=d[O+0],D=d[O+2],X=d[O+4],k=Math.max(L,D,X),I=Math.min(L,D,X);k>.9&&I<.1&&(L<.2&&(d[O+0]+=1),D<.2&&(d[O+2]+=1),X<.2&&(d[O+4]+=1))}}function y(O){c.push(O.x,O.y,O.z)}function b(O,L){const D=O*3;L.x=e[D+0],L.y=e[D+1],L.z=e[D+2]}function T(){const O=new Z,L=new Z,D=new Z,X=new Z,k=new vt,I=new vt,q=new vt;for(let U=0,R=0;U<c.length;U+=9,R+=6){O.set(c[U+0],c[U+1],c[U+2]),L.set(c[U+3],c[U+4],c[U+5]),D.set(c[U+6],c[U+7],c[U+8]),k.set(d[R+0],d[R+1]),I.set(d[R+2],d[R+3]),q.set(d[R+4],d[R+5]),X.copy(O).add(L).add(D).divideScalar(3);const V=M(X);A(k,R+0,O,V),A(I,R+2,L,V),A(q,R+4,D,V)}}function A(O,L,D,X){X<0&&O.x===1&&(d[L]=O.x-1),D.x===0&&D.z===0&&(d[L]=X/2/Math.PI+.5)}function M(O){return Math.atan2(O.z,-O.x)}function x(O){return Math.atan2(-O.y,Math.sqrt(O.x*O.x+O.z*O.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.vertices,e.indices,e.radius,e.details)}}class Vc extends qc{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Vc(e.radius,e.detail)}}class jh extends qc{constructor(e=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new jh(e.radius,e.detail)}}class Zo extends Bn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,v=e/h,y=i/m,b=[],T=[],A=[],M=[];for(let x=0;x<_;x++){const O=x*y-d;for(let L=0;L<p;L++){const D=L*v-c;T.push(D,-O,0),A.push(0,0,1),M.push(L/h),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<h;O++){const L=O+p*x,D=O+p*(x+1),X=O+1+p*(x+1),k=O+1+p*x;b.push(L,D,k),b.push(D,X,k)}this.setIndex(b),this.setAttribute("position",new dn(T,3)),this.setAttribute("normal",new dn(A,3)),this.setAttribute("uv",new dn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xh extends Bn{constructor(e=.5,i=1,s=32,l=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:d},s=Math.max(3,s),l=Math.max(1,l);const h=[],m=[],p=[],_=[];let v=e;const y=(i-e)/l,b=new Z,T=new vt;for(let A=0;A<=l;A++){for(let M=0;M<=s;M++){const x=c+M/s*d;b.x=v*Math.cos(x),b.y=v*Math.sin(x),m.push(b.x,b.y,b.z),p.push(0,0,1),T.x=(b.x/i+1)/2,T.y=(b.y/i+1)/2,_.push(T.x,T.y)}v+=y}for(let A=0;A<l;A++){const M=A*(s+1);for(let x=0;x<s;x++){const O=x+M,L=O,D=O+s+1,X=O+s+2,k=O+1;h.push(L,D,k),h.push(D,X,k)}}this.setIndex(h),this.setAttribute("position",new dn(m,3)),this.setAttribute("normal",new dn(p,3)),this.setAttribute("uv",new dn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wh extends Bn{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+h,Math.PI);let p=0;const _=[],v=new Z,y=new Z,b=[],T=[],A=[],M=[];for(let x=0;x<=s;x++){const O=[],L=x/s;let D=0;x===0&&d===0?D=.5/i:x===s&&m===Math.PI&&(D=-.5/i);for(let X=0;X<=i;X++){const k=X/i;v.x=-e*Math.cos(l+k*c)*Math.sin(d+L*h),v.y=e*Math.cos(d+L*h),v.z=e*Math.sin(l+k*c)*Math.sin(d+L*h),T.push(v.x,v.y,v.z),y.copy(v).normalize(),A.push(y.x,y.y,y.z),M.push(k+D,1-L),O.push(p++)}_.push(O)}for(let x=0;x<s;x++)for(let O=0;O<i;O++){const L=_[x][O+1],D=_[x][O],X=_[x+1][O],k=_[x+1][O+1];(x!==0||d>0)&&b.push(L,D,k),(x!==s-1||m<Math.PI)&&b.push(D,X,k)}this.setIndex(b),this.setAttribute("position",new dn(T,3)),this.setAttribute("normal",new dn(A,3)),this.setAttribute("uv",new dn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jc extends Bn{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const d=[],h=[],m=[],p=[],_=new Z,v=new Z,y=new Z;for(let b=0;b<=s;b++)for(let T=0;T<=l;T++){const A=T/l*c,M=b/s*Math.PI*2;v.x=(e+i*Math.cos(M))*Math.cos(A),v.y=(e+i*Math.cos(M))*Math.sin(A),v.z=i*Math.sin(M),h.push(v.x,v.y,v.z),_.x=e*Math.cos(A),_.y=e*Math.sin(A),y.subVectors(v,_).normalize(),m.push(y.x,y.y,y.z),p.push(T/l),p.push(b/s)}for(let b=1;b<=s;b++)for(let T=1;T<=l;T++){const A=(l+1)*b+T-1,M=(l+1)*(b-1)+T-1,x=(l+1)*(b-1)+T,O=(l+1)*b+T;d.push(A,M,O),d.push(M,x,O)}this.setIndex(d),this.setAttribute("position",new dn(h,3)),this.setAttribute("normal",new dn(m,3)),this.setAttribute("uv",new dn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ys extends As{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vx,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nb extends ys{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Db extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lb extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qh extends Sn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Od=new Kt,_v=new Z,yv=new Z;class Lx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vh,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;_v.setFromMatrixPosition(e.matrixWorld),i.position.copy(_v),yv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(yv),i.updateMatrixWorld(),Od.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Od),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sv=new Kt,Io=new Z,Pd=new Z;class Ub extends Lx{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new Xt(2,1,1,1),new Xt(0,1,1,1),new Xt(3,1,1,1),new Xt(1,1,1,1),new Xt(3,0,1,1),new Xt(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,c=e.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Io.setFromMatrixPosition(e.matrixWorld),s.position.copy(Io),Pd.copy(s.position),Pd.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Pd),s.updateMatrixWorld(),l.makeTranslation(-Io.x,-Io.y,-Io.z),Sv.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sv)}}class Ux extends qh{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Ub}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yh extends wx{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Ob extends Lx{constructor(){super(new Yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nh extends qh{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new Ob}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ox extends qh{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pb extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Zh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=Mv();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Mv(){return performance.now()}function bv(o,e,i,s){const l=Ib(s);switch(i){case ux:return o*e;case dx:return o*e;case hx:return o*e*2;case px:return o*e/l.components*l.byteLength;case Bh:return o*e/l.components*l.byteLength;case mx:return o*e*2/l.components*l.byteLength;case Fh:return o*e*2/l.components*l.byteLength;case fx:return o*e*3/l.components*l.byteLength;case Ai:return o*e*4/l.components*l.byteLength;case kh:return o*e*4/l.components*l.byteLength;case Lc:case Uc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Oc:case Pc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ih:case sh:return Math.max(o,16)*Math.max(e,8)/4;case nh:case ah:return Math.max(o,8)*Math.max(e,8)/2;case rh:case oh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case lh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case fh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case dh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case hh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ph:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case mh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case gh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case vh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case xh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case _h:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case yh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ic:case bh:case Eh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case gx:case Th:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Ah:case wh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ib(o){switch(o){case fa:case ox:return{byteLength:1,components:1};case ko:case lx:case Vo:return{byteLength:2,components:1};case Ih:case zh:return{byteLength:2,components:4};case Es:case Ph:case la:return{byteLength:4,components:1};case cx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Px(){let o=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function zb(o){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,_),h.onUploadCallback();let b;if(p instanceof Float32Array)b=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=o.SHORT;else if(p instanceof Uint32Array)b=o.UNSIGNED_INT;else if(p instanceof Int32Array)b=o.INT;else if(p instanceof Int8Array)b=o.BYTE;else if(p instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const _=m.array,v=m.updateRanges;if(o.bindBuffer(p,h),v.length===0)o.bufferSubData(p,0,_);else{v.sort((b,T)=>b.start-T.start);let y=0;for(let b=1;b<v.length;b++){const T=v[y],A=v[b];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++y,v[y]=A)}v.length=y+1;for(let b=0,T=v.length;b<T;b++){const A=v[b];o.bufferSubData(p,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var Bb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,a1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,o1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,l1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,c1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p1="gl_FragColor = linearToOutputTexel( gl_FragColor );",m1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,S1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,N1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,D1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,I1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,z1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,B1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,q1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,SE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ME=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:Bb,alphahash_pars_fragment:Fb,alphamap_fragment:kb,alphamap_pars_fragment:Hb,alphatest_fragment:Gb,alphatest_pars_fragment:Vb,aomap_fragment:jb,aomap_pars_fragment:Xb,batching_pars_vertex:Wb,batching_vertex:qb,begin_vertex:Yb,beginnormal_vertex:Zb,bsdfs:Kb,iridescence_fragment:Qb,bumpmap_pars_fragment:Jb,clipping_planes_fragment:$b,clipping_planes_pars_fragment:e1,clipping_planes_pars_vertex:t1,clipping_planes_vertex:n1,color_fragment:i1,color_pars_fragment:a1,color_pars_vertex:s1,color_vertex:r1,common:o1,cube_uv_reflection_fragment:l1,defaultnormal_vertex:c1,displacementmap_pars_vertex:u1,displacementmap_vertex:f1,emissivemap_fragment:d1,emissivemap_pars_fragment:h1,colorspace_fragment:p1,colorspace_pars_fragment:m1,envmap_fragment:g1,envmap_common_pars_fragment:v1,envmap_pars_fragment:x1,envmap_pars_vertex:_1,envmap_physical_pars_fragment:N1,envmap_vertex:y1,fog_vertex:S1,fog_pars_vertex:M1,fog_fragment:b1,fog_pars_fragment:E1,gradientmap_pars_fragment:T1,lightmap_pars_fragment:A1,lights_lambert_fragment:w1,lights_lambert_pars_fragment:C1,lights_pars_begin:R1,lights_toon_fragment:D1,lights_toon_pars_fragment:L1,lights_phong_fragment:U1,lights_phong_pars_fragment:O1,lights_physical_fragment:P1,lights_physical_pars_fragment:I1,lights_fragment_begin:z1,lights_fragment_maps:B1,lights_fragment_end:F1,logdepthbuf_fragment:k1,logdepthbuf_pars_fragment:H1,logdepthbuf_pars_vertex:G1,logdepthbuf_vertex:V1,map_fragment:j1,map_pars_fragment:X1,map_particle_fragment:W1,map_particle_pars_fragment:q1,metalnessmap_fragment:Y1,metalnessmap_pars_fragment:Z1,morphinstance_vertex:K1,morphcolor_vertex:Q1,morphnormal_vertex:J1,morphtarget_pars_vertex:$1,morphtarget_vertex:eE,normal_fragment_begin:tE,normal_fragment_maps:nE,normal_pars_fragment:iE,normal_pars_vertex:aE,normal_vertex:sE,normalmap_pars_fragment:rE,clearcoat_normal_fragment_begin:oE,clearcoat_normal_fragment_maps:lE,clearcoat_pars_fragment:cE,iridescence_pars_fragment:uE,opaque_fragment:fE,packing:dE,premultiplied_alpha_fragment:hE,project_vertex:pE,dithering_fragment:mE,dithering_pars_fragment:gE,roughnessmap_fragment:vE,roughnessmap_pars_fragment:xE,shadowmap_pars_fragment:_E,shadowmap_pars_vertex:yE,shadowmap_vertex:SE,shadowmask_pars_fragment:ME,skinbase_vertex:bE,skinning_pars_vertex:EE,skinning_vertex:TE,skinnormal_vertex:AE,specularmap_fragment:wE,specularmap_pars_fragment:CE,tonemapping_fragment:RE,tonemapping_pars_fragment:NE,transmission_fragment:DE,transmission_pars_fragment:LE,uv_pars_fragment:UE,uv_pars_vertex:OE,uv_vertex:PE,worldpos_vertex:IE,background_vert:zE,background_frag:BE,backgroundCube_vert:FE,backgroundCube_frag:kE,cube_vert:HE,cube_frag:GE,depth_vert:VE,depth_frag:jE,distanceRGBA_vert:XE,distanceRGBA_frag:WE,equirect_vert:qE,equirect_frag:YE,linedashed_vert:ZE,linedashed_frag:KE,meshbasic_vert:QE,meshbasic_frag:JE,meshlambert_vert:$E,meshlambert_frag:eT,meshmatcap_vert:tT,meshmatcap_frag:nT,meshnormal_vert:iT,meshnormal_frag:aT,meshphong_vert:sT,meshphong_frag:rT,meshphysical_vert:oT,meshphysical_frag:lT,meshtoon_vert:cT,meshtoon_frag:uT,points_vert:fT,points_frag:dT,shadow_vert:hT,shadow_frag:pT,sprite_vert:mT,sprite_frag:gT},Pe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Oi={basic:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:zn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:zn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:zn([Pe.points,Pe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:zn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:zn([Pe.common,Pe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:zn([Pe.sprite,Pe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:zn([Pe.common,Pe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:zn([Pe.lights,Pe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Oi.physical={uniforms:zn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Rc={r:0,b:0,g:0},ms=new zi,vT=new Kt;function xT(o,e,i,s,l,c,d){const h=new Et(0);let m=c===!0?0:1,p,_,v=null,y=0,b=null;function T(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:e).get(D)),D}function A(L){let D=!1;const X=T(L);X===null?x(h,m):X&&X.isColor&&(x(X,1),D=!0);const k=o.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,d):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(L,D){const X=T(D);X&&(X.isCubeTexture||X.mapping===Wc)?(_===void 0&&(_=new Rn(new Yo(1,1,1),new da({name:"BackgroundCubeMaterial",uniforms:Lr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(k,I,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),ms.copy(D.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),_.material.uniforms.envMap.value=X,_.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(vT.makeRotationFromEuler(ms)),_.material.toneMapped=Ut.getTransfer(X.colorSpace)!==jt,(v!==X||y!==X.version||b!==o.toneMapping)&&(_.material.needsUpdate=!0,v=X,y=X.version,b=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new Rn(new Zo(2,2),new da({name:"BackgroundMaterial",uniforms:Lr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(X.colorSpace)!==jt,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(v!==X||y!==X.version||b!==o.toneMapping)&&(p.material.needsUpdate=!0,v=X,y=X.version,b=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,D){L.getRGB(Rc,Ax(o)),s.buffers.color.setClear(Rc.r,Rc.g,Rc.b,D,d)}function O(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,D=1){h.set(L),m=D,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(h,m)},render:A,addToRenderList:M,dispose:O}}function _T(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,d=!1;function h(R,V,ce,fe,ye){let xe=!1;const F=v(fe,ce,V);c!==F&&(c=F,p(c.object)),xe=b(R,fe,ce,ye),xe&&T(R,fe,ce,ye),ye!==null&&e.update(ye,o.ELEMENT_ARRAY_BUFFER),(xe||d)&&(d=!1,D(R,V,ce,fe),ye!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ye).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function v(R,V,ce){const fe=ce.wireframe===!0;let ye=s[R.id];ye===void 0&&(ye={},s[R.id]=ye);let xe=ye[V.id];xe===void 0&&(xe={},ye[V.id]=xe);let F=xe[fe];return F===void 0&&(F=y(m()),xe[fe]=F),F}function y(R){const V=[],ce=[],fe=[];for(let ye=0;ye<i;ye++)V[ye]=0,ce[ye]=0,fe[ye]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ce,attributeDivisors:fe,object:R,attributes:{},index:null}}function b(R,V,ce,fe){const ye=c.attributes,xe=V.attributes;let F=0;const ee=ce.getAttributes();for(const J in ee)if(ee[J].location>=0){const z=ye[J];let E=xe[J];if(E===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(E=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(E=R.instanceColor)),z===void 0||z.attribute!==E||E&&z.data!==E.data)return!0;F++}return c.attributesNum!==F||c.index!==fe}function T(R,V,ce,fe){const ye={},xe=V.attributes;let F=0;const ee=ce.getAttributes();for(const J in ee)if(ee[J].location>=0){let z=xe[J];z===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(z=R.instanceColor));const E={};E.attribute=z,z&&z.data&&(E.data=z.data),ye[J]=E,F++}c.attributes=ye,c.attributesNum=F,c.index=fe}function A(){const R=c.newAttributes;for(let V=0,ce=R.length;V<ce;V++)R[V]=0}function M(R){x(R,0)}function x(R,V){const ce=c.newAttributes,fe=c.enabledAttributes,ye=c.attributeDivisors;ce[R]=1,fe[R]===0&&(o.enableVertexAttribArray(R),fe[R]=1),ye[R]!==V&&(o.vertexAttribDivisor(R,V),ye[R]=V)}function O(){const R=c.newAttributes,V=c.enabledAttributes;for(let ce=0,fe=V.length;ce<fe;ce++)V[ce]!==R[ce]&&(o.disableVertexAttribArray(ce),V[ce]=0)}function L(R,V,ce,fe,ye,xe,F){F===!0?o.vertexAttribIPointer(R,V,ce,ye,xe):o.vertexAttribPointer(R,V,ce,fe,ye,xe)}function D(R,V,ce,fe){A();const ye=fe.attributes,xe=ce.getAttributes(),F=V.defaultAttributeValues;for(const ee in xe){const J=xe[ee];if(J.location>=0){let be=ye[ee];if(be===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(be=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(be=R.instanceColor)),be!==void 0){const z=be.normalized,E=be.itemSize,G=e.get(be);if(G===void 0)continue;const ae=G.buffer,j=G.type,te=G.bytesPerElement,he=j===o.INT||j===o.UNSIGNED_INT||be.gpuType===Ph;if(be.isInterleavedBufferAttribute){const le=be.data,Te=le.stride,Ce=be.offset;if(le.isInstancedInterleavedBuffer){for(let Le=0;Le<J.locationSize;Le++)x(J.location+Le,le.meshPerAttribute);R.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Le=0;Le<J.locationSize;Le++)M(J.location+Le);o.bindBuffer(o.ARRAY_BUFFER,ae);for(let Le=0;Le<J.locationSize;Le++)L(J.location+Le,E/J.locationSize,j,z,Te*te,(Ce+E/J.locationSize*Le)*te,he)}else{if(be.isInstancedBufferAttribute){for(let le=0;le<J.locationSize;le++)x(J.location+le,be.meshPerAttribute);R.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let le=0;le<J.locationSize;le++)M(J.location+le);o.bindBuffer(o.ARRAY_BUFFER,ae);for(let le=0;le<J.locationSize;le++)L(J.location+le,E/J.locationSize,j,z,E*te,E/J.locationSize*le*te,he)}}else if(F!==void 0){const z=F[ee];if(z!==void 0)switch(z.length){case 2:o.vertexAttrib2fv(J.location,z);break;case 3:o.vertexAttrib3fv(J.location,z);break;case 4:o.vertexAttrib4fv(J.location,z);break;default:o.vertexAttrib1fv(J.location,z)}}}}O()}function X(){q();for(const R in s){const V=s[R];for(const ce in V){const fe=V[ce];for(const ye in fe)_(fe[ye].object),delete fe[ye];delete V[ce]}delete s[R]}}function k(R){if(s[R.id]===void 0)return;const V=s[R.id];for(const ce in V){const fe=V[ce];for(const ye in fe)_(fe[ye].object),delete fe[ye];delete V[ce]}delete s[R.id]}function I(R){for(const V in s){const ce=s[V];if(ce[R.id]===void 0)continue;const fe=ce[R.id];for(const ye in fe)_(fe[ye].object),delete fe[ye];delete ce[R.id]}}function q(){U(),d=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:U,dispose:X,releaseStatesOfGeometry:k,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:M,disableUnusedAttributes:O}}function yT(o,e,i){let s;function l(p){s=p}function c(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function d(p,_,v){v!==0&&(o.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function h(p,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let b=0;for(let T=0;T<v;T++)b+=_[T];i.update(b,s,1)}function m(p,_,v,y){if(v===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let T=0;T<p.length;T++)d(p[T],_[T],y[T]);else{b.multiDrawArraysInstancedWEBGL(s,p,0,_,0,y,0,v);let T=0;for(let A=0;A<v;A++)T+=_[A]*y[A];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function ST(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==Ai&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const q=I===Vo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==fa&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==la&&!q)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=T>0,k=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:b,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:O,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:X,maxSamples:k}}function MT(o){const e=this;let i=null,s=0,l=!1,c=!1;const d=new vs,h=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const b=v.length!==0||y||s!==0||l;return l=y,s=v.length,b},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){i=_(v,y,0)},this.setState=function(v,y,b){const T=v.clippingPlanes,A=v.clipIntersection,M=v.clipShadows,x=o.get(v);if(!l||T===null||T.length===0||c&&!M)c?_(null):p();else{const O=c?0:s,L=O*4;let D=x.clippingState||null;m.value=D,D=_(T,y,L,b);for(let X=0;X!==L;++X)D[X]=i[X];x.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(v,y,b,T){const A=v!==null?v.length:0;let M=null;if(A!==0){if(M=m.value,T!==!0||M===null){const x=b+A*4,O=y.matrixWorldInverse;h.getNormalMatrix(O),(M===null||M.length<x)&&(M=new Float32Array(x));for(let L=0,D=b;L!==A;++L,D+=4)d.copy(v[L]).applyMatrix4(O,h),d.normal.toArray(M,D),M[D+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}function bT(o){let e=new WeakMap;function i(d,h){return h===Jd?d.mapping=wr:h===$d&&(d.mapping=Cr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Jd||h===$d)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Eb(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const Mr=4,Ev=[.125,.215,.35,.446,.526,.582],Ss=20,Id=new Yh,Tv=new Et;let zd=null,Bd=0,Fd=0,kd=!1;const xs=(1+Math.sqrt(5))/2,_r=1/xs,Av=[new Z(-xs,_r,0),new Z(xs,_r,0),new Z(-_r,0,xs),new Z(_r,0,xs),new Z(0,xs,-_r),new Z(0,xs,_r),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class wv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){zd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,s,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zd,Bd,Fd),this._renderer.xr.enabled=kd,e.scissorTest=!1,Nc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===wr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:Vo,format:Ai,colorSpace:Dr,depthBuffer:!1},l=Cv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cv(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ET(c)),this._blurMaterial=TT(c,e,i)}return l}_compileMaterial(e){const i=new Rn(this._lodPlanes[0],e);this._renderer.compile(i,Id)}_sceneToCubeUV(e,i,s,l){const h=new Yn(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(Tv),_.toneMapping=ja,_.autoClear=!1;const b=new Ho({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),T=new Rn(new Yo,b);let A=!1;const M=e.background;M?M.isColor&&(b.color.copy(M),e.background=null,A=!0):(b.color.copy(Tv),A=!0);for(let x=0;x<6;x++){const O=x%3;O===0?(h.up.set(0,m[x],0),h.lookAt(p[x],0,0)):O===1?(h.up.set(0,0,m[x]),h.lookAt(0,p[x],0)):(h.up.set(0,m[x],0),h.lookAt(0,0,p[x]));const L=this._cubeSize;Nc(l,O*L,x>2?L:0,L,L),_.setRenderTarget(l),A&&_.render(T,h),_.render(e,h)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=y,_.autoClear=v,e.background=M}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===wr||e.mapping===Cr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new Rn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Nc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Id)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Av[(l-c-1)%Av.length];this._blur(e,c-1,c,d,h)}i.autoClear=s}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Rn(this._lodPlanes[l],p),y=p.uniforms,b=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Ss-1),A=c/T,M=isFinite(c)?1+Math.floor(_*A):Ss;M>Ss&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ss}`);const x=[];let O=0;for(let I=0;I<Ss;++I){const q=I/A,U=Math.exp(-q*q/2);x.push(U),I===0?O+=U:I<M&&(O+=2*U)}for(let I=0;I<x.length;I++)x[I]=x[I]/O;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=x,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:L}=this;y.dTheta.value=T,y.mipInt.value=L-s;const D=this._sizeLods[l],X=3*D*(l>L-Mr?l-L+Mr:0),k=4*(this._cubeSize-D);Nc(i,X,k,3*D,2*D),m.setRenderTarget(i),m.render(v,Id)}}function ET(o){const e=[],i=[],s=[];let l=o;const c=o-Mr+1+Ev.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-Mr?m=Ev[d-o+Mr-1]:d===0&&(m=0),s.push(m);const p=1/(h-2),_=-p,v=1+p,y=[_,_,v,_,v,v,_,_,v,v,_,v],b=6,T=6,A=3,M=2,x=1,O=new Float32Array(A*T*b),L=new Float32Array(M*T*b),D=new Float32Array(x*T*b);for(let k=0;k<b;k++){const I=k%3*2/3-1,q=k>2?0:-1,U=[I,q,0,I+2/3,q,0,I+2/3,q+1,0,I,q,0,I+2/3,q+1,0,I,q+1,0];O.set(U,A*T*k),L.set(y,M*T*k);const R=[k,k,k,k,k,k];D.set(R,x*T*k)}const X=new Bn;X.setAttribute("position",new Ci(O,A)),X.setAttribute("uv",new Ci(L,M)),X.setAttribute("faceIndex",new Ci(D,x)),e.push(X),l>Mr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function Cv(o,e,i){const s=new Ts(o,e,i);return s.texture.mapping=Wc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function TT(o,e,i){const s=new Float32Array(Ss),l=new Z(0,1,0);return new da({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Rv(){return new da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Nv(){return new da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function AT(o){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Jd||m===$d,_=m===wr||m===Cr;if(p||_){let v=e.get(h);const y=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new wv(o)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const b=h.image;return p&&b&&b.height>0||_&&b&&l(b)?(i===null&&(i=new wv(o)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function wT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&yr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function CT(o,e,i,s){const l={},c=new WeakMap;function d(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);y.removeEventListener("dispose",d),delete l[y.id];const b=c.get(y);b&&(e.remove(b),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(v,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(v){const y=v.attributes;for(const b in y)e.update(y[b],o.ARRAY_BUFFER)}function p(v){const y=[],b=v.index,T=v.attributes.position;let A=0;if(b!==null){const O=b.array;A=b.version;for(let L=0,D=O.length;L<D;L+=3){const X=O[L+0],k=O[L+1],I=O[L+2];y.push(X,k,k,I,I,X)}}else if(T!==void 0){const O=T.array;A=T.version;for(let L=0,D=O.length/3-1;L<D;L+=3){const X=L+0,k=L+1,I=L+2;y.push(X,k,k,I,I,X)}}else return;const M=new(_x(y)?Tx:Ex)(y,1);M.version=A;const x=c.get(v);x&&e.remove(x),c.set(v,M)}function _(v){const y=c.get(v);if(y){const b=v.index;b!==null&&y.version<b.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function RT(o,e,i){let s;function l(y){s=y}let c,d;function h(y){c=y.type,d=y.bytesPerElement}function m(y,b){o.drawElements(s,b,c,y*d),i.update(b,s,1)}function p(y,b,T){T!==0&&(o.drawElementsInstanced(s,b,c,y*d,T),i.update(b,s,T))}function _(y,b,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,c,y,0,T);let M=0;for(let x=0;x<T;x++)M+=b[x];i.update(M,s,1)}function v(y,b,T,A){if(T===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<y.length;x++)p(y[x]/d,b[x],A[x]);else{M.multiDrawElementsInstancedWEBGL(s,b,0,c,y,0,A,0,T);let x=0;for(let O=0;O<T;O++)x+=b[O]*A[O];i.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function NT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function DT(o,e,i){const s=new WeakMap,l=new Xt;function c(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let y=s.get(h);if(y===void 0||y.count!==v){let R=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",R)};var b=R;y!==void 0&&y.texture.dispose();const T=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let D=0;T===!0&&(D=1),A===!0&&(D=2),M===!0&&(D=3);let X=h.attributes.position.count*D,k=1;X>e.maxTextureSize&&(k=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const I=new Float32Array(X*k*4*v),q=new Sx(I,X,k,v);q.type=la,q.needsUpdate=!0;const U=D*4;for(let V=0;V<v;V++){const ce=x[V],fe=O[V],ye=L[V],xe=X*k*4*V;for(let F=0;F<ce.count;F++){const ee=F*U;T===!0&&(l.fromBufferAttribute(ce,F),I[xe+ee+0]=l.x,I[xe+ee+1]=l.y,I[xe+ee+2]=l.z,I[xe+ee+3]=0),A===!0&&(l.fromBufferAttribute(fe,F),I[xe+ee+4]=l.x,I[xe+ee+5]=l.y,I[xe+ee+6]=l.z,I[xe+ee+7]=0),M===!0&&(l.fromBufferAttribute(ye,F),I[xe+ee+8]=l.x,I[xe+ee+9]=l.y,I[xe+ee+10]=l.z,I[xe+ee+11]=ye.itemSize===4?l.w:1)}}y={count:v,texture:q,size:new vt(X,k)},s.set(h,y),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let M=0;M<p.length;M++)T+=p[M];const A=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function LT(o,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,v=e.get(m,_);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return v}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const Ix=new Kn,Dv=new Dx(1,1),zx=new Sx,Bx=new ob,Fx=new Cx,Lv=[],Uv=[],Ov=new Float32Array(16),Pv=new Float32Array(9),Iv=new Float32Array(4);function Or(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=Lv[l];if(c===void 0&&(c=new Float32Array(l),Lv[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(c,h)}return c}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function vn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Yc(o,e){let i=Uv[e];i===void 0&&(i=new Int32Array(e),Uv[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function UT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function OT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),vn(i,e)}}function PT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),vn(i,e)}}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),vn(i,e)}}function zT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;Iv.set(s),o.uniformMatrix2fv(this.addr,!1,Iv),vn(i,s)}}function BT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;Pv.set(s),o.uniformMatrix3fv(this.addr,!1,Pv),vn(i,s)}}function FT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;Ov.set(s),o.uniformMatrix4fv(this.addr,!1,Ov),vn(i,s)}}function kT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function HT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),vn(i,e)}}function GT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),vn(i,e)}}function VT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),vn(i,e)}}function jT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function XT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),vn(i,e)}}function WT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),vn(i,e)}}function qT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),vn(i,e)}}function YT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Dv.compareFunction=xx,c=Dv):c=Ix,i.setTexture2D(e||c,l)}function ZT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Bx,l)}function KT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Fx,l)}function QT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||zx,l)}function JT(o){switch(o){case 5126:return UT;case 35664:return OT;case 35665:return PT;case 35666:return IT;case 35674:return zT;case 35675:return BT;case 35676:return FT;case 5124:case 35670:return kT;case 35667:case 35671:return HT;case 35668:case 35672:return GT;case 35669:case 35673:return VT;case 5125:return jT;case 36294:return XT;case 36295:return WT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return KT;case 36289:case 36303:case 36311:case 36292:return QT}}function $T(o,e){o.uniform1fv(this.addr,e)}function eA(o,e){const i=Or(e,this.size,2);o.uniform2fv(this.addr,i)}function tA(o,e){const i=Or(e,this.size,3);o.uniform3fv(this.addr,i)}function nA(o,e){const i=Or(e,this.size,4);o.uniform4fv(this.addr,i)}function iA(o,e){const i=Or(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function aA(o,e){const i=Or(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function sA(o,e){const i=Or(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function rA(o,e){o.uniform1iv(this.addr,e)}function oA(o,e){o.uniform2iv(this.addr,e)}function lA(o,e){o.uniform3iv(this.addr,e)}function cA(o,e){o.uniform4iv(this.addr,e)}function uA(o,e){o.uniform1uiv(this.addr,e)}function fA(o,e){o.uniform2uiv(this.addr,e)}function dA(o,e){o.uniform3uiv(this.addr,e)}function hA(o,e){o.uniform4uiv(this.addr,e)}function pA(o,e,i){const s=this.cache,l=e.length,c=Yc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Ix,c[d])}function mA(o,e,i){const s=this.cache,l=e.length,c=Yc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Bx,c[d])}function gA(o,e,i){const s=this.cache,l=e.length,c=Yc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Fx,c[d])}function vA(o,e,i){const s=this.cache,l=e.length,c=Yc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||zx,c[d])}function xA(o){switch(o){case 5126:return $T;case 35664:return eA;case 35665:return tA;case 35666:return nA;case 35674:return iA;case 35675:return aA;case 35676:return sA;case 5124:case 35670:return rA;case 35667:case 35671:return oA;case 35668:case 35672:return lA;case 35669:case 35673:return cA;case 5125:return uA;case 36294:return fA;case 36295:return dA;case 36296:return hA;case 35678:case 36198:case 36298:case 36306:case 35682:return pA;case 35679:case 36299:case 36307:return mA;case 35680:case 36300:case 36308:case 36293:return gA;case 36289:case 36303:case 36311:case 36292:return vA}}class _A{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=JT(i.type)}}class yA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=xA(i.type)}}class SA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const Hd=/(\w+)(\])?(\[|\.)?/g;function zv(o,e){o.seq.push(e),o.map[e.id]=e}function MA(o,e,i){const s=o.name,l=s.length;for(Hd.lastIndex=0;;){const c=Hd.exec(s),d=Hd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){zv(i,p===void 0?new _A(h,o,e):new yA(h,o,e));break}else{let v=i.map[h];v===void 0&&(v=new SA(h),zv(i,v)),i=v}}}class zc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),d=e.getUniformLocation(i,c.name);MA(c,d,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function Bv(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const bA=37297;let EA=0;function TA(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Fv=new pt;function AA(o){Ut._getMatrix(Fv,Ut.workingColorSpace,o);const e=`mat3( ${Fv.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(o)){case Bc:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function kv(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+TA(o.getShaderSource(e),d)}else return l}function wA(o,e){const i=AA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function CA(o,e){let i;switch(e){case OM:i="Linear";break;case PM:i="Reinhard";break;case IM:i="Cineon";break;case sx:i="ACESFilmic";break;case BM:i="AgX";break;case FM:i="Neutral";break;case zM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new Z;function RA(){Ut.getLuminanceCoefficients(Dc);const o=Dc.x.toFixed(4),e=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function DA(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function LA(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Bo(o){return o!==""}function Hv(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(o){return o.replace(UA,PA)}const OA=new Map;function PA(o,e){let i=mt[e];if(i===void 0){const s=OA.get(e);if(s!==void 0)i=mt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Dh(i)}const IA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vv(o){return o.replace(IA,zA)}function zA(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function jv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function BA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ix?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===hM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===oa&&(e="SHADOWMAP_TYPE_VSM"),e}function FA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case wr:case Cr:e="ENVMAP_TYPE_CUBE";break;case Wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function HA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ax:e="ENVMAP_BLENDING_MULTIPLY";break;case LM:e="ENVMAP_BLENDING_MIX";break;case UM:e="ENVMAP_BLENDING_ADD";break}return e}function GA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function VA(o,e,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=BA(i),p=FA(i),_=kA(i),v=HA(i),y=GA(i),b=NA(i),T=DA(c),A=l.createProgram();let M,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Bo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Bo).join(`
`),x.length>0&&(x+=`
`)):(M=[jv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),x=[jv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?mt.tonemapping_pars_fragment:"",i.toneMapping!==ja?CA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,wA("linearToOutputTexel",i.outputColorSpace),RA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),d=Dh(d),d=Hv(d,i),d=Gv(d,i),h=Dh(h),h=Hv(h,i),h=Gv(h,i),d=Vv(d),h=Vv(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===Q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=O+M+d,D=O+x+h,X=Bv(l,l.VERTEX_SHADER,L),k=Bv(l,l.FRAGMENT_SHADER,D);l.attachShader(A,X),l.attachShader(A,k),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function I(V){if(o.debug.checkShaderErrors){const ce=l.getProgramInfoLog(A).trim(),fe=l.getShaderInfoLog(X).trim(),ye=l.getShaderInfoLog(k).trim();let xe=!0,F=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(xe=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,X,k);else{const ee=kv(l,X,"vertex"),J=kv(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+ee+`
`+J)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(fe===""||ye==="")&&(F=!1);F&&(V.diagnostics={runnable:xe,programLog:ce,vertexShader:{log:fe,prefix:M},fragmentShader:{log:ye,prefix:x}})}l.deleteShader(X),l.deleteShader(k),q=new zc(l,A),U=LA(l,A)}let q;this.getUniforms=function(){return q===void 0&&I(this),q};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(A,bA)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=EA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=X,this.fragmentShader=k,this}let jA=0;class XA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new WA(e),i.set(e,s)),s}}class WA{constructor(e){this.id=jA++,this.code=e,this.usedTimes=0}}function qA(o,e,i,s,l,c,d){const h=new Mx,m=new XA,p=new Set,_=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let b=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(U){return p.add(U),U===0?"uv":`uv${U}`}function M(U,R,V,ce,fe){const ye=ce.fog,xe=fe.geometry,F=U.isMeshStandardMaterial?ce.environment:null,ee=(U.isMeshStandardMaterial?i:e).get(U.envMap||F),J=ee&&ee.mapping===Wc?ee.image.height:null,be=T[U.type];U.precision!==null&&(b=l.getMaxPrecision(U.precision),b!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",b,"instead."));const z=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,E=z!==void 0?z.length:0;let G=0;xe.morphAttributes.position!==void 0&&(G=1),xe.morphAttributes.normal!==void 0&&(G=2),xe.morphAttributes.color!==void 0&&(G=3);let ae,j,te,he;if(be){const Rt=Oi[be];ae=Rt.vertexShader,j=Rt.fragmentShader}else ae=U.vertexShader,j=U.fragmentShader,m.update(U),te=m.getVertexShaderID(U),he=m.getFragmentShaderID(U);const le=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ce=fe.isInstancedMesh===!0,Le=fe.isBatchedMesh===!0,Je=!!U.map,et=!!U.matcap,Ye=!!ee,B=!!U.aoMap,Pt=!!U.lightMap,tt=!!U.bumpMap,it=!!U.normalMap,Ge=!!U.displacementMap,xt=!!U.emissiveMap,Fe=!!U.metalnessMap,P=!!U.roughnessMap,C=U.anisotropy>0,se=U.clearcoat>0,ge=U.dispersion>0,Ee=U.iridescence>0,_e=U.sheen>0,je=U.transmission>0,Re=C&&!!U.anisotropyMap,ke=se&&!!U.clearcoatMap,gt=se&&!!U.clearcoatNormalMap,we=se&&!!U.clearcoatRoughnessMap,He=Ee&&!!U.iridescenceMap,qe=Ee&&!!U.iridescenceThicknessMap,We=_e&&!!U.sheenColorMap,ze=_e&&!!U.sheenRoughnessMap,at=!!U.specularMap,ft=!!U.specularColorMap,Ft=!!U.specularIntensityMap,K=je&&!!U.transmissionMap,Ne=je&&!!U.thicknessMap,pe=!!U.gradientMap,Me=!!U.alphaMap,De=U.alphaTest>0,Ue=!!U.alphaHash,rt=!!U.extensions;let Qt=ja;U.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Qt=o.toneMapping);const hn={shaderID:be,shaderType:U.type,shaderName:U.name,vertexShader:ae,fragmentShader:j,defines:U.defines,customVertexShaderID:te,customFragmentShaderID:he,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:b,batching:Le,batchingColor:Le&&fe._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&fe.instanceColor!==null,instancingMorph:Ce&&fe.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:le===null?o.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Dr,alphaToCoverage:!!U.alphaToCoverage,map:Je,matcap:et,envMap:Ye,envMapMode:Ye&&ee.mapping,envMapCubeUVHeight:J,aoMap:B,lightMap:Pt,bumpMap:tt,normalMap:it,displacementMap:y&&Ge,emissiveMap:xt,normalMapObjectSpace:it&&U.normalMapType===VM,normalMapTangentSpace:it&&U.normalMapType===vx,metalnessMap:Fe,roughnessMap:P,anisotropy:C,anisotropyMap:Re,clearcoat:se,clearcoatMap:ke,clearcoatNormalMap:gt,clearcoatRoughnessMap:we,dispersion:ge,iridescence:Ee,iridescenceMap:He,iridescenceThicknessMap:qe,sheen:_e,sheenColorMap:We,sheenRoughnessMap:ze,specularMap:at,specularColorMap:ft,specularIntensityMap:Ft,transmission:je,transmissionMap:K,thicknessMap:Ne,gradientMap:pe,opaque:U.transparent===!1&&U.blending===br&&U.alphaToCoverage===!1,alphaMap:Me,alphaTest:De,alphaHash:Ue,combine:U.combine,mapUv:Je&&A(U.map.channel),aoMapUv:B&&A(U.aoMap.channel),lightMapUv:Pt&&A(U.lightMap.channel),bumpMapUv:tt&&A(U.bumpMap.channel),normalMapUv:it&&A(U.normalMap.channel),displacementMapUv:Ge&&A(U.displacementMap.channel),emissiveMapUv:xt&&A(U.emissiveMap.channel),metalnessMapUv:Fe&&A(U.metalnessMap.channel),roughnessMapUv:P&&A(U.roughnessMap.channel),anisotropyMapUv:Re&&A(U.anisotropyMap.channel),clearcoatMapUv:ke&&A(U.clearcoatMap.channel),clearcoatNormalMapUv:gt&&A(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&A(U.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&A(U.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&A(U.iridescenceThicknessMap.channel),sheenColorMapUv:We&&A(U.sheenColorMap.channel),sheenRoughnessMapUv:ze&&A(U.sheenRoughnessMap.channel),specularMapUv:at&&A(U.specularMap.channel),specularColorMapUv:ft&&A(U.specularColorMap.channel),specularIntensityMapUv:Ft&&A(U.specularIntensityMap.channel),transmissionMapUv:K&&A(U.transmissionMap.channel),thicknessMapUv:Ne&&A(U.thicknessMap.channel),alphaMapUv:Me&&A(U.alphaMap.channel),vertexTangents:!!xe.attributes.tangent&&(it||C),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,pointsUvs:fe.isPoints===!0&&!!xe.attributes.uv&&(Je||Me),fog:!!ye,useFog:U.fog===!0,fogExp2:!!ye&&ye.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Te,skinning:fe.isSkinnedMesh===!0,morphTargets:xe.morphAttributes.position!==void 0,morphNormals:xe.morphAttributes.normal!==void 0,morphColors:xe.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:G,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:Qt,decodeVideoTexture:Je&&U.map.isVideoTexture===!0&&Ut.getTransfer(U.map.colorSpace)===jt,decodeVideoTextureEmissive:xt&&U.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(U.emissiveMap.colorSpace)===jt,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Pi,flipSided:U.side===Zn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:rt&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&U.extensions.multiDraw===!0||Le)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return hn.vertexUv1s=p.has(1),hn.vertexUv2s=p.has(2),hn.vertexUv3s=p.has(3),p.clear(),hn}function x(U){const R=[];if(U.shaderID?R.push(U.shaderID):(R.push(U.customVertexShaderID),R.push(U.customFragmentShaderID)),U.defines!==void 0)for(const V in U.defines)R.push(V),R.push(U.defines[V]);return U.isRawShaderMaterial===!1&&(O(R,U),L(R,U),R.push(o.outputColorSpace)),R.push(U.customProgramCacheKey),R.join()}function O(U,R){U.push(R.precision),U.push(R.outputColorSpace),U.push(R.envMapMode),U.push(R.envMapCubeUVHeight),U.push(R.mapUv),U.push(R.alphaMapUv),U.push(R.lightMapUv),U.push(R.aoMapUv),U.push(R.bumpMapUv),U.push(R.normalMapUv),U.push(R.displacementMapUv),U.push(R.emissiveMapUv),U.push(R.metalnessMapUv),U.push(R.roughnessMapUv),U.push(R.anisotropyMapUv),U.push(R.clearcoatMapUv),U.push(R.clearcoatNormalMapUv),U.push(R.clearcoatRoughnessMapUv),U.push(R.iridescenceMapUv),U.push(R.iridescenceThicknessMapUv),U.push(R.sheenColorMapUv),U.push(R.sheenRoughnessMapUv),U.push(R.specularMapUv),U.push(R.specularColorMapUv),U.push(R.specularIntensityMapUv),U.push(R.transmissionMapUv),U.push(R.thicknessMapUv),U.push(R.combine),U.push(R.fogExp2),U.push(R.sizeAttenuation),U.push(R.morphTargetsCount),U.push(R.morphAttributeCount),U.push(R.numDirLights),U.push(R.numPointLights),U.push(R.numSpotLights),U.push(R.numSpotLightMaps),U.push(R.numHemiLights),U.push(R.numRectAreaLights),U.push(R.numDirLightShadows),U.push(R.numPointLightShadows),U.push(R.numSpotLightShadows),U.push(R.numSpotLightShadowsWithMaps),U.push(R.numLightProbes),U.push(R.shadowMapType),U.push(R.toneMapping),U.push(R.numClippingPlanes),U.push(R.numClipIntersection),U.push(R.depthPacking)}function L(U,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),U.push(h.mask)}function D(U){const R=T[U.type];let V;if(R){const ce=Oi[R];V=yb.clone(ce.uniforms)}else V=U.uniforms;return V}function X(U,R){let V;for(let ce=0,fe=_.length;ce<fe;ce++){const ye=_[ce];if(ye.cacheKey===R){V=ye,++V.usedTimes;break}}return V===void 0&&(V=new VA(o,R,U,c),_.push(V)),V}function k(U){if(--U.usedTimes===0){const R=_.indexOf(U);_[R]=_[_.length-1],_.pop(),U.destroy()}}function I(U){m.remove(U)}function q(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:D,acquireProgram:X,releaseProgram:k,releaseShaderCache:I,programs:_,dispose:q}}function YA(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function ZA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Xv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Wv(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(v,y,b,T,A,M){let x=o[e];return x===void 0?(x={id:v.id,object:v,geometry:y,material:b,groupOrder:T,renderOrder:v.renderOrder,z:A,group:M},o[e]=x):(x.id=v.id,x.object=v,x.geometry=y,x.material=b,x.groupOrder=T,x.renderOrder=v.renderOrder,x.z=A,x.group=M),e++,x}function h(v,y,b,T,A,M){const x=d(v,y,b,T,A,M);b.transmission>0?s.push(x):b.transparent===!0?l.push(x):i.push(x)}function m(v,y,b,T,A,M){const x=d(v,y,b,T,A,M);b.transmission>0?s.unshift(x):b.transparent===!0?l.unshift(x):i.unshift(x)}function p(v,y){i.length>1&&i.sort(v||ZA),s.length>1&&s.sort(y||Xv),l.length>1&&l.sort(y||Xv)}function _(){for(let v=e,y=o.length;v<y;v++){const b=o[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:_,sort:p}}function KA(){let o=new WeakMap;function e(s,l){const c=o.get(s);let d;return c===void 0?(d=new Wv,o.set(s,[d])):l>=c.length?(d=new Wv,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function QA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Z,color:new Et};break;case"SpotLight":i={position:new Z,direction:new Z,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new Et,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":i={color:new Et,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[e.id]=i,i}}}function JA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let $A=0;function e2(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function t2(o){const e=new QA,i=JA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Z);const l=new Z,c=new Kt,d=new Kt;function h(p){let _=0,v=0,y=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let b=0,T=0,A=0,M=0,x=0,O=0,L=0,D=0,X=0,k=0,I=0;p.sort(e2);for(let U=0,R=p.length;U<R;U++){const V=p[U],ce=V.color,fe=V.intensity,ye=V.distance,xe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=ce.r*fe,v+=ce.g*fe,y+=ce.b*fe;else if(V.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(V.sh.coefficients[F],fe);I++}else if(V.isDirectionalLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ee=V.shadow,J=i.get(V);J.shadowIntensity=ee.intensity,J.shadowBias=ee.bias,J.shadowNormalBias=ee.normalBias,J.shadowRadius=ee.radius,J.shadowMapSize=ee.mapSize,s.directionalShadow[b]=J,s.directionalShadowMap[b]=xe,s.directionalShadowMatrix[b]=V.shadow.matrix,O++}s.directional[b]=F,b++}else if(V.isSpotLight){const F=e.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(ce).multiplyScalar(fe),F.distance=ye,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,s.spot[A]=F;const ee=V.shadow;if(V.map&&(s.spotLightMap[X]=V.map,X++,ee.updateMatrices(V),V.castShadow&&k++),s.spotLightMatrix[A]=ee.matrix,V.castShadow){const J=i.get(V);J.shadowIntensity=ee.intensity,J.shadowBias=ee.bias,J.shadowNormalBias=ee.normalBias,J.shadowRadius=ee.radius,J.shadowMapSize=ee.mapSize,s.spotShadow[A]=J,s.spotShadowMap[A]=xe,D++}A++}else if(V.isRectAreaLight){const F=e.get(V);F.color.copy(ce).multiplyScalar(fe),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=F,M++}else if(V.isPointLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const ee=V.shadow,J=i.get(V);J.shadowIntensity=ee.intensity,J.shadowBias=ee.bias,J.shadowNormalBias=ee.normalBias,J.shadowRadius=ee.radius,J.shadowMapSize=ee.mapSize,J.shadowCameraNear=ee.camera.near,J.shadowCameraFar=ee.camera.far,s.pointShadow[T]=J,s.pointShadowMap[T]=xe,s.pointShadowMatrix[T]=V.shadow.matrix,L++}s.point[T]=F,T++}else if(V.isHemisphereLight){const F=e.get(V);F.skyColor.copy(V.color).multiplyScalar(fe),F.groundColor.copy(V.groundColor).multiplyScalar(fe),s.hemi[x]=F,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=y;const q=s.hash;(q.directionalLength!==b||q.pointLength!==T||q.spotLength!==A||q.rectAreaLength!==M||q.hemiLength!==x||q.numDirectionalShadows!==O||q.numPointShadows!==L||q.numSpotShadows!==D||q.numSpotMaps!==X||q.numLightProbes!==I)&&(s.directional.length=b,s.spot.length=A,s.rectArea.length=M,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+X-k,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=I,q.directionalLength=b,q.pointLength=T,q.spotLength=A,q.rectAreaLength=M,q.hemiLength=x,q.numDirectionalShadows=O,q.numPointShadows=L,q.numSpotShadows=D,q.numSpotMaps=X,q.numLightProbes=I,s.version=$A++)}function m(p,_){let v=0,y=0,b=0,T=0,A=0;const M=_.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const L=p[x];if(L.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(L.isSpotLight){const D=s.spot[b];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),b++}else if(L.isRectAreaLight){const D=s.rectArea[T];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),d.identity(),c.copy(L.matrixWorld),c.premultiply(M),d.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),T++}else if(L.isPointLight){const D=s.point[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),y++}else if(L.isHemisphereLight){const D=s.hemi[A];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(M),A++}}}return{setup:h,setupView:m,state:s}}function qv(o){const e=new t2(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function d(_){s.push(_)}function h(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function n2(o){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new qv(o),e.set(l,[h])):c>=d.length?(h=new qv(o),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const i2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function s2(o,e,i){let s=new Vh;const l=new vt,c=new vt,d=new Xt,h=new Db({depthPacking:GM}),m=new Lb,p={},_=i.maxTextureSize,v={[Xa]:Zn,[Zn]:Xa,[Pi]:Pi},y=new da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:i2,fragmentShader:a2}),b=y.clone();b.defines.HORIZONTAL_PASS=1;const T=new Bn;T.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Rn(T,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ix;let x=this.type;this.render=function(k,I,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||k.length===0)return;const U=o.getRenderTarget(),R=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),ce=o.state;ce.setBlending(Va),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const fe=x!==oa&&this.type===oa,ye=x===oa&&this.type!==oa;for(let xe=0,F=k.length;xe<F;xe++){const ee=k[xe],J=ee.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;l.copy(J.mapSize);const be=J.getFrameExtents();if(l.multiply(be),c.copy(J.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/be.x),l.x=c.x*be.x,J.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/be.y),l.y=c.y*be.y,J.mapSize.y=c.y)),J.map===null||fe===!0||ye===!0){const E=this.type!==oa?{minFilter:wi,magFilter:wi}:{};J.map!==null&&J.map.dispose(),J.map=new Ts(l.x,l.y,E),J.map.texture.name=ee.name+".shadowMap",J.camera.updateProjectionMatrix()}o.setRenderTarget(J.map),o.clear();const z=J.getViewportCount();for(let E=0;E<z;E++){const G=J.getViewport(E);d.set(c.x*G.x,c.y*G.y,c.x*G.z,c.y*G.w),ce.viewport(d),J.updateMatrices(ee,E),s=J.getFrustum(),D(I,q,J.camera,ee,this.type)}J.isPointLightShadow!==!0&&this.type===oa&&O(J,q),J.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(U,R,V)};function O(k,I){const q=e.update(A);y.defines.VSM_SAMPLES!==k.blurSamples&&(y.defines.VSM_SAMPLES=k.blurSamples,b.defines.VSM_SAMPLES=k.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Ts(l.x,l.y)),y.uniforms.shadow_pass.value=k.map.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(I,null,q,y,A,null),b.uniforms.shadow_pass.value=k.mapPass.texture,b.uniforms.resolution.value=k.mapSize,b.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(I,null,q,b,A,null)}function L(k,I,q,U){let R=null;const V=q.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(V!==void 0)R=V;else if(R=q.isPointLight===!0?m:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ce=R.uuid,fe=I.uuid;let ye=p[ce];ye===void 0&&(ye={},p[ce]=ye);let xe=ye[fe];xe===void 0&&(xe=R.clone(),ye[fe]=xe,I.addEventListener("dispose",X)),R=xe}if(R.visible=I.visible,R.wireframe=I.wireframe,U===oa?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:v[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ce=o.properties.get(R);ce.light=q}return R}function D(k,I,q,U,R){if(k.visible===!1)return;if(k.layers.test(I.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&R===oa)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,k.matrixWorld);const fe=e.update(k),ye=k.material;if(Array.isArray(ye)){const xe=fe.groups;for(let F=0,ee=xe.length;F<ee;F++){const J=xe[F],be=ye[J.materialIndex];if(be&&be.visible){const z=L(k,be,U,R);k.onBeforeShadow(o,k,I,q,fe,z,J),o.renderBufferDirect(q,null,fe,z,k,J),k.onAfterShadow(o,k,I,q,fe,z,J)}}}else if(ye.visible){const xe=L(k,ye,U,R);k.onBeforeShadow(o,k,I,q,fe,xe,null),o.renderBufferDirect(q,null,fe,xe,k,null),k.onAfterShadow(o,k,I,q,fe,xe,null)}}const ce=k.children;for(let fe=0,ye=ce.length;fe<ye;fe++)D(ce[fe],I,q,U,R)}function X(k){k.target.removeEventListener("dispose",X);for(const q in p){const U=p[q],R=k.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}const r2={[Xd]:Wd,[qd]:Kd,[Yd]:Qd,[Ar]:Zd,[Wd]:Xd,[Kd]:qd,[Qd]:Yd,[Zd]:Ar};function o2(o,e){function i(){let K=!1;const Ne=new Xt;let pe=null;const Me=new Xt(0,0,0,0);return{setMask:function(De){pe!==De&&!K&&(o.colorMask(De,De,De,De),pe=De)},setLocked:function(De){K=De},setClear:function(De,Ue,rt,Qt,hn){hn===!0&&(De*=Qt,Ue*=Qt,rt*=Qt),Ne.set(De,Ue,rt,Qt),Me.equals(Ne)===!1&&(o.clearColor(De,Ue,rt,Qt),Me.copy(Ne))},reset:function(){K=!1,pe=null,Me.set(-1,0,0,0)}}}function s(){let K=!1,Ne=!1,pe=null,Me=null,De=null;return{setReversed:function(Ue){if(Ne!==Ue){const rt=e.get("EXT_clip_control");Ne?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Qt=De;De=null,this.setClear(Qt)}Ne=Ue},getReversed:function(){return Ne},setTest:function(Ue){Ue?le(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(Ue){pe!==Ue&&!K&&(o.depthMask(Ue),pe=Ue)},setFunc:function(Ue){if(Ne&&(Ue=r2[Ue]),Me!==Ue){switch(Ue){case Xd:o.depthFunc(o.NEVER);break;case Wd:o.depthFunc(o.ALWAYS);break;case qd:o.depthFunc(o.LESS);break;case Ar:o.depthFunc(o.LEQUAL);break;case Yd:o.depthFunc(o.EQUAL);break;case Zd:o.depthFunc(o.GEQUAL);break;case Kd:o.depthFunc(o.GREATER);break;case Qd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Me=Ue}},setLocked:function(Ue){K=Ue},setClear:function(Ue){De!==Ue&&(Ne&&(Ue=1-Ue),o.clearDepth(Ue),De=Ue)},reset:function(){K=!1,pe=null,Me=null,De=null,Ne=!1}}}function l(){let K=!1,Ne=null,pe=null,Me=null,De=null,Ue=null,rt=null,Qt=null,hn=null;return{setTest:function(Rt){K||(Rt?le(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(Rt){Ne!==Rt&&!K&&(o.stencilMask(Rt),Ne=Rt)},setFunc:function(Rt,Mn,gi){(pe!==Rt||Me!==Mn||De!==gi)&&(o.stencilFunc(Rt,Mn,gi),pe=Rt,Me=Mn,De=gi)},setOp:function(Rt,Mn,gi){(Ue!==Rt||rt!==Mn||Qt!==gi)&&(o.stencilOp(Rt,Mn,gi),Ue=Rt,rt=Mn,Qt=gi)},setLocked:function(Rt){K=Rt},setClear:function(Rt){hn!==Rt&&(o.clearStencil(Rt),hn=Rt)},reset:function(){K=!1,Ne=null,pe=null,Me=null,De=null,Ue=null,rt=null,Qt=null,hn=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},y=new WeakMap,b=[],T=null,A=!1,M=null,x=null,O=null,L=null,D=null,X=null,k=null,I=new Et(0,0,0),q=0,U=!1,R=null,V=null,ce=null,fe=null,ye=null;const xe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,ee=0;const J=o.getParameter(o.VERSION);J.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(J)[1]),F=ee>=1):J.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),F=ee>=2);let be=null,z={};const E=o.getParameter(o.SCISSOR_BOX),G=o.getParameter(o.VIEWPORT),ae=new Xt().fromArray(E),j=new Xt().fromArray(G);function te(K,Ne,pe,Me){const De=new Uint8Array(4),Ue=o.createTexture();o.bindTexture(K,Ue),o.texParameteri(K,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(K,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let rt=0;rt<pe;rt++)K===o.TEXTURE_3D||K===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,Me,0,o.RGBA,o.UNSIGNED_BYTE,De):o.texImage2D(Ne+rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,De);return Ue}const he={};he[o.TEXTURE_2D]=te(o.TEXTURE_2D,o.TEXTURE_2D,1),he[o.TEXTURE_CUBE_MAP]=te(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[o.TEXTURE_2D_ARRAY]=te(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),he[o.TEXTURE_3D]=te(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),le(o.DEPTH_TEST),d.setFunc(Ar),tt(!1),it(X0),le(o.CULL_FACE),B(Va);function le(K){_[K]!==!0&&(o.enable(K),_[K]=!0)}function Te(K){_[K]!==!1&&(o.disable(K),_[K]=!1)}function Ce(K,Ne){return v[K]!==Ne?(o.bindFramebuffer(K,Ne),v[K]=Ne,K===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ne),K===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Le(K,Ne){let pe=b,Me=!1;if(K){pe=y.get(Ne),pe===void 0&&(pe=[],y.set(Ne,pe));const De=K.textures;if(pe.length!==De.length||pe[0]!==o.COLOR_ATTACHMENT0){for(let Ue=0,rt=De.length;Ue<rt;Ue++)pe[Ue]=o.COLOR_ATTACHMENT0+Ue;pe.length=De.length,Me=!0}}else pe[0]!==o.BACK&&(pe[0]=o.BACK,Me=!0);Me&&o.drawBuffers(pe)}function Je(K){return T!==K?(o.useProgram(K),T=K,!0):!1}const et={[_s]:o.FUNC_ADD,[mM]:o.FUNC_SUBTRACT,[gM]:o.FUNC_REVERSE_SUBTRACT};et[vM]=o.MIN,et[xM]=o.MAX;const Ye={[_M]:o.ZERO,[yM]:o.ONE,[SM]:o.SRC_COLOR,[Vd]:o.SRC_ALPHA,[wM]:o.SRC_ALPHA_SATURATE,[TM]:o.DST_COLOR,[bM]:o.DST_ALPHA,[MM]:o.ONE_MINUS_SRC_COLOR,[jd]:o.ONE_MINUS_SRC_ALPHA,[AM]:o.ONE_MINUS_DST_COLOR,[EM]:o.ONE_MINUS_DST_ALPHA,[CM]:o.CONSTANT_COLOR,[RM]:o.ONE_MINUS_CONSTANT_COLOR,[NM]:o.CONSTANT_ALPHA,[DM]:o.ONE_MINUS_CONSTANT_ALPHA};function B(K,Ne,pe,Me,De,Ue,rt,Qt,hn,Rt){if(K===Va){A===!0&&(Te(o.BLEND),A=!1);return}if(A===!1&&(le(o.BLEND),A=!0),K!==pM){if(K!==M||Rt!==U){if((x!==_s||D!==_s)&&(o.blendEquation(o.FUNC_ADD),x=_s,D=_s),Rt)switch(K){case br:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case W0:o.blendFunc(o.ONE,o.ONE);break;case q0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Y0:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case br:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case W0:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case q0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Y0:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}O=null,L=null,X=null,k=null,I.set(0,0,0),q=0,M=K,U=Rt}return}De=De||Ne,Ue=Ue||pe,rt=rt||Me,(Ne!==x||De!==D)&&(o.blendEquationSeparate(et[Ne],et[De]),x=Ne,D=De),(pe!==O||Me!==L||Ue!==X||rt!==k)&&(o.blendFuncSeparate(Ye[pe],Ye[Me],Ye[Ue],Ye[rt]),O=pe,L=Me,X=Ue,k=rt),(Qt.equals(I)===!1||hn!==q)&&(o.blendColor(Qt.r,Qt.g,Qt.b,hn),I.copy(Qt),q=hn),M=K,U=!1}function Pt(K,Ne){K.side===Pi?Te(o.CULL_FACE):le(o.CULL_FACE);let pe=K.side===Zn;Ne&&(pe=!pe),tt(pe),K.blending===br&&K.transparent===!1?B(Va):B(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),d.setFunc(K.depthFunc),d.setTest(K.depthTest),d.setMask(K.depthWrite),c.setMask(K.colorWrite);const Me=K.stencilWrite;h.setTest(Me),Me&&(h.setMask(K.stencilWriteMask),h.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),h.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),xt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?le(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function tt(K){R!==K&&(K?o.frontFace(o.CW):o.frontFace(o.CCW),R=K)}function it(K){K!==fM?(le(o.CULL_FACE),K!==V&&(K===X0?o.cullFace(o.BACK):K===dM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),V=K}function Ge(K){K!==ce&&(F&&o.lineWidth(K),ce=K)}function xt(K,Ne,pe){K?(le(o.POLYGON_OFFSET_FILL),(fe!==Ne||ye!==pe)&&(o.polygonOffset(Ne,pe),fe=Ne,ye=pe)):Te(o.POLYGON_OFFSET_FILL)}function Fe(K){K?le(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function P(K){K===void 0&&(K=o.TEXTURE0+xe-1),be!==K&&(o.activeTexture(K),be=K)}function C(K,Ne,pe){pe===void 0&&(be===null?pe=o.TEXTURE0+xe-1:pe=be);let Me=z[pe];Me===void 0&&(Me={type:void 0,texture:void 0},z[pe]=Me),(Me.type!==K||Me.texture!==Ne)&&(be!==pe&&(o.activeTexture(pe),be=pe),o.bindTexture(K,Ne||he[K]),Me.type=K,Me.texture=Ne)}function se(){const K=z[be];K!==void 0&&K.type!==void 0&&(o.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function ge(){try{o.compressedTexImage2D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ee(){try{o.compressedTexImage3D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function _e(){try{o.texSubImage2D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function je(){try{o.texSubImage3D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Re(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ke(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function gt(){try{o.texStorage2D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function we(){try{o.texStorage3D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function He(){try{o.texImage2D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function qe(){try{o.texImage3D.apply(o,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function We(K){ae.equals(K)===!1&&(o.scissor(K.x,K.y,K.z,K.w),ae.copy(K))}function ze(K){j.equals(K)===!1&&(o.viewport(K.x,K.y,K.z,K.w),j.copy(K))}function at(K,Ne){let pe=p.get(Ne);pe===void 0&&(pe=new WeakMap,p.set(Ne,pe));let Me=pe.get(K);Me===void 0&&(Me=o.getUniformBlockIndex(Ne,K.name),pe.set(K,Me))}function ft(K,Ne){const Me=p.get(Ne).get(K);m.get(Ne)!==Me&&(o.uniformBlockBinding(Ne,Me,K.__bindingPointIndex),m.set(Ne,Me))}function Ft(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},be=null,z={},v={},y=new WeakMap,b=[],T=null,A=!1,M=null,x=null,O=null,L=null,D=null,X=null,k=null,I=new Et(0,0,0),q=0,U=!1,R=null,V=null,ce=null,fe=null,ye=null,ae.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:le,disable:Te,bindFramebuffer:Ce,drawBuffers:Le,useProgram:Je,setBlending:B,setMaterial:Pt,setFlipSided:tt,setCullFace:it,setLineWidth:Ge,setPolygonOffset:xt,setScissorTest:Fe,activeTexture:P,bindTexture:C,unbindTexture:se,compressedTexImage2D:ge,compressedTexImage3D:Ee,texImage2D:He,texImage3D:qe,updateUBOMapping:at,uniformBlockBinding:ft,texStorage2D:gt,texStorage3D:we,texSubImage2D:_e,texSubImage3D:je,compressedTexSubImage2D:Re,compressedTexSubImage3D:ke,scissor:We,viewport:ze,reset:Ft}}function l2(o,e,i,s,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new vt,_=new WeakMap;let v;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,C){return b?new OffscreenCanvas(P,C):kc("canvas")}function A(P,C,se){let ge=1;const Ee=Fe(P);if((Ee.width>se||Ee.height>se)&&(ge=se/Math.max(Ee.width,Ee.height)),ge<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const _e=Math.floor(ge*Ee.width),je=Math.floor(ge*Ee.height);v===void 0&&(v=T(_e,je));const Re=C?T(_e,je):v;return Re.width=_e,Re.height=je,Re.getContext("2d").drawImage(P,0,0,_e,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+_e+"x"+je+")."),Re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),P;return P}function M(P){return P.generateMipmaps}function x(P){o.generateMipmap(P)}function O(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(P,C,se,ge,Ee=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let _e=C;if(C===o.RED&&(se===o.FLOAT&&(_e=o.R32F),se===o.HALF_FLOAT&&(_e=o.R16F),se===o.UNSIGNED_BYTE&&(_e=o.R8)),C===o.RED_INTEGER&&(se===o.UNSIGNED_BYTE&&(_e=o.R8UI),se===o.UNSIGNED_SHORT&&(_e=o.R16UI),se===o.UNSIGNED_INT&&(_e=o.R32UI),se===o.BYTE&&(_e=o.R8I),se===o.SHORT&&(_e=o.R16I),se===o.INT&&(_e=o.R32I)),C===o.RG&&(se===o.FLOAT&&(_e=o.RG32F),se===o.HALF_FLOAT&&(_e=o.RG16F),se===o.UNSIGNED_BYTE&&(_e=o.RG8)),C===o.RG_INTEGER&&(se===o.UNSIGNED_BYTE&&(_e=o.RG8UI),se===o.UNSIGNED_SHORT&&(_e=o.RG16UI),se===o.UNSIGNED_INT&&(_e=o.RG32UI),se===o.BYTE&&(_e=o.RG8I),se===o.SHORT&&(_e=o.RG16I),se===o.INT&&(_e=o.RG32I)),C===o.RGB_INTEGER&&(se===o.UNSIGNED_BYTE&&(_e=o.RGB8UI),se===o.UNSIGNED_SHORT&&(_e=o.RGB16UI),se===o.UNSIGNED_INT&&(_e=o.RGB32UI),se===o.BYTE&&(_e=o.RGB8I),se===o.SHORT&&(_e=o.RGB16I),se===o.INT&&(_e=o.RGB32I)),C===o.RGBA_INTEGER&&(se===o.UNSIGNED_BYTE&&(_e=o.RGBA8UI),se===o.UNSIGNED_SHORT&&(_e=o.RGBA16UI),se===o.UNSIGNED_INT&&(_e=o.RGBA32UI),se===o.BYTE&&(_e=o.RGBA8I),se===o.SHORT&&(_e=o.RGBA16I),se===o.INT&&(_e=o.RGBA32I)),C===o.RGB&&se===o.UNSIGNED_INT_5_9_9_9_REV&&(_e=o.RGB9_E5),C===o.RGBA){const je=Ee?Bc:Ut.getTransfer(ge);se===o.FLOAT&&(_e=o.RGBA32F),se===o.HALF_FLOAT&&(_e=o.RGBA16F),se===o.UNSIGNED_BYTE&&(_e=je===jt?o.SRGB8_ALPHA8:o.RGBA8),se===o.UNSIGNED_SHORT_4_4_4_4&&(_e=o.RGBA4),se===o.UNSIGNED_SHORT_5_5_5_1&&(_e=o.RGB5_A1)}return(_e===o.R16F||_e===o.R32F||_e===o.RG16F||_e===o.RG32F||_e===o.RGBA16F||_e===o.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function D(P,C){let se;return P?C===null||C===Es||C===Rr?se=o.DEPTH24_STENCIL8:C===la?se=o.DEPTH32F_STENCIL8:C===ko&&(se=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Es||C===Rr?se=o.DEPTH_COMPONENT24:C===la?se=o.DEPTH_COMPONENT32F:C===ko&&(se=o.DEPTH_COMPONENT16),se}function X(P,C){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==wi&&P.minFilter!==Ii?Math.log2(Math.max(C.width,C.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?C.mipmaps.length:1}function k(P){const C=P.target;C.removeEventListener("dispose",k),q(C),C.isVideoTexture&&_.delete(C)}function I(P){const C=P.target;C.removeEventListener("dispose",I),R(C)}function q(P){const C=s.get(P);if(C.__webglInit===void 0)return;const se=P.source,ge=y.get(se);if(ge){const Ee=ge[C.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&U(P),Object.keys(ge).length===0&&y.delete(se)}s.remove(P)}function U(P){const C=s.get(P);o.deleteTexture(C.__webglTexture);const se=P.source,ge=y.get(se);delete ge[C.__cacheKey],d.memory.textures--}function R(P){const C=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(C.__webglFramebuffer[ge]))for(let Ee=0;Ee<C.__webglFramebuffer[ge].length;Ee++)o.deleteFramebuffer(C.__webglFramebuffer[ge][Ee]);else o.deleteFramebuffer(C.__webglFramebuffer[ge]);C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer[ge])}else{if(Array.isArray(C.__webglFramebuffer))for(let ge=0;ge<C.__webglFramebuffer.length;ge++)o.deleteFramebuffer(C.__webglFramebuffer[ge]);else o.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&o.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ge=0;ge<C.__webglColorRenderbuffer.length;ge++)C.__webglColorRenderbuffer[ge]&&o.deleteRenderbuffer(C.__webglColorRenderbuffer[ge]);C.__webglDepthRenderbuffer&&o.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const se=P.textures;for(let ge=0,Ee=se.length;ge<Ee;ge++){const _e=s.get(se[ge]);_e.__webglTexture&&(o.deleteTexture(_e.__webglTexture),d.memory.textures--),s.remove(se[ge])}s.remove(P)}let V=0;function ce(){V=0}function fe(){const P=V;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),V+=1,P}function ye(P){const C=[];return C.push(P.wrapS),C.push(P.wrapT),C.push(P.wrapR||0),C.push(P.magFilter),C.push(P.minFilter),C.push(P.anisotropy),C.push(P.internalFormat),C.push(P.format),C.push(P.type),C.push(P.generateMipmaps),C.push(P.premultiplyAlpha),C.push(P.flipY),C.push(P.unpackAlignment),C.push(P.colorSpace),C.join()}function xe(P,C){const se=s.get(P);if(P.isVideoTexture&&Ge(P),P.isRenderTargetTexture===!1&&P.version>0&&se.__version!==P.version){const ge=P.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(se,P,C);return}}i.bindTexture(o.TEXTURE_2D,se.__webglTexture,o.TEXTURE0+C)}function F(P,C){const se=s.get(P);if(P.version>0&&se.__version!==P.version){j(se,P,C);return}i.bindTexture(o.TEXTURE_2D_ARRAY,se.__webglTexture,o.TEXTURE0+C)}function ee(P,C){const se=s.get(P);if(P.version>0&&se.__version!==P.version){j(se,P,C);return}i.bindTexture(o.TEXTURE_3D,se.__webglTexture,o.TEXTURE0+C)}function J(P,C){const se=s.get(P);if(P.version>0&&se.__version!==P.version){te(se,P,C);return}i.bindTexture(o.TEXTURE_CUBE_MAP,se.__webglTexture,o.TEXTURE0+C)}const be={[eh]:o.REPEAT,[Ms]:o.CLAMP_TO_EDGE,[th]:o.MIRRORED_REPEAT},z={[wi]:o.NEAREST,[kM]:o.NEAREST_MIPMAP_NEAREST,[oc]:o.NEAREST_MIPMAP_LINEAR,[Ii]:o.LINEAR,[cd]:o.LINEAR_MIPMAP_NEAREST,[bs]:o.LINEAR_MIPMAP_LINEAR},E={[jM]:o.NEVER,[KM]:o.ALWAYS,[XM]:o.LESS,[xx]:o.LEQUAL,[WM]:o.EQUAL,[ZM]:o.GEQUAL,[qM]:o.GREATER,[YM]:o.NOTEQUAL};function G(P,C){if(C.type===la&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Ii||C.magFilter===cd||C.magFilter===oc||C.magFilter===bs||C.minFilter===Ii||C.minFilter===cd||C.minFilter===oc||C.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,be[C.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,be[C.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,be[C.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,z[C.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,z[C.minFilter]),C.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,E[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===wi||C.minFilter!==oc&&C.minFilter!==bs||C.type===la&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||s.get(C).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,l.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy}}}function ae(P,C){let se=!1;P.__webglInit===void 0&&(P.__webglInit=!0,C.addEventListener("dispose",k));const ge=C.source;let Ee=y.get(ge);Ee===void 0&&(Ee={},y.set(ge,Ee));const _e=ye(C);if(_e!==P.__cacheKey){Ee[_e]===void 0&&(Ee[_e]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,se=!0),Ee[_e].usedTimes++;const je=Ee[P.__cacheKey];je!==void 0&&(Ee[P.__cacheKey].usedTimes--,je.usedTimes===0&&U(C)),P.__cacheKey=_e,P.__webglTexture=Ee[_e].texture}return se}function j(P,C,se){let ge=o.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ge=o.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ge=o.TEXTURE_3D);const Ee=ae(P,C),_e=C.source;i.bindTexture(ge,P.__webglTexture,o.TEXTURE0+se);const je=s.get(_e);if(_e.version!==je.__version||Ee===!0){i.activeTexture(o.TEXTURE0+se);const Re=Ut.getPrimaries(Ut.workingColorSpace),ke=C.colorSpace===Ga?null:Ut.getPrimaries(C.colorSpace),gt=C.colorSpace===Ga||Re===ke?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let we=A(C.image,!1,l.maxTextureSize);we=xt(C,we);const He=c.convert(C.format,C.colorSpace),qe=c.convert(C.type);let We=L(C.internalFormat,He,qe,C.colorSpace,C.isVideoTexture);G(ge,C);let ze;const at=C.mipmaps,ft=C.isVideoTexture!==!0,Ft=je.__version===void 0||Ee===!0,K=_e.dataReady,Ne=X(C,we);if(C.isDepthTexture)We=D(C.format===Nr,C.type),Ft&&(ft?i.texStorage2D(o.TEXTURE_2D,1,We,we.width,we.height):i.texImage2D(o.TEXTURE_2D,0,We,we.width,we.height,0,He,qe,null));else if(C.isDataTexture)if(at.length>0){ft&&Ft&&i.texStorage2D(o.TEXTURE_2D,Ne,We,at[0].width,at[0].height);for(let pe=0,Me=at.length;pe<Me;pe++)ze=at[pe],ft?K&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,ze.width,ze.height,He,qe,ze.data):i.texImage2D(o.TEXTURE_2D,pe,We,ze.width,ze.height,0,He,qe,ze.data);C.generateMipmaps=!1}else ft?(Ft&&i.texStorage2D(o.TEXTURE_2D,Ne,We,we.width,we.height),K&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,we.width,we.height,He,qe,we.data)):i.texImage2D(o.TEXTURE_2D,0,We,we.width,we.height,0,He,qe,we.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ft&&Ft&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,We,at[0].width,at[0].height,we.depth);for(let pe=0,Me=at.length;pe<Me;pe++)if(ze=at[pe],C.format!==Ai)if(He!==null)if(ft){if(K)if(C.layerUpdates.size>0){const De=bv(ze.width,ze.height,C.format,C.type);for(const Ue of C.layerUpdates){const rt=ze.data.subarray(Ue*De/ze.data.BYTES_PER_ELEMENT,(Ue+1)*De/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,Ue,ze.width,ze.height,1,He,rt)}C.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,ze.width,ze.height,we.depth,He,ze.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,pe,We,ze.width,ze.height,we.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?K&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,ze.width,ze.height,we.depth,He,qe,ze.data):i.texImage3D(o.TEXTURE_2D_ARRAY,pe,We,ze.width,ze.height,we.depth,0,He,qe,ze.data)}else{ft&&Ft&&i.texStorage2D(o.TEXTURE_2D,Ne,We,at[0].width,at[0].height);for(let pe=0,Me=at.length;pe<Me;pe++)ze=at[pe],C.format!==Ai?He!==null?ft?K&&i.compressedTexSubImage2D(o.TEXTURE_2D,pe,0,0,ze.width,ze.height,He,ze.data):i.compressedTexImage2D(o.TEXTURE_2D,pe,We,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?K&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,ze.width,ze.height,He,qe,ze.data):i.texImage2D(o.TEXTURE_2D,pe,We,ze.width,ze.height,0,He,qe,ze.data)}else if(C.isDataArrayTexture)if(ft){if(Ft&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,We,we.width,we.height,we.depth),K)if(C.layerUpdates.size>0){const pe=bv(we.width,we.height,C.format,C.type);for(const Me of C.layerUpdates){const De=we.data.subarray(Me*pe/we.data.BYTES_PER_ELEMENT,(Me+1)*pe/we.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Me,we.width,we.height,1,He,qe,De)}C.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,He,qe,we.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,We,we.width,we.height,we.depth,0,He,qe,we.data);else if(C.isData3DTexture)ft?(Ft&&i.texStorage3D(o.TEXTURE_3D,Ne,We,we.width,we.height,we.depth),K&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,He,qe,we.data)):i.texImage3D(o.TEXTURE_3D,0,We,we.width,we.height,we.depth,0,He,qe,we.data);else if(C.isFramebufferTexture){if(Ft)if(ft)i.texStorage2D(o.TEXTURE_2D,Ne,We,we.width,we.height);else{let pe=we.width,Me=we.height;for(let De=0;De<Ne;De++)i.texImage2D(o.TEXTURE_2D,De,We,pe,Me,0,He,qe,null),pe>>=1,Me>>=1}}else if(at.length>0){if(ft&&Ft){const pe=Fe(at[0]);i.texStorage2D(o.TEXTURE_2D,Ne,We,pe.width,pe.height)}for(let pe=0,Me=at.length;pe<Me;pe++)ze=at[pe],ft?K&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,He,qe,ze):i.texImage2D(o.TEXTURE_2D,pe,We,He,qe,ze);C.generateMipmaps=!1}else if(ft){if(Ft){const pe=Fe(we);i.texStorage2D(o.TEXTURE_2D,Ne,We,pe.width,pe.height)}K&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,He,qe,we)}else i.texImage2D(o.TEXTURE_2D,0,We,He,qe,we);M(C)&&x(ge),je.__version=_e.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function te(P,C,se){if(C.image.length!==6)return;const ge=ae(P,C),Ee=C.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+se);const _e=s.get(Ee);if(Ee.version!==_e.__version||ge===!0){i.activeTexture(o.TEXTURE0+se);const je=Ut.getPrimaries(Ut.workingColorSpace),Re=C.colorSpace===Ga?null:Ut.getPrimaries(C.colorSpace),ke=C.colorSpace===Ga||je===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const gt=C.isCompressedTexture||C.image[0].isCompressedTexture,we=C.image[0]&&C.image[0].isDataTexture,He=[];for(let Me=0;Me<6;Me++)!gt&&!we?He[Me]=A(C.image[Me],!0,l.maxCubemapSize):He[Me]=we?C.image[Me].image:C.image[Me],He[Me]=xt(C,He[Me]);const qe=He[0],We=c.convert(C.format,C.colorSpace),ze=c.convert(C.type),at=L(C.internalFormat,We,ze,C.colorSpace),ft=C.isVideoTexture!==!0,Ft=_e.__version===void 0||ge===!0,K=Ee.dataReady;let Ne=X(C,qe);G(o.TEXTURE_CUBE_MAP,C);let pe;if(gt){ft&&Ft&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,at,qe.width,qe.height);for(let Me=0;Me<6;Me++){pe=He[Me].mipmaps;for(let De=0;De<pe.length;De++){const Ue=pe[De];C.format!==Ai?We!==null?ft?K&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De,0,0,Ue.width,Ue.height,We,Ue.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De,at,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?K&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De,0,0,Ue.width,Ue.height,We,ze,Ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De,at,Ue.width,Ue.height,0,We,ze,Ue.data)}}}else{if(pe=C.mipmaps,ft&&Ft){pe.length>0&&Ne++;const Me=Fe(He[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,at,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(we){ft?K&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,He[Me].width,He[Me].height,We,ze,He[Me].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,at,He[Me].width,He[Me].height,0,We,ze,He[Me].data);for(let De=0;De<pe.length;De++){const rt=pe[De].image[Me].image;ft?K&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De+1,0,0,rt.width,rt.height,We,ze,rt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De+1,at,rt.width,rt.height,0,We,ze,rt.data)}}else{ft?K&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,We,ze,He[Me]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,at,We,ze,He[Me]);for(let De=0;De<pe.length;De++){const Ue=pe[De];ft?K&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De+1,0,0,We,ze,Ue.image[Me]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De+1,at,We,ze,Ue.image[Me])}}}M(C)&&x(o.TEXTURE_CUBE_MAP),_e.__version=Ee.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function he(P,C,se,ge,Ee,_e){const je=c.convert(se.format,se.colorSpace),Re=c.convert(se.type),ke=L(se.internalFormat,je,Re,se.colorSpace),gt=s.get(C),we=s.get(se);if(we.__renderTarget=C,!gt.__hasExternalTextures){const He=Math.max(1,C.width>>_e),qe=Math.max(1,C.height>>_e);Ee===o.TEXTURE_3D||Ee===o.TEXTURE_2D_ARRAY?i.texImage3D(Ee,_e,ke,He,qe,C.depth,0,je,Re,null):i.texImage2D(Ee,_e,ke,He,qe,0,je,Re,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),it(C)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ge,Ee,we.__webglTexture,0,tt(C)):(Ee===o.TEXTURE_2D||Ee>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ge,Ee,we.__webglTexture,_e),i.bindFramebuffer(o.FRAMEBUFFER,null)}function le(P,C,se){if(o.bindRenderbuffer(o.RENDERBUFFER,P),C.depthBuffer){const ge=C.depthTexture,Ee=ge&&ge.isDepthTexture?ge.type:null,_e=D(C.stencilBuffer,Ee),je=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=tt(C);it(C)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Re,_e,C.width,C.height):se?o.renderbufferStorageMultisample(o.RENDERBUFFER,Re,_e,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,_e,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,je,o.RENDERBUFFER,P)}else{const ge=C.textures;for(let Ee=0;Ee<ge.length;Ee++){const _e=ge[Ee],je=c.convert(_e.format,_e.colorSpace),Re=c.convert(_e.type),ke=L(_e.internalFormat,je,Re,_e.colorSpace),gt=tt(C);se&&it(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,gt,ke,C.width,C.height):it(C)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,gt,ke,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,ke,C.width,C.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(P,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(C.depthTexture);ge.__renderTarget=C,(!ge.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),xe(C.depthTexture,0);const Ee=ge.__webglTexture,_e=tt(C);if(C.depthTexture.format===Er)it(C)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0,_e):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0);else if(C.depthTexture.format===Nr)it(C)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0,_e):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Ce(P){const C=s.get(P),se=P.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==P.depthTexture){const ge=P.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ge){const Ee=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ge.removeEventListener("dispose",Ee)};ge.addEventListener("dispose",Ee),C.__depthDisposeCallback=Ee}C.__boundDepthTexture=ge}if(P.depthTexture&&!C.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");Te(C.__webglFramebuffer,P)}else if(se){C.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[ge]),C.__webglDepthbuffer[ge]===void 0)C.__webglDepthbuffer[ge]=o.createRenderbuffer(),le(C.__webglDepthbuffer[ge],P,!1);else{const Ee=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_e=C.__webglDepthbuffer[ge];o.bindRenderbuffer(o.RENDERBUFFER,_e),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,_e)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=o.createRenderbuffer(),le(C.__webglDepthbuffer,P,!1);else{const ge=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ee=C.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ee),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,Ee)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Le(P,C,se){const ge=s.get(P);C!==void 0&&he(ge.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),se!==void 0&&Ce(P)}function Je(P){const C=P.texture,se=s.get(P),ge=s.get(C);P.addEventListener("dispose",I);const Ee=P.textures,_e=P.isWebGLCubeRenderTarget===!0,je=Ee.length>1;if(je||(ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture()),ge.__version=C.version,d.memory.textures++),_e){se.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(C.mipmaps&&C.mipmaps.length>0){se.__webglFramebuffer[Re]=[];for(let ke=0;ke<C.mipmaps.length;ke++)se.__webglFramebuffer[Re][ke]=o.createFramebuffer()}else se.__webglFramebuffer[Re]=o.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){se.__webglFramebuffer=[];for(let Re=0;Re<C.mipmaps.length;Re++)se.__webglFramebuffer[Re]=o.createFramebuffer()}else se.__webglFramebuffer=o.createFramebuffer();if(je)for(let Re=0,ke=Ee.length;Re<ke;Re++){const gt=s.get(Ee[Re]);gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture(),d.memory.textures++)}if(P.samples>0&&it(P)===!1){se.__webglMultisampledFramebuffer=o.createFramebuffer(),se.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let Re=0;Re<Ee.length;Re++){const ke=Ee[Re];se.__webglColorRenderbuffer[Re]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,se.__webglColorRenderbuffer[Re]);const gt=c.convert(ke.format,ke.colorSpace),we=c.convert(ke.type),He=L(ke.internalFormat,gt,we,ke.colorSpace,P.isXRRenderTarget===!0),qe=tt(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,He,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,se.__webglColorRenderbuffer[Re])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(se.__webglDepthRenderbuffer=o.createRenderbuffer(),le(se.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(_e){i.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),G(o.TEXTURE_CUBE_MAP,C);for(let Re=0;Re<6;Re++)if(C.mipmaps&&C.mipmaps.length>0)for(let ke=0;ke<C.mipmaps.length;ke++)he(se.__webglFramebuffer[Re][ke],P,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ke);else he(se.__webglFramebuffer[Re],P,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);M(C)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(je){for(let Re=0,ke=Ee.length;Re<ke;Re++){const gt=Ee[Re],we=s.get(gt);i.bindTexture(o.TEXTURE_2D,we.__webglTexture),G(o.TEXTURE_2D,gt),he(se.__webglFramebuffer,P,gt,o.COLOR_ATTACHMENT0+Re,o.TEXTURE_2D,0),M(gt)&&x(o.TEXTURE_2D)}i.unbindTexture()}else{let Re=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Re=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Re,ge.__webglTexture),G(Re,C),C.mipmaps&&C.mipmaps.length>0)for(let ke=0;ke<C.mipmaps.length;ke++)he(se.__webglFramebuffer[ke],P,C,o.COLOR_ATTACHMENT0,Re,ke);else he(se.__webglFramebuffer,P,C,o.COLOR_ATTACHMENT0,Re,0);M(C)&&x(Re),i.unbindTexture()}P.depthBuffer&&Ce(P)}function et(P){const C=P.textures;for(let se=0,ge=C.length;se<ge;se++){const Ee=C[se];if(M(Ee)){const _e=O(P),je=s.get(Ee).__webglTexture;i.bindTexture(_e,je),x(_e),i.unbindTexture()}}}const Ye=[],B=[];function Pt(P){if(P.samples>0){if(it(P)===!1){const C=P.textures,se=P.width,ge=P.height;let Ee=o.COLOR_BUFFER_BIT;const _e=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,je=s.get(P),Re=C.length>1;if(Re)for(let ke=0;ke<C.length;ke++)i.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let ke=0;ke<C.length;ke++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Ee|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Ee|=o.STENCIL_BUFFER_BIT)),Re){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,je.__webglColorRenderbuffer[ke]);const gt=s.get(C[ke]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,gt,0)}o.blitFramebuffer(0,0,se,ge,0,0,se,ge,Ee,o.NEAREST),m===!0&&(Ye.length=0,B.length=0,Ye.push(o.COLOR_ATTACHMENT0+ke),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ye.push(_e),B.push(_e),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,B)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ye))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Re)for(let ke=0;ke<C.length;ke++){i.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.RENDERBUFFER,je.__webglColorRenderbuffer[ke]);const gt=s.get(C[ke]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.TEXTURE_2D,gt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const C=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[C])}}}function tt(P){return Math.min(l.maxSamples,P.samples)}function it(P){const C=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ge(P){const C=d.render.frame;_.get(P)!==C&&(_.set(P,C),P.update())}function xt(P,C){const se=P.colorSpace,ge=P.format,Ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||se!==Dr&&se!==Ga&&(Ut.getTransfer(se)===jt?(ge!==Ai||Ee!==fa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),C}function Fe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=fe,this.resetTextureUnits=ce,this.setTexture2D=xe,this.setTexture2DArray=F,this.setTexture3D=ee,this.setTextureCube=J,this.rebindTextures=Le,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=he,this.useMultisampledRTT=it}function c2(o,e){function i(s,l=Ga){let c;const d=Ut.getTransfer(l);if(s===fa)return o.UNSIGNED_BYTE;if(s===Ih)return o.UNSIGNED_SHORT_4_4_4_4;if(s===zh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===cx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===ox)return o.BYTE;if(s===lx)return o.SHORT;if(s===ko)return o.UNSIGNED_SHORT;if(s===Ph)return o.INT;if(s===Es)return o.UNSIGNED_INT;if(s===la)return o.FLOAT;if(s===Vo)return o.HALF_FLOAT;if(s===ux)return o.ALPHA;if(s===fx)return o.RGB;if(s===Ai)return o.RGBA;if(s===dx)return o.LUMINANCE;if(s===hx)return o.LUMINANCE_ALPHA;if(s===Er)return o.DEPTH_COMPONENT;if(s===Nr)return o.DEPTH_STENCIL;if(s===px)return o.RED;if(s===Bh)return o.RED_INTEGER;if(s===mx)return o.RG;if(s===Fh)return o.RG_INTEGER;if(s===kh)return o.RGBA_INTEGER;if(s===Lc||s===Uc||s===Oc||s===Pc)if(d===jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Uc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nh||s===ih||s===ah||s===sh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===nh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ih)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ah)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rh||s===oh||s===lh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===rh||s===oh)return d===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===lh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ch||s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===vh||s===xh||s===_h||s===yh||s===Sh||s===Mh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===ch)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===uh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ph)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_h)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ic||s===bh||s===Eh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Ic)return d===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Eh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===gx||s===Th||s===Ah||s===wh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ic)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Th)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ah)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Rr?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const u2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class d2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Kn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new da({vertexShader:u2,fragmentShader:f2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Rn(new Zo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h2 extends Ur{constructor(e,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,_=null,v=null,y=null,b=null,T=null;const A=new d2,M=i.getContextAttributes();let x=null,O=null;const L=[],D=[],X=new vt;let k=null;const I=new Yn;I.viewport=new Xt;const q=new Yn;q.viewport=new Xt;const U=[I,q],R=new Pb;let V=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=L[j];return te===void 0&&(te=new Dd,L[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=L[j];return te===void 0&&(te=new Dd,L[j]=te),te.getGripSpace()},this.getHand=function(j){let te=L[j];return te===void 0&&(te=new Dd,L[j]=te),te.getHandSpace()};function fe(j){const te=D.indexOf(j.inputSource);if(te===-1)return;const he=L[te];he!==void 0&&(he.update(j.inputSource,j.frame,p||d),he.dispatchEvent({type:j.type,data:j.inputSource}))}function ye(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",ye),l.removeEventListener("inputsourceschange",xe);for(let j=0;j<L.length;j++){const te=D[j];te!==null&&(D[j]=null,L[j].disconnect(te))}V=null,ce=null,A.reset(),e.setRenderTarget(x),b=null,y=null,v=null,l=null,O=null,ae.stop(),s.isPresenting=!1,e.setPixelRatio(k),e.setSize(X.width,X.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){c=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){h=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return y!==null?y:b},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(x=e.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",ye),l.addEventListener("inputsourceschange",xe),M.xrCompatible!==!0&&await i.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(X),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,le=null,Te=null;M.depth&&(Te=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,he=M.stencil?Nr:Er,le=M.stencil?Rr:Es);const Ce={colorFormat:i.RGBA8,depthFormat:Te,scaleFactor:c};v=new XRWebGLBinding(l,i),y=v.createProjectionLayer(Ce),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),O=new Ts(y.textureWidth,y.textureHeight,{format:Ai,type:fa,depthTexture:new Dx(y.textureWidth,y.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}else{const he={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,he),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),O=new Ts(b.framebufferWidth,b.framebufferHeight,{format:Ai,type:fa,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),ae.setContext(l),ae.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function xe(j){for(let te=0;te<j.removed.length;te++){const he=j.removed[te],le=D.indexOf(he);le>=0&&(D[le]=null,L[le].disconnect(he))}for(let te=0;te<j.added.length;te++){const he=j.added[te];let le=D.indexOf(he);if(le===-1){for(let Ce=0;Ce<L.length;Ce++)if(Ce>=D.length){D.push(he),le=Ce;break}else if(D[Ce]===null){D[Ce]=he,le=Ce;break}if(le===-1)break}const Te=L[le];Te&&Te.connect(he)}}const F=new Z,ee=new Z;function J(j,te,he){F.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(he.matrixWorld);const le=F.distanceTo(ee),Te=te.projectionMatrix.elements,Ce=he.projectionMatrix.elements,Le=Te[14]/(Te[10]-1),Je=Te[14]/(Te[10]+1),et=(Te[9]+1)/Te[5],Ye=(Te[9]-1)/Te[5],B=(Te[8]-1)/Te[0],Pt=(Ce[8]+1)/Ce[0],tt=Le*B,it=Le*Pt,Ge=le/(-B+Pt),xt=Ge*-B;if(te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(xt),j.translateZ(Ge),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Te[10]===-1)j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Fe=Le+Ge,P=Je+Ge,C=tt-xt,se=it+(le-xt),ge=et*Je/P*Fe,Ee=Ye*Je/P*Fe;j.projectionMatrix.makePerspective(C,se,ge,Ee,Fe,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function be(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let te=j.near,he=j.far;A.texture!==null&&(A.depthNear>0&&(te=A.depthNear),A.depthFar>0&&(he=A.depthFar)),R.near=q.near=I.near=te,R.far=q.far=I.far=he,(V!==R.near||ce!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),V=R.near,ce=R.far),I.layers.mask=j.layers.mask|2,q.layers.mask=j.layers.mask|4,R.layers.mask=I.layers.mask|q.layers.mask;const le=j.parent,Te=R.cameras;be(R,le);for(let Ce=0;Ce<Te.length;Ce++)be(Te[Ce],le);Te.length===2?J(R,I,q):R.projectionMatrix.copy(I.projectionMatrix),z(j,R,le)};function z(j,te,he){he===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(he.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ch*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&b===null))return m},this.setFoveation=function(j){m=j,y!==null&&(y.fixedFoveation=j),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=j)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(R)};let E=null;function G(j,te){if(_=te.getViewerPose(p||d),T=te,_!==null){const he=_.views;b!==null&&(e.setRenderTargetFramebuffer(O,b.framebuffer),e.setRenderTarget(O));let le=!1;he.length!==R.cameras.length&&(R.cameras.length=0,le=!0);for(let Le=0;Le<he.length;Le++){const Je=he[Le];let et=null;if(b!==null)et=b.getViewport(Je);else{const B=v.getViewSubImage(y,Je);et=B.viewport,Le===0&&(e.setRenderTargetTextures(O,B.colorTexture,y.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(O))}let Ye=U[Le];Ye===void 0&&(Ye=new Yn,Ye.layers.enable(Le),Ye.viewport=new Xt,U[Le]=Ye),Ye.matrix.fromArray(Je.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Je.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(et.x,et.y,et.width,et.height),Le===0&&(R.matrix.copy(Ye.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),le===!0&&R.cameras.push(Ye)}const Te=l.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Le=v.getDepthInformation(he[0]);Le&&Le.isValid&&Le.texture&&A.init(e,Le,l.renderState)}}for(let he=0;he<L.length;he++){const le=D[he],Te=L[he];le!==null&&Te!==void 0&&Te.update(le,te,p||d)}E&&E(j,te),te.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:te}),T=null}const ae=new Px;ae.setAnimationLoop(G),this.setAnimationLoop=function(j){E=j},this.dispose=function(){}}}const gs=new zi,p2=new Kt;function m2(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,Ax(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,O,L,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),v(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x)):x.isMeshStandardMaterial?(c(M,x),y(M,x),x.isMeshPhysicalMaterial&&b(M,x,D)):x.isMeshMatcapMaterial?(c(M,x),T(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),A(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?m(M,x,O,L):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Zn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Zn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const O=e.get(x),L=O.envMap,D=O.envMapRotation;L&&(M.envMap.value=L,gs.copy(D),gs.x*=-1,gs.y*=-1,gs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),M.envMapRotation.value.setFromMatrix4(p2.makeRotationFromEuler(gs)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,O,L){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*O,M.scale.value=L*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function y(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function b(M,x,O){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,x){x.matcap&&(M.matcap.value=x.matcap)}function A(M,x){const O=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function g2(o,e,i,s){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,L){const D=L.program;s.uniformBlockBinding(O,D)}function p(O,L){let D=l[O.id];D===void 0&&(T(O),D=_(O),l[O.id]=D,O.addEventListener("dispose",M));const X=L.program;s.updateUBOMapping(O,X);const k=e.render.frame;c[O.id]!==k&&(y(O),c[O.id]=k)}function _(O){const L=v();O.__bindingPointIndex=L;const D=o.createBuffer(),X=O.__size,k=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,X,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,D),D}function v(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const L=l[O.id],D=O.uniforms,X=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let k=0,I=D.length;k<I;k++){const q=Array.isArray(D[k])?D[k]:[D[k]];for(let U=0,R=q.length;U<R;U++){const V=q[U];if(b(V,k,U,X)===!0){const ce=V.__offset,fe=Array.isArray(V.value)?V.value:[V.value];let ye=0;for(let xe=0;xe<fe.length;xe++){const F=fe[xe],ee=A(F);typeof F=="number"||typeof F=="boolean"?(V.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,ce+ye,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=0,V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=0,V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=0):(F.toArray(V.__data,ye),ye+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ce,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(O,L,D,X){const k=O.value,I=L+"_"+D;if(X[I]===void 0)return typeof k=="number"||typeof k=="boolean"?X[I]=k:X[I]=k.clone(),!0;{const q=X[I];if(typeof k=="number"||typeof k=="boolean"){if(q!==k)return X[I]=k,!0}else if(q.equals(k)===!1)return q.copy(k),!0}return!1}function T(O){const L=O.uniforms;let D=0;const X=16;for(let I=0,q=L.length;I<q;I++){const U=Array.isArray(L[I])?L[I]:[L[I]];for(let R=0,V=U.length;R<V;R++){const ce=U[R],fe=Array.isArray(ce.value)?ce.value:[ce.value];for(let ye=0,xe=fe.length;ye<xe;ye++){const F=fe[ye],ee=A(F),J=D%X,be=J%ee.boundary,z=J+be;D+=be,z!==0&&X-z<ee.storage&&(D+=X-z),ce.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=D,D+=ee.storage}}}const k=D%X;return k>0&&(D+=X-k),O.__size=D,O.__cache={},this}function A(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function M(O){const L=O.target;L.removeEventListener("dispose",M);const D=d.indexOf(L.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function x(){for(const O in l)o.deleteBuffer(l[O]);d=[],l={},c={}}return{bind:m,update:p,dispose:x}}class Qh{constructor(e={}){const{canvas:i=JM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const T=new Uint32Array(4),A=new Int32Array(4);let M=null,x=null;const O=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=ja,this.toneMappingExposure=1;const D=this;let X=!1,k=0,I=0,q=null,U=-1,R=null;const V=new Xt,ce=new Xt;let fe=null;const ye=new Et(0);let xe=0,F=i.width,ee=i.height,J=1,be=null,z=null;const E=new Xt(0,0,F,ee),G=new Xt(0,0,F,ee);let ae=!1;const j=new Vh;let te=!1,he=!1;this.transmissionResolutionScale=1;const le=new Kt,Te=new Kt,Ce=new Z,Le=new Xt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function Ye(){return q===null?J:1}let B=s;function Pt(N,Q){return i.getContext(N,Q)}try{const N={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Oh}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",De,!1),i.addEventListener("webglcontextcreationerror",Ue,!1),B===null){const Q="webgl2";if(B=Pt(Q,N),B===null)throw Pt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let tt,it,Ge,xt,Fe,P,C,se,ge,Ee,_e,je,Re,ke,gt,we,He,qe,We,ze,at,ft,Ft,K;function Ne(){tt=new wT(B),tt.init(),ft=new c2(B,tt),it=new ST(B,tt,e,ft),Ge=new o2(B,tt),it.reverseDepthBuffer&&y&&Ge.buffers.depth.setReversed(!0),xt=new NT(B),Fe=new YA,P=new l2(B,tt,Ge,Fe,it,ft,xt),C=new bT(D),se=new AT(D),ge=new zb(B),Ft=new _T(B,ge),Ee=new CT(B,ge,xt,Ft),_e=new LT(B,Ee,ge,xt),We=new DT(B,it,P),we=new MT(Fe),je=new qA(D,C,se,tt,it,Ft,we),Re=new m2(D,Fe),ke=new KA,gt=new n2(tt),qe=new xT(D,C,se,Ge,_e,b,m),He=new s2(D,_e,it),K=new g2(B,xt,it,Ge),ze=new yT(B,tt,xt),at=new RT(B,tt,xt),xt.programs=je.programs,D.capabilities=it,D.extensions=tt,D.properties=Fe,D.renderLists=ke,D.shadowMap=He,D.state=Ge,D.info=xt}Ne();const pe=new h2(D,B);this.xr=pe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const N=tt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=tt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(N){N!==void 0&&(J=N,this.setSize(F,ee,!1))},this.getSize=function(N){return N.set(F,ee)},this.setSize=function(N,Q,oe=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=N,ee=Q,i.width=Math.floor(N*J),i.height=Math.floor(Q*J),oe===!0&&(i.style.width=N+"px",i.style.height=Q+"px"),this.setViewport(0,0,N,Q)},this.getDrawingBufferSize=function(N){return N.set(F*J,ee*J).floor()},this.setDrawingBufferSize=function(N,Q,oe){F=N,ee=Q,J=oe,i.width=Math.floor(N*oe),i.height=Math.floor(Q*oe),this.setViewport(0,0,N,Q)},this.getCurrentViewport=function(N){return N.copy(V)},this.getViewport=function(N){return N.copy(E)},this.setViewport=function(N,Q,oe,ue){N.isVector4?E.set(N.x,N.y,N.z,N.w):E.set(N,Q,oe,ue),Ge.viewport(V.copy(E).multiplyScalar(J).round())},this.getScissor=function(N){return N.copy(G)},this.setScissor=function(N,Q,oe,ue){N.isVector4?G.set(N.x,N.y,N.z,N.w):G.set(N,Q,oe,ue),Ge.scissor(ce.copy(G).multiplyScalar(J).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(N){Ge.setScissorTest(ae=N)},this.setOpaqueSort=function(N){be=N},this.setTransparentSort=function(N){z=N},this.getClearColor=function(N){return N.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(N=!0,Q=!0,oe=!0){let ue=0;if(N){let Y=!1;if(q!==null){const Ae=q.texture.format;Y=Ae===kh||Ae===Fh||Ae===Bh}if(Y){const Ae=q.texture.type,Oe=Ae===fa||Ae===Es||Ae===ko||Ae===Rr||Ae===Ih||Ae===zh,Ie=qe.getClearColor(),Be=qe.getClearAlpha(),ot=Ie.r,lt=Ie.g,Ze=Ie.b;Oe?(T[0]=ot,T[1]=lt,T[2]=Ze,T[3]=Be,B.clearBufferuiv(B.COLOR,0,T)):(A[0]=ot,A[1]=lt,A[2]=Ze,A[3]=Be,B.clearBufferiv(B.COLOR,0,A))}else ue|=B.COLOR_BUFFER_BIT}Q&&(ue|=B.DEPTH_BUFFER_BIT),oe&&(ue|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",De,!1),i.removeEventListener("webglcontextcreationerror",Ue,!1),qe.dispose(),ke.dispose(),gt.dispose(),Fe.dispose(),C.dispose(),se.dispose(),_e.dispose(),Ft.dispose(),K.dispose(),je.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Pr),pe.removeEventListener("sessionend",Ir),Ri.stop()};function Me(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const N=xt.autoReset,Q=He.enabled,oe=He.autoUpdate,ue=He.needsUpdate,Y=He.type;Ne(),xt.autoReset=N,He.enabled=Q,He.autoUpdate=oe,He.needsUpdate=ue,He.type=Y}function Ue(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function rt(N){const Q=N.target;Q.removeEventListener("dispose",rt),Qt(Q)}function Qt(N){hn(N),Fe.remove(N)}function hn(N){const Q=Fe.get(N).programs;Q!==void 0&&(Q.forEach(function(oe){je.releaseProgram(oe)}),N.isShaderMaterial&&je.releaseShaderCache(N))}this.renderBufferDirect=function(N,Q,oe,ue,Y,Ae){Q===null&&(Q=Je);const Oe=Y.isMesh&&Y.matrixWorld.determinant()<0,Ie=Br(N,Q,oe,ue,Y);Ge.setMaterial(ue,Oe);let Be=oe.index,ot=1;if(ue.wireframe===!0){if(Be=Ee.getWireframeAttribute(oe),Be===void 0)return;ot=2}const lt=oe.drawRange,Ze=oe.attributes.position;let Tt=lt.start*ot,At=(lt.start+lt.count)*ot;Ae!==null&&(Tt=Math.max(Tt,Ae.start*ot),At=Math.min(At,(Ae.start+Ae.count)*ot)),Be!==null?(Tt=Math.max(Tt,0),At=Math.min(At,Be.count)):Ze!=null&&(Tt=Math.max(Tt,0),At=Math.min(At,Ze.count));const qt=At-Tt;if(qt<0||qt===1/0)return;Ft.setup(Y,ue,Ie,oe,Be);let Nt,ct=ze;if(Be!==null&&(Nt=ge.get(Be),ct=at,ct.setIndex(Nt)),Y.isMesh)ue.wireframe===!0?(Ge.setLineWidth(ue.wireframeLinewidth*Ye()),ct.setMode(B.LINES)):ct.setMode(B.TRIANGLES);else if(Y.isLine){let Qe=ue.linewidth;Qe===void 0&&(Qe=1),Ge.setLineWidth(Qe*Ye()),Y.isLineSegments?ct.setMode(B.LINES):Y.isLineLoop?ct.setMode(B.LINE_LOOP):ct.setMode(B.LINE_STRIP)}else Y.isPoints?ct.setMode(B.POINTS):Y.isSprite&&ct.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ct.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ct.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Qe=Y._multiDrawStarts,pn=Y._multiDrawCounts,Ct=Y._multiDrawCount,Fn=Be?ge.get(Be).bytesPerElement:1,xi=Fe.get(ue).currentProgram.getUniforms();for(let On=0;On<Ct;On++)xi.setValue(B,"_gl_DrawID",On),ct.render(Qe[On]/Fn,pn[On])}else if(Y.isInstancedMesh)ct.renderInstances(Tt,qt,Y.count);else if(oe.isInstancedBufferGeometry){const Qe=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,pn=Math.min(oe.instanceCount,Qe);ct.renderInstances(Tt,qt,pn)}else ct.render(Tt,qt)};function Rt(N,Q,oe){N.transparent===!0&&N.side===Pi&&N.forceSinglePass===!1?(N.side=Zn,N.needsUpdate=!0,$t(N,Q,oe),N.side=Xa,N.needsUpdate=!0,$t(N,Q,oe),N.side=Pi):$t(N,Q,oe)}this.compile=function(N,Q,oe=null){oe===null&&(oe=N),x=gt.get(oe),x.init(Q),L.push(x),oe.traverseVisible(function(Y){Y.isLight&&Y.layers.test(Q.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),N!==oe&&N.traverseVisible(function(Y){Y.isLight&&Y.layers.test(Q.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),x.setupLights();const ue=new Set;return N.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let Oe=0;Oe<Ae.length;Oe++){const Ie=Ae[Oe];Rt(Ie,oe,Y),ue.add(Ie)}else Rt(Ae,oe,Y),ue.add(Ae)}),L.pop(),x=null,ue},this.compileAsync=function(N,Q,oe=null){const ue=this.compile(N,Q,oe);return new Promise(Y=>{function Ae(){if(ue.forEach(function(Oe){Fe.get(Oe).currentProgram.isReady()&&ue.delete(Oe)}),ue.size===0){Y(N);return}setTimeout(Ae,10)}tt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Mn=null;function gi(N){Mn&&Mn(N)}function Pr(){Ri.stop()}function Ir(){Ri.start()}const Ri=new Px;Ri.setAnimationLoop(gi),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(N){Mn=N,pe.setAnimationLoop(N),N===null?Ri.stop():Ri.start()},pe.addEventListener("sessionstart",Pr),pe.addEventListener("sessionend",Ir),this.render=function(N,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(Q),Q=pe.getCamera()),N.isScene===!0&&N.onBeforeRender(D,N,Q,q),x=gt.get(N,L.length),x.init(Q),L.push(x),Te.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),j.setFromProjectionMatrix(Te),he=this.localClippingEnabled,te=we.init(this.clippingPlanes,he),M=ke.get(N,O.length),M.init(),O.push(M),pe.enabled===!0&&pe.isPresenting===!0){const Ae=D.xr.getDepthSensingMesh();Ae!==null&&Wa(Ae,Q,-1/0,D.sortObjects)}Wa(N,Q,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(be,z),et=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,et&&qe.addToRenderList(M,N),this.info.render.frame++,te===!0&&we.beginShadows();const oe=x.state.shadowsArray;He.render(oe,N,Q),te===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=M.opaque,Y=M.transmissive;if(x.setupLights(),Q.isArrayCamera){const Ae=Q.cameras;if(Y.length>0)for(let Oe=0,Ie=Ae.length;Oe<Ie;Oe++){const Be=Ae[Oe];zr(ue,Y,N,Be)}et&&qe.render(N);for(let Oe=0,Ie=Ae.length;Oe<Ie;Oe++){const Be=Ae[Oe];ws(M,N,Be,Be.viewport)}}else Y.length>0&&zr(ue,Y,N,Q),et&&qe.render(N),ws(M,N,Q);q!==null&&I===0&&(P.updateMultisampleRenderTarget(q),P.updateRenderTargetMipmap(q)),N.isScene===!0&&N.onAfterRender(D,N,Q),Ft.resetDefaultState(),U=-1,R=null,L.pop(),L.length>0?(x=L[L.length-1],te===!0&&we.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,O.pop(),O.length>0?M=O[O.length-1]:M=null};function Wa(N,Q,oe,ue){if(N.visible===!1)return;if(N.layers.test(Q.layers)){if(N.isGroup)oe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Q);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||j.intersectsSprite(N)){ue&&Le.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Te);const Oe=_e.update(N),Ie=N.material;Ie.visible&&M.push(N,Oe,Ie,oe,Le.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||j.intersectsObject(N))){const Oe=_e.update(N),Ie=N.material;if(ue&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Le.copy(N.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Le.copy(Oe.boundingSphere.center)),Le.applyMatrix4(N.matrixWorld).applyMatrix4(Te)),Array.isArray(Ie)){const Be=Oe.groups;for(let ot=0,lt=Be.length;ot<lt;ot++){const Ze=Be[ot],Tt=Ie[Ze.materialIndex];Tt&&Tt.visible&&M.push(N,Oe,Tt,oe,Le.z,Ze)}}else Ie.visible&&M.push(N,Oe,Ie,oe,Le.z,null)}}const Ae=N.children;for(let Oe=0,Ie=Ae.length;Oe<Ie;Oe++)Wa(Ae[Oe],Q,oe,ue)}function ws(N,Q,oe,ue){const Y=N.opaque,Ae=N.transmissive,Oe=N.transparent;x.setupLightsView(oe),te===!0&&we.setGlobalState(D.clippingPlanes,oe),ue&&Ge.viewport(V.copy(ue)),Y.length>0&&qa(Y,Q,oe),Ae.length>0&&qa(Ae,Q,oe),Oe.length>0&&qa(Oe,Q,oe),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function zr(N,Q,oe,ue){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ue.id]===void 0&&(x.state.transmissionRenderTarget[ue.id]=new Ts(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Vo:fa,minFilter:bs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Ae=x.state.transmissionRenderTarget[ue.id],Oe=ue.viewport||V;Ae.setSize(Oe.z*D.transmissionResolutionScale,Oe.w*D.transmissionResolutionScale);const Ie=D.getRenderTarget();D.setRenderTarget(Ae),D.getClearColor(ye),xe=D.getClearAlpha(),xe<1&&D.setClearColor(16777215,.5),D.clear(),et&&qe.render(oe);const Be=D.toneMapping;D.toneMapping=ja;const ot=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),x.setupLightsView(ue),te===!0&&we.setGlobalState(D.clippingPlanes,ue),qa(N,oe,ue),P.updateMultisampleRenderTarget(Ae),P.updateRenderTargetMipmap(Ae),tt.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Ze=0,Tt=Q.length;Ze<Tt;Ze++){const At=Q[Ze],qt=At.object,Nt=At.geometry,ct=At.material,Qe=At.group;if(ct.side===Pi&&qt.layers.test(ue.layers)){const pn=ct.side;ct.side=Zn,ct.needsUpdate=!0,vi(qt,oe,ue,Nt,ct,Qe),ct.side=pn,ct.needsUpdate=!0,lt=!0}}lt===!0&&(P.updateMultisampleRenderTarget(Ae),P.updateRenderTargetMipmap(Ae))}D.setRenderTarget(Ie),D.setClearColor(ye,xe),ot!==void 0&&(ue.viewport=ot),D.toneMapping=Be}function qa(N,Q,oe){const ue=Q.isScene===!0?Q.overrideMaterial:null;for(let Y=0,Ae=N.length;Y<Ae;Y++){const Oe=N[Y],Ie=Oe.object,Be=Oe.geometry,ot=ue===null?Oe.material:ue,lt=Oe.group;Ie.layers.test(oe.layers)&&vi(Ie,Q,oe,Be,ot,lt)}}function vi(N,Q,oe,ue,Y,Ae){N.onBeforeRender(D,Q,oe,ue,Y,Ae),N.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Y.onBeforeRender(D,Q,oe,ue,N,Ae),Y.transparent===!0&&Y.side===Pi&&Y.forceSinglePass===!1?(Y.side=Zn,Y.needsUpdate=!0,D.renderBufferDirect(oe,Q,ue,Y,N,Ae),Y.side=Xa,Y.needsUpdate=!0,D.renderBufferDirect(oe,Q,ue,Y,N,Ae),Y.side=Pi):D.renderBufferDirect(oe,Q,ue,Y,N,Ae),N.onAfterRender(D,Q,oe,ue,Y,Ae)}function $t(N,Q,oe){Q.isScene!==!0&&(Q=Je);const ue=Fe.get(N),Y=x.state.lights,Ae=x.state.shadowsArray,Oe=Y.state.version,Ie=je.getParameters(N,Y.state,Ae,Q,oe),Be=je.getProgramCacheKey(Ie);let ot=ue.programs;ue.environment=N.isMeshStandardMaterial?Q.environment:null,ue.fog=Q.fog,ue.envMap=(N.isMeshStandardMaterial?se:C).get(N.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&N.envMap===null?Q.environmentRotation:N.envMapRotation,ot===void 0&&(N.addEventListener("dispose",rt),ot=new Map,ue.programs=ot);let lt=ot.get(Be);if(lt!==void 0){if(ue.currentProgram===lt&&ue.lightsStateVersion===Oe)return Bi(N,Ie),lt}else Ie.uniforms=je.getUniforms(N),N.onBeforeCompile(Ie,D),lt=je.acquireProgram(Ie,Be),ot.set(Be,lt),ue.uniforms=Ie.uniforms;const Ze=ue.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ze.clippingPlanes=we.uniform),Bi(N,Ie),ue.needsLights=Kc(N),ue.lightsStateVersion=Oe,ue.needsLights&&(Ze.ambientLightColor.value=Y.state.ambient,Ze.lightProbe.value=Y.state.probe,Ze.directionalLights.value=Y.state.directional,Ze.directionalLightShadows.value=Y.state.directionalShadow,Ze.spotLights.value=Y.state.spot,Ze.spotLightShadows.value=Y.state.spotShadow,Ze.rectAreaLights.value=Y.state.rectArea,Ze.ltc_1.value=Y.state.rectAreaLTC1,Ze.ltc_2.value=Y.state.rectAreaLTC2,Ze.pointLights.value=Y.state.point,Ze.pointLightShadows.value=Y.state.pointShadow,Ze.hemisphereLights.value=Y.state.hemi,Ze.directionalShadowMap.value=Y.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ze.spotShadowMap.value=Y.state.spotShadowMap,Ze.spotLightMatrix.value=Y.state.spotLightMatrix,Ze.spotLightMap.value=Y.state.spotLightMap,Ze.pointShadowMap.value=Y.state.pointShadowMap,Ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),ue.currentProgram=lt,ue.uniformsList=null,lt}function bn(N){if(N.uniformsList===null){const Q=N.currentProgram.getUniforms();N.uniformsList=zc.seqWithValue(Q.seq,N.uniforms)}return N.uniformsList}function Bi(N,Q){const oe=Fe.get(N);oe.outputColorSpace=Q.outputColorSpace,oe.batching=Q.batching,oe.batchingColor=Q.batchingColor,oe.instancing=Q.instancing,oe.instancingColor=Q.instancingColor,oe.instancingMorph=Q.instancingMorph,oe.skinning=Q.skinning,oe.morphTargets=Q.morphTargets,oe.morphNormals=Q.morphNormals,oe.morphColors=Q.morphColors,oe.morphTargetsCount=Q.morphTargetsCount,oe.numClippingPlanes=Q.numClippingPlanes,oe.numIntersection=Q.numClipIntersection,oe.vertexAlphas=Q.vertexAlphas,oe.vertexTangents=Q.vertexTangents,oe.toneMapping=Q.toneMapping}function Br(N,Q,oe,ue,Y){Q.isScene!==!0&&(Q=Je),P.resetTextureUnits();const Ae=Q.fog,Oe=ue.isMeshStandardMaterial?Q.environment:null,Ie=q===null?D.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Dr,Be=(ue.isMeshStandardMaterial?se:C).get(ue.envMap||Oe),ot=ue.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,lt=!!oe.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ze=!!oe.morphAttributes.position,Tt=!!oe.morphAttributes.normal,At=!!oe.morphAttributes.color;let qt=ja;ue.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(qt=D.toneMapping);const Nt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,ct=Nt!==void 0?Nt.length:0,Qe=Fe.get(ue),pn=x.state.lights;if(te===!0&&(he===!0||N!==R)){const en=N===R&&ue.id===U;we.setState(ue,N,en)}let Ct=!1;ue.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==pn.state.version||Qe.outputColorSpace!==Ie||Y.isBatchedMesh&&Qe.batching===!1||!Y.isBatchedMesh&&Qe.batching===!0||Y.isBatchedMesh&&Qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Qe.instancing===!1||!Y.isInstancedMesh&&Qe.instancing===!0||Y.isSkinnedMesh&&Qe.skinning===!1||!Y.isSkinnedMesh&&Qe.skinning===!0||Y.isInstancedMesh&&Qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Qe.instancingMorph===!1&&Y.morphTexture!==null||Qe.envMap!==Be||ue.fog===!0&&Qe.fog!==Ae||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==we.numPlanes||Qe.numIntersection!==we.numIntersection)||Qe.vertexAlphas!==ot||Qe.vertexTangents!==lt||Qe.morphTargets!==Ze||Qe.morphNormals!==Tt||Qe.morphColors!==At||Qe.toneMapping!==qt||Qe.morphTargetsCount!==ct)&&(Ct=!0):(Ct=!0,Qe.__version=ue.version);let Fn=Qe.currentProgram;Ct===!0&&(Fn=$t(ue,Q,Y));let xi=!1,On=!1,xn=!1;const kt=Fn.getUniforms(),Pn=Qe.uniforms;if(Ge.useProgram(Fn.program)&&(xi=!0,On=!0,xn=!0),ue.id!==U&&(U=ue.id,On=!0),xi||R!==N){Ge.buffers.depth.getReversed()?(le.copy(N.projectionMatrix),eb(le),tb(le),kt.setValue(B,"projectionMatrix",le)):kt.setValue(B,"projectionMatrix",N.projectionMatrix),kt.setValue(B,"viewMatrix",N.matrixWorldInverse);const En=kt.map.cameraPosition;En!==void 0&&En.setValue(B,Ce.setFromMatrixPosition(N.matrixWorld)),it.logarithmicDepthBuffer&&kt.setValue(B,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&kt.setValue(B,"isOrthographic",N.isOrthographicCamera===!0),R!==N&&(R=N,On=!0,xn=!0)}if(Y.isSkinnedMesh){kt.setOptional(B,Y,"bindMatrix"),kt.setOptional(B,Y,"bindMatrixInverse");const en=Y.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),kt.setValue(B,"boneTexture",en.boneTexture,P))}Y.isBatchedMesh&&(kt.setOptional(B,Y,"batchingTexture"),kt.setValue(B,"batchingTexture",Y._matricesTexture,P),kt.setOptional(B,Y,"batchingIdTexture"),kt.setValue(B,"batchingIdTexture",Y._indirectTexture,P),kt.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&kt.setValue(B,"batchingColorTexture",Y._colorsTexture,P));const Nn=oe.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&We.update(Y,oe,Fn),(On||Qe.receiveShadow!==Y.receiveShadow)&&(Qe.receiveShadow=Y.receiveShadow,kt.setValue(B,"receiveShadow",Y.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Pn.envMap.value=Be,Pn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&Q.environment!==null&&(Pn.envMapIntensity.value=Q.environmentIntensity),On&&(kt.setValue(B,"toneMappingExposure",D.toneMappingExposure),Qe.needsLights&&Zc(Pn,xn),Ae&&ue.fog===!0&&Re.refreshFogUniforms(Pn,Ae),Re.refreshMaterialUniforms(Pn,ue,J,ee,x.state.transmissionRenderTarget[N.id]),zc.upload(B,bn(Qe),Pn,P)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(zc.upload(B,bn(Qe),Pn,P),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&kt.setValue(B,"center",Y.center),kt.setValue(B,"modelViewMatrix",Y.modelViewMatrix),kt.setValue(B,"normalMatrix",Y.normalMatrix),kt.setValue(B,"modelMatrix",Y.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const en=ue.uniformsGroups;for(let En=0,Cs=en.length;En<Cs;En++){const kn=en[En];K.update(kn,Fn),K.bind(kn,Fn)}}return Fn}function Zc(N,Q){N.ambientLightColor.needsUpdate=Q,N.lightProbe.needsUpdate=Q,N.directionalLights.needsUpdate=Q,N.directionalLightShadows.needsUpdate=Q,N.pointLights.needsUpdate=Q,N.pointLightShadows.needsUpdate=Q,N.spotLights.needsUpdate=Q,N.spotLightShadows.needsUpdate=Q,N.rectAreaLights.needsUpdate=Q,N.hemisphereLights.needsUpdate=Q}function Kc(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(N,Q,oe){Fe.get(N.texture).__webglTexture=Q,Fe.get(N.depthTexture).__webglTexture=oe;const ue=Fe.get(N);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=oe===void 0,ue.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,Q){const oe=Fe.get(N);oe.__webglFramebuffer=Q,oe.__useDefaultFramebuffer=Q===void 0};const Ko=B.createFramebuffer();this.setRenderTarget=function(N,Q=0,oe=0){q=N,k=Q,I=oe;let ue=!0,Y=null,Ae=!1,Oe=!1;if(N){const Be=Fe.get(N);if(Be.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(B.FRAMEBUFFER,null),ue=!1;else if(Be.__webglFramebuffer===void 0)P.setupRenderTarget(N);else if(Be.__hasExternalTextures)P.rebindTextures(N,Fe.get(N.texture).__webglTexture,Fe.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Ze=N.depthTexture;if(Be.__boundDepthTexture!==Ze){if(Ze!==null&&Fe.has(Ze)&&(N.width!==Ze.image.width||N.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(N)}}const ot=N.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Oe=!0);const lt=Fe.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(lt[Q])?Y=lt[Q][oe]:Y=lt[Q],Ae=!0):N.samples>0&&P.useMultisampledRTT(N)===!1?Y=Fe.get(N).__webglMultisampledFramebuffer:Array.isArray(lt)?Y=lt[oe]:Y=lt,V.copy(N.viewport),ce.copy(N.scissor),fe=N.scissorTest}else V.copy(E).multiplyScalar(J).floor(),ce.copy(G).multiplyScalar(J).floor(),fe=ae;if(oe!==0&&(Y=Ko),Ge.bindFramebuffer(B.FRAMEBUFFER,Y)&&ue&&Ge.drawBuffers(N,Y),Ge.viewport(V),Ge.scissor(ce),Ge.setScissorTest(fe),Ae){const Be=Fe.get(N.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Be.__webglTexture,oe)}else if(Oe){const Be=Fe.get(N.texture),ot=Q;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.__webglTexture,oe,ot)}else if(N!==null&&oe!==0){const Be=Fe.get(N.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Be.__webglTexture,oe)}U=-1},this.readRenderTargetPixels=function(N,Q,oe,ue,Y,Ae,Oe){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Fe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ie=Ie[Oe]),Ie){Ge.bindFramebuffer(B.FRAMEBUFFER,Ie);try{const Be=N.texture,ot=Be.format,lt=Be.type;if(!it.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=N.width-ue&&oe>=0&&oe<=N.height-Y&&B.readPixels(Q,oe,ue,Y,ft.convert(ot),ft.convert(lt),Ae)}finally{const Be=q!==null?Fe.get(q).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(N,Q,oe,ue,Y,Ae,Oe){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Fe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ie=Ie[Oe]),Ie){const Be=N.texture,ot=Be.format,lt=Be.type;if(!it.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=N.width-ue&&oe>=0&&oe<=N.height-Y){Ge.bindFramebuffer(B.FRAMEBUFFER,Ie);const Ze=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ze),B.bufferData(B.PIXEL_PACK_BUFFER,Ae.byteLength,B.STREAM_READ),B.readPixels(Q,oe,ue,Y,ft.convert(ot),ft.convert(lt),0);const Tt=q!==null?Fe.get(q).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,Tt);const At=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await $M(B,At,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ze),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ae),B.deleteBuffer(Ze),B.deleteSync(At),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,Q=null,oe=0){N.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,N=arguments[1]);const ue=Math.pow(2,-oe),Y=Math.floor(N.image.width*ue),Ae=Math.floor(N.image.height*ue),Oe=Q!==null?Q.x:0,Ie=Q!==null?Q.y:0;P.setTexture2D(N,0),B.copyTexSubImage2D(B.TEXTURE_2D,oe,0,0,Oe,Ie,Y,Ae),Ge.unbindTexture()};const Ya=B.createFramebuffer(),Fr=B.createFramebuffer();this.copyTextureToTexture=function(N,Q,oe=null,ue=null,Y=0,Ae=null){N.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,N=arguments[1],Q=arguments[2],Ae=arguments[3]||0,oe=null),Ae===null&&(Y!==0?(yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Y,Y=0):Ae=0);let Oe,Ie,Be,ot,lt,Ze,Tt,At,qt;const Nt=N.isCompressedTexture?N.mipmaps[Ae]:N.image;if(oe!==null)Oe=oe.max.x-oe.min.x,Ie=oe.max.y-oe.min.y,Be=oe.isBox3?oe.max.z-oe.min.z:1,ot=oe.min.x,lt=oe.min.y,Ze=oe.isBox3?oe.min.z:0;else{const Nn=Math.pow(2,-Y);Oe=Math.floor(Nt.width*Nn),Ie=Math.floor(Nt.height*Nn),N.isDataArrayTexture?Be=Nt.depth:N.isData3DTexture?Be=Math.floor(Nt.depth*Nn):Be=1,ot=0,lt=0,Ze=0}ue!==null?(Tt=ue.x,At=ue.y,qt=ue.z):(Tt=0,At=0,qt=0);const ct=ft.convert(Q.format),Qe=ft.convert(Q.type);let pn;Q.isData3DTexture?(P.setTexture3D(Q,0),pn=B.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(P.setTexture2DArray(Q,0),pn=B.TEXTURE_2D_ARRAY):(P.setTexture2D(Q,0),pn=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Q.unpackAlignment);const Ct=B.getParameter(B.UNPACK_ROW_LENGTH),Fn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),xi=B.getParameter(B.UNPACK_SKIP_PIXELS),On=B.getParameter(B.UNPACK_SKIP_ROWS),xn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ot),B.pixelStorei(B.UNPACK_SKIP_ROWS,lt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze);const kt=N.isDataArrayTexture||N.isData3DTexture,Pn=Q.isDataArrayTexture||Q.isData3DTexture;if(N.isDepthTexture){const Nn=Fe.get(N),en=Fe.get(Q),En=Fe.get(Nn.__renderTarget),Cs=Fe.get(en.__renderTarget);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,En.__webglFramebuffer),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,Cs.__webglFramebuffer);for(let kn=0;kn<Be;kn++)kt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.get(N).__webglTexture,Y,Ze+kn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.get(Q).__webglTexture,Ae,qt+kn)),B.blitFramebuffer(ot,lt,Oe,Ie,Tt,At,Oe,Ie,B.DEPTH_BUFFER_BIT,B.NEAREST);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||N.isRenderTargetTexture||Fe.has(N)){const Nn=Fe.get(N),en=Fe.get(Q);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,Ya),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,Fr);for(let En=0;En<Be;En++)kt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Nn.__webglTexture,Y,Ze+En):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Nn.__webglTexture,Y),Pn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,en.__webglTexture,Ae,qt+En):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,en.__webglTexture,Ae),Y!==0?B.blitFramebuffer(ot,lt,Oe,Ie,Tt,At,Oe,Ie,B.COLOR_BUFFER_BIT,B.NEAREST):Pn?B.copyTexSubImage3D(pn,Ae,Tt,At,qt+En,ot,lt,Oe,Ie):B.copyTexSubImage2D(pn,Ae,Tt,At,ot,lt,Oe,Ie);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Pn?N.isDataTexture||N.isData3DTexture?B.texSubImage3D(pn,Ae,Tt,At,qt,Oe,Ie,Be,ct,Qe,Nt.data):Q.isCompressedArrayTexture?B.compressedTexSubImage3D(pn,Ae,Tt,At,qt,Oe,Ie,Be,ct,Nt.data):B.texSubImage3D(pn,Ae,Tt,At,qt,Oe,Ie,Be,ct,Qe,Nt):N.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ae,Tt,At,Oe,Ie,ct,Qe,Nt.data):N.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ae,Tt,At,Nt.width,Nt.height,ct,Nt.data):B.texSubImage2D(B.TEXTURE_2D,Ae,Tt,At,Oe,Ie,ct,Qe,Nt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ct),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Fn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,xi),B.pixelStorei(B.UNPACK_SKIP_ROWS,On),B.pixelStorei(B.UNPACK_SKIP_IMAGES,xn),Ae===0&&Q.generateMipmaps&&B.generateMipmap(pn),Ge.unbindTexture()},this.copyTextureToTexture3D=function(N,Q,oe=null,ue=null,Y=0){return N.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,ue=arguments[1]||null,N=arguments[2],Q=arguments[3],Y=arguments[4]||0),yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,Q,oe,ue,Y)},this.initRenderTarget=function(N){Fe.get(N).__webglFramebuffer===void 0&&P.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?P.setTextureCube(N,0):N.isData3DTexture?P.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?P.setTexture2DArray(N,0):P.setTexture2D(N,0),Ge.unbindTexture()},this.resetState=function(){k=0,I=0,q=null,Ge.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Ut._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ut._getUnpackColorSpace()}}const v2=()=>{const o=nt.useRef(null);return nt.useEffect(()=>{const e=o.current;if(!e)return;const i=new Gh,s=new Yn(45,e.clientWidth/e.clientHeight,.1,1e3);s.position.z=5.2;const l=new Qh({alpha:!0,antialias:!0,powerPreference:"high-performance"});l.setSize(e.clientWidth,e.clientHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.toneMapping=sx,l.toneMappingExposure=1.15,e.appendChild(l.domElement);const c=new Sr;i.add(c);const d=new Vc(1.5,0),h=new Nb({color:1579036,roughness:.12,metalness:.88,clearcoat:1,clearcoatRoughness:.08,reflectivity:.95,transmission:.25,ior:1.55}),m=new Rn(d,h);c.add(m);const p=new Vc(1.52,0),_=new Ho({color:12105907,wireframe:!0,transparent:!0,opacity:.65}),v=new Rn(p,_);c.add(v);const y=new jh(.85,0),b=new ys({color:2381823,metalness:.9,roughness:.2,emissive:1058928,emissiveIntensity:.5}),T=new Rn(y,b);c.add(T);const A=new Ho({color:8947844,wireframe:!0,transparent:!0,opacity:.4}),M=new Rn(new jc(2.1,.007,16,100),A),x=new Rn(new jc(2.35,.007,16,100),A);x.rotation.x=Math.PI/2.5,x.rotation.y=Math.PI/4,c.add(M),c.add(x);const O=50,L=new Bn,D=new Float32Array(O*3);for(let z=0;z<O;z++){const E=2+Math.random()*.9,G=Math.random()*Math.PI*2,ae=Math.acos(Math.random()*2-1);D[z*3]=E*Math.sin(ae)*Math.cos(G),D[z*3+1]=E*Math.sin(ae)*Math.sin(G),D[z*3+2]=E*Math.cos(ae)}L.setAttribute("position",new Ci(D,3));const X=new Nx({color:2381823,size:.045,transparent:!0,opacity:.75}),k=new Rb(L,X);c.add(k);const I=new Ox(16777215,1);i.add(I);const q=new Nh(16777215,2.4);q.position.set(4,5,5),i.add(q);const U=new Nh(2381823,2);U.position.set(-5,-3,-3),i.add(U);const R=new Ux(16777215,1.4,20);R.position.set(0,-4,4),i.add(R);const V={x:0,y:0,targetX:0,targetY:0},ce={y:0,targetY:0,velocity:0},fe=z=>{const E=e.getBoundingClientRect(),G=z.clientX-E.left,ae=z.clientY-E.top;V.targetX=(G/E.width-.5)*2,V.targetY=-(ae/E.height-.5)*2},ye=()=>{const z=window.scrollY;ce.targetY=z};window.addEventListener("mousemove",fe,{passive:!0}),window.addEventListener("scroll",ye,{passive:!0});const xe=()=>{e&&(s.aspect=e.clientWidth/e.clientHeight,s.updateProjectionMatrix(),l.setSize(e.clientWidth,e.clientHeight))};window.addEventListener("resize",xe);let F,ee=new Zh,J=window.scrollY;const be=()=>{F=requestAnimationFrame(be),ee.getDelta();const z=ee.getElapsedTime();V.x+=(V.targetX-V.x)*.05,V.y+=(V.targetY-V.y)*.05,ce.y+=(ce.targetY-ce.y)*.08;const E=ce.targetY-J;ce.velocity=Math.abs(E)*.01,J=ce.targetY;const G=ce.y/(window.innerHeight||800);c.rotation.y=z*.2+V.x*.5+G*Math.PI*1.2,c.rotation.x=Math.sin(z*.15)*.12+V.y*.4+G*.8,c.rotation.z=Math.sin(G*2)*.3,c.position.y=-G*1.5,c.position.x=Math.sin(G*Math.PI)*.4,s.position.z=5.2+G*1.2,T.rotation.y=-z*.45-G*2,T.rotation.z=z*.3+G*1.5,b.emissiveIntensity=.5+Math.min(ce.velocity*.8,1.2),M.rotation.z=z*.15+G,x.rotation.x=z*.2-G*.8,M.scale.setScalar(1+Math.sin(G*3)*.08),x.scale.setScalar(1+Math.cos(G*3)*.08),k.rotation.y=z*.08+G*.5,l.render(i,s)};return be(),()=>{cancelAnimationFrame(F),window.removeEventListener("mousemove",fe),window.removeEventListener("scroll",ye),window.removeEventListener("resize",xe),e.contains(l.domElement)&&e.removeChild(l.domElement),l.dispose(),d.dispose(),h.dispose(),p.dispose(),_.dispose(),y.dispose(),b.dispose(),L.dispose(),X.dispose()}},[]),g.jsx("div",{ref:o,className:"w-full h-full min-h-[380px] lg:min-h-[520px] pointer-events-auto select-none relative cursor-grab active:cursor-grabbing","data-cursor":"ORBIT 3D","aria-hidden":"true"})},x2=({onOpenTerminal:o})=>g.jsxs("section",{id:"hero",className:"min-h-screen pt-24 lg:pt-32 pb-12 flex flex-col justify-between border-b border-rule relative overflow-hidden",children:[g.jsx("div",{className:"absolute inset-0 pointer-events-auto z-0 flex items-center justify-end pr-0 lg:pr-12 opacity-85 lg:opacity-100",children:g.jsx("div",{className:"w-full lg:w-3/5 h-full",children:g.jsx(v2,{})})}),g.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 my-auto pointer-events-none",children:g.jsxs("div",{className:"space-y-6 max-w-3xl",children:[g.jsxs("div",{className:"inline-flex items-center gap-3 pointer-events-auto",children:[g.jsx("span",{className:"font-mono text-xs text-cobalt font-semibold tracking-widest uppercase",children:"01 // INDEX"}),g.jsx("span",{className:"w-12 h-[1px] bg-rule"}),g.jsx("span",{className:"font-mono text-xs text-ink-muted tracking-widest uppercase",children:"LOYOLA-ICAM (LICET)"})]}),g.jsxs("h1",{className:"text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold text-ink tracking-tighter leading-[0.88] uppercase select-none pointer-events-auto",children:["Paul",g.jsx("br",{}),g.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-ink via-ink to-ink-muted",children:"Nihil."})]}),g.jsx("p",{className:"text-lg sm:text-xl lg:text-2xl font-sans text-ink font-normal leading-snug tracking-tight max-w-2xl pt-2 pointer-events-auto",children:"Computer Science Engineer & Full-Stack Developer creating resilient systems, intelligent computer vision algorithms, and minimalist digital platforms."}),g.jsxs("div",{className:"pt-4 flex flex-wrap items-center gap-4 pointer-events-auto",children:[g.jsxs("a",{href:"#work","data-magnetic":!0,"data-cursor":"EXPLORE",onClick:()=>st.playClick(),onMouseEnter:()=>st.playHover(),className:"inline-flex items-center gap-3 px-6 py-3.5 bg-ink text-canvas font-mono text-xs uppercase tracking-widest hover:bg-cobalt transition-colors group",children:[g.jsx("span",{children:"Selected Work"}),g.jsx(fS,{className:"w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"})]}),g.jsx("a",{href:"#contact","data-magnetic":!0,"data-cursor":"CONTACT",onClick:()=>st.playClick(),onMouseEnter:()=>st.playHover(),className:"inline-flex items-center gap-2 px-6 py-3.5 border border-rule hover:border-ink bg-transparent text-ink font-mono text-xs uppercase tracking-widest transition-colors",children:g.jsx("span",{children:"Get In Touch"})}),g.jsxs("button",{onClick:()=>{st.playClick(),o()},"data-magnetic":!0,"data-cursor":"TERMINAL",className:"inline-flex items-center gap-2 px-4 py-3.5 border border-rule hover:border-ink text-ink-muted hover:text-ink font-mono text-xs uppercase tracking-widest transition-colors",title:"Open Interactive Command Terminal",children:[g.jsx(zo,{className:"w-4 h-4 text-cobalt"}),g.jsx("span",{className:"hidden sm:inline",children:"Terminal Mode"})]})]})]})}),g.jsx("div",{className:"w-full border-t border-rule mt-12 bg-canvas/80 backdrop-blur-sm relative z-10",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-rule",children:[g.jsxs("div",{className:"py-4 md:py-5 pr-4 space-y-1",children:[g.jsx("span",{className:"block font-mono text-[10px] uppercase text-ink-muted tracking-widest",children:"01 // Discipline"}),g.jsx("span",{className:"block font-sans text-xs sm:text-sm font-semibold text-ink",children:"Computer Science Engineering"})]}),g.jsxs("div",{className:"py-4 md:py-5 px-0 md:px-4 space-y-1",children:[g.jsx("span",{className:"block font-mono text-[10px] uppercase text-ink-muted tracking-widest",children:"02 // Location"}),g.jsx("span",{className:"block font-sans text-xs sm:text-sm font-semibold text-ink",children:"Madurai & Chennai, India"})]}),g.jsxs("div",{className:"py-4 md:py-5 px-0 md:px-4 space-y-1",children:[g.jsx("span",{className:"block font-mono text-[10px] uppercase text-ink-muted tracking-widest",children:"03 // Availability"}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),g.jsx("span",{className:"font-sans text-xs sm:text-sm font-semibold text-ink",children:"Available 2026"})]})]}),g.jsxs("div",{className:"py-4 md:py-5 pl-0 md:pl-4 space-y-1",children:[g.jsx("span",{className:"block font-mono text-[10px] uppercase text-ink-muted tracking-widest",children:"04 // Archive Status"}),g.jsx("span",{className:"block font-mono text-xs sm:text-sm font-semibold text-ink uppercase",children:fn.edition})]})]})})]}),_2=()=>g.jsxs("section",{id:"statement",className:"py-24 lg:py-36 border-b border-rule bg-canvas relative overflow-hidden",children:[g.jsx("span",{"aria-hidden":"true",className:"absolute -right-6 top-1/2 -translate-y-1/2 text-[16rem] sm:text-[22rem] lg:text-[28rem] font-display font-black text-ink/[0.025] select-none pointer-events-none tracking-tighter",children:"02"}),g.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-rule pb-4 reveal-on-scroll",children:[g.jsx("span",{className:"font-mono text-xs text-cobalt font-semibold tracking-widest uppercase",children:"02 // INTRODUCTION"}),g.jsx("span",{className:"font-mono text-xs text-ink-muted tracking-widest uppercase",children:"PHILOSOPHY & FOUNDATIONS"})]}),g.jsx("div",{className:"max-w-5xl reveal-on-scroll delay-100",children:g.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-ink tracking-tight leading-[1.1]",children:'"I design and engineer digital systems where rigorous computer science fundamentals meet clean, uncompromising editorial architecture."'})}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 border-t border-rule line-reveal delay-200",children:[g.jsxs("div",{className:"lg:col-span-4 space-y-6 reveal-on-scroll delay-200",children:[g.jsxs("div",{className:"space-y-2",children:[g.jsx("span",{className:"text-6xl sm:text-7xl font-display font-extrabold text-ink/20 tracking-tighter block",children:"02.1"}),g.jsx("h3",{className:"font-mono text-xs uppercase tracking-widest text-ink font-semibold",children:"Engineering Approach"})]}),g.jsx("p",{className:"font-sans text-sm text-ink-muted leading-relaxed",children:"Every system is built from first principles: clean relational data structures, predictable backend states, efficient computational complexity, and frictionless human interaction."})]}),g.jsxs("div",{className:"lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 reveal-on-scroll delay-300",children:[g.jsxs("div",{className:"space-y-3 p-6 border border-rule bg-canvas-subtle/50 hover:border-ink transition-colors group",children:[g.jsx("span",{className:"font-mono text-xs text-cobalt font-semibold uppercase tracking-wider",children:"01 // Systems & Algorithms"}),g.jsx("h4",{className:"font-display font-semibold text-lg text-ink group-hover:text-cobalt transition-colors",children:"Computational Rigor"}),g.jsx("p",{className:"font-sans text-xs text-ink-muted leading-relaxed",children:"Proficient in Java OOP architectures, C systems programming, and algorithmic data structures tested against performance-critical constraints."})]}),g.jsxs("div",{className:"space-y-3 p-6 border border-rule bg-canvas-subtle/50 hover:border-ink transition-colors group",children:[g.jsx("span",{className:"font-mono text-xs text-cobalt font-semibold uppercase tracking-wider",children:"02 // Edge AI & Vision"}),g.jsx("h4",{className:"font-display font-semibold text-lg text-ink group-hover:text-cobalt transition-colors",children:"Intelligent Automation"}),g.jsx("p",{className:"font-sans text-xs text-ink-muted leading-relaxed",children:"Applied computer vision engineering with OpenCV and Python for automated object detection, lane tracking, and real-time municipal traffic control."})]}),g.jsxs("div",{className:"space-y-3 p-6 border border-rule bg-canvas-subtle/50 hover:border-ink transition-colors group",children:[g.jsx("span",{className:"font-mono text-xs text-cobalt font-semibold uppercase tracking-wider",children:"03 // Relational Architecture"}),g.jsx("h4",{className:"font-display font-semibold text-lg text-ink group-hover:text-cobalt transition-colors",children:"Database Engineering"}),g.jsx("p",{className:"font-sans text-xs text-ink-muted leading-relaxed",children:"Oracle Academy certified in SQL and PL/SQL. Designing structured relational schemas, complex joins, stored procedures, triggers, and transactions."})]}),g.jsxs("div",{className:"space-y-3 p-6 border border-rule bg-canvas-subtle/50 hover:border-ink transition-colors group",children:[g.jsx("span",{className:"font-mono text-xs text-cobalt font-semibold uppercase tracking-wider",children:"04 // Modern Web & UI/UX"}),g.jsx("h4",{className:"font-display font-semibold text-lg text-ink group-hover:text-cobalt transition-colors",children:"Human-Centered Interfaces"}),g.jsx("p",{className:"font-sans text-xs text-ink-muted leading-relaxed",children:"Crafting responsive, accessible, high-performance web applications using React, semantic HTML5, modern CSS architectures, and Figma design workflows."})]})]})]})]})]}),y2=({project:o,onClose:e})=>(nt.useEffect(()=>{const i=s=>{s.key==="Escape"&&e()};return o&&(document.body.style.overflow="hidden",window.addEventListener("keydown",i)),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",i)}},[o,e]),o?g.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-in fade-in duration-200",children:[g.jsx("div",{className:"absolute inset-0 bg-ink/75 backdrop-blur-md",onClick:()=>{st.playClick(),e()}}),g.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] bg-canvas border border-rule overflow-y-auto z-10 shadow-2xl space-y-8 p-6 sm:p-8 lg:p-12",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-rule pb-6",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsxs("span",{className:"font-mono text-sm text-cobalt font-bold",children:[o.number," // ARCHIVE CASE STUDY"]}),g.jsx("span",{className:"w-8 h-[1px] bg-rule"}),g.jsxs("span",{className:"font-mono text-xs uppercase tracking-widest text-ink-muted",children:["YEAR: ",o.year]})]}),g.jsx("button",{onClick:()=>{st.playClick(),e()},className:"p-2 border border-rule hover:border-ink hover:bg-ink hover:text-canvas transition-colors","aria-label":"Close Case Study Modal",children:g.jsx(Go,{className:"w-5 h-5"})})]}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("span",{className:"font-mono text-xs text-ink-muted uppercase tracking-widest",children:[o.category," · ",o.role]}),g.jsx("h2",{className:"text-3xl sm:text-4xl font-display font-bold text-ink tracking-tight",children:o.title}),g.jsx("p",{className:"text-base text-ink-muted leading-relaxed font-sans max-w-2xl",children:o.tagline})]}),g.jsx("div",{className:"border border-rule overflow-hidden bg-canvas-dark relative aspect-video sm:aspect-[21/9]",children:g.jsx("img",{src:o.image,alt:o.title,className:"w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"})}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-b border-rule py-8",children:[g.jsxs("div",{className:"space-y-3",children:[g.jsx("span",{className:"font-mono text-xs text-rose-600 font-semibold uppercase tracking-wider",children:"[ 01 // The Engineering Challenge ]"}),g.jsx("h3",{className:"font-display font-semibold text-lg text-ink",children:"Core Problem"}),g.jsx("p",{className:"font-sans text-sm text-ink-muted leading-relaxed",children:o.problem})]}),g.jsxs("div",{className:"space-y-3",children:[g.jsx("span",{className:"font-mono text-xs text-emerald-600 font-semibold uppercase tracking-wider",children:"[ 02 // The Technical Solution ]"}),g.jsx("h3",{className:"font-display font-semibold text-lg text-ink",children:"Engineered Implementation"}),g.jsx("p",{className:"font-sans text-sm text-ink-muted leading-relaxed",children:o.solution})]})]}),g.jsxs("div",{className:"space-y-4",children:[g.jsx("span",{className:"font-mono text-xs text-cobalt font-semibold uppercase tracking-widest",children:"System Architecture & Data Flow"}),g.jsx("div",{className:"border border-rule divide-y divide-rule bg-canvas-subtle/40 font-mono text-xs",children:o.architecture.map((i,s)=>g.jsxs("div",{className:"p-3.5 flex items-center gap-3",children:[g.jsxs("span",{className:"text-cobalt font-bold",children:["L0",s+1," //"]}),g.jsx("span",{className:"text-ink font-medium",children:i})]},s))})]}),g.jsxs("div",{className:"space-y-4",children:[g.jsx("span",{className:"font-mono text-xs text-ink font-semibold uppercase tracking-widest",children:"Performance Metrics & Results"}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:o.metrics.map((i,s)=>g.jsxs("div",{className:"p-4 border border-rule bg-canvas-subtle/50 space-y-1.5",children:[g.jsx(MS,{className:"w-4 h-4 text-emerald-600"}),g.jsx("p",{className:"font-sans text-xs text-ink font-medium leading-normal",children:i})]},s))})]}),g.jsxs("div",{className:"space-y-3",children:[g.jsx("span",{className:"font-mono text-xs text-ink-muted uppercase tracking-widest",children:"Technology Stack & Libraries"}),g.jsx("div",{className:"flex flex-wrap gap-2",children:o.technologies.map(i=>g.jsx("span",{className:"px-3 py-1 font-mono text-xs border border-rule bg-canvas text-ink font-medium uppercase tracking-wider",children:i},i))})]}),g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-rule",children:[g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsxs("a",{href:o.githubUrl,target:"_blank",rel:"noopener noreferrer",onClick:()=>st.playClick(),className:"inline-flex items-center gap-2 px-5 py-3 bg-ink text-canvas font-mono text-xs uppercase tracking-widest hover:bg-cobalt transition-colors",children:[g.jsx(Xc,{className:"w-4 h-4"}),g.jsx("span",{children:"Source Repository"})]}),o.liveUrl&&g.jsxs("a",{href:o.liveUrl,target:"_blank",rel:"noopener noreferrer",onClick:()=>st.playClick(),className:"inline-flex items-center gap-2 px-5 py-3 border border-rule hover:border-ink text-ink font-mono text-xs uppercase tracking-widest transition-colors",children:[g.jsx(Uh,{className:"w-4 h-4 text-cobalt"}),g.jsx("span",{children:"Live Demonstration"})]})]}),g.jsxs("button",{onClick:()=>{st.playClick(),e()},className:"font-mono text-xs uppercase tracking-widest text-ink-muted hover:text-ink transition-colors flex items-center gap-1",children:[g.jsx("span",{children:"Close Case Study"}),g.jsx(Kv,{className:"w-3.5 h-3.5"})]})]})]})]}):null),S2=()=>{const[o,e]=nt.useState(null);return g.jsxs("section",{id:"work",className:"py-24 lg:py-36 border-b border-rule bg-canvas relative overflow-hidden",children:[g.jsx("span",{"aria-hidden":"true",className:"absolute -right-6 top-1/3 -translate-y-1/2 text-[16rem] sm:text-[22rem] lg:text-[28rem] font-display font-black text-ink/[0.025] select-none pointer-events-none tracking-tighter",children:"03"}),g.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-rule pb-4 reveal-on-scroll",children:[g.jsx("span",{className:"font-mono text-xs text-cobalt font-semibold tracking-widest uppercase",children:"03 // SELECTED WORK"}),g.jsxs("span",{className:"font-mono text-xs text-ink-muted tracking-widest uppercase",children:["CASE STUDIES (",V0.length,")"]})]}),g.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal-on-scroll delay-100",children:[g.jsxs("h2",{className:"text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-ink tracking-tight uppercase leading-none",children:["Engineered",g.jsx("br",{}),"Projects."]}),g.jsx("p",{className:"font-sans text-sm text-ink-muted max-w-md",children:"Production-grade systems, computer vision algorithms, and enterprise workflow engines solving tangible engineering challenges."})]}),g.jsx("div",{className:"space-y-16 lg:space-y-24 pt-8",children:V0.map((i,s)=>g.jsxs("article",{className:"border border-rule bg-canvas p-6 sm:p-8 lg:p-12 space-y-8 hover:border-ink transition-all duration-300 group reveal-on-scroll",children:[g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-6",children:[g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsx("span",{className:"text-3xl sm:text-4xl font-display font-extrabold text-ink tracking-tighter",children:i.number}),g.jsx("span",{className:"w-6 h-[1px] bg-rule"}),g.jsx("span",{className:"font-mono text-xs uppercase tracking-widest text-cobalt font-semibold",children:i.category})]}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsxs("span",{className:"font-mono text-xs uppercase tracking-wider text-ink-muted",children:["YEAR: ",i.year]}),g.jsx("span",{className:"text-rule hidden sm:inline",children:"|"}),g.jsxs("span",{className:"font-mono text-xs uppercase tracking-wider text-ink-muted hidden sm:inline",children:["ROLE: ",i.role]})]})]}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",children:[g.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[g.jsxs("div",{className:"space-y-2",children:[g.jsx("h3",{className:"text-2xl sm:text-3xl font-display font-bold text-ink tracking-tight group-hover:text-cobalt transition-colors",children:i.title}),g.jsx("p",{className:"font-sans text-sm text-ink-muted leading-relaxed",children:i.tagline})]}),g.jsxs("div",{className:"space-y-2 border-l-2 border-rule pl-4",children:[g.jsx("span",{className:"font-mono text-[11px] uppercase tracking-wider text-ink font-semibold block",children:"Core Architecture"}),g.jsx("ul",{className:"space-y-1.5 font-sans text-xs text-ink-muted",children:i.architecture.slice(0,3).map((l,c)=>g.jsxs("li",{className:"flex items-start gap-2",children:[g.jsx("span",{className:"text-cobalt font-bold",children:"›"}),g.jsx("span",{children:l})]},c))})]}),g.jsx("div",{className:"flex flex-wrap gap-2 pt-2",children:i.technologies.map(l=>g.jsx("span",{className:"px-2.5 py-1 font-mono text-[11px] border border-rule text-ink uppercase tracking-wider bg-canvas-subtle/50 font-medium",children:l},l))}),g.jsxs("div",{className:"flex flex-wrap items-center gap-4 pt-4",children:[g.jsxs("button",{onClick:()=>{st.playClick(),e(i)},"data-magnetic":!0,"data-cursor":"VIEW",className:"inline-flex items-center gap-2 px-5 py-3 bg-ink text-canvas font-mono text-xs uppercase tracking-widest hover:bg-cobalt transition-colors",children:[g.jsx("span",{children:"Explore Case Study"}),g.jsx(Qv,{className:"w-3.5 h-3.5"})]}),g.jsxs("a",{href:i.githubUrl,target:"_blank",rel:"noopener noreferrer",onClick:()=>st.playClick(),"data-magnetic":!0,"data-cursor":"OPEN ↗",className:"inline-flex items-center gap-2 px-4 py-3 border border-rule hover:border-ink text-ink font-mono text-xs uppercase tracking-widest transition-colors",title:"View GitHub Repository",children:[g.jsx(Xc,{className:"w-4 h-4"}),g.jsx("span",{children:"Code"})]})]})]}),g.jsxs("div",{className:"lg:col-span-7 border border-rule overflow-hidden relative group/img cursor-pointer aspect-video bg-canvas-dark",onClick:()=>{st.playClick(),e(i)},"data-cursor":"VIEW",children:[g.jsx("img",{src:i.image,alt:i.title,className:"w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out opacity-90 group-hover:opacity-100"}),g.jsxs("div",{className:"absolute top-4 right-4 bg-ink text-canvas font-mono text-[10px] uppercase tracking-widest px-3 py-1 border border-rule flex items-center gap-1.5 opacity-90 group-hover:opacity-100",children:[g.jsx(AS,{className:"w-3 h-3 text-cobalt"}),g.jsxs("span",{children:["L0",s+1," // PREVIEW"]})]})]})]})]},i.id))})]}),g.jsx(y2,{project:o,onClose:()=>e(null)})]})},M2=()=>{const[o,e]=nt.useState("");return nt.useEffect(()=>{const i=()=>{const l={timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0};e(new Intl.DateTimeFormat("en-US",l).format(new Date))};i();const s=setInterval(i,1e3);return()=>clearInterval(s)},[]),g.jsxs("section",{id:"about",className:"py-24 lg:py-36 border-b border-rule bg-canvas relative overflow-hidden",children:[g.jsx("span",{"aria-hidden":"true",className:"absolute -right-6 top-1/2 -translate-y-1/2 text-[16rem] sm:text-[22rem] lg:text-[28rem] font-display font-black text-ink/[0.025] select-none pointer-events-none tracking-tighter",children:"04"}),g.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-rule pb-4 reveal-on-scroll",children:[g.jsx("span",{className:"font-mono text-xs text-cobalt font-semibold tracking-widest uppercase",children:"04 // ABOUT & TELEMETRY"}),g.jsx("span",{className:"font-mono text-xs text-ink-muted tracking-widest uppercase",children:"ORIGIN & ACADEMICS"})]}),g.jsx("div",{className:"max-w-4xl reveal-on-scroll delay-100",children:g.jsxs("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink tracking-tight uppercase leading-[1.05]",children:["Engineering Systems",g.jsx("br",{}),"From First Principles."]})}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-6",children:[g.jsxs("div",{className:"lg:col-span-7 space-y-8 reveal-on-scroll delay-200",children:[g.jsxs("div",{className:"space-y-4 font-sans text-base text-ink-muted leading-relaxed",children:[g.jsxs("p",{className:"text-ink font-medium text-lg leading-relaxed",children:["I am a Computer Science Engineering student at ",g.jsx("span",{className:"text-ink font-semibold border-b border-ink",children:"Loyola-ICAM College of Engineering and Technology (LICET)"}),", Chennai, hailing from the historic city of Madurai, Tamil Nadu."]}),g.jsx("p",{children:"My passion lies at the intersection of robust backend data structures, procedural logic, and minimalist, high-impact digital user experiences. I believe code should be structured with the same discipline and durability as physical architecture."}),g.jsx("p",{children:"Throughout my academic journey, I have prioritized solving real-world challenges: from creating intelligent traffic control systems with OpenCV edge processing to digitizing multi-tier administrative workflows for higher education institutions."})]}),g.jsxs("div",{className:"border border-rule divide-y divide-rule font-mono text-xs",children:[g.jsxs("div",{className:"p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-canvas-subtle/40",children:[g.jsx("span",{className:"text-ink-muted uppercase",children:"PRIMARY FOCUS:"}),g.jsx("span",{className:"text-ink font-semibold",children:"Full-Stack Architecture & Java Systems"})]}),g.jsxs("div",{className:"p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[g.jsx("span",{className:"text-ink-muted uppercase",children:"APPLIED VISION:"}),g.jsx("span",{className:"text-ink font-semibold",children:"Edge Computer Vision & OpenCV"})]}),g.jsxs("div",{className:"p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-canvas-subtle/40",children:[g.jsx("span",{className:"text-ink-muted uppercase",children:"DATA PERSISTENCE:"}),g.jsx("span",{className:"text-ink font-semibold",children:"Oracle SQL, PL/SQL & MySQL"})]})]})]}),g.jsxs("div",{className:"lg:col-span-5 space-y-6 reveal-on-scroll delay-300",children:[g.jsxs("div",{className:"p-6 border border-rule bg-canvas-subtle/30 space-y-4",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-cobalt font-semibold uppercase tracking-wider",children:[g.jsx(GS,{className:"w-4 h-4"}),g.jsx("span",{children:"Academic Base"})]}),g.jsx("span",{className:"font-mono text-[10px] text-ink-muted uppercase tracking-widest border border-rule px-2 py-0.5",children:"2022 – 2026"})]}),g.jsxs("div",{className:"space-y-1",children:[g.jsx("h3",{className:"font-display font-bold text-base text-ink",children:"Loyola-ICAM College of Engineering & Technology"}),g.jsx("p",{className:"font-sans text-xs text-ink-muted",children:"B.E. in Computer Science Engineering (Chennai, India)"})]})]}),g.jsxs("div",{className:"p-6 border border-rule bg-canvas space-y-4",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-ink font-semibold uppercase tracking-wider",children:[g.jsx(nx,{className:"w-4 h-4 text-cobalt"}),g.jsx("span",{children:"Live Telemetry"})]}),g.jsxs("div",{className:"flex items-center gap-1.5 font-mono text-xs text-emerald-600 font-semibold",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),g.jsx("span",{children:"ONLINE"})]})]}),g.jsxs("div",{className:"space-y-2 border-t border-rule pt-4 font-mono text-xs",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("span",{className:"text-ink-muted uppercase",children:"LOCAL TIME (IST):"}),g.jsxs("span",{className:"text-ink font-bold flex items-center gap-1.5",children:[g.jsx(ES,{className:"w-3.5 h-3.5 text-cobalt"}),o||"11:45:00 AM"]})]}),g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("span",{className:"text-ink-muted uppercase",children:"COORDINATES:"}),g.jsx("span",{className:"text-ink font-medium",children:"9.9252° N, 78.1198° E"})]}),g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("span",{className:"text-ink-muted uppercase",children:"STATUS:"}),g.jsx("span",{className:"text-cobalt font-semibold uppercase",children:"Open for Roles"})]})]})]}),g.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[g.jsxs("div",{className:"p-4 border border-rule bg-canvas-subtle/50 text-center space-y-1",children:[g.jsx(xS,{className:"w-4 h-4 mx-auto text-cobalt"}),g.jsx("span",{className:"block text-2xl font-display font-extrabold text-ink",children:"03+"}),g.jsx("span",{className:"block font-mono text-[9px] uppercase tracking-wider text-ink-muted",children:"Projects"})]}),g.jsxs("div",{className:"p-4 border border-rule bg-canvas-subtle/50 text-center space-y-1",children:[g.jsx(Jv,{className:"w-4 h-4 mx-auto text-cobalt"}),g.jsx("span",{className:"block text-2xl font-display font-extrabold text-ink",children:"04"}),g.jsx("span",{className:"block font-mono text-[9px] uppercase tracking-wider text-ink-muted",children:"Certifications"})]}),g.jsxs("div",{className:"p-4 border border-rule bg-canvas-subtle/50 text-center space-y-1",children:[g.jsx("span",{className:"block text-cobalt text-xs font-mono font-bold",children:"12+"}),g.jsx("span",{className:"block text-2xl font-display font-extrabold text-ink",children:"SKL"}),g.jsx("span",{className:"block font-mono text-[9px] uppercase tracking-wider text-ink-muted",children:"Tech Stacks"})]})]})]})]})]})]})},b2=()=>{const o=nt.useRef(null);return nt.useEffect(()=>{const e=o.current;if(!e)return;const i=new Gh,s=new Yn(50,e.clientWidth/e.clientHeight,.1,1e3);s.position.z=7;const l=new Qh({alpha:!0,antialias:!0});l.setSize(e.clientWidth,e.clientHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(l.domElement);const c=[{name:"Java",category:"LANG",pos:new Z(-1.8,1.2,0)},{name:"Python",category:"LANG",pos:new Z(1.6,1.4,.5)},{name:"SQL",category:"DATA",pos:new Z(-1.2,-1.1,.8)},{name:"PL/SQL",category:"DATA",pos:new Z(-2.2,-.4,-.6)},{name:"C",category:"LANG",pos:new Z(.2,2,-.4)},{name:"JavaScript",category:"FRONT",pos:new Z(1.8,-.8,-.5)},{name:"React",category:"FRONT",pos:new Z(2.2,.4,.7)},{name:"MySQL",category:"DATA",pos:new Z(0,-1.8,.2)},{name:"Git",category:"TOOL",pos:new Z(-.4,.2,1.4)},{name:"Figma",category:"TOOL",pos:new Z(.8,-.2,-1.2)},{name:"OpenCV",category:"AI",pos:new Z(0,.9,-.9)}],d=new Sr;i.add(d);const h=new Wh(.12,16,16),m={LANG:new ys({color:1118481,metalness:.8,roughness:.2}),DATA:new ys({color:2381823,metalness:.9,roughness:.1}),FRONT:new ys({color:5592405,metalness:.6,roughness:.3}),TOOL:new ys({color:3355443,metalness:.7,roughness:.2}),AI:new ys({color:1982639,metalness:.9,roughness:.1})};c.forEach(L=>{const D=m[L.category]||m.LANG,X=new Rn(h,D);X.position.copy(L.pos),d.add(X);const k=new Rn(new Xh(.16,.18,16),new Ho({color:12105907,side:Pi,transparent:!0,opacity:.5}));k.position.copy(L.pos),d.add(k)});const p=new Rx({color:12105907,transparent:!0,opacity:.45});for(let L=0;L<c.length;L++)for(let D=L+1;D<c.length;D++)if(c[L].pos.distanceTo(c[D].pos)<2.5){const k=new Bn().setFromPoints([c[L].pos,c[D].pos]),I=new Cb(k,p);d.add(I)}const _=new Ox(16777215,1.2);i.add(_);const v=new Nh(16777215,2);v.position.set(5,5,5),i.add(v);const y=new Ux(2381823,3,10);y.position.set(-2,2,2),i.add(y);const b={x:0,y:0,targetX:0,targetY:0},T=L=>{const D=e.getBoundingClientRect(),X=L.clientX-D.left,k=L.clientY-D.top;b.targetX=(X/D.width-.5)*1.5,b.targetY=-(k/D.height-.5)*1.5};window.addEventListener("mousemove",T);const A=()=>{e&&(s.aspect=e.clientWidth/e.clientHeight,s.updateProjectionMatrix(),l.setSize(e.clientWidth,e.clientHeight))};window.addEventListener("resize",A);let M,x=new Zh;const O=()=>{M=requestAnimationFrame(O);const L=x.getElapsedTime();b.x+=(b.targetX-b.x)*.05,b.y+=(b.targetY-b.y)*.05,d.rotation.y=L*.15+b.x*.5,d.rotation.x=Math.sin(L*.1)*.1+b.y*.4,l.render(i,s)};return O(),()=>{cancelAnimationFrame(M),window.removeEventListener("mousemove",T),window.removeEventListener("resize",A),e.contains(l.domElement)&&e.removeChild(l.domElement),l.dispose()}},[]),g.jsx("div",{ref:o,className:"w-full h-full min-h-[300px] lg:min-h-[380px] pointer-events-none select-none relative","aria-hidden":"true"})},E2=()=>{const[o,e]=nt.useState(rc[0].category),i=rc.find(s=>s.category===o)||rc[0];return g.jsxs("section",{id:"skills",className:"py-24 lg:py-36 border-b border-rule bg-canvas relative overflow-hidden",children:[g.jsx("span",{"aria-hidden":"true",className:"absolute -right-6 top-1/2 -translate-y-1/2 text-[16rem] sm:text-[22rem] lg:text-[28rem] font-display font-black text-ink/[0.025] select-none pointer-events-none tracking-tighter",children:"05"}),g.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-rule pb-4 reveal-on-scroll",children:[g.jsx("span",{className:"font-mono text-xs text-cobalt font-semibold tracking-widest uppercase",children:"05 // SKILLS MATRIX"}),g.jsx("span",{className:"font-mono text-xs text-ink-muted tracking-widest uppercase",children:"COMPUTATIONAL COMPETENCIES"})]}),g.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal-on-scroll delay-100",children:[g.jsxs("h2",{className:"text-4xl sm:text-5xl font-display font-extrabold text-ink tracking-tight uppercase leading-none",children:["Technical",g.jsx("br",{}),"Competencies."]}),g.jsx("p",{className:"font-sans text-sm text-ink-muted max-w-md",children:"A structured matrix of programming languages, frameworks, database architectures, and engineering tools."})]}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-6",children:[g.jsxs("div",{className:"lg:col-span-5 border border-rule p-4 sm:p-6 bg-canvas-subtle/30 space-y-4 reveal-on-scroll delay-200",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-rule pb-3",children:[g.jsxs("span",{className:"font-mono text-xs uppercase tracking-widest text-ink font-semibold flex items-center gap-2",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-cobalt"}),"3D Network Constellation"]}),g.jsx("span",{className:"font-mono text-[10px] text-ink-muted uppercase",children:"ROTATE // INTERACT"})]}),g.jsx("div",{className:"relative w-full h-[320px] lg:h-[380px] bg-canvas border border-rule overflow-hidden cursor-grab active:cursor-grabbing","data-cursor":"ORBIT 3D",children:g.jsx(b2,{})}),g.jsx("p",{className:"font-mono text-[11px] text-ink-muted text-center",children:"INTERCONNECTED TOPOLOGY: LANGUAGES · DATABASES · FRAMEWORKS"})]}),g.jsxs("div",{className:"lg:col-span-7 space-y-6 reveal-on-scroll delay-300",children:[g.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-rule pb-4",children:rc.map(s=>{const l=o===s.category;return g.jsxs("button",{onClick:()=>{st.playClick(),e(s.category)},onMouseEnter:()=>st.playHover(),"data-magnetic":!0,className:`p-3 text-left border transition-all ${l?"bg-ink text-canvas border-ink font-semibold":"bg-canvas text-ink-muted border-rule hover:border-ink hover:text-ink"}`,children:[g.jsxs("span",{className:"block font-mono text-[10px] uppercase opacity-75",children:["CAT ",s.code," //"]}),g.jsx("span",{className:"block font-display text-xs uppercase tracking-wider truncate pt-1",children:s.category.split(" ")[0]})]},s.category)})}),g.jsx("div",{className:"border border-rule divide-y divide-rule bg-canvas",children:i.skills.map((s,l)=>g.jsxs("div",{className:"p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-canvas-subtle/40 transition-colors group",children:[g.jsxs("div",{className:"space-y-1",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsxs("span",{className:"font-mono text-xs text-cobalt font-bold",children:["0",l+1]}),g.jsx("h4",{className:"font-display text-base font-bold text-ink group-hover:text-cobalt transition-colors",children:s.name}),g.jsx("span",{className:"font-mono text-[10px] px-2 py-0.5 border border-rule text-ink-muted uppercase",children:s.level})]}),g.jsx("p",{className:"font-sans text-xs text-ink-muted pl-7",children:s.description})]}),g.jsxs("div",{className:"pl-7 sm:pl-0 flex items-center gap-4 shrink-0",children:[g.jsx("span",{className:"font-mono text-xs text-ink-muted uppercase tracking-wider",children:s.experience}),g.jsx("span",{className:"font-mono text-sm text-cobalt opacity-0 group-hover:opacity-100 transition-opacity",children:"→"})]})]},s.name))})]})]})]})]})},T2=()=>g.jsxs("section",{id:"timeline",className:"py-24 lg:py-36 border-b border-rule bg-canvas relative overflow-hidden",children:[g.jsx("span",{"aria-hidden":"true",className:"absolute -right-6 top-1/2 -translate-y-1/2 text-[16rem] sm:text-[22rem] lg:text-[28rem] font-display font-black text-ink/[0.025] select-none pointer-events-none tracking-tighter",children:"06"}),g.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-rule pb-4 reveal-on-scroll",children:[g.jsx("span",{className:"font-mono text-xs text-cobalt font-semibold tracking-widest uppercase",children:"06 // CHRONOLOGY"}),g.jsx("span",{className:"font-mono text-xs text-ink-muted tracking-widest uppercase",children:"EDUCATION & MILESTONES"})]}),g.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal-on-scroll delay-100",children:[g.jsxs("h2",{className:"text-4xl sm:text-5xl font-display font-extrabold text-ink tracking-tight uppercase leading-none",children:["Academic &",g.jsx("br",{}),"Technical Path."]}),g.jsx("p",{className:"font-sans text-sm text-ink-muted max-w-md",children:"The chronological progression of academic foundations, specialized engineering research, and professional certifications."})]}),g.jsx("div",{className:"border border-rule divide-y divide-rule bg-canvas",children:lM.map((o,e)=>g.jsxs("div",{className:"p-6 sm:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start hover:bg-canvas-subtle/40 transition-colors group reveal-on-scroll",children:[g.jsxs("div",{className:"md:col-span-3 space-y-1",children:[g.jsx("span",{className:"font-display font-bold text-xl sm:text-2xl text-ink group-hover:text-cobalt transition-colors block",children:o.year}),g.jsx("span",{className:"font-mono text-[11px] uppercase tracking-widest text-cobalt font-semibold block",children:o.period}),g.jsx("span",{className:"font-mono text-[10px] text-ink-muted uppercase border border-rule px-2 py-0.5 inline-block mt-2",children:o.category})]}),g.jsxs("div",{className:"md:col-span-4 space-y-1.5",children:[g.jsx("h3",{className:"font-display font-bold text-lg sm:text-xl text-ink",children:o.title}),g.jsx("p",{className:"font-sans text-xs text-ink font-medium",children:o.institution}),g.jsx("p",{className:"font-mono text-[11px] text-ink-muted",children:o.location})]}),g.jsxs("div",{className:"md:col-span-5 space-y-3",children:[g.jsx("p",{className:"font-sans text-xs sm:text-sm text-ink-muted leading-relaxed",children:o.description}),g.jsx("ul",{className:"space-y-1 font-sans text-xs text-ink",children:o.highlights.map((i,s)=>g.jsxs("li",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"text-cobalt font-bold",children:"›"}),g.jsx("span",{children:i})]},s))})]})]},e))})]})]}),A2=({certificate:o,onClose:e})=>(nt.useEffect(()=>{const i=s=>{s.key==="Escape"&&e()};return o&&(document.body.style.overflow="hidden",window.addEventListener("keydown",i)),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",i)}},[o,e]),o?g.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-in fade-in duration-200",children:[g.jsx("div",{className:"absolute inset-0 bg-ink/75 backdrop-blur-md",onClick:()=>{st.playClick(),e()}}),g.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] bg-canvas border border-rule overflow-y-auto z-10 shadow-2xl space-y-6 p-6 sm:p-8 lg:p-10",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-rule pb-4",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx(Jv,{className:"w-5 h-5 text-cobalt"}),g.jsxs("span",{className:"font-mono text-xs uppercase tracking-widest text-cobalt font-bold",children:[o.number," // VERIFIED CREDENTIAL"]})]}),g.jsx("button",{onClick:()=>{st.playClick(),e()},className:"p-2 border border-rule hover:border-ink hover:bg-ink hover:text-canvas transition-colors","aria-label":"Close Certificate Modal",children:g.jsx(Go,{className:"w-5 h-5"})})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsxs("div",{className:"flex flex-wrap items-center gap-3 font-mono text-xs text-ink-muted uppercase",children:[g.jsx("span",{className:"px-2.5 py-0.5 border border-rule bg-canvas-subtle/50 text-ink font-semibold",children:o.issuer}),g.jsxs("span",{children:["YEAR: ",o.year]}),g.jsx("span",{children:"·"}),g.jsx("span",{children:o.category})]}),g.jsx("h2",{className:"text-2xl sm:text-3xl font-display font-bold text-ink tracking-tight",children:o.title}),g.jsx("p",{className:"font-sans text-sm text-ink-muted leading-relaxed",children:o.description})]}),g.jsx("div",{className:"border border-rule bg-canvas-subtle h-[380px] sm:h-[450px] overflow-hidden relative",children:g.jsx("iframe",{src:o.pdfPath,title:o.title,className:"w-full h-full border-none"})}),g.jsxs("div",{className:"space-y-2 pt-2",children:[g.jsx("span",{className:"font-mono text-xs text-ink-muted uppercase tracking-widest block",children:"Validated Competencies"}),g.jsx("div",{className:"flex flex-wrap gap-2",children:o.skills.map(i=>g.jsx("span",{className:"px-3 py-1 font-mono text-xs border border-rule bg-canvas text-ink font-medium uppercase",children:i},i))})]}),g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-rule",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsxs("a",{href:o.pdfPath,download:!0,onClick:()=>st.playClick(),className:"inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-canvas font-mono text-xs uppercase tracking-widest hover:bg-cobalt transition-colors",children:[g.jsx($v,{className:"w-4 h-4"}),g.jsx("span",{children:"Download PDF"})]}),g.jsxs("a",{href:o.pdfPath,target:"_blank",rel:"noopener noreferrer",onClick:()=>st.playClick(),className:"inline-flex items-center gap-2 px-4 py-2.5 border border-rule hover:border-ink text-ink font-mono text-xs uppercase tracking-widest transition-colors",children:[g.jsx(Uh,{className:"w-4 h-4 text-cobalt"}),g.jsx("span",{children:"Open in New Tab"})]})]}),g.jsx("button",{onClick:()=>{st.playClick(),e()},className:"font-mono text-xs uppercase tracking-widest text-ink-muted hover:text-ink transition-colors",children:"Close Viewer"})]})]})]}):null),w2=()=>{const[o,e]=nt.useState(null);return g.jsxs("section",{id:"certificates",className:"py-24 lg:py-36 border-b border-rule bg-canvas relative overflow-hidden",children:[g.jsx("span",{"aria-hidden":"true",className:"absolute -right-6 top-1/2 -translate-y-1/2 text-[16rem] sm:text-[22rem] lg:text-[28rem] font-display font-black text-ink/[0.025] select-none pointer-events-none tracking-tighter",children:"07"}),g.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-rule pb-4 reveal-on-scroll",children:[g.jsx("span",{className:"font-mono text-xs text-cobalt font-semibold tracking-widest uppercase",children:"07 // CREDENTIALS & CERTIFICATIONS"}),g.jsxs("span",{className:"font-mono text-xs text-ink-muted tracking-widest uppercase",children:["ARCHIVE (",j0.length,")"]})]}),g.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal-on-scroll delay-100",children:[g.jsxs("h2",{className:"text-4xl sm:text-5xl font-display font-extrabold text-ink tracking-tight uppercase leading-none",children:["Verified",g.jsx("br",{}),"Certifications."]}),g.jsx("p",{className:"font-sans text-sm text-ink-muted max-w-md",children:"Validated professional credentials in Oracle database systems, Java software architecture, and UI/UX design."})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-6",children:j0.map(i=>g.jsxs("div",{onClick:()=>{st.playClick(),e(i)},onMouseEnter:()=>st.playHover(),"data-magnetic":!0,"data-cursor":"VIEW",className:"p-6 sm:p-8 border border-rule bg-canvas hover:border-ink hover:bg-canvas-subtle/30 transition-all duration-200 cursor-pointer space-y-6 group reveal-on-scroll",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-rule pb-4",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("span",{className:"font-mono text-sm text-cobalt font-bold",children:i.number}),g.jsx("span",{className:"font-mono text-xs text-ink uppercase tracking-wider font-semibold",children:i.issuer})]}),g.jsx("span",{className:"font-mono text-xs text-ink-muted uppercase",children:i.year})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsxs("div",{className:"flex items-center justify-between gap-2",children:[g.jsx("h3",{className:"font-display font-bold text-lg sm:text-xl text-ink group-hover:text-cobalt transition-colors",children:i.title}),g.jsx(Qv,{className:"w-4 h-4 text-ink-muted group-hover:text-cobalt group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"})]}),g.jsx("p",{className:"font-sans text-xs text-ink-muted leading-relaxed line-clamp-2",children:i.description})]}),g.jsxs("div",{className:"flex flex-wrap gap-1.5 pt-2",children:[i.skills.slice(0,3).map(s=>g.jsx("span",{className:"px-2 py-0.5 font-mono text-[10px] border border-rule text-ink-muted uppercase bg-canvas",children:s},s)),i.skills.length>3&&g.jsxs("span",{className:"px-1.5 py-0.5 font-mono text-[10px] text-ink-muted",children:["+",i.skills.length-3," more"]})]}),g.jsxs("div",{className:"pt-2 flex items-center justify-between text-xs font-mono border-t border-rule/50",children:[g.jsxs("span",{className:"flex items-center gap-1.5 text-emerald-600 font-medium",children:[g.jsx(BS,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"VERIFIED PDF AVAILABLE"})]}),g.jsx("span",{className:"text-ink-muted group-hover:text-ink transition-colors",children:"Click to View →"})]})]},i.id))})]}),g.jsx(A2,{certificate:o,onClose:()=>e(null)})]})},C2=()=>{const o=nt.useRef(null),[e,i]=nt.useState("wave");return nt.useEffect(()=>{const s=o.current;if(!s)return;const l=new Gh,c=new Yh(-1,1,1,-1,0,1),d=new Qh({alpha:!0,antialias:!0});d.setSize(s.clientWidth,s.clientHeight),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.appendChild(d.domElement);const h=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,m=`
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform int uPreset;
      varying vec2 vUv;

      void main() {
        vec2 st = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);
        vec2 mouse = (uMouse * 2.0 - 1.0);

        float dist = length(st - mouse);
        float mouseInteraction = smoothstep(0.8, 0.0, dist);

        float pattern = 0.0;

        if (uPreset == 0) {
          // Mathematical Sine Wave Interferences
          float wave1 = sin(st.x * 6.0 + uTime * 1.5);
          float wave2 = cos(st.y * 6.0 - uTime * 1.2);
          float ripple = sin(dist * 12.0 - uTime * 3.0) * mouseInteraction;
          pattern = abs(wave1 + wave2 + ripple) * 0.5;
        } else if (uPreset == 1) {
          // Fluid Vector Lines
          float angle = atan(st.y, st.x) + uTime * 0.4;
          float r = length(st);
          pattern = sin(14.0 * r + 4.0 * angle + mouseInteraction * 4.0);
          pattern = smoothstep(-0.2, 0.8, pattern);
        } else {
          // Swiss Modernist Grid Distortion
          vec2 grid = fract(st * 8.0 + mouse * 0.2) - 0.5;
          float line = smoothstep(0.48, 0.5, abs(grid.x)) + smoothstep(0.48, 0.5, abs(grid.y));
          pattern = line * (0.8 + 0.2 * sin(uTime * 2.0));
        }

        // Swiss Monochrome with subtle Cobalt tint
        vec3 colA = vec3(0.956, 0.952, 0.937); // #F4F3EF
        vec3 colB = vec3(0.066, 0.066, 0.066); // #111111
        vec3 colC = vec3(0.141, 0.341, 1.0);   // #2457FF

        vec3 finalColor = mix(colA, colB, clamp(pattern, 0.0, 1.0));
        if (mouseInteraction > 0.05) {
          finalColor = mix(finalColor, colC, mouseInteraction * 0.35);
        }

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,p={uTime:{value:0},uResolution:{value:new vt(s.clientWidth,s.clientHeight)},uMouse:{value:new vt(.5,.5)},uPreset:{value:0}},_=new Zo(2,2),v=new da({vertexShader:h,fragmentShader:m,uniforms:p}),y=new Rn(_,v);l.add(y),e==="wave"&&(p.uPreset.value=0),e==="flow"&&(p.uPreset.value=1),e==="grid"&&(p.uPreset.value=2);const b=O=>{const L=s.getBoundingClientRect(),D=(O.clientX-L.left)/L.width,X=1-(O.clientY-L.top)/L.height;p.uMouse.value.set(D,X)};s.addEventListener("mousemove",b);const T=()=>{s&&(d.setSize(s.clientWidth,s.clientHeight),p.uResolution.value.set(s.clientWidth,s.clientHeight))};window.addEventListener("resize",T);let A,M=new Zh;const x=()=>{A=requestAnimationFrame(x),p.uTime.value=M.getElapsedTime(),d.render(l,c)};return x(),()=>{cancelAnimationFrame(A),s.removeEventListener("mousemove",b),window.removeEventListener("resize",T),s.contains(d.domElement)&&s.removeChild(d.domElement),d.dispose(),_.dispose(),v.dispose()}},[e]),g.jsxs("div",{className:"border border-rule bg-canvas p-4 lg:p-6 space-y-4",children:[g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-rule",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-cobalt animate-pulse"}),g.jsx("span",{className:"font-mono text-xs uppercase tracking-widest text-ink font-semibold",children:"WebGL GLSL Shader Experiment // 01"})]}),g.jsx("div",{className:"flex items-center gap-2",children:["wave","flow","grid"].map(s=>g.jsx("button",{onClick:()=>i(s),className:`px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors border ${e===s?"bg-ink text-canvas border-ink font-medium":"bg-transparent text-ink-muted border-rule hover:text-ink hover:border-ink"}`,children:s},s))})]}),g.jsx("div",{ref:o,className:"w-full h-[280px] lg:h-[340px] border border-rule cursor-crosshair relative overflow-hidden"}),g.jsxs("div",{className:"flex flex-wrap items-center justify-between text-xs font-mono text-ink-muted pt-1",children:[g.jsx("span",{children:"INTERACTION: MOVE CURSOR ACROSS SURFACE"}),g.jsx("span",{children:"GLSL FRAGMENT RENDERING // 60 FPS"})]})]})},R2=()=>g.jsxs("section",{id:"playground",className:"py-24 lg:py-36 border-b border-rule bg-canvas relative overflow-hidden",children:[g.jsx("span",{"aria-hidden":"true",className:"absolute -right-6 top-1/2 -translate-y-1/2 text-[16rem] sm:text-[22rem] lg:text-[28rem] font-display font-black text-ink/[0.025] select-none pointer-events-none tracking-tighter",children:"08"}),g.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-rule pb-4 reveal-on-scroll",children:[g.jsx("span",{className:"font-mono text-xs text-cobalt font-semibold tracking-widest uppercase",children:"08 // LAB & EXPERIMENTS"}),g.jsx("span",{className:"font-mono text-xs text-ink-muted tracking-widest uppercase",children:"CREATIVE COMPUTING"})]}),g.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal-on-scroll delay-100",children:[g.jsxs("h2",{className:"text-4xl sm:text-5xl font-display font-extrabold text-ink tracking-tight uppercase leading-none",children:["Creative &",g.jsx("br",{}),"Shader Lab."]}),g.jsx("p",{className:"font-sans text-sm text-ink-muted max-w-md",children:"Interactive graphics experiments exploring real-time GLSL fragment shaders, vector math, and procedural generation."})]}),g.jsxs("div",{className:"space-y-8 pt-4 reveal-on-scroll delay-200",children:[g.jsx(C2,{}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 pt-4",children:cM.map((o,e)=>g.jsxs("div",{className:"p-6 border border-rule bg-canvas space-y-3 hover:border-ink transition-colors reveal-on-scroll",children:[g.jsxs("div",{className:"flex items-center justify-between font-mono text-xs text-cobalt font-bold",children:[g.jsxs("span",{children:["EXP 0",e+1," //"]}),e===0?g.jsx(Gd,{className:"w-4 h-4"}):e===1?g.jsx(OS,{className:"w-4 h-4"}):g.jsx(CS,{className:"w-4 h-4"})]}),g.jsx("h3",{className:"font-display font-bold text-base text-ink",children:o.title}),g.jsx("p",{className:"font-sans text-xs text-ink-muted leading-relaxed",children:o.description}),g.jsx("span",{className:"inline-block font-mono text-[10px] uppercase text-ink-muted border border-rule px-2 py-0.5 mt-2",children:o.tech})]},o.id))})]})]})]});var Jh={};(function o(e,i,s,l){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),d=typeof Path2D=="function"&&typeof DOMMatrix=="function",h=(function(){if(!e.OffscreenCanvas)return!1;try{var z=new OffscreenCanvas(1,1),E=z.getContext("2d");E.fillRect(0,0,1,1);var G=z.transferToImageBitmap();E.createPattern(G,"no-repeat")}catch{return!1}return!0})();function m(){}function p(z){var E=i.exports.Promise,G=E!==void 0?E:e.Promise;return typeof G=="function"?new G(z):(z(m,m),null)}var _=(function(z,E){return{transform:function(G){if(z)return G;if(E.has(G))return E.get(G);var ae=new OffscreenCanvas(G.width,G.height),j=ae.getContext("2d");return j.drawImage(G,0,0),E.set(G,ae),ae},clear:function(){E.clear()}}})(h,new Map),v=(function(){var z=Math.floor(16.666666666666668),E,G,ae={},j=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(E=function(te){var he=Math.random();return ae[he]=requestAnimationFrame(function le(Te){j===Te||j+z-1<Te?(j=Te,delete ae[he],te()):ae[he]=requestAnimationFrame(le)}),he},G=function(te){ae[te]&&cancelAnimationFrame(ae[te])}):(E=function(te){return setTimeout(te,z)},G=function(te){return clearTimeout(te)}),{frame:E,cancel:G}})(),y=(function(){var z,E,G={};function ae(j){function te(he,le){j.postMessage({options:he||{},callback:le})}j.init=function(le){var Te=le.transferControlToOffscreen();j.postMessage({canvas:Te},[Te])},j.fire=function(le,Te,Ce){if(E)return te(le,null),E;var Le=Math.random().toString(36).slice(2);return E=p(function(Je){function et(Ye){Ye.data.callback===Le&&(delete G[Le],j.removeEventListener("message",et),E=null,_.clear(),Ce(),Je())}j.addEventListener("message",et),te(le,Le),G[Le]=et.bind(null,{data:{callback:Le}})}),E},j.reset=function(){j.postMessage({reset:!0});for(var le in G)G[le](),delete G[le]}}return function(){if(z)return z;if(!s&&c){var j=["var CONFETTI, SIZE = {}, module = {};","("+o.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{z=new Worker(URL.createObjectURL(new Blob([j])))}catch(te){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",te),null}ae(z)}return z}})(),b={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(z,E){return E?E(z):z}function A(z){return z!=null}function M(z,E,G){return T(z&&A(z[E])?z[E]:b[E],G)}function x(z){return z<0?0:Math.floor(z)}function O(z,E){return Math.floor(Math.random()*(E-z))+z}function L(z){return parseInt(z,16)}function D(z){return z.map(X)}function X(z){var E=String(z).replace(/[^0-9a-f]/gi,"");return E.length<6&&(E=E[0]+E[0]+E[1]+E[1]+E[2]+E[2]),{r:L(E.substring(0,2)),g:L(E.substring(2,4)),b:L(E.substring(4,6))}}function k(z){var E=M(z,"origin",Object);return E.x=M(E,"x",Number),E.y=M(E,"y",Number),E}function I(z){z.width=document.documentElement.clientWidth,z.height=document.documentElement.clientHeight}function q(z){var E=z.getBoundingClientRect();z.width=E.width,z.height=E.height}function U(z){var E=document.createElement("canvas");return E.style.position="fixed",E.style.top="0px",E.style.left="0px",E.style.pointerEvents="none",E.style.zIndex=z,E}function R(z,E,G,ae,j,te,he,le,Te){z.save(),z.translate(E,G),z.rotate(te),z.scale(ae,j),z.arc(0,0,1,he,le,Te),z.restore()}function V(z){var E=z.angle*(Math.PI/180),G=z.spread*(Math.PI/180);return{x:z.x,y:z.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:z.startVelocity*.5+Math.random()*z.startVelocity,angle2D:-E+(.5*G-Math.random()*G),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:z.color,shape:z.shape,tick:0,totalTicks:z.ticks,decay:z.decay,drift:z.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:z.gravity*3,ovalScalar:.6,scalar:z.scalar,flat:z.flat}}function ce(z,E){E.x+=Math.cos(E.angle2D)*E.velocity+E.drift,E.y+=Math.sin(E.angle2D)*E.velocity+E.gravity,E.velocity*=E.decay,E.flat?(E.wobble=0,E.wobbleX=E.x+10*E.scalar,E.wobbleY=E.y+10*E.scalar,E.tiltSin=0,E.tiltCos=0,E.random=1):(E.wobble+=E.wobbleSpeed,E.wobbleX=E.x+10*E.scalar*Math.cos(E.wobble),E.wobbleY=E.y+10*E.scalar*Math.sin(E.wobble),E.tiltAngle+=.1,E.tiltSin=Math.sin(E.tiltAngle),E.tiltCos=Math.cos(E.tiltAngle),E.random=Math.random()+2);var G=E.tick++/E.totalTicks,ae=E.x+E.random*E.tiltCos,j=E.y+E.random*E.tiltSin,te=E.wobbleX+E.random*E.tiltCos,he=E.wobbleY+E.random*E.tiltSin;if(z.fillStyle="rgba("+E.color.r+", "+E.color.g+", "+E.color.b+", "+(1-G)+")",z.beginPath(),d&&E.shape.type==="path"&&typeof E.shape.path=="string"&&Array.isArray(E.shape.matrix))z.fill(ee(E.shape.path,E.shape.matrix,E.x,E.y,Math.abs(te-ae)*.1,Math.abs(he-j)*.1,Math.PI/10*E.wobble));else if(E.shape.type==="bitmap"){var le=Math.PI/10*E.wobble,Te=Math.abs(te-ae)*.1,Ce=Math.abs(he-j)*.1,Le=E.shape.bitmap.width*E.scalar,Je=E.shape.bitmap.height*E.scalar,et=new DOMMatrix([Math.cos(le)*Te,Math.sin(le)*Te,-Math.sin(le)*Ce,Math.cos(le)*Ce,E.x,E.y]);et.multiplySelf(new DOMMatrix(E.shape.matrix));var Ye=z.createPattern(_.transform(E.shape.bitmap),"no-repeat");Ye.setTransform(et),z.globalAlpha=1-G,z.fillStyle=Ye,z.fillRect(E.x-Le/2,E.y-Je/2,Le,Je),z.globalAlpha=1}else if(E.shape==="circle")z.ellipse?z.ellipse(E.x,E.y,Math.abs(te-ae)*E.ovalScalar,Math.abs(he-j)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI):R(z,E.x,E.y,Math.abs(te-ae)*E.ovalScalar,Math.abs(he-j)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI);else if(E.shape==="star")for(var B=Math.PI/2*3,Pt=4*E.scalar,tt=8*E.scalar,it=E.x,Ge=E.y,xt=5,Fe=Math.PI/xt;xt--;)it=E.x+Math.cos(B)*tt,Ge=E.y+Math.sin(B)*tt,z.lineTo(it,Ge),B+=Fe,it=E.x+Math.cos(B)*Pt,Ge=E.y+Math.sin(B)*Pt,z.lineTo(it,Ge),B+=Fe;else z.moveTo(Math.floor(E.x),Math.floor(E.y)),z.lineTo(Math.floor(E.wobbleX),Math.floor(j)),z.lineTo(Math.floor(te),Math.floor(he)),z.lineTo(Math.floor(ae),Math.floor(E.wobbleY));return z.closePath(),z.fill(),E.tick<E.totalTicks}function fe(z,E,G,ae,j){var te=E.slice(),he=z.getContext("2d"),le,Te,Ce=p(function(Le){function Je(){le=Te=null,he.clearRect(0,0,ae.width,ae.height),_.clear(),j(),Le()}function et(){s&&!(ae.width===l.width&&ae.height===l.height)&&(ae.width=z.width=l.width,ae.height=z.height=l.height),!ae.width&&!ae.height&&(G(z),ae.width=z.width,ae.height=z.height),he.clearRect(0,0,ae.width,ae.height),te=te.filter(function(Ye){return ce(he,Ye)}),te.length?le=v.frame(et):Je()}le=v.frame(et),Te=Je});return{addFettis:function(Le){return te=te.concat(Le),Ce},canvas:z,promise:Ce,reset:function(){le&&v.cancel(le),Te&&Te()}}}function ye(z,E){var G=!z,ae=!!M(E||{},"resize"),j=!1,te=M(E,"disableForReducedMotion",Boolean),he=c&&!!M(E||{},"useWorker"),le=he?y():null,Te=G?I:q,Ce=z&&le?!!z.__confetti_initialized:!1,Le=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Je;function et(B,Pt,tt){for(var it=M(B,"particleCount",x),Ge=M(B,"angle",Number),xt=M(B,"spread",Number),Fe=M(B,"startVelocity",Number),P=M(B,"decay",Number),C=M(B,"gravity",Number),se=M(B,"drift",Number),ge=M(B,"colors",D),Ee=M(B,"ticks",Number),_e=M(B,"shapes"),je=M(B,"scalar"),Re=!!M(B,"flat"),ke=k(B),gt=it,we=[],He=z.width*ke.x,qe=z.height*ke.y;gt--;)we.push(V({x:He,y:qe,angle:Ge,spread:xt,startVelocity:Fe,color:ge[gt%ge.length],shape:_e[O(0,_e.length)],ticks:Ee,decay:P,gravity:C,drift:se,scalar:je,flat:Re}));return Je?Je.addFettis(we):(Je=fe(z,we,Te,Pt,tt),Je.promise)}function Ye(B){var Pt=te||M(B,"disableForReducedMotion",Boolean),tt=M(B,"zIndex",Number);if(Pt&&Le)return p(function(Fe){Fe()});G&&Je?z=Je.canvas:G&&!z&&(z=U(tt),document.body.appendChild(z)),ae&&!Ce&&Te(z);var it={width:z.width,height:z.height};le&&!Ce&&le.init(z),Ce=!0,le&&(z.__confetti_initialized=!0);function Ge(){if(le){var Fe={getBoundingClientRect:function(){if(!G)return z.getBoundingClientRect()}};Te(Fe),le.postMessage({resize:{width:Fe.width,height:Fe.height}});return}it.width=it.height=null}function xt(){Je=null,ae&&(j=!1,e.removeEventListener("resize",Ge)),G&&z&&(document.body.contains(z)&&document.body.removeChild(z),z=null,Ce=!1)}return ae&&!j&&(j=!0,e.addEventListener("resize",Ge,!1)),le?le.fire(B,it,xt):et(B,it,xt)}return Ye.reset=function(){le&&le.reset(),Je&&Je.reset()},Ye}var xe;function F(){return xe||(xe=ye(null,{useWorker:!0,resize:!0})),xe}function ee(z,E,G,ae,j,te,he){var le=new Path2D(z),Te=new Path2D;Te.addPath(le,new DOMMatrix(E));var Ce=new Path2D;return Ce.addPath(Te,new DOMMatrix([Math.cos(he)*j,Math.sin(he)*j,-Math.sin(he)*te,Math.cos(he)*te,G,ae])),Ce}function J(z){if(!d)throw new Error("path confetti are not supported in this browser");var E,G;typeof z=="string"?E=z:(E=z.path,G=z.matrix);var ae=new Path2D(E),j=document.createElement("canvas"),te=j.getContext("2d");if(!G){for(var he=1e3,le=he,Te=he,Ce=0,Le=0,Je,et,Ye=0;Ye<he;Ye+=2)for(var B=0;B<he;B+=2)te.isPointInPath(ae,Ye,B,"nonzero")&&(le=Math.min(le,Ye),Te=Math.min(Te,B),Ce=Math.max(Ce,Ye),Le=Math.max(Le,B));Je=Ce-le,et=Le-Te;var Pt=10,tt=Math.min(Pt/Je,Pt/et);G=[tt,0,0,tt,-Math.round(Je/2+le)*tt,-Math.round(et/2+Te)*tt]}return{type:"path",path:E,matrix:G}}function be(z){var E,G=1,ae="#000000",j='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof z=="string"?E=z:(E=z.text,G="scalar"in z?z.scalar:G,j="fontFamily"in z?z.fontFamily:j,ae="color"in z?z.color:ae);var te=10*G,he=""+te+"px "+j,le=new OffscreenCanvas(te,te),Te=le.getContext("2d");Te.font=he;var Ce=Te.measureText(E),Le=Math.ceil(Ce.actualBoundingBoxRight+Ce.actualBoundingBoxLeft),Je=Math.ceil(Ce.actualBoundingBoxAscent+Ce.actualBoundingBoxDescent),et=2,Ye=Ce.actualBoundingBoxLeft+et,B=Ce.actualBoundingBoxAscent+et;Le+=et+et,Je+=et+et,le=new OffscreenCanvas(Le,Je),Te=le.getContext("2d"),Te.font=he,Te.fillStyle=ae,Te.fillText(E,Ye,B);var Pt=1/G;return{type:"bitmap",bitmap:le.transferToImageBitmap(),matrix:[Pt,0,0,Pt,-Le*Pt/2,-Je*Pt/2]}}i.exports=function(){return F().apply(this,arguments)},i.exports.reset=function(){F().reset()},i.exports.create=ye,i.exports.shapeFromPath=J,i.exports.shapeFromText=be})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Jh,!1);const N2=Jh.exports;Jh.exports.create;const D2=({onOpenResume:o})=>{const[e,i]=nt.useState(!1),[s,l]=nt.useState({name:"",email:"",subject:"",message:""}),[c,d]=nt.useState(!1),[h,m]=nt.useState(!1),p=()=>{st.playClick(),navigator.clipboard.writeText(fn.email),i(!0),setTimeout(()=>i(!1),2500)},_=v=>{v.preventDefault(),st.playClick(),d(!0),setTimeout(()=>{d(!1),m(!0),N2({particleCount:80,spread:70,origin:{y:.7},colors:["#2457FF","#111111","#B8B8B3","#555555"]}),l({name:"",email:"",subject:"",message:""}),setTimeout(()=>m(!1),5e3)},1e3)};return g.jsxs("section",{id:"contact",className:"py-24 lg:py-36 border-b border-rule bg-canvas relative overflow-hidden",children:[g.jsx("span",{"aria-hidden":"true",className:"absolute -right-6 top-1/2 -translate-y-1/2 text-[16rem] sm:text-[22rem] lg:text-[28rem] font-display font-black text-ink/[0.025] select-none pointer-events-none tracking-tighter",children:"09"}),g.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-rule pb-4 reveal-on-scroll",children:[g.jsx("span",{className:"font-mono text-xs text-cobalt font-semibold tracking-widest uppercase",children:"09 // CONTACT & INQUIRIES"}),g.jsx("span",{className:"font-mono text-xs text-ink-muted tracking-widest uppercase",children:"DIRECT CHANNEL"})]}),g.jsxs("div",{className:"space-y-4 reveal-on-scroll delay-100",children:[g.jsxs("h2",{className:"text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-ink tracking-tighter uppercase leading-[0.9]",children:["Let's Build",g.jsx("br",{}),"Something."]}),g.jsx("p",{className:"font-sans text-base text-ink-muted max-w-xl",children:"Open for full-time software engineering opportunities, technical collaborations, and innovative project commissions."})]}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-6",children:[g.jsxs("div",{className:"lg:col-span-5 space-y-8 reveal-on-scroll delay-200",children:[g.jsxs("div",{className:"p-6 border border-rule bg-canvas space-y-4",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("span",{className:"font-mono text-xs text-ink font-semibold uppercase tracking-wider flex items-center gap-2",children:[g.jsx(tx,{className:"w-4 h-4 text-cobalt"}),"Primary Email"]}),g.jsx("span",{className:"font-mono text-[10px] text-emerald-600 font-semibold uppercase",children:"ACTIVE INBOX"})]}),g.jsxs("div",{className:"p-3.5 border border-rule bg-canvas-subtle/50 font-mono text-xs sm:text-sm text-ink flex items-center justify-between gap-3",children:[g.jsx("span",{className:"truncate",children:fn.email}),g.jsx("button",{onClick:p,"data-magnetic":!0,"data-cursor":"COPY",className:"p-1.5 border border-rule hover:border-ink bg-canvas text-ink transition-colors shrink-0",title:"Copy Email to Clipboard",children:e?g.jsx(yS,{className:"w-4 h-4 text-emerald-600"}):g.jsx(LS,{className:"w-4 h-4 text-cobalt"})})]}),e&&g.jsx("span",{className:"block font-mono text-xs text-emerald-600 animate-in fade-in",children:"✓ Copied to clipboard successfully!"})]}),g.jsxs("div",{className:"border border-rule divide-y divide-rule font-mono text-xs bg-canvas",children:[g.jsxs("div",{className:"p-4 flex items-center justify-between",children:[g.jsxs("span",{className:"text-ink-muted uppercase flex items-center gap-2",children:[g.jsx(ZS,{className:"w-3.5 h-3.5 text-cobalt"}),"PHONE:"]}),g.jsx("span",{className:"text-ink font-medium",children:fn.phone})]}),g.jsxs("div",{className:"p-4 flex items-center justify-between",children:[g.jsxs("span",{className:"text-ink-muted uppercase flex items-center gap-2",children:[g.jsx(nx,{className:"w-3.5 h-3.5 text-cobalt"}),"LOCATION:"]}),g.jsx("span",{className:"text-ink font-medium",children:"Madurai / Chennai, India"})]})]}),g.jsxs("div",{className:"space-y-3",children:[g.jsx("span",{className:"font-mono text-xs uppercase tracking-widest text-ink-muted block",children:"Network & Repositories"}),g.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[g.jsxs("a",{href:fn.linkedin,target:"_blank",rel:"noopener noreferrer",onClick:()=>st.playClick(),"data-magnetic":!0,"data-cursor":"OPEN ↗",className:"p-3 border border-rule hover:border-ink text-center space-y-1 group transition-colors",children:[g.jsx(ex,{className:"w-4 h-4 mx-auto text-cobalt group-hover:scale-110 transition-transform"}),g.jsx("span",{className:"block font-mono text-[11px] uppercase text-ink font-medium",children:"LinkedIn"})]}),g.jsxs("a",{href:fn.github,target:"_blank",rel:"noopener noreferrer",onClick:()=>st.playClick(),"data-magnetic":!0,"data-cursor":"OPEN ↗",className:"p-3 border border-rule hover:border-ink text-center space-y-1 group transition-colors",children:[g.jsx(Xc,{className:"w-4 h-4 mx-auto text-ink group-hover:scale-110 transition-transform"}),g.jsx("span",{className:"block font-mono text-[11px] uppercase text-ink font-medium",children:"GitHub"})]}),g.jsxs("button",{onClick:()=>{st.playClick(),o()},"data-magnetic":!0,"data-cursor":"RESUME",className:"p-3 border border-rule hover:border-ink text-center space-y-1 group transition-colors",children:[g.jsx(Fo,{className:"w-4 h-4 mx-auto text-cobalt group-hover:scale-110 transition-transform"}),g.jsx("span",{className:"block font-mono text-[11px] uppercase text-ink font-medium",children:"Resume"})]})]})]})]}),g.jsxs("div",{className:"lg:col-span-7 border border-rule bg-canvas p-6 sm:p-8 lg:p-10 space-y-6 reveal-on-scroll delay-300",children:[g.jsxs("div",{className:"border-b border-rule pb-4",children:[g.jsx("h3",{className:"font-display font-bold text-xl text-ink",children:"Send Direct Message"}),g.jsx("p",{className:"font-sans text-xs text-ink-muted",children:"Typical response time within 24 hours."})]}),g.jsxs("form",{onSubmit:_,className:"space-y-4",children:[g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[g.jsxs("div",{className:"space-y-1.5",children:[g.jsx("label",{htmlFor:"name",className:"block font-mono text-xs uppercase tracking-wider text-ink font-medium",children:"Name *"}),g.jsx("input",{type:"text",id:"name",required:!0,value:s.name,onChange:v=>l({...s,name:v.target.value}),placeholder:"e.g. Alex Morgan",className:"w-full px-3.5 py-2.5 border border-rule bg-canvas-subtle/30 text-ink text-sm font-sans focus:outline-none focus:border-cobalt transition-colors"})]}),g.jsxs("div",{className:"space-y-1.5",children:[g.jsx("label",{htmlFor:"email",className:"block font-mono text-xs uppercase tracking-wider text-ink font-medium",children:"Email Address *"}),g.jsx("input",{type:"email",id:"email",required:!0,value:s.email,onChange:v=>l({...s,email:v.target.value}),placeholder:"alex@company.com",className:"w-full px-3.5 py-2.5 border border-rule bg-canvas-subtle/30 text-ink text-sm font-sans focus:outline-none focus:border-cobalt transition-colors"})]})]}),g.jsxs("div",{className:"space-y-1.5",children:[g.jsx("label",{htmlFor:"subject",className:"block font-mono text-xs uppercase tracking-wider text-ink font-medium",children:"Subject"}),g.jsx("input",{type:"text",id:"subject",value:s.subject,onChange:v=>l({...s,subject:v.target.value}),placeholder:"e.g. Software Engineer Opportunity / Project Inquiry",className:"w-full px-3.5 py-2.5 border border-rule bg-canvas-subtle/30 text-ink text-sm font-sans focus:outline-none focus:border-cobalt transition-colors"})]}),g.jsxs("div",{className:"space-y-1.5",children:[g.jsx("label",{htmlFor:"message",className:"block font-mono text-xs uppercase tracking-wider text-ink font-medium",children:"Message *"}),g.jsx("textarea",{id:"message",required:!0,rows:4,value:s.message,onChange:v=>l({...s,message:v.target.value}),placeholder:"Provide brief details regarding your inquiry...",className:"w-full px-3.5 py-2.5 border border-rule bg-canvas-subtle/30 text-ink text-sm font-sans focus:outline-none focus:border-cobalt transition-colors resize-none"})]}),g.jsx("button",{type:"submit",disabled:c,"data-magnetic":!0,"data-cursor":"TRANSMIT",className:"w-full sm:w-auto px-8 py-3.5 bg-ink text-canvas font-mono text-xs uppercase tracking-widest hover:bg-cobalt transition-colors flex items-center justify-center gap-2 font-semibold disabled:opacity-50",children:c?g.jsx("span",{children:"Dispatching..."}):g.jsxs(g.Fragment,{children:[g.jsx($S,{className:"w-4 h-4"}),g.jsx("span",{children:"Transmit Message"})]})}),h&&g.jsxs("div",{className:"p-4 border border-emerald-500/40 bg-emerald-50 text-emerald-800 font-mono text-xs space-y-1 animate-in fade-in",children:[g.jsx("p",{className:"font-bold",children:"✓ Message Received!"}),g.jsx("p",{className:"text-[11px]",children:"Thank you for reaching out. I will respond to your email promptly."})]})]})]})]})]})]})},L2=()=>{const o=()=>{st.playClick(),window.scrollTo({top:0,behavior:"smooth"})};return g.jsx("footer",{className:"py-12 lg:py-16 bg-canvas border-t border-rule",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12 space-y-12",children:[g.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-rule",children:[g.jsxs("div",{className:"space-y-1",children:[g.jsx("span",{className:"font-display font-bold text-2xl text-ink tracking-tight block",children:fn.name}),g.jsx("span",{className:"font-mono text-xs text-ink-muted uppercase tracking-widest block",children:fn.title})]}),g.jsxs("div",{className:"flex flex-wrap items-center gap-6",children:[g.jsx("a",{href:fn.github,target:"_blank",rel:"noopener noreferrer",className:"font-mono text-xs text-ink-muted hover:text-ink uppercase tracking-widest transition-colors",children:"GitHub"}),g.jsx("a",{href:fn.linkedin,target:"_blank",rel:"noopener noreferrer",className:"font-mono text-xs text-ink-muted hover:text-ink uppercase tracking-widest transition-colors",children:"LinkedIn"}),g.jsx("a",{href:`mailto:${fn.email}`,className:"font-mono text-xs text-ink-muted hover:text-ink uppercase tracking-widest transition-colors",children:"Email"}),g.jsx("button",{onClick:o,className:"p-2 border border-rule hover:border-ink hover:bg-ink hover:text-canvas transition-colors ml-2",title:"Return to Top of Document","aria-label":"Back to top",children:g.jsx(mS,{className:"w-4 h-4"})})]})]}),g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-[11px] text-ink-muted",children:[g.jsxs("div",{children:[g.jsx("span",{className:"block text-ink font-medium uppercase",children:"COORDINATES"}),g.jsx("span",{children:fn.coordinates})]}),g.jsxs("div",{className:"sm:text-center",children:[g.jsx("span",{className:"block text-ink font-medium uppercase",children:"TYPOGRAPHY & DESIGN"}),g.jsx("span",{children:"SPACE GROTESK · INTER · JETBRAINS MONO"})]}),g.jsxs("div",{className:"sm:text-right",children:[g.jsx("span",{className:"block text-ink font-medium uppercase",children:"COPYRIGHT"}),g.jsxs("span",{children:["© ",new Date().getFullYear()," PAUL NIHIL. ALL RIGHTS RESERVED."]})]})]})]})})},U2=({isOpen:o,onClose:e,onOpenResume:i})=>{const[s,l]=nt.useState(""),[c,d]=nt.useState(['Type "help" for a list of available commands or search sections directly.']),h=nt.useRef(null);if(nt.useEffect(()=>{const v=y=>{(y.metaKey||y.ctrlKey)&&y.key.toLowerCase()==="k"?(y.preventDefault(),st.playClick(),o?e():l("")):y.key==="Escape"&&o&&e()};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[o,e]),nt.useEffect(()=>{o&&setTimeout(()=>{var v;return(v=h.current)==null?void 0:v.focus()},50)},[o]),!o)return null;const m=v=>{st.playClick();const y=v.trim().toLowerCase();if(y==="clear"){d([]),l("");return}if(y==="help"){d(b=>[...b,`> ${v}`,"AVAILABLE COMMANDS: help, projects, skills, certs, bio, resume, contact, sudo hire, clear"]),l("");return}if(y==="projects"){d(b=>[...b,`> ${v}`,"PROJECTS: 01 Smart Traffic Signal (AI), 02 FinTech (SMS Analytics), 03 ApproveX (Campus Workflow)"]),l("");return}if(y==="skills"){d(b=>[...b,`> ${v}`,"TECH: Java, Python, SQL, PL/SQL, C, JavaScript, React, MySQL, OpenCV, Figma, Git"]),l("");return}if(y==="certs"){d(b=>[...b,`> ${v}`,"CERTIFICATIONS: Oracle SQL, Oracle PL/SQL, Java Professional (Udemy), Figma UI/UX Workshop"]),l("");return}if(y==="bio"){d(b=>[...b,`> ${v}`,`BIO: ${fn.name} — ${fn.title} @ Loyola-ICAM (LICET)`]),l("");return}if(y==="resume"){e(),i();return}if(y.includes("hire")){d(b=>[...b,`> ${v}`,"⚡ STATUS: ACCESS GRANTED. Sending priority connection to paulnihil20@gmail.com. Let's build something extraordinary!"]),l("");return}d(b=>[...b,`> ${v}`,`Executing search for: "${v}"... Use navigation list below or type 'help'.`])},_=[{title:"Selected Work // Projects",section:"#work",icon:Gd},{title:"About // Background & Telemetry",section:"#about",icon:zo},{title:"Skills // Technical Matrix",section:"#skills",icon:zo},{title:"Chronology // Education Timeline",section:"#timeline",icon:zo},{title:"Archive // Verified Certificates",section:"#certificates",icon:zo},{title:"Shader Lab // WebGL Experiments",section:"#playground",icon:Gd},{title:"Direct Contact // Transmission Hub",section:"#contact",icon:tx}].filter(v=>v.title.toLowerCase().includes(s.toLowerCase()));return g.jsxs("div",{className:"fixed inset-0 z-[110] flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-200",children:[g.jsx("div",{className:"absolute inset-0 bg-ink/75 backdrop-blur-md",onClick:()=>{st.playClick(),e()}}),g.jsxs("div",{className:"relative w-full max-w-2xl bg-canvas border border-rule shadow-2xl overflow-hidden z-10 space-y-4",children:[g.jsxs("div",{className:"p-4 border-b border-rule flex items-center gap-3 bg-canvas",children:[g.jsx(QS,{className:"w-5 h-5 text-cobalt shrink-0"}),g.jsx("input",{ref:h,type:"text",value:s,onChange:v=>l(v.target.value),onKeyDown:v=>{v.key==="Enter"&&s.trim()&&m(s)},placeholder:"Type a command (help, skills, hire) or search sections...",className:"w-full bg-transparent font-mono text-sm text-ink placeholder:text-ink-muted focus:outline-none"}),g.jsx("button",{onClick:()=>{st.playClick(),e()},className:"p-1 border border-rule hover:border-ink text-ink-muted hover:text-ink transition-colors",children:g.jsx(Go,{className:"w-4 h-4"})})]}),c.length>0&&g.jsx("div",{className:"px-5 py-3 max-h-36 overflow-y-auto font-mono text-xs text-ink bg-canvas-subtle/50 border-b border-rule space-y-1",children:c.map((v,y)=>g.jsx("p",{className:v.startsWith(">")?"text-cobalt font-bold":"text-ink-muted",children:v},y))}),g.jsxs("div",{className:"p-4 space-y-2 max-h-60 overflow-y-auto",children:[g.jsxs("span",{className:"font-mono text-[10px] uppercase tracking-widest text-ink-muted block px-2",children:["Navigation Actions (",_.length,")"]}),_.map(v=>{const y=v.icon;return g.jsxs("a",{href:v.section,onClick:()=>{st.playClick(),e()},className:"flex items-center justify-between p-3 border border-rule/50 hover:border-ink hover:bg-canvas-subtle/40 transition-colors group",children:[g.jsxs("div",{className:"flex items-center gap-3 font-mono text-xs text-ink",children:[g.jsx(y,{className:"w-4 h-4 text-cobalt"}),g.jsx("span",{children:v.title})]}),g.jsx(Kv,{className:"w-3.5 h-3.5 text-ink-muted group-hover:text-ink group-hover:translate-x-0.5 transition-transform"})]},v.title)})]}),g.jsxs("div",{className:"p-4 border-t border-rule bg-canvas-subtle/30 flex flex-wrap items-center justify-between gap-3 font-mono text-xs",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsxs("button",{onClick:()=>{e(),i()},className:"flex items-center gap-1.5 text-ink hover:text-cobalt transition-colors",children:[g.jsx(Fo,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Resume PDF"})]}),g.jsx("span",{children:"·"}),g.jsxs("a",{href:fn.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 text-ink hover:text-cobalt transition-colors",children:[g.jsx(Xc,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"GitHub"})]}),g.jsx("span",{children:"·"}),g.jsxs("a",{href:fn.linkedin,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 text-ink hover:text-cobalt transition-colors",children:[g.jsx(ex,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"LinkedIn"})]})]}),g.jsx("span",{className:"text-[10px] text-ink-muted hidden sm:inline",children:"PRESS ESC TO EXIT"})]})]})]})},O2=({isOpen:o,onClose:e})=>(nt.useEffect(()=>{const i=s=>{s.key==="Escape"&&e()};return o&&(document.body.style.overflow="hidden",window.addEventListener("keydown",i)),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",i)}},[o,e]),o?g.jsxs("div",{className:"fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-in fade-in duration-200",children:[g.jsx("div",{className:"absolute inset-0 bg-ink/75 backdrop-blur-md",onClick:()=>{st.playClick(),e()}}),g.jsxs("div",{className:"relative w-full max-w-4xl max-h-[92vh] bg-canvas border border-rule overflow-y-auto z-10 shadow-2xl space-y-6 p-6 sm:p-8",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-rule pb-4",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx(Fo,{className:"w-5 h-5 text-cobalt"}),g.jsx("span",{className:"font-mono text-xs uppercase tracking-widest text-ink font-bold",children:"CURRICULUM VITAE // PAUL NIHIL"})]}),g.jsx("button",{onClick:()=>{st.playClick(),e()},className:"p-2 border border-rule hover:border-ink hover:bg-ink hover:text-canvas transition-colors","aria-label":"Close Resume Viewer",children:g.jsx(Go,{className:"w-5 h-5"})})]}),g.jsx("div",{className:"border border-rule bg-canvas-subtle h-[500px] sm:h-[580px] overflow-hidden relative",children:g.jsx("iframe",{src:fn.resumePdf,title:"Paul Nihil Resume PDF",className:"w-full h-full border-none"})}),g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-rule",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsxs("a",{href:fn.resumePdf,download:!0,onClick:()=>st.playClick(),className:"inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-canvas font-mono text-xs uppercase tracking-widest hover:bg-cobalt transition-colors font-semibold",children:[g.jsx($v,{className:"w-4 h-4"}),g.jsx("span",{children:"Download PDF File"})]}),g.jsxs("a",{href:fn.resumePdf,target:"_blank",rel:"noopener noreferrer",onClick:()=>st.playClick(),className:"inline-flex items-center gap-2 px-4 py-2.5 border border-rule hover:border-ink text-ink font-mono text-xs uppercase tracking-widest transition-colors",children:[g.jsx(Uh,{className:"w-4 h-4 text-cobalt"}),g.jsx("span",{children:"Open in Browser Tab"})]})]}),g.jsx("button",{onClick:()=>{st.playClick(),e()},className:"font-mono text-xs uppercase tracking-widest text-ink-muted hover:text-ink transition-colors",children:"Close Viewer"})]})]})]}):null),P2=()=>{nt.useEffect(()=>{const o=(s,l)=>{s.forEach(c=>{c.isIntersecting&&(c.target.classList.add("revealed"),l.unobserve(c.target))})},e=new IntersectionObserver(o,{threshold:.12,rootMargin:"0px 0px -40px 0px"});return document.querySelectorAll(".reveal-on-scroll, .line-reveal").forEach(s=>e.observe(s)),()=>e.disconnect()},[])},I2=()=>{const[o,e]=nt.useState(!1),[i,s]=nt.useState(!1);return P2(),g.jsxs("div",{className:"min-h-screen bg-canvas text-ink font-sans selection:bg-cobalt selection:text-white editorial-grid-bg relative",children:[g.jsx(rS,{}),g.jsx(sS,{}),g.jsx(uM,{onOpenCommandPalette:()=>e(!0),onOpenResume:()=>s(!0)}),g.jsxs("main",{children:[g.jsx(x2,{onOpenTerminal:()=>e(!0)}),g.jsx(_2,{}),g.jsx(S2,{}),g.jsx(M2,{}),g.jsx(E2,{}),g.jsx(T2,{}),g.jsx(w2,{}),g.jsx(R2,{}),g.jsx(D2,{onOpenResume:()=>s(!0)})]}),g.jsx(L2,{}),g.jsx(U2,{isOpen:o,onClose:()=>e(!1),onOpenResume:()=>s(!0)}),g.jsx(O2,{isOpen:i,onClose:()=>s(!1)})]})};aS.createRoot(document.getElementById("root")).render(g.jsx(Ky.StrictMode,{children:g.jsx(I2,{})}));
