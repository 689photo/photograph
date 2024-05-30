document.addEventListener('DOMContentLoaded', function () {
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var slides = document.getElementsByClassName('slides');
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }
});

function toggleOverlay(imageSrc) {
  var overlay = document.createElement('div');
  overlay.id = 'overlay';
  overlay.style.position = 'fixed';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
  overlay.style.cursor = 'pointer';
  overlay.style.zIndex = '1000';
  overlay.innerHTML =
    '<img src="' +
    imageSrc +
    '" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: auto; height: 80%;">';
  overlay.onclick = function () {
    document.body.removeChild(this);
  };
  document.body.appendChild(overlay);
}
