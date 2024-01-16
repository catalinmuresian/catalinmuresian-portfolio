(globalThis["webpackChunkmc_portfolio"]=globalThis["webpackChunkmc_portfolio"]||[]).push([[654],{1654:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>Je});var n=i(9835),o=i(499),l=i(2162),a=i.n(l),s=i(6970);const r={__name:"MainButton",props:{name:String,type:String,loading:Boolean},emits:["handle-button"],setup(e,{emit:t}){const i=t;function o(e){i("handle-button",e)}return(t,i)=>{const l=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.j4)(l,{class:"main-button",flat:"",loading:e.loading,type:e.type,color:"white",onClick:i[0]||(i[0]=e=>o("contact-me"))},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.name),1)])),_:1},8,["loading","type"])}}};var c=i(8556),u=i(9984),m=i.n(u);const p=r,d=p;m()(r,"components",{QBtn:c.Z});var g=i(3100);const v={class:"hero-section"},h={class:"top"},S={class:"text"},y=(0,n.uE)('<div class="top-text"><h1 class="hi">Hi</h1><h1 class="name">I’m Catalin M.</h1><div class="role"><hr><span>frontend developer</span></div><p class="desc">Crafting pixel-perfect, user-centric web experiences with passion and proficiency.</p></div>',1),w={class:"portrait-image image-hero"},k={__name:"HeroSection",setup(e){const{commit:t}=(0,g.oR)();function i(){const e=document.getElementById("hr");e.scrollIntoView({behavior:"instant"})}function l(){t("MAIN_IMAGE_LOADED",!0)}return(e,t)=>{const s=(0,n.up)("q-img");return(0,n.wg)(),(0,n.iD)("div",v,[(0,n._)("div",h,[(0,n._)("div",S,[y,(0,n.Wm)((0,o.SU)(d),{class:"button-tablet button-hero",name:"see my portfolio",onHandleButton:i})]),(0,n._)("div",w,[(0,n.Wm)(s,{onLoad:t[0]||(t[0]=e=>l()),loading:"lazy",src:a(),alt:"cm-main-image"})])]),(0,n.Wm)((0,o.SU)(d),{class:"button-mobile button-hero",name:"see my portfolio",onHandleButton:i})])}}};var f=i(335);const b=k,_=b;m()(k,"components",{QImg:f.Z});const C={class:"skill-name"},j={__name:"SkillComp",props:{skill:String,logo:String,hoverColor:String},setup(e){function t(e){return{"--color-hover":e}}return(i,o)=>{const l=(0,n.up)("q-img");return(0,n.wg)(),(0,n.iD)("div",{class:"skill-comp",style:(0,s.j5)(t(e.hoverColor))},[(0,n.Wm)(l,{style:{width:"80px"},loading:"lazy",src:`${e.logo}`,alt:"logo"},null,8,["src"]),(0,n._)("span",C,(0,s.zw)(e.skill),1)],4)}}},H=j,x=H;m()(j,"components",{QImg:f.Z});const W={class:"skills-section"},q=(0,n._)("h2",null,"Some of the skills and tools I work with",-1),I={class:"skill-list"},Q={__name:"SkillsSection",setup(e){const t=(0,o.iH)([{name:"HTML",logo:"html.png",hoverColor:"#f16528"},{name:"CSS",logo:"css.png",hoverColor:"#369cd6"},{name:"JavaScript",logo:"js.png",hoverColor:"#e9ca32"},{name:"Vue js",logo:"vue.png",hoverColor:"#41b783"},{name:"Quasar js",logo:"quasar.png",hoverColor:"#00b3fe"},{name:"Nuxt js",logo:"nuxt.png",hoverColor:"#03c58e"}]);return(e,i)=>((0,n.wg)(),(0,n.iD)("div",W,[q,(0,n._)("div",I,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.value,(({name:e,logo:t,hoverColor:i})=>((0,n.wg)(),(0,n.j4)((0,o.SU)(x),{key:e,logo:t,skill:e,"hover-color":i},null,8,["logo","skill","hover-color"])))),128))])]))}},M=Q,D=M;i(2879);var Z=i(1957);const L={class:"info"},T={style:{display:"flex","margin-top":"5px","justify-content":"space-between","align-items":"baseline"}},U={key:0,class:"see-live"},F=["href"],V={class:"skills"},z={__name:"ProjectCard",props:{img:String,title:String,skills:Array,id:String,link:String,isSearch:Boolean},emits:["open-modal"],setup(e,{emit:t}){const i=t,o=e;function l(){i("open-modal",{id:o.id,img:o.img,skills:o.skills,title:o.title,link:o.link})}return(t,i)=>{const o=(0,n.up)("q-img"),a=(0,n.up)("q-icon"),r=(0,n.up)("q-card"),c=(0,n.up)("q-spinner-radio");return(0,n.wg)(),(0,n.iD)("section",{class:(0,s.C_)([e.isSearch?"remove-animation":"animation-section","project-card"])},[(0,n.Wm)(r,{style:{width:"100%"},onClick:l},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{src:`${e.img}`,loading:"lazy",alt:e.img},null,8,["src","alt"]),(0,n.Wm)(a,{class:"icon-open-full",color:"grey-6",size:"30px",name:"fullscreen"})])),_:1}),(0,n._)("div",L,[(0,n._)("div",T,[(0,n._)("h3",null,(0,s.zw)(e.title),1),e.link?((0,n.wg)(),(0,n.iD)("div",U,[(0,n._)("a",{style:{gap:"10px",display:"flex",cursor:"pointer","font-weight":"700",color:"#41B783FF","text-decoration":"none","align-items":"center"},href:e.link,target:"_blank"},[(0,n.Uk)(" See live "),(0,n.Wm)(c,{size:"1em",color:"#41B783FF"})],8,F)])):(0,n.kq)("",!0)]),(0,n._)("div",V,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.skills,(e=>((0,n.wg)(),(0,n.iD)("p",{key:e},(0,s.zw)(e),1)))),128))])])],2)}}};var B=i(4458),P=i(2857),N=i(4486),J=i(3902);const A=z,E=A;m()(z,"components",{QCard:B.Z,QImg:f.Z,QIcon:P.Z,QSpinnerRadio:N.Z,QSpinner:J.Z});const Y={id:"projects-section",class:"projects-section"},R={class:"title text-h6"},$={style:{display:"flex","align-items":"center",gap:"10px"}},K={class:"top"},O=(0,n._)("h2",null,"My portfolio",-1),G={class:"search"},X={class:"projects-list"},ee={__name:"ProjectsSection",setup(e){const{state:t}=(0,g.oR)(),i=(0,o.iH)(""),l=(0,o.iH)(!1),a=(0,o.iH)(!1),r=(0,o.iH)(!1),c=(0,n.Fl)((()=>t.data.screenWidth)),u=(0,o.iH)([{id:"suport-solar",img:"suport-solar.png",title:"Suport Solar",skills:["HTML","CSS","JavaScript","Quasar js"],link:"https://suport-solar.ro/"},{id:"black-mar",img:"black-mar.png",title:"Black Mar",skills:["HTML","CSS","JavaScript","Vue js"],link:"https://blackmar.io/"},{id:"juicy-llama",img:"juicy.png",title:"Juicy Llama",skills:["HTML","CSS","JavaScript","Vue js","Tailwind CSS"]},{id:"ibrowse",img:"ibrowse.png",title:"iBrowse",skills:["HTML","CSS","JavaScript","Quasar js"]},{id:"salva-monument",img:"salvamonument.png",title:"Salva Monument",skills:["HTML","CSS","JavaScript","Quasar js"],link:"https://salvamonument.ro/"},{id:"mim",img:"mim.png",title:"Muzeul Migratiei",skills:["HTML","CSS","JavaScript"]},{id:"la-viitor",img:"laviitor.png",title:"La Viitor Patrimoniu",skills:["Web Design","UX | UI","Figma"],link:"https://laviitor.patrimoniu.ro/"},{id:"notorius-nft",img:"notoriusNFT.png",title:"Notorius Kings NFT",skills:["HTML","CSS","JavaScript","React js"]},{id:"dinstitute",img:"dinstitute.png",title:"Dinstitute",skills:["HTML","CSS","JavaScript","Vue js"]},{id:"add-to-cart",img:"add-to-cart.png",title:"Product Component",skills:["HTML","CSS","JavaScript"],link:"https://catalinmuresian.github.io/product-preview-card-component/"},{id:"countdown",img:"countdown.png",title:"Countdown timer",skills:["HTML","CSS","JavaScript","Vue js"],link:"https://catalinmuresian.github.io/countdown-timer/"},{id:"results",img:"results.png",title:"Results summary - App",skills:["HTML","CSS","JavaScript"],link:"https://catalinmuresian.github.io/results-summary/"}]),m=(0,o.iH)([...u.value]),p=(0,o.iH)({});function d({title:e,img:t,skills:i,id:n,link:o}){c.value>=768&&(a.value=!0,p.value={title:e,img:t,skills:i,id:n,link:o})}function v(e){const t=[],i=new Set;function n(){r.value=!0,m.value.filter((i=>{i.title.toLowerCase().includes(e.toLowerCase())&&t.push(i),i.skills.forEach((n=>n.toLowerCase().includes(e.toLowerCase())&&t.push(i)))})),u.value=t.filter((e=>{const t=i.has(e.id);return i.add(e.id),!t}))}null!==e?n():u.value=m.value}return(0,n.YP)((()=>u.value),(e=>{l.value=0===e.length})),(e,t)=>{const c=(0,n.up)("q-space"),m=(0,n.up)("q-btn"),g=(0,n.up)("q-card-section"),h=(0,n.up)("q-separator"),S=(0,n.up)("q-img"),y=(0,n.up)("q-card"),w=(0,n.up)("q-dialog"),k=(0,n.up)("q-icon"),f=(0,n.up)("q-input"),b=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.iD)("div",Y,[(0,n.Wm)(w,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(y,{class:"project-dialog"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{class:"row items-center q-pb-none title-section-card"},{default:(0,n.w5)((()=>[(0,n._)("div",R,(0,s.zw)(p.value.title),1),(0,n.Wm)(c),(0,n._)("div",$,[(0,n.wy)((0,n.Wm)(m,{icon:"close",flat:"",round:"",dense:""},null,512),[[b]])])])),_:1}),(0,n.Wm)(g,{class:"q-pb-none q-pt-none skills"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(p.value.skills,(e=>((0,n.wg)(),(0,n.iD)("p",{key:e},(0,s.zw)(e),1)))),128))])),_:1}),(0,n.Wm)(h),(0,n.Wm)(g,{style:{height:"100%"},class:"scroll"},{default:(0,n.w5)((()=>[(0,n.Wm)(S,{style:{width:"100%"},loading:"lazy",src:`${p.value.img}`,alt:`${p.value.img}`},null,8,["src","alt"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,n._)("div",K,[O,(0,n._)("div",G,[(0,n.Wm)(f,{placeholder:"Search","label-color":"white",clearable:"","clear-icon":"close",color:"white",dense:"",modelValue:i.value,"onUpdate:modelValue":[t[1]||(t[1]=e=>i.value=e),t[2]||(t[2]=e=>v(e))],flat:"",type:"search"},{prepend:(0,n.w5)((()=>[(0,n.Wm)(k,{color:"white",name:"search"})])),_:1},8,["modelValue"])])]),(0,n._)("div",X,[(0,n.wy)((0,n._)("h3",null,"No results",512),[[Z.F8,l.value]]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(u.value,(({img:e,title:t,skills:i,id:l,link:a})=>((0,n.wg)(),(0,n.j4)((0,o.SU)(E),{key:t,id:l,img:e,title:t,skills:i,"is-search":r.value,link:a,onOpenModal:d},null,8,["id","img","title","skills","is-search","link"])))),128))])])}}};var te=i(7657),ie=i(3190),ne=i(136),oe=i(926),le=i(7882),ae=i(8149),se=i(2146);const re=ee,ce=re;m()(ee,"components",{QDialog:te.Z,QCard:B.Z,QCardSection:ie.Z,QSpace:ne.Z,QBtn:c.Z,QSeparator:oe.Z,QImg:f.Z,QInput:le.Z,QIcon:P.Z,QField:ae.Z}),m()(ee,"directives",{ClosePopup:se.Z});const ue={__name:"BaseInput",props:{label:String,type:String,value:String},emits:["handle-input"],setup(e,{emit:t}){const i=t,l=e,a=(0,o.iH)("");function r(e){i("handle-input",{key:l.label,value:e})}return(0,n.YP)((()=>l.value),(e=>{a.value=e}),{immediate:!0}),(t,i)=>{const o=(0,n.up)("q-input");return(0,n.wg)(),(0,n.j4)(o,{class:"base-input",modelValue:a.value,"onUpdate:modelValue":[i[0]||(i[0]=e=>a.value=e),i[1]||(i[1]=e=>r(e))],"lazy-rules":"ondemand",type:e.type,"label-color":"grey",rows:"4",style:(0,s.j5)("textarea"===e.type&&"min-height: 70px;"),rules:[e=>!!e||"Field is required"],label:e.label},null,8,["modelValue","type","style","rules","label"])}}},me=ue,pe=me;m()(ue,"components",{QInput:le.Z,QField:ae.Z});var de=i(9302);const ge={id:"contact-section",class:"contact-section"},ve={class:"contact-section-anim container main-max-width main-padding animation-section"},he=(0,n._)("div",{class:"info"},[(0,n._)("h2",null,"Contact"),(0,n._)("p",null,"I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.")],-1),Se={__name:"ContactSection",setup(e){const{state:t,dispatch:i}=(0,g.oR)(),l=(0,de.Z)(),a=(0,n.Fl)((()=>t.data.isFetching)),s=(0,n.Fl)((()=>t.data.reqStatus)),r=(0,n.Fl)((()=>t.data.reqMessage));let c=(0,o.iH)({name:"",email:"",message:""});const u=(0,o.iH)([{key:"name",type:"text"},{key:"email",type:"email"},{key:"message",type:"textarea"}]);function m({key:e,value:t}){c.value[e]=t}function p(){i("send_mmessage",{name:c.value.name,email:c.value.email,message:c.value.message})}return(0,n.YP)((()=>s.value),(e=>{const t={position:"top",icon:"error",color:"negative",message:r.value},i={position:"top",icon:"success",color:"positive",message:r.value};"success"===e&&(l.notify(i),c.value={name:"",email:"",message:""}),"error"===e&&l.notify(t)}),{immediate:!0}),(e,t)=>{const i=(0,n.up)("q-form");return(0,n.wg)(),(0,n.iD)("div",ge,[(0,n._)("div",ve,[he,(0,n.Wm)(i,{onSubmit:(0,Z.iM)(p,["prevent"])},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(u.value,(({key:e,type:t})=>((0,n.wg)(),(0,n.j4)((0,o.SU)(pe),{value:(0,o.SU)(c)[e],key:e,label:e,type:t,onHandleInput:m},null,8,["value","label","type"])))),128)),(0,n.Wm)((0,o.SU)(d),{loading:a.value,name:"Send Message",type:"submit"},null,8,["loading"])])),_:1})])])}}};var ye=i(8326);const we=Se,ke=we;m()(Se,"components",{QForm:ye.Z});const fe={class:"start-project-card"},be={class:"container"},_e=(0,n._)("h4",null,"Start a project",-1),Ce=(0,n._)("p",null,"Interested in working together ? Let's schedule a call and turn your idea into a successful product.",-1),je={__name:"StartProjectCard",setup(e){function t(){const e=document.getElementById("contact-section");e.scrollIntoView({behavior:"instant"})}return(e,i)=>((0,n.wg)(),(0,n.iD)("div",fe,[(0,n._)("div",be,[_e,Ce,(0,n.Wm)((0,o.SU)(d),{name:"Send me a message",onHandleButton:t})])]))}},He=je,xe=He,We={__name:"ServicesCard",props:{title:String,description:String,hoverColor:String},setup(e){function t(e){return{"--color-hover":e}}return(i,o)=>((0,n.wg)(),(0,n.iD)("section",{class:"services-card animation-section",style:(0,s.j5)(t(e.hoverColor))},[(0,n._)("h4",null,(0,s.zw)(e.title),1),(0,n._)("p",null,(0,s.zw)(e.description),1)],4))}},qe=We,Ie=qe,Qe={class:"our-services-section"},Me=(0,n._)("h2",null,"Services",-1),De={class:"our-services-list"},Ze={__name:"OurServicesSection",setup(e){const t=(0,o.iH)([{title:"Responsive Web Design",description:"Ensure your website looks great and functions seamlessly on all devices, from desktops to smartphones.",hoverColor:"#bf6fff"},{title:"Front-end Development",description:"Implement robust and efficient front-end solutions using cutting-edge technologies such as HTML5, CSS3, JavaScript, Vue js, Quasar js and Nuxt js.",hoverColor:"#bf9648"},{title:"Web Performance Optimization",description:"Enhance website speed and performance to provide users with a smooth and responsive browsing experience.",hoverColor:"#766fff"},{title:"API Integration",description:"Integrate third-party APIs seamlessly to enhance the functionality and features of your website.",hoverColor:"#48bf68"},{title:"Collaboration with Back-End Developers:",description:"Work closely with back-end developers to integrate front-end and back-end functionalities seamlessly.",hoverColor:"#abb500"},{title:"Cross-Browser Compatibility",description:"Guarantee consistent performance and appearance across various web browsers for a broader user reach.",hoverColor:"#48a2bf"}]);return(e,i)=>((0,n.wg)(),(0,n.iD)("div",Qe,[Me,(0,n._)("div",De,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.value,(({title:e,description:t,hoverColor:i},l)=>((0,n.wg)(),(0,n.j4)((0,o.SU)(Ie),{key:l,title:e,description:t,"hover-color":i},null,8,["title","description","hover-color"])))),128))])]))}},Le=Ze,Te=Le;var Ue=i(388),Fe=i(345);const Ve=(0,n._)("hr",{class:"anim-hr"},null,-1),ze=(0,n._)("hr",{class:"anim-hr",id:"hr",style:{margin:"0"}},null,-1),Be={__name:"MainPage",setup(e){const{state:t}=(0,g.oR)();let i,l;const a=["nav","our-services-section","skills-section","start-project-card","projects-section","contact-section-anim"],s=[{sectionName:"hi"},{sectionName:"name",delay:.6},{sectionName:"role",delay:.8},{sectionName:"desc",delay:1},{sectionName:"button-hero",delay:1.6},{sectionName:"image-hero",delay:.6}],r=(0,n.Fl)((()=>t.data.mainImageLoaded));function c(){l.forEach((e=>{Ue.p8.to(e,{scrollTrigger:{trigger:e,toggleActions:"play none none none"},opacity:1,duration:1})})),s.forEach((({sectionName:e,delay:t})=>{Ue.p8.to(`.${e}`,{scrollTrigger:{trigger:`.${e}`,toggleActions:"play none none none"},x:0,y:0,opacity:1,duration:1.1,scale:1,delay:t})})),i.forEach((e=>{const t="services-card animation-section"===e.className?"-100px 100%":"-150px 100%";Ue.p8.to(e,{scrollTrigger:{trigger:e,toggleActions:"play none none none",start:t,end:"bottom 100%"},opacity:1,duration:1})})),a.forEach((e=>{Ue.p8.to(`.${e}`,{scrollTrigger:{trigger:`.${e}`,toggleActions:"play none none none"},opacity:1,duration:1})}))}return(0,n.bv)((()=>{Ue.p8.registerPlugin(Fe.i),i=document.querySelectorAll("section"),l=document.querySelectorAll("hr")})),(0,n.YP)((()=>r.value),(e=>{e&&c()}),{deep:!0}),(e,t)=>{const i=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(i,{class:"flex main-page column main-distance"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(_),{class:"main-padding main-max-width"}),Ve,(0,n.Wm)((0,o.SU)(Te),{class:"main-padding main-max-width our-services-section animation-section"}),(0,n.Wm)((0,o.SU)(D),{class:"main-padding main-max-width animation-section"}),(0,n.Wm)((0,o.SU)(xe),{class:"main-padding main-max-width animation-section"}),ze,(0,n.Wm)((0,o.SU)(ce),{class:"main-padding main-max-width animation-section"}),(0,n.Wm)((0,o.SU)(ke))])),_:1})}}};var Pe=i(9885);const Ne=Be,Je=Ne;m()(Be,"components",{QPage:Pe.Z})},2162:(e,t,i)=>{e.exports=i.p+"img/cm-main-image.c2122e2b.png"}}]);