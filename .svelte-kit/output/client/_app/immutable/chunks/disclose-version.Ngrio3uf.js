import{al as v,ae as i,Y as m,aw as p,ax as E,l as f,w as d,u as T,o as y}from"./runtime.B8yr7RlE.js";function h(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function n(r,t){var e=m;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function C(r,t){var e=(t&p)!==0,l=(t&E)!==0,s,_=!r.startsWith("<!>");return()=>{if(f)return n(d,null),d;s===void 0&&(s=h(_?r:"<!>"+r),e||(s=i(s)));var a=l?document.importNode(s,!0):s.cloneNode(!0);if(e){var c=i(a),o=a.lastChild;n(c,o)}else n(a,a);return a}}function M(r,t,e="svg"){var l=!r.startsWith("<!>"),s=(t&p)!==0,_=`<${e}>${l?r:"<!>"+r}</${e}>`,a;return()=>{if(f)return n(d,null),d;if(!a){var c=h(_),o=i(c);if(s)for(a=document.createDocumentFragment();i(o);)a.appendChild(i(o));else a=i(o)}var u=a.cloneNode(!0);if(s){var g=i(u),w=u.lastChild;n(g,w)}else n(u,u);return u}}function L(r=""){if(!f){var t=v(r+"");return n(t,t),t}var e=d;return e.nodeType!==3&&(e.before(e=v()),T(e)),n(e,e),e}function P(){if(f)return n(d,null),d;var r=document.createDocumentFragment(),t=document.createComment(""),e=v();return r.append(t,e),n(t,e),r}function b(r,t){if(f){m.nodes_end=d,y();return}r!==null&&r.before(t)}const N="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(N);export{b as a,n as b,P as c,L as d,h as e,M as n,C as t};
