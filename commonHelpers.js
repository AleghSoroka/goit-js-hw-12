import{i as l,S as u}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(o){const s="https://pixabay.com",t="/api/",i=new URLSearchParams({key:"43216617-d9e2d51a1f64026c97bc97c8e",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${s}${t}?${i}`;return fetch(e).then(r=>r.json()).catch(r=>console.error("Error while fetching: ",r))}function m(o){return o.map(({webformatURL:s,largeImageURL:t,tags:i,likes:e,views:r,comments:n,downloads:c})=>`<li class = "gallery-item">

  <a class = "gallery-link" href="${t}">
    <img
    src = "${s}" 
    alt="${i}"
    class="gallery-image"
    />
  </a>

  <ul class = "info-list">

    <li class="info-container">
      <h2 class="main-info">Likes </h2>
      <p class="info">${e}</p>
    </li>

    <li class="info-container">
      <h2 class="main-info"> Views </h2>
      <p class="info">${r}</p>
    </li>

    <li class="info-container">
      <h2 class="main-info">Comments </h2>
      <p class="info">${n}</p>
    </li>

    <li class="info-container">
      <h2 class="main-info">Downloads </h2>
      <p class="info">${c}</p>
    </li>

  </ul>

</li>`).join("")}const g=document.querySelector(".user_request_form"),p=document.querySelector(".gallery"),a=document.querySelector(".loader");g.addEventListener("submit",d);function d(o){o.preventDefault(),a.style.visibility="visible";const s=o.target.elements.user_query.value.toLowerCase().trim().replaceAll(" ","+");if(s)f(s).then(t=>{t.hits.length?(p.innerHTML=m(t.hits),new u(".gallery-link",{captionsData:"alt"}).refresh()):l.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"There are no images matching Your request!"})}).catch(t=>{l.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Something went wrong during your request. Please, try again later!"})}).finally(()=>{a.style.visibility="hidden"});else{l.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Please, input a valid request!"});return}o.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
