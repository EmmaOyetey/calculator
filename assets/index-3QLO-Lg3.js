(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))g(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&g(h)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function g(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const y=document.querySelectorAll(".button"),v=document.querySelectorAll(".digit"),b=document.querySelectorAll(".operation"),S=document.querySelectorAll(".convert"),w=document.querySelector(".equals"),E=document.querySelector(".convert__posNeg"),x=document.querySelector(".convert__dec"),m=document.querySelector(".convert__percent"),d=document.getElementById("answer"),l=document.getElementById("entered-digits"),a=document.getElementById("calc-in-progress"),p=document.querySelector(".clear");if(!y)throw new Error("issue with buttons");if(!v)throw new Error("issue with digit button");if(!S)throw new Error("issue with operator button");if(!w)throw new Error("issue with covert button");if(!d||!l||!a)throw new Error("issue with display output");if(!E||!x)throw new Error("issue with converts in development");const q=n=>{const e=n.currentTarget;e.style.boxShadow="inset 0px 0px 10px rgba(0, 0, 0, 0.5)",e.style.transform="translateY(2px)",setTimeout(()=>{e.style.boxShadow="",e.style.transform=""},10)};y.forEach(n=>{n.addEventListener("click",q)});const L=n=>{const e=parseInt(n.currentTarget.value,10);t.push(e),console.log(t),l.textContent=t.join(" ")};v.forEach(n=>{n.addEventListener("click",L)});let t=[],c=[],i=[],u=[];const f=([])=>{let n=0;for(let e=0;e<t.length;e++)n+=t[e]*Math.pow(10,t.length-e-1);return n},I=()=>{t=[f([t])/100],console.log(t),l&&(l.textContent=t.join(" "))};m&&m.addEventListener("click",I);const N=n=>{const e=n.currentTarget.value;let o=f(t);c.push(o),i.push(e),u.push(o),u.push(e),t.length=0,console.log(c,i,t),a.textContent=u.join(" "),l.textContent=t.join(" ")};b.forEach(n=>{n.addEventListener("click",N)});const B=()=>{let n=f(t);c.push(n),u.push(n),a&&(a.textContent=u.join(" ")),t=[],l&&(l.textContent=" = ");let e=c[0];for(let o=1;o<c.length;o++)i[o-1]==="+"?e+=c[o]:i[o-1]==="-"?e-=c[o]:i[o-1]==="/"?e/=c[o]:i[o-1]==="x"?e*=c[o]:console.log("Invalid operator:",i[o-1]);console.log(c,i,t,e),d.textContent=e.toString(),t=[],c=[],i=[],u=[]};w.addEventListener("click",B);const O=()=>{t=[],c=[],i=[],u=[],a.textContent="",l.textContent="Get Calculating!",d.textContent=""};p==null||p.addEventListener("click",O);const C=()=>{l.textContent="Coming Soon!",a.textContent="",t=[],c=[],i=[],u=[],d.textContent=""};E.addEventListener("click",C);x.addEventListener("click",C);