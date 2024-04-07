import{a as w,S as P,i as u}from"./assets/vendor-eded45c0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function m(o,s){const i="https://pixabay.com",a="/api/",e={key:"43216617-d9e2d51a1f64026c97bc97c8e",q:`${o}`,page:s,per_page:L,image_type:"photo",orientation:"horizontal",safesearch:"true"},t=`${i}${a}?${e}`,r=await w.get(t,{params:e});return console.log("totalHits: ",r.data.totalHits),r.data}function h(o){return o.map(({webformatURL:s,largeImageURL:i,tags:a,likes:e,views:t,comments:r,downloads:q})=>`<li class = "gallery-item">

  <a class = "gallery-link" href="${i}">
    <img
    loading="lazy"
    src = "${s}" 
    alt="${a}"
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
      <p class="info">${t}</p>
    </li>

    <li class="info-container">
      <h2 class="main-info">Comments </h2>
      <p class="info">${r}</p>
    </li>

    <li class="info-container">
      <h2 class="main-info">Downloads </h2>
      <p class="info">${q}</p>
    </li>

  </ul>

</li>`).join("")}const y=new P(".gallery-link",{captionsData:"alt",captionDelay:250}),L=15;let d,n=1,f=0;const S=document.querySelector(".user_request_form"),l=document.querySelector(".gallery"),b=document.querySelector(".loader"),g=document.querySelector(".load_more");S.addEventListener("submit",$);g.addEventListener("click",R);async function $(o){if(o.preventDefault(),n=1,v(),d=o.target.elements.user_query.value.toLowerCase().trim().replaceAll("  "," ").replaceAll(" ","+").replaceAll("++","+"),d){try{const s=await m(d,n);f=Math.ceil(s.totalHits/L),f?(l.innerHTML=h(s.hits),p()):(c(),p(),l.innerHTML="",u.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"There are no images matching Your request!"}))}catch{c(),l.innerHTML="",u.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Something went wrong during your request. Please, try again later!"})}c()}else{u.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Please, input a valid request!"}),c();return}y.refresh()}function v(){b.classList.remove("is-hidden")}function c(){b.classList.add("is-hidden")}function p(){n<f?g.classList.remove("is-hidden"):g.classList.add("is-hidden")}async function R(){n+=1;const o=await m(d,n),s=h(o.hits);l.insertAdjacentHTML("beforeend",s);const i=l.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"}),n>=f&&u.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"We're sorry, but you've reached the end of search results."}),p(),y.refresh()}
//# sourceMappingURL=commonHelpers.js.map
