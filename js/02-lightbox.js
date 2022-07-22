import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulGallery = document.querySelector('ul[class="gallery"]');
ulGallery.insertAdjacentHTML(
  'afterbegin',
  galleryItems.reduce(
    (ac, cur) =>
      ac +
      `<a class="gallery__item" href="${cur.original}">
  <img class="gallery__image" src="${cur.preview}" alt="${cur.description}" />
</a>`,
    ``
  )
);
