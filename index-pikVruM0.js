(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function zP(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var J_={exports:{}},Kc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rb;function FP(){if(Rb)return Kc;Rb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,o){var u=null;if(o!==void 0&&(u=""+o),a.key!==void 0&&(u=""+a.key),"key"in a){o={};for(var d in a)d!=="key"&&(o[d]=a[d])}else o=a;return a=o.ref,{$$typeof:n,type:r,key:u,ref:a!==void 0?a:null,props:o}}return Kc.Fragment=e,Kc.jsx=t,Kc.jsxs=t,Kc}var Cb;function jP(){return Cb||(Cb=1,J_.exports=FP()),J_.exports}var J=jP(),ey={exports:{}},Qc={},ty={exports:{}},ny={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xb;function qP(){return xb||(xb=1,function(n){function e(de,Ie){var we=de.length;de.push(Ie);e:for(;0<we;){var Oe=we-1>>>1,O=de[Oe];if(0<a(O,Ie))de[Oe]=Ie,de[we]=O,we=Oe;else break e}}function t(de){return de.length===0?null:de[0]}function r(de){if(de.length===0)return null;var Ie=de[0],we=de.pop();if(we!==Ie){de[0]=we;e:for(var Oe=0,O=de.length,ie=O>>>1;Oe<ie;){var _e=2*(Oe+1)-1,me=de[_e],pe=_e+1,xe=de[pe];if(0>a(me,we))pe<O&&0>a(xe,me)?(de[Oe]=xe,de[pe]=we,Oe=pe):(de[Oe]=me,de[_e]=we,Oe=_e);else if(pe<O&&0>a(xe,we))de[Oe]=xe,de[pe]=we,Oe=pe;else break e}}return Ie}function a(de,Ie){var we=de.sortIndex-Ie.sortIndex;return we!==0?we:de.id-Ie.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var p=[],m=[],y=1,v=null,w=3,S=!1,D=!1,U=!1,L=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function $(de){for(var Ie=t(m);Ie!==null;){if(Ie.callback===null)r(m);else if(Ie.startTime<=de)r(m),Ie.sortIndex=Ie.expirationTime,e(p,Ie);else break;Ie=t(m)}}function oe(de){if(U=!1,$(de),!D)if(t(p)!==null)D=!0,Nt();else{var Ie=t(m);Ie!==null&&It(oe,Ie.startTime-de)}}var ae=!1,le=-1,x=5,R=-1;function A(){return!(n.unstable_now()-R<x)}function P(){if(ae){var de=n.unstable_now();R=de;var Ie=!0;try{e:{D=!1,U&&(U=!1,H(le),le=-1),S=!0;var we=w;try{t:{for($(de),v=t(p);v!==null&&!(v.expirationTime>de&&A());){var Oe=v.callback;if(typeof Oe=="function"){v.callback=null,w=v.priorityLevel;var O=Oe(v.expirationTime<=de);if(de=n.unstable_now(),typeof O=="function"){v.callback=O,$(de),Ie=!0;break t}v===t(p)&&r(p),$(de)}else r(p);v=t(p)}if(v!==null)Ie=!0;else{var ie=t(m);ie!==null&&It(oe,ie.startTime-de),Ie=!1}}break e}finally{v=null,w=we,S=!1}Ie=void 0}}finally{Ie?V():ae=!1}}}var V;if(typeof W=="function")V=function(){W(P)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,N=z.port2;z.port1.onmessage=P,V=function(){N.postMessage(null)}}else V=function(){L(P,0)};function Nt(){ae||(ae=!0,V())}function It(de,Ie){le=L(function(){de(n.unstable_now())},Ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(de){de.callback=null},n.unstable_continueExecution=function(){D||S||(D=!0,Nt())},n.unstable_forceFrameRate=function(de){0>de||125<de?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<de?Math.floor(1e3/de):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(de){switch(w){case 1:case 2:case 3:var Ie=3;break;default:Ie=w}var we=w;w=Ie;try{return de()}finally{w=we}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(de,Ie){switch(de){case 1:case 2:case 3:case 4:case 5:break;default:de=3}var we=w;w=de;try{return Ie()}finally{w=we}},n.unstable_scheduleCallback=function(de,Ie,we){var Oe=n.unstable_now();switch(typeof we=="object"&&we!==null?(we=we.delay,we=typeof we=="number"&&0<we?Oe+we:Oe):we=Oe,de){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=we+O,de={id:y++,callback:Ie,priorityLevel:de,startTime:we,expirationTime:O,sortIndex:-1},we>Oe?(de.sortIndex=we,e(m,de),t(p)===null&&de===t(m)&&(U?(H(le),le=-1):U=!0,It(oe,we-Oe))):(de.sortIndex=O,e(p,de),D||S||(D=!0,Nt())),de},n.unstable_shouldYield=A,n.unstable_wrapCallback=function(de){var Ie=w;return function(){var we=w;w=Ie;try{return de.apply(this,arguments)}finally{w=we}}}}(ny)),ny}var Db;function HP(){return Db||(Db=1,ty.exports=qP()),ty.exports}var ry={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pb;function GP(){if(Pb)return Ne;Pb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function w(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,U={};function L(O,ie,_e){this.props=O,this.context=ie,this.refs=U,this.updater=_e||S}L.prototype.isReactComponent={},L.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},L.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function H(){}H.prototype=L.prototype;function W(O,ie,_e){this.props=O,this.context=ie,this.refs=U,this.updater=_e||S}var $=W.prototype=new H;$.constructor=W,D($,L.prototype),$.isPureReactComponent=!0;var oe=Array.isArray,ae={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function x(O,ie,_e,me,pe,xe){return _e=xe.ref,{$$typeof:n,type:O,key:ie,ref:_e!==void 0?_e:null,props:xe}}function R(O,ie){return x(O.type,ie,void 0,void 0,void 0,O.props)}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function P(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(_e){return ie[_e]})}var V=/\/+/g;function z(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?P(""+O.key):ie.toString(36)}function N(){}function Nt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function It(O,ie,_e,me,pe){var xe=typeof O;(xe==="undefined"||xe==="boolean")&&(O=null);var Ce=!1;if(O===null)Ce=!0;else switch(xe){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(O.$$typeof){case n:case e:Ce=!0;break;case y:return Ce=O._init,It(Ce(O._payload),ie,_e,me,pe)}}if(Ce)return pe=pe(O),Ce=me===""?"."+z(O,0):me,oe(pe)?(_e="",Ce!=null&&(_e=Ce.replace(V,"$&/")+"/"),It(pe,ie,_e,"",function(Ze){return Ze})):pe!=null&&(A(pe)&&(pe=R(pe,_e+(pe.key==null||O&&O.key===pe.key?"":(""+pe.key).replace(V,"$&/")+"/")+Ce)),ie.push(pe)),1;Ce=0;var ut=me===""?".":me+":";if(oe(O))for(var Me=0;Me<O.length;Me++)me=O[Me],xe=ut+z(me,Me),Ce+=It(me,ie,_e,xe,pe);else if(Me=w(O),typeof Me=="function")for(O=Me.call(O),Me=0;!(me=O.next()).done;)me=me.value,xe=ut+z(me,Me++),Ce+=It(me,ie,_e,xe,pe);else if(xe==="object"){if(typeof O.then=="function")return It(Nt(O),ie,_e,me,pe);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function de(O,ie,_e){if(O==null)return O;var me=[],pe=0;return It(O,me,"","",function(xe){return ie.call(_e,xe,pe++)}),me}function Ie(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(_e){(O._status===0||O._status===-1)&&(O._status=1,O._result=_e)},function(_e){(O._status===0||O._status===-1)&&(O._status=2,O._result=_e)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var we=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Oe(){}return Ne.Children={map:de,forEach:function(O,ie,_e){de(O,function(){ie.apply(this,arguments)},_e)},count:function(O){var ie=0;return de(O,function(){ie++}),ie},toArray:function(O){return de(O,function(ie){return ie})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ne.Component=L,Ne.Fragment=t,Ne.Profiler=a,Ne.PureComponent=W,Ne.StrictMode=r,Ne.Suspense=p,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,Ne.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ne.cache=function(O){return function(){return O.apply(null,arguments)}},Ne.cloneElement=function(O,ie,_e){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var me=D({},O.props),pe=O.key,xe=void 0;if(ie!=null)for(Ce in ie.ref!==void 0&&(xe=void 0),ie.key!==void 0&&(pe=""+ie.key),ie)!le.call(ie,Ce)||Ce==="key"||Ce==="__self"||Ce==="__source"||Ce==="ref"&&ie.ref===void 0||(me[Ce]=ie[Ce]);var Ce=arguments.length-2;if(Ce===1)me.children=_e;else if(1<Ce){for(var ut=Array(Ce),Me=0;Me<Ce;Me++)ut[Me]=arguments[Me+2];me.children=ut}return x(O.type,pe,void 0,void 0,xe,me)},Ne.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:o,_context:O},O},Ne.createElement=function(O,ie,_e){var me,pe={},xe=null;if(ie!=null)for(me in ie.key!==void 0&&(xe=""+ie.key),ie)le.call(ie,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(pe[me]=ie[me]);var Ce=arguments.length-2;if(Ce===1)pe.children=_e;else if(1<Ce){for(var ut=Array(Ce),Me=0;Me<Ce;Me++)ut[Me]=arguments[Me+2];pe.children=ut}if(O&&O.defaultProps)for(me in Ce=O.defaultProps,Ce)pe[me]===void 0&&(pe[me]=Ce[me]);return x(O,xe,void 0,void 0,null,pe)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(O){return{$$typeof:d,render:O}},Ne.isValidElement=A,Ne.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:Ie}},Ne.memo=function(O,ie){return{$$typeof:m,type:O,compare:ie===void 0?null:ie}},Ne.startTransition=function(O){var ie=ae.T,_e={};ae.T=_e;try{var me=O(),pe=ae.S;pe!==null&&pe(_e,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(Oe,we)}catch(xe){we(xe)}finally{ae.T=ie}},Ne.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},Ne.use=function(O){return ae.H.use(O)},Ne.useActionState=function(O,ie,_e){return ae.H.useActionState(O,ie,_e)},Ne.useCallback=function(O,ie){return ae.H.useCallback(O,ie)},Ne.useContext=function(O){return ae.H.useContext(O)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(O,ie){return ae.H.useDeferredValue(O,ie)},Ne.useEffect=function(O,ie){return ae.H.useEffect(O,ie)},Ne.useId=function(){return ae.H.useId()},Ne.useImperativeHandle=function(O,ie,_e){return ae.H.useImperativeHandle(O,ie,_e)},Ne.useInsertionEffect=function(O,ie){return ae.H.useInsertionEffect(O,ie)},Ne.useLayoutEffect=function(O,ie){return ae.H.useLayoutEffect(O,ie)},Ne.useMemo=function(O,ie){return ae.H.useMemo(O,ie)},Ne.useOptimistic=function(O,ie){return ae.H.useOptimistic(O,ie)},Ne.useReducer=function(O,ie,_e){return ae.H.useReducer(O,ie,_e)},Ne.useRef=function(O){return ae.H.useRef(O)},Ne.useState=function(O){return ae.H.useState(O)},Ne.useSyncExternalStore=function(O,ie,_e){return ae.H.useSyncExternalStore(O,ie,_e)},Ne.useTransition=function(){return ae.H.useTransition()},Ne.version="19.0.0",Ne}var Nb;function Cv(){return Nb||(Nb=1,ry.exports=GP()),ry.exports}var iy={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ob;function $P(){if(Ob)return wn;Ob=1;var n=Cv();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function o(p,m,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:v==null?null:""+v,children:p,containerInfo:m,implementation:y}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return o(p,m,null,y)},wn.flushSync=function(p){var m=u.T,y=r.p;try{if(u.T=null,r.p=2,p)return p()}finally{u.T=m,r.p=y,r.d.f()}},wn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},wn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},wn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,v=d(y,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:S}):y==="script"&&r.d.X(p,{crossOrigin:v,integrity:w,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},wn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,v=d(y,m.crossOrigin);r.d.L(p,y,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wn.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},wn.requestFormReset=function(p){r.d.r(p)},wn.unstable_batchedUpdates=function(p,m){return p(m)},wn.useFormState=function(p,m,y){return u.H.useFormState(p,m,y)},wn.useFormStatus=function(){return u.H.useHostTransitionStatus()},wn.version="19.0.0",wn}var kb;function KP(){if(kb)return iy.exports;kb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),iy.exports=$P(),iy.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vb;function QP(){if(Vb)return Qc;Vb=1;var n=HP(),e=Cv(),t=KP();function r(i){var s="https://react.dev/errors/"+i;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}var o=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),S=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),oe=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=ae&&i[ae]||i["@@iterator"],typeof i=="function"?i:null)}var x=Symbol.for("react.client.reference");function R(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===x?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case p:return"Fragment";case d:return"Portal";case y:return"Profiler";case m:return"StrictMode";case U:return"Suspense";case L:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case S:return(i.displayName||"Context")+".Provider";case w:return(i._context.displayName||"Context")+".Consumer";case D:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case H:return s=i.displayName||null,s!==null?s:R(i.type)||"Memo";case W:s=i._payload,i=i._init;try{return R(i(s))}catch{}}return null}var A=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=Object.assign,V,z;function N(i){if(V===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||"",z=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+i+z}var Nt=!1;function It(i,s){if(!i||Nt)return"";Nt=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(Y){var G=Y}Reflect.construct(i,[],ne)}else{try{ne.call()}catch(Y){G=Y}i.call(ne.prototype)}}else{try{throw Error()}catch(Y){G=Y}(ne=i())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(Y){if(Y&&G&&typeof Y.stack=="string")return[Y.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],b=g[1];if(T&&b){var C=T.split(`
`),M=b.split(`
`);for(f=c=0;c<C.length&&!C[c].includes("DetermineComponentFrameRoot");)c++;for(;f<M.length&&!M[f].includes("DetermineComponentFrameRoot");)f++;if(c===C.length||f===M.length)for(c=C.length-1,f=M.length-1;1<=c&&0<=f&&C[c]!==M[f];)f--;for(;1<=c&&0<=f;c--,f--)if(C[c]!==M[f]){if(c!==1||f!==1)do if(c--,f--,0>f||C[c]!==M[f]){var Z=`
`+C[c].replace(" at new "," at ");return i.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",i.displayName)),Z}while(1<=c&&0<=f);break}}}finally{Nt=!1,Error.prepareStackTrace=l}return(l=i?i.displayName||i.name:"")?N(l):""}function de(i){switch(i.tag){case 26:case 27:case 5:return N(i.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 15:return i=It(i.type,!1),i;case 11:return i=It(i.type.render,!1),i;case 1:return i=It(i.type,!0),i;default:return""}}function Ie(i){try{var s="";do s+=de(i),i=i.return;while(i);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function we(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Oe(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function O(i){if(we(i)!==i)throw Error(r(188))}function ie(i){var s=i.alternate;if(!s){if(s=we(i),s===null)throw Error(r(188));return s!==i?null:i}for(var l=i,c=s;;){var f=l.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){l=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===l)return O(f),i;if(g===c)return O(f),s;g=g.sibling}throw Error(r(188))}if(l.return!==c.return)l=f,c=g;else{for(var T=!1,b=f.child;b;){if(b===l){T=!0,l=f,c=g;break}if(b===c){T=!0,c=f,l=g;break}b=b.sibling}if(!T){for(b=g.child;b;){if(b===l){T=!0,l=g,c=f;break}if(b===c){T=!0,c=g,l=f;break}b=b.sibling}if(!T)throw Error(r(189))}}if(l.alternate!==c)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?i:s}function _e(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i;for(i=i.child;i!==null;){if(s=_e(i),s!==null)return s;i=i.sibling}return null}var me=Array.isArray,pe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xe={pending:!1,data:null,method:null,action:null},Ce=[],ut=-1;function Me(i){return{current:i}}function Ze(i){0>ut||(i.current=Ce[ut],Ce[ut]=null,ut--)}function Ke(i,s){ut++,Ce[ut]=i.current,i.current=s}var Ut=Me(null),Jt=Me(null),rr=Me(null),as=Me(null);function os(i,s){switch(Ke(rr,s),Ke(Jt,i),Ke(Ut,null),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)&&(s=s.namespaceURI)?nb(s):0;break;default:if(i=i===8?s.parentNode:s,s=i.tagName,i=i.namespaceURI)i=nb(i),s=rb(i,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}Ze(Ut),Ke(Ut,s)}function _i(){Ze(Ut),Ze(Jt),Ze(rr)}function ju(i){i.memoizedState!==null&&Ke(as,i);var s=Ut.current,l=rb(s,i.type);s!==l&&(Ke(Jt,i),Ke(Ut,l))}function Fo(i){Jt.current===i&&(Ze(Ut),Ze(Jt)),as.current===i&&(Ze(as),jc._currentValue=xe)}var jo=Object.prototype.hasOwnProperty,Ia=n.unstable_scheduleCallback,qo=n.unstable_cancelCallback,tg=n.unstable_shouldYield,qu=n.unstable_requestPaint,Ln=n.unstable_now,Sd=n.unstable_getCurrentPriorityLevel,Gt=n.unstable_ImmediatePriority,en=n.unstable_UserBlockingPriority,yi=n.unstable_NormalPriority,Rd=n.unstable_LowPriority,Hu=n.unstable_IdlePriority,ng=n.log,Aa=n.unstable_setDisableYieldValue,ls=null,En=null;function Gu(i){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(ls,i,void 0,(i.current.flags&128)===128)}catch{}}function Vr(i){if(typeof ng=="function"&&Aa(i),En&&typeof En.setStrictMode=="function")try{En.setStrictMode(ls,i)}catch{}}var Rn=Math.clz32?Math.clz32:xd,$u=Math.log,Cd=Math.LN2;function xd(i){return i>>>=0,i===0?32:31-($u(i)/Cd|0)|0}var Mr=128,us=4194304;function Ir(i){var s=i&42;if(s!==0)return s;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function ir(i,s){var l=i.pendingLanes;if(l===0)return 0;var c=0,f=i.suspendedLanes,g=i.pingedLanes,T=i.warmLanes;i=i.finishedLanes!==0;var b=l&134217727;return b!==0?(l=b&~f,l!==0?c=Ir(l):(g&=b,g!==0?c=Ir(g):i||(T=b&~T,T!==0&&(c=Ir(T))))):(b=l&~f,b!==0?c=Ir(b):g!==0?c=Ir(g):i||(T=l&~T,T!==0&&(c=Ir(T)))),c===0?0:s!==0&&s!==c&&(s&f)===0&&(f=c&-c,T=s&-s,f>=T||f===32&&(T&4194176)!==0)?s:c}function cs(i,s){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&s)===0}function Ho(i,s){switch(i){case 1:case 2:case 4:case 8:return s+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ku(){var i=Mr;return Mr<<=1,(Mr&4194176)===0&&(Mr=128),i}function hs(){var i=us;return us<<=1,(us&62914560)===0&&(us=4194304),i}function Go(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Ot(i,s){i.pendingLanes|=s,s!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Dd(i,s,l,c,f,g){var T=i.pendingLanes;i.pendingLanes=l,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=l,i.entangledLanes&=l,i.errorRecoveryDisabledLanes&=l,i.shellSuspendCounter=0;var b=i.entanglements,C=i.expirationTimes,M=i.hiddenUpdates;for(l=T&~l;0<l;){var Z=31-Rn(l),ne=1<<Z;b[Z]=0,C[Z]=-1;var G=M[Z];if(G!==null)for(M[Z]=null,Z=0;Z<G.length;Z++){var Y=G[Z];Y!==null&&(Y.lane&=-536870913)}l&=~ne}c!==0&&ds(i,c,0),g!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=g&~(T&~s))}function ds(i,s,l){i.pendingLanes|=s,i.suspendedLanes&=~s;var c=31-Rn(s);i.entangledLanes|=s,i.entanglements[c]=i.entanglements[c]|1073741824|l&4194218}function fs(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var c=31-Rn(l),f=1<<c;f&s|i[c]&s&&(i[c]|=s),l&=~f}}function Pd(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Nd(){var i=pe.p;return i!==0?i:(i=window.event,i===void 0?32:Tb(i.type))}function ps(i,s){var l=pe.p;try{return pe.p=i,s()}finally{pe.p=l}}var Lr=Math.random().toString(36).slice(2),tn="__reactFiber$"+Lr,$t="__reactProps$"+Lr,vi="__reactContainer$"+Lr,Sa="__reactEvents$"+Lr,$o="__reactListeners$"+Lr,Ur="__reactHandles$"+Lr,Qu="__reactResources$"+Lr,ms="__reactMarker$"+Lr;function Ra(i){delete i[tn],delete i[$t],delete i[Sa],delete i[$o],delete i[Ur]}function Ar(i){var s=i[tn];if(s)return s;for(var l=i.parentNode;l;){if(s=l[vi]||l[tn]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=ab(i);i!==null;){if(l=i[tn])return l;i=ab(i)}return s}i=l,l=i.parentNode}return null}function Ei(i){if(i=i[tn]||i[vi]){var s=i.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return i}return null}function gs(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i.stateNode;throw Error(r(33))}function _s(i){var s=i[Qu];return s||(s=i[Qu]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function _t(i){i[ms]=!0}var Wu=new Set,Ko={};function Gn(i,s){Un(i,s),Un(i+"Capture",s)}function Un(i,s){for(Ko[i]=s,i=0;i<s.length;i++)Wu.add(s[i])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yu={},Xu={};function Od(i){return jo.call(Xu,i)?!0:jo.call(Yu,i)?!1:rg.test(i)?Xu[i]=!0:(Yu[i]=!0,!1)}function ys(i,s,l){if(Od(s))if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":i.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(s);return}}i.setAttribute(s,""+l)}}function vs(i,s,l){if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttribute(s,""+l)}}function sr(i,s,l,c){if(c===null)i.removeAttribute(l);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(l);return}i.setAttributeNS(s,l,""+c)}}function Cn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function kd(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ig(i){var s=kd(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,g=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Ca(i){i._valueTracker||(i._valueTracker=ig(i))}function Zu(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return i&&(c=kd(i)?i.checked?"true":"false":i.value),i=c,i!==l?(s.setValue(i),!0):!1}function Qo(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Ti=/[\n"\\]/g;function At(i){return i.replace(Ti,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Es(i,s,l,c,f,g,T,b){i.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?i.type=T:i.removeAttribute("type"),s!=null?T==="number"?(s===0&&i.value===""||i.value!=s)&&(i.value=""+Cn(s)):i.value!==""+Cn(s)&&(i.value=""+Cn(s)):T!=="submit"&&T!=="reset"||i.removeAttribute("value"),s!=null?Wo(i,T,Cn(s)):l!=null?Wo(i,T,Cn(l)):c!=null&&i.removeAttribute("value"),f==null&&g!=null&&(i.defaultChecked=!!g),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?i.name=""+Cn(b):i.removeAttribute("name")}function xa(i,s,l,c,f,g,T,b){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(i.type=g),s!=null||l!=null){if(!(g!=="submit"&&g!=="reset"||s!=null))return;l=l!=null?""+Cn(l):"",s=s!=null?""+Cn(s):l,b||s===i.value||(i.value=s),i.defaultValue=s}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=b?i.checked:!!c,i.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(i.name=T)}function Wo(i,s,l){s==="number"&&Qo(i.ownerDocument)===i||i.defaultValue===""+l||(i.defaultValue=""+l)}function Qe(i,s,l,c){if(i=i.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<i.length;l++)f=s.hasOwnProperty("$"+i[l].value),i[l].selected!==f&&(i[l].selected=f),f&&c&&(i[l].defaultSelected=!0)}else{for(l=""+Cn(l),s=null,f=0;f<i.length;f++){if(i[f].value===l){i[f].selected=!0,c&&(i[f].defaultSelected=!0);return}s!==null||i[f].disabled||(s=i[f])}s!==null&&(s.selected=!0)}}function Da(i,s,l){if(s!=null&&(s=""+Cn(s),s!==i.value&&(i.value=s),l==null)){i.defaultValue!==s&&(i.defaultValue=s);return}i.defaultValue=l!=null?""+Cn(l):""}function Ts(i,s,l,c){if(s==null){if(c!=null){if(l!=null)throw Error(r(92));if(me(c)){if(1<c.length)throw Error(r(93));c=c[0]}l=c}l==null&&(l=""),s=l}l=Cn(s),i.defaultValue=l,c=i.textContent,c===l&&c!==""&&c!==null&&(i.value=c)}function ar(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var sg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ju(i,s,l){var c=s.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?c?i.setProperty(s,""):s==="float"?i.cssFloat="":i[s]="":c?i.setProperty(s,l):typeof l!="number"||l===0||sg.has(s)?s==="float"?i.cssFloat=l:i[s]=(""+l).trim():i[s]=l+"px"}function Vd(i,s,l){if(s!=null&&typeof s!="object")throw Error(r(62));if(i=i.style,l!=null){for(var c in l)!l.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var f in s)c=s[f],s.hasOwnProperty(f)&&l[f]!==c&&Ju(i,f,c)}else for(var g in s)s.hasOwnProperty(g)&&Ju(i,g,s[g])}function ec(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ag=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),og=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Br(i){return og.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var or=null;function Yo(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var wi=null,bi=null;function Ii(i){var s=Ei(i);if(s&&(i=s.stateNode)){var l=i[$t]||null;e:switch(i=s.stateNode,s.type){case"input":if(Es(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+At(""+s)+'"][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==i&&c.form===i.form){var f=c[$t]||null;if(!f)throw Error(r(90));Es(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<l.length;s++)c=l[s],c.form===i.form&&Zu(c)}break e;case"textarea":Da(i,l.value,l.defaultValue);break e;case"select":s=l.value,s!=null&&Qe(i,!!l.multiple,s,!1)}}}var tc=!1;function Md(i,s,l){if(tc)return i(s,l);tc=!0;try{var c=i(s);return c}finally{if(tc=!1,(wi!==null||bi!==null)&&(Cf(),wi&&(s=wi,i=bi,bi=wi=null,Ii(s),i)))for(s=0;s<i.length;s++)Ii(i[s])}}function Pa(i,s){var l=i.stateNode;if(l===null)return null;var c=l[$t]||null;if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(r(231,s,typeof l));return l}var lr=!1;if($n)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){lr=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{lr=!1}var zr=null,ws=null,Ai=null;function nc(){if(Ai)return Ai;var i,s=ws,l=s.length,c,f="value"in zr?zr.value:zr.textContent,g=f.length;for(i=0;i<l&&s[i]===f[i];i++);var T=l-i;for(c=1;c<=T&&s[l-c]===f[g-c];c++);return Ai=f.slice(i,1<c?1-c:void 0)}function Fr(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function jr(){return!0}function rc(){return!1}function nn(i){function s(l,c,f,g,T){this._reactName=l,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var b in i)i.hasOwnProperty(b)&&(l=i[b],this[b]=l?l(g):g[b]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?jr:rc,this.isPropagationStopped=rc,this}return P(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),s}var Je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=nn(Je),Oa=P({},Je,{view:0,detail:0}),Ld=nn(Oa),Zo,Jo,qr,ka=P({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:La,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==qr&&(qr&&i.type==="mousemove"?(Zo=i.screenX-qr.screenX,Jo=i.screenY-qr.screenY):Jo=Zo=0,qr=i),Zo)},movementY:function(i){return"movementY"in i?i.movementY:Jo}}),ur=nn(ka),Ud=P({},ka,{dataTransfer:0}),lg=nn(Ud),Va=P({},Oa,{relatedTarget:0}),el=nn(Va),ic=P({},Je,{animationName:0,elapsedTime:0,pseudoElement:0}),tl=nn(ic),Bd=P({},Je,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),nl=nn(Bd),ug=P({},Je,{data:0}),sc=nn(ug),Ma={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ac(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Fd[i])?!!s[i]:!1}function La(){return ac}var jd=P({},Oa,{key:function(i){if(i.key){var s=Ma[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Fr(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?zd[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:La,charCode:function(i){return i.type==="keypress"?Fr(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Fr(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),rl=nn(jd),qd=P({},ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oc=nn(qd),Si=P({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:La}),Hd=nn(Si),Gd=P({},Je,{propertyName:0,elapsedTime:0,pseudoElement:0}),$d=nn(Gd),Kd=P({},ka,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),il=nn(Kd),xn=P({},Je,{newState:0,oldState:0}),Qd=nn(xn),Wd=[9,13,27,32],Hr=$n&&"CompositionEvent"in window,h=null;$n&&"documentMode"in document&&(h=document.documentMode);var _=$n&&"TextEvent"in window&&!h,E=$n&&(!Hr||h&&8<h&&11>=h),I=" ",F=!1;function Q(i,s){switch(i){case"keyup":return Wd.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ue(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var qe=!1;function Kt(i,s){switch(i){case"compositionend":return ue(s);case"keypress":return s.which!==32?null:(F=!0,I);case"textInput":return i=s.data,i===I&&F?null:i;default:return null}}function He(i,s){if(qe)return i==="compositionend"||!Hr&&Q(i,s)?(i=nc(),Ai=ws=zr=null,qe=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!rn[i.type]:s==="textarea"}function Ri(i,s,l,c){wi?bi?bi.push(c):bi=[c]:wi=c,s=Of(s,"onChange"),0<s.length&&(l=new Xo("onChange","change",null,l,c),i.push({event:l,listeners:s}))}var dn=null,Gr=null;function lc(i){X0(i,0)}function Yd(i){var s=gs(i);if(Zu(s))return i}function ST(i,s){if(i==="change")return s}var RT=!1;if($n){var cg;if($n){var hg="oninput"in document;if(!hg){var CT=document.createElement("div");CT.setAttribute("oninput","return;"),hg=typeof CT.oninput=="function"}cg=hg}else cg=!1;RT=cg&&(!document.documentMode||9<document.documentMode)}function xT(){dn&&(dn.detachEvent("onpropertychange",DT),Gr=dn=null)}function DT(i){if(i.propertyName==="value"&&Yd(Gr)){var s=[];Ri(s,Gr,i,Yo(i)),Md(lc,s)}}function gD(i,s,l){i==="focusin"?(xT(),dn=s,Gr=l,dn.attachEvent("onpropertychange",DT)):i==="focusout"&&xT()}function _D(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Yd(Gr)}function yD(i,s){if(i==="click")return Yd(s)}function vD(i,s){if(i==="input"||i==="change")return Yd(s)}function ED(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Kn=typeof Object.is=="function"?Object.is:ED;function uc(i,s){if(Kn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var f=l[c];if(!jo.call(s,f)||!Kn(i[f],s[f]))return!1}return!0}function PT(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function NT(i,s){var l=PT(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=s&&c>=s)return{node:l,offset:s-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=PT(l)}}function OT(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?OT(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function kT(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var s=Qo(i.document);s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Qo(i.document)}return s}function dg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function TD(i,s){var l=kT(s);s=i.focusedElem;var c=i.selectionRange;if(l!==s&&s&&s.ownerDocument&&OT(s.ownerDocument.documentElement,s)){if(c!==null&&dg(s)){if(i=c.start,l=c.end,l===void 0&&(l=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(l,s.value.length);else if(l=(i=s.ownerDocument||document)&&i.defaultView||window,l.getSelection){l=l.getSelection();var f=s.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!l.extend&&g>c&&(f=c,c=g,g=f),f=NT(s,g);var T=NT(s,c);f&&T&&(l.rangeCount!==1||l.anchorNode!==f.node||l.anchorOffset!==f.offset||l.focusNode!==T.node||l.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),l.removeAllRanges(),g>c?(l.addRange(i),l.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),l.addRange(i)))}}for(i=[],l=s;l=l.parentNode;)l.nodeType===1&&i.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)l=i[s],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var wD=$n&&"documentMode"in document&&11>=document.documentMode,sl=null,fg=null,cc=null,pg=!1;function VT(i,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;pg||sl==null||sl!==Qo(c)||(c=sl,"selectionStart"in c&&dg(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),cc&&uc(cc,c)||(cc=c,c=Of(fg,"onSelect"),0<c.length&&(s=new Xo("onSelect","select",null,s,l),i.push({event:s,listeners:c}),s.target=sl)))}function Ua(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var al={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},mg={},MT={};$n&&(MT=document.createElement("div").style,"AnimationEvent"in window||(delete al.animationend.animation,delete al.animationiteration.animation,delete al.animationstart.animation),"TransitionEvent"in window||delete al.transitionend.transition);function Ba(i){if(mg[i])return mg[i];if(!al[i])return i;var s=al[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in MT)return mg[i]=s[l];return i}var LT=Ba("animationend"),UT=Ba("animationiteration"),BT=Ba("animationstart"),bD=Ba("transitionrun"),ID=Ba("transitionstart"),AD=Ba("transitioncancel"),zT=Ba("transitionend"),FT=new Map,jT="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Sr(i,s){FT.set(i,s),Gn(s,[i])}var cr=[],ol=0,gg=0;function Xd(){for(var i=ol,s=gg=ol=0;s<i;){var l=cr[s];cr[s++]=null;var c=cr[s];cr[s++]=null;var f=cr[s];cr[s++]=null;var g=cr[s];if(cr[s++]=null,c!==null&&f!==null){var T=c.pending;T===null?f.next=f:(f.next=T.next,T.next=f),c.pending=f}g!==0&&qT(l,f,g)}}function Zd(i,s,l,c){cr[ol++]=i,cr[ol++]=s,cr[ol++]=l,cr[ol++]=c,gg|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function _g(i,s,l,c){return Zd(i,s,l,c),Jd(i)}function bs(i,s){return Zd(i,null,null,s),Jd(i)}function qT(i,s,l){i.lanes|=l;var c=i.alternate;c!==null&&(c.lanes|=l);for(var f=!1,g=i.return;g!==null;)g.childLanes|=l,c=g.alternate,c!==null&&(c.childLanes|=l),g.tag===22&&(i=g.stateNode,i===null||i._visibility&1||(f=!0)),i=g,g=g.return;f&&s!==null&&i.tag===3&&(g=i.stateNode,f=31-Rn(l),g=g.hiddenUpdates,i=g[f],i===null?g[f]=[s]:i.push(s),s.lane=l|536870912)}function Jd(i){if(50<Vc)throw Vc=0,b_=null,Error(r(185));for(var s=i.return;s!==null;)i=s,s=i.return;return i.tag===3?i.stateNode:null}var ll={},HT=new WeakMap;function hr(i,s){if(typeof i=="object"&&i!==null){var l=HT.get(i);return l!==void 0?l:(s={value:i,source:s,stack:Ie(s)},HT.set(i,s),s)}return{value:i,source:s,stack:Ie(s)}}var ul=[],cl=0,ef=null,tf=0,dr=[],fr=0,za=null,Ci=1,xi="";function Fa(i,s){ul[cl++]=tf,ul[cl++]=ef,ef=i,tf=s}function GT(i,s,l){dr[fr++]=Ci,dr[fr++]=xi,dr[fr++]=za,za=i;var c=Ci;i=xi;var f=32-Rn(c)-1;c&=~(1<<f),l+=1;var g=32-Rn(s)+f;if(30<g){var T=f-f%5;g=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Ci=1<<32-Rn(s)+f|l<<f|c,xi=g+i}else Ci=1<<g|l<<f|c,xi=i}function yg(i){i.return!==null&&(Fa(i,1),GT(i,1,0))}function vg(i){for(;i===ef;)ef=ul[--cl],ul[cl]=null,tf=ul[--cl],ul[cl]=null;for(;i===za;)za=dr[--fr],dr[fr]=null,xi=dr[--fr],dr[fr]=null,Ci=dr[--fr],dr[fr]=null}var Dn=null,fn=null,We=!1,Rr=null,$r=!1,Eg=Error(r(519));function ja(i){var s=Error(r(418,""));throw fc(hr(s,i)),Eg}function $T(i){var s=i.stateNode,l=i.type,c=i.memoizedProps;switch(s[tn]=i,s[$t]=c,l){case"dialog":je("cancel",s),je("close",s);break;case"iframe":case"object":case"embed":je("load",s);break;case"video":case"audio":for(l=0;l<Lc.length;l++)je(Lc[l],s);break;case"source":je("error",s);break;case"img":case"image":case"link":je("error",s),je("load",s);break;case"details":je("toggle",s);break;case"input":je("invalid",s),xa(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Ca(s);break;case"select":je("invalid",s);break;case"textarea":je("invalid",s),Ts(s,c.value,c.defaultValue,c.children),Ca(s)}l=c.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||s.textContent===""+l||c.suppressHydrationWarning===!0||tb(s.textContent,l)?(c.popover!=null&&(je("beforetoggle",s),je("toggle",s)),c.onScroll!=null&&je("scroll",s),c.onScrollEnd!=null&&je("scrollend",s),c.onClick!=null&&(s.onclick=kf),s=!0):s=!1,s||ja(i)}function KT(i){for(Dn=i.return;Dn;)switch(Dn.tag){case 3:case 27:$r=!0;return;case 5:case 13:$r=!1;return;default:Dn=Dn.return}}function hc(i){if(i!==Dn)return!1;if(!We)return KT(i),We=!0,!1;var s=!1,l;if((l=i.tag!==3&&i.tag!==27)&&((l=i.tag===5)&&(l=i.type,l=!(l!=="form"&&l!=="button")||z_(i.type,i.memoizedProps)),l=!l),l&&(s=!0),s&&fn&&ja(i),KT(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8)if(l=i.data,l==="/$"){if(s===0){fn=xr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++;i=i.nextSibling}fn=null}}else fn=Dn?xr(i.stateNode.nextSibling):null;return!0}function dc(){fn=Dn=null,We=!1}function fc(i){Rr===null?Rr=[i]:Rr.push(i)}var pc=Error(r(460)),QT=Error(r(474)),Tg={then:function(){}};function WT(i){return i=i.status,i==="fulfilled"||i==="rejected"}function nf(){}function YT(i,s,l){switch(l=i[l],l===void 0?i.push(s):l!==s&&(s.then(nf,nf),s=l),s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===pc?Error(r(483)):i;default:if(typeof s.status=="string")s.then(nf,nf);else{if(i=at,i!==null&&100<i.shellSuspendCounter)throw Error(r(482));i=s,i.status="pending",i.then(function(c){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=c}},function(c){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===pc?Error(r(483)):i}throw mc=s,pc}}var mc=null;function XT(){if(mc===null)throw Error(r(459));var i=mc;return mc=null,i}var hl=null,gc=0;function rf(i){var s=gc;return gc+=1,hl===null&&(hl=[]),YT(hl,i,s)}function _c(i,s){s=s.props.ref,i.ref=s!==void 0?s:null}function sf(i,s){throw s.$$typeof===o?Error(r(525)):(i=Object.prototype.toString.call(s),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i)))}function ZT(i){var s=i._init;return s(i._payload)}function JT(i){function s(B,k){if(i){var q=B.deletions;q===null?(B.deletions=[k],B.flags|=16):q.push(k)}}function l(B,k){if(!i)return null;for(;k!==null;)s(B,k),k=k.sibling;return null}function c(B){for(var k=new Map;B!==null;)B.key!==null?k.set(B.key,B):k.set(B.index,B),B=B.sibling;return k}function f(B,k){return B=Vs(B,k),B.index=0,B.sibling=null,B}function g(B,k,q){return B.index=q,i?(q=B.alternate,q!==null?(q=q.index,q<k?(B.flags|=33554434,k):q):(B.flags|=33554434,k)):(B.flags|=1048576,k)}function T(B){return i&&B.alternate===null&&(B.flags|=33554434),B}function b(B,k,q,ee){return k===null||k.tag!==6?(k=m_(q,B.mode,ee),k.return=B,k):(k=f(k,q),k.return=B,k)}function C(B,k,q,ee){var ye=q.type;return ye===p?Z(B,k,q.props.children,ee,q.key):k!==null&&(k.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===W&&ZT(ye)===k.type)?(k=f(k,q.props),_c(k,q),k.return=B,k):(k=bf(q.type,q.key,q.props,null,B.mode,ee),_c(k,q),k.return=B,k)}function M(B,k,q,ee){return k===null||k.tag!==4||k.stateNode.containerInfo!==q.containerInfo||k.stateNode.implementation!==q.implementation?(k=g_(q,B.mode,ee),k.return=B,k):(k=f(k,q.children||[]),k.return=B,k)}function Z(B,k,q,ee,ye){return k===null||k.tag!==7?(k=Za(q,B.mode,ee,ye),k.return=B,k):(k=f(k,q),k.return=B,k)}function ne(B,k,q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=m_(""+k,B.mode,q),k.return=B,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case u:return q=bf(k.type,k.key,k.props,null,B.mode,q),_c(q,k),q.return=B,q;case d:return k=g_(k,B.mode,q),k.return=B,k;case W:var ee=k._init;return k=ee(k._payload),ne(B,k,q)}if(me(k)||le(k))return k=Za(k,B.mode,q,null),k.return=B,k;if(typeof k.then=="function")return ne(B,rf(k),q);if(k.$$typeof===S)return ne(B,Ef(B,k),q);sf(B,k)}return null}function G(B,k,q,ee){var ye=k!==null?k.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return ye!==null?null:b(B,k,""+q,ee);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case u:return q.key===ye?C(B,k,q,ee):null;case d:return q.key===ye?M(B,k,q,ee):null;case W:return ye=q._init,q=ye(q._payload),G(B,k,q,ee)}if(me(q)||le(q))return ye!==null?null:Z(B,k,q,ee,null);if(typeof q.then=="function")return G(B,k,rf(q),ee);if(q.$$typeof===S)return G(B,k,Ef(B,q),ee);sf(B,q)}return null}function Y(B,k,q,ee,ye){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return B=B.get(q)||null,b(k,B,""+ee,ye);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:return B=B.get(ee.key===null?q:ee.key)||null,C(k,B,ee,ye);case d:return B=B.get(ee.key===null?q:ee.key)||null,M(k,B,ee,ye);case W:var Le=ee._init;return ee=Le(ee._payload),Y(B,k,q,ee,ye)}if(me(ee)||le(ee))return B=B.get(q)||null,Z(k,B,ee,ye,null);if(typeof ee.then=="function")return Y(B,k,q,rf(ee),ye);if(ee.$$typeof===S)return Y(B,k,q,Ef(k,ee),ye);sf(k,ee)}return null}function Ee(B,k,q,ee){for(var ye=null,Le=null,be=k,Se=k=0,on=null;be!==null&&Se<q.length;Se++){be.index>Se?(on=be,be=null):on=be.sibling;var Ye=G(B,be,q[Se],ee);if(Ye===null){be===null&&(be=on);break}i&&be&&Ye.alternate===null&&s(B,be),k=g(Ye,k,Se),Le===null?ye=Ye:Le.sibling=Ye,Le=Ye,be=on}if(Se===q.length)return l(B,be),We&&Fa(B,Se),ye;if(be===null){for(;Se<q.length;Se++)be=ne(B,q[Se],ee),be!==null&&(k=g(be,k,Se),Le===null?ye=be:Le.sibling=be,Le=be);return We&&Fa(B,Se),ye}for(be=c(be);Se<q.length;Se++)on=Y(be,B,Se,q[Se],ee),on!==null&&(i&&on.alternate!==null&&be.delete(on.key===null?Se:on.key),k=g(on,k,Se),Le===null?ye=on:Le.sibling=on,Le=on);return i&&be.forEach(function(js){return s(B,js)}),We&&Fa(B,Se),ye}function De(B,k,q,ee){if(q==null)throw Error(r(151));for(var ye=null,Le=null,be=k,Se=k=0,on=null,Ye=q.next();be!==null&&!Ye.done;Se++,Ye=q.next()){be.index>Se?(on=be,be=null):on=be.sibling;var js=G(B,be,Ye.value,ee);if(js===null){be===null&&(be=on);break}i&&be&&js.alternate===null&&s(B,be),k=g(js,k,Se),Le===null?ye=js:Le.sibling=js,Le=js,be=on}if(Ye.done)return l(B,be),We&&Fa(B,Se),ye;if(be===null){for(;!Ye.done;Se++,Ye=q.next())Ye=ne(B,Ye.value,ee),Ye!==null&&(k=g(Ye,k,Se),Le===null?ye=Ye:Le.sibling=Ye,Le=Ye);return We&&Fa(B,Se),ye}for(be=c(be);!Ye.done;Se++,Ye=q.next())Ye=Y(be,B,Se,Ye.value,ee),Ye!==null&&(i&&Ye.alternate!==null&&be.delete(Ye.key===null?Se:Ye.key),k=g(Ye,k,Se),Le===null?ye=Ye:Le.sibling=Ye,Le=Ye);return i&&be.forEach(function(BP){return s(B,BP)}),We&&Fa(B,Se),ye}function Ct(B,k,q,ee){if(typeof q=="object"&&q!==null&&q.type===p&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case u:e:{for(var ye=q.key;k!==null;){if(k.key===ye){if(ye=q.type,ye===p){if(k.tag===7){l(B,k.sibling),ee=f(k,q.props.children),ee.return=B,B=ee;break e}}else if(k.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===W&&ZT(ye)===k.type){l(B,k.sibling),ee=f(k,q.props),_c(ee,q),ee.return=B,B=ee;break e}l(B,k);break}else s(B,k);k=k.sibling}q.type===p?(ee=Za(q.props.children,B.mode,ee,q.key),ee.return=B,B=ee):(ee=bf(q.type,q.key,q.props,null,B.mode,ee),_c(ee,q),ee.return=B,B=ee)}return T(B);case d:e:{for(ye=q.key;k!==null;){if(k.key===ye)if(k.tag===4&&k.stateNode.containerInfo===q.containerInfo&&k.stateNode.implementation===q.implementation){l(B,k.sibling),ee=f(k,q.children||[]),ee.return=B,B=ee;break e}else{l(B,k);break}else s(B,k);k=k.sibling}ee=g_(q,B.mode,ee),ee.return=B,B=ee}return T(B);case W:return ye=q._init,q=ye(q._payload),Ct(B,k,q,ee)}if(me(q))return Ee(B,k,q,ee);if(le(q)){if(ye=le(q),typeof ye!="function")throw Error(r(150));return q=ye.call(q),De(B,k,q,ee)}if(typeof q.then=="function")return Ct(B,k,rf(q),ee);if(q.$$typeof===S)return Ct(B,k,Ef(B,q),ee);sf(B,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,k!==null&&k.tag===6?(l(B,k.sibling),ee=f(k,q),ee.return=B,B=ee):(l(B,k),ee=m_(q,B.mode,ee),ee.return=B,B=ee),T(B)):l(B,k)}return function(B,k,q,ee){try{gc=0;var ye=Ct(B,k,q,ee);return hl=null,ye}catch(be){if(be===pc)throw be;var Le=_r(29,be,null,B.mode);return Le.lanes=ee,Le.return=B,Le}finally{}}}var qa=JT(!0),ew=JT(!1),dl=Me(null),af=Me(0);function tw(i,s){i=zi,Ke(af,i),Ke(dl,s),zi=i|s.baseLanes}function wg(){Ke(af,zi),Ke(dl,dl.current)}function bg(){zi=af.current,Ze(dl),Ze(af)}var pr=Me(null),Kr=null;function Is(i){var s=i.alternate;Ke(Wt,Wt.current&1),Ke(pr,i),Kr===null&&(s===null||dl.current!==null||s.memoizedState!==null)&&(Kr=i)}function nw(i){if(i.tag===22){if(Ke(Wt,Wt.current),Ke(pr,i),Kr===null){var s=i.alternate;s!==null&&s.memoizedState!==null&&(Kr=i)}}else As()}function As(){Ke(Wt,Wt.current),Ke(pr,pr.current)}function Di(i){Ze(pr),Kr===i&&(Kr=null),Ze(Wt)}var Wt=Me(0);function of(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var SD=typeof AbortController<"u"?AbortController:function(){var i=[],s=this.signal={aborted:!1,addEventListener:function(l,c){i.push(c)}};this.abort=function(){s.aborted=!0,i.forEach(function(l){return l()})}},RD=n.unstable_scheduleCallback,CD=n.unstable_NormalPriority,Yt={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ig(){return{controller:new SD,data:new Map,refCount:0}}function yc(i){i.refCount--,i.refCount===0&&RD(CD,function(){i.controller.abort()})}var vc=null,Ag=0,fl=0,pl=null;function xD(i,s){if(vc===null){var l=vc=[];Ag=0,fl=P_(),pl={status:"pending",value:void 0,then:function(c){l.push(c)}}}return Ag++,s.then(rw,rw),s}function rw(){if(--Ag===0&&vc!==null){pl!==null&&(pl.status="fulfilled");var i=vc;vc=null,fl=0,pl=null;for(var s=0;s<i.length;s++)(0,i[s])()}}function DD(i,s){var l=[],c={status:"pending",value:null,reason:null,then:function(f){l.push(f)}};return i.then(function(){c.status="fulfilled",c.value=s;for(var f=0;f<l.length;f++)(0,l[f])(s)},function(f){for(c.status="rejected",c.reason=f,f=0;f<l.length;f++)(0,l[f])(void 0)}),c}var iw=A.S;A.S=function(i,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&xD(i,s),iw!==null&&iw(i,s)};var Ha=Me(null);function Sg(){var i=Ha.current;return i!==null?i:at.pooledCache}function lf(i,s){s===null?Ke(Ha,Ha.current):Ke(Ha,s.pool)}function sw(){var i=Sg();return i===null?null:{parent:Yt._currentValue,pool:i}}var Ss=0,Ve=null,rt=null,Bt=null,uf=!1,ml=!1,Ga=!1,cf=0,Ec=0,gl=null,PD=0;function kt(){throw Error(r(321))}function Rg(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Kn(i[l],s[l]))return!1;return!0}function Cg(i,s,l,c,f,g){return Ss=g,Ve=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,A.H=i===null||i.memoizedState===null?$a:Rs,Ga=!1,g=l(c,f),Ga=!1,ml&&(g=ow(s,l,c,f)),aw(i),g}function aw(i){A.H=Qr;var s=rt!==null&&rt.next!==null;if(Ss=0,Bt=rt=Ve=null,uf=!1,Ec=0,gl=null,s)throw Error(r(300));i===null||sn||(i=i.dependencies,i!==null&&vf(i)&&(sn=!0))}function ow(i,s,l,c){Ve=i;var f=0;do{if(ml&&(gl=null),Ec=0,ml=!1,25<=f)throw Error(r(301));if(f+=1,Bt=rt=null,i.updateQueue!=null){var g=i.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}A.H=Ka,g=s(l,c)}while(ml);return g}function ND(){var i=A.H,s=i.useState()[0];return s=typeof s.then=="function"?Tc(s):s,i=i.useState()[0],(rt!==null?rt.memoizedState:null)!==i&&(Ve.flags|=1024),s}function xg(){var i=cf!==0;return cf=0,i}function Dg(i,s,l){s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~l}function Pg(i){if(uf){for(i=i.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}uf=!1}Ss=0,Bt=rt=Ve=null,ml=!1,Ec=cf=0,gl=null}function Bn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Ve.memoizedState=Bt=i:Bt=Bt.next=i,Bt}function zt(){if(rt===null){var i=Ve.alternate;i=i!==null?i.memoizedState:null}else i=rt.next;var s=Bt===null?Ve.memoizedState:Bt.next;if(s!==null)Bt=s,rt=i;else{if(i===null)throw Ve.alternate===null?Error(r(467)):Error(r(310));rt=i,i={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},Bt===null?Ve.memoizedState=Bt=i:Bt=Bt.next=i}return Bt}var hf;hf=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Tc(i){var s=Ec;return Ec+=1,gl===null&&(gl=[]),i=YT(gl,i,s),s=Ve,(Bt===null?s.memoizedState:Bt.next)===null&&(s=s.alternate,A.H=s===null||s.memoizedState===null?$a:Rs),i}function df(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Tc(i);if(i.$$typeof===S)return Tn(i)}throw Error(r(438,String(i)))}function Ng(i){var s=null,l=Ve.updateQueue;if(l!==null&&(s=l.memoCache),s==null){var c=Ve.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),l===null&&(l=hf(),Ve.updateQueue=l),l.memoCache=s,l=s.data[s.index],l===void 0)for(l=s.data[s.index]=Array(i),c=0;c<i;c++)l[c]=oe;return s.index++,l}function Pi(i,s){return typeof s=="function"?s(i):s}function ff(i){var s=zt();return Og(s,rt,i)}function Og(i,s,l){var c=i.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=l;var f=i.baseQueue,g=c.pending;if(g!==null){if(f!==null){var T=f.next;f.next=g.next,g.next=T}s.baseQueue=f=g,c.pending=null}if(g=i.baseState,f===null)i.memoizedState=g;else{s=f.next;var b=T=null,C=null,M=s,Z=!1;do{var ne=M.lane&-536870913;if(ne!==M.lane?(Ge&ne)===ne:(Ss&ne)===ne){var G=M.revertLane;if(G===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),ne===fl&&(Z=!0);else if((Ss&G)===G){M=M.next,G===fl&&(Z=!0);continue}else ne={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},C===null?(b=C=ne,T=g):C=C.next=ne,Ve.lanes|=G,Ms|=G;ne=M.action,Ga&&l(g,ne),g=M.hasEagerState?M.eagerState:l(g,ne)}else G={lane:ne,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},C===null?(b=C=G,T=g):C=C.next=G,Ve.lanes|=ne,Ms|=ne;M=M.next}while(M!==null&&M!==s);if(C===null?T=g:C.next=b,!Kn(g,i.memoizedState)&&(sn=!0,Z&&(l=pl,l!==null)))throw l;i.memoizedState=g,i.baseState=T,i.baseQueue=C,c.lastRenderedState=g}return f===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function kg(i){var s=zt(),l=s.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=i;var c=l.dispatch,f=l.pending,g=s.memoizedState;if(f!==null){l.pending=null;var T=f=f.next;do g=i(g,T.action),T=T.next;while(T!==f);Kn(g,s.memoizedState)||(sn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,c]}function lw(i,s,l){var c=Ve,f=zt(),g=We;if(g){if(l===void 0)throw Error(r(407));l=l()}else l=s();var T=!Kn((rt||f).memoizedState,l);if(T&&(f.memoizedState=l,sn=!0),f=f.queue,Lg(hw.bind(null,c,f,i),[i]),f.getSnapshot!==s||T||Bt!==null&&Bt.memoizedState.tag&1){if(c.flags|=2048,_l(9,cw.bind(null,c,f,l,s),{destroy:void 0},null),at===null)throw Error(r(349));g||(Ss&60)!==0||uw(c,s,l)}return l}function uw(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Ve.updateQueue,s===null?(s=hf(),Ve.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function cw(i,s,l,c){s.value=l,s.getSnapshot=c,dw(s)&&fw(i)}function hw(i,s,l){return l(function(){dw(s)&&fw(i)})}function dw(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Kn(i,l)}catch{return!0}}function fw(i){var s=bs(i,2);s!==null&&Pn(s,i,2)}function Vg(i){var s=Bn();if(typeof i=="function"){var l=i;if(i=l(),Ga){Vr(!0);try{l()}finally{Vr(!1)}}}return s.memoizedState=s.baseState=i,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:i},s}function pw(i,s,l,c){return i.baseState=l,Og(i,rt,typeof c=="function"?c:Pi)}function OD(i,s,l,c,f){if(gf(i))throw Error(r(485));if(i=s.action,i!==null){var g={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};A.T!==null?l(!0):g.isTransition=!1,c(g),l=s.pending,l===null?(g.next=s.pending=g,mw(s,g)):(g.next=l.next,s.pending=l.next=g)}}function mw(i,s){var l=s.action,c=s.payload,f=i.state;if(s.isTransition){var g=A.T,T={};A.T=T;try{var b=l(f,c),C=A.S;C!==null&&C(T,b),gw(i,s,b)}catch(M){Mg(i,s,M)}finally{A.T=g}}else try{g=l(f,c),gw(i,s,g)}catch(M){Mg(i,s,M)}}function gw(i,s,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(c){_w(i,s,c)},function(c){return Mg(i,s,c)}):_w(i,s,l)}function _w(i,s,l){s.status="fulfilled",s.value=l,yw(s),i.state=l,s=i.pending,s!==null&&(l=s.next,l===s?i.pending=null:(l=l.next,s.next=l,mw(i,l)))}function Mg(i,s,l){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=l,yw(s),s=s.next;while(s!==c)}i.action=null}function yw(i){i=i.listeners;for(var s=0;s<i.length;s++)(0,i[s])()}function vw(i,s){return s}function Ew(i,s){if(We){var l=at.formState;if(l!==null){e:{var c=Ve;if(We){if(fn){t:{for(var f=fn,g=$r;f.nodeType!==8;){if(!g){f=null;break t}if(f=xr(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){fn=xr(f.nextSibling),c=f.data==="F!";break e}}ja(c)}c=!1}c&&(s=l[0])}}return l=Bn(),l.memoizedState=l.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vw,lastRenderedState:s},l.queue=c,l=Uw.bind(null,Ve,c),c.dispatch=l,c=Vg(!1),g=jg.bind(null,Ve,!1,c.queue),c=Bn(),f={state:s,dispatch:null,action:i,pending:null},c.queue=f,l=OD.bind(null,Ve,f,g,l),f.dispatch=l,c.memoizedState=i,[s,l,!1]}function Tw(i){var s=zt();return ww(s,rt,i)}function ww(i,s,l){s=Og(i,s,vw)[0],i=ff(Pi)[0],s=typeof s=="object"&&s!==null&&typeof s.then=="function"?Tc(s):s;var c=zt(),f=c.queue,g=f.dispatch;return l!==c.memoizedState&&(Ve.flags|=2048,_l(9,kD.bind(null,f,l),{destroy:void 0},null)),[s,g,i]}function kD(i,s){i.action=s}function bw(i){var s=zt(),l=rt;if(l!==null)return ww(s,l,i);zt(),s=s.memoizedState,l=zt();var c=l.queue.dispatch;return l.memoizedState=i,[s,c,!1]}function _l(i,s,l,c){return i={tag:i,create:s,inst:l,deps:c,next:null},s=Ve.updateQueue,s===null&&(s=hf(),Ve.updateQueue=s),l=s.lastEffect,l===null?s.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,s.lastEffect=i),i}function Iw(){return zt().memoizedState}function pf(i,s,l,c){var f=Bn();Ve.flags|=i,f.memoizedState=_l(1|s,l,{destroy:void 0},c===void 0?null:c)}function mf(i,s,l,c){var f=zt();c=c===void 0?null:c;var g=f.memoizedState.inst;rt!==null&&c!==null&&Rg(c,rt.memoizedState.deps)?f.memoizedState=_l(s,l,g,c):(Ve.flags|=i,f.memoizedState=_l(1|s,l,g,c))}function Aw(i,s){pf(8390656,8,i,s)}function Lg(i,s){mf(2048,8,i,s)}function Sw(i,s){return mf(4,2,i,s)}function Rw(i,s){return mf(4,4,i,s)}function Cw(i,s){if(typeof s=="function"){i=i();var l=s(i);return function(){typeof l=="function"?l():s(null)}}if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function xw(i,s,l){l=l!=null?l.concat([i]):null,mf(4,4,Cw.bind(null,s,i),l)}function Ug(){}function Dw(i,s){var l=zt();s=s===void 0?null:s;var c=l.memoizedState;return s!==null&&Rg(s,c[1])?c[0]:(l.memoizedState=[i,s],i)}function Pw(i,s){var l=zt();s=s===void 0?null:s;var c=l.memoizedState;if(s!==null&&Rg(s,c[1]))return c[0];if(c=i(),Ga){Vr(!0);try{i()}finally{Vr(!1)}}return l.memoizedState=[c,s],c}function Bg(i,s,l){return l===void 0||(Ss&1073741824)!==0?i.memoizedState=s:(i.memoizedState=l,i=O0(),Ve.lanes|=i,Ms|=i,l)}function Nw(i,s,l,c){return Kn(l,s)?l:dl.current!==null?(i=Bg(i,l,c),Kn(i,s)||(sn=!0),i):(Ss&42)===0?(sn=!0,i.memoizedState=l):(i=O0(),Ve.lanes|=i,Ms|=i,s)}function Ow(i,s,l,c,f){var g=pe.p;pe.p=g!==0&&8>g?g:8;var T=A.T,b={};A.T=b,jg(i,!1,s,l);try{var C=f(),M=A.S;if(M!==null&&M(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Z=DD(C,c);wc(i,s,Z,Xn(i))}else wc(i,s,c,Xn(i))}catch(ne){wc(i,s,{then:function(){},status:"rejected",reason:ne},Xn())}finally{pe.p=g,A.T=T}}function VD(){}function zg(i,s,l,c){if(i.tag!==5)throw Error(r(476));var f=kw(i).queue;Ow(i,f,s,xe,l===null?VD:function(){return Vw(i),l(c)})}function kw(i){var s=i.memoizedState;if(s!==null)return s;s={memoizedState:xe,baseState:xe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:xe},next:null};var l={};return s.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:l},next:null},i.memoizedState=s,i=i.alternate,i!==null&&(i.memoizedState=s),s}function Vw(i){var s=kw(i).next.queue;wc(i,s,{},Xn())}function Fg(){return Tn(jc)}function Mw(){return zt().memoizedState}function Lw(){return zt().memoizedState}function MD(i){for(var s=i.return;s!==null;){switch(s.tag){case 24:case 3:var l=Xn();i=Ds(l);var c=Ps(s,i,l);c!==null&&(Pn(c,s,l),Ac(c,s,l)),s={cache:Ig()},i.payload=s;return}s=s.return}}function LD(i,s,l){var c=Xn();l={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},gf(i)?Bw(s,l):(l=_g(i,s,l,c),l!==null&&(Pn(l,i,c),zw(l,s,c)))}function Uw(i,s,l){var c=Xn();wc(i,s,l,c)}function wc(i,s,l,c){var f={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(gf(i))Bw(s,f);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var T=s.lastRenderedState,b=g(T,l);if(f.hasEagerState=!0,f.eagerState=b,Kn(b,T))return Zd(i,s,f,0),at===null&&Xd(),!1}catch{}finally{}if(l=_g(i,s,f,c),l!==null)return Pn(l,i,c),zw(l,s,c),!0}return!1}function jg(i,s,l,c){if(c={lane:2,revertLane:P_(),action:c,hasEagerState:!1,eagerState:null,next:null},gf(i)){if(s)throw Error(r(479))}else s=_g(i,l,c,2),s!==null&&Pn(s,i,2)}function gf(i){var s=i.alternate;return i===Ve||s!==null&&s===Ve}function Bw(i,s){ml=uf=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function zw(i,s,l){if((l&4194176)!==0){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,fs(i,l)}}var Qr={readContext:Tn,use:df,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt};Qr.useCacheRefresh=kt,Qr.useMemoCache=kt,Qr.useHostTransitionStatus=kt,Qr.useFormState=kt,Qr.useActionState=kt,Qr.useOptimistic=kt;var $a={readContext:Tn,use:df,useCallback:function(i,s){return Bn().memoizedState=[i,s===void 0?null:s],i},useContext:Tn,useEffect:Aw,useImperativeHandle:function(i,s,l){l=l!=null?l.concat([i]):null,pf(4194308,4,Cw.bind(null,s,i),l)},useLayoutEffect:function(i,s){return pf(4194308,4,i,s)},useInsertionEffect:function(i,s){pf(4,2,i,s)},useMemo:function(i,s){var l=Bn();s=s===void 0?null:s;var c=i();if(Ga){Vr(!0);try{i()}finally{Vr(!1)}}return l.memoizedState=[c,s],c},useReducer:function(i,s,l){var c=Bn();if(l!==void 0){var f=l(s);if(Ga){Vr(!0);try{l(s)}finally{Vr(!1)}}}else f=s;return c.memoizedState=c.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},c.queue=i,i=i.dispatch=LD.bind(null,Ve,i),[c.memoizedState,i]},useRef:function(i){var s=Bn();return i={current:i},s.memoizedState=i},useState:function(i){i=Vg(i);var s=i.queue,l=Uw.bind(null,Ve,s);return s.dispatch=l,[i.memoizedState,l]},useDebugValue:Ug,useDeferredValue:function(i,s){var l=Bn();return Bg(l,i,s)},useTransition:function(){var i=Vg(!1);return i=Ow.bind(null,Ve,i.queue,!0,!1),Bn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,s,l){var c=Ve,f=Bn();if(We){if(l===void 0)throw Error(r(407));l=l()}else{if(l=s(),at===null)throw Error(r(349));(Ge&60)!==0||uw(c,s,l)}f.memoizedState=l;var g={value:l,getSnapshot:s};return f.queue=g,Aw(hw.bind(null,c,g,i),[i]),c.flags|=2048,_l(9,cw.bind(null,c,g,l,s),{destroy:void 0},null),l},useId:function(){var i=Bn(),s=at.identifierPrefix;if(We){var l=xi,c=Ci;l=(c&~(1<<32-Rn(c)-1)).toString(32)+l,s=":"+s+"R"+l,l=cf++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=PD++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},useCacheRefresh:function(){return Bn().memoizedState=MD.bind(null,Ve)}};$a.useMemoCache=Ng,$a.useHostTransitionStatus=Fg,$a.useFormState=Ew,$a.useActionState=Ew,$a.useOptimistic=function(i){var s=Bn();s.memoizedState=s.baseState=i;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=l,s=jg.bind(null,Ve,!0,l),l.dispatch=s,[i,s]};var Rs={readContext:Tn,use:df,useCallback:Dw,useContext:Tn,useEffect:Lg,useImperativeHandle:xw,useInsertionEffect:Sw,useLayoutEffect:Rw,useMemo:Pw,useReducer:ff,useRef:Iw,useState:function(){return ff(Pi)},useDebugValue:Ug,useDeferredValue:function(i,s){var l=zt();return Nw(l,rt.memoizedState,i,s)},useTransition:function(){var i=ff(Pi)[0],s=zt().memoizedState;return[typeof i=="boolean"?i:Tc(i),s]},useSyncExternalStore:lw,useId:Mw};Rs.useCacheRefresh=Lw,Rs.useMemoCache=Ng,Rs.useHostTransitionStatus=Fg,Rs.useFormState=Tw,Rs.useActionState=Tw,Rs.useOptimistic=function(i,s){var l=zt();return pw(l,rt,i,s)};var Ka={readContext:Tn,use:df,useCallback:Dw,useContext:Tn,useEffect:Lg,useImperativeHandle:xw,useInsertionEffect:Sw,useLayoutEffect:Rw,useMemo:Pw,useReducer:kg,useRef:Iw,useState:function(){return kg(Pi)},useDebugValue:Ug,useDeferredValue:function(i,s){var l=zt();return rt===null?Bg(l,i,s):Nw(l,rt.memoizedState,i,s)},useTransition:function(){var i=kg(Pi)[0],s=zt().memoizedState;return[typeof i=="boolean"?i:Tc(i),s]},useSyncExternalStore:lw,useId:Mw};Ka.useCacheRefresh=Lw,Ka.useMemoCache=Ng,Ka.useHostTransitionStatus=Fg,Ka.useFormState=bw,Ka.useActionState=bw,Ka.useOptimistic=function(i,s){var l=zt();return rt!==null?pw(l,rt,i,s):(l.baseState=i,[i,l.queue.dispatch])};function qg(i,s,l,c){s=i.memoizedState,l=l(c,s),l=l==null?s:P({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Hg={isMounted:function(i){return(i=i._reactInternals)?we(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var c=Xn(),f=Ds(c);f.payload=s,l!=null&&(f.callback=l),s=Ps(i,f,c),s!==null&&(Pn(s,i,c),Ac(s,i,c))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var c=Xn(),f=Ds(c);f.tag=1,f.payload=s,l!=null&&(f.callback=l),s=Ps(i,f,c),s!==null&&(Pn(s,i,c),Ac(s,i,c))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Xn(),c=Ds(l);c.tag=2,s!=null&&(c.callback=s),s=Ps(i,c,l),s!==null&&(Pn(s,i,l),Ac(s,i,l))}};function Fw(i,s,l,c,f,g,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,g,T):s.prototype&&s.prototype.isPureReactComponent?!uc(l,c)||!uc(f,g):!0}function jw(i,s,l,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==i&&Hg.enqueueReplaceState(s,s.state,null)}function Qa(i,s){var l=s;if("ref"in s){l={};for(var c in s)c!=="ref"&&(l[c]=s[c])}if(i=i.defaultProps){l===s&&(l=P({},l));for(var f in i)l[f]===void 0&&(l[f]=i[f])}return l}var _f=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function qw(i){_f(i)}function Hw(i){console.error(i)}function Gw(i){_f(i)}function yf(i,s){try{var l=i.onUncaughtError;l(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function $w(i,s,l){try{var c=i.onCaughtError;c(l.value,{componentStack:l.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Gg(i,s,l){return l=Ds(l),l.tag=3,l.payload={element:null},l.callback=function(){yf(i,s)},l}function Kw(i){return i=Ds(i),i.tag=3,i}function Qw(i,s,l,c){var f=l.type.getDerivedStateFromError;if(typeof f=="function"){var g=c.value;i.payload=function(){return f(g)},i.callback=function(){$w(s,l,c)}}var T=l.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(i.callback=function(){$w(s,l,c),typeof f!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var b=c.stack;this.componentDidCatch(c.value,{componentStack:b!==null?b:""})})}function UD(i,s,l,c,f){if(l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=l.alternate,s!==null&&Ic(s,l,f,!0),l=pr.current,l!==null){switch(l.tag){case 13:return Kr===null?S_():l.alternate===null&&Rt===0&&(Rt=3),l.flags&=-257,l.flags|=65536,l.lanes=f,c===Tg?l.flags|=16384:(s=l.updateQueue,s===null?l.updateQueue=new Set([c]):s.add(c),C_(i,c,f)),!1;case 22:return l.flags|=65536,c===Tg?l.flags|=16384:(s=l.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},l.updateQueue=s):(l=s.retryQueue,l===null?s.retryQueue=new Set([c]):l.add(c)),C_(i,c,f)),!1}throw Error(r(435,l.tag))}return C_(i,c,f),S_(),!1}if(We)return s=pr.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,c!==Eg&&(i=Error(r(422),{cause:c}),fc(hr(i,l)))):(c!==Eg&&(s=Error(r(423),{cause:c}),fc(hr(s,l))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,c=hr(c,l),f=Gg(i.stateNode,c,f),a_(i,f),Rt!==4&&(Rt=2)),!1;var g=Error(r(520),{cause:c});if(g=hr(g,l),Oc===null?Oc=[g]:Oc.push(g),Rt!==4&&(Rt=2),s===null)return!0;c=hr(c,l),l=s;do{switch(l.tag){case 3:return l.flags|=65536,i=f&-f,l.lanes|=i,i=Gg(l.stateNode,c,i),a_(l,i),!1;case 1:if(s=l.type,g=l.stateNode,(l.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ls===null||!Ls.has(g))))return l.flags|=65536,f&=-f,l.lanes|=f,f=Kw(f),Qw(f,i,l,c),a_(l,f),!1}l=l.return}while(l!==null);return!1}var Ww=Error(r(461)),sn=!1;function pn(i,s,l,c){s.child=i===null?ew(s,null,l,c):qa(s,i.child,l,c)}function Yw(i,s,l,c,f){l=l.render;var g=s.ref;if("ref"in c){var T={};for(var b in c)b!=="ref"&&(T[b]=c[b])}else T=c;return Ya(s),c=Cg(i,s,l,T,g,f),b=xg(),i!==null&&!sn?(Dg(i,s,f),Ni(i,s,f)):(We&&b&&yg(s),s.flags|=1,pn(i,s,c,f),s.child)}function Xw(i,s,l,c,f){if(i===null){var g=l.type;return typeof g=="function"&&!p_(g)&&g.defaultProps===void 0&&l.compare===null?(s.tag=15,s.type=g,Zw(i,s,g,c,f)):(i=bf(l.type,null,c,s,s.mode,f),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,!e_(i,f)){var T=g.memoizedProps;if(l=l.compare,l=l!==null?l:uc,l(T,c)&&i.ref===s.ref)return Ni(i,s,f)}return s.flags|=1,i=Vs(g,c),i.ref=s.ref,i.return=s,s.child=i}function Zw(i,s,l,c,f){if(i!==null){var g=i.memoizedProps;if(uc(g,c)&&i.ref===s.ref)if(sn=!1,s.pendingProps=c=g,e_(i,f))(i.flags&131072)!==0&&(sn=!0);else return s.lanes=i.lanes,Ni(i,s,f)}return $g(i,s,l,c,f)}function Jw(i,s,l){var c=s.pendingProps,f=c.children,g=(s.stateNode._pendingVisibility&2)!==0,T=i!==null?i.memoizedState:null;if(bc(i,s),c.mode==="hidden"||g){if((s.flags&128)!==0){if(c=T!==null?T.baseLanes|l:l,i!==null){for(f=s.child=i.child,g=0;f!==null;)g=g|f.lanes|f.childLanes,f=f.sibling;s.childLanes=g&~c}else s.childLanes=0,s.child=null;return e0(i,s,c,l)}if((l&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},i!==null&&lf(s,T!==null?T.cachePool:null),T!==null?tw(s,T):wg(),nw(s);else return s.lanes=s.childLanes=536870912,e0(i,s,T!==null?T.baseLanes|l:l,l)}else T!==null?(lf(s,T.cachePool),tw(s,T),As(),s.memoizedState=null):(i!==null&&lf(s,null),wg(),As());return pn(i,s,f,l),s.child}function e0(i,s,l,c){var f=Sg();return f=f===null?null:{parent:Yt._currentValue,pool:f},s.memoizedState={baseLanes:l,cachePool:f},i!==null&&lf(s,null),wg(),nw(s),i!==null&&Ic(i,s,c,!0),null}function bc(i,s){var l=s.ref;if(l===null)i!==null&&i.ref!==null&&(s.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(i===null||i.ref!==l)&&(s.flags|=2097664)}}function $g(i,s,l,c,f){return Ya(s),l=Cg(i,s,l,c,void 0,f),c=xg(),i!==null&&!sn?(Dg(i,s,f),Ni(i,s,f)):(We&&c&&yg(s),s.flags|=1,pn(i,s,l,f),s.child)}function t0(i,s,l,c,f,g){return Ya(s),s.updateQueue=null,l=ow(s,c,l,f),aw(i),c=xg(),i!==null&&!sn?(Dg(i,s,g),Ni(i,s,g)):(We&&c&&yg(s),s.flags|=1,pn(i,s,l,g),s.child)}function n0(i,s,l,c,f){if(Ya(s),s.stateNode===null){var g=ll,T=l.contextType;typeof T=="object"&&T!==null&&(g=Tn(T)),g=new l(c,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Hg,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=c,g.state=s.memoizedState,g.refs={},i_(s),T=l.contextType,g.context=typeof T=="object"&&T!==null?Tn(T):ll,g.state=s.memoizedState,T=l.getDerivedStateFromProps,typeof T=="function"&&(qg(s,l,T,c),g.state=s.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&Hg.enqueueReplaceState(g,g.state,null),Rc(s,c,g,f),Sc(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(i===null){g=s.stateNode;var b=s.memoizedProps,C=Qa(l,b);g.props=C;var M=g.context,Z=l.contextType;T=ll,typeof Z=="object"&&Z!==null&&(T=Tn(Z));var ne=l.getDerivedStateFromProps;Z=typeof ne=="function"||typeof g.getSnapshotBeforeUpdate=="function",b=s.pendingProps!==b,Z||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b||M!==T)&&jw(s,g,c,T),xs=!1;var G=s.memoizedState;g.state=G,Rc(s,c,g,f),Sc(),M=s.memoizedState,b||G!==M||xs?(typeof ne=="function"&&(qg(s,l,ne,c),M=s.memoizedState),(C=xs||Fw(s,l,C,c,G,M,T))?(Z||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=M),g.props=c,g.state=M,g.context=T,c=C):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{g=s.stateNode,s_(i,s),T=s.memoizedProps,Z=Qa(l,T),g.props=Z,ne=s.pendingProps,G=g.context,M=l.contextType,C=ll,typeof M=="object"&&M!==null&&(C=Tn(M)),b=l.getDerivedStateFromProps,(M=typeof b=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==ne||G!==C)&&jw(s,g,c,C),xs=!1,G=s.memoizedState,g.state=G,Rc(s,c,g,f),Sc();var Y=s.memoizedState;T!==ne||G!==Y||xs||i!==null&&i.dependencies!==null&&vf(i.dependencies)?(typeof b=="function"&&(qg(s,l,b,c),Y=s.memoizedState),(Z=xs||Fw(s,l,Z,c,G,Y,C)||i!==null&&i.dependencies!==null&&vf(i.dependencies))?(M||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,Y,C),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,Y,C)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=Y),g.props=c,g.state=Y,g.context=C,c=Z):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),c=!1)}return g=c,bc(i,s),c=(s.flags&128)!==0,g||c?(g=s.stateNode,l=c&&typeof l.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,i!==null&&c?(s.child=qa(s,i.child,null,f),s.child=qa(s,null,l,f)):pn(i,s,l,f),s.memoizedState=g.state,i=s.child):i=Ni(i,s,f),i}function r0(i,s,l,c){return dc(),s.flags|=256,pn(i,s,l,c),s.child}var Kg={dehydrated:null,treeContext:null,retryLane:0};function Qg(i){return{baseLanes:i,cachePool:sw()}}function Wg(i,s,l){return i=i!==null?i.childLanes&~l:0,s&&(i|=yr),i}function i0(i,s,l){var c=s.pendingProps,f=!1,g=(s.flags&128)!==0,T;if((T=g)||(T=i!==null&&i.memoizedState===null?!1:(Wt.current&2)!==0),T&&(f=!0,s.flags&=-129),T=(s.flags&32)!==0,s.flags&=-33,i===null){if(We){if(f?Is(s):As(),We){var b=fn,C;if(C=b){e:{for(C=b,b=$r;C.nodeType!==8;){if(!b){b=null;break e}if(C=xr(C.nextSibling),C===null){b=null;break e}}b=C}b!==null?(s.memoizedState={dehydrated:b,treeContext:za!==null?{id:Ci,overflow:xi}:null,retryLane:536870912},C=_r(18,null,null,0),C.stateNode=b,C.return=s,s.child=C,Dn=s,fn=null,C=!0):C=!1}C||ja(s)}if(b=s.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?s.lanes=16:s.lanes=536870912,null;Di(s)}return b=c.children,c=c.fallback,f?(As(),f=s.mode,b=Xg({mode:"hidden",children:b},f),c=Za(c,f,l,null),b.return=s,c.return=s,b.sibling=c,s.child=b,f=s.child,f.memoizedState=Qg(l),f.childLanes=Wg(i,T,l),s.memoizedState=Kg,c):(Is(s),Yg(s,b))}if(C=i.memoizedState,C!==null&&(b=C.dehydrated,b!==null)){if(g)s.flags&256?(Is(s),s.flags&=-257,s=Zg(i,s,l)):s.memoizedState!==null?(As(),s.child=i.child,s.flags|=128,s=null):(As(),f=c.fallback,b=s.mode,c=Xg({mode:"visible",children:c.children},b),f=Za(f,b,l,null),f.flags|=2,c.return=s,f.return=s,c.sibling=f,s.child=c,qa(s,i.child,null,l),c=s.child,c.memoizedState=Qg(l),c.childLanes=Wg(i,T,l),s.memoizedState=Kg,s=f);else if(Is(s),b.data==="$!"){if(T=b.nextSibling&&b.nextSibling.dataset,T)var M=T.dgst;T=M,c=Error(r(419)),c.stack="",c.digest=T,fc({value:c,source:null,stack:null}),s=Zg(i,s,l)}else if(sn||Ic(i,s,l,!1),T=(l&i.childLanes)!==0,sn||T){if(T=at,T!==null){if(c=l&-l,(c&42)!==0)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=(c&(T.suspendedLanes|l))!==0?0:c,c!==0&&c!==C.retryLane)throw C.retryLane=c,bs(i,c),Pn(T,i,c),Ww}b.data==="$?"||S_(),s=Zg(i,s,l)}else b.data==="$?"?(s.flags|=128,s.child=i.child,s=JD.bind(null,i),b._reactRetry=s,s=null):(i=C.treeContext,fn=xr(b.nextSibling),Dn=s,We=!0,Rr=null,$r=!1,i!==null&&(dr[fr++]=Ci,dr[fr++]=xi,dr[fr++]=za,Ci=i.id,xi=i.overflow,za=s),s=Yg(s,c.children),s.flags|=4096);return s}return f?(As(),f=c.fallback,b=s.mode,C=i.child,M=C.sibling,c=Vs(C,{mode:"hidden",children:c.children}),c.subtreeFlags=C.subtreeFlags&31457280,M!==null?f=Vs(M,f):(f=Za(f,b,l,null),f.flags|=2),f.return=s,c.return=s,c.sibling=f,s.child=c,c=f,f=s.child,b=i.child.memoizedState,b===null?b=Qg(l):(C=b.cachePool,C!==null?(M=Yt._currentValue,C=C.parent!==M?{parent:M,pool:M}:C):C=sw(),b={baseLanes:b.baseLanes|l,cachePool:C}),f.memoizedState=b,f.childLanes=Wg(i,T,l),s.memoizedState=Kg,c):(Is(s),l=i.child,i=l.sibling,l=Vs(l,{mode:"visible",children:c.children}),l.return=s,l.sibling=null,i!==null&&(T=s.deletions,T===null?(s.deletions=[i],s.flags|=16):T.push(i)),s.child=l,s.memoizedState=null,l)}function Yg(i,s){return s=Xg({mode:"visible",children:s},i.mode),s.return=i,i.child=s}function Xg(i,s){return D0(i,s,0,null)}function Zg(i,s,l){return qa(s,i.child,null,l),i=Yg(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function s0(i,s,l){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),n_(i.return,s,l)}function Jg(i,s,l,c,f){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=f)}function a0(i,s,l){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if(pn(i,s,c.children,l),c=Wt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&s0(i,l,s);else if(i.tag===19)s0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch(Ke(Wt,c),f){case"forwards":for(l=s.child,f=null;l!==null;)i=l.alternate,i!==null&&of(i)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),Jg(s,!1,f,l,g);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(i=f.alternate,i!==null&&of(i)===null){s.child=f;break}i=f.sibling,f.sibling=l,l=f,f=i}Jg(s,!0,l,null,g);break;case"together":Jg(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ni(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Ms|=s.lanes,(l&s.childLanes)===0)if(i!==null){if(Ic(i,s,l,!1),(l&s.childLanes)===0)return null}else return null;if(i!==null&&s.child!==i.child)throw Error(r(153));if(s.child!==null){for(i=s.child,l=Vs(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Vs(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function e_(i,s){return(i.lanes&s)!==0?!0:(i=i.dependencies,!!(i!==null&&vf(i)))}function BD(i,s,l){switch(s.tag){case 3:os(s,s.stateNode.containerInfo),Cs(s,Yt,i.memoizedState.cache),dc();break;case 27:case 5:ju(s);break;case 4:os(s,s.stateNode.containerInfo);break;case 10:Cs(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(Is(s),s.flags|=128,null):(l&s.child.childLanes)!==0?i0(i,s,l):(Is(s),i=Ni(i,s,l),i!==null?i.sibling:null);Is(s);break;case 19:var f=(i.flags&128)!==0;if(c=(l&s.childLanes)!==0,c||(Ic(i,s,l,!1),c=(l&s.childLanes)!==0),f){if(c)return a0(i,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ke(Wt,Wt.current),c)break;return null;case 22:case 23:return s.lanes=0,Jw(i,s,l);case 24:Cs(s,Yt,i.memoizedState.cache)}return Ni(i,s,l)}function o0(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps)sn=!0;else{if(!e_(i,l)&&(s.flags&128)===0)return sn=!1,BD(i,s,l);sn=(i.flags&131072)!==0}else sn=!1,We&&(s.flags&1048576)!==0&&GT(s,tf,s.index);switch(s.lanes=0,s.tag){case 16:e:{i=s.pendingProps;var c=s.elementType,f=c._init;if(c=f(c._payload),s.type=c,typeof c=="function")p_(c)?(i=Qa(c,i),s.tag=1,s=n0(null,s,c,i,l)):(s.tag=0,s=$g(null,s,c,i,l));else{if(c!=null){if(f=c.$$typeof,f===D){s.tag=11,s=Yw(null,s,c,i,l);break e}else if(f===H){s.tag=14,s=Xw(null,s,c,i,l);break e}}throw s=R(c)||c,Error(r(306,s,""))}}return s;case 0:return $g(i,s,s.type,s.pendingProps,l);case 1:return c=s.type,f=Qa(c,s.pendingProps),n0(i,s,c,f,l);case 3:e:{if(os(s,s.stateNode.containerInfo),i===null)throw Error(r(387));var g=s.pendingProps;f=s.memoizedState,c=f.element,s_(i,s),Rc(s,g,null,l);var T=s.memoizedState;if(g=T.cache,Cs(s,Yt,g),g!==f.cache&&r_(s,[Yt],l,!0),Sc(),g=T.element,f.isDehydrated)if(f={element:g,isDehydrated:!1,cache:T.cache},s.updateQueue.baseState=f,s.memoizedState=f,s.flags&256){s=r0(i,s,g,l);break e}else if(g!==c){c=hr(Error(r(424)),s),fc(c),s=r0(i,s,g,l);break e}else for(fn=xr(s.stateNode.containerInfo.firstChild),Dn=s,We=!0,Rr=null,$r=!0,l=ew(s,null,g,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(dc(),g===c){s=Ni(i,s,l);break e}pn(i,s,g,l)}s=s.child}return s;case 26:return bc(i,s),i===null?(l=cb(s.type,null,s.pendingProps,null))?s.memoizedState=l:We||(l=s.type,i=s.pendingProps,c=Vf(rr.current).createElement(l),c[tn]=s,c[$t]=i,mn(c,l,i),_t(c),s.stateNode=c):s.memoizedState=cb(s.type,i.memoizedProps,s.pendingProps,i.memoizedState),null;case 27:return ju(s),i===null&&We&&(c=s.stateNode=ob(s.type,s.pendingProps,rr.current),Dn=s,$r=!0,fn=xr(c.firstChild)),c=s.pendingProps.children,i!==null||We?pn(i,s,c,l):s.child=qa(s,null,c,l),bc(i,s),s.child;case 5:return i===null&&We&&((f=c=fn)&&(c=mP(c,s.type,s.pendingProps,$r),c!==null?(s.stateNode=c,Dn=s,fn=xr(c.firstChild),$r=!1,f=!0):f=!1),f||ja(s)),ju(s),f=s.type,g=s.pendingProps,T=i!==null?i.memoizedProps:null,c=g.children,z_(f,g)?c=null:T!==null&&z_(f,T)&&(s.flags|=32),s.memoizedState!==null&&(f=Cg(i,s,ND,null,null,l),jc._currentValue=f),bc(i,s),pn(i,s,c,l),s.child;case 6:return i===null&&We&&((i=l=fn)&&(l=gP(l,s.pendingProps,$r),l!==null?(s.stateNode=l,Dn=s,fn=null,i=!0):i=!1),i||ja(s)),null;case 13:return i0(i,s,l);case 4:return os(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=qa(s,null,c,l):pn(i,s,c,l),s.child;case 11:return Yw(i,s,s.type,s.pendingProps,l);case 7:return pn(i,s,s.pendingProps,l),s.child;case 8:return pn(i,s,s.pendingProps.children,l),s.child;case 12:return pn(i,s,s.pendingProps.children,l),s.child;case 10:return c=s.pendingProps,Cs(s,s.type,c.value),pn(i,s,c.children,l),s.child;case 9:return f=s.type._context,c=s.pendingProps.children,Ya(s),f=Tn(f),c=c(f),s.flags|=1,pn(i,s,c,l),s.child;case 14:return Xw(i,s,s.type,s.pendingProps,l);case 15:return Zw(i,s,s.type,s.pendingProps,l);case 19:return a0(i,s,l);case 22:return Jw(i,s,l);case 24:return Ya(s),c=Tn(Yt),i===null?(f=Sg(),f===null&&(f=at,g=Ig(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=l),f=g),s.memoizedState={parent:c,cache:f},i_(s),Cs(s,Yt,f)):((i.lanes&l)!==0&&(s_(i,s),Rc(s,null,null,l),Sc()),f=i.memoizedState,g=s.memoizedState,f.parent!==c?(f={parent:c,cache:c},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Cs(s,Yt,c)):(c=g.cache,Cs(s,Yt,c),c!==f.cache&&r_(s,[Yt],l,!0))),pn(i,s,s.pendingProps.children,l),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}var t_=Me(null),Wa=null,Oi=null;function Cs(i,s,l){Ke(t_,s._currentValue),s._currentValue=l}function ki(i){i._currentValue=t_.current,Ze(t_)}function n_(i,s,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===l)break;i=i.return}}function r_(i,s,l,c){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var g=f.dependencies;if(g!==null){var T=f.child;g=g.firstContext;e:for(;g!==null;){var b=g;g=f;for(var C=0;C<s.length;C++)if(b.context===s[C]){g.lanes|=l,b=g.alternate,b!==null&&(b.lanes|=l),n_(g.return,l,i),c||(T=null);break e}g=b.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(r(341));T.lanes|=l,g=T.alternate,g!==null&&(g.lanes|=l),n_(T,l,i),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===i){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function Ic(i,s,l,c){i=null;for(var f=s,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var b=f.type;Kn(f.pendingProps.value,T.value)||(i!==null?i.push(b):i=[b])}}else if(f===as.current){if(T=f.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(jc):i=[jc])}f=f.return}i!==null&&r_(s,i,l,c),s.flags|=262144}function vf(i){for(i=i.firstContext;i!==null;){if(!Kn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Ya(i){Wa=i,Oi=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Tn(i){return l0(Wa,i)}function Ef(i,s){return Wa===null&&Ya(i),l0(i,s)}function l0(i,s){var l=s._currentValue;if(s={context:s,memoizedValue:l,next:null},Oi===null){if(i===null)throw Error(r(308));Oi=s,i.dependencies={lanes:0,firstContext:s},i.flags|=524288}else Oi=Oi.next=s;return l}var xs=!1;function i_(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function s_(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Ds(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Ps(i,s,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(vt&2)!==0){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,s=Jd(i),qT(i,null,l),s}return Zd(i,c,s,l),Jd(i)}function Ac(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194176)!==0)){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,fs(i,l)}}function a_(i,s){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var f=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var T={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};g===null?f=g=T:g=g.next=T,l=l.next}while(l!==null);g===null?f=g=s:g=g.next=s}else f=g=s;l={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}var o_=!1;function Sc(){if(o_){var i=pl;if(i!==null)throw i}}function Rc(i,s,l,c){o_=!1;var f=i.updateQueue;xs=!1;var g=f.firstBaseUpdate,T=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var C=b,M=C.next;C.next=null,T===null?g=M:T.next=M,T=C;var Z=i.alternate;Z!==null&&(Z=Z.updateQueue,b=Z.lastBaseUpdate,b!==T&&(b===null?Z.firstBaseUpdate=M:b.next=M,Z.lastBaseUpdate=C))}if(g!==null){var ne=f.baseState;T=0,Z=M=C=null,b=g;do{var G=b.lane&-536870913,Y=G!==b.lane;if(Y?(Ge&G)===G:(c&G)===G){G!==0&&G===fl&&(o_=!0),Z!==null&&(Z=Z.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Ee=i,De=b;G=s;var Ct=l;switch(De.tag){case 1:if(Ee=De.payload,typeof Ee=="function"){ne=Ee.call(Ct,ne,G);break e}ne=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=De.payload,G=typeof Ee=="function"?Ee.call(Ct,ne,G):Ee,G==null)break e;ne=P({},ne,G);break e;case 2:xs=!0}}G=b.callback,G!==null&&(i.flags|=64,Y&&(i.flags|=8192),Y=f.callbacks,Y===null?f.callbacks=[G]:Y.push(G))}else Y={lane:G,tag:b.tag,payload:b.payload,callback:b.callback,next:null},Z===null?(M=Z=Y,C=ne):Z=Z.next=Y,T|=G;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;Y=b,b=Y.next,Y.next=null,f.lastBaseUpdate=Y,f.shared.pending=null}}while(!0);Z===null&&(C=ne),f.baseState=C,f.firstBaseUpdate=M,f.lastBaseUpdate=Z,g===null&&(f.shared.lanes=0),Ms|=T,i.lanes=T,i.memoizedState=ne}}function u0(i,s){if(typeof i!="function")throw Error(r(191,i));i.call(s)}function c0(i,s){var l=i.callbacks;if(l!==null)for(i.callbacks=null,i=0;i<l.length;i++)u0(l[i],s)}function Cc(i,s){try{var l=s.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var f=c.next;l=f;do{if((l.tag&i)===i){c=void 0;var g=l.create,T=l.inst;c=g(),T.destroy=c}l=l.next}while(l!==f)}}catch(b){st(s,s.return,b)}}function Ns(i,s,l){try{var c=s.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var g=f.next;c=g;do{if((c.tag&i)===i){var T=c.inst,b=T.destroy;if(b!==void 0){T.destroy=void 0,f=s;var C=l;try{b()}catch(M){st(f,C,M)}}}c=c.next}while(c!==g)}}catch(M){st(s,s.return,M)}}function h0(i){var s=i.updateQueue;if(s!==null){var l=i.stateNode;try{c0(s,l)}catch(c){st(i,i.return,c)}}}function d0(i,s,l){l.props=Qa(i.type,i.memoizedProps),l.state=i.memoizedState;try{l.componentWillUnmount()}catch(c){st(i,s,c)}}function Xa(i,s){try{var l=i.ref;if(l!==null){var c=i.stateNode;switch(i.tag){case 26:case 27:case 5:var f=c;break;default:f=c}typeof l=="function"?i.refCleanup=l(f):l.current=f}}catch(g){st(i,s,g)}}function Qn(i,s){var l=i.ref,c=i.refCleanup;if(l!==null)if(typeof c=="function")try{c()}catch(f){st(i,s,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(f){st(i,s,f)}else l.current=null}function f0(i){var s=i.type,l=i.memoizedProps,c=i.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":l.autoFocus&&c.focus();break e;case"img":l.src?c.src=l.src:l.srcSet&&(c.srcset=l.srcSet)}}catch(f){st(i,i.return,f)}}function p0(i,s,l){try{var c=i.stateNode;cP(c,i.type,l,s),c[$t]=s}catch(f){st(i,i.return,f)}}function m0(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27||i.tag===4}function l_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||m0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==27&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function u_(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=kf));else if(c!==4&&c!==27&&(i=i.child,i!==null))for(u_(i,s,l),i=i.sibling;i!==null;)u_(i,s,l),i=i.sibling}function Tf(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(c!==4&&c!==27&&(i=i.child,i!==null))for(Tf(i,s,l),i=i.sibling;i!==null;)Tf(i,s,l),i=i.sibling}var Vi=!1,St=!1,c_=!1,g0=typeof WeakSet=="function"?WeakSet:Set,an=null,_0=!1;function zD(i,s){if(i=i.containerInfo,U_=Ff,i=kT(i),dg(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var T=0,b=-1,C=-1,M=0,Z=0,ne=i,G=null;t:for(;;){for(var Y;ne!==l||f!==0&&ne.nodeType!==3||(b=T+f),ne!==g||c!==0&&ne.nodeType!==3||(C=T+c),ne.nodeType===3&&(T+=ne.nodeValue.length),(Y=ne.firstChild)!==null;)G=ne,ne=Y;for(;;){if(ne===i)break t;if(G===l&&++M===f&&(b=T),G===g&&++Z===c&&(C=T),(Y=ne.nextSibling)!==null)break;ne=G,G=ne.parentNode}ne=Y}l=b===-1||C===-1?null:{start:b,end:C}}else l=null}l=l||{start:0,end:0}}else l=null;for(B_={focusedElem:i,selectionRange:l},Ff=!1,an=s;an!==null;)if(s=an,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,an=i;else for(;an!==null;){switch(s=an,g=s.alternate,i=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&g!==null){i=void 0,l=s,f=g.memoizedProps,g=g.memoizedState,c=l.stateNode;try{var Ee=Qa(l.type,f,l.elementType===l.type);i=c.getSnapshotBeforeUpdate(Ee,g),c.__reactInternalSnapshotBeforeUpdate=i}catch(De){st(l,l.return,De)}}break;case 3:if((i&1024)!==0){if(i=s.stateNode.containerInfo,l=i.nodeType,l===9)q_(i);else if(l===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":q_(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(r(163))}if(i=s.sibling,i!==null){i.return=s.return,an=i;break}an=s.return}return Ee=_0,_0=!1,Ee}function y0(i,s,l){var c=l.flags;switch(l.tag){case 0:case 11:case 15:Li(i,l),c&4&&Cc(5,l);break;case 1:if(Li(i,l),c&4)if(i=l.stateNode,s===null)try{i.componentDidMount()}catch(b){st(l,l.return,b)}else{var f=Qa(l.type,s.memoizedProps);s=s.memoizedState;try{i.componentDidUpdate(f,s,i.__reactInternalSnapshotBeforeUpdate)}catch(b){st(l,l.return,b)}}c&64&&h0(l),c&512&&Xa(l,l.return);break;case 3:if(Li(i,l),c&64&&(c=l.updateQueue,c!==null)){if(i=null,l.child!==null)switch(l.child.tag){case 27:case 5:i=l.child.stateNode;break;case 1:i=l.child.stateNode}try{c0(c,i)}catch(b){st(l,l.return,b)}}break;case 26:Li(i,l),c&512&&Xa(l,l.return);break;case 27:case 5:Li(i,l),s===null&&c&4&&f0(l),c&512&&Xa(l,l.return);break;case 12:Li(i,l);break;case 13:Li(i,l),c&4&&T0(i,l);break;case 22:if(f=l.memoizedState!==null||Vi,!f){s=s!==null&&s.memoizedState!==null||St;var g=Vi,T=St;Vi=f,(St=s)&&!T?Os(i,l,(l.subtreeFlags&8772)!==0):Li(i,l),Vi=g,St=T}c&512&&(l.memoizedProps.mode==="manual"?Xa(l,l.return):Qn(l,l.return));break;default:Li(i,l)}}function v0(i){var s=i.alternate;s!==null&&(i.alternate=null,v0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&Ra(s)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Ft=null,Wn=!1;function Mi(i,s,l){for(l=l.child;l!==null;)E0(i,s,l),l=l.sibling}function E0(i,s,l){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(ls,l)}catch{}switch(l.tag){case 26:St||Qn(l,s),Mi(i,s,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:St||Qn(l,s);var c=Ft,f=Wn;for(Ft=l.stateNode,Mi(i,s,l),l=l.stateNode,s=l.attributes;s.length;)l.removeAttributeNode(s[0]);Ra(l),Ft=c,Wn=f;break;case 5:St||Qn(l,s);case 6:f=Ft;var g=Wn;if(Ft=null,Mi(i,s,l),Ft=f,Wn=g,Ft!==null)if(Wn)try{i=Ft,c=l.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)}catch(T){st(l,s,T)}else try{Ft.removeChild(l.stateNode)}catch(T){st(l,s,T)}break;case 18:Ft!==null&&(Wn?(s=Ft,l=l.stateNode,s.nodeType===8?j_(s.parentNode,l):s.nodeType===1&&j_(s,l),$c(s)):j_(Ft,l.stateNode));break;case 4:c=Ft,f=Wn,Ft=l.stateNode.containerInfo,Wn=!0,Mi(i,s,l),Ft=c,Wn=f;break;case 0:case 11:case 14:case 15:St||Ns(2,l,s),St||Ns(4,l,s),Mi(i,s,l);break;case 1:St||(Qn(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"&&d0(l,s,c)),Mi(i,s,l);break;case 21:Mi(i,s,l);break;case 22:St||Qn(l,s),St=(c=St)||l.memoizedState!==null,Mi(i,s,l),St=c;break;default:Mi(i,s,l)}}function T0(i,s){if(s.memoizedState===null&&(i=s.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{$c(i)}catch(l){st(s,s.return,l)}}function FD(i){switch(i.tag){case 13:case 19:var s=i.stateNode;return s===null&&(s=i.stateNode=new g0),s;case 22:return i=i.stateNode,s=i._retryCache,s===null&&(s=i._retryCache=new g0),s;default:throw Error(r(435,i.tag))}}function h_(i,s){var l=FD(i);s.forEach(function(c){var f=eP.bind(null,i,c);l.has(c)||(l.add(c),c.then(f,f))})}function mr(i,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var f=l[c],g=i,T=s,b=T;e:for(;b!==null;){switch(b.tag){case 27:case 5:Ft=b.stateNode,Wn=!1;break e;case 3:Ft=b.stateNode.containerInfo,Wn=!0;break e;case 4:Ft=b.stateNode.containerInfo,Wn=!0;break e}b=b.return}if(Ft===null)throw Error(r(160));E0(g,T,f),Ft=null,Wn=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)w0(s,i),s=s.sibling}var Cr=null;function w0(i,s){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:mr(s,i),gr(i),c&4&&(Ns(3,i,i.return),Cc(3,i),Ns(5,i,i.return));break;case 1:mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),c&64&&Vi&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(l=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=l===null?c:l.concat(c))));break;case 26:var f=Cr;if(mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),c&4){var g=l!==null?l.memoizedState:null;if(c=i.memoizedState,l===null)if(c===null)if(i.stateNode===null){e:{c=i.type,l=i.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":g=f.getElementsByTagName("title")[0],(!g||g[ms]||g[tn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(c),f.head.insertBefore(g,f.querySelector("head > title"))),mn(g,c,l),g[tn]=i,_t(g),c=g;break e;case"link":var T=fb("link","href",f).get(c+(l.href||""));if(T){for(var b=0;b<T.length;b++)if(g=T[b],g.getAttribute("href")===(l.href==null?null:l.href)&&g.getAttribute("rel")===(l.rel==null?null:l.rel)&&g.getAttribute("title")===(l.title==null?null:l.title)&&g.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){T.splice(b,1);break t}}g=f.createElement(c),mn(g,c,l),f.head.appendChild(g);break;case"meta":if(T=fb("meta","content",f).get(c+(l.content||""))){for(b=0;b<T.length;b++)if(g=T[b],g.getAttribute("content")===(l.content==null?null:""+l.content)&&g.getAttribute("name")===(l.name==null?null:l.name)&&g.getAttribute("property")===(l.property==null?null:l.property)&&g.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&g.getAttribute("charset")===(l.charSet==null?null:l.charSet)){T.splice(b,1);break t}}g=f.createElement(c),mn(g,c,l),f.head.appendChild(g);break;default:throw Error(r(468,c))}g[tn]=i,_t(g),c=g}i.stateNode=c}else pb(f,i.type,i.stateNode);else i.stateNode=db(f,c,i.memoizedProps);else g!==c?(g===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):g.count--,c===null?pb(f,i.type,i.stateNode):db(f,c,i.memoizedProps)):c===null&&i.stateNode!==null&&p0(i,i.memoizedProps,l.memoizedProps)}break;case 27:if(c&4&&i.alternate===null){f=i.stateNode,g=i.memoizedProps;try{for(var C=f.firstChild;C;){var M=C.nextSibling,Z=C.nodeName;C[ms]||Z==="HEAD"||Z==="BODY"||Z==="SCRIPT"||Z==="STYLE"||Z==="LINK"&&C.rel.toLowerCase()==="stylesheet"||f.removeChild(C),C=M}for(var ne=i.type,G=f.attributes;G.length;)f.removeAttributeNode(G[0]);mn(f,ne,g),f[tn]=i,f[$t]=g}catch(Ee){st(i,i.return,Ee)}}case 5:if(mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),i.flags&32){f=i.stateNode;try{ar(f,"")}catch(Ee){st(i,i.return,Ee)}}c&4&&i.stateNode!=null&&(f=i.memoizedProps,p0(i,f,l!==null?l.memoizedProps:f)),c&1024&&(c_=!0);break;case 6:if(mr(s,i),gr(i),c&4){if(i.stateNode===null)throw Error(r(162));c=i.memoizedProps,l=i.stateNode;try{l.nodeValue=c}catch(Ee){st(i,i.return,Ee)}}break;case 3:if(Uf=null,f=Cr,Cr=Mf(s.containerInfo),mr(s,i),Cr=f,gr(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{$c(s.containerInfo)}catch(Ee){st(i,i.return,Ee)}c_&&(c_=!1,b0(i));break;case 4:c=Cr,Cr=Mf(i.stateNode.containerInfo),mr(s,i),gr(i),Cr=c;break;case 12:mr(s,i),gr(i);break;case 13:mr(s,i),gr(i),i.child.flags&8192&&i.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(E_=Ln()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,h_(i,c)));break;case 22:if(c&512&&(St||l===null||Qn(l,l.return)),C=i.memoizedState!==null,M=l!==null&&l.memoizedState!==null,Z=Vi,ne=St,Vi=Z||C,St=ne||M,mr(s,i),St=ne,Vi=Z,gr(i),s=i.stateNode,s._current=i,s._visibility&=-3,s._visibility|=s._pendingVisibility&2,c&8192&&(s._visibility=C?s._visibility&-2:s._visibility|1,C&&(s=Vi||St,l===null||M||s||yl(i)),i.memoizedProps===null||i.memoizedProps.mode!=="manual"))e:for(l=null,s=i;;){if(s.tag===5||s.tag===26||s.tag===27){if(l===null){M=l=s;try{if(f=M.stateNode,C)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=M.stateNode,b=M.memoizedProps.style;var Y=b!=null&&b.hasOwnProperty("display")?b.display:null;T.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(Ee){st(M,M.return,Ee)}}}else if(s.tag===6){if(l===null){M=s;try{M.stateNode.nodeValue=C?"":M.memoizedProps}catch(Ee){st(M,M.return,Ee)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===i)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break e;for(;s.sibling===null;){if(s.return===null||s.return===i)break e;l===s&&(l=null),s=s.return}l===s&&(l=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=i.updateQueue,c!==null&&(l=c.retryQueue,l!==null&&(c.retryQueue=null,h_(i,l))));break;case 19:mr(s,i),gr(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,h_(i,c)));break;case 21:break;default:mr(s,i),gr(i)}}function gr(i){var s=i.flags;if(s&2){try{if(i.tag!==27){e:{for(var l=i.return;l!==null;){if(m0(l)){var c=l;break e}l=l.return}throw Error(r(160))}switch(c.tag){case 27:var f=c.stateNode,g=l_(i);Tf(i,g,f);break;case 5:var T=c.stateNode;c.flags&32&&(ar(T,""),c.flags&=-33);var b=l_(i);Tf(i,b,T);break;case 3:case 4:var C=c.stateNode.containerInfo,M=l_(i);u_(i,M,C);break;default:throw Error(r(161))}}}catch(Z){st(i,i.return,Z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function b0(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var s=i;b0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),i=i.sibling}}function Li(i,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)y0(i,s.alternate,s),s=s.sibling}function yl(i){for(i=i.child;i!==null;){var s=i;switch(s.tag){case 0:case 11:case 14:case 15:Ns(4,s,s.return),yl(s);break;case 1:Qn(s,s.return);var l=s.stateNode;typeof l.componentWillUnmount=="function"&&d0(s,s.return,l),yl(s);break;case 26:case 27:case 5:Qn(s,s.return),yl(s);break;case 22:Qn(s,s.return),s.memoizedState===null&&yl(s);break;default:yl(s)}i=i.sibling}}function Os(i,s,l){for(l=l&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,f=i,g=s,T=g.flags;switch(g.tag){case 0:case 11:case 15:Os(f,g,l),Cc(4,g);break;case 1:if(Os(f,g,l),c=g,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(M){st(c,c.return,M)}if(c=g,f=c.updateQueue,f!==null){var b=c.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)u0(C[f],b)}catch(M){st(c,c.return,M)}}l&&T&64&&h0(g),Xa(g,g.return);break;case 26:case 27:case 5:Os(f,g,l),l&&c===null&&T&4&&f0(g),Xa(g,g.return);break;case 12:Os(f,g,l);break;case 13:Os(f,g,l),l&&T&4&&T0(f,g);break;case 22:g.memoizedState===null&&Os(f,g,l),Xa(g,g.return);break;default:Os(f,g,l)}s=s.sibling}}function d_(i,s){var l=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==l&&(i!=null&&i.refCount++,l!=null&&yc(l))}function f_(i,s){i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&yc(i))}function ks(i,s,l,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)I0(i,s,l,c),s=s.sibling}function I0(i,s,l,c){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ks(i,s,l,c),f&2048&&Cc(9,s);break;case 3:ks(i,s,l,c),f&2048&&(i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&yc(i)));break;case 12:if(f&2048){ks(i,s,l,c),i=s.stateNode;try{var g=s.memoizedProps,T=g.id,b=g.onPostCommit;typeof b=="function"&&b(T,s.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){st(s,s.return,C)}}else ks(i,s,l,c);break;case 23:break;case 22:g=s.stateNode,s.memoizedState!==null?g._visibility&4?ks(i,s,l,c):xc(i,s):g._visibility&4?ks(i,s,l,c):(g._visibility|=4,vl(i,s,l,c,(s.subtreeFlags&10256)!==0)),f&2048&&d_(s.alternate,s);break;case 24:ks(i,s,l,c),f&2048&&f_(s.alternate,s);break;default:ks(i,s,l,c)}}function vl(i,s,l,c,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var g=i,T=s,b=l,C=c,M=T.flags;switch(T.tag){case 0:case 11:case 15:vl(g,T,b,C,f),Cc(8,T);break;case 23:break;case 22:var Z=T.stateNode;T.memoizedState!==null?Z._visibility&4?vl(g,T,b,C,f):xc(g,T):(Z._visibility|=4,vl(g,T,b,C,f)),f&&M&2048&&d_(T.alternate,T);break;case 24:vl(g,T,b,C,f),f&&M&2048&&f_(T.alternate,T);break;default:vl(g,T,b,C,f)}s=s.sibling}}function xc(i,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var l=i,c=s,f=c.flags;switch(c.tag){case 22:xc(l,c),f&2048&&d_(c.alternate,c);break;case 24:xc(l,c),f&2048&&f_(c.alternate,c);break;default:xc(l,c)}s=s.sibling}}var Dc=8192;function El(i){if(i.subtreeFlags&Dc)for(i=i.child;i!==null;)A0(i),i=i.sibling}function A0(i){switch(i.tag){case 26:El(i),i.flags&Dc&&i.memoizedState!==null&&xP(Cr,i.memoizedState,i.memoizedProps);break;case 5:El(i);break;case 3:case 4:var s=Cr;Cr=Mf(i.stateNode.containerInfo),El(i),Cr=s;break;case 22:i.memoizedState===null&&(s=i.alternate,s!==null&&s.memoizedState!==null?(s=Dc,Dc=16777216,El(i),Dc=s):El(i));break;default:El(i)}}function S0(i){var s=i.alternate;if(s!==null&&(i=s.child,i!==null)){s.child=null;do s=i.sibling,i.sibling=null,i=s;while(i!==null)}}function Pc(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];an=c,C0(c,i)}S0(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)R0(i),i=i.sibling}function R0(i){switch(i.tag){case 0:case 11:case 15:Pc(i),i.flags&2048&&Ns(9,i,i.return);break;case 3:Pc(i);break;case 12:Pc(i);break;case 22:var s=i.stateNode;i.memoizedState!==null&&s._visibility&4&&(i.return===null||i.return.tag!==13)?(s._visibility&=-5,wf(i)):Pc(i);break;default:Pc(i)}}function wf(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];an=c,C0(c,i)}S0(i)}for(i=i.child;i!==null;){switch(s=i,s.tag){case 0:case 11:case 15:Ns(8,s,s.return),wf(s);break;case 22:l=s.stateNode,l._visibility&4&&(l._visibility&=-5,wf(s));break;default:wf(s)}i=i.sibling}}function C0(i,s){for(;an!==null;){var l=an;switch(l.tag){case 0:case 11:case 15:Ns(8,l,s);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var c=l.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:yc(l.memoizedState.cache)}if(c=l.child,c!==null)c.return=l,an=c;else e:for(l=i;an!==null;){c=an;var f=c.sibling,g=c.return;if(v0(c),c===l){an=null;break e}if(f!==null){f.return=g,an=f;break e}an=g}}}function jD(i,s,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _r(i,s,l,c){return new jD(i,s,l,c)}function p_(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Vs(i,s){var l=i.alternate;return l===null?(l=_r(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&31457280,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l.refCleanup=i.refCleanup,l}function x0(i,s){i.flags&=31457282;var l=i.alternate;return l===null?(i.childLanes=0,i.lanes=s,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,s=l.dependencies,i.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),i}function bf(i,s,l,c,f,g){var T=0;if(c=i,typeof i=="function")p_(i)&&(T=1);else if(typeof i=="string")T=RP(i,l,Ut.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case p:return Za(l.children,f,g,s);case m:T=8,f|=24;break;case y:return i=_r(12,l,s,f|2),i.elementType=y,i.lanes=g,i;case U:return i=_r(13,l,s,f),i.elementType=U,i.lanes=g,i;case L:return i=_r(19,l,s,f),i.elementType=L,i.lanes=g,i;case $:return D0(l,f,g,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case v:case S:T=10;break e;case w:T=9;break e;case D:T=11;break e;case H:T=14;break e;case W:T=16,c=null;break e}T=29,l=Error(r(130,i===null?"null":typeof i,"")),c=null}return s=_r(T,l,s,f),s.elementType=i,s.type=c,s.lanes=g,s}function Za(i,s,l,c){return i=_r(7,i,c,s),i.lanes=l,i}function D0(i,s,l,c){i=_r(22,i,c,s),i.elementType=$,i.lanes=l;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)===0){var T=bs(g,2);T!==null&&(f._pendingVisibility|=2,Pn(T,g,2))}},attach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)!==0){var T=bs(g,2);T!==null&&(f._pendingVisibility&=-3,Pn(T,g,2))}}};return i.stateNode=f,i}function m_(i,s,l){return i=_r(6,i,null,s),i.lanes=l,i}function g_(i,s,l){return s=_r(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function Ui(i){i.flags|=4}function P0(i,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!mb(s)){if(s=pr.current,s!==null&&((Ge&4194176)===Ge?Kr!==null:(Ge&62914560)!==Ge&&(Ge&536870912)===0||s!==Kr))throw mc=Tg,QT;i.flags|=8192}}function If(i,s){s!==null&&(i.flags|=4),i.flags&16384&&(s=i.tag!==22?hs():536870912,i.lanes|=s,wl|=s)}function Nc(i,s){if(!We)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function yt(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(s)for(var f=i.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags&31457280,c|=f.flags&31457280,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=c,i.childLanes=l,s}function qD(i,s,l){var c=s.pendingProps;switch(vg(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(s),null;case 1:return yt(s),null;case 3:return l=s.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),ki(Yt),_i(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(i===null||i.child===null)&&(hc(s)?Ui(s):i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Rr!==null&&(I_(Rr),Rr=null))),yt(s),null;case 26:return l=s.memoizedState,i===null?(Ui(s),l!==null?(yt(s),P0(s,l)):(yt(s),s.flags&=-16777217)):l?l!==i.memoizedState?(Ui(s),yt(s),P0(s,l)):(yt(s),s.flags&=-16777217):(i.memoizedProps!==c&&Ui(s),yt(s),s.flags&=-16777217),null;case 27:Fo(s),l=rr.current;var f=s.type;if(i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return yt(s),null}i=Ut.current,hc(s)?$T(s):(i=ob(f,c,l),s.stateNode=i,Ui(s))}return yt(s),null;case 5:if(Fo(s),l=s.type,i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return yt(s),null}if(i=Ut.current,hc(s))$T(s);else{switch(f=Vf(rr.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?f.createElement(l,{is:c.is}):f.createElement(l)}}i[tn]=s,i[$t]=c;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=i;e:switch(mn(i,l,c),l){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ui(s)}}return yt(s),s.flags&=-16777217,null;case 6:if(i&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(r(166));if(i=rr.current,hc(s)){if(i=s.stateNode,l=s.memoizedProps,c=null,f=Dn,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}i[tn]=s,i=!!(i.nodeValue===l||c!==null&&c.suppressHydrationWarning===!0||tb(i.nodeValue,l)),i||ja(s)}else i=Vf(i).createTextNode(c),i[tn]=s,s.stateNode=i}return yt(s),null;case 13:if(c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=hc(s),c!==null&&c.dehydrated!==null){if(i===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[tn]=s}else dc(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;yt(s),f=!1}else Rr!==null&&(I_(Rr),Rr=null),f=!0;if(!f)return s.flags&256?(Di(s),s):(Di(s),null)}if(Di(s),(s.flags&128)!==0)return s.lanes=l,s;if(l=c!==null,i=i!==null&&i.memoizedState!==null,l){c=s.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==f&&(c.flags|=2048)}return l!==i&&l&&(s.child.flags|=8192),If(s,s.updateQueue),yt(s),null;case 4:return _i(),i===null&&V_(s.stateNode.containerInfo),yt(s),null;case 10:return ki(s.type),yt(s),null;case 19:if(Ze(Wt),f=s.memoizedState,f===null)return yt(s),null;if(c=(s.flags&128)!==0,g=f.rendering,g===null)if(c)Nc(f,!1);else{if(Rt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(g=of(i),g!==null){for(s.flags|=128,Nc(f,!1),i=g.updateQueue,s.updateQueue=i,If(s,i),s.subtreeFlags=0,i=l,l=s.child;l!==null;)x0(l,i),l=l.sibling;return Ke(Wt,Wt.current&1|2),s.child}i=i.sibling}f.tail!==null&&Ln()>Af&&(s.flags|=128,c=!0,Nc(f,!1),s.lanes=4194304)}else{if(!c)if(i=of(g),i!==null){if(s.flags|=128,c=!0,i=i.updateQueue,s.updateQueue=i,If(s,i),Nc(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!We)return yt(s),null}else 2*Ln()-f.renderingStartTime>Af&&l!==536870912&&(s.flags|=128,c=!0,Nc(f,!1),s.lanes=4194304);f.isBackwards?(g.sibling=s.child,s.child=g):(i=f.last,i!==null?i.sibling=g:s.child=g,f.last=g)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Ln(),s.sibling=null,i=Wt.current,Ke(Wt,c?i&1|2:i&1),s):(yt(s),null);case 22:case 23:return Di(s),bg(),c=s.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(l&536870912)!==0&&(s.flags&128)===0&&(yt(s),s.subtreeFlags&6&&(s.flags|=8192)):yt(s),l=s.updateQueue,l!==null&&If(s,l.retryQueue),l=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048),i!==null&&Ze(Ha),null;case 24:return l=null,i!==null&&(l=i.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),ki(Yt),yt(s),null;case 25:return null}throw Error(r(156,s.tag))}function HD(i,s){switch(vg(s),s.tag){case 1:return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return ki(Yt),_i(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 26:case 27:case 5:return Fo(s),null;case 13:if(Di(s),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(r(340));dc()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ze(Wt),null;case 4:return _i(),null;case 10:return ki(s.type),null;case 22:case 23:return Di(s),bg(),i!==null&&Ze(Ha),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 24:return ki(Yt),null;case 25:return null;default:return null}}function N0(i,s){switch(vg(s),s.tag){case 3:ki(Yt),_i();break;case 26:case 27:case 5:Fo(s);break;case 4:_i();break;case 13:Di(s);break;case 19:Ze(Wt);break;case 10:ki(s.type);break;case 22:case 23:Di(s),bg(),i!==null&&Ze(Ha);break;case 24:ki(Yt)}}var GD={getCacheForType:function(i){var s=Tn(Yt),l=s.data.get(i);return l===void 0&&(l=i(),s.data.set(i,l)),l}},$D=typeof WeakMap=="function"?WeakMap:Map,vt=0,at=null,Ue=null,Ge=0,ot=0,Yn=null,Bi=!1,Tl=!1,__=!1,zi=0,Rt=0,Ms=0,Ja=0,y_=0,yr=0,wl=0,Oc=null,Wr=null,v_=!1,E_=0,Af=1/0,Sf=null,Ls=null,Rf=!1,eo=null,kc=0,T_=0,w_=null,Vc=0,b_=null;function Xn(){if((vt&2)!==0&&Ge!==0)return Ge&-Ge;if(A.T!==null){var i=fl;return i!==0?i:P_()}return Nd()}function O0(){yr===0&&(yr=(Ge&536870912)===0||We?Ku():536870912);var i=pr.current;return i!==null&&(i.flags|=32),yr}function Pn(i,s,l){(i===at&&ot===2||i.cancelPendingCommit!==null)&&(bl(i,0),Fi(i,Ge,yr,!1)),Ot(i,l),((vt&2)===0||i!==at)&&(i===at&&((vt&2)===0&&(Ja|=l),Rt===4&&Fi(i,Ge,yr,!1)),Yr(i))}function k0(i,s,l){if((vt&6)!==0)throw Error(r(327));var c=!l&&(s&60)===0&&(s&i.expiredLanes)===0||cs(i,s),f=c?WD(i,s):R_(i,s,!0),g=c;do{if(f===0){Tl&&!c&&Fi(i,s,0,!1);break}else if(f===6)Fi(i,s,0,!Bi);else{if(l=i.current.alternate,g&&!KD(l)){f=R_(i,s,!1),g=!1;continue}if(f===2){if(g=s,i.errorRecoveryDisabledLanes&g)var T=0;else T=i.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){s=T;e:{var b=i;f=Oc;var C=b.current.memoizedState.isDehydrated;if(C&&(bl(b,T).flags|=256),T=R_(b,T,!1),T!==2){if(__&&!C){b.errorRecoveryDisabledLanes|=g,Ja|=g,f=4;break e}g=Wr,Wr=f,g!==null&&I_(g)}f=T}if(g=!1,f!==2)continue}}if(f===1){bl(i,0),Fi(i,s,0,!0);break}e:{switch(c=i,f){case 0:case 1:throw Error(r(345));case 4:if((s&4194176)===s){Fi(c,s,yr,!Bi);break e}break;case 2:Wr=null;break;case 3:case 5:break;default:throw Error(r(329))}if(c.finishedWork=l,c.finishedLanes=s,(s&62914560)===s&&(g=E_+300-Ln(),10<g)){if(Fi(c,s,yr,!Bi),ir(c,0)!==0)break e;c.timeoutHandle=ib(V0.bind(null,c,l,Wr,Sf,v_,s,yr,Ja,wl,Bi,2,-0,0),g);break e}V0(c,l,Wr,Sf,v_,s,yr,Ja,wl,Bi,0,-0,0)}}break}while(!0);Yr(i)}function I_(i){Wr===null?Wr=i:Wr.push.apply(Wr,i)}function V0(i,s,l,c,f,g,T,b,C,M,Z,ne,G){var Y=s.subtreeFlags;if((Y&8192||(Y&16785408)===16785408)&&(Fc={stylesheets:null,count:0,unsuspend:CP},A0(s),s=DP(),s!==null)){i.cancelPendingCommit=s(j0.bind(null,i,l,c,f,T,b,C,1,ne,G)),Fi(i,g,T,!M);return}j0(i,l,c,f,T,b,C,Z,ne,G)}function KD(i){for(var s=i;;){var l=s.tag;if((l===0||l===11||l===15)&&s.flags&16384&&(l=s.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var c=0;c<l.length;c++){var f=l[c],g=f.getSnapshot;f=f.value;try{if(!Kn(g(),f))return!1}catch{return!1}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Fi(i,s,l,c){s&=~y_,s&=~Ja,i.suspendedLanes|=s,i.pingedLanes&=~s,c&&(i.warmLanes|=s),c=i.expirationTimes;for(var f=s;0<f;){var g=31-Rn(f),T=1<<g;c[g]=-1,f&=~T}l!==0&&ds(i,l,s)}function Cf(){return(vt&6)===0?(Mc(0),!1):!0}function A_(){if(Ue!==null){if(ot===0)var i=Ue.return;else i=Ue,Oi=Wa=null,Pg(i),hl=null,gc=0,i=Ue;for(;i!==null;)N0(i.alternate,i),i=i.return;Ue=null}}function bl(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;l!==-1&&(i.timeoutHandle=-1,dP(l)),l=i.cancelPendingCommit,l!==null&&(i.cancelPendingCommit=null,l()),A_(),at=i,Ue=l=Vs(i.current,null),Ge=s,ot=0,Yn=null,Bi=!1,Tl=cs(i,s),__=!1,wl=yr=y_=Ja=Ms=Rt=0,Wr=Oc=null,v_=!1,(s&8)!==0&&(s|=s&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=s;0<c;){var f=31-Rn(c),g=1<<f;s|=i[f],c&=~g}return zi=s,Xd(),l}function M0(i,s){Ve=null,A.H=Qr,s===pc?(s=XT(),ot=3):s===QT?(s=XT(),ot=4):ot=s===Ww?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Yn=s,Ue===null&&(Rt=1,yf(i,hr(s,i.current)))}function L0(){var i=A.H;return A.H=Qr,i===null?Qr:i}function U0(){var i=A.A;return A.A=GD,i}function S_(){Rt=4,Bi||(Ge&4194176)!==Ge&&pr.current!==null||(Tl=!0),(Ms&134217727)===0&&(Ja&134217727)===0||at===null||Fi(at,Ge,yr,!1)}function R_(i,s,l){var c=vt;vt|=2;var f=L0(),g=U0();(at!==i||Ge!==s)&&(Sf=null,bl(i,s)),s=!1;var T=Rt;e:do try{if(ot!==0&&Ue!==null){var b=Ue,C=Yn;switch(ot){case 8:A_(),T=6;break e;case 3:case 2:case 6:pr.current===null&&(s=!0);var M=ot;if(ot=0,Yn=null,Il(i,b,C,M),l&&Tl){T=0;break e}break;default:M=ot,ot=0,Yn=null,Il(i,b,C,M)}}QD(),T=Rt;break}catch(Z){M0(i,Z)}while(!0);return s&&i.shellSuspendCounter++,Oi=Wa=null,vt=c,A.H=f,A.A=g,Ue===null&&(at=null,Ge=0,Xd()),T}function QD(){for(;Ue!==null;)B0(Ue)}function WD(i,s){var l=vt;vt|=2;var c=L0(),f=U0();at!==i||Ge!==s?(Sf=null,Af=Ln()+500,bl(i,s)):Tl=cs(i,s);e:do try{if(ot!==0&&Ue!==null){s=Ue;var g=Yn;t:switch(ot){case 1:ot=0,Yn=null,Il(i,s,g,1);break;case 2:if(WT(g)){ot=0,Yn=null,z0(s);break}s=function(){ot===2&&at===i&&(ot=7),Yr(i)},g.then(s,s);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:WT(g)?(ot=0,Yn=null,z0(s)):(ot=0,Yn=null,Il(i,s,g,7));break;case 5:var T=null;switch(Ue.tag){case 26:T=Ue.memoizedState;case 5:case 27:var b=Ue;if(!T||mb(T)){ot=0,Yn=null;var C=b.sibling;if(C!==null)Ue=C;else{var M=b.return;M!==null?(Ue=M,xf(M)):Ue=null}break t}}ot=0,Yn=null,Il(i,s,g,5);break;case 6:ot=0,Yn=null,Il(i,s,g,6);break;case 8:A_(),Rt=6;break e;default:throw Error(r(462))}}YD();break}catch(Z){M0(i,Z)}while(!0);return Oi=Wa=null,A.H=c,A.A=f,vt=l,Ue!==null?0:(at=null,Ge=0,Xd(),Rt)}function YD(){for(;Ue!==null&&!tg();)B0(Ue)}function B0(i){var s=o0(i.alternate,i,zi);i.memoizedProps=i.pendingProps,s===null?xf(i):Ue=s}function z0(i){var s=i,l=s.alternate;switch(s.tag){case 15:case 0:s=t0(l,s,s.pendingProps,s.type,void 0,Ge);break;case 11:s=t0(l,s,s.pendingProps,s.type.render,s.ref,Ge);break;case 5:Pg(s);default:N0(l,s),s=Ue=x0(s,zi),s=o0(l,s,zi)}i.memoizedProps=i.pendingProps,s===null?xf(i):Ue=s}function Il(i,s,l,c){Oi=Wa=null,Pg(s),hl=null,gc=0;var f=s.return;try{if(UD(i,f,s,l,Ge)){Rt=1,yf(i,hr(l,i.current)),Ue=null;return}}catch(g){if(f!==null)throw Ue=f,g;Rt=1,yf(i,hr(l,i.current)),Ue=null;return}s.flags&32768?(We||c===1?i=!0:Tl||(Ge&536870912)!==0?i=!1:(Bi=i=!0,(c===2||c===3||c===6)&&(c=pr.current,c!==null&&c.tag===13&&(c.flags|=16384))),F0(s,i)):xf(s)}function xf(i){var s=i;do{if((s.flags&32768)!==0){F0(s,Bi);return}i=s.return;var l=qD(s.alternate,s,zi);if(l!==null){Ue=l;return}if(s=s.sibling,s!==null){Ue=s;return}Ue=s=i}while(s!==null);Rt===0&&(Rt=5)}function F0(i,s){do{var l=HD(i.alternate,i);if(l!==null){l.flags&=32767,Ue=l;return}if(l=i.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!s&&(i=i.sibling,i!==null)){Ue=i;return}Ue=i=l}while(i!==null);Rt=6,Ue=null}function j0(i,s,l,c,f,g,T,b,C,M){var Z=A.T,ne=pe.p;try{pe.p=2,A.T=null,XD(i,s,l,c,ne,f,g,T,b,C,M)}finally{A.T=Z,pe.p=ne}}function XD(i,s,l,c,f,g,T,b){do Al();while(eo!==null);if((vt&6)!==0)throw Error(r(327));var C=i.finishedWork;if(c=i.finishedLanes,C===null)return null;if(i.finishedWork=null,i.finishedLanes=0,C===i.current)throw Error(r(177));i.callbackNode=null,i.callbackPriority=0,i.cancelPendingCommit=null;var M=C.lanes|C.childLanes;if(M|=gg,Dd(i,c,M,g,T,b),i===at&&(Ue=at=null,Ge=0),(C.subtreeFlags&10256)===0&&(C.flags&10256)===0||Rf||(Rf=!0,T_=M,w_=l,tP(yi,function(){return Al(),null})),l=(C.flags&15990)!==0,(C.subtreeFlags&15990)!==0||l?(l=A.T,A.T=null,g=pe.p,pe.p=2,T=vt,vt|=4,zD(i,C),w0(C,i),TD(B_,i.containerInfo),Ff=!!U_,B_=U_=null,i.current=C,y0(i,C.alternate,C),qu(),vt=T,pe.p=g,A.T=l):i.current=C,Rf?(Rf=!1,eo=i,kc=c):q0(i,M),M=i.pendingLanes,M===0&&(Ls=null),Gu(C.stateNode),Yr(i),s!==null)for(f=i.onRecoverableError,C=0;C<s.length;C++)M=s[C],f(M.value,{componentStack:M.stack});return(kc&3)!==0&&Al(),M=i.pendingLanes,(c&4194218)!==0&&(M&42)!==0?i===b_?Vc++:(Vc=0,b_=i):Vc=0,Mc(0),null}function q0(i,s){(i.pooledCacheLanes&=s)===0&&(s=i.pooledCache,s!=null&&(i.pooledCache=null,yc(s)))}function Al(){if(eo!==null){var i=eo,s=T_;T_=0;var l=Pd(kc),c=A.T,f=pe.p;try{if(pe.p=32>l?32:l,A.T=null,eo===null)var g=!1;else{l=w_,w_=null;var T=eo,b=kc;if(eo=null,kc=0,(vt&6)!==0)throw Error(r(331));var C=vt;if(vt|=4,R0(T.current),I0(T,T.current,b,l),vt=C,Mc(0,!1),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(ls,T)}catch{}g=!0}return g}finally{pe.p=f,A.T=c,q0(i,s)}}return!1}function H0(i,s,l){s=hr(l,s),s=Gg(i.stateNode,s,2),i=Ps(i,s,2),i!==null&&(Ot(i,2),Yr(i))}function st(i,s,l){if(i.tag===3)H0(i,i,l);else for(;s!==null;){if(s.tag===3){H0(s,i,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ls===null||!Ls.has(c))){i=hr(l,i),l=Kw(2),c=Ps(s,l,2),c!==null&&(Qw(l,c,s,i),Ot(c,2),Yr(c));break}}s=s.return}}function C_(i,s,l){var c=i.pingCache;if(c===null){c=i.pingCache=new $D;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(l)||(__=!0,f.add(l),i=ZD.bind(null,i,s,l),s.then(i,i))}function ZD(i,s,l){var c=i.pingCache;c!==null&&c.delete(s),i.pingedLanes|=i.suspendedLanes&l,i.warmLanes&=~l,at===i&&(Ge&l)===l&&(Rt===4||Rt===3&&(Ge&62914560)===Ge&&300>Ln()-E_?(vt&2)===0&&bl(i,0):y_|=l,wl===Ge&&(wl=0)),Yr(i)}function G0(i,s){s===0&&(s=hs()),i=bs(i,s),i!==null&&(Ot(i,s),Yr(i))}function JD(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),G0(i,l)}function eP(i,s){var l=0;switch(i.tag){case 13:var c=i.stateNode,f=i.memoizedState;f!==null&&(l=f.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(s),G0(i,l)}function tP(i,s){return Ia(i,s)}var Df=null,Sl=null,x_=!1,Pf=!1,D_=!1,to=0;function Yr(i){i!==Sl&&i.next===null&&(Sl===null?Df=Sl=i:Sl=Sl.next=i),Pf=!0,x_||(x_=!0,rP(nP))}function Mc(i,s){if(!D_&&Pf){D_=!0;do for(var l=!1,c=Df;c!==null;){if(i!==0){var f=c.pendingLanes;if(f===0)var g=0;else{var T=c.suspendedLanes,b=c.pingedLanes;g=(1<<31-Rn(42|i)+1)-1,g&=f&~(T&~b),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(l=!0,Q0(c,g))}else g=Ge,g=ir(c,c===at?g:0),(g&3)===0||cs(c,g)||(l=!0,Q0(c,g));c=c.next}while(l);D_=!1}}function nP(){Pf=x_=!1;var i=0;to!==0&&(hP()&&(i=to),to=0);for(var s=Ln(),l=null,c=Df;c!==null;){var f=c.next,g=$0(c,s);g===0?(c.next=null,l===null?Df=f:l.next=f,f===null&&(Sl=l)):(l=c,(i!==0||(g&3)!==0)&&(Pf=!0)),c=f}Mc(i)}function $0(i,s){for(var l=i.suspendedLanes,c=i.pingedLanes,f=i.expirationTimes,g=i.pendingLanes&-62914561;0<g;){var T=31-Rn(g),b=1<<T,C=f[T];C===-1?((b&l)===0||(b&c)!==0)&&(f[T]=Ho(b,s)):C<=s&&(i.expiredLanes|=b),g&=~b}if(s=at,l=Ge,l=ir(i,i===s?l:0),c=i.callbackNode,l===0||i===s&&ot===2||i.cancelPendingCommit!==null)return c!==null&&c!==null&&qo(c),i.callbackNode=null,i.callbackPriority=0;if((l&3)===0||cs(i,l)){if(s=l&-l,s===i.callbackPriority)return s;switch(c!==null&&qo(c),Pd(l)){case 2:case 8:l=en;break;case 32:l=yi;break;case 268435456:l=Hu;break;default:l=yi}return c=K0.bind(null,i),l=Ia(l,c),i.callbackPriority=s,i.callbackNode=l,s}return c!==null&&c!==null&&qo(c),i.callbackPriority=2,i.callbackNode=null,2}function K0(i,s){var l=i.callbackNode;if(Al()&&i.callbackNode!==l)return null;var c=Ge;return c=ir(i,i===at?c:0),c===0?null:(k0(i,c,s),$0(i,Ln()),i.callbackNode!=null&&i.callbackNode===l?K0.bind(null,i):null)}function Q0(i,s){if(Al())return null;k0(i,s,!0)}function rP(i){fP(function(){(vt&6)!==0?Ia(Gt,i):i()})}function P_(){return to===0&&(to=Ku()),to}function W0(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Br(""+i)}function Y0(i,s){var l=s.ownerDocument.createElement("input");return l.name=s.name,l.value=s.value,i.id&&l.setAttribute("form",i.id),s.parentNode.insertBefore(l,s),i=new FormData(i),l.parentNode.removeChild(l),i}function iP(i,s,l,c,f){if(s==="submit"&&l&&l.stateNode===f){var g=W0((f[$t]||null).action),T=c.submitter;T&&(s=(s=T[$t]||null)?W0(s.formAction):T.getAttribute("formAction"),s!==null&&(g=s,T=null));var b=new Xo("action","action",null,c,f);i.push({event:b,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(to!==0){var C=T?Y0(f,T):new FormData(f);zg(l,{pending:!0,data:C,method:f.method,action:g},null,C)}}else typeof g=="function"&&(b.preventDefault(),C=T?Y0(f,T):new FormData(f),zg(l,{pending:!0,data:C,method:f.method,action:g},g,C))},currentTarget:f}]})}}for(var N_=0;N_<jT.length;N_++){var O_=jT[N_],sP=O_.toLowerCase(),aP=O_[0].toUpperCase()+O_.slice(1);Sr(sP,"on"+aP)}Sr(LT,"onAnimationEnd"),Sr(UT,"onAnimationIteration"),Sr(BT,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(bD,"onTransitionRun"),Sr(ID,"onTransitionStart"),Sr(AD,"onTransitionCancel"),Sr(zT,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oP=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lc));function X0(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var T=c.length-1;0<=T;T--){var b=c[T],C=b.instance,M=b.currentTarget;if(b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=M;try{g(f)}catch(Z){_f(Z)}f.currentTarget=null,g=C}else for(T=0;T<c.length;T++){if(b=c[T],C=b.instance,M=b.currentTarget,b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=M;try{g(f)}catch(Z){_f(Z)}f.currentTarget=null,g=C}}}}function je(i,s){var l=s[Sa];l===void 0&&(l=s[Sa]=new Set);var c=i+"__bubble";l.has(c)||(Z0(s,i,2,!1),l.add(c))}function k_(i,s,l){var c=0;s&&(c|=4),Z0(l,i,c,s)}var Nf="_reactListening"+Math.random().toString(36).slice(2);function V_(i){if(!i[Nf]){i[Nf]=!0,Wu.forEach(function(l){l!=="selectionchange"&&(oP.has(l)||k_(l,!1,i),k_(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Nf]||(s[Nf]=!0,k_("selectionchange",!1,s))}}function Z0(i,s,l,c){switch(Tb(s)){case 2:var f=OP;break;case 8:f=kP;break;default:f=Q_}l=f.bind(null,s,l,i),f=void 0,!lr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?i.addEventListener(s,l,{capture:!0,passive:f}):i.addEventListener(s,l,!0):f!==void 0?i.addEventListener(s,l,{passive:f}):i.addEventListener(s,l,!1)}function M_(i,s,l,c,f){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var b=c.stateNode.containerInfo;if(b===f||b.nodeType===8&&b.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var C=T.tag;if((C===3||C===4)&&(C=T.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;T=T.return}for(;b!==null;){if(T=Ar(b),T===null)return;if(C=T.tag,C===5||C===6||C===26||C===27){c=g=T;continue e}b=b.parentNode}}c=c.return}Md(function(){var M=g,Z=Yo(l),ne=[];e:{var G=FT.get(i);if(G!==void 0){var Y=Xo,Ee=i;switch(i){case"keypress":if(Fr(l)===0)break e;case"keydown":case"keyup":Y=rl;break;case"focusin":Ee="focus",Y=el;break;case"focusout":Ee="blur",Y=el;break;case"beforeblur":case"afterblur":Y=el;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=ur;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Hd;break;case LT:case UT:case BT:Y=tl;break;case zT:Y=$d;break;case"scroll":case"scrollend":Y=Ld;break;case"wheel":Y=il;break;case"copy":case"cut":case"paste":Y=nl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=oc;break;case"toggle":case"beforetoggle":Y=Qd}var De=(s&4)!==0,Ct=!De&&(i==="scroll"||i==="scrollend"),B=De?G!==null?G+"Capture":null:G;De=[];for(var k=M,q;k!==null;){var ee=k;if(q=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||q===null||B===null||(ee=Pa(k,B),ee!=null&&De.push(Uc(k,ee,q))),Ct)break;k=k.return}0<De.length&&(G=new Y(G,Ee,null,l,Z),ne.push({event:G,listeners:De}))}}if((s&7)===0){e:{if(G=i==="mouseover"||i==="pointerover",Y=i==="mouseout"||i==="pointerout",G&&l!==or&&(Ee=l.relatedTarget||l.fromElement)&&(Ar(Ee)||Ee[vi]))break e;if((Y||G)&&(G=Z.window===Z?Z:(G=Z.ownerDocument)?G.defaultView||G.parentWindow:window,Y?(Ee=l.relatedTarget||l.toElement,Y=M,Ee=Ee?Ar(Ee):null,Ee!==null&&(Ct=we(Ee),De=Ee.tag,Ee!==Ct||De!==5&&De!==27&&De!==6)&&(Ee=null)):(Y=null,Ee=M),Y!==Ee)){if(De=ur,ee="onMouseLeave",B="onMouseEnter",k="mouse",(i==="pointerout"||i==="pointerover")&&(De=oc,ee="onPointerLeave",B="onPointerEnter",k="pointer"),Ct=Y==null?G:gs(Y),q=Ee==null?G:gs(Ee),G=new De(ee,k+"leave",Y,l,Z),G.target=Ct,G.relatedTarget=q,ee=null,Ar(Z)===M&&(De=new De(B,k+"enter",Ee,l,Z),De.target=q,De.relatedTarget=Ct,ee=De),Ct=ee,Y&&Ee)t:{for(De=Y,B=Ee,k=0,q=De;q;q=Rl(q))k++;for(q=0,ee=B;ee;ee=Rl(ee))q++;for(;0<k-q;)De=Rl(De),k--;for(;0<q-k;)B=Rl(B),q--;for(;k--;){if(De===B||B!==null&&De===B.alternate)break t;De=Rl(De),B=Rl(B)}De=null}else De=null;Y!==null&&J0(ne,G,Y,De,!1),Ee!==null&&Ct!==null&&J0(ne,Ct,Ee,De,!0)}}e:{if(G=M?gs(M):window,Y=G.nodeName&&G.nodeName.toLowerCase(),Y==="select"||Y==="input"&&G.type==="file")var ye=ST;else if(Qt(G))if(RT)ye=vD;else{ye=_D;var Le=gD}else Y=G.nodeName,!Y||Y.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?M&&ec(M.elementType)&&(ye=ST):ye=yD;if(ye&&(ye=ye(i,M))){Ri(ne,ye,l,Z);break e}Le&&Le(i,G,M),i==="focusout"&&M&&G.type==="number"&&M.memoizedProps.value!=null&&Wo(G,"number",G.value)}switch(Le=M?gs(M):window,i){case"focusin":(Qt(Le)||Le.contentEditable==="true")&&(sl=Le,fg=M,cc=null);break;case"focusout":cc=fg=sl=null;break;case"mousedown":pg=!0;break;case"contextmenu":case"mouseup":case"dragend":pg=!1,VT(ne,l,Z);break;case"selectionchange":if(wD)break;case"keydown":case"keyup":VT(ne,l,Z)}var be;if(Hr)e:{switch(i){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else qe?Q(i,l)&&(Se="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Se="onCompositionStart");Se&&(E&&l.locale!=="ko"&&(qe||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&qe&&(be=nc()):(zr=Z,ws="value"in zr?zr.value:zr.textContent,qe=!0)),Le=Of(M,Se),0<Le.length&&(Se=new sc(Se,i,null,l,Z),ne.push({event:Se,listeners:Le}),be?Se.data=be:(be=ue(l),be!==null&&(Se.data=be)))),(be=_?Kt(i,l):He(i,l))&&(Se=Of(M,"onBeforeInput"),0<Se.length&&(Le=new sc("onBeforeInput","beforeinput",null,l,Z),ne.push({event:Le,listeners:Se}),Le.data=be)),iP(ne,i,M,l,Z)}X0(ne,s)})}function Uc(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Of(i,s){for(var l=s+"Capture",c=[];i!==null;){var f=i,g=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=Pa(i,l),f!=null&&c.unshift(Uc(i,f,g)),f=Pa(i,s),f!=null&&c.push(Uc(i,f,g))),i=i.return}return c}function Rl(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function J0(i,s,l,c,f){for(var g=s._reactName,T=[];l!==null&&l!==c;){var b=l,C=b.alternate,M=b.stateNode;if(b=b.tag,C!==null&&C===c)break;b!==5&&b!==26&&b!==27||M===null||(C=M,f?(M=Pa(l,g),M!=null&&T.unshift(Uc(l,M,C))):f||(M=Pa(l,g),M!=null&&T.push(Uc(l,M,C)))),l=l.return}T.length!==0&&i.push({event:s,listeners:T})}var lP=/\r\n?/g,uP=/\u0000|\uFFFD/g;function eb(i){return(typeof i=="string"?i:""+i).replace(lP,`
`).replace(uP,"")}function tb(i,s){return s=eb(s),eb(i)===s}function kf(){}function it(i,s,l,c,f,g){switch(l){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||ar(i,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&ar(i,""+c);break;case"className":vs(i,"class",c);break;case"tabIndex":vs(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":vs(i,l,c);break;case"style":Vd(i,c,g);break;case"data":if(s!=="object"){vs(i,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||l!=="href")){i.removeAttribute(l);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=Br(""+c),i.setAttribute(l,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(l==="formAction"?(s!=="input"&&it(i,s,"name",f.name,f,null),it(i,s,"formEncType",f.formEncType,f,null),it(i,s,"formMethod",f.formMethod,f,null),it(i,s,"formTarget",f.formTarget,f,null)):(it(i,s,"encType",f.encType,f,null),it(i,s,"method",f.method,f,null),it(i,s,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=Br(""+c),i.setAttribute(l,c);break;case"onClick":c!=null&&(i.onclick=kf);break;case"onScroll":c!=null&&je("scroll",i);break;case"onScrollEnd":c!=null&&je("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}l=Br(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""+c):i.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""):i.removeAttribute(l);break;case"capture":case"download":c===!0?i.setAttribute(l,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,c):i.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(l,c):i.removeAttribute(l);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(l):i.setAttribute(l,c);break;case"popover":je("beforetoggle",i),je("toggle",i),ys(i,"popover",c);break;case"xlinkActuate":sr(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":sr(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":sr(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":sr(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":sr(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":sr(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":sr(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":sr(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":sr(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":ys(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=ag.get(l)||l,ys(i,l,c))}}function L_(i,s,l,c,f,g){switch(l){case"style":Vd(i,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"children":typeof c=="string"?ar(i,c):(typeof c=="number"||typeof c=="bigint")&&ar(i,""+c);break;case"onScroll":c!=null&&je("scroll",i);break;case"onScrollEnd":c!=null&&je("scrollend",i);break;case"onClick":c!=null&&(i.onclick=kf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ko.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(f=l.endsWith("Capture"),s=l.slice(2,f?l.length-7:void 0),g=i[$t]||null,g=g!=null?g[l]:null,typeof g=="function"&&i.removeEventListener(s,g,f),typeof c=="function")){typeof g!="function"&&g!==null&&(l in i?i[l]=null:i.hasAttribute(l)&&i.removeAttribute(l)),i.addEventListener(s,c,f);break e}l in i?i[l]=c:c===!0?i.setAttribute(l,""):ys(i,l,c)}}}function mn(i,s,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",i),je("load",i);var c=!1,f=!1,g;for(g in l)if(l.hasOwnProperty(g)){var T=l[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:it(i,s,g,T,l,null)}}f&&it(i,s,"srcSet",l.srcSet,l,null),c&&it(i,s,"src",l.src,l,null);return;case"input":je("invalid",i);var b=g=T=f=null,C=null,M=null;for(c in l)if(l.hasOwnProperty(c)){var Z=l[c];if(Z!=null)switch(c){case"name":f=Z;break;case"type":T=Z;break;case"checked":C=Z;break;case"defaultChecked":M=Z;break;case"value":g=Z;break;case"defaultValue":b=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,s));break;default:it(i,s,c,Z,l,null)}}xa(i,g,b,C,M,T,f,!1),Ca(i);return;case"select":je("invalid",i),c=T=g=null;for(f in l)if(l.hasOwnProperty(f)&&(b=l[f],b!=null))switch(f){case"value":g=b;break;case"defaultValue":T=b;break;case"multiple":c=b;default:it(i,s,f,b,l,null)}s=g,l=T,i.multiple=!!c,s!=null?Qe(i,!!c,s,!1):l!=null&&Qe(i,!!c,l,!0);return;case"textarea":je("invalid",i),g=f=c=null;for(T in l)if(l.hasOwnProperty(T)&&(b=l[T],b!=null))switch(T){case"value":c=b;break;case"defaultValue":f=b;break;case"children":g=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:it(i,s,T,b,l,null)}Ts(i,c,f,g),Ca(i);return;case"option":for(C in l)if(l.hasOwnProperty(C)&&(c=l[C],c!=null))switch(C){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:it(i,s,C,c,l,null)}return;case"dialog":je("cancel",i),je("close",i);break;case"iframe":case"object":je("load",i);break;case"video":case"audio":for(c=0;c<Lc.length;c++)je(Lc[c],i);break;case"image":je("error",i),je("load",i);break;case"details":je("toggle",i);break;case"embed":case"source":case"link":je("error",i),je("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in l)if(l.hasOwnProperty(M)&&(c=l[M],c!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:it(i,s,M,c,l,null)}return;default:if(ec(s)){for(Z in l)l.hasOwnProperty(Z)&&(c=l[Z],c!==void 0&&L_(i,s,Z,c,l,void 0));return}}for(b in l)l.hasOwnProperty(b)&&(c=l[b],c!=null&&it(i,s,b,c,l,null))}function cP(i,s,l,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,T=null,b=null,C=null,M=null,Z=null;for(Y in l){var ne=l[Y];if(l.hasOwnProperty(Y)&&ne!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":C=ne;default:c.hasOwnProperty(Y)||it(i,s,Y,null,c,ne)}}for(var G in c){var Y=c[G];if(ne=l[G],c.hasOwnProperty(G)&&(Y!=null||ne!=null))switch(G){case"type":g=Y;break;case"name":f=Y;break;case"checked":M=Y;break;case"defaultChecked":Z=Y;break;case"value":T=Y;break;case"defaultValue":b=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(r(137,s));break;default:Y!==ne&&it(i,s,G,Y,c,ne)}}Es(i,T,b,C,M,Z,g,f);return;case"select":Y=T=b=G=null;for(g in l)if(C=l[g],l.hasOwnProperty(g)&&C!=null)switch(g){case"value":break;case"multiple":Y=C;default:c.hasOwnProperty(g)||it(i,s,g,null,c,C)}for(f in c)if(g=c[f],C=l[f],c.hasOwnProperty(f)&&(g!=null||C!=null))switch(f){case"value":G=g;break;case"defaultValue":b=g;break;case"multiple":T=g;default:g!==C&&it(i,s,f,g,c,C)}s=b,l=T,c=Y,G!=null?Qe(i,!!l,G,!1):!!c!=!!l&&(s!=null?Qe(i,!!l,s,!0):Qe(i,!!l,l?[]:"",!1));return;case"textarea":Y=G=null;for(b in l)if(f=l[b],l.hasOwnProperty(b)&&f!=null&&!c.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:it(i,s,b,null,c,f)}for(T in c)if(f=c[T],g=l[T],c.hasOwnProperty(T)&&(f!=null||g!=null))switch(T){case"value":G=f;break;case"defaultValue":Y=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==g&&it(i,s,T,f,c,g)}Da(i,G,Y);return;case"option":for(var Ee in l)if(G=l[Ee],l.hasOwnProperty(Ee)&&G!=null&&!c.hasOwnProperty(Ee))switch(Ee){case"selected":i.selected=!1;break;default:it(i,s,Ee,null,c,G)}for(C in c)if(G=c[C],Y=l[C],c.hasOwnProperty(C)&&G!==Y&&(G!=null||Y!=null))switch(C){case"selected":i.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:it(i,s,C,G,c,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in l)G=l[De],l.hasOwnProperty(De)&&G!=null&&!c.hasOwnProperty(De)&&it(i,s,De,null,c,G);for(M in c)if(G=c[M],Y=l[M],c.hasOwnProperty(M)&&G!==Y&&(G!=null||Y!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(r(137,s));break;default:it(i,s,M,G,c,Y)}return;default:if(ec(s)){for(var Ct in l)G=l[Ct],l.hasOwnProperty(Ct)&&G!==void 0&&!c.hasOwnProperty(Ct)&&L_(i,s,Ct,void 0,c,G);for(Z in c)G=c[Z],Y=l[Z],!c.hasOwnProperty(Z)||G===Y||G===void 0&&Y===void 0||L_(i,s,Z,G,c,Y);return}}for(var B in l)G=l[B],l.hasOwnProperty(B)&&G!=null&&!c.hasOwnProperty(B)&&it(i,s,B,null,c,G);for(ne in c)G=c[ne],Y=l[ne],!c.hasOwnProperty(ne)||G===Y||G==null&&Y==null||it(i,s,ne,G,c,Y)}var U_=null,B_=null;function Vf(i){return i.nodeType===9?i:i.ownerDocument}function nb(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rb(i,s){if(i===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&s==="foreignObject"?0:i}function z_(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var F_=null;function hP(){var i=window.event;return i&&i.type==="popstate"?i===F_?!1:(F_=i,!0):(F_=null,!1)}var ib=typeof setTimeout=="function"?setTimeout:void 0,dP=typeof clearTimeout=="function"?clearTimeout:void 0,sb=typeof Promise=="function"?Promise:void 0,fP=typeof queueMicrotask=="function"?queueMicrotask:typeof sb<"u"?function(i){return sb.resolve(null).then(i).catch(pP)}:ib;function pP(i){setTimeout(function(){throw i})}function j_(i,s){var l=s,c=0;do{var f=l.nextSibling;if(i.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(c===0){i.removeChild(f),$c(s);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=f}while(l);$c(s)}function q_(i){var s=i.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var l=s;switch(s=s.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":q_(l),Ra(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}i.removeChild(l)}}function mP(i,s,l,c){for(;i.nodeType===1;){var f=l;if(i.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[ms])switch(s){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(g=i.getAttribute("rel"),g==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(g!==f.rel||i.getAttribute("href")!==(f.href==null?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(g=i.getAttribute("src"),(g!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(s==="input"&&i.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===g)return i}else return i;if(i=xr(i.nextSibling),i===null)break}return null}function gP(i,s,l){if(s==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!l||(i=xr(i.nextSibling),i===null))return null;return i}function xr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return i}function ab(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}function ob(i,s,l){switch(s=Vf(l),i){case"html":if(i=s.documentElement,!i)throw Error(r(452));return i;case"head":if(i=s.head,!i)throw Error(r(453));return i;case"body":if(i=s.body,!i)throw Error(r(454));return i;default:throw Error(r(451))}}var vr=new Map,lb=new Set;function Mf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.ownerDocument}var ji=pe.d;pe.d={f:_P,r:yP,D:vP,C:EP,L:TP,m:wP,X:IP,S:bP,M:AP};function _P(){var i=ji.f(),s=Cf();return i||s}function yP(i){var s=Ei(i);s!==null&&s.tag===5&&s.type==="form"?Vw(s):ji.r(i)}var Cl=typeof document>"u"?null:document;function ub(i,s,l){var c=Cl;if(c&&typeof s=="string"&&s){var f=At(s);f='link[rel="'+i+'"][href="'+f+'"]',typeof l=="string"&&(f+='[crossorigin="'+l+'"]'),lb.has(f)||(lb.add(f),i={rel:i,crossOrigin:l,href:s},c.querySelector(f)===null&&(s=c.createElement("link"),mn(s,"link",i),_t(s),c.head.appendChild(s)))}}function vP(i){ji.D(i),ub("dns-prefetch",i,null)}function EP(i,s){ji.C(i,s),ub("preconnect",i,s)}function TP(i,s,l){ji.L(i,s,l);var c=Cl;if(c&&i&&s){var f='link[rel="preload"][as="'+At(s)+'"]';s==="image"&&l&&l.imageSrcSet?(f+='[imagesrcset="'+At(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(f+='[imagesizes="'+At(l.imageSizes)+'"]')):f+='[href="'+At(i)+'"]';var g=f;switch(s){case"style":g=xl(i);break;case"script":g=Dl(i)}vr.has(g)||(i=P({rel:"preload",href:s==="image"&&l&&l.imageSrcSet?void 0:i,as:s},l),vr.set(g,i),c.querySelector(f)!==null||s==="style"&&c.querySelector(Bc(g))||s==="script"&&c.querySelector(zc(g))||(s=c.createElement("link"),mn(s,"link",i),_t(s),c.head.appendChild(s)))}}function wP(i,s){ji.m(i,s);var l=Cl;if(l&&i){var c=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+At(c)+'"][href="'+At(i)+'"]',g=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Dl(i)}if(!vr.has(g)&&(i=P({rel:"modulepreload",href:i},s),vr.set(g,i),l.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(zc(g)))return}c=l.createElement("link"),mn(c,"link",i),_t(c),l.head.appendChild(c)}}}function bP(i,s,l){ji.S(i,s,l);var c=Cl;if(c&&i){var f=_s(c).hoistableStyles,g=xl(i);s=s||"default";var T=f.get(g);if(!T){var b={loading:0,preload:null};if(T=c.querySelector(Bc(g)))b.loading=5;else{i=P({rel:"stylesheet",href:i,"data-precedence":s},l),(l=vr.get(g))&&H_(i,l);var C=T=c.createElement("link");_t(C),mn(C,"link",i),C._p=new Promise(function(M,Z){C.onload=M,C.onerror=Z}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Lf(T,s,c)}T={type:"stylesheet",instance:T,count:1,state:b},f.set(g,T)}}}function IP(i,s){ji.X(i,s);var l=Cl;if(l&&i){var c=_s(l).hoistableScripts,f=Dl(i),g=c.get(f);g||(g=l.querySelector(zc(f)),g||(i=P({src:i,async:!0},s),(s=vr.get(f))&&G_(i,s),g=l.createElement("script"),_t(g),mn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function AP(i,s){ji.M(i,s);var l=Cl;if(l&&i){var c=_s(l).hoistableScripts,f=Dl(i),g=c.get(f);g||(g=l.querySelector(zc(f)),g||(i=P({src:i,async:!0,type:"module"},s),(s=vr.get(f))&&G_(i,s),g=l.createElement("script"),_t(g),mn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function cb(i,s,l,c){var f=(f=rr.current)?Mf(f):null;if(!f)throw Error(r(446));switch(i){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(s=xl(l.href),l=_s(f).hoistableStyles,c=l.get(s),c||(c={type:"style",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){i=xl(l.href);var g=_s(f).hoistableStyles,T=g.get(i);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(i,T),(g=f.querySelector(Bc(i)))&&!g._p&&(T.instance=g,T.state.loading=5),vr.has(i)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},vr.set(i,l),g||SP(f,i,l,T.state))),s&&c===null)throw Error(r(528,""));return T}if(s&&c!==null)throw Error(r(529,""));return null;case"script":return s=l.async,l=l.src,typeof l=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Dl(l),l=_s(f).hoistableScripts,c=l.get(s),c||(c={type:"script",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,i))}}function xl(i){return'href="'+At(i)+'"'}function Bc(i){return'link[rel="stylesheet"]['+i+"]"}function hb(i){return P({},i,{"data-precedence":i.precedence,precedence:null})}function SP(i,s,l,c){i.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=i.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),mn(s,"link",l),_t(s),i.head.appendChild(s))}function Dl(i){return'[src="'+At(i)+'"]'}function zc(i){return"script[async]"+i}function db(i,s,l){if(s.count++,s.instance===null)switch(s.type){case"style":var c=i.querySelector('style[data-href~="'+At(l.href)+'"]');if(c)return s.instance=c,_t(c),c;var f=P({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),_t(c),mn(c,"style",f),Lf(c,l.precedence,i),s.instance=c;case"stylesheet":f=xl(l.href);var g=i.querySelector(Bc(f));if(g)return s.state.loading|=4,s.instance=g,_t(g),g;c=hb(l),(f=vr.get(f))&&H_(c,f),g=(i.ownerDocument||i).createElement("link"),_t(g);var T=g;return T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),mn(g,"link",c),s.state.loading|=4,Lf(g,l.precedence,i),s.instance=g;case"script":return g=Dl(l.src),(f=i.querySelector(zc(g)))?(s.instance=f,_t(f),f):(c=l,(f=vr.get(g))&&(c=P({},l),G_(c,f)),i=i.ownerDocument||i,f=i.createElement("script"),_t(f),mn(f,"link",c),i.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,Lf(c,l.precedence,i));return s.instance}function Lf(i,s,l){for(var c=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,g=f,T=0;T<c.length;T++){var b=c[T];if(b.dataset.precedence===s)g=b;else if(g!==f)break}g?g.parentNode.insertBefore(i,g.nextSibling):(s=l.nodeType===9?l.head:l,s.insertBefore(i,s.firstChild))}function H_(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.title==null&&(i.title=s.title)}function G_(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.integrity==null&&(i.integrity=s.integrity)}var Uf=null;function fb(i,s,l){if(Uf===null){var c=new Map,f=Uf=new Map;f.set(l,c)}else f=Uf,c=f.get(l),c||(c=new Map,f.set(l,c));if(c.has(i))return c;for(c.set(i,null),l=l.getElementsByTagName(i),f=0;f<l.length;f++){var g=l[f];if(!(g[ms]||g[tn]||i==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(s)||"";T=i+T;var b=c.get(T);b?b.push(g):c.set(T,[g])}}return c}function pb(i,s,l){i=i.ownerDocument||i,i.head.insertBefore(l,s==="title"?i.querySelector("head > title"):null)}function RP(i,s,l){if(l===1||s.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return i=s.disabled,typeof s.precedence=="string"&&i==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function mb(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Fc=null;function CP(){}function xP(i,s,l){if(Fc===null)throw Error(r(475));var c=Fc;if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=xl(l.href),g=i.querySelector(Bc(f));if(g){i=g._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=Bf.bind(c),i.then(c,c)),s.state.loading|=4,s.instance=g,_t(g);return}g=i.ownerDocument||i,l=hb(l),(f=vr.get(f))&&H_(l,f),g=g.createElement("link"),_t(g);var T=g;T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),mn(g,"link",l),s.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=Bf.bind(c),i.addEventListener("load",s),i.addEventListener("error",s))}}function DP(){if(Fc===null)throw Error(r(475));var i=Fc;return i.stylesheets&&i.count===0&&$_(i,i.stylesheets),0<i.count?function(s){var l=setTimeout(function(){if(i.stylesheets&&$_(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=s,function(){i.unsuspend=null,clearTimeout(l)}}:null}function Bf(){if(this.count--,this.count===0){if(this.stylesheets)$_(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var zf=null;function $_(i,s){i.stylesheets=null,i.unsuspend!==null&&(i.count++,zf=new Map,s.forEach(PP,i),zf=null,Bf.call(i))}function PP(i,s){if(!(s.state.loading&4)){var l=zf.get(i);if(l)var c=l.get(null);else{l=new Map,zf.set(i,l);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var T=f[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(l.set(T.dataset.precedence,T),c=T)}c&&l.set(null,c)}f=s.instance,T=f.getAttribute("data-precedence"),g=l.get(T)||c,g===c&&l.set(null,f),l.set(T,f),this.count++,c=Bf.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),g?g.parentNode.insertBefore(f,g.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),s.state.loading|=4}}var jc={$$typeof:S,Provider:null,Consumer:null,_currentValue:xe,_currentValue2:xe,_threadCount:0};function NP(i,s,l,c,f,g,T,b){this.tag=1,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Go(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.hiddenUpdates=Go(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function gb(i,s,l,c,f,g,T,b,C,M,Z,ne){return i=new NP(i,s,l,T,b,C,M,ne),s=1,g===!0&&(s|=24),g=_r(3,null,null,s),i.current=g,g.stateNode=i,s=Ig(),s.refCount++,i.pooledCache=s,s.refCount++,g.memoizedState={element:c,isDehydrated:l,cache:s},i_(g),i}function _b(i){return i?(i=ll,i):ll}function yb(i,s,l,c,f,g){f=_b(f),c.context===null?c.context=f:c.pendingContext=f,c=Ds(s),c.payload={element:l},g=g===void 0?null:g,g!==null&&(c.callback=g),l=Ps(i,c,s),l!==null&&(Pn(l,i,s),Ac(l,i,s))}function vb(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function K_(i,s){vb(i,s),(i=i.alternate)&&vb(i,s)}function Eb(i){if(i.tag===13){var s=bs(i,67108864);s!==null&&Pn(s,i,67108864),K_(i,67108864)}}var Ff=!0;function OP(i,s,l,c){var f=A.T;A.T=null;var g=pe.p;try{pe.p=2,Q_(i,s,l,c)}finally{pe.p=g,A.T=f}}function kP(i,s,l,c){var f=A.T;A.T=null;var g=pe.p;try{pe.p=8,Q_(i,s,l,c)}finally{pe.p=g,A.T=f}}function Q_(i,s,l,c){if(Ff){var f=W_(c);if(f===null)M_(i,s,c,jf,l),wb(i,c);else if(MP(f,i,s,l,c))c.stopPropagation();else if(wb(i,c),s&4&&-1<VP.indexOf(i)){for(;f!==null;){var g=Ei(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Ir(g.pendingLanes);if(T!==0){var b=g;for(b.pendingLanes|=2,b.entangledLanes|=2;T;){var C=1<<31-Rn(T);b.entanglements[1]|=C,T&=~C}Yr(g),(vt&6)===0&&(Af=Ln()+500,Mc(0))}}break;case 13:b=bs(g,2),b!==null&&Pn(b,g,2),Cf(),K_(g,2)}if(g=W_(c),g===null&&M_(i,s,c,jf,l),g===f)break;f=g}f!==null&&c.stopPropagation()}else M_(i,s,c,null,l)}}function W_(i){return i=Yo(i),Y_(i)}var jf=null;function Y_(i){if(jf=null,i=Ar(i),i!==null){var s=we(i);if(s===null)i=null;else{var l=s.tag;if(l===13){if(i=Oe(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return jf=i,null}function Tb(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Sd()){case Gt:return 2;case en:return 8;case yi:case Rd:return 32;case Hu:return 268435456;default:return 32}default:return 32}}var X_=!1,Us=null,Bs=null,zs=null,qc=new Map,Hc=new Map,Fs=[],VP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wb(i,s){switch(i){case"focusin":case"focusout":Us=null;break;case"dragenter":case"dragleave":Bs=null;break;case"mouseover":case"mouseout":zs=null;break;case"pointerover":case"pointerout":qc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hc.delete(s.pointerId)}}function Gc(i,s,l,c,f,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ei(s),s!==null&&Eb(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),i)}function MP(i,s,l,c,f){switch(s){case"focusin":return Us=Gc(Us,i,s,l,c,f),!0;case"dragenter":return Bs=Gc(Bs,i,s,l,c,f),!0;case"mouseover":return zs=Gc(zs,i,s,l,c,f),!0;case"pointerover":var g=f.pointerId;return qc.set(g,Gc(qc.get(g)||null,i,s,l,c,f)),!0;case"gotpointercapture":return g=f.pointerId,Hc.set(g,Gc(Hc.get(g)||null,i,s,l,c,f)),!0}return!1}function bb(i){var s=Ar(i.target);if(s!==null){var l=we(s);if(l!==null){if(s=l.tag,s===13){if(s=Oe(l),s!==null){i.blockedOn=s,ps(i.priority,function(){if(l.tag===13){var c=Xn(),f=bs(l,c);f!==null&&Pn(f,l,c),K_(l,c)}});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function qf(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=W_(i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);or=c,l.target.dispatchEvent(c),or=null}else return s=Ei(l),s!==null&&Eb(s),i.blockedOn=l,!1;s.shift()}return!0}function Ib(i,s,l){qf(i)&&l.delete(s)}function LP(){X_=!1,Us!==null&&qf(Us)&&(Us=null),Bs!==null&&qf(Bs)&&(Bs=null),zs!==null&&qf(zs)&&(zs=null),qc.forEach(Ib),Hc.forEach(Ib)}function Hf(i,s){i.blockedOn===s&&(i.blockedOn=null,X_||(X_=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,LP)))}var Gf=null;function Ab(i){Gf!==i&&(Gf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Gf===i&&(Gf=null);for(var s=0;s<i.length;s+=3){var l=i[s],c=i[s+1],f=i[s+2];if(typeof c!="function"){if(Y_(c||l)===null)continue;break}var g=Ei(l);g!==null&&(i.splice(s,3),s-=3,zg(g,{pending:!0,data:f,method:l.method,action:c},c,f))}}))}function $c(i){function s(C){return Hf(C,i)}Us!==null&&Hf(Us,i),Bs!==null&&Hf(Bs,i),zs!==null&&Hf(zs,i),qc.forEach(s),Hc.forEach(s);for(var l=0;l<Fs.length;l++){var c=Fs[l];c.blockedOn===i&&(c.blockedOn=null)}for(;0<Fs.length&&(l=Fs[0],l.blockedOn===null);)bb(l),l.blockedOn===null&&Fs.shift();if(l=(i.ownerDocument||i).$$reactFormReplay,l!=null)for(c=0;c<l.length;c+=3){var f=l[c],g=l[c+1],T=f[$t]||null;if(typeof g=="function")T||Ab(l);else if(T){var b=null;if(g&&g.hasAttribute("formAction")){if(f=g,T=g[$t]||null)b=T.formAction;else if(Y_(f)!==null)continue}else b=T.action;typeof b=="function"?l[c+1]=b:(l.splice(c,3),c-=3),Ab(l)}}}function Z_(i){this._internalRoot=i}$f.prototype.render=Z_.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(r(409));var l=s.current,c=Xn();yb(l,c,i,s,null,null)},$f.prototype.unmount=Z_.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;i.tag===0&&Al(),yb(i.current,2,null,i,null,null),Cf(),s[vi]=null}};function $f(i){this._internalRoot=i}$f.prototype.unstable_scheduleHydration=function(i){if(i){var s=Nd();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Fs.length&&s!==0&&s<Fs[l].priority;l++);Fs.splice(l,0,i),l===0&&bb(i)}};var Sb=e.version;if(Sb!=="19.0.0")throw Error(r(527,Sb,"19.0.0"));pe.findDOMNode=function(i){var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=ie(s),i=i!==null?_e(i):null,i=i===null?null:i.stateNode,i};var UP={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Ar,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kf.isDisabled&&Kf.supportsFiber)try{ls=Kf.inject(UP),En=Kf}catch{}}return Qc.createRoot=function(i,s){if(!a(i))throw Error(r(299));var l=!1,c="",f=qw,g=Hw,T=Gw,b=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(b=s.unstable_transitionCallbacks)),s=gb(i,1,!1,null,null,l,c,f,g,T,b,null),i[vi]=s.current,V_(i.nodeType===8?i.parentNode:i),new Z_(s)},Qc.hydrateRoot=function(i,s,l){if(!a(i))throw Error(r(299));var c=!1,f="",g=qw,T=Hw,b=Gw,C=null,M=null;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(f=l.identifierPrefix),l.onUncaughtError!==void 0&&(g=l.onUncaughtError),l.onCaughtError!==void 0&&(T=l.onCaughtError),l.onRecoverableError!==void 0&&(b=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(C=l.unstable_transitionCallbacks),l.formState!==void 0&&(M=l.formState)),s=gb(i,1,!0,s,l??null,c,f,g,T,b,C,M),s.context=_b(null),l=s.current,c=Xn(),f=Ds(c),f.callback=null,Ps(l,f,c),s.current.lanes=c,Ot(s,c),Yr(s),i[vi]=s.current,V_(i),new $f(s)},Qc.version="19.0.0",Qc}var Mb;function WP(){if(Mb)return ey.exports;Mb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ey.exports=QP(),ey.exports}var YP=WP(),X=Cv();const Rh=zP(X);var Wc={},Lb;function XP(){if(Lb)return Wc;Lb=1,Object.defineProperty(Wc,"__esModule",{value:!0}),Wc.parse=u,Wc.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,o=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function u(w,S){const D=new o,U=w.length;if(U<2)return D;const L=(S==null?void 0:S.decode)||y;let H=0;do{const W=w.indexOf("=",H);if(W===-1)break;const $=w.indexOf(";",H),oe=$===-1?U:$;if(W>oe){H=w.lastIndexOf(";",W-1)+1;continue}const ae=d(w,H,W),le=p(w,W,ae),x=w.slice(ae,le);if(D[x]===void 0){let R=d(w,W+1,oe),A=p(w,oe,R);const P=L(w.slice(R,A));D[x]=P}H=oe+1}while(H<U);return D}function d(w,S,D){do{const U=w.charCodeAt(S);if(U!==32&&U!==9)return S}while(++S<D);return D}function p(w,S,D){for(;S>D;){const U=w.charCodeAt(--S);if(U!==32&&U!==9)return S+1}return D}function m(w,S,D){const U=(D==null?void 0:D.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const L=U(S);if(!e.test(L))throw new TypeError(`argument val is invalid: ${S}`);let H=w+"="+L;if(!D)return H;if(D.maxAge!==void 0){if(!Number.isInteger(D.maxAge))throw new TypeError(`option maxAge is invalid: ${D.maxAge}`);H+="; Max-Age="+D.maxAge}if(D.domain){if(!t.test(D.domain))throw new TypeError(`option domain is invalid: ${D.domain}`);H+="; Domain="+D.domain}if(D.path){if(!r.test(D.path))throw new TypeError(`option path is invalid: ${D.path}`);H+="; Path="+D.path}if(D.expires){if(!v(D.expires)||!Number.isFinite(D.expires.valueOf()))throw new TypeError(`option expires is invalid: ${D.expires}`);H+="; Expires="+D.expires.toUTCString()}if(D.httpOnly&&(H+="; HttpOnly"),D.secure&&(H+="; Secure"),D.partitioned&&(H+="; Partitioned"),D.priority)switch(typeof D.priority=="string"?D.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${D.priority}`)}if(D.sameSite)switch(typeof D.sameSite=="string"?D.sameSite.toLowerCase():D.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${D.sameSite}`)}return H}function y(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function v(w){return a.call(w)==="[object Date]"}return Wc}XP();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ub="popstate";function ZP(n={}){function e(r,a){let{pathname:o,search:u,hash:d}=r.location;return Py("",{pathname:o,search:u,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Ch(a)}return eN(e,t,null,n)}function Et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ui(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function JP(){return Math.random().toString(36).substring(2,10)}function Bb(n,e){return{usr:n.state,key:n.key,idx:e}}function Py(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Su(e):e,state:t,key:e&&e.key||r||JP()}}function Ch({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Su(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function eN(n,e,t,r={}){let{window:a=document.defaultView,v5Compat:o=!1}=r,u=a.history,d="POP",p=null,m=y();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function y(){return(u.state||{idx:null}).idx}function v(){d="POP";let L=y(),H=L==null?null:L-m;m=L,p&&p({action:d,location:U.location,delta:H})}function w(L,H){d="PUSH";let W=Py(U.location,L,H);m=y()+1;let $=Bb(W,m),oe=U.createHref(W);try{u.pushState($,"",oe)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;a.location.assign(oe)}o&&p&&p({action:d,location:U.location,delta:1})}function S(L,H){d="REPLACE";let W=Py(U.location,L,H);m=y();let $=Bb(W,m),oe=U.createHref(W);u.replaceState($,"",oe),o&&p&&p({action:d,location:U.location,delta:0})}function D(L){let H=a.location.origin!=="null"?a.location.origin:a.location.href,W=typeof L=="string"?L:Ch(L);return W=W.replace(/ $/,"%20"),Et(H,`No window.location.(origin|href) available to create URL for href: ${W}`),new URL(W,H)}let U={get action(){return d},get location(){return n(a,u)},listen(L){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(Ub,v),p=L,()=>{a.removeEventListener(Ub,v),p=null}},createHref(L){return e(a,L)},createURL:D,encodeLocation(L){let H=D(L);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:w,replace:S,go(L){return u.go(L)}};return U}function _S(n,e,t="/"){return tN(n,e,t,!1)}function tN(n,e,t,r){let a=typeof e=="string"?Su(e):e,o=Qi(a.pathname||"/",t);if(o==null)return null;let u=yS(n);nN(u);let d=null;for(let p=0;d==null&&p<u.length;++p){let m=fN(o);d=hN(u[p],m,r)}return d}function yS(n,e=[],t=[],r=""){let a=(o,u,d)=>{let p={relativePath:d===void 0?o.path||"":d,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};p.relativePath.startsWith("/")&&(Et(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let m=$i([r,p.relativePath]),y=t.concat(p);o.children&&o.children.length>0&&(Et(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),yS(o.children,e,y,m)),!(o.path==null&&!o.index)&&e.push({path:m,score:uN(m,o.index),routesMeta:y})};return n.forEach((o,u)=>{var d;if(o.path===""||!((d=o.path)!=null&&d.includes("?")))a(o,u);else for(let p of vS(o.path))a(o,u,p)}),e}function vS(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let u=vS(r.join("/")),d=[];return d.push(...u.map(p=>p===""?o:[o,p].join("/"))),a&&d.push(...u),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function nN(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:cN(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var rN=/^:[\w-]+$/,iN=3,sN=2,aN=1,oN=10,lN=-2,zb=n=>n==="*";function uN(n,e){let t=n.split("/"),r=t.length;return t.some(zb)&&(r+=lN),e&&(r+=sN),t.filter(a=>!zb(a)).reduce((a,o)=>a+(rN.test(o)?iN:o===""?aN:oN),r)}function cN(n,e){return n.length===e.length&&n.slice(0,-1).every((r,a)=>r===e[a])?n[n.length-1]-e[e.length-1]:0}function hN(n,e,t=!1){let{routesMeta:r}=n,a={},o="/",u=[];for(let d=0;d<r.length;++d){let p=r[d],m=d===r.length-1,y=o==="/"?e:e.slice(o.length)||"/",v=Rp({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},y),w=p.route;if(!v&&m&&t&&!r[r.length-1].route.index&&(v=Rp({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!v)return null;Object.assign(a,v.params),u.push({params:a,pathname:$i([o,v.pathname]),pathnameBase:_N($i([o,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(o=$i([o,v.pathnameBase]))}return u}function Rp(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=dN(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let o=a[0],u=o.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((m,{paramName:y,isOptional:v},w)=>{if(y==="*"){let D=d[w]||"";u=o.slice(0,o.length-D.length).replace(/(.)\/+$/,"$1")}const S=d[w];return v&&!S?m[y]=void 0:m[y]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:o,pathnameBase:u,pattern:n}}function dN(n,e=!1,t=!0){ui(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function fN(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ui(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Qi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function pN(n,e="/"){let{pathname:t,search:r="",hash:a=""}=typeof n=="string"?Su(n):n;return{pathname:t?t.startsWith("/")?t:mN(t,e):e,search:yN(r),hash:vN(a)}}function mN(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function sy(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gN(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function ES(n){let e=gN(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function TS(n,e,t,r=!1){let a;typeof n=="string"?a=Su(n):(a={...n},Et(!a.pathname||!a.pathname.includes("?"),sy("?","pathname","search",a)),Et(!a.pathname||!a.pathname.includes("#"),sy("#","pathname","hash",a)),Et(!a.search||!a.search.includes("#"),sy("#","search","hash",a)));let o=n===""||a.pathname==="",u=o?"/":a.pathname,d;if(u==null)d=t;else{let v=e.length-1;if(!r&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),v-=1;a.pathname=w.join("/")}d=v>=0?e[v]:"/"}let p=pN(a,d),m=u&&u!=="/"&&u.endsWith("/"),y=(o||u===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(m||y)&&(p.pathname+="/"),p}var $i=n=>n.join("/").replace(/\/\/+/g,"/"),_N=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),yN=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,vN=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function EN(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var wS=["POST","PUT","PATCH","DELETE"];new Set(wS);var TN=["GET",...wS];new Set(TN);var Ru=X.createContext(null);Ru.displayName="DataRouter";var om=X.createContext(null);om.displayName="DataRouterState";var bS=X.createContext({isTransitioning:!1});bS.displayName="ViewTransition";var wN=X.createContext(new Map);wN.displayName="Fetchers";var bN=X.createContext(null);bN.displayName="Await";var mi=X.createContext(null);mi.displayName="Navigation";var td=X.createContext(null);td.displayName="Location";var gi=X.createContext({outlet:null,matches:[],isDataRoute:!1});gi.displayName="Route";var xv=X.createContext(null);xv.displayName="RouteError";function IN(n,{relative:e}={}){Et(nd(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=X.useContext(mi),{hash:a,pathname:o,search:u}=rd(n,{relative:e}),d=o;return t!=="/"&&(d=o==="/"?t:$i([t,o])),r.createHref({pathname:d,search:u,hash:a})}function nd(){return X.useContext(td)!=null}function ko(){return Et(nd(),"useLocation() may be used only in the context of a <Router> component."),X.useContext(td).location}var IS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function AS(n){X.useContext(mi).static||X.useLayoutEffect(n)}function lm(){let{isDataRoute:n}=X.useContext(gi);return n?LN():AN()}function AN(){Et(nd(),"useNavigate() may be used only in the context of a <Router> component.");let n=X.useContext(Ru),{basename:e,navigator:t}=X.useContext(mi),{matches:r}=X.useContext(gi),{pathname:a}=ko(),o=JSON.stringify(ES(r)),u=X.useRef(!1);return AS(()=>{u.current=!0}),X.useCallback((p,m={})=>{if(ui(u.current,IS),!u.current)return;if(typeof p=="number"){t.go(p);return}let y=TS(p,JSON.parse(o),a,m.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:$i([e,y.pathname])),(m.replace?t.replace:t.push)(y,m.state,m)},[e,t,o,a,n])}X.createContext(null);function SS(){let{matches:n}=X.useContext(gi),e=n[n.length-1];return e?e.params:{}}function rd(n,{relative:e}={}){let{matches:t}=X.useContext(gi),{pathname:r}=ko(),a=JSON.stringify(ES(t));return X.useMemo(()=>TS(n,JSON.parse(a),r,e==="path"),[n,a,r,e])}function SN(n,e){return RS(n,e)}function RS(n,e,t,r){var W;Et(nd(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:o}=X.useContext(mi),{matches:u}=X.useContext(gi),d=u[u.length-1],p=d?d.params:{},m=d?d.pathname:"/",y=d?d.pathnameBase:"/",v=d&&d.route;{let $=v&&v.path||"";CS(m,!v||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let w=ko(),S;if(e){let $=typeof e=="string"?Su(e):e;Et(y==="/"||((W=$.pathname)==null?void 0:W.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${$.pathname}" was given in the \`location\` prop.`),S=$}else S=w;let D=S.pathname||"/",U=D;if(y!=="/"){let $=y.replace(/^\//,"").split("/");U="/"+D.replace(/^\//,"").split("/").slice($.length).join("/")}let L=!o&&t&&t.matches&&t.matches.length>0?t.matches:_S(n,{pathname:U});ui(v||L!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ui(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=PN(L&&L.map($=>Object.assign({},$,{params:Object.assign({},p,$.params),pathname:$i([y,a.encodeLocation?a.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?y:$i([y,a.encodeLocation?a.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),u,t,r);return e&&H?X.createElement(td.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},H):H}function RN(){let n=MN(),e=EN(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=X.createElement(X.Fragment,null,X.createElement("p",null,"💿 Hey developer 👋"),X.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",X.createElement("code",{style:o},"ErrorBoundary")," or"," ",X.createElement("code",{style:o},"errorElement")," prop on your route.")),X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},e),t?X.createElement("pre",{style:a},t):null,u)}var CN=X.createElement(RN,null),xN=class extends X.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?X.createElement(gi.Provider,{value:this.props.routeContext},X.createElement(xv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function DN({routeContext:n,match:e,children:t}){let r=X.useContext(Ru);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),X.createElement(gi.Provider,{value:n},t)}function PN(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,o=t==null?void 0:t.errors;if(o!=null){let p=a.findIndex(m=>m.route.id&&(o==null?void 0:o[m.route.id])!==void 0);Et(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let u=!1,d=-1;if(t)for(let p=0;p<a.length;p++){let m=a[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:y,errors:v}=t,w=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||w){u=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,m,y)=>{let v,w=!1,S=null,D=null;t&&(v=o&&m.route.id?o[m.route.id]:void 0,S=m.route.errorElement||CN,u&&(d<0&&y===0?(CS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,D=null):d===y&&(w=!0,D=m.route.hydrateFallbackElement||null)));let U=e.concat(a.slice(0,y+1)),L=()=>{let H;return v?H=S:w?H=D:m.route.Component?H=X.createElement(m.route.Component,null):m.route.element?H=m.route.element:H=p,X.createElement(DN,{match:m,routeContext:{outlet:p,matches:U,isDataRoute:t!=null},children:H})};return t&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?X.createElement(xN,{location:t.location,revalidation:t.revalidation,component:S,error:v,children:L(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):L()},null)}function Dv(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function NN(n){let e=X.useContext(Ru);return Et(e,Dv(n)),e}function ON(n){let e=X.useContext(om);return Et(e,Dv(n)),e}function kN(n){let e=X.useContext(gi);return Et(e,Dv(n)),e}function Pv(n){let e=kN(n),t=e.matches[e.matches.length-1];return Et(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function VN(){return Pv("useRouteId")}function MN(){var r;let n=X.useContext(xv),e=ON("useRouteError"),t=Pv("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function LN(){let{router:n}=NN("useNavigate"),e=Pv("useNavigate"),t=X.useRef(!1);return AS(()=>{t.current=!0}),X.useCallback(async(a,o={})=>{ui(t.current,IS),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...o}))},[n,e])}var Fb={};function CS(n,e,t){!e&&!Fb[n]&&(Fb[n]=!0,ui(!1,t))}X.memo(UN);function UN({routes:n,future:e,state:t}){return RS(n,void 0,t,e)}function sp(n){Et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function BN({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:a,static:o=!1}){Et(!nd(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),d=X.useMemo(()=>({basename:u,navigator:a,static:o,future:{}}),[u,a,o]);typeof t=="string"&&(t=Su(t));let{pathname:p="/",search:m="",hash:y="",state:v=null,key:w="default"}=t,S=X.useMemo(()=>{let D=Qi(p,u);return D==null?null:{location:{pathname:D,search:m,hash:y,state:v,key:w},navigationType:r}},[u,p,m,y,v,w,r]);return ui(S!=null,`<Router basename="${u}"> is not able to match the URL "${p}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:X.createElement(mi.Provider,{value:d},X.createElement(td.Provider,{children:e,value:S}))}function zN({children:n,location:e}){return SN(Ny(n),e)}function Ny(n,e=[]){let t=[];return X.Children.forEach(n,(r,a)=>{if(!X.isValidElement(r))return;let o=[...e,a];if(r.type===X.Fragment){t.push.apply(t,Ny(r.props.children,o));return}Et(r.type===sp,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Et(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Ny(r.props.children,o)),t.push(u)}),t}var ap="get",op="application/x-www-form-urlencoded";function um(n){return n!=null&&typeof n.tagName=="string"}function FN(n){return um(n)&&n.tagName.toLowerCase()==="button"}function jN(n){return um(n)&&n.tagName.toLowerCase()==="form"}function qN(n){return um(n)&&n.tagName.toLowerCase()==="input"}function HN(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function GN(n,e){return n.button===0&&(!e||e==="_self")&&!HN(n)}var Qf=null;function $N(){if(Qf===null)try{new FormData(document.createElement("form"),0),Qf=!1}catch{Qf=!0}return Qf}var KN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ay(n){return n!=null&&!KN.has(n)?(ui(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${op}"`),null):n}function QN(n,e){let t,r,a,o,u;if(jN(n)){let d=n.getAttribute("action");r=d?Qi(d,e):null,t=n.getAttribute("method")||ap,a=ay(n.getAttribute("enctype"))||op,o=new FormData(n)}else if(FN(n)||qN(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(r=p?Qi(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||ap,a=ay(n.getAttribute("formenctype"))||ay(d.getAttribute("enctype"))||op,o=new FormData(d,n),!$N()){let{name:m,type:y,value:v}=n;if(y==="image"){let w=m?`${m}.`:"";o.append(`${w}x`,"0"),o.append(`${w}y`,"0")}else m&&o.append(m,v)}}else{if(um(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=ap,r=null,a=op,u=n}return o&&a==="text/plain"&&(u=o,o=void 0),{action:r,method:t.toLowerCase(),encType:a,formData:o,body:u}}function Nv(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function WN(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function YN(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function XN(n,e,t){let r=await Promise.all(n.map(async a=>{let o=e.routes[a.route.id];if(o){let u=await WN(o,t);return u.links?u.links():[]}return[]}));return tO(r.flat(1).filter(YN).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function jb(n,e,t,r,a,o){let u=(p,m)=>t[m]?p.route.id!==t[m].route.id:!0,d=(p,m)=>{var y;return t[m].pathname!==p.pathname||((y=t[m].route.path)==null?void 0:y.endsWith("*"))&&t[m].params["*"]!==p.params["*"]};return o==="assets"?e.filter((p,m)=>u(p,m)||d(p,m)):o==="data"?e.filter((p,m)=>{var v;let y=r.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(u(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function ZN(n,e,{includeHydrateFallback:t}={}){return JN(n.map(r=>{let a=e.routes[r.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function JN(n){return[...new Set(n)]}function eO(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function tO(n,e){let t=new Set;return new Set(e),n.reduce((r,a)=>{let o=JSON.stringify(eO(a));return t.has(o)||(t.add(o),r.push({key:o,link:a})),r},[])}function nO(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Qi(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function xS(){let n=X.useContext(Ru);return Nv(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function rO(){let n=X.useContext(om);return Nv(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Ov=X.createContext(void 0);Ov.displayName="FrameworkContext";function DS(){let n=X.useContext(Ov);return Nv(n,"You must render this element inside a <HydratedRouter> element"),n}function iO(n,e){let t=X.useContext(Ov),[r,a]=X.useState(!1),[o,u]=X.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:y,onTouchStart:v}=e,w=X.useRef(null);X.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let U=H=>{H.forEach(W=>{u(W.isIntersecting)})},L=new IntersectionObserver(U,{threshold:.5});return w.current&&L.observe(w.current),()=>{L.disconnect()}}},[n]),X.useEffect(()=>{if(r){let U=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(U)}}},[r]);let S=()=>{a(!0)},D=()=>{a(!1),u(!1)};return t?n!=="intent"?[o,w,{}]:[o,w,{onFocus:Yc(d,S),onBlur:Yc(p,D),onMouseEnter:Yc(m,S),onMouseLeave:Yc(y,D),onTouchStart:Yc(v,S)}]:[!1,w,{}]}function Yc(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function sO({page:n,...e}){let{router:t}=xS(),r=X.useMemo(()=>_S(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?X.createElement(oO,{page:n,matches:r,...e}):null}function aO(n){let{manifest:e,routeModules:t}=DS(),[r,a]=X.useState([]);return X.useEffect(()=>{let o=!1;return XN(n,e,t).then(u=>{o||a(u)}),()=>{o=!0}},[n,e,t]),r}function oO({page:n,matches:e,...t}){let r=ko(),{manifest:a,routeModules:o}=DS(),{basename:u}=xS(),{loaderData:d,matches:p}=rO(),m=X.useMemo(()=>jb(n,e,p,a,r,"data"),[n,e,p,a,r]),y=X.useMemo(()=>jb(n,e,p,a,r,"assets"),[n,e,p,a,r]),v=X.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let D=new Set,U=!1;if(e.forEach(H=>{var $;let W=a.routes[H.route.id];!W||!W.hasLoader||(!m.some(oe=>oe.route.id===H.route.id)&&H.route.id in d&&(($=o[H.route.id])!=null&&$.shouldRevalidate)||W.hasClientLoader?U=!0:D.add(H.route.id))}),D.size===0)return[];let L=nO(n,u);return U&&D.size>0&&L.searchParams.set("_routes",e.filter(H=>D.has(H.route.id)).map(H=>H.route.id).join(",")),[L.pathname+L.search]},[u,d,r,a,m,e,n,o]),w=X.useMemo(()=>ZN(y,a),[y,a]),S=aO(y);return X.createElement(X.Fragment,null,v.map(D=>X.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...t})),w.map(D=>X.createElement("link",{key:D,rel:"modulepreload",href:D,...t})),S.map(({key:D,link:U})=>X.createElement("link",{key:D,...U})))}function lO(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var PS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{PS&&(window.__reactRouterVersion="7.5.0")}catch{}function uO({basename:n,children:e,window:t}){let r=X.useRef();r.current==null&&(r.current=ZP({window:t,v5Compat:!0}));let a=r.current,[o,u]=X.useState({action:a.action,location:a.location}),d=X.useCallback(p=>{X.startTransition(()=>u(p))},[u]);return X.useLayoutEffect(()=>a.listen(d),[a,d]),X.createElement(BN,{basename:n,children:e,location:o.location,navigationType:o.action,navigator:a})}var NS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,OS=X.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:a,reloadDocument:o,replace:u,state:d,target:p,to:m,preventScrollReset:y,viewTransition:v,...w},S){let{basename:D}=X.useContext(mi),U=typeof m=="string"&&NS.test(m),L,H=!1;if(typeof m=="string"&&U&&(L=m,PS))try{let A=new URL(window.location.href),P=m.startsWith("//")?new URL(A.protocol+m):new URL(m),V=Qi(P.pathname,D);P.origin===A.origin&&V!=null?m=V+P.search+P.hash:H=!0}catch{ui(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let W=IN(m,{relative:a}),[$,oe,ae]=iO(r,w),le=fO(m,{replace:u,state:d,target:p,preventScrollReset:y,relative:a,viewTransition:v});function x(A){e&&e(A),A.defaultPrevented||le(A)}let R=X.createElement("a",{...w,...ae,href:L||W,onClick:H||o?e:x,ref:lO(S,oe),target:p,"data-discover":!U&&t==="render"?"true":void 0});return $&&!U?X.createElement(X.Fragment,null,R,X.createElement(sO,{page:W})):R});OS.displayName="Link";var cO=X.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:a=!1,style:o,to:u,viewTransition:d,children:p,...m},y){let v=rd(u,{relative:m.relative}),w=ko(),S=X.useContext(om),{navigator:D,basename:U}=X.useContext(mi),L=S!=null&&yO(v)&&d===!0,H=D.encodeLocation?D.encodeLocation(v).pathname:v.pathname,W=w.pathname,$=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(W=W.toLowerCase(),$=$?$.toLowerCase():null,H=H.toLowerCase()),$&&U&&($=Qi($,U)||$);const oe=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let ae=W===H||!a&&W.startsWith(H)&&W.charAt(oe)==="/",le=$!=null&&($===H||!a&&$.startsWith(H)&&$.charAt(H.length)==="/"),x={isActive:ae,isPending:le,isTransitioning:L},R=ae?e:void 0,A;typeof r=="function"?A=r(x):A=[r,ae?"active":null,le?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let P=typeof o=="function"?o(x):o;return X.createElement(OS,{...m,"aria-current":R,className:A,ref:y,style:P,to:u,viewTransition:d},typeof p=="function"?p(x):p)});cO.displayName="NavLink";var hO=X.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:a,state:o,method:u=ap,action:d,onSubmit:p,relative:m,preventScrollReset:y,viewTransition:v,...w},S)=>{let D=gO(),U=_O(d,{relative:m}),L=u.toLowerCase()==="get"?"get":"post",H=typeof d=="string"&&NS.test(d),W=$=>{if(p&&p($),$.defaultPrevented)return;$.preventDefault();let oe=$.nativeEvent.submitter,ae=(oe==null?void 0:oe.getAttribute("formmethod"))||u;D(oe||$.currentTarget,{fetcherKey:e,method:ae,navigate:t,replace:a,state:o,relative:m,preventScrollReset:y,viewTransition:v})};return X.createElement("form",{ref:S,method:L,action:U,onSubmit:r?p:W,...w,"data-discover":!H&&n==="render"?"true":void 0})});hO.displayName="Form";function dO(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kS(n){let e=X.useContext(Ru);return Et(e,dO(n)),e}function fO(n,{target:e,replace:t,state:r,preventScrollReset:a,relative:o,viewTransition:u}={}){let d=lm(),p=ko(),m=rd(n,{relative:o});return X.useCallback(y=>{if(GN(y,e)){y.preventDefault();let v=t!==void 0?t:Ch(p)===Ch(m);d(n,{replace:v,state:r,preventScrollReset:a,relative:o,viewTransition:u})}},[p,d,m,t,r,e,n,a,o,u])}var pO=0,mO=()=>`__${String(++pO)}__`;function gO(){let{router:n}=kS("useSubmit"),{basename:e}=X.useContext(mi),t=VN();return X.useCallback(async(r,a={})=>{let{action:o,method:u,encType:d,formData:p,body:m}=QN(r,e);if(a.navigate===!1){let y=a.fetcherKey||mO();await n.fetch(y,t,a.action||o,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||u,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||u,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function _O(n,{relative:e}={}){let{basename:t}=X.useContext(mi),r=X.useContext(gi);Et(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),o={...rd(n||".",{relative:e})},u=ko();if(n==null){o.search=u.search;let d=new URLSearchParams(o.search),p=d.getAll("index");if(p.some(y=>y==="")){d.delete("index"),p.filter(v=>v).forEach(v=>d.append("index",v));let y=d.toString();o.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:$i([t,o.pathname])),Ch(o)}function yO(n,e={}){let t=X.useContext(bS);Et(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=kS("useViewTransitionState"),a=rd(n,{relative:e.relative});if(!t.isTransitioning)return!1;let o=Qi(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=Qi(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Rp(a.pathname,u)!=null||Rp(a.pathname,o)!=null}new TextEncoder;var Fn=function(){return Fn=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Fn.apply(this,arguments)};function kv(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t}function Cp(n,e,t){if(t||arguments.length===2)for(var r=0,a=e.length,o;r<a;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))}var ct="-ms-",ph="-moz-",et="-webkit-",VS="comm",cm="rule",Vv="decl",vO="@import",MS="@keyframes",EO="@layer",LS=Math.abs,Mv=String.fromCharCode,Oy=Object.assign;function TO(n,e){return un(n,0)^45?(((e<<2^un(n,0))<<2^un(n,1))<<2^un(n,2))<<2^un(n,3):0}function US(n){return n.trim()}function qi(n,e){return(n=e.exec(n))?n[0]:n}function ke(n,e,t){return n.replace(e,t)}function lp(n,e,t){return n.indexOf(e,t)}function un(n,e){return n.charCodeAt(e)|0}function Zl(n,e,t){return n.slice(e,t)}function Zr(n){return n.length}function BS(n){return n.length}function ah(n,e){return e.push(n),n}function wO(n,e){return n.map(e).join("")}function qb(n,e){return n.filter(function(t){return!qi(t,e)})}var hm=1,Jl=1,zS=0,wr=0,Ht=0,Cu="";function dm(n,e,t,r,a,o,u,d){return{value:n,root:e,parent:t,type:r,props:a,children:o,line:hm,column:Jl,length:u,return:"",siblings:d}}function Qs(n,e){return Oy(dm("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Pl(n){for(;n.root;)n=Qs(n.root,{children:[n]});ah(n,n.siblings)}function bO(){return Ht}function IO(){return Ht=wr>0?un(Cu,--wr):0,Jl--,Ht===10&&(Jl=1,hm--),Ht}function Nr(){return Ht=wr<zS?un(Cu,wr++):0,Jl++,Ht===10&&(Jl=1,hm++),Ht}function _o(){return un(Cu,wr)}function up(){return wr}function fm(n,e){return Zl(Cu,n,e)}function ky(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function AO(n){return hm=Jl=1,zS=Zr(Cu=n),wr=0,[]}function SO(n){return Cu="",n}function oy(n){return US(fm(wr-1,Vy(n===91?n+2:n===40?n+1:n)))}function RO(n){for(;(Ht=_o())&&Ht<33;)Nr();return ky(n)>2||ky(Ht)>3?"":" "}function CO(n,e){for(;--e&&Nr()&&!(Ht<48||Ht>102||Ht>57&&Ht<65||Ht>70&&Ht<97););return fm(n,up()+(e<6&&_o()==32&&Nr()==32))}function Vy(n){for(;Nr();)switch(Ht){case n:return wr;case 34:case 39:n!==34&&n!==39&&Vy(Ht);break;case 40:n===41&&Vy(n);break;case 92:Nr();break}return wr}function xO(n,e){for(;Nr()&&n+Ht!==57;)if(n+Ht===84&&_o()===47)break;return"/*"+fm(e,wr-1)+"*"+Mv(n===47?n:Nr())}function DO(n){for(;!ky(_o());)Nr();return fm(n,wr)}function PO(n){return SO(cp("",null,null,null,[""],n=AO(n),0,[0],n))}function cp(n,e,t,r,a,o,u,d,p){for(var m=0,y=0,v=u,w=0,S=0,D=0,U=1,L=1,H=1,W=0,$="",oe=a,ae=o,le=r,x=$;L;)switch(D=W,W=Nr()){case 40:if(D!=108&&un(x,v-1)==58){lp(x+=ke(oy(W),"&","&\f"),"&\f",LS(m?d[m-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:x+=oy(W);break;case 9:case 10:case 13:case 32:x+=RO(D);break;case 92:x+=CO(up()-1,7);continue;case 47:switch(_o()){case 42:case 47:ah(NO(xO(Nr(),up()),e,t,p),p);break;default:x+="/"}break;case 123*U:d[m++]=Zr(x)*H;case 125*U:case 59:case 0:switch(W){case 0:case 125:L=0;case 59+y:H==-1&&(x=ke(x,/\f/g,"")),S>0&&Zr(x)-v&&ah(S>32?Gb(x+";",r,t,v-1,p):Gb(ke(x," ","")+";",r,t,v-2,p),p);break;case 59:x+=";";default:if(ah(le=Hb(x,e,t,m,y,a,d,$,oe=[],ae=[],v,o),o),W===123)if(y===0)cp(x,e,le,le,oe,o,v,d,ae);else switch(w===99&&un(x,3)===110?100:w){case 100:case 108:case 109:case 115:cp(n,le,le,r&&ah(Hb(n,le,le,0,0,a,d,$,a,oe=[],v,ae),ae),a,ae,v,d,r?oe:ae);break;default:cp(x,le,le,le,[""],ae,0,d,ae)}}m=y=S=0,U=H=1,$=x="",v=u;break;case 58:v=1+Zr(x),S=D;default:if(U<1){if(W==123)--U;else if(W==125&&U++==0&&IO()==125)continue}switch(x+=Mv(W),W*U){case 38:H=y>0?1:(x+="\f",-1);break;case 44:d[m++]=(Zr(x)-1)*H,H=1;break;case 64:_o()===45&&(x+=oy(Nr())),w=_o(),y=v=Zr($=x+=DO(up())),W++;break;case 45:D===45&&Zr(x)==2&&(U=0)}}return o}function Hb(n,e,t,r,a,o,u,d,p,m,y,v){for(var w=a-1,S=a===0?o:[""],D=BS(S),U=0,L=0,H=0;U<r;++U)for(var W=0,$=Zl(n,w+1,w=LS(L=u[U])),oe=n;W<D;++W)(oe=US(L>0?S[W]+" "+$:ke($,/&\f/g,S[W])))&&(p[H++]=oe);return dm(n,e,t,a===0?cm:d,p,m,y,v)}function NO(n,e,t,r){return dm(n,e,t,VS,Mv(bO()),Zl(n,2,-2),0,r)}function Gb(n,e,t,r,a){return dm(n,e,t,Vv,Zl(n,0,r),Zl(n,r+1,-1),r,a)}function FS(n,e,t){switch(TO(n,e)){case 5103:return et+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return et+n+n;case 4789:return ph+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return et+n+ph+n+ct+n+n;case 5936:switch(un(n,e+11)){case 114:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return et+n+ct+n+n;case 6165:return et+n+ct+"flex-"+n+n;case 5187:return et+n+ke(n,/(\w+).+(:[^]+)/,et+"box-$1$2"+ct+"flex-$1$2")+n;case 5443:return et+n+ct+"flex-item-"+ke(n,/flex-|-self/g,"")+(qi(n,/flex-|baseline/)?"":ct+"grid-row-"+ke(n,/flex-|-self/g,""))+n;case 4675:return et+n+ct+"flex-line-pack"+ke(n,/align-content|flex-|-self/g,"")+n;case 5548:return et+n+ct+ke(n,"shrink","negative")+n;case 5292:return et+n+ct+ke(n,"basis","preferred-size")+n;case 6060:return et+"box-"+ke(n,"-grow","")+et+n+ct+ke(n,"grow","positive")+n;case 4554:return et+ke(n,/([^-])(transform)/g,"$1"+et+"$2")+n;case 6187:return ke(ke(ke(n,/(zoom-|grab)/,et+"$1"),/(image-set)/,et+"$1"),n,"")+n;case 5495:case 3959:return ke(n,/(image-set\([^]*)/,et+"$1$`$1");case 4968:return ke(ke(n,/(.+:)(flex-)?(.*)/,et+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+et+n+n;case 4200:if(!qi(n,/flex-|baseline/))return ct+"grid-column-align"+Zl(n,e)+n;break;case 2592:case 3360:return ct+ke(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,a){return e=a,qi(r.props,/grid-\w+-end/)})?~lp(n+(t=t[e].value),"span",0)?n:ct+ke(n,"-start","")+n+ct+"grid-row-span:"+(~lp(t,"span",0)?qi(t,/\d+/):+qi(t,/\d+/)-+qi(n,/\d+/))+";":ct+ke(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return qi(r.props,/grid-\w+-start/)})?n:ct+ke(ke(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ke(n,/(.+)-inline(.+)/,et+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zr(n)-1-e>6)switch(un(n,e+1)){case 109:if(un(n,e+4)!==45)break;case 102:return ke(n,/(.+:)(.+)-([^]+)/,"$1"+et+"$2-$3$1"+ph+(un(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~lp(n,"stretch",0)?FS(ke(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return ke(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,o,u,d,p,m){return ct+a+":"+o+m+(u?ct+a+"-span:"+(d?p:+p-+o)+m:"")+n});case 4949:if(un(n,e+6)===121)return ke(n,":",":"+et)+n;break;case 6444:switch(un(n,un(n,14)===45?18:11)){case 120:return ke(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+et+(un(n,14)===45?"inline-":"")+"box$3$1"+et+"$2$3$1"+ct+"$2box$3")+n;case 100:return ke(n,":",":"+ct)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(n,"scroll-","scroll-snap-")+n}return n}function xp(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function OO(n,e,t,r){switch(n.type){case EO:if(n.children.length)break;case vO:case Vv:return n.return=n.return||n.value;case VS:return"";case MS:return n.return=n.value+"{"+xp(n.children,r)+"}";case cm:if(!Zr(n.value=n.props.join(",")))return""}return Zr(t=xp(n.children,r))?n.return=n.value+"{"+t+"}":""}function kO(n){var e=BS(n);return function(t,r,a,o){for(var u="",d=0;d<e;d++)u+=n[d](t,r,a,o)||"";return u}}function VO(n){return function(e){e.root||(e=e.return)&&n(e)}}function MO(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case Vv:n.return=FS(n.value,n.length,t);return;case MS:return xp([Qs(n,{value:ke(n.value,"@","@"+et)})],r);case cm:if(n.length)return wO(t=n.props,function(a){switch(qi(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Pl(Qs(n,{props:[ke(a,/:(read-\w+)/,":"+ph+"$1")]})),Pl(Qs(n,{props:[a]})),Oy(n,{props:qb(t,r)});break;case"::placeholder":Pl(Qs(n,{props:[ke(a,/:(plac\w+)/,":"+et+"input-$1")]})),Pl(Qs(n,{props:[ke(a,/:(plac\w+)/,":"+ph+"$1")]})),Pl(Qs(n,{props:[ke(a,/:(plac\w+)/,ct+"input-$1")]})),Pl(Qs(n,{props:[a]})),Oy(n,{props:qb(t,r)});break}return""})}}var LO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zn={},eu=typeof process<"u"&&Zn!==void 0&&(Zn.REACT_APP_SC_ATTR||Zn.SC_ATTR)||"data-styled",jS="active",qS="data-styled-version",pm="6.1.16",Lv=`/*!sc*/
`,Dp=typeof window<"u"&&"HTMLElement"in window,UO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Zn!==void 0&&Zn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Zn.REACT_APP_SC_DISABLE_SPEEDY!==""?Zn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Zn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Zn!==void 0&&Zn.SC_DISABLE_SPEEDY!==void 0&&Zn.SC_DISABLE_SPEEDY!==""&&Zn.SC_DISABLE_SPEEDY!=="false"&&Zn.SC_DISABLE_SPEEDY),mm=Object.freeze([]),tu=Object.freeze({});function BO(n,e,t){return t===void 0&&(t=tu),n.theme!==t.theme&&n.theme||e||t.theme}var HS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,FO=/(^-|-$)/g;function $b(n){return n.replace(zO,"-").replace(FO,"")}var jO=/(a)(d)/gi,Wf=52,Kb=function(n){return String.fromCharCode(n+(n>25?39:97))};function My(n){var e,t="";for(e=Math.abs(n);e>Wf;e=e/Wf|0)t=Kb(e%Wf)+t;return(Kb(e%Wf)+t).replace(jO,"$1-$2")}var ly,GS=5381,Hl=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},$S=function(n){return Hl(GS,n)};function qO(n){return My($S(n)>>>0)}function HO(n){return n.displayName||n.name||"Component"}function uy(n){return typeof n=="string"&&!0}var KS=typeof Symbol=="function"&&Symbol.for,QS=KS?Symbol.for("react.memo"):60115,GO=KS?Symbol.for("react.forward_ref"):60112,$O={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},WS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},QO=((ly={})[GO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ly[QS]=WS,ly);function Qb(n){return("type"in(e=n)&&e.type.$$typeof)===QS?WS:"$$typeof"in n?QO[n.$$typeof]:$O;var e}var WO=Object.defineProperty,YO=Object.getOwnPropertyNames,Wb=Object.getOwnPropertySymbols,XO=Object.getOwnPropertyDescriptor,ZO=Object.getPrototypeOf,Yb=Object.prototype;function YS(n,e,t){if(typeof e!="string"){if(Yb){var r=ZO(e);r&&r!==Yb&&YS(n,r,t)}var a=YO(e);Wb&&(a=a.concat(Wb(e)));for(var o=Qb(n),u=Qb(e),d=0;d<a.length;++d){var p=a[d];if(!(p in KO||t&&t[p]||u&&p in u||o&&p in o)){var m=XO(e,p);try{WO(n,p,m)}catch{}}}}return n}function nu(n){return typeof n=="function"}function Uv(n){return typeof n=="object"&&"styledComponentId"in n}function ho(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Xb(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=n[r];return t}function xh(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Ly(n,e,t){if(t===void 0&&(t=!1),!t&&!xh(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=Ly(n[r],e[r]);else if(xh(e))for(var r in e)n[r]=Ly(n[r],e[r]);return n}function Bv(n,e){Object.defineProperty(n,"toString",{value:e})}function id(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var JO=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,o=a;e>=o;)if((o<<=1)<0)throw id(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var u=a;u<o;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),p=(u=0,t.length);u<p;u++)this.tag.insertRule(d,t[u])&&(this.groupSizes[e]++,d++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),a=r+t;this.groupSizes[e]=0;for(var o=r;o<a;o++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],a=this.indexOfGroup(e),o=a+r,u=a;u<o;u++)t+="".concat(this.tag.getRule(u)).concat(Lv);return t},n}(),hp=new Map,Pp=new Map,dp=1,Yf=function(n){if(hp.has(n))return hp.get(n);for(;Pp.has(dp);)dp++;var e=dp++;return hp.set(n,e),Pp.set(e,n),e},ek=function(n,e){dp=e+1,hp.set(n,e),Pp.set(e,n)},tk="style[".concat(eu,"][").concat(qS,'="').concat(pm,'"]'),nk=new RegExp("^".concat(eu,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rk=function(n,e,t){for(var r,a=t.split(","),o=0,u=a.length;o<u;o++)(r=a[o])&&n.registerName(e,r)},ik=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(Lv),a=[],o=0,u=r.length;o<u;o++){var d=r[o].trim();if(d){var p=d.match(nk);if(p){var m=0|parseInt(p[1],10),y=p[2];m!==0&&(ek(y,m),rk(n,y,p[3]),n.getTag().insertRules(m,a)),a.length=0}else a.push(d)}}},Zb=function(n){for(var e=document.querySelectorAll(tk),t=0,r=e.length;t<r;t++){var a=e[t];a&&a.getAttribute(eu)!==jS&&(ik(n,a),a.parentNode&&a.parentNode.removeChild(a))}};function sk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var XS=function(n){var e=document.head,t=n||e,r=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat(eu,"]")));return p[p.length-1]}(t),o=a!==void 0?a.nextSibling:null;r.setAttribute(eu,jS),r.setAttribute(qS,pm);var u=sk();return u&&r.setAttribute("nonce",u),t.insertBefore(r,o),r},ak=function(){function n(e){this.element=XS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,a=0,o=r.length;a<o;a++){var u=r[a];if(u.ownerNode===t)return u}throw id(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),ok=function(){function n(e){this.element=XS(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),lk=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),Jb=Dp,uk={isServer:!Dp,useCSSOMInjection:!UO},ZS=function(){function n(e,t,r){e===void 0&&(e=tu),t===void 0&&(t={});var a=this;this.options=Fn(Fn({},uk),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Dp&&Jb&&(Jb=!1,Zb(this)),Bv(this,function(){return function(o){for(var u=o.getTag(),d=u.length,p="",m=function(v){var w=function(H){return Pp.get(H)}(v);if(w===void 0)return"continue";var S=o.names.get(w),D=u.getGroup(v);if(S===void 0||!S.size||D.length===0)return"continue";var U="".concat(eu,".g").concat(v,'[id="').concat(w,'"]'),L="";S!==void 0&&S.forEach(function(H){H.length>0&&(L+="".concat(H,","))}),p+="".concat(D).concat(U,'{content:"').concat(L,'"}').concat(Lv)},y=0;y<d;y++)m(y);return p}(a)})}return n.registerId=function(e){return Yf(e)},n.prototype.rehydrate=function(){!this.server&&Dp&&Zb(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Fn(Fn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,a=t.target;return t.isServer?new lk(a):r?new ak(a):new ok(a)}(this.options),new JO(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Yf(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Yf(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Yf(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),ck=/&/g,hk=/^\s*\/\/.*$/gm;function JS(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=JS(t.children,e)),t})}function dk(n){var e,t,r,a=tu,o=a.options,u=o===void 0?tu:o,d=a.plugins,p=d===void 0?mm:d,m=function(w,S,D){return D.startsWith(t)&&D.endsWith(t)&&D.replaceAll(t,"").length>0?".".concat(e):w},y=p.slice();y.push(function(w){w.type===cm&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(ck,t).replace(r,m))}),u.prefix&&y.push(MO),y.push(OO);var v=function(w,S,D,U){S===void 0&&(S=""),D===void 0&&(D=""),U===void 0&&(U="&"),e=U,t=S,r=new RegExp("\\".concat(t,"\\b"),"g");var L=w.replace(hk,""),H=PO(D||S?"".concat(D," ").concat(S," { ").concat(L," }"):L);u.namespace&&(H=JS(H,u.namespace));var W=[];return xp(H,kO(y.concat(VO(function($){return W.push($)})))),W};return v.hash=p.length?p.reduce(function(w,S){return S.name||id(15),Hl(w,S.name)},GS).toString():"",v}var fk=new ZS,Uy=dk(),eR=Rh.createContext({shouldForwardProp:void 0,styleSheet:fk,stylis:Uy});eR.Consumer;Rh.createContext(void 0);function eI(){return X.useContext(eR)}var pk=function(){function n(e,t){var r=this;this.inject=function(a,o){o===void 0&&(o=Uy);var u=r.name+o.hash;a.hasNameForId(r.id,u)||a.insertRules(r.id,u,o(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Bv(this,function(){throw id(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=Uy),this.name+e.hash},n}(),mk=function(n){return n>="A"&&n<="Z"};function tI(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;mk(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var tR=function(n){return n==null||n===!1||n===""},nR=function(n){var e,t,r=[];for(var a in n){var o=n[a];n.hasOwnProperty(a)&&!tR(o)&&(Array.isArray(o)&&o.isCss||nu(o)?r.push("".concat(tI(a),":"),o,";"):xh(o)?r.push.apply(r,Cp(Cp(["".concat(a," {")],nR(o),!1),["}"],!1)):r.push("".concat(tI(a),": ").concat((e=a,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in LO||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function yo(n,e,t,r){if(tR(n))return[];if(Uv(n))return[".".concat(n.styledComponentId)];if(nu(n)){if(!nu(o=n)||o.prototype&&o.prototype.isReactComponent||!e)return[n];var a=n(e);return yo(a,e,t,r)}var o;return n instanceof pk?t?(n.inject(t,r),[n.getName(r)]):[n]:xh(n)?nR(n):Array.isArray(n)?Array.prototype.concat.apply(mm,n.map(function(u){return yo(u,e,t,r)})):[n.toString()]}function gk(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(nu(t)&&!Uv(t))return!1}return!0}var _k=$S(pm),yk=function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&gk(e),this.componentId=t,this.baseHash=Hl(_k,t),this.baseStyle=r,ZS.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=ho(a,this.staticRulesId);else{var o=Xb(yo(this.rules,e,t,r)),u=My(Hl(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,u)){var d=r(o,".".concat(u),void 0,this.componentId);t.insertRules(this.componentId,u,d)}a=ho(a,u),this.staticRulesId=u}else{for(var p=Hl(this.baseHash,r.hash),m="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")m+=v;else if(v){var w=Xb(yo(v,e,t,r));p=Hl(p,w+y),m+=w}}if(m){var S=My(p>>>0);t.hasNameForId(this.componentId,S)||t.insertRules(this.componentId,S,r(m,".".concat(S),void 0,this.componentId)),a=ho(a,S)}}return a},n}(),rR=Rh.createContext(void 0);rR.Consumer;var cy={};function vk(n,e,t){var r=Uv(n),a=n,o=!uy(n),u=e.attrs,d=u===void 0?mm:u,p=e.componentId,m=p===void 0?function(oe,ae){var le=typeof oe!="string"?"sc":$b(oe);cy[le]=(cy[le]||0)+1;var x="".concat(le,"-").concat(qO(pm+le+cy[le]));return ae?"".concat(ae,"-").concat(x):x}(e.displayName,e.parentComponentId):p,y=e.displayName,v=y===void 0?function(oe){return uy(oe)?"styled.".concat(oe):"Styled(".concat(HO(oe),")")}(n):y,w=e.displayName&&e.componentId?"".concat($b(e.displayName),"-").concat(e.componentId):e.componentId||m,S=r&&a.attrs?a.attrs.concat(d).filter(Boolean):d,D=e.shouldForwardProp;if(r&&a.shouldForwardProp){var U=a.shouldForwardProp;if(e.shouldForwardProp){var L=e.shouldForwardProp;D=function(oe,ae){return U(oe,ae)&&L(oe,ae)}}else D=U}var H=new yk(t,w,r?a.componentStyle:void 0);function W(oe,ae){return function(le,x,R){var A=le.attrs,P=le.componentStyle,V=le.defaultProps,z=le.foldedComponentIds,N=le.styledComponentId,Nt=le.target,It=Rh.useContext(rR),de=eI(),Ie=le.shouldForwardProp||de.shouldForwardProp,we=BO(x,It,V)||tu,Oe=function(xe,Ce,ut){for(var Me,Ze=Fn(Fn({},Ce),{className:void 0,theme:ut}),Ke=0;Ke<xe.length;Ke+=1){var Ut=nu(Me=xe[Ke])?Me(Ze):Me;for(var Jt in Ut)Ze[Jt]=Jt==="className"?ho(Ze[Jt],Ut[Jt]):Jt==="style"?Fn(Fn({},Ze[Jt]),Ut[Jt]):Ut[Jt]}return Ce.className&&(Ze.className=ho(Ze.className,Ce.className)),Ze}(A,x,we),O=Oe.as||Nt,ie={};for(var _e in Oe)Oe[_e]===void 0||_e[0]==="$"||_e==="as"||_e==="theme"&&Oe.theme===we||(_e==="forwardedAs"?ie.as=Oe.forwardedAs:Ie&&!Ie(_e,O)||(ie[_e]=Oe[_e]));var me=function(xe,Ce){var ut=eI(),Me=xe.generateAndInjectStyles(Ce,ut.styleSheet,ut.stylis);return Me}(P,Oe),pe=ho(z,N);return me&&(pe+=" "+me),Oe.className&&(pe+=" "+Oe.className),ie[uy(O)&&!HS.has(O)?"class":"className"]=pe,R&&(ie.ref=R),X.createElement(O,ie)}($,oe,ae)}W.displayName=v;var $=Rh.forwardRef(W);return $.attrs=S,$.componentStyle=H,$.displayName=v,$.shouldForwardProp=D,$.foldedComponentIds=r?ho(a.foldedComponentIds,a.styledComponentId):"",$.styledComponentId=w,$.target=r?a.target:n,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(oe){this._foldedDefaultProps=r?function(ae){for(var le=[],x=1;x<arguments.length;x++)le[x-1]=arguments[x];for(var R=0,A=le;R<A.length;R++)Ly(ae,A[R],!0);return ae}({},a.defaultProps,oe):oe}}),Bv($,function(){return".".concat($.styledComponentId)}),o&&YS($,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function nI(n,e){for(var t=[n[0]],r=0,a=e.length;r<a;r+=1)t.push(e[r],n[r+1]);return t}var rI=function(n){return Object.assign(n,{isCss:!0})};function Ek(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(nu(n)||xh(n))return rI(yo(nI(mm,Cp([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?yo(r):rI(yo(nI(r,e)))}function By(n,e,t){if(t===void 0&&(t=tu),!e)throw id(1,e);var r=function(a){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return n(e,t,Ek.apply(void 0,Cp([a],o,!1)))};return r.attrs=function(a){return By(n,e,Fn(Fn({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return By(n,e,Fn(Fn({},t),a))},r}var iR=function(n){return By(vk,n)},ce=iR;HS.forEach(function(n){ce[n]=iR(n)});const Tk=ce.div`
    background-color: #FAFAFA;
    display: block;
    width: 240px;
    height: 340px;
    border-radius: 12px;
    border: 1px solid #e0e0e0;
    transition: 0.15s all ease-in-out;

    &:hover {
        background-color: #e9e9e9;
        cursor: pointer;
    }
`,wk=ce.div`
    display: flex;
    width: 240px;
    height: 213px;
    background-color: gray;
    border-radius: 12px 12px 0px 0px;
`,bk=ce.img`
    display: flex;
    width: 240px;
    height: 213px;
    border-radius: 12px 12px 0px 0px;
    object-fit: cover;
`,Ik=ce.div`
    display: flex;
    width: 200px;
    height: 127px;
    background-color: transparent;
    border-radius: 0px 0px 12px 12px;
    flex-direction: column;
    padding: 10px 20px 13px 20px;
`,Ak=ce.div`
    display: flex;
    width: 200px;
    height: 24px;
    justify-content: left;
    align-items: center;
`,Sk=ce.h1`
    font-weight: 600;
    font-size: 22px;
    width: 200px;
    height: 70px;
    color: #404040;
`,Rk=ce.p`
    font-size: 14px;
    margin-left: 8px;
    color: #404040;
`,Ck=ce.div`
    display: flex;
    width: 16px;
    height: 16px;
    background-image: url(/DateIcon.svg);
`;function iI(n){const{post:e,onClick:t}=n;return J.jsxs(Tk,{onClick:t,children:[J.jsx(wk,{children:J.jsx(bk,{src:e.image})}),J.jsxs(Ik,{children:[J.jsxs(Ak,{children:[J.jsx(Ck,{}),J.jsx(Rk,{children:e.date})]}),J.jsx(Sk,{children:e.title})]})]})}const xk=ce.button`
    background-color: transparent;
    display: block;
    width: auto;
    height: 32px;
    padding: 0px 12px 0px 12px;
    border-radius: 16px;
    border: 1px solid #4273BE;
    font-size: 18px;
    color: #4273BE;
    font-weight: 400;
    align-items: center;
    justify-content: space-between;
    transition: 0.15s all ease-out;

    &:hover {
        border: 1px solid #0D4FB3;
        color: #0D4FB3;
        background-color: #F1F7FF;
        cursor: pointer;
}
`;function Np(n){const{title:e,onClick:t}=n;return J.jsx(xk,{onClick:t,children:e||"Button"})}const Dk=ce.div`
    width: 1104px;
    height: auto;
    flex-direction: row;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    gap: 45px;
    justify-content: flex-start;
    display: flex;
`,Pk=ce.div`
    display: flex;
    width: 1104px;
    height: auto;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;function Nk(n){const{posts:e,itemClicked:t}=n,[r,a]=X.useState(!1),o=[...e].reverse().map((m,y)=>J.jsx(iI,{post:m,onClick:v=>t(m)},m.id)),u=[...e].reverse().map((m,y)=>y<=e.length-(e.length-3)?J.jsx(iI,{post:m,onClick:v=>t(m)},m.id):null);let d=null,p=null;return r===!0?(d=o,p=J.jsx(Np,{title:"Close posts",onClick:function(){a()}})):(d=u,p=J.jsx(Np,{title:"View more posts",onClick:function(){a(!0)}})),J.jsxs(Pk,{children:[J.jsx(Dk,{children:d}),p]})}const sR=ce.button`
    background-color: #428BF7;
    display: block;
    width: auto;
    height: 40px;
    padding: 0px 34px 0px 34px;
    border-radius: 20px;
    border: none;
    font-size: 20px;
    color: #FAFAFA;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    transition: 0.15s all ease-out;

    &:hover {
        background-color: #0D4FB3;
        cursor: pointer;
    }
`,Ok=ce(sR)`
    background-color: transparent;
    border: 2px solid #808080;
    color: #808080;

    &:hover {
        background-color: #e0e0e0;
        border: 2px solid #606060;
        color: #404040;
    }
`;function zy(n){const{title:e,onClick:t,type:r}=n;return r=="cancel"?J.jsx(Ok,{onClick:t,children:e||"Button"}):J.jsx(sR,{onClick:t,children:e||"Button"})}const kk=ce.div`
    display: flex;
    position: relative;
    top: 0;
    width: calc(100% - 198*2px);
    height: 36px;
    background-color: transparent;
    padding: 22px 198px;
    justify-content: space-between;
    align-items: center;
`,Vk=ce.div`
    display: flex;
    width: 375px;
    height: 36px;
    background-color: transparent;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
`,aR=ce.div`
    display: flex;
    width: 36px;
    height: 36px;
    background-image: url(/LogoIcon.svg);
    transition: 0.15s all ease-in-out;

    &:hover {
        cursor: pointer;
    }
`,Mk=ce(aR)`
    width: 32px;
    height: 32px;
    background-image: url(/SearchIcon.svg);
`,hy=ce.span`
    font-size: 20px;
    font-weight: 500;
    transition: 0.15s all ease-in-out;

    &:hover {
        cursor: pointer;
        font-weight: 700;
        letter-spacing: -0.4px;
    }
`;function zv(n){const e=lm();return J.jsxs(kk,{children:[J.jsxs(Vk,{children:[J.jsx(aR,{onClick:t=>{e("/")}}),J.jsx(hy,{onClick:t=>{e("/")},children:"Blog"}),J.jsx(hy,{children:"About me"}),J.jsx(hy,{children:"Posts"}),J.jsx(Mk,{})]}),J.jsx(zy,{title:"Add New Post",onClick:t=>{e("/write")}})]})}const Lk=ce.div`
    display: flex;
    position: relative;
    top: 0;
    width: calc(100% - 198*2px);
    height: 80px;
    background-color: transparent;
    padding: 0px 198px 0px 198px;
    justify-content: space-between;
`,Uk=ce.div`
    display: flex;
    width: 60px;
    height: 24px;
    justify-content: space-between;
    align-items: center;
    margin-top: 13.5px;
`,oR=ce.div`
    display: flex;
    width: 24px;
    height: 24px;
    background-image: url(/Instagram.png);
`,Bk=ce(oR)`
    background-image: url(/Facebook.png);
`,zk=ce.div`
    display: flex;
    position: absolute;
    top: 0%;
    width: 73vw;
    height: 1px;
    background-color: #505050;
    /* margin: 0px 198px; */

    @media screen and (min-width: 1920px) {
        width: 85vw;
    }
`,Fk=ce.div`
    display: flex;
    width: 249px;
    height: 46px;
    background-color: transparent;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 13.5px;
`,lR=ce.h1`
    font-size: 16px;
    font-weight: 300;
    color: #808080;
    letter-spacing: 0.03px;
    margin: 0;
`,jk=ce(lR)`
    font-size: 14px;
`;function Fv(n){return J.jsxs(Lk,{children:[J.jsx(zk,{}),J.jsxs(Uk,{children:[J.jsx(oR,{}),J.jsx(Bk,{})]}),J.jsxs(Fk,{children:[J.jsx(lR,{children:"@Designed & Developed by Yejun"}),J.jsx(jk,{children:"Tukorea 2025-1"})]})]})}const qk=ce.div`
    display: flex;
    width: 100%;
    height: 303px;    
`,Hk=ce.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 303px;
    background-color: #C3F0D8;
    z-index: -1;
`,Gk=ce.div`
    display: flex;
    position: absolute;
    left: 0;
    top: 30%;
    width: 140px;
    height: 120px;
    background-image: url(/MainImgLeft.png);
    background-repeat: no-repeat;
    background-position: center;
`,$k=ce.div`
    display: flex;
    position: absolute;
    right: 10%;
    top: 5%;
    width: 489px;
    height: 277px;
    background-image: url(/MainImgRight.png);
    background-repeat: no-repeat;
    background-position: center;
`,Kk=ce.div`
    display: flex;
    width: 602px;
    height: 216px;
    margin: 43px 198px;
    flex-direction: column;
    gap: 24px;
    justify-content: space-between;
    z-index: 0;
`,Qk=ce.div`
    display: flex;
    width: 602px;
    height: 100px;
    flex-direction: column;
    gap: 0px;
    justify-content: space-around;
`,Wk=ce.div`
    display: flex;
    width: 177px;
    height: 32px;
`,Yk=ce.h1`
    margin: 0;
    font-size: 40px;
    font-weight: 800;
    color: #111;
`,uR=ce.h2`
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: #202020;
`,Xk=ce(uR)`
    color: #505050;
    font-weight: 400;
`;function Zk(n){return J.jsxs(qk,{children:[J.jsxs(Hk,{children:[J.jsx(Gk,{}),J.jsx($k,{})]}),J.jsxs(Kk,{children:[J.jsx(Yk,{children:"Yejun‘s Mini Blog"}),J.jsxs(Qk,{children:[J.jsx(uR,{children:"Welcome to Yejun’s Mini Blog!"}),J.jsx(Xk,{children:"This is a space where I post about my personal life and work status."})]}),J.jsx(Wk,{children:J.jsx(Np,{title:"More about me"})})]})]})}const Jk=()=>{};var sI={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let a=n.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},eV=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const a=n[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const o=n[t++];e[r++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=n[t++],u=n[t++],d=n[t++],p=((a&7)<<18|(o&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const o=n[t++],u=n[t++];e[r++]=String.fromCharCode((a&15)<<12|(o&63)<<6|u&63)}}return e.join("")},hR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<n.length;a+=3){const o=n[a],u=a+1<n.length,d=u?n[a+1]:0,p=a+2<n.length,m=p?n[a+2]:0,y=o>>2,v=(o&3)<<4|d>>4;let w=(d&15)<<2|m>>6,S=m&63;p||(S=64,u||(w=64)),r.push(t[y],t[v],t[w],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cR(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):eV(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<n.length;){const o=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const m=a<n.length?t[n.charAt(a)]:64;++a;const v=a<n.length?t[n.charAt(a)]:64;if(++a,o==null||d==null||m==null||v==null)throw new tV;const w=o<<2|d>>4;if(r.push(w),m!==64){const S=d<<4&240|m>>2;if(r.push(S),v!==64){const D=m<<6&192|v;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tV extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nV=function(n){const e=cR(n);return hR.encodeByteArray(e,!0)},Op=function(n){return nV(n).replace(/\./g,"")},jv=function(n){try{return hR.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function kp(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!rV(t)||(n[t]=kp(n[t],e[t]));return n}function rV(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iV=()=>dR().__FIREBASE_DEFAULTS__,sV=()=>{if(typeof process>"u"||typeof sI>"u")return;const n=sI.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},aV=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jv(n[1]);return e&&JSON.parse(e)},qv=()=>{try{return Jk()||iV()||sV()||aV()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},fR=()=>{var n;return(n=qv())===null||n===void 0?void 0:n.config},oV=n=>{var e;return(e=qv())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uV(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Op(JSON.stringify(t)),Op(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cV(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function Hv(){var n;const e=(n=qv())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hV(){return typeof window<"u"||pR()}function pR(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function dV(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Gv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gR(){const n=wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _R(){return!Hv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dh(){try{return typeof indexedDB=="object"}catch{return!1}}function fV(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var o;e(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV="FirebaseError";class kn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=pV,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vo.prototype.create)}}class Vo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,o=this.errors[e],u=o?mV(o,r):"Error",d=`${this.serviceName}: ${u} (${a}).`;return new kn(a,d,r)}}function mV(n,e){return n.replace(gV,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const gV=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function _V(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ia(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const o=n[a],u=e[a];if(oI(o)&&oI(u)){if(!ia(o,u))return!1}else if(o!==u)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function oI(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,o]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(o)}}),e}function oh(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function yR(n,e){const t=new yV(n,e);return t.subscribe.bind(t)}class yV{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");vV(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=dy),a.error===void 0&&(a.error=dy),a.complete===void 0&&(a.complete=dy);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vV(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function dy(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n){return n&&n._delegate?n._delegate:n}class ci{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new lV;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wV(e))try{this.getOrInitializeService({instanceIdentifier:ro})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:a});r.resolve(o)}catch{}}}}clearInstance(e=ro){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ro){return this.instances.has(e)}getOptions(e=ro){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(o);r===d&&u.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TV(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ro){return this.component?this.component.multipleInstances?e:ro:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TV(n){return n===ro?void 0:n}function wV(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new EV(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=[];var Be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Be||(Be={}));const ER={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},bV=Be.INFO,IV={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},AV=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),a=IV[e];if(a)console[a](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gm{constructor(e){this.name=e,this._logLevel=bV,this._logHandler=AV,this._userLogHandler=null,$v.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ER[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}function SV(n){$v.forEach(e=>{e.setLogLevel(n)})}function RV(n,e){for(const t of $v){let r=null;e&&e.level&&(r=ER[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(a,o,...u)=>{const d=u.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");o>=(r??a.logLevel)&&n({level:Be[o].toLowerCase(),message:d,args:u,type:a.name})}}}const CV=(n,e)=>e.some(t=>n instanceof t);let lI,uI;function xV(){return lI||(lI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DV(){return uI||(uI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TR=new WeakMap,Fy=new WeakMap,wR=new WeakMap,fy=new WeakMap,Kv=new WeakMap;function PV(n){const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{t(Js(n.result)),a()},u=()=>{r(n.error),a()};n.addEventListener("success",o),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&TR.set(t,n)}).catch(()=>{}),Kv.set(e,n),e}function NV(n){if(Fy.has(n))return;const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{t(),a()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});Fy.set(n,e)}let jy={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Fy.get(n);if(e==="objectStoreNames")return n.objectStoreNames||wR.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Js(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function OV(n){jy=n(jy)}function kV(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(py(this),e,...t);return wR.set(r,e.sort?e.sort():[e]),Js(r)}:DV().includes(n)?function(...e){return n.apply(py(this),e),Js(TR.get(this))}:function(...e){return Js(n.apply(py(this),e))}}function VV(n){return typeof n=="function"?kV(n):(n instanceof IDBTransaction&&NV(n),CV(n,xV())?new Proxy(n,jy):n)}function Js(n){if(n instanceof IDBRequest)return PV(n);if(fy.has(n))return fy.get(n);const e=VV(n);return e!==n&&(fy.set(n,e),Kv.set(e,n)),e}const py=n=>Kv.get(n);function MV(n,e,{blocked:t,upgrade:r,blocking:a,terminated:o}={}){const u=indexedDB.open(n,e),d=Js(u);return r&&u.addEventListener("upgradeneeded",p=>{r(Js(u.result),p.oldVersion,p.newVersion,Js(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{o&&p.addEventListener("close",()=>o()),a&&p.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const LV=["get","getKey","getAll","getAllKeys","count"],UV=["put","add","delete","clear"],my=new Map;function cI(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(my.get(e))return my.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=UV.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||LV.includes(t)))return;const o=async function(u,...d){const p=this.transaction(u,a?"readwrite":"readonly");let m=p.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),a&&p.done]))[0]};return my.set(e,o),o}OV(n=>({...n,get:(e,t,r)=>cI(e,t)||n.get(e,t,r),has:(e,t)=>!!cI(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zV(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function zV(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vp="@firebase/app",qy="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new gm("@firebase/app"),FV="@firebase/app-compat",jV="@firebase/analytics-compat",qV="@firebase/analytics",HV="@firebase/app-check-compat",GV="@firebase/app-check",$V="@firebase/auth",KV="@firebase/auth-compat",QV="@firebase/database",WV="@firebase/data-connect",YV="@firebase/database-compat",XV="@firebase/functions",ZV="@firebase/functions-compat",JV="@firebase/installations",eM="@firebase/installations-compat",tM="@firebase/messaging",nM="@firebase/messaging-compat",rM="@firebase/performance",iM="@firebase/performance-compat",sM="@firebase/remote-config",aM="@firebase/remote-config-compat",oM="@firebase/storage",lM="@firebase/storage-compat",uM="@firebase/firestore",cM="@firebase/vertexai",hM="@firebase/firestore-compat",dM="firebase",fM="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="[DEFAULT]",pM={[Vp]:"fire-core",[FV]:"fire-core-compat",[qV]:"fire-analytics",[jV]:"fire-analytics-compat",[GV]:"fire-app-check",[HV]:"fire-app-check-compat",[$V]:"fire-auth",[KV]:"fire-auth-compat",[QV]:"fire-rtdb",[WV]:"fire-data-connect",[YV]:"fire-rtdb-compat",[XV]:"fire-fn",[ZV]:"fire-fn-compat",[JV]:"fire-iid",[eM]:"fire-iid-compat",[tM]:"fire-fcm",[nM]:"fire-fcm-compat",[rM]:"fire-perf",[iM]:"fire-perf-compat",[sM]:"fire-rc",[aM]:"fire-rc-compat",[oM]:"fire-gcs",[lM]:"fire-gcs-compat",[uM]:"fire-fst",[hM]:"fire-fst-compat",[cM]:"fire-vertex","fire-js":"fire-js",[dM]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new Map,ru=new Map,iu=new Map;function Ph(n,e){try{n.container.addComponent(e)}catch(t){Wi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bR(n,e){n.container.addOrOverwriteComponent(e)}function oa(n){const e=n.name;if(iu.has(e))return Wi.debug(`There were multiple attempts to register component ${e}.`),!1;iu.set(e,n);for(const t of aa.values())Ph(t,n);for(const t of ru.values())Ph(t,n);return!0}function IR(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function mM(n,e,t=sa){IR(n,e).clearInstance(t)}function AR(n){return n.options!==void 0}function ft(n){return n==null?!1:n.settings!==void 0}function gM(){iu.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new Vo("app","Firebase",_M);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SR=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(n,e){const t=jv(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,o=new Date().getTime();a-o<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class yM extends SR{constructor(e,t,r,a){const o=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,u={name:r,automaticDataCollectionEnabled:o};if(e.apiKey!==void 0)super(e,u,a);else{const d=e;super(d.options,u,a)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:o},t),this._serverConfig.authIdToken&&hI(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&hI(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Or(Vp,qy,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Wv(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Tr.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=fM;function Qv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sa,automaticDataCollectionEnabled:!1},e),a=r.name;if(typeof a!="string"||!a)throw Tr.create("bad-app-name",{appName:String(a)});if(t||(t=fR()),!t)throw Tr.create("no-options");const o=aa.get(a);if(o){if(ia(t,o.options)&&ia(r,o.config))return o;throw Tr.create("duplicate-app",{appName:a})}const u=new vR(a);for(const p of iu.values())u.addComponent(p);const d=new SR(t,r,u);return aa.set(a,d),d}function vM(n,e){if(hV()&&!pR())throw Tr.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;AR(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const a=m=>[...m].reduce((y,v)=>Math.imul(31,y)+v.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Tr.create("finalization-registry-not-supported",{});const o=""+a(JSON.stringify(r)),u=ru.get(o);if(u)return u.incRefCount(e.releaseOnDeref),u;const d=new vR(o);for(const m of iu.values())d.addComponent(m);const p=new yM(t,e,o,d);return ru.set(o,p),p}function EM(n=sa){const e=aa.get(n);if(!e&&n===sa&&fR())return Qv();if(!e)throw Tr.create("no-app",{appName:n});return e}function TM(){return Array.from(aa.values())}async function Wv(n){let e=!1;const t=n.name;aa.has(t)?(e=!0,aa.delete(t)):ru.has(t)&&n.decRefCount()<=0&&(ru.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Or(n,e,t){var r;let a=(r=pM[n])!==null&&r!==void 0?r:n;t&&(a+=`-${t}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${e}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wi.warn(d.join(" "));return}oa(new ci(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function RR(n,e){if(n!==null&&typeof n!="function")throw Tr.create("invalid-log-argument");RV(n,e)}function CR(n){SV(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM="firebase-heartbeat-database",bM=1,Nh="firebase-heartbeat-store";let gy=null;function xR(){return gy||(gy=MV(wM,bM,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Nh)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tr.create("idb-open",{originalErrorMessage:n.message})})),gy}async function IM(n){try{const t=(await xR()).transaction(Nh),r=await t.objectStore(Nh).get(DR(n));return await t.done,r}catch(e){if(e instanceof kn)Wi.warn(e.message);else{const t=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wi.warn(t.message)}}}async function dI(n,e){try{const r=(await xR()).transaction(Nh,"readwrite");await r.objectStore(Nh).put(e,DR(n)),await r.done}catch(t){if(t instanceof kn)Wi.warn(t.message);else{const r=Tr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wi.warn(r.message)}}}function DR(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AM=1024,SM=30;class RM{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xM(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=fI();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats.length>SM){const u=DM(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Wi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fI(),{heartbeatsToSend:r,unsentEntries:a}=CM(this._heartbeatsCache.heartbeats),o=Op(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Wi.warn(t),""}}}function fI(){return new Date().toISOString().substring(0,10)}function CM(n,e=AM){const t=[];let r=n.slice();for(const a of n){const o=t.find(u=>u.agent===a.agent);if(o){if(o.dates.push(a.date),pI(t)>e){o.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),pI(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class xM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dh()?fV().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await IM(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return dI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return dI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function pI(n){return Op(JSON.stringify({version:2,heartbeats:n})).length}function DM(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(n){oa(new ci("platform-logger",e=>new BV(e),"PRIVATE")),oa(new ci("heartbeat",e=>new RM(e),"PRIVATE")),Or(Vp,qy,n),Or(Vp,qy,"esm2017"),Or("fire-js","")}PM("");const NM=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:kn,SDK_VERSION:_a,_DEFAULT_ENTRY_NAME:sa,_addComponent:Ph,_addOrOverwriteComponent:bR,_apps:aa,_clearComponents:gM,_components:iu,_getProvider:IR,_isFirebaseApp:AR,_isFirebaseServerApp:ft,_registerComponent:oa,_removeServiceInstance:mM,_serverApps:ru,deleteApp:Wv,getApp:EM,getApps:TM,initializeApp:Qv,initializeServerApp:vM,onLog:RR,registerVersion:Or,setLogLevel:CR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e,t){this._delegate=e,this.firebase=t,Ph(e,new ci("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Wv(this._delegate)))}_getService(e,t=sa){var r;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((r=a.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=sa){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Ph(this._delegate,e)}_addOrOverwriteComponent(e){bR(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kM={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},mI=new Vo("app-compat","Firebase",kM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VM(n){const e={},t={__esModule:!0,initializeApp:o,app:a,registerVersion:Or,setLogLevel:CR,onLog:RR,apps:null,SDK_VERSION:_a,INTERNAL:{registerComponent:d,removeApp:r,useAsService:p,modularAPIs:NM}};t.default=t,Object.defineProperty(t,"apps",{get:u});function r(m){delete e[m]}function a(m){if(m=m||sa,!aI(e,m))throw mI.create("no-app",{appName:m});return e[m]}a.App=n;function o(m,y={}){const v=Qv(m,y);if(aI(e,v.name))return e[v.name];const w=new n(v,t);return e[v.name]=w,w}function u(){return Object.keys(e).map(m=>e[m])}function d(m){const y=m.name,v=y.replace("-compat","");if(oa(m)&&m.type==="PUBLIC"){const w=(S=a())=>{if(typeof S[v]!="function")throw mI.create("invalid-app-argument",{appName:y});return S[v]()};m.serviceProps!==void 0&&kp(w,m.serviceProps),t[v]=w,n.prototype[v]=function(...S){return this._getService.bind(this,y).apply(this,m.multipleInstances?S:[])}}return m.type==="PUBLIC"?t[v]:null}function p(m,y){return y==="serverAuth"?null:y}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(){const n=VM(OM);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:PR,extendNamespace:e,createSubscribe:yR,ErrorFactory:Vo,deepExtend:kp});function e(t){kp(n,t)}return n}const MM=PR();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=new gm("@firebase/app-compat"),LM="@firebase/app-compat",UM="0.2.53";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BM(n){Or(LM,UM,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=dR();if(n.firebase!==void 0){gI.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&gI.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Du=MM;BM();var zM="firebase",FM="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Du.registerVersion(zM,FM,"app-compat");const Xc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Nl={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function NR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qM=jM,HM=NR,OR=new Vo("auth","Firebase",NR());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=new gm("@firebase/auth");function GM(n,...e){Mp.logLevel<=Be.WARN&&Mp.warn(`Auth (${_a}): ${n}`,...e)}function fp(n,...e){Mp.logLevel<=Be.ERROR&&Mp.error(`Auth (${_a}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(n,...e){throw Xv(n,...e)}function Xt(n,...e){return Xv(n,...e)}function Yv(n,e,t){const r=Object.assign(Object.assign({},HM()),{[e]:t});return new Vo("auth","Firebase",r).create(e,{appName:n.name})}function hn(n){return Yv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pu(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&vn(n,"argument-error"),Yv(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xv(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return OR.create(n,...e)}function se(n,e,...t){if(!n)throw Xv(e,...t)}function ii(n){const e="INTERNAL ASSERTION FAILED: "+n;throw fp(e),new Error(e)}function kr(n,e){n||ii(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Zv(){return _I()==="http:"||_I()==="https:"}function _I(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $M(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zv()||mR()||"connection"in navigator)?navigator.onLine:!0}function KM(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=cV()||Gv()}get(){return $M()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(n,e){kr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ii("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ii("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ii("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],YM=new sd(3e4,6e4);function Dt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pt(n,e,t,r,a={}){return VR(n,a,async()=>{let o={},u={};r&&(e==="GET"?u=r:o={body:JSON.stringify(r)});const d=xu(Object.assign({key:n.config.apiKey},u)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:p},o);return dV()||(m.referrerPolicy="no-referrer"),kR.fetch()(await MR(n,n.config.apiHost,t,d),m)})}async function VR(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},QM),e);try{const a=new ZM(n),o=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await o.json();if("needConfirmation"in u)throw lh(n,"account-exists-with-different-credential",u);if(o.ok&&!("errorMessage"in u))return u;{const d=o.ok?u.errorMessage:u.error.message,[p,m]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw lh(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw lh(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw lh(n,"user-disabled",u);const y=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Yv(n,y,m);vn(n,y)}}catch(a){if(a instanceof kn)throw a;vn(n,"network-request-failed",{message:String(a)})}}async function es(n,e,t,r,a={}){const o=await Pt(n,e,t,r,a);return"mfaPendingCredential"in o&&vn(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function MR(n,e,t,r){const a=`${e}${t}?${r}`,o=n,u=o.config.emulator?Jv(n.config,a):`${n.config.apiScheme}://${a}`;return WM.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(u).toString():u}function XM(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZM{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),YM.get())})}}function lh(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=Xt(n,e,r);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(n){return n!==void 0&&n.getResponse!==void 0}function vI(n){return n!==void 0&&n.enterprise!==void 0}class LR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return XM(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JM(n){return(await Pt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function UR(n,e){return Pt(n,"GET","/v2/recaptchaConfig",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e2(n,e){return Pt(n,"POST","/v1/accounts:delete",e)}async function t2(n,e){return Pt(n,"POST","/v1/accounts:update",e)}async function Lp(n,e){return Pt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function n2(n,e=!1){const t=Ae(n),r=await t.getIdToken(e),a=_m(r);se(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const o=typeof a.firebase=="object"?a.firebase:void 0,u=o==null?void 0:o.sign_in_provider;return{claims:a,token:r,authTime:mh(_y(a.auth_time)),issuedAtTime:mh(_y(a.iat)),expirationTime:mh(_y(a.exp)),signInProvider:u||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function _y(n){return Number(n)*1e3}function _m(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return fp("JWT malformed, contained fewer than 3 sections"),null;try{const a=jv(t);return a?JSON.parse(a):(fp("Failed to decode base64 JWT payload"),null)}catch(a){return fp("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function EI(n){const e=_m(n);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof kn&&r2(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function r2({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mh(this.lastLoginAt),this.creationTime=mh(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kh(n){var e;const t=n.auth,r=await n.getIdToken(),a=await Yi(n,Lp(t,{idToken:r}));se(a==null?void 0:a.users.length,t,"internal-error");const o=a.users[0];n._notifyReloadListener(o);const u=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?BR(o.providerUserInfo):[],d=a2(n.providerData,u),p=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!(d!=null&&d.length),y=p?m:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new Hy(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,v)}async function s2(n){const e=Ae(n);await kh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function a2(n,e){return[...n.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function BR(n){return n.map(e=>{var{providerId:t}=e,r=kv(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o2(n,e){const t=await VR(n,{},async()=>{const r=xu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:o}=n.config,u=await MR(n,a,"/v1/token",`key=${o}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",kR.fetch()(u,{method:"POST",headers:d,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function l2(n,e){return Pt(n,"POST","/v2/accounts:revokeToken",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):EI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){se(e.length!==0,"internal-error");const t=EI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:o}=await o2(e,t);this.updateTokensAndExpiration(r,a,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:o}=t,u=new $l;return r&&(se(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),a&&(se(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),o&&(se(typeof o=="number","internal-error",{appName:e}),u.expirationTime=o),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $l,this.toJSON())}_performRefresh(){return ii("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(n,e){se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pr{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,o=kv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new i2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Hy(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Yi(this,this.stsTokenManager.getToken(this.auth,e));return se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return n2(this,e)}reload(){return s2(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await kh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(hn(this.auth));const e=await this.getIdToken();return await Yi(this,e2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,o,u,d,p,m,y;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,D=(u=t.photoURL)!==null&&u!==void 0?u:void 0,U=(d=t.tenantId)!==null&&d!==void 0?d:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,H=(m=t.createdAt)!==null&&m!==void 0?m:void 0,W=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:$,emailVerified:oe,isAnonymous:ae,providerData:le,stsTokenManager:x}=t;se($&&x,e,"internal-error");const R=$l.fromJSON(this.name,x);se(typeof $=="string",e,"internal-error"),qs(v,e.name),qs(w,e.name),se(typeof oe=="boolean",e,"internal-error"),se(typeof ae=="boolean",e,"internal-error"),qs(S,e.name),qs(D,e.name),qs(U,e.name),qs(L,e.name),qs(H,e.name),qs(W,e.name);const A=new Pr({uid:$,auth:e,email:w,emailVerified:oe,displayName:v,isAnonymous:ae,photoURL:D,phoneNumber:S,tenantId:U,stsTokenManager:R,createdAt:H,lastLoginAt:W});return le&&Array.isArray(le)&&(A.providerData=le.map(P=>Object.assign({},P))),L&&(A._redirectEventId=L),A}static async _fromIdTokenResponse(e,t,r=!1){const a=new $l;a.updateFromServerResponse(t);const o=new Pr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await kh(o),o}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];se(a.localId!==void 0,"internal-error");const o=a.providerUserInfo!==void 0?BR(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(o!=null&&o.length),d=new $l;d.updateFromIdToken(r);const p=new Pr({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new Hy(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(o!=null&&o.length)};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=new Map;function tr(n){kr(n instanceof Function,"Expected a class definition");let e=TI.get(n);return e?(kr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,TI.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zR.type="NONE";const su=zR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(n,e,t){return`firebase:${n}:${e}:${t}`}class Kl{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:o}=this.auth;this.fullUserKey=vo(this.userKey,a.apiKey,o),this.fullPersistenceKey=vo("persistence",a.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lp(this.auth,{idToken:e}).catch(()=>{});return t?Pr._fromGetAccountInfoResponse(this.auth,t,e):null}return Pr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Kl(tr(su),e,r);const a=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let o=a[0]||tr(su);const u=vo(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const y=await m._get(u);if(y){let v;if(typeof y=="string"){const w=await Lp(e,{idToken:y}).catch(()=>{});if(!w)break;v=await Pr._fromGetAccountInfoResponse(e,w,y)}else v=Pr._fromJSON(e,y);m!==o&&(d=v),o=m;break}}catch{}const p=a.filter(m=>m._shouldAllowMigration);return!o._shouldAllowMigration||!p.length?new Kl(o,e,r):(o=p[0],d&&await o._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==o)try{await m._remove(u)}catch{}})),new Kl(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(HR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(FR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(GR(e))return"Blackberry";if($R(e))return"Webos";if(jR(e))return"Safari";if((e.includes("chrome/")||qR(e))&&!e.includes("edge/"))return"Chrome";if(ad(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function FR(n=wt()){return/firefox\//i.test(n)}function jR(n=wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qR(n=wt()){return/crios\//i.test(n)}function HR(n=wt()){return/iemobile/i.test(n)}function ad(n=wt()){return/android/i.test(n)}function GR(n=wt()){return/blackberry/i.test(n)}function $R(n=wt()){return/webos/i.test(n)}function od(n=wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function u2(n=wt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function c2(n=wt()){var e;return od(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function h2(){return gR()&&document.documentMode===10}function KR(n=wt()){return od(n)||ad(n)||$R(n)||GR(n)||/windows phone/i.test(n)||HR(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(n,e=[]){let t;switch(n){case"Browser":t=wI(wt());break;case"Worker":t=`${wI(wt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_a}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((u,d)=>{try{const p=e(o);u(p)}catch(p){d(p)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f2(n,e={}){return Pt(n,"GET","/v2/passwordPolicy",Dt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=6;class m2{constructor(e){var t,r,a,o;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:p2,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,o,u,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(o=p.containsUppercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsNumericCharacter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bI(this),this.idTokenSubscription=new bI(this),this.beforeStateQueue=new d2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=OR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tr(t)),this._initializationPromise=this.queue(async()=>{var r,a,o;if(!this._deleted&&(this.persistenceManager=await Kl.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lp(this,{idToken:e}),r=await Pr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ft(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===d)&&(p!=null&&p.user)&&(a=p.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await kh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(hn(this));const t=e?Ae(e):null;return t&&se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f2(this),t=new m2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await l2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tr(e)||this._popupRedirectResolver;se(t,this,"argument-error"),this.redirectPersistenceManager=await Kl.create(this,[tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(d,this,"internal-error"),d.then(()=>{u||o(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,a);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=QR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&GM(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function bt(n){return Ae(n)}class bI{constructor(e){this.auth=e,this.observer=null,this.addObserver=yR(t=>this.observer=t)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ld={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _2(n){ld=n}function eE(n){return ld.loadJS(n)}function y2(){return ld.recaptchaV2Script}function v2(){return ld.recaptchaEnterpriseScript}function E2(){return ld.gapiScript}function WR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=500,w2=6e4,Xf=1e12;class b2{constructor(e){this.auth=e,this.counter=Xf,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new S2(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Xf;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Xf;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Xf;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class I2{constructor(){this.enterprise=new A2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class A2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class S2{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;se(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=R2(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},w2)},T2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function R2(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const C2="recaptcha-enterprise",gh="NO_RECAPTCHA";class YR{constructor(e){this.type=C2,this.auth=bt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(u,d)=>{UR(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new LR(p);return o.tenantId==null?o._agentRecaptchaConfig=m:o._tenantRecaptchaConfigs[o.tenantId]=m,u(m.siteKey)}}).catch(p=>{d(p)})})}function a(o,u,d){const p=window.grecaptcha;vI(p)?p.enterprise.ready(()=>{p.enterprise.execute(o,{action:e}).then(m=>{u(m)}).catch(()=>{u(gh)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new I2().execute("siteKey",{action:"verify"}):new Promise((o,u)=>{r(this.auth).then(d=>{if(!t&&vI(window.grecaptcha))a(d,o,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=v2();p.length!==0&&(p+=d),eE(p).then(()=>{a(d,o,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function Zc(n,e,t,r=!1,a=!1){const o=new YR(n);let u;if(a)u=gh;else try{u=await o.verify(t)}catch{u=await o.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function ea(n,e,t,r,a){var o,u;if(a==="EMAIL_PASSWORD_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await Zc(n,e,t,t==="getOobCode");return r(n,d)}else return r(n,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await Zc(n,e,t,t==="getOobCode");return r(n,p)}else return Promise.reject(d)});else if(a==="PHONE_PROVIDER")if(!((u=n._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("PHONE_PROVIDER")){const d=await Zc(n,e,t);return r(n,d).catch(async p=>{var m;if(((m=n._getRecaptchaConfig())===null||m===void 0?void 0:m.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(p.code==="auth/missing-recaptcha-token"||p.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const y=await Zc(n,e,t,!1,!0);return r(n,y)}return Promise.reject(p)})}else{const d=await Zc(n,e,t,!1,!0);return r(n,d)}else return Promise.reject(a+" provider is not supported.")}async function x2(n){const e=bt(n),t=await UR(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new LR(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new YR(e).verify()}function D2(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(tr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function P2(n,e,t){const r=bt(n);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),o=XR(e),{host:u,port:d}=N2(e),p=d===null?"":`:${d}`,m={url:`${o}//${u}${p}/`},y=Object.freeze({host:u,port:d,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(ia(m,r.config.emulator)&&ia(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,a||O2()}function XR(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function N2(n){const e=XR(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const o=a[1];return{host:o,port:II(r.substr(o.length+1))}}else{const[o,u]=r.split(":");return{host:o,port:II(u)}}}function II(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function O2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ii("not implemented")}_getIdTokenResponse(e){return ii("not implemented")}_linkToIdToken(e,t){return ii("not implemented")}_getReauthenticationResolver(e){return ii("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZR(n,e){return Pt(n,"POST","/v1/accounts:resetPassword",Dt(n,e))}async function k2(n,e){return Pt(n,"POST","/v1/accounts:update",e)}async function V2(n,e){return Pt(n,"POST","/v1/accounts:signUp",e)}async function M2(n,e){return Pt(n,"POST","/v1/accounts:update",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(n,e){return es(n,"POST","/v1/accounts:signInWithPassword",Dt(n,e))}async function ym(n,e){return Pt(n,"POST","/v1/accounts:sendOobCode",Dt(n,e))}async function U2(n,e){return ym(n,e)}async function B2(n,e){return ym(n,e)}async function z2(n,e){return ym(n,e)}async function F2(n,e){return ym(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",Dt(n,e))}async function q2(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh extends Nu{constructor(e,t,r,a=null){super("password",r),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Vh(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Vh(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ea(e,t,"signInWithPassword",L2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return j2(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ea(e,r,"signUpPassword",V2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return q2(e,{idToken:t,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(n,e){return es(n,"POST","/v1/accounts:signInWithIdp",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2="http://localhost";class hi extends Nu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,o=kv(t,["providerId","signInMethod"]);if(!r||!a)return null;const u=new hi(r,a);return u.idToken=o.idToken||void 0,u.accessToken=o.accessToken||void 0,u.secret=o.secret,u.nonce=o.nonce,u.pendingToken=o.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Ki(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ki(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ki(e,t)}buildRequest(){const e={requestUri:H2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(n,e){return Pt(n,"POST","/v1/accounts:sendVerificationCode",Dt(n,e))}async function G2(n,e){return es(n,"POST","/v1/accounts:signInWithPhoneNumber",Dt(n,e))}async function $2(n,e){const t=await es(n,"POST","/v1/accounts:signInWithPhoneNumber",Dt(n,e));if(t.temporaryProof)throw lh(n,"account-exists-with-different-credential",t);return t}const K2={USER_NOT_FOUND:"user-not-found"};async function Q2(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return es(n,"POST","/v1/accounts:signInWithPhoneNumber",Dt(n,t),K2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends Nu{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Eo({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Eo({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return G2(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return $2(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Q2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o}=e;return!r&&!t&&!a&&!o?null:new Eo({verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Y2(n){const e=Gl(oh(n)).link,t=e?Gl(oh(e)).deep_link_id:null,r=Gl(oh(n)).deep_link_id;return(r?Gl(oh(r)).link:null)||r||t||e||n}class vm{constructor(e){var t,r,a,o,u,d;const p=Gl(oh(e)),m=(t=p.apiKey)!==null&&t!==void 0?t:null,y=(r=p.oobCode)!==null&&r!==void 0?r:null,v=W2((a=p.mode)!==null&&a!==void 0?a:null);se(m&&y&&v,"argument-error"),this.apiKey=m,this.operation=v,this.code=y,this.continueUrl=(o=p.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(u=p.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=Y2(e);try{return new vm(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this.providerId=ya.PROVIDER_ID}static credential(e,t){return Vh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=vm.parseLink(t);return se(r,"argument-error"),Vh._fromEmailAndCode(e,r.code,r.tenantId)}}ya.PROVIDER_ID="password";ya.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ya.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou extends ts{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ql extends Ou{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return se("providerId"in t&&"signInMethod"in t,"argument-error"),hi._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return se(e.idToken||e.accessToken,"argument-error"),hi._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ql.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ql.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:a,pendingToken:o,nonce:u,providerId:d}=e;if(!r&&!a&&!t&&!o||!d)return null;try{return new Ql(d)._credential({idToken:t,accessToken:r,nonce:u,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Ou{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Ou{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ti.credential(t,r)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Ou{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2="http://localhost";class au extends Nu{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ki(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ki(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ki(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a,pendingToken:o}=t;return!r||!a||!o||r!==a?null:new au(r,o)}static _create(e,t){return new au(e,t)}buildRequest(){return{requestUri:X2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2="saml.";class Up extends ts{constructor(e){se(e.startsWith(Z2),"argument-error"),super(e)}static credentialFromResult(e){return Up.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Up.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=au.fromJSON(e);return se(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return au._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Ou{constructor(){super("twitter.com")}static credential(e,t){return hi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ri.credential(t,r)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(n,e){return es(n,"POST","/v1/accounts:signUp",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const o=await Pr._fromIdTokenResponse(e,r,a),u=SI(r);return new br({user:o,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=SI(r);return new br({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function SI(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J2(n){var e;if(ft(n.app))return Promise.reject(hn(n));const t=bt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new br({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await JR(t,{returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp extends kn{constructor(e,t,r,a){var o;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,Bp.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new Bp(e,t,r,a)}}function e1(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Bp._fromErrorAndOperation(n,o,e,r):o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eL(n,e){const t=Ae(n);await Em(!0,t,e);const{providerUserInfo:r}=await t2(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=t1(r||[]);return t.providerData=t.providerData.filter(o=>a.has(o.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function tE(n,e,t=!1){const r=await Yi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return br._forOperation(n,"link",r)}async function Em(n,e,t){await kh(e);const r=t1(e.providerData),a=n===!1?"provider-already-linked":"no-such-provider";se(r.has(t)===n,e.auth,a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(n,e,t=!1){const{auth:r}=n;if(ft(r.app))return Promise.reject(hn(r));const a="reauthenticate";try{const o=await Yi(n,e1(r,a,e,n),t);se(o.idToken,r,"internal-error");const u=_m(o.idToken);se(u,r,"internal-error");const{sub:d}=u;return se(n.uid===d,r,"user-mismatch"),br._forOperation(n,a,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r="signIn",a=await e1(n,r,e),o=await br._fromIdTokenResponse(n,r,a);return t||await n._updateCurrentUser(o.user),o}async function Tm(n,e){return r1(bt(n),e)}async function i1(n,e){const t=Ae(n);return await Em(!1,t,e.providerId),tE(t,e)}async function s1(n,e){return n1(Ae(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tL(n,e){return es(n,"POST","/v1/accounts:signInWithCustomToken",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nL(n,e){if(ft(n.app))return Promise.reject(hn(n));const t=bt(n),r=await tL(t,{token:e,returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?nE._fromServerResponse(e,t):"totpInfo"in t?rE._fromServerResponse(e,t):vn(e,"internal-error")}}class nE extends ud{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new nE(t)}}class rE extends ud{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new rE(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(n,e,t){var r;se(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),se(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),se(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(se(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(se(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(n){const e=bt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rL(n,e,t){const r=bt(n),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&wm(r,a,t),await ea(r,a,"getOobCode",B2,"EMAIL_PASSWORD_PROVIDER")}async function iL(n,e,t){await ZR(Ae(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iE(n),r})}async function sL(n,e){await M2(Ae(n),{oobCode:e})}async function a1(n,e){const t=Ae(n),r=await ZR(t,{oobCode:e}),a=r.requestType;switch(se(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":se(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":se(r.mfaInfo,t,"internal-error");default:se(r.email,t,"internal-error")}let o=null;return r.mfaInfo&&(o=ud._fromServerResponse(bt(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:a}}async function aL(n,e){const{data:t}=await a1(Ae(n),e);return t.email}async function oL(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),u=await ea(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JR,"EMAIL_PASSWORD_PROVIDER").catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&iE(n),p}),d=await br._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function lL(n,e,t){return ft(n.app)?Promise.reject(hn(n)):Tm(Ae(n),ya.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iE(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uL(n,e,t){const r=bt(n),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(u,d){se(d.handleCodeInApp,r,"argument-error"),d&&wm(r,u,d)}o(a,t),await ea(r,a,"getOobCode",z2,"EMAIL_PASSWORD_PROVIDER")}function cL(n,e){const t=vm.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function hL(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=Ae(n),a=ya.credentialWithLink(e,t||Oh());return se(a._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Tm(r,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dL(n,e){return Pt(n,"POST","/v1/accounts:createAuthUri",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fL(n,e){const t=Zv()?Oh():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:a}=await dL(Ae(n),r);return a||[]}async function pL(n,e){const t=Ae(n),a={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&wm(t.auth,a,e);const{email:o}=await U2(t.auth,a);o!==n.email&&await n.reload()}async function mL(n,e,t){const r=Ae(n),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&wm(r.auth,o,t);const{email:u}=await F2(r.auth,o);u!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gL(n,e){return Pt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _L(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ae(n),o={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await Yi(r,gL(r.auth,o));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const d=r.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=r.displayName,d.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function yL(n,e){const t=Ae(n);return ft(t.auth.app)?Promise.reject(hn(t.auth)):o1(t,e,null)}function vL(n,e){return o1(Ae(n),null,e)}async function o1(n,e,t){const{auth:r}=n,o={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(o.email=e),t&&(o.password=t);const u=await Yi(n,k2(r,o));await n._updateTokensIfNecessary(u,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EL(n){var e,t;if(!n)return null;const{providerId:r}=n,a=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},o=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const u=(t=(e=_m(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(u){const d=u!=="anonymous"&&u!=="custom"?u:null;return new Wl(o,d)}}if(!r)return null;switch(r){case"facebook.com":return new TL(o,a);case"github.com":return new wL(o,a);case"google.com":return new bL(o,a);case"twitter.com":return new IL(o,a,n.screenName||null);case"custom":case"anonymous":return new Wl(o,null);default:return new Wl(o,r,a)}}class Wl{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class l1 extends Wl{constructor(e,t,r,a){super(e,t,r),this.username=a}}class TL extends Wl{constructor(e,t){super(e,"facebook.com",t)}}class wL extends l1{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class bL extends Wl{constructor(e,t){super(e,"google.com",t)}}class IL extends l1{constructor(e,t,r){super(e,"twitter.com",t,r)}}function AL(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:EL(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new fo("enroll",e,t)}static _fromMfaPendingCredential(e){return new fo("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return fo._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return fo._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=bt(e),a=t.customData._serverResponse,o=(a.mfaInfo||[]).map(d=>ud._fromServerResponse(r,d));se(a.mfaPendingCredential,r,"internal-error");const u=fo._fromMfaPendingCredential(a.mfaPendingCredential);return new sE(u,o,async d=>{const p=await d._process(r,u);delete a.mfaInfo,delete a.mfaPendingCredential;const m=Object.assign(Object.assign({},a),{idToken:p.idToken,refreshToken:p.refreshToken});switch(t.operationType){case"signIn":const y=await br._fromIdTokenResponse(r,t.operationType,m);return await r._updateCurrentUser(y.user),y;case"reauthenticate":return se(t.user,r,"internal-error"),br._forOperation(t.user,t.operationType,m);default:vn(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function SL(n,e){var t;const r=Ae(n),a=e;return se(e.customData.operationType,r,"argument-error"),se((t=a.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),sE._fromError(r,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:start",Dt(n,e))}function RL(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:finalize",Dt(n,e))}function CL(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Dt(n,e))}class aE{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>ud._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new aE(e)}async getSession(){return fo._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,a=await this.getSession(),o=await Yi(this.user,r._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const a=await Yi(this.user,CL(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const yy=new WeakMap;function xL(n){const e=Ae(n);return yy.has(e)||yy.set(e,aE._fromUser(e)),yy.get(e)}const zp="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zp,"1"),this.storage.removeItem(zp),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DL=1e3,PL=10;class c1 extends u1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=KR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},o=this.storage.getItem(r);h2()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,PL):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},DL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}c1.type="LOCAL";const oE=c1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1 extends u1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}h1.type="SESSION";const wo=h1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NL(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new bm(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:o}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const d=Array.from(u).map(async m=>m(t.origin,o)),p=await NL(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bm.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let o,u;return new Promise((d,p)=>{const m=cd("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},r);u={messageChannel:a,onMessage(v){const w=v;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),d(w.data.response);break;default:clearTimeout(y),clearTimeout(o),p(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return window}function kL(n){qt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function VL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ML(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function LL(){return lE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1="firebaseLocalStorageDb",UL=1,Fp="firebaseLocalStorage",f1="fbase_key";class hd{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Im(n,e){return n.transaction([Fp],e?"readwrite":"readonly").objectStore(Fp)}function BL(){const n=indexedDB.deleteDatabase(d1);return new hd(n).toPromise()}function Gy(){const n=indexedDB.open(d1,UL);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Fp,{keyPath:f1})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Fp)?e(r):(r.close(),await BL(),e(await Gy()))})})}async function CI(n,e,t){const r=Im(n,!0).put({[f1]:e,value:t});return new hd(r).toPromise()}async function zL(n,e){const t=Im(n,!1).get(e),r=await new hd(t).toPromise();return r===void 0?null:r.value}function xI(n,e){const t=Im(n,!0).delete(e);return new hd(t).toPromise()}const FL=800,jL=3;class p1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gy(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>jL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bm._getInstance(LL()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await VL(),!this.activeServiceWorker)return;this.sender=new OL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ML()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gy();return await CI(e,zp,"1"),await xI(e,zp),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>CI(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>zL(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const o=Im(a,!1).getAll();return new hd(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:o}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(o)&&(this.notifyListeners(a,o),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}p1.type="LOCAL";const Mh=p1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(n,e){return Pt(n,"POST","/v2/accounts/mfaSignIn:start",Dt(n,e))}function qL(n,e){return Pt(n,"POST","/v2/accounts/mfaSignIn:finalize",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=WR("rcb"),HL=new sd(3e4,6e4);class GL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=qt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return se($L(t),e,"argument-error"),this.shouldResolveImmediately(t)&&yI(qt().grecaptcha)?Promise.resolve(qt().grecaptcha):new Promise((r,a)=>{const o=qt().setTimeout(()=>{a(Xt(e,"network-request-failed"))},HL.get());qt()[vy]=()=>{qt().clearTimeout(o),delete qt()[vy];const d=qt().grecaptcha;if(!d||!yI(d)){a(Xt(e,"internal-error"));return}const p=d.render;d.render=(m,y)=>{const v=p(m,y);return this.counter++,v},this.hostLanguage=t,r(d)};const u=`${y2()}?${xu({onload:vy,render:"explicit",hl:t})}`;eE(u).catch(()=>{clearTimeout(o),a(Xt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=qt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function $L(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class KL{async load(e){return new b2(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="recaptcha",QL={theme:"light",type:"image"};let WL=class{constructor(e,t,r=Object.assign({},QL)){this.parameters=r,this.type=_h,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=bt(e),this.isInvisible=this.parameters.size==="invisible",se(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;se(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new KL:new GL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(a=>{const o=u=>{u&&(this.tokenChangeListeners.delete(o),a(u))};this.tokenChangeListeners.add(o),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){se(!this.parameters.sitekey,this.auth,"argument-error"),se(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),se(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=qt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){se(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){se(Zv()&&!lE(),this.auth,"internal-error"),await YL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await JM(this.auth);se(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return se(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function YL(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Eo._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function XL(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=await Am(r,e,Ae(t));return new uE(a,o=>Tm(r,o))}async function ZL(n,e,t){const r=Ae(n);await Em(!1,r,"phone");const a=await Am(r.auth,e,Ae(t));return new uE(a,o=>i1(r,o))}async function JL(n,e,t){const r=Ae(n);if(ft(r.auth.app))return Promise.reject(hn(r.auth));const a=await Am(r.auth,e,Ae(t));return new uE(a,o=>s1(r,o))}async function Am(n,e,t){var r;if(!n._getRecaptchaConfig())try{await x2(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const o=a.session;if("phoneNumber"in a){se(o.type==="enroll",n,"internal-error");const u={idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await ea(n,u,"mfaSmsEnrollment",async(y,v)=>{if(v.phoneEnrollmentInfo.captchaResponse===gh){se((t==null?void 0:t.type)===_h,y,"argument-error");const w=await Ey(y,v,t);return RI(y,w)}return RI(y,v)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{se(o.type==="signin",n,"internal-error");const u=((r=a.multiFactorHint)===null||r===void 0?void 0:r.uid)||a.multiFactorUid;se(u,n,"missing-multi-factor-info");const d={mfaPendingCredential:o.credential,mfaEnrollmentId:u,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await ea(n,d,"mfaSmsSignIn",async(v,w)=>{if(w.phoneSignInInfo.captchaResponse===gh){se((t==null?void 0:t.type)===_h,v,"argument-error");const S=await Ey(v,w,t);return DI(v,S)}return DI(v,w)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneResponseInfo.sessionInfo}}else{const o={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await ea(n,o,"sendVerificationCode",async(m,y)=>{if(y.captchaResponse===gh){se((t==null?void 0:t.type)===_h,m,"argument-error");const v=await Ey(m,y,t);return AI(m,v)}return AI(m,y)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).sessionInfo}}finally{t==null||t._reset()}}async function eU(n,e){const t=Ae(n);if(ft(t.auth.app))return Promise.reject(hn(t.auth));await tE(t,e)}async function Ey(n,e,t){se(t.type===_h,n,"argument-error");const r=await t.verify();se(typeof r=="string",n,"argument-error");const a=Object.assign({},e);if("phoneEnrollmentInfo"in a){const o=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.captchaResponse,d=a.phoneEnrollmentInfo.clientType,p=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:o,recaptchaToken:r,captchaResponse:u,clientType:d,recaptchaVersion:p}}),a}else if("phoneSignInInfo"in a){const o=a.phoneSignInInfo.captchaResponse,u=a.phoneSignInInfo.clientType,d=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:o,clientType:u,recaptchaVersion:d}}),a}else return Object.assign(a,{recaptchaToken:r}),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo=class pp{constructor(e){this.providerId=pp.PROVIDER_ID,this.auth=bt(e)}verifyPhoneNumber(e,t){return Am(this.auth,e,Ae(t))}static credential(e,t){return Eo._fromVerification(e,t)}static credentialFromResult(e){const t=e;return pp.credentialFromTaggedObject(t)}static credentialFromError(e){return pp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Eo._fromTokenResponse(t,r):null}};bo.PROVIDER_ID="phone";bo.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n,e){return e?tr(e):(se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE extends Nu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ki(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ki(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tU(n){return r1(n.auth,new cE(n),n.bypassAuthState)}function nU(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),n1(t,new cE(n),n.bypassAuthState)}async function rU(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),tE(t,new cE(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,t,r,a,o=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:o,error:u,type:d}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tU;case"linkViaPopup":case"linkViaRedirect":return rU;case"reauthViaPopup":case"reauthViaRedirect":return nU;default:vn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iU=new sd(2e3,1e4);async function sU(n,e,t){if(ft(n.app))return Promise.reject(Xt(n,"operation-not-supported-in-this-environment"));const r=bt(n);Pu(n,e,ts);const a=Mo(r,t);return new Hi(r,"signInViaPopup",e,a).executeNotNull()}async function aU(n,e,t){const r=Ae(n);if(ft(r.auth.app))return Promise.reject(Xt(r.auth,"operation-not-supported-in-this-environment"));Pu(r.auth,e,ts);const a=Mo(r.auth,t);return new Hi(r.auth,"reauthViaPopup",e,a,r).executeNotNull()}async function oU(n,e,t){const r=Ae(n);Pu(r.auth,e,ts);const a=Mo(r.auth,t);return new Hi(r.auth,"linkViaPopup",e,a,r).executeNotNull()}class Hi extends m1{constructor(e,t,r,a,o){super(e,t,a,o),this.provider=r,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=cd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iU.get())};e()}}Hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lU="pendingRedirect",yh=new Map;class uU extends m1{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=yh.get(this.auth._key());if(!e){try{const r=await cU(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}yh.set(this.auth._key(),e)}return this.bypassAuthState||yh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cU(n,e){const t=_1(e),r=g1(n);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}async function hE(n,e){return g1(n)._set(_1(e),"true")}function hU(){yh.clear()}function dE(n,e){yh.set(n._key(),e)}function g1(n){return tr(n._redirectPersistence)}function _1(n){return vo(lU,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dU(n,e,t){return fU(n,e,t)}async function fU(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n);Pu(n,e,ts),await r._initializationPromise;const a=Mo(r,t);return await hE(a,r),a._openRedirect(r,e,"signInViaRedirect")}function pU(n,e,t){return mU(n,e,t)}async function mU(n,e,t){const r=Ae(n);if(Pu(r.auth,e,ts),ft(r.auth.app))return Promise.reject(hn(r.auth));await r.auth._initializationPromise;const a=Mo(r.auth,t);await hE(a,r.auth);const o=await y1(r);return a._openRedirect(r.auth,e,"reauthViaRedirect",o)}function gU(n,e,t){return _U(n,e,t)}async function _U(n,e,t){const r=Ae(n);Pu(r.auth,e,ts),await r.auth._initializationPromise;const a=Mo(r.auth,t);await Em(!1,r,e.providerId),await hE(a,r.auth);const o=await y1(r);return a._openRedirect(r.auth,e,"linkViaRedirect",o)}async function yU(n,e){return await bt(n)._initializationPromise,Sm(n,e,!1)}async function Sm(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=Mo(r,e),u=await new uU(r,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}async function y1(n){const e=cd(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vU=10*60*1e3;class v1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EU(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!E1(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vU&&this.cachedEventUids.clear(),this.cachedEventUids.has(PI(e))}saveEventToCache(e){this.cachedEventUids.add(PI(e)),this.lastProcessedEventTime=Date.now()}}function PI(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function E1({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EU(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return E1(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1(n,e={}){return Pt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TU=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wU=/^https?/;async function bU(n){if(n.config.emulator)return;const{authorizedDomains:e}=await T1(n);for(const t of e)try{if(IU(t))return}catch{}vn(n,"unauthorized-domain")}function IU(n){const e=Oh(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!wU.test(t))return!1;if(TU.test(n))return r===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AU=new sd(3e4,6e4);function NI(){const n=qt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function SU(n){return new Promise((e,t)=>{var r,a,o;function u(){NI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{NI(),t(Xt(n,"network-request-failed"))},timeout:AU.get()})}if(!((a=(r=qt().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((o=qt().gapi)===null||o===void 0)&&o.load)u();else{const d=WR("iframefcb");return qt()[d]=()=>{gapi.load?u():t(Xt(n,"network-request-failed"))},eE(`${E2()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw mp=null,e})}let mp=null;function RU(n){return mp=mp||SU(n),mp}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CU=new sd(5e3,15e3),xU="__/auth/iframe",DU="emulator/auth/iframe",PU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OU(n){const e=n.config;se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Jv(e,DU):`https://${n.config.authDomain}/${xU}`,r={apiKey:e.apiKey,appName:n.name,v:_a},a=NU.get(n.config.apiHost);a&&(r.eid=a);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${xu(r).slice(1)}`}async function kU(n){const e=await RU(n),t=qt().gapi;return se(t,n,"internal-error"),e.open({where:document.body,url:OU(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PU,dontclear:!0},r=>new Promise(async(a,o)=>{await r.restyle({setHideOnLeave:!1});const u=Xt(n,"network-request-failed"),d=qt().setTimeout(()=>{o(u)},CU.get());function p(){qt().clearTimeout(d),a(r)}r.ping(p).then(p,()=>{o(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MU=500,LU=600,UU="_blank",BU="http://localhost";class OI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zU(n,e,t,r=MU,a=LU){const o=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const p=Object.assign(Object.assign({},VU),{width:r.toString(),height:a.toString(),top:o,left:u}),m=wt().toLowerCase();t&&(d=qR(m)?UU:t),FR(m)&&(e=e||BU,p.scrollbars="yes");const y=Object.entries(p).reduce((w,[S,D])=>`${w}${S}=${D},`,"");if(c2(m)&&d!=="_self")return FU(e||"",d),new OI(null);const v=window.open(e||"",d,y);se(v,n,"popup-blocked");try{v.focus()}catch{}return new OI(v)}function FU(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jU="__/auth/handler",qU="emulator/auth/handler",HU=encodeURIComponent("fac");async function $y(n,e,t,r,a,o){se(n.config.authDomain,n,"auth-domain-config-required"),se(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:_a,eventId:a};if(e instanceof ts){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",_V(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,v]of Object.entries(o||{}))u[y]=v}if(e instanceof Ou){const y=e.getScopes().filter(v=>v!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),m=p?`#${HU}=${encodeURIComponent(p)}`:"";return`${GU(n)}?${xu(d).slice(1)}${m}`}function GU({config:n}){return n.emulator?Jv(n,qU):`https://${n.authDomain}/${jU}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="webStorageSupport";class $U{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wo,this._completeRedirectFn=Sm,this._overrideRedirectResult=dE}async _openPopup(e,t,r,a){var o;kr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const u=await $y(e,t,r,Oh(),a);return zU(e,u,cd())}async _openRedirect(e,t,r,a){await this._originValidation(e);const o=await $y(e,t,r,Oh(),a);return kL(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:o}=this.eventManagers[t];return a?Promise.resolve(a):(kr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await kU(e),r=new v1(e);return t.register("authEvent",a=>(se(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ty,{type:Ty},a=>{var o;const u=(o=a==null?void 0:a[0])===null||o===void 0?void 0:o[Ty];u!==void 0&&t(!!u),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bU(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return KR()||jR()||od()}}const KU=$U;class QU{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ii("unexpected MultiFactorSessionType")}}}class fE extends QU{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new fE(e)}_finalizeEnroll(e,t,r){return RL(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return qL(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class w1{constructor(){}static assertion(e){return fE._fromCredential(e)}}w1.FACTOR_ID="phone";var kI="@firebase/auth",VI="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YU(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XU(n){oa(new ci("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;se(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:QR(n)},m=new g2(r,a,o,p);return D2(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),oa(new ci("auth-internal",e=>{const t=bt(e.getProvider("auth").getImmediate());return(r=>new WU(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Or(kI,VI,YU(n)),Or(kI,VI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZU=5*60;oV("authIdTokenMaxAge");function JU(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}_2({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=a=>{const o=Xt("internal-error");o.customData=a,t(o)},r.type="text/javascript",r.charset="UTF-8",JU().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XU("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e4=2e3;async function t4(n,e,t){var r;const{BuildInfo:a}=Io();kr(e.sessionId,"AuthEvent did not contain a session ID");const o=await a4(e.sessionId),u={};return od()?u.ibi=a.packageName:ad()?u.apn=a.packageName:vn(n,"operation-not-supported-in-this-environment"),a.displayName&&(u.appDisplayName=a.displayName),u.sessionId=o,$y(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,u)}async function n4(n){const{BuildInfo:e}=Io(),t={};od()?t.iosBundleId=e.packageName:ad()?t.androidPackageName=e.packageName:vn(n,"operation-not-supported-in-this-environment"),await T1(n,t)}function r4(n){const{cordova:e}=Io();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let a=null;r?e.plugins.browsertab.openUrl(n):a=e.InAppBrowser.open(n,u2()?"_blank":"_system","location=yes"),t(a)})})}async function i4(n,e,t){const{cordova:r}=Io();let a=()=>{};try{await new Promise((o,u)=>{let d=null;function p(){var v;o();const w=(v=r.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof w=="function"&&w(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function m(){d||(d=window.setTimeout(()=>{u(Xt(n,"redirect-cancelled-by-user"))},e4))}function y(){(document==null?void 0:document.visibilityState)==="visible"&&m()}e.addPassiveListener(p),document.addEventListener("resume",m,!1),ad()&&document.addEventListener("visibilitychange",y,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",m,!1),document.removeEventListener("visibilitychange",y,!1),d&&window.clearTimeout(d)}})}finally{a()}}function s4(n){var e,t,r,a,o,u,d,p,m,y;const v=Io();se(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),se(typeof((t=v==null?void 0:v.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),se(typeof((o=(a=(r=v==null?void 0:v.cordova)===null||r===void 0?void 0:r.plugins)===null||a===void 0?void 0:a.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),se(typeof((p=(d=(u=v==null?void 0:v.cordova)===null||u===void 0?void 0:u.plugins)===null||d===void 0?void 0:d.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),se(typeof((y=(m=v==null?void 0:v.cordova)===null||m===void 0?void 0:m.InAppBrowser)===null||y===void 0?void 0:y.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function a4(n){const e=o4(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function o4(n){if(kr(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l4=20;class u4 extends v1{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function c4(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:f4(),postBody:null,tenantId:n.tenantId,error:Xt(n,"no-auth-event")}}function h4(n,e){return Ky()._set(Qy(n),e)}async function MI(n){const e=await Ky()._get(Qy(n));return e&&await Ky()._remove(Qy(n)),e}function d4(n,e){var t,r;const a=m4(e);if(a.includes("/__/auth/callback")){const o=gp(a),u=o.firebaseError?p4(decodeURIComponent(o.firebaseError)):null,d=(r=(t=u==null?void 0:u.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],p=d?Xt(d):null;return p?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:a,postBody:null}}return null}function f4(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<l4;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Ky(){return tr(oE)}function Qy(n){return vo("authEvent",n.config.apiKey,n.name)}function p4(n){try{return JSON.parse(n)}catch{return null}}function m4(n){const e=gp(n),t=e.link?decodeURIComponent(e.link):void 0,r=gp(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return gp(a).link||a||r||t||n}function gp(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Gl(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4=500;class _4{constructor(){this._redirectPersistence=wo,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Sm,this._overrideRedirectResult=dE}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new u4(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){vn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,a){s4(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),hU(),await this._originValidation(e);const u=c4(e,r,a);await h4(e,u);const d=await t4(e,u,t),p=await r4(d);return i4(e,o,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=n4(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:a,BuildInfo:o}=Io(),u=setTimeout(async()=>{await MI(e),t.onEvent(LI())},g4),d=async y=>{clearTimeout(u);const v=await MI(e);let w=null;v&&(y!=null&&y.url)&&(w=d4(v,y.url)),t.onEvent(w||LI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,d);const p=a,m=`${o.packageName.toLowerCase()}://`;Io().handleOpenURL=async y=>{if(y.toLowerCase().startsWith(m)&&d({url:y}),typeof p=="function")try{p(y)}catch(v){console.error(v)}}}}const y4=_4;function LI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Xt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v4(n,e){bt(n)._logFramework(e)}var E4="@firebase/auth-compat",T4="0.5.20";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w4=1e3;function vh(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function b4(){return vh()==="http:"||vh()==="https:"}function b1(n=wt()){return!!((vh()==="file:"||vh()==="ionic:"||vh()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function I4(){return Gv()||Hv()}function A4(){return gR()&&(document==null?void 0:document.documentMode)===11}function S4(n=wt()){return/Edge\/\d+/.test(n)}function R4(n=wt()){return A4()||S4(n)}function I1(){try{const n=self.localStorage,e=cd();if(n)return n.setItem(e,"1"),n.removeItem(e),R4()?Dh():!0}catch{return pE()&&Dh()}return!1}function pE(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function wy(){return(b4()||mR()||b1())&&!I4()&&I1()&&!pE()}function A1(){return b1()&&typeof document<"u"}async function C4(){return A1()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},w4);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function x4(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={LOCAL:"local",NONE:"none",SESSION:"session"},Jc=se,S1="persistence";function D4(n,e){if(Jc(Object.values(er).includes(e),n,"invalid-persistence-type"),Gv()){Jc(e!==er.SESSION,n,"unsupported-persistence-type");return}if(Hv()){Jc(e===er.NONE,n,"unsupported-persistence-type");return}if(pE()){Jc(e===er.NONE||e===er.LOCAL&&Dh(),n,"unsupported-persistence-type");return}Jc(e===er.NONE||I1(),n,"unsupported-persistence-type")}async function Wy(n){await n._initializationPromise;const e=R1(),t=vo(S1,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistenceType())}function P4(n,e){const t=R1();if(!t)return[];const r=vo(S1,n,e);switch(t.getItem(r)){case er.NONE:return[su];case er.LOCAL:return[Mh,wo];case er.SESSION:return[wo];default:return[]}}function R1(){var n;try{return((n=x4())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4=se;class Ys{constructor(){this.browserResolver=tr(KU),this.cordovaResolver=tr(y4),this.underlyingResolver=null,this._redirectPersistence=wo,this._completeRedirectFn=Sm,this._overrideRedirectResult=dE}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,a)}async _openRedirect(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return A1()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return N4(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await C4();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(n){return n.unwrap()}function O4(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k4(n){return x1(n)}function V4(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new M4(n,SL(n,e))}else if(r){const a=x1(e),o=e;a&&(o.credential=a,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function x1(n){const{_tokenResponse:e}=n instanceof kn?n.customData:n;if(!e)return null;if(!(n instanceof kn)&&"temporaryProof"in e&&"phoneNumber"in e)return bo.credentialFromResult(n);const t=e.providerId;if(!t||t===Xc.PASSWORD)return null;let r;switch(t){case Xc.GOOGLE:r=ti;break;case Xc.FACEBOOK:r=ei;break;case Xc.GITHUB:r=ni;break;case Xc.TWITTER:r=ri;break;default:const{oauthIdToken:a,oauthAccessToken:o,oauthTokenSecret:u,pendingToken:d,nonce:p}=e;return!o&&!u&&!a&&!d?null:d?t.startsWith("saml.")?au._create(t,d):hi._fromParams({providerId:t,signInMethod:t,pendingToken:d,idToken:a,accessToken:o}):new Ql(t).credential({idToken:a,accessToken:o,rawNonce:p})}return n instanceof kn?r.credentialFromError(n):r.credentialFromResult(n)}function zn(n,e){return e.catch(t=>{throw t instanceof kn&&V4(n,t),t}).then(t=>{const r=t.operationType,a=t.user;return{operationType:r,credential:k4(t),additionalUserInfo:AL(t),user:Rm.getOrCreate(a)}})}async function Yy(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>zn(n,t.confirm(r))}}class M4{constructor(e,t){this.resolver=t,this.auth=O4(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return zn(C1(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rm=class uh{constructor(e){this._delegate=e,this.multiFactor=xL(e)}static getOrCreate(e){return uh.USER_MAP.has(e)||uh.USER_MAP.set(e,new uh(e)),uh.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return zn(this.auth,i1(this._delegate,e))}async linkWithPhoneNumber(e,t){return Yy(this.auth,ZL(this._delegate,e,t))}async linkWithPopup(e){return zn(this.auth,oU(this._delegate,e,Ys))}async linkWithRedirect(e){return await Wy(bt(this.auth)),gU(this._delegate,e,Ys)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return zn(this.auth,s1(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Yy(this.auth,JL(this._delegate,e,t))}reauthenticateWithPopup(e){return zn(this.auth,aU(this._delegate,e,Ys))}async reauthenticateWithRedirect(e){return await Wy(bt(this.auth)),pU(this._delegate,e,Ys)}sendEmailVerification(e){return pL(this._delegate,e)}async unlink(e){return await eL(this._delegate,e),this}updateEmail(e){return yL(this._delegate,e)}updatePassword(e){return vL(this._delegate,e)}updatePhoneNumber(e){return eU(this._delegate,e)}updateProfile(e){return _L(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return mL(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Rm.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=se;class Xy{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;eh(r,"invalid-api-key",{appName:e.name}),eh(r,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?Ys:void 0;this._delegate=t.initialize({options:{persistence:L4(r,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(qM),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Rm.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){P2(this._delegate,e,t)}applyActionCode(e){return sL(this._delegate,e)}checkActionCode(e){return a1(this._delegate,e)}confirmPasswordReset(e,t){return iL(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return zn(this._delegate,oL(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return fL(this._delegate,e)}isSignInWithEmailLink(e){return cL(this._delegate,e)}async getRedirectResult(){eh(wy(),this._delegate,"operation-not-supported-in-this-environment");const e=await yU(this._delegate,Ys);return e?zn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){v4(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:a,error:o,complete:u}=UI(e,t,r);return this._delegate.onAuthStateChanged(a,o,u)}onIdTokenChanged(e,t,r){const{next:a,error:o,complete:u}=UI(e,t,r);return this._delegate.onIdTokenChanged(a,o,u)}sendSignInLinkToEmail(e,t){return uL(this._delegate,e,t)}sendPasswordResetEmail(e,t){return rL(this._delegate,e,t||void 0)}async setPersistence(e){D4(this._delegate,e);let t;switch(e){case er.SESSION:t=wo;break;case er.LOCAL:t=await tr(Mh)._isAvailable()?Mh:oE;break;case er.NONE:t=su;break;default:return vn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return zn(this._delegate,J2(this._delegate))}signInWithCredential(e){return zn(this._delegate,Tm(this._delegate,e))}signInWithCustomToken(e){return zn(this._delegate,nL(this._delegate,e))}signInWithEmailAndPassword(e,t){return zn(this._delegate,lL(this._delegate,e,t))}signInWithEmailLink(e,t){return zn(this._delegate,hL(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Yy(this._delegate,XL(this._delegate,e,t))}async signInWithPopup(e){return eh(wy(),this._delegate,"operation-not-supported-in-this-environment"),zn(this._delegate,sU(this._delegate,e,Ys))}async signInWithRedirect(e){return eh(wy(),this._delegate,"operation-not-supported-in-this-environment"),await Wy(this._delegate),dU(this._delegate,e,Ys)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return aL(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Xy.Persistence=er;function UI(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const a=r;return{next:u=>a(u&&Rm.getOrCreate(u)),error:e,complete:t}}function L4(n,e){const t=P4(n,e);if(typeof self<"u"&&!t.includes(Mh)&&t.push(Mh),typeof window<"u")for(const r of[oE,wo])t.includes(r)||t.push(r);return t.includes(su)||t.push(su),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{static credential(e,t){return bo.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new bo(C1(Du.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}mE.PHONE_SIGN_IN_METHOD=bo.PHONE_SIGN_IN_METHOD;mE.PROVIDER_ID=bo.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U4=se;class B4{constructor(e,t,r=Du.app()){var a;U4((a=r.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new WL(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z4="auth-compat";function F4(n){n.INTERNAL.registerComponent(new ci(z4,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Xy(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Nl.EMAIL_SIGNIN,PASSWORD_RESET:Nl.PASSWORD_RESET,RECOVER_EMAIL:Nl.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Nl.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Nl.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Nl.VERIFY_EMAIL}},EmailAuthProvider:ya,FacebookAuthProvider:ei,GithubAuthProvider:ni,GoogleAuthProvider:ti,OAuthProvider:Ql,SAMLAuthProvider:Up,PhoneAuthProvider:mE,PhoneMultiFactorGenerator:w1,RecaptchaVerifier:B4,TwitterAuthProvider:ri,Auth:Xy,AuthCredential:Nu,Error:kn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(E4,T4)}F4(Du);var BI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ta,D1;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,R){function A(){}A.prototype=R.prototype,x.D=R.prototype,x.prototype=new A,x.prototype.constructor=x,x.C=function(P,V,z){for(var N=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)N[Nt-2]=arguments[Nt];return R.prototype[V].apply(P,N)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(x,R,A){A||(A=0);var P=Array(16);if(typeof R=="string")for(var V=0;16>V;++V)P[V]=R.charCodeAt(A++)|R.charCodeAt(A++)<<8|R.charCodeAt(A++)<<16|R.charCodeAt(A++)<<24;else for(V=0;16>V;++V)P[V]=R[A++]|R[A++]<<8|R[A++]<<16|R[A++]<<24;R=x.g[0],A=x.g[1],V=x.g[2];var z=x.g[3],N=R+(z^A&(V^z))+P[0]+3614090360&4294967295;R=A+(N<<7&4294967295|N>>>25),N=z+(V^R&(A^V))+P[1]+3905402710&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(A^z&(R^A))+P[2]+606105819&4294967295,V=z+(N<<17&4294967295|N>>>15),N=A+(R^V&(z^R))+P[3]+3250441966&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(z^A&(V^z))+P[4]+4118548399&4294967295,R=A+(N<<7&4294967295|N>>>25),N=z+(V^R&(A^V))+P[5]+1200080426&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(A^z&(R^A))+P[6]+2821735955&4294967295,V=z+(N<<17&4294967295|N>>>15),N=A+(R^V&(z^R))+P[7]+4249261313&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(z^A&(V^z))+P[8]+1770035416&4294967295,R=A+(N<<7&4294967295|N>>>25),N=z+(V^R&(A^V))+P[9]+2336552879&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(A^z&(R^A))+P[10]+4294925233&4294967295,V=z+(N<<17&4294967295|N>>>15),N=A+(R^V&(z^R))+P[11]+2304563134&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(z^A&(V^z))+P[12]+1804603682&4294967295,R=A+(N<<7&4294967295|N>>>25),N=z+(V^R&(A^V))+P[13]+4254626195&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(A^z&(R^A))+P[14]+2792965006&4294967295,V=z+(N<<17&4294967295|N>>>15),N=A+(R^V&(z^R))+P[15]+1236535329&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(V^z&(A^V))+P[1]+4129170786&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^V&(R^A))+P[6]+3225465664&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(z^R))+P[11]+643717713&4294967295,V=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(V^z))+P[0]+3921069994&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^z&(A^V))+P[5]+3593408605&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^V&(R^A))+P[10]+38016083&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(z^R))+P[15]+3634488961&4294967295,V=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(V^z))+P[4]+3889429448&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^z&(A^V))+P[9]+568446438&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^V&(R^A))+P[14]+3275163606&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(z^R))+P[3]+4107603335&4294967295,V=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(V^z))+P[8]+1163531501&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^z&(A^V))+P[13]+2850285829&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^V&(R^A))+P[2]+4243563512&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(z^R))+P[7]+1735328473&4294967295,V=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(V^z))+P[12]+2368359562&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(A^V^z)+P[5]+4294588738&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^V)+P[8]+2272392833&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^A)+P[11]+1839030562&4294967295,V=z+(N<<16&4294967295|N>>>16),N=A+(V^z^R)+P[14]+4259657740&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^z)+P[1]+2763975236&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^V)+P[4]+1272893353&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^A)+P[7]+4139469664&4294967295,V=z+(N<<16&4294967295|N>>>16),N=A+(V^z^R)+P[10]+3200236656&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^z)+P[13]+681279174&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^V)+P[0]+3936430074&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^A)+P[3]+3572445317&4294967295,V=z+(N<<16&4294967295|N>>>16),N=A+(V^z^R)+P[6]+76029189&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^z)+P[9]+3654602809&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^V)+P[12]+3873151461&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^A)+P[15]+530742520&4294967295,V=z+(N<<16&4294967295|N>>>16),N=A+(V^z^R)+P[2]+3299628645&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(V^(A|~z))+P[0]+4096336452&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~V))+P[7]+1126891415&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~A))+P[14]+2878612391&4294967295,V=z+(N<<15&4294967295|N>>>17),N=A+(z^(V|~R))+P[5]+4237533241&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~z))+P[12]+1700485571&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~V))+P[3]+2399980690&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~A))+P[10]+4293915773&4294967295,V=z+(N<<15&4294967295|N>>>17),N=A+(z^(V|~R))+P[1]+2240044497&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~z))+P[8]+1873313359&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~V))+P[15]+4264355552&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~A))+P[6]+2734768916&4294967295,V=z+(N<<15&4294967295|N>>>17),N=A+(z^(V|~R))+P[13]+1309151649&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~z))+P[4]+4149444226&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~V))+P[11]+3174756917&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~A))+P[2]+718787259&4294967295,V=z+(N<<15&4294967295|N>>>17),N=A+(z^(V|~R))+P[9]+3951481745&4294967295,x.g[0]=x.g[0]+R&4294967295,x.g[1]=x.g[1]+(V+(N<<21&4294967295|N>>>11))&4294967295,x.g[2]=x.g[2]+V&4294967295,x.g[3]=x.g[3]+z&4294967295}r.prototype.u=function(x,R){R===void 0&&(R=x.length);for(var A=R-this.blockSize,P=this.B,V=this.h,z=0;z<R;){if(V==0)for(;z<=A;)a(this,x,z),z+=this.blockSize;if(typeof x=="string"){for(;z<R;)if(P[V++]=x.charCodeAt(z++),V==this.blockSize){a(this,P),V=0;break}}else for(;z<R;)if(P[V++]=x[z++],V==this.blockSize){a(this,P),V=0;break}}this.h=V,this.o+=R},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var R=1;R<x.length-8;++R)x[R]=0;var A=8*this.o;for(R=x.length-8;R<x.length;++R)x[R]=A&255,A/=256;for(this.u(x),x=Array(16),R=A=0;4>R;++R)for(var P=0;32>P;P+=8)x[A++]=this.g[R]>>>P&255;return x};function o(x,R){var A=d;return Object.prototype.hasOwnProperty.call(A,x)?A[x]:A[x]=R(x)}function u(x,R){this.h=R;for(var A=[],P=!0,V=x.length-1;0<=V;V--){var z=x[V]|0;P&&z==R||(A[V]=z,P=!1)}this.g=A}var d={};function p(x){return-128<=x&&128>x?o(x,function(R){return new u([R|0],0>R?-1:0)}):new u([x|0],0>x?-1:0)}function m(x){if(isNaN(x)||!isFinite(x))return v;if(0>x)return L(m(-x));for(var R=[],A=1,P=0;x>=A;P++)R[P]=x/A|0,A*=4294967296;return new u(R,0)}function y(x,R){if(x.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(x.charAt(0)=="-")return L(y(x.substring(1),R));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=m(Math.pow(R,8)),P=v,V=0;V<x.length;V+=8){var z=Math.min(8,x.length-V),N=parseInt(x.substring(V,V+z),R);8>z?(z=m(Math.pow(R,z)),P=P.j(z).add(m(N))):(P=P.j(A),P=P.add(m(N)))}return P}var v=p(0),w=p(1),S=p(16777216);n=u.prototype,n.m=function(){if(U(this))return-L(this).m();for(var x=0,R=1,A=0;A<this.g.length;A++){var P=this.i(A);x+=(0<=P?P:4294967296+P)*R,R*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(D(this))return"0";if(U(this))return"-"+L(this).toString(x);for(var R=m(Math.pow(x,6)),A=this,P="";;){var V=oe(A,R).g;A=H(A,V.j(R));var z=((0<A.g.length?A.g[0]:A.h)>>>0).toString(x);if(A=V,D(A))return z+P;for(;6>z.length;)z="0"+z;P=z+P}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function D(x){if(x.h!=0)return!1;for(var R=0;R<x.g.length;R++)if(x.g[R]!=0)return!1;return!0}function U(x){return x.h==-1}n.l=function(x){return x=H(this,x),U(x)?-1:D(x)?0:1};function L(x){for(var R=x.g.length,A=[],P=0;P<R;P++)A[P]=~x.g[P];return new u(A,~x.h).add(w)}n.abs=function(){return U(this)?L(this):this},n.add=function(x){for(var R=Math.max(this.g.length,x.g.length),A=[],P=0,V=0;V<=R;V++){var z=P+(this.i(V)&65535)+(x.i(V)&65535),N=(z>>>16)+(this.i(V)>>>16)+(x.i(V)>>>16);P=N>>>16,z&=65535,N&=65535,A[V]=N<<16|z}return new u(A,A[A.length-1]&-2147483648?-1:0)};function H(x,R){return x.add(L(R))}n.j=function(x){if(D(this)||D(x))return v;if(U(this))return U(x)?L(this).j(L(x)):L(L(this).j(x));if(U(x))return L(this.j(L(x)));if(0>this.l(S)&&0>x.l(S))return m(this.m()*x.m());for(var R=this.g.length+x.g.length,A=[],P=0;P<2*R;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var V=0;V<x.g.length;V++){var z=this.i(P)>>>16,N=this.i(P)&65535,Nt=x.i(V)>>>16,It=x.i(V)&65535;A[2*P+2*V]+=N*It,W(A,2*P+2*V),A[2*P+2*V+1]+=z*It,W(A,2*P+2*V+1),A[2*P+2*V+1]+=N*Nt,W(A,2*P+2*V+1),A[2*P+2*V+2]+=z*Nt,W(A,2*P+2*V+2)}for(P=0;P<R;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=R;P<2*R;P++)A[P]=0;return new u(A,0)};function W(x,R){for(;(x[R]&65535)!=x[R];)x[R+1]+=x[R]>>>16,x[R]&=65535,R++}function $(x,R){this.g=x,this.h=R}function oe(x,R){if(D(R))throw Error("division by zero");if(D(x))return new $(v,v);if(U(x))return R=oe(L(x),R),new $(L(R.g),L(R.h));if(U(R))return R=oe(x,L(R)),new $(L(R.g),R.h);if(30<x.g.length){if(U(x)||U(R))throw Error("slowDivide_ only works with positive integers.");for(var A=w,P=R;0>=P.l(x);)A=ae(A),P=ae(P);var V=le(A,1),z=le(P,1);for(P=le(P,2),A=le(A,2);!D(P);){var N=z.add(P);0>=N.l(x)&&(V=V.add(A),z=N),P=le(P,1),A=le(A,1)}return R=H(x,V.j(R)),new $(V,R)}for(V=v;0<=x.l(R);){for(A=Math.max(1,Math.floor(x.m()/R.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),z=m(A),N=z.j(R);U(N)||0<N.l(x);)A-=P,z=m(A),N=z.j(R);D(z)&&(z=w),V=V.add(z),x=H(x,N)}return new $(V,x)}n.A=function(x){return oe(this,x).h},n.and=function(x){for(var R=Math.max(this.g.length,x.g.length),A=[],P=0;P<R;P++)A[P]=this.i(P)&x.i(P);return new u(A,this.h&x.h)},n.or=function(x){for(var R=Math.max(this.g.length,x.g.length),A=[],P=0;P<R;P++)A[P]=this.i(P)|x.i(P);return new u(A,this.h|x.h)},n.xor=function(x){for(var R=Math.max(this.g.length,x.g.length),A=[],P=0;P<R;P++)A[P]=this.i(P)^x.i(P);return new u(A,this.h^x.h)};function ae(x){for(var R=x.g.length+1,A=[],P=0;P<R;P++)A[P]=x.i(P)<<1|x.i(P-1)>>>31;return new u(A,x.h)}function le(x,R){var A=R>>5;R%=32;for(var P=x.g.length-A,V=[],z=0;z<P;z++)V[z]=0<R?x.i(z+A)>>>R|x.i(z+A+1)<<32-R:x.i(z+A);return new u(V,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,D1=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,ta=u}).apply(typeof BI<"u"?BI:typeof self<"u"?self:typeof window<"u"?window:{});var Zf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var P1,ch,N1,_p,Zy,O1,k1,V1;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,E){return h==Array.prototype||h==Object.prototype||(h[_]=E.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zf=="object"&&Zf];for(var _=0;_<h.length;++_){var E=h[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=t(this);function a(h,_){if(_)e:{var E=r;h=h.split(".");for(var I=0;I<h.length-1;I++){var F=h[I];if(!(F in E))break e;E=E[F]}h=h[h.length-1],I=E[h],_=_(I),_!=I&&_!=null&&e(E,h,{configurable:!0,writable:!0,value:_})}}function o(h,_){h instanceof String&&(h+="");var E=0,I=!1,F={next:function(){if(!I&&E<h.length){var Q=E++;return{value:_(Q,h[Q]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}a("Array.prototype.values",function(h){return h||function(){return o(this,function(_,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function m(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,E){return h.call.apply(h.bind,arguments)}function v(h,_,E){if(!h)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),h.apply(_,F)}}return function(){return h.apply(_,arguments)}}function w(h,_,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:v,w.apply(null,arguments)}function S(h,_){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function D(h,_){function E(){}E.prototype=_.prototype,h.aa=_.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(I,F,Q){for(var ue=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)ue[qe-2]=arguments[qe];return _.prototype[F].apply(I,ue)}}function U(h){const _=h.length;if(0<_){const E=Array(_);for(let I=0;I<_;I++)E[I]=h[I];return E}return[]}function L(h,_){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(p(I)){const F=h.length||0,Q=I.length||0;h.length=F+Q;for(let ue=0;ue<Q;ue++)h[F+ue]=I[ue]}else h.push(I)}}class H{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function W(h){return/^[\s\xa0]*$/.test(h)}function $(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function oe(h){return oe[" "](h),h}oe[" "]=function(){};var ae=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function le(h,_,E){for(const I in h)_.call(E,h[I],I,h)}function x(h,_){for(const E in h)_.call(void 0,h[E],E,h)}function R(h){const _={};for(const E in h)_[E]=h[E];return _}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(h,_){let E,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(E in I)h[E]=I[E];for(let Q=0;Q<A.length;Q++)E=A[Q],Object.prototype.hasOwnProperty.call(I,E)&&(h[E]=I[E])}}function V(h){var _=1;h=h.split(":");const E=[];for(;0<_&&h.length;)E.push(h.shift()),_--;return h.length&&E.push(h.join(":")),E}function z(h){d.setTimeout(()=>{throw h},0)}function N(){var h=Oe;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Nt{constructor(){this.h=this.g=null}add(_,E){const I=It.get();I.set(_,E),this.h?this.h.next=I:this.g=I,this.h=I}}var It=new H(()=>new de,h=>h.reset());class de{constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,we=!1,Oe=new Nt,O=()=>{const h=d.Promise.resolve(void 0);Ie=()=>{h.then(ie)}};var ie=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(E){z(E)}var _=It;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}we=!1};function _e(){this.s=this.s,this.C=this.C}_e.prototype.s=!1,_e.prototype.ma=function(){this.s||(this.s=!0,this.N())},_e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var pe=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,_),d.removeEventListener("test",E,_)}catch{}return h}();function xe(h,_){if(me.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ae){e:{try{oe(_.nodeName);var F=!0;break e}catch{}F=!1}F||(_=null)}}else E=="mouseover"?_=h.fromElement:E=="mouseout"&&(_=h.toElement);this.relatedTarget=_,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ce[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&xe.aa.h.call(this)}}D(xe,me);var Ce={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Ze(h,_,E,I,F){this.listener=h,this.proxy=null,this.src=_,this.type=E,this.capture=!!I,this.ha=F,this.key=++Me,this.da=this.fa=!1}function Ke(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ut(h){this.src=h,this.g={},this.h=0}Ut.prototype.add=function(h,_,E,I,F){var Q=h.toString();h=this.g[Q],h||(h=this.g[Q]=[],this.h++);var ue=rr(h,_,I,F);return-1<ue?(_=h[ue],E||(_.fa=!1)):(_=new Ze(_,this.src,Q,!!I,F),_.fa=E,h.push(_)),_};function Jt(h,_){var E=_.type;if(E in h.g){var I=h.g[E],F=Array.prototype.indexOf.call(I,_,void 0),Q;(Q=0<=F)&&Array.prototype.splice.call(I,F,1),Q&&(Ke(_),h.g[E].length==0&&(delete h.g[E],h.h--))}}function rr(h,_,E,I){for(var F=0;F<h.length;++F){var Q=h[F];if(!Q.da&&Q.listener==_&&Q.capture==!!E&&Q.ha==I)return F}return-1}var as="closure_lm_"+(1e6*Math.random()|0),os={};function _i(h,_,E,I,F){if(Array.isArray(_)){for(var Q=0;Q<_.length;Q++)_i(h,_[Q],E,I,F);return null}return E=Sd(E),h&&h[ut]?h.K(_,E,m(I)?!!I.capture:!1,F):ju(h,_,E,!1,I,F)}function ju(h,_,E,I,F,Q){if(!_)throw Error("Invalid event type");var ue=m(F)?!!F.capture:!!F,qe=qu(h);if(qe||(h[as]=qe=new Ut(h)),E=qe.add(_,E,I,ue,Q),E.proxy)return E;if(I=Fo(),E.proxy=I,I.src=h,I.listener=E,h.addEventListener)pe||(F=ue),F===void 0&&(F=!1),h.addEventListener(_.toString(),I,F);else if(h.attachEvent)h.attachEvent(qo(_.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Fo(){function h(E){return _.call(h.src,h.listener,E)}const _=tg;return h}function jo(h,_,E,I,F){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)jo(h,_[Q],E,I,F);else I=m(I)?!!I.capture:!!I,E=Sd(E),h&&h[ut]?(h=h.i,_=String(_).toString(),_ in h.g&&(Q=h.g[_],E=rr(Q,E,I,F),-1<E&&(Ke(Q[E]),Array.prototype.splice.call(Q,E,1),Q.length==0&&(delete h.g[_],h.h--)))):h&&(h=qu(h))&&(_=h.g[_.toString()],h=-1,_&&(h=rr(_,E,I,F)),(E=-1<h?_[h]:null)&&Ia(E))}function Ia(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[ut])Jt(_.i,h);else{var E=h.type,I=h.proxy;_.removeEventListener?_.removeEventListener(E,I,h.capture):_.detachEvent?_.detachEvent(qo(E),I):_.addListener&&_.removeListener&&_.removeListener(I),(E=qu(_))?(Jt(E,h),E.h==0&&(E.src=null,_[as]=null)):Ke(h)}}}function qo(h){return h in os?os[h]:os[h]="on"+h}function tg(h,_){if(h.da)h=!0;else{_=new xe(_,this);var E=h.listener,I=h.ha||h.src;h.fa&&Ia(h),h=E.call(I,_)}return h}function qu(h){return h=h[as],h instanceof Ut?h:null}var Ln="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sd(h){return typeof h=="function"?h:(h[Ln]||(h[Ln]=function(_){return h.handleEvent(_)}),h[Ln])}function Gt(){_e.call(this),this.i=new Ut(this),this.M=this,this.F=null}D(Gt,_e),Gt.prototype[ut]=!0,Gt.prototype.removeEventListener=function(h,_,E,I){jo(this,h,_,E,I)};function en(h,_){var E,I=h.F;if(I)for(E=[];I;I=I.F)E.push(I);if(h=h.M,I=_.type||_,typeof _=="string")_=new me(_,h);else if(_ instanceof me)_.target=_.target||h;else{var F=_;_=new me(I,h),P(_,F)}if(F=!0,E)for(var Q=E.length-1;0<=Q;Q--){var ue=_.g=E[Q];F=yi(ue,I,!0,_)&&F}if(ue=_.g=h,F=yi(ue,I,!0,_)&&F,F=yi(ue,I,!1,_)&&F,E)for(Q=0;Q<E.length;Q++)ue=_.g=E[Q],F=yi(ue,I,!1,_)&&F}Gt.prototype.N=function(){if(Gt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var E=h.g[_],I=0;I<E.length;I++)Ke(E[I]);delete h.g[_],h.h--}}this.F=null},Gt.prototype.K=function(h,_,E,I){return this.i.add(String(h),_,!1,E,I)},Gt.prototype.L=function(h,_,E,I){return this.i.add(String(h),_,!0,E,I)};function yi(h,_,E,I){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var F=!0,Q=0;Q<_.length;++Q){var ue=_[Q];if(ue&&!ue.da&&ue.capture==E){var qe=ue.listener,Kt=ue.ha||ue.src;ue.fa&&Jt(h.i,ue),F=qe.call(Kt,I)!==!1&&F}}return F&&!I.defaultPrevented}function Rd(h,_,E){if(typeof h=="function")E&&(h=w(h,E));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Hu(h){h.g=Rd(()=>{h.g=null,h.i&&(h.i=!1,Hu(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class ng extends _e{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Hu(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Aa(h){_e.call(this),this.h=h,this.g={}}D(Aa,_e);var ls=[];function En(h){le(h.g,function(_,E){this.g.hasOwnProperty(E)&&Ia(_)},h),h.g={}}Aa.prototype.N=function(){Aa.aa.N.call(this),En(this)},Aa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gu=d.JSON.stringify,Vr=d.JSON.parse,Rn=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function $u(){}$u.prototype.h=null;function Cd(h){return h.h||(h.h=h.i())}function xd(){}var Mr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function us(){me.call(this,"d")}D(us,me);function Ir(){me.call(this,"c")}D(Ir,me);var ir={},cs=null;function Ho(){return cs=cs||new Gt}ir.La="serverreachability";function Ku(h){me.call(this,ir.La,h)}D(Ku,me);function hs(h){const _=Ho();en(_,new Ku(_))}ir.STAT_EVENT="statevent";function Go(h,_){me.call(this,ir.STAT_EVENT,h),this.stat=_}D(Go,me);function Ot(h){const _=Ho();en(_,new Go(_,h))}ir.Ma="timingevent";function Dd(h,_){me.call(this,ir.Ma,h),this.size=_}D(Dd,me);function ds(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function fs(){this.g=!0}fs.prototype.xa=function(){this.g=!1};function Pd(h,_,E,I,F,Q){h.info(function(){if(h.g)if(Q)for(var ue="",qe=Q.split("&"),Kt=0;Kt<qe.length;Kt++){var He=qe[Kt].split("=");if(1<He.length){var rn=He[0];He=He[1];var Qt=rn.split("_");ue=2<=Qt.length&&Qt[1]=="type"?ue+(rn+"="+He+"&"):ue+(rn+"=redacted&")}}else ue=null;else ue=Q;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+_+`
`+E+`
`+ue})}function Nd(h,_,E,I,F,Q,ue){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+_+`
`+E+`
`+Q+" "+ue})}function ps(h,_,E,I){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+tn(h,E)+(I?" "+I:"")})}function Lr(h,_){h.info(function(){return"TIMEOUT: "+_})}fs.prototype.info=function(){};function tn(h,_){if(!h.g)return _;if(!_)return null;try{var E=JSON.parse(_);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var I=E[h];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var Q=F[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var ue=1;ue<F.length;ue++)F[ue]=""}}}}return Gu(E)}catch{return _}}var $t={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sa;function $o(){}D($o,$u),$o.prototype.g=function(){return new XMLHttpRequest},$o.prototype.i=function(){return{}},Sa=new $o;function Ur(h,_,E,I){this.j=h,this.i=_,this.l=E,this.R=I||1,this.U=new Aa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qu}function Qu(){this.i=null,this.g="",this.h=!1}var ms={},Ra={};function Ar(h,_,E){h.L=1,h.v=Da(At(_)),h.m=E,h.P=!0,Ei(h,null)}function Ei(h,_){h.F=Date.now(),_t(h),h.A=At(h.v);var E=h.A,I=h.R;Array.isArray(I)||(I=[String(I)]),bi(E.i,"t",I),h.C=0,E=h.j.J,h.h=new Qu,h.g=$d(h.j,E?_:null,!h.m),0<h.O&&(h.M=new ng(w(h.Y,h,h.g),h.O)),_=h.U,E=h.g,I=h.ca;var F="readystatechange";Array.isArray(F)||(F&&(ls[0]=F.toString()),F=ls);for(var Q=0;Q<F.length;Q++){var ue=_i(E,F[Q],I||_.handleEvent,!1,_.h||_);if(!ue)break;_.g[ue.key]=ue}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),hs(),Pd(h.i,h.u,h.A,h.l,h.R,h.m)}Ur.prototype.ca=function(h){h=h.target;const _=this.M;_&&ur(h)==3?_.j():this.Y(h)},Ur.prototype.Y=function(h){try{if(h==this.g)e:{const Qt=ur(this.g);var _=this.g.Ba();const Ri=this.g.Z();if(!(3>Qt)&&(Qt!=3||this.g&&(this.h.h||this.g.oa()||Ud(this.g)))){this.J||Qt!=4||_==7||(_==8||0>=Ri?hs(3):hs(2)),Ko(this);var E=this.g.Z();this.X=E;t:if(gs(this)){var I=Ud(this.g);h="";var F=I.length,Q=ur(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Un(this),Gn(this);var ue="";break t}this.h.i=new d.TextDecoder}for(_=0;_<F;_++)this.h.h=!0,h+=this.h.i.decode(I[_],{stream:!(Q&&_==F-1)});I.length=0,this.h.g+=h,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=E==200,Nd(this.i,this.u,this.A,this.l,this.R,Qt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,Kt=this.g;if((qe=Kt.g?Kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(qe)){var He=qe;break t}}He=null}if(E=He)ps(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$n(this,E);else{this.o=!1,this.s=3,Ot(12),Un(this),Gn(this);break e}}if(this.P){E=!0;let dn;for(;!this.J&&this.C<ue.length;)if(dn=_s(this,ue),dn==Ra){Qt==4&&(this.s=4,Ot(14),E=!1),ps(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==ms){this.s=4,Ot(15),ps(this.i,this.l,ue,"[Invalid Chunk]"),E=!1;break}else ps(this.i,this.l,dn,null),$n(this,dn);if(gs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qt!=4||ue.length!=0||this.h.h||(this.s=1,Ot(16),E=!1),this.o=this.o&&E,!E)ps(this.i,this.l,ue,"[Invalid Chunked Response]"),Un(this),Gn(this);else if(0<ue.length&&!this.W){this.W=!0;var rn=this.j;rn.g==this&&rn.ba&&!rn.M&&(rn.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),La(rn),rn.M=!0,Ot(11))}}else ps(this.i,this.l,ue,null),$n(this,ue);Qt==4&&Un(this),this.o&&!this.J&&(Qt==4?qd(this.j,this):(this.o=!1,_t(this)))}else lg(this.g),E==400&&0<ue.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Un(this),Gn(this)}}}catch{}finally{}};function gs(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function _s(h,_){var E=h.C,I=_.indexOf(`
`,E);return I==-1?Ra:(E=Number(_.substring(E,I)),isNaN(E)?ms:(I+=1,I+E>_.length?Ra:(_=_.slice(I,I+E),h.C=I+E,_)))}Ur.prototype.cancel=function(){this.J=!0,Un(this)};function _t(h){h.S=Date.now()+h.I,Wu(h,h.I)}function Wu(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=ds(w(h.ba,h),_)}function Ko(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Ur.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Lr(this.i,this.A),this.L!=2&&(hs(),Ot(17)),Un(this),this.s=2,Gn(this)):Wu(this,this.S-h)};function Gn(h){h.j.G==0||h.J||qd(h.j,h)}function Un(h){Ko(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,En(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function $n(h,_){try{var E=h.j;if(E.G!=0&&(E.g==h||ys(E.h,h))){if(!h.K&&ys(E.h,h)&&E.G==3){try{var I=E.Da.g.parse(_)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)rl(E),tl(E);else break e;ac(E),Ot(18)}}else E.za=F[1],0<E.za-E.T&&37500>F[2]&&E.F&&E.v==0&&!E.C&&(E.C=ds(w(E.Za,E),6e3));if(1>=Od(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Si(E,11)}else if((h.K||E.g==h)&&rl(E),!W(_))for(F=E.Da.g.parse(_),_=0;_<F.length;_++){let He=F[_];if(E.T=He[0],He=He[1],E.G==2)if(He[0]=="c"){E.K=He[1],E.ia=He[2];const rn=He[3];rn!=null&&(E.la=rn,E.j.info("VER="+E.la));const Qt=He[4];Qt!=null&&(E.Aa=Qt,E.j.info("SVER="+E.Aa));const Ri=He[5];Ri!=null&&typeof Ri=="number"&&0<Ri&&(I=1.5*Ri,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const dn=h.g;if(dn){const Gr=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gr){var Q=I.h;Q.g||Gr.indexOf("spdy")==-1&&Gr.indexOf("quic")==-1&&Gr.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(vs(Q,Q.h),Q.h=null))}if(I.D){const lc=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;lc&&(I.ya=lc,Qe(I.I,I.D,lc))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var ue=h;if(I.qa=Gd(I,I.J?I.ia:null,I.W),ue.K){sr(I.h,ue);var qe=ue,Kt=I.L;Kt&&(qe.I=Kt),qe.B&&(Ko(qe),_t(qe)),I.g=ue}else Fd(I);0<E.i.length&&nl(E)}else He[0]!="stop"&&He[0]!="close"||Si(E,7);else E.G==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?Si(E,7):ic(E):He[0]!="noop"&&E.l&&E.l.ta(He),E.v=0)}}hs(4)}catch{}}var rg=class{constructor(h,_){this.g=h,this.map=_}};function Yu(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xu(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Od(h){return h.h?1:h.g?h.g.size:0}function ys(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function vs(h,_){h.g?h.g.add(_):h.h=_}function sr(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Yu.prototype.cancel=function(){if(this.i=Cn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Cn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const E of h.g.values())_=_.concat(E.D);return _}return U(h.i)}function kd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],E=h.length,I=0;I<E;I++)_.push(h[I]);return _}_=[],E=0;for(I in h)_[E++]=h[I];return _}function ig(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var E=0;E<h;E++)_.push(E);return _}_=[],E=0;for(const I in h)_[E++]=I;return _}}}function Ca(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var E=ig(h),I=kd(h),F=I.length,Q=0;Q<F;Q++)_.call(void 0,I[Q],E&&E[Q],h)}var Zu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qo(h,_){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var I=h[E].indexOf("="),F=null;if(0<=I){var Q=h[E].substring(0,I);F=h[E].substring(I+1)}else Q=h[E];_(Q,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Ti(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Ti){this.h=h.h,Es(this,h.j),this.o=h.o,this.g=h.g,xa(this,h.s),this.l=h.l;var _=h.i,E=new Br;E.i=_.i,_.g&&(E.g=new Map(_.g),E.h=_.h),Wo(this,E),this.m=h.m}else h&&(_=String(h).match(Zu))?(this.h=!1,Es(this,_[1]||"",!0),this.o=Ts(_[2]||""),this.g=Ts(_[3]||"",!0),xa(this,_[4]),this.l=Ts(_[5]||"",!0),Wo(this,_[6]||"",!0),this.m=Ts(_[7]||"")):(this.h=!1,this.i=new Br(null,this.h))}Ti.prototype.toString=function(){var h=[],_=this.j;_&&h.push(ar(_,Ju,!0),":");var E=this.g;return(E||_=="file")&&(h.push("//"),(_=this.o)&&h.push(ar(_,Ju,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(ar(E,E.charAt(0)=="/"?ec:Vd,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",ar(E,og)),h.join("")};function At(h){return new Ti(h)}function Es(h,_,E){h.j=E?Ts(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function xa(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Wo(h,_,E){_ instanceof Br?(h.i=_,tc(h.i,h.h)):(E||(_=ar(_,ag)),h.i=new Br(_,h.h))}function Qe(h,_,E){h.i.set(_,E)}function Da(h){return Qe(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Ts(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ar(h,_,E){return typeof h=="string"?(h=encodeURI(h).replace(_,sg),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function sg(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Ju=/[#\/\?@]/g,Vd=/[#\?:]/g,ec=/[#\?]/g,ag=/[#\?@]/g,og=/#/g;function Br(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function or(h){h.g||(h.g=new Map,h.h=0,h.i&&Qo(h.i,function(_,E){h.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}n=Br.prototype,n.add=function(h,_){or(this),this.i=null,h=Ii(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(_),this.h+=1,this};function Yo(h,_){or(h),_=Ii(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function wi(h,_){return or(h),_=Ii(h,_),h.g.has(_)}n.forEach=function(h,_){or(this),this.g.forEach(function(E,I){E.forEach(function(F){h.call(_,F,I,this)},this)},this)},n.na=function(){or(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),E=[];for(let I=0;I<_.length;I++){const F=h[I];for(let Q=0;Q<F.length;Q++)E.push(_[I])}return E},n.V=function(h){or(this);let _=[];if(typeof h=="string")wi(this,h)&&(_=_.concat(this.g.get(Ii(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)_=_.concat(h[E])}return _},n.set=function(h,_){return or(this),this.i=null,h=Ii(this,h),wi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function bi(h,_,E){Yo(h,_),0<E.length&&(h.i=null,h.g.set(Ii(h,_),U(E)),h.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var E=0;E<_.length;E++){var I=_[E];const Q=encodeURIComponent(String(I)),ue=this.V(I);for(I=0;I<ue.length;I++){var F=Q;ue[I]!==""&&(F+="="+encodeURIComponent(String(ue[I]))),h.push(F)}}return this.i=h.join("&")};function Ii(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function tc(h,_){_&&!h.j&&(or(h),h.i=null,h.g.forEach(function(E,I){var F=I.toLowerCase();I!=F&&(Yo(this,I),bi(this,F,E))},h)),h.j=_}function Md(h,_){const E=new fs;if(d.Image){const I=new Image;I.onload=S(lr,E,"TestLoadImage: loaded",!0,_,I),I.onerror=S(lr,E,"TestLoadImage: error",!1,_,I),I.onabort=S(lr,E,"TestLoadImage: abort",!1,_,I),I.ontimeout=S(lr,E,"TestLoadImage: timeout",!1,_,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else _(!1)}function Pa(h,_){const E=new fs,I=new AbortController,F=setTimeout(()=>{I.abort(),lr(E,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:I.signal}).then(Q=>{clearTimeout(F),Q.ok?lr(E,"TestPingServer: ok",!0,_):lr(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(F),lr(E,"TestPingServer: error",!1,_)})}function lr(h,_,E,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(E)}catch{}}function Na(){this.g=new Rn}function zr(h,_,E){const I=E||"";try{Ca(h,function(F,Q){let ue=F;m(F)&&(ue=Gu(F)),_.push(I+Q+"="+encodeURIComponent(ue))})}catch(F){throw _.push(I+"type="+encodeURIComponent("_badmap")),F}}function ws(h){this.l=h.Ub||null,this.j=h.eb||!1}D(ws,$u),ws.prototype.g=function(){return new Ai(this.l,this.j)},ws.prototype.i=function(h){return function(){return h}}({});function Ai(h,_){Gt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Ai,Gt),n=Ai.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,jr(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,jr(this)),this.g&&(this.readyState=3,jr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nc(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function nc(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Fr(this):jr(this),this.readyState==3&&nc(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Fr(this))},n.Qa=function(h){this.g&&(this.response=h,Fr(this))},n.ga=function(){this.g&&Fr(this)};function Fr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,jr(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=_.next();return h.join(`\r
`)};function jr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function rc(h){let _="";return le(h,function(E,I){_+=I,_+=":",_+=E,_+=`\r
`}),_}function nn(h,_,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=rc(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):Qe(h,_,E))}function Je(h){Gt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Je,Gt);var Xo=/^https?$/i,Oa=["POST","PUT"];n=Je.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sa.g(),this.v=this.o?Cd(this.o):Cd(Sa),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Q){Ld(this,Q);return}if(h=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)E.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const Q of I.keys())E.set(Q,I.get(Q));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(Q=>Q.toLowerCase()=="content-type"),F=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Oa,_,void 0))||I||F||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,ue]of E)this.g.setRequestHeader(Q,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ka(this),this.u=!0,this.g.send(h),this.u=!1}catch(Q){Ld(this,Q)}};function Ld(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Zo(h),qr(h)}function Zo(h){h.A||(h.A=!0,en(h,"complete"),en(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,en(this,"complete"),en(this,"abort"),qr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qr(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Jo(this):this.bb())},n.bb=function(){Jo(this)};function Jo(h){if(h.h&&typeof u<"u"&&(!h.v[1]||ur(h)!=4||h.Z()!=2)){if(h.u&&ur(h)==4)Rd(h.Ea,0,h);else if(en(h,"readystatechange"),ur(h)==4){h.h=!1;try{const ue=h.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var I;if(I=ue===0){var F=String(h.D).match(Zu)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),I=!Xo.test(F?F.toLowerCase():"")}E=I}if(E)en(h,"complete"),en(h,"success");else{h.m=6;try{var Q=2<ur(h)?h.g.statusText:""}catch{Q=""}h.l=Q+" ["+h.Z()+"]",Zo(h)}}finally{qr(h)}}}}function qr(h,_){if(h.g){ka(h);const E=h.g,I=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||en(h,"ready");try{E.onreadystatechange=I}catch{}}}function ka(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function ur(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<ur(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Vr(_)}};function Ud(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function lg(h){const _={};h=(h.g&&2<=ur(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if(W(h[I]))continue;var E=V(h[I]);const F=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Q=_[F]||[];_[F]=Q,Q.push(E)}x(_,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Va(h,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||_}function el(h){this.Aa=0,this.i=[],this.j=new fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Va("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Va("baseRetryDelayMs",5e3,h),this.cb=Va("retryDelaySeedMs",1e4,h),this.Wa=Va("forwardChannelMaxRetries",2,h),this.wa=Va("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Yu(h&&h.concurrentRequestLimit),this.Da=new Na,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=el.prototype,n.la=8,n.G=1,n.connect=function(h,_,E,I){Ot(0),this.W=h,this.H=_||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=Gd(this,null,this.W),nl(this)};function ic(h){if(Bd(h),h.G==3){var _=h.U++,E=At(h.I);if(Qe(E,"SID",h.K),Qe(E,"RID",_),Qe(E,"TYPE","terminate"),Ma(h,E),_=new Ur(h,h.j,_),_.L=2,_.v=Da(At(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=_.v,E=!0),E||(_.g=$d(_.j,null),_.g.ea(_.v)),_.F=Date.now(),_t(_)}Hd(h)}function tl(h){h.g&&(La(h),h.g.cancel(),h.g=null)}function Bd(h){tl(h),h.u&&(d.clearTimeout(h.u),h.u=null),rl(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function nl(h){if(!Xu(h.h)&&!h.s){h.s=!0;var _=h.Ga;Ie||O(),we||(Ie(),we=!0),Oe.add(_,h),h.B=0}}function ug(h,_){return Od(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=ds(w(h.Ga,h,_),oc(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const F=new Ur(this,this.j,h);let Q=this.o;if(this.S&&(Q?(Q=R(Q),P(Q,this.S)):Q=this.S),this.m!==null||this.O||(F.H=Q,Q=null),this.P)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(_+=I,4096<_){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=zd(this,F,_),E=At(this.I),Qe(E,"RID",h),Qe(E,"CVER",22),this.D&&Qe(E,"X-HTTP-Session-Id",this.D),Ma(this,E),Q&&(this.O?_="headers="+encodeURIComponent(String(rc(Q)))+"&"+_:this.m&&nn(E,this.m,Q)),vs(this.h,F),this.Ua&&Qe(E,"TYPE","init"),this.P?(Qe(E,"$req",_),Qe(E,"SID","null"),F.T=!0,Ar(F,E,null)):Ar(F,E,_),this.G=2}}else this.G==3&&(h?sc(this,h):this.i.length==0||Xu(this.h)||sc(this))};function sc(h,_){var E;_?E=_.l:E=h.U++;const I=At(h.I);Qe(I,"SID",h.K),Qe(I,"RID",E),Qe(I,"AID",h.T),Ma(h,I),h.m&&h.o&&nn(I,h.m,h.o),E=new Ur(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),_&&(h.i=_.D.concat(h.i)),_=zd(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),vs(h.h,E),Ar(E,I,_)}function Ma(h,_){h.H&&le(h.H,function(E,I){Qe(_,I,E)}),h.l&&Ca({},function(E,I){Qe(_,I,E)})}function zd(h,_,E){E=Math.min(h.i.length,E);var I=h.l?w(h.l.Na,h.l,h):null;e:{var F=h.i;let Q=-1;for(;;){const ue=["count="+E];Q==-1?0<E?(Q=F[0].g,ue.push("ofs="+Q)):Q=0:ue.push("ofs="+Q);let qe=!0;for(let Kt=0;Kt<E;Kt++){let He=F[Kt].g;const rn=F[Kt].map;if(He-=Q,0>He)Q=Math.max(0,F[Kt].g-100),qe=!1;else try{zr(rn,ue,"req"+He+"_")}catch{I&&I(rn)}}if(qe){I=ue.join("&");break e}}}return h=h.i.splice(0,E),_.D=h,I}function Fd(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;Ie||O(),we||(Ie(),we=!0),Oe.add(_,h),h.v=0}}function ac(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=ds(w(h.Fa,h),oc(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,jd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=ds(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),tl(this),jd(this))};function La(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function jd(h){h.g=new Ur(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=At(h.qa);Qe(_,"RID","rpc"),Qe(_,"SID",h.K),Qe(_,"AID",h.T),Qe(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Qe(_,"TO",h.ja),Qe(_,"TYPE","xmlhttp"),Ma(h,_),h.m&&h.o&&nn(_,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=Da(At(_)),E.m=null,E.P=!0,Ei(E,h)}n.Za=function(){this.C!=null&&(this.C=null,tl(this),ac(this),Ot(19))};function rl(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function qd(h,_){var E=null;if(h.g==_){rl(h),La(h),h.g=null;var I=2}else if(ys(h.h,_))E=_.D,sr(h.h,_),I=1;else return;if(h.G!=0){if(_.o)if(I==1){E=_.m?_.m.length:0,_=Date.now()-_.F;var F=h.B;I=Ho(),en(I,new Dd(I,E)),nl(h)}else Fd(h);else if(F=_.s,F==3||F==0&&0<_.X||!(I==1&&ug(h,_)||I==2&&ac(h)))switch(E&&0<E.length&&(_=h.h,_.i=_.i.concat(E)),F){case 1:Si(h,5);break;case 4:Si(h,10);break;case 3:Si(h,6);break;default:Si(h,2)}}}function oc(h,_){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*_}function Si(h,_){if(h.j.info("Error code "+_),_==2){var E=w(h.fb,h),I=h.Xa;const F=!I;I=new Ti(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Es(I,"https"),Da(I),F?Md(I.toString(),E):Pa(I.toString(),E)}else Ot(2);h.G=0,h.l&&h.l.sa(_),Hd(h),Bd(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function Hd(h){if(h.G=0,h.ka=[],h.l){const _=Cn(h.h);(_.length!=0||h.i.length!=0)&&(L(h.ka,_),L(h.ka,h.i),h.h.i.length=0,U(h.i),h.i.length=0),h.l.ra()}}function Gd(h,_,E){var I=E instanceof Ti?At(E):new Ti(E);if(I.g!="")_&&(I.g=_+"."+I.g),xa(I,I.s);else{var F=d.location;I=F.protocol,_=_?_+"."+F.hostname:F.hostname,F=+F.port;var Q=new Ti(null);I&&Es(Q,I),_&&(Q.g=_),F&&xa(Q,F),E&&(Q.l=E),I=Q}return E=h.D,_=h.ya,E&&_&&Qe(I,E,_),Qe(I,"VER",h.la),Ma(h,I),I}function $d(h,_,E){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Je(new ws({eb:E})):new Je(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kd(){}n=Kd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function il(){}il.prototype.g=function(h,_){return new xn(h,_)};function xn(h,_){Gt.call(this),this.g=new el(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!W(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!W(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Hr(this)}D(xn,Gt),xn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xn.prototype.close=function(){ic(this.g)},xn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=Gu(h),h=E);_.i.push(new rg(_.Ya++,h)),_.G==3&&nl(_)},xn.prototype.N=function(){this.g.l=null,delete this.j,ic(this.g),delete this.g,xn.aa.N.call(this)};function Qd(h){us.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const E in _){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}D(Qd,us);function Wd(){Ir.call(this),this.status=1}D(Wd,Ir);function Hr(h){this.g=h}D(Hr,Kd),Hr.prototype.ua=function(){en(this.g,"a")},Hr.prototype.ta=function(h){en(this.g,new Qd(h))},Hr.prototype.sa=function(h){en(this.g,new Wd)},Hr.prototype.ra=function(){en(this.g,"b")},il.prototype.createWebChannel=il.prototype.g,xn.prototype.send=xn.prototype.o,xn.prototype.open=xn.prototype.m,xn.prototype.close=xn.prototype.close,V1=function(){return new il},k1=function(){return Ho()},O1=ir,Zy={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$t.NO_ERROR=0,$t.TIMEOUT=8,$t.HTTP_ERROR=6,_p=$t,vi.COMPLETE="complete",N1=vi,xd.EventType=Mr,Mr.OPEN="a",Mr.CLOSE="b",Mr.ERROR="c",Mr.MESSAGE="d",Gt.prototype.listen=Gt.prototype.K,ch=xd,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,P1=Je}).apply(typeof Zf<"u"?Zf:typeof self<"u"?self:typeof window<"u"?window:{});const zI="@firebase/firestore",FI="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new gm("@firebase/firestore");function Bl(){return la.logLevel}function j4(n){la.setLogLevel(n)}function re(n,...e){if(la.logLevel<=Be.DEBUG){const t=e.map(gE);la.debug(`Firestore (${ku}): ${n}`,...t)}}function Vt(n,...e){if(la.logLevel<=Be.ERROR){const t=e.map(gE);la.error(`Firestore (${ku}): ${n}`,...t)}}function di(n,...e){if(la.logLevel<=Be.WARN){const t=e.map(gE);la.warn(`Firestore (${ku}): ${n}`,...t)}}function gE(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(n="Unexpected state"){const e=`FIRESTORE (${ku}) INTERNAL ASSERTION FAILED: `+n;throw Vt(e),new Error(e)}function ve(n,e){n||ge()}function q4(n,e){n||ge()}function fe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends kn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class H4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(cn.UNAUTHENTICATED))}shutdown(){}}class G4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class $4{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ve(this.o===void 0);let r=this.i;const a=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let o=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new yn,e.enqueueRetryable(()=>a(this.currentUser))};const u=()=>{const p=o;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new yn)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new M1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new cn(e)}}class K4{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Q4{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new K4(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class W4{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ft(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ve(this.o===void 0);const r=o=>{o.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,re("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const a=o=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>a(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?a(o):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new jI(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ve(typeof t.token=="string"),this.R=t.token,new jI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y4(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=Y4(40);for(let o=0;o<a.length;++o)r.length<20&&a[o]<t&&(r+=e.charAt(a[o]%62))}return r}}function Re(n,e){return n<e?-1:n>e?1:0}function Jy(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return Re(r,a);{const o=_E(),u=X4(o.encode(qI(n,t)),o.encode(qI(e,t)));return u!==0?u:Re(r,a)}}t+=r>65535?2:1}return Re(n.length,e.length)}function qI(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function X4(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Re(n[t],e[t]);return Re(n.length,e.length)}function ou(n,e,t){return n.length===e.length&&n.every((r,a)=>t(r,e[a]))}function U1(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=-62135596800,GI=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*GI);return new gt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<HI)throw new te(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/GI}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-HI;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new gt(0,0))}static max(){return new Te(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="__name__";class Xr{constructor(e,t,r){t===void 0?t=0:t>e.length&&ge(),r===void 0?r=e.length-t:r>e.length-t&&ge(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const o=Xr.compareSegments(e.get(a),t.get(a));if(o!==0)return o}return Re(e.length,t.length)}static compareSegments(e,t){const r=Xr.isNumericId(e),a=Xr.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?Xr.extractNumericId(e).compare(Xr.extractNumericId(t)):Jy(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ta.fromString(e.substring(4,e.length-2))}}class ze extends Xr{construct(e,t,r){return new ze(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new ze(t)}static emptyPath(){return new ze([])}}const Z4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends Xr{construct(e,t,r){return new pt(e,t,r)}static isValidIdentifier(e){return Z4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$I}static keyField(){return new pt([$I])}static fromServerFormat(e){const t=[];let r="",a=0;const o=()=>{if(r.length===0)throw new te(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new te(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new te(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,a+=2}else d==="`"?(u=!u,a++):d!=="."||u?(r+=d,a++):(o(),a++)}if(o(),u)throw new te(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(t)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(ze.fromString(e))}static fromName(e){return new he(ze.fromString(e).popFirst(5))}static empty(){return new he(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new ze(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=-1;class jp{constructor(e,t,r,a){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=a}}function ev(n){return n.fields.find(e=>e.kind===2)}function io(n){return n.fields.filter(e=>e.kind!==2)}jp.UNKNOWN_ID=-1;class yp{constructor(e,t){this.fieldPath=e,this.kind=t}}class Lh{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Lh(0,nr.min())}}function B1(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,a=Te.fromTimestamp(r===1e9?new gt(t+1,0):new gt(t,r));return new nr(a,he.empty(),e)}function z1(n){return new nr(n.readTime,n.key,lu)}class nr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nr(Te.min(),he.empty(),lu)}static max(){return new nr(Te.max(),he.empty(),lu)}}function yE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(n.documentKey,e.documentKey),t!==0?t:Re(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class j1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function va(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==F1)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((r,a)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,a)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,r)=>{t(e)})}static reject(e){return new j((t,r)=>{r(e)})}static waitFor(e){return new j((t,r)=>{let a=0,o=0,u=!1;e.forEach(d=>{++a,d.next(()=>{++o,u&&o===a&&t()},p=>r(p))}),u=!0,o===a&&t()})}static or(e){let t=j.resolve(!1);for(const r of e)t=t.next(a=>a?j.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,o)=>{r.push(t.call(this,a,o))}),this.waitFor(r)}static mapArray(e,t){return new j((r,a)=>{const o=e.length,u=new Array(o);let d=0;for(let p=0;p<o;p++){const m=p;t(e[m]).next(y=>{u[m]=y,++d,d===o&&r(u)},y=>a(y))}})}static doWhile(e,t){return new j((r,a)=>{const o=()=>{e()===!0?t().next(()=>{o()},a):r()};o()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="SimpleDb";class Cm{static open(e,t,r,a){try{return new Cm(t,e.transaction(a,r))}catch(o){throw new Eh(t,o)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new yn,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new Eh(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const a=vE(r.target.error);this.m.reject(new Eh(e,a))}}get p(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(re(Jn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new eB(t)}}class oi{static delete(e){return re(Jn,"Removing database:",e),ao(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Dh())return!1;if(oi.v())return!0;const e=wt(),t=oi.C(e),r=0<t&&t<10,a=q1(e),o=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static C(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.O=r,oi.C(wt())===12.2&&Vt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(e){return this.db||(re(Jn,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=o=>{const u=o.target.result;t(u)},a.onblocked=()=>{r(new Eh(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=o=>{const u=o.target.error;u.name==="VersionError"?r(new te(K.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?r(new te(K.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):r(new Eh(e,u))},a.onupgradeneeded=o=>{re(Jn,'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const u=o.target.result;this.O.B(u,a.transaction,o.oldVersion,this.version).next(()=>{re(Jn,"Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,a){const o=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.N(e);const d=Cm.open(this.db,e,o?"readonly":"readwrite",r),p=a(d).next(m=>(d.S(),m)).catch(m=>(d.abort(m),j.reject(m))).toPromise();return p.catch(()=>{}),await d.p,p}catch(d){const p=d,m=p.name!=="FirebaseError"&&u<3;if(re(Jn,"Transaction failed with error:",p.message,"Retrying:",m),this.close(),!m)return Promise.reject(p)}}}close(){this.db&&this.db.close(),this.db=void 0}}function q1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class J4{constructor(e){this.q=e,this.$=!1,this.U=null}get isDone(){return this.$}get K(){return this.U}set cursor(e){this.q=e}done(){this.$=!0}W(e){this.U=e}delete(){return ao(this.q.delete())}}class Eh extends te{constructor(e,t){super(K.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ea(n){return n.name==="IndexedDbTransactionError"}class eB{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(re(Jn,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(re(Jn,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ao(r)}add(e){return re(Jn,"ADD",this.store.name,e,e),ao(this.store.add(e))}get(e){return ao(this.store.get(e)).next(t=>(t===void 0&&(t=null),re(Jn,"GET",this.store.name,e,t),t))}delete(e){return re(Jn,"DELETE",this.store.name,e),ao(this.store.delete(e))}count(){return re(Jn,"COUNT",this.store.name),ao(this.store.count())}G(e,t){const r=this.options(e,t),a=r.index?this.store.index(r.index):this.store;if(typeof a.getAll=="function"){const o=a.getAll(r.range);return new j((u,d)=>{o.onerror=p=>{d(p.target.error)},o.onsuccess=p=>{u(p.target.result)}})}{const o=this.cursor(r),u=[];return this.j(o,(d,p)=>{u.push(p)}).next(()=>u)}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new j((a,o)=>{r.onerror=u=>{o(u.target.error)},r.onsuccess=u=>{a(u.target.result)}})}J(e,t){re(Jn,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const a=this.cursor(r);return this.j(a,(o,u,d)=>d.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const a=this.cursor(r);return this.j(a,t)}X(e){const t=this.cursor({});return new j((r,a)=>{t.onerror=o=>{const u=vE(o.target.error);a(u)},t.onsuccess=o=>{const u=o.target.result;u?e(u.primaryKey,u.value).next(d=>{d?u.continue():r()}):r()}})}j(e,t){const r=[];return new j((a,o)=>{e.onerror=u=>{o(u.target.error)},e.onsuccess=u=>{const d=u.target.result;if(!d)return void a();const p=new J4(d),m=t(d.primaryKey,d.value,p);if(m instanceof j){const y=m.catch(v=>(p.done(),j.reject(v)));r.push(y)}p.isDone?a():p.K===null?d.continue():d.continue(p.K)}}).next(()=>j.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ao(n){return new j((e,t)=>{n.onsuccess=r=>{const a=r.target.result;e(a)},n.onerror=r=>{const a=vE(r.target.error);t(a)}})}let KI=!1;function vE(n){const e=oi.C(wt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new te("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return KI||(KI=!0,setTimeout(()=>{throw r},0)),r}}return n}const Th="IndexBackfiller";class tB{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){re(Th,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.ee.ne();re(Th,`Documents written: ${t}`)}catch(t){Ea(t)?re(Th,"Ignoring IndexedDB error during index backfill: ",t):await va(t)}await this.te(6e4)})}}class nB{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let a=t,o=!0;return j.doWhile(()=>o===!0&&a>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(u=>{if(u!==null&&!r.has(u))return re(Th,`Processing collection: ${u}`),this.ie(e,u,a).next(d=>{a-=d,r.add(u)});o=!1})).next(()=>t-a)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(a=>this.localStore.localDocuments.getNextDocuments(e,t,a,r).next(o=>{const u=o.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next(()=>this.se(a,o)).next(d=>(re(Th,`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d))).next(()=>u.size)}))}se(e,t){let r=e;return t.changes.forEach((a,o)=>{const u=z1(o);yE(u,r)>0&&(r=u)}),new nr(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}jn.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=-1;function dd(n){return n==null}function Uh(n){return n===0&&1/n==-1/0}function H1(n){return typeof n=="number"&&Number.isInteger(n)&&!Uh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="";function An(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=QI(e)),e=rB(n.get(t),e);return QI(e)}function rB(n,e){let t=e;const r=n.length;for(let a=0;a<r;a++){const o=n.charAt(a);switch(o){case"\0":t+="";break;case qp:t+="";break;default:t+=o}}return t}function QI(n){return n+qp+""}function si(n){const e=n.length;if(ve(e>=2),e===2)return ve(n.charAt(0)===qp&&n.charAt(1)===""),ze.emptyPath();const t=e-2,r=[];let a="";for(let o=0;o<e;){const u=n.indexOf(qp,o);switch((u<0||u>t)&&ge(),n.charAt(u+1)){case"":const d=n.substring(o,u);let p;a.length===0?p=d:(a+=d,p=a,a=""),r.push(p);break;case"":a+=n.substring(o,u),a+="\0";break;case"":a+=n.substring(o,u+1);break;default:ge()}o=u+2}return new ze(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="remoteDocuments",fd="owner",Ol="owner",Bh="mutationQueues",iB="userId",Dr="mutations",WI="batchId",po="userMutationsIndex",YI=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(n,e){return[n,An(e)]}function G1(n,e,t){return[n,An(e),t]}const sB={},uu="documentMutations",Hp="remoteDocumentsV14",aB=["prefixPath","collectionGroup","readTime","documentId"],Ep="documentKeyIndex",oB=["prefixPath","collectionGroup","documentId"],$1="collectionGroupIndex",lB=["collectionGroup","readTime","prefixPath","documentId"],zh="remoteDocumentGlobal",tv="remoteDocumentGlobalKey",cu="targets",K1="queryTargetsIndex",uB=["canonicalId","targetId"],hu="targetDocuments",cB=["targetId","path"],EE="documentTargetsIndex",hB=["path","targetId"],Gp="targetGlobalKey",To="targetGlobal",Fh="collectionParents",dB=["collectionId","parent"],du="clientMetadata",fB="clientId",xm="bundles",pB="bundleId",Dm="namedQueries",mB="name",TE="indexConfiguration",gB="indexId",nv="collectionGroupIndex",_B="collectionGroup",$p="indexState",yB=["indexId","uid"],Q1="sequenceNumberIndex",vB=["uid","sequenceNumber"],Kp="indexEntries",EB=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],W1="documentKeyIndex",TB=["indexId","uid","orderedDocumentKey"],Pm="documentOverlays",wB=["userId","collectionPath","documentId"],rv="collectionPathOverlayIndex",bB=["userId","collectionPath","largestBatchId"],Y1="collectionGroupOverlayIndex",IB=["userId","collectionGroup","largestBatchId"],wE="globals",AB="name",X1=[Bh,Dr,uu,so,cu,fd,To,hu,du,zh,Fh,xm,Dm],SB=[...X1,Pm],Z1=[Bh,Dr,uu,Hp,cu,fd,To,hu,du,zh,Fh,xm,Dm,Pm],J1=Z1,bE=[...J1,TE,$p,Kp],RB=bE,CB=[...bE,wE];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv extends j1{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function Zt(n,e){const t=fe(n);return oi.M(t.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ta(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function eC(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){this.comparator=e,this.root=t||gn.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gn.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jf(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jf(this.root,e,this.comparator,!0)}}class Jf{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&a&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gn{constructor(e,t,r,a,o){this.key=e,this.value=t,this.color=r??gn.RED,this.left=a??gn.EMPTY,this.right=o??gn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,o){return new gn(e??this.key,t??this.value,r??this.color,a??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const o=r(e,a.key);return a=o<0?a.copy(null,null,null,a.left.insert(e,t,r),null):o===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return gn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return gn.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}gn.EMPTY=null,gn.RED=!0,gn.BLACK=!1;gn.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,t,r,a,o){return this}insert(e,t,r){return new gn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ZI(this.data.getIterator())}getIteratorFrom(e){return new ZI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(this.comparator(a,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new nt(this.comparator);return t.data=e,t}}class ZI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function kl(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new qn([])}unionWith(e){let t=new nt(pt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ou(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xB(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new tC("Invalid base64 string: "+o):o}}(e);return new xt(t)}static fromUint8Array(e){const t=function(a){let o="";for(let u=0;u<a.length;++u)o+=String.fromCharCode(a[u]);return o}(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const DB=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xi(n){if(ve(!!n),typeof n=="string"){let e=0;const t=DB.exec(n);if(ve(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zi(n){return typeof n=="string"?xt.fromBase64String(n):xt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="server_timestamp",rC="__type__",iC="__previous_value__",sC="__local_write_time__";function Nm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[rC])===null||t===void 0?void 0:t.stringValue)===nC}function Om(n){const e=n.mapValue.fields[iC];return Nm(e)?Om(e):e}function jh(n){const e=Xi(n.mapValue.fields[sC].timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PB{constructor(e,t,r,a,o,u,d,p,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=m}}const sv="(default)";class ua{constructor(e,t){this.projectId=e,this.database=t||sv}static empty(){return new ua("","")}get isDefaultDatabase(){return this.database===sv}isEqual(e){return e instanceof ua&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="__type__",aC="__max__",Xs={mapValue:{fields:{__type__:{stringValue:aC}}}},AE="__vector__",fu="value",Tp={nullValue:"NULL_VALUE"};function ca(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Nm(n)?4:oC(n)?9007199254740991:km(n)?10:11:ge()}function fi(n,e){if(n===e)return!0;const t=ca(n);if(t!==ca(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return jh(n).isEqual(jh(e));case 3:return function(a,o){if(typeof a.timestampValue=="string"&&typeof o.timestampValue=="string"&&a.timestampValue.length===o.timestampValue.length)return a.timestampValue===o.timestampValue;const u=Xi(a.timestampValue),d=Xi(o.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,o){return Zi(a.bytesValue).isEqual(Zi(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,o){return dt(a.geoPointValue.latitude)===dt(o.geoPointValue.latitude)&&dt(a.geoPointValue.longitude)===dt(o.geoPointValue.longitude)}(n,e);case 2:return function(a,o){if("integerValue"in a&&"integerValue"in o)return dt(a.integerValue)===dt(o.integerValue);if("doubleValue"in a&&"doubleValue"in o){const u=dt(a.doubleValue),d=dt(o.doubleValue);return u===d?Uh(u)===Uh(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return ou(n.arrayValue.values||[],e.arrayValue.values||[],fi);case 10:case 11:return function(a,o){const u=a.mapValue.fields||{},d=o.mapValue.fields||{};if(XI(u)!==XI(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!fi(u[p],d[p])))return!1;return!0}(n,e);default:return ge()}}function qh(n,e){return(n.values||[]).find(t=>fi(t,e))!==void 0}function ha(n,e){if(n===e)return 0;const t=ca(n),r=ca(e);if(t!==r)return Re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(n.booleanValue,e.booleanValue);case 2:return function(o,u){const d=dt(o.integerValue||o.doubleValue),p=dt(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return JI(n.timestampValue,e.timestampValue);case 4:return JI(jh(n),jh(e));case 5:return Jy(n.stringValue,e.stringValue);case 6:return function(o,u){const d=Zi(o),p=Zi(u);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(o,u){const d=o.split("/"),p=u.split("/");for(let m=0;m<d.length&&m<p.length;m++){const y=Re(d[m],p[m]);if(y!==0)return y}return Re(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,u){const d=Re(dt(o.latitude),dt(u.latitude));return d!==0?d:Re(dt(o.longitude),dt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return eA(n.arrayValue,e.arrayValue);case 10:return function(o,u){var d,p,m,y;const v=o.fields||{},w=u.fields||{},S=(d=v[fu])===null||d===void 0?void 0:d.arrayValue,D=(p=w[fu])===null||p===void 0?void 0:p.arrayValue,U=Re(((m=S==null?void 0:S.values)===null||m===void 0?void 0:m.length)||0,((y=D==null?void 0:D.values)===null||y===void 0?void 0:y.length)||0);return U!==0?U:eA(S,D)}(n.mapValue,e.mapValue);case 11:return function(o,u){if(o===Xs.mapValue&&u===Xs.mapValue)return 0;if(o===Xs.mapValue)return 1;if(u===Xs.mapValue)return-1;const d=o.fields||{},p=Object.keys(d),m=u.fields||{},y=Object.keys(m);p.sort(),y.sort();for(let v=0;v<p.length&&v<y.length;++v){const w=Jy(p[v],y[v]);if(w!==0)return w;const S=ha(d[p[v]],m[y[v]]);if(S!==0)return S}return Re(p.length,y.length)}(n.mapValue,e.mapValue);default:throw ge()}}function JI(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Re(n,e);const t=Xi(n),r=Xi(e),a=Re(t.seconds,r.seconds);return a!==0?a:Re(t.nanos,r.nanos)}function eA(n,e){const t=n.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const o=ha(t[a],r[a]);if(o)return o}return Re(t.length,r.length)}function pu(n){return av(n)}function av(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xi(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Zi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return he.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",a=!0;for(const o of t.values||[])a?a=!1:r+=",",r+=av(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",o=!0;for(const u of r)o?o=!1:a+=",",a+=`${u}:${av(t.fields[u])}`;return a+"}"}(n.mapValue):ge()}function wp(n){switch(ca(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Om(n);return e?16+wp(e):16;case 5:return 2*n.stringValue.length;case 6:return Zi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,o)=>a+wp(o),0)}(n.arrayValue);case 10:case 11:return function(r){let a=0;return Ta(r.fields,(o,u)=>{a+=o.length+wp(u)}),a}(n.mapValue);default:throw ge()}}function Ao(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ov(n){return!!n&&"integerValue"in n}function Hh(n){return!!n&&"arrayValue"in n}function tA(n){return!!n&&"nullValue"in n}function nA(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bp(n){return!!n&&"mapValue"in n}function km(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[IE])===null||t===void 0?void 0:t.stringValue)===AE}function wh(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ta(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=wh(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=wh(n.arrayValue.values[t]);return e}return Object.assign({},n)}function oC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===aC}const lC={mapValue:{fields:{[IE]:{stringValue:AE},[fu]:{arrayValue:{}}}}};function NB(n){return"nullValue"in n?Tp:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ao(ua.empty(),he.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?km(n)?lC:{mapValue:{}}:ge()}function OB(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ao(ua.empty(),he.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?lC:"mapValue"in n?km(n)?{mapValue:{}}:Xs:ge()}function rA(n,e){const t=ha(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function iA(n,e){const t=ha(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!bp(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wh(t)}setAll(e){let t=pt.emptyPath(),r={},a=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,r,a),r={},a=[],t=d.popLast()}u?r[d.lastSegment()]=wh(u):a.push(d.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,a)}delete(e){const t=this.field(e.popLast());bp(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];bp(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){Ta(t,(a,o)=>e[a]=o);for(const a of r)delete e[a]}clone(){return new _n(wh(this.value))}}function uC(n){const e=[];return Ta(n.fields,(t,r)=>{const a=new pt([t]);if(bp(r)){const o=uC(r.mapValue).fields;if(o.length===0)e.push(a);else for(const u of o)e.push(a.child(u))}else e.push(a)}),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t,r,a,o,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=a,this.createTime=o,this.data=u,this.documentState=d}static newInvalidDocument(e){return new ht(e,0,Te.min(),Te.min(),Te.min(),_n.empty(),0)}static newFoundDocument(e,t,r,a){return new ht(e,1,t,Te.min(),r,a,0)}static newNoDocument(e,t){return new ht(e,2,t,Te.min(),Te.min(),_n.empty(),0)}static newUnknownDocument(e,t){return new ht(e,3,t,Te.min(),Te.min(),_n.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.position=e,this.inclusive=t}}function sA(n,e,t){let r=0;for(let a=0;a<n.position.length;a++){const o=e[a],u=n.position[a];if(o.field.isKeyField()?r=he.comparator(he.fromName(u.referenceValue),t.key):r=ha(u,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function aA(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fi(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,t="asc"){this.field=e,this.dir=t}}function kB(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{}class Fe extends cC{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new VB(e,t,r):t==="array-contains"?new UB(e,r):t==="in"?new gC(e,r):t==="not-in"?new BB(e,r):t==="array-contains-any"?new zB(e,r):new Fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new MB(e,r):new LB(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ha(t,this.value)):t!==null&&ca(this.value)===ca(t)&&this.matchesComparison(ha(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends cC{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new tt(e,t)}matches(e){return mu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function mu(n){return n.op==="and"}function lv(n){return n.op==="or"}function SE(n){return hC(n)&&mu(n)}function hC(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function uv(n){if(n instanceof Fe)return n.field.canonicalString()+n.op.toString()+pu(n.value);if(SE(n))return n.filters.map(e=>uv(e)).join(",");{const e=n.filters.map(t=>uv(t)).join(",");return`${n.op}(${e})`}}function dC(n,e){return n instanceof Fe?function(r,a){return a instanceof Fe&&r.op===a.op&&r.field.isEqual(a.field)&&fi(r.value,a.value)}(n,e):n instanceof tt?function(r,a){return a instanceof tt&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((o,u,d)=>o&&dC(u,a.filters[d]),!0):!1}(n,e):void ge()}function fC(n,e){const t=n.filters.concat(e);return tt.create(t,n.op)}function pC(n){return n instanceof Fe?function(t){return`${t.field.canonicalString()} ${t.op} ${pu(t.value)}`}(n):n instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(pC).join(" ,")+"}"}(n):"Filter"}class VB extends Fe{constructor(e,t,r){super(e,t,r),this.key=he.fromName(r.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class MB extends Fe{constructor(e,t){super(e,"in",t),this.keys=mC("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class LB extends Fe{constructor(e,t){super(e,"not-in",t),this.keys=mC("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function mC(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>he.fromName(r.referenceValue))}class UB extends Fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Hh(t)&&qh(t.arrayValue,this.value)}}class gC extends Fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qh(this.value.arrayValue,t)}}class BB extends Fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(qh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!qh(this.value.arrayValue,t)}}class zB extends Fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Hh(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>qh(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FB{constructor(e,t=null,r=[],a=[],o=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=o,this.startAt=u,this.endAt=d,this.le=null}}function cv(n,e=null,t=[],r=[],a=null,o=null,u=null){return new FB(n,e,t,r,a,o,u)}function So(n){const e=fe(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>uv(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),dd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>pu(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>pu(r)).join(",")),e.le=t}return e.le}function pd(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!kB(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!dC(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!aA(n.startAt,e.startAt)&&aA(n.endAt,e.endAt)}function Qp(n){return he.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Wp(n,e){return n.filters.filter(t=>t instanceof Fe&&t.field.isEqual(e))}function oA(n,e,t){let r=Tp,a=!0;for(const o of Wp(n,e)){let u=Tp,d=!0;switch(o.op){case"<":case"<=":u=NB(o.value);break;case"==":case"in":case">=":u=o.value;break;case">":u=o.value,d=!1;break;case"!=":case"not-in":u=Tp}rA({value:r,inclusive:a},{value:u,inclusive:d})<0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];rA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})<0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}function lA(n,e,t){let r=Xs,a=!0;for(const o of Wp(n,e)){let u=Xs,d=!0;switch(o.op){case">=":case">":u=OB(o.value),d=!1;break;case"==":case"in":case"<=":u=o.value;break;case"<":u=o.value,d=!1;break;case"!=":case"not-in":u=Xs}iA({value:r,inclusive:a},{value:u,inclusive:d})>0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];iA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})>0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t=null,r=[],a=[],o=null,u="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=o,this.limitType=u,this.startAt=d,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function _C(n,e,t,r,a,o,u,d){return new ns(n,e,t,r,a,o,u,d)}function Vu(n){return new ns(n)}function uA(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function RE(n){return n.collectionGroup!==null}function Yl(n){const e=fe(n);if(e.he===null){e.he=[];const t=new Set;for(const o of e.explicitOrderBy)e.he.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new nt(pt.comparator);return u.filters.forEach(p=>{p.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.he.push(new Gh(o,r))}),t.has(pt.keyField().canonicalString())||e.he.push(new Gh(pt.keyField(),r))}return e.he}function Vn(n){const e=fe(n);return e.Pe||(e.Pe=jB(e,Yl(n))),e.Pe}function jB(n,e){if(n.limitType==="F")return cv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const o=a.dir==="desc"?"asc":"desc";return new Gh(a.field,o)});const t=n.endAt?new da(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new da(n.startAt.position,n.startAt.inclusive):null;return cv(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function hv(n,e){const t=n.filters.concat([e]);return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Yp(n,e,t){return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function md(n,e){return pd(Vn(n),Vn(e))&&n.limitType===e.limitType}function yC(n){return`${So(Vn(n))}|lt:${n.limitType}`}function zl(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>pC(a)).join(", ")}]`),dd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>pu(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>pu(a)).join(",")),`Target(${r})`}(Vn(n))}; limitType=${n.limitType})`}function gd(n,e){return e.isFoundDocument()&&function(r,a){const o=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):he.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,a){for(const o of Yl(r))if(!o.field.isKeyField()&&a.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,a){for(const o of r.filters)if(!o.matches(a))return!1;return!0}(n,e)&&function(r,a){return!(r.startAt&&!function(u,d,p){const m=sA(u,d,p);return u.inclusive?m<=0:m<0}(r.startAt,Yl(r),a)||r.endAt&&!function(u,d,p){const m=sA(u,d,p);return u.inclusive?m>=0:m>0}(r.endAt,Yl(r),a))}(n,e)}function vC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function EC(n){return(e,t)=>{let r=!1;for(const a of Yl(n)){const o=qB(a,e,t);if(o!==0)return o;r=r||a.field.isKeyField()}return 0}}function qB(n,e,t){const r=n.field.isKeyField()?he.comparator(e.key,t.key):function(o,u,d){const p=u.data.field(o),m=d.data.field(o);return p!==null&&m!==null?ha(p,m):ge()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ge()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,o]of r)if(this.equalsFn(a,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return void(a[o]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ta(this.inner,(t,r)=>{for(const[a,o]of r)e(a,o)})}isEmpty(){return eC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HB=new lt(he.comparator);function Hn(){return HB}const TC=new lt(he.comparator);function hh(...n){let e=TC;for(const t of n)e=e.insert(t.key,t);return e}function wC(n){let e=TC;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ai(){return bh()}function bC(){return bh()}function bh(){return new rs(n=>n.toString(),(n,e)=>n.isEqual(e))}const GB=new lt(he.comparator),$B=new nt(he.comparator);function Pe(...n){let e=$B;for(const t of n)e=e.add(t);return e}const KB=new nt(Re);function CE(){return KB}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uh(e)?"-0":e}}function IC(n){return{integerValue:""+n}}function AC(n,e){return H1(e)?IC(e):xE(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this._=void 0}}function QB(n,e,t){return n instanceof gu?function(a,o){const u={fields:{[rC]:{stringValue:nC},[sC]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return o&&Nm(o)&&(o=Om(o)),o&&(u.fields[iC]=o),{mapValue:u}}(t,e):n instanceof Ro?RC(n,e):n instanceof Co?CC(n,e):function(a,o){const u=SC(a,o),d=cA(u)+cA(a.Ie);return ov(u)&&ov(a.Ie)?IC(d):xE(a.serializer,d)}(n,e)}function WB(n,e,t){return n instanceof Ro?RC(n,e):n instanceof Co?CC(n,e):t}function SC(n,e){return n instanceof _u?function(r){return ov(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class gu extends Vm{}class Ro extends Vm{constructor(e){super(),this.elements=e}}function RC(n,e){const t=xC(e);for(const r of n.elements)t.some(a=>fi(a,r))||t.push(r);return{arrayValue:{values:t}}}class Co extends Vm{constructor(e){super(),this.elements=e}}function CC(n,e){let t=xC(e);for(const r of n.elements)t=t.filter(a=>!fi(a,r));return{arrayValue:{values:t}}}class _u extends Vm{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function cA(n){return dt(n.integerValue||n.doubleValue)}function xC(n){return Hh(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t){this.field=e,this.transform=t}}function YB(n,e){return n.field.isEqual(e.field)&&function(r,a){return r instanceof Ro&&a instanceof Ro||r instanceof Co&&a instanceof Co?ou(r.elements,a.elements,fi):r instanceof _u&&a instanceof _u?fi(r.Ie,a.Ie):r instanceof gu&&a instanceof gu}(n.transform,e.transform)}class XB{constructor(e,t){this.version=e,this.transformResults=t}}class mt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ip(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Mm{}function DC(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Lu(n.key,mt.none()):new Mu(n.key,n.data,mt.none());{const t=n.data,r=_n.empty();let a=new nt(pt.comparator);for(let o of e.fields)if(!a.has(o)){let u=t.field(o);u===null&&o.length>1&&(o=o.popLast(),u=t.field(o)),u===null?r.delete(o):r.set(o,u),a=a.add(o)}return new is(n.key,r,new qn(a.toArray()),mt.none())}}function ZB(n,e,t){n instanceof Mu?function(a,o,u){const d=a.value.clone(),p=dA(a.fieldTransforms,o,u.transformResults);d.setAll(p),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof is?function(a,o,u){if(!Ip(a.precondition,o))return void o.convertToUnknownDocument(u.version);const d=dA(a.fieldTransforms,o,u.transformResults),p=o.data;p.setAll(PC(a)),p.setAll(d),o.convertToFoundDocument(u.version,p).setHasCommittedMutations()}(n,e,t):function(a,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function Ih(n,e,t,r){return n instanceof Mu?function(o,u,d,p){if(!Ip(o.precondition,u))return d;const m=o.value.clone(),y=fA(o.fieldTransforms,p,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof is?function(o,u,d,p){if(!Ip(o.precondition,u))return d;const m=fA(o.fieldTransforms,p,u),y=u.data;return y.setAll(PC(o)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(o,u,d){return Ip(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function JB(n,e){let t=null;for(const r of n.fieldTransforms){const a=e.data.field(r.field),o=SC(r.transform,a||null);o!=null&&(t===null&&(t=_n.empty()),t.set(r.field,o))}return t||null}function hA(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&ou(r,a,(o,u)=>YB(o,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Mu extends Mm{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class is extends Mm{constructor(e,t,r,a,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function PC(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function dA(n,e,t){const r=new Map;ve(n.length===t.length);for(let a=0;a<t.length;a++){const o=n[a],u=o.transform,d=e.data.field(o.field);r.set(o.field,WB(u,d,t[a]))}return r}function fA(n,e,t){const r=new Map;for(const a of n){const o=a.transform,u=t.data.field(a.field);r.set(a.field,QB(o,u,e))}return r}class Lu extends Mm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DE extends Mm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const o=this.mutations[a];o.key.isEqual(e.key)&&ZB(o,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ih(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ih(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=bC();return this.mutations.forEach(a=>{const o=e.get(a.key),u=o.overlayedDocument;let d=this.applyToLocalView(u,o.mutatedFields);d=t.has(a.key)?null:d;const p=DC(u,d);p!==null&&r.set(a.key,p),u.isValidDocument()||u.convertToNoDocument(Te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&ou(this.mutations,e.mutations,(t,r)=>hA(t,r))&&ou(this.baseMutations,e.baseMutations,(t,r)=>hA(t,r))}}class NE{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){ve(e.mutations.length===r.length);let a=function(){return GB}();const o=e.mutations;for(let u=0;u<o.length;u++)a=a.insert(o[u].key,r[u].version);return new NE(e,t,r,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ez{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jt,$e;function NC(n){switch(n){case K.OK:return ge();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return ge()}}function OC(n){if(n===void 0)return Vt("GRPC error has no .code"),K.UNKNOWN;switch(n){case jt.OK:return K.OK;case jt.CANCELLED:return K.CANCELLED;case jt.UNKNOWN:return K.UNKNOWN;case jt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case jt.INTERNAL:return K.INTERNAL;case jt.UNAVAILABLE:return K.UNAVAILABLE;case jt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case jt.NOT_FOUND:return K.NOT_FOUND;case jt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case jt.ABORTED:return K.ABORTED;case jt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case jt.DATA_LOSS:return K.DATA_LOSS;default:return ge()}}($e=jt||(jt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tz=new ta([4294967295,4294967295],0);function pA(n){const e=_E().encode(n),t=new D1;return t.update(e),new Uint8Array(t.digest())}function mA(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),a=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ta([t,r],0),new ta([a,o],0)]}class kE{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new dh(`Invalid padding: ${t}`);if(r<0)throw new dh(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new dh(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new dh(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=ta.fromNumber(this.Ee)}Ae(e,t,r){let a=e.add(t.multiply(ta.fromNumber(r)));return a.compare(tz)===1&&(a=new ta([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=pA(e),[r,a]=mA(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,a,o);if(!this.Re(u))return!1}return!0}static create(e,t,r){const a=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),u=new kE(o,a,t);return r.forEach(d=>u.insert(d)),u}insert(e){if(this.Ee===0)return;const t=pA(e),[r,a]=mA(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,a,o);this.Ve(u)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class dh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t,r,a,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const a=new Map;return a.set(e,vd.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new yd(Te.min(),a,new lt(Re),Hn(),Pe())}}class vd{constructor(e,t,r,a,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new vd(r,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,t,r,a){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=a}}class kC{constructor(e,t){this.targetId=e,this.ge=t}}class VC{constructor(e,t,r=xt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=a}}class gA{constructor(){this.pe=0,this.ye=_A(),this.we=xt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Pe(),t=Pe(),r=Pe();return this.ye.forEach((a,o)=>{switch(o){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:r=r.add(a);break;default:ge()}}),new vd(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=_A()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ve(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class nz{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Hn(),this.$e=ep(),this.Ue=ep(),this.Ke=new lt(Re)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:ge()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,r=e.ge.count,a=this.Xe(t);if(a){const o=a.target;if(Qp(o))if(r===0){const u=new he(o.path);this.ze(t,u,ht.newNoDocument(u,Te.min()))}else ve(r===1);else{const u=this.et(t);if(u!==r){const d=this.tt(e),p=d?this.nt(d,e,u):1;if(p!==0){this.Ye(t);const m=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,m)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:o=0}=t;let u,d;try{u=Zi(r).toUint8Array()}catch(p){if(p instanceof tC)return di("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new kE(u,a,o)}catch(p){return di(p instanceof dh?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ee===0?null:d}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let a=0;return r.forEach(o=>{const u=this.ke.it(),d=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,o,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((o,u)=>{const d=this.Xe(u);if(d){if(o.current&&Qp(d.target)){const p=new he(d.target.path);this._t(p).has(u)||this.ut(u,p)||this.ze(u,p,ht.newNoDocument(p,e))}o.ve&&(t.set(u,o.Fe()),o.Me())}});let r=Pe();this.Ue.forEach((o,u)=>{let d=!0;u.forEachWhile(p=>{const m=this.Xe(p);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(o))}),this.Qe.forEach((o,u)=>u.setReadTime(e));const a=new yd(e,t,this.Ke,this.Qe,r);return this.Qe=Hn(),this.$e=ep(),this.Ue=ep(),this.Ke=new lt(Re),a}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new gA,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new nt(Re),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new nt(Re),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new gA),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function ep(){return new lt(he.comparator)}function _A(){return new lt(he.comparator)}const rz={asc:"ASCENDING",desc:"DESCENDING"},iz={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sz={and:"AND",or:"OR"};class az{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function dv(n,e){return n.useProto3Json||dd(e)?e:{value:e}}function yu(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function MC(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function oz(n,e){return yu(n,e.toTimestamp())}function Mt(n){return ve(!!n),Te.fromTimestamp(function(t){const r=Xi(t);return new gt(r.seconds,r.nanos)}(n))}function VE(n,e){return fv(n,e).canonicalString()}function fv(n,e){const t=function(a){return new ze(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function LC(n){const e=ze.fromString(n);return ve(KC(e)),e}function $h(n,e){return VE(n.databaseId,e.path)}function li(n,e){const t=LC(e);if(t.get(1)!==n.databaseId.projectId)throw new te(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new te(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new he(zC(t))}function UC(n,e){return VE(n.databaseId,e)}function BC(n){const e=LC(n);return e.length===4?ze.emptyPath():zC(e)}function pv(n){return new ze(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zC(n){return ve(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function yA(n,e,t){return{name:$h(n,e),fields:t.value.mapValue.fields}}function FC(n,e,t){const r=li(n,e.name),a=Mt(e.updateTime),o=e.createTime?Mt(e.createTime):Te.min(),u=new _n({mapValue:{fields:e.fields}}),d=ht.newFoundDocument(r,a,o,u);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function lz(n,e){return"found"in e?function(r,a){ve(!!a.found),a.found.name,a.found.updateTime;const o=li(r,a.found.name),u=Mt(a.found.updateTime),d=a.found.createTime?Mt(a.found.createTime):Te.min(),p=new _n({mapValue:{fields:a.found.fields}});return ht.newFoundDocument(o,u,d,p)}(n,e):"missing"in e?function(r,a){ve(!!a.missing),ve(!!a.readTime);const o=li(r,a.missing),u=Mt(a.readTime);return ht.newNoDocument(o,u)}(n,e):ge()}function uz(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],o=function(m,y){return m.useProto3Json?(ve(y===void 0||typeof y=="string"),xt.fromBase64String(y||"")):(ve(y===void 0||y instanceof Buffer||y instanceof Uint8Array),xt.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(m){const y=m.code===void 0?K.UNKNOWN:OC(m.code);return new te(y,m.message||"")}(u);t=new VC(r,a,o,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=li(n,r.document.name),o=Mt(r.document.updateTime),u=r.document.createTime?Mt(r.document.createTime):Te.min(),d=new _n({mapValue:{fields:r.document.fields}}),p=ht.newFoundDocument(a,o,u,d),m=r.targetIds||[],y=r.removedTargetIds||[];t=new Ap(m,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=li(n,r.document),o=r.readTime?Mt(r.readTime):Te.min(),u=ht.newNoDocument(a,o),d=r.removedTargetIds||[];t=new Ap([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=li(n,r.document),o=r.removedTargetIds||[];t=new Ap([],o,a,null)}else{if(!("filter"in e))return ge();{e.filter;const r=e.filter;r.targetId;const{count:a=0,unchangedNames:o}=r,u=new ez(a,o),d=r.targetId;t=new kC(d,u)}}return t}function Kh(n,e){let t;if(e instanceof Mu)t={update:yA(n,e.key,e.value)};else if(e instanceof Lu)t={delete:$h(n,e.key)};else if(e instanceof is)t={update:yA(n,e.key,e.data),updateMask:mz(e.fieldMask)};else{if(!(e instanceof DE))return ge();t={verify:$h(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,u){const d=u.transform;if(d instanceof gu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Ro)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Co)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof _u)return{fieldPath:u.field.canonicalString(),increment:d.Ie};throw ge()}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,o){return o.updateTime!==void 0?{updateTime:oz(a,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ge()}(n,e.precondition)),t}function mv(n,e){const t=e.currentDocument?function(o){return o.updateTime!==void 0?mt.updateTime(Mt(o.updateTime)):o.exists!==void 0?mt.exists(o.exists):mt.none()}(e.currentDocument):mt.none(),r=e.updateTransforms?e.updateTransforms.map(a=>function(u,d){let p=null;if("setToServerValue"in d)ve(d.setToServerValue==="REQUEST_TIME"),p=new gu;else if("appendMissingElements"in d){const y=d.appendMissingElements.values||[];p=new Ro(y)}else if("removeAllFromArray"in d){const y=d.removeAllFromArray.values||[];p=new Co(y)}else"increment"in d?p=new _u(u,d.increment):ge();const m=pt.fromServerFormat(d.fieldPath);return new _d(m,p)}(n,a)):[];if(e.update){e.update.name;const a=li(n,e.update.name),o=new _n({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=function(p){const m=p.fieldPaths||[];return new qn(m.map(y=>pt.fromServerFormat(y)))}(e.updateMask);return new is(a,o,u,t,r)}return new Mu(a,o,t,r)}if(e.delete){const a=li(n,e.delete);return new Lu(a,t)}if(e.verify){const a=li(n,e.verify);return new DE(a,t)}return ge()}function cz(n,e){return n&&n.length>0?(ve(e!==void 0),n.map(t=>function(a,o){let u=a.updateTime?Mt(a.updateTime):Mt(o);return u.isEqual(Te.min())&&(u=Mt(o)),new XB(u,a.transformResults||[])}(t,e))):[]}function jC(n,e){return{documents:[UC(n,e.path)]}}function qC(n,e){const t={structuredQuery:{}},r=e.path;let a;e.collectionGroup!==null?(a=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=UC(n,a);const o=function(m){if(m.length!==0)return $C(tt.create(m,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const u=function(m){if(m.length!==0)return m.map(y=>function(w){return{field:Fl(w.field),direction:dz(w.dir)}}(y))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=dv(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ht:t,parent:a}}function HC(n){let e=BC(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){ve(r===1);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(v){const w=GC(v);return w instanceof tt&&SE(w)?w.getFilters():[w]}(t.where));let u=[];t.orderBy&&(u=function(v){return v.map(w=>function(D){return new Gh(jl(D.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(v){let w;return w=typeof v=="object"?v.value:v,dd(w)?null:w}(t.limit));let p=null;t.startAt&&(p=function(v){const w=!!v.before,S=v.values||[];return new da(S,w)}(t.startAt));let m=null;return t.endAt&&(m=function(v){const w=!v.before,S=v.values||[];return new da(S,w)}(t.endAt)),_C(e,a,u,o,d,"F",p,m)}function hz(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function GC(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=jl(t.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=jl(t.unaryFilter.field);return Fe.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=jl(t.unaryFilter.field);return Fe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=jl(t.unaryFilter.field);return Fe.create(u,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(n):n.fieldFilter!==void 0?function(t){return Fe.create(jl(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(r=>GC(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return ge()}}(t.compositeFilter.op))}(n):ge()}function dz(n){return rz[n]}function fz(n){return iz[n]}function pz(n){return sz[n]}function Fl(n){return{fieldPath:n.canonicalString()}}function jl(n){return pt.fromServerFormat(n.fieldPath)}function $C(n){return n instanceof Fe?function(t){if(t.op==="=="){if(nA(t.value))return{unaryFilter:{field:Fl(t.field),op:"IS_NAN"}};if(tA(t.value))return{unaryFilter:{field:Fl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nA(t.value))return{unaryFilter:{field:Fl(t.field),op:"IS_NOT_NAN"}};if(tA(t.value))return{unaryFilter:{field:Fl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fl(t.field),op:fz(t.op),value:t.value}}}(n):n instanceof tt?function(t){const r=t.getFilters().map(a=>$C(a));return r.length===1?r[0]:{compositeFilter:{op:pz(t.op),filters:r}}}(n):ge()}function mz(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function KC(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t,r,a,o=Te.min(),u=Te.min(),d=xt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.Tt=e}}function gz(n,e){let t;if(e.document)t=FC(n.Tt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=he.fromSegments(e.noDocument.path),a=Do(e.noDocument.readTime);t=ht.newNoDocument(r,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return ge();{const r=he.fromSegments(e.unknownDocument.path),a=Do(e.unknownDocument.version);t=ht.newUnknownDocument(r,a)}}return e.readTime&&t.setReadTime(function(a){const o=new gt(a[0],a[1]);return Te.fromTimestamp(o)}(e.readTime)),t}function vA(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Xp(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(o,u){return{name:$h(o,u.key),fields:u.data.value.mapValue.fields,updateTime:yu(o,u.version.toTimestamp()),createTime:yu(o,u.createTime.toTimestamp())}}(n.Tt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:xo(e.version)};else{if(!e.isUnknownDocument())return ge();r.unknownDocument={path:t.path.toArray(),version:xo(e.version)}}return r}function Xp(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function xo(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Do(n){const e=new gt(n.seconds,n.nanoseconds);return Te.fromTimestamp(e)}function oo(n,e){const t=(e.baseMutations||[]).map(o=>mv(n.Tt,o));for(let o=0;o<e.mutations.length-1;++o){const u=e.mutations[o];if(o+1<e.mutations.length&&e.mutations[o+1].transform!==void 0){const d=e.mutations[o+1];u.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(o+1,1),++o}}const r=e.mutations.map(o=>mv(n.Tt,o)),a=gt.fromMillis(e.localWriteTimeMs);return new PE(e.batchId,a,t,r)}function fh(n){const e=Do(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Do(n.lastLimboFreeSnapshotVersion):Te.min();let r;return r=function(o){return o.documents!==void 0}(n.query)?function(o){return ve(o.documents.length===1),Vn(Vu(BC(o.documents[0])))}(n.query):function(o){return Vn(HC(o))}(n.query),new Gi(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,xt.fromBase64String(n.resumeToken))}function WC(n,e){const t=xo(e.snapshotVersion),r=xo(e.lastLimboFreeSnapshotVersion);let a;a=Qp(e.target)?jC(n.Tt,e.target):qC(n.Tt,e.target).ht;const o=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:So(e.target),readTime:t,resumeToken:o,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:a}}function ME(n){const e=HC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Yp(e,e.limit,"L"):e}function by(n,e){return new OE(e.largestBatchId,mv(n.Tt,e.overlayMutation))}function EA(n,e){const t=e.path.lastSegment();return[n,An(e.path.popLast()),t]}function TA(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:xo(r.readTime),documentKey:An(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _z{getBundleMetadata(e,t){return wA(e).get(t).next(r=>{if(r)return function(o){return{id:o.bundleId,createTime:Do(o.createTime),version:o.version}}(r)})}saveBundleMetadata(e,t){return wA(e).put(function(a){return{bundleId:a.id,createTime:xo(Mt(a.createTime)),version:a.version}}(t))}getNamedQuery(e,t){return bA(e).get(t).next(r=>{if(r)return function(o){return{name:o.name,query:ME(o.bundledQuery),readTime:Do(o.readTime)}}(r)})}saveNamedQuery(e,t){return bA(e).put(function(a){return{name:a.name,readTime:xo(Mt(a.readTime)),bundledQuery:a.bundledQuery}}(t))}}function wA(n){return Zt(n,xm)}function bA(n){return Zt(n,Dm)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,t){this.serializer=e,this.userId=t}static It(e,t){const r=t.uid||"";return new Lm(e,r)}getOverlay(e,t){return th(e).get(EA(this.userId,t)).next(r=>r?by(this.serializer,r):null)}getOverlays(e,t){const r=ai();return j.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){const a=[];return r.forEach((o,u)=>{const d=new OE(t,u);a.push(this.Et(e,d))}),j.waitFor(a)}removeOverlaysForBatchId(e,t,r){const a=new Set;t.forEach(u=>a.add(An(u.getCollectionPath())));const o=[];return a.forEach(u=>{const d=IDBKeyRange.bound([this.userId,u,r],[this.userId,u,r+1],!1,!0);o.push(th(e).J(rv,d))}),j.waitFor(o)}getOverlaysForCollection(e,t,r){const a=ai(),o=An(t),u=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,Number.POSITIVE_INFINITY],!0);return th(e).G(rv,u).next(d=>{for(const p of d){const m=by(this.serializer,p);a.set(m.getKey(),m)}return a})}getOverlaysForCollectionGroup(e,t,r,a){const o=ai();let u;const d=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return th(e).Z({index:Y1,range:d},(p,m,y)=>{const v=by(this.serializer,m);o.size()<a||v.largestBatchId===u?(o.set(v.getKey(),v),u=v.largestBatchId):y.done()}).next(()=>o)}Et(e,t){return th(e).put(function(a,o,u){const[d,p,m]=EA(o,u.mutation.key);return{userId:o,collectionPath:p,documentId:m,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:Kh(a.Tt,u.mutation)}}(this.serializer,this.userId,t))}}function th(n){return Zt(n,Pm)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yz{dt(e){return Zt(e,wE)}getSessionToken(e){return this.dt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?xt.fromUint8Array(r):xt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(e.booleanValue?1:0);else if("integerValue"in e)this.ft(t,15),t.gt(dt(e.integerValue));else if("doubleValue"in e){const r=dt(e.doubleValue);isNaN(r)?this.ft(t,13):(this.ft(t,15),Uh(r)?t.gt(0):t.gt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ft(t,20),typeof r=="string"&&(r=Xi(r)),t.yt(`${r.seconds||""}`),t.gt(r.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(Zi(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ft(t,45),t.gt(r.latitude||0),t.gt(r.longitude||0)}else"mapValue"in e?oC(e)?this.ft(t,Number.MAX_SAFE_INTEGER):km(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):ge()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){const r=e.fields||{};this.ft(t,55);for(const a of Object.keys(r))this.wt(a,t),this.Rt(r[a],t)}vt(e,t){var r,a;const o=e.fields||{};this.ft(t,53);const u=fu,d=((a=(r=o[u].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.length)||0;this.ft(t,15),t.gt(dt(d)),this.wt(u,t),this.Rt(o[u],t)}Ft(e,t){const r=e.values||[];this.ft(t,50);for(const a of r)this.Rt(a,t)}Dt(e,t){this.ft(t,37),he.fromName(e).path.forEach(r=>{this.ft(t,60),this.Mt(r,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}}lo.xt=new lo;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=255;function vz(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function IA(n){const e=64-function(r){let a=0;for(let o=0;o<8;++o){const u=vz(255&r[o]);if(a+=u,u!==8)break}return a}(n);return Math.ceil(e/8)}class Ez{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Nt(r.value),r=t.next();this.Bt()}Lt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.kt(r.value),r=t.next();this.qt()}Qt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Nt(r);else if(r<2048)this.Nt(960|r>>>6),this.Nt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Nt(480|r>>>12),this.Nt(128|63&r>>>6),this.Nt(128|63&r);else{const a=t.codePointAt(0);this.Nt(240|a>>>18),this.Nt(128|63&a>>>12),this.Nt(128|63&a>>>6),this.Nt(128|63&a)}}this.Bt()}$t(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.kt(r);else if(r<2048)this.kt(960|r>>>6),this.kt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.kt(480|r>>>12),this.kt(128|63&r>>>6),this.kt(128|63&r);else{const a=t.codePointAt(0);this.kt(240|a>>>18),this.kt(128|63&a>>>12),this.kt(128|63&a>>>6),this.kt(128|63&a)}}this.qt()}Ut(e){const t=this.Kt(e),r=IA(t);this.Wt(1+r),this.buffer[this.position++]=255&r;for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=255&t[a]}Gt(e){const t=this.Kt(e),r=IA(t);this.Wt(1+r),this.buffer[this.position++]=~(255&r);for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}zt(){this.jt(Vl),this.jt(255)}Ht(){this.Jt(Vl),this.Jt(255)}reset(){this.position=0}seed(e){this.Wt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Yt(){return this.buffer.slice(0,this.position)}Kt(e){const t=function(o){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,o,!1),new Uint8Array(u.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let a=1;a<t.length;++a)t[a]^=r?255:0;return t}Nt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===Vl?(this.jt(Vl),this.jt(0)):this.jt(t)}kt(e){const t=255&e;t===0?(this.Jt(0),this.Jt(255)):t===Vl?(this.Jt(Vl),this.Jt(0)):this.Jt(e)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(e){this.Wt(1),this.buffer[this.position++]=e}Jt(e){this.Wt(1),this.buffer[this.position++]=~e}Wt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const a=new Uint8Array(r);a.set(this.buffer),this.buffer=a}}class Tz{constructor(e){this.Zt=e}bt(e){this.Zt.Ot(e)}yt(e){this.Zt.Qt(e)}gt(e){this.Zt.Ut(e)}Vt(){this.Zt.zt()}}class wz{constructor(e){this.Zt=e}bt(e){this.Zt.Lt(e)}yt(e){this.Zt.$t(e)}gt(e){this.Zt.Gt(e)}Vt(){this.Zt.Ht()}}class nh{constructor(){this.Zt=new Ez,this.Xt=new Tz(this.Zt),this.en=new wz(this.Zt)}seed(e){this.Zt.seed(e)}tn(e){return e===0?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t,r,a){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=a}nn(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new uo(this.indexId,this.documentKey,this.arrayValue,r)}}function Hs(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=AA(n.arrayValue,e.arrayValue),t!==0?t:(t=AA(n.directionalValue,e.directionalValue),t!==0?t:he.comparator(n.documentKey,e.documentKey)))}function AA(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.rn=new nt((t,r)=>pt.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.sn=e.orderBy,this._n=[];for(const t of e.filters){const r=t;r.isInequality()?this.rn=this.rn.add(r):this._n.push(r)}}get an(){return this.rn.size>1}un(e){if(ve(e.collectionGroup===this.collectionId),this.an)return!1;const t=ev(e);if(t!==void 0&&!this.cn(t))return!1;const r=io(e);let a=new Set,o=0,u=0;for(;o<r.length&&this.cn(r[o]);++o)a=a.add(r[o].fieldPath.canonicalString());if(o===r.length)return!0;if(this.rn.size>0){const d=this.rn.getIterator().getNext();if(!a.has(d.field.canonicalString())){const p=r[o];if(!this.ln(d,p)||!this.hn(this.sn[u++],p))return!1}++o}for(;o<r.length;++o){const d=r[o];if(u>=this.sn.length||!this.hn(this.sn[u++],d))return!1}return!0}Pn(){if(this.an)return null;let e=new nt(pt.comparator);const t=[];for(const r of this._n)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new yp(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new yp(r.field,0))}for(const r of this.sn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new yp(r.field,r.dir==="asc"?0:1)));return new jp(jp.UNKNOWN_ID,this.collectionId,t,Lh.empty())}cn(e){for(const t of this._n)if(this.ln(t,e))return!0;return!1}ln(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}hn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(n){var e,t;if(ve(n instanceof Fe||n instanceof tt),n instanceof Fe){if(n instanceof gC){const a=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(o=>Fe.create(n.field,"==",o)))||[];return tt.create(a,"or")}return n}const r=n.filters.map(a=>YC(a));return tt.create(r,n.op)}function bz(n){if(n.getFilters().length===0)return[];const e=yv(YC(n));return ve(XC(e)),gv(e)||_v(e)?[e]:e.getFilters()}function gv(n){return n instanceof Fe}function _v(n){return n instanceof tt&&SE(n)}function XC(n){return gv(n)||_v(n)||function(t){if(t instanceof tt&&lv(t)){for(const r of t.getFilters())if(!gv(r)&&!_v(r))return!1;return!0}return!1}(n)}function yv(n){if(ve(n instanceof Fe||n instanceof tt),n instanceof Fe)return n;if(n.filters.length===1)return yv(n.filters[0]);const e=n.filters.map(r=>yv(r));let t=tt.create(e,n.op);return t=Zp(t),XC(t)?t:(ve(t instanceof tt),ve(mu(t)),ve(t.filters.length>1),t.filters.reduce((r,a)=>LE(r,a)))}function LE(n,e){let t;return ve(n instanceof Fe||n instanceof tt),ve(e instanceof Fe||e instanceof tt),t=n instanceof Fe?e instanceof Fe?function(a,o){return tt.create([a,o],"and")}(n,e):RA(n,e):e instanceof Fe?RA(e,n):function(a,o){if(ve(a.filters.length>0&&o.filters.length>0),mu(a)&&mu(o))return fC(a,o.getFilters());const u=lv(a)?a:o,d=lv(a)?o:a,p=u.filters.map(m=>LE(m,d));return tt.create(p,"or")}(n,e),Zp(t)}function RA(n,e){if(mu(e))return fC(e,n.getFilters());{const t=e.filters.map(r=>LE(n,r));return tt.create(t,"or")}}function Zp(n){if(ve(n instanceof Fe||n instanceof tt),n instanceof Fe)return n;const e=n.getFilters();if(e.length===1)return Zp(e[0]);if(hC(n))return n;const t=e.map(a=>Zp(a)),r=[];return t.forEach(a=>{a instanceof Fe?r.push(a):a instanceof tt&&(a.op===n.op?r.push(...a.filters):r.push(a))}),r.length===1?r[0]:tt.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iz{constructor(){this.Tn=new UE}addToCollectionParentIndex(e,t){return this.Tn.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(nr.min())}updateCollectionGroup(e,t,r){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class UE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new nt(ze.comparator),o=!a.has(r);return this.index[t]=a.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new nt(ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="IndexedDbIndexManager",tp=new Uint8Array(0);class Az{constructor(e,t){this.databaseId=t,this.In=new UE,this.En=new rs(r=>So(r),(r,a)=>pd(r,a)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.In.has(t)){const r=t.lastSegment(),a=t.popLast();e.addOnCommittedListener(()=>{this.In.add(t)});const o={collectionId:r,parent:An(a)};return xA(e).put(o)}return j.resolve()}getCollectionParents(e,t){const r=[],a=IDBKeyRange.bound([t,""],[U1(t),""],!1,!0);return xA(e).G(a).next(o=>{for(const u of o){if(u.collectionId!==t)break;r.push(si(u.parent))}return r})}addFieldIndex(e,t){const r=rh(e),a=function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map(p=>[p.fieldPath.canonicalString(),p.kind])}}(t);delete a.indexId;const o=r.add(a);if(t.indexState){const u=Ll(e);return o.next(d=>{u.put(TA(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return o.next()}deleteFieldIndex(e,t){const r=rh(e),a=Ll(e),o=Ml(e);return r.delete(t.indexId).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=rh(e),r=Ml(e),a=Ll(e);return t.J().next(()=>r.J()).next(()=>a.J())}createTargetIndexes(e,t){return j.forEach(this.dn(t),r=>this.getIndexType(e,r).next(a=>{if(a===0||a===1){const o=new SA(r).Pn();if(o!=null)return this.addFieldIndex(e,o)}}))}getDocumentsMatchingTarget(e,t){const r=Ml(e);let a=!0;const o=new Map;return j.forEach(this.dn(t),u=>this.An(e,u).next(d=>{a&&(a=!!d),o.set(u,d)})).next(()=>{if(a){let u=Pe();const d=[];return j.forEach(o,(p,m)=>{re(CA,`Using index ${function($){return`id=${$.indexId}|cg=${$.collectionGroup}|f=${$.fields.map(oe=>`${oe.fieldPath}:${oe.kind}`).join(",")}`}(p)} to execute ${So(t)}`);const y=function($,oe){const ae=ev(oe);if(ae===void 0)return null;for(const le of Wp($,ae.fieldPath))switch(le.op){case"array-contains-any":return le.value.arrayValue.values||[];case"array-contains":return[le.value]}return null}(m,p),v=function($,oe){const ae=new Map;for(const le of io(oe))for(const x of Wp($,le.fieldPath))switch(x.op){case"==":case"in":ae.set(le.fieldPath.canonicalString(),x.value);break;case"not-in":case"!=":return ae.set(le.fieldPath.canonicalString(),x.value),Array.from(ae.values())}return null}(m,p),w=function($,oe){const ae=[];let le=!0;for(const x of io(oe)){const R=x.kind===0?oA($,x.fieldPath,$.startAt):lA($,x.fieldPath,$.startAt);ae.push(R.value),le&&(le=R.inclusive)}return new da(ae,le)}(m,p),S=function($,oe){const ae=[];let le=!0;for(const x of io(oe)){const R=x.kind===0?lA($,x.fieldPath,$.endAt):oA($,x.fieldPath,$.endAt);ae.push(R.value),le&&(le=R.inclusive)}return new da(ae,le)}(m,p),D=this.Rn(p,m,w),U=this.Rn(p,m,S),L=this.Vn(p,m,v),H=this.mn(p.indexId,y,D,w.inclusive,U,S.inclusive,L);return j.forEach(H,W=>r.H(W,t.limit).next($=>{$.forEach(oe=>{const ae=he.fromSegments(oe.documentKey);u.has(ae)||(u=u.add(ae),d.push(ae))})}))}).next(()=>d)}return j.resolve(null)})}dn(e){let t=this.En.get(e);return t||(e.filters.length===0?t=[e]:t=bz(tt.create(e.filters,"and")).map(r=>cv(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.En.set(e,t),t)}mn(e,t,r,a,o,u,d){const p=(t!=null?t.length:1)*Math.max(r.length,o.length),m=p/(t!=null?t.length:1),y=[];for(let v=0;v<p;++v){const w=t?this.fn(t[v/m]):tp,S=this.gn(e,w,r[v%m],a),D=this.pn(e,w,o[v%m],u),U=d.map(L=>this.gn(e,w,L,!0));y.push(...this.createRange(S,D,U))}return y}gn(e,t,r,a){const o=new uo(e,he.empty(),t,r);return a?o:o.nn()}pn(e,t,r,a){const o=new uo(e,he.empty(),t,r);return a?o.nn():o}An(e,t){const r=new SA(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next(o=>{let u=null;for(const d of o)r.un(d)&&(!u||d.fields.length>u.fields.length)&&(u=d);return u})}getIndexType(e,t){let r=2;const a=this.dn(t);return j.forEach(a,o=>this.An(e,o).next(u=>{u?r!==0&&u.fields.length<function(p){let m=new nt(pt.comparator),y=!1;for(const v of p.filters)for(const w of v.getFlattenedFilters())w.field.isKeyField()||(w.op==="array-contains"||w.op==="array-contains-any"?y=!0:m=m.add(w.field));for(const v of p.orderBy)v.field.isKeyField()||(m=m.add(v.field));return m.size+(y?1:0)}(o)&&(r=1):r=0})).next(()=>function(u){return u.limit!==null}(t)&&a.length>1&&r===2?1:r)}yn(e,t){const r=new nh;for(const a of io(e)){const o=t.data.field(a.fieldPath);if(o==null)return null;const u=r.tn(a.kind);lo.xt.At(o,u)}return r.Yt()}fn(e){const t=new nh;return lo.xt.At(e,t.tn(0)),t.Yt()}wn(e,t){const r=new nh;return lo.xt.At(Ao(this.databaseId,t),r.tn(function(o){const u=io(o);return u.length===0?0:u[u.length-1].kind}(e))),r.Yt()}Vn(e,t,r){if(r===null)return[];let a=[];a.push(new nh);let o=0;for(const u of io(e)){const d=r[o++];for(const p of a)if(this.Sn(t,u.fieldPath)&&Hh(d))a=this.bn(a,u,d);else{const m=p.tn(u.kind);lo.xt.At(d,m)}}return this.Dn(a)}Rn(e,t,r){return this.Vn(e,t,r.position)}Dn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Yt();return t}bn(e,t,r){const a=[...e],o=[];for(const u of r.arrayValue.values||[])for(const d of a){const p=new nh;p.seed(d.Yt()),lo.xt.At(u,p.tn(t.kind)),o.push(p)}return o}Sn(e,t){return!!e.filters.find(r=>r instanceof Fe&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=rh(e),a=Ll(e);return(t?r.G(nv,IDBKeyRange.bound(t,t)):r.G()).next(o=>{const u=[];return j.forEach(o,d=>a.get([d.indexId,this.uid]).next(p=>{u.push(function(y,v){const w=v?new Lh(v.sequenceNumber,new nr(Do(v.readTime),new he(si(v.documentKey)),v.largestBatchId)):Lh.empty(),S=y.fields.map(([D,U])=>new yp(pt.fromServerFormat(D),U));return new jp(y.indexId,y.collectionGroup,S,w)}(d,p))})).next(()=>u)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,a)=>{const o=r.indexState.sequenceNumber-a.indexState.sequenceNumber;return o!==0?o:Re(r.collectionGroup,a.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const a=rh(e),o=Ll(e);return this.vn(e).next(u=>a.G(nv,IDBKeyRange.bound(t,t)).next(d=>j.forEach(d,p=>o.put(TA(p.indexId,this.uid,u,r)))))}updateIndexEntries(e,t){const r=new Map;return j.forEach(t,(a,o)=>{const u=r.get(a.collectionGroup);return(u?j.resolve(u):this.getFieldIndexes(e,a.collectionGroup)).next(d=>(r.set(a.collectionGroup,d),j.forEach(d,p=>this.Cn(e,a,p).next(m=>{const y=this.Fn(o,p);return m.isEqual(y)?j.resolve():this.Mn(e,o,p,m,y)}))))})}xn(e,t,r,a){return Ml(e).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.wn(r,t.key),documentKey:t.key.path.toArray()})}On(e,t,r,a){return Ml(e).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.wn(r,t.key),t.key.path.toArray()])}Cn(e,t,r){const a=Ml(e);let o=new nt(Hs);return a.Z({index:W1,range:IDBKeyRange.only([r.indexId,this.uid,this.wn(r,t)])},(u,d)=>{o=o.add(new uo(r.indexId,t,d.arrayValue,d.directionalValue))}).next(()=>o)}Fn(e,t){let r=new nt(Hs);const a=this.yn(t,e);if(a==null)return r;const o=ev(t);if(o!=null){const u=e.data.field(o.fieldPath);if(Hh(u))for(const d of u.arrayValue.values||[])r=r.add(new uo(t.indexId,e.key,this.fn(d),a))}else r=r.add(new uo(t.indexId,e.key,tp,a));return r}Mn(e,t,r,a,o){re(CA,"Updating index entries for document '%s'",t.key);const u=[];return function(p,m,y,v,w){const S=p.getIterator(),D=m.getIterator();let U=kl(S),L=kl(D);for(;U||L;){let H=!1,W=!1;if(U&&L){const $=y(U,L);$<0?W=!0:$>0&&(H=!0)}else U!=null?W=!0:H=!0;H?(v(L),L=kl(D)):W?(w(U),U=kl(S)):(U=kl(S),L=kl(D))}}(a,o,Hs,d=>{u.push(this.xn(e,t,r,d))},d=>{u.push(this.On(e,t,r,d))}),j.waitFor(u)}vn(e){let t=1;return Ll(e).Z({index:Q1,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,a,o)=>{o.done(),t=a.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((u,d)=>Hs(u,d)).filter((u,d,p)=>!d||Hs(u,p[d-1])!==0);const a=[];a.push(e);for(const u of r){const d=Hs(u,e),p=Hs(u,t);if(d===0)a[0]=e.nn();else if(d>0&&p<0)a.push(u),a.push(u.nn());else if(p>0)break}a.push(t);const o=[];for(let u=0;u<a.length;u+=2){if(this.Nn(a[u],a[u+1]))return[];const d=[a[u].indexId,this.uid,a[u].arrayValue,a[u].directionalValue,tp,[]],p=[a[u+1].indexId,this.uid,a[u+1].arrayValue,a[u+1].directionalValue,tp,[]];o.push(IDBKeyRange.bound(d,p))}return o}Nn(e,t){return Hs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(DA)}getMinOffset(e,t){return j.mapArray(this.dn(t),r=>this.An(e,r).next(a=>a||ge())).next(DA)}}function xA(n){return Zt(n,Fh)}function Ml(n){return Zt(n,Kp)}function rh(n){return Zt(n,TE)}function Ll(n){return Zt(n,$p)}function DA(n){ve(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const a=n[r].indexState.offset;yE(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new nr(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ZC=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(n,e,t){const r=n.store(Dr),a=n.store(uu),o=[],u=IDBKeyRange.only(t.batchId);let d=0;const p=r.Z({range:u},(y,v,w)=>(d++,w.delete()));o.push(p.next(()=>{ve(d===1)}));const m=[];for(const y of t.mutations){const v=G1(e,y.key.path,t.batchId);o.push(a.delete(v)),m.push(y.key)}return j.waitFor(o).next(()=>m)}function Jp(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw ge();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(ZC,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);class Um{constructor(e,t,r,a){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=a,this.Bn={}}static It(e,t,r,a){ve(e.uid!=="");const o=e.isAuthenticated()?e.uid:"";return new Um(o,t,r,a)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Gs(e).Z({index:po,range:r},(a,o,u)=>{t=!1,u.done()}).next(()=>t)}addMutationBatch(e,t,r,a){const o=ql(e),u=Gs(e);return u.add({}).next(d=>{ve(typeof d=="number");const p=new PE(d,t,r,a),m=function(S,D,U){const L=U.baseMutations.map(W=>Kh(S.Tt,W)),H=U.mutations.map(W=>Kh(S.Tt,W));return{userId:D,batchId:U.batchId,localWriteTimeMs:U.localWriteTime.toMillis(),baseMutations:L,mutations:H}}(this.serializer,this.userId,p),y=[];let v=new nt((w,S)=>Re(w.canonicalString(),S.canonicalString()));for(const w of a){const S=G1(this.userId,w.key.path,d);v=v.add(w.key.path.popLast()),y.push(u.put(m)),y.push(o.put(S,sB))}return v.forEach(w=>{y.push(this.indexManager.addToCollectionParentIndex(e,w))}),e.addOnCommittedListener(()=>{this.Bn[d]=p.keys()}),j.waitFor(y).next(()=>p)})}lookupMutationBatch(e,t){return Gs(e).get(t).next(r=>r?(ve(r.userId===this.userId),oo(this.serializer,r)):null)}Ln(e,t){return this.Bn[t]?j.resolve(this.Bn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const a=r.keys();return this.Bn[t]=a,a}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=IDBKeyRange.lowerBound([this.userId,r]);let o=null;return Gs(e).Z({index:po,range:a},(u,d,p)=>{d.userId===this.userId&&(ve(d.batchId>=r),o=oo(this.serializer,d)),p.done()}).next(()=>o)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=na;return Gs(e).Z({index:po,range:t,reverse:!0},(a,o,u)=>{r=o.batchId,u.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,na],[this.userId,Number.POSITIVE_INFINITY]);return Gs(e).G(po,t).next(r=>r.map(a=>oo(this.serializer,a)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=vp(this.userId,t.path),a=IDBKeyRange.lowerBound(r),o=[];return ql(e).Z({range:a},(u,d,p)=>{const[m,y,v]=u,w=si(y);if(m===this.userId&&t.path.isEqual(w))return Gs(e).get(v).next(S=>{if(!S)throw ge();ve(S.userId===this.userId),o.push(oo(this.serializer,S))});p.done()}).next(()=>o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Re);const a=[];return t.forEach(o=>{const u=vp(this.userId,o.path),d=IDBKeyRange.lowerBound(u),p=ql(e).Z({range:d},(m,y,v)=>{const[w,S,D]=m,U=si(S);w===this.userId&&o.path.isEqual(U)?r=r.add(D):v.done()});a.push(p)}),j.waitFor(a).next(()=>this.kn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1,o=vp(this.userId,r),u=IDBKeyRange.lowerBound(o);let d=new nt(Re);return ql(e).Z({range:u},(p,m,y)=>{const[v,w,S]=p,D=si(w);v===this.userId&&r.isPrefixOf(D)?D.length===a&&(d=d.add(S)):y.done()}).next(()=>this.kn(e,d))}kn(e,t){const r=[],a=[];return t.forEach(o=>{a.push(Gs(e).get(o).next(u=>{if(u===null)throw ge();ve(u.userId===this.userId),r.push(oo(this.serializer,u))}))}),j.waitFor(a).next(()=>r)}removeMutationBatch(e,t){return JC(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.qn(t.batchId)}),j.forEach(r,a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))}qn(e){delete this.Bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return j.resolve();const r=IDBKeyRange.lowerBound(function(u){return[u]}(this.userId)),a=[];return ql(e).Z({range:r},(o,u,d)=>{if(o[0]===this.userId){const p=si(o[1]);a.push(p)}else d.done()}).next(()=>{ve(a.length===0)})})}containsKey(e,t){return ex(e,this.userId,t)}Qn(e){return tx(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:na,lastStreamToken:""})}}function ex(n,e,t){const r=vp(e,t.path),a=r[1],o=IDBKeyRange.lowerBound(r);let u=!1;return ql(n).Z({range:o,Y:!0},(d,p,m)=>{const[y,v,w]=d;y===e&&v===a&&(u=!0),m.done()}).next(()=>u)}function Gs(n){return Zt(n,Dr)}function ql(n){return Zt(n,uu)}function tx(n){return Zt(n,Bh)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Po(0)}static Kn(){return new Po(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sz{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Wn(e).next(t=>{const r=new Po(t.highestTargetId);return t.highestTargetId=r.next(),this.Gn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Wn(e).next(t=>Te.fromTimestamp(new gt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Wn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Wn(e).next(a=>(a.highestListenSequenceNumber=t,r&&(a.lastRemoteSnapshotVersion=r.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this.Gn(e,a)))}addTargetData(e,t){return this.zn(e,t).next(()=>this.Wn(e).next(r=>(r.targetCount+=1,this.jn(t,r),this.Gn(e,r))))}updateTargetData(e,t){return this.zn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ul(e).delete(t.targetId)).next(()=>this.Wn(e)).next(r=>(ve(r.targetCount>0),r.targetCount-=1,this.Gn(e,r)))}removeTargets(e,t,r){let a=0;const o=[];return Ul(e).Z((u,d)=>{const p=fh(d);p.sequenceNumber<=t&&r.get(p.targetId)===null&&(a++,o.push(this.removeTargetData(e,p)))}).next(()=>j.waitFor(o)).next(()=>a)}forEachTarget(e,t){return Ul(e).Z((r,a)=>{const o=fh(a);t(o)})}Wn(e){return NA(e).get(Gp).next(t=>(ve(t!==null),t))}Gn(e,t){return NA(e).put(Gp,t)}zn(e,t){return Ul(e).put(WC(this.serializer,t))}jn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Wn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=So(t),a=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let o=null;return Ul(e).Z({range:a,index:K1},(u,d,p)=>{const m=fh(d);pd(t,m.target)&&(o=m,p.done())}).next(()=>o)}addMatchingKeys(e,t,r){const a=[],o=Ws(e);return t.forEach(u=>{const d=An(u.path);a.push(o.put({targetId:r,path:d})),a.push(this.referenceDelegate.addReference(e,r,u))}),j.waitFor(a)}removeMatchingKeys(e,t,r){const a=Ws(e);return j.forEach(t,o=>{const u=An(o.path);return j.waitFor([a.delete([r,u]),this.referenceDelegate.removeReference(e,r,o)])})}removeMatchingKeysForTargetId(e,t){const r=Ws(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(a)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),a=Ws(e);let o=Pe();return a.Z({range:r,Y:!0},(u,d,p)=>{const m=si(u[1]),y=new he(m);o=o.add(y)}).next(()=>o)}containsKey(e,t){const r=An(t.path),a=IDBKeyRange.bound([r],[U1(r)],!1,!0);let o=0;return Ws(e).Z({index:EE,Y:!0,range:a},([u,d],p,m)=>{u!==0&&(o++,m.done())}).next(()=>o>0)}lt(e,t){return Ul(e).get(t).next(r=>r?fh(r):null)}}function Ul(n){return Zt(n,cu)}function NA(n){return Zt(n,To)}function Ws(n){return Zt(n,hu)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA="LruGarbageCollector",Rz=1048576;function kA([n,e],[t,r]){const a=Re(n,t);return a===0?Re(e,r):a}class Cz{constructor(e){this.Hn=e,this.buffer=new nt(kA),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();kA(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class nx{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){re(OA,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ea(t)?re(OA,"Ignoring IndexedDB error during garbage collection: ",t):await va(t)}await this.er(3e5)})}}class xz{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return j.resolve(jn.ae);const r=new Cz(t);return this.tr.forEachTarget(e,a=>r.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>r.Zn(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(PA)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),PA):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,a,o,u,d,p,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),a=this.params.maximumSequenceNumbersToCollect):a=v,u=Date.now(),this.nthSequenceNumber(e,a))).next(v=>(r=v,d=Date.now(),this.removeTargets(e,r,t))).next(v=>(o=v,p=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(m=Date.now(),Bl()<=Be.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${a} in `+(d-u)+`ms
	Removed ${o} targets in `+(p-d)+`ms
	Removed ${v} documents in `+(m-p)+`ms
Total Duration: ${m-y}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:o,documentsRemoved:v})))}}function rx(n,e){return new xz(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dz{constructor(e,t){this.db=e,this.garbageCollector=rx(this,t)}nr(e){const t=this.sr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}rr(e,t){return this._r(e,(r,a)=>t(a))}addReference(e,t,r){return np(e,r)}removeReference(e,t,r){return np(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return np(e,t)}ar(e,t){return function(a,o){let u=!1;return tx(a).X(d=>ex(a,d,o).next(p=>(p&&(u=!0),j.resolve(!p)))).next(()=>u)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let o=0;return this._r(e,(u,d)=>{if(d<=t){const p=this.ar(e,u).next(m=>{if(!m)return o++,r.getEntry(e,u).next(()=>(r.removeEntry(u,Te.min()),Ws(e).delete(function(v){return[0,An(v.path)]}(u))))});a.push(p)}}).next(()=>j.waitFor(a)).next(()=>r.apply(e)).next(()=>o)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return np(e,t)}_r(e,t){const r=Ws(e);let a,o=jn.ae;return r.Z({index:EE},([u,d],{path:p,sequenceNumber:m})=>{u===0?(o!==jn.ae&&t(new he(si(a)),o),o=m,a=p):o=jn.ae}).next(()=>{o!==jn.ae&&t(new he(si(a)),o)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function np(n,e){return Ws(n).put(function(r,a){return{targetId:0,path:An(r.path),sequenceNumber:a}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(){this.changes=new rs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?j.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pz{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return no(e).put(r)}removeEntry(e,t,r){return no(e).delete(function(o,u){const d=o.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],Xp(u),d[d.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.ur(e,r)))}getEntry(e,t){let r=ht.newInvalidDocument(t);return no(e).Z({index:Ep,range:IDBKeyRange.only(ih(t))},(a,o)=>{r=this.cr(t,o)}).next(()=>r)}lr(e,t){let r={size:0,document:ht.newInvalidDocument(t)};return no(e).Z({index:Ep,range:IDBKeyRange.only(ih(t))},(a,o)=>{r={document:this.cr(t,o),size:Jp(o)}}).next(()=>r)}getEntries(e,t){let r=Hn();return this.hr(e,t,(a,o)=>{const u=this.cr(a,o);r=r.insert(a,u)}).next(()=>r)}Pr(e,t){let r=Hn(),a=new lt(he.comparator);return this.hr(e,t,(o,u)=>{const d=this.cr(o,u);r=r.insert(o,d),a=a.insert(o,Jp(u))}).next(()=>({documents:r,Tr:a}))}hr(e,t,r){if(t.isEmpty())return j.resolve();let a=new nt(LA);t.forEach(p=>a=a.add(p));const o=IDBKeyRange.bound(ih(a.first()),ih(a.last())),u=a.getIterator();let d=u.getNext();return no(e).Z({index:Ep,range:o},(p,m,y)=>{const v=he.fromSegments([...m.prefixPath,m.collectionGroup,m.documentId]);for(;d&&LA(d,v)<0;)r(d,null),d=u.getNext();d&&d.isEqual(v)&&(r(d,m),d=u.hasNext()?u.getNext():null),d?y.W(ih(d)):y.done()}).next(()=>{for(;d;)r(d,null),d=u.hasNext()?u.getNext():null})}getDocumentsMatchingQuery(e,t,r,a,o){const u=t.path,d=[u.popLast().toArray(),u.lastSegment(),Xp(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],p=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return no(e).G(IDBKeyRange.bound(d,p,!0)).next(m=>{o==null||o.incrementDocumentReadCount(m.length);let y=Hn();for(const v of m){const w=this.cr(he.fromSegments(v.prefixPath.concat(v.collectionGroup,v.documentId)),v);w.isFoundDocument()&&(gd(t,w)||a.has(w.key))&&(y=y.insert(w.key,w))}return y})}getAllFromCollectionGroup(e,t,r,a){let o=Hn();const u=MA(t,r),d=MA(t,nr.max());return no(e).Z({index:$1,range:IDBKeyRange.bound(u,d,!0)},(p,m,y)=>{const v=this.cr(he.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);o=o.insert(v.key,v),o.size===a&&y.done()}).next(()=>o)}newChangeBuffer(e){return new Nz(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return VA(e).get(tv).next(t=>(ve(!!t),t))}ur(e,t){return VA(e).put(tv,t)}cr(e,t){if(t){const r=gz(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Te.min())))return r}return ht.newInvalidDocument(e)}}function sx(n){return new Pz(n)}class Nz extends ix{constructor(e,t){super(),this.Ir=e,this.trackRemovals=t,this.Er=new rs(r=>r.toString(),(r,a)=>r.isEqual(a))}applyChanges(e){const t=[];let r=0,a=new nt((o,u)=>Re(o.canonicalString(),u.canonicalString()));return this.changes.forEach((o,u)=>{const d=this.Er.get(o);if(t.push(this.Ir.removeEntry(e,o,d.readTime)),u.isValidDocument()){const p=vA(this.Ir.serializer,u);a=a.add(o.path.popLast());const m=Jp(p);r+=m-d.size,t.push(this.Ir.addEntry(e,o,p))}else if(r-=d.size,this.trackRemovals){const p=vA(this.Ir.serializer,u.convertToNoDocument(Te.min()));t.push(this.Ir.addEntry(e,o,p))}}),a.forEach(o=>{t.push(this.Ir.indexManager.addToCollectionParentIndex(e,o))}),t.push(this.Ir.updateMetadata(e,r)),j.waitFor(t)}getFromCache(e,t){return this.Ir.lr(e,t).next(r=>(this.Er.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Ir.Pr(e,t).next(({documents:r,Tr:a})=>(a.forEach((o,u)=>{this.Er.set(o,{size:u,readTime:r.get(o).readTime})}),r))}}function VA(n){return Zt(n,zh)}function no(n){return Zt(n,Hp)}function ih(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function MA(n,e){const t=e.documentKey.path.toArray();return[n,Xp(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function LA(n,e){const t=n.path.toArray(),r=e.path.toArray();let a=0;for(let o=0;o<t.length-2&&o<r.length-2;++o)if(a=Re(t[o],r[o]),a)return a;return a=Re(t.length,r.length),a||(a=Re(t[t.length-2],r[r.length-2]),a||Re(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oz{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&Ih(r.mutation,a,qn.empty(),gt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Pe()){const a=ai();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(o=>{let u=hh();return o.forEach((d,p)=>{u=u.insert(d,p.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=ai();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Pe()))}populateOverlays(e,t,r){const a=[];return r.forEach(o=>{t.has(o)||a.push(o)}),this.documentOverlayCache.getOverlays(e,a).next(o=>{o.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,r,a){let o=Hn();const u=bh(),d=function(){return bh()}();return t.forEach((p,m)=>{const y=r.get(m.key);a.has(m.key)&&(y===void 0||y.mutation instanceof is)?o=o.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),Ih(y.mutation,m,y.mutation.getFieldMask(),gt.now())):u.set(m.key,qn.empty())}),this.recalculateAndSaveOverlays(e,o).next(p=>(p.forEach((m,y)=>u.set(m,y)),t.forEach((m,y)=>{var v;return d.set(m,new Oz(y,(v=u.get(m))!==null&&v!==void 0?v:null))}),d))}recalculateAndSaveOverlays(e,t){const r=bh();let a=new lt((u,d)=>u-d),o=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(p=>{const m=t.get(p);if(m===null)return;let y=r.get(p)||qn.empty();y=d.applyToLocalView(m,y),r.set(p,y);const v=(a.get(d.batchId)||Pe()).add(p);a=a.insert(d.batchId,v)})}).next(()=>{const u=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),m=p.key,y=p.value,v=bC();y.forEach(w=>{if(!o.has(w)){const S=DC(t.get(w),r.get(w));S!==null&&v.set(w,S),o=o.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,v))}return j.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(u){return he.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):RE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(o=>{const u=a-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-o.size):j.resolve(ai());let d=lu,p=o;return u.next(m=>j.forEach(m,(y,v)=>(d<v.largestBatchId&&(d=v.largestBatchId),o.get(y)?j.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{p=p.insert(y,w)}))).next(()=>this.populateOverlays(e,m,o)).next(()=>this.computeViews(e,p,m,Pe())).next(y=>({batchId:d,changes:wC(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next(r=>{let a=hh();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const o=t.collectionGroup;let u=hh();return this.indexManager.getCollectionParents(e,o).next(d=>j.forEach(d,p=>{const m=function(v,w){return new ns(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,p.child(o));return this.getDocumentsMatchingCollectionQuery(e,m,r,a).next(y=>{y.forEach((v,w)=>{u=u.insert(v,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,a){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,a))).next(u=>{o.forEach((p,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,ht.newInvalidDocument(y)))});let d=hh();return u.forEach((p,m)=>{const y=o.get(p);y!==void 0&&Ih(y.mutation,m,qn.empty(),gt.now()),gd(t,m)&&(d=d.insert(p,m))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kz{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return j.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Mt(a.createTime)}}(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:ME(a.bundledQuery),readTime:Mt(a.readTime)}}(t)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vz{constructor(){this.overlays=new lt(he.comparator),this.Rr=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ai();return j.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,o)=>{this.Et(e,t,o)}),j.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Rr.get(r);return a!==void 0&&(a.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),j.resolve()}getOverlaysForCollection(e,t,r){const a=ai(),o=t.length+1,u=new he(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,m=p.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===o&&p.largestBatchId>r&&a.set(p.getKey(),p)}return j.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let o=new lt((m,y)=>m-y);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let y=o.get(m.largestBatchId);y===null&&(y=ai(),o=o.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const d=ai(),p=o.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((m,y)=>d.set(m,y)),!(d.size()>=a)););return j.resolve(d)}Et(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const u=this.Rr.get(a.largestBatchId).delete(r.key);this.Rr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new OE(t,r));let o=this.Rr.get(t);o===void 0&&(o=Pe(),this.Rr.set(t,o)),this.Rr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mz{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.Vr=new nt(ln.mr),this.gr=new nt(ln.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new ln(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new ln(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new he(new ze([])),r=new ln(t,e),a=new ln(t,e+1),o=[];return this.gr.forEachInRange([r,a],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new he(new ze([])),r=new ln(t,e),a=new ln(t,e+1);let o=Pe();return this.gr.forEachInRange([r,a],u=>{o=o.add(u.key)}),o}containsKey(e){const t=new ln(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ln{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return he.comparator(e.key,t.key)||Re(e.Cr,t.Cr)}static pr(e,t){return Re(e.Cr,t.Cr)||he.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lz{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new nt(ln.mr)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new PE(o,t,r,a);this.mutationQueue.push(u);for(const d of a)this.Mr=this.Mr.add(new ln(d.key,o)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return j.resolve(u)}lookupMutationBatch(e,t){return j.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.Nr(r),o=a<0?0:a;return j.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?na:this.Fr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ln(t,0),a=new ln(t,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,a],u=>{const d=this.Or(u.Cr);o.push(d)}),j.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Re);return t.forEach(a=>{const o=new ln(a,0),u=new ln(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],d=>{r=r.add(d.Cr)})}),j.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let o=r;he.isDocumentKey(o)||(o=o.child(""));const u=new ln(new he(o),0);let d=new nt(Re);return this.Mr.forEachWhile(p=>{const m=p.key.path;return!!r.isPrefixOf(m)&&(m.length===a&&(d=d.add(p.Cr)),!0)},u),j.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(r=>{const a=this.Or(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){ve(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return j.forEach(t.mutations,a=>{const o=new ln(a.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new ln(t,0),a=this.Mr.firstAfterOrEqual(r);return j.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uz{constructor(e){this.kr=e,this.docs=function(){return new lt(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),o=a?a.size:0,u=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return j.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(t))}getEntries(e,t){let r=Hn();return t.forEach(a=>{const o=this.docs.get(a);r=r.insert(a,o?o.document.mutableCopy():ht.newInvalidDocument(a))}),j.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let o=Hn();const u=t.path,d=new he(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:m,value:{document:y}}=p.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||yE(z1(y),r)<=0||(a.has(y.key)||gd(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return j.resolve(o)}getAllFromCollectionGroup(e,t,r,a){ge()}qr(e,t){return j.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Bz(this)}getSize(e){return j.resolve(this.size)}}class Bz extends ix{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(r)}),j.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zz{constructor(e){this.persistence=e,this.Qr=new rs(t=>So(t),pd),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.$r=0,this.Ur=new BE,this.targetCount=0,this.Kr=Po.Un()}forEachTarget(e,t){return this.Qr.forEach((r,a)=>t(a)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),j.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Po(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.zn(t),j.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,r){let a=0;const o=[];return this.Qr.forEach((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),j.waitFor(o).next(()=>a)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return j.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),j.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const a=this.persistence.referenceDelegate,o=[];return a&&t.forEach(u=>{o.push(a.markPotentiallyOrphaned(e,u))}),j.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),j.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return j.resolve(r)}containsKey(e,t){return j.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new jn(0),this.zr=!1,this.zr=!0,this.jr=new Mz,this.referenceDelegate=e(this),this.Hr=new zz(this),this.indexManager=new Iz,this.remoteDocumentCache=function(a){return new Uz(a)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new QC(t),this.Yr=new kz(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Vz,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new Lz(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const a=new Fz(this.Gr.next());return this.referenceDelegate.Zr(),r(a).next(o=>this.referenceDelegate.Xr(a).next(()=>o)).toPromise().then(o=>(a.raiseOnCommittedEvent(),o))}ei(e,t){return j.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class Fz extends j1{constructor(e){super(),this.currentSequenceNumber=e}}class Bm{constructor(e){this.persistence=e,this.ti=new BE,this.ni=null}static ri(e){return new Bm(e)}get ii(){if(this.ni)return this.ni;throw ge()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),j.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),j.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(a=>this.ii.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ii,r=>{const a=he.fromPath(r);return this.si(e,a).next(o=>{o||t.removeEntry(a,Te.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return j.or([()=>j.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class em{constructor(e,t){this.persistence=e,this.oi=new rs(r=>An(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=rx(this,t)}static ri(e,t){return new em(e,t)}Zr(){}Xr(e){return j.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return j.forEach(this.oi,(r,a)=>this.ar(e,r,a).next(o=>o?j.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),o=a.newChangeBuffer();return a.qr(e,u=>this.ar(e,u,t).next(d=>{d||(r++,o.removeEntry(u,Te.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),j.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),j.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=wp(e.data.value)),t}ar(e,t,r){return j.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return j.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jz{constructor(e){this.serializer=e}B(e,t,r,a){const o=new Cm("createOrUpgrade",t);r<1&&a>=1&&(function(p){p.createObjectStore(fd)}(e),function(p){p.createObjectStore(Bh,{keyPath:iB}),p.createObjectStore(Dr,{keyPath:WI,autoIncrement:!0}).createIndex(po,YI,{unique:!0}),p.createObjectStore(uu)}(e),UA(e),function(p){p.createObjectStore(so)}(e));let u=j.resolve();return r<3&&a>=3&&(r!==0&&(function(p){p.deleteObjectStore(hu),p.deleteObjectStore(cu),p.deleteObjectStore(To)}(e),UA(e)),u=u.next(()=>function(p){const m=p.store(To),y={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Te.min().toTimestamp(),targetCount:0};return m.put(Gp,y)}(o))),r<4&&a>=4&&(r!==0&&(u=u.next(()=>function(p,m){return m.store(Dr).G().next(v=>{p.deleteObjectStore(Dr),p.createObjectStore(Dr,{keyPath:WI,autoIncrement:!0}).createIndex(po,YI,{unique:!0});const w=m.store(Dr),S=v.map(D=>w.put(D));return j.waitFor(S)})}(e,o))),u=u.next(()=>{(function(p){p.createObjectStore(du,{keyPath:fB})})(e)})),r<5&&a>=5&&(u=u.next(()=>this._i(o))),r<6&&a>=6&&(u=u.next(()=>(function(p){p.createObjectStore(zh)}(e),this.ai(o)))),r<7&&a>=7&&(u=u.next(()=>this.ui(o))),r<8&&a>=8&&(u=u.next(()=>this.ci(e,o))),r<9&&a>=9&&(u=u.next(()=>{(function(p){p.objectStoreNames.contains("remoteDocumentChanges")&&p.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&a>=10&&(u=u.next(()=>this.li(o))),r<11&&a>=11&&(u=u.next(()=>{(function(p){p.createObjectStore(xm,{keyPath:pB})})(e),function(p){p.createObjectStore(Dm,{keyPath:mB})}(e)})),r<12&&a>=12&&(u=u.next(()=>{(function(p){const m=p.createObjectStore(Pm,{keyPath:wB});m.createIndex(rv,bB,{unique:!1}),m.createIndex(Y1,IB,{unique:!1})})(e)})),r<13&&a>=13&&(u=u.next(()=>function(p){const m=p.createObjectStore(Hp,{keyPath:aB});m.createIndex(Ep,oB),m.createIndex($1,lB)}(e)).next(()=>this.hi(e,o)).next(()=>e.deleteObjectStore(so))),r<14&&a>=14&&(u=u.next(()=>this.Pi(e,o))),r<15&&a>=15&&(u=u.next(()=>function(p){p.createObjectStore(TE,{keyPath:gB,autoIncrement:!0}).createIndex(nv,_B,{unique:!1}),p.createObjectStore($p,{keyPath:yB}).createIndex(Q1,vB,{unique:!1}),p.createObjectStore(Kp,{keyPath:EB}).createIndex(W1,TB,{unique:!1})}(e))),r<16&&a>=16&&(u=u.next(()=>{t.objectStore($p).clear()}).next(()=>{t.objectStore(Kp).clear()})),r<17&&a>=17&&(u=u.next(()=>{(function(p){p.createObjectStore(wE,{keyPath:AB})})(e)})),u}ai(e){let t=0;return e.store(so).Z((r,a)=>{t+=Jp(a)}).next(()=>{const r={byteSize:t};return e.store(zh).put(tv,r)})}_i(e){const t=e.store(Bh),r=e.store(Dr);return t.G().next(a=>j.forEach(a,o=>{const u=IDBKeyRange.bound([o.userId,na],[o.userId,o.lastAcknowledgedBatchId]);return r.G(po,u).next(d=>j.forEach(d,p=>{ve(p.userId===o.userId);const m=oo(this.serializer,p);return JC(e,o.userId,m).next(()=>{})}))}))}ui(e){const t=e.store(hu),r=e.store(so);return e.store(To).get(Gp).next(a=>{const o=[];return r.Z((u,d)=>{const p=new ze(u),m=function(v){return[0,An(v)]}(p);o.push(t.get(m).next(y=>y?j.resolve():(v=>t.put({targetId:0,path:An(v),sequenceNumber:a.highestListenSequenceNumber}))(p)))}).next(()=>j.waitFor(o))})}ci(e,t){e.createObjectStore(Fh,{keyPath:dB});const r=t.store(Fh),a=new UE,o=u=>{if(a.add(u)){const d=u.lastSegment(),p=u.popLast();return r.put({collectionId:d,parent:An(p)})}};return t.store(so).Z({Y:!0},(u,d)=>{const p=new ze(u);return o(p.popLast())}).next(()=>t.store(uu).Z({Y:!0},([u,d,p],m)=>{const y=si(d);return o(y.popLast())}))}li(e){const t=e.store(cu);return t.Z((r,a)=>{const o=fh(a),u=WC(this.serializer,o);return t.put(u)})}hi(e,t){const r=t.store(so),a=[];return r.Z((o,u)=>{const d=t.store(Hp),p=function(v){return v.document?new he(ze.fromString(v.document.name).popFirst(5)):v.noDocument?he.fromSegments(v.noDocument.path):v.unknownDocument?he.fromSegments(v.unknownDocument.path):ge()}(u).path.toArray(),m={prefixPath:p.slice(0,p.length-2),collectionGroup:p[p.length-2],documentId:p[p.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};a.push(d.put(m))}).next(()=>j.waitFor(a))}Pi(e,t){const r=t.store(Dr),a=sx(this.serializer),o=new zE(Bm.ri,this.serializer.Tt);return r.G().next(u=>{const d=new Map;return u.forEach(p=>{var m;let y=(m=d.get(p.userId))!==null&&m!==void 0?m:Pe();oo(this.serializer,p).keys().forEach(v=>y=y.add(v)),d.set(p.userId,y)}),j.forEach(d,(p,m)=>{const y=new cn(m),v=Lm.It(this.serializer,y),w=o.getIndexManager(y),S=Um.It(y,this.serializer,w,o.referenceDelegate);return new ax(a,S,v,w).recalculateAndSaveOverlaysForDocumentKeys(new iv(t,jn.ae),p).next()})})}}function UA(n){n.createObjectStore(hu,{keyPath:cB}).createIndex(EE,hB,{unique:!0}),n.createObjectStore(cu,{keyPath:"targetId"}).createIndex(K1,uB,{unique:!0}),n.createObjectStore(To)}const $s="IndexedDbPersistence",Iy=18e5,Ay=5e3,Sy="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",ox="main";class FE{constructor(e,t,r,a,o,u,d,p,m,y,v=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ti=o,this.window=u,this.document=d,this.Ii=m,this.Ei=y,this.di=v,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=w=>Promise.resolve(),!FE.D())throw new te(K.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Dz(this,a),this.gi=t+ox,this.serializer=new QC(p),this.pi=new oi(this.gi,this.di,new jz(this.serializer)),this.jr=new yz,this.Hr=new Sz(this.referenceDelegate,this.serializer),this.remoteDocumentCache=sx(this.serializer),this.Yr=new _z,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,y===!1&&Vt($s,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new te(K.FAILED_PRECONDITION,Sy);return this.Si(),this.bi(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Hr.getHighestSequenceNumber(e))}).then(e=>{this.Gr=new jn(e,this.Ii)}).then(()=>{this.zr=!0}).catch(e=>(this.pi&&this.pi.close(),Promise.reject(e)))}Ci(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.pi.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ti.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>rp(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Fi(e).next(t=>{t||(this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Mi(e)).next(t=>this.isPrimary&&!t?this.xi(e).next(()=>!1):!!t&&this.Oi(e).next(()=>!0))).catch(e=>{if(Ea(e))return re($s,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return re($s,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ti.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Fi(e){return sh(e).get(Ol).next(t=>j.resolve(this.Ni(t)))}Bi(e){return rp(e).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,Iy)){this.mi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Zt(t,du);return r.G().next(a=>{const o=this.qi(a,Iy),u=a.filter(d=>o.indexOf(d)===-1);return j.forEach(u,d=>r.delete(d.clientId)).next(()=>u)})}).catch(()=>[]);if(this.yi)for(const t of e)this.yi.removeItem(this.Qi(t.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Li()).then(()=>this.Di()))}Ni(e){return!!e&&e.ownerId===this.clientId}Mi(e){return this.Ei?j.resolve(!0):sh(e).get(Ol).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,Ay)&&!this.$i(t.ownerId)){if(this.Ni(t)&&this.networkEnabled)return!0;if(!this.Ni(t)){if(!t.allowTabSynchronization)throw new te(K.FAILED_PRECONDITION,Sy);return!1}}return!(!this.networkEnabled||!this.inForeground)||rp(e).G().next(r=>this.qi(r,Ay).find(a=>{if(this.clientId!==a.clientId){const o=!this.networkEnabled&&a.networkEnabled,u=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(o||u&&d)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&re($s,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.zr=!1,this.Ui(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ki(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[fd,du],e=>{const t=new iv(e,jn.ae);return this.xi(t).next(()=>this.Bi(t))}),this.pi.close(),this.Gi()}qi(e,t){return e.filter(r=>this.ki(r.updateTimeMs,t)&&!this.$i(r.clientId))}zi(){return this.runTransaction("getActiveClients","readonly",e=>rp(e).G().next(t=>this.qi(t,Iy).map(r=>r.clientId)))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(e,t){return Um.It(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Az(e,this.serializer.Tt.databaseId)}getDocumentOverlayCache(e){return Lm.It(this.serializer,e)}getBundleCache(){return this.Yr}runTransaction(e,t,r){re($s,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",o=function(p){return p===17?CB:p===16?RB:p===15?bE:p===14?J1:p===13?Z1:p===12?SB:p===11?X1:void ge()}(this.di);let u;return this.pi.runTransaction(e,a,o,d=>(u=new iv(d,this.Gr?this.Gr.next():jn.ae),t==="readwrite-primary"?this.Fi(u).next(p=>!!p||this.Mi(u)).next(p=>{if(!p)throw Vt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)),new te(K.FAILED_PRECONDITION,F1);return r(u)}).next(p=>this.Oi(u).next(()=>p)):this.ji(u).next(()=>r(u)))).then(d=>(u.raiseOnCommittedEvent(),d))}ji(e){return sh(e).get(Ol).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,Ay)&&!this.$i(t.ownerId)&&!this.Ni(t)&&!(this.Ei||this.allowTabSynchronization&&t.allowTabSynchronization))throw new te(K.FAILED_PRECONDITION,Sy)})}Oi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return sh(e).put(Ol,t)}static D(){return oi.D()}xi(e){const t=sh(e);return t.get(Ol).next(r=>this.Ni(r)?(re($s,"Releasing primary lease."),t.delete(Ol)):j.resolve())}ki(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Vt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Si(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ri=()=>{this.Ti.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground=this.document.visibilityState==="visible")}Ki(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}bi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ai=()=>{this.Ui();const t=/(?:Version|Mobile)\/1[456]/;_R()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(e){var t;try{const r=((t=this.yi)===null||t===void 0?void 0:t.getItem(this.Qi(e)))!==null;return re($s,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Vt($s,"Failed to get zombied client id.",r),!1}}Ui(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(e){Vt("Failed to set zombie client id.",e)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch{}}Qi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function sh(n){return Zt(n,fd)}function rp(n){return Zt(n,du)}function jE(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=a}static Yi(e,t){let r=Pe(),a=Pe();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:a=a.add(o.doc.key)}return new qE(e,t.fromCache,r,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qz{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return _R()?8:q1(wt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,a){const o={result:null};return this.rs(e,t).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(e,t,a,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new qz;return this._s(e,t,u).next(d=>{if(o.result=d,this.Xi)return this.us(e,t,u,d.size)})}).next(()=>o.result)}us(e,t,r,a){return r.documentReadCount<this.es?(Bl()<=Be.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",zl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),j.resolve()):(Bl()<=Be.DEBUG&&re("QueryEngine","Query:",zl(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ts*a?(Bl()<=Be.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",zl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(t))):j.resolve())}rs(e,t){if(uA(t))return j.resolve(null);let r=Vn(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Yp(t,null,"F"),r=Vn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const u=Pe(...o);return this.ns.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,r).next(p=>{const m=this.cs(t,d);return this.ls(t,m,u,p.readTime)?this.rs(e,Yp(t,null,"F")):this.hs(e,m,t,p)}))})))}ss(e,t,r,a){return uA(t)||a.isEqual(Te.min())?j.resolve(null):this.ns.getDocuments(e,r).next(o=>{const u=this.cs(t,o);return this.ls(t,u,r,a)?j.resolve(null):(Bl()<=Be.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),zl(t)),this.hs(e,u,t,B1(a,lu)).next(d=>d))})}cs(e,t){let r=new nt(EC(e));return t.forEach((a,o)=>{gd(e,o)&&(r=r.add(o))}),r}ls(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(a)>0)}_s(e,t,r){return Bl()<=Be.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",zl(t)),this.ns.getDocumentsMatchingQuery(e,t,nr.min(),r)}hs(e,t,r,a){return this.ns.getDocumentsMatchingQuery(e,r,a).next(o=>(t.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="LocalStore",Hz=3e8;class Gz{constructor(e,t,r,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new lt(Re),this.Is=new rs(o=>So(o),pd),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ax(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function ux(n,e,t,r){return new Gz(n,e,t,r)}async function cx(n,e){const t=fe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(o=>(a=o,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],d=[];let p=Pe();for(const m of a){u.push(m.batchId);for(const y of m.mutations)p=p.add(y.key)}for(const m of o){d.push(m.batchId);for(const y of m.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(r,p).next(m=>({Rs:m,removedBatchIds:u,addedBatchIds:d}))})})}function $z(n,e){const t=fe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),o=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,p,m,y){const v=m.batch,w=v.keys();let S=j.resolve();return w.forEach(D=>{S=S.next(()=>y.getEntry(p,D)).next(U=>{const L=m.docVersions.get(D);ve(L!==null),U.version.compareTo(L)<0&&(v.applyToRemoteDocument(U,m),U.isValidDocument()&&(U.setReadTime(m.commitVersion),y.addEntry(U)))})}),S.next(()=>d.mutationQueue.removeMutationBatch(p,v))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let p=Pe();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(p=p.add(d.batch.mutations[m].key));return p}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function hx(n){const e=fe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function Kz(n,e){const t=fe(n),r=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const d=[];e.targetChanges.forEach((y,v)=>{const w=a.get(v);if(!w)return;d.push(t.Hr.removeMatchingKeys(o,y.removedDocuments,v).next(()=>t.Hr.addMatchingKeys(o,y.addedDocuments,v)));let S=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?S=S.withResumeToken(xt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):y.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(y.resumeToken,r)),a=a.insert(v,S),function(U,L,H){return U.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=Hz?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(w,S,y)&&d.push(t.Hr.updateTargetData(o,S))});let p=Hn(),m=Pe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(o,y))}),d.push(dx(o,u,e.documentUpdates).next(y=>{p=y.Vs,m=y.fs})),!r.isEqual(Te.min())){const y=t.Hr.getLastRemoteSnapshotVersion(o).next(v=>t.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));d.push(y)}return j.waitFor(d).next(()=>u.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,p,m)).next(()=>p)}).then(o=>(t.Ts=a,o))}function dx(n,e,t){let r=Pe(),a=Pe();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let u=Hn();return t.forEach((d,p)=>{const m=o.get(d);p.isFoundDocument()!==m.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(d,p.readTime),u=u.insert(d,p)):!m.isValidDocument()||p.version.compareTo(m.version)>0||p.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(p),u=u.insert(d,p)):re(HE,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",p.version)}),{Vs:u,fs:a}})}function Qz(n,e){const t=fe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=na),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vu(n,e){const t=fe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return t.Hr.getTargetData(r,e).next(o=>o?(a=o,j.resolve(a)):t.Hr.allocateTargetId(r).next(u=>(a=new Gi(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=t.Ts.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function Eu(n,e,t){const r=fe(n),a=r.Ts.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,a))}catch(u){if(!Ea(u))throw u;re(HE,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ts=r.Ts.remove(e),r.Is.delete(a.target)}function tm(n,e,t){const r=fe(n);let a=Te.min(),o=Pe();return r.persistence.runTransaction("Execute query","readwrite",u=>function(p,m,y){const v=fe(p),w=v.Is.get(y);return w!==void 0?j.resolve(v.Ts.get(w)):v.Hr.getTargetData(m,y)}(r,u,Vn(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(u,d.targetId).next(p=>{o=p})}).next(()=>r.Ps.getDocumentsMatchingQuery(u,e,t?a:Te.min(),t?o:Pe())).next(d=>(mx(r,vC(e),d),{documents:d,gs:o})))}function fx(n,e){const t=fe(n),r=fe(t.Hr),a=t.Ts.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",o=>r.lt(o,e).next(u=>u?u.target:null))}function px(n,e){const t=fe(n),r=t.Es.get(e)||Te.min();return t.persistence.runTransaction("Get new document changes","readonly",a=>t.ds.getAllFromCollectionGroup(a,e,B1(r,lu),Number.MAX_SAFE_INTEGER)).then(a=>(mx(t,e,a),a))}function mx(n,e,t){let r=n.Es.get(e)||Te.min();t.forEach((a,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(e,r)}async function Wz(n,e,t,r){const a=fe(n);let o=Pe(),u=Hn();for(const m of t){const y=e.ps(m.metadata.name);m.document&&(o=o.add(y));const v=e.ys(m);v.setReadTime(e.ws(m.metadata.readTime)),u=u.insert(y,v)}const d=a.ds.newChangeBuffer({trackRemovals:!0}),p=await vu(a,function(y){return Vn(Vu(ze.fromString(`__bundle__/docs/${y}`)))}(r));return a.persistence.runTransaction("Apply bundle documents","readwrite",m=>dx(m,d,u).next(y=>(d.apply(m),y)).next(y=>a.Hr.removeMatchingKeysForTargetId(m,p.targetId).next(()=>a.Hr.addMatchingKeys(m,o,p.targetId)).next(()=>a.localDocuments.getLocalViewOfDocuments(m,y.Vs,y.fs)).next(()=>y.Vs)))}async function Yz(n,e,t=Pe()){const r=await vu(n,Vn(ME(e.bundledQuery))),a=fe(n);return a.persistence.runTransaction("Save named query","readwrite",o=>{const u=Mt(e.readTime);if(r.snapshotVersion.compareTo(u)>=0)return a.Yr.saveNamedQuery(o,e);const d=r.withResumeToken(xt.EMPTY_BYTE_STRING,u);return a.Ts=a.Ts.insert(d.targetId,d),a.Hr.updateTargetData(o,d).next(()=>a.Hr.removeMatchingKeysForTargetId(o,r.targetId)).next(()=>a.Hr.addMatchingKeys(o,t,r.targetId)).next(()=>a.Yr.saveNamedQuery(o,e))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx="firestore_clients";function BA(n,e){return`${gx}_${n}_${e}`}const _x="firestore_mutations";function zA(n,e,t){let r=`${_x}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const yx="firestore_targets";function Ry(n,e){return`${yx}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="SharedClientState";class nm{constructor(e,t,r,a){this.user=e,this.batchId=t,this.state=r,this.error=a}static Ss(e,t,r){const a=JSON.parse(r);let o,u=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return u&&a.error&&(u=typeof a.error.message=="string"&&typeof a.error.code=="string",u&&(o=new te(a.error.code,a.error.message))),u?new nm(e,t,a.state,o):(Vt(Jr,`Failed to parse mutation state for ID '${t}': ${r}`),null)}bs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ah{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ss(e,t){const r=JSON.parse(t);let a,o=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(a=new te(r.error.code,r.error.message))),o?new Ah(e,r.state,a):(Vt(Jr,`Failed to parse target state for ID '${e}': ${t}`),null)}bs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class rm{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ss(e,t){const r=JSON.parse(t);let a=typeof r=="object"&&r.activeTargetIds instanceof Array,o=CE();for(let u=0;a&&u<r.activeTargetIds.length;++u)a=H1(r.activeTargetIds[u]),o=o.add(r.activeTargetIds[u]);return a?new rm(e,o):(Vt(Jr,`Failed to parse client data for instance '${e}': ${t}`),null)}}class GE{constructor(e,t){this.clientId=e,this.onlineState=t}static Ss(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new GE(t.clientId,t.onlineState):(Vt(Jr,`Failed to parse online state: ${e}`),null)}}class vv{constructor(){this.activeTargetIds=CE()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Cy{constructor(e,t,r,a,o){this.window=e,this.Ti=t,this.persistenceKey=r,this.Cs=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Fs=this.Ms.bind(this),this.xs=new lt(Re),this.started=!1,this.Os=[];const u=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=o,this.Ns=BA(this.persistenceKey,this.Cs),this.Bs=function(p){return`firestore_sequence_number_${p}`}(this.persistenceKey),this.xs=this.xs.insert(this.Cs,new vv),this.Ls=new RegExp(`^${gx}_${u}_([^_]*)$`),this.ks=new RegExp(`^${_x}_${u}_(\\d+)(?:_(.*))?$`),this.qs=new RegExp(`^${yx}_${u}_(\\d+)$`),this.Qs=function(p){return`firestore_online_state_${p}`}(this.persistenceKey),this.$s=function(p){return`firestore_bundle_loaded_v2_${p}`}(this.persistenceKey),this.window.addEventListener("storage",this.Fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.zi();for(const r of e){if(r===this.Cs)continue;const a=this.getItem(BA(this.persistenceKey,r));if(a){const o=rm.Ss(r,a);o&&(this.xs=this.xs.insert(o.clientId,o))}}this.Us();const t=this.storage.getItem(this.Qs);if(t){const r=this.Ks(t);r&&this.Ws(r)}for(const r of this.Os)this.Ms(r);this.Os=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Gs(this.xs)}isActiveQueryTarget(e){let t=!1;return this.xs.forEach((r,a)=>{a.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.zs(e,"pending")}updateMutationState(e,t,r){this.zs(e,t,r),this.js(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(Ry(this.persistenceKey,e));if(a){const o=Ah.Ss(e,a);o&&(r=o.state)}}return t&&this.Hs.Ds(e),this.Us(),r}removeLocalQueryTarget(e){this.Hs.vs(e),this.Us()}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ry(this.persistenceKey,e))}updateQueryState(e,t,r){this.Js(e,t,r)}handleUserChange(e,t,r){t.forEach(a=>{this.js(a)}),this.currentUser=e,r.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(e){this.Ys(e)}notifyBundleLoaded(e){this.Zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Fs),this.removeItem(this.Ns),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return re(Jr,"READ",e,t),t}setItem(e,t){re(Jr,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){re(Jr,"REMOVE",e),this.storage.removeItem(e)}Ms(e){const t=e;if(t.storageArea===this.storage){if(re(Jr,"EVENT",t.key,t.newValue),t.key===this.Ns)return void Vt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ti.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ls.test(t.key)){if(t.newValue==null){const r=this.Xs(t.key);return this.eo(r,null)}{const r=this.no(t.key,t.newValue);if(r)return this.eo(r.clientId,r)}}else if(this.ks.test(t.key)){if(t.newValue!==null){const r=this.ro(t.key,t.newValue);if(r)return this.io(r)}}else if(this.qs.test(t.key)){if(t.newValue!==null){const r=this.so(t.key,t.newValue);if(r)return this.oo(r)}}else if(t.key===this.Qs){if(t.newValue!==null){const r=this.Ks(t.newValue);if(r)return this.Ws(r)}}else if(t.key===this.Bs){const r=function(o){let u=jn.ae;if(o!=null)try{const d=JSON.parse(o);ve(typeof d=="number"),u=d}catch(d){Vt(Jr,"Failed to read sequence number from WebStorage",d)}return u}(t.newValue);r!==jn.ae&&this.sequenceNumberHandler(r)}else if(t.key===this.$s){const r=this._o(t.newValue);await Promise.all(r.map(a=>this.syncEngine.ao(a)))}}}else this.Os.push(t)})}}get Hs(){return this.xs.get(this.Cs)}Us(){this.setItem(this.Ns,this.Hs.bs())}zs(e,t,r){const a=new nm(this.currentUser,e,t,r),o=zA(this.persistenceKey,this.currentUser,e);this.setItem(o,a.bs())}js(e){const t=zA(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ys(e){const t={clientId:this.Cs,onlineState:e};this.storage.setItem(this.Qs,JSON.stringify(t))}Js(e,t,r){const a=Ry(this.persistenceKey,e),o=new Ah(e,t,r);this.setItem(a,o.bs())}Zs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.$s,t)}Xs(e){const t=this.Ls.exec(e);return t?t[1]:null}no(e,t){const r=this.Xs(e);return rm.Ss(r,t)}ro(e,t){const r=this.ks.exec(e),a=Number(r[1]),o=r[2]!==void 0?r[2]:null;return nm.Ss(new cn(o),a,t)}so(e,t){const r=this.qs.exec(e),a=Number(r[1]);return Ah.Ss(a,t)}Ks(e){return GE.Ss(e)}_o(e){return JSON.parse(e)}async io(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.uo(e.batchId,e.state,e.error);re(Jr,`Ignoring mutation for non-active user ${e.user.uid}`)}oo(e){return this.syncEngine.co(e.targetId,e.state,e.error)}eo(e,t){const r=t?this.xs.insert(e,t):this.xs.remove(e),a=this.Gs(this.xs),o=this.Gs(r),u=[],d=[];return o.forEach(p=>{a.has(p)||u.push(p)}),a.forEach(p=>{o.has(p)||d.push(p)}),this.syncEngine.lo(u,d).then(()=>{this.xs=r})}Ws(e){this.xs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Gs(e){let t=CE();return e.forEach((r,a)=>{t=t.unionWith(a.activeTargetIds)}),t}}class vx{constructor(){this.ho=new vv,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new vv,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xz{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA="ConnectivityMonitor";class jA{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){re(FA,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){re(FA,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ip=null;function Ev(){return ip===null?ip=function(){return 268435456+Math.round(2147483648*Math.random())}():ip++,"0x"+ip.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="RestConnection",Zz={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Jz{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${a}`,this.wo=this.databaseId.database===sv?`project_id=${r}`:`project_id=${r}&database_id=${a}`}So(e,t,r,a,o){const u=Ev(),d=this.bo(e,t.toUriEncodedString());re(xy,`Sending RPC '${e}' ${u}:`,d,r);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,a,o),this.vo(e,d,p,r).then(m=>(re(xy,`Received RPC '${e}' ${u}: `,m),m),m=>{throw di(xy,`RPC '${e}' ${u} failed with error: `,m,"url: ",d,"request:",r),m})}Co(e,t,r,a,o,u){return this.So(e,t,r,a,o)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ku}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,o)=>e[o]=a),r&&r.headers.forEach((a,o)=>e[o]=a)}bo(e,t){const r=Zz[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e9{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="WebChannelConnection";class t9 extends Jz{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,a){const o=Ev();return new Promise((u,d)=>{const p=new P1;p.setWithCredentials(!0),p.listenOnce(N1.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case _p.NO_ERROR:const y=p.getResponseJson();re(bn,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),u(y);break;case _p.TIMEOUT:re(bn,`RPC '${e}' ${o} timed out`),d(new te(K.DEADLINE_EXCEEDED,"Request time out"));break;case _p.HTTP_ERROR:const v=p.getStatus();if(re(bn,`RPC '${e}' ${o} failed with status:`,v,"response text:",p.getResponseText()),v>0){let w=p.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const D=function(L){const H=L.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(H)>=0?H:K.UNKNOWN}(S.status);d(new te(D,S.message))}else d(new te(K.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new te(K.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{re(bn,`RPC '${e}' ${o} completed.`)}});const m=JSON.stringify(a);re(bn,`RPC '${e}' ${o} sending request:`,a),p.send(t,"POST",m,r,15)})}Wo(e,t,r){const a=Ev(),o=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=V1(),d=k1(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(p.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const y=o.join("");re(bn,`Creating RPC '${e}' stream ${a}: ${y}`,p);const v=u.createWebChannel(y,p);let w=!1,S=!1;const D=new e9({Fo:L=>{S?re(bn,`Not sending because RPC '${e}' stream ${a} is closed:`,L):(w||(re(bn,`Opening RPC '${e}' stream ${a} transport.`),v.open(),w=!0),re(bn,`RPC '${e}' stream ${a} sending:`,L),v.send(L))},Mo:()=>v.close()}),U=(L,H,W)=>{L.listen(H,$=>{try{W($)}catch(oe){setTimeout(()=>{throw oe},0)}})};return U(v,ch.EventType.OPEN,()=>{S||(re(bn,`RPC '${e}' stream ${a} transport opened.`),D.Qo())}),U(v,ch.EventType.CLOSE,()=>{S||(S=!0,re(bn,`RPC '${e}' stream ${a} transport closed`),D.Uo())}),U(v,ch.EventType.ERROR,L=>{S||(S=!0,di(bn,`RPC '${e}' stream ${a} transport errored:`,L),D.Uo(new te(K.UNAVAILABLE,"The operation could not be completed")))}),U(v,ch.EventType.MESSAGE,L=>{var H;if(!S){const W=L.data[0];ve(!!W);const $=W,oe=($==null?void 0:$.error)||((H=$[0])===null||H===void 0?void 0:H.error);if(oe){re(bn,`RPC '${e}' stream ${a} received error:`,oe);const ae=oe.status;let le=function(A){const P=jt[A];if(P!==void 0)return OC(P)}(ae),x=oe.message;le===void 0&&(le=K.INTERNAL,x="Unknown error status: "+ae+" with message "+oe.message),S=!0,D.Uo(new te(le,x)),v.close()}else re(bn,`RPC '${e}' stream ${a} received:`,W),D.Ko(W)}}),U(d,O1.STAT_EVENT,L=>{L.stat===Zy.PROXY?re(bn,`RPC '${e}' stream ${a} detected buffering proxy`):L.stat===Zy.NOPROXY&&re(bn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(){return typeof window<"u"?window:null}function Sp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n){return new az(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,t,r=1e3,a=1.5,o=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=a,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-r);a>0&&re("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA="PersistentStream";class Tx{constructor(e,t,r,a,o,u,d,p){this.Ti=e,this.n_=r,this.r_=a,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new $E(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.i_===t&&this.V_(r,a)},r=>{e(()=>{const a=new te(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(a)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{r(()=>this.m_(a))}),this.stream.onMessage(a=>{r(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return re(qA,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(re(qA,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class n9 extends Tx{constructor(e,t,r,a,o,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=uz(this.serializer,e),r=function(o){if(!("targetChange"in o))return Te.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?Te.min():u.readTime?Mt(u.readTime):Te.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=pv(this.serializer),t.addTarget=function(o,u){let d;const p=u.target;if(d=Qp(p)?{documents:jC(o,p)}:{query:qC(o,p).ht},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=MC(o,u.resumeToken);const m=dv(o,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Te.min())>0){d.readTime=yu(o,u.snapshotVersion.toTimestamp());const m=dv(o,u.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const r=hz(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=pv(this.serializer),t.removeTarget=e,this.I_(t)}}class r9 extends Tx{constructor(e,t,r,a,o,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ve(!!e.streamToken),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=cz(e.writeResults,e.commitTime),r=Mt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=pv(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Kh(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i9{}class s9 extends i9{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new te(K.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.So(e,fv(t,r),a,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(K.UNKNOWN,o.toString())})}Co(e,t,r,a,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Co(e,fv(t,r),a,u,d,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new te(K.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class a9{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Vt(t),this.N_=!1):re("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="RemoteStore";class o9{constructor(e,t,r,a,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{r.enqueueAndForget(async()=>{wa(this)&&(re(No,"Restarting streams for network reachability change."),await async function(p){const m=fe(p);m.W_.add(4),await Uu(m),m.j_.set("Unknown"),m.W_.delete(4),await Td(m)}(this))})}),this.j_=new a9(r,a)}}async function Td(n){if(wa(n))for(const e of n.G_)await e(!0)}async function Uu(n){for(const e of n.G_)await e(!1)}function zm(n,e){const t=fe(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),WE(t)?QE(t):zu(t).c_()&&KE(t,e))}function Tu(n,e){const t=fe(n),r=zu(t);t.K_.delete(e),r.c_()&&wx(t,e),t.K_.size===0&&(r.c_()?r.P_():wa(t)&&t.j_.set("Unknown"))}function KE(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zu(n).y_(e)}function wx(n,e){n.H_.Ne(e),zu(n).w_(e)}function QE(n){n.H_=new nz({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),zu(n).start(),n.j_.B_()}function WE(n){return wa(n)&&!zu(n).u_()&&n.K_.size>0}function wa(n){return fe(n).W_.size===0}function bx(n){n.H_=void 0}async function l9(n){n.j_.set("Online")}async function u9(n){n.K_.forEach((e,t)=>{KE(n,e)})}async function c9(n,e){bx(n),WE(n)?(n.j_.q_(e),QE(n)):n.j_.set("Unknown")}async function h9(n,e,t){if(n.j_.set("Online"),e instanceof VC&&e.state===2&&e.cause)try{await async function(a,o){const u=o.cause;for(const d of o.targetIds)a.K_.has(d)&&(await a.remoteSyncer.rejectListen(d,u),a.K_.delete(d),a.H_.removeTarget(d))}(n,e)}catch(r){re(No,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await im(n,r)}else if(e instanceof Ap?n.H_.We(e):e instanceof kC?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Te.min()))try{const r=await hx(n.localStore);t.compareTo(r)>=0&&await function(o,u){const d=o.H_.ot(u);return d.targetChanges.forEach((p,m)=>{if(p.resumeToken.approximateByteSize()>0){const y=o.K_.get(m);y&&o.K_.set(m,y.withResumeToken(p.resumeToken,u))}}),d.targetMismatches.forEach((p,m)=>{const y=o.K_.get(p);if(!y)return;o.K_.set(p,y.withResumeToken(xt.EMPTY_BYTE_STRING,y.snapshotVersion)),wx(o,p);const v=new Gi(y.target,p,m,y.sequenceNumber);KE(o,v)}),o.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(r){re(No,"Failed to raise snapshot:",r),await im(n,r)}}async function im(n,e,t){if(!Ea(e))throw e;n.W_.add(1),await Uu(n),n.j_.set("Offline"),t||(t=()=>hx(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{re(No,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Td(n)})}function Ix(n,e){return e().catch(t=>im(n,t,e))}async function Bu(n){const e=fe(n),t=fa(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:na;for(;d9(e);)try{const a=await Qz(e.localStore,r);if(a===null){e.U_.length===0&&t.P_();break}r=a.batchId,f9(e,a)}catch(a){await im(e,a)}Ax(e)&&Sx(e)}function d9(n){return wa(n)&&n.U_.length<10}function f9(n,e){n.U_.push(e);const t=fa(n);t.c_()&&t.S_&&t.b_(e.mutations)}function Ax(n){return wa(n)&&!fa(n).u_()&&n.U_.length>0}function Sx(n){fa(n).start()}async function p9(n){fa(n).C_()}async function m9(n){const e=fa(n);for(const t of n.U_)e.b_(t.mutations)}async function g9(n,e,t){const r=n.U_.shift(),a=NE.from(r,e,t);await Ix(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await Bu(n)}async function _9(n,e){e&&fa(n).S_&&await async function(r,a){if(function(u){return NC(u)&&u!==K.ABORTED}(a.code)){const o=r.U_.shift();fa(r).h_(),await Ix(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,a)),await Bu(r)}}(n,e),Ax(n)&&Sx(n)}async function HA(n,e){const t=fe(n);t.asyncQueue.verifyOperationInProgress(),re(No,"RemoteStore received new credentials");const r=wa(t);t.W_.add(3),await Uu(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Td(t)}async function Tv(n,e){const t=fe(n);e?(t.W_.delete(2),await Td(t)):e||(t.W_.add(2),await Uu(t),t.j_.set("Unknown"))}function zu(n){return n.J_||(n.J_=function(t,r,a){const o=fe(t);return o.M_(),new n9(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:l9.bind(null,n),No:u9.bind(null,n),Lo:c9.bind(null,n),p_:h9.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),WE(n)?QE(n):n.j_.set("Unknown")):(await n.J_.stop(),bx(n))})),n.J_}function fa(n){return n.Y_||(n.Y_=function(t,r,a){const o=fe(t);return o.M_(),new r9(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:p9.bind(null,n),Lo:_9.bind(null,n),D_:m9.bind(null,n),v_:g9.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await Bu(n)):(await n.Y_.stop(),n.U_.length>0&&(re(No,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,t,r,a,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=o,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,o){const u=Date.now()+r,d=new YE(e,t,u,a,o);return d.start(r),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fu(n,e){if(Vt("AsyncQueue",`${e}: ${n}`),Ea(n))return new te(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{static emptySet(e){return new Xl(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||he.comparator(t.key,r.key):(t,r)=>he.comparator(t.key,r.key),this.keyedMap=hh(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(!a.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Xl;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(){this.Z_=new lt(he.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):ge():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class wu{constructor(e,t,r,a,o,u,d,p,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,a,o){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new wu(e,t,Xl.emptySet(t),u,r,a,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&md(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==r[a].type||!t[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y9{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class v9{constructor(){this.queries=$A(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const a=fe(t),o=a.queries;a.queries=$A(),o.forEach((u,d)=>{for(const p of d.ta)p.onError(r)})})(this,new te(K.ABORTED,"Firestore shutting down"))}}function $A(){return new rs(n=>yC(n),md)}async function XE(n,e){const t=fe(n);let r=3;const a=e.query;let o=t.queries.get(a);o?!o.na()&&e.ra()&&(r=2):(o=new y9,r=e.ra()?0:1);try{switch(r){case 0:o.ea=await t.onListen(a,!0);break;case 1:o.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const d=Fu(u,`Initialization of query '${zl(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,o),o.ta.push(e),e.sa(t.onlineState),o.ea&&e.oa(o.ea)&&JE(t)}async function ZE(n,e){const t=fe(n),r=e.query;let a=3;const o=t.queries.get(r);if(o){const u=o.ta.indexOf(e);u>=0&&(o.ta.splice(u,1),o.ta.length===0?a=e.ra()?0:1:!o.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function E9(n,e){const t=fe(n);let r=!1;for(const a of e){const o=a.query,u=t.queries.get(o);if(u){for(const d of u.ta)d.oa(a)&&(r=!0);u.ea=a}}r&&JE(t)}function T9(n,e,t){const r=fe(n),a=r.queries.get(e);if(a)for(const o of a.ta)o.onError(t);r.queries.delete(e)}function JE(n){n.ia.forEach(e=>{e.next()})}var wv,KA;(KA=wv||(wv={}))._a="default",KA.Cache="cache";class eT{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const a of e.docChanges)a.type!==3&&r.push(a);e=new wu(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=wu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==wv.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w9{constructor(e,t){this.Ia=e,this.byteLength=t}Ea(){return"metadata"in this.Ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.serializer=e}ps(e){return li(this.serializer,e)}ys(e){return e.metadata.exists?FC(this.serializer,e.document,!1):ht.newNoDocument(this.ps(e.metadata.name),this.ws(e.metadata.readTime))}ws(e){return Mt(e)}}class b9{constructor(e,t,r){this.da=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Rx(e)}Aa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ia.namedQuery)this.queries.push(e.Ia.namedQuery);else if(e.Ia.documentMetadata){this.documents.push({metadata:e.Ia.documentMetadata}),e.Ia.documentMetadata.exists||++t;const r=ze.fromString(e.Ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ia.document&&(this.documents[this.documents.length-1].document=e.Ia.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ra(e){const t=new Map,r=new QA(this.serializer);for(const a of e)if(a.metadata.queries){const o=r.ps(a.metadata.name);for(const u of a.metadata.queries){const d=(t.get(u)||Pe()).add(o);t.set(u,d)}}return t}async complete(){const e=await Wz(this.localStore,new QA(this.serializer),this.documents,this.da.id),t=this.Ra(this.documents);for(const r of this.queries)await Yz(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Va:this.collectionGroups,ma:e}}}function Rx(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.key=e}}class xx{constructor(e){this.key=e}}class Dx{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Pe(),this.mutatedKeys=Pe(),this.ya=EC(e),this.wa=new Xl(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new GA,a=t?t.wa:this.wa;let o=t?t.mutatedKeys:this.mutatedKeys,u=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,m=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,v)=>{const w=a.get(y),S=gd(this.query,v)?v:null,D=!!w&&this.mutatedKeys.has(w.key),U=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let L=!1;w&&S?w.data.isEqual(S.data)?D!==U&&(r.track({type:3,doc:S}),L=!0):this.va(w,S)||(r.track({type:2,doc:S}),L=!0,(p&&this.ya(S,p)>0||m&&this.ya(S,m)<0)&&(d=!0)):!w&&S?(r.track({type:0,doc:S}),L=!0):w&&!S&&(r.track({type:1,doc:w}),L=!0,(p||m)&&(d=!0)),L&&(S?(u=u.add(S),o=U?o.add(y):o.delete(y)):(u=u.delete(y),o=o.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),o=o.delete(y.key),r.track({type:1,doc:y})}return{wa:u,Da:r,ls:d,mutatedKeys:o}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,a){const o=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const u=e.Da.X_();u.sort((y,v)=>function(S,D){const U=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return U(S)-U(D)}(y.type,v.type)||this.ya(y.doc,v.doc)),this.Ca(r),a=a!=null&&a;const d=t&&!a?this.Fa():[],p=this.pa.size===0&&this.current&&!a?1:0,m=p!==this.ga;return this.ga=p,u.length!==0||m?{snapshot:new wu(this.query,e.wa,o,u,e.mutatedKeys,p===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new GA,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Pe(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new xx(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new Cx(r))}),t}Oa(e){this.fa=e.gs,this.pa=Pe();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return wu.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ba="SyncEngine";class I9{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class A9{constructor(e){this.key=e,this.Ba=!1}}class S9{constructor(e,t,r,a,o,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new rs(d=>yC(d),md),this.qa=new Map,this.Qa=new Set,this.$a=new lt(he.comparator),this.Ua=new Map,this.Ka=new BE,this.Wa={},this.Ga=new Map,this.za=Po.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function R9(n,e,t=!0){const r=Fm(n);let a;const o=r.ka.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),a=o.view.Na()):a=await Px(r,e,t,!0),a}async function C9(n,e){const t=Fm(n);await Px(t,e,!0,!1)}async function Px(n,e,t,r){const a=await vu(n.localStore,Vn(e)),o=a.targetId,u=n.sharedClientState.addLocalQueryTarget(o,t);let d;return r&&(d=await tT(n,e,o,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&zm(n.remoteStore,a),d}async function tT(n,e,t,r,a){n.Ha=(v,w,S)=>async function(U,L,H,W){let $=L.view.ba(H);$.ls&&($=await tm(U.localStore,L.query,!1).then(({documents:x})=>L.view.ba(x,$)));const oe=W&&W.targetChanges.get(L.targetId),ae=W&&W.targetMismatches.get(L.targetId)!=null,le=L.view.applyChanges($,U.isPrimaryClient,oe,ae);return bv(U,L.targetId,le.Ma),le.snapshot}(n,v,w,S);const o=await tm(n.localStore,e,!0),u=new Dx(e,o.gs),d=u.ba(o.documents),p=vd.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",a),m=u.applyChanges(d,n.isPrimaryClient,p);bv(n,t,m.Ma);const y=new I9(e,t,u);return n.ka.set(e,y),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),m.snapshot}async function x9(n,e,t){const r=fe(n),a=r.ka.get(e),o=r.qa.get(a.targetId);if(o.length>1)return r.qa.set(a.targetId,o.filter(u=>!md(u,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await Eu(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),t&&Tu(r.remoteStore,a.targetId),bu(r,a.targetId)}).catch(va)):(bu(r,a.targetId),await Eu(r.localStore,a.targetId,!0))}async function D9(n,e){const t=fe(n),r=t.ka.get(e),a=t.qa.get(r.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Tu(t.remoteStore,r.targetId))}async function P9(n,e,t){const r=sT(n);try{const a=await function(u,d){const p=fe(u),m=gt.now(),y=d.reduce((S,D)=>S.add(D.key),Pe());let v,w;return p.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=Hn(),U=Pe();return p.ds.getEntries(S,y).next(L=>{D=L,D.forEach((H,W)=>{W.isValidDocument()||(U=U.add(H))})}).next(()=>p.localDocuments.getOverlayedDocuments(S,D)).next(L=>{v=L;const H=[];for(const W of d){const $=JB(W,v.get(W.key).overlayedDocument);$!=null&&H.push(new is(W.key,$,uC($.value.mapValue),mt.exists(!0)))}return p.mutationQueue.addMutationBatch(S,m,H,d)}).next(L=>{w=L;const H=L.applyToLocalDocumentSet(v,U);return p.documentOverlayCache.saveOverlays(S,L.batchId,H)})}).then(()=>({batchId:w.batchId,changes:wC(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(u,d,p){let m=u.Wa[u.currentUser.toKey()];m||(m=new lt(Re)),m=m.insert(d,p),u.Wa[u.currentUser.toKey()]=m}(r,a.batchId,t),await ss(r,a.changes),await Bu(r.remoteStore)}catch(a){const o=Fu(a,"Failed to persist write");t.reject(o)}}async function Nx(n,e){const t=fe(n);try{const r=await Kz(t.localStore,e);e.targetChanges.forEach((a,o)=>{const u=t.Ua.get(o);u&&(ve(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?u.Ba=!0:a.modifiedDocuments.size>0?ve(u.Ba):a.removedDocuments.size>0&&(ve(u.Ba),u.Ba=!1))}),await ss(t,r,e)}catch(r){await va(r)}}function WA(n,e,t){const r=fe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.ka.forEach((o,u)=>{const d=u.view.sa(e);d.snapshot&&a.push(d.snapshot)}),function(u,d){const p=fe(u);p.onlineState=d;let m=!1;p.queries.forEach((y,v)=>{for(const w of v.ta)w.sa(d)&&(m=!0)}),m&&JE(p)}(r.eventManager,e),a.length&&r.La.p_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function N9(n,e,t){const r=fe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const a=r.Ua.get(e),o=a&&a.key;if(o){let u=new lt(he.comparator);u=u.insert(o,ht.newNoDocument(o,Te.min()));const d=Pe().add(o),p=new yd(Te.min(),new Map,new lt(Re),u,d);await Nx(r,p),r.$a=r.$a.remove(o),r.Ua.delete(e),iT(r)}else await Eu(r.localStore,e,!1).then(()=>bu(r,e,t)).catch(va)}async function O9(n,e){const t=fe(n),r=e.batch.batchId;try{const a=await $z(t.localStore,e);rT(t,r,null),nT(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ss(t,a)}catch(a){await va(a)}}async function k9(n,e,t){const r=fe(n);try{const a=await function(u,d){const p=fe(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let y;return p.mutationQueue.lookupMutationBatch(m,d).next(v=>(ve(v!==null),y=v.keys(),p.mutationQueue.removeMutationBatch(m,v))).next(()=>p.mutationQueue.performConsistencyCheck(m)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(m,y,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y)).next(()=>p.localDocuments.getDocuments(m,y))})}(r.localStore,e);rT(r,e,t),nT(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ss(r,a)}catch(a){await va(a)}}async function V9(n,e){const t=fe(n);wa(t.remoteStore)||re(ba,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(u){const d=fe(u);return d.persistence.runTransaction("Get highest unacknowledged batch id","readonly",p=>d.mutationQueue.getHighestUnacknowledgedBatchId(p))}(t.localStore);if(r===na)return void e.resolve();const a=t.Ga.get(r)||[];a.push(e),t.Ga.set(r,a)}catch(r){const a=Fu(r,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function nT(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function rT(n,e,t){const r=fe(n);let a=r.Wa[r.currentUser.toKey()];if(a){const o=a.get(e);o&&(t?o.reject(t):o.resolve(),a=a.remove(e)),r.Wa[r.currentUser.toKey()]=a}}function bu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||Ox(n,r)})}function Ox(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(Tu(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),iT(n))}function bv(n,e,t){for(const r of t)r instanceof Cx?(n.Ka.addReference(r.key,e),M9(n,r)):r instanceof xx?(re(ba,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||Ox(n,r.key)):ge()}function M9(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(re(ba,"New document in limbo: "+t),n.Qa.add(r),iT(n))}function iT(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new he(ze.fromString(e)),r=n.za.next();n.Ua.set(r,new A9(t)),n.$a=n.$a.insert(t,r),zm(n.remoteStore,new Gi(Vn(Vu(t.path)),r,"TargetPurposeLimboResolution",jn.ae))}}async function ss(n,e,t){const r=fe(n),a=[],o=[],u=[];r.ka.isEmpty()||(r.ka.forEach((d,p)=>{u.push(r.Ha(p,e,t).then(m=>{var y;if((m||t)&&r.isPrimaryClient){const v=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(p.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(m){a.push(m);const v=qE.Yi(p.targetId,m);o.push(v)}}))}),await Promise.all(u),r.La.p_(a),await async function(p,m){const y=fe(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>j.forEach(m,w=>j.forEach(w.Hi,S=>y.persistence.referenceDelegate.addReference(v,w.targetId,S)).next(()=>j.forEach(w.Ji,S=>y.persistence.referenceDelegate.removeReference(v,w.targetId,S)))))}catch(v){if(!Ea(v))throw v;re(HE,"Failed to update sequence numbers: "+v)}for(const v of m){const w=v.targetId;if(!v.fromCache){const S=y.Ts.get(w),D=S.snapshotVersion,U=S.withLastLimboFreeSnapshotVersion(D);y.Ts=y.Ts.insert(w,U)}}}(r.localStore,o))}async function L9(n,e){const t=fe(n);if(!t.currentUser.isEqual(e)){re(ba,"User change. New user:",e.toKey());const r=await cx(t.localStore,e);t.currentUser=e,function(o,u){o.Ga.forEach(d=>{d.forEach(p=>{p.reject(new te(K.CANCELLED,u))})}),o.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ss(t,r.Rs)}}function U9(n,e){const t=fe(n),r=t.Ua.get(e);if(r&&r.Ba)return Pe().add(r.key);{let a=Pe();const o=t.qa.get(e);if(!o)return a;for(const u of o){const d=t.ka.get(u);a=a.unionWith(d.view.Sa)}return a}}async function B9(n,e){const t=fe(n),r=await tm(t.localStore,e.query,!0),a=e.view.Oa(r);return t.isPrimaryClient&&bv(t,e.targetId,a.Ma),a}async function z9(n,e){const t=fe(n);return px(t.localStore,e).then(r=>ss(t,r))}async function F9(n,e,t,r){const a=fe(n),o=await function(d,p){const m=fe(d),y=fe(m.mutationQueue);return m.persistence.runTransaction("Lookup mutation documents","readonly",v=>y.Ln(v,p).next(w=>w?m.localDocuments.getDocuments(v,w):j.resolve(null)))}(a.localStore,e);o!==null?(t==="pending"?await Bu(a.remoteStore):t==="acknowledged"||t==="rejected"?(rT(a,e,r||null),nT(a,e),function(d,p){fe(fe(d).mutationQueue).qn(p)}(a.localStore,e)):ge(),await ss(a,o)):re(ba,"Cannot apply mutation batch with id: "+e)}async function j9(n,e){const t=fe(n);if(Fm(t),sT(t),e===!0&&t.ja!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),a=await YA(t,r.toArray());t.ja=!0,await Tv(t.remoteStore,!0);for(const o of a)zm(t.remoteStore,o)}else if(e===!1&&t.ja!==!1){const r=[];let a=Promise.resolve();t.qa.forEach((o,u)=>{t.sharedClientState.isLocalQueryTarget(u)?r.push(u):a=a.then(()=>(bu(t,u),Eu(t.localStore,u,!0))),Tu(t.remoteStore,u)}),await a,await YA(t,r),function(u){const d=fe(u);d.Ua.forEach((p,m)=>{Tu(d.remoteStore,m)}),d.Ka.Dr(),d.Ua=new Map,d.$a=new lt(he.comparator)}(t),t.ja=!1,await Tv(t.remoteStore,!1)}}async function YA(n,e,t){const r=fe(n),a=[],o=[];for(const u of e){let d;const p=r.qa.get(u);if(p&&p.length!==0){d=await vu(r.localStore,Vn(p[0]));for(const m of p){const y=r.ka.get(m),v=await B9(r,y);v.snapshot&&o.push(v.snapshot)}}else{const m=await fx(r.localStore,u);d=await vu(r.localStore,m),await tT(r,kx(m),u,!1,d.resumeToken)}a.push(d)}return r.La.p_(o),a}function kx(n){return _C(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function q9(n){return function(t){return fe(fe(t).persistence).zi()}(fe(n).localStore)}async function H9(n,e,t,r){const a=fe(n);if(a.ja)return void re(ba,"Ignoring unexpected query state notification.");const o=a.qa.get(e);if(o&&o.length>0)switch(t){case"current":case"not-current":{const u=await px(a.localStore,vC(o[0])),d=yd.createSynthesizedRemoteEventForCurrentChange(e,t==="current",xt.EMPTY_BYTE_STRING);await ss(a,u,d);break}case"rejected":await Eu(a.localStore,e,!0),bu(a,e,r);break;default:ge()}}async function G9(n,e,t){const r=Fm(n);if(r.ja){for(const a of e){if(r.qa.has(a)&&r.sharedClientState.isActiveQueryTarget(a)){re(ba,"Adding an already active target "+a);continue}const o=await fx(r.localStore,a),u=await vu(r.localStore,o);await tT(r,kx(o),u.targetId,!1,u.resumeToken),zm(r.remoteStore,u)}for(const a of t)r.qa.has(a)&&await Eu(r.localStore,a,!1).then(()=>{Tu(r.remoteStore,a),bu(r,a)}).catch(va)}}function Fm(n){const e=fe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=U9.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=N9.bind(null,e),e.La.p_=E9.bind(null,e.eventManager),e.La.Ja=T9.bind(null,e.eventManager),e}function sT(n){const e=fe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=O9.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=k9.bind(null,e),e}function $9(n,e,t){const r=fe(n);(async function(o,u,d){try{const p=await u.getMetadata();if(await function(S,D){const U=fe(S),L=Mt(D.createTime);return U.persistence.runTransaction("hasNewerBundle","readonly",H=>U.Yr.getBundleMetadata(H,D.id)).then(H=>!!H&&H.createTime.compareTo(L)>=0)}(o.localStore,p))return await u.close(),d._completeWith(function(S){return{taskState:"Success",documentsLoaded:S.totalDocuments,bytesLoaded:S.totalBytes,totalDocuments:S.totalDocuments,totalBytes:S.totalBytes}}(p)),Promise.resolve(new Set);d._updateProgress(Rx(p));const m=new b9(p,o.localStore,u.serializer);let y=await u.Ya();for(;y;){const w=await m.Aa(y);w&&d._updateProgress(w),y=await u.Ya()}const v=await m.complete();return await ss(o,v.ma,void 0),await function(S,D){const U=fe(S);return U.persistence.runTransaction("Save bundle","readwrite",L=>U.Yr.saveBundleMetadata(L,D))}(o.localStore,p),d._completeWith(v.progress),Promise.resolve(v.Va)}catch(p){return di(ba,`Loading bundle failed with ${p}`),d._failWith(p),Promise.resolve(new Set)}})(r,e,t).then(a=>{r.sharedClientState.notifyBundleLoaded(a)})}class Qh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ed(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return ux(this.persistence,new lx,e.initialUser,this.serializer)}Xa(e){return new zE(Bm.ri,this.serializer)}Za(e){return new vx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qh.provider={build:()=>new Qh};class K9 extends Qh{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ve(this.persistence.referenceDelegate instanceof em);const r=this.persistence.referenceDelegate.garbageCollector;return new nx(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new zE(r=>em.ri(r,t),this.serializer)}}class Vx extends Qh{constructor(e,t,r){super(),this.ru=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ru.initialize(this,e),await sT(this.ru.syncEngine),await Bu(this.ru.remoteStore),await this.persistence.Ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}eu(e){return ux(this.persistence,new lx,e.initialUser,this.serializer)}tu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new nx(r,e.asyncQueue,t)}nu(e,t){const r=new nB(t,this.persistence);return new tB(e.asyncQueue,r)}Xa(e){const t=jE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new FE(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Ex(),Sp(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(e){return new vx}}class Q9 extends Vx{constructor(e,t){super(e,t,!1),this.ru=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ru.syncEngine;this.sharedClientState instanceof Cy&&(this.sharedClientState.syncEngine={uo:F9.bind(null,t),co:H9.bind(null,t),lo:G9.bind(null,t),zi:q9.bind(null,t),ao:z9.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ci(async r=>{await j9(this.ru.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Za(e){const t=Ex();if(!Cy.D(t))throw new te(K.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=jE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Cy(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Wh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>WA(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=L9.bind(null,this.syncEngine),await Tv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new v9}()}createDatastore(e){const t=Ed(e.databaseInfo.databaseId),r=function(o){return new t9(o)}(e.databaseInfo);return function(o,u,d,p){return new s9(o,u,d,p)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,o,u,d){return new o9(r,a,o,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>WA(this.syncEngine,t,0),function(){return jA.D()?new jA:new Xz}())}createSyncEngine(e,t){return function(a,o,u,d,p,m,y){const v=new S9(a,o,u,d,p,m);return y&&(v.ja=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const o=fe(a);re(No,"RemoteStore shutting down."),o.W_.add(5),await Uu(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Wh.provider={build:()=>new Wh};function XA(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W9{constructor(e,t){this.ou=e,this.serializer=t,this.metadata=new yn,this.buffer=new Uint8Array,this._u=function(){return new TextDecoder("utf-8")}(),this.au().then(r=>{r&&r.Ea()?this.metadata.resolve(r.Ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ia)}`))},r=>this.metadata.reject(r))}close(){return this.ou.cancel()}async getMetadata(){return this.metadata.promise}async Ya(){return await this.getMetadata(),this.au()}async au(){const e=await this.uu();if(e===null)return null;const t=this._u.decode(e),r=Number(t);isNaN(r)&&this.cu(`length string (${t}) is not valid number`);const a=await this.lu(r);return new w9(JSON.parse(a),e.length+r)}hu(){return this.buffer.findIndex(e=>e===123)}async uu(){for(;this.hu()<0&&!await this.Pu(););if(this.buffer.length===0)return null;const e=this.hu();e<0&&this.cu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async lu(e){for(;this.buffer.length<e;)await this.Pu()&&this.cu("Reached the end of bundle when more is expected.");const t=this._u.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}cu(e){throw this.ou.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pu(){const e=await this.ou.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y9{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new te(K.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(a,o){const u=fe(a),d={documents:o.map(v=>$h(u.serializer,v))},p=await u.Co("BatchGetDocuments",u.serializer.databaseId,ze.emptyPath(),d,o.length),m=new Map;p.forEach(v=>{const w=lz(u.serializer,v);m.set(w.key.toString(),w)});const y=[];return o.forEach(v=>{const w=m.get(v.toString());ve(!!w),y.push(w)}),y}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Lu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const a=he.fromPath(r);this.mutations.push(new DE(a,this.precondition(a)))}),await async function(r,a){const o=fe(r),u={writes:a.map(d=>Kh(o.serializer,d))};await o.So("Commit",o.serializer.databaseId,ze.emptyPath(),u)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ge();t=Te.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new te(K.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Te.min())?mt.exists(!1):mt.updateTime(t):mt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Te.min()))throw new te(K.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return mt.updateTime(t)}return mt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X9{constructor(e,t,r,a,o){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=a,this.deferred=o,this.Tu=r.maxAttempts,this.a_=new $E(this.asyncQueue,"transaction_retry")}Iu(){this.Tu-=1,this.Eu()}Eu(){this.a_.Xo(async()=>{const e=new Y9(this.datastore),t=this.du(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(a=>{this.Au(a)}))}).catch(r=>{this.Au(r)})})}du(e){try{const t=this.updateFunction(e);return!dd(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Au(e){this.Tu>0&&this.Ru(e)?(this.Tu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Eu(),Promise.resolve()))):this.deferred.reject(e)}Ru(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!NC(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="FirestoreClient";class Z9{constructor(e,t,r,a,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=cn.UNAUTHENTICATED,this.clientId=L1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{re(pa,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(re(pa,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Fu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dy(n,e){n.asyncQueue.verifyOperationInProgress(),re(pa,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async a=>{r.isEqual(a)||(await cx(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ZA(n,e){n.asyncQueue.verifyOperationInProgress();const t=await aT(n);re(pa,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>HA(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,a)=>HA(e.remoteStore,a)),n._onlineComponents=e}async function aT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(pa,"Using user provided OfflineComponentProvider");try{await Dy(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===K.FAILED_PRECONDITION||a.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;di("Error using user provided cache. Falling back to memory cache: "+t),await Dy(n,new Qh)}}else re(pa,"Using default OfflineComponentProvider"),await Dy(n,new K9(void 0));return n._offlineComponents}async function qm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(pa,"Using user provided OnlineComponentProvider"),await ZA(n,n._uninitializedComponentsProvider._online)):(re(pa,"Using default OnlineComponentProvider"),await ZA(n,new Wh))),n._onlineComponents}function Mx(n){return aT(n).then(e=>e.persistence)}function oT(n){return aT(n).then(e=>e.localStore)}function Lx(n){return qm(n).then(e=>e.remoteStore)}function lT(n){return qm(n).then(e=>e.syncEngine)}function J9(n){return qm(n).then(e=>e.datastore)}async function Iu(n){const e=await qm(n),t=e.eventManager;return t.onListen=R9.bind(null,e.syncEngine),t.onUnlisten=x9.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=C9.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=D9.bind(null,e.syncEngine),t}function e6(n){return n.asyncQueue.enqueue(async()=>{const e=await Mx(n),t=await Lx(n);return e.setNetworkEnabled(!0),function(a){const o=fe(a);return o.W_.delete(0),Td(o)}(t)})}function t6(n){return n.asyncQueue.enqueue(async()=>{const e=await Mx(n),t=await Lx(n);return e.setNetworkEnabled(!1),async function(a){const o=fe(a);o.W_.add(0),await Uu(o),o.j_.set("Offline")}(t)})}function n6(n,e){const t=new yn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await function(m,y){const v=fe(m);return v.persistence.runTransaction("read document","readonly",w=>v.localDocuments.getDocument(w,y))}(a,o);d.isFoundDocument()?u.resolve(d):d.isNoDocument()?u.resolve(null):u.reject(new te(K.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(d){const p=Fu(d,`Failed to get document '${o} from cache`);u.reject(p)}}(await oT(n),e,t)),t.promise}function Ux(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,p,m){const y=new jm({next:w=>{y.su(),u.enqueueAndForget(()=>ZE(o,v));const S=w.docs.has(d);!S&&w.fromCache?m.reject(new te(K.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&p&&p.source==="server"?m.reject(new te(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(w)},error:w=>m.reject(w)}),v=new eT(Vu(d.path),y,{includeMetadataChanges:!0,Ta:!0});return XE(o,v)}(await Iu(n),n.asyncQueue,e,t,r)),r.promise}function r6(n,e){const t=new yn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await tm(a,o,!0),p=new Dx(o,d.gs),m=p.ba(d.documents),y=p.applyChanges(m,!1);u.resolve(y.snapshot)}catch(d){const p=Fu(d,`Failed to execute query '${o} against cache`);u.reject(p)}}(await oT(n),e,t)),t.promise}function Bx(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,p,m){const y=new jm({next:w=>{y.su(),u.enqueueAndForget(()=>ZE(o,v)),w.fromCache&&p.source==="server"?m.reject(new te(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(w)},error:w=>m.reject(w)}),v=new eT(d,y,{includeMetadataChanges:!0,Ta:!0});return XE(o,v)}(await Iu(n),n.asyncQueue,e,t,r)),r.promise}function i6(n,e){const t=new jm(e);return n.asyncQueue.enqueueAndForget(async()=>function(a,o){fe(a).ia.add(o),o.next()}(await Iu(n),t)),()=>{t.su(),n.asyncQueue.enqueueAndForget(async()=>function(a,o){fe(a).ia.delete(o)}(await Iu(n),t))}}function s6(n,e,t,r){const a=function(u,d){let p;return p=typeof u=="string"?_E().encode(u):u,function(y,v){return new W9(y,v)}(function(y,v){if(y instanceof Uint8Array)return XA(y,v);if(y instanceof ArrayBuffer)return XA(new Uint8Array(y),v);if(y instanceof ReadableStream)return y.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(p),d)}(t,Ed(e));n.asyncQueue.enqueueAndForget(async()=>{$9(await lT(n),a,r)})}function a6(n,e){return n.asyncQueue.enqueue(async()=>function(r,a){const o=fe(r);return o.persistence.runTransaction("Get named query","readonly",u=>o.Yr.getNamedQuery(u,a))}(await oT(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(n,e,t){if(!t)throw new te(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Fx(n,e,t,r){if(e===!0&&r===!0)throw new te(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function eS(n){if(!he.isDocumentKey(n))throw new te(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function tS(n){if(he.isDocumentKey(n))throw new te(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Hm(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ge()}function Xe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new te(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hm(n);throw new te(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function jx(n,e){if(e<=0)throw new te(K.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx="firestore.googleapis.com",nS=!0;class rS{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qx,this.ssl=nS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:nS;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ZC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Rz)throw new te(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Fx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new te(K.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new te(K.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new te(K.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wd{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new H4;switch(r.type){case"firstParty":return new Q4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=JA.get(t);r&&(re("ComponentProvider","Removing Datastore"),JA.delete(t),r.terminate())}(this),Promise.resolve()}}function o6(n,e,t,r={}){var a;const o=(n=Xe(n,wd))._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;o.host!==qx&&o.host!==d&&di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},o),{host:d,ssl:!1,emulatorOptions:r});if(!ia(p,u)&&(n._setSettings(p),r.mockUserToken)){let m,y;if(typeof r.mockUserToken=="string")m=r.mockUserToken,y=cn.MOCK_USER;else{m=uV(r.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new te(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new cn(v)}n._authCredentials=new G4(new M1(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn=class Hx{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hx(this.firestore,e,this._query)}},Tt=class Gx{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ra(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gx(this.firestore,e,this._key)}},ra=class $x extends Mn{constructor(e,t,r){super(e,t,Vu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new he(e))}withConverter(e){return new $x(this.firestore,e,this._path)}};function Kx(n,e,...t){if(n=Ae(n),uT("collection","path",e),n instanceof wd){const r=ze.fromString(e,...t);return tS(r),new ra(n,null,r)}{if(!(n instanceof Tt||n instanceof ra))throw new te(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ze.fromString(e,...t));return tS(r),new ra(n.firestore,null,r)}}function l6(n,e){if(n=Xe(n,wd),uT("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new te(K.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Mn(n,null,function(r){return new ns(ze.emptyPath(),r)}(e))}function sm(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=L1.newId()),uT("doc","path",e),n instanceof wd){const r=ze.fromString(e,...t);return eS(r),new Tt(n,null,new he(r))}{if(!(n instanceof Tt||n instanceof ra))throw new te(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ze.fromString(e,...t));return eS(r),new Tt(n.firestore,n instanceof ra?n.converter:null,new he(r))}}function Qx(n,e){return n=Ae(n),e=Ae(e),(n instanceof Tt||n instanceof ra)&&(e instanceof Tt||e instanceof ra)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Wx(n,e){return n=Ae(n),e=Ae(e),n instanceof Mn&&e instanceof Mn&&n.firestore===e.firestore&&md(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="AsyncQueue";class sS{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new $E(this,"async_queue_retry"),this.Su=()=>{const r=Sp();r&&re(iS,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Sp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Sp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new yn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ea(e))throw e;re(iS,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const a=function(u){let d=u.message||"";return u.stack&&(d=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),d}(r);throw Vt("INTERNAL UNHANDLED ERROR: ",a),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=YE.createAndSchedule(this,e,t,r,o=>this.Fu(o));return this.fu.push(a),a}Du(){this.gu&&ge()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function Iv(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const a=t;for(const o of r)if(o in a&&typeof a[o]=="function")return!0;return!1}(n,["next","error","complete"])}class u6{constructor(){this._progressObserver={},this._taskCompletionResolver=new yn,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c6=-1;let Lt=class extends wd{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new sS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sS(e),this._firestoreClient=void 0,await e}}};function Sn(n){if(n._terminated)throw new te(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Yx(n),n._firestoreClient}function Yx(n){var e,t,r;const a=n._freezeSettings(),o=function(d,p,m,y){return new PB(d,p,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,zx(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new Z9(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}function h6(n,e){di("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return Xx(n,Wh.provider,{build:r=>new Vx(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function d6(n){di("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();Xx(n,Wh.provider,{build:t=>new Q9(t,e.cacheSizeBytes)})}function Xx(n,e,t){if((n=Xe(n,Lt))._firestoreClient||n._terminated)throw new te(K.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new te(K.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},Yx(n)}function f6(n){if(n._initialized&&!n._terminated)throw new te(K.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new yn;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!oi.D())return Promise.resolve();const a=r+ox;await oi.delete(a)}(jE(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function p6(n){return function(t){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>V9(await lT(t),r)),r.promise}(Sn(n=Xe(n,Lt)))}function m6(n){return e6(Sn(n=Xe(n,Lt)))}function g6(n){return t6(Sn(n=Xe(n,Lt)))}function _6(n,e){const t=Sn(n=Xe(n,Lt)),r=new u6;return s6(t,n._databaseId,e,r),r}function y6(n,e){return a6(Sn(n=Xe(n,Lt)),e).then(t=>t?new Mn(n,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pi(xt.fromBase64String(e))}catch(t){throw new te(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pi(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==a[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v6=/^__.*__$/;class E6{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mu(e,this.data,t,this.fieldTransforms)}}class Zx{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new is(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Jx(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class $m{constructor(e,t,r,a,o,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new $m(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.$u(e),a}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.Bu(),a}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return am(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Jx(this.Lu)&&v6.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class T6{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ed(e)}ju(e,t,r,a=!1){return new $m({Lu:e,methodName:t,zu:r,path:pt.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uo(n){const e=n._freezeSettings(),t=Ed(n._databaseId);return new T6(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Km(n,e,t,r,a,o={}){const u=n.ju(o.merge||o.mergeFields?2:0,e,t,a);_T("Data must be an object, but it was:",u,r);const d=nD(r,u);let p,m;if(o.merge)p=new qn(u.fieldMask),m=u.fieldTransforms;else if(o.mergeFields){const y=[];for(const v of o.mergeFields){const w=Av(e,v,t);if(!u.contains(w))throw new te(K.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);iD(y,w)||y.push(w)}p=new qn(y),m=u.fieldTransforms.filter(v=>p.covers(v.field))}else p=null,m=u.fieldTransforms;return new E6(new _n(d),p,m)}class bd extends Lo{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bd}}function eD(n,e,t){return new $m({Lu:3,zu:e.settings.zu,methodName:n._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class hT extends Lo{_toFieldTransform(e){return new _d(e.path,new gu)}isEqual(e){return e instanceof hT}}class dT extends Lo{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=eD(this,e,!0),r=this.Hu.map(o=>Bo(o,t)),a=new Ro(r);return new _d(e.path,a)}isEqual(e){return e instanceof dT&&ia(this.Hu,e.Hu)}}class fT extends Lo{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=eD(this,e,!0),r=this.Hu.map(o=>Bo(o,t)),a=new Co(r);return new _d(e.path,a)}isEqual(e){return e instanceof fT&&ia(this.Hu,e.Hu)}}class pT extends Lo{constructor(e,t){super(e),this.Ju=t}_toFieldTransform(e){const t=new _u(e.serializer,AC(e.serializer,this.Ju));return new _d(e.path,t)}isEqual(e){return e instanceof pT&&this.Ju===e.Ju}}function mT(n,e,t,r){const a=n.ju(1,e,t);_T("Data must be an object, but it was:",a,r);const o=[],u=_n.empty();Ta(r,(p,m)=>{const y=yT(e,p,t);m=Ae(m);const v=a.Uu(y);if(m instanceof bd)o.push(y);else{const w=Bo(m,v);w!=null&&(o.push(y),u.set(y,w))}});const d=new qn(o);return new Zx(u,d,a.fieldTransforms)}function gT(n,e,t,r,a,o){const u=n.ju(1,e,t),d=[Av(e,r,t)],p=[a];if(o.length%2!=0)throw new te(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)d.push(Av(e,o[w])),p.push(o[w+1]);const m=[],y=_n.empty();for(let w=d.length-1;w>=0;--w)if(!iD(m,d[w])){const S=d[w];let D=p[w];D=Ae(D);const U=u.Uu(S);if(D instanceof bd)m.push(S);else{const L=Bo(D,U);L!=null&&(m.push(S),y.set(S,L))}}const v=new qn(m);return new Zx(y,v,u.fieldTransforms)}function tD(n,e,t,r=!1){return Bo(t,n.ju(r?4:3,e))}function Bo(n,e){if(rD(n=Ae(n)))return _T("Unsupported field value:",e,n),nD(n,e);if(n instanceof Lo)return function(r,a){if(!Jx(a.Lu))throw a.Wu(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(a);o&&a.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,a){const o=[];let u=0;for(const d of r){let p=Bo(d,a.Ku(u));p==null&&(p={nullValue:"NULL_VALUE"}),o.push(p),u++}return{arrayValue:{values:o}}}(n,e)}return function(r,a){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return AC(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=gt.fromDate(r);return{timestampValue:yu(a.serializer,o)}}if(r instanceof gt){const o=new gt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yu(a.serializer,o)}}if(r instanceof Gm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pi)return{bytesValue:MC(a.serializer,r._byteString)};if(r instanceof Tt){const o=a.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw a.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:VE(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof cT)return function(u,d){return{mapValue:{fields:{[IE]:{stringValue:AE},[fu]:{arrayValue:{values:u.toArray().map(m=>{if(typeof m!="number")throw d.Wu("VectorValues must only contain numeric values.");return xE(d.serializer,m)})}}}}}}(r,a);throw a.Wu(`Unsupported field value: ${Hm(r)}`)}(n,e)}function nD(n,e){const t={};return eC(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ta(n,(r,a)=>{const o=Bo(a,e.qu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function rD(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof Gm||n instanceof pi||n instanceof Tt||n instanceof Lo||n instanceof cT)}function _T(n,e,t){if(!rD(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=Hm(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Av(n,e,t){if((e=Ae(e))instanceof ma)return e._internalPath;if(typeof e=="string")return yT(n,e);throw am("Field path arguments must be of type string or ",n,!1,void 0,t)}const w6=new RegExp("[~\\*/\\[\\]]");function yT(n,e,t){if(e.search(w6)>=0)throw am(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ma(...e.split("."))._internalPath}catch{throw am(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function am(n,e,t,r,a){const o=r&&!r.isEmpty(),u=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(o||u)&&(p+=" (found",o&&(p+=` in field ${r}`),u&&(p+=` in document ${a}`),p+=")"),new te(K.INVALID_ARGUMENT,d+n+p)}function iD(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t,r,a,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=a,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new b6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Qm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class b6 extends Yh{data(){return super.data()}}function Qm(n,e){return typeof e=="string"?yT(n,e):e instanceof ma?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new te(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vT{}class Id extends vT{}function Ks(n,e,...t){let r=[];e instanceof vT&&r.push(e),r=r.concat(t),function(o){const u=o.filter(p=>p instanceof ET).length,d=o.filter(p=>p instanceof Wm).length;if(u>1||u>0&&d>0)throw new te(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const a of r)n=a._apply(n);return n}class Wm extends Id{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Wm(e,t,r)}_apply(e){const t=this._parse(e);return oD(e._query,t),new Mn(e.firestore,e.converter,hv(e._query,t))}_parse(e){const t=Uo(e.firestore);return function(o,u,d,p,m,y,v){let w;if(m.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new te(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){oS(v,y);const D=[];for(const U of v)D.push(aS(p,o,U));w={arrayValue:{values:D}}}else w=aS(p,o,v)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||oS(v,y),w=tD(d,u,v,y==="in"||y==="not-in");return Fe.create(m,y,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function I6(n,e,t){const r=e,a=Qm("where",n);return Wm._create(a,r,t)}class ET extends vT{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ET(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:tt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,o){let u=a;const d=o.getFlattenedFilters();for(const p of d)oD(u,p),u=hv(u,p)}(e._query,t),new Mn(e.firestore,e.converter,hv(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class TT extends Id{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new TT(e,t)}_apply(e){const t=function(a,o,u){if(a.startAt!==null)throw new te(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new te(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Gh(o,u)}(e._query,this._field,this._direction);return new Mn(e.firestore,e.converter,function(a,o){const u=a.explicitOrderBy.concat([o]);return new ns(a.path,a.collectionGroup,u,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,t))}}function A6(n,e="asc"){const t=e,r=Qm("orderBy",n);return TT._create(r,t)}class Ym extends Id{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ym(e,t,r)}_apply(e){return new Mn(e.firestore,e.converter,Yp(e._query,this._limit,this._limitType))}}function S6(n){return jx("limit",n),Ym._create("limit",n,"F")}function R6(n){return jx("limitToLast",n),Ym._create("limitToLast",n,"L")}class Xm extends Id{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Xm(e,t,r)}_apply(e){const t=aD(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,o){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,o,a.endAt)}(e._query,t))}}function C6(...n){return Xm._create("startAt",n,!0)}function x6(...n){return Xm._create("startAfter",n,!1)}class Zm extends Id{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Zm(e,t,r)}_apply(e){const t=aD(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,o){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,o)}(e._query,t))}}function D6(...n){return Zm._create("endBefore",n,!1)}function P6(...n){return Zm._create("endAt",n,!0)}function aD(n,e,t,r){if(t[0]=Ae(t[0]),t[0]instanceof Yh)return function(o,u,d,p,m){if(!p)throw new te(K.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${d}().`);const y=[];for(const v of Yl(o))if(v.field.isKeyField())y.push(Ao(u,p.key));else{const w=p.data.field(v.field);if(Nm(w))throw new te(K.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+v.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const S=v.field.canonicalString();throw new te(K.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${S}' (used as the orderBy) does not exist.`)}y.push(w)}return new da(y,m)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const a=Uo(n.firestore);return function(u,d,p,m,y,v){const w=u.explicitOrderBy;if(y.length>w.length)throw new te(K.INVALID_ARGUMENT,`Too many arguments provided to ${m}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const S=[];for(let D=0;D<y.length;D++){const U=y[D];if(w[D].field.isKeyField()){if(typeof U!="string")throw new te(K.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${m}(), but got a ${typeof U}`);if(!RE(u)&&U.indexOf("/")!==-1)throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${m}() must be a plain document ID, but '${U}' contains a slash.`);const L=u.path.child(ze.fromString(U));if(!he.isDocumentKey(L))throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${m}() must result in a valid document path, but '${L}' is not because it contains an odd number of segments.`);const H=new he(L);S.push(Ao(d,H))}else{const L=tD(p,m,U);S.push(L)}}return new da(S,v)}(n._query,n.firestore._databaseId,a,e,t,r)}}function aS(n,e,t){if(typeof(t=Ae(t))=="string"){if(t==="")throw new te(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!RE(e)&&t.indexOf("/")!==-1)throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ze.fromString(t));if(!he.isDocumentKey(r))throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ao(n,new he(r))}if(t instanceof Tt)return Ao(n,t._key);throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hm(t)}.`)}function oS(n,e){if(!Array.isArray(n)||n.length===0)throw new te(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oD(n,e){const t=function(a,o){for(const u of a)for(const d of u.getFlattenedFilters())if(o.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new te(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class wT{convertValue(e,t="none"){switch(ca(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ta(e,(a,o)=>{r[a]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,a;const o=(a=(r=(t=e.fields)===null||t===void 0?void 0:t[fu].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(u=>dt(u.doubleValue));return new cT(o)}convertGeoPoint(e){return new Gm(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Om(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(jh(e));default:return null}}convertTimestamp(e){const t=Xi(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ze.fromString(e);ve(KC(r));const a=new ua(r.get(1),r.get(3)),o=new he(r.popFirst(5));return a.isEqual(t)||Vt(`Document ${o} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class N6 extends wT{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Ji=class extends Yh{constructor(e,t,r,a,o,u){super(e,t,r,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Sh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Qm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Sh=class extends Ji{data(e={}){return super.data(e)}},ga=class{constructor(e,t,r,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new mo(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Sh(this._firestore,this._userDataWriter,r.key,r,new mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,o){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map(d=>{const p=new Sh(a._firestore,a._userDataWriter,d.doc.key,d.doc,new mo(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}})}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>o||d.type!==3).map(d=>{const p=new Sh(a._firestore,a._userDataWriter,d.doc.key,d.doc,new mo(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let m=-1,y=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:O6(d.type),doc:p,oldIndex:m,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function O6(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge()}}function lD(n,e){return n instanceof Ji&&e instanceof Ji?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ga&&e instanceof ga&&n._firestore===e._firestore&&Wx(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k6(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt);return Ux(Sn(e),n._key).then(t=>bT(e,n,t))}class zo extends wT{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function V6(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt),t=Sn(e),r=new zo(e);return n6(t,n._key).then(a=>new Ji(e,r,n._key,a,new mo(a!==null&&a.hasLocalMutations,!0),n.converter))}function M6(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt);return Ux(Sn(e),n._key,{source:"server"}).then(t=>bT(e,n,t))}function L6(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new zo(e);return sD(n._query),Bx(t,n._query).then(a=>new ga(e,r,n,a))}function U6(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new zo(e);return r6(t,n._query).then(a=>new ga(e,r,n,a))}function B6(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new zo(e);return Bx(t,n._query,{source:"server"}).then(a=>new ga(e,r,n,a))}function lS(n,e,t){n=Xe(n,Tt);const r=Xe(n.firestore,Lt),a=Jm(n.converter,e,t);return Ad(r,[Km(Uo(r),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,mt.none())])}function uS(n,e,t,...r){n=Xe(n,Tt);const a=Xe(n.firestore,Lt),o=Uo(a);let u;return u=typeof(e=Ae(e))=="string"||e instanceof ma?gT(o,"updateDoc",n._key,e,t,r):mT(o,"updateDoc",n._key,e),Ad(a,[u.toMutation(n._key,mt.exists(!0))])}function z6(n){return Ad(Xe(n.firestore,Lt),[new Lu(n._key,mt.none())])}function F6(n,e){const t=Xe(n.firestore,Lt),r=sm(n),a=Jm(n.converter,e);return Ad(t,[Km(Uo(n.firestore),"addDoc",r._key,a,n.converter!==null,{}).toMutation(r._key,mt.exists(!1))]).then(()=>r)}function uD(n,...e){var t,r,a;n=Ae(n);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Iv(e[u])||(o=e[u],u++);const d={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Iv(e[u])){const v=e[u];e[u]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[u+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[u+2]=(a=v.complete)===null||a===void 0?void 0:a.bind(v)}let p,m,y;if(n instanceof Tt)m=Xe(n.firestore,Lt),y=Vu(n._key.path),p={next:v=>{e[u]&&e[u](bT(m,n,v))},error:e[u+1],complete:e[u+2]};else{const v=Xe(n,Mn);m=Xe(v.firestore,Lt),y=v._query;const w=new zo(m);p={next:S=>{e[u]&&e[u](new ga(m,w,v,S))},error:e[u+1],complete:e[u+2]},sD(n._query)}return function(w,S,D,U){const L=new jm(U),H=new eT(S,L,D);return w.asyncQueue.enqueueAndForget(async()=>XE(await Iu(w),H)),()=>{L.su(),w.asyncQueue.enqueueAndForget(async()=>ZE(await Iu(w),H))}}(Sn(m),y,d,p)}function j6(n,e){return i6(Sn(n=Xe(n,Lt)),Iv(e)?e:{next:e})}function Ad(n,e){return function(r,a){const o=new yn;return r.asyncQueue.enqueueAndForget(async()=>P9(await lT(r),a,o)),o.promise}(Sn(n),e)}function bT(n,e,t){const r=t.docs.get(e._key),a=new zo(n);return new Ji(n,a,e._key,r,new mo(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q6={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H6=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Uo(e)}set(e,t,r){this._verifyNotCommitted();const a=Zs(e,this._firestore),o=Jm(a.converter,t,r),u=Km(this._dataReader,"WriteBatch.set",a._key,o,a.converter!==null,r);return this._mutations.push(u.toMutation(a._key,mt.none())),this}update(e,t,r,...a){this._verifyNotCommitted();const o=Zs(e,this._firestore);let u;return u=typeof(t=Ae(t))=="string"||t instanceof ma?gT(this._dataReader,"WriteBatch.update",o._key,t,r,a):mT(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(u.toMutation(o._key,mt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Zs(e,this._firestore);return this._mutations=this._mutations.concat(new Lu(t._key,mt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te(K.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Zs(n,e){if((n=Ae(n)).firestore!==e)throw new te(K.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G6{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Uo(e)}get(e){const t=Zs(e,this._firestore),r=new N6(this._firestore);return this._transaction.lookup([t._key]).then(a=>{if(!a||a.length!==1)return ge();const o=a[0];if(o.isFoundDocument())return new Yh(this._firestore,r,o.key,o,t.converter);if(o.isNoDocument())return new Yh(this._firestore,r,t._key,null,t.converter);throw ge()})}set(e,t,r){const a=Zs(e,this._firestore),o=Jm(a.converter,t,r),u=Km(this._dataReader,"Transaction.set",a._key,o,a.converter!==null,r);return this._transaction.set(a._key,u),this}update(e,t,r,...a){const o=Zs(e,this._firestore);let u;return u=typeof(t=Ae(t))=="string"||t instanceof ma?gT(this._dataReader,"Transaction.update",o._key,t,r,a):mT(this._dataReader,"Transaction.update",o._key,t),this._transaction.update(o._key,u),this}delete(e){const t=Zs(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $6=class extends G6{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Zs(e,this._firestore),r=new zo(this._firestore);return super.get(e).then(a=>new Ji(this._firestore,r,t._key,a._document,new mo(!1,!1),t.converter))}};function K6(n,e,t){n=Xe(n,Lt);const r=Object.assign(Object.assign({},q6),t);return function(o){if(o.maxAttempts<1)throw new te(K.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,u,d){const p=new yn;return o.asyncQueue.enqueueAndForget(async()=>{const m=await J9(o);new X9(o.asyncQueue,m,d,u,p).Iu()}),p.promise}(Sn(n),a=>e(new $6(n,a)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q6(){return new bd("deleteField")}function W6(){return new hT("serverTimestamp")}function Y6(...n){return new dT("arrayUnion",n)}function X6(...n){return new fT("arrayRemove",n)}function Z6(n){return new pT("increment",n)}(function(e,t=!0){(function(a){ku=a})(_a),oa(new ci("firestore",(r,{instanceIdentifier:a,options:o})=>{const u=r.getProvider("app").getImmediate(),d=new Lt(new $4(r.getProvider("auth-internal")),new W4(u,r.getProvider("app-check-internal")),function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new te(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ua(m.options.projectId,y)}(u,a),u);return o=Object.assign({useFetchStreams:t},o),d._setSettings(o),d},"PUBLIC").setMultipleInstances(!0)),Or(zI,FI,e),Or(zI,FI,"esm2017")})();const J6="@firebase/firestore-compat",eF="0.3.45";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new te("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(){if(typeof Uint8Array>"u")throw new te("unimplemented","Uint8Arrays are not available in this environment.")}function hS(){if(!xB())throw new te("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Xh{constructor(e){this._delegate=e}static fromBase64String(e){return hS(),new Xh(pi.fromBase64String(e))}static fromUint8Array(e){return cS(),new Xh(pi.fromUint8Array(e))}toBase64(){return hS(),this._delegate.toBase64()}toUint8Array(){return cS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(n){return tF(n,["next","error","complete"])}function tF(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{enableIndexedDbPersistence(e,t){return h6(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return d6(e._delegate)}clearIndexedDbPersistence(e){return f6(e._delegate)}}class cD{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ua||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&di("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){o6(this._delegate,e,t,r)}enableNetwork(){return m6(this._delegate)}disableNetwork(){return g6(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Fx("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return p6(this._delegate)}onSnapshotsInSync(e){return j6(this._delegate,e)}get app(){if(!this._appCompat)throw new te("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Au(this,Kx(this._delegate,e))}catch(t){throw On(t,"collection()","Firestore.collection()")}}doc(e){try{return new Er(this,sm(this._delegate,e))}catch(t){throw On(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Nn(this,l6(this._delegate,e))}catch(t){throw On(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return K6(this._delegate,t=>e(new hD(this,t)))}batch(){return Sn(this._delegate),new dD(new H6(this._delegate,e=>Ad(this._delegate,e)))}loadBundle(e){return _6(this._delegate,e)}namedQuery(e){return y6(this._delegate,e).then(t=>t?new Nn(this,t):null)}}class eg extends wT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xh(new pi(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Er.forKey(t,this.firestore,null)}}function rF(n){j4(n)}class hD{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new eg(e)}get(e){const t=go(e);return this._delegate.get(t).then(r=>new Zh(this._firestore,new Ji(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const a=go(e);return r?(IT("Transaction.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=go(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=go(e);return this._delegate.delete(t),this}}class dD{constructor(e){this._delegate=e}set(e,t,r){const a=go(e);return r?(IT("WriteBatch.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=go(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=go(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Oo{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Sh(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Jh(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Oo.INSTANCES;let a=r.get(e);a||(a=new WeakMap,r.set(e,a));let o=a.get(t);return o||(o=new Oo(e,new eg(e),t),a.set(t,o)),o}}Oo.INSTANCES=new WeakMap;class Er{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new eg(e)}static forPath(e,t,r){if(e.length%2!==0)throw new te("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Er(t,new Tt(t._delegate,r,new he(e)))}static forKey(e,t,r){return new Er(t,new Tt(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Au(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Au(this.firestore,Kx(this._delegate,e))}catch(t){throw On(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ae(e),e instanceof Tt?Qx(this._delegate,e):!1}set(e,t){t=IT("DocumentReference.set",t);try{return t?lS(this._delegate,e,t):lS(this._delegate,e)}catch(r){throw On(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?uS(this._delegate,e):uS(this._delegate,e,t,...r)}catch(a){throw On(a,"updateDoc()","DocumentReference.update()")}}delete(){return z6(this._delegate)}onSnapshot(...e){const t=fD(e),r=pD(e,a=>new Zh(this.firestore,new Ji(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return uD(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=V6(this._delegate):(e==null?void 0:e.source)==="server"?t=M6(this._delegate):t=k6(this._delegate),t.then(r=>new Zh(this.firestore,new Ji(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Er(this.firestore,e?this._delegate.withConverter(Oo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function On(n,e,t){return n.message=n.message.replace(e,t),n}function fD(n){for(const e of n)if(typeof e=="object"&&!Sv(e))return e;return{}}function pD(n,e){var t,r;let a;return Sv(n[0])?a=n[0]:Sv(n[1])?a=n[1]:typeof n[0]=="function"?a={next:n[0],error:n[1],complete:n[2]}:a={next:n[1],error:n[2],complete:n[3]},{next:o=>{a.next&&a.next(e(o))},error:(t=a.error)===null||t===void 0?void 0:t.bind(a),complete:(r=a.complete)===null||r===void 0?void 0:r.bind(a)}}class Zh{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Er(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return lD(this._delegate,e._delegate)}}class Jh extends Zh{data(e){const t=this._delegate.data(e);return this._delegate._converter||q4(t!==void 0),t}}class Nn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new eg(e)}where(e,t,r){try{return new Nn(this.firestore,Ks(this._delegate,I6(e,t,r)))}catch(a){throw On(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Nn(this.firestore,Ks(this._delegate,A6(e,t)))}catch(r){throw On(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Nn(this.firestore,Ks(this._delegate,S6(e)))}catch(t){throw On(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Nn(this.firestore,Ks(this._delegate,R6(e)))}catch(t){throw On(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Nn(this.firestore,Ks(this._delegate,C6(...e)))}catch(t){throw On(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Nn(this.firestore,Ks(this._delegate,x6(...e)))}catch(t){throw On(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Nn(this.firestore,Ks(this._delegate,D6(...e)))}catch(t){throw On(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Nn(this.firestore,Ks(this._delegate,P6(...e)))}catch(t){throw On(t,"endAt()","Query.endAt()")}}isEqual(e){return Wx(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=U6(this._delegate):(e==null?void 0:e.source)==="server"?t=B6(this._delegate):t=L6(this._delegate),t.then(r=>new Rv(this.firestore,new ga(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=fD(e),r=pD(e,a=>new Rv(this.firestore,new ga(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return uD(this._delegate,t,r)}withConverter(e){return new Nn(this.firestore,e?this._delegate.withConverter(Oo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class iF{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Jh(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Rv{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Nn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Jh(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new iF(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Jh(this._firestore,r))})}isEqual(e){return lD(this._delegate,e._delegate)}}class Au extends Nn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Er(this.firestore,e):null}doc(e){try{return e===void 0?new Er(this.firestore,sm(this._delegate)):new Er(this.firestore,sm(this._delegate,e))}catch(t){throw On(t,"doc()","CollectionReference.doc()")}}add(e){return F6(this._delegate,e).then(t=>new Er(this.firestore,t))}isEqual(e){return Qx(this._delegate,e._delegate)}withConverter(e){return new Au(this.firestore,e?this._delegate.withConverter(Oo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function go(n){return Xe(n,Tt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(...e){this._delegate=new ma(...e)}static documentId(){return new AT(pt.keyField().canonicalString())}isEqual(e){return e=Ae(e),e instanceof ma?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{static serverTimestamp(){const e=W6();return e._methodName="FieldValue.serverTimestamp",new co(e)}static delete(){const e=Q6();return e._methodName="FieldValue.delete",new co(e)}static arrayUnion(...e){const t=Y6(...e);return t._methodName="FieldValue.arrayUnion",new co(t)}static arrayRemove(...e){const t=X6(...e);return t._methodName="FieldValue.arrayRemove",new co(t)}static increment(e){const t=Z6(e);return t._methodName="FieldValue.increment",new co(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sF={Firestore:cD,GeoPoint:Gm,Timestamp:gt,Blob:Xh,Transaction:hD,WriteBatch:dD,DocumentReference:Er,DocumentSnapshot:Zh,Query:Nn,QueryDocumentSnapshot:Jh,QuerySnapshot:Rv,CollectionReference:Au,FieldPath:AT,FieldValue:co,setLogLevel:rF,CACHE_SIZE_UNLIMITED:c6};function aF(n,e){n.INTERNAL.registerComponent(new ci("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(r,a)},"PUBLIC").setServiceProps(Object.assign({},sF)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oF(n){aF(n,(e,t)=>new cD(e,t,new nF)),n.registerVersion(J6,eF)}oF(Du);const lF={apiKey:"AIzaSyDhIqF2MGb8g-1KDM2OIdfhwuCzkwWUQSU",authDomain:"react-app-mini-blog-37d78.firebaseapp.com",projectId:"react-app-mini-blog-37d78",storageBucket:"react-app-mini-blog-37d78.firebasestorage.app",messagingSenderId:"258623057423",appId:"1:258623057423:web:9130fa43465995423b7d7a"},uF=Du.initializeApp(lF),ed=uF.firestore(),cF=ce.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    margin: 20px 0px;
`;function hF(n){const e=lm(),[t,r]=X.useState([]);return X.useEffect(()=>{let a=[];ed.collection("post").get().then(o=>{o.forEach(u=>{a.push(u.data()),console.log(u.data())}),r(a)})},[]),J.jsxs("div",{children:[J.jsx(zv,{page:0}),J.jsx(Zk,{}),J.jsx(cF,{children:J.jsx(Nk,{posts:t,itemClicked:a=>{e(`./post/${a.id}`)}})}),J.jsx(Fv,{})]})}const dF=ce.textarea`
    background-color: transparent;
    height: ${n=>n.height}px;
    display: block;
    border-radius: 8px;
    border: 1px solid #202020;
    font-size: 18px;
    text-align: left;
    text-justify: center;
    padding: 10px 20px 10px 20px;
    resize: none;
`,fF=ce.h1`
    font-size: 32px;
    font-weight: 700;
    color: #111111;
    margin-bottom: 10px;
`,pF=ce.div`
    width: 1129px;
    height: auto;
    display: flex;
    flex-direction: column;
`;function dS(n){const{height:e,value:t,onChange:r,title:a}=n;function o(u){r&&r(u)}return J.jsxs(pF,{children:[J.jsx(fF,{children:a}),J.jsx(dF,{height:e||24,value:t,onChange:o})]})}const mF=ce.input`
    background-color: transparent;
    height: ${n=>n.height}px;
    display: block;
    border-radius: 8px;
    border: 1px solid #202020;
    font-size: 18px;
    text-align: left;
    text-justify: center;
    padding: 10px 20px 10px 20px;
    resize: none;
`,gF=ce.h1`
    font-size: 32px;
    font-weight: 700;
    color: #111111;
    margin-bottom: 10px;
`,_F=ce.div`
    width: 1129px;
    height: auto;
    display: flex;
    flex-direction: column;
`;function yF(n){const{height:e,value:t,onChange:r,title:a}=n;function o(u){r&&r(u)}return J.jsxs(_F,{children:[J.jsx(gF,{children:a}),J.jsx(mF,{height:e||24,value:t,type:"file",accept:"image/*",onChange:o})]})}const vF=ce.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    margin: 20px 0px;
`,EF=ce.div`
    display: flex;
    width: 1129px;
    height: 40px;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 50px;
`,TF=ce.div`
    display: flex;
    width: 100%;
    height: 168px;
    padding: 40px 0px 40px 198px;
    flex-direction: column;
`,wF=ce.h1`
    font-size: 40px;
    font-weight: 800;
    color: #111;
`,bF=ce.h2`
    font-size: 20px;
    font-weight: 500;
    color: #505050;
`,IF=ce.div`
    display: block;
    /* position: absolute; */
    top: 0%;
    width: 73vw;
    height: 1px;
    background-color: #505050;
    margin-left: 198px;

    @media screen and (min-width: 1920px) {
        width: 85vw;
    }
`,AF=ce.img`
    display: flex;
    max-height: 200px;
    object-fit: cover;
    margin-top: 20px;
    /* border-radius: ; */
`;function SF(n){const[e,t]=X.useState(""),[r,a]=X.useState(""),[o,u]=X.useState(null),d=lm(),p=()=>{let y=new Date().getTime().toString();const v=new Date,w=v.getFullYear().toString().slice(2),S=(v.getMonth()+1).toString().padStart(2,"0"),D=v.getDate().toString().padStart(2,"0"),U=`${w}.${S}.${D}`;ed.collection("post").doc(y).set({id:y,date:U,title:e,content:r,comments:[],image:o}).then(()=>{d("/")})},m=y=>{let v=new FileReader;v.readAsDataURL(y.target.files[0]),v.onload=w=>{console.log(w.target.result),u(w.target.result)}};return J.jsxs("div",{children:[J.jsx(zv,{page:2}),J.jsxs(TF,{children:[J.jsx(wF,{children:"Write a post"}),J.jsx(bF,{children:"Share your thoughts, write updates, or document what you’re building today."})]}),J.jsx(IF,{}),J.jsxs(vF,{children:[J.jsx(dS,{height:"24",value:e,onChange:y=>t(y.target.value),title:"Title"}),J.jsx(dS,{height:"192",value:r,onChange:y=>a(y.target.value),title:"Content"}),J.jsx(yF,{title:"Open Image",height:"24",onChange:y=>m(y),src:o}),J.jsx(AF,{src:o}),J.jsxs(EF,{children:[J.jsx(zy,{type:"cancel",title:"Cancel",onClick:y=>{d("/")}}),J.jsx(zy,{title:"Submit post",onClick:y=>{p()}})]})]}),J.jsx(Fv,{})]})}const mD=ce.div`
    background-color: transparent;
    display: flex;
    width: 1086px;
    height: 80px;
    border-radius: 8px;
    border: 1px solid #D0D0D0;
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
`,RF=ce(mD)`
    border: none;
`,fS=ce.div`
    display: flex;
    width: 252px;
    height: 40px;
    justify-content: space-between;
    align-items: center;
`,pS=ce.div`
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: gray;
`,mS=ce.p`
    color: #404040;
    font-size: 18px;
    font-weight: 500;
`,CF=ce.p`
    font-size: 20px;
    color: #404040;
    font-weight: 400;
`,xF=ce.textarea`
    border: none;
    border-bottom: 1px solid #404040;
    width: 966px;
    height: 20px;  
    max-height: 100px;
    margin-right: 20px;  
    font-size: 20px;
    color: #404040;
    text-justify: center;
    outline-color: transparent;
    resize: none;
`,DF=ce.div`
    display: flex;
    width: 1088px;
    height: auto;
    flex-direction: row;
    align-items: end;
`;function gS(n){const e=SS().id,{comments:t}=n,[r,a]=X.useState(""),[o,u]=X.useState({comments:[]});X.useEffect(()=>{ed.collection("post").doc(e).get().then(p=>{u(p.data())})},[]);const d=()=>{let p=new Date().getTime().toString(),m=o.comments;m.push({id:`${e}_${p}`,comment:r,profileName:"@my_name_is_comment"}),ed.collection("post").doc(e).update({comments:m}).then(()=>{alert("댓글이 등록되었습니다"),a(""),n.setPost&&n.setPost(y=>({...y,comments:m}))})};return n.type=="commentInput"?J.jsxs(RF,{children:[J.jsxs(fS,{children:[J.jsx(pS,{}),J.jsx(mS,{children:n.profileName})]}),J.jsxs(DF,{children:[J.jsx(xF,{value:r,onChange:p=>{a(p.target.value)}}),J.jsx(Np,{title:"Comment",onClick:p=>{d()}})]})]}):J.jsxs(mD,{children:[J.jsxs(fS,{children:[J.jsx(pS,{}),J.jsx(mS,{children:n.profileName})]}),J.jsx(CF,{children:n.comment.comment})]})}const PF=ce.div`
    background-color: transparent;
    display: flex;
    width: 1128px;
    height: auto;
    gap: 12px;
    flex-direction: column;
    margin-top: 64px;
`,NF=ce.div`
    display: flex;
    width: 1129px;
    height: 36px;
    flex-direction: column;
    justify-content: space-between;
`,OF=ce.div`
    display: flex;
    /* position: absolute; */
    bottom: 0%;
    width: 73vw;
    height: 1px;
    background-color: #909090;
    /* margin: 0px 198px; */

    @media screen and (min-width: 1920px) {
        width: 85vw;
    }
`,kF=ce.p`
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    color: #505050;
`;function VF(n){const{comments:e,post:t,setPost:r}=n,a=e.map((o,u)=>J.jsx(gS,{comment:o,profileName:o.profileName},o.id));return J.jsxs(PF,{children:[J.jsxs(NF,{children:[J.jsxs(kF,{children:[e.length," Comment"]}),J.jsx(OF,{})]}),J.jsx(gS,{type:"commentInput",profileName:"@my_name_is_comment",comments:e,post:t,setPost:r}),a]})}const MF=ce.div`
    display: flex;
    width: 100%;
    height: calc(303px - 168px);
    /* background-color: #d9d9d9; */
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 84px 0px;
`,LF=ce.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 303px;
    background-color: #C3F0D8;
    z-index: -1;
    top: 84px;
`,UF=ce.div`
    display: flex;
    position: absolute;
    left: 5%;
    top: 5%;
    width: 489px;
    height: 277px;
    background-image: url(/MainImgRight.png);
    background-repeat: no-repeat;
    background-position: center;
`,BF=ce.div`
    display: flex;
    position: absolute;
    right: 0;
    top: 30%;
    width: 140px;
    height: 120px;
    background-image: url(/MainImgLeftReverse.png);
    background-repeat: no-repeat;
    background-position: center;
`,zF=ce.h1`
    margin: 0;
    font-size: 40px;
    font-weight: 800;
    color: #111;
`,FF=ce.div`
    display: flex;
    width: 96px;
    height: 50px;
    flex-direction: column;
    justify-content: space-between;
`,jF=ce.h3`
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: #404040;
`,qF=ce.div`
    display: flex;
    width: 90px;
    height: 20px;
    justify-content: space-between;
    align-items: center;
`,HF=ce.h2`
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    color: #606060;
`,GF=ce.div`
    display: flex;
    width: 20px;
    height: 20px;
    background-image: url(/DateIcon.svg);
    background-repeat: no-repeat;
    background-position: center;
`;function $F(n){return J.jsxs(MF,{children:[J.jsxs(LF,{children:[J.jsx(UF,{}),J.jsx(BF,{})]}),J.jsx(zF,{children:n.title}),J.jsxs(FF,{children:[J.jsx(jF,{children:"@Yejun_Kim"}),J.jsxs(qF,{children:[J.jsx(GF,{}),J.jsx(HF,{children:n.date})]})]})]})}ce.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    margin: 20px 0px;
`;ce.div`
    display: flex;
    width: 1129px;
    height: auto;
    justify-content: space-between;
`;ce.div`
    display: flex;
    width: 363px;
    height: 363px;
    background-color: #959595;
    border-radius: 20px;
`;ce.div`
    display: flex;
    width: 671px;
    height: auto;
`;ce.p`
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    color: #202020;
    letter-spacing: 1px;
    line-height: 175%;
`;const KF=ce.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    margin: 20px 0px;
`,QF=ce.div`
    display: flex;
    width: 1129px;
    height: auto;
    justify-content: space-between;
`,WF=ce.div`
    display: flex;
    width: 363px;
    height: 363px;
    background-color: #959595;
    border-radius: 20px;
`,YF=ce.img`
    display: flex;
    width: 363px;
    height: 363px;
    border-radius: 20px;
    object-fit: cover;
`,XF=ce.div`
    display: flex;
    width: 671px;
    height: auto;
`,ZF=ce.p`
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    color: #202020;
    letter-spacing: 1px;
    line-height: 175%;
`;function JF(n){const e=SS().id,[t,r]=X.useState(null),[a,o]=X.useState({id:0,title:"",content:"",comments:[],image:t});return X.useEffect(()=>{ed.collection("post").doc(e).get().then(u=>{o(u.data())})},[]),J.jsxs("div",{children:[J.jsx(zv,{page:1}),J.jsx($F,{title:a.title,date:a.date}),J.jsxs(KF,{children:[J.jsxs(QF,{children:[J.jsx(WF,{children:J.jsx(YF,{src:a.image})}),J.jsx(XF,{children:J.jsx(ZF,{children:a.content})})]}),J.jsx(VF,{comments:a.comments,post:a,setPost:o})]}),J.jsx(Fv,{})]})}YP.createRoot(document.getElementById("root")).render(J.jsx(uO,{basename:"/mini-blog/",children:J.jsxs(zN,{children:[J.jsx(sp,{index:!0,element:J.jsx(hF,{})}),J.jsx(sp,{path:"write",element:J.jsx(SF,{})}),J.jsx(sp,{path:"post/:id",element:J.jsx(JF,{})})]})}));
