import{c as J,a as f,t as S,n as ze,e as Q}from"../chunks/legacy.BKtvFfwk.js";import{aR as Se,aV as Me,O as Te,h as ke,j as ve,k as Ne,v as Re,t as we,U as Ee,w as pe,E as Ie,M as Fe,ai as Be,aW as He,aQ as oe,D as j,F as R,I as te,f as H,K as O,J as I,A as v,L as D,G as E,B as T,aU as re,c as $,s as N,r as U,ad as fe,N as je,aS as Y}from"../chunks/runtime.CAQaYCc3.js";import{n as Pe,p as ge,a as he,s as me,i as Oe}from"../chunks/i18n.DoFv87S1.js";import{p as De,k as V,s as ae,r as Ge}from"../chunks/render.Eb9ZH_O9.js";import{i as X}from"../chunks/if.DCIrtqk8.js";import{a as W,t as F,b as le,h as Ke,e as Ve}from"../chunks/bundle-mjs.Bfn3NTub.js";import{i as G}from"../chunks/lifecycle.CWq_QhHN.js";import{p as s,c as ce,d as de,l as z,s as Le}from"../chunks/props.CsUJYzN7.js";import{b as Ae,i as qe}from"../chunks/entry.CFtMtGOY.js";import{g as We,w as be}from"../chunks/index.CO1Q27f-.js";import{e as Ye,i as Je,c as q,F as $e,t as Qe,s as Xe}from"../chunks/Frame.BpMVq55e.js";import{a as ie,s as K,c as ne,h as Ze}from"../chunks/attributes.DDKjeBUs.js";function ea(o,e,l){ve&&Ne();var i=o,t=Ee,a,r=Se()?Me:Te;ke(()=>{r(t,t=e())&&(a&&Re(a),a=we(()=>l(i)))}),ve&&(i=pe)}function aa(o,e,...l){var i=o,t=Fe,a;ke(()=>{t!==(t=e())&&(a&&(Be(a),a=null),a=we(()=>t(i,...l)))},Ie),ve&&(i=pe)}const ta=He;function sa(o,e){return o.protocol!==e.protocol?e.href:e.password||e.username?"//"+[e.username,e.password].filter(Boolean).join(":")+"@"+e.host+e.pathname+e.search+e.hash:o.host!==e.host?"//"+e.host+e.pathname+e.search+e.hash:e.pathname+e.search+e.hash}const xe="paraglide:lang",ra="paraglide_lang";function la(o,e,l){const i=new URL(l,e).pathname;return o.origin!==e.origin||!o.pathname.startsWith(i)}const na={},oa=o=>{oe(na,o)};var ia=S('<link rel="alternate">');function ca(o,e){j(e,!1);const[l,i]=ce(),t=()=>de(ge,"$page",l),a=D(),r=D(),n=D(),m=Pe(Ae,new URL(t().url))||"/";let c=s(e,"availableLanguageTags",8),b=s(e,"strategy",8),C=s(e,"currentLang",8);const g=(x,w)=>{const y=[];for(const u of c()){const p=w.getLocalisedPath(x,u),P=me(p,m,void 0),h=new URL(P,new URL(t().url)).href;y.push(h)}return y};R(()=>t(),()=>{E(a,he(t().url.pathname,m)[0])}),R(()=>(T(b()),v(a),T(C())),()=>{E(r,b().getCanonicalPath(v(a),C()))}),R(()=>(v(r),T(b())),()=>{E(n,g(v(r),b()))}),te(),G();var k=J(),d=H(k);{var _=x=>{var w=J(),y=H(w);Ye(y,1,()=>v(n),Je,(u,p,P)=>{var h=ia();I(()=>{ie(h,"hreflang",c()[P]),ie(h,"href",v(p))}),f(u,h)}),f(x,w)};X(d,x=>{c().length>=1&&x(_)})}f(o,k),O(),i()}const da=(o,e)=>`${ra}=${o};Path=${e};SameSite=lax;Max-Age=31557600`;function ua(o,e){j(e,!1);const[l,i]=ce(),t=()=>de(ge,"$page",l),a=D(),r=D(),n=Pe(Ae,new URL(t().url))||"/";let m=s(e,"languageTag",24,()=>{}),c=s(e,"i18n",8),b=D(0);function C(d,_){try{const x=new URL(We(ge).url),[w,y]=he(x.pathname,n),u=c().strategy.getCanonicalPath(w,v(a)),p=new URL(x);p.pathname=me(u,n,y);const P=new URL(d,new URL(p));if(la(P,x,n)||c().config.exclude(P.pathname))return d;const h=_??v(a),[M,L]=he(P.pathname,n),A=c().strategy.getLocalisedPath(M,h),B=new URL(P);return B.pathname=me(A,n,L),sa(x,B)}catch{return d}}oa({translateHref:C}),R(()=>(T(m()),T(c()),t()),()=>{E(a,m()??c().getLanguageFromUrl(t().url))}),R(()=>(T(c()),v(a)),()=>{c().config.runtime.setLanguageTag(v(a))}),R(()=>v(a),()=>{document.documentElement.lang=v(a)}),R(()=>(T(c()),v(a)),()=>{document.documentElement.dir=c().config.textDirection[v(a)]??"ltr"}),R(()=>(v(a),v(b)),()=>{v(a)&&E(b,v(b)+1)}),R(()=>(v(a),v(b),xe),()=>{v(a)&&(v(b)>1||ta)&&qe(xe)}),R(()=>v(a),()=>{E(r,v(a))}),R(()=>v(a),()=>{document.cookie=da(v(a),n)}),te(),G();var g=J();De(d=>{var _=J(),x=H(_);{var w=y=>{ca(y,{get availableLanguageTags(){return c().config.runtime.availableLanguageTags},get strategy(){return c().strategy},get currentLang(){return v(a)}})};X(x,y=>{c().config.seo.noAlternateLinks!==!0&&!c().config.exclude(t().url.pathname)&&y(w)})}f(d,_)});var k=H(g);ea(k,()=>v(r),d=>{var _=J(),x=H(_);W(x,e,"default",{},null),f(d,_)}),f(o,g),O(),i()}const va=!0,ct=Object.freeze(Object.defineProperty({__proto__:null,prerender:va},Symbol.toStringTag,{value:"Module"}));var fa=S('<span class="sr-only"> </span>'),ga=S("<a><!> <!></a>"),ha=S('<span class="sr-only"> </span>'),ma=S("<button><!> <!></button>");function ba(o,e){const l=z(e,["children","$$slots","$$events","$$legacy"]),i=z(l,["color","name","ariaLabel","size","href"]);j(e,!1);let t=s(e,"color",8,"default"),a=s(e,"name",24,()=>{}),r=s(e,"ariaLabel",24,()=>{}),n=s(e,"size",8,"md"),m=s(e,"href",24,()=>{});const c=re("background"),b={dark:"text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",gray:"text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",red:"text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",yellow:"text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",green:"text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",indigo:"text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",purple:"text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",pink:"text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",blue:"text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",primary:"text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",default:"focus:ring-gray-400 hover:bg-gray-100"},C={xs:"m-0.5 rounded-sm focus:ring-1 p-0.5",sm:"m-0.5 rounded focus:ring-1 p-0.5",md:"m-0.5 rounded-lg focus:ring-2 p-1.5",lg:"m-0.5 rounded-lg focus:ring-2 p-2.5"};let g=D();const k={xs:"w-3 h-3",sm:"w-3.5 h-3.5",md:"w-5 h-5",lg:"w-5 h-5"};R(()=>(T(n()),T(t()),T(l)),()=>{E(g,F("focus:outline-none whitespace-normal",C[n()],b[t()],t()==="default"&&(c?"dark:hover:bg-gray-600":"dark:hover:bg-gray-700"),l.class))}),te(),G();var d=J(),_=H(d);{var x=y=>{var u=ga();let p;var P=$(u);{var h=L=>{var A=fa(),B=$(A,!0);U(A),I(()=>ae(B,a())),f(L,A)};X(P,L=>{a()&&L(h)})}var M=N(P,2);W(M,e,"default",{get svgSize(){return k[n()]}},null),U(u),I(()=>p=K(u,p,{href:m(),...i,class:v(g),"aria-label":r()??a()})),f(y,u)},w=y=>{var u=ma();let p;var P=$(u);{var h=L=>{var A=ha(),B=$(A,!0);U(A),I(()=>ae(B,a())),f(L,A)};X(P,L=>{a()&&L(h)})}var M=N(P,2);W(M,e,"default",{get svgSize(){return k[n()]}},null),U(u),I(()=>p=K(u,p,{type:"button",...i,class:v(g),"aria-label":r()??a()})),V("click",u,function(L){q.call(this,e,L)}),f(y,u)};X(_,y=>{m()?y(x):y(w,!1)})}f(o,d),O()}var _a=S("<footer><!></footer>");function xa(o,e){const l=z(e,["children","$$slots","$$events","$$legacy"]),i=z(l,["footerType"]);j(e,!1);let t=s(e,"footerType",24,()=>{}),a=F(t()==="sitemap"&&"bg-gray-800",t()==="socialmedia"&&"p-4 bg-white sm:p-6 dark:bg-gray-800",t()==="logo"&&"p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800",t()==="default"&&"p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800",l.class);G();var r=_a();let n;var m=$(r);W(m,e,"default",{},null),U(r),I(()=>n=K(r,n,{...i,class:a})),f(o,r),O()}var ya=S("<a><img> <span> </span> <!></a>"),Ca=S("<img>");function ka(o,e){const l=z(e,["children","$$slots","$$events","$$legacy"]),i=z(l,["aClass","spanClass","imgClass","href","src","alt","name","target","classA","classSpan","classImg"]);j(e,!1);let t=s(e,"aClass",8,"flex items-center"),a=s(e,"spanClass",8,"self-center text-2xl font-semibold whitespace-nowrap dark:text-white"),r=s(e,"imgClass",8,"me-3 h-8"),n=s(e,"href",8,""),m=s(e,"src",8,""),c=s(e,"alt",8,""),b=s(e,"name",8,""),C=s(e,"target",8,""),g=s(e,"classA",8,""),k=s(e,"classSpan",8,""),d=s(e,"classImg",8,""),_=F(t(),g()),x=F(a(),k()),w=F(r(),d());G();var y=J(),u=H(y);{var p=h=>{var M=ya();let L;var A=$(M);le(A,ne(w));var B=N(A,2);le(B,ne(x));var Z=$(B,!0);U(B);var ee=N(B,2);W(ee,e,"default",{},null),U(M),I(()=>{L=K(M,L,{...i,href:n(),target:C(),class:_}),ie(A,"src",m()),ie(A,"alt",c()),ae(Z,b())}),f(h,M)},P=h=>{var M=Ca();let L;I(()=>L=K(M,L,{...i,src:m(),class:w,alt:c()})),Ze(M),Ge(M),f(h,M)};X(u,h=>{n()?h(p):h(P,!1)})}f(o,y),O()}var wa=S("<a> </a>"),pa=S('<span class="ms-1"> </span>'),Pa=S("<span> <!> </span>");function La(o,e){const l=z(e,["children","$$slots","$$events","$$legacy"]),i=z(l,["spanClass","aClass","year","href","by","target","copyrightMessage","classSpan","classA"]);j(e,!1);let t=s(e,"spanClass",8,"block text-sm text-gray-500 sm:text-center dark:text-gray-400"),a=s(e,"aClass",8,"hover:underline"),r=s(e,"year",24,()=>new Date().getFullYear()),n=s(e,"href",8,""),m=s(e,"by",8,""),c=s(e,"target",24,()=>{}),b=s(e,"copyrightMessage",8,"All Rights Reserved."),C=s(e,"classSpan",8,""),g=s(e,"classA",8,""),k=F(t(),C()),d=F(a(),g());G();var _=Pa();le(_,ne(k));var x=$(_),w=N(x);{var y=P=>{var h=wa();let M;var L=$(h,!0);U(h),I(()=>{M=K(h,M,{...i,href:n(),target:c(),class:d}),ae(L,m())}),f(P,h)},u=P=>{var h=pa(),M=$(h,!0);U(h),I(()=>ae(M,m())),f(P,h)};X(w,P=>{n()?P(y):P(u,!1)})}var p=N(w);U(_),I(()=>{ae(x,`© ${r()??""} `),ae(p,` ${b()??""}`)}),f(o,_),O()}var Aa=S("<li><a><!></a></li>");function se(o,e){const l=z(e,["children","$$slots","$$events","$$legacy"]),i=z(l,["liClass","aClass","href","target","classLi","classA"]);j(e,!1);let t=s(e,"liClass",8,"me-4 last:me-0 md:me-6"),a=s(e,"aClass",8,"hover:underline"),r=s(e,"href",8,""),n=s(e,"target",24,()=>{}),m=s(e,"classLi",8,""),c=s(e,"classA",8,""),b=F(t(),m()),C=F(a(),c());G();var g=Aa();le(g,ne(b));var k=$(g);let d;var _=$(k);W(_,e,"default",{},null),U(k),U(g),I(()=>d=K(k,d,{...i,href:r(),class:C,target:n()})),f(o,g),O()}var $a=S("<ul><!></ul>");function ye(o,e){const l=z(e,["children","$$slots","$$events","$$legacy"]),i=z(l,["ulClass"]);j(e,!1);let t=s(e,"ulClass",8,"text-gray-600 dark:text-gray-400");G();var a=$a();let r;var n=$(a);W(n,e,"default",{},null),U(a),I(()=>r=K(a,r,{...i,class:F(t(),l.class)})),f(o,a),O()}var Ua=S("<div><!></div>");function Ce(o,e){const l=z(e,["children","$$slots","$$events","$$legacy"]),i=z(l,["fluid"]);j(e,!1);let t=s(e,"fluid",8,!1);G();var a=Ua();let r;var n=$(a);W(n,e,"default",{},null),U(a),I(()=>r=K(a,r,{...i,class:F("mx-auto flex flex-wrap justify-between items-center ",t()?"w-full":"container",l.class)})),f(o,a),O()}function za(o,e){const l=z(e,["children","$$slots","$$events","$$legacy"]),i=z(l,["fluid","navContainerClass"]);j(e,!1);const[t,a]=ce(),r=()=>de(c,"$hidden",t);let n=s(e,"fluid",8,!1),m=s(e,"navContainerClass",8,""),c=be(!0);oe("navHidden",c);let b=()=>c.update(g=>!g);R(()=>T(i),()=>{i.color=i.color??"navbar"}),te(),G();var C=fe(()=>F("px-2 sm:px-4 py-2.5 w-full",l.class));$e(o,Le({tag:"nav"},()=>i,{get class(){return v(C)},children:(g,k)=>{Ce(g,{get fluid(){return n()},get class(){return m()},children:(d,_)=>{var x=J(),w=H(x);W(w,e,"default",{get hidden(){return r()},toggle:b,NavContainer:Ce},null),f(d,x)},$$slots:{default:!0}})},$$slots:{default:!0}})),O(),a()}var Sa=S("<a><!></a>");function Ma(o,e){const l=z(e,["children","$$slots","$$events","$$legacy"]),i=z(l,["href"]);j(e,!1);let t=s(e,"href",8,"");G();var a=Sa();let r;var n=$(a);W(n,e,"default",{},null),U(a),I(()=>r=K(a,r,{href:t(),...i,class:F("flex items-center",l.class)})),f(o,a),O()}var Ta=ze("<svg><!></svg>");function Na(o,e){const l=z(e,["children","$$slots","$$events","$$legacy"]),i=z(l,["size","color","variation","ariaLabel"]);j(e,!1);let t=s(e,"size",8,"24"),a=s(e,"color",8,"currentColor"),r=s(e,"variation",8,"outline"),n=s(e,"ariaLabel",8,"bars 3"),m=D(),c=D(),b=`<path stroke="${a()}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `,C=`<path fill="${a()}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;R(()=>T(r()),()=>{switch(r()){case"outline":E(c,b),E(m,"0 0 24 24");break;case"solid":E(c,C),E(m,"0 0 24 24");break;default:E(c,b),E(m,"0 0 24 24")}}),te(),G();var g=Ta();let k;var d=$(g);Ke(d,()=>v(c),!0,!1),U(g),I(()=>k=K(g,k,{xmlns:"http://www.w3.org/2000/svg",role:"button",tabindex:"0",width:t(),height:t(),class:l.class,...i,"aria-label":n(),fill:"none",viewBox:v(m),"stroke-width":"2"},void 0,!0)),V("click",g,function(_){q.call(this,e,_)}),f(o,g),O()}function Ra(o,e){const l=z(e,["children","$$slots","$$events","$$legacy"]),i=z(l,["menuClass","onClick","classMenu"]);j(e,!1);let t=s(e,"menuClass",8,"h-6 w-6 shrink-0"),a=s(e,"onClick",24,()=>{}),r=s(e,"classMenu",8,""),n="ms-3 md:hidden",m=re("navHidden")??be(!0);const c=C=>m.update(g=>!g);G();var b=fe(()=>F(n,l.class));ba(o,Le({name:"Open main menu"},()=>i,{get class(){return v(b)},$$events:{click(...C){var g;(g=a()||c)==null||g.apply(this,C)}},children:(C,g)=>{var k=fe(()=>F(t(),r()));Na(C,{get class(){return v(k)}})},$$slots:{default:!0}})),O()}var Ea=S("<li><!></li>");function ue(o,e){const l=z(e,["children","$$slots","$$events","$$legacy"]),i=z(l,["href","activeClass","nonActiveClass"]);j(e,!1);const t=D(),a=D();let r=s(e,"href",8,""),n=s(e,"activeClass",24,()=>{}),m=s(e,"nonActiveClass",24,()=>{});const c=re("navbarContext")??{},b=re("activeUrl");let C=D("");b.subscribe(d=>{E(C,d)}),R(()=>(v(C),T(r())),()=>{E(t,v(C)?r()===v(C):!1)}),R(()=>(v(t),T(n()),T(m()),T(l)),()=>{E(a,F("block py-2 pe-4 ps-3 md:p-0 rounded md:border-0",v(t)?n()??c.activeClass:m()??c.nonActiveClass,l.class))}),te(),G();var g=Ea(),k=$(g);Ve(k,()=>r()?"a":"div",!1,(d,_)=>{let x;I(()=>x=K(d,x,{role:r()?void 0:"link",href:r(),...i,class:v(a)},void 0,d.namespaceURI===je,d.nodeName.includes("-"))),V("blur",d,function(u){q.call(this,e,u)}),V("change",d,function(u){q.call(this,e,u)}),V("click",d,function(u){q.call(this,e,u)}),V("focus",d,function(u){q.call(this,e,u)}),V("keydown",d,function(u){q.call(this,e,u)}),V("keypress",d,function(u){q.call(this,e,u)}),V("keyup",d,function(u){q.call(this,e,u)}),V("mouseenter",d,function(u){q.call(this,e,u)}),V("mouseleave",d,function(u){q.call(this,e,u)}),V("mouseover",d,function(u){q.call(this,e,u)});var w=J(),y=H(w);W(y,e,"default",{},null),f(_,w)}),U(g),f(o,g),O()}function Ia(o){const e=Math.cos(o*Math.PI*.5);return Math.abs(e)<1e-14?1:1-e}var Fa=S("<div><!></div>"),Ba=S("<div><ul><!></ul></div>");function Ha(o,e){const l=z(e,["children","$$slots","$$events","$$legacy"]),i=z(l,["activeUrl","divClass","ulClass","hidden","slideParams","activeClass","nonActiveClass","classUl"]);j(e,!1);const[t,a]=ce(),r=()=>de(x,"$hiddenStore",t);let n=s(e,"activeUrl",8,""),m=s(e,"divClass",8,"w-full md:block md:w-auto"),c=s(e,"ulClass",8,"flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium"),b=s(e,"hidden",24,()=>{}),C=s(e,"slideParams",24,()=>({delay:250,duration:500,easing:Ia})),g=s(e,"activeClass",8,"text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent"),k=s(e,"nonActiveClass",8,"text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"),d=s(e,"classUl",8,"");const _=be("");oe("navbarContext",{activeClass:g(),nonActiveClass:k()}),oe("activeUrl",_);let x=re("navHidden"),w=D(),y=D(),u=D();R(()=>T(n()),()=>{_.set(n())}),R(()=>(T(b()),r()),()=>{E(w,b()??r()??!0)}),R(()=>(T(m()),T(l)),()=>{E(y,F(m(),l.class))}),R(()=>(T(c()),T(d())),()=>{E(u,F(c(),d()))}),te(),G();var p=J(),P=H(p);{var h=L=>{var A=Fa();let B;var Z=$(A);$e(Z,{tag:"ul",border:!0,rounded:!0,color:"navbarUl",get class(){return v(u)},children:(ee,Ja)=>{var _e=J(),Ue=H(_e);W(Ue,e,"default",{},null),f(ee,_e)},$$slots:{default:!0}}),U(A),I(()=>B=K(A,B,{...i,class:v(y),role:"button",tabindex:"0"})),Qe(3,A,()=>Xe,C),V("click",A,function(ee){q.call(this,e,ee)}),f(L,A)},M=L=>{var A=Ba();let B;var Z=$(A),ee=$(Z);W(ee,e,"default",{},null),U(Z),U(A),I(()=>{B=K(A,B,{...i,class:v(y),hidden:v(w)}),le(Z,ne(v(u)))}),f(L,A)};X(P,L=>{v(w)?L(M,!1):L(h)})}f(o,p),O(),a()}var ja=S('<img src="images/logo.svg" class="me-3 h-10 sm:h-15" alt="worldtopreviews.com logo"> <span class="text-[#191919] self-center whitespace-nowrap text-xl dark:text-white">worldtop<span class="font-bold">reviews</span>.com</span>',1),Oa=S("<!> <!> <!>",1),Da=S("<!> <!> <!>",1);function Ga(o){za(o,{children:(e,l)=>{var i=Da(),t=H(i);Ma(t,{href:"/",children:(n,m)=>{var c=ja();Y(2),f(n,c)},$$slots:{default:!0}});var a=N(t,2);Ra(a,{});var r=N(a,2);Ha(r,{children:(n,m)=>{var c=Oa(),b=H(c);ue(b,{href:"/the-best-mens-boxer-briefs-money-can-buy-2025",children:(k,d)=>{Y();var _=Q("Top 5 Men's Boxers of 2025");f(k,_)},$$slots:{default:!0}});var C=N(b,2);ue(C,{href:"/about",children:(k,d)=>{Y();var _=Q("About");f(k,_)},$$slots:{default:!0}});var g=N(C,2);ue(g,{href:"/contact",children:(k,d)=>{Y();var _=Q("Contact");f(k,_)},$$slots:{default:!0}}),f(n,c)},$$slots:{default:!0}}),f(e,i)},$$slots:{default:!0}})}var Ka=S("<!> <!> <!>",1),Va=S("<!> <!> <!>",1),qa=S('<div class="md:flex md:justify-between"><div class="mb-6 md:mb-0 flex"><!> <span class="self-center whitespace-nowrap text-xl dark:text-white">worldtop<span class="font-bold">reviews</span>.com</span></div> <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"><div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2> <!></div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2> <!></div></div></div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between"><!> <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0"></div></div>',1);function Wa(o){xa(o,{footerType:"socialmedia",children:(e,l)=>{var i=qa(),t=H(i),a=$(t),r=$(a);ka(r,{href:"/",src:"images/logo.svg",alt:"Flowbite Logo",name:"",imgClass:"h-20 ml-5 mr-2"}),Y(2),U(a);var n=N(a,2),m=$(n),c=N($(m),2);ye(c,{children:(d,_)=>{var x=Ka(),w=H(x);se(w,{liClass:"mb-4",href:"/the-best-mens-boxer-briefs-money-can-buy-2025",children:(p,P)=>{Y();var h=Q("Top 5 Men's Boxers of 2025");f(p,h)},$$slots:{default:!0}});var y=N(w,2);se(y,{liClass:"mb-4",href:"/about",children:(p,P)=>{Y();var h=Q("About");f(p,h)},$$slots:{default:!0}});var u=N(y,2);se(u,{liClass:"mb-4",href:"/contact",children:(p,P)=>{Y();var h=Q("Contact");f(p,h)},$$slots:{default:!0}}),f(d,x)},$$slots:{default:!0}}),U(m);var b=N(m,2),C=N($(b),2);ye(C,{children:(d,_)=>{var x=Va(),w=H(x);se(w,{liClass:"mb-4",href:"/",children:(p,P)=>{Y();var h=Q("Privacy Policy");f(p,h)},$$slots:{default:!0}});var y=N(w,2);se(y,{liClass:"mb-4",href:"/",children:(p,P)=>{Y();var h=Q("Terms & Conditions");f(p,h)},$$slots:{default:!0}});var u=N(y,2);se(u,{liClass:"mb-4",href:"/disclaimer",children:(p,P)=>{Y();var h=Q("Disclaimer");f(p,h)},$$slots:{default:!0}}),f(d,x)},$$slots:{default:!0}}),U(b),U(n),U(t);var g=N(t,4),k=$(g);La(k,{href:"/",by:"WorldTopReviews",spanClass:"ml-5"}),Y(2),U(g),f(e,i)},$$slots:{default:!0}})}var Ya=S("<!> <!> <!>",1);function dt(o,e){j(e,!0),ua(o,{i18n:Oe,children:(l,i)=>{var t=Ya(),a=H(t);Ga(a);var r=N(a,2);aa(r,()=>e.children);var n=N(r,2);Wa(n),f(l,t)},$$slots:{default:!0}}),O()}export{dt as component,ct as universal};
