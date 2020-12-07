/*! For license information please see main.e931ca0b.chunk.js.LICENSE.txt */
(this["webpackJsonp@ramonak/react-progress-bar-example"]=this["webpackJsonp@ramonak/react-progress-bar-example"]||[]).push([[0],{258:function(e,t,a){},259:function(e,t,a){},260:function(e,t,a){"use strict";a.r(t);a(86);var n=a(0),r=a.n(n),o=a(84),l=a.n(o),c=a(3),i=e=>{var t=Object(n.useState)(null),a=Object(c.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)(()=>{fetch("https://cors-anywhere.herokuapp.com/http://localhost:3000/api/views/".concat(e)).then(e=>e.json()).then(e=>{o(e.views)})},[e]),{views:r}},s=a(11),m=a(31),u=e=>{var t=Object(n.useState)(e),a=Object(c.a)(t,2),r=a[0],o=a[1],l=Object(n.useRef)(null),i=e=>{l.current&&!l.current.contains(e.target)&&o(!1)};return Object(n.useEffect)(()=>(document.addEventListener("click",i,!0),()=>{document.removeEventListener("click",i,!0)}),[]),{ref:l,isVisible:r,setIsVisible:o}},p=(a(258),({handleChange:e,handleBgChange:t,handleBaseBgChange:a,handleLabelColorChange:o})=>{var l=Object(n.useState)("#6a1b9a"),i=Object(c.a)(l,2),s=i[0],p=i[1],d=Object(n.useState)("#e0e0de"),b=Object(c.a)(d,2),g=b[0],h=b[1],f=Object(n.useState)("#e80909"),y=Object(c.a)(f,2),C=y[0],E=y[1],v=u(!1),O=u(!1),j=u(!1);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"param"},r.a.createElement("label",{htmlFor:"completed"},"completed"),r.a.createElement("input",{name:"completed",id:"completed",type:"text",placeholder:"1-100",onChange:e})),r.a.createElement("div",{className:"param"},r.a.createElement("button",{onClick:()=>v.setIsVisible(!0)},"Choose Bar Color"),v.isVisible&&r.a.createElement("div",{ref:v.ref,style:{position:"absolute",marginTop:"30px"}},r.a.createElement(m.ChromePicker,{name:"barColor",color:s,onChangeComplete:e=>{p(e.hex),t(e.hex)}})),r.a.createElement("input",{value:s,name:"bgcolor",type:"text",onChange:t=>{e(t),p(t.target.value)}})),r.a.createElement("div",{className:"param"},r.a.createElement("label",{htmlFor:"height"},"height"),r.a.createElement("input",{name:"height",id:"height",type:"text",placeholder:"20px",onChange:e})),r.a.createElement("div",{className:"param"},r.a.createElement("label",{htmlFor:"width"},"width"),r.a.createElement("input",{name:"width",id:"width",type:"text",placeholder:"100%",onChange:e})),r.a.createElement("div",{className:"param"},r.a.createElement("label",{htmlFor:"borderRadius"},"border radius"),r.a.createElement("input",{name:"borderRadius",id:"borderRadius",type:"text",placeholder:"50px",onChange:e})),r.a.createElement("div",{className:"param"},r.a.createElement("label",{htmlFor:"labelAlignment"},"label alignment"),r.a.createElement("select",{name:"labelAlignment",defaultValue:"right",id:"labelAlignment",onChange:e},r.a.createElement("option",{value:"left"},"left"),r.a.createElement("option",{value:"center"},"center"),r.a.createElement("option",{value:"right"},"right"),r.a.createElement("option",{value:"outside"},"outside"))),r.a.createElement("div",{className:"param"},r.a.createElement("button",{onClick:()=>j.setIsVisible(!0)},"Choose Label Color"),j.isVisible&&r.a.createElement("div",{ref:j.ref,style:{position:"absolute",marginTop:"30px"}},r.a.createElement(m.ChromePicker,{name:"labelColor",color:C,onChangeComplete:e=>{E(e.hex),o(e.hex)}})),r.a.createElement("input",{value:C,name:"labelColor",type:"text",onChange:t=>{e(t),h(t.target.value)}})),r.a.createElement("div",{className:"param"},r.a.createElement("label",{htmlFor:"labelSize"},"label size"),r.a.createElement("input",{name:"labelSize",id:"labelSize",type:"text",placeholder:"15px",onChange:e})),r.a.createElement("div",{className:"param"},r.a.createElement("button",{onClick:()=>O.setIsVisible(!0)},'Choose "non-completed" Bar Color'),O.isVisible&&r.a.createElement("div",{ref:O.ref,style:{position:"absolute",marginTop:"30px"}},r.a.createElement(m.ChromePicker,{name:"baseBgColor",color:g,onChangeComplete:e=>{h(e.hex),a(e.hex)}})),r.a.createElement("input",{value:g,name:"baseBgColor",type:"text",onChange:t=>{e(t),h(t.target.value)}})),r.a.createElement("div",{className:"param"},r.a.createElement("label",{htmlFor:"margin"},"margin"),r.a.createElement("input",{name:"margin",id:"margin",type:"text",onChange:e})),r.a.createElement("div",{className:"param"},r.a.createElement("label",{htmlFor:"padding"},"padding"),r.a.createElement("input",{name:"padding",id:"padding",type:"text",onChange:e})))});function d(e,t){return e(t={exports:{}},t.exports),t.exports}var b="function"===typeof Symbol&&Symbol.for,g=b?Symbol.for("react.element"):60103,h=b?Symbol.for("react.portal"):60106,f=b?Symbol.for("react.fragment"):60107,y=b?Symbol.for("react.strict_mode"):60108,C=b?Symbol.for("react.profiler"):60114,E=b?Symbol.for("react.provider"):60109,v=b?Symbol.for("react.context"):60110,O=b?Symbol.for("react.async_mode"):60111,j=b?Symbol.for("react.concurrent_mode"):60111,x=b?Symbol.for("react.forward_ref"):60112,S=b?Symbol.for("react.suspense"):60113,w=b?Symbol.for("react.suspense_list"):60120,k=b?Symbol.for("react.memo"):60115,N=b?Symbol.for("react.lazy"):60116,R=b?Symbol.for("react.block"):60121,$=b?Symbol.for("react.fundamental"):60117,P=b?Symbol.for("react.responder"):60118,B=b?Symbol.for("react.scope"):60119;function T(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case g:switch(e=e.type){case O:case j:case f:case C:case y:case S:return e;default:switch(e=e&&e.$$typeof){case v:case x:case N:case k:case E:return e;default:return t}}case h:return t}}}function A(e){return T(e)===j}var F={AsyncMode:O,ConcurrentMode:j,ContextConsumer:v,ContextProvider:E,Element:g,ForwardRef:x,Fragment:f,Lazy:N,Memo:k,Portal:h,Profiler:C,StrictMode:y,Suspense:S,isAsyncMode:function(e){return A(e)||T(e)===O},isConcurrentMode:A,isContextConsumer:function(e){return T(e)===v},isContextProvider:function(e){return T(e)===E},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===g},isForwardRef:function(e){return T(e)===x},isFragment:function(e){return T(e)===f},isLazy:function(e){return T(e)===N},isMemo:function(e){return T(e)===k},isPortal:function(e){return T(e)===h},isProfiler:function(e){return T(e)===C},isStrictMode:function(e){return T(e)===y},isSuspense:function(e){return T(e)===S},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===f||e===j||e===C||e===y||e===S||e===w||"object"===typeof e&&null!==e&&(e.$$typeof===N||e.$$typeof===k||e.$$typeof===E||e.$$typeof===v||e.$$typeof===x||e.$$typeof===$||e.$$typeof===P||e.$$typeof===B||e.$$typeof===R)},typeOf:T},z=(d((function(e,t){0})),d((function(e){e.exports=F})),Object.getOwnPropertySymbols),_=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;function V(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}})()&&Object.assign;var M="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function L(e,t,a,n,r){}L.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function W(){}function q(){}q.resetWarningCache=W;var D=d((function(e){e.exports=function(){function e(e,t,a,n,r,o){if(o!==M){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:q,resetWarningCache:W};return a.PropTypes=a,a}()})),G=e=>{var t,a=e.bgcolor,n=e.completed,o=e.baseBgColor,l=e.height,c=e.width,i=e.margin,s=e.padding,m=e.borderRadius,u=e.labelAlignment,p=e.labelColor,d=e.labelSize,b="left"===(t=u)?"flex-start":"center"===t?"center":"right"===t?"flex-end":void 0,g={height:l,backgroundColor:o,borderRadius:m,padding:s,width:c,margin:i},h={height:l,width:isNaN(n)||n>100?"100%":"".concat(n,"%"),backgroundColor:a,transition:"width 1s ease-in-out",borderRadius:"inherit",display:"flex",alignItems:"center",justifyContent:"outside"!==u&&b},f={padding:"outside"===u?"0 0 0 5px":"5px",color:p,fontWeight:"bold",fontSize:d},y={display:"outside"===u&&"flex",alignItems:"outside"===u&&"center"};return r.a.createElement("div",{style:y},r.a.createElement("div",{style:g},r.a.createElement("div",{style:h},"outside"!==u&&r.a.createElement("span",{style:f},isNaN(n)?"".concat(n):"".concat(n,"%")))),"outside"===u&&r.a.createElement("span",{style:f},isNaN(n)?"".concat(n):"".concat(n,"%")))};G.propTypes={completed:D.oneOfType([D.string,D.number]).isRequired,bgcolor:D.string,baseBgColor:D.string,height:D.string,width:D.string,borderRadius:D.string,margin:D.string,padding:D.string,labelAlignment:D.oneOf(["left","center","right","outside"]),labelColor:D.string,labelSize:D.string},G.defaultProps={bgcolor:"#6a1b9a",height:"20px",width:"100%",borderRadius:"50px",labelAlignment:"right",baseBgColor:"#e0e0de",labelColor:"#fff",labelSize:"15px"};var J=G,U=(a(259),()=>{var e={completed:50,bgcolor:"#6a1b9a",height:"20px",width:"100%",borderRadius:"50px",labelAlignment:"right",baseBgColor:"#e0e0de",labelColor:"#e80909",labelSize:"15px",margin:"",padding:""},t=Object(n.useState)(e),a=Object(c.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)(!1),m=Object(c.a)(i,2),u=m[0],d=m[1],b=Object(n.useState)(""),g=Object(c.a)(b,2),h=g[0],f=g[1],y=Object(n.useState)("Copy"),C=Object(c.a)(y,2),E=C[0],v=C[1],O=Object(n.useRef)(null),j=()=>{l(e),d(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,o),r.a.createElement(p,{handleChange:e=>{l(Object(s.a)(Object(s.a)({},o),{},{[e.target.name]:e.target.value}))},handleBgChange:e=>{l(Object(s.a)(Object(s.a)({},o),{},{bgcolor:e}))},handleBaseBgChange:e=>{l(Object(s.a)(Object(s.a)({},o),{},{baseBgColor:e}))},handleLabelColorChange:e=>{l(Object(s.a)(Object(s.a)({},o),{},{labelColor:e}))},handleReset:j}),r.a.createElement("button",{className:"reset-button",onClick:j},"RESET"),r.a.createElement("button",{className:"code-button",onClick:()=>{v("Copy"),d(!0);var e="<ProgressBar \n    completed={".concat(o.completed,"}\n    ").concat("#6a1b9a"===o.bgcolor?"":'bgcolor="'.concat(o.bgcolor,'"'),"\n    ").concat("20px"===o.height?"":'height="'.concat(o.height,'"'),"\n    ").concat("100%"===o.width?"":'width="'.concat(o.width,'"'),"\n    ").concat("50px"===o.borderRadius?"":'borderRadius="'.concat(o.borderRadius,'"'),"\n    ").concat("right"===o.labelAlignment?"":'labelAlignment="'.concat(o.labelAlignment,'"'),"\n    ").concat("#e0e0de"===o.baseBgColor?"":'baseBgColor="'.concat(o.baseBgColor,'"'),"\n    ").concat("#fff"===o.labelColor?"":'labelColor="'.concat(o.labelColor,'"'),"\n    ").concat("15px"===o.labelSize?"":'labelSize="'.concat(o.labelSize,'"'),"\n    ").concat(""===o.margin?"":'margin="'.concat(o.margin,'"'),"\n    ").concat(""===o.padding?"":'padding="'.concat(o.padding,'"'),"\n    />").replace(/^\s*$(?:\r\n?|\n)/gm,"");f(e)}},"Generate Component Code"),r.a.createElement("div",null,u&&r.a.createElement("div",{className:"code-area"},r.a.createElement("button",{onClick:e=>{O.current.select(),document.execCommand("copy"),e.target.focus(),v("Copied!")}},E),r.a.createElement("textarea",{ref:O,value:h,onChange:e=>f(e.target.value)}))))}),H=()=>{var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)(()=>{setInterval(()=>o(Math.floor(100*Math.random())+1),2e3)},[]),r.a.createElement("div",{className:"App"},r.a.createElement("h3",null,"Randomly generated completed value"),r.a.createElement(J,{completed:a}),r.a.createElement("hr",null),r.a.createElement("h3",null,"Interactive Generator"),r.a.createElement(U,null))},Y=()=>(i((()=>{var e=window.location.pathname;return"/"===e.charAt(0)&&(e=e.substring(1)),e})()),r.a.createElement("div",{className:"App"},r.a.createElement(H,null)));l.a.render(r.a.createElement(Y,null),document.getElementById("root"))},85:function(e,t,a){e.exports=a(260)},86:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.e931ca0b.chunk.js.map