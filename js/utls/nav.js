/* —————————  Global  ————————————————————————————————————————————— */
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.href === window.location.href) {
    link.setAttribute('aria-current', 'page')
  }
  
})

/* —————————  mobile menu  ———————————————————————————————————————— */
const mobile = document.querySelector(".mobile");
const navMenu = document.querySelector(".nav-menu");

const mobileMenu = () => {
  mobile.classList.toggle("active");
  navMenu.classList.toggle("active");
  console.log("mobile menu toggle is working");
  
}

mobile.addEventListener("click", mobileMenu)
