document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.querySelector('.overlay');

  // 1초 동안 오버레이가 유지되도록 설정
  setTimeout(() => {
    overlay.classList.add('fade-out');
  }, 1000); // 1초 후에 애니메이션 클래스 추가

  // 애니메이션이 끝난 후 오버레이를 숨기기 위해 추가적으로 3초 더 기다림
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 4000); // 총 4초 후 오버레이를 숨김 (1초 대기 + 3초 애니메이션)
});
