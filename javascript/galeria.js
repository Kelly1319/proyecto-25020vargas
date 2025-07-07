let currentIndex = 0;
const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');
const totalImages = images.length;
const galleryWidth = document.querySelector('.gallery-container').offsetWidth;

function nextImage() {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Vuelve a la primera imagen
  }
  updateGalleryPosition();
}

function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalImages - 1; // Va a la última imagen
  }
  updateGalleryPosition();
}

function updateGalleryPosition() {
  const translateX = -currentIndex * galleryWidth;
  gallery.style.transform = `translateX(${translateX}px)`;
}