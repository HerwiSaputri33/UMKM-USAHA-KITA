// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Initialize AOS
AOS.init();

// Swiper for galeri
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1.3,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.mySwiper .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3.5,
    }
  }
});

// Swiper for testimoni
const testimoniSwiper = new Swiper('.testimoniSwiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.testimoniSwiper .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 2.2,
    }
  }
});

// Simple form validation and submit handler
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    alert('Mohon lengkapi semua form dengan benar.');
    return;
  }

  alert('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.');
  form.reset();
});

// Smooth scroll for anchor links// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({top:0, behavior:'smooth'});
});

// Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();