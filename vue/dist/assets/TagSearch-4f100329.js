import{ax as N,aw as V,cc as D,b$ as E,d as U,V as q,aW as G,a$ as L,r as B,A as I,aa as M,p as P,K as l,L as p,$ as b,x as y,T as f,c as j,O as m,a2 as z,W as x,N as A,Y as k,U as w,Z as $,a4 as W,cg as K,a8 as Q}from"./index-7b355f46.js";/* empty css              */import{a as C,u as Y}from"./db-a0f7d9d4.js";import{b as Z}from"./_baseIteratee-2c7ebf4e.js";import{B as H}from"./button-dad47e51.js";function J(s,n,a,r){for(var e=-1,t=s==null?0:s.length;++e<t;){var i=s[e];n(r,i,a(i),s)}return r}function R(s){return function(n,a,r){for(var e=-1,t=Object(n),i=r(n),g=i.length;g--;){var h=i[s?g:++e];if(a(t[h],h,t)===!1)break}return n}}var X=R();const ee=X;function ae(s,n){return s&&ee(s,n,N)}function te(s,n){return function(a,r){if(a==null)return a;if(!V(a))return s(a,r);for(var e=a.length,t=n?e:-1,i=Object(a);(n?t--:++t<e)&&r(i[t],t,i)!==!1;);return a}}var se=te(ae);const ne=se;function re(s,n,a,r){return ne(s,function(e,t,i){n(r,e,a(e),i)}),r}function oe(s,n){return function(a,r){var e=D(a)?J:re,t=n?n():{};return e(a,s,Z(r),t)}}var ie=Object.prototype,ce=ie.hasOwnProperty,le=oe(function(s,n,a){ce.call(s,a)?s[a].push(n):E(s,a,[n])});const ue=le,de={class:"container"},pe={class:"search-bar"},ge={class:"list-container"},he={class:"cat-name"},ve=["onClick"],fe=U({__name:"TagSearch",props:{tabIdx:null,paneIdx:null},setup(s){const n=s,a=q(),r=G(new L(-1,0,-1,"throw")),e=B(),t=B(new Set),i=I(()=>e.value?e.value.tags.slice().sort((o,c)=>c.count-o.count):[]),g=["Model","Sampler","lora","pos","size"].reduce((o,c,v)=>(o[c]=v,o),{}),h=I(()=>Object.entries(ue(i.value,o=>o.type)).sort((o,c)=>g[o[0]]-g[c[0]])),O=M();P(async()=>{e.value=await C(),e.value.img_count&&e.value.expired&&S()});const S=async()=>{r.pushAction(async()=>{await Y(),e.value=await C()})},T=()=>{a.openTagSearchMatchedImageGridInRight(n.tabIdx,O,Array.from(t.value))},_=(o,c=!1)=>(c?`[${o.type}] `:"")+(o.display_name?`${o.display_name} : ${o.name}`:o.name);return(o,c)=>{const v=H;return l(),p("div",de,[b("",!0),e.value?(l(),p(y,{key:1},[f("div",null,[f("div",pe,[j(m(z),{conv:{value:u=>u.id,text:_,optionText:u=>_(u,!0)},mode:"multiple",style:{width:"100%"},options:m(i),value:Array.from(t.value),placeholder:"Select tags to match images","onUpdate:value":c[0]||(c[0]=u=>t.value=new Set(u))},null,8,["conv","options","value"]),e.value.expired||!e.value.img_count?(l(),x(v,{key:0,onClick:S,loading:!r.isIdle,type:"primary"},{default:A(()=>[k(w(e.value.img_count===0?"Generate index for search image":"Update index"),1)]),_:1},8,["loading"])):(l(),x(v,{key:1,type:"primary",onClick:T,loading:!r.isIdle,disabled:!t.value.size},{default:A(()=>[k("Search ")]),_:1},8,["loading","disabled"]))])]),f("div",ge,[(l(!0),p(y,null,$(m(h),([u,F])=>(l(),p("ul",{class:"tag-list",key:u},[f("h3",he,w(o.$t(u)),1),(l(!0),p(y,null,$(F,d=>(l(),p("li",{key:d.id,class:W(["tag",{selected:t.value.has(d.id)}]),onClick:me=>t.value.has(d.id)?t.value.delete(d.id):t.value.add(d.id)},[t.value.has(d.id)?(l(),x(m(K),{key:0})):b("",!0),k(" "+w(_(d)),1)],10,ve))),128))]))),128))])],64)):b("",!0)])}}});const we=Q(fe,[["__scopeId","data-v-bc20e7bb"]]);export{we as default};