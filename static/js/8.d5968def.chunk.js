(this["webpackJsonppokedex-ts"]=this["webpackJsonppokedex-ts"]||[]).push([[8],{247:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(97),a=n(235),i=n(98);function o(){var e=Object(r.a)(["\n  padding: 0px 16px;\n  height: 56px;\n  border-bottom: 1px solid rgb(225, 231, 236);\n"]);return o=function(){return e},e}var c=Object(i.a)(a.a)(o())},262:function(e,t,n){"use strict";var r=n(45),a=n(0);t.a=function(e){var t=Object(a.useState)(null),n=Object(r.a)(t,2),i=n[0],o=n[1];return{filter:i,onChange:Object(a.useCallback)((function(t){var n=e.getTypeFromValue(t);o(n||null)}),[e])}}},263:function(e,t,n){"use strict";var r=n(85),a=n(86);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),o=(0,r(n(87)).default)(i.createElement("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown");t.default=o},264:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r,a,i=n(244),o=n(67),c=n(99),u=n(47),l=n(243),s=n(21);function f(e){var t;return l.a.mapValue(e).with((t={},Object(u.a)(t,s.c.GEN_1,"Generation I"),Object(u.a)(t,s.c.GEN_2,"Generation II"),Object(u.a)(t,s.c.GEN_3,"Generation III"),Object(u.a)(t,s.c.GEN_4,"Generation IV"),Object(u.a)(t,s.c.GEN_5,"Generation V"),Object(u.a)(t,s.c.GEN_6,"Generation VI"),Object(u.a)(t,s.c.GEN_7,"Generation VII"),Object(u.a)(t,s.c.GEN_8,"Generation VIII"),t))}function d(e){var t;return l.a.mapValue(e).with((t={},Object(u.a)(t,s.c.GEN_1,"Gen I"),Object(u.a)(t,s.c.GEN_2,"Gen II"),Object(u.a)(t,s.c.GEN_3,"Gen III"),Object(u.a)(t,s.c.GEN_4,"Gen IV"),Object(u.a)(t,s.c.GEN_5,"Gen V"),Object(u.a)(t,s.c.GEN_6,"Gen VI"),Object(u.a)(t,s.c.GEN_7,"Gen VII"),Object(u.a)(t,s.c.GEN_8,"Gen VIII"),t))}var b=new Map;Object(l.a)(s.c).forEach((function(e){var t=f(e),n=d(e);b.set(t,e),b.set(n,e)}));var j=(a=r=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,null,[{key:"getName",value:function(){return"Generation"}},{key:"getValueName",value:function(e){return null===e?this.DEFAULT_VALUE:f(e)}},{key:"getShortenedValueName",value:function(e){return null===e?this.SHORTENED_DEFAULT_VALUE:d(e)}},{key:"getValues",value:function(){return[this.DEFAULT_VALUE].concat(Object(i.a)(Object(l.a)(s.c).getValues().map(f)))}},{key:"getTypeFromValue",value:function(e){return b.get(e)}}]),e}(),r.DEFAULT_VALUE="All Generations",r.SHORTENED_DEFAULT_VALUE="All Gens",a)},266:function(e,t,n){"use strict";var r=n(97),a=n(2),i=(n(0),n(98)),o=n(247),c=n(249);function u(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  color: rgba(0, 0, 0, 0.3);\n  span {\n    text-transform: capitalize;\n  }\n  margin-right: 8px;\n"]);return u=function(){return e},e}function l(){var e=Object(r.a)(["\n  background-color: transparent;\n  width: 100%;\n  border: none;\n  padding: 10px;\n  text-align: left;\n"]);return l=function(){return e},e}function s(){var e=Object(r.a)(["\n  display: flex;\n  flex-grow: 10;\n"]);return s=function(){return e},e}function f(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 16px;\n  margin-left: 8px;\n"]);return f=function(){return e},e}function d(){var e=Object(r.a)(["\n  display: flex;\n  width: 100%;\n  background-color: #e1e7ec;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  transition: all 200ms ease-out;\n  &:focus-within {\n    border: 1px solid #e1e7ec;\n    background: white;\n    box-shadow: 0px 0px 10px #e1e7ec;\n  }\n"]);return d=function(){return e},e}function b(){var e=Object(r.a)(["\n  padding: 8px;\n"]);return b=function(){return e},e}var j=Object(i.a)(o.a)(b()),h=i.a.div(d()),p=i.a.div(f()),v=i.a.div(s()),O=i.a.input(l()),g=i.a.div(u());t.a=function(e){var t=e.name,n=e.count,r=e.onChange,i=e.placeholder,o=void 0===i?"Enter name":i;return Object(a.jsx)(j,{children:Object(a.jsxs)(h,{children:[Object(a.jsx)(p,{children:Object(a.jsx)("img",{src:c.a.Search,style:{width:18,height:18},alt:"search-icon"})}),Object(a.jsx)(v,{children:Object(a.jsx)(O,{placeholder:o,onChange:r})}),Object(a.jsx)(g,{children:Object(a.jsx)("span",{children:"".concat(n," ").concat(t)})})]})})}},267:function(e,t,n){"use strict";var r=n(38),a=n(97),i=n(0),o=n(2),c=n(98),u=n(247),l=n(45),s=n(268),f=n(128),d=n(256),b=n(263),j=n.n(b),h=n(394),p=n(225),v=n(239),O=Object(p.a)({list:{width:250},fullList:{width:"auto"}}),g=function(e){var t=e.side,n=e.open,r=e.children,a=e.onClose,i=O();return Object(o.jsx)(v.a,{anchor:t,open:n,onClose:a,children:"top"===t||"bottom"===t?Object(o.jsx)("div",{className:i.fullList,role:"presentation",children:r}):Object(o.jsx)("div",{className:i.list,role:"presentation",children:r})})};function m(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 12px;\n"]);return m=function(){return e},e}function x(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 12px;\n"]);return x=function(){return e},e}function E(){var e=Object(a.a)(["\n  transform: ",";\n  transition: all 200ms ease-in-out;\n"]);return E=function(){return e},e}function y(){var e=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n\n  span {\n    padding-left: 10px;\n  }\n"]);return y=function(){return e},e}function C(){var e=Object(a.a)(["\n  border-radius: 10px;\n  color: #203e55;\n  font-weight: bold;\n  transition: all 50ms ease-in-out;\n"]);return C=function(){return e},e}var w=Object(c.a)(f.a)(C()),N=c.a.div(y()),V=Object(c.a)((function(e){e.active;var t=Object(s.a)(e,["active"]);return Object(o.jsx)(j.a,Object(r.a)({},t))}))(E(),(function(e){return e.active?"rotate(-180deg)":"rotate(0)"})),k=c.a.div(x()),G=c.a.div(m());var I=function(e){var t=e.filter,n=e.currentItem,r=e.onChange,a=Object(i.useState)(!1),c=Object(l.a)(a,2),u=c[0],s=c[1],f=Object(i.useRef)(null),b=Object(d.useMediaQuery)({query:"(max-width: 659px)"}),j=Object(i.useCallback)((function(e){s(!u)}),[u]),p=Object(i.useCallback)((function(){s(!1)}),[]),v=Object(i.useCallback)((function(e){var t,n=null!==(t=e.currentTarget.textContent)&&void 0!==t?t:"";r(n),p()}),[p,r]),O=Object(i.useCallback)((function(){var e=t.getValueName(n);return b&&"getShortenedValueName"in t&&(e=t.getShortenedValueName(n)),e}),[n,t,b]),m=u&&!b,x=u&&b;return Object(o.jsxs)("div",{children:[Object(o.jsx)(w,{onClick:j,ref:f,children:Object(o.jsxs)(N,{children:[Object(o.jsx)("span",{children:O()}),Object(o.jsx)(V,{active:u})]})}),Object(o.jsx)(h.a,{id:m?"simple-popover":void 0,open:m,anchorEl:f?f.current:null,onClose:p,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(o.jsx)(k,{children:t.getValues().map((function(e){return Object(o.jsx)("button",{onClick:v,children:e},e)}))})}),Object(o.jsx)(g,{side:"bottom",open:x,onClose:p,children:Object(o.jsxs)(G,{children:[Object(o.jsxs)("h2",{children:["Select a ",t.getName().toLowerCase()]}),t.getValues().map((function(e){return Object(o.jsx)("button",{onClick:v,children:e},e)}))]})})]})},A=n(249);function T(){var e=Object(a.a)(["\n  height: 20px;\n  margin-right: 16px;\n"]);return T=function(){return e},e}function _(){var e=Object(a.a)(["\n  display: flex;\n  width: 100%;\n"]);return _=function(){return e},e}var S=c.a.div(_()),L=c.a.div(T());t.a=function(e){var t=e.filters;return Object(o.jsxs)(u.a,{children:[Object(o.jsx)(L,{children:Object(o.jsx)("img",{src:A.a.Pokeball,style:{width:20,height:20},alt:"pokeball-icon"})}),Object(o.jsx)(S,{children:t.map((function(e){return Object(i.createElement)(I,Object(r.a)(Object(r.a)({},e),{},{key:e.filter.getName()}))}))})]})}},268:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},394:function(e,t,n){"use strict";var r=n(1),a=n(3),i=n(0),o=(n(4),n(10)),c=n(66),u=n(5),l=n(27),s=n(68),f=n(58),d=n(7),b=n(237),j=n(71),h=n(241),p=n(22),v=n(43),O=n(12);function g(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var m={entering:{opacity:1,transform:g(1)},entered:{opacity:1,transform:"none"}},x=i.forwardRef((function(e,t){var n=e.children,o=e.disableStrictModeCompat,c=void 0!==o&&o,u=e.in,l=e.onEnter,s=e.onEntered,f=e.onEntering,d=e.onExit,b=e.onExited,x=e.onExiting,E=e.style,y=e.timeout,C=void 0===y?"auto":y,w=e.TransitionComponent,N=void 0===w?h.a:w,V=Object(a.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),k=i.useRef(),G=i.useRef(),I=Object(p.a)(),A=I.unstable_strictMode&&!c,T=i.useRef(null),_=Object(O.a)(n.ref,t),S=Object(O.a)(A?T:void 0,_),L=function(e){return function(t,n){if(e){var r=A?[T.current,t]:[t,n],a=Object(j.a)(r,2),i=a[0],o=a[1];void 0===o?e(i):e(i,o)}}},P=L(f),z=L((function(e,t){Object(v.b)(e);var n,r=Object(v.a)({style:E,timeout:C},{mode:"enter"}),a=r.duration,i=r.delay;"auto"===C?(n=I.transitions.getAutoHeightDuration(e.clientHeight),G.current=n):n=a,e.style.transition=[I.transitions.create("opacity",{duration:n,delay:i}),I.transitions.create("transform",{duration:.666*n,delay:i})].join(","),l&&l(e,t)})),D=L(s),M=L(x),U=L((function(e){var t,n=Object(v.a)({style:E,timeout:C},{mode:"exit"}),r=n.duration,a=n.delay;"auto"===C?(t=I.transitions.getAutoHeightDuration(e.clientHeight),G.current=t):t=r,e.style.transition=[I.transitions.create("opacity",{duration:t,delay:a}),I.transitions.create("transform",{duration:.666*t,delay:a||.333*t})].join(","),e.style.opacity="0",e.style.transform=g(.75),d&&d(e)})),H=L(b);return i.useEffect((function(){return function(){clearTimeout(k.current)}}),[]),i.createElement(N,Object(r.a)({appear:!0,in:u,nodeRef:A?T:void 0,onEnter:z,onEntered:D,onEntering:P,onExit:U,onExited:H,onExiting:M,addEndListener:function(e,t){var n=A?e:t;"auto"===C&&(k.current=setTimeout(n,G.current||0))},timeout:"auto"===C?null:C},V),(function(e,t){return i.cloneElement(n,Object(r.a)({style:Object(r.a)({opacity:0,transform:g(.75),visibility:"exited"!==e||u?void 0:"hidden"},m[e],E,n.props.style),ref:S},t))}))}));x.muiSupportAuto=!0;var E=x,y=n(190);function C(e,t){var n=0;return"number"===typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function w(e,t){var n=0;return"number"===typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function N(e){return[e.horizontal,e.vertical].map((function(e){return"number"===typeof e?"".concat(e,"px"):e})).join(" ")}function V(e){return"function"===typeof e?e():e}var k=i.forwardRef((function(e,t){var n=e.action,d=e.anchorEl,j=e.anchorOrigin,h=void 0===j?{vertical:"top",horizontal:"left"}:j,p=e.anchorPosition,v=e.anchorReference,O=void 0===v?"anchorEl":v,g=e.children,m=e.classes,x=e.className,k=e.container,G=e.elevation,I=void 0===G?8:G,A=e.getContentAnchorEl,T=e.marginThreshold,_=void 0===T?16:T,S=e.onEnter,L=e.onEntered,P=e.onEntering,z=e.onExit,D=e.onExited,M=e.onExiting,U=e.open,H=e.PaperProps,R=void 0===H?{}:H,F=e.transformOrigin,W=void 0===F?{vertical:"top",horizontal:"left"}:F,Y=e.TransitionComponent,B=void 0===Y?E:Y,J=e.transitionDuration,q=void 0===J?"auto":J,Q=e.TransitionProps,X=void 0===Q?{}:Q,K=Object(a.a)(e,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","className","container","elevation","getContentAnchorEl","marginThreshold","onEnter","onEntered","onEntering","onExit","onExited","onExiting","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),Z=i.useRef(),$=i.useCallback((function(e){if("anchorPosition"===O)return p;var t=V(d),n=(t&&1===t.nodeType?t:Object(l.a)(Z.current).body).getBoundingClientRect(),r=0===e?h.vertical:"center";return{top:n.top+C(n,r),left:n.left+w(n,h.horizontal)}}),[d,h.horizontal,h.vertical,p,O]),ee=i.useCallback((function(e){var t=0;if(A&&"anchorEl"===O){var n=A(e);if(n&&e.contains(n)){var r=function(e,t){for(var n=t,r=0;n&&n!==e;)r+=(n=n.parentElement).scrollTop;return r}(e,n);t=n.offsetTop+n.clientHeight/2-r||0}0}return t}),[h.vertical,O,A]),te=i.useCallback((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{vertical:C(e,W.vertical)+t,horizontal:w(e,W.horizontal)}}),[W.horizontal,W.vertical]),ne=i.useCallback((function(e){var t=ee(e),n={width:e.offsetWidth,height:e.offsetHeight},r=te(n,t);if("none"===O)return{top:null,left:null,transformOrigin:N(r)};var a=$(t),i=a.top-r.vertical,o=a.left-r.horizontal,c=i+n.height,u=o+n.width,l=Object(s.a)(V(d)),f=l.innerHeight-_,b=l.innerWidth-_;if(i<_){var j=i-_;i-=j,r.vertical+=j}else if(c>f){var h=c-f;i-=h,r.vertical+=h}if(o<_){var p=o-_;o-=p,r.horizontal+=p}else if(u>b){var v=u-b;o-=v,r.horizontal+=v}return{top:"".concat(Math.round(i),"px"),left:"".concat(Math.round(o),"px"),transformOrigin:N(r)}}),[d,O,$,ee,te,_]),re=i.useCallback((function(){var e=Z.current;if(e){var t=ne(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin}}),[ne]),ae=i.useCallback((function(e){Z.current=o.findDOMNode(e)}),[]);i.useEffect((function(){U&&re()})),i.useImperativeHandle(n,(function(){return U?{updatePosition:function(){re()}}:null}),[U,re]),i.useEffect((function(){if(U){var e=Object(c.a)((function(){re()}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[U,re]);var ie=q;"auto"!==q||B.muiSupportAuto||(ie=void 0);var oe=k||(d?Object(l.a)(V(d)).body:void 0);return i.createElement(b.a,Object(r.a)({container:oe,open:U,ref:t,BackdropProps:{invisible:!0},className:Object(u.a)(m.root,x)},K),i.createElement(B,Object(r.a)({appear:!0,in:U,onEnter:S,onEntered:L,onExit:z,onExited:D,onExiting:M,timeout:ie},X,{onEntering:Object(f.a)((function(e,t){P&&P(e,t),re()}),X.onEntering)}),i.createElement(y.a,Object(r.a)({elevation:I,ref:ae},R,{className:Object(u.a)(m.paper,R.className)}),g)))}));t.a=Object(d.a)({root:{},paper:{position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}},{name:"MuiPopover"})(k)},410:function(e,t,n){"use strict";n.r(t);var r,a,i=n(45),o=n(2),c=n(267),u=n(266),l=n(262),s=n(245),f=n(0),d=n(244),b=n(67),j=n(99),h=n(47),p=n(243),v=n(21);function O(e){var t;return p.a.mapValue(e).with((t={},Object(h.a)(t,v.a.PHYSICAL,"Physical"),Object(h.a)(t,v.a.SPECIAL,"Special"),Object(h.a)(t,v.a.STATUS,"Status"),t))}var g=new Map;Object(p.a)(v.a).forEach((function(e){g.set(O(e),e)}));var m=(a=r=function(){function e(){Object(b.a)(this,e)}return Object(j.a)(e,null,[{key:"getName",value:function(){return"Category"}},{key:"getValueName",value:function(e){return null===e?this.DEFAULT_VALUE:O(e)}},{key:"getValues",value:function(){return[this.DEFAULT_VALUE].concat(Object(d.a)(Object(p.a)(v.a).getValues().map(O)))}},{key:"getTypeFromValue",value:function(e){return g.get(e)}}]),e}(),r.DEFAULT_VALUE="All Categories",a),x=n(264),E=n(248);t.default=function(){var e=Object(s.a)().getAllMoves,t=Object(f.useState)(""),n=Object(i.a)(t,2),r=n[0],a=n[1],d=Object(l.a)(E.a),b=d.filter,j=d.onChange,h=Object(l.a)(x.a),p=h.filter,v=h.onChange,O=Object(l.a)(m),g=O.filter,y=O.onChange,C=Object(f.useState)([]),w=Object(i.a)(C,2),N=w[0],V=w[1],k=Object(f.useState)([]),G=Object(i.a)(k,2),I=G[0],A=G[1];Object(f.useEffect)((function(){e().then((function(e){V(e)}))}),[e]),Object(f.useEffect)((function(){var e=N.filter((function(e){var t=!r||e.name.startsWith(r),n=!p||e.generation===p,a=!b||e.type===b,i=!g||e.damage_class===g;return t&&n&&a&&i}));A(e)}),[g,p,b,N,r]);var T=Object(f.useMemo)((function(){return{filter:x.a,currentItem:p,onChange:v}}),[p,v]),_=Object(f.useMemo)((function(){return{filter:E.a,currentItem:b,onChange:j}}),[b,j]),S=Object(f.useMemo)((function(){return{filter:m,currentItem:g,onChange:y}}),[g,y]);return Object(o.jsxs)(f.Fragment,{children:[Object(o.jsx)(u.a,{name:"moves",count:I.length,placeholder:"Search by name or effect",onChange:function(e){a(e.currentTarget.value)}}),Object(o.jsx)(c.a,{filters:[_,T,S]}),Object(o.jsx)("div",{style:{height:"100%",overflowY:"scroll"},children:I.map((function(e){return Object(o.jsx)("div",{children:e.name})}))})]})}}}]);
//# sourceMappingURL=8.d5968def.chunk.js.map