const Cn=!1;var Nn=Array.isArray,qn=Array.from,Pn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Qt=Object.getOwnPropertyDescriptors,Fn=Object.prototype,Ln=Array.prototype,Wt=Object.getPrototypeOf;function Mn(t){return typeof t=="function"}const Xt=()=>{};function Hn(t){return t()}function Et(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,yt=4,Y=8,rt=16,w=32,z=64,k=128,V=256,p=512,I=1024,N=2048,C=4096,j=8192,tn=16384,wt=32768,Yn=65536,nn=1<<18,Tt=1<<19,vt=Symbol("$state"),jn=Symbol("");function mt(t){return t===this.v}function rn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!rn(t,this.v)}function en(t){throw new Error("effect_in_teardown")}function sn(){throw new Error("effect_in_unowned_derived")}function an(t){throw new Error("effect_orphan")}function un(){throw new Error("effect_update_depth_exceeded")}function Bn(){throw new Error("hydration_failed")}function Un(t){throw new Error("props_invalid_value")}function Vn(){throw new Error("state_descriptors_fixed")}function Gn(){throw new Error("state_prototype_fixed")}function ln(){throw new Error("state_unsafe_local_read")}function on(){throw new Error("state_unsafe_mutation")}function et(t){return{f:0,v:t,reactions:null,equals:mt,version:0}}function Kn(t){return xt(et(t))}function fn(t,n=!1){var e;const r=et(t);return n||(r.equals=At),o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function $n(t,n=!1){return xt(fn(t,n))}function xt(t){return i!==null&&i.f&m&&(y===null?In([t]):y.push(t)),t}function Zn(t,n){return st(t,ft(()=>it(t))),n}function st(t,n){return i!==null&&ot()&&i.f&(m|rt)&&(y===null||!y.includes(t))&&on(),_n(t,n)}function _n(t,n){return t.equals(n)||(t.v=n,t.version=Vt(),It(t,I),ot()&&l!==null&&l.f&p&&!(l.f&w)&&(_!==null&&_.includes(t)?(E(l,I),J(l)):x===null?Sn([t]):x.push(t))),n}function It(t,n){var r=t.reactions;if(r!==null)for(var e=ot(),s=r.length,a=0;a<s;a++){var u=r[a],f=u.f;f&I||!e&&u===l||(E(u,n),f&(p|k)&&(f&m?It(u,N):J(u)))}}const zn=1,Jn=2,Qn=4,Wn=8,Xn=16,tr=1,nr=2,rr=4,er=8,sr=16,ar=4,ur=1,lr=2,cn="[",vn="[!",pn="]",St={},or=Symbol(),ir="http://www.w3.org/2000/svg";function gt(t){console.warn("hydration_mismatch")}let g=!1;function fr(t){g=t}let d;function L(t){if(t===null)throw gt(),St;return d=t}function _r(){return L(R(d))}function cr(t){if(g){if(R(d)!==null)throw gt(),St;d=t}}function vr(t=1){if(g){for(var n=t,r=d;n--;)r=R(r);d=r}}function pr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===pn){if(t===0)return n;t-=1}else(r===cn||r===vn)&&(t+=1)}var e=R(n);n.remove(),n=e}}var pt,kt,Rt;function hr(){if(pt===void 0){pt=window;var t=Element.prototype,n=Node.prototype;kt=ct(n,"firstChild").get,Rt=ct(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Q(t=""){return document.createTextNode(t)}function W(t){return kt.call(t)}function R(t){return Rt.call(t)}function dr(t,n){if(!g)return W(t);var r=W(d);if(r===null)r=d.appendChild(Q());else if(n&&r.nodeType!==3){var e=Q();return r==null||r.before(e),L(e),e}return L(r),r}function Er(t,n){if(!g){var r=W(t);return r instanceof Comment&&r.data===""?R(r):r}return d}function yr(t,n=1,r=!1){let e=g?d:t;for(;n--;)e=R(e);if(!g)return e;var s=e.nodeType;if(r&&s!==3){var a=Q();return e==null||e.before(a),L(a),a}return L(e),e}function wr(t){t.textContent=""}function hn(t){var n=m|I;l===null?n|=k:l.f|=Tt;const r={children:null,ctx:o,deps:null,equals:mt,f:n,fn:t,reactions:null,v:null,version:0,parent:l};if(i!==null&&i.f&m){var e=i;(e.children??(e.children=[])).push(r)}return r}function Tr(t){const n=hn(t);return n.equals=At,n}function Ot(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?at(e):P(e)}}}function Dt(t){var n,r=l;Z(t.parent);try{Ot(t),n=Gt(t)}finally{Z(r)}return n}function bt(t){var n=Dt(t),r=(O||t.f&k)&&t.deps!==null?N:p;E(t,r),t.equals(n)||(t.v=n,t.version=Vt())}function at(t){Ot(t),H(t,0),E(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ct(t){l===null&&i===null&&an(),i!==null&&i.f&k&&sn(),lt&&en()}function dn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&z)!==0,a=l,u={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=D;try{ht(!0),B(u),u.f|=tn}catch(c){throw P(u),c}finally{ht(f)}}else n!==null&&J(u);var T=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&Tt)===0;if(!T&&!s&&e&&(a!==null&&dn(u,a),i!==null&&i.f&m)){var A=i;(A.children??(A.children=[])).push(u)}return u}function mr(t){const n=q(Y,null,!1);return E(n,p),n.teardown=t,n}function Ar(t){Ct();var n=l!==null&&(l.f&w)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:l,reaction:i})}else{var e=Nt(t);return e}}function xr(t){return Ct(),ut(t)}function Ir(t){const n=q(z,t,!0);return()=>{P(n)}}function Nt(t){return q(yt,t,!1)}function Sr(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ut(()=>{t(),!e.ran&&(e.ran=!0,st(r.l.r2,!0),ft(n))})}function gr(){var t=o;ut(()=>{if(it(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,N),F(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function ut(t){return q(Y,t,!0)}function kr(t){return En(t)}function En(t,n=0){return q(Y|rt|n,t,!0)}function Rr(t,n=!0){return q(Y|w,t,!0,n)}function qt(t){var n=t.teardown;if(n!==null){const r=lt,e=i;dt(!0),$(null);try{n.call(null)}finally{dt(r),$(e)}}}function Pt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)at(n[r])}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function yn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&nn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:R(e);e.remove(),e=a}r=!0}Pt(t),Ft(t,n&&!r),H(t,0),E(t,j);var u=t.transitions;if(u!==null)for(const T of u)T.stop();qt(t);var f=t.parent;f!==null&&f.first!==null&&Lt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Lt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Or(t,n){var r=[];Mt(t,r,!0),wn(r,()=>{P(t),n&&n()})}function wn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Mt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&wt)!==0||(e.f&w)!==0;Mt(e,n,a?r:!1),e=s}}}function Dr(t){Ht(t,!0)}function Ht(t,n){if(t.f&C){t.f^=C,F(t)&&B(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&wt)!==0||(r.f&w)!==0;Ht(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const Tn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let G=!1,K=!1,X=[],tt=[];function Yt(){G=!1;const t=X.slice();X=[],Et(t)}function jt(){K=!1;const t=tt.slice();tt=[],Et(t)}function br(t){G||(G=!0,queueMicrotask(Yt)),X.push(t)}function Cr(t){K||(K=!0,Tn(jt)),tt.push(t)}function mn(){G&&Yt(),K&&jt()}function An(t){throw new Error("lifecycle_outside_component")}const Bt=0,xn=1;let U=Bt,M=!1,D=!1,lt=!1;function ht(t){D=t}function dt(t){lt=t}let S=[],b=0;let i=null;function $(t){i=t}let l=null;function Z(t){l=t}let y=null;function In(t){y=t}let _=null,h=0,x=null;function Sn(t){x=t}let Ut=0,O=!1,o=null;function Vt(){return++Ut}function ot(){return o!==null&&o.l===null}function F(t){var u,f;var n=t.f;if(n&I)return!0;if(n&N){var r=t.deps,e=(n&k)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((u=r[s]).reactions??(u.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(F(a)&&bt(a),e&&l!==null&&!O&&!((f=a==null?void 0:a.reactions)!=null&&f.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||E(t,p)}return!1}function gn(t,n,r){throw t}function Gt(t){var _t;var n=_,r=h,e=x,s=i,a=O,u=y,f=o,T=t.f;_=null,h=0,x=null,i=T&(w|z)?null:t,O=!D&&(T&k)!==0,y=null,o=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(H(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!O)for(v=h;v<c.length;v++)((_t=c[v]).reactions??(_t.reactions=[])).push(t)}else c!==null&&h<c.length&&(H(t,h),c.length=h);return A}finally{_=n,h=r,x=e,i=s,O=a,y=u,o=f}}function kn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(E(n,N),n.f&(k|V)||(n.f^=V),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)kn(t,r[e])}function B(t){var n=t.f;if(!(n&j)){E(t,p);var r=l;l=t;try{Pt(t),n&rt?yn(t):Ft(t),qt(t);var e=Gt(t);t.teardown=typeof e=="function"?e:null,t.version=Ut}catch(s){gn(s)}finally{l=r}}}function Kt(){b>1e3&&(b=0,un()),b++}function $t(t){var n=t.length;if(n!==0){Kt();var r=D;D=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Zt(s,a),Rn(a)}}finally{D=r}}}function Rn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|C))&&F(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Lt(e):e.fn=null))}}function On(){if(M=!1,b>1001)return;const t=S;S=[],$t(t),M||(b=0)}function J(t){U===Bt&&(M||(M=!0,queueMicrotask(On)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|w)){if(!(r&p))return;n.f^=p}}S.push(n)}function Zt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&w)!==0,u=a&&(s&p)!==0;if(!u&&!(s&C))if(s&Y){a?r.f^=p:F(r)&&B(r);var f=r.first;if(f!==null){r=f;continue}}else s&yt&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)f=e[c],n.push(f),Zt(f,n)}function zt(t){var n=U,r=S;try{Kt();const s=[];U=xn,S=s,M=!1,$t(r);var e=t==null?void 0:t();return mn(),(S.length>0||s.length>0)&&zt(),b=0,e}finally{U=n,S=r}}async function Nr(){await Promise.resolve(),zt()}function it(t){var f;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=Dt(t);return at(t),e}if(i!==null){y!==null&&y.includes(t)&&ln();var s=i.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),x!==null&&l!==null&&l.f&p&&!(l.f&w)&&x.includes(t)&&(E(l,I),J(l))}else if(r&&t.deps===null){var a=t,u=a.parent;u!==null&&!((f=u.deriveds)!=null&&f.includes(a))&&(u.deriveds??(u.deriveds=[])).push(a)}return r&&(a=t,F(a)&&bt(a)),t.v}function ft(t){const n=i;try{return i=null,t()}finally{i=n}}const Dn=~(I|N|p);function E(t,n){t.f=t.f&Dn|n}function qr(t){return Jt().get(t)}function Pr(t,n){return Jt().set(t,n),n}function Jt(t){return o===null&&An(),o.c??(o.c=new Map(bn(o)||void 0))}function bn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Fr(t,n=1){var r=+it(t);return st(t,r+n),r}function Lr(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},n||(o.l={s:null,u:null,r1:[],r2:et(!1)})}function Mr(t){const n=o;if(n!==null){const u=n.e;if(u!==null){var r=l,e=i;n.e=null;try{for(var s=0;s<u.length;s++){var a=u[s];Z(a.effect),$(a.reaction),Nt(a.fn)}}finally{Z(r),$(e)}}o=n.p,n.m=!0}return{}}function Hr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)nt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&nt(r)}}}function nt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{nt(t[e],n)}catch{}const r=Wt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Qt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}function Yr(t,n,r){if(t==null)return n(void 0),Xt;const e=ft(()=>t.subscribe(n,r));return e.unsubscribe?()=>e.unsubscribe():e}export{Wt as $,o as A,ft as B,Hn as C,Et as D,wt as E,Hr as F,hn as G,vn as H,Nt as I,ut as J,br as K,An as L,Nn as M,Sr as N,gr as O,$n as P,ir as Q,Tr as R,vt as S,Fn as T,Ln as U,et as V,Vn as W,or as X,ct as Y,l as Z,Gn as _,Mr as a,Un as a0,Yn as a1,rr as a2,At as a3,Fr as a4,Mn as a5,w as a6,z as a7,Z as a8,tr as a9,Xn as aA,Mt as aB,wn as aC,P as aD,pn as aE,Wn as aF,R as aG,gt as aH,St as aI,qr as aJ,nn as aK,cn as aL,ur as aM,lr as aN,hr as aO,Bn as aP,Ir as aQ,ot as aR,vr as aS,Zn as aT,Cn as aU,nr as aa,er as ab,i as ac,j as ad,sr as ae,W as af,wr as ag,jn as ah,Cr as ai,Qt as aj,rt as ak,tn as al,ar as am,$ as an,Pr as ao,zt as ap,Pn as aq,Nr as ar,Kn as as,Q as at,Qn as au,qn as av,C as aw,zn as ax,_n as ay,Jn as az,mr as b,dr as c,Yr as d,st as e,Er as f,it as g,rn as h,En as i,Dr as j,Rr as k,Or as l,fn as m,Xt as n,g as o,Lr as p,_r as q,cr as r,yr as s,kr as t,pr as u,L as v,fr as w,d as x,xr as y,Ar as z};