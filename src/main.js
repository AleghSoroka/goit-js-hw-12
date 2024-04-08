import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api';
import { imagesRender } from './js/render-functions';

const lightbox = new SimpleLightbox('.gallery-link',
  {
    captionsData: 'alt',
    captionDelay: 250,
  });

export const hitsPerPage = 15;
let userRequestStr;
let currentPage = 1;
let totalPages = 0;

const userRequestForm = document.querySelector('.user_request_form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load_more');

userRequestForm.addEventListener('submit', onRequestSubmit);
loadMore.addEventListener('click', onLoadMoreClick);

async function onRequestSubmit(event) {
  event.preventDefault();
  currentPage = 1;
  showLoader();
  userRequestStr = event.target.elements.user_query.value
    .toLowerCase()
    .trim()
    .replaceAll('  ', ' ')
    .replaceAll(' ', '+')
    .replaceAll('++', '+');

  if (!userRequestStr) {
    errorHandler('Please, input a valid request!');
    return;
  } else {
    try {
      const data = await getImages(userRequestStr, currentPage);
      totalPages = Math.ceil(data.totalHits / hitsPerPage);
      if (totalPages) {
        gallery.innerHTML = imagesRender(data.hits);
        loadMoreBtnVisibility();
      }
      else {
        errorHandler('There are no images matching your request!');
            }
    } catch (error) {
      errorHandler('Something went wrong during your request. Please, try again later!')
      console.log(error);
    }
    
    hideLoader();
  }

  lightbox.refresh();
  event.target.reset();
}

function errorHandler(msg) {
    hideLoader();
    loadMoreBtnVisibility();
    gallery.innerHTML = '';
    iziToast.error({
      backgroundColor: 'red',
      icon: false,
      progressBar: false,
      close: false,
      position: 'topRight',
      message: msg,
    });
};

function showLoader() {
  loader.classList.remove('is-hidden');
};

function hideLoader() {
  loader.classList.add('is-hidden');
};

function loadMoreBtnVisibility() {
  if (currentPage < totalPages) {
    loadMore.classList.remove('is-hidden');
  } else {
    loadMore.classList.add('is-hidden');
  }
};

async function onLoadMoreClick() {
  currentPage += 1;
  try {
    const data = await getImages(userRequestStr, currentPage);
    const markup = imagesRender(data.hits);
    gallery.insertAdjacentHTML('beforeend', markup);
    const galleryItemHeight = gallery.firstElementChild.getBoundingClientRect().height;
    window.scrollBy({ top: galleryItemHeight * 2, behavior: 'smooth' });
  }
  catch (error) {
      errorHandler('Something went wrong during your request. Please, try again later!')
      console.log(error);
  };

  if (currentPage >= totalPages) {
    iziToast.error({
        backgroundColor: 'white',
        icon: false,
        progressBar: false,
        close: false,
        position: 'center',
        message:
          "We're sorry, but you've reached the end of search results.",
      });
  };

  loadMoreBtnVisibility();
  lightbox.refresh();
}
