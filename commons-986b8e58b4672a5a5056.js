/*! For license information please see commons-986b8e58b4672a5a5056.js.LICENSE.txt */
(self.webpackChunktonyw_west_blog=self.webpackChunktonyw_west_blog||[]).push([[351],{5761:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,{Z:function(){return r}})},9853:function(e,t,n){"use strict";n.d(t,{iv:function(){return Se},tZ:function(){return Ce}});var r=n(7294);var o=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=Math.abs,i=String.fromCharCode;function c(e){return e.trim()}function s(e,t,n){return e.replace(t,n)}function u(e,t){return e.indexOf(t)}function l(e,t){return 0|e.charCodeAt(t)}function f(e,t,n){return e.slice(t,n)}function p(e){return e.length}function d(e){return e.length}function y(e,t){return t.push(e),e}var h=1,m=1,b=0,v=0,g=0,w="";function T(e,t,n,r,o,a,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:h,column:m,length:i,return:""}}function C(e,t,n){return T(e,t.root,t.parent,n,t.props,t.children,0)}function S(){return g=v>0?l(w,--v):0,m--,10===g&&(m=1,h--),g}function A(){return g=v<b?l(w,v++):0,m++,10===g&&(m=1,h++),g}function k(){return l(w,v)}function x(){return v}function O(e,t){return f(w,e,t)}function E(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $(e){return h=m=1,b=p(w=e),v=0,[]}function j(e){return w="",e}function P(e){return c(O(v-1,N(91===e?e+2:40===e?e+1:e)))}function _(e){for(;(g=k())&&g<33;)A();return E(e)>2||E(g)>3?"":" "}function M(e,t){for(;--t&&A()&&!(g<48||g>102||g>57&&g<65||g>70&&g<97););return O(e,x()+(t<6&&32==k()&&32==A()))}function N(e){for(;A();)switch(g){case e:return v;case 34:case 39:return N(34===e||39===e?e:g);case 40:41===e&&N(e);break;case 92:A()}return v}function L(e,t){for(;A()&&e+g!==57&&(e+g!==84||47!==k()););return"/*"+O(t,v-1)+"*"+i(47===e?e:A())}function I(e){for(;!E(k());)A();return O(e,v)}var Z="-ms-",R="-moz-",F="-webkit-",z="comm",D="rule",Y="decl";function H(e,t){for(var n="",r=d(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function q(e,t,n,r){switch(e.type){case"@import":case Y:return e.return=e.return||e.value;case z:return"";case D:e.value=e.props.join(",")}return p(n=H(e.children,r))?e.return=e.value+"{"+n+"}":""}function B(e,t){switch(function(e,t){return(((t<<2^l(e,0))<<2^l(e,1))<<2^l(e,2))<<2^l(e,3)}(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+R+e+Z+e+e;case 6828:case 4268:return F+e+Z+e+e;case 6165:return F+e+Z+"flex-"+e+e;case 5187:return F+e+s(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return F+e+Z+"flex-item-"+s(e,/flex-|-self/,"")+e;case 4675:return F+e+Z+"flex-line-pack"+s(e,/align-content|flex-|-self/,"")+e;case 5548:return F+e+Z+s(e,"shrink","negative")+e;case 5292:return F+e+Z+s(e,"basis","preferred-size")+e;case 6060:return F+"box-"+s(e,"-grow","")+F+e+Z+s(e,"grow","positive")+e;case 4554:return F+s(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return s(s(s(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return s(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return s(s(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4095:case 3583:case 4068:case 2532:return s(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(p(e)-1-t>6)switch(l(e,t+1)){case 109:if(45!==l(e,t+4))break;case 102:return s(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+R+(108==l(e,t+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?B(s(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==l(e,t+1))break;case 6444:switch(l(e,p(e)-3-(~u(e,"!important")&&10))){case 107:return s(e,":",":"+F)+e;case 101:return s(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+F+(45===l(e,14)?"inline-":"")+"box$3$1"+F+"$2$3$1"+Z+"$2box$3")+e}break;case 5936:switch(l(e,t+11)){case 114:return F+e+Z+s(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+Z+s(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+Z+s(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return F+e+Z+e+e}return e}function U(e){return j(W("",null,null,null,[""],e=$(e),0,[0],e))}function W(e,t,n,r,o,a,c,u,l){for(var f=0,d=0,h=c,m=0,b=0,v=0,g=1,w=1,T=1,C=0,O="",E=o,$=a,j=r,N=O;w;)switch(v=C,C=A()){case 34:case 39:case 91:case 40:N+=P(C);break;case 9:case 10:case 13:case 32:N+=_(v);break;case 92:N+=M(x()-1,7);continue;case 47:switch(k()){case 42:case 47:y(K(L(A(),x()),t,n),l);break;default:N+="/"}break;case 123*g:u[f++]=p(N)*T;case 125*g:case 59:case 0:switch(C){case 0:case 125:w=0;case 59+d:b>0&&p(N)-h&&y(b>32?V(N+";",r,n,h-1):V(s(N," ","")+";",r,n,h-2),l);break;case 59:N+=";";default:if(y(j=G(N,t,n,f,d,o,u,O,E=[],$=[],h),a),123===C)if(0===d)W(N,t,j,j,E,a,h,u,$);else switch(m){case 100:case 109:case 115:W(e,j,j,r&&y(G(e,j,j,0,0,o,u,O,o,E=[],h),$),o,$,h,u,r?E:$);break;default:W(N,j,j,j,[""],$,h,u,$)}}f=d=b=0,g=T=1,O=N="",h=c;break;case 58:h=1+p(N),b=v;default:if(g<1)if(123==C)--g;else if(125==C&&0==g++&&125==S())continue;switch(N+=i(C),C*g){case 38:T=d>0?1:(N+="\f",-1);break;case 44:u[f++]=(p(N)-1)*T,T=1;break;case 64:45===k()&&(N+=P(A())),m=k(),d=p(O=N+=I(x())),C++;break;case 45:45===v&&2==p(N)&&(g=0)}}return a}function G(e,t,n,r,o,i,u,l,p,y,h){for(var m=o-1,b=0===o?i:[""],v=d(b),g=0,w=0,C=0;g<r;++g)for(var S=0,A=f(e,m+1,m=a(w=u[g])),k=e;S<v;++S)(k=c(w>0?b[S]+" "+A:s(A,/&\f/g,b[S])))&&(p[C++]=k);return T(e,t,n,0===o?D:l,p,y,h)}function K(e,t,n){return T(e,t,n,z,i(g),f(e,2,-2),0)}function V(e,t,n,r){return T(e,t,n,Y,f(e,0,r),f(e,r+1,-1),r)}var Q=function(e,t){return j(function(e,t){var n=-1,r=44;do{switch(E(r)){case 0:38===r&&12===k()&&(t[n]=1),e[n]+=I(v-1);break;case 2:e[n]+=P(r);break;case 4:if(44===r){e[++n]=58===k()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=i(r)}}while(r=A());return e}($(e),t))},J=new WeakMap,X=function(e){if("rule"===e.type&&e.parent&&e.length){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||J.get(n))&&!r){J.set(e,!0);for(var o=[],a=Q(t,o),i=n.props,c=0,s=0;c<a.length;c++)for(var u=0;u<i.length;u++,s++)e.props[s]=o[c]?a[c].replace(/&\f/g,i[u]):i[u]+" "+a[c]}}},ee=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},te=[function(e,t,n,r){if(!e.return)switch(e.type){case Y:e.return=B(e.value,e.length);break;case"@keyframes":return H([C(s(e.value,"@","@"+F),e,"")],r);case D:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return H([C(s(t,/:(read-\w+)/,":-moz-$1"),e,"")],r);case"::placeholder":return H([C(s(t,/:(plac\w+)/,":-webkit-input-$1"),e,""),C(s(t,/:(plac\w+)/,":-moz-$1"),e,""),C(s(t,/:(plac\w+)/,Z+"input-$1"),e,"")],r)}return""}))}}],ne=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){document.head.appendChild(e),e.setAttribute("data-s","")}))}var r=e.stylisPlugins||te;var a,i,c={},s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion]"),(function(e){var n=e.getAttribute("data-emotion").split(" ");if(n[0]===t){for(var r=1;r<n.length;r++)c[n[r]]=!0;s.push(e)}}));var u,l,f,p,y=[q,(p=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&p(e)})],h=(l=[X,ee].concat(r,y),f=d(l),function(e,t,n,r){for(var o="",a=0;a<f;a++)o+=l[a](e,t,n,r)||"";return o});i=function(e,t,n,r){u=n,H(U(e?e+"{"+t.styles+"}":t.styles),h),r&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new o({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend}),nonce:e.nonce,inserted:c,registered:{},insert:i};return m.sheet.hydrate(s),m};var re=function(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)},oe={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var ae=/[A-Z]|^ms/g,ie=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ce=function(e){return 45===e.charCodeAt(1)},se=function(e){return null!=e&&"boolean"!=typeof e},ue=function(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){return ce(e)?e:e.replace(ae,"-$&").toLowerCase()})),le=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(ie,(function(e,t,n){return pe={name:t,styles:n,next:pe},t}))}return 1===oe[e]||ce(e)||"number"!=typeof t||0===t?t:t+"px"};function fe(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return pe={name:n.name,styles:n.styles,next:pe},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)pe={name:r.name,styles:r.styles,next:pe},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=fe(e,t,n[o])+";";else for(var a in n){var i=n[a];if("object"!=typeof i)null!=t&&void 0!==t[i]?r+=a+"{"+t[i]+"}":se(i)&&(r+=ue(a)+":"+le(a,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var c=fe(e,t,i);switch(a){case"animation":case"animationName":r+=ue(a)+":"+c+";";break;default:r+=a+"{"+c+"}"}}else for(var s=0;s<i.length;s++)se(i[s])&&(r+=ue(a)+":"+le(a,i[s])+";")}return r}(e,t,n);case"function":if(void 0!==e){var o=pe,a=n(e);return pe=o,fe(e,t,a)}break;case"string":}if(null==t)return n;var i=t[n];return void 0!==i?i:n}var pe,de=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var ye=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,o="";pe=void 0;var a=e[0];null==a||void 0===a.raw?(r=!1,o+=fe(n,t,a)):o+=a[0];for(var i=1;i<e.length;i++)o+=fe(n,t,e[i]),r&&(o+=a[i]);de.lastIndex=0;for(var c,s="";null!==(c=de.exec(o));)s+="-"+c[1];return{name:re(o)+s,styles:o,next:pe}},he=Object.prototype.hasOwnProperty,me=(0,r.createContext)("undefined"!=typeof HTMLElement?ne({key:"css"}):null),be=(me.Provider,function(e){return(0,r.forwardRef)((function(t,n){var o=(0,r.useContext)(me);return e(t,o,n)}))}),ve=(0,r.createContext)({});var ge="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",we=function(e,t){var n={};for(var r in t)he.call(t,r)&&(n[r]=t[r]);return n[ge]=e,n},Te=be((function(e,t,n){var o=e.css;"string"==typeof o&&void 0!==t.registered[o]&&(o=t.registered[o]);var a=e[ge],i=[o],c="";"string"==typeof e.className?c=function(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}(t.registered,i,e.className):null!=e.className&&(c=e.className+" ");var s=ye(i,void 0,"function"==typeof o||Array.isArray(o)?(0,r.useContext)(ve):void 0);!function(e,t,n){var r=e.key+"-"+t.name;if(!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles),void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+r:"",o,e.sheet,!0),o=o.next}while(void 0!==o)}}(t,s,"string"==typeof a);c+=t.key+"-"+s.name;var u={};for(var l in e)he.call(e,l)&&"css"!==l&&l!==ge&&(u[l]=e[l]);return u.ref=n,u.className=c,(0,r.createElement)(a,u)}));n(7154),n(5706);var Ce=function(e,t){var n=arguments;if(null==t||!he.call(t,"css"))return r.createElement.apply(void 0,n);var o=n.length,a=new Array(o);a[0]=Te,a[1]=we(e,t);for(var i=2;i<o;i++)a[i]=n[i];return r.createElement.apply(null,a)};function Se(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ye(t)}},5706:function(e,t,n){"use strict";var r=n(8812),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return r.isMemo(e)?i:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=i;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(y){var o=d(n);o&&o!==y&&e(t,o,r)}var i=l(n);f&&(i=i.concat(f(n)));for(var c=s(t),h=s(n),m=0;m<i.length;++m){var b=i[m];if(!(a[b]||r&&r[b]||h&&h[b]||c&&c[b])){var v=p(n,b);try{u(t,b,v)}catch(g){}}}}return t}},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(!a(e[s],i[s]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!a(s.value[1],i.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,u[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!a(e[u[s]],i[u[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},165:function(e,t){"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function T(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case f:case a:case c:case i:case d:return e;default:switch(e=e&&e.$$typeof){case u:case p:case m:case h:case s:return e;default:return t}}case o:return t}}}function C(e){return T(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=s,t.Element=r,t.ForwardRef=p,t.Fragment=a,t.Lazy=m,t.Memo=h,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=d,t.isAsyncMode=function(e){return C(e)||T(e)===l},t.isConcurrentMode=C,t.isContextConsumer=function(e){return T(e)===u},t.isContextProvider=function(e){return T(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return T(e)===p},t.isFragment=function(e){return T(e)===a},t.isLazy=function(e){return T(e)===m},t.isMemo=function(e){return T(e)===h},t.isPortal=function(e){return T(e)===o},t.isProfiler=function(e){return T(e)===c},t.isStrictMode=function(e){return T(e)===i},t.isSuspense=function(e){return T(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===f||e===c||e===i||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===s||e.$$typeof===u||e.$$typeof===p||e.$$typeof===v||e.$$typeof===g||e.$$typeof===w||e.$$typeof===b)},t.typeOf=T},8812:function(e,t,n){"use strict";e.exports=n(165)},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},2300:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r,o,a,i=n(5761),c=n(7294),s=n(5444),u=n(9853);var l,f,p=function(e){var t=e.posts;return t?(0,u.tZ)(c.Fragment,null,(0,u.tZ)("input",{type:"checkbox",id:"hamicon",css:d}),(0,u.tZ)("label",{htmlFor:"hamicon"},(0,u.tZ)("span",null),(0,u.tZ)("span",null),(0,u.tZ)("span",null)),(0,u.tZ)("div",null,(0,u.tZ)("ul",null,t.map((function(e){var t=e.frontmatter.title,n=e.fields.slug;return(0,u.tZ)("li",{css:y,key:"sidebar-list"+n},(0,u.tZ)(s.Link,{css:(0,u.iv)(r||(r=(0,i.Z)(["\n                    text-decoration: none;\n                  "]))),to:n},t))})))),(0,u.tZ)("label",{htmlFor:"hamicon"})):(0,u.tZ)("div",null)},d=(0,u.iv)(o||(o=(0,i.Z)(["\n  display: none;\n\n  & + label {\n    display: inline-block;\n    width: 38px;\n    height: 28px;\n    position: relative;\n    cursor: pointer;\n  }\n  & + label span {\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 5px;\n    border-radius: 15px;\n    background: black;\n    transition: all 0.35s;\n  }\n  & + label span:nth-child(1) {\n    top: 0;\n  }\n  & + label span:nth-child(2) {\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  & + label span:nth-child(3) {\n    bottom: 0;\n  }\n  &:checked + label span:nth-child(1) {\n    top: 50%;\n    transform: translateY(-50%) rotate(45deg);\n  }\n  &:checked + label span:nth-child(2) {\n    opacity: 0;\n  }\n  &:checked + label span:nth-child(3) {\n    bottom: 50%;\n    transform: translateY(50%) rotate(-45deg);\n  }\n  & + label + div {\n    position: fixed;\n    top: 50px;\n    right: -250px;\n    width: 250px;\n    height: 100%;\n    background: #ffffff;\n    z-index: 30;\n    transition: 0.35s;\n  }\n  &:checked + label + div {\n    display: block;\n    right: 0;\n  }\n  & + label + div + label {\n    display: none;\n  }\n  &:checked + label + div + label {\n    display: block;\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.8);\n    z-index: 1;\n  }\n"]))),y=(0,u.iv)(a||(a=(0,i.Z)(["\n  list-style: none;\n  font-size: 1.3rem;\n  font-weight: 400;\n  text-align: center;\n"]))),h=function(e){var t,n=e.location,r=e.title,o=e.posts,a=e.children,i="/"===n.pathname;return t=i?(0,u.tZ)(c.Fragment,null,(0,u.tZ)("h1",{className:"main-heading"},(0,u.tZ)(s.Link,{to:"/"},r)),(0,u.tZ)(p,{posts:o})):(0,u.tZ)(c.Fragment,null,(0,u.tZ)(s.Link,{className:"header-link-home",to:"/"},r),(0,u.tZ)(p,{posts:o})),(0,u.tZ)("div",{className:"global-wrapper","data-is-root-path":i},(0,u.tZ)("header",{css:m,className:"global-header"},t),(0,u.tZ)("main",null,a),(0,u.tZ)("footer",{css:b},"© ",(new Date).getFullYear()," TonyWest powered by"," ",(0,u.tZ)("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))},m=(0,u.iv)(l||(l=(0,i.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),b=(0,u.iv)(f||(f=(0,i.Z)(["\n  font-size: 0.9rem;\n"])))},3751:function(e,t,n){"use strict";n.d(t,{Z:function(){return ve}});var r,o,a,i,c=n(7294),s=n(5697),u=n.n(s),l=n(4839),f=n.n(l),p=n(2993),d=n.n(p),y=n(6494),h=n.n(y),m="bodyAttributes",b="htmlAttributes",v="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(g).map((function(e){return g[e]})),"charset"),T="cssText",C="href",S="http-equiv",A="innerHTML",k="itemprop",x="name",O="property",E="rel",$="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",M="defer",N="encodeSpecialCharacters",L="onChangeClientState",I="titleTemplate",Z=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),R=[g.NOSCRIPT,g.SCRIPT,g.STYLE],F="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},B=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=J(e,g.TITLE),n=J(e,I);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,_);return t||r||void 0},G=function(e){return J(e,L)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],s=c.toLowerCase();-1===t.indexOf(s)||n===E&&"canonical"===e[n].toLowerCase()||s===E&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==A&&c!==T&&c!==k||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],s=h()({},r[c],o[c]);r[c]=s}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;se(g.BODY,r),se(g.HTML,o),ce(f,p);var d={baseTag:ue(g.BASE,n),linkTags:ue(g.LINK,a),metaTags:ue(g.META,i),noscriptTags:ue(g.NOSCRIPT,c),scriptTags:ue(g.SCRIPT,u),styleTags:ue(g.STYLE,l)},y={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,y,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(g.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(F),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var l=a.indexOf(s);-1!==l&&a.splice(l,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(F):n.getAttribute(F)!==i.join(",")&&n.setAttribute(F,i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(F,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[F]=!0,o=fe(n,r),[c.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+U(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case m:case b:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[F]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===A||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+U(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(g.BASE,t,r),bodyAttributes:pe(m,n,r),htmlAttributes:pe(b,o,r),link:pe(g.LINK,a,r),meta:pe(g.META,i,r),noscript:pe(g.NOSCRIPT,c,r),script:pe(g.SCRIPT,s,r),style:pe(g.STYLE,u,r),title:pe(g.TITLE,{title:f,titleAttributes:p},r)}},ye=f()((function(e){return{baseTag:V([C,j],e),bodyAttributes:K(m,e),defer:J(e,M),encode:J(e,N),htmlAttributes:K(b,e),linkTags:Q(g.LINK,[E,C],e),metaTags:Q(g.META,[x,w,S,O,k],e),noscriptTags:Q(g.NOSCRIPT,[A],e),onChangeClientState:G(e),scriptTags:Q(g.SCRIPT,[$,A],e),styleTags:Q(g.STYLE,[T],e),title:W(e),titleAttributes:K(v,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),he=(o=ye,i=a=function(e){function t(){return D(this,t),B(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TITLE:return H({},o,((t={})[r.type]=i,t.titleAttributes=H({},a),t));case g.BODY:return H({},o,{bodyAttributes:H({},a)});case g.HTML:return H({},o,{htmlAttributes:H({},a)})}return H({},o,((n={})[r.type]=H({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Z[n]||n]=e[n],t}),t)}(q(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=q(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var me=n(5444),be=function(e){var t,n,r,o=e.description,a=e.lang,i=e.meta,s=e.title,u=(0,me.useStaticQuery)("2841359383").site,l=o||u.siteMetadata.description,f=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(he,{htmlAttributes:{lang:a},title:s,titleTemplate:f?"%s | "+f:null,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=u.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(i)})};be.defaultProps={lang:"en",meta:[],description:""};var ve=be}}]);
//# sourceMappingURL=commons-986b8e58b4672a5a5056.js.map