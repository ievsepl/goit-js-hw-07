import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const newGallery = onCreateNewItem(galleryItems);

function onCreateNewItem(galleryItems) {
  return galleryItems
    .map(
      ({ preview, description, original }) =>
        `<div class="gallery__item">
    
  <a class="gallery__link"   href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
       alt="${description}"
      data-source="${original}"
    />
  </a>
</div>`
    )
    .join("");
}
gallery.insertAdjacentHTML("afterbegin", newGallery);

gallery.addEventListener("click", onOpenPic);
function onOpenPic(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const largeImage = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`);
  largeImage.show();
  gallery.addEventListener("keydown", onEscapeClose);

  function onEscapeClose(e) {
    console.log(e.code);
    if (e.code === "Escape") {
      largeImage.close();
    }
  }
  gallery.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      gallery.removeEventListener("keydown", onEscapeClose);
    }
  });
}
