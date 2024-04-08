import{a as P,S,i as m}from"./assets/vendor-eded45c0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function h(r,o){const i="https://pixabay.com",a="/api/",e={key:"43216617-d9e2d51a1f64026c97bc97c8e",q:`${r}`,page:o,per_page:L,image_type:"photo",orientation:"horizontal",safesearch:"true"},t=`${i}${a}`,s=await P.get(t,{params:e});return console.log("totalHits: ",s.data.totalHits),s.data}function p(r){return r.map(({webformatURL:o,largeImageURL:i,tags:a,likes:e,views:t,comments:s,downloads:q})=>`<li class = "gallery-item">

  <a class = "gallery-link" href="${i}">
    <img
    loading="lazy"
    src = "${o}" 
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
      <p class="info">${s}</p>
    </li>

    <li class="info-container">
      <h2 class="main-info">Downloads </h2>
      <p class="info">${q}</p>
    </li>

  </ul>

</li>`).join("")}const y=new S(".gallery-link",{captionsData:"alt",captionDelay:250}),L=15;let l,n=1,u=0;const $=document.querySelector(".user_request_form"),d=document.querySelector(".gallery"),w=document.querySelector(".loader"),f=document.querySelector(".load_more");$.addEventListener("submit",v);f.addEventListener("click",M);async function v(r){if(r.preventDefault(),n=1,H(),l=r.target.elements.user_query.value.toLowerCase().trim().replaceAll("  "," ").replaceAll(" ","+").replaceAll("++","+"),l){try{const o=await h(l,n);u=Math.ceil(o.totalHits/L),u?(d.innerHTML=p(o.hits),g()):c("There are no images matching your request!")}catch(o){c("Something went wrong during your request. Please, try again later!"),console.log(o)}b()}else{c("Please, input a valid request!");return}y.refresh(),r.target.reset()}function c(r){b(),g(),d.innerHTML="",m.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:r})}function H(){w.classList.remove("is-hidden")}function b(){w.classList.add("is-hidden")}function g(){n<u?f.classList.remove("is-hidden"):f.classList.add("is-hidden")}async function M(){n+=1;try{const r=await h(l,n),o=p(r.hits);d.insertAdjacentHTML("beforeend",o);const i=d.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}catch(r){c("Something went wrong during your request. Please, try again later!"),console.log(r)}n>=u&&m.error({backgroundColor:"white",icon:!1,progressBar:!1,close:!1,position:"center",message:"We're sorry, but you've reached the end of search results."}),g(),y.refresh()}
//# sourceMappingURL=commonHelpers.js.map
