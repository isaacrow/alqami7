var Bv=Object.defineProperty;var zv=(o,e,t)=>e in o?Bv(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var qt=(o,e,t)=>zv(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function v_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var rd={exports:{}},sa={},sd={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function Hv(){if(Lm)return xt;Lm=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(N,ne,Oe){this.props=N,this.context=ne,this.refs=E,this.updater=Oe||y}S.prototype.isReactComponent={},S.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=S.prototype;function L(N,ne,Oe){this.props=N,this.context=ne,this.refs=E,this.updater=Oe||y}var I=L.prototype=new x;I.constructor=L,M(I,S.prototype),I.isPureReactComponent=!0;var A=Array.isArray,q=Object.prototype.hasOwnProperty,k={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function X(N,ne,Oe){var Z,ue={},Te=null,Se=null;if(ne!=null)for(Z in ne.ref!==void 0&&(Se=ne.ref),ne.key!==void 0&&(Te=""+ne.key),ne)q.call(ne,Z)&&!U.hasOwnProperty(Z)&&(ue[Z]=ne[Z]);var Ce=arguments.length-2;if(Ce===1)ue.children=Oe;else if(1<Ce){for(var ze=Array(Ce),nt=0;nt<Ce;nt++)ze[nt]=arguments[nt+2];ue.children=ze}if(N&&N.defaultProps)for(Z in Ce=N.defaultProps,Ce)ue[Z]===void 0&&(ue[Z]=Ce[Z]);return{$$typeof:o,type:N,key:Te,ref:Se,props:ue,_owner:k.current}}function C(N,ne){return{$$typeof:o,type:N.type,key:ne,ref:N.ref,props:N.props,_owner:N._owner}}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function z(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Oe){return ne[Oe]})}var se=/\/+/g;function J(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?z(""+N.key):ne.toString(36)}function fe(N,ne,Oe,Z,ue){var Te=typeof N;(Te==="undefined"||Te==="boolean")&&(N=null);var Se=!1;if(N===null)Se=!0;else switch(Te){case"string":case"number":Se=!0;break;case"object":switch(N.$$typeof){case o:case e:Se=!0}}if(Se)return Se=N,ue=ue(Se),N=Z===""?"."+J(Se,0):Z,A(ue)?(Oe="",N!=null&&(Oe=N.replace(se,"$&/")+"/"),fe(ue,ne,Oe,"",function(nt){return nt})):ue!=null&&(R(ue)&&(ue=C(ue,Oe+(!ue.key||Se&&Se.key===ue.key?"":(""+ue.key).replace(se,"$&/")+"/")+N)),ne.push(ue)),1;if(Se=0,Z=Z===""?".":Z+":",A(N))for(var Ce=0;Ce<N.length;Ce++){Te=N[Ce];var ze=Z+J(Te,Ce);Se+=fe(Te,ne,Oe,ze,ue)}else if(ze=_(N),typeof ze=="function")for(N=ze.call(N),Ce=0;!(Te=N.next()).done;)Te=Te.value,ze=Z+J(Te,Ce++),Se+=fe(Te,ne,Oe,ze,ue);else if(Te==="object")throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return Se}function he(N,ne,Oe){if(N==null)return N;var Z=[],ue=0;return fe(N,Z,"","",function(Te){return ne.call(Oe,Te,ue++)}),Z}function ae(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(Oe){(N._status===0||N._status===-1)&&(N._status=1,N._result=Oe)},function(Oe){(N._status===0||N._status===-1)&&(N._status=2,N._result=Oe)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var ce={current:null},B={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:B,ReactCurrentOwner:k};function ie(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:he,forEach:function(N,ne,Oe){he(N,function(){ne.apply(this,arguments)},Oe)},count:function(N){var ne=0;return he(N,function(){ne++}),ne},toArray:function(N){return he(N,function(ne){return ne})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},xt.Component=S,xt.Fragment=t,xt.Profiler=s,xt.PureComponent=L,xt.StrictMode=i,xt.Suspense=f,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,xt.act=ie,xt.cloneElement=function(N,ne,Oe){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Z=M({},N.props),ue=N.key,Te=N.ref,Se=N._owner;if(ne!=null){if(ne.ref!==void 0&&(Te=ne.ref,Se=k.current),ne.key!==void 0&&(ue=""+ne.key),N.type&&N.type.defaultProps)var Ce=N.type.defaultProps;for(ze in ne)q.call(ne,ze)&&!U.hasOwnProperty(ze)&&(Z[ze]=ne[ze]===void 0&&Ce!==void 0?Ce[ze]:ne[ze])}var ze=arguments.length-2;if(ze===1)Z.children=Oe;else if(1<ze){Ce=Array(ze);for(var nt=0;nt<ze;nt++)Ce[nt]=arguments[nt+2];Z.children=Ce}return{$$typeof:o,type:N.type,key:ue,ref:Te,props:Z,_owner:Se}},xt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:a,_context:N},N.Consumer=N},xt.createElement=X,xt.createFactory=function(N){var ne=X.bind(null,N);return ne.type=N,ne},xt.createRef=function(){return{current:null}},xt.forwardRef=function(N){return{$$typeof:u,render:N}},xt.isValidElement=R,xt.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:ae}},xt.memo=function(N,ne){return{$$typeof:h,type:N,compare:ne===void 0?null:ne}},xt.startTransition=function(N){var ne=B.transition;B.transition={};try{N()}finally{B.transition=ne}},xt.unstable_act=ie,xt.useCallback=function(N,ne){return ce.current.useCallback(N,ne)},xt.useContext=function(N){return ce.current.useContext(N)},xt.useDebugValue=function(){},xt.useDeferredValue=function(N){return ce.current.useDeferredValue(N)},xt.useEffect=function(N,ne){return ce.current.useEffect(N,ne)},xt.useId=function(){return ce.current.useId()},xt.useImperativeHandle=function(N,ne,Oe){return ce.current.useImperativeHandle(N,ne,Oe)},xt.useInsertionEffect=function(N,ne){return ce.current.useInsertionEffect(N,ne)},xt.useLayoutEffect=function(N,ne){return ce.current.useLayoutEffect(N,ne)},xt.useMemo=function(N,ne){return ce.current.useMemo(N,ne)},xt.useReducer=function(N,ne,Oe){return ce.current.useReducer(N,ne,Oe)},xt.useRef=function(N){return ce.current.useRef(N)},xt.useState=function(N){return ce.current.useState(N)},xt.useSyncExternalStore=function(N,ne,Oe){return ce.current.useSyncExternalStore(N,ne,Oe)},xt.useTransition=function(){return ce.current.useTransition()},xt.version="18.3.1",xt}var Im;function Hf(){return Im||(Im=1,sd.exports=Hv()),sd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function Vv(){if(Dm)return sa;Dm=1;var o=Hf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,h){var m,g={},_=null,y=null;h!==void 0&&(_=""+h),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(y=f.ref);for(m in f)i.call(f,m)&&!a.hasOwnProperty(m)&&(g[m]=f[m]);if(u&&u.defaultProps)for(m in f=u.defaultProps,f)g[m]===void 0&&(g[m]=f[m]);return{$$typeof:e,type:u,key:_,ref:y,props:g,_owner:s.current}}return sa.Fragment=t,sa.jsx=c,sa.jsxs=c,sa}var Nm;function Gv(){return Nm||(Nm=1,rd.exports=Vv()),rd.exports}var _e=Gv(),vt=Hf();const Wv=v_(vt);var Ul={},od={exports:{}},Hn={},ad={exports:{}},ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function Xv(){return Um||(Um=1,(function(o){function e(B,le){var ie=B.length;B.push(le);e:for(;0<ie;){var N=ie-1>>>1,ne=B[N];if(0<s(ne,le))B[N]=le,B[ie]=ne,ie=N;else break e}}function t(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var le=B[0],ie=B.pop();if(ie!==le){B[0]=ie;e:for(var N=0,ne=B.length,Oe=ne>>>1;N<Oe;){var Z=2*(N+1)-1,ue=B[Z],Te=Z+1,Se=B[Te];if(0>s(ue,ie))Te<ne&&0>s(Se,ue)?(B[N]=Se,B[Te]=ie,N=Te):(B[N]=ue,B[Z]=ie,N=Z);else if(Te<ne&&0>s(Se,ie))B[N]=Se,B[Te]=ie,N=Te;else break e}}return le}function s(B,le){var ie=B.sortIndex-le.sortIndex;return ie!==0?ie:B.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var f=[],h=[],m=1,g=null,_=3,y=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var le=t(h);le!==null;){if(le.callback===null)i(h);else if(le.startTime<=B)i(h),le.sortIndex=le.expirationTime,e(f,le);else break;le=t(h)}}function A(B){if(E=!1,I(B),!M)if(t(f)!==null)M=!0,ae(q);else{var le=t(h);le!==null&&ce(A,le.startTime-B)}}function q(B,le){M=!1,E&&(E=!1,x(X),X=-1),y=!0;var ie=_;try{for(I(le),g=t(f);g!==null&&(!(g.expirationTime>le)||B&&!z());){var N=g.callback;if(typeof N=="function"){g.callback=null,_=g.priorityLevel;var ne=N(g.expirationTime<=le);le=o.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(f)&&i(f),I(le)}else i(f);g=t(f)}if(g!==null)var Oe=!0;else{var Z=t(h);Z!==null&&ce(A,Z.startTime-le),Oe=!1}return Oe}finally{g=null,_=ie,y=!1}}var k=!1,U=null,X=-1,C=5,R=-1;function z(){return!(o.unstable_now()-R<C)}function se(){if(U!==null){var B=o.unstable_now();R=B;var le=!0;try{le=U(!0,B)}finally{le?J():(k=!1,U=null)}}else k=!1}var J;if(typeof L=="function")J=function(){L(se)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=se,J=function(){he.postMessage(null)}}else J=function(){S(se,0)};function ae(B){U=B,k||(k=!0,J())}function ce(B,le){X=S(function(){B(o.unstable_now())},le)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){M||y||(M=!0,ae(q))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(f)},o.unstable_next=function(B){switch(_){case 1:case 2:case 3:var le=3;break;default:le=_}var ie=_;_=le;try{return B()}finally{_=ie}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,le){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ie=_;_=B;try{return le()}finally{_=ie}},o.unstable_scheduleCallback=function(B,le,ie){var N=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?N+ie:N):ie=N,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=ie+ne,B={id:m++,callback:le,priorityLevel:B,startTime:ie,expirationTime:ne,sortIndex:-1},ie>N?(B.sortIndex=ie,e(h,B),t(f)===null&&B===t(h)&&(E?(x(X),X=-1):E=!0,ce(A,ie-N))):(B.sortIndex=ne,e(f,B),M||y||(M=!0,ae(q))),B},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(B){var le=_;return function(){var ie=_;_=le;try{return B.apply(this,arguments)}finally{_=ie}}}})(ld)),ld}var Fm;function jv(){return Fm||(Fm=1,ad.exports=Xv()),ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function qv(){if(Om)return Hn;Om=1;var o=Hf(),e=jv();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return f.call(g,n)?!0:f.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function y(n,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,d){if(r===null||typeof r>"u"||y(n,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,d,p,v,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,L);S[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,L);S[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,L);S[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,r,l,d){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,d)&&(l=null),d||p===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,d=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?n.setAttributeNS(d,r,l):n.setAttribute(r,l))))}var A=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),k=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),B=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,N;function ne(n){if(N===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);N=r&&r[1]||""}return`
`+N+n}var Oe=!1;function Z(n,r){if(!n||Oe)return"";Oe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(Q){var d=Q}Reflect.construct(n,[],r)}else{try{r.call()}catch(Q){d=Q}n.call(r.prototype)}else{try{throw Error()}catch(Q){d=Q}n()}}catch(Q){if(Q&&d&&typeof Q.stack=="string"){for(var p=Q.stack.split(`
`),v=d.stack.split(`
`),T=p.length-1,D=v.length-1;1<=T&&0<=D&&p[T]!==v[D];)D--;for(;1<=T&&0<=D;T--,D--)if(p[T]!==v[D]){if(T!==1||D!==1)do if(T--,D--,0>D||p[T]!==v[D]){var O=`
`+p[T].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=T&&0<=D);break}}}finally{Oe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ne(n):""}function ue(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function Te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case k:return"Portal";case C:return"Profiler";case X:return"StrictMode";case J:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case se:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return r=n.displayName||null,r!==null?r:Te(n.type)||"Memo";case ae:r=n._payload,n=n._init;try{return Te(n(r))}catch{}}return null}function Se(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(r);case 8:return r===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function nt(n){var r=ze(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){d=""+T,v.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(T){d=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ct(n){n._valueTracker||(n._valueTracker=nt(n))}function me(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return n&&(d=ze(n)?n.checked?"true":"false":n.value),n=d,n!==l?(r.setValue(n),!0):!1}function xe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function F(n,r){var l=r.checked;return ie({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Je(n,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=Ce(r.value!=null?r.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Xe(n,r){r=r.checked,r!=null&&I(n,"checked",r,!1)}function Le(n,r){Xe(n,r);var l=Ce(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ut(n,r.type,l):r.hasOwnProperty("defaultValue")&&ut(n,r.type,Ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function De(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function ut(n,r,l){(r!=="number"||xe(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var ke=Array.isArray;function P(n,r,l,d){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&d&&(n[l].defaultSelected=!0)}else{for(l=""+Ce(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,d&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function w(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function K(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(ke(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Ce(l)}}function de(n,r){var l=Ce(r.value),d=Ce(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function ge(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function re(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?re(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Re,Fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,d,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ht(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){He.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Me[r]=Me[n]})});function tt(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Me.hasOwnProperty(n)&&Me[n]?(""+r).trim():r+"px"}function Ke(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=tt(l,r[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,p):n[l]=p}}var Ge=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function at(n,r){if(r){if(Ge[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function dt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var It=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,oe=null,pe=null;function Ue(n){if(n=Wo(n)){if(typeof Pe!="function")throw Error(t(280));var r=n.stateNode;r&&(r=$a(r),Pe(n.stateNode,n.type,r))}}function Ne(n){oe?pe?pe.push(n):pe=[n]:oe=n}function ft(){if(oe){var n=oe,r=pe;if(pe=oe=null,Ue(n),r)for(n=0;n<r.length;n++)Ue(r[n])}}function Bt(n,r){return n(r)}function Qt(){}var wt=!1;function Nn(n,r,l){if(wt)return n(r,l);wt=!0;try{return Bt(n,r,l)}finally{wt=!1,(oe!==null||pe!==null)&&(Qt(),ft())}}function wn(n,r){var l=n.stateNode;if(l===null)return null;var d=$a(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Ss=!1;if(u)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Ss=!1}function zi(n,r,l,d,p,v,T,D,O){var Q=Array.prototype.slice.call(arguments,3);try{r.apply(l,Q)}catch(ye){this.onError(ye)}}var Hi=!1,Yr=null,Kr=!1,fr=null,Pa={onError:function(n){Hi=!0,Yr=n}};function Ms(n,r,l,d,p,v,T,D,O){Hi=!1,Yr=null,zi.apply(Pa,arguments)}function La(n,r,l,d,p,v,T,D,O){if(Ms.apply(this,arguments),Hi){if(Hi){var Q=Yr;Hi=!1,Yr=null}else throw Error(t(198));Kr||(Kr=!0,fr=Q)}}function Ci(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Ia(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Da(n){if(Ci(n)!==n)throw Error(t(188))}function Ac(n){var r=n.alternate;if(!r){if(r=Ci(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,d=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return Da(p),n;if(v===d)return Da(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=v;else{for(var T=!1,D=p.child;D;){if(D===l){T=!0,l=p,d=v;break}if(D===d){T=!0,d=p,l=v;break}D=D.sibling}if(!T){for(D=v.child;D;){if(D===l){T=!0,l=v,d=p;break}if(D===d){T=!0,d=v,l=p;break}D=D.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function b(n){return n=Ac(n),n!==null?W(n):null}function W(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=W(n);if(r!==null)return r;n=n.sibling}return null}var ee=e.unstable_scheduleCallback,te=e.unstable_cancelCallback,j=e.unstable_shouldYield,be=e.unstable_requestPaint,we=e.unstable_now,$e=e.unstable_getCurrentPriorityLevel,qe=e.unstable_ImmediatePriority,st=e.unstable_UserBlockingPriority,lt=e.unstable_NormalPriority,Ze=e.unstable_LowPriority,Tt=e.unstable_IdlePriority,Pt=null,Mt=null;function pn(n){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Pt,n,void 0,(n.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:bt,et=Math.log,ui=Math.LN2;function bt(n){return n>>>=0,n===0?32:31-(et(n)/ui|0)|0}var mn=64,di=4194304;function Jt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Pi(n,r){var l=n.pendingLanes;if(l===0)return 0;var d=0,p=n.suspendedLanes,v=n.pingedLanes,T=l&268435455;if(T!==0){var D=T&~p;D!==0?d=Jt(D):(v&=T,v!==0&&(d=Jt(v)))}else T=l&~p,T!==0?d=Jt(T):v!==0&&(d=Jt(v));if(d===0)return 0;if(r!==0&&r!==d&&(r&p)===0&&(p=d&-d,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if((d&4)!==0&&(d|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)l=31-pt(r),p=1<<l,d|=n[l],r&=~p;return d}function Ot(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qn(n,r){for(var l=n.suspendedLanes,d=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-pt(v),D=1<<T,O=p[T];O===-1?((D&l)===0||(D&d)!==0)&&(p[T]=Ot(D,r)):O<=r&&(n.expiredLanes|=D),v&=~D}}function Vi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function An(){var n=mn;return mn<<=1,(mn&4194240)===0&&(mn=64),n}function Jn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Un(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-pt(r),n[r]=l}function Na(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-pt(l),v=1<<p;r[p]=0,d[p]=-1,n[p]=-1,l&=~v}}function bc(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var d=31-pt(l),p=1<<d;p&r|n[d]&r&&(n[d]|=r),l&=~p}}var Dt=0;function ch(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var uh,Rc,dh,fh,hh,Cc=!1,Ua=[],hr=null,pr=null,mr=null,Ro=new Map,Co=new Map,gr=[],a0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ph(n,r){switch(n){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Ro.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(r.pointerId)}}function Po(n,r,l,d,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:v,targetContainers:[p]},r!==null&&(r=Wo(r),r!==null&&Rc(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function l0(n,r,l,d,p){switch(r){case"focusin":return hr=Po(hr,n,r,l,d,p),!0;case"dragenter":return pr=Po(pr,n,r,l,d,p),!0;case"mouseover":return mr=Po(mr,n,r,l,d,p),!0;case"pointerover":var v=p.pointerId;return Ro.set(v,Po(Ro.get(v)||null,n,r,l,d,p)),!0;case"gotpointercapture":return v=p.pointerId,Co.set(v,Po(Co.get(v)||null,n,r,l,d,p)),!0}return!1}function mh(n){var r=$r(n.target);if(r!==null){var l=Ci(r);if(l!==null){if(r=l.tag,r===13){if(r=Ia(l),r!==null){n.blockedOn=r,hh(n.priority,function(){dh(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Fa(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Lc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);It=d,l.target.dispatchEvent(d),It=null}else return r=Wo(l),r!==null&&Rc(r),n.blockedOn=l,!1;r.shift()}return!0}function gh(n,r,l){Fa(n)&&l.delete(r)}function c0(){Cc=!1,hr!==null&&Fa(hr)&&(hr=null),pr!==null&&Fa(pr)&&(pr=null),mr!==null&&Fa(mr)&&(mr=null),Ro.forEach(gh),Co.forEach(gh)}function Lo(n,r){n.blockedOn===r&&(n.blockedOn=null,Cc||(Cc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,c0)))}function Io(n){function r(p){return Lo(p,n)}if(0<Ua.length){Lo(Ua[0],n);for(var l=1;l<Ua.length;l++){var d=Ua[l];d.blockedOn===n&&(d.blockedOn=null)}}for(hr!==null&&Lo(hr,n),pr!==null&&Lo(pr,n),mr!==null&&Lo(mr,n),Ro.forEach(r),Co.forEach(r),l=0;l<gr.length;l++)d=gr[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<gr.length&&(l=gr[0],l.blockedOn===null);)mh(l),l.blockedOn===null&&gr.shift()}var Es=A.ReactCurrentBatchConfig,Oa=!0;function u0(n,r,l,d){var p=Dt,v=Es.transition;Es.transition=null;try{Dt=1,Pc(n,r,l,d)}finally{Dt=p,Es.transition=v}}function d0(n,r,l,d){var p=Dt,v=Es.transition;Es.transition=null;try{Dt=4,Pc(n,r,l,d)}finally{Dt=p,Es.transition=v}}function Pc(n,r,l,d){if(Oa){var p=Lc(n,r,l,d);if(p===null)Yc(n,r,d,ka,l),ph(n,d);else if(l0(p,n,r,l,d))d.stopPropagation();else if(ph(n,d),r&4&&-1<a0.indexOf(n)){for(;p!==null;){var v=Wo(p);if(v!==null&&uh(v),v=Lc(n,r,l,d),v===null&&Yc(n,r,d,ka,l),v===p)break;p=v}p!==null&&d.stopPropagation()}else Yc(n,r,d,null,l)}}var ka=null;function Lc(n,r,l,d){if(ka=null,n=G(d),n=$r(n),n!==null)if(r=Ci(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Ia(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return ka=n,null}function _h(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($e()){case qe:return 1;case st:return 4;case lt:case Ze:return 16;case Tt:return 536870912;default:return 16}default:return 16}}var _r=null,Ic=null,Ba=null;function vh(){if(Ba)return Ba;var n,r=Ic,l=r.length,d,p="value"in _r?_r.value:_r.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var T=l-n;for(d=1;d<=T&&r[l-d]===p[v-d];d++);return Ba=p.slice(n,1<d?1-d:void 0)}function za(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ha(){return!0}function xh(){return!1}function Gn(n){function r(l,d,p,v,T){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(l=n[D],this[D]=l?l(v):v[D]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ha:xh,this.isPropagationStopped=xh,this}return ie(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ha)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ha)},persist:function(){},isPersistent:Ha}),r}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dc=Gn(Ts),Do=ie({},Ts,{view:0,detail:0}),f0=Gn(Do),Nc,Uc,No,Va=ie({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==No&&(No&&n.type==="mousemove"?(Nc=n.screenX-No.screenX,Uc=n.screenY-No.screenY):Uc=Nc=0,No=n),Nc)},movementY:function(n){return"movementY"in n?n.movementY:Uc}}),yh=Gn(Va),h0=ie({},Va,{dataTransfer:0}),p0=Gn(h0),m0=ie({},Do,{relatedTarget:0}),Fc=Gn(m0),g0=ie({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),_0=Gn(g0),v0=ie({},Ts,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),x0=Gn(v0),y0=ie({},Ts,{data:0}),Sh=Gn(y0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T0(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=E0[n])?!!r[n]:!1}function Oc(){return T0}var w0=ie({},Do,{key:function(n){if(n.key){var r=S0[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=za(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oc,charCode:function(n){return n.type==="keypress"?za(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?za(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),A0=Gn(w0),b0=ie({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mh=Gn(b0),R0=ie({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oc}),C0=Gn(R0),P0=ie({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),L0=Gn(P0),I0=ie({},Va,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),D0=Gn(I0),N0=[9,13,27,32],kc=u&&"CompositionEvent"in window,Uo=null;u&&"documentMode"in document&&(Uo=document.documentMode);var U0=u&&"TextEvent"in window&&!Uo,Eh=u&&(!kc||Uo&&8<Uo&&11>=Uo),Th=" ",wh=!1;function Ah(n,r){switch(n){case"keyup":return N0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ws=!1;function F0(n,r){switch(n){case"compositionend":return bh(r);case"keypress":return r.which!==32?null:(wh=!0,Th);case"textInput":return n=r.data,n===Th&&wh?null:n;default:return null}}function O0(n,r){if(ws)return n==="compositionend"||!kc&&Ah(n,r)?(n=vh(),Ba=Ic=_r=null,ws=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Eh&&r.locale!=="ko"?null:r.data;default:return null}}var k0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!k0[n.type]:r==="textarea"}function Ch(n,r,l,d){Ne(d),r=qa(r,"onChange"),0<r.length&&(l=new Dc("onChange","change",null,l,d),n.push({event:l,listeners:r}))}var Fo=null,Oo=null;function B0(n){qh(n,0)}function Ga(n){var r=Ps(n);if(me(r))return n}function z0(n,r){if(n==="change")return r}var Ph=!1;if(u){var Bc;if(u){var zc="oninput"in document;if(!zc){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),zc=typeof Lh.oninput=="function"}Bc=zc}else Bc=!1;Ph=Bc&&(!document.documentMode||9<document.documentMode)}function Ih(){Fo&&(Fo.detachEvent("onpropertychange",Dh),Oo=Fo=null)}function Dh(n){if(n.propertyName==="value"&&Ga(Oo)){var r=[];Ch(r,Oo,n,G(n)),Nn(B0,r)}}function H0(n,r,l){n==="focusin"?(Ih(),Fo=r,Oo=l,Fo.attachEvent("onpropertychange",Dh)):n==="focusout"&&Ih()}function V0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ga(Oo)}function G0(n,r){if(n==="click")return Ga(r)}function W0(n,r){if(n==="input"||n==="change")return Ga(r)}function X0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var fi=typeof Object.is=="function"?Object.is:X0;function ko(n,r){if(fi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!f.call(r,p)||!fi(n[p],r[p]))return!1}return!0}function Nh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Uh(n,r){var l=Nh(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=r&&d>=r)return{node:l,offset:r-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Nh(l)}}function Fh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Fh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Oh(){for(var n=window,r=xe();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=xe(n.document)}return r}function Hc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function j0(n){var r=Oh(),l=n.focusedElem,d=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Fh(l.ownerDocument.documentElement,l)){if(d!==null&&Hc(l)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(d.start,p);d=d.end===void 0?v:Math.min(d.end,p),!n.extend&&v>d&&(p=d,d=v,v=p),p=Uh(l,v);var T=Uh(l,d);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>d?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var q0=u&&"documentMode"in document&&11>=document.documentMode,As=null,Vc=null,Bo=null,Gc=!1;function kh(n,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Gc||As==null||As!==xe(d)||(d=As,"selectionStart"in d&&Hc(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Bo&&ko(Bo,d)||(Bo=d,d=qa(Vc,"onSelect"),0<d.length&&(r=new Dc("onSelect","select",null,r,l),n.push({event:r,listeners:d}),r.target=As)))}function Wa(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var bs={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},Wc={},Bh={};u&&(Bh=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Xa(n){if(Wc[n])return Wc[n];if(!bs[n])return n;var r=bs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Bh)return Wc[n]=r[l];return n}var zh=Xa("animationend"),Hh=Xa("animationiteration"),Vh=Xa("animationstart"),Gh=Xa("transitionend"),Wh=new Map,Xh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(n,r){Wh.set(n,r),a(r,[n])}for(var Xc=0;Xc<Xh.length;Xc++){var jc=Xh[Xc],Y0=jc.toLowerCase(),K0=jc[0].toUpperCase()+jc.slice(1);vr(Y0,"on"+K0)}vr(zh,"onAnimationEnd"),vr(Hh,"onAnimationIteration"),vr(Vh,"onAnimationStart"),vr("dblclick","onDoubleClick"),vr("focusin","onFocus"),vr("focusout","onBlur"),vr(Gh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$0=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function jh(n,r,l){var d=n.type||"unknown-event";n.currentTarget=l,La(d,r,void 0,n),n.currentTarget=null}function qh(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],p=d.event;d=d.listeners;e:{var v=void 0;if(r)for(var T=d.length-1;0<=T;T--){var D=d[T],O=D.instance,Q=D.currentTarget;if(D=D.listener,O!==v&&p.isPropagationStopped())break e;jh(p,D,Q),v=O}else for(T=0;T<d.length;T++){if(D=d[T],O=D.instance,Q=D.currentTarget,D=D.listener,O!==v&&p.isPropagationStopped())break e;jh(p,D,Q),v=O}}}if(Kr)throw n=fr,Kr=!1,fr=null,n}function zt(n,r){var l=r[eu];l===void 0&&(l=r[eu]=new Set);var d=n+"__bubble";l.has(d)||(Yh(r,n,2,!1),l.add(d))}function qc(n,r,l){var d=0;r&&(d|=4),Yh(l,n,d,r)}var ja="_reactListening"+Math.random().toString(36).slice(2);function Ho(n){if(!n[ja]){n[ja]=!0,i.forEach(function(l){l!=="selectionchange"&&($0.has(l)||qc(l,!1,n),qc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ja]||(r[ja]=!0,qc("selectionchange",!1,r))}}function Yh(n,r,l,d){switch(_h(r)){case 1:var p=u0;break;case 4:p=d0;break;default:p=Pc}l=p.bind(null,r,l,n),p=void 0,!Ss||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),d?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function Yc(n,r,l,d,p){var v=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var T=d.tag;if(T===3||T===4){var D=d.stateNode.containerInfo;if(D===p||D.nodeType===8&&D.parentNode===p)break;if(T===4)for(T=d.return;T!==null;){var O=T.tag;if((O===3||O===4)&&(O=T.stateNode.containerInfo,O===p||O.nodeType===8&&O.parentNode===p))return;T=T.return}for(;D!==null;){if(T=$r(D),T===null)return;if(O=T.tag,O===5||O===6){d=v=T;continue e}D=D.parentNode}}d=d.return}Nn(function(){var Q=v,ye=G(l),Ee=[];e:{var ve=Wh.get(n);if(ve!==void 0){var Be=Dc,je=n;switch(n){case"keypress":if(za(l)===0)break e;case"keydown":case"keyup":Be=A0;break;case"focusin":je="focus",Be=Fc;break;case"focusout":je="blur",Be=Fc;break;case"beforeblur":case"afterblur":Be=Fc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=p0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=C0;break;case zh:case Hh:case Vh:Be=_0;break;case Gh:Be=L0;break;case"scroll":Be=f0;break;case"wheel":Be=D0;break;case"copy":case"cut":case"paste":Be=x0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Mh}var Ye=(r&4)!==0,Yt=!Ye&&n==="scroll",Y=Ye?ve!==null?ve+"Capture":null:ve;Ye=[];for(var H=Q,$;H!==null;){$=H;var Ae=$.stateNode;if($.tag===5&&Ae!==null&&($=Ae,Y!==null&&(Ae=wn(H,Y),Ae!=null&&Ye.push(Vo(H,Ae,$)))),Yt)break;H=H.return}0<Ye.length&&(ve=new Be(ve,je,null,l,ye),Ee.push({event:ve,listeners:Ye}))}}if((r&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Be=n==="mouseout"||n==="pointerout",ve&&l!==It&&(je=l.relatedTarget||l.fromElement)&&($r(je)||je[Gi]))break e;if((Be||ve)&&(ve=ye.window===ye?ye:(ve=ye.ownerDocument)?ve.defaultView||ve.parentWindow:window,Be?(je=l.relatedTarget||l.toElement,Be=Q,je=je?$r(je):null,je!==null&&(Yt=Ci(je),je!==Yt||je.tag!==5&&je.tag!==6)&&(je=null)):(Be=null,je=Q),Be!==je)){if(Ye=yh,Ae="onMouseLeave",Y="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=Mh,Ae="onPointerLeave",Y="onPointerEnter",H="pointer"),Yt=Be==null?ve:Ps(Be),$=je==null?ve:Ps(je),ve=new Ye(Ae,H+"leave",Be,l,ye),ve.target=Yt,ve.relatedTarget=$,Ae=null,$r(ye)===Q&&(Ye=new Ye(Y,H+"enter",je,l,ye),Ye.target=$,Ye.relatedTarget=Yt,Ae=Ye),Yt=Ae,Be&&je)t:{for(Ye=Be,Y=je,H=0,$=Ye;$;$=Rs($))H++;for($=0,Ae=Y;Ae;Ae=Rs(Ae))$++;for(;0<H-$;)Ye=Rs(Ye),H--;for(;0<$-H;)Y=Rs(Y),$--;for(;H--;){if(Ye===Y||Y!==null&&Ye===Y.alternate)break t;Ye=Rs(Ye),Y=Rs(Y)}Ye=null}else Ye=null;Be!==null&&Kh(Ee,ve,Be,Ye,!1),je!==null&&Yt!==null&&Kh(Ee,Yt,je,Ye,!0)}}e:{if(ve=Q?Ps(Q):window,Be=ve.nodeName&&ve.nodeName.toLowerCase(),Be==="select"||Be==="input"&&ve.type==="file")var Qe=z0;else if(Rh(ve))if(Ph)Qe=W0;else{Qe=V0;var it=H0}else(Be=ve.nodeName)&&Be.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Qe=G0);if(Qe&&(Qe=Qe(n,Q))){Ch(Ee,Qe,l,ye);break e}it&&it(n,ve,Q),n==="focusout"&&(it=ve._wrapperState)&&it.controlled&&ve.type==="number"&&ut(ve,"number",ve.value)}switch(it=Q?Ps(Q):window,n){case"focusin":(Rh(it)||it.contentEditable==="true")&&(As=it,Vc=Q,Bo=null);break;case"focusout":Bo=Vc=As=null;break;case"mousedown":Gc=!0;break;case"contextmenu":case"mouseup":case"dragend":Gc=!1,kh(Ee,l,ye);break;case"selectionchange":if(q0)break;case"keydown":case"keyup":kh(Ee,l,ye)}var rt;if(kc)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else ws?Ah(n,l)&&(ot="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ot="onCompositionStart");ot&&(Eh&&l.locale!=="ko"&&(ws||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&ws&&(rt=vh()):(_r=ye,Ic="value"in _r?_r.value:_r.textContent,ws=!0)),it=qa(Q,ot),0<it.length&&(ot=new Sh(ot,n,null,l,ye),Ee.push({event:ot,listeners:it}),rt?ot.data=rt:(rt=bh(l),rt!==null&&(ot.data=rt)))),(rt=U0?F0(n,l):O0(n,l))&&(Q=qa(Q,"onBeforeInput"),0<Q.length&&(ye=new Sh("onBeforeInput","beforeinput",null,l,ye),Ee.push({event:ye,listeners:Q}),ye.data=rt))}qh(Ee,r)})}function Vo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function qa(n,r){for(var l=r+"Capture",d=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=wn(n,l),v!=null&&d.unshift(Vo(n,v,p)),v=wn(n,r),v!=null&&d.push(Vo(n,v,p))),n=n.return}return d}function Rs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Kh(n,r,l,d,p){for(var v=r._reactName,T=[];l!==null&&l!==d;){var D=l,O=D.alternate,Q=D.stateNode;if(O!==null&&O===d)break;D.tag===5&&Q!==null&&(D=Q,p?(O=wn(l,v),O!=null&&T.unshift(Vo(l,O,D))):p||(O=wn(l,v),O!=null&&T.push(Vo(l,O,D)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var Z0=/\r\n?/g,Q0=/\u0000|\uFFFD/g;function $h(n){return(typeof n=="string"?n:""+n).replace(Z0,`
`).replace(Q0,"")}function Ya(n,r,l){if(r=$h(r),$h(n)!==r&&l)throw Error(t(425))}function Ka(){}var Kc=null,$c=null;function Zc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Qc=typeof setTimeout=="function"?setTimeout:void 0,J0=typeof clearTimeout=="function"?clearTimeout:void 0,Zh=typeof Promise=="function"?Promise:void 0,ev=typeof queueMicrotask=="function"?queueMicrotask:typeof Zh<"u"?function(n){return Zh.resolve(null).then(n).catch(tv)}:Qc;function tv(n){setTimeout(function(){throw n})}function Jc(n,r){var l=r,d=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){n.removeChild(p),Io(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);Io(r)}function xr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Qh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Li="__reactFiber$"+Cs,Go="__reactProps$"+Cs,Gi="__reactContainer$"+Cs,eu="__reactEvents$"+Cs,nv="__reactListeners$"+Cs,iv="__reactHandles$"+Cs;function $r(n){var r=n[Li];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Gi]||l[Li]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Qh(n);n!==null;){if(l=n[Li])return l;n=Qh(n)}return r}n=l,l=n.parentNode}return null}function Wo(n){return n=n[Li]||n[Gi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function $a(n){return n[Go]||null}var tu=[],Ls=-1;function yr(n){return{current:n}}function Ht(n){0>Ls||(n.current=tu[Ls],tu[Ls]=null,Ls--)}function kt(n,r){Ls++,tu[Ls]=n.current,n.current=r}var Sr={},gn=yr(Sr),Fn=yr(!1),Zr=Sr;function Is(n,r){var l=n.type.contextTypes;if(!l)return Sr;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function On(n){return n=n.childContextTypes,n!=null}function Za(){Ht(Fn),Ht(gn)}function Jh(n,r,l){if(gn.current!==Sr)throw Error(t(168));kt(gn,r),kt(Fn,l)}function ep(n,r,l){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in r))throw Error(t(108,Se(n)||"Unknown",p));return ie({},l,d)}function Qa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Sr,Zr=gn.current,kt(gn,n),kt(Fn,Fn.current),!0}function tp(n,r,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=ep(n,r,Zr),d.__reactInternalMemoizedMergedChildContext=n,Ht(Fn),Ht(gn),kt(gn,n)):Ht(Fn),kt(Fn,l)}var Wi=null,Ja=!1,nu=!1;function np(n){Wi===null?Wi=[n]:Wi.push(n)}function rv(n){Ja=!0,np(n)}function Mr(){if(!nu&&Wi!==null){nu=!0;var n=0,r=Dt;try{var l=Wi;for(Dt=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}Wi=null,Ja=!1}catch(p){throw Wi!==null&&(Wi=Wi.slice(n+1)),ee(qe,Mr),p}finally{Dt=r,nu=!1}}return null}var Ds=[],Ns=0,el=null,tl=0,ei=[],ti=0,Qr=null,Xi=1,ji="";function Jr(n,r){Ds[Ns++]=tl,Ds[Ns++]=el,el=n,tl=r}function ip(n,r,l){ei[ti++]=Xi,ei[ti++]=ji,ei[ti++]=Qr,Qr=n;var d=Xi;n=ji;var p=32-pt(d)-1;d&=~(1<<p),l+=1;var v=32-pt(r)+p;if(30<v){var T=p-p%5;v=(d&(1<<T)-1).toString(32),d>>=T,p-=T,Xi=1<<32-pt(r)+p|l<<p|d,ji=v+n}else Xi=1<<v|l<<p|d,ji=n}function iu(n){n.return!==null&&(Jr(n,1),ip(n,1,0))}function ru(n){for(;n===el;)el=Ds[--Ns],Ds[Ns]=null,tl=Ds[--Ns],Ds[Ns]=null;for(;n===Qr;)Qr=ei[--ti],ei[ti]=null,ji=ei[--ti],ei[ti]=null,Xi=ei[--ti],ei[ti]=null}var Wn=null,Xn=null,Vt=!1,hi=null;function rp(n,r){var l=si(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function sp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Wn=n,Xn=xr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Wn=n,Xn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Qr!==null?{id:Xi,overflow:ji}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=si(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Wn=n,Xn=null,!0):!1;default:return!1}}function su(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ou(n){if(Vt){var r=Xn;if(r){var l=r;if(!sp(n,r)){if(su(n))throw Error(t(418));r=xr(l.nextSibling);var d=Wn;r&&sp(n,r)?rp(d,l):(n.flags=n.flags&-4097|2,Vt=!1,Wn=n)}}else{if(su(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,Wn=n}}}function op(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Wn=n}function nl(n){if(n!==Wn)return!1;if(!Vt)return op(n),Vt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Zc(n.type,n.memoizedProps)),r&&(r=Xn)){if(su(n))throw ap(),Error(t(418));for(;r;)rp(n,r),r=xr(r.nextSibling)}if(op(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Xn=xr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Xn=null}}else Xn=Wn?xr(n.stateNode.nextSibling):null;return!0}function ap(){for(var n=Xn;n;)n=xr(n.nextSibling)}function Us(){Xn=Wn=null,Vt=!1}function au(n){hi===null?hi=[n]:hi.push(n)}var sv=A.ReactCurrentBatchConfig;function Xo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var p=d,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(T){var D=p.refs;T===null?delete D[v]:D[v]=T},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function il(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function lp(n){var r=n._init;return r(n._payload)}function cp(n){function r(Y,H){if(n){var $=Y.deletions;$===null?(Y.deletions=[H],Y.flags|=16):$.push(H)}}function l(Y,H){if(!n)return null;for(;H!==null;)r(Y,H),H=H.sibling;return null}function d(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function p(Y,H){return Y=Pr(Y,H),Y.index=0,Y.sibling=null,Y}function v(Y,H,$){return Y.index=$,n?($=Y.alternate,$!==null?($=$.index,$<H?(Y.flags|=2,H):$):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function T(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function D(Y,H,$,Ae){return H===null||H.tag!==6?(H=Qu($,Y.mode,Ae),H.return=Y,H):(H=p(H,$),H.return=Y,H)}function O(Y,H,$,Ae){var Qe=$.type;return Qe===U?ye(Y,H,$.props.children,Ae,$.key):H!==null&&(H.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ae&&lp(Qe)===H.type)?(Ae=p(H,$.props),Ae.ref=Xo(Y,H,$),Ae.return=Y,Ae):(Ae=bl($.type,$.key,$.props,null,Y.mode,Ae),Ae.ref=Xo(Y,H,$),Ae.return=Y,Ae)}function Q(Y,H,$,Ae){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=Ju($,Y.mode,Ae),H.return=Y,H):(H=p(H,$.children||[]),H.return=Y,H)}function ye(Y,H,$,Ae,Qe){return H===null||H.tag!==7?(H=as($,Y.mode,Ae,Qe),H.return=Y,H):(H=p(H,$),H.return=Y,H)}function Ee(Y,H,$){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Qu(""+H,Y.mode,$),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case q:return $=bl(H.type,H.key,H.props,null,Y.mode,$),$.ref=Xo(Y,null,H),$.return=Y,$;case k:return H=Ju(H,Y.mode,$),H.return=Y,H;case ae:var Ae=H._init;return Ee(Y,Ae(H._payload),$)}if(ke(H)||le(H))return H=as(H,Y.mode,$,null),H.return=Y,H;il(Y,H)}return null}function ve(Y,H,$,Ae){var Qe=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Qe!==null?null:D(Y,H,""+$,Ae);if(typeof $=="object"&&$!==null){switch($.$$typeof){case q:return $.key===Qe?O(Y,H,$,Ae):null;case k:return $.key===Qe?Q(Y,H,$,Ae):null;case ae:return Qe=$._init,ve(Y,H,Qe($._payload),Ae)}if(ke($)||le($))return Qe!==null?null:ye(Y,H,$,Ae,null);il(Y,$)}return null}function Be(Y,H,$,Ae,Qe){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return Y=Y.get($)||null,D(H,Y,""+Ae,Qe);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case q:return Y=Y.get(Ae.key===null?$:Ae.key)||null,O(H,Y,Ae,Qe);case k:return Y=Y.get(Ae.key===null?$:Ae.key)||null,Q(H,Y,Ae,Qe);case ae:var it=Ae._init;return Be(Y,H,$,it(Ae._payload),Qe)}if(ke(Ae)||le(Ae))return Y=Y.get($)||null,ye(H,Y,Ae,Qe,null);il(H,Ae)}return null}function je(Y,H,$,Ae){for(var Qe=null,it=null,rt=H,ot=H=0,ln=null;rt!==null&&ot<$.length;ot++){rt.index>ot?(ln=rt,rt=null):ln=rt.sibling;var Rt=ve(Y,rt,$[ot],Ae);if(Rt===null){rt===null&&(rt=ln);break}n&&rt&&Rt.alternate===null&&r(Y,rt),H=v(Rt,H,ot),it===null?Qe=Rt:it.sibling=Rt,it=Rt,rt=ln}if(ot===$.length)return l(Y,rt),Vt&&Jr(Y,ot),Qe;if(rt===null){for(;ot<$.length;ot++)rt=Ee(Y,$[ot],Ae),rt!==null&&(H=v(rt,H,ot),it===null?Qe=rt:it.sibling=rt,it=rt);return Vt&&Jr(Y,ot),Qe}for(rt=d(Y,rt);ot<$.length;ot++)ln=Be(rt,Y,ot,$[ot],Ae),ln!==null&&(n&&ln.alternate!==null&&rt.delete(ln.key===null?ot:ln.key),H=v(ln,H,ot),it===null?Qe=ln:it.sibling=ln,it=ln);return n&&rt.forEach(function(Lr){return r(Y,Lr)}),Vt&&Jr(Y,ot),Qe}function Ye(Y,H,$,Ae){var Qe=le($);if(typeof Qe!="function")throw Error(t(150));if($=Qe.call($),$==null)throw Error(t(151));for(var it=Qe=null,rt=H,ot=H=0,ln=null,Rt=$.next();rt!==null&&!Rt.done;ot++,Rt=$.next()){rt.index>ot?(ln=rt,rt=null):ln=rt.sibling;var Lr=ve(Y,rt,Rt.value,Ae);if(Lr===null){rt===null&&(rt=ln);break}n&&rt&&Lr.alternate===null&&r(Y,rt),H=v(Lr,H,ot),it===null?Qe=Lr:it.sibling=Lr,it=Lr,rt=ln}if(Rt.done)return l(Y,rt),Vt&&Jr(Y,ot),Qe;if(rt===null){for(;!Rt.done;ot++,Rt=$.next())Rt=Ee(Y,Rt.value,Ae),Rt!==null&&(H=v(Rt,H,ot),it===null?Qe=Rt:it.sibling=Rt,it=Rt);return Vt&&Jr(Y,ot),Qe}for(rt=d(Y,rt);!Rt.done;ot++,Rt=$.next())Rt=Be(rt,Y,ot,Rt.value,Ae),Rt!==null&&(n&&Rt.alternate!==null&&rt.delete(Rt.key===null?ot:Rt.key),H=v(Rt,H,ot),it===null?Qe=Rt:it.sibling=Rt,it=Rt);return n&&rt.forEach(function(kv){return r(Y,kv)}),Vt&&Jr(Y,ot),Qe}function Yt(Y,H,$,Ae){if(typeof $=="object"&&$!==null&&$.type===U&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case q:e:{for(var Qe=$.key,it=H;it!==null;){if(it.key===Qe){if(Qe=$.type,Qe===U){if(it.tag===7){l(Y,it.sibling),H=p(it,$.props.children),H.return=Y,Y=H;break e}}else if(it.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ae&&lp(Qe)===it.type){l(Y,it.sibling),H=p(it,$.props),H.ref=Xo(Y,it,$),H.return=Y,Y=H;break e}l(Y,it);break}else r(Y,it);it=it.sibling}$.type===U?(H=as($.props.children,Y.mode,Ae,$.key),H.return=Y,Y=H):(Ae=bl($.type,$.key,$.props,null,Y.mode,Ae),Ae.ref=Xo(Y,H,$),Ae.return=Y,Y=Ae)}return T(Y);case k:e:{for(it=$.key;H!==null;){if(H.key===it)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){l(Y,H.sibling),H=p(H,$.children||[]),H.return=Y,Y=H;break e}else{l(Y,H);break}else r(Y,H);H=H.sibling}H=Ju($,Y.mode,Ae),H.return=Y,Y=H}return T(Y);case ae:return it=$._init,Yt(Y,H,it($._payload),Ae)}if(ke($))return je(Y,H,$,Ae);if(le($))return Ye(Y,H,$,Ae);il(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,H!==null&&H.tag===6?(l(Y,H.sibling),H=p(H,$),H.return=Y,Y=H):(l(Y,H),H=Qu($,Y.mode,Ae),H.return=Y,Y=H),T(Y)):l(Y,H)}return Yt}var Fs=cp(!0),up=cp(!1),rl=yr(null),sl=null,Os=null,lu=null;function cu(){lu=Os=sl=null}function uu(n){var r=rl.current;Ht(rl),n._currentValue=r}function du(n,r,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===l)break;n=n.return}}function ks(n,r){sl=n,lu=Os=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(kn=!0),n.firstContext=null)}function ni(n){var r=n._currentValue;if(lu!==n)if(n={context:n,memoizedValue:r,next:null},Os===null){if(sl===null)throw Error(t(308));Os=n,sl.dependencies={lanes:0,firstContext:n}}else Os=Os.next=n;return r}var es=null;function fu(n){es===null?es=[n]:es.push(n)}function dp(n,r,l,d){var p=r.interleaved;return p===null?(l.next=l,fu(r)):(l.next=p.next,p.next=l),r.interleaved=l,qi(n,d)}function qi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Er=!1;function hu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Tr(n,r,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(At&2)!==0){var p=d.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),d.pending=r,qi(n,l)}return p=d.interleaved,p===null?(r.next=r,fu(d)):(r.next=p.next,p.next=r),d.interleaved=r,qi(n,l)}function ol(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,bc(n,l)}}function hp(n,r){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=T:v=v.next=T,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function al(n,r,l,d){var p=n.updateQueue;Er=!1;var v=p.firstBaseUpdate,T=p.lastBaseUpdate,D=p.shared.pending;if(D!==null){p.shared.pending=null;var O=D,Q=O.next;O.next=null,T===null?v=Q:T.next=Q,T=O;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,D=ye.lastBaseUpdate,D!==T&&(D===null?ye.firstBaseUpdate=Q:D.next=Q,ye.lastBaseUpdate=O))}if(v!==null){var Ee=p.baseState;T=0,ye=Q=O=null,D=v;do{var ve=D.lane,Be=D.eventTime;if((d&ve)===ve){ye!==null&&(ye=ye.next={eventTime:Be,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var je=n,Ye=D;switch(ve=r,Be=l,Ye.tag){case 1:if(je=Ye.payload,typeof je=="function"){Ee=je.call(Be,Ee,ve);break e}Ee=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ye.payload,ve=typeof je=="function"?je.call(Be,Ee,ve):je,ve==null)break e;Ee=ie({},Ee,ve);break e;case 2:Er=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,ve=p.effects,ve===null?p.effects=[D]:ve.push(D))}else Be={eventTime:Be,lane:ve,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ye===null?(Q=ye=Be,O=Ee):ye=ye.next=Be,T|=ve;if(D=D.next,D===null){if(D=p.shared.pending,D===null)break;ve=D,D=ve.next,ve.next=null,p.lastBaseUpdate=ve,p.shared.pending=null}}while(!0);if(ye===null&&(O=Ee),p.baseState=O,p.firstBaseUpdate=Q,p.lastBaseUpdate=ye,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);is|=T,n.lanes=T,n.memoizedState=Ee}}function pp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var jo={},Ii=yr(jo),qo=yr(jo),Yo=yr(jo);function ts(n){if(n===jo)throw Error(t(174));return n}function pu(n,r){switch(kt(Yo,r),kt(qo,n),kt(Ii,jo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ve(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ve(r,n)}Ht(Ii),kt(Ii,r)}function Bs(){Ht(Ii),Ht(qo),Ht(Yo)}function mp(n){ts(Yo.current);var r=ts(Ii.current),l=Ve(r,n.type);r!==l&&(kt(qo,n),kt(Ii,l))}function mu(n){qo.current===n&&(Ht(Ii),Ht(qo))}var Gt=yr(0);function ll(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var gu=[];function _u(){for(var n=0;n<gu.length;n++)gu[n]._workInProgressVersionPrimary=null;gu.length=0}var cl=A.ReactCurrentDispatcher,vu=A.ReactCurrentBatchConfig,ns=0,Wt=null,en=null,on=null,ul=!1,Ko=!1,$o=0,ov=0;function _n(){throw Error(t(321))}function xu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!fi(n[l],r[l]))return!1;return!0}function yu(n,r,l,d,p,v){if(ns=v,Wt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,cl.current=n===null||n.memoizedState===null?uv:dv,n=l(d,p),Ko){v=0;do{if(Ko=!1,$o=0,25<=v)throw Error(t(301));v+=1,on=en=null,r.updateQueue=null,cl.current=fv,n=l(d,p)}while(Ko)}if(cl.current=hl,r=en!==null&&en.next!==null,ns=0,on=en=Wt=null,ul=!1,r)throw Error(t(300));return n}function Su(){var n=$o!==0;return $o=0,n}function Di(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Wt.memoizedState=on=n:on=on.next=n,on}function ii(){if(en===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var r=on===null?Wt.memoizedState:on.next;if(r!==null)on=r,en=n;else{if(n===null)throw Error(t(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},on===null?Wt.memoizedState=on=n:on=on.next=n}return on}function Zo(n,r){return typeof r=="function"?r(n):r}function Mu(n){var r=ii(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=en,p=d.baseQueue,v=l.pending;if(v!==null){if(p!==null){var T=p.next;p.next=v.next,v.next=T}d.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,d=d.baseState;var D=T=null,O=null,Q=v;do{var ye=Q.lane;if((ns&ye)===ye)O!==null&&(O=O.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),d=Q.hasEagerState?Q.eagerState:n(d,Q.action);else{var Ee={lane:ye,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};O===null?(D=O=Ee,T=d):O=O.next=Ee,Wt.lanes|=ye,is|=ye}Q=Q.next}while(Q!==null&&Q!==v);O===null?T=d:O.next=D,fi(d,r.memoizedState)||(kn=!0),r.memoizedState=d,r.baseState=T,r.baseQueue=O,l.lastRenderedState=d}if(n=l.interleaved,n!==null){p=n;do v=p.lane,Wt.lanes|=v,is|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Eu(n){var r=ii(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do v=n(v,T.action),T=T.next;while(T!==p);fi(v,r.memoizedState)||(kn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,d]}function gp(){}function _p(n,r){var l=Wt,d=ii(),p=r(),v=!fi(d.memoizedState,p);if(v&&(d.memoizedState=p,kn=!0),d=d.queue,Tu(yp.bind(null,l,d,n),[n]),d.getSnapshot!==r||v||on!==null&&on.memoizedState.tag&1){if(l.flags|=2048,Qo(9,xp.bind(null,l,d,p,r),void 0,null),an===null)throw Error(t(349));(ns&30)!==0||vp(l,r,p)}return p}function vp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function xp(n,r,l,d){r.value=l,r.getSnapshot=d,Sp(r)&&Mp(n)}function yp(n,r,l){return l(function(){Sp(r)&&Mp(n)})}function Sp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!fi(n,l)}catch{return!0}}function Mp(n){var r=qi(n,1);r!==null&&_i(r,n,1,-1)}function Ep(n){var r=Di();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:n},r.queue=n,n=n.dispatch=cv.bind(null,Wt,n),[r.memoizedState,n]}function Qo(n,r,l,d){return n={tag:n,create:r,destroy:l,deps:d,next:null},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,r.lastEffect=n)),n}function Tp(){return ii().memoizedState}function dl(n,r,l,d){var p=Di();Wt.flags|=n,p.memoizedState=Qo(1|r,l,void 0,d===void 0?null:d)}function fl(n,r,l,d){var p=ii();d=d===void 0?null:d;var v=void 0;if(en!==null){var T=en.memoizedState;if(v=T.destroy,d!==null&&xu(d,T.deps)){p.memoizedState=Qo(r,l,v,d);return}}Wt.flags|=n,p.memoizedState=Qo(1|r,l,v,d)}function wp(n,r){return dl(8390656,8,n,r)}function Tu(n,r){return fl(2048,8,n,r)}function Ap(n,r){return fl(4,2,n,r)}function bp(n,r){return fl(4,4,n,r)}function Rp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Cp(n,r,l){return l=l!=null?l.concat([n]):null,fl(4,4,Rp.bind(null,r,n),l)}function wu(){}function Pp(n,r){var l=ii();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&xu(r,d[1])?d[0]:(l.memoizedState=[n,r],n)}function Lp(n,r){var l=ii();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&xu(r,d[1])?d[0]:(n=n(),l.memoizedState=[n,r],n)}function Ip(n,r,l){return(ns&21)===0?(n.baseState&&(n.baseState=!1,kn=!0),n.memoizedState=l):(fi(l,r)||(l=An(),Wt.lanes|=l,is|=l,n.baseState=!0),r)}function av(n,r){var l=Dt;Dt=l!==0&&4>l?l:4,n(!0);var d=vu.transition;vu.transition={};try{n(!1),r()}finally{Dt=l,vu.transition=d}}function Dp(){return ii().memoizedState}function lv(n,r,l){var d=Rr(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},Np(n))Up(r,l);else if(l=dp(n,r,l,d),l!==null){var p=Rn();_i(l,n,d,p),Fp(l,r,d)}}function cv(n,r,l){var d=Rr(n),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(Np(n))Up(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var T=r.lastRenderedState,D=v(T,l);if(p.hasEagerState=!0,p.eagerState=D,fi(D,T)){var O=r.interleaved;O===null?(p.next=p,fu(r)):(p.next=O.next,O.next=p),r.interleaved=p;return}}catch{}finally{}l=dp(n,r,p,d),l!==null&&(p=Rn(),_i(l,n,d,p),Fp(l,r,d))}}function Np(n){var r=n.alternate;return n===Wt||r!==null&&r===Wt}function Up(n,r){Ko=ul=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Fp(n,r,l){if((l&4194240)!==0){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,bc(n,l)}}var hl={readContext:ni,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},uv={readContext:ni,useCallback:function(n,r){return Di().memoizedState=[n,r===void 0?null:r],n},useContext:ni,useEffect:wp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,dl(4194308,4,Rp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return dl(4194308,4,n,r)},useInsertionEffect:function(n,r){return dl(4,2,n,r)},useMemo:function(n,r){var l=Di();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var d=Di();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=lv.bind(null,Wt,n),[d.memoizedState,n]},useRef:function(n){var r=Di();return n={current:n},r.memoizedState=n},useState:Ep,useDebugValue:wu,useDeferredValue:function(n){return Di().memoizedState=n},useTransition:function(){var n=Ep(!1),r=n[0];return n=av.bind(null,n[1]),Di().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var d=Wt,p=Di();if(Vt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),an===null)throw Error(t(349));(ns&30)!==0||vp(d,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,wp(yp.bind(null,d,v,n),[n]),d.flags|=2048,Qo(9,xp.bind(null,d,v,l,r),void 0,null),l},useId:function(){var n=Di(),r=an.identifierPrefix;if(Vt){var l=ji,d=Xi;l=(d&~(1<<32-pt(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=$o++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=ov++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},dv={readContext:ni,useCallback:Pp,useContext:ni,useEffect:Tu,useImperativeHandle:Cp,useInsertionEffect:Ap,useLayoutEffect:bp,useMemo:Lp,useReducer:Mu,useRef:Tp,useState:function(){return Mu(Zo)},useDebugValue:wu,useDeferredValue:function(n){var r=ii();return Ip(r,en.memoizedState,n)},useTransition:function(){var n=Mu(Zo)[0],r=ii().memoizedState;return[n,r]},useMutableSource:gp,useSyncExternalStore:_p,useId:Dp,unstable_isNewReconciler:!1},fv={readContext:ni,useCallback:Pp,useContext:ni,useEffect:Tu,useImperativeHandle:Cp,useInsertionEffect:Ap,useLayoutEffect:bp,useMemo:Lp,useReducer:Eu,useRef:Tp,useState:function(){return Eu(Zo)},useDebugValue:wu,useDeferredValue:function(n){var r=ii();return en===null?r.memoizedState=n:Ip(r,en.memoizedState,n)},useTransition:function(){var n=Eu(Zo)[0],r=ii().memoizedState;return[n,r]},useMutableSource:gp,useSyncExternalStore:_p,useId:Dp,unstable_isNewReconciler:!1};function pi(n,r){if(n&&n.defaultProps){r=ie({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Au(n,r,l,d){r=n.memoizedState,l=l(d,r),l=l==null?r:ie({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var pl={isMounted:function(n){return(n=n._reactInternals)?Ci(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var d=Rn(),p=Rr(n),v=Yi(d,p);v.payload=r,l!=null&&(v.callback=l),r=Tr(n,v,p),r!==null&&(_i(r,n,p,d),ol(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var d=Rn(),p=Rr(n),v=Yi(d,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Tr(n,v,p),r!==null&&(_i(r,n,p,d),ol(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Rn(),d=Rr(n),p=Yi(l,d);p.tag=2,r!=null&&(p.callback=r),r=Tr(n,p,d),r!==null&&(_i(r,n,d,l),ol(r,n,d))}};function Op(n,r,l,d,p,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,v,T):r.prototype&&r.prototype.isPureReactComponent?!ko(l,d)||!ko(p,v):!0}function kp(n,r,l){var d=!1,p=Sr,v=r.contextType;return typeof v=="object"&&v!==null?v=ni(v):(p=On(r)?Zr:gn.current,d=r.contextTypes,v=(d=d!=null)?Is(n,p):Sr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=pl,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function Bp(n,r,l,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==n&&pl.enqueueReplaceState(r,r.state,null)}function bu(n,r,l,d){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},hu(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=ni(v):(v=On(r)?Zr:gn.current,p.context=Is(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Au(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&pl.enqueueReplaceState(p,p.state,null),al(n,l,p,d),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function zs(n,r){try{var l="",d=r;do l+=ue(d),d=d.return;while(d);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function Ru(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Cu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var hv=typeof WeakMap=="function"?WeakMap:Map;function zp(n,r,l){l=Yi(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){Sl||(Sl=!0,Wu=d),Cu(n,r)},l}function Hp(n,r,l){l=Yi(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var p=r.value;l.payload=function(){return d(p)},l.callback=function(){Cu(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Cu(n,r),typeof d!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function Vp(n,r,l){var d=n.pingCache;if(d===null){d=n.pingCache=new hv;var p=new Set;d.set(r,p)}else p=d.get(r),p===void 0&&(p=new Set,d.set(r,p));p.has(l)||(p.add(l),n=bv.bind(null,n,r,l),r.then(n,n))}function Gp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Wp(n,r,l,d,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Yi(-1,1),r.tag=2,Tr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var pv=A.ReactCurrentOwner,kn=!1;function bn(n,r,l,d){r.child=n===null?up(r,null,l,d):Fs(r,n.child,l,d)}function Xp(n,r,l,d,p){l=l.render;var v=r.ref;return ks(r,p),d=yu(n,r,l,d,v,p),l=Su(),n!==null&&!kn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Ki(n,r,p)):(Vt&&l&&iu(r),r.flags|=1,bn(n,r,d,p),r.child)}function jp(n,r,l,d,p){if(n===null){var v=l.type;return typeof v=="function"&&!Zu(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,qp(n,r,v,d,p)):(n=bl(l.type,null,d,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&p)===0){var T=v.memoizedProps;if(l=l.compare,l=l!==null?l:ko,l(T,d)&&n.ref===r.ref)return Ki(n,r,p)}return r.flags|=1,n=Pr(v,d),n.ref=r.ref,n.return=r,r.child=n}function qp(n,r,l,d,p){if(n!==null){var v=n.memoizedProps;if(ko(v,d)&&n.ref===r.ref)if(kn=!1,r.pendingProps=d=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(kn=!0);else return r.lanes=n.lanes,Ki(n,r,p)}return Pu(n,r,l,d,p)}function Yp(n,r,l){var d=r.pendingProps,p=d.children,v=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Vs,jn),jn|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,kt(Vs,jn),jn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=v!==null?v.baseLanes:l,kt(Vs,jn),jn|=d}else v!==null?(d=v.baseLanes|l,r.memoizedState=null):d=l,kt(Vs,jn),jn|=d;return bn(n,r,p,l),r.child}function Kp(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Pu(n,r,l,d,p){var v=On(l)?Zr:gn.current;return v=Is(r,v),ks(r,p),l=yu(n,r,l,d,v,p),d=Su(),n!==null&&!kn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Ki(n,r,p)):(Vt&&d&&iu(r),r.flags|=1,bn(n,r,l,p),r.child)}function $p(n,r,l,d,p){if(On(l)){var v=!0;Qa(r)}else v=!1;if(ks(r,p),r.stateNode===null)gl(n,r),kp(r,l,d),bu(r,l,d,p),d=!0;else if(n===null){var T=r.stateNode,D=r.memoizedProps;T.props=D;var O=T.context,Q=l.contextType;typeof Q=="object"&&Q!==null?Q=ni(Q):(Q=On(l)?Zr:gn.current,Q=Is(r,Q));var ye=l.getDerivedStateFromProps,Ee=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==d||O!==Q)&&Bp(r,T,d,Q),Er=!1;var ve=r.memoizedState;T.state=ve,al(r,d,T,p),O=r.memoizedState,D!==d||ve!==O||Fn.current||Er?(typeof ye=="function"&&(Au(r,l,ye,d),O=r.memoizedState),(D=Er||Op(r,l,D,d,ve,O,Q))?(Ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=O),T.props=d,T.state=O,T.context=Q,d=D):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{T=r.stateNode,fp(n,r),D=r.memoizedProps,Q=r.type===r.elementType?D:pi(r.type,D),T.props=Q,Ee=r.pendingProps,ve=T.context,O=l.contextType,typeof O=="object"&&O!==null?O=ni(O):(O=On(l)?Zr:gn.current,O=Is(r,O));var Be=l.getDerivedStateFromProps;(ye=typeof Be=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==Ee||ve!==O)&&Bp(r,T,d,O),Er=!1,ve=r.memoizedState,T.state=ve,al(r,d,T,p);var je=r.memoizedState;D!==Ee||ve!==je||Fn.current||Er?(typeof Be=="function"&&(Au(r,l,Be,d),je=r.memoizedState),(Q=Er||Op(r,l,Q,d,ve,je,O)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(d,je,O),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(d,je,O)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=je),T.props=d,T.state=je,T.context=O,d=Q):(typeof T.componentDidUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),d=!1)}return Lu(n,r,l,d,v,p)}function Lu(n,r,l,d,p,v){Kp(n,r);var T=(r.flags&128)!==0;if(!d&&!T)return p&&tp(r,l,!1),Ki(n,r,v);d=r.stateNode,pv.current=r;var D=T&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&T?(r.child=Fs(r,n.child,null,v),r.child=Fs(r,null,D,v)):bn(n,r,D,v),r.memoizedState=d.state,p&&tp(r,l,!0),r.child}function Zp(n){var r=n.stateNode;r.pendingContext?Jh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Jh(n,r.context,!1),pu(n,r.containerInfo)}function Qp(n,r,l,d,p){return Us(),au(p),r.flags|=256,bn(n,r,l,d),r.child}var Iu={dehydrated:null,treeContext:null,retryLane:0};function Du(n){return{baseLanes:n,cachePool:null,transitions:null}}function Jp(n,r,l){var d=r.pendingProps,p=Gt.current,v=!1,T=(r.flags&128)!==0,D;if((D=T)||(D=n!==null&&n.memoizedState===null?!1:(p&2)!==0),D?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),kt(Gt,p&1),n===null)return ou(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=d.children,n=d.fallback,v?(d=r.mode,v=r.child,T={mode:"hidden",children:T},(d&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=Rl(T,d,0,null),n=as(n,d,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Du(l),r.memoizedState=Iu,n):Nu(r,T));if(p=n.memoizedState,p!==null&&(D=p.dehydrated,D!==null))return mv(n,r,T,d,D,p,l);if(v){v=d.fallback,T=r.mode,p=n.child,D=p.sibling;var O={mode:"hidden",children:d.children};return(T&1)===0&&r.child!==p?(d=r.child,d.childLanes=0,d.pendingProps=O,r.deletions=null):(d=Pr(p,O),d.subtreeFlags=p.subtreeFlags&14680064),D!==null?v=Pr(D,v):(v=as(v,T,l,null),v.flags|=2),v.return=r,d.return=r,d.sibling=v,r.child=d,d=v,v=r.child,T=n.child.memoizedState,T=T===null?Du(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~l,r.memoizedState=Iu,d}return v=n.child,n=v.sibling,d=Pr(v,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=l),d.return=r,d.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=d,r.memoizedState=null,d}function Nu(n,r){return r=Rl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function ml(n,r,l,d){return d!==null&&au(d),Fs(r,n.child,null,l),n=Nu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function mv(n,r,l,d,p,v,T){if(l)return r.flags&256?(r.flags&=-257,d=Ru(Error(t(422))),ml(n,r,T,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=d.fallback,p=r.mode,d=Rl({mode:"visible",children:d.children},p,0,null),v=as(v,p,T,null),v.flags|=2,d.return=r,v.return=r,d.sibling=v,r.child=d,(r.mode&1)!==0&&Fs(r,n.child,null,T),r.child.memoizedState=Du(T),r.memoizedState=Iu,v);if((r.mode&1)===0)return ml(n,r,T,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var D=d.dgst;return d=D,v=Error(t(419)),d=Ru(v,d,void 0),ml(n,r,T,d)}if(D=(T&n.childLanes)!==0,kn||D){if(d=an,d!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|T))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,qi(n,p),_i(d,n,p,-1))}return $u(),d=Ru(Error(t(421))),ml(n,r,T,d)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=Rv.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,Xn=xr(p.nextSibling),Wn=r,Vt=!0,hi=null,n!==null&&(ei[ti++]=Xi,ei[ti++]=ji,ei[ti++]=Qr,Xi=n.id,ji=n.overflow,Qr=r),r=Nu(r,d.children),r.flags|=4096,r)}function em(n,r,l){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),du(n.return,r,l)}function Uu(n,r,l,d,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=d,v.tail=l,v.tailMode=p)}function tm(n,r,l){var d=r.pendingProps,p=d.revealOrder,v=d.tail;if(bn(n,r,d.children,l),d=Gt.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&em(n,l,r);else if(n.tag===19)em(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(kt(Gt,d),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&ll(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),Uu(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&ll(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}Uu(r,!0,l,null,v);break;case"together":Uu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function gl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Ki(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),is|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Pr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Pr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function gv(n,r,l){switch(r.tag){case 3:Zp(r),Us();break;case 5:mp(r);break;case 1:On(r.type)&&Qa(r);break;case 4:pu(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,p=r.memoizedProps.value;kt(rl,d._currentValue),d._currentValue=p;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(kt(Gt,Gt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Jp(n,r,l):(kt(Gt,Gt.current&1),n=Ki(n,r,l),n!==null?n.sibling:null);kt(Gt,Gt.current&1);break;case 19:if(d=(l&r.childLanes)!==0,(n.flags&128)!==0){if(d)return tm(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),kt(Gt,Gt.current),d)break;return null;case 22:case 23:return r.lanes=0,Yp(n,r,l)}return Ki(n,r,l)}var nm,Fu,im,rm;nm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Fu=function(){},im=function(n,r,l,d){var p=n.memoizedProps;if(p!==d){n=r.stateNode,ts(Ii.current);var v=null;switch(l){case"input":p=F(n,p),d=F(n,d),v=[];break;case"select":p=ie({},p,{value:void 0}),d=ie({},d,{value:void 0}),v=[];break;case"textarea":p=w(n,p),d=w(n,d),v=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=Ka)}at(l,d);var T;l=null;for(Q in p)if(!d.hasOwnProperty(Q)&&p.hasOwnProperty(Q)&&p[Q]!=null)if(Q==="style"){var D=p[Q];for(T in D)D.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(s.hasOwnProperty(Q)?v||(v=[]):(v=v||[]).push(Q,null));for(Q in d){var O=d[Q];if(D=p!=null?p[Q]:void 0,d.hasOwnProperty(Q)&&O!==D&&(O!=null||D!=null))if(Q==="style")if(D){for(T in D)!D.hasOwnProperty(T)||O&&O.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in O)O.hasOwnProperty(T)&&D[T]!==O[T]&&(l||(l={}),l[T]=O[T])}else l||(v||(v=[]),v.push(Q,l)),l=O;else Q==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,D=D?D.__html:void 0,O!=null&&D!==O&&(v=v||[]).push(Q,O)):Q==="children"?typeof O!="string"&&typeof O!="number"||(v=v||[]).push(Q,""+O):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(s.hasOwnProperty(Q)?(O!=null&&Q==="onScroll"&&zt("scroll",n),v||D===O||(v=[])):(v=v||[]).push(Q,O))}l&&(v=v||[]).push("style",l);var Q=v;(r.updateQueue=Q)&&(r.flags|=4)}},rm=function(n,r,l,d){l!==d&&(r.flags|=4)};function Jo(n,r){if(!Vt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function vn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=d,n.childLanes=l,r}function _v(n,r,l){var d=r.pendingProps;switch(ru(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(r),null;case 1:return On(r.type)&&Za(),vn(r),null;case 3:return d=r.stateNode,Bs(),Ht(Fn),Ht(gn),_u(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(nl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,hi!==null&&(qu(hi),hi=null))),Fu(n,r),vn(r),null;case 5:mu(r);var p=ts(Yo.current);if(l=r.type,n!==null&&r.stateNode!=null)im(n,r,l,d,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return vn(r),null}if(n=ts(Ii.current),nl(r)){d=r.stateNode,l=r.type;var v=r.memoizedProps;switch(d[Li]=r,d[Go]=v,n=(r.mode&1)!==0,l){case"dialog":zt("cancel",d),zt("close",d);break;case"iframe":case"object":case"embed":zt("load",d);break;case"video":case"audio":for(p=0;p<zo.length;p++)zt(zo[p],d);break;case"source":zt("error",d);break;case"img":case"image":case"link":zt("error",d),zt("load",d);break;case"details":zt("toggle",d);break;case"input":Je(d,v),zt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!v.multiple},zt("invalid",d);break;case"textarea":K(d,v),zt("invalid",d)}at(l,v),p=null;for(var T in v)if(v.hasOwnProperty(T)){var D=v[T];T==="children"?typeof D=="string"?d.textContent!==D&&(v.suppressHydrationWarning!==!0&&Ya(d.textContent,D,n),p=["children",D]):typeof D=="number"&&d.textContent!==""+D&&(v.suppressHydrationWarning!==!0&&Ya(d.textContent,D,n),p=["children",""+D]):s.hasOwnProperty(T)&&D!=null&&T==="onScroll"&&zt("scroll",d)}switch(l){case"input":Ct(d),De(d,v,!0);break;case"textarea":Ct(d),ge(d);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(d.onclick=Ka)}d=p,r.updateQueue=d,d!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=re(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=T.createElement(l,{is:d.is}):(n=T.createElement(l),l==="select"&&(T=n,d.multiple?T.multiple=!0:d.size&&(T.size=d.size))):n=T.createElementNS(n,l),n[Li]=r,n[Go]=d,nm(n,r,!1,!1),r.stateNode=n;e:{switch(T=dt(l,d),l){case"dialog":zt("cancel",n),zt("close",n),p=d;break;case"iframe":case"object":case"embed":zt("load",n),p=d;break;case"video":case"audio":for(p=0;p<zo.length;p++)zt(zo[p],n);p=d;break;case"source":zt("error",n),p=d;break;case"img":case"image":case"link":zt("error",n),zt("load",n),p=d;break;case"details":zt("toggle",n),p=d;break;case"input":Je(n,d),p=F(n,d),zt("invalid",n);break;case"option":p=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},p=ie({},d,{value:void 0}),zt("invalid",n);break;case"textarea":K(n,d),p=w(n,d),zt("invalid",n);break;default:p=d}at(l,p),D=p;for(v in D)if(D.hasOwnProperty(v)){var O=D[v];v==="style"?Ke(n,O):v==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Fe(n,O)):v==="children"?typeof O=="string"?(l!=="textarea"||O!=="")&&ht(n,O):typeof O=="number"&&ht(n,""+O):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?O!=null&&v==="onScroll"&&zt("scroll",n):O!=null&&I(n,v,O,T))}switch(l){case"input":Ct(n),De(n,d,!1);break;case"textarea":Ct(n),ge(n);break;case"option":d.value!=null&&n.setAttribute("value",""+Ce(d.value));break;case"select":n.multiple=!!d.multiple,v=d.value,v!=null?P(n,!!d.multiple,v,!1):d.defaultValue!=null&&P(n,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Ka)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return vn(r),null;case 6:if(n&&r.stateNode!=null)rm(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(l=ts(Yo.current),ts(Ii.current),nl(r)){if(d=r.stateNode,l=r.memoizedProps,d[Li]=r,(v=d.nodeValue!==l)&&(n=Wn,n!==null))switch(n.tag){case 3:Ya(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ya(d.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Li]=r,r.stateNode=d}return vn(r),null;case 13:if(Ht(Gt),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&Xn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)ap(),Us(),r.flags|=98560,v=!1;else if(v=nl(r),d!==null&&d.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Li]=r}else Us(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;vn(r),v=!1}else hi!==null&&(qu(hi),hi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Gt.current&1)!==0?tn===0&&(tn=3):$u())),r.updateQueue!==null&&(r.flags|=4),vn(r),null);case 4:return Bs(),Fu(n,r),n===null&&Ho(r.stateNode.containerInfo),vn(r),null;case 10:return uu(r.type._context),vn(r),null;case 17:return On(r.type)&&Za(),vn(r),null;case 19:if(Ht(Gt),v=r.memoizedState,v===null)return vn(r),null;if(d=(r.flags&128)!==0,T=v.rendering,T===null)if(d)Jo(v,!1);else{if(tn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=ll(n),T!==null){for(r.flags|=128,Jo(v,!1),d=T.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)v=l,n=d,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return kt(Gt,Gt.current&1|2),r.child}n=n.sibling}v.tail!==null&&we()>Gs&&(r.flags|=128,d=!0,Jo(v,!1),r.lanes=4194304)}else{if(!d)if(n=ll(T),n!==null){if(r.flags|=128,d=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Jo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Vt)return vn(r),null}else 2*we()-v.renderingStartTime>Gs&&l!==1073741824&&(r.flags|=128,d=!0,Jo(v,!1),r.lanes=4194304);v.isBackwards?(T.sibling=r.child,r.child=T):(l=v.last,l!==null?l.sibling=T:r.child=T,v.last=T)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=we(),r.sibling=null,l=Gt.current,kt(Gt,d?l&1|2:l&1),r):(vn(r),null);case 22:case 23:return Ku(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(jn&1073741824)!==0&&(vn(r),r.subtreeFlags&6&&(r.flags|=8192)):vn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function vv(n,r){switch(ru(r),r.tag){case 1:return On(r.type)&&Za(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Bs(),Ht(Fn),Ht(gn),_u(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return mu(r),null;case 13:if(Ht(Gt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Us()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ht(Gt),null;case 4:return Bs(),null;case 10:return uu(r.type._context),null;case 22:case 23:return Ku(),null;case 24:return null;default:return null}}var _l=!1,xn=!1,xv=typeof WeakSet=="function"?WeakSet:Set,We=null;function Hs(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){jt(n,r,d)}else l.current=null}function Ou(n,r,l){try{l()}catch(d){jt(n,r,d)}}var sm=!1;function yv(n,r){if(Kc=Oa,n=Oh(),Hc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,v=d.focusNode;d=d.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var T=0,D=-1,O=-1,Q=0,ye=0,Ee=n,ve=null;t:for(;;){for(var Be;Ee!==l||p!==0&&Ee.nodeType!==3||(D=T+p),Ee!==v||d!==0&&Ee.nodeType!==3||(O=T+d),Ee.nodeType===3&&(T+=Ee.nodeValue.length),(Be=Ee.firstChild)!==null;)ve=Ee,Ee=Be;for(;;){if(Ee===n)break t;if(ve===l&&++Q===p&&(D=T),ve===v&&++ye===d&&(O=T),(Be=Ee.nextSibling)!==null)break;Ee=ve,ve=Ee.parentNode}Ee=Be}l=D===-1||O===-1?null:{start:D,end:O}}else l=null}l=l||{start:0,end:0}}else l=null;for($c={focusedElem:n,selectionRange:l},Oa=!1,We=r;We!==null;)if(r=We,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,We=n;else for(;We!==null;){r=We;try{var je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ye=je.memoizedProps,Yt=je.memoizedState,Y=r.stateNode,H=Y.getSnapshotBeforeUpdate(r.elementType===r.type?Ye:pi(r.type,Ye),Yt);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var $=r.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){jt(r,r.return,Ae)}if(n=r.sibling,n!==null){n.return=r.return,We=n;break}We=r.return}return je=sm,sm=!1,je}function ea(n,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Ou(r,l,v)}p=p.next}while(p!==d)}}function vl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function ku(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function om(n){var r=n.alternate;r!==null&&(n.alternate=null,om(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Li],delete r[Go],delete r[eu],delete r[nv],delete r[iv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function am(n){return n.tag===5||n.tag===3||n.tag===4}function lm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||am(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bu(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Ka));else if(d!==4&&(n=n.child,n!==null))for(Bu(n,r,l),n=n.sibling;n!==null;)Bu(n,r,l),n=n.sibling}function zu(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(zu(n,r,l),n=n.sibling;n!==null;)zu(n,r,l),n=n.sibling}var dn=null,mi=!1;function wr(n,r,l){for(l=l.child;l!==null;)cm(n,r,l),l=l.sibling}function cm(n,r,l){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Pt,l)}catch{}switch(l.tag){case 5:xn||Hs(l,r);case 6:var d=dn,p=mi;dn=null,wr(n,r,l),dn=d,mi=p,dn!==null&&(mi?(n=dn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):dn.removeChild(l.stateNode));break;case 18:dn!==null&&(mi?(n=dn,l=l.stateNode,n.nodeType===8?Jc(n.parentNode,l):n.nodeType===1&&Jc(n,l),Io(n)):Jc(dn,l.stateNode));break;case 4:d=dn,p=mi,dn=l.stateNode.containerInfo,mi=!0,wr(n,r,l),dn=d,mi=p;break;case 0:case 11:case 14:case 15:if(!xn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var v=p,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&Ou(l,r,T),p=p.next}while(p!==d)}wr(n,r,l);break;case 1:if(!xn&&(Hs(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(D){jt(l,r,D)}wr(n,r,l);break;case 21:wr(n,r,l);break;case 22:l.mode&1?(xn=(d=xn)||l.memoizedState!==null,wr(n,r,l),xn=d):wr(n,r,l);break;default:wr(n,r,l)}}function um(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new xv),r.forEach(function(d){var p=Cv.bind(null,n,d);l.has(d)||(l.add(d),d.then(p,p))})}}function gi(n,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var v=n,T=r,D=T;e:for(;D!==null;){switch(D.tag){case 5:dn=D.stateNode,mi=!1;break e;case 3:dn=D.stateNode.containerInfo,mi=!0;break e;case 4:dn=D.stateNode.containerInfo,mi=!0;break e}D=D.return}if(dn===null)throw Error(t(160));cm(v,T,p),dn=null,mi=!1;var O=p.alternate;O!==null&&(O.return=null),p.return=null}catch(Q){jt(p,r,Q)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)dm(r,n),r=r.sibling}function dm(n,r){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(gi(r,n),Ni(n),d&4){try{ea(3,n,n.return),vl(3,n)}catch(Ye){jt(n,n.return,Ye)}try{ea(5,n,n.return)}catch(Ye){jt(n,n.return,Ye)}}break;case 1:gi(r,n),Ni(n),d&512&&l!==null&&Hs(l,l.return);break;case 5:if(gi(r,n),Ni(n),d&512&&l!==null&&Hs(l,l.return),n.flags&32){var p=n.stateNode;try{ht(p,"")}catch(Ye){jt(n,n.return,Ye)}}if(d&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,T=l!==null?l.memoizedProps:v,D=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{D==="input"&&v.type==="radio"&&v.name!=null&&Xe(p,v),dt(D,T);var Q=dt(D,v);for(T=0;T<O.length;T+=2){var ye=O[T],Ee=O[T+1];ye==="style"?Ke(p,Ee):ye==="dangerouslySetInnerHTML"?Fe(p,Ee):ye==="children"?ht(p,Ee):I(p,ye,Ee,Q)}switch(D){case"input":Le(p,v);break;case"textarea":de(p,v);break;case"select":var ve=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Be=v.value;Be!=null?P(p,!!v.multiple,Be,!1):ve!==!!v.multiple&&(v.defaultValue!=null?P(p,!!v.multiple,v.defaultValue,!0):P(p,!!v.multiple,v.multiple?[]:"",!1))}p[Go]=v}catch(Ye){jt(n,n.return,Ye)}}break;case 6:if(gi(r,n),Ni(n),d&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(Ye){jt(n,n.return,Ye)}}break;case 3:if(gi(r,n),Ni(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Io(r.containerInfo)}catch(Ye){jt(n,n.return,Ye)}break;case 4:gi(r,n),Ni(n);break;case 13:gi(r,n),Ni(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Gu=we())),d&4&&um(n);break;case 22:if(ye=l!==null&&l.memoizedState!==null,n.mode&1?(xn=(Q=xn)||ye,gi(r,n),xn=Q):gi(r,n),Ni(n),d&8192){if(Q=n.memoizedState!==null,(n.stateNode.isHidden=Q)&&!ye&&(n.mode&1)!==0)for(We=n,ye=n.child;ye!==null;){for(Ee=We=ye;We!==null;){switch(ve=We,Be=ve.child,ve.tag){case 0:case 11:case 14:case 15:ea(4,ve,ve.return);break;case 1:Hs(ve,ve.return);var je=ve.stateNode;if(typeof je.componentWillUnmount=="function"){d=ve,l=ve.return;try{r=d,je.props=r.memoizedProps,je.state=r.memoizedState,je.componentWillUnmount()}catch(Ye){jt(d,l,Ye)}}break;case 5:Hs(ve,ve.return);break;case 22:if(ve.memoizedState!==null){pm(Ee);continue}}Be!==null?(Be.return=ve,We=Be):pm(Ee)}ye=ye.sibling}e:for(ye=null,Ee=n;;){if(Ee.tag===5){if(ye===null){ye=Ee;try{p=Ee.stateNode,Q?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(D=Ee.stateNode,O=Ee.memoizedProps.style,T=O!=null&&O.hasOwnProperty("display")?O.display:null,D.style.display=tt("display",T))}catch(Ye){jt(n,n.return,Ye)}}}else if(Ee.tag===6){if(ye===null)try{Ee.stateNode.nodeValue=Q?"":Ee.memoizedProps}catch(Ye){jt(n,n.return,Ye)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;ye===Ee&&(ye=null),Ee=Ee.return}ye===Ee&&(ye=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:gi(r,n),Ni(n),d&4&&um(n);break;case 21:break;default:gi(r,n),Ni(n)}}function Ni(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(am(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(ht(p,""),d.flags&=-33);var v=lm(n);zu(n,v,p);break;case 3:case 4:var T=d.stateNode.containerInfo,D=lm(n);Bu(n,D,T);break;default:throw Error(t(161))}}catch(O){jt(n,n.return,O)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Sv(n,r,l){We=n,fm(n)}function fm(n,r,l){for(var d=(n.mode&1)!==0;We!==null;){var p=We,v=p.child;if(p.tag===22&&d){var T=p.memoizedState!==null||_l;if(!T){var D=p.alternate,O=D!==null&&D.memoizedState!==null||xn;D=_l;var Q=xn;if(_l=T,(xn=O)&&!Q)for(We=p;We!==null;)T=We,O=T.child,T.tag===22&&T.memoizedState!==null?mm(p):O!==null?(O.return=T,We=O):mm(p);for(;v!==null;)We=v,fm(v),v=v.sibling;We=p,_l=D,xn=Q}hm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,We=v):hm(n)}}function hm(n){for(;We!==null;){var r=We;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:xn||vl(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!xn)if(l===null)d.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:pi(r.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&pp(r,v,d);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}pp(r,T,l)}break;case 5:var D=r.stateNode;if(l===null&&r.flags&4){l=D;var O=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&l.focus();break;case"img":O.src&&(l.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var Q=r.alternate;if(Q!==null){var ye=Q.memoizedState;if(ye!==null){var Ee=ye.dehydrated;Ee!==null&&Io(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||r.flags&512&&ku(r)}catch(ve){jt(r,r.return,ve)}}if(r===n){We=null;break}if(l=r.sibling,l!==null){l.return=r.return,We=l;break}We=r.return}}function pm(n){for(;We!==null;){var r=We;if(r===n){We=null;break}var l=r.sibling;if(l!==null){l.return=r.return,We=l;break}We=r.return}}function mm(n){for(;We!==null;){var r=We;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{vl(4,r)}catch(O){jt(r,l,O)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var p=r.return;try{d.componentDidMount()}catch(O){jt(r,p,O)}}var v=r.return;try{ku(r)}catch(O){jt(r,v,O)}break;case 5:var T=r.return;try{ku(r)}catch(O){jt(r,T,O)}}}catch(O){jt(r,r.return,O)}if(r===n){We=null;break}var D=r.sibling;if(D!==null){D.return=r.return,We=D;break}We=r.return}}var Mv=Math.ceil,xl=A.ReactCurrentDispatcher,Hu=A.ReactCurrentOwner,ri=A.ReactCurrentBatchConfig,At=0,an=null,$t=null,fn=0,jn=0,Vs=yr(0),tn=0,ta=null,is=0,yl=0,Vu=0,na=null,Bn=null,Gu=0,Gs=1/0,$i=null,Sl=!1,Wu=null,Ar=null,Ml=!1,br=null,El=0,ia=0,Xu=null,Tl=-1,wl=0;function Rn(){return(At&6)!==0?we():Tl!==-1?Tl:Tl=we()}function Rr(n){return(n.mode&1)===0?1:(At&2)!==0&&fn!==0?fn&-fn:sv.transition!==null?(wl===0&&(wl=An()),wl):(n=Dt,n!==0||(n=window.event,n=n===void 0?16:_h(n.type)),n)}function _i(n,r,l,d){if(50<ia)throw ia=0,Xu=null,Error(t(185));Un(n,l,d),((At&2)===0||n!==an)&&(n===an&&((At&2)===0&&(yl|=l),tn===4&&Cr(n,fn)),zn(n,d),l===1&&At===0&&(r.mode&1)===0&&(Gs=we()+500,Ja&&Mr()))}function zn(n,r){var l=n.callbackNode;Qn(n,r);var d=Pi(n,n===an?fn:0);if(d===0)l!==null&&te(l),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(l!=null&&te(l),r===1)n.tag===0?rv(_m.bind(null,n)):np(_m.bind(null,n)),ev(function(){(At&6)===0&&Mr()}),l=null;else{switch(ch(d)){case 1:l=qe;break;case 4:l=st;break;case 16:l=lt;break;case 536870912:l=Tt;break;default:l=lt}l=wm(l,gm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function gm(n,r){if(Tl=-1,wl=0,(At&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Ws()&&n.callbackNode!==l)return null;var d=Pi(n,n===an?fn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||r)r=Al(n,d);else{r=d;var p=At;At|=2;var v=xm();(an!==n||fn!==r)&&($i=null,Gs=we()+500,ss(n,r));do try{wv();break}catch(D){vm(n,D)}while(!0);cu(),xl.current=v,At=p,$t!==null?r=0:(an=null,fn=0,r=tn)}if(r!==0){if(r===2&&(p=Vi(n),p!==0&&(d=p,r=ju(n,p))),r===1)throw l=ta,ss(n,0),Cr(n,d),zn(n,we()),l;if(r===6)Cr(n,d);else{if(p=n.current.alternate,(d&30)===0&&!Ev(p)&&(r=Al(n,d),r===2&&(v=Vi(n),v!==0&&(d=v,r=ju(n,v))),r===1))throw l=ta,ss(n,0),Cr(n,d),zn(n,we()),l;switch(n.finishedWork=p,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:os(n,Bn,$i);break;case 3:if(Cr(n,d),(d&130023424)===d&&(r=Gu+500-we(),10<r)){if(Pi(n,0)!==0)break;if(p=n.suspendedLanes,(p&d)!==d){Rn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Qc(os.bind(null,n,Bn,$i),r);break}os(n,Bn,$i);break;case 4:if(Cr(n,d),(d&4194240)===d)break;for(r=n.eventTimes,p=-1;0<d;){var T=31-pt(d);v=1<<T,T=r[T],T>p&&(p=T),d&=~v}if(d=p,d=we()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Mv(d/1960))-d,10<d){n.timeoutHandle=Qc(os.bind(null,n,Bn,$i),d);break}os(n,Bn,$i);break;case 5:os(n,Bn,$i);break;default:throw Error(t(329))}}}return zn(n,we()),n.callbackNode===l?gm.bind(null,n):null}function ju(n,r){var l=na;return n.current.memoizedState.isDehydrated&&(ss(n,r).flags|=256),n=Al(n,r),n!==2&&(r=Bn,Bn=l,r!==null&&qu(r)),n}function qu(n){Bn===null?Bn=n:Bn.push.apply(Bn,n)}function Ev(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],v=p.getSnapshot;p=p.value;try{if(!fi(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Cr(n,r){for(r&=~Vu,r&=~yl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-pt(r),d=1<<l;n[l]=-1,r&=~d}}function _m(n){if((At&6)!==0)throw Error(t(327));Ws();var r=Pi(n,0);if((r&1)===0)return zn(n,we()),null;var l=Al(n,r);if(n.tag!==0&&l===2){var d=Vi(n);d!==0&&(r=d,l=ju(n,d))}if(l===1)throw l=ta,ss(n,0),Cr(n,r),zn(n,we()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,os(n,Bn,$i),zn(n,we()),null}function Yu(n,r){var l=At;At|=1;try{return n(r)}finally{At=l,At===0&&(Gs=we()+500,Ja&&Mr())}}function rs(n){br!==null&&br.tag===0&&(At&6)===0&&Ws();var r=At;At|=1;var l=ri.transition,d=Dt;try{if(ri.transition=null,Dt=1,n)return n()}finally{Dt=d,ri.transition=l,At=r,(At&6)===0&&Mr()}}function Ku(){jn=Vs.current,Ht(Vs)}function ss(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,J0(l)),$t!==null)for(l=$t.return;l!==null;){var d=l;switch(ru(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Za();break;case 3:Bs(),Ht(Fn),Ht(gn),_u();break;case 5:mu(d);break;case 4:Bs();break;case 13:Ht(Gt);break;case 19:Ht(Gt);break;case 10:uu(d.type._context);break;case 22:case 23:Ku()}l=l.return}if(an=n,$t=n=Pr(n.current,null),fn=jn=r,tn=0,ta=null,Vu=yl=is=0,Bn=na=null,es!==null){for(r=0;r<es.length;r++)if(l=es[r],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,v=l.pending;if(v!==null){var T=v.next;v.next=p,d.next=T}l.pending=d}es=null}return n}function vm(n,r){do{var l=$t;try{if(cu(),cl.current=hl,ul){for(var d=Wt.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}ul=!1}if(ns=0,on=en=Wt=null,Ko=!1,$o=0,Hu.current=null,l===null||l.return===null){tn=1,ta=r,$t=null;break}e:{var v=n,T=l.return,D=l,O=r;if(r=fn,D.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var Q=O,ye=D,Ee=ye.tag;if((ye.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ve=ye.alternate;ve?(ye.updateQueue=ve.updateQueue,ye.memoizedState=ve.memoizedState,ye.lanes=ve.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Be=Gp(T);if(Be!==null){Be.flags&=-257,Wp(Be,T,D,v,r),Be.mode&1&&Vp(v,Q,r),r=Be,O=Q;var je=r.updateQueue;if(je===null){var Ye=new Set;Ye.add(O),r.updateQueue=Ye}else je.add(O);break e}else{if((r&1)===0){Vp(v,Q,r),$u();break e}O=Error(t(426))}}else if(Vt&&D.mode&1){var Yt=Gp(T);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Wp(Yt,T,D,v,r),au(zs(O,D));break e}}v=O=zs(O,D),tn!==4&&(tn=2),na===null?na=[v]:na.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var Y=zp(v,O,r);hp(v,Y);break e;case 1:D=O;var H=v.type,$=v.stateNode;if((v.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Ar===null||!Ar.has($)))){v.flags|=65536,r&=-r,v.lanes|=r;var Ae=Hp(v,D,r);hp(v,Ae);break e}}v=v.return}while(v!==null)}Sm(l)}catch(Qe){r=Qe,$t===l&&l!==null&&($t=l=l.return);continue}break}while(!0)}function xm(){var n=xl.current;return xl.current=hl,n===null?hl:n}function $u(){(tn===0||tn===3||tn===2)&&(tn=4),an===null||(is&268435455)===0&&(yl&268435455)===0||Cr(an,fn)}function Al(n,r){var l=At;At|=2;var d=xm();(an!==n||fn!==r)&&($i=null,ss(n,r));do try{Tv();break}catch(p){vm(n,p)}while(!0);if(cu(),At=l,xl.current=d,$t!==null)throw Error(t(261));return an=null,fn=0,tn}function Tv(){for(;$t!==null;)ym($t)}function wv(){for(;$t!==null&&!j();)ym($t)}function ym(n){var r=Tm(n.alternate,n,jn);n.memoizedProps=n.pendingProps,r===null?Sm(n):$t=r,Hu.current=null}function Sm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=_v(l,r,jn),l!==null){$t=l;return}}else{if(l=vv(l,r),l!==null){l.flags&=32767,$t=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,$t=null;return}}if(r=r.sibling,r!==null){$t=r;return}$t=r=n}while(r!==null);tn===0&&(tn=5)}function os(n,r,l){var d=Dt,p=ri.transition;try{ri.transition=null,Dt=1,Av(n,r,l,d)}finally{ri.transition=p,Dt=d}return null}function Av(n,r,l,d){do Ws();while(br!==null);if((At&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(Na(n,v),n===an&&($t=an=null,fn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Ml||(Ml=!0,wm(lt,function(){return Ws(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=ri.transition,ri.transition=null;var T=Dt;Dt=1;var D=At;At|=4,Hu.current=null,yv(n,l),dm(l,n),j0($c),Oa=!!Kc,$c=Kc=null,n.current=l,Sv(l),be(),At=D,Dt=T,ri.transition=v}else n.current=l;if(Ml&&(Ml=!1,br=n,El=p),v=n.pendingLanes,v===0&&(Ar=null),pn(l.stateNode),zn(n,we()),r!==null)for(d=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],d(p.value,{componentStack:p.stack,digest:p.digest});if(Sl)throw Sl=!1,n=Wu,Wu=null,n;return(El&1)!==0&&n.tag!==0&&Ws(),v=n.pendingLanes,(v&1)!==0?n===Xu?ia++:(ia=0,Xu=n):ia=0,Mr(),null}function Ws(){if(br!==null){var n=ch(El),r=ri.transition,l=Dt;try{if(ri.transition=null,Dt=16>n?16:n,br===null)var d=!1;else{if(n=br,br=null,El=0,(At&6)!==0)throw Error(t(331));var p=At;for(At|=4,We=n.current;We!==null;){var v=We,T=v.child;if((We.flags&16)!==0){var D=v.deletions;if(D!==null){for(var O=0;O<D.length;O++){var Q=D[O];for(We=Q;We!==null;){var ye=We;switch(ye.tag){case 0:case 11:case 15:ea(8,ye,v)}var Ee=ye.child;if(Ee!==null)Ee.return=ye,We=Ee;else for(;We!==null;){ye=We;var ve=ye.sibling,Be=ye.return;if(om(ye),ye===Q){We=null;break}if(ve!==null){ve.return=Be,We=ve;break}We=Be}}}var je=v.alternate;if(je!==null){var Ye=je.child;if(Ye!==null){je.child=null;do{var Yt=Ye.sibling;Ye.sibling=null,Ye=Yt}while(Ye!==null)}}We=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,We=T;else e:for(;We!==null;){if(v=We,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:ea(9,v,v.return)}var Y=v.sibling;if(Y!==null){Y.return=v.return,We=Y;break e}We=v.return}}var H=n.current;for(We=H;We!==null;){T=We;var $=T.child;if((T.subtreeFlags&2064)!==0&&$!==null)$.return=T,We=$;else e:for(T=H;We!==null;){if(D=We,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:vl(9,D)}}catch(Qe){jt(D,D.return,Qe)}if(D===T){We=null;break e}var Ae=D.sibling;if(Ae!==null){Ae.return=D.return,We=Ae;break e}We=D.return}}if(At=p,Mr(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Pt,n)}catch{}d=!0}return d}finally{Dt=l,ri.transition=r}}return!1}function Mm(n,r,l){r=zs(l,r),r=zp(n,r,1),n=Tr(n,r,1),r=Rn(),n!==null&&(Un(n,1,r),zn(n,r))}function jt(n,r,l){if(n.tag===3)Mm(n,n,l);else for(;r!==null;){if(r.tag===3){Mm(r,n,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Ar===null||!Ar.has(d))){n=zs(l,n),n=Hp(r,n,1),r=Tr(r,n,1),n=Rn(),r!==null&&(Un(r,1,n),zn(r,n));break}}r=r.return}}function bv(n,r,l){var d=n.pingCache;d!==null&&d.delete(r),r=Rn(),n.pingedLanes|=n.suspendedLanes&l,an===n&&(fn&l)===l&&(tn===4||tn===3&&(fn&130023424)===fn&&500>we()-Gu?ss(n,0):Vu|=l),zn(n,r)}function Em(n,r){r===0&&((n.mode&1)===0?r=1:(r=di,di<<=1,(di&130023424)===0&&(di=4194304)));var l=Rn();n=qi(n,r),n!==null&&(Un(n,r,l),zn(n,l))}function Rv(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Em(n,l)}function Cv(n,r){var l=0;switch(n.tag){case 13:var d=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),Em(n,l)}var Tm;Tm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Fn.current)kn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return kn=!1,gv(n,r,l);kn=(n.flags&131072)!==0}else kn=!1,Vt&&(r.flags&1048576)!==0&&ip(r,tl,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;gl(n,r),n=r.pendingProps;var p=Is(r,gn.current);ks(r,l),p=yu(null,r,d,n,p,l);var v=Su();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,On(d)?(v=!0,Qa(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,hu(r),p.updater=pl,r.stateNode=p,p._reactInternals=r,bu(r,d,n,l),r=Lu(null,r,d,!0,v,l)):(r.tag=0,Vt&&v&&iu(r),bn(null,r,p,l),r=r.child),r;case 16:d=r.elementType;e:{switch(gl(n,r),n=r.pendingProps,p=d._init,d=p(d._payload),r.type=d,p=r.tag=Lv(d),n=pi(d,n),p){case 0:r=Pu(null,r,d,n,l);break e;case 1:r=$p(null,r,d,n,l);break e;case 11:r=Xp(null,r,d,n,l);break e;case 14:r=jp(null,r,d,pi(d.type,n),l);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:pi(d,p),Pu(n,r,d,p,l);case 1:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:pi(d,p),$p(n,r,d,p,l);case 3:e:{if(Zp(r),n===null)throw Error(t(387));d=r.pendingProps,v=r.memoizedState,p=v.element,fp(n,r),al(r,d,null,l);var T=r.memoizedState;if(d=T.element,v.isDehydrated)if(v={element:d,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=zs(Error(t(423)),r),r=Qp(n,r,d,l,p);break e}else if(d!==p){p=zs(Error(t(424)),r),r=Qp(n,r,d,l,p);break e}else for(Xn=xr(r.stateNode.containerInfo.firstChild),Wn=r,Vt=!0,hi=null,l=up(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Us(),d===p){r=Ki(n,r,l);break e}bn(n,r,d,l)}r=r.child}return r;case 5:return mp(r),n===null&&ou(r),d=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,T=p.children,Zc(d,p)?T=null:v!==null&&Zc(d,v)&&(r.flags|=32),Kp(n,r),bn(n,r,T,l),r.child;case 6:return n===null&&ou(r),null;case 13:return Jp(n,r,l);case 4:return pu(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=Fs(r,null,d,l):bn(n,r,d,l),r.child;case 11:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:pi(d,p),Xp(n,r,d,p,l);case 7:return bn(n,r,r.pendingProps,l),r.child;case 8:return bn(n,r,r.pendingProps.children,l),r.child;case 12:return bn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,p=r.pendingProps,v=r.memoizedProps,T=p.value,kt(rl,d._currentValue),d._currentValue=T,v!==null)if(fi(v.value,T)){if(v.children===p.children&&!Fn.current){r=Ki(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var D=v.dependencies;if(D!==null){T=v.child;for(var O=D.firstContext;O!==null;){if(O.context===d){if(v.tag===1){O=Yi(-1,l&-l),O.tag=2;var Q=v.updateQueue;if(Q!==null){Q=Q.shared;var ye=Q.pending;ye===null?O.next=O:(O.next=ye.next,ye.next=O),Q.pending=O}}v.lanes|=l,O=v.alternate,O!==null&&(O.lanes|=l),du(v.return,l,r),D.lanes|=l;break}O=O.next}}else if(v.tag===10)T=v.type===r.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=l,D=T.alternate,D!==null&&(D.lanes|=l),du(T,l,r),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===r){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}bn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,d=r.pendingProps.children,ks(r,l),p=ni(p),d=d(p),r.flags|=1,bn(n,r,d,l),r.child;case 14:return d=r.type,p=pi(d,r.pendingProps),p=pi(d.type,p),jp(n,r,d,p,l);case 15:return qp(n,r,r.type,r.pendingProps,l);case 17:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:pi(d,p),gl(n,r),r.tag=1,On(d)?(n=!0,Qa(r)):n=!1,ks(r,l),kp(r,d,p),bu(r,d,p,l),Lu(null,r,d,!0,n,l);case 19:return tm(n,r,l);case 22:return Yp(n,r,l)}throw Error(t(156,r.tag))};function wm(n,r){return ee(n,r)}function Pv(n,r,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(n,r,l,d){return new Pv(n,r,l,d)}function Zu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Lv(n){if(typeof n=="function")return Zu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===se)return 11;if(n===he)return 14}return 2}function Pr(n,r){var l=n.alternate;return l===null?(l=si(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function bl(n,r,l,d,p,v){var T=2;if(d=n,typeof n=="function")Zu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case U:return as(l.children,p,v,r);case X:T=8,p|=8;break;case C:return n=si(12,l,r,p|2),n.elementType=C,n.lanes=v,n;case J:return n=si(13,l,r,p),n.elementType=J,n.lanes=v,n;case fe:return n=si(19,l,r,p),n.elementType=fe,n.lanes=v,n;case ce:return Rl(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:T=10;break e;case z:T=9;break e;case se:T=11;break e;case he:T=14;break e;case ae:T=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=si(T,l,r,p),r.elementType=n,r.type=d,r.lanes=v,r}function as(n,r,l,d){return n=si(7,n,d,r),n.lanes=l,n}function Rl(n,r,l,d){return n=si(22,n,d,r),n.elementType=ce,n.lanes=l,n.stateNode={isHidden:!1},n}function Qu(n,r,l){return n=si(6,n,null,r),n.lanes=l,n}function Ju(n,r,l){return r=si(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Iv(n,r,l,d,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jn(0),this.expirationTimes=Jn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jn(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function ed(n,r,l,d,p,v,T,D,O){return n=new Iv(n,r,l,D,O),r===1?(r=1,v===!0&&(r|=8)):r=0,v=si(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},hu(v),n}function Dv(n,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:d==null?null:""+d,children:n,containerInfo:r,implementation:l}}function Am(n){if(!n)return Sr;n=n._reactInternals;e:{if(Ci(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(On(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(On(l))return ep(n,l,r)}return r}function bm(n,r,l,d,p,v,T,D,O){return n=ed(l,d,!0,n,p,v,T,D,O),n.context=Am(null),l=n.current,d=Rn(),p=Rr(l),v=Yi(d,p),v.callback=r??null,Tr(l,v,p),n.current.lanes=p,Un(n,p,d),zn(n,d),n}function Cl(n,r,l,d){var p=r.current,v=Rn(),T=Rr(p);return l=Am(l),r.context===null?r.context=l:r.pendingContext=l,r=Yi(v,T),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=Tr(p,r,T),n!==null&&(_i(n,p,T,v),ol(n,p,T)),T}function Pl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Rm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function td(n,r){Rm(n,r),(n=n.alternate)&&Rm(n,r)}function Nv(){return null}var Cm=typeof reportError=="function"?reportError:function(n){console.error(n)};function nd(n){this._internalRoot=n}Ll.prototype.render=nd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Cl(n,r,null,null)},Ll.prototype.unmount=nd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;rs(function(){Cl(null,n,null,null)}),r[Gi]=null}};function Ll(n){this._internalRoot=n}Ll.prototype.unstable_scheduleHydration=function(n){if(n){var r=fh();n={blockedOn:null,target:n,priority:r};for(var l=0;l<gr.length&&r!==0&&r<gr[l].priority;l++);gr.splice(l,0,n),l===0&&mh(n)}};function id(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Il(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Pm(){}function Uv(n,r,l,d,p){if(p){if(typeof d=="function"){var v=d;d=function(){var Q=Pl(T);v.call(Q)}}var T=bm(r,d,n,0,null,!1,!1,"",Pm);return n._reactRootContainer=T,n[Gi]=T.current,Ho(n.nodeType===8?n.parentNode:n),rs(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof d=="function"){var D=d;d=function(){var Q=Pl(O);D.call(Q)}}var O=ed(n,0,!1,null,null,!1,!1,"",Pm);return n._reactRootContainer=O,n[Gi]=O.current,Ho(n.nodeType===8?n.parentNode:n),rs(function(){Cl(r,O,l,d)}),O}function Dl(n,r,l,d,p){var v=l._reactRootContainer;if(v){var T=v;if(typeof p=="function"){var D=p;p=function(){var O=Pl(T);D.call(O)}}Cl(r,T,n,p)}else T=Uv(l,r,n,p,d);return Pl(T)}uh=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Jt(r.pendingLanes);l!==0&&(bc(r,l|1),zn(r,we()),(At&6)===0&&(Gs=we()+500,Mr()))}break;case 13:rs(function(){var d=qi(n,1);if(d!==null){var p=Rn();_i(d,n,1,p)}}),td(n,1)}},Rc=function(n){if(n.tag===13){var r=qi(n,134217728);if(r!==null){var l=Rn();_i(r,n,134217728,l)}td(n,134217728)}},dh=function(n){if(n.tag===13){var r=Rr(n),l=qi(n,r);if(l!==null){var d=Rn();_i(l,n,r,d)}td(n,r)}},fh=function(){return Dt},hh=function(n,r){var l=Dt;try{return Dt=n,r()}finally{Dt=l}},Pe=function(n,r,l){switch(r){case"input":if(Le(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==n&&d.form===n.form){var p=$a(d);if(!p)throw Error(t(90));me(d),Le(d,p)}}}break;case"textarea":de(n,l);break;case"select":r=l.value,r!=null&&P(n,!!l.multiple,r,!1)}},Bt=Yu,Qt=rs;var Fv={usingClientEntryPoint:!1,Events:[Wo,Ps,$a,Ne,ft,Yu]},ra={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ov={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=b(n),n===null?null:n.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||Nv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{Pt=Nl.inject(Ov),Mt=Nl}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fv,Hn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!id(r))throw Error(t(200));return Dv(n,r,null,l)},Hn.createRoot=function(n,r){if(!id(n))throw Error(t(299));var l=!1,d="",p=Cm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=ed(n,1,!1,null,null,l,!1,d,p),n[Gi]=r.current,Ho(n.nodeType===8?n.parentNode:n),new nd(r)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=b(r),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return rs(n)},Hn.hydrate=function(n,r,l){if(!Il(r))throw Error(t(200));return Dl(null,n,r,!0,l)},Hn.hydrateRoot=function(n,r,l){if(!id(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,v="",T=Cm;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=bm(r,null,n,1,l??null,p,!1,v,T),n[Gi]=r.current,Ho(n),d)for(n=0;n<d.length;n++)l=d[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Ll(r)},Hn.render=function(n,r,l){if(!Il(r))throw Error(t(200));return Dl(null,n,r,!1,l)},Hn.unmountComponentAtNode=function(n){if(!Il(n))throw Error(t(40));return n._reactRootContainer?(rs(function(){Dl(null,null,n,!1,function(){n._reactRootContainer=null,n[Gi]=null})}),!0):!1},Hn.unstable_batchedUpdates=Yu,Hn.unstable_renderSubtreeIntoContainer=function(n,r,l,d){if(!Il(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Dl(n,r,l,!1,d)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var km;function Yv(){if(km)return od.exports;km=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),od.exports=qv(),od.exports}var Bm;function Kv(){if(Bm)return Ul;Bm=1;var o=Yv();return Ul.createRoot=o.createRoot,Ul.hydrateRoot=o.hydrateRoot,Ul}var $v=Kv();const Zv=v_($v);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vf="170",Qv=0,zm=1,Jv=2,x_=1,y_=2,ir=3,cr=0,Vn=1,li=2,Xr=0,ao=1,Hm=2,Vm=3,Gm=4,ex=5,gs=100,tx=101,nx=102,ix=103,rx=104,sx=200,ox=201,ax=202,lx=203,Yd=204,Kd=205,cx=206,ux=207,dx=208,fx=209,hx=210,px=211,mx=212,gx=213,_x=214,$d=0,Zd=1,Qd=2,fo=3,Jd=4,ef=5,tf=6,nf=7,S_=0,vx=1,xx=2,jr=0,yx=1,Sx=2,Mx=3,M_=4,Ex=5,Tx=6,wx=7,Wm="attached",Ax="detached",E_=300,ho=301,po=302,rf=303,sf=304,Mc=306,mo=1e3,Gr=1001,gc=1002,In=1003,T_=1004,ga=1005,Kn=1006,cc=1007,sr=1008,ur=1009,w_=1010,A_=1011,Ma=1012,Gf=1013,vs=1014,Ti=1015,Aa=1016,Wf=1017,Xf=1018,go=1020,b_=35902,R_=1021,C_=1022,ci=1023,P_=1024,L_=1025,lo=1026,_o=1027,jf=1028,qf=1029,I_=1030,Yf=1031,Kf=1033,uc=33776,dc=33777,fc=33778,hc=33779,of=35840,af=35841,lf=35842,cf=35843,uf=36196,df=37492,ff=37496,hf=37808,pf=37809,mf=37810,gf=37811,_f=37812,vf=37813,xf=37814,yf=37815,Sf=37816,Mf=37817,Ef=37818,Tf=37819,wf=37820,Af=37821,pc=36492,bf=36494,Rf=36495,D_=36283,Cf=36284,Pf=36285,Lf=36286,Ea=2300,Ta=2301,cd=2302,Xm=2400,jm=2401,qm=2402,bx=2500,Rx=0,N_=1,If=2,Cx=3200,Px=3201,U_=0,Lx=1,Vr="",Kt="srgb",Tn="srgb-linear",Ec="linear",Ft="srgb",Xs=7680,Ym=519,Ix=512,Dx=513,Nx=514,F_=515,Ux=516,Fx=517,Ox=518,kx=519,Df=35044,Km="300 es",or=2e3,_c=2001;class To{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $m=1234567;const xa=Math.PI/180,vo=180/Math.PI;function Ai(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[o&255]+yn[o>>8&255]+yn[o>>16&255]+yn[o>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function En(o,e,t){return Math.max(e,Math.min(t,o))}function $f(o,e){return(o%e+e)%e}function Bx(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function zx(o,e,t){return o!==e?(t-o)/(e-o):0}function ya(o,e,t){return(1-t)*o+t*e}function Hx(o,e,t,i){return ya(o,e,1-Math.exp(-t*i))}function Vx(o,e=1){return e-Math.abs($f(o,e*2)-e)}function Gx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Wx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Xx(o,e){return o+Math.floor(Math.random()*(e-o+1))}function jx(o,e){return o+Math.random()*(e-o)}function qx(o){return o*(.5-Math.random())}function Yx(o){o!==void 0&&($m=o);let e=$m+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kx(o){return o*xa}function $x(o){return o*vo}function Zx(o){return(o&o-1)===0&&o!==0}function Qx(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Jx(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ey(o,e,t,i,s){const a=Math.cos,c=Math.sin,u=a(t/2),f=c(t/2),h=a((e+i)/2),m=c((e+i)/2),g=a((e-i)/2),_=c((e-i)/2),y=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(u*m,f*g,f*_,u*h);break;case"YZY":o.set(f*_,u*m,f*g,u*h);break;case"ZXZ":o.set(f*g,f*_,u*m,u*h);break;case"XZX":o.set(u*m,f*M,f*y,u*h);break;case"YXY":o.set(f*y,u*m,f*M,u*h);break;case"ZYZ":o.set(f*M,f*y,u*m,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Nt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const ty={DEG2RAD:xa,RAD2DEG:vo,generateUUID:Ai,clamp:En,euclideanModulo:$f,mapLinear:Bx,inverseLerp:zx,lerp:ya,damp:Hx,pingpong:Vx,smoothstep:Gx,smootherstep:Wx,randInt:Xx,randFloat:jx,randFloatSpread:qx,seededRandom:Yx,degToRad:Kx,radToDeg:$x,isPowerOfTwo:Zx,ceilPowerOfTwo:Qx,floorPowerOfTwo:Jx,setQuaternionFromProperEuler:ey,normalize:Nt,denormalize:Mi};class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,i,s,a,c,u,f,h){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,f,h)}set(e,t,i,s,a,c,u,f,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=u,m[3]=t,m[4]=a,m[5]=f,m[6]=i,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],f=i[6],h=i[1],m=i[4],g=i[7],_=i[2],y=i[5],M=i[8],E=s[0],S=s[3],x=s[6],L=s[1],I=s[4],A=s[7],q=s[2],k=s[5],U=s[8];return a[0]=c*E+u*L+f*q,a[3]=c*S+u*I+f*k,a[6]=c*x+u*A+f*U,a[1]=h*E+m*L+g*q,a[4]=h*S+m*I+g*k,a[7]=h*x+m*A+g*U,a[2]=_*E+y*L+M*q,a[5]=_*S+y*I+M*k,a[8]=_*x+y*A+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8];return t*c*m-t*u*h-i*a*m+i*u*f+s*a*h-s*c*f}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8],g=m*c-u*h,_=u*f-m*a,y=h*a-c*f,M=t*g+i*_+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(s*h-m*i)*E,e[2]=(u*i-s*c)*E,e[3]=_*E,e[4]=(m*t-s*f)*E,e[5]=(s*a-u*t)*E,e[6]=y*E,e[7]=(i*f-h*t)*E,e[8]=(c*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const f=Math.cos(a),h=Math.sin(a);return this.set(i*f,i*h,-i*(f*c+h*u)+c+e,-s*h,s*f,-s*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(ud.makeScale(e,t)),this}rotate(e){return this.premultiply(ud.makeRotation(-e)),this}translate(e,t){return this.premultiply(ud.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ud=new gt;function O_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function wa(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ny(){const o=wa("canvas");return o.style.display="block",o}const Zm={};function _a(o){o in Zm||(Zm[o]=!0,console.warn(o))}function iy(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function ry(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sy(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Et={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ft&&(o.r=lr(o.r),o.g=lr(o.g),o.b=lr(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ft&&(o.r=co(o.r),o.g=co(o.g),o.b=co(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Vr?Ec:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function lr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function co(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Qm=[.64,.33,.3,.6,.15,.06],Jm=[.2126,.7152,.0722],eg=[.3127,.329],tg=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ng=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Et.define({[Tn]:{primaries:Qm,whitePoint:eg,transfer:Ec,toXYZ:tg,fromXYZ:ng,luminanceCoefficients:Jm,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:Qm,whitePoint:eg,transfer:Ft,toXYZ:tg,fromXYZ:ng,luminanceCoefficients:Jm,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}});let js;class oy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{js===void 0&&(js=wa("canvas")),js.width=e.width,js.height=e.height;const i=js.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=lr(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(lr(t[i]/255)*255):t[i]=lr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ay=0;class k_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(dd(s[c].image)):a.push(dd(s[c]))}else a=dd(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function dd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?oy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ly=0;class nn extends To{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=Gr,s=Gr,a=Kn,c=sr,u=ci,f=ur,h=nn.DEFAULT_ANISOTROPY,m=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Ai(),this.name="",this.source=new k_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mo:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mo:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=E_;nn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,i=0,s=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const f=e.elements,h=f[0],m=f[4],g=f[8],_=f[1],y=f[5],M=f[9],E=f[2],S=f[6],x=f[10];if(Math.abs(m-_)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,A=(y+1)/2,q=(x+1)/2,k=(m+_)/4,U=(g+E)/4,X=(M+S)/4;return I>A&&I>q?I<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(I),s=k/i,a=U/i):A>q?A<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(A),i=k/s,a=X/s):q<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(q),i=U/a,s=X/a),this.set(i,s,a,t),this}let L=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(_-m)*(_-m));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(g-E)/L,this.z=(_-m)/L,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cy extends To{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new nn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new k_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs extends cy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class B_ extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uy extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let f=i[s+0],h=i[s+1],m=i[s+2],g=i[s+3];const _=a[c+0],y=a[c+1],M=a[c+2],E=a[c+3];if(u===0){e[t+0]=f,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=_,e[t+1]=y,e[t+2]=M,e[t+3]=E;return}if(g!==E||f!==_||h!==y||m!==M){let S=1-u;const x=f*_+h*y+m*M+g*E,L=x>=0?1:-1,I=1-x*x;if(I>Number.EPSILON){const q=Math.sqrt(I),k=Math.atan2(q,x*L);S=Math.sin(S*k)/q,u=Math.sin(u*k)/q}const A=u*L;if(f=f*S+_*A,h=h*S+y*A,m=m*S+M*A,g=g*S+E*A,S===1-u){const q=1/Math.sqrt(f*f+h*h+m*m+g*g);f*=q,h*=q,m*=q,g*=q}}e[t]=f,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],f=i[s+1],h=i[s+2],m=i[s+3],g=a[c],_=a[c+1],y=a[c+2],M=a[c+3];return e[t]=u*M+m*g+f*y-h*_,e[t+1]=f*M+m*_+h*g-u*y,e[t+2]=h*M+m*y+u*_-f*g,e[t+3]=m*M-u*g-f*_-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(i/2),m=u(s/2),g=u(a/2),_=f(i/2),y=f(s/2),M=f(a/2);switch(c){case"XYZ":this._x=_*m*g+h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g-_*y*M;break;case"YXZ":this._x=_*m*g+h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g+_*y*M;break;case"ZXY":this._x=_*m*g-h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g-_*y*M;break;case"ZYX":this._x=_*m*g-h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g+_*y*M;break;case"YZX":this._x=_*m*g+h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g-_*y*M;break;case"XZY":this._x=_*m*g-h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g+_*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],f=t[9],h=t[2],m=t[6],g=t[10],_=i+u+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(m-f)*y,this._y=(a-h)*y,this._z=(c-s)*y}else if(i>u&&i>g){const y=2*Math.sqrt(1+i-u-g);this._w=(m-f)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(a+h)/y}else if(u>g){const y=2*Math.sqrt(1+u-i-g);this._w=(a-h)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(f+m)/y}else{const y=2*Math.sqrt(1+g-i-u);this._w=(c-s)/y,this._x=(a+h)/y,this._y=(f+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,f=t._y,h=t._z,m=t._w;return this._x=i*m+c*u+s*h-a*f,this._y=s*m+c*f+a*u-i*h,this._z=a*m+c*h+i*f-s*u,this._w=c*m-i*u-s*f-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=s,this._z=a,this;const f=1-u*u;if(f<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*i+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const h=Math.sqrt(f),m=Math.atan2(h,u),g=Math.sin((1-t)*m)/h,_=Math.sin(t*m)/h;return this._w=c*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ig.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ig.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*s-u*i),m=2*(u*t-a*s),g=2*(a*i-c*t);return this.x=t+f*h+c*g-u*m,this.y=i+f*m+u*h-a*g,this.z=s+f*g+a*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=s*f-a*u,this.y=a*c-i*f,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fd.copy(this).projectOnVector(e),this.sub(fd)}reflect(e){return this.sub(fd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fd=new V,ig=new Mn;class Fi{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,vi):vi.fromBufferAttribute(a,c),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fl.copy(i.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Ol.subVectors(this.max,oa),qs.subVectors(e.a,oa),Ys.subVectors(e.b,oa),Ks.subVectors(e.c,oa),Ir.subVectors(Ys,qs),Dr.subVectors(Ks,Ys),ls.subVectors(qs,Ks);let t=[0,-Ir.z,Ir.y,0,-Dr.z,Dr.y,0,-ls.z,ls.y,Ir.z,0,-Ir.x,Dr.z,0,-Dr.x,ls.z,0,-ls.x,-Ir.y,Ir.x,0,-Dr.y,Dr.x,0,-ls.y,ls.x,0];return!hd(t,qs,Ys,Ks,Ol)||(t=[1,0,0,0,1,0,0,0,1],!hd(t,qs,Ys,Ks,Ol))?!1:(kl.crossVectors(Ir,Dr),t=[kl.x,kl.y,kl.z],hd(t,qs,Ys,Ks,Ol))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new V,new V,new V,new V,new V,new V,new V,new V],vi=new V,Fl=new Fi,qs=new V,Ys=new V,Ks=new V,Ir=new V,Dr=new V,ls=new V,oa=new V,Ol=new V,kl=new V,cs=new V;function hd(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){cs.fromArray(o,a);const u=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),f=e.dot(cs),h=t.dot(cs),m=i.dot(cs);if(Math.max(-Math.max(f,h,m),Math.min(f,h,m))>u)return!1}return!0}const dy=new Fi,aa=new V,pd=new V;class Oi{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):dy.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);const t=aa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(aa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(pd)),this.expandByPoint(aa.copy(e.center).sub(pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new V,md=new V,Bl=new V,Nr=new V,gd=new V,zl=new V,_d=new V;class ba{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){md.copy(e).add(t).multiplyScalar(.5),Bl.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(md);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Bl),u=Nr.dot(this.direction),f=-Nr.dot(Bl),h=Nr.lengthSq(),m=Math.abs(1-c*c);let g,_,y,M;if(m>0)if(g=c*f-u,_=c*u-f,M=a*m,g>=0)if(_>=-M)if(_<=M){const E=1/m;g*=E,_*=E,y=g*(g+c*_+2*u)+_*(c*g+_+2*f)+h}else _=a,g=Math.max(0,-(c*_+u)),y=-g*g+_*(_+2*f)+h;else _=-a,g=Math.max(0,-(c*_+u)),y=-g*g+_*(_+2*f)+h;else _<=-M?(g=Math.max(0,-(-c*a+u)),_=g>0?-a:Math.min(Math.max(-a,-f),a),y=-g*g+_*(_+2*f)+h):_<=M?(g=0,_=Math.min(Math.max(-a,-f),a),y=_*(_+2*f)+h):(g=Math.max(0,-(c*a+u)),_=g>0?a:Math.min(Math.max(-a,-f),a),y=-g*g+_*(_+2*f)+h);else _=c>0?-a:a,g=Math.max(0,-(c*_+u)),y=-g*g+_*(_+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(md).addScaledVector(Bl,_),y}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);const i=Qi.dot(this.direction),s=Qi.dot(Qi)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,f;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(i=(e.min.x-_.x)*h,s=(e.max.x-_.x)*h):(i=(e.max.x-_.x)*h,s=(e.min.x-_.x)*h),m>=0?(a=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(a=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-_.z)*g,f=(e.max.z-_.z)*g):(u=(e.max.z-_.z)*g,f=(e.min.z-_.z)*g),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,i,s,a){gd.subVectors(t,e),zl.subVectors(i,e),_d.crossVectors(gd,zl);let c=this.direction.dot(_d),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Nr.subVectors(this.origin,e);const f=u*this.direction.dot(zl.crossVectors(Nr,zl));if(f<0)return null;const h=u*this.direction.dot(gd.cross(Nr));if(h<0||f+h>c)return null;const m=-u*Nr.dot(_d);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,s,a,c,u,f,h,m,g,_,y,M,E,S){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,f,h,m,g,_,y,M,E,S)}set(e,t,i,s,a,c,u,f,h,m,g,_,y,M,E,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=a,x[5]=c,x[9]=u,x[13]=f,x[2]=h,x[6]=m,x[10]=g,x[14]=_,x[3]=y,x[7]=M,x[11]=E,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),a=1/$s.setFromMatrixColumn(e,1).length(),c=1/$s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(s),h=Math.sin(s),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=c*m,y=c*g,M=u*m,E=u*g;t[0]=f*m,t[4]=-f*g,t[8]=h,t[1]=y+M*h,t[5]=_-E*h,t[9]=-u*f,t[2]=E-_*h,t[6]=M+y*h,t[10]=c*f}else if(e.order==="YXZ"){const _=f*m,y=f*g,M=h*m,E=h*g;t[0]=_+E*u,t[4]=M*u-y,t[8]=c*h,t[1]=c*g,t[5]=c*m,t[9]=-u,t[2]=y*u-M,t[6]=E+_*u,t[10]=c*f}else if(e.order==="ZXY"){const _=f*m,y=f*g,M=h*m,E=h*g;t[0]=_-E*u,t[4]=-c*g,t[8]=M+y*u,t[1]=y+M*u,t[5]=c*m,t[9]=E-_*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const _=c*m,y=c*g,M=u*m,E=u*g;t[0]=f*m,t[4]=M*h-y,t[8]=_*h+E,t[1]=f*g,t[5]=E*h+_,t[9]=y*h-M,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const _=c*f,y=c*h,M=u*f,E=u*h;t[0]=f*m,t[4]=E-_*g,t[8]=M*g+y,t[1]=g,t[5]=c*m,t[9]=-u*m,t[2]=-h*m,t[6]=y*g+M,t[10]=_-E*g}else if(e.order==="XZY"){const _=c*f,y=c*h,M=u*f,E=u*h;t[0]=f*m,t[4]=-g,t[8]=h*m,t[1]=_*g+E,t[5]=c*m,t[9]=y*g-M,t[2]=M*g-y,t[6]=u*m,t[10]=E*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fy,e,hy)}lookAt(e,t,i){const s=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Ur.crossVectors(i,qn),Ur.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Ur.crossVectors(i,qn)),Ur.normalize(),Hl.crossVectors(qn,Ur),s[0]=Ur.x,s[4]=Hl.x,s[8]=qn.x,s[1]=Ur.y,s[5]=Hl.y,s[9]=qn.y,s[2]=Ur.z,s[6]=Hl.z,s[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],f=i[8],h=i[12],m=i[1],g=i[5],_=i[9],y=i[13],M=i[2],E=i[6],S=i[10],x=i[14],L=i[3],I=i[7],A=i[11],q=i[15],k=s[0],U=s[4],X=s[8],C=s[12],R=s[1],z=s[5],se=s[9],J=s[13],fe=s[2],he=s[6],ae=s[10],ce=s[14],B=s[3],le=s[7],ie=s[11],N=s[15];return a[0]=c*k+u*R+f*fe+h*B,a[4]=c*U+u*z+f*he+h*le,a[8]=c*X+u*se+f*ae+h*ie,a[12]=c*C+u*J+f*ce+h*N,a[1]=m*k+g*R+_*fe+y*B,a[5]=m*U+g*z+_*he+y*le,a[9]=m*X+g*se+_*ae+y*ie,a[13]=m*C+g*J+_*ce+y*N,a[2]=M*k+E*R+S*fe+x*B,a[6]=M*U+E*z+S*he+x*le,a[10]=M*X+E*se+S*ae+x*ie,a[14]=M*C+E*J+S*ce+x*N,a[3]=L*k+I*R+A*fe+q*B,a[7]=L*U+I*z+A*he+q*le,a[11]=L*X+I*se+A*ae+q*ie,a[15]=L*C+I*J+A*ce+q*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],f=e[9],h=e[13],m=e[2],g=e[6],_=e[10],y=e[14],M=e[3],E=e[7],S=e[11],x=e[15];return M*(+a*f*g-s*h*g-a*u*_+i*h*_+s*u*y-i*f*y)+E*(+t*f*y-t*h*_+a*c*_-s*c*y+s*h*m-a*f*m)+S*(+t*h*g-t*u*y-a*c*g+i*c*y+a*u*m-i*h*m)+x*(-s*u*m-t*f*g+t*u*_+s*c*g-i*c*_+i*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8],g=e[9],_=e[10],y=e[11],M=e[12],E=e[13],S=e[14],x=e[15],L=g*S*h-E*_*h+E*f*y-u*S*y-g*f*x+u*_*x,I=M*_*h-m*S*h-M*f*y+c*S*y+m*f*x-c*_*x,A=m*E*h-M*g*h+M*u*y-c*E*y-m*u*x+c*g*x,q=M*g*f-m*E*f-M*u*_+c*E*_+m*u*S-c*g*S,k=t*L+i*I+s*A+a*q;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/k;return e[0]=L*U,e[1]=(E*_*a-g*S*a-E*s*y+i*S*y+g*s*x-i*_*x)*U,e[2]=(u*S*a-E*f*a+E*s*h-i*S*h-u*s*x+i*f*x)*U,e[3]=(g*f*a-u*_*a-g*s*h+i*_*h+u*s*y-i*f*y)*U,e[4]=I*U,e[5]=(m*S*a-M*_*a+M*s*y-t*S*y-m*s*x+t*_*x)*U,e[6]=(M*f*a-c*S*a-M*s*h+t*S*h+c*s*x-t*f*x)*U,e[7]=(c*_*a-m*f*a+m*s*h-t*_*h-c*s*y+t*f*y)*U,e[8]=A*U,e[9]=(M*g*a-m*E*a-M*i*y+t*E*y+m*i*x-t*g*x)*U,e[10]=(c*E*a-M*u*a+M*i*h-t*E*h-c*i*x+t*u*x)*U,e[11]=(m*u*a-c*g*a-m*i*h+t*g*h+c*i*y-t*u*y)*U,e[12]=q*U,e[13]=(m*E*s-M*g*s+M*i*_-t*E*_-m*i*S+t*g*S)*U,e[14]=(M*u*s-c*E*s-M*i*f+t*E*f+c*i*S-t*u*S)*U,e[15]=(c*g*s-m*u*s+m*i*f-t*g*f-c*i*_+t*u*_)*U,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,f=e.z,h=a*c,m=a*u;return this.set(h*c+i,h*u-s*f,h*f+s*u,0,h*u+s*f,m*u+i,m*f-s*c,0,h*f-s*u,m*f+s*c,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,h=a+a,m=c+c,g=u+u,_=a*h,y=a*m,M=a*g,E=c*m,S=c*g,x=u*g,L=f*h,I=f*m,A=f*g,q=i.x,k=i.y,U=i.z;return s[0]=(1-(E+x))*q,s[1]=(y+A)*q,s[2]=(M-I)*q,s[3]=0,s[4]=(y-A)*k,s[5]=(1-(_+x))*k,s[6]=(S+L)*k,s[7]=0,s[8]=(M+I)*U,s[9]=(S-L)*U,s[10]=(1-(_+E))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=$s.set(s[0],s[1],s[2]).length();const c=$s.set(s[4],s[5],s[6]).length(),u=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],xi.copy(this);const h=1/a,m=1/c,g=1/u;return xi.elements[0]*=h,xi.elements[1]*=h,xi.elements[2]*=h,xi.elements[4]*=m,xi.elements[5]*=m,xi.elements[6]*=m,xi.elements[8]*=g,xi.elements[9]*=g,xi.elements[10]*=g,t.setFromRotationMatrix(xi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,s,a,c,u=or){const f=this.elements,h=2*a/(t-e),m=2*a/(i-s),g=(t+e)/(t-e),_=(i+s)/(i-s);let y,M;if(u===or)y=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===_c)y=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=h,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=or){const f=this.elements,h=1/(t-e),m=1/(i-s),g=1/(c-a),_=(t+e)*h,y=(i+s)*m;let M,E;if(u===or)M=(c+a)*g,E=-2*g;else if(u===_c)M=a*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=E,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $s=new V,xi=new mt,fy=new V(0,0,0),hy=new V(1,1,1),Ur=new V,Hl=new V,qn=new V,rg=new mt,sg=new Mn;class Ri{constructor(e=0,t=0,i=0,s=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],f=s[1],h=s[5],m=s[9],g=s[2],_=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(En(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-En(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(En(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-En(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(En(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-En(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sg.setFromEuler(this),this.setFromQuaternion(sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class Zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let py=0;const og=new V,Zs=new Mn,Ji=new mt,Vl=new V,la=new V,my=new V,gy=new Mn,ag=new V(1,0,0),lg=new V(0,1,0),cg=new V(0,0,1),ug={type:"added"},_y={type:"removed"},Qs={type:"childadded",child:null},vd={type:"childremoved",child:null};class Xt extends To{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new V,t=new Ri,i=new Mn,s=new V(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new gt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(ag,e)}rotateY(e){return this.rotateOnAxis(lg,e)}rotateZ(e){return this.rotateOnAxis(cg,e)}translateOnAxis(e,t){return og.copy(e).applyQuaternion(this.quaternion),this.position.add(og.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ag,e)}translateY(e){return this.translateOnAxis(lg,e)}translateZ(e){return this.translateOnAxis(cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vl.copy(e):Vl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(la,Vl,this.up):Ji.lookAt(Vl,la,this.up),this.quaternion.setFromRotationMatrix(Ji),s&&(Ji.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(Ji),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ug),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_y),vd.child=e,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ug),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,my),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,gy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,m=f.length;h<m;h++){const g=f[h];a(e.shapes,g)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(a(e.materials,this.material[f]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),m=c(e.images),g=c(e.shapes),_=c(e.skeletons),y=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(u){const f=[];for(const h in u){const m=u[h];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Xt.DEFAULT_UP=new V(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new V,er=new V,xd=new V,tr=new V,Js=new V,eo=new V,dg=new V,yd=new V,Sd=new V,Md=new V,Ed=new Lt,Td=new Lt,wd=new Lt;class Ei{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),yi.subVectors(e,t),s.cross(yi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){yi.subVectors(s,t),er.subVectors(i,t),xd.subVectors(e,t);const c=yi.dot(yi),u=yi.dot(er),f=yi.dot(xd),h=er.dot(er),m=er.dot(xd),g=c*h-u*u;if(g===0)return a.set(0,0,0),null;const _=1/g,y=(h*f-u*m)*_,M=(c*m-u*f)*_;return a.set(1-y-M,M,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,i,s,a,c,u,f){return this.getBarycoord(e,t,i,s,tr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,tr.x),f.addScaledVector(c,tr.y),f.addScaledVector(u,tr.z),f)}static getInterpolatedAttribute(e,t,i,s,a,c){return Ed.setScalar(0),Td.setScalar(0),wd.setScalar(0),Ed.fromBufferAttribute(e,t),Td.fromBufferAttribute(e,i),wd.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Ed,a.x),c.addScaledVector(Td,a.y),c.addScaledVector(wd,a.z),c}static isFrontFacing(e,t,i,s){return yi.subVectors(i,t),er.subVectors(e,t),yi.cross(er).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),yi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return Ei.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;Js.subVectors(s,i),eo.subVectors(a,i),yd.subVectors(e,i);const f=Js.dot(yd),h=eo.dot(yd);if(f<=0&&h<=0)return t.copy(i);Sd.subVectors(e,s);const m=Js.dot(Sd),g=eo.dot(Sd);if(m>=0&&g<=m)return t.copy(s);const _=f*g-m*h;if(_<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(i).addScaledVector(Js,c);Md.subVectors(e,a);const y=Js.dot(Md),M=eo.dot(Md);if(M>=0&&y<=M)return t.copy(a);const E=y*h-f*M;if(E<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(i).addScaledVector(eo,u);const S=m*M-y*g;if(S<=0&&g-m>=0&&y-M>=0)return dg.subVectors(a,s),u=(g-m)/(g-m+(y-M)),t.copy(s).addScaledVector(dg,u);const x=1/(S+E+_);return c=E*x,u=_*x,t.copy(i).addScaledVector(Js,c).addScaledVector(eo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function Ad(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Et.workingColorSpace){if(e=$f(e,1),t=En(t,0,1),i=En(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Ad(c,a,e+1/3),this.g=Ad(c,a,e),this.b=Ad(c,a,e-1/3)}return Et.toWorkingColorSpace(this,s),this}setStyle(e,t=Kt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=z_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Et.fromWorkingColorSpace(Sn.copy(this),e),Math.round(En(Sn.r*255,0,255))*65536+Math.round(En(Sn.g*255,0,255))*256+Math.round(En(Sn.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(Sn.copy(this),t);const i=Sn.r,s=Sn.g,a=Sn.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let f,h;const m=(u+c)/2;if(u===c)f=0,h=0;else{const g=c-u;switch(h=m<=.5?g/(c+u):g/(2-c-u),c){case i:f=(s-a)/g+(s<a?6:0);break;case s:f=(a-i)/g+2;break;case a:f=(i-s)/g+4;break}f/=6}return e.h=f,e.s=h,e.l=m,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Kt){Et.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,i=Sn.g,s=Sn.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Fr),this.setHSL(Fr.h+e,Fr.s+t,Fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fr),e.getHSL(Gl);const i=ya(Fr.h,Gl.h,t),s=ya(Fr.s,Gl.s,t),a=ya(Fr.l,Gl.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new ct;ct.NAMES=z_;let vy=0;class bi extends To{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Ai(),this.name="",this.blending=ao,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yd,this.blendDst=Kd,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yd&&(i.blendSrc=this.blendSrc),this.blendDst!==Kd&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ym&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wi extends bi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=S_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new V,Wl=new yt;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Df,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wl.fromBufferAttribute(this,t),Wl.applyMatrix3(e),this.setXY(t,Wl.x,Wl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),a=Nt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Df&&(e.usage=this.usage),e}}class H_ extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class V_ extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dn extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let xy=0;const oi=new mt,bd=new Xt,to=new V,Yn=new Fi,ca=new Fi,cn=new V;class $n extends To{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O_(e)?V_:H_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new gt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,i){return oi.makeTranslation(e,t,i),this.applyMatrix4(oi),this}scale(e,t,i){return oi.makeScale(e,t,i),this.applyMatrix4(oi),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Dn(i,3))}else{for(let i=0,s=t.count;i<s;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];Yn.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];ca.setFromBufferAttribute(u),this.morphTargetsRelative?(cn.addVectors(Yn.min,ca.min),Yn.expandByPoint(cn),cn.addVectors(Yn.max,ca.max),Yn.expandByPoint(cn)):(Yn.expandByPoint(ca.min),Yn.expandByPoint(ca.max))}Yn.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)cn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(cn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let h=0,m=u.count;h<m;h++)cn.fromBufferAttribute(u,h),f&&(to.fromBufferAttribute(e,h),cn.add(to)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let X=0;X<i.count;X++)u[X]=new V,f[X]=new V;const h=new V,m=new V,g=new V,_=new yt,y=new yt,M=new yt,E=new V,S=new V;function x(X,C,R){h.fromBufferAttribute(i,X),m.fromBufferAttribute(i,C),g.fromBufferAttribute(i,R),_.fromBufferAttribute(a,X),y.fromBufferAttribute(a,C),M.fromBufferAttribute(a,R),m.sub(h),g.sub(h),y.sub(_),M.sub(_);const z=1/(y.x*M.y-M.x*y.y);isFinite(z)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(z),S.copy(g).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(z),u[X].add(E),u[C].add(E),u[R].add(E),f[X].add(S),f[C].add(S),f[R].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let X=0,C=L.length;X<C;++X){const R=L[X],z=R.start,se=R.count;for(let J=z,fe=z+se;J<fe;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const I=new V,A=new V,q=new V,k=new V;function U(X){q.fromBufferAttribute(s,X),k.copy(q);const C=u[X];I.copy(C),I.sub(q.multiplyScalar(q.dot(C))).normalize(),A.crossVectors(k,C);const z=A.dot(f[X])<0?-1:1;c.setXYZW(X,I.x,I.y,I.z,z)}for(let X=0,C=L.length;X<C;++X){const R=L[X],z=R.start,se=R.count;for(let J=z,fe=z+se;J<fe;J+=3)U(e.getX(J+0)),U(e.getX(J+1)),U(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const s=new V,a=new V,c=new V,u=new V,f=new V,h=new V,m=new V,g=new V;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),E=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),u.add(m),f.add(m),h.add(m),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,y=t.count;_<y;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(u,f){const h=u.array,m=u.itemSize,g=u.normalized,_=new h.constructor(f.length*m);let y=0,M=0;for(let E=0,S=f.length;E<S;E++){u.isInterleavedBufferAttribute?y=f[E]*u.data.stride+u.offset:y=f[E]*m;for(let x=0;x<m;x++)_[M++]=h[y++]}return new hn(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,i=this.index.array,s=this.attributes;for(const u in s){const f=s[u],h=e(f,i);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const f=[],h=a[u];for(let m=0,g=h.length;m<g;m++){const _=h[m],y=e(_,i);f.push(y)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const h=i[f];e.data.attributes[f]=h.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],m=[];for(let g=0,_=h.length;g<_;g++){const y=h[g];m.push(y.toJSON(e.data))}m.length>0&&(s[f]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(t))}const a=e.morphAttributes;for(const h in a){const m=[],g=a[h];for(let _=0,y=g.length;_<y;_++)m.push(g[_].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fg=new mt,us=new ba,Xl=new Oi,hg=new V,jl=new V,ql=new V,Yl=new V,Rd=new V,Kl=new V,pg=new V,$l=new V;class un extends Xt{constructor(e=new $n,t=new wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){Kl.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const m=u[f],g=a[f];m!==0&&(Rd.fromBufferAttribute(g,e),c?Kl.addScaledVector(Rd,m):Kl.addScaledVector(Rd.sub(t),m))}t.add(Kl)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xl.copy(i.boundingSphere),Xl.applyMatrix4(a),us.copy(e.ray).recast(e.near),!(Xl.containsPoint(us.origin)===!1&&(us.intersectSphere(Xl,hg)===null||us.origin.distanceToSquared(hg)>(e.far-e.near)**2))&&(fg.copy(a).invert(),us.copy(e.ray).applyMatrix4(fg),!(i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,h=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,_=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const S=_[M],x=c[S.materialIndex],L=Math.max(S.start,y.start),I=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let A=L,q=I;A<q;A+=3){const k=u.getX(A),U=u.getX(A+1),X=u.getX(A+2);s=Zl(this,x,e,i,h,m,g,k,U,X),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(u.count,y.start+y.count);for(let S=M,x=E;S<x;S+=3){const L=u.getX(S),I=u.getX(S+1),A=u.getX(S+2);s=Zl(this,c,e,i,h,m,g,L,I,A),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const S=_[M],x=c[S.materialIndex],L=Math.max(S.start,y.start),I=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let A=L,q=I;A<q;A+=3){const k=A,U=A+1,X=A+2;s=Zl(this,x,e,i,h,m,g,k,U,X),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(f.count,y.start+y.count);for(let S=M,x=E;S<x;S+=3){const L=S,I=S+1,A=S+2;s=Zl(this,c,e,i,h,m,g,L,I,A),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function yy(o,e,t,i,s,a,c,u){let f;if(e.side===Vn?f=i.intersectTriangle(c,a,s,!0,u):f=i.intersectTriangle(s,a,c,e.side===cr,u),f===null)return null;$l.copy(u),$l.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo($l);return h<t.near||h>t.far?null:{distance:h,point:$l.clone(),object:o}}function Zl(o,e,t,i,s,a,c,u,f,h){o.getVertexPosition(u,jl),o.getVertexPosition(f,ql),o.getVertexPosition(h,Yl);const m=yy(o,e,t,i,jl,ql,Yl,pg);if(m){const g=new V;Ei.getBarycoord(pg,jl,ql,Yl,g),s&&(m.uv=Ei.getInterpolatedAttribute(s,u,f,h,g,new yt)),a&&(m.uv1=Ei.getInterpolatedAttribute(a,u,f,h,g,new yt)),c&&(m.normal=Ei.getInterpolatedAttribute(c,u,f,h,g,new V),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:u,b:f,c:h,normal:new V,materialIndex:0};Ei.getNormal(jl,ql,Yl,_.normal),m.face=_,m.barycoord=g}return m}class Ra extends $n{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const f=[],h=[],m=[],g=[];let _=0,y=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(f),this.setAttribute("position",new Dn(h,3)),this.setAttribute("normal",new Dn(m,3)),this.setAttribute("uv",new Dn(g,2));function M(E,S,x,L,I,A,q,k,U,X,C){const R=A/U,z=q/X,se=A/2,J=q/2,fe=k/2,he=U+1,ae=X+1;let ce=0,B=0;const le=new V;for(let ie=0;ie<ae;ie++){const N=ie*z-J;for(let ne=0;ne<he;ne++){const Oe=ne*R-se;le[E]=Oe*L,le[S]=N*I,le[x]=fe,h.push(le.x,le.y,le.z),le[E]=0,le[S]=0,le[x]=k>0?1:-1,m.push(le.x,le.y,le.z),g.push(ne/U),g.push(1-ie/X),ce+=1}}for(let ie=0;ie<X;ie++)for(let N=0;N<U;N++){const ne=_+N+he*ie,Oe=_+N+he*(ie+1),Z=_+(N+1)+he*(ie+1),ue=_+(N+1)+he*ie;f.push(ne,Oe,ue),f.push(Oe,Z,ue),B+=6}u.addGroup(y,B,C),y+=B,_+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xo(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Pn(o){const e={};for(let t=0;t<o.length;t++){const i=xo(o[t]);for(const s in i)e[s]=i[s]}return e}function Sy(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function G_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const My={clone:xo,merge:Pn};var Ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qr extends bi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ey,this.fragmentShader=Ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=Sy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let W_=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Or=new V,mg=new yt,gg=new yt;class Ln extends W_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Or.x,Or.y).multiplyScalar(-e/Or.z),Or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Or.x,Or.y).multiplyScalar(-e/Or.z)}getViewSize(e,t){return this.getViewBounds(e,mg,gg),t.subVectors(gg,mg)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;a+=c.offsetX*s/f,t-=c.offsetY*i/h,s*=c.width/f,i*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const no=-90,io=1;class wy extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ln(no,io,e,t);s.layers=this.layers,this.add(s);const a=new Ln(no,io,e,t);a.layers=this.layers,this.add(a);const c=new Ln(no,io,e,t);c.layers=this.layers,this.add(c);const u=new Ln(no,io,e,t);u.layers=this.layers,this.add(u);const f=new Ln(no,io,e,t);f.layers=this.layers,this.add(f);const h=new Ln(no,io,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,f]=t;for(const h of t)this.remove(h);if(e===or)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===_c)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,h,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,f),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,m),e.setRenderTarget(g,_,y),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class X_ extends nn{constructor(e,t,i,s,a,c,u,f,h,m){e=e!==void 0?e:[],t=t!==void 0?t:ho,super(e,t,i,s,a,c,u,f,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ay extends xs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new X_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ra(5,5,5),a=new qr({name:"CubemapFromEquirect",uniforms:xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vn,blending:Xr});a.uniforms.tEquirect.value=t;const c=new un(s,a),u=t.minFilter;return t.minFilter===sr&&(t.minFilter=Kn),new wy(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}const Cd=new V,by=new V,Ry=new gt;class Hr{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Cd.subVectors(i,t).cross(by.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ry.getNormalMatrix(e),s=this.coplanarPoint(Cd).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new Oi,Ql=new V;class Qf{constructor(e=new Hr,t=new Hr,i=new Hr,s=new Hr,a=new Hr,c=new Hr){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=or){const i=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],f=s[3],h=s[4],m=s[5],g=s[6],_=s[7],y=s[8],M=s[9],E=s[10],S=s[11],x=s[12],L=s[13],I=s[14],A=s[15];if(i[0].setComponents(f-a,_-h,S-y,A-x).normalize(),i[1].setComponents(f+a,_+h,S+y,A+x).normalize(),i[2].setComponents(f+c,_+m,S+M,A+L).normalize(),i[3].setComponents(f-c,_-m,S-M,A-L).normalize(),i[4].setComponents(f-u,_-g,S-E,A-I).normalize(),t===or)i[5].setComponents(f+u,_+g,S+E,A+I).normalize();else if(t===_c)i[5].setComponents(u,g,E,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ql.x=s.normal.x>0?e.max.x:e.min.x,Ql.y=s.normal.y>0?e.max.y:e.min.y,Ql.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function j_(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function Cy(o){const e=new WeakMap;function t(u,f){const h=u.array,m=u.usage,g=h.byteLength,_=o.createBuffer();o.bindBuffer(f,_),o.bufferData(f,h,m),u.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,f,h){const m=f.array,g=f.updateRanges;if(o.bindBuffer(h,u),g.length===0)o.bufferSubData(h,0,m);else{g.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<g.length;y++){const M=g[_],E=g[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,g[_]=E)}g.length=_+1;for(let y=0,M=g.length;y<M;y++){const E=g[y];o.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(o.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,f),h.version=u.version}}return{get:s,remove:a,update:c}}class yo extends $n{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),f=Math.floor(s),h=u+1,m=f+1,g=e/u,_=t/f,y=[],M=[],E=[],S=[];for(let x=0;x<m;x++){const L=x*_-c;for(let I=0;I<h;I++){const A=I*g-a;M.push(A,-L,0),E.push(0,0,1),S.push(I/u),S.push(1-x/f)}}for(let x=0;x<f;x++)for(let L=0;L<u;L++){const I=L+h*x,A=L+h*(x+1),q=L+1+h*(x+1),k=L+1+h*x;y.push(I,A,k),y.push(A,q,k)}this.setIndex(y),this.setAttribute("position",new Dn(M,3)),this.setAttribute("normal",new Dn(E,3)),this.setAttribute("uv",new Dn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ly=`#ifdef USE_ALPHAHASH
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
#endif`,Iy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ny=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fy=`#ifdef USE_AOMAP
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
#endif`,Oy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ky=`#ifdef USE_BATCHING
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
#endif`,By=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gy=`#ifdef USE_IRIDESCENCE
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
#endif`,Wy=`#ifdef USE_BUMPMAP
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
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jy=`#define PI 3.141592653589793
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
} // validated`,eS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tS=`vec3 transformedNormal = objectNormal;
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
#endif`,nS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oS="gl_FragColor = linearToOutputTexel( gl_FragColor );",aS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lS=`#ifdef USE_ENVMAP
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
#endif`,cS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uS=`#ifdef USE_ENVMAP
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
#endif`,dS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
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
#endif`,hS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_S=`#ifdef USE_GRADIENTMAP
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
}`,vS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SS=`uniform bool receiveShadow;
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
#endif`,MS=`#ifdef USE_ENVMAP
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
#endif`,ES=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bS=`PhysicalMaterial material;
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
#endif`,RS=`struct PhysicalMaterial {
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
}`,CS=`
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
#endif`,PS=`#if defined( RE_IndirectDiffuse )
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
#endif`,LS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,US=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BS=`#if defined( USE_POINTS_UV )
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
#endif`,zS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XS=`#ifdef USE_MORPHTARGETS
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
#endif`,jS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,YS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QS=`#ifdef USE_NORMALMAP
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
#endif`,JS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pM=`float getShadowMask() {
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
}`,mM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gM=`#ifdef USE_SKINNING
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
#endif`,_M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vM=`#ifdef USE_SKINNING
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
#endif`,xM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EM=`#ifdef USE_TRANSMISSION
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
#endif`,TM=`#ifdef USE_TRANSMISSION
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
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PM=`uniform sampler2D t2D;
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
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`#include <common>
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
}`,FM=`#if DEPTH_PACKING == 3200
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
}`,OM=`#define DISTANCE
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
}`,kM=`#define DISTANCE
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
}`,BM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`uniform float scale;
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
}`,VM=`uniform vec3 diffuse;
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
}`,GM=`#include <common>
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
}`,WM=`uniform vec3 diffuse;
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
}`,XM=`#define LAMBERT
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
}`,jM=`#define LAMBERT
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
}`,qM=`#define MATCAP
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
}`,YM=`#define MATCAP
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
}`,KM=`#define NORMAL
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
}`,$M=`#define NORMAL
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
}`,ZM=`#define PHONG
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
}`,QM=`#define PHONG
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
}`,JM=`#define STANDARD
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
}`,eE=`#define STANDARD
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
}`,tE=`#define TOON
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
}`,nE=`#define TOON
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
}`,iE=`uniform float size;
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
}`,rE=`uniform vec3 diffuse;
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
}`,sE=`#include <common>
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
}`,oE=`uniform vec3 color;
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
}`,aE=`uniform float rotation;
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
}`,lE=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:Py,alphahash_pars_fragment:Ly,alphamap_fragment:Iy,alphamap_pars_fragment:Dy,alphatest_fragment:Ny,alphatest_pars_fragment:Uy,aomap_fragment:Fy,aomap_pars_fragment:Oy,batching_pars_vertex:ky,batching_vertex:By,begin_vertex:zy,beginnormal_vertex:Hy,bsdfs:Vy,iridescence_fragment:Gy,bumpmap_pars_fragment:Wy,clipping_planes_fragment:Xy,clipping_planes_pars_fragment:jy,clipping_planes_pars_vertex:qy,clipping_planes_vertex:Yy,color_fragment:Ky,color_pars_fragment:$y,color_pars_vertex:Zy,color_vertex:Qy,common:Jy,cube_uv_reflection_fragment:eS,defaultnormal_vertex:tS,displacementmap_pars_vertex:nS,displacementmap_vertex:iS,emissivemap_fragment:rS,emissivemap_pars_fragment:sS,colorspace_fragment:oS,colorspace_pars_fragment:aS,envmap_fragment:lS,envmap_common_pars_fragment:cS,envmap_pars_fragment:uS,envmap_pars_vertex:dS,envmap_physical_pars_fragment:MS,envmap_vertex:fS,fog_vertex:hS,fog_pars_vertex:pS,fog_fragment:mS,fog_pars_fragment:gS,gradientmap_pars_fragment:_S,lightmap_pars_fragment:vS,lights_lambert_fragment:xS,lights_lambert_pars_fragment:yS,lights_pars_begin:SS,lights_toon_fragment:ES,lights_toon_pars_fragment:TS,lights_phong_fragment:wS,lights_phong_pars_fragment:AS,lights_physical_fragment:bS,lights_physical_pars_fragment:RS,lights_fragment_begin:CS,lights_fragment_maps:PS,lights_fragment_end:LS,logdepthbuf_fragment:IS,logdepthbuf_pars_fragment:DS,logdepthbuf_pars_vertex:NS,logdepthbuf_vertex:US,map_fragment:FS,map_pars_fragment:OS,map_particle_fragment:kS,map_particle_pars_fragment:BS,metalnessmap_fragment:zS,metalnessmap_pars_fragment:HS,morphinstance_vertex:VS,morphcolor_vertex:GS,morphnormal_vertex:WS,morphtarget_pars_vertex:XS,morphtarget_vertex:jS,normal_fragment_begin:qS,normal_fragment_maps:YS,normal_pars_fragment:KS,normal_pars_vertex:$S,normal_vertex:ZS,normalmap_pars_fragment:QS,clearcoat_normal_fragment_begin:JS,clearcoat_normal_fragment_maps:eM,clearcoat_pars_fragment:tM,iridescence_pars_fragment:nM,opaque_fragment:iM,packing:rM,premultiplied_alpha_fragment:sM,project_vertex:oM,dithering_fragment:aM,dithering_pars_fragment:lM,roughnessmap_fragment:cM,roughnessmap_pars_fragment:uM,shadowmap_pars_fragment:dM,shadowmap_pars_vertex:fM,shadowmap_vertex:hM,shadowmask_pars_fragment:pM,skinbase_vertex:mM,skinning_pars_vertex:gM,skinning_vertex:_M,skinnormal_vertex:vM,specularmap_fragment:xM,specularmap_pars_fragment:yM,tonemapping_fragment:SM,tonemapping_pars_fragment:MM,transmission_fragment:EM,transmission_pars_fragment:TM,uv_pars_fragment:wM,uv_pars_vertex:AM,uv_vertex:bM,worldpos_vertex:RM,background_vert:CM,background_frag:PM,backgroundCube_vert:LM,backgroundCube_frag:IM,cube_vert:DM,cube_frag:NM,depth_vert:UM,depth_frag:FM,distanceRGBA_vert:OM,distanceRGBA_frag:kM,equirect_vert:BM,equirect_frag:zM,linedashed_vert:HM,linedashed_frag:VM,meshbasic_vert:GM,meshbasic_frag:WM,meshlambert_vert:XM,meshlambert_frag:jM,meshmatcap_vert:qM,meshmatcap_frag:YM,meshnormal_vert:KM,meshnormal_frag:$M,meshphong_vert:ZM,meshphong_frag:QM,meshphysical_vert:JM,meshphysical_frag:eE,meshtoon_vert:tE,meshtoon_frag:nE,points_vert:iE,points_frag:rE,shadow_vert:sE,shadow_frag:oE,sprite_vert:aE,sprite_frag:lE},Ie={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Ui={basic:{uniforms:Pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ct(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Pn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Pn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new ct(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Pn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Pn([Ie.points,Ie.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Pn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Pn([Ie.common,Ie.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Pn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Pn([Ie.sprite,Ie.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:Pn([Ie.common,Ie.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:Pn([Ie.lights,Ie.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ui.physical={uniforms:Pn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Jl={r:0,b:0,g:0},fs=new Ri,cE=new mt;function uE(o,e,t,i,s,a,c){const u=new ct(0);let f=a===!0?0:1,h,m,g=null,_=0,y=null;function M(L){let I=L.isScene===!0?L.background:null;return I&&I.isTexture&&(I=(L.backgroundBlurriness>0?t:e).get(I)),I}function E(L){let I=!1;const A=M(L);A===null?x(u,f):A&&A.isColor&&(x(A,1),I=!0);const q=o.xr.getEnvironmentBlendMode();q==="additive"?i.buffers.color.setClear(0,0,0,1,c):q==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,I){const A=M(I);A&&(A.isCubeTexture||A.mapping===Mc)?(m===void 0&&(m=new un(new Ra(1,1,1),new qr({name:"BackgroundCubeMaterial",uniforms:xo(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(q,k,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),fs.copy(I.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.material.uniforms.envMap.value=A,m.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(cE.makeRotationFromEuler(fs)),m.material.toneMapped=Et.getTransfer(A.colorSpace)!==Ft,(g!==A||_!==A.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,g=A,_=A.version,y=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new un(new yo(2,2),new qr({name:"BackgroundMaterial",uniforms:xo(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.toneMapped=Et.getTransfer(A.colorSpace)!==Ft,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||_!==A.version||y!==o.toneMapping)&&(h.material.needsUpdate=!0,g=A,_=A.version,y=o.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function x(L,I){L.getRGB(Jl,G_(o)),i.buffers.color.setClear(Jl.r,Jl.g,Jl.b,I,c)}return{getClearColor:function(){return u},setClearColor:function(L,I=1){u.set(L),f=I,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,x(u,f)},render:E,addToRenderList:S}}function dE(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=_(null);let a=s,c=!1;function u(R,z,se,J,fe){let he=!1;const ae=g(J,se,z);a!==ae&&(a=ae,h(a.object)),he=y(R,J,se,fe),he&&M(R,J,se,fe),fe!==null&&e.update(fe,o.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,A(R,z,se,J),fe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function f(){return o.createVertexArray()}function h(R){return o.bindVertexArray(R)}function m(R){return o.deleteVertexArray(R)}function g(R,z,se){const J=se.wireframe===!0;let fe=i[R.id];fe===void 0&&(fe={},i[R.id]=fe);let he=fe[z.id];he===void 0&&(he={},fe[z.id]=he);let ae=he[J];return ae===void 0&&(ae=_(f()),he[J]=ae),ae}function _(R){const z=[],se=[],J=[];for(let fe=0;fe<t;fe++)z[fe]=0,se[fe]=0,J[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:se,attributeDivisors:J,object:R,attributes:{},index:null}}function y(R,z,se,J){const fe=a.attributes,he=z.attributes;let ae=0;const ce=se.getAttributes();for(const B in ce)if(ce[B].location>=0){const ie=fe[B];let N=he[B];if(N===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),ie===void 0||ie.attribute!==N||N&&ie.data!==N.data)return!0;ae++}return a.attributesNum!==ae||a.index!==J}function M(R,z,se,J){const fe={},he=z.attributes;let ae=0;const ce=se.getAttributes();for(const B in ce)if(ce[B].location>=0){let ie=he[B];ie===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const N={};N.attribute=ie,ie&&ie.data&&(N.data=ie.data),fe[B]=N,ae++}a.attributes=fe,a.attributesNum=ae,a.index=J}function E(){const R=a.newAttributes;for(let z=0,se=R.length;z<se;z++)R[z]=0}function S(R){x(R,0)}function x(R,z){const se=a.newAttributes,J=a.enabledAttributes,fe=a.attributeDivisors;se[R]=1,J[R]===0&&(o.enableVertexAttribArray(R),J[R]=1),fe[R]!==z&&(o.vertexAttribDivisor(R,z),fe[R]=z)}function L(){const R=a.newAttributes,z=a.enabledAttributes;for(let se=0,J=z.length;se<J;se++)z[se]!==R[se]&&(o.disableVertexAttribArray(se),z[se]=0)}function I(R,z,se,J,fe,he,ae){ae===!0?o.vertexAttribIPointer(R,z,se,fe,he):o.vertexAttribPointer(R,z,se,J,fe,he)}function A(R,z,se,J){E();const fe=J.attributes,he=se.getAttributes(),ae=z.defaultAttributeValues;for(const ce in he){const B=he[ce];if(B.location>=0){let le=fe[ce];if(le===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const ie=le.normalized,N=le.itemSize,ne=e.get(le);if(ne===void 0)continue;const Oe=ne.buffer,Z=ne.type,ue=ne.bytesPerElement,Te=Z===o.INT||Z===o.UNSIGNED_INT||le.gpuType===Gf;if(le.isInterleavedBufferAttribute){const Se=le.data,Ce=Se.stride,ze=le.offset;if(Se.isInstancedInterleavedBuffer){for(let nt=0;nt<B.locationSize;nt++)x(B.location+nt,Se.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let nt=0;nt<B.locationSize;nt++)S(B.location+nt);o.bindBuffer(o.ARRAY_BUFFER,Oe);for(let nt=0;nt<B.locationSize;nt++)I(B.location+nt,N/B.locationSize,Z,ie,Ce*ue,(ze+N/B.locationSize*nt)*ue,Te)}else{if(le.isInstancedBufferAttribute){for(let Se=0;Se<B.locationSize;Se++)x(B.location+Se,le.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Se=0;Se<B.locationSize;Se++)S(B.location+Se);o.bindBuffer(o.ARRAY_BUFFER,Oe);for(let Se=0;Se<B.locationSize;Se++)I(B.location+Se,N/B.locationSize,Z,ie,N*ue,N/B.locationSize*Se*ue,Te)}}else if(ae!==void 0){const ie=ae[ce];if(ie!==void 0)switch(ie.length){case 2:o.vertexAttrib2fv(B.location,ie);break;case 3:o.vertexAttrib3fv(B.location,ie);break;case 4:o.vertexAttrib4fv(B.location,ie);break;default:o.vertexAttrib1fv(B.location,ie)}}}}L()}function q(){X();for(const R in i){const z=i[R];for(const se in z){const J=z[se];for(const fe in J)m(J[fe].object),delete J[fe];delete z[se]}delete i[R]}}function k(R){if(i[R.id]===void 0)return;const z=i[R.id];for(const se in z){const J=z[se];for(const fe in J)m(J[fe].object),delete J[fe];delete z[se]}delete i[R.id]}function U(R){for(const z in i){const se=i[z];if(se[R.id]===void 0)continue;const J=se[R.id];for(const fe in J)m(J[fe].object),delete J[fe];delete se[R.id]}}function X(){C(),c=!0,a!==s&&(a=s,h(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:X,resetDefaultState:C,dispose:q,releaseStatesOfGeometry:k,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:S,disableUnusedAttributes:L}}function fE(o,e,t){let i;function s(h){i=h}function a(h,m){o.drawArrays(i,h,m),t.update(m,i,1)}function c(h,m,g){g!==0&&(o.drawArraysInstanced(i,h,m,g),t.update(m,i,g))}function u(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,m,0,g);let y=0;for(let M=0;M<g;M++)y+=m[M];t.update(y,i,1)}function f(h,m,g,_){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)c(h[M],m[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(i,h,0,m,0,_,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E]*_[E];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function hE(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(U){return!(U!==ci&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(U){const X=U===Aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==ur&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Ti&&!X)}function f(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=f(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),q=M>0,k=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:L,maxVaryings:I,maxFragmentUniforms:A,vertexTextures:q,maxSamples:k}}function pE(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new Hr,u=new gt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||i!==0||s;return s=_,i=g.length,y},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,y){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!s||M===null||M.length===0||a&&!S)a?m(null):h();else{const L=a?0:i,I=L*4;let A=x.clippingState||null;f.value=A,A=m(M,_,I,y);for(let q=0;q!==I;++q)A[q]=t[q];x.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,_,y,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=f.value,M!==!0||S===null){const x=y+E*4,L=_.matrixWorldInverse;u.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let I=0,A=y;I!==E;++I,A+=4)c.copy(g[I]).applyMatrix4(L,u),c.normal.toArray(S,A),S[A+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function mE(o){let e=new WeakMap;function t(c,u){return u===rf?c.mapping=ho:u===sf&&(c.mapping=po),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===rf||u===sf)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new Ay(f.height);return h.fromEquirectangularTexture(o,c),e.set(c,h),c.addEventListener("dispose",s),t(h.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Jf extends W_{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=m*this.view.offsetY,f=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const oo=4,_g=[.125,.215,.35,.446,.526,.582],_s=20,Pd=new Jf,vg=new ct;let Ld=null,Id=0,Dd=0,Nd=!1;const ms=(1+Math.sqrt(5))/2,ro=1/ms,xg=[new V(-ms,ro,0),new V(ms,ro,0),new V(-ro,0,ms),new V(ro,0,ms),new V(0,ms,-ro),new V(0,ms,ro),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class yg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ld=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ld,Id,Dd),this._renderer.xr.enabled=Nd,e.scissorTest=!1,ec(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ho||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ld=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Aa,format:ci,colorSpace:Tn,depthBuffer:!1},s=Sg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gE(a)),this._blurMaterial=_E(a,e,t)}return s}_compileMaterial(e){const t=new un(this._lodPlanes[0],e);this._renderer.compile(t,Pd)}_sceneToCubeUV(e,t,i,s){const u=new Ln(90,1,t,i),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(vg),m.toneMapping=jr,m.autoClear=!1;const y=new wi({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),M=new un(new Ra,y);let E=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,E=!0):(y.color.copy(vg),E=!0);for(let x=0;x<6;x++){const L=x%3;L===0?(u.up.set(0,f[x],0),u.lookAt(h[x],0,0)):L===1?(u.up.set(0,0,f[x]),u.lookAt(0,h[x],0)):(u.up.set(0,f[x],0),u.lookAt(0,0,h[x]));const I=this._cubeSize;ec(s,L*I,x>2?I:0,I,I),m.setRenderTarget(s),E&&m.render(M,u),m.render(e,u)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ho||e.mapping===po;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mg());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new un(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;ec(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,Pd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=xg[(s-a-1)%xg.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new un(this._lodPlanes[s],h),_=h.uniforms,y=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*_s-1),E=a/M,S=isFinite(a)?1+Math.floor(m*E):_s;S>_s&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${_s}`);const x=[];let L=0;for(let U=0;U<_s;++U){const X=U/E,C=Math.exp(-X*X/2);x.push(C),U===0?L+=C:U<S&&(L+=2*C)}for(let U=0;U<x.length;U++)x[U]=x[U]/L;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:I}=this;_.dTheta.value=M,_.mipInt.value=I-i;const A=this._sizeLods[s],q=3*A*(s>I-oo?s-I+oo:0),k=4*(this._cubeSize-A);ec(t,q,k,3*A,2*A),f.setRenderTarget(t),f.render(g,Pd)}}function gE(o){const e=[],t=[],i=[];let s=o;const a=o-oo+1+_g.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);t.push(u);let f=1/u;c>o-oo?f=_g[c-o+oo-1]:c===0&&(f=0),i.push(f);const h=1/(u-2),m=-h,g=1+h,_=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,M=6,E=3,S=2,x=1,L=new Float32Array(E*M*y),I=new Float32Array(S*M*y),A=new Float32Array(x*M*y);for(let k=0;k<y;k++){const U=k%3*2/3-1,X=k>2?0:-1,C=[U,X,0,U+2/3,X,0,U+2/3,X+1,0,U,X,0,U+2/3,X+1,0,U,X+1,0];L.set(C,E*M*k),I.set(_,S*M*k);const R=[k,k,k,k,k,k];A.set(R,x*M*k)}const q=new $n;q.setAttribute("position",new hn(L,E)),q.setAttribute("uv",new hn(I,S)),q.setAttribute("faceIndex",new hn(A,x)),e.push(q),s>oo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sg(o,e,t){const i=new xs(o,e,t);return i.texture.mapping=Mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ec(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function _E(o,e,t){const i=new Float32Array(_s),s=new V(0,1,0);return new qr({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eh(),fragmentShader:`

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
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function Mg(){return new qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function Eg(){return new qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}function vE(o){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,h=f===rf||f===sf,m=f===ho||f===po;if(h||m){let g=e.get(u);const _=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return t===null&&(t=new yg(o)),g=h?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const y=u.image;return h&&y&&y.height>0||m&&y&&s(y)?(t===null&&(t=new yg(o)),g=h?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function s(u){let f=0;const h=6;for(let m=0;m<h;m++)u[m]!==void 0&&f++;return f===h}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function xE(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&_a("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function yE(o,e,t,i){const s={},a=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);for(const M in _.morphAttributes){const E=_.morphAttributes[M];for(let S=0,x=E.length;S<x;S++)e.remove(E[S])}_.removeEventListener("dispose",c),delete s[_.id];const y=a.get(_);y&&(e.remove(y),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(g,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,t.memory.geometries++),_}function f(g){const _=g.attributes;for(const M in _)e.update(_[M],o.ARRAY_BUFFER);const y=g.morphAttributes;for(const M in y){const E=y[M];for(let S=0,x=E.length;S<x;S++)e.update(E[S],o.ARRAY_BUFFER)}}function h(g){const _=[],y=g.index,M=g.attributes.position;let E=0;if(y!==null){const L=y.array;E=y.version;for(let I=0,A=L.length;I<A;I+=3){const q=L[I+0],k=L[I+1],U=L[I+2];_.push(q,k,k,U,U,q)}}else if(M!==void 0){const L=M.array;E=M.version;for(let I=0,A=L.length/3-1;I<A;I+=3){const q=I+0,k=I+1,U=I+2;_.push(q,k,k,U,U,q)}}else return;const S=new(O_(_)?V_:H_)(_,1);S.version=E;const x=a.get(g);x&&e.remove(x),a.set(g,S)}function m(g){const _=a.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&h(g)}else h(g);return a.get(g)}return{get:u,update:f,getWireframeAttribute:m}}function SE(o,e,t){let i;function s(_){i=_}let a,c;function u(_){a=_.type,c=_.bytesPerElement}function f(_,y){o.drawElements(i,y,a,_*c),t.update(y,i,1)}function h(_,y,M){M!==0&&(o.drawElementsInstanced(i,y,a,_*c,M),t.update(y,i,M))}function m(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,_,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];t.update(S,i,1)}function g(_,y,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)h(_[x]/c,y[x],E[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,a,_,0,E,0,M);let x=0;for(let L=0;L<M;L++)x+=y[L]*E[L];t.update(x,i,1)}}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function ME(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function EE(o,e,t){const i=new WeakMap,s=new Lt;function a(c,u,f){const h=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=i.get(u);if(_===void 0||_.count!==g){let R=function(){X.dispose(),i.delete(u),u.removeEventListener("dispose",R)};var y=R;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let A=0;M===!0&&(A=1),E===!0&&(A=2),S===!0&&(A=3);let q=u.attributes.position.count*A,k=1;q>e.maxTextureSize&&(k=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const U=new Float32Array(q*k*4*g),X=new B_(U,q,k,g);X.type=Ti,X.needsUpdate=!0;const C=A*4;for(let z=0;z<g;z++){const se=x[z],J=L[z],fe=I[z],he=q*k*4*z;for(let ae=0;ae<se.count;ae++){const ce=ae*C;M===!0&&(s.fromBufferAttribute(se,ae),U[he+ce+0]=s.x,U[he+ce+1]=s.y,U[he+ce+2]=s.z,U[he+ce+3]=0),E===!0&&(s.fromBufferAttribute(J,ae),U[he+ce+4]=s.x,U[he+ce+5]=s.y,U[he+ce+6]=s.z,U[he+ce+7]=0),S===!0&&(s.fromBufferAttribute(fe,ae),U[he+ce+8]=s.x,U[he+ce+9]=s.y,U[he+ce+10]=s.z,U[he+ce+11]=fe.itemSize===4?s.w:1)}}_={count:g,texture:X,size:new yt(q,k)},i.set(u,_),u.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const E=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(o,"morphTargetBaseInfluence",E),f.getUniforms().setValue(o,"morphTargetInfluences",h)}f.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:a}}function TE(o,e,t,i){let s=new WeakMap;function a(f){const h=i.render.frame,m=f.geometry,g=e.get(f,m);if(s.get(g)!==h&&(e.update(g),s.set(g,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==h&&(t.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,o.ARRAY_BUFFER),s.set(f,h))),f.isSkinnedMesh){const _=f.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return g}function c(){s=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:c}}class q_ extends nn{constructor(e,t,i,s,a,c,u,f,h,m=lo){if(m!==lo&&m!==_o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===lo&&(i=vs),i===void 0&&m===_o&&(i=go),super(null,s,a,c,u,f,m,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:In,this.minFilter=f!==void 0?f:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Y_=new nn,Tg=new q_(1,1),K_=new B_,$_=new uy,Z_=new X_,wg=[],Ag=[],bg=new Float32Array(16),Rg=new Float32Array(9),Cg=new Float32Array(4);function wo(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=wg[s];if(a===void 0&&(a=new Float32Array(s),wg[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function rn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function sn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Tc(o,e){let t=Ag[e];t===void 0&&(t=new Int32Array(e),Ag[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function wE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function AE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;o.uniform2fv(this.addr,e),sn(t,e)}}function bE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;o.uniform3fv(this.addr,e),sn(t,e)}}function RE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;o.uniform4fv(this.addr,e),sn(t,e)}}function CE(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Cg.set(i),o.uniformMatrix2fv(this.addr,!1,Cg),sn(t,i)}}function PE(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Rg.set(i),o.uniformMatrix3fv(this.addr,!1,Rg),sn(t,i)}}function LE(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;bg.set(i),o.uniformMatrix4fv(this.addr,!1,bg),sn(t,i)}}function IE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function DE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;o.uniform2iv(this.addr,e),sn(t,e)}}function NE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;o.uniform3iv(this.addr,e),sn(t,e)}}function UE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;o.uniform4iv(this.addr,e),sn(t,e)}}function FE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function OE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;o.uniform2uiv(this.addr,e),sn(t,e)}}function kE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;o.uniform3uiv(this.addr,e),sn(t,e)}}function BE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;o.uniform4uiv(this.addr,e),sn(t,e)}}function zE(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(Tg.compareFunction=F_,a=Tg):a=Y_,t.setTexture2D(e||a,s)}function HE(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||$_,s)}function VE(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Z_,s)}function GE(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||K_,s)}function WE(o){switch(o){case 5126:return wE;case 35664:return AE;case 35665:return bE;case 35666:return RE;case 35674:return CE;case 35675:return PE;case 35676:return LE;case 5124:case 35670:return IE;case 35667:case 35671:return DE;case 35668:case 35672:return NE;case 35669:case 35673:return UE;case 5125:return FE;case 36294:return OE;case 36295:return kE;case 36296:return BE;case 35678:case 36198:case 36298:case 36306:case 35682:return zE;case 35679:case 36299:case 36307:return HE;case 35680:case 36300:case 36308:case 36293:return VE;case 36289:case 36303:case 36311:case 36292:return GE}}function XE(o,e){o.uniform1fv(this.addr,e)}function jE(o,e){const t=wo(e,this.size,2);o.uniform2fv(this.addr,t)}function qE(o,e){const t=wo(e,this.size,3);o.uniform3fv(this.addr,t)}function YE(o,e){const t=wo(e,this.size,4);o.uniform4fv(this.addr,t)}function KE(o,e){const t=wo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function $E(o,e){const t=wo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function ZE(o,e){const t=wo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function QE(o,e){o.uniform1iv(this.addr,e)}function JE(o,e){o.uniform2iv(this.addr,e)}function eT(o,e){o.uniform3iv(this.addr,e)}function tT(o,e){o.uniform4iv(this.addr,e)}function nT(o,e){o.uniform1uiv(this.addr,e)}function iT(o,e){o.uniform2uiv(this.addr,e)}function rT(o,e){o.uniform3uiv(this.addr,e)}function sT(o,e){o.uniform4uiv(this.addr,e)}function oT(o,e,t){const i=this.cache,s=e.length,a=Tc(t,s);rn(i,a)||(o.uniform1iv(this.addr,a),sn(i,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||Y_,a[c])}function aT(o,e,t){const i=this.cache,s=e.length,a=Tc(t,s);rn(i,a)||(o.uniform1iv(this.addr,a),sn(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||$_,a[c])}function lT(o,e,t){const i=this.cache,s=e.length,a=Tc(t,s);rn(i,a)||(o.uniform1iv(this.addr,a),sn(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||Z_,a[c])}function cT(o,e,t){const i=this.cache,s=e.length,a=Tc(t,s);rn(i,a)||(o.uniform1iv(this.addr,a),sn(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||K_,a[c])}function uT(o){switch(o){case 5126:return XE;case 35664:return jE;case 35665:return qE;case 35666:return YE;case 35674:return KE;case 35675:return $E;case 35676:return ZE;case 5124:case 35670:return QE;case 35667:case 35671:return JE;case 35668:case 35672:return eT;case 35669:case 35673:return tT;case 5125:return nT;case 36294:return iT;case 36295:return rT;case 36296:return sT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return aT;case 35680:case 36300:case 36308:case 36293:return lT;case 36289:case 36303:case 36311:case 36292:return cT}}class dT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=WE(t.type)}}class fT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uT(t.type)}}class hT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const Ud=/(\w+)(\])?(\[|\.)?/g;function Pg(o,e){o.seq.push(e),o.map[e.id]=e}function pT(o,e,t){const i=o.name,s=i.length;for(Ud.lastIndex=0;;){const a=Ud.exec(i),c=Ud.lastIndex;let u=a[1];const f=a[2]==="]",h=a[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===s){Pg(t,h===void 0?new dT(u,o,e):new fT(u,o,e));break}else{let g=t.map[u];g===void 0&&(g=new hT(u),Pg(t,g)),t=g}}}class mc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);pT(a,c,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function Lg(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const mT=37297;let gT=0;function _T(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Ig=new gt;function vT(o){Et._getMatrix(Ig,Et.workingColorSpace,o);const e=`mat3( ${Ig.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(o)){case Ec:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Dg(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+_T(o.getShaderSource(e),c)}else return s}function xT(o,e){const t=vT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function yT(o,e){let t;switch(e){case yx:t="Linear";break;case Sx:t="Reinhard";break;case Mx:t="Cineon";break;case M_:t="ACESFilmic";break;case Tx:t="AgX";break;case wx:t="Neutral";break;case Ex:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tc=new V;function ST(){Et.getLuminanceCoefficients(tc);const o=tc.x.toFixed(4),e=tc.y.toFixed(4),t=tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(va).join(`
`)}function ET(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function TT(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function va(o){return o!==""}function Ng(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ug(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nf(o){return o.replace(wT,bT)}const AT=new Map;function bT(o,e){let t=_t[e];if(t===void 0){const i=AT.get(e);if(i!==void 0)t=_t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nf(t)}const RT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fg(o){return o.replace(RT,CT)}function CT(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Og(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function PT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===x_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===y_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ir&&(e="SHADOWMAP_TYPE_VSM"),e}function LT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ho:case po:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function DT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case S_:e="ENVMAP_BLENDING_MULTIPLY";break;case vx:e="ENVMAP_BLENDING_MIX";break;case xx:e="ENVMAP_BLENDING_ADD";break}return e}function NT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function UT(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=PT(t),h=LT(t),m=IT(t),g=DT(t),_=NT(t),y=MT(t),M=ET(a),E=s.createProgram();let S,x,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(va).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(va).join(`
`),x.length>0&&(x+=`
`)):(S=[Og(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),x=[Og(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jr?"#define TONE_MAPPING":"",t.toneMapping!==jr?_t.tonemapping_pars_fragment:"",t.toneMapping!==jr?yT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,xT("linearToOutputTexel",t.outputColorSpace),ST(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(va).join(`
`)),c=Nf(c),c=Ng(c,t),c=Ug(c,t),u=Nf(u),u=Ng(u,t),u=Ug(u,t),c=Fg(c),u=Fg(u),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Km?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=L+S+c,A=L+x+u,q=Lg(s,s.VERTEX_SHADER,I),k=Lg(s,s.FRAGMENT_SHADER,A);s.attachShader(E,q),s.attachShader(E,k),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function U(z){if(o.debug.checkShaderErrors){const se=s.getProgramInfoLog(E).trim(),J=s.getShaderInfoLog(q).trim(),fe=s.getShaderInfoLog(k).trim();let he=!0,ae=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,q,k);else{const ce=Dg(s,q,"vertex"),B=Dg(s,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+se+`
`+ce+`
`+B)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(J===""||fe==="")&&(ae=!1);ae&&(z.diagnostics={runnable:he,programLog:se,vertexShader:{log:J,prefix:S},fragmentShader:{log:fe,prefix:x}})}s.deleteShader(q),s.deleteShader(k),X=new mc(s,E),C=TT(s,E)}let X;this.getUniforms=function(){return X===void 0&&U(this),X};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(E,mT)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=q,this.fragmentShader=k,this}let FT=0;class OT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kT(e),t.set(e,i)),i}}class kT{constructor(e){this.id=FT++,this.code=e,this.usedTimes=0}}function BT(o,e,t,i,s,a,c){const u=new Zf,f=new OT,h=new Set,m=[],g=s.logarithmicDepthBuffer,_=s.vertexTextures;let y=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return h.add(C),C===0?"uv":`uv${C}`}function S(C,R,z,se,J){const fe=se.fog,he=J.geometry,ae=C.isMeshStandardMaterial?se.environment:null,ce=(C.isMeshStandardMaterial?t:e).get(C.envMap||ae),B=ce&&ce.mapping===Mc?ce.image.height:null,le=M[C.type];C.precision!==null&&(y=s.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const ie=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,N=ie!==void 0?ie.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let Oe,Z,ue,Te;if(le){const wt=Ui[le];Oe=wt.vertexShader,Z=wt.fragmentShader}else Oe=C.vertexShader,Z=C.fragmentShader,f.update(C),ue=f.getVertexShaderID(C),Te=f.getFragmentShaderID(C);const Se=o.getRenderTarget(),Ce=o.state.buffers.depth.getReversed(),ze=J.isInstancedMesh===!0,nt=J.isBatchedMesh===!0,Ct=!!C.map,me=!!C.matcap,xe=!!ce,F=!!C.aoMap,Je=!!C.lightMap,Xe=!!C.bumpMap,Le=!!C.normalMap,De=!!C.displacementMap,ut=!!C.emissiveMap,ke=!!C.metalnessMap,P=!!C.roughnessMap,w=C.anisotropy>0,K=C.clearcoat>0,de=C.dispersion>0,ge=C.iridescence>0,re=C.sheen>0,Ve=C.transmission>0,Re=w&&!!C.anisotropyMap,Fe=K&&!!C.clearcoatMap,ht=K&&!!C.clearcoatNormalMap,Me=K&&!!C.clearcoatRoughnessMap,He=ge&&!!C.iridescenceMap,tt=ge&&!!C.iridescenceThicknessMap,Ke=re&&!!C.sheenColorMap,Ge=re&&!!C.sheenRoughnessMap,at=!!C.specularMap,dt=!!C.specularColorMap,It=!!C.specularIntensityMap,G=Ve&&!!C.transmissionMap,Pe=Ve&&!!C.thicknessMap,oe=!!C.gradientMap,pe=!!C.alphaMap,Ue=C.alphaTest>0,Ne=!!C.alphaHash,ft=!!C.extensions;let Bt=jr;C.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Bt=o.toneMapping);const Qt={shaderID:le,shaderType:C.type,shaderName:C.name,vertexShader:Oe,fragmentShader:Z,defines:C.defines,customVertexShaderID:ue,customFragmentShaderID:Te,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:nt,batchingColor:nt&&J._colorsTexture!==null,instancing:ze,instancingColor:ze&&J.instanceColor!==null,instancingMorph:ze&&J.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Se===null?o.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Tn,alphaToCoverage:!!C.alphaToCoverage,map:Ct,matcap:me,envMap:xe,envMapMode:xe&&ce.mapping,envMapCubeUVHeight:B,aoMap:F,lightMap:Je,bumpMap:Xe,normalMap:Le,displacementMap:_&&De,emissiveMap:ut,normalMapObjectSpace:Le&&C.normalMapType===Lx,normalMapTangentSpace:Le&&C.normalMapType===U_,metalnessMap:ke,roughnessMap:P,anisotropy:w,anisotropyMap:Re,clearcoat:K,clearcoatMap:Fe,clearcoatNormalMap:ht,clearcoatRoughnessMap:Me,dispersion:de,iridescence:ge,iridescenceMap:He,iridescenceThicknessMap:tt,sheen:re,sheenColorMap:Ke,sheenRoughnessMap:Ge,specularMap:at,specularColorMap:dt,specularIntensityMap:It,transmission:Ve,transmissionMap:G,thicknessMap:Pe,gradientMap:oe,opaque:C.transparent===!1&&C.blending===ao&&C.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ue,alphaHash:Ne,combine:C.combine,mapUv:Ct&&E(C.map.channel),aoMapUv:F&&E(C.aoMap.channel),lightMapUv:Je&&E(C.lightMap.channel),bumpMapUv:Xe&&E(C.bumpMap.channel),normalMapUv:Le&&E(C.normalMap.channel),displacementMapUv:De&&E(C.displacementMap.channel),emissiveMapUv:ut&&E(C.emissiveMap.channel),metalnessMapUv:ke&&E(C.metalnessMap.channel),roughnessMapUv:P&&E(C.roughnessMap.channel),anisotropyMapUv:Re&&E(C.anisotropyMap.channel),clearcoatMapUv:Fe&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:ht&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&E(C.sheenRoughnessMap.channel),specularMapUv:at&&E(C.specularMap.channel),specularColorMapUv:dt&&E(C.specularColorMap.channel),specularIntensityMapUv:It&&E(C.specularIntensityMap.channel),transmissionMapUv:G&&E(C.transmissionMap.channel),thicknessMapUv:Pe&&E(C.thicknessMap.channel),alphaMapUv:pe&&E(C.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(Le||w),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!he.attributes.uv&&(Ct||pe),fog:!!fe,useFog:C.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ce,skinning:J.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Ct&&C.map.isVideoTexture===!0&&Et.getTransfer(C.map.colorSpace)===Ft,decodeVideoTextureEmissive:ut&&C.emissiveMap.isVideoTexture===!0&&Et.getTransfer(C.emissiveMap.colorSpace)===Ft,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===li,flipSided:C.side===Vn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ft&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&C.extensions.multiDraw===!0||nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Qt.vertexUv1s=h.has(1),Qt.vertexUv2s=h.has(2),Qt.vertexUv3s=h.has(3),h.clear(),Qt}function x(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)R.push(z),R.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(L(R,C),I(R,C),R.push(o.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function L(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function I(C,R){u.disableAll(),R.supportsVertexTextures&&u.enable(0),R.instancing&&u.enable(1),R.instancingColor&&u.enable(2),R.instancingMorph&&u.enable(3),R.matcap&&u.enable(4),R.envMap&&u.enable(5),R.normalMapObjectSpace&&u.enable(6),R.normalMapTangentSpace&&u.enable(7),R.clearcoat&&u.enable(8),R.iridescence&&u.enable(9),R.alphaTest&&u.enable(10),R.vertexColors&&u.enable(11),R.vertexAlphas&&u.enable(12),R.vertexUv1s&&u.enable(13),R.vertexUv2s&&u.enable(14),R.vertexUv3s&&u.enable(15),R.vertexTangents&&u.enable(16),R.anisotropy&&u.enable(17),R.alphaHash&&u.enable(18),R.batching&&u.enable(19),R.dispersion&&u.enable(20),R.batchingColor&&u.enable(21),C.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reverseDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),C.push(u.mask)}function A(C){const R=M[C.type];let z;if(R){const se=Ui[R];z=My.clone(se.uniforms)}else z=C.uniforms;return z}function q(C,R){let z;for(let se=0,J=m.length;se<J;se++){const fe=m[se];if(fe.cacheKey===R){z=fe,++z.usedTimes;break}}return z===void 0&&(z=new UT(o,R,C,a),m.push(z)),z}function k(C){if(--C.usedTimes===0){const R=m.indexOf(C);m[R]=m[m.length-1],m.pop(),C.destroy()}}function U(C){f.remove(C)}function X(){f.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:A,acquireProgram:q,releaseProgram:k,releaseShaderCache:U,programs:m,dispose:X}}function zT(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let u=o.get(c);return u===void 0&&(u={},o.set(c,u)),u}function i(c){o.delete(c)}function s(c,u,f){o.get(c)[u]=f}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function HT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function kg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Bg(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(g,_,y,M,E,S){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:y,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},o[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=y,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=E,x.group=S),e++,x}function u(g,_,y,M,E,S){const x=c(g,_,y,M,E,S);y.transmission>0?i.push(x):y.transparent===!0?s.push(x):t.push(x)}function f(g,_,y,M,E,S){const x=c(g,_,y,M,E,S);y.transmission>0?i.unshift(x):y.transparent===!0?s.unshift(x):t.unshift(x)}function h(g,_){t.length>1&&t.sort(g||HT),i.length>1&&i.sort(_||kg),s.length>1&&s.sort(_||kg)}function m(){for(let g=e,_=o.length;g<_;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:f,finish:m,sort:h}}function VT(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new Bg,o.set(i,[c])):s>=a.length?(c=new Bg,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function GT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new ct};break;case"SpotLight":t={position:new V,direction:new V,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new V,halfWidth:new V,halfHeight:new V};break}return o[e.id]=t,t}}}function WT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let XT=0;function jT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function qT(o){const e=new GT,t=WT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new V);const s=new V,a=new mt,c=new mt;function u(h){let m=0,g=0,_=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let y=0,M=0,E=0,S=0,x=0,L=0,I=0,A=0,q=0,k=0,U=0;h.sort(jT);for(let C=0,R=h.length;C<R;C++){const z=h[C],se=z.color,J=z.intensity,fe=z.distance,he=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=se.r*J,g+=se.g*J,_+=se.b*J;else if(z.isLightProbe){for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(z.sh.coefficients[ae],J);U++}else if(z.isDirectionalLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ce=z.shadow,B=t.get(z);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,i.directionalShadow[y]=B,i.directionalShadowMap[y]=he,i.directionalShadowMatrix[y]=z.shadow.matrix,L++}i.directional[y]=ae,y++}else if(z.isSpotLight){const ae=e.get(z);ae.position.setFromMatrixPosition(z.matrixWorld),ae.color.copy(se).multiplyScalar(J),ae.distance=fe,ae.coneCos=Math.cos(z.angle),ae.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ae.decay=z.decay,i.spot[E]=ae;const ce=z.shadow;if(z.map&&(i.spotLightMap[q]=z.map,q++,ce.updateMatrices(z),z.castShadow&&k++),i.spotLightMatrix[E]=ce.matrix,z.castShadow){const B=t.get(z);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,i.spotShadow[E]=B,i.spotShadowMap[E]=he,A++}E++}else if(z.isRectAreaLight){const ae=e.get(z);ae.color.copy(se).multiplyScalar(J),ae.halfWidth.set(z.width*.5,0,0),ae.halfHeight.set(0,z.height*.5,0),i.rectArea[S]=ae,S++}else if(z.isPointLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),ae.distance=z.distance,ae.decay=z.decay,z.castShadow){const ce=z.shadow,B=t.get(z);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,B.shadowCameraNear=ce.camera.near,B.shadowCameraFar=ce.camera.far,i.pointShadow[M]=B,i.pointShadowMap[M]=he,i.pointShadowMatrix[M]=z.shadow.matrix,I++}i.point[M]=ae,M++}else if(z.isHemisphereLight){const ae=e.get(z);ae.skyColor.copy(z.color).multiplyScalar(J),ae.groundColor.copy(z.groundColor).multiplyScalar(J),i.hemi[x]=ae,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=_;const X=i.hash;(X.directionalLength!==y||X.pointLength!==M||X.spotLength!==E||X.rectAreaLength!==S||X.hemiLength!==x||X.numDirectionalShadows!==L||X.numPointShadows!==I||X.numSpotShadows!==A||X.numSpotMaps!==q||X.numLightProbes!==U)&&(i.directional.length=y,i.spot.length=E,i.rectArea.length=S,i.point.length=M,i.hemi.length=x,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=A+q-k,i.spotLightMap.length=q,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=U,X.directionalLength=y,X.pointLength=M,X.spotLength=E,X.rectAreaLength=S,X.hemiLength=x,X.numDirectionalShadows=L,X.numPointShadows=I,X.numSpotShadows=A,X.numSpotMaps=q,X.numLightProbes=U,i.version=XT++)}function f(h,m){let g=0,_=0,y=0,M=0,E=0;const S=m.matrixWorldInverse;for(let x=0,L=h.length;x<L;x++){const I=h[x];if(I.isDirectionalLight){const A=i.directional[g];A.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),g++}else if(I.isSpotLight){const A=i.spot[y];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),y++}else if(I.isRectAreaLight){const A=i.rectArea[M];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(S),c.identity(),a.copy(I.matrixWorld),a.premultiply(S),c.extractRotation(a),A.halfWidth.set(I.width*.5,0,0),A.halfHeight.set(0,I.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),M++}else if(I.isPointLight){const A=i.point[_];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(S),_++}else if(I.isHemisphereLight){const A=i.hemi[E];A.direction.setFromMatrixPosition(I.matrixWorld),A.direction.transformDirection(S),E++}}}return{setup:u,setupView:f,state:i}}function zg(o){const e=new qT(o),t=[],i=[];function s(m){h.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function c(m){i.push(m)}function u(){e.setup(t)}function f(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:c}}function YT(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let u;return c===void 0?(u=new zg(o),e.set(s,[u])):a>=c.length?(u=new zg(o),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}class KT extends bi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $T extends bi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QT=`uniform sampler2D shadow_pass;
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
}`;function JT(o,e,t){let i=new Qf;const s=new yt,a=new yt,c=new Lt,u=new KT({depthPacking:Px}),f=new $T,h={},m=t.maxTextureSize,g={[cr]:Vn,[Vn]:cr,[li]:li},_=new qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:ZT,fragmentShader:QT}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new $n;M.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new un(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=x_;let x=this.type;this.render=function(k,U,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const C=o.getRenderTarget(),R=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),se=o.state;se.setBlending(Xr),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const J=x!==ir&&this.type===ir,fe=x===ir&&this.type!==ir;for(let he=0,ae=k.length;he<ae;he++){const ce=k[he],B=ce.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const le=B.getFrameExtents();if(s.multiply(le),a.copy(B.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/le.x),s.x=a.x*le.x,B.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/le.y),s.y=a.y*le.y,B.mapSize.y=a.y)),B.map===null||J===!0||fe===!0){const N=this.type!==ir?{minFilter:In,magFilter:In}:{};B.map!==null&&B.map.dispose(),B.map=new xs(s.x,s.y,N),B.map.texture.name=ce.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const ie=B.getViewportCount();for(let N=0;N<ie;N++){const ne=B.getViewport(N);c.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),se.viewport(c),B.updateMatrices(ce,N),i=B.getFrustum(),A(U,X,B.camera,ce,this.type)}B.isPointLightShadow!==!0&&this.type===ir&&L(B,X),B.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(C,R,z)};function L(k,U){const X=e.update(E);_.defines.VSM_SAMPLES!==k.blurSamples&&(_.defines.VSM_SAMPLES=k.blurSamples,y.defines.VSM_SAMPLES=k.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new xs(s.x,s.y)),_.uniforms.shadow_pass.value=k.map.texture,_.uniforms.resolution.value=k.mapSize,_.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(U,null,X,_,E,null),y.uniforms.shadow_pass.value=k.mapPass.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(U,null,X,y,E,null)}function I(k,U,X,C){let R=null;const z=X.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(z!==void 0)R=z;else if(R=X.isPointLight===!0?f:u,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const se=R.uuid,J=U.uuid;let fe=h[se];fe===void 0&&(fe={},h[se]=fe);let he=fe[J];he===void 0&&(he=R.clone(),fe[J]=he,U.addEventListener("dispose",q)),R=he}if(R.visible=U.visible,R.wireframe=U.wireframe,C===ir?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:g[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const se=o.properties.get(R);se.light=X}return R}function A(k,U,X,C,R){if(k.visible===!1)return;if(k.layers.test(U.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&R===ir)&&(!k.frustumCulled||i.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,k.matrixWorld);const J=e.update(k),fe=k.material;if(Array.isArray(fe)){const he=J.groups;for(let ae=0,ce=he.length;ae<ce;ae++){const B=he[ae],le=fe[B.materialIndex];if(le&&le.visible){const ie=I(k,le,C,R);k.onBeforeShadow(o,k,U,X,J,ie,B),o.renderBufferDirect(X,null,J,ie,k,B),k.onAfterShadow(o,k,U,X,J,ie,B)}}}else if(fe.visible){const he=I(k,fe,C,R);k.onBeforeShadow(o,k,U,X,J,he,null),o.renderBufferDirect(X,null,J,he,k,null),k.onAfterShadow(o,k,U,X,J,he,null)}}const se=k.children;for(let J=0,fe=se.length;J<fe;J++)A(se[J],U,X,C,R)}function q(k){k.target.removeEventListener("dispose",q);for(const X in h){const C=h[X],R=k.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const ew={[$d]:Zd,[Qd]:tf,[Jd]:nf,[fo]:ef,[Zd]:$d,[tf]:Qd,[nf]:Jd,[ef]:fo};function tw(o,e){function t(){let G=!1;const Pe=new Lt;let oe=null;const pe=new Lt(0,0,0,0);return{setMask:function(Ue){oe!==Ue&&!G&&(o.colorMask(Ue,Ue,Ue,Ue),oe=Ue)},setLocked:function(Ue){G=Ue},setClear:function(Ue,Ne,ft,Bt,Qt){Qt===!0&&(Ue*=Bt,Ne*=Bt,ft*=Bt),Pe.set(Ue,Ne,ft,Bt),pe.equals(Pe)===!1&&(o.clearColor(Ue,Ne,ft,Bt),pe.copy(Pe))},reset:function(){G=!1,oe=null,pe.set(-1,0,0,0)}}}function i(){let G=!1,Pe=!1,oe=null,pe=null,Ue=null;return{setReversed:function(Ne){if(Pe!==Ne){const ft=e.get("EXT_clip_control");Pe?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT);const Bt=Ue;Ue=null,this.setClear(Bt)}Pe=Ne},getReversed:function(){return Pe},setTest:function(Ne){Ne?Se(o.DEPTH_TEST):Ce(o.DEPTH_TEST)},setMask:function(Ne){oe!==Ne&&!G&&(o.depthMask(Ne),oe=Ne)},setFunc:function(Ne){if(Pe&&(Ne=ew[Ne]),pe!==Ne){switch(Ne){case $d:o.depthFunc(o.NEVER);break;case Zd:o.depthFunc(o.ALWAYS);break;case Qd:o.depthFunc(o.LESS);break;case fo:o.depthFunc(o.LEQUAL);break;case Jd:o.depthFunc(o.EQUAL);break;case ef:o.depthFunc(o.GEQUAL);break;case tf:o.depthFunc(o.GREATER);break;case nf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}pe=Ne}},setLocked:function(Ne){G=Ne},setClear:function(Ne){Ue!==Ne&&(Pe&&(Ne=1-Ne),o.clearDepth(Ne),Ue=Ne)},reset:function(){G=!1,oe=null,pe=null,Ue=null,Pe=!1}}}function s(){let G=!1,Pe=null,oe=null,pe=null,Ue=null,Ne=null,ft=null,Bt=null,Qt=null;return{setTest:function(wt){G||(wt?Se(o.STENCIL_TEST):Ce(o.STENCIL_TEST))},setMask:function(wt){Pe!==wt&&!G&&(o.stencilMask(wt),Pe=wt)},setFunc:function(wt,Nn,wn){(oe!==wt||pe!==Nn||Ue!==wn)&&(o.stencilFunc(wt,Nn,wn),oe=wt,pe=Nn,Ue=wn)},setOp:function(wt,Nn,wn){(Ne!==wt||ft!==Nn||Bt!==wn)&&(o.stencilOp(wt,Nn,wn),Ne=wt,ft=Nn,Bt=wn)},setLocked:function(wt){G=wt},setClear:function(wt){Qt!==wt&&(o.clearStencil(wt),Qt=wt)},reset:function(){G=!1,Pe=null,oe=null,pe=null,Ue=null,Ne=null,ft=null,Bt=null,Qt=null}}}const a=new t,c=new i,u=new s,f=new WeakMap,h=new WeakMap;let m={},g={},_=new WeakMap,y=[],M=null,E=!1,S=null,x=null,L=null,I=null,A=null,q=null,k=null,U=new ct(0,0,0),X=0,C=!1,R=null,z=null,se=null,J=null,fe=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ce=0;const B=o.getParameter(o.VERSION);B.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(B)[1]),ae=ce>=1):B.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ae=ce>=2);let le=null,ie={};const N=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),Oe=new Lt().fromArray(N),Z=new Lt().fromArray(ne);function ue(G,Pe,oe,pe){const Ue=new Uint8Array(4),Ne=o.createTexture();o.bindTexture(G,Ne),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ft=0;ft<oe;ft++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Pe,0,o.RGBA,1,1,pe,0,o.RGBA,o.UNSIGNED_BYTE,Ue):o.texImage2D(Pe+ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ue);return Ne}const Te={};Te[o.TEXTURE_2D]=ue(o.TEXTURE_2D,o.TEXTURE_2D,1),Te[o.TEXTURE_CUBE_MAP]=ue(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[o.TEXTURE_2D_ARRAY]=ue(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Te[o.TEXTURE_3D]=ue(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Se(o.DEPTH_TEST),c.setFunc(fo),Xe(!1),Le(zm),Se(o.CULL_FACE),F(Xr);function Se(G){m[G]!==!0&&(o.enable(G),m[G]=!0)}function Ce(G){m[G]!==!1&&(o.disable(G),m[G]=!1)}function ze(G,Pe){return g[G]!==Pe?(o.bindFramebuffer(G,Pe),g[G]=Pe,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Pe),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Pe),!0):!1}function nt(G,Pe){let oe=y,pe=!1;if(G){oe=_.get(Pe),oe===void 0&&(oe=[],_.set(Pe,oe));const Ue=G.textures;if(oe.length!==Ue.length||oe[0]!==o.COLOR_ATTACHMENT0){for(let Ne=0,ft=Ue.length;Ne<ft;Ne++)oe[Ne]=o.COLOR_ATTACHMENT0+Ne;oe.length=Ue.length,pe=!0}}else oe[0]!==o.BACK&&(oe[0]=o.BACK,pe=!0);pe&&o.drawBuffers(oe)}function Ct(G){return M!==G?(o.useProgram(G),M=G,!0):!1}const me={[gs]:o.FUNC_ADD,[tx]:o.FUNC_SUBTRACT,[nx]:o.FUNC_REVERSE_SUBTRACT};me[ix]=o.MIN,me[rx]=o.MAX;const xe={[sx]:o.ZERO,[ox]:o.ONE,[ax]:o.SRC_COLOR,[Yd]:o.SRC_ALPHA,[hx]:o.SRC_ALPHA_SATURATE,[dx]:o.DST_COLOR,[cx]:o.DST_ALPHA,[lx]:o.ONE_MINUS_SRC_COLOR,[Kd]:o.ONE_MINUS_SRC_ALPHA,[fx]:o.ONE_MINUS_DST_COLOR,[ux]:o.ONE_MINUS_DST_ALPHA,[px]:o.CONSTANT_COLOR,[mx]:o.ONE_MINUS_CONSTANT_COLOR,[gx]:o.CONSTANT_ALPHA,[_x]:o.ONE_MINUS_CONSTANT_ALPHA};function F(G,Pe,oe,pe,Ue,Ne,ft,Bt,Qt,wt){if(G===Xr){E===!0&&(Ce(o.BLEND),E=!1);return}if(E===!1&&(Se(o.BLEND),E=!0),G!==ex){if(G!==S||wt!==C){if((x!==gs||A!==gs)&&(o.blendEquation(o.FUNC_ADD),x=gs,A=gs),wt)switch(G){case ao:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hm:o.blendFunc(o.ONE,o.ONE);break;case Vm:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Gm:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ao:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hm:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Vm:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Gm:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}L=null,I=null,q=null,k=null,U.set(0,0,0),X=0,S=G,C=wt}return}Ue=Ue||Pe,Ne=Ne||oe,ft=ft||pe,(Pe!==x||Ue!==A)&&(o.blendEquationSeparate(me[Pe],me[Ue]),x=Pe,A=Ue),(oe!==L||pe!==I||Ne!==q||ft!==k)&&(o.blendFuncSeparate(xe[oe],xe[pe],xe[Ne],xe[ft]),L=oe,I=pe,q=Ne,k=ft),(Bt.equals(U)===!1||Qt!==X)&&(o.blendColor(Bt.r,Bt.g,Bt.b,Qt),U.copy(Bt),X=Qt),S=G,C=!1}function Je(G,Pe){G.side===li?Ce(o.CULL_FACE):Se(o.CULL_FACE);let oe=G.side===Vn;Pe&&(oe=!oe),Xe(oe),G.blending===ao&&G.transparent===!1?F(Xr):F(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const pe=G.stencilWrite;u.setTest(pe),pe&&(u.setMask(G.stencilWriteMask),u.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),u.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ut(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Se(o.SAMPLE_ALPHA_TO_COVERAGE):Ce(o.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function Le(G){G!==Qv?(Se(o.CULL_FACE),G!==z&&(G===zm?o.cullFace(o.BACK):G===Jv?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ce(o.CULL_FACE),z=G}function De(G){G!==se&&(ae&&o.lineWidth(G),se=G)}function ut(G,Pe,oe){G?(Se(o.POLYGON_OFFSET_FILL),(J!==Pe||fe!==oe)&&(o.polygonOffset(Pe,oe),J=Pe,fe=oe)):Ce(o.POLYGON_OFFSET_FILL)}function ke(G){G?Se(o.SCISSOR_TEST):Ce(o.SCISSOR_TEST)}function P(G){G===void 0&&(G=o.TEXTURE0+he-1),le!==G&&(o.activeTexture(G),le=G)}function w(G,Pe,oe){oe===void 0&&(le===null?oe=o.TEXTURE0+he-1:oe=le);let pe=ie[oe];pe===void 0&&(pe={type:void 0,texture:void 0},ie[oe]=pe),(pe.type!==G||pe.texture!==Pe)&&(le!==oe&&(o.activeTexture(oe),le=oe),o.bindTexture(G,Pe||Te[G]),pe.type=G,pe.texture=Pe)}function K(){const G=ie[le];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function de(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{o.compressedTexImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(G){Oe.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),Oe.copy(G))}function Ge(G){Z.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Z.copy(G))}function at(G,Pe){let oe=h.get(Pe);oe===void 0&&(oe=new WeakMap,h.set(Pe,oe));let pe=oe.get(G);pe===void 0&&(pe=o.getUniformBlockIndex(Pe,G.name),oe.set(G,pe))}function dt(G,Pe){const pe=h.get(Pe).get(G);f.get(Pe)!==pe&&(o.uniformBlockBinding(Pe,pe,G.__bindingPointIndex),f.set(Pe,pe))}function It(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},le=null,ie={},g={},_=new WeakMap,y=[],M=null,E=!1,S=null,x=null,L=null,I=null,A=null,q=null,k=null,U=new ct(0,0,0),X=0,C=!1,R=null,z=null,se=null,J=null,fe=null,Oe.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:Se,disable:Ce,bindFramebuffer:ze,drawBuffers:nt,useProgram:Ct,setBlending:F,setMaterial:Je,setFlipSided:Xe,setCullFace:Le,setLineWidth:De,setPolygonOffset:ut,setScissorTest:ke,activeTexture:P,bindTexture:w,unbindTexture:K,compressedTexImage2D:de,compressedTexImage3D:ge,texImage2D:He,texImage3D:tt,updateUBOMapping:at,uniformBlockBinding:dt,texStorage2D:ht,texStorage3D:Me,texSubImage2D:re,texSubImage3D:Ve,compressedTexSubImage2D:Re,compressedTexSubImage3D:Fe,scissor:Ke,viewport:Ge,reset:It}}function Hg(o,e,t,i){const s=nw(i);switch(t){case R_:return o*e;case P_:return o*e;case L_:return o*e*2;case jf:return o*e/s.components*s.byteLength;case qf:return o*e/s.components*s.byteLength;case I_:return o*e*2/s.components*s.byteLength;case Yf:return o*e*2/s.components*s.byteLength;case C_:return o*e*3/s.components*s.byteLength;case ci:return o*e*4/s.components*s.byteLength;case Kf:return o*e*4/s.components*s.byteLength;case uc:case dc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case fc:case hc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case af:case cf:return Math.max(o,16)*Math.max(e,8)/4;case of:case lf:return Math.max(o,8)*Math.max(e,8)/2;case uf:case df:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ff:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case mf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case gf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case _f:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case vf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case xf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case yf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Tf:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case wf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Af:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case pc:case bf:case Rf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case D_:case Cf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Pf:case Lf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nw(o){switch(o){case ur:case w_:return{byteLength:1,components:1};case Ma:case A_:case Aa:return{byteLength:2,components:1};case Wf:case Xf:return{byteLength:2,components:4};case vs:case Gf:case Ti:return{byteLength:4,components:1};case b_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function iw(o,e,t,i,s,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new yt,m=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,w){return y?new OffscreenCanvas(P,w):wa("canvas")}function E(P,w,K){let de=1;const ge=ke(P);if((ge.width>K||ge.height>K)&&(de=K/Math.max(ge.width,ge.height)),de<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const re=Math.floor(de*ge.width),Ve=Math.floor(de*ge.height);g===void 0&&(g=M(re,Ve));const Re=w?M(re,Ve):g;return Re.width=re,Re.height=Ve,Re.getContext("2d").drawImage(P,0,0,re,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+re+"x"+Ve+")."),Re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function S(P){return P.generateMipmaps}function x(P){o.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function I(P,w,K,de,ge=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=w;if(w===o.RED&&(K===o.FLOAT&&(re=o.R32F),K===o.HALF_FLOAT&&(re=o.R16F),K===o.UNSIGNED_BYTE&&(re=o.R8)),w===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(re=o.R8UI),K===o.UNSIGNED_SHORT&&(re=o.R16UI),K===o.UNSIGNED_INT&&(re=o.R32UI),K===o.BYTE&&(re=o.R8I),K===o.SHORT&&(re=o.R16I),K===o.INT&&(re=o.R32I)),w===o.RG&&(K===o.FLOAT&&(re=o.RG32F),K===o.HALF_FLOAT&&(re=o.RG16F),K===o.UNSIGNED_BYTE&&(re=o.RG8)),w===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(re=o.RG8UI),K===o.UNSIGNED_SHORT&&(re=o.RG16UI),K===o.UNSIGNED_INT&&(re=o.RG32UI),K===o.BYTE&&(re=o.RG8I),K===o.SHORT&&(re=o.RG16I),K===o.INT&&(re=o.RG32I)),w===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(re=o.RGB8UI),K===o.UNSIGNED_SHORT&&(re=o.RGB16UI),K===o.UNSIGNED_INT&&(re=o.RGB32UI),K===o.BYTE&&(re=o.RGB8I),K===o.SHORT&&(re=o.RGB16I),K===o.INT&&(re=o.RGB32I)),w===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(re=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(re=o.RGBA16UI),K===o.UNSIGNED_INT&&(re=o.RGBA32UI),K===o.BYTE&&(re=o.RGBA8I),K===o.SHORT&&(re=o.RGBA16I),K===o.INT&&(re=o.RGBA32I)),w===o.RGB&&K===o.UNSIGNED_INT_5_9_9_9_REV&&(re=o.RGB9_E5),w===o.RGBA){const Ve=ge?Ec:Et.getTransfer(de);K===o.FLOAT&&(re=o.RGBA32F),K===o.HALF_FLOAT&&(re=o.RGBA16F),K===o.UNSIGNED_BYTE&&(re=Ve===Ft?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(re=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(re=o.RGB5_A1)}return(re===o.R16F||re===o.R32F||re===o.RG16F||re===o.RG32F||re===o.RGBA16F||re===o.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function A(P,w){let K;return P?w===null||w===vs||w===go?K=o.DEPTH24_STENCIL8:w===Ti?K=o.DEPTH32F_STENCIL8:w===Ma&&(K=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===vs||w===go?K=o.DEPTH_COMPONENT24:w===Ti?K=o.DEPTH_COMPONENT32F:w===Ma&&(K=o.DEPTH_COMPONENT16),K}function q(P,w){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==In&&P.minFilter!==Kn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function k(P){const w=P.target;w.removeEventListener("dispose",k),X(w),w.isVideoTexture&&m.delete(w)}function U(P){const w=P.target;w.removeEventListener("dispose",U),R(w)}function X(P){const w=i.get(P);if(w.__webglInit===void 0)return;const K=P.source,de=_.get(K);if(de){const ge=de[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&C(P),Object.keys(de).length===0&&_.delete(K)}i.remove(P)}function C(P){const w=i.get(P);o.deleteTexture(w.__webglTexture);const K=P.source,de=_.get(K);delete de[w.__cacheKey],c.memory.textures--}function R(P){const w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(w.__webglFramebuffer[de]))for(let ge=0;ge<w.__webglFramebuffer[de].length;ge++)o.deleteFramebuffer(w.__webglFramebuffer[de][ge]);else o.deleteFramebuffer(w.__webglFramebuffer[de]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[de])}else{if(Array.isArray(w.__webglFramebuffer))for(let de=0;de<w.__webglFramebuffer.length;de++)o.deleteFramebuffer(w.__webglFramebuffer[de]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let de=0;de<w.__webglColorRenderbuffer.length;de++)w.__webglColorRenderbuffer[de]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[de]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=P.textures;for(let de=0,ge=K.length;de<ge;de++){const re=i.get(K[de]);re.__webglTexture&&(o.deleteTexture(re.__webglTexture),c.memory.textures--),i.remove(K[de])}i.remove(P)}let z=0;function se(){z=0}function J(){const P=z;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),z+=1,P}function fe(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function he(P,w){const K=i.get(P);if(P.isVideoTexture&&De(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){const de=P.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,P,w);return}}t.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+w)}function ae(P,w){const K=i.get(P);if(P.version>0&&K.__version!==P.version){Z(K,P,w);return}t.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+w)}function ce(P,w){const K=i.get(P);if(P.version>0&&K.__version!==P.version){Z(K,P,w);return}t.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+w)}function B(P,w){const K=i.get(P);if(P.version>0&&K.__version!==P.version){ue(K,P,w);return}t.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+w)}const le={[mo]:o.REPEAT,[Gr]:o.CLAMP_TO_EDGE,[gc]:o.MIRRORED_REPEAT},ie={[In]:o.NEAREST,[T_]:o.NEAREST_MIPMAP_NEAREST,[ga]:o.NEAREST_MIPMAP_LINEAR,[Kn]:o.LINEAR,[cc]:o.LINEAR_MIPMAP_NEAREST,[sr]:o.LINEAR_MIPMAP_LINEAR},N={[Ix]:o.NEVER,[kx]:o.ALWAYS,[Dx]:o.LESS,[F_]:o.LEQUAL,[Nx]:o.EQUAL,[Ox]:o.GEQUAL,[Ux]:o.GREATER,[Fx]:o.NOTEQUAL};function ne(P,w){if(w.type===Ti&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Kn||w.magFilter===cc||w.magFilter===ga||w.magFilter===sr||w.minFilter===Kn||w.minFilter===cc||w.minFilter===ga||w.minFilter===sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,le[w.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,le[w.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,le[w.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,ie[w.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,ie[w.minFilter]),w.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,N[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===In||w.minFilter!==ga&&w.minFilter!==sr||w.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Oe(P,w){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",k));const de=w.source;let ge=_.get(de);ge===void 0&&(ge={},_.set(de,ge));const re=fe(w);if(re!==P.__cacheKey){ge[re]===void 0&&(ge[re]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,K=!0),ge[re].usedTimes++;const Ve=ge[P.__cacheKey];Ve!==void 0&&(ge[P.__cacheKey].usedTimes--,Ve.usedTimes===0&&C(w)),P.__cacheKey=re,P.__webglTexture=ge[re].texture}return K}function Z(P,w,K){let de=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(de=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(de=o.TEXTURE_3D);const ge=Oe(P,w),re=w.source;t.bindTexture(de,P.__webglTexture,o.TEXTURE0+K);const Ve=i.get(re);if(re.version!==Ve.__version||ge===!0){t.activeTexture(o.TEXTURE0+K);const Re=Et.getPrimaries(Et.workingColorSpace),Fe=w.colorSpace===Vr?null:Et.getPrimaries(w.colorSpace),ht=w.colorSpace===Vr||Re===Fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Me=E(w.image,!1,s.maxTextureSize);Me=ut(w,Me);const He=a.convert(w.format,w.colorSpace),tt=a.convert(w.type);let Ke=I(w.internalFormat,He,tt,w.colorSpace,w.isVideoTexture);ne(de,w);let Ge;const at=w.mipmaps,dt=w.isVideoTexture!==!0,It=Ve.__version===void 0||ge===!0,G=re.dataReady,Pe=q(w,Me);if(w.isDepthTexture)Ke=A(w.format===_o,w.type),It&&(dt?t.texStorage2D(o.TEXTURE_2D,1,Ke,Me.width,Me.height):t.texImage2D(o.TEXTURE_2D,0,Ke,Me.width,Me.height,0,He,tt,null));else if(w.isDataTexture)if(at.length>0){dt&&It&&t.texStorage2D(o.TEXTURE_2D,Pe,Ke,at[0].width,at[0].height);for(let oe=0,pe=at.length;oe<pe;oe++)Ge=at[oe],dt?G&&t.texSubImage2D(o.TEXTURE_2D,oe,0,0,Ge.width,Ge.height,He,tt,Ge.data):t.texImage2D(o.TEXTURE_2D,oe,Ke,Ge.width,Ge.height,0,He,tt,Ge.data);w.generateMipmaps=!1}else dt?(It&&t.texStorage2D(o.TEXTURE_2D,Pe,Ke,Me.width,Me.height),G&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Me.width,Me.height,He,tt,Me.data)):t.texImage2D(o.TEXTURE_2D,0,Ke,Me.width,Me.height,0,He,tt,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){dt&&It&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,Ke,at[0].width,at[0].height,Me.depth);for(let oe=0,pe=at.length;oe<pe;oe++)if(Ge=at[oe],w.format!==ci)if(He!==null)if(dt){if(G)if(w.layerUpdates.size>0){const Ue=Hg(Ge.width,Ge.height,w.format,w.type);for(const Ne of w.layerUpdates){const ft=Ge.data.subarray(Ne*Ue/Ge.data.BYTES_PER_ELEMENT,(Ne+1)*Ue/Ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,oe,0,0,Ne,Ge.width,Ge.height,1,He,ft)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,oe,0,0,0,Ge.width,Ge.height,Me.depth,He,Ge.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,oe,Ke,Ge.width,Ge.height,Me.depth,0,Ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?G&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,oe,0,0,0,Ge.width,Ge.height,Me.depth,He,tt,Ge.data):t.texImage3D(o.TEXTURE_2D_ARRAY,oe,Ke,Ge.width,Ge.height,Me.depth,0,He,tt,Ge.data)}else{dt&&It&&t.texStorage2D(o.TEXTURE_2D,Pe,Ke,at[0].width,at[0].height);for(let oe=0,pe=at.length;oe<pe;oe++)Ge=at[oe],w.format!==ci?He!==null?dt?G&&t.compressedTexSubImage2D(o.TEXTURE_2D,oe,0,0,Ge.width,Ge.height,He,Ge.data):t.compressedTexImage2D(o.TEXTURE_2D,oe,Ke,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?G&&t.texSubImage2D(o.TEXTURE_2D,oe,0,0,Ge.width,Ge.height,He,tt,Ge.data):t.texImage2D(o.TEXTURE_2D,oe,Ke,Ge.width,Ge.height,0,He,tt,Ge.data)}else if(w.isDataArrayTexture)if(dt){if(It&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,Ke,Me.width,Me.height,Me.depth),G)if(w.layerUpdates.size>0){const oe=Hg(Me.width,Me.height,w.format,w.type);for(const pe of w.layerUpdates){const Ue=Me.data.subarray(pe*oe/Me.data.BYTES_PER_ELEMENT,(pe+1)*oe/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,He,tt,Ue)}w.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,He,tt,Me.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Ke,Me.width,Me.height,Me.depth,0,He,tt,Me.data);else if(w.isData3DTexture)dt?(It&&t.texStorage3D(o.TEXTURE_3D,Pe,Ke,Me.width,Me.height,Me.depth),G&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,He,tt,Me.data)):t.texImage3D(o.TEXTURE_3D,0,Ke,Me.width,Me.height,Me.depth,0,He,tt,Me.data);else if(w.isFramebufferTexture){if(It)if(dt)t.texStorage2D(o.TEXTURE_2D,Pe,Ke,Me.width,Me.height);else{let oe=Me.width,pe=Me.height;for(let Ue=0;Ue<Pe;Ue++)t.texImage2D(o.TEXTURE_2D,Ue,Ke,oe,pe,0,He,tt,null),oe>>=1,pe>>=1}}else if(at.length>0){if(dt&&It){const oe=ke(at[0]);t.texStorage2D(o.TEXTURE_2D,Pe,Ke,oe.width,oe.height)}for(let oe=0,pe=at.length;oe<pe;oe++)Ge=at[oe],dt?G&&t.texSubImage2D(o.TEXTURE_2D,oe,0,0,He,tt,Ge):t.texImage2D(o.TEXTURE_2D,oe,Ke,He,tt,Ge);w.generateMipmaps=!1}else if(dt){if(It){const oe=ke(Me);t.texStorage2D(o.TEXTURE_2D,Pe,Ke,oe.width,oe.height)}G&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,He,tt,Me)}else t.texImage2D(o.TEXTURE_2D,0,Ke,He,tt,Me);S(w)&&x(de),Ve.__version=re.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ue(P,w,K){if(w.image.length!==6)return;const de=Oe(P,w),ge=w.source;t.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+K);const re=i.get(ge);if(ge.version!==re.__version||de===!0){t.activeTexture(o.TEXTURE0+K);const Ve=Et.getPrimaries(Et.workingColorSpace),Re=w.colorSpace===Vr?null:Et.getPrimaries(w.colorSpace),Fe=w.colorSpace===Vr||Ve===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ht=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,He=[];for(let pe=0;pe<6;pe++)!ht&&!Me?He[pe]=E(w.image[pe],!0,s.maxCubemapSize):He[pe]=Me?w.image[pe].image:w.image[pe],He[pe]=ut(w,He[pe]);const tt=He[0],Ke=a.convert(w.format,w.colorSpace),Ge=a.convert(w.type),at=I(w.internalFormat,Ke,Ge,w.colorSpace),dt=w.isVideoTexture!==!0,It=re.__version===void 0||de===!0,G=ge.dataReady;let Pe=q(w,tt);ne(o.TEXTURE_CUBE_MAP,w);let oe;if(ht){dt&&It&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Pe,at,tt.width,tt.height);for(let pe=0;pe<6;pe++){oe=He[pe].mipmaps;for(let Ue=0;Ue<oe.length;Ue++){const Ne=oe[Ue];w.format!==ci?Ke!==null?dt?G&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,Ne.width,Ne.height,Ke,Ne.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,at,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,Ne.width,Ne.height,Ke,Ge,Ne.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,at,Ne.width,Ne.height,0,Ke,Ge,Ne.data)}}}else{if(oe=w.mipmaps,dt&&It){oe.length>0&&Pe++;const pe=ke(He[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Pe,at,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){dt?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,He[pe].width,He[pe].height,Ke,Ge,He[pe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,at,He[pe].width,He[pe].height,0,Ke,Ge,He[pe].data);for(let Ue=0;Ue<oe.length;Ue++){const ft=oe[Ue].image[pe].image;dt?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,ft.width,ft.height,Ke,Ge,ft.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,at,ft.width,ft.height,0,Ke,Ge,ft.data)}}else{dt?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ke,Ge,He[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,at,Ke,Ge,He[pe]);for(let Ue=0;Ue<oe.length;Ue++){const Ne=oe[Ue];dt?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,Ke,Ge,Ne.image[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,at,Ke,Ge,Ne.image[pe])}}}S(w)&&x(o.TEXTURE_CUBE_MAP),re.__version=ge.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Te(P,w,K,de,ge,re){const Ve=a.convert(K.format,K.colorSpace),Re=a.convert(K.type),Fe=I(K.internalFormat,Ve,Re,K.colorSpace),ht=i.get(w),Me=i.get(K);if(Me.__renderTarget=w,!ht.__hasExternalTextures){const He=Math.max(1,w.width>>re),tt=Math.max(1,w.height>>re);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?t.texImage3D(ge,re,Fe,He,tt,w.depth,0,Ve,Re,null):t.texImage2D(ge,re,Fe,He,tt,0,Ve,Re,null)}t.bindFramebuffer(o.FRAMEBUFFER,P),Le(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,de,ge,Me.__webglTexture,0,Xe(w)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,de,ge,Me.__webglTexture,re),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Se(P,w,K){if(o.bindRenderbuffer(o.RENDERBUFFER,P),w.depthBuffer){const de=w.depthTexture,ge=de&&de.isDepthTexture?de.type:null,re=A(w.stencilBuffer,ge),Ve=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=Xe(w);Le(w)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Re,re,w.width,w.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,Re,re,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,re,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ve,o.RENDERBUFFER,P)}else{const de=w.textures;for(let ge=0;ge<de.length;ge++){const re=de[ge],Ve=a.convert(re.format,re.colorSpace),Re=a.convert(re.type),Fe=I(re.internalFormat,Ve,Re,re.colorSpace),ht=Xe(w);K&&Le(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ht,Fe,w.width,w.height):Le(w)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ht,Fe,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Fe,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ce(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=i.get(w.depthTexture);de.__renderTarget=w,(!de.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const ge=de.__webglTexture,re=Xe(w);if(w.depthTexture.format===lo)Le(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,re):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(w.depthTexture.format===_o)Le(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,re):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function ze(P){const w=i.get(P),K=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const de=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),de){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,de.removeEventListener("dispose",ge)};de.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=de}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Ce(w.__webglFramebuffer,P)}else if(K){w.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[de]),w.__webglDepthbuffer[de]===void 0)w.__webglDepthbuffer[de]=o.createRenderbuffer(),Se(w.__webglDepthbuffer[de],P,!1);else{const ge=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer[de];o.bindRenderbuffer(o.RENDERBUFFER,re),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,re)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),Se(w.__webglDepthbuffer,P,!1);else{const de=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,de,o.RENDERBUFFER,ge)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function nt(P,w,K){const de=i.get(P);w!==void 0&&Te(de.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&ze(P)}function Ct(P){const w=P.texture,K=i.get(P),de=i.get(w);P.addEventListener("dispose",U);const ge=P.textures,re=P.isWebGLCubeRenderTarget===!0,Ve=ge.length>1;if(Ve||(de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture()),de.__version=w.version,c.memory.textures++),re){K.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[Re]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)K.__webglFramebuffer[Re][Fe]=o.createFramebuffer()}else K.__webglFramebuffer[Re]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)K.__webglFramebuffer[Re]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(Ve)for(let Re=0,Fe=ge.length;Re<Fe;Re++){const ht=i.get(ge[Re]);ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture(),c.memory.textures++)}if(P.samples>0&&Le(P)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Re=0;Re<ge.length;Re++){const Fe=ge[Re];K.__webglColorRenderbuffer[Re]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[Re]);const ht=a.convert(Fe.format,Fe.colorSpace),Me=a.convert(Fe.type),He=I(Fe.internalFormat,ht,Me,Fe.colorSpace,P.isXRRenderTarget===!0),tt=Xe(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,tt,He,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,K.__webglColorRenderbuffer[Re])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),Se(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(re){t.bindTexture(o.TEXTURE_CUBE_MAP,de.__webglTexture),ne(o.TEXTURE_CUBE_MAP,w);for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Te(K.__webglFramebuffer[Re][Fe],P,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Fe);else Te(K.__webglFramebuffer[Re],P,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(w)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Re=0,Fe=ge.length;Re<Fe;Re++){const ht=ge[Re],Me=i.get(ht);t.bindTexture(o.TEXTURE_2D,Me.__webglTexture),ne(o.TEXTURE_2D,ht),Te(K.__webglFramebuffer,P,ht,o.COLOR_ATTACHMENT0+Re,o.TEXTURE_2D,0),S(ht)&&x(o.TEXTURE_2D)}t.unbindTexture()}else{let Re=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Re=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Re,de.__webglTexture),ne(Re,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Te(K.__webglFramebuffer[Fe],P,w,o.COLOR_ATTACHMENT0,Re,Fe);else Te(K.__webglFramebuffer,P,w,o.COLOR_ATTACHMENT0,Re,0);S(w)&&x(Re),t.unbindTexture()}P.depthBuffer&&ze(P)}function me(P){const w=P.textures;for(let K=0,de=w.length;K<de;K++){const ge=w[K];if(S(ge)){const re=L(P),Ve=i.get(ge).__webglTexture;t.bindTexture(re,Ve),x(re),t.unbindTexture()}}}const xe=[],F=[];function Je(P){if(P.samples>0){if(Le(P)===!1){const w=P.textures,K=P.width,de=P.height;let ge=o.COLOR_BUFFER_BIT;const re=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ve=i.get(P),Re=w.length>1;if(Re)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),Re){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[Fe]);const ht=i.get(w[Fe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ht,0)}o.blitFramebuffer(0,0,K,de,0,0,K,de,ge,o.NEAREST),f===!0&&(xe.length=0,F.length=0,xe.push(o.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(xe.push(re),F.push(re),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Re)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[Fe]);const ht=i.get(w[Fe]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,ht,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&f){const w=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function Xe(P){return Math.min(s.maxSamples,P.samples)}function Le(P){const w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function De(P){const w=c.render.frame;m.get(P)!==w&&(m.set(P,w),P.update())}function ut(P,w){const K=P.colorSpace,de=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==Tn&&K!==Vr&&(Et.getTransfer(K)===Ft?(de!==ci||ge!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function ke(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=se,this.setTexture2D=he,this.setTexture2DArray=ae,this.setTexture3D=ce,this.setTextureCube=B,this.rebindTextures=nt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Le}function rw(o,e){function t(i,s=Vr){let a;const c=Et.getTransfer(s);if(i===ur)return o.UNSIGNED_BYTE;if(i===Wf)return o.UNSIGNED_SHORT_4_4_4_4;if(i===Xf)return o.UNSIGNED_SHORT_5_5_5_1;if(i===b_)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===w_)return o.BYTE;if(i===A_)return o.SHORT;if(i===Ma)return o.UNSIGNED_SHORT;if(i===Gf)return o.INT;if(i===vs)return o.UNSIGNED_INT;if(i===Ti)return o.FLOAT;if(i===Aa)return o.HALF_FLOAT;if(i===R_)return o.ALPHA;if(i===C_)return o.RGB;if(i===ci)return o.RGBA;if(i===P_)return o.LUMINANCE;if(i===L_)return o.LUMINANCE_ALPHA;if(i===lo)return o.DEPTH_COMPONENT;if(i===_o)return o.DEPTH_STENCIL;if(i===jf)return o.RED;if(i===qf)return o.RED_INTEGER;if(i===I_)return o.RG;if(i===Yf)return o.RG_INTEGER;if(i===Kf)return o.RGBA_INTEGER;if(i===uc||i===dc||i===fc||i===hc)if(c===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===uc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===uc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===of||i===af||i===lf||i===cf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===of)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===af)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uf||i===df||i===ff)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===uf||i===df)return c===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ff)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hf||i===pf||i===mf||i===gf||i===_f||i===vf||i===xf||i===yf||i===Sf||i===Mf||i===Ef||i===Tf||i===wf||i===Af)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===hf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_f)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ef)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Af)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pc||i===bf||i===Rf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===pc)return c===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===D_||i===Cf||i===Pf||i===Lf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===pc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Cf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===go?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}class sw extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ar extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ow={type:"move"};class Fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,i),x=this._getHandJoint(h,E);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=m.position.distanceTo(g.position),y=.02,M=.005;h.inputState.pinching&&_>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(ow)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ar;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const aw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lw=`
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

}`;class cw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new nn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qr({vertexShader:aw,fragmentShader:lw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new un(new yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uw extends To{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",f=1,h=null,m=null,g=null,_=null,y=null,M=null;const E=new cw,S=t.getContextAttributes();let x=null,L=null;const I=[],A=[],q=new yt;let k=null;const U=new Ln;U.viewport=new Lt;const X=new Ln;X.viewport=new Lt;const C=[U,X],R=new sw;let z=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=I[Z];return ue===void 0&&(ue=new Fd,I[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=I[Z];return ue===void 0&&(ue=new Fd,I[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=I[Z];return ue===void 0&&(ue=new Fd,I[Z]=ue),ue.getHandSpace()};function J(Z){const ue=A.indexOf(Z.inputSource);if(ue===-1)return;const Te=I[ue];Te!==void 0&&(Te.update(Z.inputSource,Z.frame,h||c),Te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function fe(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",fe),s.removeEventListener("inputsourceschange",he);for(let Z=0;Z<I.length;Z++){const ue=A[Z];ue!==null&&(A[Z]=null,I[Z].disconnect(ue))}z=null,se=null,E.reset(),e.setRenderTarget(x),y=null,_=null,g=null,s=null,L=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(q.width,q.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){u=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",fe),s.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(q),s.renderState.layers===void 0){const ue={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new xs(y.framebufferWidth,y.framebufferHeight,{format:ci,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ue=null,Te=null,Se=null;S.depth&&(Se=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=S.stencil?_o:lo,Te=S.stencil?go:vs);const Ce={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:a};g=new XRWebGLBinding(s,t),_=g.createProjectionLayer(Ce),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new xs(_.textureWidth,_.textureHeight,{format:ci,type:ur,depthTexture:new q_(_.textureWidth,_.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await s.requestReferenceSpace(u),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function he(Z){for(let ue=0;ue<Z.removed.length;ue++){const Te=Z.removed[ue],Se=A.indexOf(Te);Se>=0&&(A[Se]=null,I[Se].disconnect(Te))}for(let ue=0;ue<Z.added.length;ue++){const Te=Z.added[ue];let Se=A.indexOf(Te);if(Se===-1){for(let ze=0;ze<I.length;ze++)if(ze>=A.length){A.push(Te),Se=ze;break}else if(A[ze]===null){A[ze]=Te,Se=ze;break}if(Se===-1)break}const Ce=I[Se];Ce&&Ce.connect(Te)}}const ae=new V,ce=new V;function B(Z,ue,Te){ae.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(Te.matrixWorld);const Se=ae.distanceTo(ce),Ce=ue.projectionMatrix.elements,ze=Te.projectionMatrix.elements,nt=Ce[14]/(Ce[10]-1),Ct=Ce[14]/(Ce[10]+1),me=(Ce[9]+1)/Ce[5],xe=(Ce[9]-1)/Ce[5],F=(Ce[8]-1)/Ce[0],Je=(ze[8]+1)/ze[0],Xe=nt*F,Le=nt*Je,De=Se/(-F+Je),ut=De*-F;if(ue.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ut),Z.translateZ(De),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ce[10]===-1)Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const ke=nt+De,P=Ct+De,w=Xe-ut,K=Le+(Se-ut),de=me*Ct/P*ke,ge=xe*Ct/P*ke;Z.projectionMatrix.makePerspective(w,K,de,ge,ke,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ue=Z.near,Te=Z.far;E.texture!==null&&(E.depthNear>0&&(ue=E.depthNear),E.depthFar>0&&(Te=E.depthFar)),R.near=X.near=U.near=ue,R.far=X.far=U.far=Te,(z!==R.near||se!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,se=R.far),U.layers.mask=Z.layers.mask|2,X.layers.mask=Z.layers.mask|4,R.layers.mask=U.layers.mask|X.layers.mask;const Se=Z.parent,Ce=R.cameras;le(R,Se);for(let ze=0;ze<Ce.length;ze++)le(Ce[ze],Se);Ce.length===2?B(R,U,X):R.projectionMatrix.copy(U.projectionMatrix),ie(Z,R,Se)};function ie(Z,ue,Te){Te===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(Te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=vo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&y===null))return f},this.setFoveation=function(Z){f=Z,_!==null&&(_.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let N=null;function ne(Z,ue){if(m=ue.getViewerPose(h||c),M=ue,m!==null){const Te=m.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let Se=!1;Te.length!==R.cameras.length&&(R.cameras.length=0,Se=!0);for(let ze=0;ze<Te.length;ze++){const nt=Te[ze];let Ct=null;if(y!==null)Ct=y.getViewport(nt);else{const xe=g.getViewSubImage(_,nt);Ct=xe.viewport,ze===0&&(e.setRenderTargetTextures(L,xe.colorTexture,_.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(L))}let me=C[ze];me===void 0&&(me=new Ln,me.layers.enable(ze),me.viewport=new Lt,C[ze]=me),me.matrix.fromArray(nt.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(nt.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ze===0&&(R.matrix.copy(me.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Se===!0&&R.cameras.push(me)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const ze=g.getDepthInformation(Te[0]);ze&&ze.isValid&&ze.texture&&E.init(e,ze,s.renderState)}}for(let Te=0;Te<I.length;Te++){const Se=A[Te],Ce=I[Te];Se!==null&&Ce!==void 0&&Ce.update(Se,ue,h||c)}N&&N(Z,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),M=null}const Oe=new j_;Oe.setAnimationLoop(ne),this.setAnimationLoop=function(Z){N=Z},this.dispose=function(){}}}const hs=new Ri,dw=new mt;function fw(o,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,G_(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,L,I,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(S,x):x.isMeshToonMaterial?(a(S,x),g(S,x)):x.isMeshPhongMaterial?(a(S,x),m(S,x)):x.isMeshStandardMaterial?(a(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,A)):x.isMeshMatcapMaterial?(a(S,x),M(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),E(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&u(S,x)):x.isPointsMaterial?f(S,x,L,I):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Vn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Vn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const L=e.get(x),I=L.envMap,A=L.envMapRotation;I&&(S.envMap.value=I,hs.copy(A),hs.x*=-1,hs.y*=-1,hs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),S.envMapRotation.value.setFromMatrix4(dw.makeRotationFromEuler(hs)),S.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function u(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function f(S,x,L,I){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=I*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Vn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function E(S,x){const L=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function hw(o,e,t,i){let s={},a={},c=[];const u=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function f(L,I){const A=I.program;i.uniformBlockBinding(L,A)}function h(L,I){let A=s[L.id];A===void 0&&(M(L),A=m(L),s[L.id]=A,L.addEventListener("dispose",S));const q=I.program;i.updateUBOMapping(L,q);const k=e.render.frame;a[L.id]!==k&&(_(L),a[L.id]=k)}function m(L){const I=g();L.__bindingPointIndex=I;const A=o.createBuffer(),q=L.__size,k=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,q,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,I,A),A}function g(){for(let L=0;L<u;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const I=s[L.id],A=L.uniforms,q=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,I);for(let k=0,U=A.length;k<U;k++){const X=Array.isArray(A[k])?A[k]:[A[k]];for(let C=0,R=X.length;C<R;C++){const z=X[C];if(y(z,k,C,q)===!0){const se=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let fe=0;for(let he=0;he<J.length;he++){const ae=J[he],ce=E(ae);typeof ae=="number"||typeof ae=="boolean"?(z.__data[0]=ae,o.bufferSubData(o.UNIFORM_BUFFER,se+fe,z.__data)):ae.isMatrix3?(z.__data[0]=ae.elements[0],z.__data[1]=ae.elements[1],z.__data[2]=ae.elements[2],z.__data[3]=0,z.__data[4]=ae.elements[3],z.__data[5]=ae.elements[4],z.__data[6]=ae.elements[5],z.__data[7]=0,z.__data[8]=ae.elements[6],z.__data[9]=ae.elements[7],z.__data[10]=ae.elements[8],z.__data[11]=0):(ae.toArray(z.__data,fe),fe+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,se,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(L,I,A,q){const k=L.value,U=I+"_"+A;if(q[U]===void 0)return typeof k=="number"||typeof k=="boolean"?q[U]=k:q[U]=k.clone(),!0;{const X=q[U];if(typeof k=="number"||typeof k=="boolean"){if(X!==k)return q[U]=k,!0}else if(X.equals(k)===!1)return X.copy(k),!0}return!1}function M(L){const I=L.uniforms;let A=0;const q=16;for(let U=0,X=I.length;U<X;U++){const C=Array.isArray(I[U])?I[U]:[I[U]];for(let R=0,z=C.length;R<z;R++){const se=C[R],J=Array.isArray(se.value)?se.value:[se.value];for(let fe=0,he=J.length;fe<he;fe++){const ae=J[fe],ce=E(ae),B=A%q,le=B%ce.boundary,ie=B+le;A+=le,ie!==0&&q-ie<ce.storage&&(A+=q-ie),se.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=A,A+=ce.storage}}}const k=A%q;return k>0&&(A+=q-k),L.__size=A,L.__cache={},this}function E(L){const I={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(I.boundary=4,I.storage=4):L.isVector2?(I.boundary=8,I.storage=8):L.isVector3||L.isColor?(I.boundary=16,I.storage=12):L.isVector4?(I.boundary=16,I.storage=16):L.isMatrix3?(I.boundary=48,I.storage=48):L.isMatrix4?(I.boundary=64,I.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),I}function S(L){const I=L.target;I.removeEventListener("dispose",S);const A=c.indexOf(I.__bindingPointIndex);c.splice(A,1),o.deleteBuffer(s[I.id]),delete s[I.id],delete a[I.id]}function x(){for(const L in s)o.deleteBuffer(s[L]);c=[],s={},a={}}return{bind:f,update:h,dispose:x}}class pw{constructor(e={}){const{canvas:t=ny(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,x=null;const L=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=jr,this.toneMappingExposure=1;const A=this;let q=!1,k=0,U=0,X=null,C=-1,R=null;const z=new Lt,se=new Lt;let J=null;const fe=new ct(0);let he=0,ae=t.width,ce=t.height,B=1,le=null,ie=null;const N=new Lt(0,0,ae,ce),ne=new Lt(0,0,ae,ce);let Oe=!1;const Z=new Qf;let ue=!1,Te=!1;const Se=new mt,Ce=new mt,ze=new V,nt=new Lt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function xe(){return X===null?B:1}let F=i;function Je(b,W){return t.getContext(b,W)}try{const b={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vf}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),F===null){const W="webgl2";if(F=Je(W,b),F===null)throw Je(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Xe,Le,De,ut,ke,P,w,K,de,ge,re,Ve,Re,Fe,ht,Me,He,tt,Ke,Ge,at,dt,It,G;function Pe(){Xe=new xE(F),Xe.init(),dt=new rw(F,Xe),Le=new hE(F,Xe,e,dt),De=new tw(F,Xe),Le.reverseDepthBuffer&&_&&De.buffers.depth.setReversed(!0),ut=new ME(F),ke=new zT,P=new iw(F,Xe,De,ke,Le,dt,ut),w=new mE(A),K=new vE(A),de=new Cy(F),It=new dE(F,de),ge=new yE(F,de,ut,It),re=new TE(F,ge,de,ut),Ke=new EE(F,Le,P),Me=new pE(ke),Ve=new BT(A,w,K,Xe,Le,It,Me),Re=new fw(A,ke),Fe=new VT,ht=new YT(Xe),tt=new uE(A,w,K,De,re,y,f),He=new JT(A,re,Le),G=new hw(F,ut,Le,De),Ge=new fE(F,Xe,ut),at=new SE(F,Xe,ut),ut.programs=Ve.programs,A.capabilities=Le,A.extensions=Xe,A.properties=ke,A.renderLists=Fe,A.shadowMap=He,A.state=De,A.info=ut}Pe();const oe=new uw(A,F);this.xr=oe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=Xe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Xe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(ae,ce,!1))},this.getSize=function(b){return b.set(ae,ce)},this.setSize=function(b,W,ee=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=b,ce=W,t.width=Math.floor(b*B),t.height=Math.floor(W*B),ee===!0&&(t.style.width=b+"px",t.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(ae*B,ce*B).floor()},this.setDrawingBufferSize=function(b,W,ee){ae=b,ce=W,B=ee,t.width=Math.floor(b*ee),t.height=Math.floor(W*ee),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(N)},this.setViewport=function(b,W,ee,te){b.isVector4?N.set(b.x,b.y,b.z,b.w):N.set(b,W,ee,te),De.viewport(z.copy(N).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(ne)},this.setScissor=function(b,W,ee,te){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,W,ee,te),De.scissor(se.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(b){De.setScissorTest(Oe=b)},this.setOpaqueSort=function(b){le=b},this.setTransparentSort=function(b){ie=b},this.getClearColor=function(b){return b.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(b=!0,W=!0,ee=!0){let te=0;if(b){let j=!1;if(X!==null){const be=X.texture.format;j=be===Kf||be===Yf||be===qf}if(j){const be=X.texture.type,we=be===ur||be===vs||be===Ma||be===go||be===Wf||be===Xf,$e=tt.getClearColor(),qe=tt.getClearAlpha(),st=$e.r,lt=$e.g,Ze=$e.b;we?(M[0]=st,M[1]=lt,M[2]=Ze,M[3]=qe,F.clearBufferuiv(F.COLOR,0,M)):(E[0]=st,E[1]=lt,E[2]=Ze,E[3]=qe,F.clearBufferiv(F.COLOR,0,E))}else te|=F.COLOR_BUFFER_BIT}W&&(te|=F.DEPTH_BUFFER_BIT),ee&&(te|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Fe.dispose(),ht.dispose(),ke.dispose(),w.dispose(),K.dispose(),re.dispose(),It.dispose(),G.dispose(),Ve.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Ss),oe.removeEventListener("sessionend",dr),zi.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const b=ut.autoReset,W=He.enabled,ee=He.autoUpdate,te=He.needsUpdate,j=He.type;Pe(),ut.autoReset=b,He.enabled=W,He.autoUpdate=ee,He.needsUpdate=te,He.type=j}function Ne(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ft(b){const W=b.target;W.removeEventListener("dispose",ft),Bt(W)}function Bt(b){Qt(b),ke.remove(b)}function Qt(b){const W=ke.get(b).programs;W!==void 0&&(W.forEach(function(ee){Ve.releaseProgram(ee)}),b.isShaderMaterial&&Ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,ee,te,j,be){W===null&&(W=Ct);const we=j.isMesh&&j.matrixWorld.determinant()<0,$e=Ia(b,W,ee,te,j);De.setMaterial(te,we);let qe=ee.index,st=1;if(te.wireframe===!0){if(qe=ge.getWireframeAttribute(ee),qe===void 0)return;st=2}const lt=ee.drawRange,Ze=ee.attributes.position;let Tt=lt.start*st,Pt=(lt.start+lt.count)*st;be!==null&&(Tt=Math.max(Tt,be.start*st),Pt=Math.min(Pt,(be.start+be.count)*st)),qe!==null?(Tt=Math.max(Tt,0),Pt=Math.min(Pt,qe.count)):Ze!=null&&(Tt=Math.max(Tt,0),Pt=Math.min(Pt,Ze.count));const Mt=Pt-Tt;if(Mt<0||Mt===1/0)return;It.setup(j,te,$e,ee,qe);let pn,pt=Ge;if(qe!==null&&(pn=de.get(qe),pt=at,pt.setIndex(pn)),j.isMesh)te.wireframe===!0?(De.setLineWidth(te.wireframeLinewidth*xe()),pt.setMode(F.LINES)):pt.setMode(F.TRIANGLES);else if(j.isLine){let et=te.linewidth;et===void 0&&(et=1),De.setLineWidth(et*xe()),j.isLineSegments?pt.setMode(F.LINES):j.isLineLoop?pt.setMode(F.LINE_LOOP):pt.setMode(F.LINE_STRIP)}else j.isPoints?pt.setMode(F.POINTS):j.isSprite&&pt.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)pt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))pt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const et=j._multiDrawStarts,ui=j._multiDrawCounts,bt=j._multiDrawCount,mn=qe?de.get(qe).bytesPerElement:1,di=ke.get(te).currentProgram.getUniforms();for(let Jt=0;Jt<bt;Jt++)di.setValue(F,"_gl_DrawID",Jt),pt.render(et[Jt]/mn,ui[Jt])}else if(j.isInstancedMesh)pt.renderInstances(Tt,Mt,j.count);else if(ee.isInstancedBufferGeometry){const et=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,ui=Math.min(ee.instanceCount,et);pt.renderInstances(Tt,Mt,ui)}else pt.render(Tt,Mt)};function wt(b,W,ee){b.transparent===!0&&b.side===li&&b.forceSinglePass===!1?(b.side=Vn,b.needsUpdate=!0,Ms(b,W,ee),b.side=cr,b.needsUpdate=!0,Ms(b,W,ee),b.side=li):Ms(b,W,ee)}this.compile=function(b,W,ee=null){ee===null&&(ee=b),x=ht.get(ee),x.init(W),I.push(x),ee.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),b!==ee&&b.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const te=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const be=j.material;if(be)if(Array.isArray(be))for(let we=0;we<be.length;we++){const $e=be[we];wt($e,ee,j),te.add($e)}else wt(be,ee,j),te.add(be)}),I.pop(),x=null,te},this.compileAsync=function(b,W,ee=null){const te=this.compile(b,W,ee);return new Promise(j=>{function be(){if(te.forEach(function(we){ke.get(we).currentProgram.isReady()&&te.delete(we)}),te.size===0){j(b);return}setTimeout(be,10)}Xe.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Nn=null;function wn(b){Nn&&Nn(b)}function Ss(){zi.stop()}function dr(){zi.start()}const zi=new j_;zi.setAnimationLoop(wn),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(b){Nn=b,oe.setAnimationLoop(b),b===null?zi.stop():zi.start()},oe.addEventListener("sessionstart",Ss),oe.addEventListener("sessionend",dr),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(W),W=oe.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,W,X),x=ht.get(b,I.length),x.init(W),I.push(x),Ce.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(Ce),Te=this.localClippingEnabled,ue=Me.init(this.clippingPlanes,Te),S=Fe.get(b,L.length),S.init(),L.push(S),oe.enabled===!0&&oe.isPresenting===!0){const be=A.xr.getDepthSensingMesh();be!==null&&Hi(be,W,-1/0,A.sortObjects)}Hi(b,W,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(le,ie),me=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,me&&tt.addToRenderList(S,b),this.info.render.frame++,ue===!0&&Me.beginShadows();const ee=x.state.shadowsArray;He.render(ee,b,W),ue===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=S.opaque,j=S.transmissive;if(x.setupLights(),W.isArrayCamera){const be=W.cameras;if(j.length>0)for(let we=0,$e=be.length;we<$e;we++){const qe=be[we];Kr(te,j,b,qe)}me&&tt.render(b);for(let we=0,$e=be.length;we<$e;we++){const qe=be[we];Yr(S,b,qe,qe.viewport)}}else j.length>0&&Kr(te,j,b,W),me&&tt.render(b),Yr(S,b,W);X!==null&&(P.updateMultisampleRenderTarget(X),P.updateRenderTargetMipmap(X)),b.isScene===!0&&b.onAfterRender(A,b,W),It.resetDefaultState(),C=-1,R=null,I.pop(),I.length>0?(x=I[I.length-1],ue===!0&&Me.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Hi(b,W,ee,te){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)ee=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){te&&nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ce);const we=re.update(b),$e=b.material;$e.visible&&S.push(b,we,$e,ee,nt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){const we=re.update(b),$e=b.material;if(te&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),nt.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),nt.copy(we.boundingSphere.center)),nt.applyMatrix4(b.matrixWorld).applyMatrix4(Ce)),Array.isArray($e)){const qe=we.groups;for(let st=0,lt=qe.length;st<lt;st++){const Ze=qe[st],Tt=$e[Ze.materialIndex];Tt&&Tt.visible&&S.push(b,we,Tt,ee,nt.z,Ze)}}else $e.visible&&S.push(b,we,$e,ee,nt.z,null)}}const be=b.children;for(let we=0,$e=be.length;we<$e;we++)Hi(be[we],W,ee,te)}function Yr(b,W,ee,te){const j=b.opaque,be=b.transmissive,we=b.transparent;x.setupLightsView(ee),ue===!0&&Me.setGlobalState(A.clippingPlanes,ee),te&&De.viewport(z.copy(te)),j.length>0&&fr(j,W,ee),be.length>0&&fr(be,W,ee),we.length>0&&fr(we,W,ee),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Kr(b,W,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[te.id]===void 0&&(x.state.transmissionRenderTarget[te.id]=new xs(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Aa:ur,minFilter:sr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const be=x.state.transmissionRenderTarget[te.id],we=te.viewport||z;be.setSize(we.z,we.w);const $e=A.getRenderTarget();A.setRenderTarget(be),A.getClearColor(fe),he=A.getClearAlpha(),he<1&&A.setClearColor(16777215,.5),A.clear(),me&&tt.render(ee);const qe=A.toneMapping;A.toneMapping=jr;const st=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),x.setupLightsView(te),ue===!0&&Me.setGlobalState(A.clippingPlanes,te),fr(b,ee,te),P.updateMultisampleRenderTarget(be),P.updateRenderTargetMipmap(be),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Ze=0,Tt=W.length;Ze<Tt;Ze++){const Pt=W[Ze],Mt=Pt.object,pn=Pt.geometry,pt=Pt.material,et=Pt.group;if(pt.side===li&&Mt.layers.test(te.layers)){const ui=pt.side;pt.side=Vn,pt.needsUpdate=!0,Pa(Mt,ee,te,pn,pt,et),pt.side=ui,pt.needsUpdate=!0,lt=!0}}lt===!0&&(P.updateMultisampleRenderTarget(be),P.updateRenderTargetMipmap(be))}A.setRenderTarget($e),A.setClearColor(fe,he),st!==void 0&&(te.viewport=st),A.toneMapping=qe}function fr(b,W,ee){const te=W.isScene===!0?W.overrideMaterial:null;for(let j=0,be=b.length;j<be;j++){const we=b[j],$e=we.object,qe=we.geometry,st=te===null?we.material:te,lt=we.group;$e.layers.test(ee.layers)&&Pa($e,W,ee,qe,st,lt)}}function Pa(b,W,ee,te,j,be){b.onBeforeRender(A,W,ee,te,j,be),b.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(A,W,ee,te,b,be),j.transparent===!0&&j.side===li&&j.forceSinglePass===!1?(j.side=Vn,j.needsUpdate=!0,A.renderBufferDirect(ee,W,te,j,b,be),j.side=cr,j.needsUpdate=!0,A.renderBufferDirect(ee,W,te,j,b,be),j.side=li):A.renderBufferDirect(ee,W,te,j,b,be),b.onAfterRender(A,W,ee,te,j,be)}function Ms(b,W,ee){W.isScene!==!0&&(W=Ct);const te=ke.get(b),j=x.state.lights,be=x.state.shadowsArray,we=j.state.version,$e=Ve.getParameters(b,j.state,be,W,ee),qe=Ve.getProgramCacheKey($e);let st=te.programs;te.environment=b.isMeshStandardMaterial?W.environment:null,te.fog=W.fog,te.envMap=(b.isMeshStandardMaterial?K:w).get(b.envMap||te.environment),te.envMapRotation=te.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,st===void 0&&(b.addEventListener("dispose",ft),st=new Map,te.programs=st);let lt=st.get(qe);if(lt!==void 0){if(te.currentProgram===lt&&te.lightsStateVersion===we)return Ci(b,$e),lt}else $e.uniforms=Ve.getUniforms(b),b.onBeforeCompile($e,A),lt=Ve.acquireProgram($e,qe),st.set(qe,lt),te.uniforms=$e.uniforms;const Ze=te.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ze.clippingPlanes=Me.uniform),Ci(b,$e),te.needsLights=Ac(b),te.lightsStateVersion=we,te.needsLights&&(Ze.ambientLightColor.value=j.state.ambient,Ze.lightProbe.value=j.state.probe,Ze.directionalLights.value=j.state.directional,Ze.directionalLightShadows.value=j.state.directionalShadow,Ze.spotLights.value=j.state.spot,Ze.spotLightShadows.value=j.state.spotShadow,Ze.rectAreaLights.value=j.state.rectArea,Ze.ltc_1.value=j.state.rectAreaLTC1,Ze.ltc_2.value=j.state.rectAreaLTC2,Ze.pointLights.value=j.state.point,Ze.pointLightShadows.value=j.state.pointShadow,Ze.hemisphereLights.value=j.state.hemi,Ze.directionalShadowMap.value=j.state.directionalShadowMap,Ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ze.spotShadowMap.value=j.state.spotShadowMap,Ze.spotLightMatrix.value=j.state.spotLightMatrix,Ze.spotLightMap.value=j.state.spotLightMap,Ze.pointShadowMap.value=j.state.pointShadowMap,Ze.pointShadowMatrix.value=j.state.pointShadowMatrix),te.currentProgram=lt,te.uniformsList=null,lt}function La(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=mc.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function Ci(b,W){const ee=ke.get(b);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function Ia(b,W,ee,te,j){W.isScene!==!0&&(W=Ct),P.resetTextureUnits();const be=W.fog,we=te.isMeshStandardMaterial?W.environment:null,$e=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Tn,qe=(te.isMeshStandardMaterial?K:w).get(te.envMap||we),st=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,lt=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ze=!!ee.morphAttributes.position,Tt=!!ee.morphAttributes.normal,Pt=!!ee.morphAttributes.color;let Mt=jr;te.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Mt=A.toneMapping);const pn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,pt=pn!==void 0?pn.length:0,et=ke.get(te),ui=x.state.lights;if(ue===!0&&(Te===!0||b!==R)){const An=b===R&&te.id===C;Me.setState(te,b,An)}let bt=!1;te.version===et.__version?(et.needsLights&&et.lightsStateVersion!==ui.state.version||et.outputColorSpace!==$e||j.isBatchedMesh&&et.batching===!1||!j.isBatchedMesh&&et.batching===!0||j.isBatchedMesh&&et.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&et.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&et.instancing===!1||!j.isInstancedMesh&&et.instancing===!0||j.isSkinnedMesh&&et.skinning===!1||!j.isSkinnedMesh&&et.skinning===!0||j.isInstancedMesh&&et.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&et.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&et.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&et.instancingMorph===!1&&j.morphTexture!==null||et.envMap!==qe||te.fog===!0&&et.fog!==be||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Me.numPlanes||et.numIntersection!==Me.numIntersection)||et.vertexAlphas!==st||et.vertexTangents!==lt||et.morphTargets!==Ze||et.morphNormals!==Tt||et.morphColors!==Pt||et.toneMapping!==Mt||et.morphTargetsCount!==pt)&&(bt=!0):(bt=!0,et.__version=te.version);let mn=et.currentProgram;bt===!0&&(mn=Ms(te,W,j));let di=!1,Jt=!1,Pi=!1;const Ot=mn.getUniforms(),Qn=et.uniforms;if(De.useProgram(mn.program)&&(di=!0,Jt=!0,Pi=!0),te.id!==C&&(C=te.id,Jt=!0),di||R!==b){De.buffers.depth.getReversed()?(Se.copy(b.projectionMatrix),ry(Se),sy(Se),Ot.setValue(F,"projectionMatrix",Se)):Ot.setValue(F,"projectionMatrix",b.projectionMatrix),Ot.setValue(F,"viewMatrix",b.matrixWorldInverse);const Jn=Ot.map.cameraPosition;Jn!==void 0&&Jn.setValue(F,ze.setFromMatrixPosition(b.matrixWorld)),Le.logarithmicDepthBuffer&&Ot.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ot.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Jt=!0,Pi=!0)}if(j.isSkinnedMesh){Ot.setOptional(F,j,"bindMatrix"),Ot.setOptional(F,j,"bindMatrixInverse");const An=j.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ot.setValue(F,"boneTexture",An.boneTexture,P))}j.isBatchedMesh&&(Ot.setOptional(F,j,"batchingTexture"),Ot.setValue(F,"batchingTexture",j._matricesTexture,P),Ot.setOptional(F,j,"batchingIdTexture"),Ot.setValue(F,"batchingIdTexture",j._indirectTexture,P),Ot.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Ot.setValue(F,"batchingColorTexture",j._colorsTexture,P));const Vi=ee.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&Ke.update(j,ee,mn),(Jt||et.receiveShadow!==j.receiveShadow)&&(et.receiveShadow=j.receiveShadow,Ot.setValue(F,"receiveShadow",j.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Qn.envMap.value=qe,Qn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&W.environment!==null&&(Qn.envMapIntensity.value=W.environmentIntensity),Jt&&(Ot.setValue(F,"toneMappingExposure",A.toneMappingExposure),et.needsLights&&Da(Qn,Pi),be&&te.fog===!0&&Re.refreshFogUniforms(Qn,be),Re.refreshMaterialUniforms(Qn,te,B,ce,x.state.transmissionRenderTarget[b.id]),mc.upload(F,La(et),Qn,P)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(mc.upload(F,La(et),Qn,P),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ot.setValue(F,"center",j.center),Ot.setValue(F,"modelViewMatrix",j.modelViewMatrix),Ot.setValue(F,"normalMatrix",j.normalMatrix),Ot.setValue(F,"modelMatrix",j.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const An=te.uniformsGroups;for(let Jn=0,Un=An.length;Jn<Un;Jn++){const Na=An[Jn];G.update(Na,mn),G.bind(Na,mn)}}return mn}function Da(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function Ac(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(b,W,ee){ke.get(b.texture).__webglTexture=W,ke.get(b.depthTexture).__webglTexture=ee;const te=ke.get(b);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,W){const ee=ke.get(b);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,ee=0){X=b,k=W,U=ee;let te=!0,j=null,be=!1,we=!1;if(b){const qe=ke.get(b);if(qe.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(F.FRAMEBUFFER,null),te=!1;else if(qe.__webglFramebuffer===void 0)P.setupRenderTarget(b);else if(qe.__hasExternalTextures)P.rebindTextures(b,ke.get(b.texture).__webglTexture,ke.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ze=b.depthTexture;if(qe.__boundDepthTexture!==Ze){if(Ze!==null&&ke.has(Ze)&&(b.width!==Ze.image.width||b.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(b)}}const st=b.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(we=!0);const lt=ke.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(lt[W])?j=lt[W][ee]:j=lt[W],be=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?j=ke.get(b).__webglMultisampledFramebuffer:Array.isArray(lt)?j=lt[ee]:j=lt,z.copy(b.viewport),se.copy(b.scissor),J=b.scissorTest}else z.copy(N).multiplyScalar(B).floor(),se.copy(ne).multiplyScalar(B).floor(),J=Oe;if(De.bindFramebuffer(F.FRAMEBUFFER,j)&&te&&De.drawBuffers(b,j),De.viewport(z),De.scissor(se),De.setScissorTest(J),be){const qe=ke.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,qe.__webglTexture,ee)}else if(we){const qe=ke.get(b.texture),st=W||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,qe.__webglTexture,ee||0,st)}C=-1},this.readRenderTargetPixels=function(b,W,ee,te,j,be,we){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=ke.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&($e=$e[we]),$e){De.bindFramebuffer(F.FRAMEBUFFER,$e);try{const qe=b.texture,st=qe.format,lt=qe.type;if(!Le.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-te&&ee>=0&&ee<=b.height-j&&F.readPixels(W,ee,te,j,dt.convert(st),dt.convert(lt),be)}finally{const qe=X!==null?ke.get(X).__webglFramebuffer:null;De.bindFramebuffer(F.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(b,W,ee,te,j,be,we){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=ke.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&($e=$e[we]),$e){const qe=b.texture,st=qe.format,lt=qe.type;if(!Le.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=b.width-te&&ee>=0&&ee<=b.height-j){De.bindFramebuffer(F.FRAMEBUFFER,$e);const Ze=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ze),F.bufferData(F.PIXEL_PACK_BUFFER,be.byteLength,F.STREAM_READ),F.readPixels(W,ee,te,j,dt.convert(st),dt.convert(lt),0);const Tt=X!==null?ke.get(X).__webglFramebuffer:null;De.bindFramebuffer(F.FRAMEBUFFER,Tt);const Pt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await iy(F,Pt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ze),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,be),F.deleteBuffer(Ze),F.deleteSync(Pt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,W=null,ee=0){b.isTexture!==!0&&(_a("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1]);const te=Math.pow(2,-ee),j=Math.floor(b.image.width*te),be=Math.floor(b.image.height*te),we=W!==null?W.x:0,$e=W!==null?W.y:0;P.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,ee,0,0,we,$e,j,be),De.unbindTexture()},this.copyTextureToTexture=function(b,W,ee=null,te=null,j=0){b.isTexture!==!0&&(_a("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,b=arguments[1],W=arguments[2],j=arguments[3]||0,ee=null);let be,we,$e,qe,st,lt,Ze,Tt,Pt;const Mt=b.isCompressedTexture?b.mipmaps[j]:b.image;ee!==null?(be=ee.max.x-ee.min.x,we=ee.max.y-ee.min.y,$e=ee.isBox3?ee.max.z-ee.min.z:1,qe=ee.min.x,st=ee.min.y,lt=ee.isBox3?ee.min.z:0):(be=Mt.width,we=Mt.height,$e=Mt.depth||1,qe=0,st=0,lt=0),te!==null?(Ze=te.x,Tt=te.y,Pt=te.z):(Ze=0,Tt=0,Pt=0);const pn=dt.convert(W.format),pt=dt.convert(W.type);let et;W.isData3DTexture?(P.setTexture3D(W,0),et=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),et=F.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),et=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const ui=F.getParameter(F.UNPACK_ROW_LENGTH),bt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),mn=F.getParameter(F.UNPACK_SKIP_PIXELS),di=F.getParameter(F.UNPACK_SKIP_ROWS),Jt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,qe),F.pixelStorei(F.UNPACK_SKIP_ROWS,st),F.pixelStorei(F.UNPACK_SKIP_IMAGES,lt);const Pi=b.isDataArrayTexture||b.isData3DTexture,Ot=W.isDataArrayTexture||W.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Qn=ke.get(b),Vi=ke.get(W),An=ke.get(Qn.__renderTarget),Jn=ke.get(Vi.__renderTarget);De.bindFramebuffer(F.READ_FRAMEBUFFER,An.__webglFramebuffer),De.bindFramebuffer(F.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Un=0;Un<$e;Un++)Pi&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.get(b).__webglTexture,j,lt+Un),b.isDepthTexture?(Ot&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.get(W).__webglTexture,j,Pt+Un),F.blitFramebuffer(qe,st,be,we,Ze,Tt,be,we,F.DEPTH_BUFFER_BIT,F.NEAREST)):Ot?F.copyTexSubImage3D(et,j,Ze,Tt,Pt+Un,qe,st,be,we):F.copyTexSubImage2D(et,j,Ze,Tt,Pt+Un,qe,st,be,we);De.bindFramebuffer(F.READ_FRAMEBUFFER,null),De.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ot?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(et,j,Ze,Tt,Pt,be,we,$e,pn,pt,Mt.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(et,j,Ze,Tt,Pt,be,we,$e,pn,Mt.data):F.texSubImage3D(et,j,Ze,Tt,Pt,be,we,$e,pn,pt,Mt):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,j,Ze,Tt,be,we,pn,pt,Mt.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,j,Ze,Tt,Mt.width,Mt.height,pn,Mt.data):F.texSubImage2D(F.TEXTURE_2D,j,Ze,Tt,be,we,pn,pt,Mt);F.pixelStorei(F.UNPACK_ROW_LENGTH,ui),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,mn),F.pixelStorei(F.UNPACK_SKIP_ROWS,di),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Jt),j===0&&W.generateMipmaps&&F.generateMipmap(et),De.unbindTexture()},this.copyTextureToTexture3D=function(b,W,ee=null,te=null,j=0){return b.isTexture!==!0&&(_a("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,b=arguments[2],W=arguments[3],j=arguments[4]||0),_a('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,W,ee,te,j)},this.initRenderTarget=function(b){ke.get(b).__webglFramebuffer===void 0&&P.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),De.unbindTexture()},this.resetState=function(){k=0,U=0,X=null,De.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}class mw extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Df,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Cn=new V;class th{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),a=Nt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new th(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vg=new V,Gg=new Lt,Wg=new Lt,_w=new V,Xg=new mt,nc=new V,Od=new Oi,jg=new mt,kd=new ba;class vw extends un{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wm,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,nc),this.boundingBox.expandByPoint(nc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Oi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,nc),this.boundingSphere.expandByPoint(nc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Od.copy(this.boundingSphere),Od.applyMatrix4(s),e.ray.intersectsSphere(Od)!==!1&&(jg.copy(s).invert(),kd.copy(e.ray).applyMatrix4(jg),!(this.boundingBox!==null&&kd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,kd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Lt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ax?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Gg.fromBufferAttribute(s.attributes.skinIndex,e),Wg.fromBufferAttribute(s.attributes.skinWeight,e),Vg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=Wg.getComponent(a);if(c!==0){const u=Gg.getComponent(a);Xg.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(_w.copy(Vg).applyMatrix4(Xg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Q_ extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class J_ extends nn{constructor(e=null,t=1,i=1,s,a,c,u,f,h=In,m=In,g,_){super(null,c,u,f,h,m,s,a,g,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qg=new mt,xw=new mt;class nh{constructor(e=[],t=[]){this.uuid=Ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new mt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:xw;qg.multiplyMatrices(u,t[a]),qg.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new nh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new J_(t,e,e,ci,Ti);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new Q_),this.bones.push(c),this.boneInverses.push(new mt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const u=i[s];e.boneInverses.push(u.toArray())}return e}}class Uf extends hn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const so=new mt,Yg=new mt,ic=[],Kg=new Fi,yw=new mt,ua=new un,da=new Oi;class Sw extends un{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Uf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,yw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,so),Kg.copy(e.boundingBox).applyMatrix4(so),this.boundingBox.union(Kg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,so),da.copy(e.boundingSphere).applyMatrix4(so),this.boundingSphere.union(da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(ua.geometry=this.geometry,ua.material=this.material,ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(i),e.ray.intersectsSphere(da)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,so),Yg.multiplyMatrices(i,so),ua.matrixWorld=Yg,ua.raycast(e,ic);for(let c=0,u=ic.length;c<u;c++){const f=ic[c];f.instanceId=a,f.object=this,t.push(f)}ic.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Uf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new J_(new Float32Array(s*this.count),s,this.count,jf,Ti));const a=this.morphTexture.source.data.data;let c=0;for(let h=0;h<i.length;h++)c+=i[h];const u=this.geometry.morphTargetsRelative?1:1-c,f=s*e;a[f]=u,a.set(i,f+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class e0 extends bi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vc=new V,xc=new V,$g=new mt,fa=new ba,rc=new Oi,Bd=new V,Zg=new V;class ih extends Xt{constructor(e=new $n,t=new e0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)vc.fromBufferAttribute(t,s-1),xc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=vc.distanceTo(xc);e.setAttribute("lineDistance",new Dn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(s),rc.radius+=a,e.ray.intersectsSphere(rc)===!1)return;$g.copy(s).invert(),fa.copy(e.ray).applyMatrix4($g);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const y=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=y,S=M-1;E<S;E+=h){const x=m.getX(E),L=m.getX(E+1),I=sc(this,e,fa,f,x,L);I&&t.push(I)}if(this.isLineLoop){const E=m.getX(M-1),S=m.getX(y),x=sc(this,e,fa,f,E,S);x&&t.push(x)}}else{const y=Math.max(0,c.start),M=Math.min(_.count,c.start+c.count);for(let E=y,S=M-1;E<S;E+=h){const x=sc(this,e,fa,f,E,E+1);x&&t.push(x)}if(this.isLineLoop){const E=sc(this,e,fa,f,M-1,y);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function sc(o,e,t,i,s,a){const c=o.geometry.attributes.position;if(vc.fromBufferAttribute(c,s),xc.fromBufferAttribute(c,a),t.distanceSqToSegment(vc,xc,Bd,Zg)>i)return;Bd.applyMatrix4(o.matrixWorld);const f=e.ray.origin.distanceTo(Bd);if(!(f<e.near||f>e.far))return{distance:f,point:Zg.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}const Qg=new V,Jg=new V;class Mw extends ih{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)Qg.fromBufferAttribute(t,s),Jg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Qg.distanceTo(Jg);e.setAttribute("lineDistance",new Dn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ew extends ih{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class t0 extends bi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const e_=new mt,Ff=new ba,oc=new Oi,ac=new V;class Tw extends Xt{constructor(e=new $n,t=new t0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oc.copy(i.boundingSphere),oc.applyMatrix4(s),oc.radius+=a,e.ray.intersectsSphere(oc)===!1)return;e_.copy(s).invert(),Ff.copy(e.ray).applyMatrix4(e_);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=i.index,g=i.attributes.position;if(h!==null){const _=Math.max(0,c.start),y=Math.min(h.count,c.start+c.count);for(let M=_,E=y;M<E;M++){const S=h.getX(M);ac.fromBufferAttribute(g,S),t_(ac,S,f,s,e,t,this)}}else{const _=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let M=_,E=y;M<E;M++)ac.fromBufferAttribute(g,M),t_(ac,M,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function t_(o,e,t,i,s,a,c){const u=Ff.distanceSqToPoint(o);if(u<t){const f=new V;Ff.closestPointToPoint(o,f),f.applyMatrix4(i);const h=s.ray.origin.distanceTo(f);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class ww extends nn{constructor(e,t,i,s,a,c,u,f,h){super(e,t,i,s,a,c,u,f,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rh extends $n{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const a=[],c=[],u=[],f=[],h=new V,m=new yt;c.push(0,0,0),u.push(0,0,1),f.push(.5,.5);for(let g=0,_=3;g<=t;g++,_+=3){const y=i+g/t*s;h.x=e*Math.cos(y),h.y=e*Math.sin(y),c.push(h.x,h.y,h.z),u.push(0,0,1),m.x=(c[_]/e+1)/2,m.y=(c[_+1]/e+1)/2,f.push(m.x,m.y)}for(let g=1;g<=t;g++)a.push(g,g+1,0);this.setIndex(a),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(u,3)),this.setAttribute("uv",new Dn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yc extends $n{constructor(e=.5,t=1,i=32,s=1,a=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:c},i=Math.max(3,i),s=Math.max(1,s);const u=[],f=[],h=[],m=[];let g=e;const _=(t-e)/s,y=new V,M=new yt;for(let E=0;E<=s;E++){for(let S=0;S<=i;S++){const x=a+S/i*c;y.x=g*Math.cos(x),y.y=g*Math.sin(x),f.push(y.x,y.y,y.z),h.push(0,0,1),M.x=(y.x/t+1)/2,M.y=(y.y/t+1)/2,m.push(M.x,M.y)}g+=_}for(let E=0;E<s;E++){const S=E*(i+1);for(let x=0;x<i;x++){const L=x+S,I=L,A=L+i+1,q=L+i+2,k=L+1;u.push(I,A,k),u.push(A,q,k)}}this.setIndex(u),this.setAttribute("position",new Dn(f,3)),this.setAttribute("normal",new Dn(h,3)),this.setAttribute("uv",new Dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Aw extends bi{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new ct(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class sh extends bi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=U_,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ki extends sh{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return En(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function lc(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function bw(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Rw(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function n_(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const u=t[a]*e;for(let f=0;f!==e;++f)s[c++]=o[u+f]}return s}function n0(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class Ca{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let f=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cw extends Ca{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xm,endingEnd:Xm}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,u=s[a],f=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case jm:a=e,u=2*t-i;break;case qm:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=i}if(f===void 0)switch(this.getSettings_().endingEnd){case jm:c=e,f=2*i-t;break;case qm:c=1,f=i+s[1]-s[0];break;default:c=e-1,f=t}const h=(i-t)*.5,m=this.valueSize;this._weightPrev=h/(t-u),this._weightNext=h/(f-i),this._offsetPrev=a*m,this._offsetNext=c*m}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,h=f-u,m=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,y=this._weightNext,M=(i-t)/(s-t),E=M*M,S=E*M,x=-_*S+2*_*E-_*M,L=(1+_)*S+(-1.5-2*_)*E+(-.5+_)*M+1,I=(-1-y)*S+(1.5+y)*E+.5*M,A=y*S-y*E;for(let q=0;q!==u;++q)a[q]=x*c[m+q]+L*c[h+q]+I*c[f+q]+A*c[g+q];return a}}class Pw extends Ca{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,h=f-u,m=(i-t)/(s-t),g=1-m;for(let _=0;_!==u;++_)a[_]=c[h+_]*g+c[f+_]*m;return a}}class Lw extends Ca{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lc(t,this.TimeBufferType),this.values=lc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:lc(e.times,Array),values:lc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Lw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ea:t=this.InterpolantFactoryMethodDiscrete;break;case Ta:t=this.InterpolantFactoryMethodLinear;break;case cd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return Ta;case this.InterpolantFactoryMethodSmooth:return cd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const f=i[u];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,f),e=!1;break}if(c!==null&&c>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,f,c),e=!1;break}c=f}if(s!==void 0&&bw(s))for(let u=0,f=s.length;u!==f;++u){const h=s[u];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===cd,a=e.length-1;let c=1;for(let u=1;u<a;++u){let f=!1;const h=e[u],m=e[u+1];if(h!==m&&(u!==1||h!==e[0]))if(s)f=!0;else{const g=u*i,_=g-i,y=g+i;for(let M=0;M!==i;++M){const E=t[g+M];if(E!==t[_+M]||E!==t[y+M]){f=!0;break}}}if(f){if(u!==c){e[c]=e[u];const g=u*i,_=c*i;for(let y=0;y!==i;++y)t[_+y]=t[g+y]}++c}}if(a>0){e[c]=e[a];for(let u=a*i,f=c*i,h=0;h!==i;++h)t[f+h]=t[u+h];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Bi.prototype.TimeBufferType=Float32Array;Bi.prototype.ValueBufferType=Float32Array;Bi.prototype.DefaultInterpolation=Ta;class Ao extends Bi{constructor(e,t,i){super(e,t,i)}}Ao.prototype.ValueTypeName="bool";Ao.prototype.ValueBufferType=Array;Ao.prototype.DefaultInterpolation=Ea;Ao.prototype.InterpolantFactoryMethodLinear=void 0;Ao.prototype.InterpolantFactoryMethodSmooth=void 0;class i0 extends Bi{}i0.prototype.ValueTypeName="color";class So extends Bi{}So.prototype.ValueTypeName="number";class Iw extends Ca{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=(i-t)/(s-t);let h=e*u;for(let m=h+u;h!==m;h+=4)Mn.slerpFlat(a,0,c,h-u,c,h,f);return a}}class Mo extends Bi{InterpolantFactoryMethodLinear(e){return new Iw(this.times,this.values,this.getValueSize(),e)}}Mo.prototype.ValueTypeName="quaternion";Mo.prototype.InterpolantFactoryMethodSmooth=void 0;class bo extends Bi{constructor(e,t,i){super(e,t,i)}}bo.prototype.ValueTypeName="string";bo.prototype.ValueBufferType=Array;bo.prototype.DefaultInterpolation=Ea;bo.prototype.InterpolantFactoryMethodLinear=void 0;bo.prototype.InterpolantFactoryMethodSmooth=void 0;class Eo extends Bi{}Eo.prototype.ValueTypeName="vector";class Dw{constructor(e="",t=-1,i=[],s=bx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ai(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(Uw(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=i.length;a!==c;++a)t.push(Bi.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let u=0;u<a;u++){let f=[],h=[];f.push((u+a-1)%a,u,(u+1)%a),h.push(0,1,0);const m=Rw(f);f=n_(f,1,m),h=n_(h,1,m),!s&&f[0]===0&&(f.push(a),h.push(h[0])),c.push(new So(".morphTargetInfluences["+t[u].name+"]",f,h).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,f=e.length;u<f;u++){const h=e[u],m=h.name.match(a);if(m&&m.length>1){const g=m[1];let _=s[g];_||(s[g]=_=[]),_.push(h)}}const c=[];for(const u in s)c.push(this.CreateFromMorphTargetSequence(u,s[u],t,i));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(g,_,y,M,E){if(y.length!==0){const S=[],x=[];n0(y,S,x,M),S.length!==0&&E.push(new g(_,S,x))}},s=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let f=e.length||-1;const h=e.hierarchy||[];for(let g=0;g<h.length;g++){const _=h[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const y={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let E=0;E<_[M].morphTargets.length;E++)y[_[M].morphTargets[E]]=-1;for(const E in y){const S=[],x=[];for(let L=0;L!==_[M].morphTargets.length;++L){const I=_[M];S.push(I.time),x.push(I.morphTarget===E?1:0)}s.push(new So(".morphTargetInfluence["+E+"]",S,x))}f=y.length*c}else{const y=".bones["+t[g].name+"]";i(Eo,y+".position",_,"pos",s),i(Mo,y+".quaternion",_,"rot",s),i(Eo,y+".scale",_,"scl",s)}}return s.length===0?null:new this(a,f,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Nw(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return So;case"vector":case"vector2":case"vector3":case"vector4":return Eo;case"color":return i0;case"quaternion":return Mo;case"bool":case"boolean":return Ao;case"string":return bo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Uw(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Nw(o.type);if(o.times===void 0){const t=[],i=[];n0(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Wr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Fw{constructor(e,t,i){const s=this;let a=!1,c=0,u=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){u++,a===!1&&s.onStart!==void 0&&s.onStart(m,c,u),a=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,_=h.length;g<_;g+=2){const y=h[g],M=h[g+1];if(y.global&&(y.lastIndex=0),y.test(m))return M}return null}}}const Ow=new Fw;class ys{constructor(e){this.manager=e!==void 0?e:Ow,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const nr={};class kw extends Error{constructor(e,t){super(e),this.response=t}}class Sc extends ys{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Wr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(nr[e]!==void 0){nr[e].push({onLoad:t,onProgress:i,onError:s});return}nr[e]=[],nr[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=nr[e],g=h.body.getReader(),_=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),y=_?parseInt(_):0,M=y!==0;let E=0;const S=new ReadableStream({start(x){L();function L(){g.read().then(({done:I,value:A})=>{if(I)x.close();else{E+=A.byteLength;const q=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:y});for(let k=0,U=m.length;k<U;k++){const X=m[k];X.onProgress&&X.onProgress(q)}x.enqueue(A),L()}},I=>{x.error(I)})}}});return new Response(S)}else throw new kw(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(f){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,u));case"json":return h.json();default:if(u===void 0)return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),_=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(_);return h.arrayBuffer().then(M=>y.decode(M))}}}).then(h=>{Wr.add(e,h);const m=nr[e];delete nr[e];for(let g=0,_=m.length;g<_;g++){const y=m[g];y.onLoad&&y.onLoad(h)}}).catch(h=>{const m=nr[e];if(m===void 0)throw this.manager.itemError(e),h;delete nr[e];for(let g=0,_=m.length;g<_;g++){const y=m[g];y.onError&&y.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Bw extends ys{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Wr.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=wa("img");function f(){m(),Wr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(g){m(),s&&s(g),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){u.removeEventListener("load",f,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class zw extends ys{constructor(e){super(e)}load(e,t,i,s){const a=new nn,c=new Bw(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class wc extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const zd=new mt,i_=new V,r_=new V;class oh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qf,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;i_.setFromMatrixPosition(e.matrixWorld),t.position.copy(i_),r_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(r_),t.updateMatrixWorld(),zd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hw extends oh{constructor(){super(new Ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=vo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Vw extends wc{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new Hw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const s_=new mt,ha=new V,Hd=new V;class Gw extends oh{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),ha.setFromMatrixPosition(e.matrixWorld),i.position.copy(ha),Hd.copy(i.position),Hd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Hd),i.updateMatrixWorld(),s.makeTranslation(-ha.x,-ha.y,-ha.z),s_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(s_)}}class Ww extends wc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Gw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Xw extends oh{constructor(){super(new Jf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Of extends wc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Xw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jw extends wc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class qw extends ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Wr.get(e);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(h=>{t&&t(h),a.manager.itemEnd(e)}).catch(h=>{s&&s(h)});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader;const f=fetch(e,u).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){return Wr.add(e,h),t&&t(h),a.manager.itemEnd(e),h}).catch(function(h){s&&s(h),Wr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});Wr.add(e,f),a.manager.itemStart(e)}}const ah="\\[\\]\\.:\\/",Yw=new RegExp("["+ah+"]","g"),lh="[^"+ah+"]",Kw="[^"+ah.replace("\\.","")+"]",$w=/((?:WC+[\/:])*)/.source.replace("WC",lh),Zw=/(WCOD+)?/.source.replace("WCOD",Kw),Qw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),Jw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),e1=new RegExp("^"+$w+Zw+Qw+Jw+"$"),t1=["material","materials","bones","map"];class n1{constructor(e,t,i){const s=i||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ut{constructor(e,t,i){this.path=t,this.parsedPath=i||Ut.parseTrackName(t),this.node=Ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ut.Composite(e,t,i):new Ut(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yw,"")}static parseTrackName(e){const t=e1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);t1.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const f=i(u.children);if(f)return f}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===h){h=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const c=e[s];if(c===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ut.Composite=n1;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const o_=new mt;class Vd{constructor(e,t,i=0,s=1/0){this.ray=new ba(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Zf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return o_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(o_),this}intersectObject(e,t=!0,i=[]){return kf(e,this,i,t),i.sort(a_),i}intersectObjects(e,t=!0,i=[]){for(let s=0,a=e.length;s<a;s++)kf(e[s],this,i,t);return i.sort(a_),i}}function a_(o,e){return o.distance-e.distance}function kf(o,e,t,i){let s=!0;if(o.layers.test(e.layers)&&o.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const a=o.children;for(let c=0,u=a.length;c<u;c++)kf(a[c],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vf);function l_(o,e){if(e===Rx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===If||e===N_){let t=o.getIndex();if(t===null){const c=[],u=o.getAttribute("position");if(u!==void 0){for(let f=0;f<u.count;f++)c.push(f);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===If)for(let c=1;c<=i;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class i1 extends ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new l1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new v1(t)}),this.register(function(t){return new x1(t)}),this.register(function(t){return new y1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new f1(t)}),this.register(function(t){return new h1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new a1(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new g1(t)}),this.register(function(t){return new s1(t)}),this.register(function(t){return new S1(t)}),this.register(function(t){return new M1(t)})}load(e,t,i,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const h=Sa.extractUrlBase(e);c=Sa.resolveURL(h,this.path)}else c=Sa.extractUrlBase(e);this.manager.itemStart(e);const u=function(h){s?s(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},f=new Sc(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(h){try{a.parse(h,c,function(m){t(m),a.manager.itemEnd(e)},u)}catch(m){u(m)}},i,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const c={},u={},f=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===r0){try{c[St.KHR_BINARY_GLTF]=new E1(e)}catch(g){s&&s(g);return}a=JSON.parse(c[St.KHR_BINARY_GLTF].content)}else a=JSON.parse(f.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new F1(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const g=this.pluginCallbacks[m](h);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[g.name]=g,c[g.name]=!0}if(a.extensionsUsed)for(let m=0;m<a.extensionsUsed.length;++m){const g=a.extensionsUsed[m],_=a.extensionsRequired||[];switch(g){case St.KHR_MATERIALS_UNLIT:c[g]=new o1;break;case St.KHR_DRACO_MESH_COMPRESSION:c[g]=new T1(a,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:c[g]=new w1;break;case St.KHR_MESH_QUANTIZATION:c[g]=new A1;break;default:_.indexOf(g)>=0&&u[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}h.setExtensions(c),h.setPlugins(u),h.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function r1(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class s1{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,f=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const m=new ct(16777215);f.color!==void 0&&m.setRGB(f.color[0],f.color[1],f.color[2],Tn);const g=f.range!==void 0?f.range:0;switch(f.type){case"directional":h=new Of(m),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Ww(m),h.distance=g;break;case"spot":h=new Vw(m),h.distance=g,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,h.angle=f.spot.outerConeAngle,h.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return h.position.set(0,0,0),h.decay=2,rr(h,f),f.intensity!==void 0&&(h.intensity=f.intensity),h.name=t.createUniqueName(f.name||"light_"+e),s=Promise.resolve(h),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(f){return i._getNodeRef(t.cache,u,f)})}}class o1{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return wi}extendParams(e,t,i){const s=[];e.color=new ct(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],Tn),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,Kt))}return Promise.all(s)}}class a1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class l1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new yt(u,u)}return Promise.all(a)}}class c1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class u1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class d1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new ct(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=s.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],Tn)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",c.sheenColorTexture,Kt)),c.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class f1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class h1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new ct().setRGB(u[0],u[1],u[2],Tn),Promise.all(a)}}class p1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class m1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new ct().setRGB(u[0],u[1],u[2],Tn),c.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",c.specularColorTexture,Kt)),Promise.all(a)}}class g1{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(a)}}class _1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class v1{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class x1{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let f=i.textureLoader;if(u.uri){const h=i.options.manager.getHandler(u.uri);h!==null&&(f=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,c.source,f);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class y1{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let f=i.textureLoader;if(u.uri){const h=i.options.manager.getHandler(u.uri);h!==null&&(f=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,c.source,f);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class S1{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const f=s.byteOffset||0,h=s.byteLength||0,m=s.count,g=s.byteStride,_=new Uint8Array(u,f,h);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(m,g,_,s.mode,s.filter).then(function(y){return y.buffer}):c.ready.then(function(){const y=new ArrayBuffer(m*g);return c.decodeGltfBuffer(new Uint8Array(y),m,g,_,s.mode,s.filter),y})})}else return null}}class M1{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const h of s.primitives)if(h.mode!==ai.TRIANGLES&&h.mode!==ai.TRIANGLE_STRIP&&h.mode!==ai.TRIANGLE_FAN&&h.mode!==void 0)return null;const c=i.extensions[this.name].attributes,u=[],f={};for(const h in c)u.push(this.parser.getDependency("accessor",c[h]).then(m=>(f[h]=m,f[h])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(h=>{const m=h.pop(),g=m.isGroup?m.children:[m],_=h[0].count,y=[];for(const M of g){const E=new mt,S=new V,x=new Mn,L=new V(1,1,1),I=new Sw(M.geometry,M.material,_);for(let A=0;A<_;A++)f.TRANSLATION&&S.fromBufferAttribute(f.TRANSLATION,A),f.ROTATION&&x.fromBufferAttribute(f.ROTATION,A),f.SCALE&&L.fromBufferAttribute(f.SCALE,A),I.setMatrixAt(A,E.compose(S,x,L));for(const A in f)if(A==="_COLOR_0"){const q=f[A];I.instanceColor=new Uf(q.array,q.itemSize,q.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&M.geometry.setAttribute(A,f[A]);Xt.prototype.copy.call(I,M),this.parser.assignFinalMaterial(I),y.push(I)}return m.isGroup?(m.clear(),m.add(...y),m):y[0]}))}}const r0="glTF",pa=12,c_={JSON:1313821514,BIN:5130562};class E1{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,pa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==r0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-pa,a=new DataView(e,pa);let c=0;for(;c<s;){const u=a.getUint32(c,!0);c+=4;const f=a.getUint32(c,!0);if(c+=4,f===c_.JSON){const h=new Uint8Array(e,pa+c,u);this.content=i.decode(h)}else if(f===c_.BIN){const h=pa+c;this.body=e.slice(h,h+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class T1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},f={},h={};for(const m in c){const g=Bf[m]||m.toLowerCase();u[g]=c[m]}for(const m in e.attributes){const g=Bf[m]||m.toLowerCase();if(c[m]!==void 0){const _=i.accessors[e.attributes[m]],y=uo[_.componentType];h[g]=y.name,f[g]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(m){return new Promise(function(g,_){s.decodeDracoFile(m,function(y){for(const M in y.attributes){const E=y.attributes[M],S=f[M];S!==void 0&&(E.normalized=S)}g(y)},u,h,Tn,_)})})}}class w1{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class A1{constructor(){this.name=St.KHR_MESH_QUANTIZATION}}class s0 extends Ca{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=u*2,h=u*3,m=s-t,g=(i-t)/m,_=g*g,y=_*g,M=e*h,E=M-h,S=-2*y+3*_,x=y-_,L=1-S,I=x-_+g;for(let A=0;A!==u;A++){const q=c[E+A+u],k=c[E+A+f]*m,U=c[M+A+u],X=c[M+A]*m;a[A]=L*q+I*k+S*U+x*X}return a}}const b1=new Mn;class R1 extends s0{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return b1.fromArray(a).normalize().toArray(a),a}}const ai={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},uo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},u_={9728:In,9729:Kn,9984:T_,9985:cc,9986:ga,9987:sr},d_={33071:Gr,33648:gc,10497:mo},Gd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},kr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},C1={CUBICSPLINE:void 0,LINEAR:Ta,STEP:Ea},Wd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function P1(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new sh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:cr})),o.DefaultMaterial}function ps(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function rr(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function L1(o,e,t){let i=!1,s=!1,a=!1;for(let h=0,m=e.length;h<m;h++){const g=e[h];if(g.POSITION!==void 0&&(i=!0),g.NORMAL!==void 0&&(s=!0),g.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const c=[],u=[],f=[];for(let h=0,m=e.length;h<m;h++){const g=e[h];if(i){const _=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):o.attributes.position;c.push(_)}if(s){const _=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):o.attributes.normal;u.push(_)}if(a){const _=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):o.attributes.color;f.push(_)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f)]).then(function(h){const m=h[0],g=h[1],_=h[2];return i&&(o.morphAttributes.position=m),s&&(o.morphAttributes.normal=g),a&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function I1(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function D1(o){let e;const t=o.extensions&&o.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xd(t.attributes):e=o.indices+":"+Xd(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+Xd(o.targets[i]);return e}function Xd(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function zf(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function N1(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const U1=new mt;class F1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new r1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,c=-1;if(typeof navigator<"u"){const u=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(u)===!0;const f=u.match(/Version\/(\d+)/);s=i&&f?parseInt(f[1],10):-1,a=u.indexOf("Firefox")>-1,c=a?u.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&c<98?this.textureLoader=new zw(this.options.manager):this.textureLoader=new qw(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const u={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:i,userData:{}};return ps(a,u,s),rr(u,s),Promise.all(i._invokeAll(function(f){return f.afterRoot&&f.afterRoot(u)})).then(function(){for(const f of u.scenes)f.updateMatrixWorld();e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let u=0,f=c.length;u<f;u++)e[c[u]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(c,u)=>{const f=this.associations.get(c);f!=null&&this.associations.set(u,f);for(const[h,m]of c.children.entries())a(m,u.children[h])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){i.load(Sa.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=Gd[s.type],u=uo[s.componentType],f=s.normalized===!0,h=new u(s.count*c);return Promise.resolve(new hn(h,c,f))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],f=Gd[s.type],h=uo[s.componentType],m=h.BYTES_PER_ELEMENT,g=m*f,_=s.byteOffset||0,y=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let E,S;if(y&&y!==g){const x=Math.floor(_/y),L="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count;let I=t.cache.get(L);I||(E=new h(u,x*y,s.count*y/m),I=new gw(E,y/m),t.cache.add(L,I)),S=new th(I,f,_%y/m,M)}else u===null?E=new h(s.count*f):E=new h(u,_,s.count*f),S=new hn(E,f,M);if(s.sparse!==void 0){const x=Gd.SCALAR,L=uo[s.sparse.indices.componentType],I=s.sparse.indices.byteOffset||0,A=s.sparse.values.byteOffset||0,q=new L(c[1],I,s.sparse.count*x),k=new h(c[2],A,s.sparse.count*f);u!==null&&(S=new hn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let U=0,X=q.length;U<X;U++){const C=q[U];if(S.setX(C,k[U*f]),f>=2&&S.setY(C,k[U*f+1]),f>=3&&S.setZ(C,k[U*f+2]),f>=4&&S.setW(C,k[U*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const f=i.manager.getHandler(c.uri);f!==null&&(u=f)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,i){const s=this,a=this.json,c=a.textures[e],u=a.images[t],f=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[f])return this.textureCache[f];const h=this.loadImageSource(t,i).then(function(m){m.flipY=!1,m.name=c.name||u.name||"",m.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(m.name=u.uri);const _=(a.samplers||{})[c.sampler]||{};return m.magFilter=u_[_.magFilter]||Kn,m.minFilter=u_[_.minFilter]||sr,m.wrapS=d_[_.wrapS]||mo,m.wrapT=d_[_.wrapT]||mo,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==In&&m.minFilter!==Kn,s.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[f]=h,h}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const c=s.images[e],u=self.URL||self.webkitURL;let f=c.uri||"",h=!1;if(c.bufferView!==void 0)f=i.getDependency("bufferView",c.bufferView).then(function(g){h=!0;const _=new Blob([g],{type:c.mimeType});return f=u.createObjectURL(_),f});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(f).then(function(g){return new Promise(function(_,y){let M=_;t.isImageBitmapLoader===!0&&(M=function(E){const S=new nn(E);S.needsUpdate=!0,_(S)}),t.load(Sa.resolveURL(g,a.path),M,void 0,y)})}).then(function(g){return h===!0&&u.revokeObjectURL(f),rr(g,c),g.userData.mimeType=c.mimeType||N1(c.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),g});return this.sourceCache[e]=m,m}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[St.KHR_TEXTURE_TRANSFORM]){const u=i.extensions!==void 0?i.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const f=a.associations.get(c);c=a.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,f)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new t0,bi.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,f.sizeAttenuation=!1,this.cache.add(u,f)),i=f}else if(e.isLine){const u="LineBasicMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new e0,bi.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,this.cache.add(u,f)),i=f}if(s||a||c){let u="ClonedMaterial:"+i.uuid+":";s&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let f=this.cache.get(u);f||(f=i.clone(),a&&(f.vertexColors=!0),c&&(f.flatShading=!0),s&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(u,f),this.associations.set(f,this.associations.get(i))),i=f}e.material=i}getMaterialType(){return sh}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let c;const u={},f=a.extensions||{},h=[];if(f[St.KHR_MATERIALS_UNLIT]){const g=s[St.KHR_MATERIALS_UNLIT];c=g.getMaterialType(),h.push(g.extendParams(u,a,t))}else{const g=a.pbrMetallicRoughness||{};if(u.color=new ct(1,1,1),u.opacity=1,Array.isArray(g.baseColorFactor)){const _=g.baseColorFactor;u.color.setRGB(_[0],_[1],_[2],Tn),u.opacity=_[3]}g.baseColorTexture!==void 0&&h.push(t.assignTexture(u,"map",g.baseColorTexture,Kt)),u.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,u.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(u,"metalnessMap",g.metallicRoughnessTexture)),h.push(t.assignTexture(u,"roughnessMap",g.metallicRoughnessTexture))),c=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=li);const m=a.alphaMode||Wd.OPAQUE;if(m===Wd.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,m===Wd.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==wi&&(h.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new yt(1,1),a.normalTexture.scale!==void 0)){const g=a.normalTexture.scale;u.normalScale.set(g,g)}if(a.occlusionTexture!==void 0&&c!==wi&&(h.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==wi){const g=a.emissiveFactor;u.emissive=new ct().setRGB(g[0],g[1],g[2],Tn)}return a.emissiveTexture!==void 0&&c!==wi&&h.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,Kt)),Promise.all(h).then(function(){const g=new c(u);return a.name&&(g.name=a.name),rr(g,a),t.associations.set(g,{materials:e}),a.extensions&&ps(s,g,a),g})}createUniqueName(e){const t=Ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(u){return i[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(f){return f_(f,u,t)})}const c=[];for(let u=0,f=e.length;u<f;u++){const h=e[u],m=D1(h),g=s[m];if(g)c.push(g.promise);else{let _;h.extensions&&h.extensions[St.KHR_DRACO_MESH_COMPRESSION]?_=a(h):_=f_(new $n,h,t),s[m]={primitive:h,promise:_},c.push(_)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],c=a.primitives,u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f].material===void 0?P1(this.cache):this.getDependency("material",c[f].material);u.push(m)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(f){const h=f.slice(0,f.length-1),m=f[f.length-1],g=[];for(let y=0,M=m.length;y<M;y++){const E=m[y],S=c[y];let x;const L=h[y];if(S.mode===ai.TRIANGLES||S.mode===ai.TRIANGLE_STRIP||S.mode===ai.TRIANGLE_FAN||S.mode===void 0)x=a.isSkinnedMesh===!0?new vw(E,L):new un(E,L),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===ai.TRIANGLE_STRIP?x.geometry=l_(x.geometry,N_):S.mode===ai.TRIANGLE_FAN&&(x.geometry=l_(x.geometry,If));else if(S.mode===ai.LINES)x=new Mw(E,L);else if(S.mode===ai.LINE_STRIP)x=new ih(E,L);else if(S.mode===ai.LINE_LOOP)x=new Ew(E,L);else if(S.mode===ai.POINTS)x=new Tw(E,L);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&I1(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),rr(x,a),S.extensions&&ps(s,x,S),t.assignFinalMaterial(x),g.push(x)}for(let y=0,M=g.length;y<M;y++)t.associations.set(g[y],{meshes:e,primitives:y});if(g.length===1)return a.extensions&&ps(s,g[0],a),g[0];const _=new ar;a.extensions&&ps(s,_,a),t.associations.set(_,{meshes:e});for(let y=0,M=g.length;y<M;y++)_.add(g[y]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ln(ty.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Jf(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),rr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),c=s,u=[],f=[];for(let h=0,m=c.length;h<m;h++){const g=c[h];if(g){u.push(g);const _=new mt;a!==null&&_.fromArray(a.array,h*16),f.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new nh(u,f)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],u=[],f=[],h=[],m=[];for(let g=0,_=s.channels.length;g<_;g++){const y=s.channels[g],M=s.samplers[y.sampler],E=y.target,S=E.node,x=s.parameters!==void 0?s.parameters[M.input]:M.input,L=s.parameters!==void 0?s.parameters[M.output]:M.output;E.node!==void 0&&(c.push(this.getDependency("node",S)),u.push(this.getDependency("accessor",x)),f.push(this.getDependency("accessor",L)),h.push(M),m.push(E))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f),Promise.all(h),Promise.all(m)]).then(function(g){const _=g[0],y=g[1],M=g[2],E=g[3],S=g[4],x=[];for(let L=0,I=_.length;L<I;L++){const A=_[L],q=y[L],k=M[L],U=E[L],X=S[L];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const C=i._createAnimationTracks(A,q,k,U,X);if(C)for(let R=0;R<C.length;R++)x.push(C[R])}return new Dw(a,void 0,x)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let f=0,h=s.weights.length;f<h;f++)u.morphTargetInfluences[f]=s.weights[f]}),c})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),c=[],u=s.children||[];for(let h=0,m=u.length;h<m;h++)c.push(i.getDependency("node",u[h]));const f=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),f]).then(function(h){const m=h[0],g=h[1],_=h[2];_!==null&&m.traverse(function(y){y.isSkinnedMesh&&y.bind(_,U1)});for(let y=0,M=g.length;y<M;y++)m.add(g[y]);return m})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",u=[],f=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return f&&u.push(f),a.camera!==void 0&&u.push(s.getDependency("camera",a.camera).then(function(h){return s._getNodeRef(s.cameraCache,a.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){u.push(h)}),this.nodeCache[e]=Promise.all(u).then(function(h){let m;if(a.isBone===!0?m=new Q_:h.length>1?m=new ar:h.length===1?m=h[0]:m=new Xt,m!==h[0])for(let g=0,_=h.length;g<_;g++)m.add(h[g]);if(a.name&&(m.userData.name=a.name,m.name=c),rr(m,a),a.extensions&&ps(i,m,a),a.matrix!==void 0){const g=new mt;g.fromArray(a.matrix),m.applyMatrix4(g)}else a.translation!==void 0&&m.position.fromArray(a.translation),a.rotation!==void 0&&m.quaternion.fromArray(a.rotation),a.scale!==void 0&&m.scale.fromArray(a.scale);return s.associations.has(m)||s.associations.set(m,{}),s.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new ar;i.name&&(a.name=s.createUniqueName(i.name)),rr(a,i),i.extensions&&ps(t,a,i);const c=i.nodes||[],u=[];for(let f=0,h=c.length;f<h;f++)u.push(s.getDependency("node",c[f]));return Promise.all(u).then(function(f){for(let m=0,g=f.length;m<g;m++)a.add(f[m]);const h=m=>{const g=new Map;for(const[_,y]of s.associations)(_ instanceof bi||_ instanceof nn)&&g.set(_,y);return m.traverse(_=>{const y=s.associations.get(_);y!=null&&g.set(_,y)}),g};return s.associations=h(a),a})}_createAnimationTracks(e,t,i,s,a){const c=[],u=e.name?e.name:e.uuid,f=[];kr[a.path]===kr.weights?e.traverse(function(_){_.morphTargetInfluences&&f.push(_.name?_.name:_.uuid)}):f.push(u);let h;switch(kr[a.path]){case kr.weights:h=So;break;case kr.rotation:h=Mo;break;case kr.position:case kr.scale:h=Eo;break;default:switch(i.itemSize){case 1:h=So;break;case 2:case 3:default:h=Eo;break}break}const m=s.interpolation!==void 0?C1[s.interpolation]:Ta,g=this._getArrayFromAccessor(i);for(let _=0,y=f.length;_<y;_++){const M=new h(f[_]+"."+kr[a.path],t.array,g,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=zf(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Mo?R1:s0;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function O1(o,e,t){const i=e.attributes,s=new Fi;if(i.POSITION!==void 0){const u=t.json.accessors[i.POSITION],f=u.min,h=u.max;if(f!==void 0&&h!==void 0){if(s.set(new V(f[0],f[1],f[2]),new V(h[0],h[1],h[2])),u.normalized){const m=zf(uo[u.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new V,f=new V;for(let h=0,m=a.length;h<m;h++){const g=a[h];if(g.POSITION!==void 0){const _=t.json.accessors[g.POSITION],y=_.min,M=_.max;if(y!==void 0&&M!==void 0){if(f.setX(Math.max(Math.abs(y[0]),Math.abs(M[0]))),f.setY(Math.max(Math.abs(y[1]),Math.abs(M[1]))),f.setZ(Math.max(Math.abs(y[2]),Math.abs(M[2]))),_.normalized){const E=zf(uo[_.componentType]);f.multiplyScalar(E)}u.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(u)}o.boundingBox=s;const c=new Oi;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function f_(o,e,t){const i=e.attributes,s=[];function a(c,u){return t.getDependency("accessor",c).then(function(f){o.setAttribute(u,f)})}for(const c in i){const u=Bf[c]||c.toLowerCase();u in o.attributes||s.push(a(i[c],u))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(u){o.setIndex(u)});s.push(c)}return Et.workingColorSpace!==Tn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Et.workingColorSpace}" not supported.`),rr(o,e),O1(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?L1(o,e.targets,t):o})}const jd=new WeakMap;class k1 extends ys{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,s){const a=new Sc(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,c=>{this.parse(c,t,s)},i,s)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,Kt,i).catch(i)}decodeDracoFile(e,t,i,s,a=Tn,c=()=>{}){const u={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:a};return this.decodeGeometry(e,u).then(t).catch(c)}decodeGeometry(e,t){const i=JSON.stringify(t);if(jd.has(e)){const f=jd.get(e);if(f.key===i)return f.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const a=this.workerNextTaskID++,c=e.byteLength,u=this._getWorker(a,c).then(f=>(s=f,new Promise((h,m)=>{s._callbacks[a]={resolve:h,reject:m},s.postMessage({type:"decode",id:a,taskConfig:t,buffer:e},[e])}))).then(f=>this._createGeometry(f.geometry));return u.catch(()=>!0).then(()=>{s&&a&&this._releaseTask(s,a)}),jd.set(e,{key:i,promise:u}),u}_createGeometry(e){const t=new $n;e.index&&t.setIndex(new hn(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const s=e.attributes[i],a=s.name,c=s.array,u=s.itemSize,f=new hn(c,u);a==="color"&&(this._assignVertexColorSpace(f,s.vertexColorSpace),f.normalized=!(c instanceof Float32Array)),t.setAttribute(a,f)}return t}_assignVertexColorSpace(e,t){if(t!==Kt)return;const i=new ct;for(let s=0,a=e.count;s<a;s++)i.fromBufferAttribute(e,s),Et.toWorkingColorSpace(i,Kt),e.setXYZ(s,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new Sc(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((s,a)=>{i.load(e,s,void 0,a)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const s=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const a=B1.toString(),c=["/* draco decoder */",s,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(a){const c=a.data;switch(c.type){case"decode":s._callbacks[c.id].resolve(c);break;case"error":s._callbacks[c.id].reject(c);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+c.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,a){return s._taskLoad>a._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function B1(){let o,e;onmessage=function(c){const u=c.data;switch(u.type){case"init":o=u.decoderConfig,e=new Promise(function(m){o.onModuleLoaded=function(g){m({draco:g})},DracoDecoderModule(o)});break;case"decode":const f=u.buffer,h=u.taskConfig;e.then(m=>{const g=m.draco,_=new g.Decoder;try{const y=t(g,_,new Int8Array(f),h),M=y.attributes.map(E=>E.array.buffer);y.index&&M.push(y.index.array.buffer),self.postMessage({type:"decode",id:u.id,geometry:y},M)}catch(y){console.error(y),self.postMessage({type:"error",id:u.id,error:y.message})}finally{g.destroy(_)}});break}};function t(c,u,f,h){const m=h.attributeIDs,g=h.attributeTypes;let _,y;const M=u.GetEncodedGeometryType(f);if(M===c.TRIANGULAR_MESH)_=new c.Mesh,y=u.DecodeArrayToMesh(f,f.byteLength,_);else if(M===c.POINT_CLOUD)_=new c.PointCloud,y=u.DecodeArrayToPointCloud(f,f.byteLength,_);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!y.ok()||_.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+y.error_msg());const E={index:null,attributes:[]};for(const S in m){const x=self[g[S]];let L,I;if(h.useUniqueIDs)I=m[S],L=u.GetAttributeByUniqueId(_,I);else{if(I=u.GetAttributeId(_,c[m[S]]),I===-1)continue;L=u.GetAttribute(_,I)}const A=s(c,u,_,S,x,L);S==="color"&&(A.vertexColorSpace=h.vertexColorSpace),E.attributes.push(A)}return M===c.TRIANGULAR_MESH&&(E.index=i(c,u,_)),c.destroy(_),E}function i(c,u,f){const m=f.num_faces()*3,g=m*4,_=c._malloc(g);u.GetTrianglesUInt32Array(f,g,_);const y=new Uint32Array(c.HEAPF32.buffer,_,m).slice();return c._free(_),{array:y,itemSize:1}}function s(c,u,f,h,m,g){const _=g.num_components(),M=f.num_points()*_,E=M*m.BYTES_PER_ELEMENT,S=a(c,m),x=c._malloc(E);u.GetAttributeDataArrayForAllPoints(f,g,S,E,x);const L=new m(c.HEAPF32.buffer,x,M).slice();return c._free(x),{name:h,array:L,itemSize:_}}function a(c,u){switch(u){case Float32Array:return c.DT_FLOAT32;case Int8Array:return c.DT_INT8;case Int16Array:return c.DT_INT16;case Int32Array:return c.DT_INT32;case Uint8Array:return c.DT_UINT8;case Uint16Array:return c.DT_UINT16;case Uint32Array:return c.DT_UINT32}}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o0=(...o)=>o.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var H1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=vt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:a,iconNode:c,...u},f)=>vt.createElement("svg",{ref:f,...H1,width:e,height:e,stroke:o,strokeWidth:i?Number(t)*24/Number(e):t,className:o0("lucide",s),...u},[...c.map(([h,m])=>vt.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=(o,e)=>{const t=vt.forwardRef(({className:i,...s},a)=>vt.createElement(V1,{ref:a,iconNode:e,className:o0(`lucide-${z1(o)}`,i),...s}));return t.displayName=`${o}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=Zn("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=Zn("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=Zn("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=Zn("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=Zn("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=Zn("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=Zn("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=Zn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=Zn("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=Zn("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=Zn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=Zn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=Zn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),p_=[{id:"ALQ-MSS-006",slug:"nahj-al-balagha",title:{ar:"مخطوط نهج البلاغة",en:"Nahj al-Balagha Manuscript"},subtitle:{ar:"الشيخ الرضي - الشريف الرضي (1022 هـ)",en:"Al-Sharif al-Radi (1022 AH / 1613 CE)"},category:"manuscripts",categoryLabel:{ar:"المخطوطات والنوادر",en:"Manuscripts"},period:{ar:"1022 هـ / 1613 م (العصر الصفوي)",en:"1022 AH / 1613 CE"},creator:{ar:"الشريف الرضي (ت 406 هـ) • الناسخ: شمس الدين علي الشيرازي",en:"Al-Sharif al-Radi • Scribe: Shams al-Din Ali al-Shirazi"},institution:{ar:"مكتبة العتبة الرضوية المقدسة (1861) • مستودع علقمي الرقمي",en:"Central Library of Astan Quds Razavi • Alqami Repository"},price:149,rating:4,reviewsCount:12,itemCode:"1022 هـ / هـ",image:"/images/model-nahj_al_balagha.png",model:{glb:"/models/nahj_al_balagha.glb",scale:1,initialOrbit:{theta:25,phi:70}},description:{ar:"نسخة خطية من مخطوط نهج البلاغة، تُنسب إلى الشريف الرضي الذي جمعها وشرحها، تتميز هذه النسخة بخط جميل وواضح، وتحتوي على زخارف وهامش مذهب، وهي من أقدم النسخ المحفوظة التي تحمل هذا النص القيّم.",en:"Illuminated manuscript of Nahj al-Balagha compiled by Al-Sharif al-Radi, transcribed in 1022 AH with ornate gold borders, intricate arabesque frontispiece, and red ink chapter markings."},details:{dimensions:"28.5 × 18.2 سم (477 ورقة)",material:{ar:"ورق مجدول ومذهب، حبر أسود، مداد أحمر، خط النسخ الأصيل",en:"Gold-ruled paper, carbon ink, cinnabar rubrication, Naskh script"},condition:{ar:"نادرة ومحفوظة بعناية فائقة مع تجليد إسلامي أصيل ومحكم",en:"Extremely rare, well-preserved in historic Islamic binding"},binding:{ar:"تجليد جلدي إسلامي أصيل مزخرف بنقوش هندسية مذهبة ومحكمة",en:"Authentic Islamic leather binding with gilded geometric tooling"},decoration:{ar:"النسخة مجدولة بالذهب، وأولها لوحة فنية مذهبة بديعة وعناوين بالمداد الأحمر",en:"Gold-illuminated borders, gilded frontispiece, and rubricated chapter headers"},seals:{ar:"تحتوي على قيود تملكية وأختام مكتبة العتبة الرضوية المقدسة برقم 1861",en:"Bears historic ownership seals and endowment inscription no. 1861"},delivery:{ar:"شحن آمن في حافظة حرارية مضادة للصدمات مع شهادة توثيق رقمية NFT.",en:"Shipped in climate-controlled archival case with digital museum NFT certificate."},assembly:{ar:"لا تتطلب تجميع؛ جاهزة للعرض المكتبي أو التثبيت في منصة العرض المتحفي الزجاجية.",en:"No assembly required; ready for tabletop display or archival museum vitrine."}}},{id:"ALQ-HLM-004",slug:"old-islamic-helmet",title:{ar:"خوذة إسلامية حربية مذهبة",en:"Old Islamic Gilded Helmet"},subtitle:{ar:"خوذة خيالة عثمانية مصفحة مع أنفية ودرع زرد (القرن 15 م)",en:"Ottoman cavalry helmet with mail aventail, 15th century."},category:"artifact",categoryLabel:{ar:"الأسلحة والقطع الحربية",en:"Artifact"},period:{ar:"القرن الخامس عشر الميلادي",en:"15th century"},creator:{ar:"حدادو البلاط السلطاني العثماني",en:"Imperial Ottoman Armory"},institution:{ar:"المتحف العسكري • مستودع علقمي الرقمي",en:"Military Museum Collection • Alqami"},price:220,rating:4.9,reviewsCount:34,itemCode:"HLM-OTT-15",image:"/images/model-Old_Islamic_Helmet.png",model:{glb:"/models/Old_Islamic_Helmet.glb",scale:1.1,initialOrbit:{theta:30,phi:80}},description:{ar:"خوذة حربية مخروطية الشكل مصنوعة من الفولاذ الصلب المنقوش بآيات النصر والفتح ومكفتة بخيوط الذهب، مع درع زردي متدلي لحماية العنق والرقبة وقضيب حماية الأنف المتحرك.",en:"Conical Ottoman turban helmet of forged steel, inscribed with calligraphic cartouches in gold damascening, complete with nasal bar and interlocking steel mail aventail."},details:{dimensions:"الارتفاع: 34 سم • القطر: 22 سم • الوزن: 1.8 كجم",material:{ar:"فولاذ كربوني مقسى، تذهيب مكفت عيار 24، حلقات حديد مشبك",en:"Tempered carbon steel, 24k gold inlay, riveted iron mail rings"},condition:{ar:"تحفة متحفية بحالة استثنائية مع لمعان النحاس والذهب الأصلي",en:"Museum grade with intact mail aventail and original gilt sheen"},delivery:{ar:"شحن دولي مصفح مع قاعدة عرض معدنية مكسوة بالمخمل الأسود.",en:"Armored dispatch with velvet-lined steel pedestal."},assembly:{ar:"تأتي مثبتة على عمود العرض المخملي مع إمكانية الفك السريع.",en:"Pre-assembled on museum display pole."}}},{id:"ALQ-SWD-002",slug:"zulfiqar-sword",title:{ar:"سيف ذو الفقار التاريخي",en:"Zulfiqar Sword Artifact"},subtitle:{ar:"سيف عثماني مرصع بالذهب (القرن 16-17 م)",en:"Ottoman ceremonial sword, 16th–17th century."},category:"artifact",categoryLabel:{ar:"الأسلحة والقطع الحربية",en:"Artifact"},period:{ar:"القرن السادس عشر - السابع عشر الميلادي",en:"16th–17th century"},creator:{ar:"صناع السلاح الإمبراطوري في إسطنبول",en:"Imperial Armoury Craftsmen"},institution:{ar:"مجموعة الأسلحة الإسلامية • علقمي",en:"Alqami Islamic Arms & Armour Collection"},price:165,rating:4.8,reviewsCount:28,itemCode:"SWD-OTT-16",image:"/images/model-Zulfiqar_Sword.png",model:{glb:"/models/Zulfiqar_Sword.glb",scale:1.2,initialOrbit:{theta:45,phi:65}},description:{ar:"سيف تاريخي احتفالي مستوحى من طراز ذي الفقار الشهير، مصوغ من الفولاذ الدمشقي الجوهري، مع مقبض مطعم بالعاج ونصل منقوش بآيات قرآنية مطلية بالذهب الخالص.",en:"Historic ceremonial curved scimitar forged from folded Damascus crucible steel, decorated with Quranic calligraphic cartouches inlaid with 24k gold, and ivory hilt."},details:{dimensions:"الطول الكلي: 96 سم • وزن النصل: 980 غرام",material:{ar:"فولاذ دمشقي ووتز، ذهب عيار 24 مطروق، عاج طبيعي",en:"Pattern-welded Wootz steel, 24k gold koftgari inlay, ivory"},condition:{ar:"حد السيف ناصع، خالي من الأكسدة، الغمد الخشبي مكسو بالجلد المخملي",en:"Mint preserved blade edge, wood scabbard bound in crimson velvet"},delivery:{ar:"شحن مؤمّن برقم تتبع خاص وصندوق خشبي مبطن بالساتان.",en:"Insured courier dispatch in satin-lined hardwood chest."},assembly:{ar:"مرفق بحامل حائطي مغناطيسي معتمد للعرض الأفقي أو المائل.",en:"Supplied with magnetic spatial wall mounting brackets."}}},{id:"ALQ-MAP-001",slug:"babylonian-map-of-the-world",title:{ar:"خريطة بابل للعالم (إيماجو موندي)",en:"Babylonian Map of the World"},subtitle:{ar:"أقدم خريطة جغرافية وفلكية في تاريخ البشرية (القرن 6 ق.م)",en:"Earliest known world map tablet, 6th century BCE."},category:"history",categoryLabel:{ar:"تراث بلاد الرافدين",en:"History"},period:{ar:"القرن السادس قبل الميلاد (بابل)",en:"6th century BCE"},creator:{ar:"كاهن بابلي فلكي مجهول",en:"Babylonian Astronomer-Priest"},institution:{ar:"المتحف البريطاني (BM 92687) • مستودع علقمي",en:"British Museum • Alqami Spatial Vault"},price:180,rating:4.8,reviewsCount:42,itemCode:"MAP-BAB-001",image:"/images/model-babylonian_map_of_the_world_tablet_-_imago_mundi.png",model:{glb:"/models/babylonian_map_of_the_world_tablet_-_imago_mundi.glb",scale:1.3},description:{ar:'لوح طيني تاريخي فريد يمثل خريطة بابل للعالم القديم، حيث تظهر بابل كمستطيل في المركز يمر به نهر الفرات، وتحيط بها الدائرة المائية المحيطية المسماة "نهر المرارة" وجزر أسطورية مثلثة.',en:"The Imago Mundi clay tablet from ancient Mesopotamia. Depicts Babylon as the center of the world bisected by the Euphrates and encircled by the Bitter Ocean."},details:{dimensions:"12.2 × 8.2 × 2.4 سم",material:{ar:"طين بابلي مفخور طبيعي، خط مسماري محفور بدقة",en:"Baked alluvial clay, incised cuneiform inscription"},condition:{ar:"سليمة جزئياً مع ثبات كامل للهيكل الطيني التاريخي",en:"Partially intact with stable clay substrate"},delivery:{ar:"شحن في كبسولة مبطنة بطبقات الرغوة العازلة مع رصد الرطوبة.",en:"Dispatched in humidity-monitored archival vault."},assembly:{ar:"حامل تثبيت شفاف يعرض الوجهين الأمامي والخلفي للوح.",en:"Double-sided transparent display bracket."}}},{id:"ALQ-TAB-005",slug:"old-babylonian-cuneiform-tablet",title:{ar:"لوح مسماري بابلي قديم (S264)",en:"Old Babylonian Cuneiform Tablet"},subtitle:{ar:"لوح عقود ومعاملات اقتصادية من طين الرافدين (1900 ق.م)",en:"Administrative Cuneiform Tablet, c. 1900 BCE"},category:"history",categoryLabel:{ar:"تراث بلاد الرافدين",en:"History"},period:{ar:"1900–1600 قبل الميلاد (العصر البابلي القديم)",en:"c. 1900–1600 BCE"},creator:{ar:"كاتب سومري بابلي رسمي",en:"Royal Scribe of Larsa"},institution:{ar:"مجموعة المسماريات البابلية • علقمي",en:"Mesopotamian Collection • Alqami"},price:95,rating:4.6,reviewsCount:17,itemCode:"TAB-BAB-S264",image:"/images/model-old-babylonian_cuneiform_tablet_s264.png",model:{glb:"/models/old-babylonian_cuneiform_tablet_s264.glb",scale:1.2},description:{ar:"لوح طيني مفخور بحجم قبضة اليد يوثق حسابات القمح والزيوت مع أختام أسطوانية ضاغطة على الجوانب، مكتوب بالخط المسماري البابلي القديم الواضح.",en:"Hand-sized baked clay administrative tablet recording grain and oil disbursements, impressed with royal cylinder seal rolling."},details:{dimensions:"8.5 × 5.2 × 2.0 سم",material:{ar:"طين نيلي مفخور، حفر بقلم القصب المسماري",en:"Baked clay, reed stylus cuneiform script"},condition:{ar:"كامل الأحرف والرموز بحالة ممتازة دون كسور",en:"Intact inscriptions with pristine seal rollings"},delivery:{ar:"كبسولة أرشيفية مفرغة من الأكسجين لحفظ الطين القديم.",en:"Nitrogen-flushed archival display capsule."},assembly:{ar:"حامل مكتبي مائل للعرض ثلاثي الأبعاد.",en:"Angled desktop presentation easel."}}},{id:"ALQ-BWL-006",slug:"saqakhane-sacred-bowl",title:{ar:"طاسة سقاخانة برونزية أثرية",en:"Saqakhane Sacred Bronze Bowl"},subtitle:{ar:"وعاء ماء تراثي منقوش بآيات الشفاء والأدعية (القرن 18 م)",en:"Engraved Bronze Water Vessel, 18th Century"},category:"artifact",categoryLabel:{ar:"المعادن الإسلامية",en:"Artifact"},period:{ar:"القرن الثامن عشر الميلادي",en:"18th Century"},creator:{ar:"حرفيو النحاس والبرونز في أصفهان",en:"Isfahan Bronze Masters"},institution:{ar:"مجموعة الأواني الإسلامية • علقمي",en:"Islamic Metalwork Collection • Alqami"},price:110,rating:4.7,reviewsCount:23,itemCode:"BWL-SAQ-18",image:"/images/model-saqakhane_bowl.png",model:{glb:"/models/saqakhane_bowl.glb",scale:1},description:{ar:"وعاء برونزي مقدس من أروقة السقاخانة، محفور من الداخل والخارج بآيات الشفاء وسور قرآنية بخط الثلث المتقن، مع مركز يحمل قبة شمسية بارزة.",en:"Historic bronze drinking bowl used at public water fountains (Saqakhane), engraved inside and out with Quranic healing verses and central boss."},details:{dimensions:"القطر: 18.5 سم • العمق: 6.2 سم",material:{ar:"برونز مسبوك ومطروق يدوياً، حفر إزميل دقيق",en:"Hand-chiseled cast bronze with natural patina"},condition:{ar:"برونز أصيل مع طبقة زنجار خضراء تاريخية طبيعية",en:"Pristine historic bronze patina and crisp inscriptions"},delivery:{ar:"حقيبة مبطنة بالحرير للمحافظة على معدن البرونز.",en:"Silk-lined presentation box."},assembly:{ar:"حلقة تثبيت دائرية ثلاثية الأبعاد.",en:"Circular museum ring mount."}}},{id:"ALQ-MHR-007",slug:"prayer-niche-mihrab",title:{ar:"محراب الصلاة الإسلامي المقرنص",en:"Prayer Niche Mihrab"},subtitle:{ar:"محراب مزخرف بالفسيفساء الخزفية والخط الثلث (القرن 14 م)",en:"Glazed Ceramic Architectural Mihrab, 14th Century"},category:"islamic-art",categoryLabel:{ar:"العمارة والفنون الإسلامية",en:"Islamic Art"},period:{ar:"القرن الرابع عشر الميلادي (العصر الإيلخاني)",en:"14th Century"},creator:{ar:"أساتذة الخزف في كاشان",en:"Kashan Master Ceramists"},institution:{ar:"متحف الفن الإسلامي • مستودع علقمي",en:"Museum of Islamic Art Collection"},price:310,rating:4.9,reviewsCount:31,itemCode:"MHR-KAS-14",image:"/images/model-prayer_niche_mihrab.png",model:{glb:"/models/prayer_niche_mihrab.glb",scale:.85},description:{ar:"تحفة معمارية إسلامية من بلاط الفسيفساء الخزفي المزجج بلوني الفيروزي واللازوردي مع آية الكرسي بخط الثلث المورق حول إطار القوس المعقود المقرنص.",en:"Architectural prayer niche adorned with turquoise and cobalt glazed mosaic tiles, framed with Quranic Ayatul Kursi in floriated Thuluth calligraphy."},details:{dimensions:"الارتفاع: 110 سم • العرض: 65 سم",material:{ar:"خزف مزجج بريق معدني، أصباغ كوبالت وفيروز، جبس تراثي",en:"Luster-glazed ceramic, cobalt and turquoise oxides"},condition:{ar:"البريق المعدني والزخارف النباتية الهندسية بحالة ممتازة",en:"Luster glaze and arabesque flora in superb preservation"},delivery:{ar:"نقل مع حماية مضاعفة في صندوق خشبي معزول ومؤمّن.",en:"Crated in shock-absorbing timber frame."},assembly:{ar:"قابل للتعليق على الحائط أو التثبيت العمودي في الفضاء الحقيقي.",en:"Can be wall-mounted or anchored spatially in room AR."}}},{id:"ALQ-STL-008",slug:"stela-of-hammurabi",title:{ar:"مسلة شريعة حمورابي البابلية",en:"Stela of Hammurabi Code"},subtitle:{ar:"أقدم شريعة قانونية متكاملة مكتوبة في التاريخ (1750 ق.م)",en:"Old Babylonian Law Code Replica, c. 1750 BCE"},category:"history",categoryLabel:{ar:"تراث بلاد الرافدين",en:"History"},period:{ar:"1792–1750 قبل الميلاد (بابل)",en:"c. 1750 BCE"},creator:{ar:"نحاتو القصر الملكي البابلي في عهد الملك حمورابي",en:"Royal Sculptors of King Hammurabi"},institution:{ar:"مستودع علقمي للمنحوتات الأثرية",en:"Alqami Antiquities Vault"},price:260,rating:4.8,reviewsCount:39,itemCode:"STL-HAM-1750",image:"/images/model-stela_of_hammurabi_replica.png",model:{glb:"/models/stela_of_hammurabi_replica.glb",scale:.9},description:{ar:"منحوتة تاريخية شامخة من حجر الديوريت الأسود، يظهر في أعلاها الملك حمورابي وهو يتلقى شريعة العدل من إله الشمس شمش، وتحتها 282 مادة قانونية بليغة.",en:"Monumental black diorite stela depicting King Hammurabi receiving laws from Shamash the sun god, inscribed with 282 legal edicts in cuneiform."},details:{dimensions:"الارتفاع: 75 سم • القاعدة: 25 × 20 سم",material:{ar:"ديوريت أسود مصقول، نقش مسماري أكدي غائر",en:"Polished black basalt/diorite, incised Akkadian cuneiform"},condition:{ar:"نسخة متحفية ملموسة بنقوش واضحة مطابقة للأصلية",en:"Museum-grade replica with crisp relief sculpture"},delivery:{ar:"شحن مصفح على منصة خشبية محمية.",en:"Heavy-duty palletized courier transport."},assembly:{ar:"قاعدة تثبيت حجرية مانعة للانزلاق.",en:"Weighted stone anti-slip plinth."}}},{id:"ALQ-BWL-009",slug:"ancient-ceramic-bowl",title:{ar:"وعاء خزفي إسلامي أثري",en:"Ancient Ceramic Slipware Bowl"},subtitle:{ar:"خزف نيسابوري مزجج بحروف كوفية مذهبة (القرن 10 م)",en:"Nishapur Calligraphic Ceramic Bowl, 10th Century"},category:"islamic-art",categoryLabel:{ar:"الخزف والفنون الإسلامية",en:"Islamic Art"},period:{ar:"القرن العاشر الميلادي (العصر الساماني)",en:"10th Century"},creator:{ar:"خزافو نيسابور وسمرقند",en:"Nishapur Slipware Potters"},institution:{ar:"المتحف الوطني للفنون الخزفية • علقمي",en:"National Ceramic Arts Museum • Alqami"},price:75,rating:4.5,reviewsCount:16,itemCode:"BWL-NIS-10",image:"/images/model-bowl.png",model:{glb:"/models/bowl.glb",scale:1.1},description:{ar:"وعاء خزفي ناصع البياض مزجج بطلاء رائق، محلى بحافة خط كوفي أندلسي يحمل حكم وأمثال في الكرم والأدب باللون البني المحروق.",en:"Elegantly proportioned white earthenware bowl painted in dark slip with floriated Kufic aphorism on generosity and good manners."},details:{dimensions:"القطر: 21.4 سم • الارتفاع: 7.0 سم",material:{ar:"طين خزفي أبيض، طلاء زجاجي رصاصي شفاف",en:"White earthenware, underglaze slip, clear lead glaze"},condition:{ar:"سليم وخالٍ من الشروخ مع رنين نقي للقطعة",en:"Intact with fine micro-crazing and resonant ring"},delivery:{ar:"كبسولة رغوية محكمة ضد الصدمات.",en:"Custom form-fitted high density foam casing."},assembly:{ar:"حامل ثلاثي الأرجل لعرض الوجه الداخلي.",en:"Three-point acrylic bowl stand."}}},{id:"ALQ-MS-003",slug:"al-qabasat-mir-damad",title:{ar:"مخطوط القبسات — الميرداماد",en:"Al-Qabasat Manuscript — Mir Damad"},subtitle:{ar:"تراث الحكمة والفلسفة الإسلامية المتعالية (1650 م)",en:"Safavid Philosophical Codex, 1650 CE"},category:"manuscripts",categoryLabel:{ar:"المخطوطات والنوادر",en:"Manuscripts"},period:{ar:"1650 م [1061 هـ]",en:"1650 CE [1061 AH]"},creator:{ar:"الميرداماد محمد باقر الحسيني الإسترآبادي",en:"Mir Damad (d. 1040 AH)"},institution:{ar:"مكتبة مجلس الشورى (4662) • علقمي",en:"Majlis Library Tehran (4662) • Alqami"},price:135,rating:4.7,reviewsCount:14,itemCode:"MSS-QAB-1650",image:"/images/model-model.png",model:{glb:"/models/model.glb",scale:1},description:{ar:"كتاب فلسفي كلامي للميرداماد يناقش حدوث العالم وقدمه ومسألة الدهر والزمان، النسخة مجدولة ومذهبة وغلافها جلد أحمر أصيل بنظام التعقيبات التاريخية.",en:"Theological and philosophical treatise by Mir Damad discussing cosmos origination, time and eternity (Dahr), in gold-ruled margins and red leather binding."},details:{dimensions:"26.0 × 17.5 سم (344 ورقة)",material:{ar:"ورق قطني، حبر أسود، خط النستعليق، جلد أحمر",en:"Cotton paper, black ink, Nastaliq script, red leather"},condition:{ar:"نادرة وسليمة، مجدولة ومذهبة والغلاف جلد أحمر ممتاز",en:"Gold-ruled margins, intact original red leather binding"},delivery:{ar:"تغليف حراري مفرغ من الرطوبة مع بطاقة الأرشفة.",en:"Hermetic humidity-monitored archival delivery."},assembly:{ar:"جاهز للمعاينة ثلاثية الأبعاد في الغرفة.",en:"Ready for spatial room exploration."}}},{id:"ALQ-MSH-010",slug:"alqami-3d-heritage-sculpture",title:{ar:"مجسم تحفة علقمي التراثي",en:"Alqami 3D Heritage Sculpture"},subtitle:{ar:"منحوتة هندسية ثلاثية الأبعاد تمثل الهوية الحضارية والمتحفية",en:"Spatial 3D Cultural Geometry Monolith"},category:"culture",categoryLabel:{ar:"الهوية الثقافية",en:"Culture"},period:{ar:"العصر الحديث والتراث المتجدد",en:"Contemporary Spatial Heritage"},creator:{ar:"استوديو علقمي للنمذجة الرقمية التراثية",en:"Alqami Spatial Heritage Labs"},institution:{ar:"مستودع علقمي الرقمي السحابي",en:"Alqami Cloud Repository"},price:195,rating:4.9,reviewsCount:48,itemCode:"MSH-ALQ-3D",image:"/images/model-meshy-model.png",model:{glb:"/models/meshy-model.glb",scale:1},description:{ar:"مجسم فراغي ثلاثي الأبعاد مصمم بأعلى دقة PBR ليجسد تناغم الفنون الإسلامية والزخارف الهندسية المعقدة في فضاء الواقع المعزز المكاني.",en:"A high-fidelity spatial 3D artifact celebrating Islamic geometric harmony, designed with photorealistic PBR textures for visionOS augmented reality."},details:{dimensions:"35 × 35 × 45 سم",material:{ar:"راتنج بولي صلب، طلاء ميتاليك نحاسي وذهبي معتق",en:"High-density composite resin, antique bronze-gold patina"},condition:{ar:"تحفة جديدة مصنوعة بدقة ميكرونية فائقة",en:"Pristine new condition with museum seal"},delivery:{ar:"صندوق أسود فاخر مع قفل مغناطيسي وشهادة الأصالة.",en:"Luxury presentation case with magnetic closure."},assembly:{ar:"قاعدة دائرية متوازنة مع إضاءة حافة خافتة.",en:"Integrated weighted circular plinth."}}}];function eA(){const o=typeof DeviceOrientationEvent<"u"?DeviceOrientationEvent:void 0,e=typeof DeviceMotionEvent<"u"?DeviceMotionEvent:void 0,t=[];return o&&typeof o.requestPermission=="function"&&t.push(o.requestPermission()),e&&typeof e.requestPermission=="function"&&t.push(e.requestPermission().catch(()=>"denied")),t.length===0?Promise.resolve(typeof DeviceOrientationEvent<"u"):Promise.all(t).then(i=>i[0]==="granted").catch(()=>!1)}const Br=Math.PI/180,m_=new V(0,0,1),tA=new V(0,1,0),g_=new Mn(-Math.sqrt(.5),0,0,Math.sqrt(.5));function __(){const o=(typeof screen<"u"&&screen.orientation&&typeof screen.orientation.angle=="number"?screen.orientation.angle:window.orientation)??0;return Number(o)||0}class nA{constructor(){qt(this,"sensor",new Mn);qt(this,"smoothed",new Mn);qt(this,"yawOffset",0);qt(this,"manualPitch",0);qt(this,"euler",new Ri);qt(this,"tmpQ",new Mn);qt(this,"yawQ",new Mn);qt(this,"fwd",new V);qt(this,"lastSample",0);qt(this,"lastFrame",0);qt(this,"angularVelocity",new V);qt(this,"listening",!1);qt(this,"sampleCount",0);qt(this,"hasSensor",!1);qt(this,"predictionMs",12);qt(this,"compassHeading",0);qt(this,"filteredSensor",new Mn);qt(this,"onOrientation",e=>{if(typeof e.webkitCompassHeading=="number"&&(this.compassHeading=e.webkitCompassHeading),e.alpha==null||e.beta==null||e.gamma==null)return;const t=e.alpha*Br,i=e.beta*Br,s=e.gamma*Br,a=__()*Br;this.euler.set(i,t,-s,"YXZ"),this.tmpQ.setFromEuler(this.euler),this.tmpQ.multiply(g_),this.tmpQ.multiply(new Mn().setFromAxisAngle(m_,-a)),this.sensor.dot(this.tmpQ)<0&&this.tmpQ.set(-this.tmpQ.x,-this.tmpQ.y,-this.tmpQ.z,-this.tmpQ.w),this.hasSensor?this.sensor.slerp(this.tmpQ,.85):(this.sensor.copy(this.tmpQ),this.smoothed.copy(this.tmpQ),this.hasSensor=!0,this.recenter()),this.lastSample=performance.now(),this.sampleCount+=1});qt(this,"onMotion",e=>{const t=e.rotationRate;!t||t.alpha==null||t.beta==null||t.gamma==null||this.angularVelocity.set(t.beta*Br,t.gamma*Br,t.alpha*Br)})}start(){this.listening||(this.listening=!0,window.addEventListener("deviceorientation",this.onOrientation,!0),window.addEventListener("devicemotion",this.onMotion,!0))}stop(){this.listening&&(this.listening=!1,window.removeEventListener("deviceorientation",this.onOrientation,!0),window.removeEventListener("devicemotion",this.onMotion,!0))}get sensorAlive(){return this.hasSensor&&performance.now()-this.lastSample<1e3}get samples(){return this.sampleCount}sensorHeading(){return this.fwd.set(0,0,-1).applyQuaternion(this.hasSensor?this.smoothed:this.tmpQ.identity()),Math.atan2(-this.fwd.x,-this.fwd.z)}recenter(){this.yawOffset=-this.sensorHeading(),this.manualPitch=0}addLook(e,t){this.yawOffset+=e,this.hasSensor||(this.manualPitch=Math.max(-1.2,Math.min(1.2,this.manualPitch+t)))}getCameraQuaternion(e,t=performance.now()){const i=this.lastFrame?Math.min(.1,(t-this.lastFrame)/1e3):.016;if(this.lastFrame=t,this.hasSensor){const s=this.tmpQ.copy(this.sensor),a=Math.min(.05,this.predictionMs/1e3+(t-this.lastSample)/1e3),c=this.angularVelocity,u=c.length();if(u>.02&&a>0){const m=new V(c.x,c.y,c.z).normalize();m.applyQuaternion(g_.clone().invert());const g=__()*Br;m.applyAxisAngle(m_,g),s.multiply(new Mn().setFromAxisAngle(m,u*a))}const f=u>1.2?.008:u>.3?.018:.038,h=1-Math.exp(-i/f);return this.smoothed.dot(s)<0&&s.set(-s.x,-s.y,-s.z,-s.w),this.smoothed.slerp(s,h),this.yawQ.setFromAxisAngle(tA,this.yawOffset),e.copy(this.yawQ).multiply(this.smoothed)}return this.euler.set(this.manualPitch,this.yawOffset,0,"YXZ"),e.setFromEuler(this.euler)}}class iA{constructor(){qt(this,"ctx",null);qt(this,"enabled",!0)}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}triggerHaptic(e){if(typeof navigator<"u"&&"vibrate"in navigator)try{navigator.vibrate(e)}catch{}}createPanner(e=0){if(!this.ctx)return null;if(typeof this.ctx.createStereoPanner=="function"){const t=this.ctx.createStereoPanner();return t.pan.setValueAtTime(Math.max(-1,Math.min(1,e)),this.ctx.currentTime),t}return null}playSnap(e=0){if(this.enabled){this.triggerHaptic(8);try{if(this.init(),!this.ctx)return;const t=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.createPanner(e);t.type="triangle",t.frequency.setValueAtTime(820,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(1240,this.ctx.currentTime+.015),i.gain.setValueAtTime(.04,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.022),s?(t.connect(i),i.connect(s),s.connect(this.ctx.destination)):(t.connect(i),i.connect(this.ctx.destination)),t.start(),t.stop(this.ctx.currentTime+.025)}catch{}}}playFocusHover(e=0){if(this.enabled)try{if(this.init(),!this.ctx)return;const t=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.createPanner(e);t.type="sine",t.frequency.setValueAtTime(520,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(640,this.ctx.currentTime+.035),i.gain.setValueAtTime(.012,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.04),s?(t.connect(i),i.connect(s),s.connect(this.ctx.destination)):(t.connect(i),i.connect(this.ctx.destination)),t.start(),t.stop(this.ctx.currentTime+.045)}catch{}}playRelativeSpatialSound(e,t,i,s="focus"){let a=e-i;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;const c=Math.max(-1,Math.min(1,Math.sin(a)));s==="focus"?this.playFocusHover(c):s==="tap"?this.playPinchTap(c):s==="snap"&&this.playSnap(c)}playHover(e=0){if(this.enabled)try{if(this.init(),!this.ctx)return;const t=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.createPanner(e);t.type="sine",t.frequency.setValueAtTime(620,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(780,this.ctx.currentTime+.025),i.gain.setValueAtTime(.012,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.028),s?(t.connect(i),i.connect(s),s.connect(this.ctx.destination)):(t.connect(i),i.connect(this.ctx.destination)),t.start(),t.stop(this.ctx.currentTime+.03)}catch{}}playPinchTap(e=0){if(this.enabled){this.triggerHaptic(12);try{if(this.init(),!this.ctx)return;const t=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.createPanner(e);t.type="triangle",t.frequency.setValueAtTime(340,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(980,this.ctx.currentTime+.055),i.gain.setValueAtTime(.045,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.065),s?(t.connect(i),i.connect(s),s.connect(this.ctx.destination)):(t.connect(i),i.connect(this.ctx.destination)),t.start(),t.stop(this.ctx.currentTime+.07)}catch{}}}playSpatialBeep(e,t,i){if(this.enabled)try{if(this.init(),!this.ctx)return;const s=this.ctx.createOscillator(),a=this.ctx.createGain(),c=Math.max(-1,Math.min(1,e/Math.max(1,i))),u=this.createPanner(c);s.type="sine",s.frequency.setValueAtTime(540,this.ctx.currentTime),s.frequency.exponentialRampToValueAtTime(840,this.ctx.currentTime+.04),a.gain.setValueAtTime(.03,this.ctx.currentTime),a.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.045),u?(s.connect(a),a.connect(u),u.connect(this.ctx.destination)):(s.connect(a),a.connect(this.ctx.destination)),s.start(),s.stop(this.ctx.currentTime+.05)}catch{}}playDrawStroke(e=440,t=0){if(this.enabled)try{if(this.init(),!this.ctx)return;const i=this.ctx.createOscillator(),s=this.ctx.createGain(),a=this.createPanner(t);i.type="sine",i.frequency.setValueAtTime(e,this.ctx.currentTime),i.frequency.exponentialRampToValueAtTime(e*1.4,this.ctx.currentTime+.04),s.gain.setValueAtTime(.02,this.ctx.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.045),a?(i.connect(s),s.connect(a),a.connect(this.ctx.destination)):(i.connect(s),s.connect(this.ctx.destination)),i.start(),i.stop(this.ctx.currentTime+.05)}catch{}}playAnchorDrop(){if(this.enabled){this.triggerHaptic([20,50,20]);try{if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(880,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1760,this.ctx.currentTime+.15),t.gain.setValueAtTime(.06,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.28),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.3)}catch{}}}playSiriChime(){if(this.enabled){this.triggerHaptic([10,30,15,30]);try{if(this.init(),!this.ctx)return;[523.25,659.25,783.99,1046.5].forEach((t,i)=>{if(!this.ctx)return;const s=this.ctx.createOscillator(),a=this.ctx.createGain(),c=this.ctx.currentTime+i*.065;s.type="sine",s.frequency.setValueAtTime(t,c),a.gain.setValueAtTime(.035,c),a.gain.exponentialRampToValueAtTime(1e-4,c+.42),s.connect(a),a.connect(this.ctx.destination),s.start(c),s.stop(c+.45)})}catch{}}}playAlqamiChime(){if(this.enabled){this.triggerHaptic([35,60,35,80]);try{if(this.init(),!this.ctx)return;[523.25,783.99,987.77,1318.51].forEach((t,i)=>{if(!this.ctx)return;const s=this.ctx.createOscillator(),a=this.ctx.createGain(),c=this.ctx.currentTime+i*.055;s.type="sine",s.frequency.setValueAtTime(t,c),a.gain.setValueAtTime(.045,c),a.gain.exponentialRampToValueAtTime(1e-4,c+.65),s.connect(a),a.connect(this.ctx.destination),s.start(c),s.stop(c+.7)})}catch{}}}}const Si=new iA;function ma(o){if(!o)return"";if(/^(https?:|data:|blob:|\/\/)/i.test(o))return o;const t="./".replace(/\/+$/,""),i=o.replace(/^(\.\/|\/)+/,"");if(t&&t!=="."){const s=t.replace(/^\/+/,"");return s&&i.startsWith(`${s}/`)?`/${i}`:`${t}/${i}`}return`./${i}`}const rA=({className:o="w-6 h-6"})=>_e.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[_e.jsx("path",{d:"M24 3L29 14.5L41 11L37.5 23L48 27.5L37.5 32L41 44L29 40.5L24 52L19 40.5L7 44L10.5 32L0 27.5L10.5 23L7 11L19 14.5L24 3Z",fill:"currentColor",fillOpacity:"0.16"}),_e.jsx("path",{d:"M24 7L27.8 15.8L37.2 13.2L34.5 22.8L43.5 26.5L34.5 30.2L37.2 39.8L27.8 37.2L24 46L20.2 37.2L10.8 39.8L13.5 30.2L4.5 26.5L13.5 22.8L10.8 13.2L20.2 15.8L24 7Z",stroke:"currentColor",strokeWidth:"2.2",strokeLinejoin:"round"}),_e.jsx("circle",{cx:"24",cy:"26.5",r:"6",stroke:"currentColor",strokeWidth:"2"}),_e.jsx("circle",{cx:"24",cy:"26.5",r:"2.2",fill:"currentColor"})]}),zr=1.35;function sA(){const o=vt.useRef(null),[e,t]=vt.useState(!1),[i,s]=vt.useState("environment"),[a,c]=vt.useState(null),u=vt.useRef(new nA),[f,h]=vt.useState(!1),[m,g]=vt.useState(!1),_=vt.useRef(null),y=vt.useRef(null),M=vt.useRef(null),E=vt.useRef(null),S=vt.useRef(null),x=vt.useRef(new Hr(new V(0,1,0),zr)),L=vt.useRef(new Map),I=vt.useRef(null),[A,q]=vt.useState(p_[0]),[k,U]=vt.useState(null),[X,C]=vt.useState(0),[R,z]=vt.useState(!1),[se,J]=vt.useState(!0),[fe,he]=vt.useState(!1),[ae,ce]=vt.useState(!1),B=vt.useRef({pointerIds:new Set,pointers:new Map,draggedInstanceId:null,initialDistance:0,initialScale:1,initialAngle:0,initialRotationY:0}),le=vt.useRef(new Map);vt.useEffect(()=>{const me=/iPhone|iPad|iPod/.test(navigator.userAgent);ce(me),me&&typeof(DeviceOrientationEvent==null?void 0:DeviceOrientationEvent.requestPermission)=="function"&&g(!0)},[]);const ie=vt.useCallback(async me=>{try{c(null),o.current&&o.current.srcObject&&o.current.srcObject.getTracks().forEach(Je=>Je.stop());const xe=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:me},width:{ideal:1920},height:{ideal:1080}},audio:!1});o.current&&(o.current.srcObject=xe,o.current.setAttribute("playsinline","true"),o.current.setAttribute("autoplay","true"),o.current.setAttribute("muted","true"),await o.current.play(),t(!0),s(me))}catch(xe){console.warn("Camera access error:",xe),c(xe.name==="NotAllowedError"?"تم رفض إذن الكاميرا. يرجى تفعيل إذن الكاميرا في المتصفح لاستخدام الواقع المعزز.":"تعذر الوصول إلى الكاميرا الخلفية. جاري العرض في فضاء الواقع المعزز."),t(!1)}},[]);vt.useEffect(()=>(ie(i),()=>{o.current&&o.current.srcObject&&o.current.srcObject.getTracks().forEach(xe=>xe.stop())}),[ie,i]);const N=vt.useCallback(async()=>{Si.playSnap(),await eA()&&(u.current.start(),h(!0),g(!1))},[]);vt.useEffect(()=>{u.current.start();const me=setTimeout(()=>{u.current.sensorAlive&&(h(!0),g(!1))},600);return()=>{clearTimeout(me),u.current.stop()}},[]);const ne=vt.useCallback(()=>{Si.playSnap(),u.current.recenter();const me=I.current;if(me&&M.current){const xe=L.current.get(me);if(xe){const F=new V(0,0,-1).applyQuaternion(M.current.quaternion);F.y=0,F.normalize().multiplyScalar(1.6),xe.group.position.set(F.x,-zr,F.z)}}},[]);vt.useEffect(()=>{const me=_.current;if(!me)return;const xe=new mw;y.current=xe;const F=new Ln(68,window.innerWidth/window.innerHeight,.05,50);F.position.set(0,0,0),M.current=F;const Je=new pw({alpha:!0,antialias:!0,powerPreference:"high-performance"});Je.setSize(window.innerWidth,window.innerHeight),Je.setPixelRatio(Math.min(window.devicePixelRatio,2)),Je.shadowMap.enabled=!0,Je.shadowMap.type=y_,Je.outputColorSpace=Kt,Je.toneMapping=M_,Je.toneMappingExposure=1.1,me.appendChild(Je.domElement),E.current=Je;const Xe=new jw(16777215,1.5);xe.add(Xe);const Le=new Of(16774890,2.2);Le.position.set(1.5,4,2),Le.castShadow=!0,Le.shadow.mapSize.width=1024,Le.shadow.mapSize.height=1024,Le.shadow.camera.near=.1,Le.shadow.camera.far=10,Le.shadow.camera.left=-2.5,Le.shadow.camera.right=2.5,Le.shadow.camera.top=2.5,Le.shadow.camera.bottom=-2.5,Le.shadow.bias=-.001,xe.add(Le);const De=new Of(9161215,.6);De.position.set(-2,2,-1),xe.add(De);const ut=new yo(30,30),ke=new Aw({opacity:.38}),P=new un(ut,ke);P.rotation.x=-Math.PI/2,P.position.y=-zr,P.receiveShadow=!0,xe.add(P);const w=new ar,K=new yc(.18,.22,32);K.rotateX(-Math.PI/2);const de=new wi({color:62932,transparent:!0,opacity:.75,side:li}),ge=new un(K,de);w.add(ge);const re=new rh(.035,16);re.rotateX(-Math.PI/2);const Ve=new wi({color:16777215,transparent:!0,opacity:.9});w.add(new un(re,Ve)),w.position.set(0,-zr,-1.8),xe.add(w),S.current=w;const Re=()=>{if(!M.current||!E.current)return;const tt=window.innerWidth,Ke=window.innerHeight;M.current.aspect=tt/Ke,M.current.updateProjectionMatrix(),E.current.setSize(tt,Ke)};window.addEventListener("resize",Re);let Fe;const ht=new Vd,Me=new V(0,-zr,-1.8),He=tt=>{if(Fe=requestAnimationFrame(He),M.current){u.current.getCameraQuaternion(M.current.quaternion),ht.set(new V(0,0,0),new V(0,0,-1).applyQuaternion(M.current.quaternion));const Ke=new V;if(ht.ray.intersectPlane(x.current,Ke)&&Ke.z<0){const at=Math.hypot(Ke.x,Ke.z);at>.4&&at<7&&Me.copy(Ke)}else{const at=new V(0,0,-1).applyQuaternion(M.current.quaternion);at.y=0,at.normalize().multiplyScalar(1.8),Me.set(at.x,-zr,at.z)}S.current&&(S.current.position.lerp(Me,.2),S.current.rotation.y=tt*.001)}L.current.forEach(Ke=>{Ke.halo&&(Ke.halo.rotation.y=tt*.0015)}),E.current&&y.current&&M.current&&E.current.render(y.current,M.current)};return Fe=requestAnimationFrame(He),()=>{cancelAnimationFrame(Fe),window.removeEventListener("resize",Re),Je.domElement&&me.contains(Je.domElement)&&me.removeChild(Je.domElement),Je.dispose()}},[]);const Oe=vt.useCallback(async me=>{const xe=le.current.get(me.id);if(xe)return xe.clone();const F=new k1;F.setDecoderPath(ma("draco/"));const Je=new i1;Je.setDRACOLoader(F);const Xe=ma(me.model.glb.replace(/^\//,""));return new Promise((Le,De)=>{Je.load(Xe,ut=>{const ke=ut.scene,P=new Fi().setFromObject(ke),w=P.getSize(new V),K=P.getCenter(new V),de=Math.max(w.x,w.y,w.z)||1,re=.55*(me.model.scale||1)/de,Ve=new ar;ke.scale.setScalar(re),ke.position.x=-K.x*re,ke.position.y=-P.min.y*re,ke.position.z=-K.z*re,ke.traverse(Re=>{Re.isMesh&&(Re.castShadow=!0,Re.receiveShadow=!0,Re.material&&(Re.material.roughness=Math.max(.2,Re.material.roughness??.5)))}),Ve.add(ke),le.current.set(me.id,Ve),Le(Ve.clone())},void 0,ut=>{console.error("Failed to load artifact model:",Xe,ut),De(ut)})})},[]),Z=vt.useCallback(async(me=A)=>{if(y.current){z(!0);try{const xe=await Oe(me),F=y.current,Je=`${me.id}-${Date.now()}`,Xe=S.current?S.current.position.clone():new V(0,-zr,-1.8);if(xe.position.copy(Xe),M.current){const re=new V().subVectors(M.current.position,Xe);xe.rotation.y=Math.atan2(re.x,re.z)}const Le=document.createElement("canvas");Le.width=128,Le.height=128;const De=Le.getContext("2d");if(De){const re=De.createRadialGradient(64,64,8,64,64,60);re.addColorStop(0,"rgba(0, 0, 0, 0.55)"),re.addColorStop(.5,"rgba(0, 0, 0, 0.22)"),re.addColorStop(1,"rgba(0, 0, 0, 0)"),De.fillStyle=re,De.fillRect(0,0,128,128)}const ut=new ww(Le),ke=new wi({map:ut,transparent:!0,depthWrite:!1}),P=new un(new yo(.75,.75),ke);P.rotation.x=-Math.PI/2,P.position.y=.002,xe.add(P);const w=new yc(.32,.35,32);w.rotateX(-Math.PI/2);const K=new wi({color:16096779,transparent:!0,opacity:.85,side:li}),de=new un(w,K);de.position.y=.004,xe.add(de),F.add(xe);const ge={instanceId:Je,artifact:me,group:xe,shadow:P,halo:de};L.current.forEach(re=>{re.halo&&(re.halo.visible=!1)}),L.current.set(Je,ge),I.current=Je,U(Je),C(L.current.size),se&&Si.playAlqamiChime()}catch(xe){console.error("Error placing model:",xe)}finally{z(!1)}}},[A,Oe,se]),ue=me=>{I.current=me,U(me),L.current.forEach((xe,F)=>{xe.halo&&(xe.halo.visible=F===me),F===me&&q(xe.artifact)}),se&&Si.playSnap()},Te=me=>{const xe=I.current;if(!xe)return;const F=L.current.get(xe);if(!F)return;const Je=F.group.scale.x,Xe=Math.max(.25,Math.min(3.5,Je*me));F.group.scale.setScalar(Xe),se&&Si.playPinchTap()},Se=()=>{const me=I.current;if(!me)return;const xe=L.current.get(me);xe&&(xe.group.rotation.y+=Math.PI/4,se&&Si.playPinchTap())},Ce=()=>{y.current&&(L.current.forEach(me=>{var xe;(xe=y.current)==null||xe.remove(me.group),me.group.traverse(F=>{F.geometry&&F.geometry.dispose(),F.material&&(Array.isArray(F.material)?F.material.forEach(Je=>Je.dispose()):F.material.dispose())})}),L.current.clear(),I.current=null,U(null),C(0),se&&Si.playSnap())},ze=me=>{const xe=B.current;if(xe.pointerIds.add(me.pointerId),xe.pointers.set(me.pointerId,{x:me.clientX,y:me.clientY}),M.current&&y.current){const F=new yt(me.clientX/window.innerWidth*2-1,-(me.clientY/window.innerHeight)*2+1),Je=new Vd;Je.setFromCamera(F,M.current);let Xe=null;for(const[Le,De]of L.current.entries())if(Je.intersectObjects(De.group.children,!0).length>0){Xe=Le;break}Xe?(ue(Xe),xe.draggedInstanceId=Xe):xe.draggedInstanceId=I.current}if(xe.pointerIds.size===2){const F=Array.from(xe.pointers.values()),Je=F[0],Xe=F[1];xe.initialDistance=Math.hypot(Xe.x-Je.x,Xe.y-Je.y),xe.initialAngle=Math.atan2(Xe.y-Je.y,Xe.x-Je.x);const Le=I.current;if(Le){const De=L.current.get(Le);De&&(xe.initialScale=De.group.scale.x,xe.initialRotationY=De.group.rotation.y)}}},nt=me=>{const xe=B.current;if(xe.pointers.has(me.pointerId)){if(xe.pointers.set(me.pointerId,{x:me.clientX,y:me.clientY}),xe.pointerIds.size>=2){const F=I.current;if(!F)return;const Je=L.current.get(F);if(!Je)return;const Xe=Array.from(xe.pointers.values()),Le=Xe[0],De=Xe[1],ut=Math.hypot(De.x-Le.x,De.y-Le.y),ke=Math.atan2(De.y-Le.y,De.x-Le.x);if(xe.initialDistance>10){const w=ut/xe.initialDistance,K=Math.max(.2,Math.min(4,xe.initialScale*w));Je.group.scale.setScalar(K)}const P=ke-xe.initialAngle;Je.group.rotation.y=xe.initialRotationY-P;return}if(xe.pointerIds.size===1&&xe.draggedInstanceId&&M.current){const F=L.current.get(xe.draggedInstanceId);if(!F)return;const Je=new yt(me.clientX/window.innerWidth*2-1,-(me.clientY/window.innerHeight)*2+1),Xe=new Vd;Xe.setFromCamera(Je,M.current);const Le=new V;if(Xe.ray.intersectPlane(x.current,Le)&&Le.z<0){const ut=Math.hypot(Le.x,Le.z);ut>.4&&ut<8&&F.group.position.set(Le.x,-zr,Le.z)}}else if(xe.pointerIds.size===1&&!f){const F=xe.pointers.get(me.pointerId);if(F){const Je=(me.clientX-F.x)*.005,Xe=(me.clientY-F.y)*.005;u.current.addLook(Je,Xe)}}}},Ct=me=>{const xe=B.current;xe.pointerIds.delete(me.pointerId),xe.pointers.delete(me.pointerId),xe.pointerIds.size===0&&(xe.draggedInstanceId=null)};return _e.jsxs("div",{className:"relative w-screen h-[100dvh] overflow-hidden select-none bg-black text-white font-sans",children:[_e.jsx("video",{ref:o,playsInline:!0,autoPlay:!0,muted:!0,className:`fixed inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none -z-10 ${e?"opacity-100":"opacity-0"}`}),!e&&_e.jsxs("div",{className:"fixed inset-0 -z-20 bg-gradient-to-b from-[#1c1815] via-[#2d221b] to-[#120f0d] flex flex-col items-center justify-center p-6 text-center",children:[_e.jsx("div",{className:"w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center mb-4 text-amber-300 animate-pulse",children:_e.jsx(h_,{className:"w-8 h-8"})}),_e.jsx("h2",{className:"text-xl font-bold mb-2",children:"عالم علقمي للواقع المعزز"}),_e.jsx("p",{className:"text-sm text-white/70 max-w-sm mb-6",children:a||"جاري تشغيل كاميرا الواقع المعزز لعرض المقتنيات في غرفتك…"}),_e.jsxs("button",{onClick:()=>ie(i),className:"px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm shadow-lg shadow-amber-500/30 transition-transform active:scale-95 flex items-center gap-2",children:[_e.jsx(h_,{className:"w-4 h-4"}),_e.jsx("span",{children:"تشغيل الكاميرا"})]})]}),_e.jsx("div",{ref:_,onPointerDown:ze,onPointerMove:nt,onPointerUp:Ct,onPointerCancel:Ct,className:"absolute inset-0 touch-none cursor-crosshair z-10"}),m&&_e.jsxs("div",{className:"absolute top-16 left-1/2 -translate-x-1/2 z-40 w-[90vw] max-w-md bg-black/75 backdrop-blur-xl border border-amber-400/40 rounded-2xl p-3.5 shadow-2xl flex items-center justify-between gap-3 text-right",dir:"rtl",children:[_e.jsxs("div",{className:"text-xs text-white/90",children:[_e.jsx("p",{className:"font-bold text-amber-300",children:"تفعيل مستشعر الحركة (Gyro)"}),_e.jsx("p",{className:"text-white/75 text-[11px]",children:"لتثبيت المقتنيات بدقة في غرفتك أثناء تحريك هاتفك"})]}),_e.jsx("button",{onClick:N,className:"px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs whitespace-nowrap active:scale-95 transition-transform shadow-md",children:"تفعيل الآن"})]}),_e.jsxs("header",{className:"absolute top-0 inset-x-0 z-30 flex items-center justify-between px-4 pt-4 pb-2 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none",children:[_e.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[_e.jsx("div",{className:"w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center p-1.5 text-amber-400 shadow-md",children:_e.jsx(rA,{className:"w-full h-full"})}),_e.jsxs("div",{children:[_e.jsxs("h1",{className:"text-sm font-bold tracking-tight text-white drop-shadow",children:["علقمي ",_e.jsx("span",{className:"text-amber-400",children:"·"})," Alqami AR"]}),_e.jsx("p",{className:"text-[10px] text-white/70 font-medium",children:"عالم المقتنيات الإسلامية"})]})]}),_e.jsxs("div",{className:"flex items-center gap-1.5 pointer-events-auto",children:[_e.jsx("button",{onClick:ne,className:"w-8 h-8 rounded-full bg-black/50 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 active:scale-95 transition",title:"إعادة التوجيه إلى الأمام · Recenter AR Heading",children:_e.jsx(G1,{className:"w-4 h-4 text-cyan-400"})}),_e.jsx("button",{onClick:()=>{Si.playSnap(),s(me=>me==="environment"?"user":"environment")},className:"w-8 h-8 rounded-full bg-black/50 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 active:scale-95 transition",title:"تبديل الكاميرا · Flip Camera",children:_e.jsx(q1,{className:"w-3.5 h-3.5 text-white"})}),_e.jsx("button",{onClick:()=>{Si.enabled=!se,J(!se)},className:"w-8 h-8 rounded-full bg-black/50 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 active:scale-95 transition",title:se?"كتم الصوت":"تشغيل الصوت",children:se?_e.jsx(Z1,{className:"w-3.5 h-3.5 text-amber-400"}):_e.jsx(Q1,{className:"w-3.5 h-3.5 text-white/50"})}),_e.jsx("button",{onClick:()=>{Si.playSnap(),he(!0)},className:"w-8 h-8 rounded-full bg-black/50 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 active:scale-95 transition",title:"تفاصيل المقتنى · Historical Details",children:_e.jsx(W1,{className:"w-4 h-4 text-amber-300"})})]})]}),_e.jsx("div",{className:"absolute top-14 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center",children:_e.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[11px] text-white/85 shadow-lg",children:[_e.jsx(K1,{className:"w-3 h-3 text-cyan-400 animate-spin"}),_e.jsx("span",{children:"وجّه هاتفك نحو الأرضية أو الطاولة ثم اضغط تثبيت"})]})}),R&&_e.jsxs("div",{className:"absolute inset-0 z-50 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center pointer-events-none",children:[_e.jsx("div",{className:"w-12 h-12 rounded-full border-3 border-amber-400/20 border-t-amber-400 animate-spin mb-3"}),_e.jsx("p",{className:"text-xs font-semibold text-white drop-shadow",children:"جاري تحميل المجسم ثلاثي الأبعاد…"})]}),_e.jsxs("div",{className:"absolute bottom-[108px] left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 pointer-events-auto max-w-[95vw]",children:[_e.jsxs("button",{onClick:()=>Z(A),disabled:R,className:"h-10 px-5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs shadow-xl shadow-amber-500/25 flex items-center gap-2 active:scale-95 transition transform",children:[_e.jsx(qd,{className:"w-4 h-4"}),_e.jsx("span",{children:"تثبيت في الغرفة · Place"})]}),X>0&&_e.jsxs("div",{className:"flex items-center gap-1 p-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 shadow-xl",children:[_e.jsx("button",{onClick:()=>Te(.85),className:"w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center text-white/80 active:scale-90 transition",title:"تصغير الحجم · Scale Down",children:_e.jsx(j1,{className:"w-3.5 h-3.5"})}),_e.jsx("button",{onClick:()=>Te(1.15),className:"w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center text-white/80 active:scale-90 transition",title:"تكبير الحجم · Scale Up",children:_e.jsx(qd,{className:"w-3.5 h-3.5"})}),_e.jsx("button",{onClick:Se,className:"w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center text-white/80 active:scale-90 transition",title:"تدوير المجسم · Rotate 45°",children:_e.jsx(Y1,{className:"w-3.5 h-3.5 text-cyan-300"})}),_e.jsx("button",{onClick:Ce,className:"w-8 h-8 rounded-full hover:bg-rose-500/30 flex items-center justify-center text-rose-400 active:scale-90 transition",title:"مسح كافة المقتنيات · Clear All",children:_e.jsx($1,{className:"w-3.5 h-3.5"})})]}),ae&&_e.jsxs("a",{rel:"ar",href:ma("immersive/vision-studio.usdz"),className:"h-10 px-3.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-xl flex items-center gap-1.5 text-xs text-white font-medium shadow-lg active:scale-95 transition",title:"عرض بتقنية Apple Quick Look الأصلية",children:[_e.jsx(X1,{className:"w-3.5 h-3.5 text-cyan-400"}),_e.jsx("span",{children:"Apple AR"})]})]}),_e.jsxs("footer",{className:"absolute bottom-0 inset-x-0 z-30 pb-3 pt-2 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-auto",children:[_e.jsx("div",{className:"flex items-center gap-2.5 overflow-x-auto px-4 py-1 no-scrollbar scroll-smooth",children:p_.map(me=>{const xe=A.id===me.id;return _e.jsxs("button",{onClick:()=>{Si.playSnap(),q(me)},className:`flex-shrink-0 flex items-center gap-2 p-1.5 pr-3 rounded-2xl backdrop-blur-xl transition-all duration-200 border ${xe?"bg-amber-500/25 border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.35)] scale-105":"bg-black/50 hover:bg-white/10 border-white/10 text-white/70"}`,children:[_e.jsx("div",{className:"w-11 h-11 rounded-xl overflow-hidden bg-black/60 border border-white/10 flex-shrink-0",children:_e.jsx("img",{src:ma(me.image.replace(/^\//,"")),alt:me.title.ar,className:"w-full h-full object-cover",loading:"lazy"})}),_e.jsxs("div",{className:"text-right flex flex-col justify-center min-w-[95px] max-w-[130px]",dir:"rtl",children:[_e.jsx("span",{className:"text-[11px] font-bold truncate leading-tight text-white",children:me.title.ar}),_e.jsx("span",{className:"text-[9px] text-white/60 truncate leading-tight mt-0.5",dir:"ltr",children:me.title.en})]})]},me.id)})}),_e.jsx("div",{className:"text-center pt-1.5 pb-0.5",children:_e.jsx("span",{className:"text-[9px] text-white/40 tracking-wider font-light",children:"designed & developed by isaac faleh · تصميم و تطوير اسحاق فالح"})})]}),fe&&_e.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200",children:_e.jsxs("div",{className:"w-full sm:max-w-md bg-[#161311] border border-white/15 rounded-t-3xl sm:rounded-3xl p-5 text-right shadow-2xl max-h-[85vh] overflow-y-auto",dir:"rtl",children:[_e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/10 mb-4",children:[_e.jsx("button",{onClick:()=>he(!1),className:"w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 transition",children:_e.jsx(J1,{className:"w-4 h-4"})}),_e.jsxs("div",{className:"text-right",children:[_e.jsx("span",{className:"text-[10px] font-semibold text-amber-400 uppercase tracking-wider",children:A.categoryLabel.ar}),_e.jsx("h3",{className:"text-base font-bold text-white",children:A.title.ar})]})]}),_e.jsxs("div",{className:"w-full h-44 rounded-2xl overflow-hidden bg-black/60 border border-white/10 mb-4 relative",children:[_e.jsx("img",{src:ma(A.image.replace(/^\//,"")),alt:A.title.ar,className:"w-full h-full object-cover"}),_e.jsx("div",{className:"absolute bottom-2 right-2 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] text-amber-300 font-mono",children:A.period.ar})]}),_e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs mb-4",children:[_e.jsxs("div",{className:"p-2.5 rounded-xl bg-white/5 border border-white/5",children:[_e.jsx("span",{className:"text-[10px] text-white/50 block",children:"المصدر / المستودع:"}),_e.jsx("span",{className:"font-semibold text-white/90 text-[11px] leading-tight",children:A.institution.ar})]}),_e.jsxs("div",{className:"p-2.5 rounded-xl bg-white/5 border border-white/5",children:[_e.jsx("span",{className:"text-[10px] text-white/50 block",children:"الأبعاد الواقعية:"}),_e.jsx("span",{className:"font-semibold text-white/90 text-[11px] leading-tight font-mono",children:A.details.dimensions})]}),_e.jsxs("div",{className:"p-2.5 rounded-xl bg-white/5 border border-white/5",children:[_e.jsx("span",{className:"text-[10px] text-white/50 block",children:"المادة والتقنية:"}),_e.jsx("span",{className:"font-semibold text-white/90 text-[11px] leading-tight",children:A.details.material.ar})]}),_e.jsxs("div",{className:"p-2.5 rounded-xl bg-white/5 border border-white/5",children:[_e.jsx("span",{className:"text-[10px] text-white/50 block",children:"الصانع / المؤلف:"}),_e.jsx("span",{className:"font-semibold text-white/90 text-[11px] leading-tight truncate",children:A.creator.ar})]})]}),_e.jsxs("div",{className:"text-xs text-white/80 leading-relaxed space-y-2 mb-6",children:[_e.jsx("p",{children:A.description.ar}),_e.jsx("p",{className:"text-[11px] text-white/55 font-normal leading-normal text-left",dir:"ltr",children:A.description.en})]}),_e.jsxs("button",{onClick:()=>{he(!1),Z(A)},className:"w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 active:scale-95 transition",children:[_e.jsx(qd,{className:"w-4 h-4"}),_e.jsx("span",{children:"تثبيت هذا المقتنى في الغرفة الآن"})]})]})})]})}Zv.createRoot(document.getElementById("root")).render(_e.jsx(Wv.StrictMode,{children:_e.jsx(sA,{})}));
