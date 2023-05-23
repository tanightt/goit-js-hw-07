import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
onCreateGalleryCards();

galleryList.addEventListener('click', onGalleryEvent)

function onCreateGalleryCards() {
    let galleryCards = '';

    galleryItems.forEach(item => {
    const galleryCard = `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
        </a>
        </li>`    
    galleryCards += galleryCard;
})
    galleryList.insertAdjacentHTML("afterbegin", galleryCards);
}

function onGalleryEvent(event) {
    event.preventDefault();
    const urlBigImg = event.target.dataset.source;
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${urlBigImg}" width="800" height="700">
`, {
    onShow: (instance) => {
        document.addEventListener("keydown", onEscapeKey);
    },
    onClose: (instance) => {
        document.removeEventListener("keydown", onEscapeKey);
    }
    })
    instance.show();

    function onEscapeKey(event) {
    if (event.code === "Escape") {
    instance.close();
    }
  }
}


