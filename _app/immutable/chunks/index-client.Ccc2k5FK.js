import{I as h,J as k,y as u,K as v,S as x,L as o,M as y,B as i,A as E}from"./runtime.C9eU0xBD.js";function e(t,s){return t===s||(t==null?void 0:t[x])===s}function A(t={},s,c,f){return h(()=>{var r,n;return k(()=>{r=n,n=[],u(()=>{t!==c(...n)&&(s(t,...n),r&&e(c(...r),t)&&s(null,...r))})}),()=>{v(()=>{n&&e(c(...n),t)&&s(null,...n)})}}),t}function B(t){i===null&&o(),i.l!==null?S(i).m.push(t):E(()=>{const s=u(t);if(typeof s=="function")return s})}function M(t,s,{bubbles:c=!1,cancelable:f=!1}={}){return new CustomEvent(t,{detail:s,bubbles:c,cancelable:f})}function L(){const t=i;return t===null&&o(),(s,c,f)=>{var n;const r=(n=t.s.$$events)==null?void 0:n[s];if(r){const l=y(r)?r.slice():[r],a=M(s,c,f);for(const p of l)p.call(t.x,a);return!a.defaultPrevented}return!0}}function S(t){var s=t.l;return s.u??(s.u={a:[],b:[],m:[]})}export{A as b,L as c,B as o};