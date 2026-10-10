// Luxy AI Website - Main Script

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.textContent = '☰';
      });
    });
  }

  // Video play overlay
  const video = document.getElementById('promoVideo');
  const overlay = document.getElementById('videoOverlay');

  if (video && overlay) {
    overlay.addEventListener('click', () => {
      video.play();
      overlay.classList.add('hidden');
    });

    video.addEventListener('pause', () => {
      if (!video.ended) {
        overlay.classList.remove('hidden');
      }
    });

    video.addEventListener('ended', () => {
      overlay.classList.remove('hidden');
      video.currentTime = 0;
    });

    video.addEventListener('play', () => {
      overlay.classList.add('hidden');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Navbar background on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 6, 20, 0.95)';
      } else {
        navbar.style.background = 'rgba(10, 6, 20, 0.85)';
      }
    });
  }
});
