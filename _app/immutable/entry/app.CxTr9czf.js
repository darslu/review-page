const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.CBlkb5wM.js","../chunks/legacy.BKtvFfwk.js","../chunks/runtime.CAQaYCc3.js","../chunks/i18n.C0WyofPo.js","../chunks/entry.BdC_bqoE.js","../chunks/index.CO1Q27f-.js","../chunks/index-client.DgjFkw8c.js","../chunks/render.Eb9ZH_O9.js","../chunks/if.DCIrtqk8.js","../chunks/bundle-mjs.Bfn3NTub.js","../chunks/lifecycle.CWq_QhHN.js","../chunks/props.CsUJYzN7.js","../chunks/Frame.BpMVq55e.js","../chunks/attributes.DDKjeBUs.js","../chunks/this.DLmH6BIA.js","../assets/0.B0rCx4ER.css","../nodes/1.CTrYOzaV.js","../nodes/2.D5D5AZY5.js","../chunks/TestingFeatures.DaRsxP9q.js","../chunks/Avatar.DwNCBG89.js","../assets/TestingFeatures.BpoHteS1.css","../nodes/3.BcgK36Tu.js","../assets/3.C5EU-uZF.css","../nodes/4.BYsj8DL3.js","../assets/4.DbkomTKF.css","../nodes/5.D_LFbfTD.js","../nodes/6.Sf3SKpnD.js","../nodes/7.CtJ70YYo.js","../nodes/8.D5D5AZY5.js"])))=>i.map(i=>d[i]);
var U=r=>{throw TypeError(r)};var J=(r,e,s)=>e.has(r)||U("Cannot "+s);var u=(r,e,s)=>(J(r,e,"read from private field"),s?s.call(r):e.get(r)),T=(r,e,s)=>e.has(r)?U("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,s),D=(r,e,s,a)=>(J(r,e,"write to private field"),a?a.call(r,s):e.set(r,s),s);import{i as H}from"../chunks/i18n.C0WyofPo.js";import{j as K,k as Q,h as X,E as M,t as $,w as ee,v as te,A as g,a6 as re,G as L,aB as se,$ as ne,Z as ae,D as oe,x as ie,g as ce,aC as ue,f as x,s as le,K as fe,aD as C,c as de,r as me,J as _e,C as I}from"../chunks/runtime.CAQaYCc3.js";import{h as he,m as ve,u as ge,s as ye}from"../chunks/render.Eb9ZH_O9.js";import{a as p,t as W,c as S,e as Ee}from"../chunks/legacy.BKtvFfwk.js";import{i as V}from"../chunks/if.DCIrtqk8.js";import{p as j,a as be}from"../chunks/props.CsUJYzN7.js";import{b as B}from"../chunks/this.DLmH6BIA.js";import{o as Pe}from"../chunks/index-client.DgjFkw8c.js";function q(r,e,s){K&&Q();var a=r,o,c;X(()=>{o!==(o=e())&&(c&&(te(c),c=null),o&&(c=$(()=>s(a,o))))},M),K&&(a=ee)}function Re(r){return class extends pe{constructor(e){super({component:r,...e})}}}var y,f;class pe{constructor(e){T(this,y);T(this,f);var c;var s=new Map,a=(n,t)=>{var d=ae(t);return s.set(n,d),d};const o=new Proxy({...e.props||{},$$events:{}},{get(n,t){return g(s.get(t)??a(t,Reflect.get(n,t)))},has(n,t){return t===re?!0:(g(s.get(t)??a(t,Reflect.get(n,t))),Reflect.has(n,t))},set(n,t,d){return L(s.get(t)??a(t,d),d),Reflect.set(n,t,d)}});D(this,f,(e.hydrate?he:ve)(e.component,{target:e.target,anchor:e.anchor,props:o,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((c=e==null?void 0:e.props)!=null&&c.$$host)||e.sync===!1)&&se(),D(this,y,o.$$events);for(const n of Object.keys(u(this,f)))n==="$set"||n==="$destroy"||n==="$on"||ne(this,n,{get(){return u(this,f)[n]},set(t){u(this,f)[n]=t},enumerable:!0});u(this,f).$set=n=>{Object.assign(o,n)},u(this,f).$destroy=()=>{ge(u(this,f))}}$set(e){u(this,f).$set(e)}$on(e,s){u(this,y)[e]=u(this,y)[e]||[];const a=(...o)=>s.call(this,...o);return u(this,y)[e].push(a),()=>{u(this,y)[e]=u(this,y)[e].filter(o=>o!==a)}}$destroy(){u(this,f).$destroy()}}y=new WeakMap,f=new WeakMap;const Ae="modulepreload",Oe=function(r,e){return new URL(r,e).href},N={},v=function(e,s,a){let o=Promise.resolve();if(s&&s.length>0){const n=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),d=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));o=Promise.allSettled(s.map(l=>{if(l=Oe(l,a),l in N)return;N[l]=!0;const E=l.endsWith(".css"),k=E?'[rel="stylesheet"]':"";if(!!a)for(let b=n.length-1;b>=0;b--){const i=n[b];if(i.href===l&&(!E||i.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${k}`))return;const _=document.createElement("link");if(_.rel=E?"stylesheet":Ae,E||(_.as="script"),_.crossOrigin="",_.href=l,d&&_.setAttribute("nonce",d),document.head.appendChild(_),E)return new Promise((b,i)=>{_.addEventListener("load",b),_.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${l}`)))})}))}function c(n){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=n,window.dispatchEvent(t),!t.defaultPrevented)throw n}return o.then(n=>{for(const t of n||[])t.status==="rejected"&&c(t.reason);return e().catch(c)})},we=H.reroute(),Je={};var xe=W('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Le=W("<!> <!>",1);function ke(r,e){oe(e,!0);let s=j(e,"components",23,()=>[]),a=j(e,"data_0",3,null),o=j(e,"data_1",3,null);ie(()=>e.stores.page.set(e.page)),ce(()=>{e.stores,e.page,e.constructors,s(),e.form,a(),o(),e.stores.page.notify()});let c=C(!1),n=C(!1),t=C(null);Pe(()=>{const i=e.stores.page.subscribe(()=>{g(c)&&(L(n,!0),ue().then(()=>{L(t,be(document.title||"untitled page"))}))});return L(c,!0),i});const d=I(()=>e.constructors[1]);var l=Le(),E=x(l);{var k=i=>{var h=S();const A=I(()=>e.constructors[0]);var O=x(h);q(O,()=>g(A),(P,R)=>{B(R(P,{get data(){return a()},get form(){return e.form},children:(m,Ce)=>{var G=S(),Y=x(G);q(Y,()=>g(d),(Z,z)=>{B(z(Z,{get data(){return o()},get form(){return e.form}}),w=>s()[1]=w,()=>{var w;return(w=s())==null?void 0:w[1]})}),p(m,G)},$$slots:{default:!0}}),m=>s()[0]=m,()=>{var m;return(m=s())==null?void 0:m[0]})}),p(i,h)},F=i=>{var h=S();const A=I(()=>e.constructors[0]);var O=x(h);q(O,()=>g(A),(P,R)=>{B(R(P,{get data(){return a()},get form(){return e.form}}),m=>s()[0]=m,()=>{var m;return(m=s())==null?void 0:m[0]})}),p(i,h)};V(E,i=>{e.constructors[1]?i(k):i(F,!1)})}var _=le(E,2);{var b=i=>{var h=xe(),A=de(h);{var O=P=>{var R=Ee();_e(()=>ye(R,g(t))),p(P,R)};V(A,P=>{g(n)&&P(O)})}me(h),p(i,h)};V(_,i=>{g(c)&&i(b)})}p(r,l),fe()}const Ke=Re(ke),Ne=[()=>v(()=>import("../nodes/0.CBlkb5wM.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url),()=>v(()=>import("../nodes/1.CTrYOzaV.js"),__vite__mapDeps([16,1,2,7,10,4,5,6]),import.meta.url),()=>v(()=>import("../nodes/2.D5D5AZY5.js"),__vite__mapDeps([17,1,2,18,9,7,13,10,11,5,8,19,12,14,6,20]),import.meta.url),()=>v(()=>import("../nodes/3.BcgK36Tu.js"),__vite__mapDeps([21,1,2,9,7,19,8,13,10,11,5,22]),import.meta.url),()=>v(()=>import("../nodes/4.BYsj8DL3.js"),__vite__mapDeps([23,1,2,7,8,13,10,5,24]),import.meta.url),()=>v(()=>import("../nodes/5.D_LFbfTD.js"),__vite__mapDeps([25,1,2]),import.meta.url),()=>v(()=>import("../nodes/6.Sf3SKpnD.js"),__vite__mapDeps([26,1,2]),import.meta.url),()=>v(()=>import("../nodes/7.CtJ70YYo.js"),__vite__mapDeps([27,1,2]),import.meta.url),()=>v(()=>import("../nodes/8.D5D5AZY5.js"),__vite__mapDeps([28,1,2,18,9,7,13,10,11,5,8,19,12,14,6,20]),import.meta.url)],We=[],Ye={"/":[2],"/about":[3],"/contact":[4],"/disclaimer":[5],"/privacy-policy":[6],"/terms-and-conditions":[7],"/the-best-mens-boxer-briefs-money-can-buy-2025":[8]},Te={handleError:({error:r})=>{console.error(r)},reroute:we||(()=>{}),transport:{}},De=Object.fromEntries(Object.entries(Te.transport).map(([r,e])=>[r,e.decode])),Ze=!1,ze=(r,e)=>De[r](e);export{ze as decode,De as decoders,Ye as dictionary,Ze as hash,Te as hooks,Je as matchers,Ne as nodes,Ke as root,We as server_loads};
