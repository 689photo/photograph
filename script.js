document.addEventListener('DOMContentLoaded', function () {
  // Trigger fade-in effect by setting body opacity to 1
  document.body.classList.add('fade-in');

  // Get elements for overlay functionality
  const overlay = document.getElementById('overlay');
  const overlayImg = document.getElementById('overlay-img');
  const close = document.getElementById('close');

  // Add click event to each gallery image to display the overlay
  document.querySelectorAll('.gallery-item img').forEach((img) => {
    img.addEventListener('click', function () {
      overlayImg.src = this.src; // Set overlay image source to clicked image source
      overlay.classList.add('visible'); // Show overlay
    });
  });

  // Add click event to close button to hide the overlay
  close.addEventListener('click', function () {
    overlay.classList.remove('visible');
  });

  // Add click event to overlay to hide it when clicking outside the image
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay || e.target === close) {
      overlay.classList.remove('visible');
    }
  });

  // Trigger letter-spacing animation
  setTimeout(() => {
    const logo = document.getElementById('logo');
    logo.classList.add('expand');
  }, 3000); // 3초 지연 후 실행
});
