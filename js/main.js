
const toTopBtn = document.querySelector('.to-top-btn');

window.onscroll = function () {
   if (scrollY >= 1000) {
      toTopBtn.style.opacity = '1';
   } else {
      toTopBtn.style.opacity = '0';
   }
}

toTopBtn.addEventListener('click', _ => {
   scrollTo({
      top: 0,
      behavior: 'smooth',
   })
})

document.querySelector('.footer .year').innerHTML = new Date().getFullYear();
