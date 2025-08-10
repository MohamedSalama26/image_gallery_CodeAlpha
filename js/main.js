let currentIndex = 0;
let images = [];

function openLightbox(img) {
  images = Array.from(document.querySelectorAll('.image-box img')).filter(i => i.parentElement.style.display !== 'none');
  currentIndex = images.indexOf(img);
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage(e) {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function prevImage(e) {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function filterImages(category) {
  const boxes = document.querySelectorAll('.image-box');
  boxes.forEach(box => {
    if (category === 'all' || box.classList.contains(category)) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });
}
