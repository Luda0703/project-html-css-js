const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open')
});

const swiperOne = new Swiper('.feedback__slider', {
    loop: false,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });

  const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,
    slidesPerView: 3,
    speceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      breakpoints: {
        640: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        },
        360: {
            slidesPerView: 1,
        }
      }
  });

