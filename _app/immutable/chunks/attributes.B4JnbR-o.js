import{o as l,al as P,ar as B,K as z,au as d,av as K,$,aw as M}from"./runtime.D_2j1xa8.js";import{f as j,g as C,j as D,k as F,l as b}from"./disclose-version.CmuISpNg.js";function G(s,r){if(r){const a=document.body;s.autofocus=!0,z(()=>{document.activeElement===a&&s.focus()})}}function H(s){l&&P(s)!==null&&B(s)}let w=!1;function R(){w||(w=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var r;if(!s.defaultPrevented)for(const a of s.target.elements)(r=a.__on_r)==null||r.call(a)})},{capture:!0}))}function J(s){if(l){var r=!1,a=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var u=s.value;g(s,"value",null),s.value=u}if(s.hasAttribute("checked")){var f=s.checked;g(s,"checked",null),s.checked=f}}};s.__on_r=a,K(a),R()}}function g(s,r,a,u){var f=s.__attributes??(s.__attributes={});l&&(f[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||f[r]!==(f[r]=a)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[d]=a),a==null?s.removeAttribute(r):typeof a!="string"&&E(s).includes(r)?s[r]=a:s.setAttribute(r,a))}function Q(s,r,a,u,f=!1,n=!1,S=!1){var t=r||{},O=s.tagName==="OPTION";for(var h in r)h in a||(a[h]=null);var T=E(s),q=s.__attributes??(s.__attributes={}),y=[];for(const i in a){let o=a[i];if(O&&i==="value"&&o==null){s.value=s.__value="",t[i]=o;continue}var p=t[i];if(o!==p){t[i]=o;var k=i[0]+i[1];if(k!=="$$"){if(k==="on"){const c={},v="$$"+i;let e=i.slice(2);var A=F(e);if(j(e)&&(e=e.slice(0,-7),c.capture=!0),!A&&p){if(o!=null)continue;s.removeEventListener(e,t[v],c),t[v]=null}if(o!=null)if(A)s[`__${e}`]=o,C([e]);else{let N=function(I){t[i].call(this,I)};r?t[v]=b(e,s,N,c):y.push([i,o,()=>t[v]=b(e,s,N,c)])}}else if(i==="style"&&o!=null)s.style.cssText=o+"";else if(i==="autofocus")G(s,!!o);else if(i==="__value"||i==="value"&&o!=null)s.value=s[i]=s.__value=o;else{var _=i;f||(_=D(_)),o==null&&!n?(q[i]=null,s.removeAttribute(i)):T.includes(_)&&(n||typeof o!="string")?s[_]=o:typeof o!="function"&&(l&&(_==="src"||_==="href"||_==="srcset")||g(s,_,o))}i==="style"&&"__styles"in s&&(s.__styles={})}}}return r||z(()=>{if(s.isConnected)for(const[i,o,c]of y)t[i]===o&&c()}),t}var L=new Map;function E(s){var r=L.get(s.nodeName);if(r)return r;L.set(s.nodeName,r=[]);for(var a,u=$(s),f=Element.prototype;f!==u;){a=M(u);for(var n in a)a[n].set&&r.push(n);u=$(u)}return r}function U(s){if(!l&&s.loading==="lazy"){var r=s.src;s[d]=null,s.loading="eager",s.removeAttribute("src"),requestAnimationFrame(()=>{s[d]!=="eager"&&(s.loading="lazy"),s.src=r})}}export{Q as a,R as b,H as c,U as h,J as r,g as s};
