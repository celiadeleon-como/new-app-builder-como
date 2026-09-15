const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/comments-CcwKpnET.js","assets/comments-BgV5jwaY.css"])))=>i.map(i=>d[i]);
var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ae());else{var t=n(l);t!==null&&ce(x,t.startTime-e)}}var ee=!1,te=-1,S=5,ne=-1;function re(){return g?!0:!(e.unstable_now()-ne<S)}function ie(){if(g=!1,ee){var t=e.unstable_now();ne=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(te),te=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&re());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ce(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?ae():ee=!1}}}var ae;if(typeof y==`function`)ae=function(){y(ie)};else if(typeof MessageChannel<`u`){var oe=new MessageChannel,se=oe.port2;oe.port1.onmessage=ie,ae=function(){se.postMessage(null)}}else ae=function(){_(ie,0)};function ce(t,n){te=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):S=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(te),te=-1):h=!0,ce(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ae()))),r},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var S={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function re(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ie(e,t){return re(e.type,t,e.props)}function ae(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function oe(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var se=/\/+/g;function ce(e,t){return typeof e==`object`&&e&&e.key!=null?oe(``+e.key):t.toString(36)}function C(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ce(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(se,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(ae(o)&&(o=ie(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(se,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ce(a,u),c+=le(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ce(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(C(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function w(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:w,forEach:function(e,t,n){w(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return w(e,function(){t++}),t},toArray:function(e){return w(e,function(e){return e})||[]},only:function(e){if(!ae(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return re(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return re(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ae,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}},e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.2.8`})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=i();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var a={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return s(e,t,null,r)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.8`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=n(),r=i(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),te=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),ne=Symbol.for(`react.suspense`),re=Symbol.for(`react.suspense_list`),ie=Symbol.for(`react.memo`),ae=Symbol.for(`react.lazy`),oe=Symbol.for(`react.activity`),se=Symbol.for(`react.memo_cache_sentinel`),ce=Symbol.iterator;function C(e){return typeof e!=`object`||!e?null:(e=ce&&e[ce]||e[`@@iterator`],typeof e==`function`?e:null)}var le=Symbol.for(`react.client.reference`);function w(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ne:return`Suspense`;case re:return`SuspenseList`;case oe:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case te:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ie:return t=e.displayName||null,t===null?w(e.type)||`Memo`:t;case ae:t=e._payload,e=e._init;try{return w(e(t))}catch{}}return null}var ue=Array.isArray,T=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function D(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function O(e,t){pe++,fe[pe]=e.current,e.current=t}var he=me(null),ge=me(null),_e=me(null),ve=me(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}D(he),O(he,e)}function be(){D(he),D(ge),D(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(D(he),D(ge)),ve.current===e&&(D(ve),Qf._currentValue=de)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function k(e){e[Ct]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return Ae.call(Ft,e)?!0:Ae.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(ue(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&nn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&nn(e,a,t[a])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[_t]||null;if(!i)throw Error(s(90));Jt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(h({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function vr(e){if(Wt(Dt(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(vn){var xr;if(vn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,dn(e)),gn(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=vn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Gt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Ed(Br,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};vn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),jt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yi(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)vi(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case oe:return e=_i(31,n,t,i),e.elementType=oe,e.lanes=a,e;case y:return Si(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=_i(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case ne:return e=_i(13,n,t,i),e.elementType=ne,e.lanes=a,e;case re:return e=_i(19,n,t,i),e.elementType=re,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case te:o=10;break a;case ee:o=9;break a;case S:o=11;break a;case ie:o=14;break a;case ae:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=_i(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Si(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Ci(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function wi(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function Ti(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ei=new WeakMap;function Di(e,t){if(typeof e==`object`&&e){var n=Ei.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Ei.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-qe(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(s(519));function Ki(e){throw Qi(Di(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function Yi(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=uf(e)}else t===27?(t=A,Zd(e.type)?(e=lf,lf=null,A=e):A=t):A=Hi?cf(e.stateNode.nextSibling):null;return!0}function Xi(){A=Hi=null,j=!1}function Zi(){var e=Ui;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ui=null),e}function Qi(e){Ui===null?Ui=[e]:Ui.push(e)}var $i=me(null),ea=null,ta=null;function na(e,t,n){O($i,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=$i.current,D($i)}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function aa(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ia(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ia(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function oa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;jr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ve.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&aa(t,e,n,r),t.flags|=262144}function sa(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){ea=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return da(ea,e)}function ua(e,t){return ea===null&&ca(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ta===null){if(e===null)throw Error(s(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=T.S;T.S=function(e,t){tu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=me(null);function Ea(){var e=Ta.current;return e===null?G.pooledCache:e}function Da(e,t){t===null?O(Ta,Ta.current):O(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(s(460)),Aa=Error(s(474)),ja=Error(s(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(s(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(s(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=yi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ci(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===ae&&Fa(a)===t.type)?(t=i(t,n.props),Ha(t,n),t.return=e,t):(t=xi(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ti(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Si(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=xi(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ti(t,e.mode,n),t.return=e,t;case ae:return t=Fa(t),f(e,t,n)}if(ue(t)||C(t))return t=Si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===te)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ae:return n=Fa(n),p(e,t,n,r)}if(ue(n)||C(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===te)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ae:return r=Fa(r),m(e,t,n,r,i)}if(ue(r)||C(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===te)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),j&&Li(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),j&&Li(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ae&&Fa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ha(c,a),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}a.type===y?(c=Si(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=xi(a.type,a.key,a.props,null,e.mode,c),Ha(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}t(e,r),r=r.sibling}c=Ti(a,e.mode,c),c.return=e,e=c}return o(e);case ae:return a=Fa(a),b(e,r,a,c)}if(ue(a))return h(e,r,a,c);if(C(a)){if(l=C(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Va(a),c);if(a.$$typeof===te)return b(e,r,ua(e,a),c);Ua(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Ci(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=me(null),oo=me(0);function so(e,t){e=Gl,O(oo,e),O(ao,t),Gl=e|t.baseLanes}function co(){O(oo,Gl),O(ao,ao.current)}function lo(){Gl=oo.current,D(ao),D(oo)}var uo=me(null),fo=null;function po(e){var t=e.alternate;O(N,N.current&1),O(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){O(N,N.current),O(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(O(N,N.current),O(uo,e),fo===null&&(fo=e)):go(e)}function go(){O(N,N.current),O(uo,uo.current)}function _o(e){D(uo),fo===e&&(fo=null),D(N)}var N=me(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(s(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){T.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(s(300));e===null||z||(e=e.dependencies,e!==null&&sa(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var i=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=i)throw Error(s(301));if(i+=1,I=F=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}T.H=Ks,a=t(n,r)}while(xo);return a}function jo(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(s(467)):Error(s(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===te)return la(e)}throw Error(s(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=se;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,P.lanes|=p,Kl|=p;f=u.action,So&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,P.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!jr(a,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);jr(a,t.memoizedState)||(z=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Wo(e,t,n){var r=P,i=R(),a=j;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!jr((F||i).memoizedState,n);if(o&&(i.memoizedState=n,z=!0),i=i.queue,hs(qo.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,i,n,t),null),G===null)throw Error(s(349));a||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Yo(e){var t=fi(e,2);t!==null&&hu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,i){if(Bs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};T.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,$o(t,a)):(a.next=n.next,t.pending=n.next=a)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(j){var n=G.formState;if(n!==null){a:{var r=P;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=cf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),P.lanes|=e,Kl|=e,n)}function Es(e,t,n,r){return jr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=mu(),P.lanes|=e,Kl|=e,t):(e=Ts(e,n,r),jr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,zs(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),pu(e)):Rs(e,t,r,pu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=As(e).queue;Ds(e,i,t,de,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},pu())}function Ms(){return la(Qf)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Xa(n);var r=Za(t,e,n);r!==null&&(hu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=di(e,t,n,r),n!==null&&(hu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,pu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ui(e,t,i,0),G===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return hu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(s(479))}else t=di(e,n,r,2),t!==null&&hu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Us={readContext:la,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:la,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:la,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,i=Fo();if(j){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||Go(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ms(qo.bind(null,r,a,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),n},useId:function(){var e=Fo(),t=G.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(hu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ai(e)}function $s(e){console.error(e)}function ec(e){ai(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&oa(t,n,i,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(j)return t=uo.current,t===null?(r!==Gi&&(t=Error(s(423),{cause:r}),Qi(Di(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Di(r,n),i=rc(e.stateNode,r,i),$a(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Gi&&(e=Error(s(422),{cause:r}),Qi(Di(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Di(a,n),Zl===null?Zl=[a]:Zl.push(a),Y!==4&&(Y=2),t===null)return!0;r=Di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(iu===null||!iu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=ic(i),ac(i,e,n,r),$a(n,i),!1}n=n.return}while(n!==null);return!1}var sc=Error(s(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ca(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&s&&zi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=yi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&oa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return hc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(mo(t),i)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(z||oa(e,t,n,!1),i=(n&e.childLanes)!==0,z||i){if(r=G,r!==null&&(o=ut(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,fi(e,o),hu(r,e,o),sc;Du(),t=gc(e,t,n)}else e=a.treeContext,A=cf(o.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=yi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return ca(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return ca(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(ca(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=la(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?la(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=la(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=la(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&sa(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Xi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Ec(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(N.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(j){if(i?po(t):go(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(go(t),i=t.mode,c=Oc({mode:`hidden`,children:c},i),r=Si(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,i=t.mode,r=Oc({mode:`visible`,children:r.children},i),c=Si(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Qi({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||oa(e,t,n,!1),o=(n&e.childLanes)!==0,z||o){if(o=G,o!==null&&(r=ut(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),hu(o,e,r),sc;af(c)||Du(),t=kc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=cf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return i?(go(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=yi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Si(c,i,n,null),c.flags|=2):c=yi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(i=c.cachePool,i===null?i=Oa():(l=M._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=yi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,O(N,o),cc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&sa(e)))}function Fc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),na(t,M,e.memoizedState.cache),Xi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:na(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===S){t.tag=11,t=lc(null,t,e,r,n);break a}if(i===ie){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=w(e)||e,Error(s(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Zs(r,t.pendingProps),xc(e,t,r,i,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ya(e,t),no(t,r,null,n);var o=t.memoizedState;if(r=o.cache,na(t,M,r),r!==a.cache&&aa(t,[M],n,!0),to(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==i){i=Di(Error(s(424)),t),Qi(i),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=cf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xi(),r===i){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),k(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&j&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Hi=t,Wi=!0,i=A,Zd(t.type)?(lf=i,A=cf(r.firstChild)):A=i),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((i=r=A)&&(r=tf(r,t.type,t.pendingProps,Wi),r===null?i=!1:(t.stateNode=r,Hi=t,A=cf(r.firstChild),Wi=!1,i=!0)),i||Ki(t)),xe(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Oo(e,t,jo,null,null,n),Qf._currentValue=i),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=nf(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return Ec(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,na(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,ca(t),i=la(i),r=r(i),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return ca(t),r=la(M),e===null?(i=Ea(),i===null&&(i=G,a=ha(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ja(t),na(t,M,i)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,na(t,M,r),r!==i.cache&&aa(t,[M],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),na(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Xl|=t)}function Vc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(M),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zi())),B(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Lc(t),a===null?(B(t),Rc(t,i,null,r,n)):(B(t),zc(t,a))):a?a===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,a)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,i,e,r,n)),null;case 27:if(Se(t),n=_e.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}e=he.current,Yi(t)?qi(t,e):(e=ff(i,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(Se(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}if(a=he.current,Yi(t))qi(t,a);else{var o=Bd(_e.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[gt]=t,a[_t]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=_e.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Hi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ki(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Yi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[gt]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(s(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[gt]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),i=!1}else i=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),B(t),null;case 10:return ra(t.type),B(t),null;case 19:if(D(N),r=t.memoizedState,r===null)return B(t),null;if(i=!!(t.flags&128),a=r.rendering,a===null)if(i)Vc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=vo(e),a!==null){for(t.flags|=128,Vc(r,!1),e=a.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bi(n,e),n=n.sibling;return O(N,N.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>nu&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304)}else{if(!i)if(e=vo(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!j)return B(t),null}else 2*Fe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=N.current,O(N,i?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&D(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(M),B(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Uc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(M),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(N),null;case 4:return be(),null;case 10:return ra(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&D(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Bi(t),t.tag){case 3:ra(M),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:D(N);break;case 10:ra(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&D(Ta);break;case 24:ra(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Z(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,H=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Zs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Gc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?wl(e,n,!!(n.subtreeFlags&8772)):Sl(e,n),il=i,V=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:V||Xc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),dl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,dl(e,t,n),V=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(s(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(s(160));fl(a,o,i),U=null,ul=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=vl;if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[Ct]||a[gt]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[gt]=e,k(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[gt]=e,k(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){i=e.stateNode;try{en(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Qc(e,i,n===null?i:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=vl,vl=gf(t.containerInfo),_l(t,e),vl=i,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||i,V=d||l,_l(t,e),V=d,il=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||il||V||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;nl(e,el(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(en(a,``),n.flags&=-33),nl(e,el(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;tl(e,el(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Cl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Xc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Gc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Yc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(ll(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var zl={getCacheForType:function(e){var t=la(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return la(M).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:T.T===null?pt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||j){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Yl=e}else Yl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),ot(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(s(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||nt(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Ul&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=a,ql|=a,i=4;break a}a=Ql,Ql=i,a!==null&&(Ql===null?Ql=a:Ql.push.apply(Ql,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=eu+300-Fe(),10<i)){if(yu(r,t,Yl,!Hl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,`Throttled`,-0,0),i);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Nl(t,a,d);var m=(a&62914560)===a?eu-Fe():(a&4194048)===a?tu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ta=ea=null,Po(e),za=null,Ba=0,e=K;for(;e!==null;)Wc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=yi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=nt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,li(),n}function Cu(e,t){P=null,T.H=Us,t===ka||t===ja?(t=La(),J=3):t===Aa?(t=La(),J=4):J=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,tc(e,Di(t,e.current)))}function wu(){var e=uo.current;return e===null?!0:(q&4194048)===q?fo===null:(q&62914560)===q||q&536870912?e===fo:!1}function Tu(){var e=T.H;return T.H=Us,e===null?Us:e}function Eu(){var e=T.A;return T.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&uo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ta=ea=null,W=r,T.H=i,T.A=a,K===null&&(G=null,q=0,li()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),i=Eu();G!==e||q!==t?(ru=null,nu=Fe()+500,Su(e,t)):Ul=nt(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,a,1);break;case 2:case 9:if(Na(a)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Na(a)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Wf(o):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,a,5);break;case 6:J=0,Vl=null,Pu(e,t,a,6);break;case 8:xu(),Y=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ta=ea=null,T.H=r,T.A=i,W=n,K===null?(G=null,q=0,li(),Y):0}function ju(){for(;K!==null&&!Ne();)Mu(K)}function Mu(e){var t=Ic(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Po(t);default:Wc(n,t),t=K=bi(t,Gl),t=Ic(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ta=ea=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,q)){Y=1,tc(e,Di(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,tc(e,Di(n,e.current)),K=null;return}t.flags&32768?(j||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Hc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=ci,st(e,n,a,o,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=T.T,T.T=null,i=E.p,E.p=2,o=W,W|=4;try{sl(e,t,n)}finally{W=o,E.p=i,T.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,E.p=r,T.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,E.p=r,T.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=T.T,i=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var a=au,o=su;if(X=0,ou=au=null,su=0,W&6)throw Error(s(331));var c=W;if(W|=4,Il(a.current),Ol(a,a.current,o,n),W=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,a)}catch{}return!0}finally{E.p=i,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Di(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Di(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Fe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=fi(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=tt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=tt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ri.length;hd++){var gd=ri[hd];ii(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Tt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),o=[];a:{var s=ni.get(e);if(s!==void 0){var c=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:c=Jn;break;case`focusin`:u=`focus`,c=zn;break;case`focusout`:u=`blur`,c=zn;break;case`beforeblur`:case`afterblur`:c=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Xn;break;case Yr:case Xr:case Zr:c=Bn;break;case ti:c=Zn;break;case`scroll`:case`scrollend`:c=Mn;break;case`wheel`:c=Qn;break;case`copy`:case`cut`:case`paste`:c=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Yn;break;case`toggle`:case`beforetoggle`:c=$n}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?Tt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Dt(c),h=u==null?s:Dt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Dt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=yr;else if(pr(s))if(br)v=kr;else{v=Dr;var y=Er}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&an(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Xt(s,`number`,s.value)}switch(y=r?Dt(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(o,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(o,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,a);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:rn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[_t]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}$t(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?js(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),k(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),k(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),k(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);k(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),k(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),k(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=_e.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Ot(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),k(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,k(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),k(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,k(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),k(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,k(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),k(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,k(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),k(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:te,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=hi,e):hi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(hu(n,e,t),Qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=fi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.8`)throw Error(s(527,Lp,`19.2.8`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Qs,a=$s,o=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=i(),u=c(),d=`      <div class="cp-master">
        <h3 class="cp-head">App screen</h3>
        <div class="cp-page-title">Home</div>
        <div class="cp-page-sub">Click any widget to edit it. Every change reflects live on the phone.</div>

        <div class="cp-focus-recap" id="cp-focus-recap">
          <div class="cp-focus-ic" id="cp-focus-ic"></div>
          <div class="cp-focus-text">
            <div class="cp-focus-lbl">App focus</div>
            <div class="cp-focus-val" id="cp-focus-val">Not chosen yet</div>
          </div>
          <button class="cp-focus-change" id="cp-focus-change" type="button" aria-haspopup="menu" aria-expanded="false">
            Change
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="cp-focus-menu" id="cp-focus-menu" role="menu" aria-label="Change app focus">
            <button type="button" role="menuitemradio" aria-checked="false" data-focus="loyalty">Lead with loyalty</button>
            <button type="button" role="menuitemradio" aria-checked="false" data-focus="ordering">Lead with ordering</button>
          </div>
        </div>

        <div class="px-ordering-dependency" id="px-ordering-dependency" hidden>
          <span class="px-ordering-lock" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8.5 10V7.5a3.5 3.5 0 017 0V10"/></svg>
          </span>
          <span><strong>Connect ordering to activate this layout</strong><small>The phone shows a clearly labelled sample until your provider is connected.</small></span>
          <button type="button" id="px-connect-ordering">Connect</button>
        </div>

        <div class="cp-section open" id="cp-home-widgets" data-pendo-guide-id="home-widget-composition">
          <div class="cp-head-row">Home widgets <span class="chev">›</span></div>
          <div class="cp-body">
            <div class="cp-widget-row off">
              <span class="handle">⠿</span>
              <span class="w-name" data-drill="profile">Profile &amp; Loyalty</span>
              <span class="toggle" data-bind=".greet-row, .loyalty-card" data-widget-toggle="profile" title="Add to Home">
                <svg class="i-plus" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 4v12M4 10h12"/></svg>
                <svg class="i-check" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l4 4 8-8"/></svg>
              </span>
              <button class="w-edit-icon" data-drill="profile" title="Edit widget">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 3l4.5 4.5-10 10H2.5v-4.5l10-10z"/><path d="M11 4.5l4.5 4.5"/></svg>
              </button>
            </div>
            <div class="cp-widget-row off">
              <span class="handle">⠿</span>
              <span class="w-name" data-drill="promo-cards">Promo Cards — Featured</span>
              <span class="toggle" data-bind=".promo-cards-widget[data-widget='promo-cards']" data-widget-toggle="promo-cards" title="Add to Home">
                <svg class="i-plus" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 4v12M4 10h12"/></svg>
                <svg class="i-check" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l4 4 8-8"/></svg>
              </span>
              <button class="w-edit-icon" data-drill="promo-cards" title="Edit widget">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 3l4.5 4.5-10 10H2.5v-4.5l10-10z"/><path d="M11 4.5l4.5 4.5"/></svg>
              </button>
            </div>
            <div class="cp-widget-row off">
              <span class="handle">⠿</span>
              <span class="w-name" data-drill="social">Social Links</span>
              <span class="toggle" data-bind=".social-strip" data-widget-toggle="social" title="Add to Home">
                <svg class="i-plus" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 4v12M4 10h12"/></svg>
                <svg class="i-check" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l4 4 8-8"/></svg>
              </span>
              <button class="w-edit-icon" data-drill="social" title="Edit widget">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 3l4.5 4.5-10 10H2.5v-4.5l10-10z"/><path d="M11 4.5l4.5 4.5"/></svg>
              </button>
            </div>
            <div class="cp-widget-row off cp-oo-widget" data-oo-widget="order-again">
              <span class="handle">⠿</span>
              <span class="w-name" data-drill="order-again">Order Again</span>
              <span class="toggle" data-bind=".oa-widget" data-widget-toggle="order-again" title="Add to Home">
                <svg class="i-plus" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 4v12M4 10h12"/></svg>
                <svg class="i-check" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l4 4 8-8"/></svg>
              </span>
              <button class="w-edit-icon" data-drill="order-again" title="Edit widget">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 3l4.5 4.5-10 10H2.5v-4.5l10-10z"/><path d="M11 4.5l4.5 4.5"/></svg>
              </button>
              <span class="w-oo-lock" title="Connect online ordering to enable">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><rect x="4.5" y="9" width="11" height="7.5" rx="1.5"/><path d="M7 9V6.5a3 3 0 016 0V9"/></svg>
              </span>
            </div>
            <div class="cp-widget-row off cp-oo-widget" data-oo-widget="top-items">
              <span class="handle">⠿</span>
              <span class="w-name" data-drill="top-items">Top Items</span>
              <span class="toggle" data-bind=".ti-widget" data-widget-toggle="top-items" title="Add to Home">
                <svg class="i-plus" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 4v12M4 10h12"/></svg>
                <svg class="i-check" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l4 4 8-8"/></svg>
              </span>
              <button class="w-edit-icon" data-drill="top-items" title="Edit widget">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 3l4.5 4.5-10 10H2.5v-4.5l10-10z"/><path d="M11 4.5l4.5 4.5"/></svg>
              </button>
              <span class="w-oo-lock" title="Connect online ordering to enable">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><rect x="4.5" y="9" width="11" height="7.5" rx="1.5"/><path d="M7 9V6.5a3 3 0 016 0V9"/></svg>
              </span>
            </div>

            <div class="cp-widget-row off cp-oo-widget" data-oo-widget="menu-categories">
              <span class="handle">⠿</span>
              <span class="w-name" data-drill="menu-categories">Menu Categories</span>
              <span class="toggle" data-bind=".mc-widget" data-widget-toggle="menu-categories" title="Add to Home">
                <svg class="i-plus" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 4v12M4 10h12"/></svg>
                <svg class="i-check" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l4 4 8-8"/></svg>
              </span>
              <button class="w-edit-icon" data-drill="menu-categories" title="Edit widget">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 3l4.5 4.5-10 10H2.5v-4.5l10-10z"/><path d="M11 4.5l4.5 4.5"/></svg>
              </button>
              <span class="w-oo-lock" title="Connect online ordering to enable">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><rect x="4.5" y="9" width="11" height="7.5" rx="1.5"/><path d="M7 9V6.5a3 3 0 016 0V9"/></svg>
              </span>
            </div>

            <div class="cp-widget-row off cp-fixed-slot cp-oo-widget" data-oo-widget="menu-reels" title="Reels chip is pinned to the top of the phone">
              <span class="handle handle-locked" title="Reels chip position is fixed at the top">⠿</span>
              <span class="w-name" data-drill="menu-reels">Menu Reels chip</span>
              <span class="toggle" data-bind=".phone-reels-chip" data-widget-toggle="menu-reels" title="Add reels chip to Home">
                <svg class="i-plus" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 4v12M4 10h12"/></svg>
                <svg class="i-check" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l4 4 8-8"/></svg>
              </span>
              <button class="w-edit-icon" data-drill="menu-reels" title="Edit widget">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 3l4.5 4.5-10 10H2.5v-4.5l10-10z"/><path d="M11 4.5l4.5 4.5"/></svg>
              </button>
            </div>
            <div class="cp-hint-inline">Select a row to edit its content. Use Show to include it in the app.</div>
            <div class="cp-add-widget-wrap">
              <button class="cp-add-widget-btn" id="add-widget-btn" type="button">
                <svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 4v12M4 10h12"/></svg>
                Add widget
              </button>
              <div class="cp-add-widget-menu" id="add-widget-menu">
                <button type="button" data-add="promo"><span class="aw-ic">▤</span> Promo Cards</button>
                <button type="button" data-add="divider"><span class="aw-ic">—</span> Text Divider</button>
                <button type="button" data-add="image"><span class="aw-ic">🖼</span> Image Banner</button>
              </div>
            </div>
          </div>
        </div>

        <div class="cp-info"><b>Direct editing:</b> select a widget here or in the phone preview. The focus preset supplies the recommended order; you only need to adjust content that matters.</div>
      </div>
`,f=`      <!-- Drill: Profile & Loyalty (greeting with variables + loyalty progress display) -->
      <div class="cp-detail" data-detail="profile" data-l3-drill>
        <div class="cp-detail-header">
          <button class="cp-back">‹</button>
          <div class="cp-detail-title">Profile &amp; Loyalty</div>
          <div class="cp-radio-group cp-header-switch">
            <div class="cp-radio active" data-bind-radio="member-state" data-value="loggedin">Logged in</div>
            <div class="cp-radio" data-bind-radio="member-state" data-value="guest">Guest</div>
          </div>
        </div>
        <div class="cp-section open" data-state-section="loggedin">
          <div class="cp-head-row">Greeting <span class="chev">›</span></div>
          <div class="cp-body">
            <div class="cp-field">
              <label>Greeting text</label>
              <div class="cp-input-text cp-input-rich" contenteditable="true" data-bind-text=".greet-row .hello" data-vars="true">Welcome back!</div>
            </div>
            <div class="cp-hint">Use <code>{firstName}</code>, <code>{lastName}</code>, <code>{phone}</code>, <code>{dob}</code>, <code>{tier}</code> to personalize. Type <b>@</b> to insert a member variable.</div>
          </div>
        </div>
        <div class="cp-section open" data-state-section="loggedin">
          <div class="cp-head-row">Loyalty display <span class="chev">›</span></div>
          <div class="cp-body">
            <div class="cp-field">
              <label>Progress style</label>
              <div class="cp-radio-group">
                <div class="cp-radio active" data-bind-radio="loyalty-layout" data-value="ring">Ring</div>
                <div class="cp-radio" data-bind-radio="loyalty-layout" data-value="bar">Bar</div>
                <div class="cp-radio" data-bind-radio="loyalty-layout" data-value="minimal">Minimal</div>
              </div>
            </div>
            <div class="cp-toggle-row"><span class="lbl">Points balance</span><span class="toggle on" data-bind=".loyalty-card .lc-balance"></span></div>
            <div class="cp-toggle-row"><span class="lbl">Progress to next reward</span><span class="toggle on" data-bind=".loyalty-card .lc-next"></span></div>
            <div class="cp-toggle-row"><span class="lbl">"Show loyalty card" button</span><span class="toggle on" data-bind=".loyalty-card .lc-card-btn"></span></div>
            <div class="cp-section-note">Points, tier and progress fill in live from the member's loyalty profile.</div>
          </div>
        </div>
        <div class="cp-section open" data-state-section="guest" style="display:none">
          <div class="cp-head-row">Guest content <span class="chev">›</span></div>
          <div class="cp-body">
            <div class="cp-field"><label>Title</label><input class="cp-input-text" data-bind-text=".guest-state .g-title" value="Welcome!" /></div>
            <div class="cp-field"><label>Subheading</label><input class="cp-input-text" data-bind-text=".guest-state .g-sub" value="Log in to see your points &amp; rewards" /></div>
            <div class="cp-section-note">No member variables here — there's no member to populate them with yet.</div>
          </div>
        </div>
      </div>
`,p=`      <!-- Sub-drill: Individual card editor (dynamically populated by JS) -->
      <div class="cp-detail" data-detail="pc-card-edit">
        <div class="cp-detail-header">
          <button class="cp-back" id="pc-card-back">‹</button>
          <div class="cp-detail-title" id="pc-card-edit-title">Edit Card</div>
        </div>
        <div class="cp-section open">
          <div class="cp-head-row" style="display:none;">Content</div>
          <div class="cp-body" id="pc-card-edit-body">
            <div class="cp-field">
              <label>Headline</label>
              <input class="cp-input-text" id="pc-edit-headline" placeholder="e.g. 20% OFF Tonight" />
            </div>
            <div class="cp-field">
              <label>Description</label>
              <textarea class="cp-input-text cp-textarea" id="pc-edit-desc" rows="2" placeholder="Short promo text"></textarea>
            </div>
            <div class="cp-field">
              <label>Image</label>
              <div class="pc-edit-image-zone" id="pc-edit-image-zone">
                <img class="pc-edit-image-preview" id="pc-edit-image-preview" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" alt="" style="display:none;" />
                <div class="pc-edit-image-empty" id="pc-edit-image-empty">
                  <div class="pc-upload-prompt">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                    <span>Drop image or click</span>
                  </div>
                  <div class="pc-upload-hint">jpg · png · webp · max 5 MB</div>
                </div>
              </div>
              <input type="file" id="pc-edit-image-file" accept="image/png,image/jpeg,image/jpg,image/webp" style="display:none;" />
              <button class="pc-edit-image-remove" id="pc-edit-image-remove" style="display:none;">✕ Remove image</button>
              <div class="cp-upload-note">Recommended 1200 × 800 px (3:2) · shown crisp on all screens</div>
            </div>
            <div class="cp-field">
              <label>Tap action</label>
              <select class="cp-select" id="pc-edit-action">
                <option value="none">None</option>
                <option value="home">Go to: Home</option>
                <option value="rewards">Go to: Rewards</option>
                <option value="locations">Go to: Locations</option>
                <option value="menu">Go to: Menu</option>
                <option value="more">Go to: More</option>
                <option value="webview">Open web link</option>
                <option value="menu-item">Specific menu item</option>
              </select>
            </div>
            <div class="cp-field" id="pc-edit-btn-text-field">
              <label>Button text</label>
              <input class="cp-input-text" id="pc-edit-btn-text" placeholder="e.g. View Menu →" />
            </div>
          </div>
        </div>
      </div>
`,m=`      <!-- Drill: Promo Cards — Featured (instance 1) -->
      <div class="cp-detail" data-detail="promo-cards" data-l3-drill>
        <div class="cp-detail-header">
          <button class="cp-back">‹</button>
          <div class="cp-detail-title">Promo Cards — Featured</div>
        </div>

        <!-- Your cards — item list -->
        <div class="cp-section open">
          <div class="cp-head-row">Your cards <span class="pc-count">3</span> <span class="chev">›</span></div>
          <div class="cp-body">
            <div class="pc-items-list" id="pc-items-list">
              <div class="pc-item" data-pc-idx="0">
                <span class="handle">⠿</span>
                <span class="pc-item-name">Black Angus Special</span>
                <button class="pc-vis on" title="Toggle visibility">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M1 10s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z"/><circle cx="10" cy="10" r="3"/></svg>
                </button>
                <button class="pc-del" title="Delete card">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 6h12M8 6V4h4v2M6 6v10a1 1 0 001 1h6a1 1 0 001-1V6"/></svg>
                </button>
                <span class="pc-item-chev">›</span>
              </div>
              <div class="pc-item" data-pc-idx="1">
                <span class="handle">⠿</span>
                <span class="pc-item-name">Artisan Chocolate</span>
                <button class="pc-vis on" title="Toggle visibility">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M1 10s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z"/><circle cx="10" cy="10" r="3"/></svg>
                </button>
                <button class="pc-del" title="Delete card">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 6h12M8 6V4h4v2M6 6v10a1 1 0 001 1h6a1 1 0 001-1V6"/></svg>
                </button>
                <span class="pc-item-chev">›</span>
              </div>
              <div class="pc-item" data-pc-idx="2">
                <span class="handle">⠿</span>
                <span class="pc-item-name">Premium Sushi Night</span>
                <button class="pc-vis on" title="Toggle visibility">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M1 10s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z"/><circle cx="10" cy="10" r="3"/></svg>
                </button>
                <button class="pc-del" title="Delete card">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 6h12M8 6V4h4v2M6 6v10a1 1 0 001 1h6a1 1 0 001-1V6"/></svg>
                </button>
                <span class="pc-item-chev">›</span>
              </div>
            </div>
            <button class="pc-add-btn" id="pc-add-btn">+ Add card</button>
          </div>
        </div>

        <!-- Presentation — widget-level style (applies to all cards) -->
        <div class="cp-section open">
          <div class="cp-head-row">Presentation <span class="chev">›</span></div>
          <div class="cp-body">
            <div class="cp-field">
              <label>Display</label>
              <div class="cp-radio-group">
                <div class="cp-radio active" data-bind-radio="pc-display" data-value="carousel">Carousel</div>
                <div class="cp-radio" data-bind-radio="pc-display" data-value="stack">Stack</div>
                <div class="cp-radio" data-bind-radio="pc-display" data-value="grid">Grid</div>
              </div>
            </div>
            <div class="cp-field">
              <label>Image</label>
              <div class="cp-radio-group">
                <div class="cp-radio active" data-bind-radio="pc-image-size" data-value="cover">Cover</div>
                <div class="cp-radio" data-bind-radio="pc-image-size" data-value="beside">Beside</div>
                <div class="cp-radio" data-bind-radio="pc-image-size" data-value="behind">Behind</div>
              </div>
            </div>
            <div class="cp-field">
              <label>Button</label>
              <div class="cp-radio-group">
                <div class="cp-radio active" data-bind-radio="pc-cta-style" data-value="filled">Filled</div>
                <div class="cp-radio" data-bind-radio="pc-cta-style" data-value="outline">Outline</div>
                <div class="cp-radio" data-bind-radio="pc-cta-style" data-value="link">Link</div>
                <div class="cp-radio" data-bind-radio="pc-cta-style" data-value="none">None</div>
              </div>
            </div>
            <div class="cp-field">
              <label>Corners</label>
              <div class="cp-radio-group">
                <div class="cp-radio" data-bind-radio="pc-corners" data-value="sharp">Sharp</div>
                <div class="cp-radio active" data-bind-radio="pc-corners" data-value="rounded">Rounded</div>
              </div>
            </div>
            <div class="cp-field">
              <label>Card background</label>
              <div class="cp-color-row compact">
                <div class="cp-color-swatch" style="background:var(--p-panel);">
                  <input type="color" value="#1a1728" id="pc-bg-color" />
                </div>
                <div class="cp-color-info">
                  <div class="cp-color-label">Card background</div>
                  <input class="cp-color-hex" value="#1A1728" spellcheck="false" maxlength="9" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
`,h=`      <!-- Sub-drill: card editor for instance 2 -->
      <div class="cp-detail" data-detail="pc2-card-edit">
        <div class="cp-detail-header">
          <button class="cp-back" id="pc2-card-back">‹</button>
          <div class="cp-detail-title" id="pc2-card-edit-title">Edit Card</div>
        </div>
        <div class="cp-section open">
          <div class="cp-head-row" style="display:none;">Content</div>
          <div class="cp-body" id="pc2-card-edit-body">
            <div class="cp-field">
              <label>Headline</label>
              <input class="cp-input-text" id="pc2-edit-headline" placeholder="e.g. 20% OFF Tonight" />
            </div>
            <div class="cp-field">
              <label>Description</label>
              <textarea class="cp-input-text cp-textarea" id="pc2-edit-desc" rows="2" placeholder="Short promo text"></textarea>
            </div>
            <div class="cp-field">
              <label>Image</label>
              <div class="pc-edit-image-zone" id="pc2-edit-image-zone">
                <img class="pc-edit-image-preview" id="pc2-edit-image-preview" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" alt="" style="display:none;" />
                <div class="pc-edit-image-empty" id="pc2-edit-image-empty">
                  <div class="pc-upload-prompt">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                    <span>Drop image or click</span>
                  </div>
                  <div class="pc-upload-hint">jpg · png · webp · max 5 MB</div>
                </div>
              </div>
              <input type="file" id="pc2-edit-image-file" accept="image/png,image/jpeg,image/jpg,image/webp" style="display:none;" />
              <button class="pc-edit-image-remove" id="pc2-edit-image-remove" style="display:none;">✕ Remove image</button>
              <div class="cp-upload-note">Recommended 1200 × 800 px (3:2) · shown crisp on all screens</div>
            </div>
            <div class="cp-field">
              <label>Tap action</label>
              <select class="cp-select" id="pc2-edit-action">
                <option value="none">None</option>
                <option value="home">Go to: Home</option>
                <option value="rewards">Go to: Rewards</option>
                <option value="locations">Go to: Locations</option>
                <option value="menu">Go to: Menu</option>
                <option value="more">Go to: More</option>
                <option value="webview">Open web link</option>
                <option value="menu-item">Specific menu item</option>
              </select>
            </div>
            <div class="cp-field" id="pc2-edit-btn-text-field">
              <label>Button text</label>
              <input class="cp-input-text" id="pc2-edit-btn-text" placeholder="e.g. View Menu →" />
            </div>
          </div>
        </div>
      </div>
`,g=`      <!-- Drill: Promo Cards — More Offers (instance 2 — identical behaviour, own cards & styling) -->
      <div class="cp-detail" data-detail="promo-cards-2" data-l3-drill>
        <div class="cp-detail-header">
          <button class="cp-back">‹</button>
          <div class="cp-detail-title">Promo Cards — More Offers</div>
        </div>

        <div class="cp-section open">
          <div class="cp-head-row">Your cards <span class="pc-count">2</span> <span class="chev">›</span></div>
          <div class="cp-body">
            <div class="pc-items-list" id="pc2-items-list"></div>
            <button class="pc-add-btn" id="pc2-add-btn">+ Add card</button>
          </div>
        </div>

        <div class="cp-section open">
          <div class="cp-head-row">Presentation <span class="chev">›</span></div>
          <div class="cp-body">
            <div class="cp-field">
              <label>Display</label>
              <div class="cp-radio-group">
                <div class="cp-radio" data-bind-radio="pc2-display" data-value="carousel">Carousel</div>
                <div class="cp-radio active" data-bind-radio="pc2-display" data-value="stack">Stack</div>
                <div class="cp-radio" data-bind-radio="pc2-display" data-value="grid">Grid</div>
              </div>
            </div>
            <div class="cp-field">
              <label>Image</label>
              <div class="cp-radio-group">
                <div class="cp-radio" data-bind-radio="pc2-image-size" data-value="cover">Cover</div>
                <div class="cp-radio active" data-bind-radio="pc2-image-size" data-value="beside">Beside</div>
                <div class="cp-radio" data-bind-radio="pc2-image-size" data-value="behind">Behind</div>
              </div>
            </div>
            <div class="cp-field">
              <label>Button</label>
              <div class="cp-radio-group">
                <div class="cp-radio active" data-bind-radio="pc2-cta-style" data-value="filled">Filled</div>
                <div class="cp-radio" data-bind-radio="pc2-cta-style" data-value="outline">Outline</div>
                <div class="cp-radio" data-bind-radio="pc2-cta-style" data-value="link">Link</div>
                <div class="cp-radio" data-bind-radio="pc2-cta-style" data-value="none">None</div>
              </div>
            </div>
            <div class="cp-field">
              <label>Corners</label>
              <div class="cp-radio-group">
                <div class="cp-radio" data-bind-radio="pc2-corners" data-value="sharp">Sharp</div>
                <div class="cp-radio active" data-bind-radio="pc2-corners" data-value="rounded">Rounded</div>
              </div>
            </div>
            <div class="cp-field">
              <label>Card background</label>
              <div class="cp-color-row compact">
                <div class="cp-color-swatch" style="background:var(--p-panel);">
                  <input type="color" value="#1a1728" id="pc2-bg-color" />
                </div>
                <div class="cp-color-info">
                  <div class="cp-color-label">Card background</div>
                  <input class="cp-color-hex" value="#1A1728" spellcheck="false" maxlength="9" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
`,_=`      <!-- Drill: Social Links -->
      <div class="cp-detail" data-detail="social" data-l3-drill>
        <div class="cp-detail-header">
          <button class="cp-back">‹</button>
          <div class="cp-detail-title">Social Links</div>
        </div>
        <div class="cp-section open">
          <div class="cp-head-row">Icons <span class="chev">›</span></div>
          <div class="cp-body">
            <div class="cp-social-item on">
              <div class="cp-toggle-row"><span class="lbl">Instagram</span><span class="toggle on" data-bind=".social-strip span:nth-child(1)"></span></div>
              <div class="cp-social-link"><input class="cp-input-text" placeholder="https://instagram.com/yourbusiness" /></div>
            </div>
            <div class="cp-social-item on">
              <div class="cp-toggle-row"><span class="lbl">Facebook</span><span class="toggle on" data-bind=".social-strip span:nth-child(2)"></span></div>
              <div class="cp-social-link"><input class="cp-input-text" placeholder="https://facebook.com/yourbusiness" /></div>
            </div>
            <div class="cp-social-item on">
              <div class="cp-toggle-row"><span class="lbl">TikTok</span><span class="toggle on" data-bind=".social-strip span:nth-child(3)"></span></div>
              <div class="cp-social-link"><input class="cp-input-text" placeholder="https://tiktok.com/@yourbusiness" /></div>
            </div>
            <div class="cp-social-item on">
              <div class="cp-toggle-row"><span class="lbl">YouTube</span><span class="toggle on" data-bind=".social-strip span:nth-child(4)"></span></div>
              <div class="cp-social-link"><input class="cp-input-text" placeholder="https://youtube.com/@yourbusiness" /></div>
            </div>
          </div>
        </div>
      </div>
`,v=`        <div class="cp-detail" data-detail="order-again" data-l3-drill>
          <div class="cp-detail-header">
            <button class="cp-back">‹</button>
            <div class="cp-detail-title">Order Again</div>
          </div>
          <div class="cp-oo-connected-note">
            <span class="cp-oo-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </span>
            <span>Powered by your <b>online ordering integration</b>.</span>
          </div>

          <div class="cp-section open">
            <div class="cp-head-row">Display <span class="chev">›</span></div>
            <div class="cp-body">
              <div class="cp-field">
                <label>Layout</label>
                <div class="cp-radio-group" id="oa-layout-group">
                  <div class="cp-radio active" data-oa-layout="hero">Hero card</div>
                  <div class="cp-radio" data-oa-layout="strip">Small strip</div>
                </div>
              </div>
              <div class="cp-toggle-row">
                <span class="lbl">Show item image</span>
                <span class="toggle on" id="oa-toggle-image"></span>
              </div>
              <div class="cp-toggle-row">
                <span class="lbl">Show order date + location</span>
                <span class="toggle on" id="oa-toggle-meta"></span>
              </div>
            </div>
          </div>

          <div class="cp-section open">
            <div class="cp-head-row">Copy <span class="chev">›</span></div>
            <div class="cp-body">
              <div class="cp-field">
                <label>Eyebrow</label>
                <input class="cp-input-text" id="oa-eyebrow-input" value="Your last order" />
              </div>
              <div class="cp-field">
                <label>Button label</label>
                <input class="cp-input-text" id="oa-btn-input" value="Reorder" />
              </div>
            </div>
          </div>

          <div class="cp-section open">
            <div class="cp-head-row">Fallback <span class="chev">›</span></div>
            <div class="cp-body">
              <div class="cp-field">
                <label>Empty-state text (new members)</label>
                <input class="cp-input-text" id="oa-empty-input" value="Nothing here yet — order once, then it's one tap." />
              </div>
              <div class="cp-field">
                <label>Empty-state CTA target</label>
                <select class="cp-select" id="oa-empty-cta">
                  <option value="menu">Open Menu</option>
                  <option value="top-items">Show Top Items</option>
                  <option value="none">Hide button</option>
                </select>
              </div>
            </div>
          </div>
        </div>
`,y=`        <div class="cp-detail" data-detail="top-items" data-l3-drill>
          <div class="cp-detail-header">
            <button class="cp-back">‹</button>
            <div class="cp-detail-title">Top Items</div>
          </div>
          <div class="cp-oo-connected-note">
            <span class="cp-oo-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </span>
            <span>Items are pulled from your <b>online ordering menu</b>. Pick which ones show here.</span>
          </div>

          <div class="cp-section open">
            <div class="cp-head-row">Your items <span class="pc-count" id="ti-count">6</span> <span class="chev">›</span></div>
            <div class="cp-body">
              <div class="pc-items-list" id="ti-items-list"></div>
              <button class="pc-add-btn" id="ti-add-btn">+ Add item from menu</button>
            </div>
          </div>

          <div class="cp-section open">
            <div class="cp-head-row">Display <span class="chev">›</span></div>
            <div class="cp-body">
              <div class="cp-field">
                <label>Layout</label>
                <div class="cp-radio-group" id="ti-layout-group">
                  <div class="cp-radio active" data-ti-layout="carousel">Carousel</div>
                  <div class="cp-radio" data-ti-layout="grid">Grid</div>
                </div>
              </div>
              <div class="cp-field">
                <label>Section title</label>
                <input class="cp-input-text" id="ti-title-input" value="Popular right now" />
              </div>
              <div class="cp-toggle-row">
                <span class="lbl">Show price</span>
                <span class="toggle on" id="ti-toggle-price"></span>
              </div>
              <div class="cp-toggle-row">
                <span class="lbl">Show "See all" link</span>
                <span class="toggle on" id="ti-toggle-see-all"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="cp-detail" data-detail="ti-item-edit">
          <div class="cp-detail-header">
            <button class="cp-back" id="ti-item-back">‹</button>
            <div class="cp-detail-title" id="ti-item-title">Edit item</div>
          </div>
          <div class="cp-section open"><div class="cp-body">
            <div class="cp-field">
              <label>Item name</label>
              <input class="cp-input-text" id="ti-item-name" />
            </div>
            <div class="cp-field">
              <label>Price</label>
              <input class="cp-input-text" id="ti-item-price" />
            </div>
            <div class="cp-field">
              <label>Badge (optional)</label>
              <input class="cp-input-text" id="ti-item-badge" placeholder="e.g. Chef's pick" />
            </div>
            <div class="cp-field">
              <label>Image URL</label>
              <input class="cp-input-text" id="ti-item-image" />
              <div class="cp-upload-note">Photos come from your ordering provider — swap the URL to test other imagery.</div>
            </div>
          </div></div>
        </div>
`,b=`        <div class="cp-detail" data-detail="menu-categories" data-l3-drill>
          <div class="cp-detail-header">
            <button class="cp-back">‹</button>
            <div class="cp-detail-title">Menu Categories</div>
          </div>
          <div class="cp-oo-connected-note">
            <span class="cp-oo-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </span>
            <span>Categories mirror your <b>online ordering menu</b>. Pick the ones to feature.</span>
          </div>

          <div class="cp-section open">
            <div class="cp-head-row">Categories <span class="pc-count" id="mc-count">6</span> <span class="chev">›</span></div>
            <div class="cp-body">
              <div class="pc-items-list" id="mc-items-list"></div>
              <button class="pc-add-btn" id="mc-add-btn">+ Add category</button>
            </div>
          </div>

          <div class="cp-section open">
            <div class="cp-head-row">Display <span class="chev">›</span></div>
            <div class="cp-body">
              <div class="cp-field">
                <label>Section title</label>
                <input class="cp-input-text" id="mc-title-input" value="Browse the menu" />
              </div>
              <div class="cp-field">
                <label>Columns</label>
                <div class="cp-radio-group" id="mc-cols-group">
                  <div class="cp-radio" data-mc-cols="2">2</div>
                  <div class="cp-radio active" data-mc-cols="3">3</div>
                </div>
              </div>
              <div class="cp-toggle-row">
                <span class="lbl">Show item count on tile</span>
                <span class="toggle on" id="mc-toggle-count"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="cp-detail" data-detail="mc-item-edit">
          <div class="cp-detail-header">
            <button class="cp-back" id="mc-item-back">‹</button>
            <div class="cp-detail-title" id="mc-item-title">Edit category</div>
          </div>
          <div class="cp-section open"><div class="cp-body">
            <div class="cp-field">
              <label>Name</label>
              <input class="cp-input-text" id="mc-item-name" />
            </div>
            <div class="cp-field">
              <label>Item count</label>
              <input class="cp-input-text" id="mc-item-count-input" />
            </div>
            <div class="cp-field">
              <label>Image URL</label>
              <input class="cp-input-text" id="mc-item-image" />
            </div>
          </div></div>
        </div>
`,x=`        <div class="cp-detail" data-detail="menu-reels" data-l3-drill>
          <div class="cp-detail-header">
            <button class="cp-back">‹</button>
            <div class="cp-detail-title">Menu Reels</div>
          </div>
          <div class="cp-oo-connected-note">
            <span class="cp-oo-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </span>
            <span>Vertical short-form videos linked to items in your <b>online ordering menu</b>.</span>
          </div>

          <div class="cp-section open">
            <div class="cp-head-row">Your reels <span class="pc-count" id="mr-count">3</span> <span class="chev">›</span></div>
            <div class="cp-body">
              <div class="pc-items-list" id="mr-items-list"></div>
              <button class="pc-add-btn" id="mr-add-btn">+ Add reel</button>
              <button class="pc-add-btn cp-preview-btn" id="mr-preview-btn" type="button">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l14 9-14 9z"/></svg>
                Test cold-launch open
              </button>
            </div>
          </div>

          <div class="cp-section open">
            <div class="cp-head-row">Chip appearance <span class="chev">›</span></div>
            <div class="cp-body">
              <div class="cp-field">
                <label>Chip label</label>
                <input class="cp-input-text" id="mr-chip-label" value="New reels · tap to watch" />
              </div>
              <div class="cp-toggle-row">
                <span class="lbl">Auto-open on cold launch</span>
                <span class="toggle on" id="mr-toggle-autoopen"></span>
              </div>
              <div class="cp-toggle-row">
                <span class="lbl">Member can dismiss (✕)</span>
                <span class="toggle on" id="mr-toggle-dismiss"></span>
              </div>
              <div class="cp-info cp-info-tight">Chip is pinned to the top of the phone and can't be reordered.</div>
            </div>
          </div>
        </div>

        <div class="cp-detail" data-detail="mr-item-edit">
          <div class="cp-detail-header">
            <button class="cp-back" id="mr-item-back">‹</button>
            <div class="cp-detail-title" id="mr-item-title">Edit reel</div>
          </div>
          <div class="cp-section open"><div class="cp-body">
            <div class="cp-field">
              <label>Title</label>
              <input class="cp-input-text" id="mr-item-title-input" />
            </div>
            <div class="cp-field">
              <label>Subtitle</label>
              <input class="cp-input-text" id="mr-item-subtitle" />
            </div>
            <div class="cp-field">
              <label>Video URL (MP4)</label>
              <input class="cp-input-text" id="mr-item-video" />
              <div class="cp-upload-note">Vertical 9:16 clips work best. ~8s each.</div>
            </div>
            <div class="cp-field">
              <label>Poster image (loading state)</label>
              <input class="cp-input-text" id="mr-item-poster" />
            </div>
            <div class="cp-field">
              <label>CTA label</label>
              <input class="cp-input-text" id="mr-item-cta-label" />
            </div>
            <div class="cp-field">
              <label>CTA links to</label>
              <select class="cp-select" id="mr-item-cta-target">
                <option value="ti-1">Truffle Burger</option>
                <option value="ti-2">Spicy Tuna Poke</option>
                <option value="ti-3">Wagyu Ramen</option>
                <option value="ti-4">Miso Salmon Bowl</option>
                <option value="ti-5">Buffalo Chicken Wrap</option>
                <option value="ti-6">Green Goddess Salad</option>
                <option value="menu">Full menu</option>
              </select>
            </div>
            <div class="cp-field">
              <label>Auto-advance after (seconds)</label>
              <div class="cp-range-row">
                <input type="range" min="3" max="15" step="1" id="mr-item-seconds" />
                <span class="cp-range-value" id="mr-item-seconds-value">6s</span>
              </div>
              <div class="cp-upload-note">Member can swipe or tap to skip — this is only the auto-advance timer.</div>
            </div>
            <div class="cp-field">
              <label>Expires on</label>
              <input type="date" class="cp-input-text" id="mr-item-expires" />
              <div class="cp-upload-note">After this date the reel is hidden from members automatically.</div>
            </div>
          </div></div>
        </div>
`,ee=`    <!-- ---------- LOCATIONS config ---------- -->
    <div class="cp-page" id="cp-locations" style="display:none;">
      <div class="cp-master">
        <h3 class="cp-head">Editing page</h3>
        <div class="cp-page-title">Locations</div>
        <div class="cp-page-sub">Show the Locations page in the app. Content is pulled from Hub 2 Business Info.</div>

        <div class="cp-section open">
          <div class="cp-head-row">Locations page <span class="chev">›</span></div>
          <div class="cp-body">
            <div class="cp-toggle-row">
              <span class="lbl">Show Locations in the app</span>
              <span class="toggle" data-bind=".app-page[data-page='locations'] .search-bar, .app-page[data-page='locations'] .filter-chips, .app-page[data-page='locations'] .loc-card"></span>
            </div>
            <div class="cp-hint-inline">Turn this off to hide the Locations tab from members entirely.</div>
          </div>
        </div>

        <div class="cp-info"><b>Note:</b> branches, hours, and map behavior are managed entirely in Hub 2. This page has no other builder controls.</div>
      </div>
    </div>

    <!-- ---------- MENU config ---------- -->
`,te=`<div class="cp-page" id="cp-menu" style="display:none;">

  <!-- ========== 1 · Choose menu approach ========== -->
  <div class="ms-screen active" data-ms="chooser">
    <div class="ms-kicker">Menu source</div>
    <div class="ms-title" data-menu-chooser-title>Choose menu approach</div>
    <div class="ms-sub" data-menu-chooser-sub>Pick how your in-app menu is powered. You can change this anytime.</div>

    <div class="ms-options">
      <button class="ms-option" type="button" data-approach="webview">
        <span class="ms-option-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 010 18 15 15 0 010-18z"/></svg></span>
        <span class="ms-option-text">
          <span class="ms-option-name">In-app webview</span>
          <span class="ms-option-desc">Show your existing menu or website inside the app. Best if your menu already lives online.</span>
        </span>
        <span class="ms-radio"></span>
      </button>

      <button class="ms-option" type="button" data-approach="pdf">
        <span class="ms-option-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2.5H7a2 2 0 00-2 2v15a2 2 0 002 2h10a2 2 0 002-2V7.5z"/><path d="M14 2.5v5h5"/><path d="M9 13h6M9 17h4"/></svg></span>
        <span class="ms-option-text">
          <span class="ms-option-name">Upload a PDF menu</span>
          <span class="ms-option-desc">Upload a menu PDF. Simple and quick when you only have a printed menu.</span>
        </span>
        <span class="ms-radio"></span>
      </button>

      <button class="ms-option" type="button" data-approach="ordering">
        <span class="ms-option-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2.5L3.5 6.5V20a1.5 1.5 0 001.5 1.5h14a1.5 1.5 0 001.5-1.5V6.5L18 2.5z"/><path d="M3.5 6.5h17"/><path d="M16 10.5a4 4 0 01-8 0"/></svg></span>
        <span class="ms-option-text">
          <span class="ms-option-name">Use Online Ordering</span>
          <span class="ms-option-desc">Show your connected provider’s live menu. Best for full ordering and checkout.</span>
        </span>
        <span class="ms-radio"></span>
      </button>

      <button class="ms-option" type="button" data-approach="manual">
        <span class="ms-option-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1.3" fill="currentColor" stroke="none"/><circle cx="4.5" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="4.5" cy="18" r="1.3" fill="currentColor" stroke="none"/></svg></span>
        <span class="ms-option-text">
          <span class="ms-option-name">Build menu manually</span>
          <span class="ms-option-desc">Add menu items by hand. Full control over every dish and price.</span>
        </span>
        <span class="ms-radio"></span>
      </button>
    </div>

    <button class="ms-help" type="button" data-ms-help>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/><path d="M14.4 9.6L18 6M9.6 14.4L6 18M14.4 14.4L18 18M9.6 9.6L6 6"/></svg>
      Need help? Visit the Help Center
    </button>
  </div>

  <!-- ========== 2 · Webview ========== -->
  <div class="ms-screen" data-ms="webview">
    <div class="ms-kicker" id="ms-webview-kicker">Menu source · Webview
      <button class="ms-kicker-link" type="button" data-ms-change>Change</button>
    </div>

    <div class="cp-detail-header" id="ms-webview-back-header" hidden>
      <button class="cp-back" type="button" id="ms-webview-return-btn">‹</button>
      <div class="cp-detail-title">Webview</div>
    </div>

    <div class="ms-title">Show a webview menu</div>
    <div class="ms-sub">Paste the web address of your online menu. It loads right inside the app.</div>

    <div class="ms-block">
      <div class="ms-label">Menu web address</div>
      <div class="ms-input-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 13a5 5 0 007.5.5l3-3a5 5 0 00-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 00-7.5-.5l-3 3a5 5 0 007 7l1.7-1.7"/></svg>
        <input class="ms-input" type="url" id="ms-webview-url" value="https://velvetbistro.com/menu" aria-describedby="ms-webview-url-error" aria-invalid="false" required>
      </div>
      <div class="gf-field-error" id="ms-webview-url-error" aria-live="polite"></div>
      <div class="ms-hint">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>
        <span>Use a public page with no login wall. Tip: link straight to your menu, not the homepage.</span>
      </div>
      <button class="ms-btn" type="button" id="ms-webview-connect">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
        Connect &amp; load
      </button>
      <div class="ms-status hidden" id="ms-webview-status">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.2l2.5 2.5 4.5-5"/></svg>
        Looks good — page reachable and secure (https).
      </div>
    </div>

    <div id="ms-webview-display-options" hidden>
      <div class="ms-section-label">Display options</div>
      <div class="ms-toggle-card">
      <div class="ms-toggle-row">
        <div class="ms-toggle-text">
          <div class="ms-toggle-name">Show back button</div>
          <div class="ms-toggle-desc">Adds a back arrow so members can return easily.</div>
        </div>
        <span class="toggle on" data-web-opt="back"></span>
      </div>
      <div class="ms-toggle-row">
        <div class="ms-toggle-text">
          <div class="ms-toggle-name">Show app bottom bar</div>
          <div class="ms-toggle-desc">Keep your app’s navigation bar visible under the page.</div>
        </div>
        <span class="toggle on" data-web-opt="bottombar"></span>
      </div>
      <div class="ms-toggle-row">
        <div class="ms-toggle-text">
          <div class="ms-toggle-name">Open external links in-app
            <button class="ms-info" type="button" data-tip="Links inside the page open in the app’s browser instead of bouncing members out to Safari or Chrome.">i</button>
          </div>
          <div class="ms-toggle-desc">Links stay inside the app instead of a browser.</div>
        </div>
        <span class="toggle on" data-web-opt="inapp"></span>
      </div>
      <div class="ms-toggle-row">
        <div class="ms-toggle-text">
          <div class="ms-toggle-name">Hide the site’s own header
            <button class="ms-info" type="button" data-tip="Strips the website’s top navigation so the page reads as a native screen rather than a web page.">i</button>
          </div>
          <div class="ms-toggle-desc">Strips the website’s top bar for a native feel.</div>
        </div>
        <span class="toggle" data-web-opt="hideheader"></span>
      </div>
      <div class="ms-toggle-row">
        <div class="ms-toggle-text">
          <div class="ms-toggle-name">Members only
            <button class="ms-info" type="button" data-tip="Guests see a sign-in prompt instead of the page. Useful for member-only pricing.">i</button>
          </div>
          <div class="ms-toggle-desc">Only load this page for signed-in members.</div>
        </div>
        <span class="toggle" data-web-opt="membersonly"></span>
      </div>
      </div>
    </div>

    <button class="ms-help" type="button" data-ms-help>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/><path d="M14.4 9.6L18 6M9.6 14.4L6 18M14.4 14.4L18 18M9.6 9.6L6 6"/></svg>
      Need help? Visit the Help Center
    </button>
  </div>

  <!-- ========== 3 · PDF ========== -->
  <div class="ms-screen" data-ms="pdf">
    <div class="ms-kicker">Menu source · Upload a PDF
      <button class="ms-kicker-link" type="button" data-ms-change>Change</button>
    </div>
    <button class="ms-inline-action ms-deferred-page-link" type="button" id="ms-configure-page" hidden>Configure another page</button>
    <div class="ms-title">Menu</div>
    <div class="ms-sub">Upload a PDF of your menu. We’ll render it in-app so guests can view it full-screen — no rebuilding required.</div>

    <div class="ms-block">
      <div class="ms-drop" id="ms-pdf-drop">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2.5H7a2 2 0 00-2 2v15a2 2 0 002 2h10a2 2 0 002-2V7.5z"/><path d="M14 2.5v5h5"/><path d="M12 17v-5"/><path d="M9.8 14.2L12 12l2.2 2.2"/></svg>
        <div class="ms-drop-title">Drag &amp; drop your menu PDF</div>
        <div class="ms-drop-sub">or click to browse your files</div>
        <span class="ms-btn small">Choose file</span>
      </div>
      <div class="ms-hint" style="margin-top:10px">
        <span>PDF only · up to 20 MB · one file. Multi-page menus are supported.</span>
      </div>

      <div class="ms-file" id="ms-pdf-file" hidden>
        <div class="ms-file-thumb">PDF</div>
        <div class="ms-file-text">
          <div class="ms-file-name">velvet-bistro-dinner.pdf</div>
          <div class="ms-file-meta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.2l2.5 2.5 4.5-5"/></svg>
            1.4 MB · Rendered in preview
          </div>
        </div>
        <button class="ms-file-rm" type="button" id="ms-pdf-remove" title="Remove">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M9 7V5h6v2"/><path d="M6 7l1 13h10l1-13"/></svg>
        </button>
      </div>
      <button class="ms-inline-action" type="button" id="ms-pdf-replace" hidden style="margin-top:12px">Replace file</button>

      <div class="ms-note">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>
        <span>Guests tap Menu to open the PDF full-screen. Prefer live prices &amp; photos? Turn on Online Ordering.</span>
      </div>
    </div>

    <button class="ms-help" type="button" data-ms-help>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/><path d="M14.4 9.6L18 6M9.6 14.4L6 18M14.4 14.4L18 18M9.6 9.6L6 6"/></svg>
      Need help? Visit the Help Center
    </button>
  </div>

  <!-- ========== Configure another page ========== -->
  <div class="ms-screen" data-ms="page-settings">

    <div class="cp-field">
      <label>Select page to configure</label>
      <div class="ms-page-picker" id="ms-page-picker">
        <button class="ms-page-picker-trigger" type="button" id="ms-page-picker-trigger" aria-haspopup="listbox" aria-expanded="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2.5H7a2 2 0 00-2 2v15a2 2 0 002 2h10a2 2 0 002-2V7.5z"/><path d="M14 2.5v5h5"/></svg>
          <span id="ms-page-picker-label">Our Menu</span>
          <svg class="ms-page-picker-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="ms-page-picker-list" id="ms-page-picker-list" role="listbox" aria-label="Pages" hidden></div>
      </div>
    </div>

    <div class="ms-page-config-title" id="ms-page-config-title">Menu</div>

    <div class="ms-sub" id="ms-page-activity-desc" hidden>Let customers view their order history, including past purchases, order details, points and credits.</div>

    <div class="ms-sub" id="ms-page-referral-desc" hidden>Let customers invite friends with a personal referral code, earning loyalty points for every friend who joins and orders.</div>

    <div class="ms-sub" id="ms-page-story-desc" hidden>Tell customers who you are and why you started.</div>

    <div class="ms-sub" id="ms-page-contact-desc" hidden>Give customers a way to reach you — an inquiry form plus your direct contact details.</div>

    <div id="ms-page-account-block" hidden>
      <div class="ms-sub">Allow customers to access their order history, including previous purchases, order specifics, points, and credits.</div>
      <div class="ms-section-label" style="margin-top:18px;">Display options</div>
      <div class="ms-toggle-card">
        <div class="ms-toggle-row">
          <div class="ms-toggle-text">
            <div class="ms-toggle-name">Account settings</div>
            <div class="ms-toggle-desc">Manage your account details and preferences.</div>
          </div>
          <span class="toggle on" data-account-opt="settings"></span>
        </div>
        <div class="ms-toggle-row">
          <div class="ms-toggle-text">
            <div class="ms-toggle-name">Gift cards</div>
            <div class="ms-toggle-desc">View, purchase, and manage your gift cards.</div>
          </div>
          <span class="toggle on" data-account-opt="giftcards"></span>
        </div>
        <div class="ms-toggle-row">
          <div class="ms-toggle-text">
            <div class="ms-toggle-name">Payments</div>
            <div class="ms-toggle-desc">Manage payment methods and payment details.</div>
          </div>
          <span class="toggle" data-account-opt="payments"></span>
        </div>
        <div class="ms-toggle-row">
          <div class="ms-toggle-text">
            <div class="ms-toggle-name">Previous orders
              <button class="ms-info" type="button" data-tip="Only relevant when online ordering or Menu source · My Activity is in use.">i</button>
            </div>
            <div class="ms-toggle-desc">View your order history and past purchase details.</div>
          </div>
          <span class="toggle" data-account-opt="orders"></span>
        </div>
      </div>
    </div>

    <div class="ms-section-label" id="ms-page-hero-label">Hero Banner text</div>
    <div class="ms-hero-card" id="ms-page-hero-card">
      <div class="cp-field">
        <label>Image</label>
        <div class="pc-edit-image-zone" id="ms-hero-image-zone">
          <img class="pc-edit-image-preview" id="ms-hero-image-preview" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" alt="" style="display:none;" />
          <div class="pc-edit-image-empty" id="ms-hero-image-empty">
            <div class="pc-upload-prompt">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
              <span>Drop image or click</span>
            </div>
            <div class="pc-upload-hint">jpg · png · webp · max 5 MB</div>
          </div>
        </div>
        <input type="file" id="ms-hero-image-file" accept="image/png,image/jpeg,image/jpg,image/webp" hidden />
        <button class="pc-edit-image-remove" id="ms-hero-image-remove" type="button" style="display:none;">✕ Remove image</button>
      </div>
      <div class="cp-field">
        <label>Headline</label>
        <input class="cp-input-text" id="ms-hero-headline" placeholder="e.g. Discover tonight’s menu" />
      </div>
      <div class="cp-field">
        <label>Description</label>
        <textarea class="cp-input-text cp-textarea" id="ms-hero-desc" rows="2" placeholder="Short supporting text"></textarea>
      </div>
      <div class="cp-field">
        <label>Button text</label>
        <input class="cp-input-text" id="ms-hero-btn-text" placeholder="Leave empty to hide the button" />
      </div>
    </div>

    <div id="ms-page-referral-terms" hidden>
      <div class="ms-section-label" style="margin-top:22px;">Terms &amp; conditions</div>
      <div class="cp-field">
        <label>Fine print</label>
        <textarea class="cp-input-text cp-textarea" id="ms-referral-terms-text" rows="3" placeholder="e.g. Referral points are credited automatically once your friend completes an order of $15 or more."></textarea>
      </div>
      <div class="cp-field">
        <label>Link text</label>
        <input class="cp-input-text" id="ms-referral-terms-link-text" placeholder="e.g. Read Full Terms &amp; Conditions" />
      </div>
    </div>

    <div id="ms-page-story-block" hidden>
      <div class="ms-section-label" style="margin-top:22px;">"The Spark" section</div>
      <div class="cp-field">
        <label>Heading</label>
        <input class="cp-input-text" id="ms-story-spark-heading" placeholder="e.g. The Spark" />
      </div>
      <div class="cp-field">
        <label>Paragraph 1</label>
        <textarea class="cp-input-text cp-textarea" id="ms-story-spark-p1" rows="3"></textarea>
      </div>
      <div class="cp-field">
        <label>Paragraph 2</label>
        <textarea class="cp-input-text cp-textarea" id="ms-story-spark-p2" rows="3"></textarea>
      </div>

      <div class="ms-section-label" style="margin-top:22px;">Core values</div>
      <div class="cp-field">
        <label>Heading</label>
        <input class="cp-input-text" id="ms-story-values-heading" placeholder="e.g. Our Core Values" />
      </div>
      <div class="ms-hero-card">
        <div class="cp-field">
          <label>Value 1 title</label>
          <input class="cp-input-text" id="ms-story-value-0-title" />
        </div>
        <div class="cp-field">
          <label>Value 1 description</label>
          <input class="cp-input-text" id="ms-story-value-0-desc" />
        </div>
      </div>
      <div class="ms-hero-card">
        <div class="cp-field">
          <label>Value 2 title</label>
          <input class="cp-input-text" id="ms-story-value-1-title" />
        </div>
        <div class="cp-field">
          <label>Value 2 description</label>
          <input class="cp-input-text" id="ms-story-value-1-desc" />
        </div>
      </div>
      <div class="ms-hero-card">
        <div class="cp-field">
          <label>Value 3 title</label>
          <input class="cp-input-text" id="ms-story-value-2-title" />
        </div>
        <div class="cp-field">
          <label>Value 3 description</label>
          <input class="cp-input-text" id="ms-story-value-2-desc" />
        </div>
      </div>

      <div class="ms-section-label" style="margin-top:22px;">Founder quote</div>
      <div class="cp-field">
        <label>Quote</label>
        <textarea class="cp-input-text cp-textarea" id="ms-story-quote-text" rows="3"></textarea>
      </div>
      <div class="cp-field">
        <label>Name</label>
        <input class="cp-input-text" id="ms-story-quote-name" />
      </div>
      <div class="cp-field">
        <label>Role</label>
        <input class="cp-input-text" id="ms-story-quote-role" />
      </div>

      <div class="ms-section-label" style="margin-top:22px;">Buttons</div>
      <div class="cp-field">
        <label>First button label</label>
        <input class="cp-input-text" id="ms-story-cta-1" />
      </div>
      <div class="cp-field">
        <label>Second button label</label>
        <input class="cp-input-text" id="ms-story-cta-2" />
      </div>
    </div>

    <div id="ms-page-contact-block" hidden>
      <div class="ms-section-label" style="margin-top:22px;">Direct contact</div>
      <div class="ms-hero-card">
        <div class="cp-field">
          <label>Row 1 title</label>
          <input class="cp-input-text" id="ms-contact-direct-0-title" />
        </div>
        <div class="cp-field">
          <label>Row 1 value</label>
          <input class="cp-input-text" id="ms-contact-direct-0-value" />
        </div>
      </div>
      <div class="ms-hero-card">
        <div class="cp-field">
          <label>Row 2 title</label>
          <input class="cp-input-text" id="ms-contact-direct-1-title" />
        </div>
        <div class="cp-field">
          <label>Row 2 value</label>
          <input class="cp-input-text" id="ms-contact-direct-1-value" />
        </div>
      </div>
      <div class="ms-hero-card">
        <div class="cp-field">
          <label>Row 3 title</label>
          <input class="cp-input-text" id="ms-contact-direct-2-title" />
        </div>
        <div class="cp-field">
          <label>Row 3 value</label>
          <input class="cp-input-text" id="ms-contact-direct-2-value" />
        </div>
      </div>
    </div>

    <div id="ms-page-menu-pdf">
      <div class="ms-section-label" style="margin-top:22px;">Upload PDF Menu</div>
      <div class="ms-sub" style="margin-top:-4px;">Upload your menu as a PDF file. Customers can view and download it directly.</div>
      <div class="ms-block">
        <div class="ms-drop" id="ms-page-pdf-drop">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"/></svg>
          <div class="ms-drop-title">Drag &amp; drop your PDF here or browse files</div>
          <div class="ms-drop-sub">Supported format: PDF, max 10MB</div>
        </div>
        <div class="ms-page-pdf-status" id="ms-page-pdf-status" hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.2l2.5 2.5 4.5-5"/></svg>
          <span>velvet-bistro-dinner.pdf uploaded</span>
          <button type="button" id="ms-page-pdf-replace">Replace</button>
        </div>
      </div>
    </div>

    <button class="ms-help" type="button" data-ms-help>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/><path d="M14.4 9.6L18 6M9.6 14.4L6 18M14.4 14.4L18 18M9.6 9.6L6 6"/></svg>
      Need help? Visit the Help Center
    </button>
  </div>

  <!-- ========== 4 · Online Ordering · choose integration ========== -->
  <div class="ms-screen" data-ms="oo-integration">
    <div class="ms-kicker">Menu source · Online Ordering
      <button class="ms-kicker-link" type="button" data-ms-change>Change</button>
    </div>
    <div class="ms-title">Choose your ordering integration</div>
    <div class="ms-sub">Both power the Order tab. A native integration syncs your menu automatically; a custom provider embeds any ordering web page.</div>

    <div class="ms-options">
      <button class="ms-option on" type="button" data-integration="native">
        <span class="ms-option-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2.5L4 13.5h7l-1 8 9-11h-7z"/></svg></span>
        <span class="ms-option-text">
          <span class="ms-option-name">Native integration <span class="ms-badge">Recommended</span></span>
          <span class="ms-option-desc">Syncs your menu, prices &amp; locations from a supported provider.</span>
        </span>
        <svg class="ms-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>
      </button>

      <button class="ms-option" type="button" data-integration="custom">
        <span class="ms-option-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 010 18 15 15 0 010-18z"/></svg></span>
        <span class="ms-option-text">
          <span class="ms-option-name">Custom provider (web)</span>
          <span class="ms-option-desc">Point the app at any ordering web page in an in-app browser.</span>
        </span>
        <svg class="ms-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>
      </button>
    </div>

    <button class="ms-help" type="button" data-ms-help>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/><path d="M14.4 9.6L18 6M9.6 14.4L6 18M14.4 14.4L18 18M9.6 9.6L6 6"/></svg>
      Need help? Visit the Help Center
    </button>
  </div>

  <!-- ========== 5 · Online Ordering · custom provider webview ========== -->
  <div class="ms-screen" data-ms="oo-custom">
    <div class="ms-kicker">Online Ordering · Custom provider
      <button class="ms-kicker-link" type="button" data-ms-back="oo-integration">Back</button>
    </div>
    <div class="ms-title">Custom provider setup</div>
    <div class="ms-sub">Connect your ordering site by its web address, then set how it behaves in the app.</div>

    <div class="ms-section-label">Connect</div>
    <div class="ms-label">Ordering web address</div>
    <div class="ms-input-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 13a5 5 0 007.5.5l3-3a5 5 0 00-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 00-7.5-.5l-3 3a5 5 0 007 7l1.7-1.7"/></svg>
      <input class="ms-input" type="url" id="ms-custom-url" value="https://order.velvetbistro.com">
    </div>
    <div class="ms-hint">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>
      <span>Any ordering page works. Members can pay and check out without leaving the app.</span>
    </div>
    <button class="ms-btn" type="button" id="ms-custom-connect">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
      Connect &amp; load
    </button>

    <div class="ms-section-label">In-app browser</div>
    <div class="ms-toggle-card">
      <div class="ms-toggle-row">
        <div class="ms-toggle-text">
          <div class="ms-toggle-name">Show back button</div>
          <div class="ms-toggle-desc">Lets members return to the previous screen.</div>
        </div>
        <span class="toggle on" data-custom-opt="back"></span>
      </div>
      <div class="ms-toggle-row">
        <div class="ms-toggle-text">
          <div class="ms-toggle-name">Show app bottom bar</div>
          <div class="ms-toggle-desc">Keep your app navigation visible under the page.</div>
        </div>
        <span class="toggle on" data-custom-opt="bottombar"></span>
      </div>
      <div class="ms-toggle-row">
        <div class="ms-toggle-text">
          <div class="ms-toggle-name">Open links in-app
            <button class="ms-info" type="button" data-tip="Keeps checkout, payment and confirmation pages inside your app instead of the phone browser.">i</button>
          </div>
          <div class="ms-toggle-desc">Links stay inside the app, not the phone browser.</div>
        </div>
        <span class="toggle on" data-custom-opt="inapp"></span>
      </div>
      <div class="ms-toggle-row">
        <div class="ms-toggle-text">
          <div class="ms-toggle-name">Only for logged-in members
            <button class="ms-info" type="button" data-tip="Guests get a sign-in prompt first, so every order is attached to a loyalty profile.">i</button>
          </div>
          <div class="ms-toggle-desc">Loads only for signed-in loyalty members.</div>
        </div>
        <span class="toggle on" data-custom-opt="membersonly"></span>
      </div>
    </div>

    <div class="ms-section-label">Look &amp; feel</div>
    <div class="ms-label" style="margin-bottom:10px">Accent colour</div>
    <div class="ms-swatches" data-swatches="custom">
      <span class="ms-swatch on" style="background:#6d28d9" data-color="#6d28d9"></span>
      <span class="ms-swatch" style="background:#c7355a" data-color="#c7355a"></span>
      <span class="ms-swatch" style="background:#18875a" data-color="#18875a"></span>
      <span class="ms-swatch" style="background:#1d63b8" data-color="#1d63b8"></span>
      <span class="ms-swatch" style="background:#d6a535" data-color="#d6a535"></span>
    </div>
    <div class="ms-toggle-card" style="margin-top:14px">
      <div class="ms-toggle-row">
        <div class="ms-toggle-text">
          <div class="ms-toggle-name">Match app theme</div>
          <div class="ms-toggle-desc">Apply your brand colours over the page.</div>
        </div>
        <span class="toggle on" data-custom-opt="theme"></span>
      </div>
      <div class="ms-toggle-row">
        <div class="ms-toggle-text">
          <div class="ms-toggle-name">Hide site’s own header</div>
          <div class="ms-toggle-desc">Remove the website’s top bar for a native feel.</div>
        </div>
        <span class="toggle on" data-custom-opt="hideheader"></span>
      </div>
    </div>

    <button class="ms-help" type="button" data-ms-help>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/><path d="M14.4 9.6L18 6M9.6 14.4L6 18M14.4 14.4L18 18M9.6 9.6L6 6"/></svg>
      Need help? Visit the Help Center
    </button>
  </div>

  <!-- ========== 6 · Online Ordering · connected & customize ========== -->
  <div class="ms-screen" data-ms="oo-connected">
    <div class="ms-kicker">Menu source · Online Ordering · Connected
      <button class="ms-kicker-link" type="button" data-ms-change>Change</button>
    </div>
    <div class="ms-title">Online Ordering</div>
    <div class="ms-sub">Customize how your in-app ordering menu looks. Changes preview live on the phone.</div>

    <div class="ms-connected">
      <span class="ms-connected-logo" id="ms-oo-logo">D</span>
      <div class="ms-connected-text">
        <div class="ms-connected-name" id="ms-oo-name">Deliverect</div>
        <div class="ms-connected-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.2l2.5 2.5 4.5-5"/></svg>
          Connected
        </div>
      </div>
      <button class="ms-inline-action" type="button" id="ms-oo-manage">Manage</button>
    </div>

    <div class="ms-section-label">Look &amp; feel</div>
    <div class="ms-label">Header image</div>
    <div class="ms-image-row">
      <span class="ms-image-thumb" id="ms-ordering-hero-thumb"></span>
      <div class="ms-image-text">
        <div class="ms-image-name" id="ms-ordering-hero-name">hero-dining.jpg</div>
        <div class="ms-image-meta">Shown at the top of the menu</div>
      </div>
      <button class="ms-inline-action ok" type="button" id="ms-ordering-hero-replace">Replace</button>
    </div>

    <div class="ms-block">
      <div class="ms-label">Menu layout</div>
      <div class="ms-layouts" data-layouts="ordering">
        <button class="ms-layout on" type="button" data-layout="grid">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3.5" y="3.5" width="17" height="17" rx="2"/><path d="M12 3.5v17M3.5 12h17"/></svg>
          Image grid
        </button>
        <button class="ms-layout" type="button" data-layout="list">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1.2" fill="currentColor" stroke="none"/><circle cx="4.5" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="4.5" cy="18" r="1.2" fill="currentColor" stroke="none"/></svg>
          Classic list
        </button>
        <button class="ms-layout" type="button" data-layout="hero">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3.5" y="3.5" width="10" height="17" rx="2"/><path d="M17 6v12M21 8v8"/></svg>
          Hero showcase
        </button>
      </div>
    </div>

    <div class="ms-block">
      <div class="ms-label">Brand colour</div>
      <div class="ms-swatches" data-swatches="ordering">
        <span class="ms-swatch on" style="background:#6d28d9" data-color="#6d28d9"></span>
        <span class="ms-swatch" style="background:#c7355a" data-color="#c7355a"></span>
        <span class="ms-swatch" style="background:#18875a" data-color="#18875a"></span>
        <span class="ms-swatch" style="background:#1d63b8" data-color="#1d63b8"></span>
        <span class="ms-swatch" style="background:#d6a535" data-color="#d6a535"></span>
      </div>
    </div>

    <div class="ms-toggle-card" style="margin-top:16px">
      <div class="ms-toggle-row">
        <div class="ms-toggle-text">
          <div class="ms-toggle-name">Allergen badges
            <button class="ms-info" type="button" data-tip="Badges like Vegan, Gluten-free and Nut are pulled from each item’s dietary tags in your catalog.">i</button>
          </div>
          <div class="ms-toggle-desc">Show dietary &amp; allergen tags on items</div>
        </div>
        <span class="toggle on" data-ordering-opt="allergens"></span>
      </div>
      <div class="ms-toggle-row">
        <div class="ms-toggle-text">
          <div class="ms-toggle-name">Loyalty points banner</div>
          <div class="ms-toggle-desc">Promote points earning at the top</div>
        </div>
        <span class="toggle on" data-ordering-opt="banner"></span>
      </div>
    </div>

    <button class="ms-help" type="button" data-ms-help>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/><path d="M14.4 9.6L18 6M9.6 14.4L6 18M14.4 14.4L18 18M9.6 9.6L6 6"/></svg>
      Need help? Visit the Help Center
    </button>
  </div>

  <!-- ========== 7 · Manual · build method ========== -->
  <div class="ms-screen" data-ms="build-method">
    <div class="ms-kicker accent">Menu source · Build manually
      <button class="ms-kicker-link" type="button" data-ms-change>Change</button>
    </div>
    <div class="ms-title">How do you want to build your menu?</div>
    <div class="ms-sub">Start from scratch, import a file you already have, or let AI draft it for you.</div>

    <div class="ms-block">
      <div class="ms-card featured">
        <div class="ms-card-head">
          <span class="ms-option-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.6"/><path d="M14 5.5h6.5M14 9h4M14 15.5h6.5M14 19h4"/></svg></span>
          <div class="ms-card-title">Build from scratch <span class="ms-badge">Recommended</span></div>
        </div>
        <div class="ms-card-desc">Create your categories and add items yourself — full control over layout, prices, photos and allergen tags.</div>
        <button class="ms-btn" type="button" id="ms-build-scratch">
          Start building
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15"/><path d="M13 6l6 6-6 6"/></svg>
        </button>
      </div>

      <div class="ms-card">
        <div class="ms-card-head">
          <span class="ms-option-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4"/><path d="M8 8l4-4 4 4"/><path d="M4 16v3a1.5 1.5 0 001.5 1.5h13A1.5 1.5 0 0020 19v-3"/></svg></span>
          <div class="ms-card-title">Import menu
            <button class="ms-info" type="button" data-tip="We read your file’s header row and let you map each column to a category, item, price or description before anything is created.">i</button>
          </div>
        </div>
        <div class="ms-card-desc">Upload a file and we’ll map its columns into categories and items for you to review.</div>
        <div class="ms-chips">
          <span class="ms-chip-static">CSV</span>
          <span class="ms-chip-static">XLSX</span>
          <span class="ms-chip-static">Google Sheets</span>
        </div>
        <button class="ms-btn" type="button" id="ms-build-import">Import from file</button>
      </div>

      <div class="ms-card muted">
        <div style="display:flex;justify-content:flex-end"><span class="ms-badge soon">Coming soon</span></div>
        <div class="ms-card-head" style="margin-top:8px">
          <span class="ms-option-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/></svg></span>
          <div class="ms-card-title">Build menu with AI</div>
        </div>
        <div class="ms-card-desc">Upload CSVs, menu PDFs or photos and AI will draft your entire menu — categories, items, prices and descriptions — for you to review and finish.</div>
        <button class="ms-btn ghost" type="button" id="ms-build-ai">Notify me when ready</button>
      </div>
    </div>

    <button class="ms-help" type="button" data-ms-help>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/><path d="M14.4 9.6L18 6M9.6 14.4L6 18M14.4 14.4L18 18M9.6 9.6L6 6"/></svg>
      Need help? Visit the Help Center
    </button>
  </div>

  <!-- ========== 8 · Manual · categories ========== -->
  <div class="ms-screen" data-ms="build-categories">
    <div class="ms-kicker accent">Menu source · Build manually
      <button class="ms-kicker-link" type="button" data-ms-back="build-method">Back</button>
    </div>
    <div class="ms-title">Build your menu</div>
    <div class="ms-sub">Create categories, then tap one to add its items. Add a hero image so your menu looks great.</div>

    <div class="ms-section-label" style="margin-top:20px">
      <span>Menu hero image</span>
      <button class="ms-info" type="button" data-tip="One wide image at the very top of the Menu tab. Category images sit inside each section.">i</button>
      <button class="ms-inline-action ok" type="button" id="ms-hero-set">Set</button>
    </div>
    <div class="ms-tip" style="margin:-4px 0 10px">Shown at the top of your whole menu.</div>
    <div class="ms-hero" id="ms-menu-hero"></div>

    <div class="ms-section-label">
      <span style="font-size:14px;text-transform:none;letter-spacing:-.3px;color:var(--ink)">Categories</span>
      <button class="ms-btn soft small" type="button" id="ms-add-category" style="margin-left:auto">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
        Add category
      </button>
    </div>
    <div class="ms-tip" style="margin:-4px 0 12px">Drag to reorder. Tap a category to add or edit its items.</div>

    <div class="ms-list" id="ms-category-list"></div>
    <button class="ms-add-row" type="button" id="ms-new-category">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
      New category
    </button>

    <button class="ms-help" type="button" data-ms-help>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/><path d="M14.4 9.6L18 6M9.6 14.4L6 18M14.4 14.4L18 18M9.6 9.6L6 6"/></svg>
      Need help? Visit the Help Center
    </button>
  </div>

  <!-- ========== 9 · Manual · items inside a category ========== -->
  <div class="ms-screen" data-ms="build-items">
    <div class="cp-detail-header">
      <button class="cp-back" type="button" id="ms-items-back">‹</button>
      <div class="cp-detail-title">All categories</div>
    </div>

    <div class="ms-title-row">
      <div class="ms-title" id="ms-items-title">Category</div>
      <button class="ms-icon-btn" type="button" id="ms-rename-category" title="Rename category">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>
      </button>
    </div>
    <div class="ms-sub" id="ms-items-meta">0 items</div>

    <div class="ms-section-label">
      <span>Items</span>
      <button class="ms-btn soft small" type="button" id="ms-add-item" style="margin-left:auto">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
        Add item
      </button>
    </div>

    <div class="ms-list" id="ms-item-list"></div>
    <div class="ms-tip">Tap an item to edit its details on the right.</div>

    <button class="ms-help" type="button" data-ms-help>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/><path d="M14.4 9.6L18 6M9.6 14.4L6 18M14.4 14.4L18 18M9.6 9.6L6 6"/></svg>
      Need help? Visit the Help Center
    </button>
  </div>

  <!-- ========== Item editor — moved into the third panel on open ========== -->
  <div class="cp-detail ms-item-editor" data-detail="menu-item" id="ms-item-editor">
    <div class="cp-detail-header">
      <button class="cp-back" type="button" id="ms-item-back">‹</button>
      <div class="cp-detail-title" id="ms-item-back-label">Category</div>
    </div>

    <div class="ms-editor-head">
      <div class="ms-editor-title" id="ms-item-heading">Item</div>
      <label class="ms-avail">Available <span class="toggle on" id="ms-item-available"></span></label>
    </div>

    <div class="ms-label">Item name</div>
    <input class="ms-input" type="text" id="ms-item-name">

    <div class="ms-label" style="margin-top:14px">Description</div>
    <textarea class="ms-textarea" id="ms-item-desc"></textarea>

    <div class="ms-row2" style="margin-top:14px">
      <div>
        <div class="ms-label">Price</div>
        <input class="ms-input" type="text" id="ms-item-price">
      </div>
      <div>
        <div class="ms-label">Calories (optional)</div>
        <input class="ms-input" type="text" id="ms-item-cal" placeholder="620 kcal">
      </div>
    </div>

    <div class="ms-label" style="margin-top:16px">Item layout
      <button class="ms-info" type="button" data-tip="How this single item is drawn in the member app. Hero gives one dish a full-width photo.">i</button>
    </div>
    <div class="ms-seg" id="ms-item-layout">
      <button class="ms-seg-btn on" type="button" data-item-layout="card">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3.5" y="3.5" width="17" height="17" rx="2"/><path d="M12 3.5v17M3.5 12h17"/></svg>Card
      </button>
      <button class="ms-seg-btn" type="button" data-item-layout="list">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1.2" fill="currentColor" stroke="none"/><circle cx="4.5" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="4.5" cy="18" r="1.2" fill="currentColor" stroke="none"/></svg>List
      </button>
      <button class="ms-seg-btn" type="button" data-item-layout="hero">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3.5" y="3.5" width="10" height="17" rx="2"/><path d="M17 6v12M21 8v8"/></svg>Hero
      </button>
    </div>

    <div class="ms-label" style="margin-top:16px">Item photo</div>
    <div class="ms-image-row">
      <span class="ms-image-thumb" id="ms-item-photo"></span>
      <div class="ms-image-text">
        <div class="ms-image-name" id="ms-item-photo-name">item.jpg</div>
        <div class="ms-image-meta">JPG or PNG · at least 800×800</div>
      </div>
      <button class="ms-inline-action ok" type="button" id="ms-item-photo-replace">Replace</button>
    </div>

    <div class="ms-label" style="margin-top:16px">Allergens &amp; dietary tags
      <button class="ms-info" type="button" data-tip="Tags become badges on the item card and let members filter the menu.">i</button>
    </div>
    <div class="ms-tags" id="ms-item-tags"></div>

    <button class="ms-btn ghost" type="button" id="ms-item-delete" style="margin-top:22px;color:var(--danger,#c7355a)">Delete item</button>
  </div>
</div>
`,S=`    <div class="cp-page" id="cp-more" style="display:none;">
      <div class="cp-master">
        <h3 class="cp-head">Editing page</h3>
        <div class="cp-page-title">More</div>
        <div class="cp-page-sub">Grid of quick-access tiles. Toggle any tile off to hide it on the phone.</div>

        <div class="cp-section open">
          <div class="cp-head-row">More tiles <span class="chev">›</span></div>
          <div class="cp-body">
            <div class="cp-toggle-row"><span class="lbl">Home</span><span class="toggle" data-bind=".more-tile:nth-child(1)"></span></div>
            <div class="cp-toggle-row"><span class="lbl">My Account</span><span class="toggle" data-bind=".more-tile:nth-child(2)"></span></div>
            <div class="cp-toggle-row"><span class="lbl">My Orders</span><span class="toggle" data-bind=".more-tile:nth-child(3)"></span></div>
            <div class="cp-toggle-row"><span class="lbl">Loyalty Rewards</span><span class="toggle" data-bind=".more-tile:nth-child(4)"></span></div>
            <div class="cp-toggle-row"><span class="lbl">Our Menu</span><span class="toggle" data-bind=".more-tile:nth-child(5)"></span></div>
            <div class="cp-toggle-row"><span class="lbl">Find a Cafe</span><span class="toggle" data-bind=".more-tile:nth-child(6)"></span></div>
            <div class="cp-toggle-row"><span class="lbl">Refer a Friend</span><span class="toggle" data-bind=".more-tile:nth-child(7)"></span></div>
            <div class="cp-toggle-row"><span class="lbl">About Us</span><span class="toggle" data-bind=".more-tile:nth-child(8)"></span></div>
            <div class="cp-toggle-row"><span class="lbl">Contact Us</span><span class="toggle" data-bind=".more-tile:nth-child(9)"></span></div>
          </div>
        </div>

        <div class="cp-info"><b>Note:</b> reorder + add is a full drill (P2). Toggle to hide is the P1 shortcut.</div>
      </div>
    </div>
`,ne=`    <!-- ---------- REWARDS config ---------- -->
    <div class="cp-page" id="cp-rewards" style="display:none;">
      <div class="cp-master">
        <h3 class="cp-head">Editing page</h3>
        <div class="cp-page-title">Rewards</div>
        <div class="cp-page-sub">Content auto-populates from Hub 2 Campaign Center. You control what shows.</div>

        <div class="cp-section open" id="rw-page-content">
          <div class="cp-head-row">Rewards widgets <span class="chev">›</span></div>
          <div class="cp-body">
            <div id="rw-widget-list">
              <div class="cp-widget-row off">
                <span class="handle">⠿</span>
                <span class="w-name" data-rw-key="gifts">My Gifts</span>
                <span class="toggle" data-bind="[data-slot-name='rewards-gifts']" title="Show on Rewards">
                  <svg class="i-plus" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 4v12M4 10h12"/></svg>
                  <svg class="i-check" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l4 4 8-8"/></svg>
                </span>
                <button class="w-edit-icon" data-rw-key="gifts" title="Edit card">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 3l4.5 4.5-10 10H2.5v-4.5l10-10z"/><path d="M11 4.5l4.5 4.5"/></svg>
                </button>
              </div>
              <div class="cp-widget-row off">
                <span class="handle">⠿</span>
                <span class="w-name" data-rw-key="points">My Points Shop</span>
                <span class="toggle" data-bind="[data-slot-name='rewards-points']" title="Show on Rewards">
                  <svg class="i-plus" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 4v12M4 10h12"/></svg>
                  <svg class="i-check" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l4 4 8-8"/></svg>
                </span>
                <button class="w-edit-icon" data-rw-key="points" title="Edit card">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 3l4.5 4.5-10 10H2.5v-4.5l10-10z"/><path d="M11 4.5l4.5 4.5"/></svg>
                </button>
              </div>
              <div class="cp-widget-row off">
                <span class="handle">⠿</span>
                <span class="w-name" data-rw-key="punch">Punch Card</span>
                <span class="toggle" data-bind="[data-slot-name='rewards-punch']" title="Show on Rewards">
                  <svg class="i-plus" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 4v12M4 10h12"/></svg>
                  <svg class="i-check" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l4 4 8-8"/></svg>
                </span>
                <button class="w-edit-icon" data-rw-key="punch" title="Edit card">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 3l4.5 4.5-10 10H2.5v-4.5l10-10z"/><path d="M11 4.5l4.5 4.5"/></svg>
                </button>
              </div>
            </div>
            <div class="cp-hint-inline">Click <b>+</b> to add · <b>✏</b> to edit · drag <b>⠿</b> to reorder</div>
            <div class="cp-add-widget-wrap">
              <button class="cp-add-widget-btn" id="rw-add-block-btn" type="button">
                <svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 4v12M4 10h12"/></svg>
                Add widget
              </button>
              <div class="cp-add-widget-menu" id="rw-add-block-menu">
                <button type="button" data-rw-add="text"><span class="aw-ic">¶</span> Text Block</button>
                <button type="button" data-rw-add="promo"><span class="aw-ic">▤</span> Promo Cards</button>
                <button type="button" data-rw-add="image"><span class="aw-ic">🖼</span> Image Banner</button>
              </div>
            </div>
          </div>
        </div>

        <div class="cp-info"><b>Branding</b> is global — to edit colors, fonts, and logo, go to <a href="#" id="rewards-branding-link">Branding in the left sidebar</a>.</div>
      </div>

      <!-- Drill: Rewards content block editor (fields swap by block type) -->
      <div class="cp-detail" data-detail="rw-block">
        <div class="cp-detail-header">
          <button class="cp-back">‹</button>
          <div class="cp-detail-title" id="rw-block-title">Edit block</div>
        </div>
        <div class="cp-section open">
          <div class="cp-body">
            <div class="cp-field" data-rw-field="heading">
              <label>Heading</label>
              <input class="cp-input-text" id="rw-block-heading" placeholder="e.g. How your loyalty works" />
            </div>
            <div class="cp-field" data-rw-field="body">
              <label>Body text</label>
              <textarea class="cp-input-text cp-textarea" id="rw-block-body" rows="4" placeholder="Explain how members earn and redeem."></textarea>
            </div>
            <div class="cp-field" data-rw-field="image">
              <label>Image</label>
              <div class="pc-edit-image-zone" id="rw-block-image-zone">
                <img class="pc-edit-image-preview" id="rw-block-image-preview" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" alt="" style="display:none;" />
                <div class="pc-edit-image-empty" id="rw-block-image-empty">
                  <div class="pc-upload-prompt">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                    <span>Drop image or click</span>
                  </div>
                  <div class="pc-upload-hint">jpg · png · webp · max 5 MB</div>
                </div>
              </div>
              <input type="file" id="rw-block-image-file" accept="image/png,image/jpeg,image/jpg,image/webp" style="display:none;" />
              <button class="pc-edit-image-remove" id="rw-block-image-remove" style="display:none;">✕ Remove image</button>
            </div>
            <div class="cp-field" data-rw-field="cards">
              <label>Cards</label>
              <div id="rw-block-cards"></div>
              <button class="cp-add-widget-btn" id="rw-block-add-card" type="button">+ Add card</button>
            </div>
            <div class="cp-field" data-rw-field="cta">
              <label>Button text</label>
              <input class="cp-input-text" id="rw-block-cta" placeholder="Leave empty for no button" />
              <div class="cp-hint-inline">Leave this empty and the block shows as information only.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Drill: Rewards card editor (shared by all three cards, populated by JS) -->
      <div class="cp-detail" data-detail="rw-tile">
        <div class="cp-detail-header">
          <button class="cp-back">‹</button>
          <div class="cp-detail-title" id="rw-edit-title">Edit card</div>
        </div>
        <div class="cp-section open">
          <div class="cp-head-row" style="display:none;">Content</div>
          <div class="cp-body">
            <div class="cp-field">
              <label>Image</label>
              <div class="pc-edit-image-zone" id="rw-edit-image-zone">
                <img class="pc-edit-image-preview" id="rw-edit-image-preview" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" alt="" style="display:none;" />
                <div class="pc-edit-image-empty" id="rw-edit-image-empty">
                  <div class="pc-upload-prompt">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                    <span>Drop image or click</span>
                  </div>
                  <div class="pc-upload-hint">jpg · png · webp · max 5 MB</div>
                </div>
              </div>
              <input type="file" id="rw-edit-image-file" accept="image/png,image/jpeg,image/jpg,image/webp" style="display:none;" />
              <button class="pc-edit-image-remove" id="rw-edit-image-remove" style="display:none;">✕ Remove image</button>
            </div>
            <div class="cp-field">
              <label>Headline</label>
              <input class="cp-input-text" id="rw-edit-headline" placeholder="e.g. Active rewards ready to redeem" />
            </div>
            <div class="cp-field">
              <label>Description</label>
              <textarea class="cp-input-text cp-textarea" id="rw-edit-desc" rows="2" placeholder="Short supporting line"></textarea>
            </div>
            <div class="cp-field">
              <label>Button text</label>
              <input class="cp-input-text" id="rw-edit-btn-text" placeholder="Leave empty to hide the button" />
            </div>
          </div>
        </div>
      </div>
    </div>
`,re=`<div class="cp-master">
  <h3 class="cp-head">Step 1</h3>
  <div class="cp-page-title">Tell us about your business</div>
  <div class="cp-page-sub">These details appear on your app's home screen. You can change them anytime.</div>

  <div class="gf-fieldset">
    <label class="gf-field-label" for="gf-biz-name">Company name <span class="gf-req">*</span></label>
    <input id="gf-biz-name" class="cp-input-text" type="text" placeholder="e.g. Velvet Bistro" value="" autocomplete="organization" maxlength="60" required aria-describedby="gf-biz-name-error" />
    <div class="gf-field-error" id="gf-biz-name-error" aria-live="polite"></div>
  </div>

  <div class="gf-fieldset">
    <label class="gf-field-label" for="gf-country">Country <span class="gf-req">*</span></label>
    <select id="gf-country" class="cp-select" required aria-describedby="gf-country-error">
      <option value="" disabled selected>Select country</option>
      <option value="US">United States</option>
      <option value="GB">United Kingdom</option>
      <option value="IE">Ireland</option>
      <option value="IL">Israel</option>
      <option value="AU">Australia</option>
      <option value="CA">Canada</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
      <option value="ES">Spain</option>
      <option value="IT">Italy</option>
      <option value="NL">Netherlands</option>
      <option value="SG">Singapore</option>
    </select>
    <div class="gf-field-error" id="gf-country-error" aria-live="polite"></div>
  </div>

  <div class="gf-fieldset">
    <label class="gf-field-label" id="gf-cat-label">Primary industry <span class="gf-optional">· optional secondary</span></label>
    <div class="gf-chip-row" id="gf-cat-row" role="group" aria-labelledby="gf-cat-label" aria-describedby="gf-cat-hint">
      <button class="gf-chip" data-cat="Beauty and Spa" type="button">Beauty and Spa</button>
      <button class="gf-chip" data-cat="Entertainment" type="button">Entertainment</button>
      <button class="gf-chip" data-cat="Food &amp; Drink" type="button">Food &amp; Drink</button>
      <button class="gf-chip" data-cat="Groceries &amp; Market" type="button">Groceries &amp; Market</button>
      <button class="gf-chip" data-cat="Health &amp; Fitness" type="button">Health &amp; Fitness</button>
      <button class="gf-chip" data-cat="Retail &amp; Fashion" type="button">Retail &amp; Fashion</button>
      <button class="gf-chip" data-cat="Services" type="button">Services</button>
      <button class="gf-chip" data-cat="Travel" type="button">Travel</button>
      <button class="gf-chip" data-cat="Other" type="button">Other</button>
    </div>
    <div class="gf-field-hint" id="gf-cat-hint">Choose the category customers associate with you first. Add a second only when it materially changes the recommended content.</div>
  </div>

  <div class="gf-fieldset">
    <label class="gf-field-label" for="gf-headline">App tagline</label>
    <input id="gf-headline" class="cp-input-text" type="text" placeholder="e.g. Fresh food, real rewards" value="" autocomplete="off" maxlength="60" />
    <div class="gf-field-hint">A short tagline shown below your business name on the app home screen.</div>
  </div>
</div>
`,ie=`<div class="cp-master">
  <h3 class="cp-head">Online ordering · Step 3 of 3</h3>
  <div class="cp-page-title">How do customers place online orders?</div>
  <div class="cp-page-sub">Choose how orders reach you. Hover an option to preview the app it builds.</div>

  <div class="oo-choice" id="oo-choice" role="radiogroup" aria-label="Online ordering method" aria-describedby="oo-choice-error" data-pendo-guide-id="online-ordering-choice">

    <button class="oo-opt" data-oo-mode="native" type="button" role="radio" aria-checked="false">
      <span class="oo-opt-mark" aria-hidden="true"></span>
      <span class="oo-opt-body">
        <span class="oo-opt-head">
          <span class="oo-opt-name">In-app ordering</span>
          <span class="oo-tip-btn" role="button" tabindex="0" data-oo-tip="Supports Deliverect, Olo, DoorDash and more. Customers browse your menu, reorder favourites and pay without leaving the app. Loyalty points apply automatically.">i</span>
          <span class="oo-badge oo-badge-rec" data-oo-rec hidden>Recommended</span>
          <span class="oo-opt-status" data-oo-status hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            <span data-oo-status-label>Connected</span>
          </span>
        </span>
        <span class="oo-opt-desc">Full menu, checkout and reordering — all inside your app with loyalty at checkout.</span>
        <span class="oo-opt-note">You’ll connect a provider in the next step.</span>
        <span class="oo-unlocks">
          <span class="oo-unlocks-label">Unlocks on your home screen</span>
          <span class="oo-unlocks-row">
            <span class="oo-unlock">Order Again</span>
            <span class="oo-unlock">Top Items</span>
            <span class="oo-unlock">Menu Categories</span>
            <span class="oo-unlock">Menu Reels</span>
          </span>
        </span>
      </span>
    </button>

    <button class="oo-opt" data-oo-mode="webview" type="button" role="radio" aria-checked="false">
      <span class="oo-opt-mark" aria-hidden="true"></span>
      <span class="oo-opt-body">
        <span class="oo-opt-head">
          <span class="oo-opt-name">Link your ordering website</span>
          <span class="oo-tip-btn" role="button" tabindex="0" data-oo-tip="Your ordering website opens inside the app as a seamless screen. Members are signed in automatically so their loyalty profile is linked to every order. You control the look — back button, navigation bar, and where members go after checkout.">i</span>
          <span class="oo-opt-status" data-oo-status hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            <span data-oo-status-label>Menu connected</span>
          </span>
        </span>
        <span class="oo-opt-desc">Embed your existing ordering site in the app. Members stay logged in automatically — no extra sign-in needed.</span>
        <span class="oo-opt-note">You’ll enter your ordering URL and choose how the page looks and behaves inside the app.</span>
      </span>
    </button>

    <button class="oo-opt" data-oo-mode="skip" type="button" role="radio" aria-checked="false">
      <span class="oo-opt-mark" aria-hidden="true"></span>
      <span class="oo-opt-body">
        <span class="oo-opt-head">
          <span class="oo-opt-name">Not yet</span>
        </span>
        <span class="oo-opt-desc">Launch a loyalty-led app now. You can add ordering later from Settings — nothing you build here is lost.</span>
      </span>
    </button>

  </div>

  <div class="gf-field-error" id="oo-choice-error" aria-live="polite"></div>

  <div class="oo-outcome" id="oo-outcome" hidden aria-live="polite">
    <span class="oo-outcome-ic" data-oo-outcome-ic></span>
    <span class="oo-outcome-text">
      <strong data-oo-outcome-title></strong>
      <span data-oo-outcome-sub></span>
    </span>
    <button class="oo-outcome-action" id="oo-outcome-action" type="button" hidden></button>
  </div>
</div>
`,ae=`<div class="branding-page cp-master">
  <h3 class="cp-head">Step 2</h3>
  <div class="cp-page-title">Branding</div>
  <div class="cp-page-sub">Consistent branding helps customers recognize you and builds trust.</div>

  <div class="cp-section open">
    <div class="cp-head-row">Logo <span class="chev">›</span></div>
    <div class="cp-body">
      <div class="branding-upload" id="gf-logo-zone"><button class="branding-upload-button" type="button">+ Upload from Computer</button><div>or drag &amp; drop files here</div></div>
      <input type="file" id="gf-logo-file" accept="image/png,image/jpeg,image/jpg,image/webp" hidden />
      <div class="cp-upload-note">Supported: png, jpg, jpeg, webp. Max 5MB.</div>
      <div class="branding-logo-result" id="gf-logo-result" style="display:none;"><img id="gf-logo-thumb-img" alt="Uploaded logo" /><span id="gf-logo-filename"></span><button id="gf-logo-replace" type="button">Replace</button><button id="gf-logo-remove" type="button">Remove</button></div>
      <div id="gf-logo-controls" hidden></div>
    </div>
  </div>

  <div class="cp-section open"><div class="cp-head-row">App header <span class="chev">›</span></div><div class="cp-body"><div class="cp-field"><label>Business name</label><input class="cp-input-text" data-bind-text=".app-top-header .brand-text .name" value="Your Business" /></div><div class="cp-field"><label>Storefront headline</label><input class="cp-input-text" data-bind-text=".app-top-header .brand-text .sub" value="Welcome back!" /></div><div class="cp-toggle-row"><span class="lbl">Show business name</span><span class="toggle on" data-bind=".app-top-header .brand-text"></span></div></div></div>

  <div class="cp-section open"><div class="cp-head-row">Brand colour <span class="chev">›</span></div><div class="cp-body"><div class="cp-color-row branding-color-row"><div class="cp-color-swatch"><input type="color" value="#22d087" data-bind-color="--p-accent" /></div><div class="cp-color-info"><div class="cp-color-label">Primary brand color</div><input class="cp-color-hex" value="#22D087" spellcheck="false" maxlength="9" /></div><button class="branding-color-trigger" type="button" aria-label="Edit primary brand color"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></button><div class="branding-contrast-warning" id="branding-contrast-accent" role="alert" hidden></div></div></div></div>

  <div class="cp-section open"><div class="cp-head-row">Background <span class="chev">›</span></div><div class="cp-body"><div class="cp-mini-label">App background fill</div><div class="cp-seg" id="bgfill-mode"><button type="button" class="cp-seg-btn active" data-mode="solid">Solid</button><button type="button" class="cp-seg-btn" data-mode="gradient">Gradient</button></div></div><div class="cp-body branding-paired-rows"><div class="cp-color-row branding-color-row"><div class="cp-color-swatch"><input type="color" value="#c5c5f3" data-bind-color="--p-bg" /></div><div class="cp-color-info"><div class="cp-color-label">Background color</div><input class="cp-color-hex" value="#C5C5F3" spellcheck="false" maxlength="9" /></div><button class="branding-color-trigger" type="button" aria-label="Edit background color"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></button></div><div class="cp-color-row branding-color-row" id="bgfill-row2" hidden><div class="cp-color-swatch"><input type="color" value="#e4e4f5" data-bind-color="--p-bg-2" /></div><div class="cp-color-info"><div class="cp-color-label">Gradient end color</div><input class="cp-color-hex" value="#E4E4F5" spellcheck="false" maxlength="9" /></div><button class="branding-color-trigger" type="button" aria-label="Edit background gradient end color"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></button></div></div><div class="cp-body"><div class="cp-mini-label">Cards</div></div><div class="cp-body branding-paired-rows"><div class="cp-color-row branding-color-row"><div class="cp-color-swatch"><input type="color" value="#ffffff" data-bind-color="--p-panel" /></div><div class="cp-color-info"><div class="cp-color-label">Card background color</div><input class="cp-color-hex" value="#FFFFFF" spellcheck="false" maxlength="9" /></div><button class="branding-color-trigger" type="button" aria-label="Edit card background color"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></button></div></div></div>

  <div class="cp-section open"><div class="cp-head-row">Text and Icons <span class="chev">›</span></div><div class="cp-body branding-paired-rows"><div class="cp-color-row branding-color-row"><div class="cp-color-swatch"><input type="color" value="#072105" data-bind-color="--p-text" /></div><div class="cp-color-info"><div class="cp-color-label">Primary text color</div><input class="cp-color-hex" value="#072105" spellcheck="false" maxlength="9" /></div><button class="branding-color-trigger" type="button" aria-label="Edit primary text color"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></button><div class="branding-contrast-warning" id="branding-contrast-primary" role="alert" hidden></div></div><div class="cp-color-row branding-color-row"><div class="cp-color-swatch"><input type="color" value="#000000" data-bind-color="--p-text-muted" /></div><div class="cp-color-info"><div class="cp-color-label">Secondary text color</div><input class="cp-color-hex" value="#000000" spellcheck="false" maxlength="9" /></div><button class="branding-color-trigger" type="button" aria-label="Edit secondary text color"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></button><div class="branding-contrast-warning" id="branding-contrast-secondary" role="alert" hidden></div></div><div class="cp-color-row branding-color-row"><div class="cp-color-swatch"><input type="color" value="#6d28d9" data-bind-color="--p-icon" /></div><div class="cp-color-info"><div class="cp-color-label">Icon color</div><input class="cp-color-hex" value="#6D28D9" spellcheck="false" maxlength="9" /></div><button class="branding-color-trigger" type="button" aria-label="Edit icon color"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></button><div class="branding-contrast-warning" id="branding-contrast-icon" role="alert" hidden></div></div></div></div>

  <div class="cp-section open"><div class="cp-head-row">Font family <span class="chev">›</span></div><div class="cp-body"><label class="branding-select"><span>Headings</span><select id="branding-heading-font"><option value="'Questrial', sans-serif">Questrial</option><option value="'Poppins', sans-serif">Poppins</option><option value="Georgia, serif">Playfair Display</option><option value="'Roboto', sans-serif">Roboto</option></select></label><label class="branding-select"><span>Body</span><select id="branding-body-font"><option value="'Roboto', sans-serif">Roboto</option><option value="-apple-system, BlinkMacSystemFont, sans-serif">SF Pro</option><option value="'Poppins', sans-serif">Poppins</option><option value="Georgia, serif">Merriweather</option></select></label><div class="branding-upload custom-font-upload" id="font-drop-zone"><button class="branding-upload-button" type="button" id="font-upload-button">+ Upload custom font</button></div><input id="font-file" type="file" accept=".woff2,.otf,.ttf" hidden /></div></div>

  <div class="cp-section open"><div class="cp-head-row">Icon Style <span class="chev">›</span></div><div class="cp-body"><div class="branding-icon-preview" aria-hidden="true"><span>⌂</span><span>♔</span><span>⌖</span></div><div class="cp-radio-group branding-icon-options"><div class="cp-radio" data-bind-radio="icon-style" data-value="outline">Outline</div><div class="cp-radio" data-bind-radio="icon-style" data-value="solid">Solid</div><div class="cp-radio active" data-bind-radio="icon-style" data-value="duotone">Duotone</div></div><div class="branding-upload custom-font-upload"><button class="branding-upload-button" type="button" id="icon-upload-button">+ Upload custom icon</button></div><input id="icon-file" type="file" accept="image/svg+xml,image/png" hidden /></div></div>

  <div class="cp-section open"><div class="cp-head-row">Corner <span class="chev">›</span></div><div class="cp-body branding-corners"><label>Card corners <span id="card-corner-value">11px</span><input id="card-corner-radius" type="range" min="0" max="24" value="11" /></label><p>Adjust the corner radius applied to panels and cards.</p><label>Button corners <span id="button-corner-value">9px</span><input id="button-corner-radius" type="range" min="0" max="24" value="9" /></label><p>Control how rounded buttons appear across the UI.</p></div></div>
</div>`,oe=`<div class="cp-master">
  <h3 class="cp-head">Content publishing</h3>
  <div class="cp-page-title">Prepare your first app</div>
  <div class="cp-page-sub">Review the member experience, publish the content version, then complete native app submission separately.</div>

  <div class="gf-publish-status" id="gf-content-status" data-state="draft" role="status">
    <span class="gf-publish-status-dot"></span>
    <span><b>Reviewable draft</b><small>Nothing is live yet.</small></span>
  </div>

  <div class="cp-section open">
    <div class="cp-head-row">Your setup <span class="chev">›</span></div>
    <div class="cp-body" id="gf-review-list"><!-- rendered by the guided-flow module --></div>
  </div>

  <button class="gf-publish-btn" id="gf-publish-btn" type="button" disabled aria-describedby="gf-publish-hint">Publish content changes</button>
  <div class="cp-hint-inline" id="gf-publish-hint">Complete the required setup above to publish. Content updates usually appear in the app within a few minutes.</div>

  <div class="px-launch-checklist" id="px-launch-checklist">
    <div class="px-launch-row">
      <span class="px-launch-icon" aria-hidden="true">1</span>
      <span><strong>Check the full-size preview</strong><small>The browser preview checks layout; native behavior still needs a device test.</small></span>
      <button type="button" id="px-open-device-preview">Open preview</button>
    </div>
    <label class="px-launch-row px-launch-check">
      <input type="checkbox" id="px-device-reviewed" />
      <span><strong>I reviewed the important member states</strong><small>Guest, returning member, ordering or loyalty, and every included screen.</small></span>
    </label>
  </div>

  <div class="gf-submission-card">
    <div class="gf-submission-copy">
      <strong>Native app launch</strong>
      <span>Store assets, merchant-owned accounts, privacy details, device testing, and Apple/Google submission remain a separate resumable checklist.</span>
    </div>
    <button class="gf-secondary-btn" id="gf-open-submission-btn" type="button">Open app submission</button>
  </div>

  <button class="px-restore-published" id="px-restore-published" type="button">Restore last published version</button>
</div>
`,se=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),ce=e(((e,t)=>{t.exports=se()})),C=ce();function le({as:e=`div`,html:t,...n}){return(0,C.jsx)(e,{...n,dangerouslySetInnerHTML:{__html:t}})}var w=(0,l.memo)(le),ue=[d,f,m,p,g,h,_,v,y,b,x].join(`
`),T=e=>{let t=e.indexOf(`<div class="cp-page"`);return e.slice(e.indexOf(`>`,t)+1,e.lastIndexOf(`</div>`))};function E(){return(0,C.jsxs)(`div`,{className:`config-column`,"data-comment-anchor":`config-column`,children:[(0,C.jsx)(`div`,{className:`cp-breadcrumb`,id:`cp-breadcrumb`,"data-comment-anchor":`config-breadcrumb`}),(0,C.jsxs)(`div`,{className:`config-panel`,id:`config-panel`,"data-comment-anchor":`configuration-panel`,children:[(0,C.jsx)(w,{as:`div`,className:`cp-page`,id:`cp-home`,"data-comment-anchor":`config-home`,style:{display:`flex`},html:ue}),(0,C.jsx)(w,{as:`div`,className:`cp-page`,id:`cp-rewards`,"data-comment-anchor":`config-rewards`,style:{display:`none`},html:T(ne)}),(0,C.jsx)(w,{as:`div`,className:`cp-page`,id:`cp-locations`,"data-comment-anchor":`config-locations`,style:{display:`none`},html:T(ee)}),(0,C.jsx)(w,{as:`div`,className:`cp-page`,id:`cp-menu`,"data-comment-anchor":`config-menu`,style:{display:`none`},html:T(te)}),(0,C.jsx)(w,{as:`div`,className:`cp-page`,id:`cp-more`,"data-comment-anchor":`config-more`,style:{display:`none`},html:T(S)}),(0,C.jsx)(w,{as:`div`,className:`cp-page`,id:`cp-business`,"data-comment-anchor":`config-business`,style:{display:`none`},html:re}),(0,C.jsx)(w,{as:`div`,className:`cp-page`,id:`cp-online-ordering`,"data-comment-anchor":`config-online-ordering`,style:{display:`none`},html:ie}),(0,C.jsx)(w,{as:`div`,className:`cp-page`,id:`cp-branding`,"data-comment-anchor":`config-branding-step`,style:{display:`none`},html:ae}),(0,C.jsx)(w,{as:`div`,className:`cp-page`,id:`cp-publish`,"data-comment-anchor":`config-publish`,style:{display:`none`},html:oe})]}),(0,C.jsxs)(`div`,{className:`cp-step-foot`,"data-comment-anchor":`step-footer`,children:[(0,C.jsxs)(`button`,{className:`cp-step-back`,id:`gf-step-back`,type:`button`,children:[(0,C.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,C.jsx)(`path`,{d:`M19 12H5M11 18l-6-6 6-6`})}),(0,C.jsx)(`span`,{id:`gf-step-back-label`,children:`Back`})]}),(0,C.jsxs)(`button`,{className:`cp-step-next`,id:`gf-step-next`,type:`button`,children:[(0,C.jsx)(`span`,{id:`gf-step-next-label`,children:`Save & continue`}),(0,C.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,C.jsx)(`path`,{d:`M5 12h14M13 6l6 6-6 6`})})]}),(0,C.jsxs)(`button`,{className:`gf-oo-return-btn`,id:`gf-oo-return-btn`,type:`button`,children:[(0,C.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,C.jsx)(`path`,{d:`M19 12H5M11 18l-6-6 6-6`})}),(0,C.jsx)(`span`,{className:`ms-btn-spinner`,"aria-hidden":`true`}),(0,C.jsx)(`span`,{children:`Back to Online ordering`})]})]})]})}var de=`<div class="toast-hint" id="toast-hint" role="status" aria-live="polite" aria-atomic="true">
  <span id="toast-message"></span>
  <button class="toast-action" id="toast-action" type="button" hidden></button>
</div>

<div class="confirm-overlay" id="preset-confirm-overlay" aria-hidden="true">
  <div class="confirm-box" role="dialog" aria-modal="true" aria-labelledby="preset-confirm-title" aria-describedby="preset-confirm-description">
    <div class="confirm-title" id="preset-confirm-title">Change your app focus?</div>
    <div class="confirm-body" id="preset-confirm-description">Applying “<span id="confirm-preset-name">Loyalty &amp; Rewards</span>” will update the recommended Home widgets. Your brand and written content stay in place, and you can undo the change.</div>
    <div class="confirm-actions">
      <button class="confirm-cancel" id="preset-confirm-cancel" type="button">Cancel</button>
      <button class="confirm-ok" id="preset-confirm-ok" type="button">Apply new focus</button>
    </div>
  </div>
</div>
`;function fe(){return(0,C.jsx)(`div`,{dangerouslySetInnerHTML:{__html:de}})}function pe(){return(0,C.jsx)(`div`,{className:`l3-panel`,id:`l3-panel`,"data-comment-anchor":`level-three-editor`,children:(0,C.jsx)(`div`,{className:`l3-inner`,id:`l3-body`})})}var me=`<div class="app-page px-member-experience" data-page="account">
  <header class="px-phone-page-head">
    <button class="px-phone-back" type="button" onclick="showPhonePage('home')" aria-label="Back to Home">‹</button>
    <div><strong>My Profile</strong><span>Membership and preferences</span></div>
    <button class="icon-btn px-profile-icon" type="button" aria-label="Profile options"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0114 0"/></svg></button>
  </header>
  <div class="px-member-scroll px-account-scroll">
    <section class="px-membership-card">
      <div class="px-membership-top"><span class="px-avatar">OH</span><div><strong>Obaidul Hoque</strong><small>Gold member · Since 2023</small></div><span class="px-member-brand" data-phone-brand>Your Business</span></div>
      <div class="px-membership-balance"><span><small>Available balance</small><strong>1,240 points</strong></span><button type="button" onclick="showPhonePage('point-shop')">Use points</button></div>
      <div class="px-points-progress"><span style="width:72%"></span></div>
      <p>260 points until Platinum</p>
    </section>
    <section class="px-profile-actions" aria-label="Profile shortcuts">
      <button type="button" data-phone-action="Edit profile opened"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg><span>Edit profile</span></button>
      <button type="button" onclick="showPhonePage('gifts')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M2 8h20V4H2zM12 4c-2-5-7-2-5 0M12 4c2-5 7-2 5 0"/></svg><span>My gifts</span></button>
      <button type="button" onclick="showPhonePage('orders')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/></svg><span>Orders</span></button>
    </section>
    <section class="px-profile-list" aria-label="Account settings">
      <button type="button"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span><div><strong>Security</strong><small>Password and sign-in methods</small></div><i>›</i></button>
      <button type="button"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"/></svg></span><div><strong>Language &amp; region</strong><small>English · Canada</small></div><i>›</i></button>
      <button type="button"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8a6 6 0 00-12 0c0 7-3 7-3 7h18s-3 0-3-7"/><path d="M10 20h4"/></svg></span><div><strong>Notifications</strong><small>Offers, rewards, and order updates</small></div><i>›</i></button>
      <button type="button"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h8M8 17h5"/></svg></span><div><strong>Privacy &amp; terms</strong><small>Your choices and data</small></div><i>›</i></button>
    </section>
    <button class="px-sign-out" type="button" onclick="showPhonePage('login')">Sign out</button>
  </div>
</div>
`,D=`        <!-- ============ BOTTOM NAV ============ -->
        <div class="bottom-nav" id="bottom-nav">
          <button class="nav-item active" data-nav="home">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10l9-7 9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
            <span>Home</span>
          </button>
          <button class="nav-item" data-nav="rewards">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>
            <span>Rewards</span>
          </button>
          <button class="nav-item" data-nav="locations">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Locations</span>
          </button>
          <button class="nav-item" data-nav="menu" id="nav-menu-slot">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M4 9h16M9 4v16"/></svg>
            <span>Menu</span>
          </button>
          <button class="nav-item" data-nav="more">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/></svg>
            <span>More</span>
          </button>
        </div>
`,O=`          <!-- ============ HOME PAGE (Template 3 - Café) ============ -->
          <div class="app-page" data-page="home-t3">
            <div class="app-top-header">
              <div style="display:flex; align-items:center; gap:10px;">
                <div class="brand-mark">C</div>
                <div class="brand-text">
                  <div class="name">CAFÉ CONCERTO</div>
                  <div class="sub">Coffee · Bakery</div>
                </div>
              </div>
              <button class="icon-btn px-profile-icon" onclick="openAccountPage()" aria-label="Open profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0114 0"/></svg></button>
            </div>

            <div class="welcome-card">
              <div class="w-hi">Welcome back!</div>
              <div class="w-id">Member ID · 56000123</div>
              <div class="w-stats">
                <div class="w-stat"><div class="num">3</div><div class="lbl">Gift Lists</div></div>
                <div class="w-stat"><div class="num">2</div><div class="lbl">Cards</div></div>
              </div>
            </div>

            <div style="font-size:9.5px; font-weight:800; letter-spacing:1.2px; color:var(--p-accent); text-transform:uppercase; margin:16px 0 8px; padding-left:2px;">SHARE THE LOVE</div>
            <div class="share-card">
              <div class="s-ic">🛍️</div>
              <div class="s-txt">
                <div class="s-name">Online Order</div>
                <div class="s-sub">Refer a friend, both earn credit</div>
              </div>
              <div class="s-link">Start sharing ›</div>
            </div>

            <div style="font-size:9.5px; font-weight:800; letter-spacing:1.2px; color:var(--p-accent); text-transform:uppercase; margin:16px 0 8px; padding-left:2px;">SEASONAL DROP</div>
            <div class="drop-card">
              <div class="drop-image">☕</div>
              <div class="drop-body">
                <div class="drop-kicker">Limited edition</div>
                <div class="drop-title">Your daily ritual, elevated</div>
                <button class="drop-btn">Order Now</button>
              </div>
            </div>
          </div>
`,he=`          <!-- ============ HOME PAGE (Template 2 - Fine Dining) ============ -->
          <div class="app-page active" data-page="home">
            <!-- Reels chip: floating overlay above app-top-header, always at top of phone -->
            <div class="phone-reels-chip hidden-slot" data-widget="menu-reels" role="button" tabindex="0">
              <div class="reels-chip-body">
                <span class="reels-chip-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l14 9-14 9z"/></svg>
                </span>
                <span class="reels-chip-label" id="phone-reels-chip-label">New reels · tap to watch</span>
              </div>
              <button class="reels-chip-dismiss" type="button" title="Dismiss" aria-label="Dismiss reels">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 5l10 10M15 5L5 15"/></svg>
              </button>
            </div>

            <div class="app-top-header pos-center">
              <div class="header-tap-target header-group" onclick="openBusinessNameSettings()" title="Edit business name & header">
                <div class="brand-mark" id="phone-brand-mark">?</div>
                <div class="brand-text">
                  <div class="name" id="phone-brand-name">Your Business</div>
                  <div class="sub" id="phone-brand-sub">Storefront headline</div>
                </div>
              </div>
              <button class="icon-btn px-profile-icon" onclick="openAccountPage()" aria-label="Open profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0114 0"/></svg></button>
            </div>

            <div class="category-badge"></div>

            <!-- Blank placeholder shown on Step 1 before merchant edits anything -->
            <div class="phone-blank-placeholder">
              <div class="ec-graphic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
              </div>
              <div class="ec-title">Your app preview</div>
              <div class="ec-sub">Start filling in your details to see your app come to life.</div>
            </div>

            <!-- Empty canvas (visible when Home has no widgets) -->
            <div class="empty-canvas" data-empty="home">
              <div class="ec-graphic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
              </div>
              <div class="ec-title">Start building your Home</div>
              <div class="ec-sub">Add widgets from the left panel to build up your app.</div>
            </div>

            <div class="greet-row hidden-slot" data-widget="profile">
              <div class="hello">Welcome back!</div>
              <div class="guest-state">
                <div class="g-title">Welcome!</div>
                <div class="g-sub">Log in to see your points &amp; rewards</div>
                <button class="g-login-btn" type="button">Log In</button>
              </div>
            </div>

            <div class="loyalty-card hidden-slot" data-widget="profile" data-loyalty="ring">
              <div class="lc-body">
                <div class="lc-balance">
                  <div class="lc-label">Rewards balance</div>
                  <div class="lc-points"><b>200</b> points</div>
                </div>
                <div class="lc-next">
                  <div class="lc-next-txt">50 points to your next reward</div>
                  <div class="lc-bar"><span style="width:80%"></span></div>
                </div>
                <button class="lc-card-btn" type="button">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M20 14v.01M14 20v.01M20 20v.01M17 20h.01M20 17h.01"/></svg>
                  Show loyalty card
                </button>
              </div>
              <div class="lc-ring" aria-hidden="true">
                <svg viewBox="0 0 72 72">
                  <circle class="lc-ring-track" cx="36" cy="36" r="30"/>
                  <circle class="lc-ring-fill" cx="36" cy="36" r="30"/>
                </svg>
                <div class="lc-ring-label"><b>200</b><span>/250</span></div>
              </div>
            </div>

            <!-- Webview ordering CTA (shown only when merchant picks "Link your ordering website" in Step 2) -->
            <div class="webview-cta-card" data-widget="webview-cta">
              <div class="webview-cta-image" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 14h32v22a4 4 0 01-4 4H12a4 4 0 01-4-4z"/><path d="M8 14l4-6h24l4 6"/><path d="M18 22h12"/><path d="M18 28h8"/></svg>
              </div>
              <div class="webview-cta-body">
                <div class="webview-cta-eyebrow">Order online</div>
                <div class="webview-cta-title">Hungry? Order in seconds</div>
                <div class="webview-cta-sub">Delivery or pickup — earn points on every order</div>
                <button class="webview-cta-btn" type="button">Order now →</button>
              </div>
            </div>

            <!-- Promo Cards Widget · Featured (unified — carousel or stack layout) -->
            <div class="promo-cards-widget hidden-slot" data-widget="promo-cards" data-pc-display="carousel" data-pc-image="cover" data-pc-cta="filled" data-pc-corners="rounded">
              <div class="pc-carousel-wrap" id="pc-carousel-wrap"></div>
              <div class="pc-dots" id="pc-dots"></div>
            </div>

            <!-- Promo Cards Widget · More Offers (second, independent instance) -->
            <div class="promo-cards-widget hidden-slot" data-widget="promo-cards-2" data-pc-display="stack" data-pc-image="beside" data-pc-cta="filled" data-pc-corners="rounded">
              <div class="pc-carousel-wrap" id="pc2-carousel-wrap"></div>
              <div class="pc-dots" id="pc2-dots"></div>
            </div>

            <div class="social-strip hidden-slot" data-widget="social">
              <span title="Instagram">📷</span>
              <span title="Facebook">📘</span>
              <span title="TikTok">🎵</span>
              <span title="YouTube">▶</span>
            </div>

            <!-- Order Again widget -->
            <div class="oa-widget hidden-slot" data-widget="order-again">
              <div class="oa-header">
                <div class="oa-eyebrow">Your last order</div>
                <div class="oa-sub" id="oa-when">Ordered 3 days ago · Downtown</div>
              </div>
              <div class="oa-card">
                <div class="oa-img" id="oa-img"></div>
                <div class="oa-body">
                  <div class="oa-name" id="oa-name">Creamy Pesto Rigatoni</div>
                  <div class="oa-meta" id="oa-meta">+ Parmesan · Sparkling water</div>
                  <div class="oa-price" id="oa-price">$18.50</div>
                </div>
                <button class="oa-btn" type="button">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 01-9 9 9 9 0 01-7.6-4.2"/><path d="M3 12a9 9 0 019-9 9 9 0 017.6 4.2"/><path d="M20 3v5h-5M4 21v-5h5"/></svg>
                  Reorder
                </button>
              </div>
            </div>

            <!-- Top Items carousel -->
            <div class="ti-widget hidden-slot" data-widget="top-items">
              <div class="ti-head">
                <div class="ti-title">Popular right now</div>
                <button class="ti-see-all" type="button">See all →</button>
              </div>
              <div class="ti-carousel" id="ti-carousel"></div>
            </div>

            <!-- Menu Categories grid -->
            <div class="mc-widget hidden-slot" data-widget="menu-categories" data-mc-cols="2">
              <div class="mc-head">
                <div class="mc-title">Browse the menu</div>
              </div>
              <div class="mc-grid" id="mc-grid"></div>
            </div>
          </div>
`,ge=`          <!-- ============ LOCATIONS PAGE ============ -->
          <div class="app-page" data-page="locations">
            <div class="app-top-header">
              <div style="display:flex; align-items:center; gap:10px;">
                <div class="brand-mark">V</div>
                <div class="brand-text">
                  <div class="name">Find a Branch</div>
                  <div class="sub">Velvet Bistro across Dubai</div>
                </div>
              </div>
              <button class="icon-btn" title="Filter">⚙</button>
            </div>

            <div class="search-bar hidden-slot">🔍 <span>Search branches</span></div>

            <div class="filter-chips hidden-slot">
              <div class="chip active">Open now</div>
              <div class="chip">Dine-in</div>
              <div class="chip">Takeout</div>
              <div class="chip">Delivery</div>
            </div>

            <div class="loc-card palm hidden-slot">
              <div class="thumb">🌴</div>
              <div class="info">
                <div class="name">Palm Jumeirah</div>
                <div class="addr">The Pointe, Palm Jumeirah</div>
                <div class="meta">Open until 11pm · 2.4 km</div>
              </div>
              <div class="actions">
                <button class="nav-btn">📍 Navigate</button>
                <button class="arrow-btn-sm">›</button>
              </div>
            </div>

            <div class="loc-card bay hidden-slot">
              <div class="thumb">🏙</div>
              <div class="info">
                <div class="name">Business Bay</div>
                <div class="addr">Bay Square, Business Bay</div>
                <div class="meta">Open until 10pm · 5.1 km</div>
              </div>
              <div class="actions">
                <button class="nav-btn">📍 Navigate</button>
                <button class="arrow-btn-sm">›</button>
              </div>
            </div>

            <div class="loc-card downtown hidden-slot">
              <div class="thumb">🌆</div>
              <div class="info">
                <div class="name">Downtown Branch</div>
                <div class="addr">The Dubai Mall, Downtown</div>
                <div class="meta">Open until 12am · 8.7 km</div>
              </div>
              <div class="actions">
                <button class="nav-btn">📍 Navigate</button>
                <button class="arrow-btn-sm">›</button>
              </div>
            </div>
          </div>
`,_e=`<div class="app-page px-member-experience px-login-page" data-page="login">
  <header class="px-phone-page-head">
    <button class="px-phone-back" type="button" onclick="showPhonePage('home')" aria-label="Back to Home">‹</button>
    <div><strong data-phone-brand>Your Business</strong><span>Member access</span></div>
  </header>
  <div class="px-member-scroll px-login-scroll">
    <section class="px-login-welcome">
      <div class="px-login-mark" id="px-login-mark">Y</div>
      <span>Welcome back</span>
      <h2>Your rewards are waiting.</h2>
      <p>Sign in to use gifts, collect points, and see your recent orders.</p>
    </section>
    <section class="px-login-card">
      <div class="px-login-tabs" role="tablist" aria-label="Sign-in method"><button class="active" type="button" role="tab" aria-selected="true">Phone</button><button type="button" role="tab" aria-selected="false">Email</button></div>
      <label for="login-input">Phone number</label>
      <div class="px-phone-field"><span>+1</span><input id="login-input" inputmode="tel" autocomplete="tel" placeholder="(555) 000-0000" /></div>
      <button class="px-login-primary" type="button" data-phone-action="Secure sign-in code sent">Continue securely</button>
      <p class="px-login-help">We’ll text you a one-time code. Standard message rates may apply.</p>
      <div class="px-login-divider"><span>New here?</span></div>
      <button class="px-login-secondary" type="button" data-phone-action="Membership sign-up opened">Create a free membership</button>
    </section>
    <p class="px-login-legal">By continuing, you agree to the membership terms and privacy policy.</p>
  </div>
</div>
`,ve=`<!-- Rich, opinionated member experiences. Merchants include or exclude them;
     content and colour inherit the single global brand system. -->
<div class="app-page px-member-experience" data-page="gifts">
  <header class="px-phone-page-head">
    <button class="px-phone-back" type="button" onclick="showPhonePage('rewards')" aria-label="Back to Rewards">‹</button>
    <div><strong>My Gifts</strong><span>Rewards ready to enjoy</span></div>
    <button class="icon-btn px-profile-icon" type="button" onclick="openAccountPage()" aria-label="Open profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0114 0"/></svg></button>
  </header>
  <div class="px-member-scroll">
    <section class="px-gift-hero">
      <span class="px-sample-label">Sample member</span>
      <strong>3 gifts are waiting</strong>
      <p>Use a gift in store or add it to your next order.</p>
    </section>
    <div class="px-filter-row" role="group" aria-label="Gift status">
      <button class="active" type="button">Available</button><button type="button">Used</button><button type="button">Expired</button>
    </div>
    <section class="px-gift-list" aria-label="Available gifts">
      <article class="px-gift-pass">
        <div class="px-gift-art coffee"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 8h12v7a5 5 0 01-5 5H10a5 5 0 01-5-5z"/><path d="M17 10h1a3 3 0 010 6h-1M8 4v2M12 4v2"/></svg></div>
        <div class="px-gift-copy"><span class="px-gift-kind">Birthday gift</span><strong>Any handcrafted drink</strong><small>Expires in 12 days</small></div>
        <button type="button" data-phone-action="Gift ready to redeem">Use gift</button>
      </article>
      <article class="px-gift-pass">
        <div class="px-gift-art pastry"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 18c1-7 5-11 8-11s7 4 8 11z"/><path d="M7 14h10M9 10l2 2 2-2 2 2"/></svg></div>
        <div class="px-gift-copy"><span class="px-gift-kind">Loyalty reward</span><strong>Pastry on us</strong><small>Valid for 30 days</small></div>
        <button type="button" data-phone-action="Gift added to the next order">Add</button>
      </article>
      <article class="px-gift-pass">
        <div class="px-gift-art friend"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 20a6 6 0 0112 0M14 20a5 5 0 018-1"/></svg></div>
        <div class="px-gift-copy"><span class="px-gift-kind">Friend bonus</span><strong>$10 order credit</strong><small>No minimum spend</small></div>
        <button type="button" data-phone-action="Credit applied">Apply</button>
      </article>
    </section>
  </div>
</div>

<div class="app-page px-member-experience" data-page="point-shop">
  <header class="px-phone-page-head">
    <button class="px-phone-back" type="button" onclick="showPhonePage('rewards')" aria-label="Back to Rewards">‹</button>
    <div><strong>Points Shop</strong><span>Turn points into something good</span></div>
    <button class="icon-btn px-profile-icon" type="button" onclick="openAccountPage()" aria-label="Open profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0114 0"/></svg></button>
  </header>
  <div class="px-member-scroll">
    <section class="px-points-wallet">
      <span class="px-sample-label">Sample member</span>
      <div><span>Available balance</span><strong>1,240</strong><small>points</small></div>
      <div class="px-points-progress"><span style="width:82%"></span></div>
      <p>260 points until your next premium reward.</p>
    </section>
    <div class="px-section-head"><strong>Popular rewards</strong><button type="button">How points work</button></div>
    <section class="px-shop-grid">
      <article class="px-shop-card"><div class="px-shop-art drink"></div><span>450 pts</span><strong>Any regular drink</strong><button type="button" data-phone-action="Drink reward selected">Choose</button></article>
      <article class="px-shop-card"><div class="px-shop-art lunch"></div><span>800 pts</span><strong>Lunch upgrade</strong><button type="button" data-phone-action="Lunch reward selected">Choose</button></article>
      <article class="px-shop-card"><div class="px-shop-art bonus"></div><span>1,000 pts</span><strong>$15 order credit</strong><button type="button" data-phone-action="Order credit selected">Choose</button></article>
      <article class="px-shop-card locked"><div class="px-shop-art event"></div><span>1,500 pts</span><strong>Tasting event</strong><button type="button" disabled>260 to go</button></article>
    </section>
  </div>
</div>

<div class="app-page px-member-experience" data-page="referral">
  <header class="px-phone-page-head">
    <button class="px-phone-back" type="button" onclick="showPhonePage('more')" aria-label="Back to More">‹</button>
    <div><strong>Refer a Friend</strong><span>Share something worth returning to</span></div>
    <button class="icon-btn px-profile-icon" type="button" onclick="openAccountPage()" aria-label="Open profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0114 0"/></svg></button>
  </header>
  <div class="px-member-scroll">
    <section class="px-referral-hero">
      <span class="px-sample-label">Sample offer</span>
      <div class="px-referral-people" aria-hidden="true"><span>Y</span><i></i><span>F</span></div>
      <strong>Give $10. Get $10.</strong>
      <p>Your friend gets credit on their first visit. You get yours after they join and purchase.</p>
      <div class="px-referral-code"><span>Your invite code</span><strong id="px-referral-code">FRIEND10</strong><button type="button" data-copy-referral>Copy</button></div>
      <button class="px-referral-share" type="button" data-phone-action="Share options opened">Share invite</button>
    </section>
    <section class="px-how-it-works">
      <strong>How it works</strong>
      <ol><li><span>1</span><div><b>Send your link</b><small>Share it anywhere you already chat.</small></div></li><li><span>2</span><div><b>Your friend joins</b><small>Their $10 credit appears automatically.</small></div></li><li><span>3</span><div><b>You both get rewarded</b><small>Your credit arrives after their first purchase.</small></div></li></ol>
    </section>
    <div class="px-referral-stats"><span><strong>4</strong><small>Friends joined</small></span><span><strong>$40</strong><small>Credit earned</small></span></div>
  </div>
</div>

<div class="app-page px-member-experience" data-page="orders">
  <header class="px-phone-page-head">
    <button class="px-phone-back" type="button" onclick="showPhonePage('more')" aria-label="Back to More">‹</button>
    <div><strong>My Orders</strong><span>Track, reorder, and get help</span></div>
    <button class="icon-btn px-profile-icon" type="button" onclick="openAccountPage()" aria-label="Open profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0114 0"/></svg></button>
  </header>
  <div class="px-member-scroll">
    <span class="px-sample-label px-orders-sample">Sample member</span>
    <section class="px-active-order">
      <div class="px-order-state"><span></span><strong>Ready for pickup</strong><small>Downtown · Order #1048</small></div>
      <div class="px-order-progress"><span class="done"></span><span class="done"></span><span class="done"></span></div>
      <p>1 × Creamy Pesto Rigatoni<br/>1 × Sparkling water</p>
      <div><strong>$22.50</strong><button type="button" data-phone-action="Pickup details opened">View details</button></div>
    </section>
    <div class="px-section-head"><strong>Previous orders</strong><button type="button">Filter</button></div>
    <section class="px-order-history">
      <article><div class="px-order-thumb pasta"></div><div><strong>Downtown</strong><span>Aug 21 · 3 items</span><small>Rigatoni, salad, sparkling water</small></div><button type="button" data-phone-action="Order added to basket">Reorder</button></article>
      <article><div class="px-order-thumb bowl"></div><div><strong>Riverside</strong><span>Aug 12 · 2 items</span><small>Green bowl, cold brew</small></div><button type="button" data-phone-action="Order added to basket">Reorder</button></article>
      <article><div class="px-order-thumb coffee"></div><div><strong>Downtown</strong><span>Jul 29 · 2 items</span><small>Latte, almond croissant</small></div><button type="button" data-phone-action="Order added to basket">Reorder</button></article>
    </section>
  </div>
</div>
`,ye=`<!-- ============ MENU PAGE (rendered by prototype/menuSource.js) ============ -->
          <div class="app-page pm" data-page="menu" data-menu-mode="none">
            <div id="pm-render"></div>
          </div>
`,be=`        <!-- ============ MODALS ============ -->

        <!-- QR Modal -->
        <div class="phone-modal" data-modal="qr">
          <div class="modal-sheet" style="text-align:center;">
            <button class="modal-close" onclick="closeModal()">✕</button>
            <div class="qr-title">Identify yourself with this code</div>
            <div class="qr-box"><div class="qr-pattern"></div></div>
            <div class="qr-id">7133</div>
            <button class="qr-ok-btn" onclick="closeModal()">OK</button>
          </div>
        </div>
`,xe=`          <!-- ============ MORE PAGE ============ -->
          <div class="app-page" data-page="more">
            <div class="app-top-header">
              <div class="brand-text">
                <div class="name">MORE</div>
                <div class="sub">Everything else</div>
              </div>
              <button class="icon-btn px-profile-icon" onclick="openAccountPage()" aria-label="Open profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0114 0"/></svg></button>
            </div>

            <div class="more-grid">
              <button class="more-tile hidden-slot" onclick="goToPage('home')">
                <div class="t-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10l9-7 9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg></div>
                <div>
                  <div class="t-name">Home</div>
                  <div class="t-sub">Go to the main page</div>
                </div>
              </button>

              <button class="more-tile hidden-slot" onclick="openAccountPage()">
                <div class="t-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0116 0v1"/></svg></div>
                <div>
                  <div class="t-name">My Account</div>
                  <div class="t-sub">Profile, settings, and more</div>
                </div>
              </button>

              <button class="more-tile hidden-slot" onclick="showPhonePage('orders')">
                <div class="t-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/></svg></div>
                <div>
                  <div class="t-name">My Orders</div>
                  <div class="t-sub">Track and reorder your favorites</div>
                </div>
              </button>

              <button class="more-tile hidden-slot" onclick="goToPage('rewards')">
                <div class="t-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8c-1.4-3.6-6-3.4-6-.9 0 2 3 1.4 6 .9zM12 8c1.4-3.6 6-3.4 6-.9 0 2-3 1.4-6 .9z"/><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M4 12h16v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7zM12 8v12"/></svg></div>
                <div>
                  <div class="t-name">Loyalty Rewards</div>
                  <div class="t-sub">View all your points</div>
                </div>
              </button>

              <button class="more-tile hidden-slot" onclick="goToPage('menu')">
                <div class="t-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M4 9h16M9 4v16"/></svg></div>
                <div>
                  <div class="t-name">Our Menu</div>
                  <div class="t-sub">Explore our seasonal blends</div>
                </div>
              </button>

              <button class="more-tile hidden-slot" onclick="goToPage('locations')">
                <div class="t-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                <div>
                  <div class="t-name">Find a Cafe</div>
                  <div class="t-sub">4 locations Across Dubai</div>
                </div>
              </button>

              <button class="more-tile hidden-slot" onclick="showPhonePage('referral')">
                <div class="t-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.3 10.7l7.4-4.4M8.3 13.3l7.4 4.4"/></svg></div>
                <div>
                  <div class="t-name">Refer a Friend</div>
                  <div class="t-sub">Gift a latte, get a latte</div>
                </div>
              </button>

              <button class="more-tile hidden-slot">
                <div class="t-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6c-1.5-1.3-4-2-7-2v14c3 0 5.5.7 7 2 1.5-1.3 4-2 7-2V4c-3 0-5.5.7-7 2z"/><path d="M12 6v14"/></svg></div>
                <div>
                  <div class="t-name">About Us</div>
                  <div class="t-sub">Our story, mission, and values</div>
                </div>
              </button>

              <button class="more-tile hidden-slot">
                <div class="t-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 01-8.5 8.5 8.3 8.3 0 01-3.9-.9L3 21l1.9-5.6A8.4 8.4 0 013 11.5 8.5 8.5 0 0111.5 3 8.5 8.5 0 0121 11.5z"/></svg></div>
                <div>
                  <div class="t-name">Contact Us</div>
                  <div class="t-sub">Help, feedback, or just to chat</div>
                </div>
              </button>
            </div>
          </div>
`,Se=`          <!-- ============ QR CODE PAGE (Template 3 only) ============ -->
          <div class="app-page" data-page="qr">
            <div class="app-top-header">
              <div class="brand-text">
                <div class="name">MEMBER CODE</div>
                <div class="sub">Show at checkout to earn points</div>
              </div>
              <button class="icon-btn px-profile-icon" onclick="openAccountPage()" aria-label="Open profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0114 0"/></svg></button>
            </div>

            <div style="padding: 30px 10px; text-align: center;">
              <div class="qr-box" style="width:220px; height:220px; margin: 0 auto 20px;">
                <div class="qr-pattern"></div>
              </div>
              <div class="qr-id">7133</div>
              <div style="font-size:11px; color:var(--p-text-muted); line-height:1.5; max-width:240px; margin: 0 auto;">
                Present this code to staff or scan-in via the tablet at the counter.
              </div>
            </div>
          </div>
`,Ce=`        <!-- Menu Reels half-sheet modal -->
        <div class="phone-modal reels-modal" data-modal="reels">
          <div class="reels-modal-sheet">
            <button class="reels-modal-close" onclick="closeReelsModal()" title="Close reels" aria-label="Close reels">✕</button>
            <div class="reels-modal-stack" id="reels-stack"></div>
            <div class="reels-modal-hint">Swipe up or down to switch · swipe down to close</div>
          </div>
        </div>
`,we=[he,O,`          <!-- ============ REWARDS PAGE ============ -->
          <div class="app-page" data-page="rewards">
            <div class="app-top-header">
              <div style="display:flex; align-items:center; gap:10px;">
                <button class="icon-btn" style="width:32px; height:32px;" onclick="goToPage('home')">‹</button>
                <div class="brand-text">
                  <div class="name" id="rewards-brand">VELVET BISTRO</div>
                  <div class="sub">Your rewards</div>
                </div>
              </div>
              <button class="icon-btn px-profile-icon" onclick="openAccountPage()" aria-label="Open profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0114 0"/></svg></button>
            </div>

            <div class="p-section-hd"><span class="spark">✦</span> Rewards</div>

            <!-- One stage for reward cards and merchant-added widgets alike.
                 layoutRewardsStage() wraps runs of reward cards in .rewards-progs. -->
            <div class="rewards-stage" id="rewards-stage">
              <div class="prog-card hidden-slot" data-widget="rewards-gifts" data-slot-name="rewards-gifts" data-rw-tile="gifts" role="button" tabindex="0" onclick="showPhonePage('gifts')">
                <div class="rw-img" style="display:none;"></div>
                <div class="kicker">My Gifts</div>
                <div class="prog-title">Active Rewards ready to be redeemed</div>
                <div class="prog-sub">3 rewards available · Tap to view</div>
                <button class="rw-btn" style="display:none;"></button>
              </div>

              <!-- Points Shop -->
              <div class="prog-card hidden-slot" data-widget="rewards-points" data-slot-name="rewards-points" data-rw-tile="points" role="button" tabindex="0" onclick="showPhonePage('point-shop')">
                <div class="rw-img" style="display:none;"></div>
                <div class="kicker">My Points Shop</div>
                <div class="prog-title">1 pt per AED spent</div>
                <div class="prog-sub">Trade points for gifts, discounts, and exclusive perks</div>
                <button class="rw-btn" style="display:none;"></button>
              </div>

              <!-- Punch Card -->
              <div class="punch-card hidden-slot" data-widget="rewards-punch" data-slot-name="rewards-punch" data-rw-tile="punch">
                <div class="rw-img" style="display:none;"></div>
                <div class="prog-title">Coffee Punch Card</div>
                <div class="punches">
                  <span class="punch filled"></span><span class="punch filled"></span><span class="punch filled"></span><span class="punch filled"></span><span class="punch filled"></span>
                  <span class="punch filled"></span><span class="punch filled"></span><span class="punch"></span><span class="punch"></span><span class="punch"></span>
                </div>
                <div class="prog-sub">7 of 10 · Free coffee after 10 stamps</div>
                <button class="rw-btn" style="display:none;"></button>
              </div>
            </div>
          </div>
`,ge,ye,xe,Se,me,_e,ve].join(`
`),Te=be+`
`+Ce,Ee=D.indexOf(`<div class="bottom-nav"`),De=D.slice(D.indexOf(`>`,Ee)+1,D.lastIndexOf(`</div>`));function Oe(){return(0,C.jsxs)(`div`,{className:`preview-area`,id:`preview-area`,"data-comment-anchor":`phone-preview`,children:[(0,C.jsx)(`div`,{className:`device-stage`,id:`device-stage`,children:(0,C.jsx)(`div`,{className:`device-frame`,id:`device-frame`,children:(0,C.jsxs)(`div`,{className:`device-screen`,children:[(0,C.jsxs)(`div`,{className:`status-bar`,children:[(0,C.jsx)(`span`,{id:`clock`,children:`9:41`}),(0,C.jsxs)(`div`,{className:`icons`,children:[(0,C.jsx)(`span`,{children:`􀙇`}),(0,C.jsx)(`span`,{children:`􀋉`}),(0,C.jsx)(`span`,{className:`battery`,children:(0,C.jsx)(`span`,{className:`fill`})})]})]}),(0,C.jsx)(w,{as:`div`,className:`app-shell`,id:`app-shell`,"data-comment-anchor":`phone-screen`,html:we}),(0,C.jsx)(`div`,{dangerouslySetInnerHTML:{__html:Te}}),(0,C.jsx)(w,{as:`div`,className:`bottom-nav`,id:`bottom-nav`,"data-comment-anchor":`phone-bottom-navigation`,html:De})]})})}),(0,C.jsx)(`div`,{className:`gf-publish-preview`,id:`gf-publish-preview`,"data-comment-anchor":`publish-preview`})]})}var ke=`<div class="gf-welcome-overlay" id="gf-welcome" data-comment-anchor="welcome-modal">
  <div class="gf-welcome" role="dialog" aria-modal="true" aria-label="Welcome">
    <div class="gf-welcome-logo">✦</div>
    <h1>Build an app your customers want to return to</h1>
    <p>We use what you already have to create a proven first draft, then guide the decisions that need your attention.</p>
    <div class="gf-welcome-list">
      <div class="gf-welcome-item"><span class="n">1</span> Tell us about your business</div>
      <div class="gf-welcome-item"><span class="n">2</span> Set up online ordering</div>
      <div class="gf-welcome-item"><span class="n">3</span> Add your brand and review each screen</div>
      <div class="gf-welcome-item"><span class="n">4</span> Publish content when everything is ready</div>
    </div>
    <a class="gf-help-link" href="https://www.como.com/help" target="_blank" rel="noreferrer">Read the App Builder guide</a>
    <div class="gf-welcome-actions">
      <button class="gf-btn ghost" id="gf-welcome-start" type="button" data-pendo-guide-id="app-builder-orientation">Take tour</button>
      <button class="gf-btn primary" id="gf-welcome-skip" type="button">Start building</button>
    </div>
  </div>
</div>
`;function Ae(){return(0,C.jsx)(w,{as:`div`,style:{display:`contents`},html:ke})}var je=`  <!-- ================= LEFT SIDEBAR (page navigation) ================= -->
  <aside class="side-nav" id="side-nav">
    <div class="side-brand">
      <div class="side-brand-logo">✦</div>
      <div class="side-brand-name">Como Studio</div>
    </div>
    <button class="side-toggle-btn" id="side-toggle-btn" title="Toggle sidebar" type="button">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"/></svg>
    </button>

    <div class="side-kicker">Set up</div>
    <div class="side-items side-steps">
      <button class="side-item side-step" data-step="business" data-setup-page="business" type="button">
        <span class="step-dot"><span class="n">1</span><svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
        <span class="side-lbl">Business details</span>
        <span class="side-tooltip">Business details</span>
      </button>
      <button class="side-item side-step" data-step="branding" data-setup-page="branding" id="side-branding-btn" type="button">
        <span class="step-dot"><span class="n">2</span><svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
        <span class="side-lbl">Branding</span>
        <span class="side-tooltip">Branding</span>
      </button>
      <button class="side-item side-step" data-step="online-ordering" data-setup-page="online-ordering" type="button">
        <span class="step-dot"><span class="n">3</span><svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
        <span class="side-lbl">Online ordering</span>
        <span class="side-tooltip">Online ordering</span>
      </button>
    </div>

    <div class="side-divider"></div>
    <div class="side-kicker">Screens</div>
    <div class="side-items side-steps">
      <button class="side-item side-step active" data-step="home" data-nav-page="home" type="button">
        <span class="step-dot"><span class="n">4</span><svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
        <span class="side-lbl">Home</span>
        <span class="side-tooltip">Home</span>
      </button>
      <button class="side-item side-step" data-step="rewards" data-nav-page="rewards" type="button">
        <span class="step-dot"><span class="n">5</span><svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
        <span class="side-lbl">Rewards</span>
        <span class="side-tooltip">Rewards</span>
      </button>
      <button class="side-item side-step" data-step="locations" data-nav-page="locations" type="button">
        <span class="step-dot"><span class="n">6</span><svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
        <span class="side-lbl">Locations</span>
        <span class="side-tooltip">Locations</span>
      </button>
      <button class="side-item side-step" data-step="menu" data-nav-page="menu" id="side-menu-slot" type="button">
        <span class="step-dot"><span class="n">7</span><svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
        <span class="side-lbl">Menu</span>
        <span class="side-tooltip">Menu</span>
      </button>
      <button class="side-item side-step" data-step="more" data-nav-page="more" type="button">
        <span class="step-dot"><span class="n">8</span><svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
        <span class="side-lbl">More</span>
        <span class="side-tooltip">More</span>
      </button>
    </div>

    <div class="side-divider"></div>
    <div class="side-kicker">Publish</div>
    <div class="side-items side-steps">
      <button class="side-item side-step" data-step="publish" data-setup-page="publish" type="button">
        <span class="step-dot"><span class="n">9</span><svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
        <span class="side-lbl">Review &amp; publish</span>
        <span class="side-tooltip">Review &amp; publish</span>
      </button>
    </div>

    <div class="side-spacer" id="side-expand-zone" title="Click to expand"></div>

    <div class="side-foot">
      <button class="side-item" id="side-settings-btn" type="button">
        <span class="side-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.33 1.87l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.7 1.7 0 00-1.87-.33 1.7 1.7 0 00-1 1.55V21a2 2 0 11-4 0v-.09a1.7 1.7 0 00-1.11-1.55 1.7 1.7 0 00-1.87.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.7 1.7 0 004.6 15a1.7 1.7 0 00-1.55-1H3a2 2 0 110-4h.09A1.7 1.7 0 004.6 8.9a1.7 1.7 0 00-.33-1.87l-.06-.06a2 2 0 112.83-2.83l.06.06a1.7 1.7 0 001.87.33H9a1.7 1.7 0 001-1.55V3a2 2 0 114 0v.09a1.7 1.7 0 001 1.55 1.7 1.7 0 001.87-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.7 1.7 0 00-.33 1.87V9a1.7 1.7 0 001.55 1H21a2 2 0 110 4h-.09a1.7 1.7 0 00-1.55 1z"/></svg></span>
        <span class="side-lbl">Settings</span>
        <svg class="side-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 15l-6-6-6 6"/></svg>
        <span class="side-tooltip">Settings</span>
      </button>

      <div class="account-menu" id="account-menu">
        <div class="am-user">
          <div class="am-avatar" id="am-avatar">B</div>
          <div class="am-user-text">
            <div class="am-name" id="am-name">Brava Kitchen</div>
            <div class="am-mail">owner@bravakitchen.com</div>
          </div>
        </div>
        <div class="am-sep"></div>
        <button class="am-item active" type="button" data-am="settings">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.33 1.87l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.7 1.7 0 00-1.87-.33 1.7 1.7 0 00-1 1.55V21a2 2 0 11-4 0v-.09a1.7 1.7 0 00-1.11-1.55 1.7 1.7 0 00-1.87.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.7 1.7 0 004.6 15a1.7 1.7 0 00-1.55-1H3a2 2 0 110-4h.09A1.7 1.7 0 004.6 8.9a1.7 1.7 0 00-.33-1.87l-.06-.06a2 2 0 112.83-2.83l.06.06a1.7 1.7 0 001.87.33H9a1.7 1.7 0 001-1.55V3a2 2 0 114 0v.09a1.7 1.7 0 001 1.55 1.7 1.7 0 001.87-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.7 1.7 0 00-.33 1.87V9a1.7 1.7 0 001.55 1H21a2 2 0 110 4h-.09a1.7 1.7 0 00-1.55 1z"/></svg>
          <span>Settings</span>
          <span class="am-right">&#8984;,</span>
        </button>
        <button class="am-item" type="button" data-am="billing">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19"/></svg>
          <span>Account &amp; billing</span>
        </button>
        <button class="am-item" type="button" data-am="team">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20v-1.5a4 4 0 00-4-4H6a4 4 0 00-4 4V20"/><circle cx="9" cy="7" r="3.2"/><path d="M22 20v-1.5a4 4 0 00-3-3.87"/><path d="M16 3.6a4 4 0 010 6.8"/></svg>
          <span>Team members</span>
        </button>
        <div class="am-sep"></div>
        <button class="am-item" type="button" data-am="language">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 010 18 15 15 0 010-18z"/></svg>
          <span>Language</span>
          <span class="am-right"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg></span>
        </button>
        <button class="am-item" type="button" data-am="help">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/><path d="M14.4 9.6L18 6M9.6 14.4L6 18M14.4 14.4L18 18M9.6 9.6L6 6"/></svg>
          <span>Help center</span>
        </button>
        <button class="am-item" type="button" data-am="tour" id="px-retake-tour">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16v12H4z"/><path d="M8 10h8M8 14h5"/></svg>
          <span>Take App Builder tour</span>
        </button>
        <button class="am-item" type="button" data-am="whats-new">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M18.5 16.5l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z"/></svg>
          <span>What&#8217;s new</span>
          <span class="am-badge">3</span>
        </button>
        <div class="am-sep"></div>
        <button class="am-item danger" type="button" data-am="logout">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>
          <span>Log out</span>
        </button>
      </div>
    </div>
  </aside>
`,Me=je.indexOf(`<aside`),Ne=je.slice(je.indexOf(`>`,Me)+1,je.lastIndexOf(`</aside>`));function Pe(){return(0,C.jsx)(w,{as:`aside`,className:`side-nav`,id:`side-nav`,"data-comment-anchor":`screen-navigation`,html:Ne})}var Fe=`<aside class="sm-rail" id="sm-rail">
  <div class="sm-rail-title">Settings</div>

  <div class="sm-search">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
    <input type="text" id="sm-search-input" placeholder="Search settings" autocomplete="off">
  </div>

  <div class="sm-rail-empty">No settings match that search.</div>

  <div class="sm-group">
    <div class="sm-group-label">Workspace</div>
    <button class="sm-nav active" type="button" data-sm-nav="general">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/></svg>
      <span>General</span>
    </button>
    <button class="sm-nav" type="button" data-sm-nav="business-profile">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l1.5-5h15L21 9"/><path d="M4 9v11h16V9"/><path d="M3 9a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0"/></svg>
      <span>Business profile</span>
    </button>
    <button class="sm-nav" type="button" data-sm-nav="team">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20v-1.5a4 4 0 00-4-4H6a4 4 0 00-4 4V20"/><circle cx="9" cy="7" r="3.2"/><path d="M22 20v-1.5a4 4 0 00-3-3.87"/><path d="M16 3.6a4 4 0 010 6.8"/></svg>
      <span>Team &amp; access</span>
    </button>
    <button class="sm-nav" type="button" data-sm-nav="billing">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19"/></svg>
      <span>Billing &amp; plan</span>
    </button>
  </div>

  <div class="sm-group">
    <div class="sm-group-label">App</div>
    <button class="sm-nav" type="button" data-sm-nav="app-details">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M11 18.5h2"/></svg>
      <span>App details</span>
    </button>
    <button class="sm-nav" type="button" data-sm-nav="branding">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 110-18 8 8 0 018 8c0 2.2-1.8 3.5-3.8 3.5h-1.4a1.6 1.6 0 00-1.1 2.7c.4.4.6.9.6 1.4 0 1.3-1.1 2.4-2.3 2.4z"/><circle cx="8" cy="10.5" r="1.05" fill="currentColor" stroke="none"/><circle cx="12" cy="8" r="1.05" fill="currentColor" stroke="none"/><circle cx="16" cy="10.5" r="1.05" fill="currentColor" stroke="none"/></svg>
      <span>Branding &amp; icons</span>
    </button>
    <button class="sm-nav" type="button" data-sm-nav="loyalty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12v9H4v-9M2 7.5h20V12H2zM12 21V7.5"/><path d="M12 7.5H7.8a2.4 2.4 0 010-4.8C11 2.7 12 7.5 12 7.5zM12 7.5h4.2a2.4 2.4 0 000-4.8C13 2.7 12 7.5 12 7.5z"/></svg>
      <span>Loyalty program</span>
    </button>
    <button class="sm-nav" type="button" data-sm-nav="notifications">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8.5a6 6 0 00-12 0c0 6-2.5 7.5-2.5 7.5h17S18 14.5 18 8.5z"/><path d="M13.7 20a2 2 0 01-3.4 0"/></svg>
      <span>Notifications</span>
    </button>
    <button class="sm-nav" type="button" data-sm-nav="online-ordering">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2.5L3.5 6.5V20a1.5 1.5 0 001.5 1.5h14a1.5 1.5 0 001.5-1.5V6.5L18 2.5z"/><path d="M3.5 6.5h17"/><path d="M16 10.5a4 4 0 01-8 0"/></svg>
      <span>Online ordering</span>
    </button>
  </div>

  <div class="sm-group">
    <div class="sm-group-label">Publishing</div>
    <button class="sm-nav" type="button" data-sm-nav="app-submission">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M7 8l5-5 5 5"/><path d="M5 13v6a2 2 0 002 2h10a2 2 0 002-2v-6"/></svg>
      <span>App submission</span>
      <span class="sm-nav-badge" data-submission-rail-status>4 to do</span>
    </button>
    <button class="sm-nav" type="button" data-sm-nav="integrations">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v5M15 2v5"/><path d="M6 7h12v4a6 6 0 01-6 6 6 6 0 01-6-6z"/><path d="M12 17v5"/></svg>
      <span>Integrations</span>
    </button>
  </div>
</aside>
`,Ie=[`<div class="sm-pane active" data-sm-pane="general"
     data-sm-title="General"
     data-sm-sub="Basic details that identify your app across the builder and the app stores."
     data-sm-primary="Save changes">

  <div class="sm-section">
    <div class="sm-section-label">App identity</div>

    <div class="sm-field">
      <label class="sm-label" for="sm-app-name">App name</label>
      <input class="sm-input" id="sm-app-name" type="text" value="Velvet Bistro Rewards">
    </div>

    <div class="sm-field">
      <div class="sm-label">App tagline
        <button class="sm-info" type="button" data-tip="The short line customers see under your app name in the App Store and Google Play. Keep it under 30 characters.">i</button>
      </div>
      <input class="sm-input" type="text" placeholder="Earn points on every visit">
      <div class="sm-hint">Shown beneath your app name in the stores — keep it under 30 characters.</div>
    </div>

    <div class="sm-field">
      <div class="sm-label">Support email
        <button class="sm-info" type="button" data-tip="Where members are sent when they tap “Contact us” inside the app. Also shown on your store listing.">i</button>
      </div>
      <input class="sm-input" type="email" value="hello@velvetbistro.com">
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Regional &amp; loyalty</div>
    <div class="sm-row2">
      <div class="sm-field">
        <label class="sm-label" for="sm-lang">Default language</label>
        <select class="sm-select" id="sm-lang">
          <option>English (US)</option>
          <option>English (UK)</option>
          <option>Español</option>
          <option>Français</option>
          <option>Deutsch</option>
        </select>
      </div>
      <div class="sm-field">
        <label class="sm-label" for="sm-tz">Time zone</label>
        <select class="sm-select" id="sm-tz">
          <option>GMT−05:00 · New York</option>
          <option>GMT−08:00 · Los Angeles</option>
          <option>GMT+00:00 · London</option>
          <option>GMT+02:00 · Tel Aviv</option>
        </select>
      </div>
    </div>
    <div class="sm-field">
      <div class="sm-label">Points name
        <button class="sm-info" type="button" data-tip="What one loyalty point is called everywhere in the member app — “Stars”, “Beans”, “Points”.">i</button>
      </div>
      <input class="sm-input" type="text" value="Stars" data-sm-points-name>
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Visibility</div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Show “Powered by Como” badge</div>
        <div class="sm-toggle-desc">Displays a small credit in your app footer. Removing it requires the Growth plan.</div>
      </div>
      <span class="toggle on"></span>
    </div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Maintenance mode</div>
        <div class="sm-toggle-desc">Temporarily hide app content and show customers a friendly “we’ll be right back” message.</div>
      </div>
      <span class="toggle"></span>
    </div>
  </div>
</div>
`,`<div class="sm-pane" data-sm-pane="business-profile"
     data-sm-title="Business profile"
     data-sm-sub="The real-world details behind the app — used on your store listing, receipts and the Locations screen."
     data-sm-primary="Save changes">

  <div class="sm-section">
    <div class="sm-section-label">Legal entity</div>
    <div class="sm-field">
      <label class="sm-label" for="sm-legal-name">Registered business name</label>
      <input class="sm-input" id="sm-legal-name" type="text" value="Velvet Bistro Hospitality Ltd.">
      <div class="sm-hint">Must match the name on your App Store and Google Play developer account.</div>
    </div>
    <div class="sm-row2">
      <div class="sm-field">
        <label class="sm-label" for="sm-biz-type">Business type</label>
        <select class="sm-select" id="sm-biz-type">
          <option>Restaurant · Full service</option>
          <option>Restaurant · Quick service</option>
          <option>Café &amp; bakery</option>
          <option>Bar &amp; nightlife</option>
          <option>Retail</option>
        </select>
      </div>
      <div class="sm-field">
        <label class="sm-label" for="sm-biz-tax">Tax / VAT ID</label>
        <input class="sm-input" id="sm-biz-tax" type="text" value="GB 421 8830 55">
      </div>
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Contact</div>
    <div class="sm-row2">
      <div class="sm-field">
        <label class="sm-label" for="sm-biz-phone">Public phone</label>
        <input class="sm-input" id="sm-biz-phone" type="tel" value="+1 (212) 555-0148">
      </div>
      <div class="sm-field">
        <label class="sm-label" for="sm-biz-site">Website</label>
        <input class="sm-input" id="sm-biz-site" type="url" value="https://velvetbistro.com">
      </div>
    </div>
    <div class="sm-field">
      <label class="sm-label" for="sm-biz-addr">Head office address</label>
      <input class="sm-input" id="sm-biz-addr" type="text" value="12 Market St, New York, NY 10002">
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">In the app</div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Show business address on the More screen</div>
        <div class="sm-toggle-desc">Members can tap it to open directions in their maps app.</div>
      </div>
      <span class="toggle on"></span>
    </div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Show phone number</div>
        <div class="sm-toggle-desc">Adds a “Call us” row next to your support links.</div>
      </div>
      <span class="toggle on"></span>
    </div>
  </div>
</div>

<div class="sm-pane" data-sm-pane="team"
     data-sm-title="Team &amp; access"
     data-sm-sub="Who can open this workspace and what they’re allowed to change."
     data-sm-primary="Save changes">

  <div class="sm-section">
    <div class="sm-list-head">
      <div class="sm-section-label" style="margin:0">4 people · 1 pending invite</div>
      <button class="sm-list-action" type="button">Invite teammate</button>
    </div>
    <div class="sm-rows">
      <div class="sm-rows-row">
        <div class="sm-avatar-sq">GC</div>
        <div class="sm-rows-text">
          <div class="sm-rows-name">Gal Cohen <span class="sm-status ok">You</span></div>
          <div class="sm-rows-sub">owner@bravakitchen.com</div>
        </div>
        <select class="sm-select"><option>Owner</option></select>
      </div>
      <div class="sm-rows-row">
        <div class="sm-avatar-sq">RK</div>
        <div class="sm-rows-text">
          <div class="sm-rows-name">Roy Koren</div>
          <div class="sm-rows-sub">roy@velvetbistro.com</div>
        </div>
        <select class="sm-select"><option>Admin</option><option>Editor</option><option>Viewer</option></select>
      </div>
      <div class="sm-rows-row">
        <div class="sm-avatar-sq">BH</div>
        <div class="sm-rows-text">
          <div class="sm-rows-name">Bhav Halai</div>
          <div class="sm-rows-sub">design@velvetbistro.com</div>
        </div>
        <select class="sm-select"><option>Editor</option><option>Admin</option><option>Viewer</option></select>
      </div>
      <div class="sm-rows-row">
        <div class="sm-avatar-sq" style="background:#ececf2;color:#85859a">?</div>
        <div class="sm-rows-text">
          <div class="sm-rows-name">nina@velvetbistro.com <span class="sm-status warn">Invited</span></div>
          <div class="sm-rows-sub">Invite sent 2 days ago · expires in 5 days</div>
        </div>
        <button class="sm-banner-btn" type="button">Resend</button>
      </div>
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Access rules</div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Require two-factor authentication</div>
        <div class="sm-toggle-desc">Everyone with Admin or Owner access must set up 2FA before their next sign-in.</div>
      </div>
      <span class="toggle on"></span>
    </div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Editors can prepare store submissions</div>
        <div class="sm-toggle-desc">When off, only Admins and the Owner can approve a build and send it to Apple or Google for review.</div>
      </div>
      <span class="toggle"></span>
    </div>
  </div>
</div>

<div class="sm-pane" data-sm-pane="billing"
     data-sm-title="Billing &amp; plan"
     data-sm-sub="Your subscription, usage this cycle and where invoices are sent."
     data-sm-primary="Save changes">

  <div class="sm-section">
    <div class="sm-plan">
      <div class="sm-plan-top">
        <div style="flex:1;min-width:0">
          <div class="sm-plan-name">Growth</div>
          <div class="sm-plan-price">$249 / month · renews 1 September 2026</div>
        </div>
        <button class="sm-banner-btn" type="button">Change plan</button>
      </div>
      <div class="sm-meter">
        <div class="sm-meter-head"><span class="k">Active members</span><span class="v">7,420 of 10,000</span></div>
        <div class="sm-meter-bar"><div class="sm-meter-fill" style="width:74%"></div></div>
      </div>
      <div class="sm-meter">
        <div class="sm-meter-head"><span class="k">Push notifications this month</span><span class="v">18,300 of 50,000</span></div>
        <div class="sm-meter-bar"><div class="sm-meter-fill" style="width:37%"></div></div>
      </div>
      <div class="sm-meter">
        <div class="sm-meter-head"><span class="k">Marketing emails</span><span class="v">2,500 of 2,500</span></div>
        <div class="sm-meter-bar"><div class="sm-meter-fill" style="width:100%"></div></div>
      </div>
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Payment method</div>
    <div class="sm-rows">
      <div class="sm-rows-row">
        <div class="sm-logo" style="background:#1d1d28">VI</div>
        <div class="sm-rows-text">
          <div class="sm-rows-name">Visa ending 4482</div>
          <div class="sm-rows-sub">Expires 09 / 2028 · billed to accounts@velvetbistro.com</div>
        </div>
        <button class="sm-banner-btn" type="button">Update</button>
      </div>
    </div>
    <div class="sm-field" style="margin-top:16px">
      <label class="sm-label" for="sm-invoice-mail">Send invoices to</label>
      <input class="sm-input" id="sm-invoice-mail" type="email" value="accounts@velvetbistro.com">
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Recent invoices</div>
    <div class="sm-rows">
      <div class="sm-rows-row">
        <div class="sm-rows-text"><div class="sm-rows-name">August 2026</div><div class="sm-rows-sub">$249.00 · paid 1 Aug 2026</div></div>
        <span class="sm-status ok">Paid</span>
      </div>
      <div class="sm-rows-row">
        <div class="sm-rows-text"><div class="sm-rows-name">July 2026</div><div class="sm-rows-sub">$249.00 · paid 1 Jul 2026</div></div>
        <span class="sm-status ok">Paid</span>
      </div>
      <div class="sm-rows-row">
        <div class="sm-rows-text"><div class="sm-rows-name">June 2026</div><div class="sm-rows-sub">$249.00 · paid 1 Jun 2026</div></div>
        <span class="sm-status ok">Paid</span>
      </div>
    </div>
  </div>
</div>
`,`<div class="sm-pane" data-sm-pane="app-details"
     data-sm-title="App details"
     data-sm-sub="What shoppers read on your App Store and Google Play listing before they download."
     data-sm-primary="Save changes">

  <div class="sm-section">
    <div class="sm-section-label">Store listing</div>
    <div class="sm-field">
      <label class="sm-label" for="sm-store-sub">Subtitle</label>
      <input class="sm-input" id="sm-store-sub" type="text" value="Rewards, menu &amp; ordering">
    </div>
    <div class="sm-field">
      <div class="sm-label">Description
        <button class="sm-info" type="button" data-tip="The full listing text. Apple allows 4,000 characters; the first three lines are what most people actually read.">i</button>
      </div>
      <textarea class="sm-textarea" id="sm-store-desc">Collect Stars every time you eat with us, unlock rewards you actually want, and order ahead so your table is ready when you are.</textarea>
      <div class="sm-hint">137 / 4,000 characters used.</div>
    </div>
    <div class="sm-row2">
      <div class="sm-field">
        <label class="sm-label" for="sm-store-cat">Primary category</label>
        <select class="sm-select" id="sm-store-cat">
          <option>Food &amp; Drink</option>
          <option>Lifestyle</option>
          <option>Shopping</option>
        </select>
      </div>
      <div class="sm-field">
        <label class="sm-label" for="sm-store-age">Age rating</label>
        <select class="sm-select" id="sm-store-age">
          <option>4+</option>
          <option>12+</option>
          <option>17+ (alcohol references)</option>
        </select>
      </div>
    </div>
    <div class="sm-field">
      <label class="sm-label" for="sm-store-keywords">Keywords</label>
      <input class="sm-input" id="sm-store-keywords" type="text" value="loyalty, rewards, restaurant, order ahead, bistro">
      <div class="sm-hint">Comma separated. Only used by the App Store.</div>
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Identifiers</div>
    <div class="sm-row2">
      <div class="sm-field">
        <label class="sm-label" for="sm-bundle-ios">iOS bundle ID</label>
        <input class="sm-input" id="sm-bundle-ios" type="text" value="com.como.velvetbistro">
      </div>
      <div class="sm-field">
        <label class="sm-label" for="sm-bundle-android">Android package</label>
        <input class="sm-input" id="sm-bundle-android" type="text" value="com.como.velvetbistro">
      </div>
    </div>
    <div class="sm-note">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>
      <span>Identifiers are locked once your first build reaches the stores. Contact support if you need them changed.</span>
    </div>
  </div>
</div>

<div class="sm-pane" data-sm-pane="branding"
     data-sm-title="Branding &amp; icons"
     data-sm-sub="The launch assets that live outside the app — icon, splash screen and store artwork."
     data-sm-primary="Save changes">

  <div class="sm-section">
    <div class="sm-section-label">App icon</div>
    <div class="sm-upload">
      <div class="sm-upload-thumb" style="background:linear-gradient(135deg,#6d28d9,#a855f7)">VB</div>
      <div class="sm-upload-text">
        <div class="sm-upload-name">velvet-bistro-icon.png</div>
        <div class="sm-upload-meta">1024 × 1024 · PNG · no transparency · 248 KB</div>
      </div>
      <button class="sm-banner-btn" type="button">Replace</button>
    </div>
    <div class="sm-hint">Apple and Google both round the corners for you — upload a full square.</div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Splash screen</div>
    <div class="sm-upload">
      <div class="sm-upload-thumb" style="background:linear-gradient(135deg,#2a2438,#0f0d17)">✦</div>
      <div class="sm-upload-text">
        <div class="sm-upload-name">velvet-splash.png</div>
        <div class="sm-upload-meta">Centred logo on a solid background · shown for ~1.2s at launch</div>
      </div>
      <button class="sm-banner-btn" type="button">Replace</button>
    </div>
    <div class="sm-field" style="margin-top:16px">
      <div class="sm-label">Splash background</div>
      <div class="sm-swatches">
        <span class="sm-swatch on" style="background:#0f0d17"></span>
        <span class="sm-swatch" style="background:#6d28d9"></span>
        <span class="sm-swatch" style="background:#ffffff"></span>
        <span class="sm-swatch" style="background:#d4a648"></span>
        <span class="sm-swatch" style="background:#18875a"></span>
      </div>
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Behaviour</div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Match store artwork to in-app branding</div>
        <div class="sm-toggle-desc">Regenerate screenshots automatically whenever you change colours or fonts on the Branding screen.</div>
      </div>
      <span class="toggle on"></span>
    </div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Dark mode icon variant</div>
        <div class="sm-toggle-desc">Ship a second icon that iOS swaps in when the phone is in dark mode.</div>
      </div>
      <span class="toggle"></span>
    </div>
  </div>
</div>

<div class="sm-pane" data-sm-pane="loyalty"
     data-sm-title="Loyalty program"
     data-sm-sub="The earn-and-burn rules behind every Stars balance shown in the app."
     data-sm-primary="Save changes">

  <div class="sm-section">
    <div class="sm-section-label">Earning</div>
    <div class="sm-row2">
      <div class="sm-field">
        <label class="sm-label" for="sm-earn-rate">Stars per $1 spent</label>
        <input class="sm-input" id="sm-earn-rate" type="text" value="10">
      </div>
      <div class="sm-field">
        <div class="sm-label">Welcome bonus
          <button class="sm-info" type="button" data-tip="Granted once, the first time a member completes registration in the app.">i</button>
        </div>
        <input class="sm-input" type="text" value="200 Stars">
      </div>
    </div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Earn on online orders</div>
        <div class="sm-toggle-desc">Members collect Stars on orders placed through your connected ordering provider.</div>
      </div>
      <span class="toggle on"></span>
    </div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Earn on gift card top-ups</div>
        <div class="sm-toggle-desc">Off by default so members can’t double-earn on the same money.</div>
      </div>
      <span class="toggle"></span>
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Redemption</div>
    <div class="sm-row2">
      <div class="sm-field">
        <label class="sm-label" for="sm-redeem-rate">Stars needed for $1 off</label>
        <input class="sm-input" id="sm-redeem-rate" type="text" value="100">
      </div>
      <div class="sm-field">
        <label class="sm-label" for="sm-expiry">Stars expire after</label>
        <select class="sm-select" id="sm-expiry">
          <option>12 months of inactivity</option>
          <option>6 months of inactivity</option>
          <option>24 months of inactivity</option>
          <option>Never</option>
        </select>
      </div>
    </div>
    <div class="sm-note info">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>
      <span>At these rates a $50 dinner earns 500 Stars, worth <b>$5 off</b> a future visit — a 10% effective return.</span>
    </div>
  </div>
</div>

<div class="sm-pane" data-sm-pane="notifications"
     data-sm-title="Notifications"
     data-sm-sub="Which push messages your app is allowed to send, and when it stays quiet."
     data-sm-primary="Save changes">

  <div class="sm-section">
    <div class="sm-section-label">Transactional</div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Order status updates</div>
        <div class="sm-toggle-desc">Accepted, being prepared, ready for pickup, out for delivery.</div>
      </div>
      <span class="toggle on"></span>
    </div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Stars earned</div>
        <div class="sm-toggle-desc">A short confirmation after every qualifying purchase.</div>
      </div>
      <span class="toggle on"></span>
    </div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Reward unlocked</div>
        <div class="sm-toggle-desc">Fires the moment a member crosses a redemption threshold.</div>
      </div>
      <span class="toggle on"></span>
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Marketing</div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Campaign pushes</div>
        <div class="sm-toggle-desc">Offers and announcements you schedule from the Campaigns hub.</div>
      </div>
      <span class="toggle on"></span>
    </div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Win-back reminders</div>
        <div class="sm-toggle-desc">Automatically nudge members who haven’t visited in 30 days.</div>
      </div>
      <span class="toggle"></span>
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Delivery rules</div>
    <div class="sm-row2">
      <div class="sm-field">
        <label class="sm-label" for="sm-quiet-from">Quiet hours from</label>
        <select class="sm-select" id="sm-quiet-from"><option>22:00</option><option>21:00</option><option>23:00</option></select>
      </div>
      <div class="sm-field">
        <label class="sm-label" for="sm-quiet-to">Quiet hours until</label>
        <select class="sm-select" id="sm-quiet-to"><option>08:00</option><option>07:00</option><option>09:00</option></select>
      </div>
    </div>
    <div class="sm-field">
      <div class="sm-label">Sender name
        <button class="sm-info" type="button" data-tip="Appears in bold at the top of every push notification on the member’s lock screen.">i</button>
      </div>
      <input class="sm-input" type="text" value="Velvet Bistro">
    </div>
  </div>
</div>
`,`<div class="sm-pane" data-sm-pane="online-ordering" id="sm-oo-pane"
     data-sm-title="Online ordering"
     data-sm-sub="Confirm the ordering service we found for this business."
     data-sm-primary="Continue">

  <!-- ---------- Step 1 · pick a provider ---------- -->
  <div class="sm-oo-step active" data-oo-step="chooser"
       data-sm-title="Online ordering"
       data-sm-sub="Confirm the ordering service we found, then choose which locations will accept orders."
       data-sm-primary="Use this provider">

    <div class="sm-steps" data-oo-stepper="1"></div>

    <div class="sm-field">
      <div class="sm-label">Ordering service
        <button class="sm-info" type="button" data-tip="We use this service for live menus, availability, checkout, and order status.">i</button>
      </div>
      <div class="sm-combo" id="sm-provider-combo">
        <button class="sm-combo-btn" type="button" id="sm-provider-btn">
          <span class="ph" data-provider-placeholder>Select a provider</span>
          <span class="sm-logo" data-provider-logo hidden></span>
          <span class="sel-text" data-provider-selected hidden>
            <span class="sel-name"></span>
            <span class="sel-desc"></span>
          </span>
          <svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="sm-combo-list" id="sm-provider-list"><!-- rendered by settingsModal.js --></div>
      </div>
      <div class="sm-hint">Not sure this is correct? Your ordering specialist can confirm the setup with you.</div>
    </div>
    <div class="sm-note" style="margin-top:22px">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 15a4 4 0 01-4 4H8l-4 3v-7a4 4 0 01-2-3.5V7a4 4 0 014-4h12a4 4 0 014 4v4.5a4 4 0 01-2 3.5z"/></svg>
      <span><strong>Need help or don’t have ordering yet?</strong><br/>We’ll coordinate entitlement and setup with your sales or CSM contact.</span>
    </div>
    <button class="sm-link-out" type="button" id="sm-oo-contact" style="margin-top:12px">Request an ordering specialist</button>
  </div>

  <!-- ---------- Step 2 · credentials ---------- -->
  <div class="sm-oo-step" data-oo-step="keys"
       data-sm-title="Online ordering"
       data-sm-sub="Connect an ordering provider so members can order from your menu inside the app. We stay headless — your provider owns the menu and prices."
       data-sm-primary="Connect &amp; sync">

    <div class="sm-steps" data-oo-stepper="1"></div>

    <div class="sm-banner" style="margin-bottom:22px">
      <span class="sm-logo" data-keys-logo>D</span>
      <div class="sm-banner-text">
        <div class="sm-banner-title" data-keys-name>Deliverect — Headless Commerce</div>
        <div class="sm-banner-sub" data-keys-desc>Commerce API · menu, basket, checkout, POS sync</div>
      </div>
      <button class="sm-banner-action" type="button" id="sm-provider-change">Change</button>
    </div>

    <div class="sm-field">
      <div class="sm-label">Account ID
        <button class="sm-info" type="button" data-tip="Found in your provider dashboard under Settings → Account. It identifies which brand Como pulls menus from.">i</button>
      </div>
      <input class="sm-input" id="sm-oo-account" type="text" value="668e4aa170efd23c474b2ad1">
    </div>

    <div class="sm-field">
      <div class="sm-label">Production API key
        <button class="sm-info" type="button" data-tip="Use a Production key, not a sandbox one — sandbox menus won’t appear for real members.">i</button>
      </div>
      <div class="sm-input-wrap">
        <input class="sm-input" id="sm-oo-key" type="password" value="sk_live_9f2k7Qx3Lp8v">
        <button class="sm-reveal" type="button" id="sm-oo-key-reveal" title="Show key">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
      <div class="sm-hint">Create a Production key in Deliverect → Settings → API. We store it encrypted and never expose it in your app.</div>
    </div>

    <div class="sm-note" style="margin-top:22px">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5l8 3v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10v-6z"/></svg>
      <span>One signed contract covers sandbox + production. Keys are encrypted at rest and used only to sync your menu and orders.</span>
    </div>
  </div>

  <!-- ---------- Step 3 · syncing ---------- -->
  <div class="sm-oo-step" data-oo-step="syncing"
       data-sm-title="Online ordering"
       data-sm-sub="Connect an ordering provider so members can order from your menu inside the app. We stay headless — your provider owns the menu and prices."
       data-sm-primary="Connecting…"
       data-sm-primary-busy="true">

    <div class="sm-steps" data-oo-stepper="1"></div>

    <div class="sm-sync">
      <div class="sm-spinner"></div>
      <div class="sm-sync-title">Syncing with <span data-sync-provider>Deliverect</span></div>
      <p class="sm-sync-sub">Pulling your menu, modifiers and locations. This usually takes a few seconds.</p>
      <div class="sm-sync-list" id="sm-sync-list">
        <div class="sm-sync-row" data-sync-row="0">
          <span class="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
          <span class="name">Menus &amp; categories</span>
          <span class="state">Waiting</span>
        </div>
        <div class="sm-sync-row" data-sync-row="1">
          <span class="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
          <span class="name">Items, photos &amp; prices</span>
          <span class="state">Waiting</span>
        </div>
        <div class="sm-sync-row" data-sync-row="2">
          <span class="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
          <span class="name">Modifier groups &amp; allergens</span>
          <span class="state">Waiting</span>
        </div>
        <div class="sm-sync-row" data-sync-row="3">
          <span class="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
          <span class="name">Locations, hours &amp; prep times</span>
          <span class="state">Waiting</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ---------- Step 4 · approve locations ---------- -->
  <div class="sm-oo-step" data-oo-step="locations"
       data-sm-title="Approve locations"
       data-sm-sub="These branches and hours were pulled from your provider. Tick the ones that accept online orders and adjust hours if needed."
       data-sm-primary="Approve &amp; continue"
       data-sm-back="chooser">

    <div class="sm-steps" data-oo-stepper="2"></div>

    <div class="sm-list-head">
      <div class="sm-list-count"><span id="sm-loc-total">3</span> locations synced · <span id="sm-loc-on">2</span> accepting online orders</div>
      <button class="sm-list-action" type="button" id="sm-loc-select-all">Select all</button>
    </div>

    <div class="sm-loc on expanded" data-loc="downtown">
      <div class="sm-loc-row">
        <span class="sm-tick on" data-loc-tick><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
        <div class="sm-loc-text">
          <div class="sm-loc-name">Brava Kitchen — Downtown <span class="sm-tag open">Open</span></div>
          <div class="sm-loc-addr">12 Market St · Pickup 15–20 min</div>
        </div>
        <button class="sm-hours-btn" type="button" data-loc-hours>Hide hours</button>
      </div>
      <div class="sm-loc-hours">
        <div class="sm-hours-label">Operating hours</div>
        <div class="sm-hours-row"><span class="d">Monday – Friday</span><span class="t">11:00 – 22:00</span></div>
        <div class="sm-hours-row"><span class="d">Saturday – Sunday</span><span class="t">10:00 – 23:00</span></div>
        <div class="sm-order-types">
          <span class="lbl">Order types</span>
          <button class="sm-chip on" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>Pickup</button>
          <button class="sm-chip on" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>Delivery</button>
          <button class="sm-chip" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>Curbside</button>
        </div>
      </div>
    </div>

    <div class="sm-loc on" data-loc="riverside">
      <div class="sm-loc-row">
        <span class="sm-tick on" data-loc-tick><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
        <div class="sm-loc-text">
          <div class="sm-loc-name">Brava Kitchen — Riverside <span class="sm-tag open">Open</span></div>
          <div class="sm-loc-addr">88 Quay Rd · Pickup 20–30 min</div>
        </div>
        <button class="sm-hours-btn" type="button" data-loc-hours>Edit hours</button>
      </div>
      <div class="sm-loc-hours">
        <div class="sm-hours-label">Operating hours</div>
        <div class="sm-hours-row"><span class="d">Monday – Thursday</span><span class="t">12:00 – 21:30</span></div>
        <div class="sm-hours-row"><span class="d">Friday – Sunday</span><span class="t">12:00 – 23:30</span></div>
        <div class="sm-order-types">
          <span class="lbl">Order types</span>
          <button class="sm-chip on" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>Pickup</button>
          <button class="sm-chip" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>Delivery</button>
          <button class="sm-chip" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>Curbside</button>
        </div>
      </div>
    </div>

    <div class="sm-loc closed" data-loc="northpark">
      <div class="sm-loc-row">
        <span class="sm-tick" data-loc-tick><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
        <div class="sm-loc-text">
          <div class="sm-loc-name">Brava Kitchen — North Park <span class="sm-tag shut">Closed</span></div>
          <div class="sm-loc-addr">5 Grove Ave · Closed · opens 17:00</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ---------- Step 5 · connected administration ---------- -->
  <div class="sm-oo-step" data-oo-step="admin"
       data-sm-title="Online ordering"
       data-sm-sub="Connected. Choose the member-facing ordering experience while your ordering service keeps business data current."
       data-sm-primary="Save changes"
       data-sm-back="locations">

    <div class="sm-banner" style="margin-bottom:24px">
      <div class="sm-check-round"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div>
      <div class="sm-banner-text">
        <div class="sm-banner-title"><span data-admin-provider>Deliverect</span> connected <span style="font-weight:600;color:var(--muted);font-size:12.5px">account 668e…ad1</span></div>
        <div class="sm-banner-sub">Last synced <span id="sm-last-sync">just now</span> · <span id="sm-live-locs">2</span> locations live</div>
      </div>
      <button class="sm-banner-btn" type="button" id="sm-resync">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 01-9 9 9 9 0 01-7.6-4.2"/><path d="M3 12a9 9 0 019-9 9 9 0 017.6 4.2"/><path d="M20 3v5h-5M4 21v-5h5"/></svg>
        Re-sync
      </button>
    </div>

    <div class="sm-section">
      <div class="sm-section-label">Menu &amp; sync</div>
      <div class="sm-field">
        <div class="sm-label">Menu sync frequency
          <button class="sm-info" type="button" data-tip="How often we re-read your provider’s menu. More frequent syncs keep 86’d items accurate.">i</button>
        </div>
        <select class="sm-select" id="sm-sync-freq">
          <option>Every 15 minutes</option>
          <option>Every hour</option>
          <option>Every 6 hours</option>
          <option>Manually only</option>
        </select>
      </div>
      <button class="sm-link-out" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>
        Edit menu &amp; prices in <span data-admin-provider>Deliverect</span>
      </button>
    </div>

    <div class="sm-section">
      <div class="sm-section-label">In-app experience</div>
      <div class="sm-toggle-row">
        <div class="sm-toggle-text">
          <div class="sm-toggle-name">Allergen &amp; dietary badges</div>
          <div class="sm-toggle-desc">Show allergen and dietary tags on menu items, pulled from your provider’s item data.</div>
        </div>
        <span class="toggle on" data-oo-bind="allergens"></span>
      </div>
      <div class="sm-toggle-row">
        <div class="sm-toggle-text">
          <div class="sm-toggle-name">Live order tracking</div>
          <div class="sm-toggle-desc">Members see a status timeline and get push updates from the kitchen.</div>
        </div>
        <span class="toggle on" data-oo-bind="tracking"></span>
      </div>
      <div class="sm-toggle-row">
        <div class="sm-toggle-text">
          <div class="sm-toggle-name">Tipping at checkout</div>
          <div class="sm-toggle-desc">Show preset tip chips in the basket.</div>
        </div>
        <span class="toggle on" data-oo-bind="tipping"></span>
      </div>
    </div>

    <div class="sm-section">
      <div class="sm-section-label">Support</div>
      <div class="sm-field">
        <div class="sm-label">“Help with my order” routes to
          <button class="sm-info" type="button" data-tip="Where the support button inside an order goes. We’re Tier 1 for ordering issues, so pick a channel you monitor.">i</button>
        </div>
        <select class="sm-select" id="sm-oo-support">
          <option>In-app chat</option>
          <option>Email support</option>
          <option>Phone the store</option>
          <option>Provider support</option>
        </select>
      </div>
      <div class="sm-note" style="margin-top:18px">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10.5" width="16" height="10.5" rx="2"/><path d="M8 10.5V7a4 4 0 018 0v3.5"/></svg>
        <span>Menu, prices, item options and the checkout flow are managed by your provider to keep ordering reliable. Learn what you can customise.</span>
      </div>
      <button class="sm-help" type="button" id="sm-oo-disconnect" style="color:var(--danger,#c7355a);margin-top:20px">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.4 5.6a9 9 0 11-12.8 0"/><path d="M12 2v10"/></svg>
        Disconnect <span data-admin-provider>Deliverect</span>
      </button>
    </div>
  </div>
</div>
`,`<div class="sm-pane sm-submission-pane" data-sm-pane="app-submission" data-pendo-guide-id="app-submission-checklist"
     data-sm-title="App submission"
     data-sm-sub="Prepare your native app for Apple and Google. Your content draft stays separate and can be published from the editor."
     data-sm-primary="Continue setup">

  <nav class="sm-submission-nav" aria-label="App submission setup">
    <button class="sm-submission-nav-item active" type="button" data-submission-nav="overview" aria-current="step"><span>1</span>Overview</button>
    <button class="sm-submission-nav-item" type="button" data-submission-nav="accounts"><span>2</span>Developer accounts</button>
    <button class="sm-submission-nav-item" type="button" data-submission-nav="listing"><span>3</span>Store listing</button>
    <button class="sm-submission-nav-item" type="button" data-submission-nav="privacy"><span>4</span>Privacy &amp; compliance</button>
    <button class="sm-submission-nav-item" type="button" data-submission-nav="testing"><span>5</span>Testing</button>
    <button class="sm-submission-nav-item" type="button" data-submission-nav="submit"><span>6</span>Submit &amp; release</button>
    <button class="sm-submission-nav-item" type="button" data-submission-nav="history"><span>7</span>Submission history</button>
  </nav>

  <section class="sm-submission-step active" data-submission-step="overview"
           data-sm-title="App submission"
           data-sm-sub="See what each store needs before we can prepare a native submission. Apple and Google move independently."
           data-sm-primary="Start with developer accounts">
    <div class="sm-submission-intro">
      <div>
        <div class="sm-eyebrow">Native launch checklist</div>
        <h3>Move from app draft to store-ready</h3>
        <p>A store-ready draft can take under an hour when your business information and merchant-owned developer accounts are ready. Apple and Google control their own review timelines.</p>
      </div>
      <span class="sm-readiness-ring" data-submission-progress aria-label="1 of 5 setup gates ready"><strong>20%</strong><small>ready</small></span>
    </div>

    <div class="sm-store-grid" aria-label="Store readiness">
      <article class="sm-store-card" data-store-card="apple">
        <div class="sm-store-card-head"><span class="sm-store-mark apple" aria-hidden="true">A</span><div><h4>Apple App Store</h4><p>Developer access connected</p></div><span class="sm-status warn" data-store-status="apple">3 to do</span></div>
        <ul class="sm-gate-list">
          <li class="done" data-gate-row="accounts"><span aria-hidden="true">✓</span>Developer account &amp; delegated access</li>
          <li data-gate-row="listing"><span aria-hidden="true">2</span>Store listing &amp; assets</li>
          <li data-gate-row="privacy"><span aria-hidden="true">3</span>Privacy &amp; compliance</li>
          <li data-gate-row="testing"><span aria-hidden="true">4</span>Approve the native test build</li>
        </ul>
        <button class="sm-inline-action" type="button" data-submission-goto="accounts">Review Apple setup</button>
      </article>
      <article class="sm-store-card" data-store-card="google">
        <div class="sm-store-card-head"><span class="sm-store-mark google" aria-hidden="true">G</span><div><h4>Google Play</h4><p>Delegated access still needed</p></div><span class="sm-status warn" data-store-status="google">4 to do</span></div>
        <ul class="sm-gate-list">
          <li data-gate-row="accounts"><span aria-hidden="true">1</span>Developer account &amp; delegated access</li>
          <li data-gate-row="listing"><span aria-hidden="true">2</span>Store listing &amp; assets</li>
          <li data-gate-row="privacy"><span aria-hidden="true">3</span>Privacy &amp; compliance</li>
          <li data-gate-row="testing"><span aria-hidden="true">4</span>Approve the native test build</li>
        </ul>
        <button class="sm-inline-action" type="button" data-submission-goto="accounts">Connect Google Play</button>
      </article>
    </div>

    <div class="sm-support-strip">
      <div><strong>Want a second pair of eyes?</strong><span>A CSM can accelerate the checklist, while you retain ownership and final approval.</span></div>
      <button class="sm-banner-btn" type="button" data-submission-review>Request a review</button>
    </div>
  </section>

  <section class="sm-submission-step" data-submission-step="accounts"
           data-sm-title="Developer accounts"
           data-sm-sub="Use developer organization accounts owned by your business, then delegate only the access we need. Never share a password."
           data-sm-primary="Continue to store listing" data-sm-back="overview">
    <div class="sm-section">
      <div class="sm-section-label">Account ownership</div>
      <div class="sm-note info"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 10v6M12 7h.01"/></svg><div><b>Your business stays in control.</b> Invite us with the minimum role needed for build and release work. You can remove access from Apple or Google at any time.</div></div>
    </div>
    <div class="sm-account-card ready" data-account-card="apple">
      <span class="sm-store-mark apple" aria-hidden="true">A</span>
      <div class="sm-account-copy"><h3>Apple Developer organization</h3><p>Velvet Bistro Hospitality Ltd. · Team 9K4T2XQ8LP</p><small>Release access verified · no password stored</small></div>
      <span class="sm-status ok" data-account-status="apple">Ready</span>
    </div>
    <div class="sm-account-card" data-account-card="google">
      <span class="sm-store-mark google" aria-hidden="true">G</span>
      <div class="sm-account-copy"><h3>Google Play organization</h3><p>Grant us release access from Play Console.</p><small>A guided checklist opens; you sign in directly with Google.</small></div>
      <button class="sm-banner-btn" type="button" data-connect-account="google">Grant access</button>
      <span class="sm-status ok" data-account-status="google" hidden>Ready</span>
    </div>
    <a class="sm-help-link" href="https://www.como.com/help" target="_blank" rel="noreferrer">Open the developer account guide <span aria-hidden="true">↗</span></a>
  </section>

  <section class="sm-submission-step" data-submission-step="listing"
           data-sm-title="Store listing"
           data-sm-sub="Write the public listing once, then preview how it maps to Apple and Google."
           data-sm-primary="Save listing &amp; continue" data-sm-back="accounts">
    <div class="sm-row2">
      <div class="sm-field"><label class="sm-label" for="sm-listing-name">App name</label><input class="sm-input" id="sm-listing-name" type="text" maxlength="30" value="Velvet Bistro"><div class="sm-hint"><span data-count-for="sm-listing-name">13</span>/30 characters</div></div>
      <div class="sm-field"><label class="sm-label" for="sm-listing-subtitle">Subtitle</label><input class="sm-input" id="sm-listing-subtitle" type="text" maxlength="30" placeholder="Loyalty and easy ordering"><div class="sm-hint"><span data-count-for="sm-listing-subtitle">0</span>/30 characters</div></div>
    </div>
    <div class="sm-field"><label class="sm-label" for="sm-listing-description">Store description</label><textarea class="sm-textarea" id="sm-listing-description" maxlength="4000" placeholder="Tell guests what they can do in your app."></textarea><div class="sm-hint">Lead with the guest benefit. Store teams may reject misleading claims.</div></div>
    <div class="sm-field"><label class="sm-label" for="sm-listing-keywords">Keywords</label><input class="sm-input" id="sm-listing-keywords" type="text" placeholder="restaurant, rewards, ordering"><div class="sm-hint">Use relevant words only; avoid competitor names.</div></div>
    <div class="sm-section">
      <div class="sm-section-label">Required visual assets</div>
      <div class="sm-asset-grid">
        <button class="sm-asset-card" type="button" data-listing-asset="icon"><span class="sm-asset-preview icon">VB</span><span><strong>App icon</strong><small>1024 × 1024 PNG</small></span><em data-asset-state="icon">Add</em></button>
        <button class="sm-asset-card" type="button" data-listing-asset="screens"><span class="sm-asset-preview screens">▯ ▯</span><span><strong>Screenshots</strong><small>We can generate a starting set</small></span><em data-asset-state="screens">Generate</em></button>
      </div>
    </div>
    <p class="sm-field-error" data-listing-error role="alert" hidden>Complete the subtitle, description, keywords, app icon, and screenshots to continue.</p>
  </section>

  <section class="sm-submission-step" data-submission-step="privacy"
           data-sm-title="Privacy &amp; compliance"
           data-sm-sub="Confirm what the app collects and provide the public policies each store expects."
           data-sm-primary="Confirm &amp; continue" data-sm-back="listing">
    <div class="sm-field"><label class="sm-label" for="sm-privacy-url">Public privacy policy URL</label><input class="sm-input" id="sm-privacy-url" type="url" placeholder="https://velvetbistro.com/privacy"></div>
    <fieldset class="sm-check-group">
      <legend>Merchant attestation</legend>
      <label class="sm-check-row"><input type="checkbox" data-privacy-check="data"><span><strong>I reviewed the app’s data use</strong><small>Loyalty profile, orders, analytics, and notifications match the disclosure shown to guests.</small></span></label>
      <label class="sm-check-row"><input type="checkbox" data-privacy-check="rights"><span><strong>Guests can request access or deletion</strong><small>Our support process and contact details are current.</small></span></label>
      <label class="sm-check-row"><input type="checkbox" data-privacy-check="content"><span><strong>I have rights to the submitted content</strong><small>Names, logos, photography, and promotional claims are owned or licensed by the business.</small></span></label>
    </fieldset>
    <div class="sm-note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l9 16H3L12 3z"/><path d="M12 9v4M12 16h.01"/></svg><div>Apple and Google may ask follow-up questions. We can help translate your answers into store forms, but your business approves the final declarations.</div></div>
    <p class="sm-field-error" data-privacy-error role="alert" hidden>Add a valid public URL and confirm all three statements.</p>
  </section>

  <section class="sm-submission-step" data-submission-step="testing"
           data-sm-title="Test the native app"
           data-sm-sub="Content preview is useful, but a native test build is the final check for device behavior, permissions, and checkout."
           data-sm-primary="Approve test build" data-sm-back="privacy">
    <div class="sm-test-build">
      <div><span class="sm-status ok">Build available</span><h3>Candidate 3.5.0 (221)</h3><p>Prepared 26 Aug 2026 · iOS and Android test links expire in 27 days</p></div>
      <button class="sm-banner-btn" type="button" data-open-test-links>Open test links</button>
    </div>
    <fieldset class="sm-check-group">
      <legend>Approval checklist</legend>
      <label class="sm-check-row"><input type="checkbox" data-test-check="ios"><span><strong>Checked on an iPhone</strong><small>Sign-in, loyalty, navigation, notifications prompt, and checkout.</small></span></label>
      <label class="sm-check-row"><input type="checkbox" data-test-check="android"><span><strong>Checked on an Android phone</strong><small>Back behavior, permissions, deep links, ordering, and payments.</small></span></label>
      <label class="sm-check-row"><input type="checkbox" data-test-check="approve"><span><strong>I approve this candidate for store preparation</strong><small>Later content changes can still be published separately from the editor.</small></span></label>
    </fieldset>
    <p class="sm-field-error" data-testing-error role="alert" hidden>Complete all native test checks before approval.</p>
  </section>

  <section class="sm-submission-step" data-submission-step="submit"
           data-sm-title="Submit &amp; release"
           data-sm-sub="Choose which stores we should prepare. This prototype creates a review-ready request; it does not contact either store."
           data-sm-primary="Prepare submission summary" data-sm-back="testing">
    <div class="sm-note ok" data-ready-note><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 12l2.5 2.5L16.5 8.5"/></svg><div><b>All setup gates are ready.</b> Review the stores and release choices below before asking us to prepare the submission.</div></div>
    <fieldset class="sm-submit-stores">
      <legend>Stores to prepare</legend>
      <label class="sm-submit-store"><input type="checkbox" data-submit-store="apple" checked><span class="sm-store-mark apple" aria-hidden="true">A</span><span><strong>Apple App Store</strong><small data-submit-status="apple">Ready to prepare</small></span></label>
      <label class="sm-submit-store"><input type="checkbox" data-submit-store="google" checked><span class="sm-store-mark google" aria-hidden="true">G</span><span><strong>Google Play</strong><small data-submit-status="google">Ready to prepare</small></span></label>
    </fieldset>
    <div class="sm-field"><label class="sm-label" for="sm-release-mode">Release after store approval</label><select class="sm-select" id="sm-release-mode"><option>Hold for my approval</option><option>Release automatically</option><option>Stage the rollout</option></select><div class="sm-hint">Store review is external. Apple and Google may approve, reject, or request changes on different dates.</div></div>
    <div class="sm-submit-confirm" data-submission-confirmation hidden role="group" aria-label="Confirm submission preparation">
      <div><strong>Prepare a request for review?</strong><p>No app-store submission happens now. We’ll review the package and ask for your final approval before any external submission.</p></div>
      <div><button class="sm-btn ghost" type="button" data-cancel-submission>Not yet</button><button class="sm-btn primary" type="button" data-confirm-submission>Confirm preparation</button></div>
    </div>
  </section>

  <section class="sm-submission-step" data-submission-step="history"
           data-sm-title="Submission history"
           data-sm-sub="Track Apple and Google separately. Content-only publishes appear in the editor, not here."
           data-sm-primary="Done" data-sm-back="submit">
    <div class="sm-rows" aria-live="polite" data-submission-history>
      <div class="sm-rows-row"><span class="sm-store-mark apple" aria-hidden="true">A</span><div class="sm-rows-text"><div class="sm-rows-name">iOS 3.4.1 (218)</div><div class="sm-rows-sub">Submitted 11 Aug 2026 · Apple review</div></div><span class="sm-status warn">In review</span></div>
      <div class="sm-rows-row"><span class="sm-store-mark google" aria-hidden="true">G</span><div class="sm-rows-text"><div class="sm-rows-name">Android 3.4.0 (214)</div><div class="sm-rows-sub">Released 28 Jul 2026 · production</div></div><span class="sm-status ok">Live</span></div>
    </div>
    <div class="sm-note info"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><div>Store reviews are handled by Apple and Google. Their timelines and decisions are independent; we’ll show requests for changes here.</div></div>
  </section>
</div>

<div class="sm-pane" data-sm-pane="app-store"
     data-sm-title="App Store Connect"
     data-sm-sub="We submit your iOS builds through this connection. Layer 1 changes still ship instantly over the air."
     data-sm-primary="Save changes">

  <div class="sm-section">
    <div class="sm-banner">
      <div class="sm-check-round"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div>
      <div class="sm-banner-text">
        <div class="sm-banner-title">Connected to Apple</div>
        <div class="sm-banner-sub">Velvet Bistro Hospitality Ltd. · API key expires 14 Feb 2027</div>
      </div>
      <button class="sm-banner-action" type="button">Disconnect</button>
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Account</div>
    <div class="sm-row2">
      <div class="sm-field">
        <label class="sm-label" for="sm-asc-team">Team ID</label>
        <input class="sm-input" id="sm-asc-team" type="text" value="9K4T2XQ8LP">
      </div>
      <div class="sm-field">
        <label class="sm-label" for="sm-asc-app">App ID</label>
        <input class="sm-input" id="sm-asc-app" type="text" value="6478112094">
      </div>
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Releases</div>
    <div class="sm-rows">
      <div class="sm-rows-row">
        <div class="sm-rows-text"><div class="sm-rows-name">Version 3.4.1 (218)</div><div class="sm-rows-sub">Submitted 11 Aug 2026 · Apple review</div></div>
        <span class="sm-status warn">In review</span>
      </div>
      <div class="sm-rows-row">
        <div class="sm-rows-text"><div class="sm-rows-name">Version 3.4.0 (214)</div><div class="sm-rows-sub">Released 28 Jul 2026 · 100% rollout</div></div>
        <span class="sm-status ok">Live</span>
      </div>
    </div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Send every build to TestFlight first</div>
        <div class="sm-toggle-desc">Your internal testers get the build before it goes to Apple review.</div>
      </div>
      <span class="toggle on"></span>
    </div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Auto-release once approved</div>
        <div class="sm-toggle-desc">When off, an approved build waits for you to press release.</div>
      </div>
      <span class="toggle"></span>
    </div>
  </div>
</div>

<div class="sm-pane" data-sm-pane="google-play"
    data-sm-title="Google Play"
     data-sm-sub="Where we upload your Android bundles and which track they land on."
     data-sm-primary="Save changes">

  <div class="sm-section">
    <div class="sm-banner" style="border-color:#f0dcb8;background:#fdf8ee">
      <div class="sm-logo" style="background:#b87816">GP</div>
      <div class="sm-banner-text">
        <div class="sm-banner-title">Service account needs renewing</div>
        <div class="sm-banner-sub">The uploaded key expired on 2 Aug 2026 — Android releases are paused until it’s replaced.</div>
      </div>
      <button class="sm-banner-btn" type="button">Upload key</button>
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Account</div>
    <div class="sm-field">
      <label class="sm-label" for="sm-play-pkg">Package name</label>
      <input class="sm-input" id="sm-play-pkg" type="text" value="com.como.velvetbistro">
    </div>
    <div class="sm-field">
      <div class="sm-label">Service account JSON
        <button class="sm-info" type="button" data-tip="Created in Google Cloud → IAM → Service accounts, then granted release access in the Play Console.">i</button>
      </div>
      <div class="sm-upload">
        <div class="sm-upload-thumb" style="background:#ececf2;color:#85859a;font-size:12px">JSON</div>
        <div class="sm-upload-text">
          <div class="sm-upload-name">play-publisher-2025.json</div>
          <div class="sm-upload-meta">Uploaded 14 Feb 2026 · expired 2 Aug 2026</div>
        </div>
        <button class="sm-banner-btn" type="button">Replace</button>
      </div>
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Release track</div>
    <div class="sm-field">
      <label class="sm-label" for="sm-play-track">Publish new builds to</label>
      <select class="sm-select" id="sm-play-track">
        <option>Production</option>
        <option>Open testing</option>
        <option>Closed testing</option>
        <option>Internal testing</option>
      </select>
    </div>
    <div class="sm-toggle-row">
      <div class="sm-toggle-text">
        <div class="sm-toggle-name">Staged rollout</div>
        <div class="sm-toggle-desc">Start at 10% of users and ramp up over five days.</div>
      </div>
      <span class="toggle on"></span>
    </div>
  </div>
</div>

<div class="sm-pane" data-sm-pane="integrations"
     data-sm-title="Integrations"
     data-sm-sub="Everything else your app talks to — POS, messaging and automation."
     data-sm-primary="Save changes">

  <div class="sm-section">
    <div class="sm-section-label">Connected</div>
    <div class="sm-rows">
      <div class="sm-rows-row">
        <div class="sm-logo" style="background:#0fa47f">D</div>
        <div class="sm-rows-text">
          <div class="sm-rows-name">Deliverect</div>
          <div class="sm-rows-sub">Online ordering · menu, basket &amp; checkout sync</div>
        </div>
        <span class="sm-status ok">Connected</span>
        <button class="sm-banner-btn" type="button" data-sm-goto="online-ordering">Manage</button>
      </div>
      <div class="sm-rows-row">
        <div class="sm-logo" style="background:#1d1d28">PB</div>
        <div class="sm-rows-text">
          <div class="sm-rows-name">PAR Brink POS</div>
          <div class="sm-rows-sub">Purchases post to loyalty in real time · 3 stores mapped</div>
        </div>
        <span class="sm-status ok">Connected</span>
        <button class="sm-banner-btn" type="button">Manage</button>
      </div>
      <div class="sm-rows-row">
        <div class="sm-logo" style="background:#f2b134">MC</div>
        <div class="sm-rows-text">
          <div class="sm-rows-name">Mailchimp</div>
          <div class="sm-rows-sub">Audience sync paused — token rejected 6 Aug 2026</div>
        </div>
        <span class="sm-status warn">Action needed</span>
        <button class="sm-banner-btn" type="button">Reconnect</button>
      </div>
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Available</div>
    <div class="sm-rows">
      <div class="sm-rows-row">
        <div class="sm-logo" style="background:#c7355a">TW</div>
        <div class="sm-rows-text">
          <div class="sm-rows-name">Twilio</div>
          <div class="sm-rows-sub">Send SMS alongside push for high-value campaigns</div>
        </div>
        <button class="sm-banner-btn" type="button">Connect</button>
      </div>
      <div class="sm-rows-row">
        <div class="sm-logo" style="background:#4a5568">ZP</div>
        <div class="sm-rows-text">
          <div class="sm-rows-name">Zapier</div>
          <div class="sm-rows-sub">Fire loyalty events into 6,000+ other tools</div>
        </div>
        <button class="sm-banner-btn" type="button">Connect</button>
      </div>
      <div class="sm-rows-row">
        <div class="sm-logo" style="background:#6d28d9">PN</div>
        <div class="sm-rows-text">
          <div class="sm-rows-name">Pendo</div>
          <div class="sm-rows-sub">In-app product analytics and guided tours</div>
        </div>
        <button class="sm-banner-btn" type="button">Connect</button>
      </div>
    </div>
  </div>

  <div class="sm-section">
    <div class="sm-section-label">Developer</div>
    <div class="sm-field">
      <div class="sm-label">Webhook endpoint
        <button class="sm-info" type="button" data-tip="We send every loyalty and order event to this URL as a POST request. Retries for 24 hours on failure.">i</button>
      </div>
      <input class="sm-input" type="url" placeholder="https://api.yourdomain.com/como/events">
    </div>
  </div>
</div>
`].join(`
`);function Le(){return(0,C.jsx)(`div`,{className:`sm-overlay`,id:`settings-modal`,"data-comment-anchor":`settings-modal`,children:(0,C.jsxs)(`div`,{className:`sm-modal`,role:`dialog`,"aria-modal":`true`,"aria-label":`Settings`,children:[(0,C.jsx)(w,{as:`div`,style:{display:`contents`},html:Fe}),(0,C.jsxs)(`section`,{className:`sm-main`,children:[(0,C.jsxs)(`header`,{className:`sm-head`,children:[(0,C.jsx)(`button`,{className:`sm-back`,id:`sm-back`,type:`button`,title:`Back`,children:(0,C.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,C.jsx)(`path`,{d:`M19 12H5M11 18l-6-6 6-6`})})}),(0,C.jsxs)(`div`,{className:`sm-head-text`,children:[(0,C.jsx)(`h2`,{className:`sm-title`,id:`sm-title`,children:`General`}),(0,C.jsx)(`p`,{className:`sm-sub`,id:`sm-sub`})]}),(0,C.jsx)(`button`,{className:`sm-close`,id:`sm-close`,type:`button`,title:`Close settings`,children:(0,C.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,children:(0,C.jsx)(`path`,{d:`M18 6L6 18M6 6l12 12`})})})]}),(0,C.jsx)(w,{as:`div`,className:`sm-body`,id:`sm-body`,"data-comment-anchor":`settings-modal-body`,html:Ie}),(0,C.jsxs)(`footer`,{className:`sm-foot`,children:[(0,C.jsxs)(`button`,{className:`sm-help`,type:`button`,children:[(0,C.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,C.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,C.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3.4`}),(0,C.jsx)(`path`,{d:`M14.4 9.6L18 6M9.6 14.4L6 18M14.4 14.4L18 18M9.6 9.6L6 6`})]}),`Need help? Visit the Help Center`]}),(0,C.jsxs)(`div`,{className:`sm-foot-actions`,children:[(0,C.jsx)(`button`,{className:`sm-btn ghost`,id:`sm-cancel`,type:`button`,children:`Cancel`}),(0,C.jsx)(`button`,{className:`sm-btn primary`,id:`sm-primary`,type:`button`,children:`Save changes`})]})]})]})]})})}var Re=`<!-- ============================================================
     TOP BAR
     ============================================================ -->
<div class="topbar">
  <div class="brand">
    <div class="brand-logo" id="brand-logo">?</div>
    <div>
      <div class="brand-name" id="brand-name">Your Business</div>
      <div class="brand-sub">Como App Builder · P1</div>
    </div>
  </div>

  <div class="top-spacer"></div>

  <button class="theme-toggle-btn" id="theme-toggle-btn" type="button" title="Switch appearance" aria-label="Switch between light and dark mode">
    <svg class="theme-icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
    <svg class="theme-icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
  </button>

  <button class="save-btn disabled" id="save-btn" type="button" aria-live="polite" data-state="saved">Draft saved</button>
</div>
`,ze=Re.indexOf(`<div class="topbar">`),Be=Re.slice(Re.indexOf(`>`,ze)+1,Re.lastIndexOf(`</div>`));function Ve(){return(0,C.jsx)(w,{as:`div`,className:`topbar`,"data-comment-anchor":`top-bar`,html:Be})}var He=`modulepreload`,Ue=function(e){return`/html-commnet/app-builder-p1/`+e},We={},Ge=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Ue(t,n),t=s(t),t in We)return;We[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:He,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function Ke(){return(0,l.useEffect)(()=>{Ge(()=>import(`./prototype-M25U96Hr.js`).then(e=>e.initPrototype()),[]).catch(e=>{console.error(`Could not initialize the App Builder prototype`,e)})},[]),(0,l.useEffect)(()=>{let e=()=>{},t=!1;return Ge(async()=>{let{initComments:e}=await import(`./comments-CcwKpnET.js`);return{initComments:e}},__vite__mapDeps([0,1])).then(({initComments:n})=>{t||(e=n())}),()=>{t=!0,e()}},[]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Ve,{}),(0,C.jsxs)(`div`,{className:`workspace`,"data-comment-anchor":`app-builder-workspace`,children:[(0,C.jsx)(Pe,{}),(0,C.jsx)(E,{}),(0,C.jsx)(pe,{}),(0,C.jsx)(Oe,{})]}),(0,C.jsx)(fe,{}),(0,C.jsx)(Le,{}),(0,C.jsx)(Ae,{})]})}(0,u.createRoot)(document.getElementById(`root`)).render((0,C.jsx)(Ke,{}));export{c as n,i as r,ce as t};