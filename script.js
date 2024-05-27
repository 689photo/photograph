document.addEventListener('DOMContentLoaded', function () {
  // 페이지가 로드된 후 body 요소의 opacity를 1로 변경하여 페이드 인 효과를 트리거
  document.body.style.opacity = '1';

  const overlay = document.getElementById('overlay');
  const overlayImg = document.getElementById('overlay-img');
  const close = document.getElementById('close');

  document.querySelectorAll('.gallery-item img').forEach((img) => {
    img.addEventListener('click', function () {
      overlayImg.src = this.src;
      overlay.classList.add('visible');
    });
  });

  close.addEventListener('click', function () {
    overlay.classList.remove('visible');
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay || e.target === close) {
      overlay.classList.remove('visible');
    }
  });
});
