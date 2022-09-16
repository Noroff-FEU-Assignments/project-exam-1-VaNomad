/* —————————  mobile menu  ————————————————————————————————————————————— */
const mobile = document.querySelector(".mobile");
const navMenu = document.querySelector(".nav-menu");

const mobileMenu = () => {
  mobile.classList.toggle("active");
  navMenu.classList.toggle("active");
  console.log("mobile menu toggle is working");
  
}

mobile.addEventListener("click", mobileMenu)


/* —————————  Posts Carousel  ————————————————————————————————————————————— */
const url = "https://analogflowers.sjur.io/wp-json/wp/v2/posts"

const container = document.querySelector(".home-container");

async function createCarousel() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
   
  
    for (let i = 0; i <= data.length; i++) {
      container.innerHTML += `
      <div>"${data[i].id}"</div>
      `
    }
  } catch (error) {
    console.log(error);
    container.innerHTML = ("The resource can not be found", error)
    
  }
}

createCarousel();