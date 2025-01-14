import{b as G,L as x,o as h,ao as k,a9 as M,ar as z,N as J,ad as F,_ as L,au as N,i as Q,aL as K,aM as H,aH as C,w as E,v as A,x as u,ag as m,aN as W,aO as X,q,aP as D,aJ as R,aF as Z,aI as ee,aQ as te,ah as re,aw as ae,aR as ne,k as oe,p as ie,a as se,A as ue}from"./utils.CtqPTr58.js";const $=new Set,I=new Set;function me(e){if(!h)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const t=e.__e;t!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(t)}))}function le(e,t,r,i){function n(a){if(i.capture||b.call(t,a),!a.cancelBubble){var o=F,c=L;k(null),M(null);try{return r.call(this,a)}finally{k(o),M(c)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?x(()=>{t.addEventListener(e,n,i)}):t.addEventListener(e,n,i),n}function ge(e,t,r,i,n){var a={capture:i,passive:n},o=le(e,t,r,a);(t===document.body||t===window||t===document)&&G(()=>{t.removeEventListener(e,o,a)})}function we(e){for(var t=0;t<e.length;t++)$.add(e[t]);for(var r of I)r(e)}function b(e){var V;var t=this,r=t.ownerDocument,i=e.type,n=((V=e.composedPath)==null?void 0:V.call(e))||[],a=n[0]||e.target,o=0,c=e.__root;if(c){var d=n.indexOf(c);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var f=n.indexOf(t);if(f===-1)return;d<=f&&(o=d)}if(a=n[o]||e.target,a!==t){z(e,"currentTarget",{configurable:!0,get(){return a||r}});var T=F,_=L;k(null),M(null);try{for(var s,l=[];a!==null;){var y=a.assignedSlot||a.parentNode||a.host||null;try{var g=a["__"+i];if(g!==void 0&&!a.disabled)if(J(g)){var[Y,...j]=g;Y.apply(a,[e,...j])}else g.call(a,e)}catch(S){s?l.push(S):s=S}if(e.cancelBubble||y===t||y===null)break;a=y}if(s){for(let S of l)queueMicrotask(()=>{throw S});throw s}}finally{e.__root=t,delete e.currentTarget,k(T),M(_)}}}let v;function de(){v=void 0}function Ee(e){let t=null,r=h;var i;if(h){for(t=u,v===void 0&&(v=m(document.head));v!==null&&(v.nodeType!==8||v.data!==H);)v=C(v);v===null?E(!1):v=A(C(v))}h||(i=document.head.appendChild(N()));try{Q(()=>e(i),K)}finally{r&&(E(!0),v=u,A(t))}}function B(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function p(e,t){var r=L;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Te(e,t){var r=(t&W)!==0,i=(t&X)!==0,n,a=!e.startsWith("<!>");return()=>{if(h)return p(u,null),u;n===void 0&&(n=B(a?e:"<!>"+e),r||(n=m(n)));var o=i?document.importNode(n,!0):n.cloneNode(!0);if(r){var c=m(o),d=o.lastChild;p(c,d)}else p(o,o);return o}}function be(e,t,r="svg"){var i=!e.startsWith("<!>"),n=(t&W)!==0,a=`<${r}>${i?e:"<!>"+e}</${r}>`,o;return()=>{if(h)return p(u,null),u;if(!o){var c=B(a),d=m(c);if(n)for(o=document.createDocumentFragment();m(d);)o.appendChild(m(d));else o=m(d)}var f=o.cloneNode(!0);if(n){var T=m(f),_=f.lastChild;p(T,_)}else p(f,f);return f}}function Ne(e=""){if(!h){var t=N(e+"");return p(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=N()),A(r)),p(r,r),r}function Ae(){if(h)return p(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=N();return e.append(t,r),p(t,r),e}function Le(e,t){if(h){L.nodes_end=u,q();return}e!==null&&e.before(t)}function Se(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const fe=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ke(e){return fe.includes(e)}const ce={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Me(e){return e=e.toLowerCase(),ce[e]??e}const _e=["touchstart","touchmove"];function ve(e){return _e.includes(e)}let O=!0;function Re(e){O=e}function Ce(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function he(e,t){return U(e,t)}function De(e,t){D(),t.intro=t.intro??!1;const r=t.target,i=h,n=u;try{for(var a=m(r);a&&(a.nodeType!==8||a.data!==H);)a=C(a);if(!a)throw R;E(!0),A(a),q();const o=U(e,{...t,anchor:a});if(u===null||u.nodeType!==8||u.data!==Z)throw ee(),R;return E(!1),o}catch(o){if(o===R)return t.recover===!1&&te(),D(),re(r),E(!1),he(e,t);throw o}finally{E(i),A(n),de()}}const w=new Map;function U(e,{target:t,anchor:r,props:i={},events:n,context:a,intro:o=!0}){D();var c=new Set,d=_=>{for(var s=0;s<_.length;s++){var l=_[s];if(!c.has(l)){c.add(l);var y=ve(l);t.addEventListener(l,b,{passive:y});var g=w.get(l);g===void 0?(document.addEventListener(l,b,{passive:y}),w.set(l,1)):w.set(l,g+1)}}};d(ae($)),I.add(d);var f=void 0,T=ne(()=>{var _=r??t.appendChild(N());return oe(()=>{if(a){ie({});var s=ue;s.c=a}n&&(i.$$events=n),h&&p(_,null),O=o,f=e(_,i)||{},O=!0,h&&(L.nodes_end=u),a&&se()}),()=>{var y;for(var s of c){t.removeEventListener(s,b);var l=w.get(s);--l===0?(document.removeEventListener(s,b),w.delete(s)):w.set(s,l)}I.delete(d),P.delete(f),_!==r&&((y=_.parentNode)==null||y.removeChild(_))}});return P.set(f,T),f}let P=new WeakMap;function Ie(e){const t=P.get(e);t&&t()}const pe="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(pe);export{Le as a,Me as b,Ae as c,we as d,ke as e,le as f,O as g,ge as h,Se as i,De as j,Ne as k,p as l,he as m,be as n,B as o,Re as p,Ee as q,me as r,Ce as s,Te as t,Ie as u};