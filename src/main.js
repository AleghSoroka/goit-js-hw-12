// Described in documentation
import SimpleLightbox from "simplelightbox";
// Additional import
import "simplelightbox/dist/simple-lightbox.min.css";

// Described in documentation
import iziToast from "izitoast";
// Additional import
import "izitoast/dist/css/iziToast.min.css";

import { getImages } from "./js/pixabay-api";
import { imagesRender } from  "./js/render-functions"

const userRequestForm = document.querySelector(".user_request_form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

userRequestForm.addEventListener("submit", onRequestSubmit);

function onRequestSubmit(event) {
  event.preventDefault();

  loader.style.visibility = "visible";

  const userRequestStr = event.target.elements.user_query.value.toLowerCase().trim().replaceAll(" ", "+");
  if (!userRequestStr) {
    iziToast.error({
      backgroundColor: "red",
      icon: false,
      progressBar: false,
      close: false,
      position: "topRight",
      message: "Please, input a valid request!"
    });
    return;
  }
  else {
    getImages(userRequestStr).then(data => {
      if (!data.hits.length) {
      iziToast.error({
      backgroundColor: "red",
      icon: false,
      progressBar: false,
      close: false,
      position: "topRight",
      message: "There are no images matching Your request!"
    });
      }
      else {
      
        gallery.innerHTML = imagesRender(data.hits);

          const lightbox = new SimpleLightbox(".gallery-link", {
          captionsData: "alt"
        });
        lightbox.refresh();
      };
    })
      .catch(error => {
      iziToast.error({
      backgroundColor: "red",
      icon: false,
      progressBar: false,
      close: false,
      position: "topRight",
      message: "Something went wrong during your request. Please, try again later!"
    });
    })
      .finally(() => {
        loader.style.visibility = "hidden";
      })
  };
    event.target.reset();
};
