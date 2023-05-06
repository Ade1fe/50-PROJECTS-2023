


  var mySwiperOne = new Swiper(".mySwiperOne", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 1500, // time between each slide in milliseconds
    disableOnInteraction: false, // set to false to continue autoplay even when user interacts with the Swiper
  },
});



 var mySwiperTwo = new Swiper(".mySwiperTwo", {
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 1500, // time between each slide in milliseconds
    disableOnInteraction: false, // set to false to continue autoplay even when user interacts with the Swiper
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
       550: {
      slidesPerView: 3,
    },
    // when window width is <= 768px
    768: {
      slidesPerView: 4,
    },
    // when window width is <= 992px
    992: {
      slidesPerView: 5,
    },
    // when window width is <= 1200px
    1200: {
      slidesPerView: 5,
    }
  }
});


const buyNow = document.querySelector('.buy-now');

window.addEventListener('scroll', function() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 0) {
    buyNow.classList.add('buy-now--fixed');
  } else {
    buyNow.classList.remove('buy-now--fixed');
  }
});




const scrollToTopButton = document.getElementById('scroll-to-top');

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
}

// Scroll to the top of the document when the button is clicked
scrollToTopButton.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
