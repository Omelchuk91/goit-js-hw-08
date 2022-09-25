// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);


const galleryRef = document.querySelector('.gallery');
const galleryMarkup = makeImageMarkup(galleryItems);

function makeImageMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `
  <a href="${original}" class="gallery__item">
    <img
     src="${preview}"
     alt="${description}"
     class="gallery__image" 
     />
  </a>`
    )
    .join('');
}
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});