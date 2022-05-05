/*=============== CHANGE BACKGROUND HEADER ===============*/
function findOffset(element) {
    var top = 20, left = 0;
  
    do {
      top += element.offsetTop  || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while(element);
  
    return {
      top: top,
      left: left
    };
  }
  
  window.onload = function () {
    const Header = document.getElementById('header');
    const headerOffset = findOffset(Header);
  
    window.onscroll = function() {
      // body.scrollTop is deprecated and no longer available on Firefox
      const bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  
      if (bodyScrollTop > headerOffset.top) {
        Header.classList.add('scroll-header');
      } else {
        Header.classList.remove('scroll-header');
      }
    };
  };

  
/*=============== SERVICES MODEL ===============*/

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns  = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}      

modalBtns.forEach((mb,i) =>{
  mb.addEventListener('click', () =>{
    modal(i)
  })
})

modalClose.forEach((mc)=>{
  mc.addEventListener('click', () =>{
    modalViews.forEach((mv) => {
      mv.classList.remove('active-modal')
    })
  })
})

const modalViewspr = document.querySelectorAll('.work__modal'),
      modalBtnspr  = document.querySelectorAll('.work__button'),
      modalClosepr = document.querySelectorAll('.work__modal-close');

let modalpr = function (modalClick) {
  modalViewspr[modalClick].classList.add('active-modal')
}      

modalBtnspr.forEach((mp,i) =>{
  mp.addEventListener('click', () =>{
    modalpr(i)
  })
})

modalClosepr.forEach((mh)=>{
  mh.addEventListener('click', () =>{
    modalViews.forEach((mg) => {
      mg.classList.remove('active-modal')
    })
  })
})

/*===============  MIXITUP FILTER PORTFOLIO ===============*/

let mixer = mixitup('.work__container', {
  selectors: {
    target: '.work__card'
  },
  animation: {
    duration: 300
  }
})

/*===============  link active work ===============*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
  link.forEach( l=> l.classList.remove('active-work')),
  this.classList.add('active-work')
}
linkWork.forEach( l=> l.addEventListener('click', activeWork ))



/*===============  SWIPER   ===============*/
var swiperTestimonial = new Swiper(".testimonial__container", {
  slidesPerView: "auto",
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 22,
    },

  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin:'top',
  direction:'60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`,{delay:700})
sr.reveal(`.home__social, .home__scroll`,{delay: 700, origin: 'bottom'})