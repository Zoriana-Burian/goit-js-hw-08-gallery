"use strict";

import images from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
  lightboxImage: document.querySelector('.lightbox__image'),
  closeBtn: document.querySelector('button[data-action="close-lightbox"]')
}

const imagesMarkup = createGalleryElements(images);

refs.gallery.insertAdjacentHTML('beforeend', imagesMarkup);

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

refs.gallery.addEventListener('click', onGalleryClick);
refs.closeBtn.addEventListener('click', onCloseModalClickBtn);
refs.lightboxOverlay.addEventListener('click', OnCloseModalOnClick);


function onGalleryClick(evt) {
  evt.preventDefault();
  if(!evt.target.classList.contains('gallery__image')) {
    return;
  }

  onOpenModalClickImg(evt);
  
}

function onOpenModalClickImg(evt) {
  refs.lightbox.classList.add('is-open');
  refs.lightboxImage.src = evt.target.dataset.source;
  refs.lightboxImage.alt = evt.target.alt;

  window.addEventListener('keydown', onCloseModalEscKey);
}


function onCloseModalClickBtn() {
  refs. lightbox.classList.remove('is-open');
  refs.lightboxImage.src = '';
  refs.lightboxImage.alt = '';

  window.removeEventListener('keydown', onCloseModalEscKey);
}

function onCloseModalEscKey(evt) {
  if(evt.code === 'Escape') {
    onCloseModalClickBtn();
  }
  
}

function OnCloseModalOnClick(evt){
  if(evt.target === evt.currentTarget){
    onCloseModalClickBtn();

  }
}

