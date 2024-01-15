(()=>{"use strict";var e={6691:(e,t,r)=>{var o=r(1957),n=r(1947),a=r(499),i=r(9835);const s={class:"snowflakes","aria-hidden":"true"};function l(e,t){return(0,i.wg)(),(0,i.iD)("div",s,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(60,(e=>(0,i._)("div",{class:"snowflake",key:e},"❅ "))),64))])}var u=r(1639);const c={},d=(0,u.Z)(c,[["render",l]]),p=d;var f=r(3100),m=r(9302),h=r(9120);const g={__name:"App",setup(e){const t=(0,m.Z)(),{state:r}=(0,f.oR)(),o=(0,i.Fl)((()=>r.data.mainImageLoaded));return t.loading.show({spinner:h.Z,spinnerColor:"yellow",spinnerSize:60,backgroundColor:"#303030",messageColor:"white"}),(0,i.YP)((()=>o.value),(e=>{e&&t.loading.hide()}),{deep:!0}),(e,t)=>{const r=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)((0,a.SU)(p)),(0,i.Wm)(r)],64)}}},v=g,b=v;var S=r(7006),y=r(3340),E=r(8339);const _=[{path:"/",component:()=>Promise.all([r.e(736),r.e(434)]).then(r.bind(r,5434)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(654)]).then(r.bind(r,1654))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(134)]).then(r.bind(r,4134))}],w=_,T=(0,y.BC)((function(){const e=E.PO,t=(0,E.p7)({scrollBehavior:()=>({left:0,top:0}),routes:w,history:e("/")});return t}));async function C(e,t){const o=e(b);o.use(n.Z,t);const i="function"===typeof S.Z?await(0,S.Z)({}):S.Z,{storeKey:s}=await Promise.resolve().then(r.bind(r,7006)),l=(0,a.Xl)("function"===typeof T?await T({store:i}):T);return i.$router=l,{app:o,store:i,storeKey:s,router:l}}var A=r(4328),P=r(6950);const k={config:{},plugins:{Notify:A.Z,Loading:P.Z}},O="/";async function j({app:e,router:t,store:r,storeKey:o},n){let a=!1;const i=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},s=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t)},l=window.location.href.replace(window.location.origin,"");for(let c=0;!1===a&&c<n.length;c++)try{await n[c]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:l,publicPath:O})}catch(u){return u&&u.url?void s(u.url):void console.error("[Quasar] boot error:",u)}!0!==a&&(e.use(t),e.use(r,o),e.mount("#q-app"))}C(o.ri,k).then((e=>{const[t,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,1569))]).then((t=>{const r=o(t).filter((e=>"function"===typeof e));j(e,r)}))}))},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>a,default:()=>i});var o=r(3340),n=r(6081);const a=n.Z.create({baseURL:"https://api.example.com"}),i=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=n.Z,e.config.globalProperties.$api=a}))},7006:(e,t,r)=>{r.d(t,{Z:()=>c});var o={};r.r(o),r.d(o,{actions:()=>l,mutations:()=>u,state:()=>s});var n=r(3340),a=r(3100),i=r(6081);const s={isFetching:!1,screenWidth:null,reqStatus:null,reqMessage:null,mainImageLoaded:!1},l={async send_mmessage({commit:e},{name:t,email:r,message:o}){e("SET_IS_FETCHING",!0),e("SET_REQ_STATUS",null),e("SET_REQ_MESSAGE",null);const n="3189b878-f8e7-40f3-a1c6-0321ce26d124",a={access_key:n,name:t,email:r,message:o,subject:t,from_name:"Portfolio Website - Catalin Muresian"};try{const{data:t}=await i.Z.post("https://api.web3forms.com/submit",a);e("SET_IS_FETCHING",!1),e("SET_REQ_STATUS","success"),e("SET_REQ_MESSAGE",t.message)}catch(s){e("SET_REQ_MESSAGE",data.message),e("SET_IS_FETCHING",!1),e("SET_REQ_STATUS","error")}}},u={MAIN_IMAGE_LOADED(e,t){e.mainImageLoaded=t},SET_REQ_MESSAGE(e,t){e.reqMessage=t},SET_REQ_STATUS(e,t){e.reqStatus=t},SET_IS_FETCHING(e,t){e.isFetching=t},SET_SCREEN_WIDTH(e,t){e.screenWidth=t+15}},c=(0,n.h)((function(){return(0,a.MT)({modules:{data:o},state:{},actions:{},strict:!1})}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{134:"fd781e72",434:"4ab29487",654:"d646bacd"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{434:"ad472994",654:"48f693de"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="mc-portfolio:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[n];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,o,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=r=>{if(a.onerror=a.onload=null,"load"===r.type)o();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,a.parentNode.removeChild(a),n(l)}};return a.onerror=a.onload=i,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),s=r.p+i;if(t(i,s))return n();e(o,s,null,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={434:1,654:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,s,l]=o,u=0;if(i.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var c=l(r)}for(t&&t(o);u<i.length;u++)a=i[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},o=globalThis["webpackChunkmc_portfolio"]=globalThis["webpackChunkmc_portfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(6691)));o=r.O(o)})();