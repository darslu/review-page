import{ah as we,i as ae,ax as _e,o as k,v as W,q as B,M as Te,as as Ce,H as Ge,u as pe,w as Q,x as z,j as le,k as D,l as ke,ay as re,K as Pe,Z as oe,az as ie,aA as be,aB as ce,aC as Le,m as Oe,V as ge,aD as Ve,ar as je,aE as We,aF as de,al as j,ao as $e,aG as He,ak as Ae,ap as Be,an as Fe,E as Ue,Q as qe}from"./runtime.C9eU0xBD.js";import{e as ne,m as Ye}from"./disclose-version.AEIO28_V.js";import{a as me}from"./render.DeHphyJE.js";let $=null;function he(e){$=e}function Rr(e,r){return r}function Xe(e,r,t,o){for(var l=[],n=r.length,a=0;a<n;a++)Ve(r[a].e,l,!0);var s=n>0&&l.length===0&&t!==null;if(s){var c=t.parentNode;je(c),c.append(t),o.clear(),T(e,r[0].prev,r[n-1].next)}We(l,()=>{for(var d=0;d<n;d++){var p=r[d];s||(o.delete(p.k),T(e,p.prev,p.next)),de(p.e,!s)}})}function Ir(e,r,t,o,l,n=null){var a=e,s={flags:r,items:new Map,first:null},c=(r&_e)!==0;if(c){var d=e;a=k?W(j(d)):d.appendChild(we())}k&&B();var p=null,i=!1;ae(()=>{var y=t(),u=Te(y)?y:y==null?[]:Ce(y),g=u.length;if(i&&g===0)return;i=g===0;let h=!1;if(k){var m=a.data===Ge;m!==(g===0)&&(a=pe(),W(a),Q(!1),h=!0)}if(k){for(var x=null,C,b=0;b<g;b++){if(z.nodeType===8&&z.data===$e){a=z,h=!0,Q(!1);break}var v=u[b],E=o(v,b);C=ze(z,s,x,null,v,E,b,l,r),s.items.set(E,C),x=C}g>0&&W(pe())}k||Ze(u,s,a,l,r,o),n!==null&&(g===0?p?le(p):p=D(()=>n(a)):p!==null&&ke(p,()=>{p=null})),h&&Q(!0),t()}),k&&(a=z)}function Ze(e,r,t,o,l,n){var q,O,Y,V;var a=(l&He)!==0,s=(l&(ie|ce))!==0,c=e.length,d=r.items,p=r.first,i=p,y,u=null,g,h=[],m=[],x,C,b,v;if(a)for(v=0;v<c;v+=1)x=e[v],C=n(x,v),b=d.get(C),b!==void 0&&((q=b.a)==null||q.measure(),(g??(g=new Set)).add(b));for(v=0;v<c;v+=1){if(x=e[v],C=n(x,v),b=d.get(C),b===void 0){var E=i?i.e.nodes_start:t;u=ze(E,r,u,u===null?r.first:u.next,x,C,v,o,l),d.set(C,u),h=[],m=[],i=u.next;continue}if(s&&Je(b,x,v,l),b.e.f&re&&(le(b.e),a&&((O=b.a)==null||O.unfix(),(g??(g=new Set)).delete(b))),b!==i){if(y!==void 0&&y.has(b)){if(h.length<m.length){var G=m[0],A;u=G.prev;var U=h[0],P=h[h.length-1];for(A=0;A<h.length;A+=1)ve(h[A],G,t);for(A=0;A<m.length;A+=1)y.delete(m[A]);T(r,U.prev,P.next),T(r,u,U),T(r,P,G),i=G,u=P,v-=1,h=[],m=[]}else y.delete(b),ve(b,i,t),T(r,b.prev,b.next),T(r,b,u===null?r.first:u.next),T(r,u,b),u=b;continue}for(h=[],m=[];i!==null&&i.k!==C;)i.e.f&re||(y??(y=new Set)).add(i),m.push(i),i=i.next;if(i===null)continue;b=i}h.push(b),u=b,i=b.next}if(i!==null||y!==void 0){for(var S=y===void 0?[]:Ce(y);i!==null;)i.e.f&re||S.push(i),i=i.next;var L=S.length;if(L>0){var w=l&_e&&c===0?t:null;if(a){for(v=0;v<L;v+=1)(Y=S[v].a)==null||Y.measure();for(v=0;v<L;v+=1)(V=S[v].a)==null||V.fix()}Xe(r,S,w,d)}}a&&Pe(()=>{var X;if(g!==void 0)for(b of g)(X=b.a)==null||X.apply()}),oe.first=r.first&&r.first.e,oe.last=u&&u.e}function Je(e,r,t,o){o&ie&&be(e.v,r),o&ce?be(e.i,t):e.i=t}function ze(e,r,t,o,l,n,a,s,c){var d=$;try{var p=(c&ie)!==0,i=(c&Le)===0,y=p?i?Oe(l):ge(l):l,u=c&ce?ge(a):a,g={i:u,v:y,k:n,a:null,e:null,prev:t,next:o};return $=g,g.e=D(()=>s(e,y,u),k),g.e.prev=t&&t.e,g.e.next=o&&o.e,t===null?r.first=g:(t.next=g,t.e.next=g.e),o!==null&&(o.prev=g,o.e.prev=g.e),g}finally{$=d}}function ve(e,r,t){for(var o=e.next?e.next.e.nodes_start:t,l=r?r.e.nodes_start:t,n=e.e.nodes_start;n!==o;){var a=Ae(n);l.before(n),n=a}}function T(e,r,t){r===null?e.first=t:(r.next=t,r.e.next=t&&t.e),t!==null&&(t.prev=r,t.e.prev=r&&r.e)}function Tr(e,r,t,o,l){var n=e,a="",s;ae(()=>{if(a===(a=r()??"")){k&&B();return}s!==void 0&&(de(s),s=void 0),a!==""&&(s=D(()=>{if(k){z.data;for(var c=B(),d=c;c!==null&&(c.nodeType!==8||c.data!=="");)d=c,c=Ae(c);if(c===null)throw Be(),Fe;ne(z,d),n=W(c);return}var p=a+"";t&&(p=`<svg>${p}</svg>`);var i=Ye(p);if((t||o)&&(i=j(i)),ne(j(i),i.lastChild),t||o)for(;j(i);)n.before(j(i));else n.before(i)}))})}function Gr(e,r,t,o,l){var s;k&&B();var n=(s=r.$$slots)==null?void 0:s[t],a=!1;n===!0&&(n=r[t==="default"?"children":t],a=!0),n===void 0?l!==null&&l(e):n(e,a?()=>o:o)}function Pr(e){const r={};e.children&&(r.default=!0);for(const t in e.$$slots)r[t]=!0;return r}function Lr(e,r,t,o,l,n){let a=k;k&&B();var s,c,d=null;k&&z.nodeType===1&&(d=z,B());var p=k?z:e,i,y=$;ae(()=>{const u=r()||null;var g=u==="svg"?qe:null;if(u!==s){var h=$;he(y),i&&(u===null?ke(i,()=>{i=null,c=null}):u===c?le(i):(de(i),me(!1))),u&&u!==c&&(i=D(()=>{if(d=k?d:g?document.createElementNS(g,u):document.createElement(u),ne(d,d),o){var m=k?j(d):d.appendChild(we());k&&(m===null?Q(!1):W(m)),o(d,m)}oe.nodes_end=d,p.before(d)})),s=u,s&&(c=s),me(!0),he(h)}},Ue),a&&(Q(!0),W(p))}function Or(e,r){var t=e.__className,o=Ee(r);k&&e.getAttribute("class")===o?e.__className=o:(t!==o||k&&e.getAttribute("class")!==o)&&(o===""?e.removeAttribute("class"):e.setAttribute("class",o),e.__className=o)}function Vr(e,r){var t=e.__className,o=Ee(r);k&&e.className===o?e.__className=o:(t!==o||k&&e.className!==o)&&(r==null?e.removeAttribute("class"):e.className=o,e.__className=o)}function Ee(e){return e??""}const ue="-",Ke=e=>{const r=De(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:a=>{const s=a.split(ue);return s[0]===""&&s.length!==1&&s.shift(),Se(s,r)||Qe(a)},getConflictingClassGroupIds:(a,s)=>{const c=t[a]||[];return s&&o[a]?[...c,...o[a]]:c}}},Se=(e,r)=>{var a;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),l=o?Se(e.slice(1),o):void 0;if(l)return l;if(r.validators.length===0)return;const n=e.join(ue);return(a=r.validators.find(({validator:s})=>s(n)))==null?void 0:a.classGroupId},ye=/^\[(.+)\]$/,Qe=e=>{if(ye.test(e)){const r=ye.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},De=e=>{const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return rr(Object.entries(e.classGroups),t).forEach(([n,a])=>{se(a,o,n,r)}),o},se=(e,r,t,o)=>{e.forEach(l=>{if(typeof l=="string"){const n=l===""?r:xe(r,l);n.classGroupId=t;return}if(typeof l=="function"){if(er(l)){se(l(o),r,t,o);return}r.validators.push({validator:l,classGroupId:t});return}Object.entries(l).forEach(([n,a])=>{se(a,xe(r,n),t,o)})})},xe=(e,r)=>{let t=e;return r.split(ue).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},er=e=>e.isThemeGetter,rr=(e,r)=>r?e.map(([t,o])=>{const l=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([a,s])=>[r+a,s])):n);return[t,l]}):e,tr=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const l=(n,a)=>{t.set(n,a),r++,r>e&&(r=0,o=t,t=new Map)};return{get(n){let a=t.get(n);if(a!==void 0)return a;if((a=o.get(n))!==void 0)return l(n,a),a},set(n,a){t.has(n)?t.set(n,a):l(n,a)}}},Me="!",or=e=>{const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,l=r[0],n=r.length,a=s=>{const c=[];let d=0,p=0,i;for(let m=0;m<s.length;m++){let x=s[m];if(d===0){if(x===l&&(o||s.slice(m,m+n)===r)){c.push(s.slice(p,m)),p=m+n;continue}if(x==="/"){i=m;continue}}x==="["?d++:x==="]"&&d--}const y=c.length===0?s:s.substring(p),u=y.startsWith(Me),g=u?y.substring(1):y,h=i&&i>p?i-p:void 0;return{modifiers:c,hasImportantModifier:u,baseClassName:g,maybePostfixModifierPosition:h}};return t?s=>t({className:s,parseClassName:a}):a},nr=e=>{if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r},sr=e=>({cache:tr(e.cacheSize),parseClassName:or(e),...Ke(e)}),ar=/\s+/,lr=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:l}=r,n=[],a=e.trim().split(ar);let s="";for(let c=a.length-1;c>=0;c-=1){const d=a[c],{modifiers:p,hasImportantModifier:i,baseClassName:y,maybePostfixModifierPosition:u}=t(d);let g=!!u,h=o(g?y.substring(0,u):y);if(!h){if(!g){s=d+(s.length>0?" "+s:s);continue}if(h=o(y),!h){s=d+(s.length>0?" "+s:s);continue}g=!1}const m=nr(p).join(":"),x=i?m+Me:m,C=x+h;if(n.includes(C))continue;n.push(C);const b=l(h,g);for(let v=0;v<b.length;++v){const E=b[v];n.push(x+E)}s=d+(s.length>0?" "+s:s)}return s};function ir(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=Ne(r))&&(o&&(o+=" "),o+=t);return o}const Ne=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=Ne(e[o]))&&(t&&(t+=" "),t+=r);return t};function cr(e,...r){let t,o,l,n=a;function a(c){const d=r.reduce((p,i)=>i(p),e());return t=sr(d),o=t.cache.get,l=t.cache.set,n=s,s(c)}function s(c){const d=o(c);if(d)return d;const p=lr(c,t);return l(c,p),p}return function(){return n(ir.apply(null,arguments))}}const _=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},Re=/^\[(?:([a-z-]+):)?(.+)\]$/i,dr=/^\d+\/\d+$/,ur=new Set(["px","full","screen"]),fr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,pr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,br=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,gr=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,mr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,N=e=>H(e)||ur.has(e)||dr.test(e),R=e=>F(e,"length",kr),H=e=>!!e&&!Number.isNaN(Number(e)),te=e=>F(e,"number",H),J=e=>!!e&&Number.isInteger(Number(e)),hr=e=>e.endsWith("%")&&H(e.slice(0,-1)),f=e=>Re.test(e),I=e=>fr.test(e),vr=new Set(["length","size","percentage"]),yr=e=>F(e,vr,Ie),xr=e=>F(e,"position",Ie),wr=new Set(["image","url"]),_r=e=>F(e,wr,zr),Cr=e=>F(e,"",Ar),K=()=>!0,F=(e,r,t)=>{const o=Re.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1},kr=e=>pr.test(e)&&!br.test(e),Ie=()=>!1,Ar=e=>gr.test(e),zr=e=>mr.test(e),Er=()=>{const e=_("colors"),r=_("spacing"),t=_("blur"),o=_("brightness"),l=_("borderColor"),n=_("borderRadius"),a=_("borderSpacing"),s=_("borderWidth"),c=_("contrast"),d=_("grayscale"),p=_("hueRotate"),i=_("invert"),y=_("gap"),u=_("gradientColorStops"),g=_("gradientColorStopPositions"),h=_("inset"),m=_("margin"),x=_("opacity"),C=_("padding"),b=_("saturate"),v=_("scale"),E=_("sepia"),G=_("skew"),A=_("space"),U=_("translate"),P=()=>["auto","contain","none"],S=()=>["auto","hidden","clip","visible","scroll"],L=()=>["auto",f,r],w=()=>[f,r],q=()=>["",N,R],O=()=>["auto",H,f],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],X=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ee=()=>["start","end","center","between","around","evenly","stretch"],Z=()=>["","0",f],fe=()=>["auto","avoid","all","avoid-page","page","left","right","column"],M=()=>[H,f];return{cacheSize:500,separator:":",theme:{colors:[K],spacing:[N,R],blur:["none","",I,f],brightness:M(),borderColor:[e],borderRadius:["none","","full",I,f],borderSpacing:w(),borderWidth:q(),contrast:M(),grayscale:Z(),hueRotate:M(),invert:Z(),gap:w(),gradientColorStops:[e],gradientColorStopPositions:[hr,R],inset:L(),margin:L(),opacity:M(),padding:w(),saturate:M(),scale:M(),sepia:Z(),skew:M(),space:w(),translate:w()},classGroups:{aspect:[{aspect:["auto","square","video",f]}],container:["container"],columns:[{columns:[I]}],"break-after":[{"break-after":fe()}],"break-before":[{"break-before":fe()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),f]}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",J,f]}],basis:[{basis:L()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",f]}],grow:[{grow:Z()}],shrink:[{shrink:Z()}],order:[{order:["first","last","none",J,f]}],"grid-cols":[{"grid-cols":[K]}],"col-start-end":[{col:["auto",{span:["full",J,f]},f]}],"col-start":[{"col-start":O()}],"col-end":[{"col-end":O()}],"grid-rows":[{"grid-rows":[K]}],"row-start-end":[{row:["auto",{span:[J,f]},f]}],"row-start":[{"row-start":O()}],"row-end":[{"row-end":O()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",f]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",f]}],gap:[{gap:[y]}],"gap-x":[{"gap-x":[y]}],"gap-y":[{"gap-y":[y]}],"justify-content":[{justify:["normal",...ee()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...ee(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...ee(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[C]}],px:[{px:[C]}],py:[{py:[C]}],ps:[{ps:[C]}],pe:[{pe:[C]}],pt:[{pt:[C]}],pr:[{pr:[C]}],pb:[{pb:[C]}],pl:[{pl:[C]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",f,r]}],"min-w":[{"min-w":[f,r,"min","max","fit"]}],"max-w":[{"max-w":[f,r,"none","full","min","max","fit","prose",{screen:[I]},I]}],h:[{h:[f,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[f,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[f,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[f,r,"auto","min","max","fit"]}],"font-size":[{text:["base",I,R]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",te]}],"font-family":[{font:[K]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",f]}],"line-clamp":[{"line-clamp":["none",H,te]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",N,f]}],"list-image":[{"list-image":["none",f]}],"list-style-type":[{list:["none","disc","decimal",f]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",N,R]}],"underline-offset":[{"underline-offset":["auto",N,f]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:w()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",f]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",f]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),xr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",yr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},_r]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[u]}],"gradient-via":[{via:[u]}],"gradient-to":[{to:[u]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:V()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-s":[{"border-s":[l]}],"border-color-e":[{"border-e":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[N,f]}],"outline-w":[{outline:[N,R]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[N,R]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",I,Cr]}],"shadow-color":[{shadow:[K]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":[...X(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":X()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",I,f]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[i]}],saturate:[{saturate:[b]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[i]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[b]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",f]}],duration:[{duration:M()}],ease:[{ease:["linear","in","out","in-out",f]}],delay:[{delay:M()}],animate:[{animate:["none","spin","ping","pulse","bounce",f]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[J,f]}],"translate-x":[{"translate-x":[U]}],"translate-y":[{"translate-y":[U]}],"skew-x":[{"skew-x":[G]}],"skew-y":[{"skew-y":[G]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",f]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",f]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",f]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[N,R,te]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},jr=cr(Er);export{Gr as a,Vr as b,Or as c,Ir as d,Lr as e,Tr as h,Rr as i,Pr as s,jr as t};