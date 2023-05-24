import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
onCreateGalleryCards();

 const lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
    });

function onCreateGalleryCards() {
    let galleryCards = '';

    galleryItems.forEach(item => {
        const galleryCard = `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
        </li>`
    galleryCards += galleryCard;
}); 
    galleryList.insertAdjacentHTML("afterbegin", galleryCards);
}