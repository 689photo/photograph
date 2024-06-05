document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.querySelector('.overlay');
  const seeMoreButton = document.getElementById('seeMoreButton');
  const gallery = document.querySelector('.photo-gallery');

  // 오버레이 관련 코드 (필요 시)
  setTimeout(() => {
    overlay.classList.add('fade-out');
  }, 1000);

  setTimeout(() => {
    overlay.style.display = 'none';
  }, 4000);

  // 초기 상태에서 버튼을 숨김
  seeMoreButton.classList.remove('show');

  // 스크롤 이벤트 리스너 추가
  gallery.addEventListener('scroll', function () {
    const scrollTop = gallery.scrollTop;
    const scrollHeight = gallery.scrollHeight;
    const clientHeight = gallery.clientHeight;

    // 갤러리의 중간에 도달했을 때 버튼 표시
    if (scrollTop > (scrollHeight - clientHeight) / 2) {
      seeMoreButton.classList.add('show');
    } else {
      seeMoreButton.classList.remove('show');
    }
  });

  // 초기 상태에서 스크롤 위치를 확인하여 버튼을 표시할지 결정
  const initialScrollTop = gallery.scrollTop;
  const scrollHeight = gallery.scrollHeight;
  const clientHeight = gallery.clientHeight;

  if (initialScrollTop > (scrollHeight - clientHeight) / 2) {
    seeMoreButton.classList.add('show');
  } else {
    seeMoreButton.classList.remove('show');
  }
});
