document.addEventListener('DOMContentLoaded', function () {
  const events = document.querySelectorAll('.timeline .event');
  events.forEach((event, index) => {
    event.style.setProperty('--i', index);
  });

  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  const overlayImage = document.createElement('img');
  overlay.appendChild(overlayImage);
  document.body.appendChild(overlay);

  const overlayTriggers = document.querySelectorAll('.overlay-trigger');
  overlayTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const fullImageSrc = trigger.src;
      overlayImage.src = fullImageSrc;
      overlay.classList.add('visible');
    });
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('visible');
  });
});
