import{c as Q,a as v,t as U,q as Ue,h as K,s as te,r as Se,n as Me,k as X}from"../chunks/disclose-version.DbJakVUh.js";import{i as pe,o as ve,q as Fe,h as Te,l as Re,k as ke,x as Ce,Y as Ne,E as Ee,n as Ie,aE as Be,aU as He,p as H,O as T,P as ae,f as B,a as j,g as i,Q as O,e as N,F,t as E,aK as ne,s as R,c as L,r as A,T as Z,ap as ge,R as je,I as J}from"../chunks/utils.CtqPTr58.js";import{n as we,p as fe,s as he,i as Oe}from"../chunks/i18n.B8A-8rMw.js";import{i as ee}from"../chunks/if.CzIKZcnQ.js";import{d as Ge,i as De,L as qe,f as Ke,a as Y,j as be,g as re,t as I,b as ie,h as Ve,e as Ye}from"../chunks/bundle-mjs.B2EiCCe7.js";import{i as G}from"../chunks/lifecycle.ClYoO7N5.js";import{p as r,l as $,s as Pe}from"../chunks/props.De-4GX7v.js";import{s as ce,a as de}from"../chunks/store.CZEHLxym.js";import{p as _e}from"../chunks/stores.CtLAEoac.js";import{b as Le,i as We}from"../chunks/entry.AQB_bOQB.js";import{g as Je,w as me}from"../chunks/index.DHMmLUuY.js";import{s as oe,a as D,h as Qe}from"../chunks/attributes.B1qs-ZY3.js";import{c as V,F as Ae,t as Ze,s as Xe}from"../chunks/Frame.DXSLmrgl.js";function et(c,e,o){ve&&Fe();var l=c,t=Ne,a;pe(()=>{Te(t,t=e())&&(a&&Re(a),a=ke(()=>o(l)))}),ve&&(l=Ce)}function tt(c,e,...o){var l=c,t=Ie,a;pe(()=>{t!==(t=e())&&(a&&(Be(a),a=null),a=ke(()=>t(l,...o)))},Ee),ve&&(l=Ce)}const at=He;function st(c,e){return c.protocol!==e.protocol?e.href:e.password||e.username?"//"+[e.username,e.password].filter(Boolean).join(":")+"@"+e.host+e.pathname+e.search+e.hash:c.host!==e.host?"//"+e.host+e.pathname+e.search+e.hash:e.pathname+e.search+e.hash}function rt(c,e,o){const l=new URL(o??"/",e).pathname;return c.origin!==e.origin||!c.pathname.startsWith(l)}var lt=U('<link rel="alternate">');function nt(c,e){H(e,!1);const o=ce(),l=()=>de(_e,"$page",o),t=O(),a=O(),s=O(),d=we(Le,new URL(l().url))||"/";let n=r(e,"availableLanguageTags",8),g=r(e,"strategy",8),k=r(e,"currentLang",8);const m=(x,f)=>{const C=[];for(const w of n()){const h=f.getLocalisedPath(x,w),P=he(h,d,void 0),_=new URL(P,new URL(l().url)).href;C.push(_)}return C};T(()=>l(),()=>{N(t,fe(l().url.pathname,d)[0])}),T(()=>(F(g()),i(t),F(k())),()=>{N(a,g().getCanonicalPath(i(t),k()))}),T(()=>(i(a),F(g())),()=>{N(s,m(i(a),g()))}),ae(),G();var b=Q(),y=B(b);ee(y,()=>n().length>=1,x=>{var f=Q(),C=B(f);Ge(C,1,()=>i(s),De,(w,h,P)=>{var _=lt();E(()=>{oe(_,"hreflang",n()[P]),oe(_,"href",i(h))}),v(w,_)}),v(x,f)}),v(c,b),j()}const it=(c,e)=>`${qe}=${c};Path=${e};SameSite=lax;Max-Age=31557600`;function ot(c,e){H(e,!1);const o=ce(),l=()=>de(_e,"$page",o),t=O(),a=O(),s=we(Le,new URL(l().url))||"/";let d=r(e,"languageTag",24,()=>{}),n=r(e,"i18n",8),g=O(0);function k(y,x){try{const f=new URL(Je(_e).url),[C,w]=fe(f.pathname,s),h=n().strategy.getCanonicalPath(C,i(t)),P=new URL(f);P.pathname=he(h,s,w);const _=new URL(y,new URL(P));if(rt(_,f,s)||n().config.exclude(_.pathname))return y;const S=x??i(t),[p,u]=fe(_.pathname,s),z=n().strategy.getLocalisedPath(p,S),M=new URL(_);return M.pathname=he(z,s,u),st(f,M)}catch{return y}}Ke({translateHref:k}),T(()=>(F(d()),F(n()),l()),()=>{N(t,d()??n().getLanguageFromUrl(l().url))}),T(()=>(F(n()),i(t)),()=>{n().config.runtime.setLanguageTag(i(t))}),T(()=>i(t),()=>{document.documentElement.lang=i(t)}),T(()=>(F(n()),i(t)),()=>{document.documentElement.dir=n().config.textDirection[i(t)]??"ltr"}),T(()=>(i(t),i(g)),()=>{i(t)&&N(g,i(g)+1)}),T(()=>(i(t),i(g),be),()=>{i(t)&&(i(g)>1||at)&&We(be)}),T(()=>i(t),()=>{N(a,i(t))}),T(()=>i(t),()=>{document.cookie=it(i(t),s)}),ae(),G();var m=Q();Ue(y=>{var x=Q(),f=B(x);ee(f,()=>n().config.seo.noAlternateLinks!==!0&&!n().config.exclude(l().url.pathname),C=>{nt(C,{get availableLanguageTags(){return n().config.runtime.availableLanguageTags},get strategy(){return n().strategy},get currentLang(){return i(t)}})}),v(y,x)});var b=B(m);et(b,()=>i(a),y=>{var x=Q(),f=B(x);Y(f,e,"default",{},null),v(y,x)}),v(c,m),j()}const ct=!0,na=Object.freeze(Object.defineProperty({__proto__:null,prerender:ct},Symbol.toStringTag,{value:"Module"}));var dt=U('<span class="sr-only"> </span>'),ut=U("<a><!> <!></a>"),vt=U('<span class="sr-only"> </span>'),gt=U("<button><!> <!></button>");function ft(c,e){const o=$(e,["children","$$slots","$$events","$$legacy"]),l=$(o,["color","name","ariaLabel","size","href"]);H(e,!1);let t=r(e,"color",8,"default"),a=r(e,"name",24,()=>{}),s=r(e,"ariaLabel",24,()=>{}),d=r(e,"size",8,"md"),n=r(e,"href",24,()=>{});const g=ne("background"),k={dark:"text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",gray:"text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",red:"text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",yellow:"text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",green:"text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",indigo:"text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",purple:"text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",pink:"text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",blue:"text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",primary:"text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",default:"focus:ring-gray-400 hover:bg-gray-100"},m={xs:"m-0.5 rounded-sm focus:ring-1 p-0.5",sm:"m-0.5 rounded focus:ring-1 p-0.5",md:"m-0.5 rounded-lg focus:ring-2 p-1.5",lg:"m-0.5 rounded-lg focus:ring-2 p-2.5"};let b=O();const y={xs:"w-3 h-3",sm:"w-3.5 h-3.5",md:"w-5 h-5",lg:"w-5 h-5"},x=re(),[f,C]=x;T(()=>(F(d()),F(t()),F(o)),()=>{N(b,I("focus:outline-none whitespace-normal",m[d()],k[t()],t()==="default"&&(g?"dark:hover:bg-gray-600":"dark:hover:bg-gray-700"),o.class))}),ae(),G();var w=Q(),h=B(w);ee(h,n,P=>{var _=ut();const S=Z(()=>C({href:n(),...l,class:i(b),"aria-label":s()??a()},[{attribute_name:"href",lang_attribute_name:"hreflang"}]));let p;var u=L(_);ee(u,a,M=>{var q=dt(),W=L(q,!0);A(q),E(()=>te(W,a())),v(M,q)});var z=R(u,2);Y(z,e,"default",{get svgSize(){return y[d()]}},null),A(_),E(()=>p=D(_,p,{...i(S)})),v(P,_)},P=>{var _=gt();const S=Z(()=>C({type:"button",...l,class:i(b),"aria-label":s()??a()},[{attribute_name:"formaction"}]));let p;var u=L(_);ee(u,a,M=>{var q=vt(),W=L(q,!0);A(q),E(()=>te(W,a())),v(M,q)});var z=R(u,2);Y(z,e,"default",{get svgSize(){return y[d()]}},null),A(_),E(()=>p=D(_,p,{...i(S)})),K("click",_,function(M){V.call(this,e,M)}),v(P,_)}),v(c,w),j()}var ht=U("<footer><!></footer>");function _t(c,e){const o=$(e,["children","$$slots","$$events","$$legacy"]),l=$(o,["footerType"]);H(e,!1);let t=r(e,"footerType",24,()=>{}),a=I(t()==="sitemap"&&"bg-gray-800",t()==="socialmedia"&&"p-4 bg-white sm:p-6 dark:bg-gray-800",t()==="logo"&&"p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800",t()==="default"&&"p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800",o.class);G();var s=ht();let d;var n=L(s);Y(n,e,"default",{},null),A(s),E(()=>d=D(s,d,{...l,class:a})),v(c,s),j()}var mt=U("<a><img> <span> </span> <!></a>"),bt=U("<img>");function yt(c,e){const o=$(e,["children","$$slots","$$events","$$legacy"]),l=$(o,["aClass","spanClass","imgClass","href","src","alt","name","target","classA","classSpan","classImg"]);H(e,!1);let t=r(e,"aClass",8,"flex items-center"),a=r(e,"spanClass",8,"self-center text-2xl font-semibold whitespace-nowrap dark:text-white"),s=r(e,"imgClass",8,"me-3 h-8"),d=r(e,"href",8,""),n=r(e,"src",8,""),g=r(e,"alt",8,""),k=r(e,"name",8,""),m=r(e,"target",8,""),b=r(e,"classA",8,""),y=r(e,"classSpan",8,""),x=r(e,"classImg",8,""),f=I(t(),b()),C=I(a(),y()),w=I(s(),x());const h=re(),[P,_]=h;G();var S=Q(),p=B(S);ee(p,d,u=>{var z=mt();const M=Z(()=>_({...l,href:d(),target:m(),class:f},[{attribute_name:"href",lang_attribute_name:"hreflang"}]));let q;var W=L(z);ie(W,w);var se=R(W,2);ie(se,C);var $e=L(se,!0);A(se);var ze=R(se,2);Y(ze,e,"default",{},null),A(z),E(()=>{q=D(z,q,{...i(M)}),oe(W,"src",n()),oe(W,"alt",g()),te($e,k())}),v(u,z)},u=>{var z=bt();let M;E(()=>M=D(z,M,{...l,src:n(),class:w,alt:g()})),Qe(z),Se(z),v(u,z)}),v(c,S),j()}var xt=U("<a> </a>"),pt=U('<span class="ms-1"> </span>'),kt=U("<span> <!> </span>");function Ct(c,e){const o=$(e,["children","$$slots","$$events","$$legacy"]),l=$(o,["spanClass","aClass","year","href","by","target","copyrightMessage","classSpan","classA"]);H(e,!1);let t=r(e,"spanClass",8,"block text-sm text-gray-500 sm:text-center dark:text-gray-400"),a=r(e,"aClass",8,"hover:underline"),s=r(e,"year",24,()=>new Date().getFullYear()),d=r(e,"href",8,""),n=r(e,"by",8,""),g=r(e,"target",24,()=>{}),k=r(e,"copyrightMessage",8,"All Rights Reserved."),m=r(e,"classSpan",8,""),b=r(e,"classA",8,""),y=I(t(),m()),x=I(a(),b());const f=re(),[C,w]=f;G();var h=kt();ie(h,y);var P=L(h),_=R(P);ee(_,d,p=>{var u=xt();const z=Z(()=>w({...l,href:d(),target:g(),class:x},[{attribute_name:"href",lang_attribute_name:"hreflang"}]));let M;var q=L(u,!0);A(u),E(()=>{M=D(u,M,{...i(z)}),te(q,n())}),v(p,u)},p=>{var u=pt(),z=L(u,!0);A(u),E(()=>te(z,n())),v(p,u)});var S=R(_);A(h),E(()=>{te(P,`© ${s()??""} `),te(S,` ${k()??""}`)}),v(c,h),j()}var wt=U("<li><a><!></a></li>");function le(c,e){const o=$(e,["children","$$slots","$$events","$$legacy"]),l=$(o,["liClass","aClass","href","target","classLi","classA"]);H(e,!1);let t=r(e,"liClass",8,"me-4 last:me-0 md:me-6"),a=r(e,"aClass",8,"hover:underline"),s=r(e,"href",8,""),d=r(e,"target",24,()=>{}),n=r(e,"classLi",8,""),g=r(e,"classA",8,""),k=I(t(),n()),m=I(a(),g());const b=re(),[y,x]=b;G();var f=wt();ie(f,k);var C=L(f);const w=Z(()=>x({...l,href:s(),class:m,target:d()},[{attribute_name:"href",lang_attribute_name:"hreflang"}]));let h;var P=L(C);Y(P,e,"default",{},null),A(C),A(f),E(()=>h=D(C,h,{...i(w)})),v(c,f),j()}var Pt=U("<ul><!></ul>");function ye(c,e){const o=$(e,["children","$$slots","$$events","$$legacy"]),l=$(o,["ulClass"]);H(e,!1);let t=r(e,"ulClass",8,"text-gray-600 dark:text-gray-400");G();var a=Pt();let s;var d=L(a);Y(d,e,"default",{},null),A(a),E(()=>s=D(a,s,{...l,class:I(t(),o.class)})),v(c,a),j()}var Lt=U("<div><!></div>");function xe(c,e){const o=$(e,["children","$$slots","$$events","$$legacy"]),l=$(o,["fluid"]);H(e,!1);let t=r(e,"fluid",8,!1);G();var a=Lt();let s;var d=L(a);Y(d,e,"default",{},null),A(a),E(()=>s=D(a,s,{...l,class:I("mx-auto flex flex-wrap justify-between items-center ",t()?"w-full":"container",o.class)})),v(c,a),j()}function At(c,e){const o=$(e,["children","$$slots","$$events","$$legacy"]),l=$(o,["fluid","navContainerClass"]);H(e,!1);const t=ce(),a=()=>de(n,"$hidden",t);let s=r(e,"fluid",8,!1),d=r(e,"navContainerClass",8,""),n=me(!0);ge("navHidden",n);let g=()=>n.update(m=>!m);T(()=>F(l),()=>{l.color=l.color??"navbar"}),ae(),G();var k=Z(()=>I("px-2 sm:px-4 py-2.5 w-full",o.class));Ae(c,Pe({tag:"nav"},()=>l,{get class(){return i(k)},children:(m,b)=>{xe(m,{get fluid(){return s()},get class(){return d()},children:(y,x)=>{var f=Q(),C=B(f);Y(C,e,"default",{get hidden(){return a()},toggle:g,NavContainer:xe},null),v(y,f)},$$slots:{default:!0}})},$$slots:{default:!0}})),j()}var $t=U("<a><!></a>");function zt(c,e){const o=$(e,["children","$$slots","$$events","$$legacy"]),l=$(o,["href"]);H(e,!1);let t=r(e,"href",8,"");const a=re(),[s,d]=a;G();var n=$t();const g=Z(()=>d({href:t(),...l,class:I("flex items-center",o.class)},[{attribute_name:"href",lang_attribute_name:"hreflang"}]));let k;var m=L(n);Y(m,e,"default",{},null),A(n),E(()=>k=D(n,k,{...i(g)})),v(c,n),j()}var Ut=Me("<svg><!></svg>");function St(c,e){const o=$(e,["children","$$slots","$$events","$$legacy"]),l=$(o,["size","color","variation","ariaLabel"]);H(e,!1);let t=r(e,"size",8,"24"),a=r(e,"color",8,"currentColor"),s=r(e,"variation",8,"outline"),d=r(e,"ariaLabel",8,"bars 3"),n=O(),g=O(),k=`<path stroke="${a()}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `,m=`<path fill="${a()}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;T(()=>F(s()),()=>{switch(s()){case"outline":N(g,k),N(n,"0 0 24 24");break;case"solid":N(g,m),N(n,"0 0 24 24");break;default:N(g,k),N(n,"0 0 24 24")}}),ae(),G();var b=Ut();let y;var x=L(b);Ve(x,()=>i(g),!0,!1),A(b),E(()=>y=D(b,y,{xmlns:"http://www.w3.org/2000/svg",role:"button",tabindex:"0",width:t(),height:t(),class:o.class,...l,"aria-label":d(),fill:"none",viewBox:i(n),"stroke-width":"2"},void 0,!0)),K("click",b,function(f){V.call(this,e,f)}),v(c,b),j()}function Mt(c,e){const o=$(e,["children","$$slots","$$events","$$legacy"]),l=$(o,["menuClass","onClick","classMenu"]);H(e,!1);let t=r(e,"menuClass",8,"h-6 w-6 shrink-0"),a=r(e,"onClick",24,()=>{}),s=r(e,"classMenu",8,""),d="ms-3 md:hidden",n=ne("navHidden")??me(!0);const g=m=>n.update(b=>!b);G();var k=Z(()=>I(d,o.class));ft(c,Pe({name:"Open main menu"},()=>l,{get class(){return i(k)},$$events:{click(...m){var b;(b=a()||g)==null||b.apply(this,m)}},children:(m,b)=>{var y=Z(()=>I(t(),s()));St(m,{get class(){return i(y)}})},$$slots:{default:!0}})),j()}var Ft=U("<li><!></li>");function ue(c,e){const o=$(e,["children","$$slots","$$events","$$legacy"]),l=$(o,["href","activeClass","nonActiveClass"]);H(e,!1);const t=O(),a=O();let s=r(e,"href",8,""),d=r(e,"activeClass",24,()=>{}),n=r(e,"nonActiveClass",24,()=>{});const g=ne("navbarContext")??{},k=ne("activeUrl");let m=O("");k.subscribe(h=>{N(m,h)});const b=re(),[y,x]=b;T(()=>(i(m),F(s())),()=>{N(t,i(m)?s()===i(m):!1)}),T(()=>(i(t),F(d()),F(n()),F(o)),()=>{N(a,I("block py-2 pe-4 ps-3 md:p-0 rounded md:border-0",i(t)?d()??g.activeClass:n()??g.nonActiveClass,o.class))}),ae(),G();var f=Ft(),C=L(f);const w=Z(()=>`${s()?"a":"div"}`=="button"?x({role:s()?void 0:"link",href:s(),...l,class:i(a)},[{attribute_name:"formaction"}]):`${s()?"a":"div"}`=="form"?x({role:s()?void 0:"link",href:s(),...l,class:i(a)},[{attribute_name:"action"}]):`${s()?"a":"div"}`=="a"?x({role:s()?void 0:"link",href:s(),...l,class:i(a)},[{attribute_name:"href",lang_attribute_name:"hreflang"}]):{role:s()?void 0:"link",href:s(),...l,class:i(a)});Ye(C,()=>s()?"a":"div",!1,(h,P)=>{let _;E(()=>_=D(h,_,{...i(w)},void 0,h.namespaceURI===je,h.nodeName.includes("-"))),K("blur",h,function(u){V.call(this,e,u)}),K("change",h,function(u){V.call(this,e,u)}),K("click",h,function(u){V.call(this,e,u)}),K("focus",h,function(u){V.call(this,e,u)}),K("keydown",h,function(u){V.call(this,e,u)}),K("keypress",h,function(u){V.call(this,e,u)}),K("keyup",h,function(u){V.call(this,e,u)}),K("mouseenter",h,function(u){V.call(this,e,u)}),K("mouseleave",h,function(u){V.call(this,e,u)}),K("mouseover",h,function(u){V.call(this,e,u)});var S=Q(),p=B(S);Y(p,e,"default",{},null),v(P,S)}),A(f),v(c,f),j()}function Tt(c){const e=Math.cos(c*Math.PI*.5);return Math.abs(e)<1e-14?1:1-e}var Rt=U("<div><!></div>"),Nt=U("<div><ul><!></ul></div>");function Et(c,e){const o=$(e,["children","$$slots","$$events","$$legacy"]),l=$(o,["activeUrl","divClass","ulClass","hidden","slideParams","activeClass","nonActiveClass","classUl"]);H(e,!1);const t=ce(),a=()=>de(f,"$hiddenStore",t);let s=r(e,"activeUrl",8,""),d=r(e,"divClass",8,"w-full md:block md:w-auto"),n=r(e,"ulClass",8,"flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium"),g=r(e,"hidden",24,()=>{}),k=r(e,"slideParams",24,()=>({delay:250,duration:500,easing:Tt})),m=r(e,"activeClass",8,"text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent"),b=r(e,"nonActiveClass",8,"text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"),y=r(e,"classUl",8,"");const x=me("");ge("navbarContext",{activeClass:m(),nonActiveClass:b()}),ge("activeUrl",x);let f=ne("navHidden"),C=O(),w=O(),h=O();T(()=>F(s()),()=>{x.set(s())}),T(()=>(F(g()),a()),()=>{N(C,g()??a()??!0)}),T(()=>(F(d()),F(o)),()=>{N(w,I(d(),o.class))}),T(()=>(F(n()),F(y())),()=>{N(h,I(n(),y()))}),ae(),G();var P=Q(),_=B(P);ee(_,()=>!i(C),S=>{var p=Rt();let u;var z=L(p);Ae(z,{tag:"ul",border:!0,rounded:!0,color:"navbarUl",get class(){return i(h)},children:(M,q)=>{var W=Q(),se=B(W);Y(se,e,"default",{},null),v(M,W)},$$slots:{default:!0}}),A(p),E(()=>u=D(p,u,{...l,class:i(w),role:"button",tabindex:"0"})),Ze(3,p,()=>Xe,k),K("click",p,function(M){V.call(this,e,M)}),v(S,p)},S=>{var p=Nt();let u;var z=L(p),M=L(z);Y(M,e,"default",{},null),A(z),A(p),E(()=>{u=D(p,u,{...l,class:i(w),hidden:i(C)}),ie(z,i(h))}),v(S,p)}),v(c,P),j()}var It=U('<img src="images/logo.svg" class="me-3 h-10 sm:h-15" alt="worldtopreviews.com logo"> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">worldtop<span class="font-bold">reviews</span>.com</span>',1),Bt=U("<!> <!> <!>",1),Ht=U("<!> <!> <!>",1);function jt(c){At(c,{children:(e,o)=>{var l=Ht(),t=B(l);zt(t,{href:"/",children:(d,n)=>{var g=It();J(2),v(d,g)},$$slots:{default:!0}});var a=R(t,2);Mt(a,{});var s=R(a,2);Et(s,{children:(d,n)=>{var g=Bt(),k=B(g);ue(k,{href:"/review",children:(y,x)=>{J();var f=X("Merino top 10 brands");v(y,f)},$$slots:{default:!0}});var m=R(k,2);ue(m,{href:"/about",children:(y,x)=>{J();var f=X("About");v(y,f)},$$slots:{default:!0}});var b=R(m,2);ue(b,{href:"/contact",children:(y,x)=>{J();var f=X("Contact");v(y,f)},$$slots:{default:!0}}),v(d,g)},$$slots:{default:!0}}),v(e,l)},$$slots:{default:!0}})}var Ot=U("<!> <!> <!>",1),Gt=U("<!> <!>",1),Dt=U('<div class="md:flex md:justify-between"><div class="mb-6 md:mb-0 flex"><!> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">worldtop<span class="font-bold">reviews</span>.com</span></div> <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"><div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2> <!></div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2> <!></div></div></div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between"><!> <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0"></div></div>',1);function qt(c){_t(c,{footerType:"socialmedia",children:(e,o)=>{var l=Dt(),t=B(l),a=L(t),s=L(a);yt(s,{href:"/",src:"images/logo.svg",alt:"Flowbite Logo",name:"",imgClass:"h-20 ml-5 mr-2"}),J(2),A(a);var d=R(a,2),n=L(d),g=R(L(n),2);ye(g,{children:(x,f)=>{var C=Ot(),w=B(C);le(w,{liClass:"mb-4",href:"/review",children:(_,S)=>{J();var p=X("Merino top 10 brands");v(_,p)},$$slots:{default:!0}});var h=R(w,2);le(h,{liClass:"mb-4",href:"/about",children:(_,S)=>{J();var p=X("About");v(_,p)},$$slots:{default:!0}});var P=R(h,2);le(P,{liClass:"mb-4",href:"/contact",children:(_,S)=>{J();var p=X("Contact");v(_,p)},$$slots:{default:!0}}),v(x,C)},$$slots:{default:!0}}),A(n);var k=R(n,2),m=R(L(k),2);ye(m,{children:(x,f)=>{var C=Gt(),w=B(C);le(w,{liClass:"mb-4",href:"/",children:(P,_)=>{J();var S=X("Privacy Policy");v(P,S)},$$slots:{default:!0}});var h=R(w,2);le(h,{liClass:"mb-4",href:"/",children:(P,_)=>{J();var S=X("Terms & Conditions");v(P,S)},$$slots:{default:!0}}),v(x,C)},$$slots:{default:!0}}),A(k),A(d),A(t);var b=R(t,4),y=L(b);Ct(y,{href:"/",by:"WorldTopReviews",spanClass:"ml-5"}),J(2),A(b),v(e,l)},$$slots:{default:!0}})}var Kt=U("<!> <!> <!>",1);function ia(c,e){H(e,!0),ot(c,{i18n:Oe,children:(o,l)=>{var t=Kt(),a=B(t);jt(a);var s=R(a,2);tt(s,()=>e.children);var d=R(s,2);qt(d),v(o,t)},$$slots:{default:!0}}),j()}export{ia as component,na as universal};
