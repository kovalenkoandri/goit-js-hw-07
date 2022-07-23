import { galleryItems } from './gallery-items.js';
//1. Creating and rendering markup from the `galleryItems` data array and provided gallery item template.
const divGallery = document.querySelector('div[class="gallery"]');
divGallery.innerHTML = galleryItems
  .map(
    e => `<div class="gallery__item">
  <a class="gallery__link" href="${e.original}"> 
    <img
      class="gallery__image"
      src="${e.preview}"
      data-source="${e.original}" 
      alt="${e.description}"
    />
  </a>
</div>`
  )
  .join('');
let instance = '';
function onEscape(event) {
  if (event.key === 'Escape') instance.close();
}
function divGalleryDelegation(ev) {
  //Please note that the image is wrapped in a link,
  //which means that, when clicked, the user will be redirected to another page by default.
  ev.preventDefault(); //Disable this behavior by default.
  if (ev.target.nodeName !== 'IMG') return; //filter delegation or filter click
  instance = basicLightbox.create(
    `
    <img src="${ev.target.dataset.source}">
`,
    {
      onShow: instance => {
        document.addEventListener('keydown', onEscape);
      },
      onClose: instance => {
        document.removeEventListener('keydown', onEscape);
      },
    }
  );
  instance.show();
}
//2. Implementing delegation to `div.gallery` and getting the `url` of a large image.
divGallery.addEventListener('click', divGalleryDelegation);
