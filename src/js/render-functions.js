
export function imagesRender(array) { 
    return array.map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
    }) => {
        return `<li class = "gallery-item">

  <a class = "gallery-link" href="${largeImageURL}">
    <img
    loading="lazy"
    src = "${webformatURL}" 
    alt="${tags}"
    class="gallery-image"
    />
  </a>

  <ul class = "info-list">

    <li class="info-container">
      <h2 class="main-info">Likes </h2>
      <p class="info">${likes}</p>
    </li>

    <li class="info-container">
      <h2 class="main-info"> Views </h2>
      <p class="info">${views}</p>
    </li>

    <li class="info-container">
      <h2 class="main-info">Comments </h2>
      <p class="info">${comments}</p>
    </li>

    <li class="info-container">
      <h2 class="main-info">Downloads </h2>
      <p class="info">${downloads}</p>
    </li>

  </ul>

</li>`}
     

    ).join('')
}
