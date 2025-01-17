import"./legacy.BKtvFfwk.js";import{s as X,b as T}from"./entry.CFtMtGOY.js";import{g as H}from"./index.CO1Q27f-.js";let P;const D="en",k=["en"];let b=()=>D;const Q=e=>{typeof e=="function"?b=C(e):b=C(()=>e),P!==void 0&&P(b())};function C(e){return()=>{const n=e();if(!A(n))throw new Error("languageTag() didn't return a valid language tag. Check your setLanguageTag call");return n}}const Y=e=>{P=e};function A(e){return k.includes(e)}const q=Object.freeze(Object.defineProperty({__proto__:null,availableLanguageTags:k,isAvailableLanguageTag:A,get languageTag(){return b},onSetLanguageTag:Y,setLanguageTag:Q,sourceLanguageTag:D},Symbol.toStringTag,{value:"Module"})),G=()=>{const e=X;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},J={subscribe(e){return G().page.subscribe(e)}};function Z(e,n){if(e==="")return"";const t=new URL(e,n).pathname;return t.endsWith("/")?t.slice(0,-1):t}function S(e,n){const t=te(e),a=V(t,n),[i,s]=ee(a);return[i,s]}const B=(e,n,t)=>[n,e,t??""].filter(a=>a!=="/").join("")||"/";function V(e,n){const t=e.replace(n,"");return t.startsWith("/")?t:`/${t}`}function ee(e){const t=["/.html__data.json","/__data.json"].find(a=>e.endsWith(a));return t?[e.slice(0,-t.length)||"/",t]:[e,void 0]}function te(e){try{return decodeURI(e)}catch{return e}}const ne=e=>({url:n})=>{try{const[t,a]=S(n.pathname,T),i=e.getLanguageFromLocalisedPath(t);if(!i)return n.pathname;const s=e.getCanonicalPath(t,i);return B(s,T,a)}catch{return n.pathname}};function re(e){return`/${e.split("/").filter(Boolean).join("/")}`}function ae(e){const n=e.map(t=>typeof t=="string"?a=>a===t:a=>t.test(a));return t=>n.some(a=>a(re(t)))}const L="rtl",I="ltr";function se(e){try{const n=new Intl.Locale(e);return"textInfo"in n?n.textInfo.direction===L?L:I:n.getTextInfo().direction===L?L:I}catch{return I}}function oe(e){const n=e.map(t=>[t,se(t)]);return Object.fromEntries(n)}const ie=0,F=1,v=2,ce=4,p=0,x=1,R=2;function ue(e){const n=fe(le);return e.sort((t,a)=>{var i,s,o,c,r,u;const l=z(t).map(n),f=z(a).map(n);for(let g=0;g<Math.max(l.length,f.length);g+=1){const m=l[g],w=f[g];if(!m)return-1;if(!w)return 1;for(let _=0;_<Math.max(m.length,w.length);_+=1){const d=m[_],h=w[_];if((d==null?void 0:d[p])||(h==null?void 0:h[p])){if(!d)return-1;if(!h)return 1;const $=((i=m[_+1])==null?void 0:i[x])||((o=(s=l[g+1])==null?void 0:s[0])==null?void 0:o[x]),y=((c=w[_+1])==null?void 0:c[x])||((u=(r=f[g+1])==null?void 0:r[0])==null?void 0:u[x]),K=$&&y,O=$&&!y,W=!$&&y;if((d[p]&&h[p])===v){if(K)continue;if(O)return-1;if(W)return 1}if(d[p]===v)return O?-1:1;if(h[p]===v)return W?1:-1;if(d[R]!==h[R])return(-1)**+d[R];if(d[p]!==h[p])return(-1)**+(d[p]>h[p])}else if((d==null?void 0:d[x])!==(h==null?void 0:h[x]))return ge(d[x],h[x])}}return t<a?1:-1})}function fe(e){const n=new Map;return t=>(n.has(t)||n.set(t,e(t)),n.get(t))}function le(e){const n=[];let t=0;for(;t<=e.length;){const a=e.indexOf("[",t),i=a===-1;if(n.push([ie,e.slice(t,i?void 0:a),!1]),i)break;const s=e[a+1]==="["?F:e[a+1]==="."?v:ce,o=s===F?"]]":"]",c=e.indexOf(o,a);if(c===-1)throw new Error(`Invalid route definition ${e}`);const r=e.slice(a,t=c+o.length);n.push([s,r,r.includes("=")])}return n}const z=e=>e.replace(/\[\[[^\]]+\]\](?!$)/g,"").split("/").filter(Boolean);function ge(e,n){if(e===n)return 0;let t=0;for(;e[t]===n[t];)t++;return e[t]?n[t]?e[t]<n[t]?-1:1:-1:1}const de=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function he(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${U(e).map(a=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(i)return n.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(s)return n.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const o=a.split(/\[(.+?)\](?!\])/);return"/"+o.map((r,u)=>{if(u%2){if(r.startsWith("x+"))return j(String.fromCharCode(parseInt(r.slice(2),16)));if(r.startsWith("u+"))return j(String.fromCharCode(...r.slice(2).split("-").map(_=>parseInt(_,16))));const l=de.exec(r);if(!l)throw new Error(`Invalid param: ${r}`);const[,f,g,m,w]=l;return n.push({name:m,matcher:w,optional:!!f,rest:!!g,chained:g?u===1&&o[0]==="":!1}),g?"(.*?)":f?"([^/]*)?":"([^/]+?)"}return j(r)}).join("")}).join("")}/?$`),params:n}}function pe(e,n,t){const a={},i=e.slice(1),s=i.filter(c=>c!==void 0);let o=0;for(const[c,r]of n.entries()){let u=i[c-o];if(r.chained&&r.rest&&o&&(u=i.slice(c-o,c+1).filter(f=>f).join("/"),o=0),u===void 0){r.rest&&(a[r.name]="");continue}if(r.matcher&&!t[r.matcher])return;if((t[r.matcher]??(()=>!0))(u)){a[r.name]=u;const f=n[c+1],g=i[c+1];f&&!f.rest&&f.optional&&g&&r.chained&&(o=0),!f&&!g&&Object.keys(a).length===s.length&&(o=0);continue}if(r.optional&&r.chained){o++;continue}return}if(!o)return a}function j(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}const me=/\[(\[)?(\.\.\.)?(\w+?)(?:=(\w+))?\]\]?/g;function M(e,n){return"/"+U(e).map(t=>t.replace(me,(a,i,s,o)=>{const c=n[o];if(!c){if(i||s&&c!==void 0)return"";throw new Error(`Missing parameter '${o}' in route ${e}`)}if(c[0]=="/"||c.endsWith("/"))throw new Error(`Parameter '${o}' in route ${e} cannot start or end with a slash`);return c})).filter(Boolean).join("/")}function N(e,n,t){const a=ue(n);for(const i of a){const s=he(i),o=s.pattern.exec(_e(e));if(!o)continue;const c=pe(o,s.params,t);if(c)return{params:c,id:i}}}const _e=e=>e.endsWith("/")?e.slice(0,-1):e,U=e=>e.slice(1).split("/");function xe(e,n,t,a,i){function s(r){const l=r.split("/")[1];if(e.includes(l)&&(i==="always"||l!==n))return l;if(i==="never")return n}function o(r,u){const l=r.endsWith("/")&&r!=="/";r=l?r.slice(0,-1):r;let f=Te(r,u,t,a);return l&&(f+="/"),(i==="always"||u!==n)&&(f=`/${u}${f}`),f}function c(r,u){const l=r.endsWith("/")&&r!=="/";(i==="always"||u!==n)&&(r=r.replace(`/${u}`,"")||"/");const f=l;r=f?r.slice(0,-1):r;let g=we(r,u,t,a);return f&&(g+="/"),g}return{getLanguageFromLocalisedPath:s,getLocalisedPath:o,getCanonicalPath:c}}function we(e,n,t,a){for(const[i,s]of Object.entries(t)){if(!(n in s))continue;const o=s[n];if(!o)continue;const c=N(e,[o],a);if(c)return M(i,c.params)}return e}function Te(e,n,t,a){const i=N(e,Object.keys(t),a);if(!i)return e;const s=t[i.id];if(!s)return e;const o=s[n];return o?M(o,i.params):e}function Le(e,n){const t={},a=[],i=e.sourceLanguageTag,s={defaultLanguageTag:i,runtime:e,translations:t,matchers:{},exclude:ae(a),prefixDefaultLanguage:"never",textDirection:oe(e.availableLanguageTags),seo:{noAlternateLinks:!1}},o=xe(e.availableLanguageTags,i,s.translations,s.matchers,s.prefixDefaultLanguage);return Object.freeze(t),Object.freeze(s),{config:s,strategy:o,reroute:()=>ne(o),handle:()=>{throw new Error("")},getLanguageFromUrl(c){const r=E(T),[u]=S(c.pathname,r);return s.exclude(u)?s.defaultLanguageTag:o.getLanguageFromLocalisedPath(u)||s.defaultLanguageTag},resolveRoute(c,r=void 0){if(s.exclude(c))return c;const u=E(T),[l,f]=S(c,u);if(r=r??e.languageTag(),!c.startsWith(u))return c;const g=o.getLocalisedPath(l,r);return B(g,u,f)},route(c){const r=E(T),[u,l]=S(c,r),g=o.getLanguageFromLocalisedPath(u)||s.defaultLanguageTag,m=o.getCanonicalPath(u,g);return B(m,r,l)}}}function E(e){return e===""?"":e.startsWith("/")?e:Z(e,new URL(H(J).url))}const ye=Le(q);export{S as a,ye as i,Z as n,J as p,B as s};
