document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.photo-gallery');
  const photos = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg'];

  photos.forEach((photo) => {
    const img = document.createElement('img');
    img.src = photo;
    img.alt = 'Photo';
    gallery.appendChild(img);
  });
});
