import element from './gallery-items'

const paletteImages = document.querySelector('js-gallery');
const imagesMarkup = createGalleryElements(element);
paletteImages.insertAdjacentHTML('beforeend', imagesMarkup);

function createGalleryElements(element) {
    return element.map(({ preview, original, description }) => {
        return
        `<li class="gallery__item">
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
    }).join('');
}

console.log(createGalleryElements(element));