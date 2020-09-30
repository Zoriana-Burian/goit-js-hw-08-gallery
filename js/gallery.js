"use strict";

import images from './gallery-items.js';

const paletteImages = document.querySelector('js-gallery');
const imagesMarkup = createGalleryElements(images);

paletteImages.insertAdjacentHTML('beforeend', imagesMarkup);

function createGalleryElements(item) {
    return item
    .map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
  .join('');
}

console.log(createGalleryElements(item));


