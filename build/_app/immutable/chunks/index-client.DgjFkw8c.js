import{b as c,l as r,d as i,g as _,i as m,u as p}from"./runtime.CAQaYCc3.js";function x(t){c===null&&r(),i&&c.l!==null?d(c).m.push(t):_(()=>{const e=p(t);if(typeof e=="function")return e})}function v(t,e,{bubbles:o=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:o,cancelable:s})}function g(){const t=c;return t===null&&r(),(e,o,s)=>{var a;const n=(a=t.s.$$events)==null?void 0:a[e];if(n){const l=m(n)?n.slice():[n],u=v(e,o,s);for(const f of l)f.call(t.x,u);return!u.defaultPrevented}return!0}}function d(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}export{g as c,x as o};
