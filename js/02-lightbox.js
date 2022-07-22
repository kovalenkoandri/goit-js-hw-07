import { galleryItems } from './gallery-items.js';
const ulGallery = document.querySelector('ul[class="gallery"]');
ulGallery.innerHTML = galleryItems
  .map(
    e => `<a class="gallery__item" href="${e.original}">
  <img class="gallery__image" src="${e.preview}" alt="${e.description}" /></a>`
  )
  .join('');
var lightbox = new SimpleLightbox('.gallery .gallery__item', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
ulGallery.addEventListener('click', event => {
  event.preventDefault();
});
