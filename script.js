function submitForm(event) {
  event.preventDefault();
  alert("Thank you for your feedback!");
}

// Scroll-in effect for images

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  const scrollHandler = () => {
    images.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        img.classList.add('visible');
      }
    });
  };
  images.forEach(img => img.classList.add('scroll-in'));
  window.addEventListener('scroll', scrollHandler);
  scrollHandler(); // Initial check
});