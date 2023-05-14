import{c as y,R as L,d as x,v as B,T as w,U as q,o,l,q as s,t as r,J as h,n as d,z as k,s as v,C as g,m as F,B as M,V as D,W as N,X as V,Y as j,Z as H,Q as P}from"./index-ce048bd1.js";import{B as R}from"./button-dfda9e18.js";var E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-23.1-31.9a7.92 7.92 0 00-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"file-done",theme:"outlined"};const T=E;function I(a){for(var c=1;c<arguments.length;c++){var t=arguments[c]!=null?Object(arguments[c]):{},i=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable}))),i.forEach(function(u){W(a,u,t[u])})}return a}function W(a,c,t){return c in a?Object.defineProperty(a,c,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[c]=t,a}var C=function(c,t){var i=I({},c,t.attrs);return y(L,I({},i,{icon:T}),null)};C.displayName="FileDoneOutlined";C.inheritAttrs=!1;const A=C,Q=a=>(j("data-v-444ec931"),a=a(),H(),a),G={class:"container"},J={class:"header"},U=Q(()=>s("div",{"flex-placeholder":""},null,-1)),X={class:"last-record"},Y=["onClick"],Z={href:"https://github.com/zanllp/sd-webui-infinite-image-browsing/issues/90",target:"_blank",class:"last-record",style:{color:"unset"}},K={class:"content"},ee={key:0,class:"quick-start"},te={key:1,class:"quick-start"},se=["onClick"],ne={class:"quick-start__text line-clamp-1"},ae={class:"quick-start"},oe=["onClick"],le={class:"quick-start__text line-clamp-1"},ce={key:2,class:"quick-start"},re=["onClick"],ie={class:"quick-start__text line-clamp-1"},ue=x({__name:"emptyStartup",props:{tabIdx:null,paneIdx:null},setup(a){const c=a,t=B(),i={local:w("local"),"tag-search":w("imgSearch"),"global-setting":w("globalSettings")},u=(e,_,f=!1)=>{let p;switch(e){case"tag-search-matched-image-grid":return;case"global-setting":case"tag-search":case"empty":p={type:e,name:i[e],key:Date.now()+D()};break;case"local":p={type:e,name:i[e],key:Date.now()+D(),path:_,walkMode:f}}const n=t.tabList[c.tabIdx];n.panes.splice(c.paneIdx,1,p),n.key=p.key},m=q(()=>{var e;return(e=t.lastTabListRecord)==null?void 0:e[1]});console.log(m.value);const O=q(()=>t.autoCompletedDirList.filter(({key:e})=>e==="outdir_txt2img_samples"||e==="outdir_img2img_samples")),S=window.parent!==window,$=()=>window.parent.open("/infinite_image_browsing"),z=()=>{N(m.value),t.tabList=m.value.tabs.map(e=>V(e,!0)),t.tabList.forEach(e=>{e.panes.forEach(_=>{typeof _.name!="string"&&(_.name="")})})};return(e,_)=>{var p;const f=R;return o(),l("div",G,[s("div",J,[s("h1",null,r(e.$t("welcome")),1),U,S?(o(),l("div",{key:0,class:"last-record",onClick:$},[s("a",null,r(e.$t("openInNewWindow")),1)])):h("",!0),s("div",X,[(p=d(m))!=null&&p.tabs.length?(o(),l("a",{key:0,onClick:k(z,["prevent"])},r(e.$t("restoreLastRecord")),9,Y)):h("",!0)]),s("a",Z,r(e.$t("faq")),1)]),s("div",K,[d(O).length?(o(),l("div",ee,[s("h2",null,r(e.$t("walkMode")),1),s("ul",null,[(o(!0),l(v,null,g(d(O),n=>(o(),l("li",{key:n.dir,class:"quick-start__item"},[y(f,{onClick:b=>u("local",n.dir,!0),ghost:"",type:"primary",block:""},{default:F(()=>[M(r(n.zh),1)]),_:2},1032,["onClick"])]))),128))])])):h("",!0),d(t).autoCompletedDirList.length?(o(),l("div",te,[s("h2",null,r(e.$t("launchFromQuickMove")),1),s("ul",null,[(o(!0),l(v,null,g(d(t).autoCompletedDirList,n=>(o(),l("li",{key:n.key,class:"quick-start__item",onClick:k(b=>u("local",n.dir),["prevent"])},[s("span",ne,r(n.zh),1)],8,se))),128))])])):h("",!0),s("div",ae,[s("h2",null,r(e.$t("launch")),1),s("ul",null,[(o(!0),l(v,null,g(Object.keys(i),n=>(o(),l("li",{key:n,class:"quick-start__item",onClick:k(b=>u(n),["prevent"])},[s("span",le,r(i[n]),1)],8,oe))),128))])]),d(t).recent.length?(o(),l("div",ce,[s("h2",null,r(e.$t("recent")),1),s("ul",null,[(o(!0),l(v,null,g(d(t).recent,n=>(o(),l("li",{key:n.key,class:"quick-start__item",onClick:k(b=>u("local",n.path),["prevent"])},[y(d(A),{class:"quick-start__icon"}),s("span",ie,r(n.path),1)],8,re))),128))])])):h("",!0)])])}}});const _e=P(ue,[["__scopeId","data-v-444ec931"]]);export{_e as default};