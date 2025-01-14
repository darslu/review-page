import{h as W,a as _,t as b,s as x}from"../chunks/disclose-version.DbJakVUh.js";import{aS as X,K as z,o as A,p as B,a as Y,s as u,c,g as a,e as p,r as d,t as y,I as Z,Q as g,aT as j}from"../chunks/utils.CtqPTr58.js";import{i as w}from"../chunks/if.CzIKZcnQ.js";import{b as ee,r as L,c as te}from"../chunks/attributes.B1qs-ZY3.js";import{i as se}from"../chunks/lifecycle.ClYoO7N5.js";import{w as re}from"../chunks/index.DHMmLUuY.js";function ae(e,t,o,n=o){e.addEventListener(t,o);const r=e.__on_r;r?e.__on_r=()=>{r(),n()}:e.__on_r=n,ee()}function E(e,t,o=t){var n=X();ae(e,"input",()=>{var r=H(e)?V(e.value):e.value;o(r),n&&r!==(r=t())&&(e.value=r??"")}),z(()=>{var r=t();if(A&&e.defaultValue!==e.value){o(e.value);return}H(e)&&r===V(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function H(e){var t=e.type;return t==="number"||t==="range"}function V(e){return e===""?null:+e}const h={_origin:"https://api.emailjs.com"},oe=(e,t="https://api.emailjs.com")=>{h._userID=e,h._origin=t},N=(e,t,o)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class C{constructor(t){this.status=t.status,this.text=t.responseText}}const R=(e,t,o={})=>new Promise((n,r)=>{const m=new XMLHttpRequest;m.addEventListener("load",({target:s})=>{const f=new C(s);f.status===200||f.text==="OK"?n(f):r(f)}),m.addEventListener("error",({target:s})=>{r(new C(s))}),m.open("POST",h._origin+e,!0),Object.keys(o).forEach(s=>{m.setRequestHeader(s,o[s])}),m.send(t)}),ie=(e,t,o,n)=>{const r=n||h._userID;return N(r,e,t),R("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:e,template_id:t,template_params:o}),{"Content-type":"application/json"})},ne=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},le=(e,t,o,n)=>{const r=n||h._userID,m=ne(o);N(r,e,t);const s=new FormData(m);return s.append("lib_version","3.2.0"),s.append("service_id",e),s.append("template_id",t),s.append("user_id",r),R("/api/v1.0/email/send-form",s)},me={init:oe,send:ie,sendForm:le};var ue=b('<p class="text-red-500 text-sm"> </p>'),ce=b('<p class="text-red-500 text-sm"> </p>'),de=b('<p class="text-red-500 text-sm"> </p>'),ve=b('<p class="text-red-500 text-sm"> </p>'),pe=b(`<div class="contact-form-container svelte-1rrugo6"><div class="mb-6 text-center"><h2 class="text-2xl font-bold text-gray-800 mb-3">Got a question, suggestion, or just want to say hi?</h2> <p class="text-lg text-gray-600 mb-4">Whether you're curious about my product reviews or just want to chat about life (or why your socks never match), I'm here for it.</p> <p class="text-sm text-gray-500">I promise, no robot replies here—just real talk!</p></div> <h2 class="text-2xl font-bold">Contact Us</h2> <form class="space-y-4 mt-6"><div class="form-group svelte-1rrugo6"><label for="name" class="block text-sm font-medium">Name</label> <input id="name" type="text" class="input-field svelte-1rrugo6" placeholder="Enter your name"> <!></div> <div class="form-group svelte-1rrugo6"><label for="email" class="block text-sm font-medium">Email</label> <input id="email" type="email" class="input-field svelte-1rrugo6" placeholder="Enter your email"> <!></div> <div class="form-group svelte-1rrugo6"><label for="subject" class="block text-sm font-medium">Subject</label> <input id="subject" type="text" class="input-field svelte-1rrugo6" placeholder="Enter subject"> <!></div> <div class="form-group svelte-1rrugo6"><label for="message" class="block text-sm font-medium">Message</label> <textarea id="message" class="input-field svelte-1rrugo6" placeholder="Enter your message" rows="4"></textarea> <!></div> <div><button type="submit" class="submit-button svelte-1rrugo6">Submit</button></div></form></div>`);function fe(e,t){B(t,!1);let o=g(""),n=g(""),r=g(""),m=g(""),s=g({name:"",email:"",subject:"",message:""});const f=re(""),$=()=>(j(s,a(s).name=a(o)?"":"Name is required"),j(s,a(s).email=a(n)&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a(n))?"":"Valid email is required"),j(s,a(s).subject=a(r)?"":"Subject is required"),j(s,a(s).message=a(m)?"":"Message is required"),!Object.values(a(s)).some(i=>i)),J=async i=>{if(i.preventDefault(),$()){const l={name:a(o),email:a(n),subject:a(r),message:a(m)};try{f.set("Message sent successfully!");const v=await me.send("service_skekn7p","template_it7p97r",l,"C86-cphtERduq9auH");p(o,""),p(n,""),p(r,""),p(m,"")}catch(v){console.error("Error sending email:",v),alert("Error sending email. Please try again later.")}}else alert("Please fill out all fields correctly.")};se();var q=pe(),S=u(c(q),4),k=c(S),T=u(c(k),2);L(T);var K=u(T,2);w(K,()=>a(s).name,i=>{var l=ue(),v=c(l,!0);d(l),y(()=>x(v,a(s).name)),_(i,l)}),d(k);var F=u(k,2),D=u(c(F),2);L(D);var G=u(D,2);w(G,()=>a(s).email,i=>{var l=ce(),v=c(l,!0);d(l),y(()=>x(v,a(s).email)),_(i,l)}),d(F);var I=u(F,2),M=u(c(I),2);L(M);var Q=u(M,2);w(Q,()=>a(s).subject,i=>{var l=de(),v=c(l,!0);d(l),y(()=>x(v,a(s).subject)),_(i,l)}),d(I);var O=u(I,2),P=u(c(O),2);te(P);var U=u(P,2);w(U,()=>a(s).message,i=>{var l=ve(),v=c(l,!0);d(l),y(()=>x(v,a(s).message)),_(i,l)}),d(O),Z(2),d(S),d(q),E(T,()=>a(o),i=>p(o,i)),E(D,()=>a(n),i=>p(n,i)),E(M,()=>a(r),i=>p(r,i)),E(P,()=>a(m),i=>p(m,i)),W("submit",S,J),_(e,q),Y()}var _e=b("<main><!></main>");function we(e){var t=_e(),o=c(t);fe(o,{}),d(t),_(e,t)}export{we as component};