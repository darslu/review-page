import{b as c,m as b,n as o,d as f,g as a,e as l}from"./utils.CtqPTr58.js";let u=!1;function _(e,s,n){const r=n[s]??(n[s]={store:null,source:b(void 0),unsubscribe:o});if(r.store!==e)if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=o;else{var t=!0;r.unsubscribe=f(e,i=>{t?r.source.v=i:l(r.source,i)}),t=!1}return a(r.source)}function g(e,s){return e.set(s),s}function p(){const e={};return c(()=>{for(var s in e)e[s].unsubscribe()}),e}function v(e){var s=u;try{return u=!1,[e(),u]}finally{u=s}}export{_ as a,g as b,v as c,p as s};