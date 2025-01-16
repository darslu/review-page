import{aM as ut}from"./runtime.D_2j1xa8.js";import{w as _e}from"./index.DnPAWlWz.js";new URL("sveltekit-internal://");function dt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function ht(e){return e.split("%25").map(decodeURI).join("%25")}function pt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function ue({href:e}){return e.split("#")[0]}const gt=["href","pathname","search","toString","toJSON"];function mt(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return i=>(t(i),a[o](i));n();const s=Reflect.get(a,o);return typeof s=="function"?s.bind(a):s}}),enumerable:!0,configurable:!0});for(const a of gt)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const yt="/__data.json",_t=".html__data.json";function wt(e){return e.endsWith(".html")?e.replace(/\.html$/,_t):e.replace(/\/$/,"")+yt}function vt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function bt(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const qe=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&q.delete(we(e)),qe(e,n));const q=new Map;function kt(e,n){const t=we(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const s=r.getAttribute("data-ttl");return s&&q.set(t,{body:a,init:o,ttl:1e3*Number(s)}),r.getAttribute("data-b64")!==null&&(a=bt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function At(e,n,t){if(q.size>0){const r=we(e,t),a=q.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);q.delete(r)}}return window.fetch(n,t)}function we(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${vt(...a)}"]`}return r}const Et=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function St(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${It(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const s=r.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return de(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return de(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=Et.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?f===1&&s[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return de(c)}).join("")}).join("")}/?$`),params:n}}function Rt(e){return!/^\([^)]+\)$/.test(e)}function It(e){return e.slice(1).split("/").filter(Rt)}function Ut(e,n,t){const r={},a=e.slice(1),o=a.filter(i=>i!==void 0);let s=0;for(let i=0;i<n.length;i+=1){const c=n[i];let f=a[i-s];if(c.chained&&c.rest&&s&&(f=a.slice(i-s,i+1).filter(d=>d).join("/"),s=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){r[c.name]=f;const d=n[i+1],h=a[i+1];d&&!d.rest&&d.optional&&h&&c.chained&&(s=0),!d&&!h&&Object.keys(r).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return r}function de(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Lt({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([i,[c,f,d]])=>{const{pattern:h,params:y}=St(i),u={id:i,exec:g=>{const l=h.exec(g);if(l)return Ut(l,y,r)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...f||[]].map(s),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(i){const c=i<0;return c&&(i=~i),[c,e[i]]}function s(i){return i===void 0?i:[a.has(i),e[i]]}}function Ge(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Te(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}var Ve;const L=((Ve=globalThis.__sveltekit_x4nqxn)==null?void 0:Ve.base)??"/darslu.github.io";var Be;const xt=((Be=globalThis.__sveltekit_x4nqxn)==null?void 0:Be.assets)??L,Tt="1734422282470",Me="sveltekit:snapshot",He="sveltekit:scroll",Ke="sveltekit:states",Pt="sveltekit:pageurl",j="sveltekit:history",M="sveltekit:navigation",J={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},W=location.origin;function We(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function ve(){return{x:pageXOffset,y:pageYOffset}}function N(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Pe={...J,"":J.hover};function Ye(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Je(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ye(e)}}function ge(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||re(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===W&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function z(e){let n=null,t=null,r=null,a=null,o=null,s=null,i=e;for(;i&&i!==document.documentElement;)r===null&&(r=N(i,"preload-code")),a===null&&(a=N(i,"preload-data")),n===null&&(n=N(i,"keepfocus")),t===null&&(t=N(i,"noscroll")),o===null&&(o=N(i,"reload")),s===null&&(s=N(i,"replacestate")),i=Ye(i);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Pe[r??"off"],preload_data:Pe[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(s)}}function Ce(e){const n=_e(e);let t=!0;function r(){t=!0,n.update(s=>s)}function a(s){t=!1,n.set(s)}function o(s){let i;return n.subscribe(c=>{(i===void 0||t&&c!==i)&&s(i=c)})}return{notify:r,set:a,subscribe:o}}function Ct(){const{set:e,subscribe:n}=_e(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${xt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const s=(await a.json()).version!==Tt;return s&&(e(!0),clearTimeout(t)),s}catch{return!1}}return{subscribe:n,check:r}}function re(e,n){return e.origin!==W||!e.pathname.startsWith(n)}function Ne(e){const n=Ot(e),t=new ArrayBuffer(n.length),r=new DataView(t);for(let a=0;a<t.byteLength;a++)r.setUint8(a,n.charCodeAt(a));return t}const Nt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ot(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,r=0;for(let a=0;a<e.length;a++)t<<=6,t|=Nt.indexOf(e[a]),r+=6,r===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=r=0);return r===12?(t>>=4,n+=String.fromCharCode(t)):r===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const jt=-1,Dt=-2,$t=-3,Ft=-4,Vt=-5,Bt=-6;function qt(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,s=!1){if(o===jt)return;if(o===$t)return NaN;if(o===Ft)return 1/0;if(o===Vt)return-1/0;if(o===Bt)return-0;if(s)throw new Error("Invalid input");if(o in r)return r[o];const i=t[o];if(!i||typeof i!="object")r[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const c=i[0],f=n==null?void 0:n[c];if(f)return r[o]=f(a(i[1]));switch(c){case"Date":r[o]=new Date(i[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<i.length;u+=1)d.add(a(i[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<i.length;u+=2)h.set(a(i[u]),a(i[u+1]));break;case"RegExp":r[o]=new RegExp(i[1],i[2]);break;case"Object":r[o]=Object(i[1]);break;case"BigInt":r[o]=BigInt(i[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<i.length;u+=2)y[i[u]]=a(i[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=i[1],l=Ne(g),m=new u(l);r[o]=m;break}case"ArrayBuffer":{const u=i[1],g=Ne(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(i.length);r[o]=c;for(let f=0;f<i.length;f+=1){const d=i[f];d!==Dt&&(c[f]=a(d))}}else{const c={};r[o]=c;for(const f in i){const d=i[f];c[f]=a(d)}}return r[o]}return a(0)}const ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ze];const Gt=new Set([...ze]);[...Gt];function Mt(e){return e.filter(n=>n!=null)}class ae{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Xe{constructor(n,t){this.status=n,this.location=t}}class be extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}const Ht="x-sveltekit-invalidated",Kt="x-sveltekit-trailing-slash";function X(e){return e instanceof ae||e instanceof be?e.status:500}function Wt(e){return e instanceof be?e.text:"Internal Error"}const C=Ge(He)??{},H=Ge(Me)??{},T={url:Ce({}),page:Ce({}),navigating:_e(null),updated:Ct()};function ke(e){C[e]=ve()}function Yt(e,n){let t=e+1;for(;C[t];)delete C[t],t+=1;for(t=n+1;H[t];)delete H[t],t+=1}function $(e){return location.href=e.href,new Promise(()=>{})}async function Ze(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(L||"/");e&&await e.update()}}function Oe(){}let oe,me,Z,x,ye,V;const Q=[],ee=[];let R=null;const Qe=[],Jt=[];let O=[],_={branch:[],error:null,url:null},Ae=!1,te=!1,je=!0,K=!1,B=!1,et=!1,Ee=!1,ie,E,U,I,F;const G=new Set;let he;async function cn(e,n,t){var a,o;document.URL!==location.href&&(location.href=location.href),V=e,oe=Lt(e),x=document.documentElement,ye=n,me=e.nodes[0],Z=e.nodes[1],me(),Z(),E=(a=history.state)==null?void 0:a[j],U=(o=history.state)==null?void 0:o[M],E||(E=U=Date.now(),history.replaceState({...history.state,[j]:E,[M]:U},""));const r=C[E];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await rn(ye,t):tn(location.href,{replaceState:!0}),nn()}async function zt(){if(await(he||(he=Promise.resolve())),!he)return;he=null;const e=ce(_.url,!0);R=null;const n=F={},t=e&&await Ue(e);if(!(!t||n!==F)){if(t.type==="redirect")return Se(new URL(t.location,_.url).href,{},1,n);t.props.page&&(I=t.props.page),_=t.state,tt(),ie.$set(t.props)}}function tt(){Q.length=0,Ee=!1}function nt(e){ee.some(n=>n==null?void 0:n.snapshot)&&(H[e]=ee.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function rt(e){var n;(n=H[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=ee[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function De(){ke(E),Te(He,C),nt(U),Te(Me,H)}async function Se(e,n,t,r){return Y({type:"goto",url:We(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(Ee=!0)}})}async function Xt(e){if(e.id!==(R==null?void 0:R.id)){const n={};G.add(n),R={id:e.id,token:n,promise:Ue({...e,preload:n}).then(t=>(G.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function pe(e){const n=oe.find(t=>t.exec(ot(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function at(e,n,t){var o;_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),I=e.props.page,ie=new V.root({target:n,props:{...e.props,stores:T,components:ee},hydrate:t,sync:!1}),rt(U);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};O.forEach(s=>s(a)),te=!0}function ne({url:e,params:n,branch:t,status:r,error:a,route:o,form:s}){let i="never";if(L&&(e.pathname===L||e.pathname===L+"/"))i="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(i=u.slash);e.pathname=dt(e.pathname,i),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:Mt(t).map(u=>u.node.component),page:I}};s!==void 0&&(c.props.form=s);let f={},d=!I,h=0;for(let u=0;u<Math.max(t.length,_.branch.length);u+=1){const g=t[u],l=_.branch[u];(g==null?void 0:g.data)!==(l==null?void 0:l.data)&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||s!==void 0&&s!==I.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:s??null,data:d?f:I.data}),c}async function Re({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var d,h,y;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const m of l){const{href:b}=new URL(m,t);c.dependencies.add(b)}};const g={route:new Proxy(a,{get:(l,m)=>(i&&(c.route=!0),l[m])}),params:new Proxy(r,{get:(l,m)=>(i&&c.params.add(m),l[m])}),data:(o==null?void 0:o.data)??null,url:mt(t,()=>{i&&(c.url=!0)},l=>{i&&c.search_params.add(l)}),async fetch(l,m){let b;l instanceof Request?(b=l.url,m={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...m}):b=l;const S=new URL(b,t);return i&&u(S.href),S.origin===t.origin&&(b=S.href.slice(t.origin.length)),te?At(b,S.href,m):kt(b,m)},setHeaders:()=>{},depends:u,parent(){return i&&(c.parent=!0),n()},untrack(l){i=!1;try{return l()}finally{i=!0}}};s=await f.universal.load.call(null,g)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function $e(e,n,t,r,a,o){if(Ee)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const s of a.search_params)if(r.has(s))return!0;for(const s of a.params)if(o[s]!==_.params[s])return!0;for(const s of a.dependencies)if(Q.some(i=>i(new URL(s))))return!0;return!1}function Ie(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Zt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(s=>o.includes(s))&&o.every(s=>a.includes(s))&&t.delete(r)}return t}function Fe({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:I,constructors:[]}}}async function Ue({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((R==null?void 0:R.id)===e)return G.delete(R.token),R.promise;const{errors:s,layouts:i,leaf:c}=a,f=[...i,c];s.forEach(p=>p==null?void 0:p().catch(()=>{})),f.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let d=null;const h=_.url?e!==_.url.pathname+_.url.search:!1,y=_.route?a.id!==_.route.id:!1,u=Zt(_.url,t);let g=!1;const l=f.map((p,v)=>{var P;const k=_.branch[v],A=!!(p!=null&&p[0])&&((k==null?void 0:k.loader)!==p[1]||$e(g,y,h,u,(P=k.server)==null?void 0:P.uses,r));return A&&(g=!0),A});if(l.some(Boolean)){try{d=await ct(t,l)}catch(p){const v=await D(p,{url:t,params:r,route:{id:e}});return G.has(o)?Fe({error:v,url:t,params:r,route:a}):se({status:X(p),error:v,url:t,route:a})}if(d.type==="redirect")return d}const m=d==null?void 0:d.nodes;let b=!1;const S=f.map(async(p,v)=>{var le;if(!p)return;const k=_.branch[v],A=m==null?void 0:m[v];if((!A||A.type==="skip")&&p[1]===(k==null?void 0:k.loader)&&!$e(b,y,h,u,(le=k.universal)==null?void 0:le.uses,r))return k;if(b=!0,(A==null?void 0:A.type)==="error")throw A;return Re({loader:p[1],url:t,params:r,route:a,parent:async()=>{var xe;const Le={};for(let fe=0;fe<v;fe+=1)Object.assign(Le,(xe=await S[fe])==null?void 0:xe.data);return Le},server_data_node:Ie(A===void 0&&p[0]?{type:"skip"}:A??null,p[0]?k==null?void 0:k.server:void 0)})});for(const p of S)p.catch(()=>{});const w=[];for(let p=0;p<f.length;p+=1)if(f[p])try{w.push(await S[p])}catch(v){if(v instanceof Xe)return{type:"redirect",location:v.location};if(G.has(o))return Fe({error:await D(v,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let k=X(v),A;if(m!=null&&m.includes(v))k=v.status??k,A=v.error;else if(v instanceof ae)A=v.body;else{if(await T.updated.check())return await Ze(),await $(t);A=await D(v,{params:r,url:t,route:{id:a.id}})}const P=await Qt(p,w,s);return P?ne({url:t,params:r,branch:w.slice(0,P.idx).concat(P.node),status:k,error:A,route:a}):await st(t,{id:a.id},A,k)}else w.push(void 0);return ne({url:t,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function Qt(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:e,error:n,url:t,route:r}){const a={};let o=null;if(V.server_loads[0]===0)try{const f=await ct(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==W||t.pathname!==location.pathname||Ae)&&await $(t)}const i=await Re({loader:me,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ie(o)}),c={node:await Z(),loader:Z,universal:null,server:null,data:null};return ne({url:t,params:a,branch:[i,c],status:e,error:n,route:null})}function ce(e,n){if(!e||re(e,L))return;let t;try{t=V.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=ot(t);for(const a of oe){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:pt(o),url:e}}}function ot(e){return ht(e.slice(L.length)||"/")}function it({url:e,type:n,intent:t,delta:r}){let a=!1;const o=ft(_,t,e,n);r!==void 0&&(o.navigation.delta=r);const s={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return K||Qe.forEach(i=>i(s)),a?null:o}async function Y({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:f=Oe,block:d=Oe}){const h=ce(n,!1),y=it({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=E,g=U;f(),K=!0,te&&T.navigating.set(y.navigation),F=c;let l=h&&await Ue(h);if(!l){if(re(n,L))return await $(n);l=await st(n,{id:null},await D(new be(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,F!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(i>=20)l=await se({status:500,error:await D(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Se(new URL(l.location,n).href,{},i+1,c),!1;else l.props.page.status>=400&&await T.updated.check()&&(await Ze(),await $(n));if(tt(),ke(u),nt(g),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),s=t?t.state:s,!t){const w=o?0:1,p={[j]:E+=w,[M]:U+=w,[Ke]:s};(o?history.replaceState:history.pushState).call(history,p,"",n),o||Yt(E,U)}if(R=null,l.props.page.state=s,te){_=l.state,l.props.page&&(l.props.page.url=n);const w=(await Promise.all(Jt.map(p=>p(y.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){O=O.filter(v=>!w.includes(v))};w.push(p),O.push(...w)}ie.$set(l.props),et=!0}else at(l,ye,!1);const{activeElement:m}=document;await ut();const b=t?t.scroll:a?ve():null;if(je){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==m&&document.activeElement!==document.body;!r&&!S&&an(),je=!0,l.props.page&&(I=l.props.page),K=!1,e==="popstate"&&rt(U),y.fulfil(void 0),O.forEach(w=>w(y.navigation)),T.navigating.set(null)}async function st(e,n,t,r){return e.origin===W&&e.pathname===location.pathname&&!Ae?await se({status:r,error:t,url:e,route:n}):await $(e)}function en(){let e;x.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(e),e=setTimeout(()=>{r(s,2)},20)});function n(o){r(o.composedPath()[0],1)}x.addEventListener("mousedown",n),x.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(pe(s.target.href),t.unobserve(s.target))},{threshold:0});function r(o,s){const i=Je(o,x);if(!i)return;const{url:c,external:f,download:d}=ge(i,L);if(f||d)return;const h=z(i),y=c&&_.url.pathname+_.url.search===c.pathname+c.search;if(!h.reload&&!y)if(s<=h.preload_data){const u=ce(c,!1);u&&Xt(u)}else s<=h.preload_code&&pe(c.pathname)}function a(){t.disconnect();for(const o of x.querySelectorAll("a")){const{url:s,external:i,download:c}=ge(o,L);if(i||c)continue;const f=z(o);f.reload||(f.preload_code===J.viewport&&t.observe(o),f.preload_code===J.eager&&pe(s.pathname))}}O.push(a),a()}function D(e,n){if(e instanceof ae)return e.body;const t=X(e),r=Wt(e);return V.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function tn(e,n={}){return e=We(e),e.origin!==W?Promise.reject(new Error("goto: invalid URL")):Se(e,n,0)}function ln(e){if(typeof e=="function")Q.push(e);else{const{href:n}=new URL(e,location.href);Q.push(t=>t.href===n)}return zt()}function nn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(De(),!K){const a=ft(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Qe.forEach(s=>s(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&De()}),(n=navigator.connection)!=null&&n.saveData||en(),x.addEventListener("click",async t=>{var y;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Je(t.composedPath()[0],x);if(!r)return;const{url:a,external:o,target:s,download:i}=ge(r,L);if(!a)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=z(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||i)return;if(o||c.reload){it({url:a,type:"link"})?K=!0:t.preventDefault();return}const[d,h]=a.href.split("#");if(h!==void 0&&d===ue(location)){const[,u]=_.url.href.split("#");if(u===h){t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(y=r.ownerDocument.getElementById(decodeURIComponent(h)))==null||y.scrollIntoView();return}if(B=!0,ke(E),e(a),!c.replace_state)return;B=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),Y({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),x.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(re(i,L))return;const c=t.target,f=z(c);if(f.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(d).toString(),Y({type:"form",url:i,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[j]){const a=t.state[j];if(F={},a===E)return;const o=C[a],s=t.state[Ke]??{},i=new URL(t.state[Pt]??location.href),c=t.state[M],f=ue(location)===ue(_.url);if(c===U&&(et||f)){e(i),C[E]=ve(),o&&scrollTo(o.x,o.y),s!==I.state&&(I={...I,state:s},ie.$set({page:I})),E=a;return}const h=a-E;await Y({type:"popstate",url:i,popped:{state:s,scroll:o,delta:h},accept:()=>{E=a,U=c},block:()=>{history.go(-h)},nav_token:F})}else if(!B){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[j]:++E,[M]:U},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&T.navigating.set(null)});function e(t){_.url=t,T.page.set({...I,url:t}),T.page.notify()}}async function rn(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:s,form:i}){Ae=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=ce(c,!1)||{});let f;try{const d=r.map(async(u,g)=>{const l=s[g];return l!=null&&l.uses&&(l.uses=lt(l.uses)),Re({loader:V.nodes[u],url:c,params:a,route:o,parent:async()=>{const m={};for(let b=0;b<g;b+=1)Object.assign(m,(await d[b]).data);return m},server_data_node:Ie(l)})}),h=await Promise.all(d),y=oe.find(({id:u})=>u===o.id);if(y){const u=y.layouts;for(let g=0;g<u.length;g++)u[g]||h.splice(g,0,void 0)}f=ne({url:c,params:a,branch:h,status:n,error:t,form:i,route:y??null})}catch(d){if(d instanceof Xe){await $(new URL(d.location,location.href));return}f=await se({status:X(d),error:await D(d,{url:c,params:a,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),at(f,e,!0)}async function ct(e,n){var a;const t=new URL(e);t.pathname=wt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Kt,"1"),t.searchParams.append(Ht,n.map(o=>o?"1":"0").join(""));const r=await qe(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ae(r.status,o)}return new Promise(async o=>{var h;const s=new Map,i=r.body.getReader(),c=new TextDecoder;function f(y){return qt(y,{Promise:u=>new Promise((g,l)=>{s.set(u,{fulfil:g,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await i.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const l=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=lt(m.uses),m.data=f(m.data))}),o(l);else if(l.type==="chunk"){const{id:m,data:b,error:S}=l,w=s.get(m);s.delete(m),S?w.reject(f(S)):w.fulfil(f(b))}}}})}function lt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function an(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const s=a[o],i=r.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}r.removeAllRanges()}})}}}function ft(e,n,t,r){var c,f;let a,o;const s=new Promise((d,h)=>{a=d,o=h});return s.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:r,complete:s},fulfil:a,reject:o}}export{cn as a,L as b,ln as i,T as s};
