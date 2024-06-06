document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.container');
  const leftSection = document.querySelector('.left-section');
  const gallery = document.querySelector('.photo-gallery');

  const profileSection = document.querySelector('.profile');
  const introduceSection = document.querySelector('.introduce');
  const miniProjectsSection = document.querySelector('.mini-projects');
  const snsListSection = document.querySelector('.sns-list');

  // Fade in the container
  setTimeout(() => {
    container.classList.add('fade-in');
  }, 100);

  // Fade in the left section
  setTimeout(() => {
    leftSection.classList.add('fade-in');
  }, 600); // 1 second delay

  // Fade in the profile section
  setTimeout(() => {
    profileSection.classList.add('visible');
  }, 1100); // 2 seconds delay

  // Fade in the introduction section
  setTimeout(() => {
    introduceSection.classList.add('visible');
  }, 1600); // 3 seconds delay

  // Fade in the mini projects section
  setTimeout(() => {
    miniProjectsSection.classList.add('visible');
  }, 2100); // 4 seconds delay

  // Fade in the SNS list section
  setTimeout(() => {
    snsListSection.classList.add('visible');
  }, 2600); // 5 seconds delay

  // Fade in the photo gallery
  setTimeout(() => {
    gallery.classList.add('fade-in');
  }, 3100); // 6 seconds delay

  // Scroll event listener for "See More" button
  const seeMoreButton = document.getElementById('seeMoreButton');

  seeMoreButton.classList.remove('show');

  gallery.addEventListener('scroll', function () {
    const scrollTop = gallery.scrollTop;
    const scrollHeight = gallery.scrollHeight;
    const clientHeight = gallery.clientHeight;

    // Show button when scrolled to the middle
    if (scrollTop > (scrollHeight - clientHeight) / 2) {
      seeMoreButton.classList.add('show');
    } else {
      seeMoreButton.classList.remove('show');
    }
  });

  // Initial check for "See More" button visibility
  const initialScrollTop = gallery.scrollTop;
  const scrollHeight = gallery.scrollHeight;
  const clientHeight = gallery.clientHeight;

  if (initialScrollTop > (scrollHeight - clientHeight) / 2) {
    seeMoreButton.classList.add('show');
  } else {
    seeMoreButton.classList.remove('show');
  }
});
