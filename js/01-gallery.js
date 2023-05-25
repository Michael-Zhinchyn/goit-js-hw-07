import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const list = document.querySelector('.gallery')

const markup = galleryItems.map(item => {list.insertAdjacentHTML("beforeend", `<li class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</li>`)})






   






