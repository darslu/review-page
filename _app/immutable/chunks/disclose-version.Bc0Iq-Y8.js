import{b as j,K,o as h,an as M,a8 as k,aq as x,M as z,ac as q,Z as L,at as A,i as Q,aK as Z,aL as H,aG as D,w,v as N,x as u,af as m,aM as W,aN as J,q as F,aO as I,aI as C,aE as X,aH as ee,aP as te,ag as re,av as ae,aQ as ne,k as oe,p as ie,a as se,A as ue}from"./utils.BfHhGJsb.js";const $=new Set,O=new Set;function me(e){if(!h)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const t=e.__e;t!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(t)}))}function le(e,t,r,i){function n(a){if(i.capture||b.call(t,a),!a.cancelBubble){var o=q,c=L;M(null),k(null);try{return r.call(this,a)}finally{M(o),k(c)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?K(()=>{t.addEventListener(e,n,i)}):t.addEventListener(e,n,i),n}function ge(e,t,r,i,n){var a={capture:i,passive:n},o=le(e,t,r,a);(t===document.body||t===window||t===document)&&j(()=>{t.removeEventListener(e,o,a)})}function Ee(e){for(var t=0;t<e.length;t++)$.add(e[t]);for(var r of O)r(e)}function b(e){var V;var t=this,r=t.ownerDocument,i=e.type,n=((V=e.composedPath)==null?void 0:V.call(e))||[],a=n[0]||e.target,o=0,c=e.__root;if(c){var d=n.indexOf(c);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var f=n.indexOf(t);if(f===-1)return;d<=f&&(o=d)}if(a=n[o]||e.target,a!==t){x(e,"currentTarget",{configurable:!0,get(){return a||r}});var T=q,_=L;M(null),k(null);try{for(var s,l=[];a!==null;){var y=a.assignedSlot||a.parentNode||a.host||null;try{var g=a["__"+i];if(g!==void 0&&!a.disabled)if(z(g)){var[U,...Y]=g;U.apply(a,[e,...Y])}else g.call(a,e)}catch(S){s?l.push(S):s=S}if(e.cancelBubble||y===t||y===null)break;a=y}if(s){for(let S of l)queueMicrotask(()=>{throw S});throw s}}finally{e.__root=t,delete e.currentTarget,M(T),k(_)}}}let v;function de(){v=void 0}function we(e){let t=null,r=h;var i;if(h){for(t=u,v===void 0&&(v=m(document.head));v!==null&&(v.nodeType!==8||v.data!==H);)v=D(v);v===null?w(!1):v=N(D(v))}h||(i=document.head.appendChild(A()));try{Q(()=>e(i),Z)}finally{r&&(w(!0),v=u,N(t))}}function B(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function p(e,t){var r=L;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Te(e,t){var r=(t&W)!==0,i=(t&J)!==0,n,a=!e.startsWith("<!>");return()=>{if(h)return p(u,null),u;n===void 0&&(n=B(a?e:"<!>"+e),r||(n=m(n)));var o=i?document.importNode(n,!0):n.cloneNode(!0);if(r){var c=m(o),d=o.lastChild;p(c,d)}else p(o,o);return o}}function be(e,t,r="svg"){var i=!e.startsWith("<!>"),n=(t&W)!==0,a=`<${r}>${i?e:"<!>"+e}</${r}>`,o;return()=>{if(h)return p(u,null),u;if(!o){var c=B(a),d=m(c);if(n)for(o=document.createDocumentFragment();m(d);)o.appendChild(m(d));else o=m(d)}var f=o.cloneNode(!0);if(n){var T=m(f),_=f.lastChild;p(T,_)}else p(f,f);return f}}function Ae(e=""){if(!h){var t=A(e+"");return p(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=A()),N(r)),p(r,r),r}function Ne(){if(h)return p(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=A();return e.append(t,r),p(t,r),e}function Le(e,t){if(h){L.nodes_end=u,F();return}e!==null&&e.before(t)}function Se(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const fe=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Me(e){return fe.includes(e)}const ce={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function ke(e){return e=e.toLowerCase(),ce[e]??e}const _e=["touchstart","touchmove"];function ve(e){return _e.includes(e)}let R=!0;function Ce(e){R=e}function De(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function he(e,t){return G(e,t)}function Ie(e,t){I(),t.intro=t.intro??!1;const r=t.target,i=h,n=u;try{for(var a=m(r);a&&(a.nodeType!==8||a.data!==H);)a=D(a);if(!a)throw C;w(!0),N(a),F();const o=G(e,{...t,anchor:a});if(u===null||u.nodeType!==8||u.data!==X)throw ee(),C;return w(!1),o}catch(o){if(o===C)return t.recover===!1&&te(),I(),re(r),w(!1),he(e,t);throw o}finally{w(i),N(n),de()}}const E=new Map;function G(e,{target:t,anchor:r,props:i={},events:n,context:a,intro:o=!0}){I();var c=new Set,d=_=>{for(var s=0;s<_.length;s++){var l=_[s];if(!c.has(l)){c.add(l);var y=ve(l);t.addEventListener(l,b,{passive:y});var g=E.get(l);g===void 0?(document.addEventListener(l,b,{passive:y}),E.set(l,1)):E.set(l,g+1)}}};d(ae($)),O.add(d);var f=void 0,T=ne(()=>{var _=r??t.appendChild(A());return oe(()=>{if(a){ie({});var s=ue;s.c=a}n&&(i.$$events=n),h&&p(_,null),R=o,f=e(_,i)||{},R=!0,h&&(L.nodes_end=u),a&&se()}),()=>{var y;for(var s of c){t.removeEventListener(s,b);var l=E.get(s);--l===0?(document.removeEventListener(s,b),E.delete(s)):E.set(s,l)}O.delete(d),P.delete(f),_!==r&&((y=_.parentNode)==null||y.removeChild(_))}});return P.set(f,T),f}let P=new WeakMap;function Oe(e){const t=P.get(e);t&&t()}const pe="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(pe);export{Le as a,ke as b,Ne as c,Ee as d,Me as e,le as f,R as g,ge as h,Se as i,Ie as j,Ae as k,p as l,he as m,be as n,B as o,Ce as p,we as q,me as r,De as s,Te as t,Oe as u};
