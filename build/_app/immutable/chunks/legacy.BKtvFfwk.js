import{an as m,am as i,W as v,ao as p,ap as w,j as u,w as d,n as T,k as y,aq as N}from"./runtime.CAQaYCc3.js";function h(a){var r=document.createElement("template");return r.innerHTML=a,r.content}function n(a,r){var e=v;e.nodes_start===null&&(e.nodes_start=a,e.nodes_end=r)}function b(a,r){var e=(r&p)!==0,l=(r&w)!==0,s,_=!a.startsWith("<!>");return()=>{if(u)return n(d,null),d;s===void 0&&(s=h(_?a:"<!>"+a),e||(s=i(s)));var t=l?document.importNode(s,!0):s.cloneNode(!0);if(e){var c=i(t),o=t.lastChild;n(c,o)}else n(t,t);return t}}function x(a,r,e="svg"){var l=!a.startsWith("<!>"),s=(r&p)!==0,_=`<${e}>${l?a:"<!>"+a}</${e}>`,t;return()=>{if(u)return n(d,null),d;if(!t){var c=h(_),o=i(c);if(s)for(t=document.createDocumentFragment();i(o);)t.appendChild(i(o));else t=i(o)}var f=t.cloneNode(!0);if(s){var g=i(f),E=f.lastChild;n(g,E)}else n(f,f);return f}}function L(a=""){if(!u){var r=m(a+"");return n(r,r),r}var e=d;return e.nodeType!==3&&(e.before(e=m()),T(e)),n(e,e),e}function P(){if(u)return n(d,null),d;var a=document.createDocumentFragment(),r=document.createComment(""),e=m();return a.append(r,e),n(r,e),a}function A(a,r){if(u){v.nodes_end=d,y();return}a!==null&&a.before(r)}const C="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(C);N();export{A as a,n as b,P as c,h as d,L as e,x as n,b as t};
