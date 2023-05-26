const nav = document.querySelector('.nav')
const navToggle = document.querySelector('.nav__toggle')

const form = document.querySelector('.footer__form')
const email = document.querySelector('.footer__email')
const emailError = document.querySelector('.footer__form-error')

const glide = new Glide('.glide', {
  startAt: 1,
  gap: 24,
  peek: {
    before: -100,
    after: -100
  },
  perView: 3,
  focusAt: 1,
  slideWidth: 400,
  breakpoints: {
    1024: {
      perView: 1,
      focusAt: 0,
      peek: {
        before: 24,
        after: 24
      },
    }
  }
})

glide.mount()

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('no-scroll')
  nav.classList.toggle('nav--active')
})

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (!email.validity.valid) {
    form.classList.add('footer__form--invalid')
  }
})