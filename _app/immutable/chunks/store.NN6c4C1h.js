import{s as c}from"./utils.BjpylwFu.js";import{e as f,m as b,b as o,g as a,h as l}from"./runtime.D_2j1xa8.js";let n=!1;function _(s,e,u){const r=u[e]??(u[e]={store:null,source:b(void 0),unsubscribe:o});if(r.store!==s)if(r.unsubscribe(),r.store=s??null,s==null)r.source.v=void 0,r.unsubscribe=o;else{var t=!0;r.unsubscribe=c(s,i=>{t?r.source.v=i:l(r.source,i)}),t=!1}return a(r.source)}function g(s,e){return s.set(e),e}function v(){const s={};return f(()=>{for(var e in s)s[e].unsubscribe()}),s}function m(s){var e=n;try{return n=!1,[s(),n]}finally{n=e}}export{_ as a,g as b,m as c,v as s};