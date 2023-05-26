
import { galleryItems } from './gallery-items.js';

// Change code below this line


const list = document.querySelector('.gallery')

function createGalleryMarkUp(items) {
    return items.map((item) => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
    </li>`).join("")
}

const addGallaryMarkUp = createGalleryMarkUp(galleryItems)
list.insertAdjacentHTML('beforeend', addGallaryMarkUp)


list.addEventListener('click', onClick) 

function onClick(evt) {
    evt.preventDefault()
    
    if(evt.target.nodeName !== 'IMG') {
        return
    }
    const source = evt.target.dataset.source
    const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
`)
instance.show()


list.addEventListener('keydown', (evt) => {
    if(evt.code === 'Escape') {
        instance.close()
    }
})
}










   






