document.addEventListener('DOMContentLoaded', function () {
  // Apply fade-in effect after 3 seconds
  setTimeout(() => {
    document.body.classList.add('fade-in');
  }, 1000);

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
  }, 3000); // Trigger after 3 seconds
});
