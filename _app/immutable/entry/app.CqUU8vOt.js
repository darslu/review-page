const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.GTqASCGk.js","../chunks/disclose-version.Ngrio3uf.js","../chunks/runtime.B8yr7RlE.js","../chunks/i18n.CZaEzRqS.js","../chunks/entry.DbRU6N9E.js","../chunks/index.DfydkkRW.js","../chunks/utils.B9icjhNj.js","../chunks/stores.DK9YZrBL.js","../chunks/render.CibR8zfC.js","../chunks/if.CN7rCe4z.js","../chunks/bundle-mjs.DJ-AVjIe.js","../chunks/lifecycle.DFGkAeJ4.js","../chunks/props.EjNDRUzf.js","../chunks/store.B1g6_enR.js","../chunks/attributes.BinqIs3c.js","../chunks/Frame.D8kswh0M.js","../chunks/index-client.B4tOOGG-.js","../assets/0.6k95PsVb.css","../nodes/1.2k3O70su.js","../nodes/2.CloH8-zP.js","../chunks/TestingFeatures.BENsCVQn.js","../chunks/Avatar.B4s3qf1Q.js","../assets/TestingFeatures.BpoHteS1.css","../nodes/3.CjsbPck1.js","../assets/3.C5EU-uZF.css","../nodes/4.Cg2u6MLM.js","../assets/4.DbkomTKF.css","../nodes/5.BrFns2tY.js","../nodes/6.CloH8-zP.js"])))=>i.map(i=>d[i]);
var F=n=>{throw TypeError(n)};var q=(n,t,r)=>t.has(n)||F("Cannot "+r);var l=(n,t,r)=>(q(n,t,"read from private field"),r?r.call(n):t.get(n)),T=(n,t,r)=>t.has(n)?F("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,r),p=(n,t,r,o)=>(q(n,t,"write to private field"),o?o.call(n,r):t.set(n,r),r);import{i as J}from"../chunks/i18n.CZaEzRqS.js";import{l as U,o as K,h as Q,E as X,j as Y,w as Z,k as M,g as v,d as x,aC as $,ak as tt,m as et,p as rt,x as st,y as nt,f as w,s as ot,a as at,aD as it,c as ct,t as lt,r as ut,aE as O,F as C}from"../chunks/runtime.B8yr7RlE.js";import{h as mt,m as dt,u as ft,s as _t}from"../chunks/render.CibR8zfC.js";import{c as D,a as R,t as W,d as ht}from"../chunks/disclose-version.Ngrio3uf.js";import{i as S}from"../chunks/if.CN7rCe4z.js";import{p as I,a as vt}from"../chunks/props.EjNDRUzf.js";import{o as gt,b as V}from"../chunks/index-client.B4tOOGG-.js";function j(n,t,r){U&&K();var o=n,a,c;Q(()=>{a!==(a=t())&&(c&&(M(c),c=null),a&&(c=Y(()=>r(o,a))))},X),U&&(o=Z)}function yt(n){return class extends Et{constructor(t){super({component:n,...t})}}}var g,m;class Et{constructor(t){T(this,g);T(this,m);var c;var r=new Map,o=(s,e)=>{var d=et(e);return r.set(s,d),d};const a=new Proxy({...t.props||{},$$events:{}},{get(s,e){return v(r.get(e)??o(e,Reflect.get(s,e)))},has(s,e){return v(r.get(e)??o(e,Reflect.get(s,e))),Reflect.has(s,e)},set(s,e,d){return x(r.get(e)??o(e,d),d),Reflect.set(s,e,d)}});p(this,m,(t.hydrate?mt:dt)(t.component,{target:t.target,props:a,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((c=t==null?void 0:t.props)!=null&&c.$$host)||t.sync===!1)&&$(),p(this,g,a.$$events);for(const s of Object.keys(l(this,m)))s==="$set"||s==="$destroy"||s==="$on"||tt(this,s,{get(){return l(this,m)[s]},set(e){l(this,m)[s]=e},enumerable:!0});l(this,m).$set=s=>{Object.assign(a,s)},l(this,m).$destroy=()=>{ft(l(this,m))}}$set(t){l(this,m).$set(t)}$on(t,r){l(this,g)[t]=l(this,g)[t]||[];const o=(...a)=>r.call(this,...a);return l(this,g)[t].push(o),()=>{l(this,g)[t]=l(this,g)[t].filter(a=>a!==o)}}$destroy(){l(this,m).$destroy()}}g=new WeakMap,m=new WeakMap;const bt="modulepreload",Pt=function(n,t){return new URL(n,t).href},N={},b=function(t,r,o){let a=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),d=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));a=Promise.allSettled(r.map(u=>{if(u=Pt(u,o),u in N)return;N[u]=!0;const y=u.endsWith(".css"),A=y?'[rel="stylesheet"]':"";if(!!o)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===u&&(!y||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${A}`))return;const i=document.createElement("link");if(i.rel=y?"stylesheet":bt,y||(i.as="script"),i.crossOrigin="",i.href=u,d&&i.setAttribute("nonce",d),document.head.appendChild(i),y)return new Promise((f,h)=>{i.addEventListener("load",f),i.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${u}`)))})}))}function c(s){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=s,window.dispatchEvent(e),!e.defaultPrevented)throw s}return a.then(s=>{for(const e of s||[])e.status==="rejected"&&c(e.reason);return t().catch(c)})},Rt=J.reroute(),Vt={};var kt=W('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),wt=W("<!> <!>",1);function xt(n,t){rt(t,!0);let r=I(t,"components",23,()=>[]),o=I(t,"data_0",3,null),a=I(t,"data_1",3,null);st(()=>t.stores.page.set(t.page)),nt(()=>{t.stores,t.page,t.constructors,r(),t.form,o(),a(),t.stores.page.notify()});let c=O(!1),s=O(!1),e=O(null);gt(()=>{const E=t.stores.page.subscribe(()=>{v(c)&&(x(s,!0),it().then(()=>{x(e,vt(document.title||"untitled page"))}))});return x(c,!0),E});const d=C(()=>t.constructors[1]);var u=wt(),y=w(u);S(y,()=>t.constructors[1],E=>{var i=D();const f=C(()=>t.constructors[0]);var h=w(i);j(h,()=>v(f),(P,L)=>{V(L(P,{get data(){return o()},get form(){return t.form},children:(_,At)=>{var B=D(),z=w(B);j(z,()=>v(d),(G,H)=>{V(H(G,{get data(){return a()},get form(){return t.form}}),k=>r()[1]=k,()=>{var k;return(k=r())==null?void 0:k[1]})}),R(_,B)},$$slots:{default:!0}}),_=>r()[0]=_,()=>{var _;return(_=r())==null?void 0:_[0]})}),R(E,i)},E=>{var i=D();const f=C(()=>t.constructors[0]);var h=w(i);j(h,()=>v(f),(P,L)=>{V(L(P,{get data(){return o()},get form(){return t.form}}),_=>r()[0]=_,()=>{var _;return(_=r())==null?void 0:_[0]})}),R(E,i)});var A=ot(y,2);S(A,()=>v(c),E=>{var i=kt(),f=ct(i);S(f,()=>v(s),h=>{var P=ht();lt(()=>_t(P,v(e))),R(h,P)}),ut(i),R(E,i)}),R(n,u),at()}const jt=yt(xt),Bt=[()=>b(()=>import("../nodes/0.GTqASCGk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]),import.meta.url),()=>b(()=>import("../nodes/1.2k3O70su.js"),__vite__mapDeps([18,1,2,8,11,13,6,7,4,5]),import.meta.url),()=>b(()=>import("../nodes/2.CloH8-zP.js"),__vite__mapDeps([19,1,2,20,10,8,11,12,13,6,9,14,21,15,16,5,22]),import.meta.url),()=>b(()=>import("../nodes/3.CjsbPck1.js"),__vite__mapDeps([23,1,2,10,8,21,9,14,11,12,13,6,24]),import.meta.url),()=>b(()=>import("../nodes/4.Cg2u6MLM.js"),__vite__mapDeps([25,1,2,8,9,14,11,5,6,26]),import.meta.url),()=>b(()=>import("../nodes/5.BrFns2tY.js"),__vite__mapDeps([27,1,2]),import.meta.url),()=>b(()=>import("../nodes/6.CloH8-zP.js"),__vite__mapDeps([28,1,2,20,10,8,11,12,13,6,9,14,21,15,16,5,22]),import.meta.url)],Ft=[],qt={"/":[2],"/about":[3],"/contact":[4],"/disclaimer":[5],"/the-best-mens-boxer-briefs-money-can-buy-2025":[6]},Ut={handleError:({error:n})=>{console.error(n)},reroute:Rt||(()=>{})};export{qt as dictionary,Ut as hooks,Vt as matchers,Bt as nodes,jt as root,Ft as server_loads};