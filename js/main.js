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
const url = "https://analogflowers.sjur.io/wp-json/wp/v2/posts?per_page=100"

const container = document.querySelector(".posts");

async function createCarousel() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    container.innerHTML = "";
  
    // for (let i = 0; i < data.length; i++) {

      // if (i === 10) {
      //   break;
      // }

      // container.innerHTML += `
      // <div>"${data[i].id}"</div>
      // `
      createHtml(data);

    // }
  } catch (error) {
    console.log(error);
    container.innerHTML = ("The resource can not be found", error)
    
  }
}

createCarousel();


function createHtml(data) {
  for (let i = 0; i < data.length; i++) {
    if (i === 10) {
      break;
    }
    container.innerHTML += `<div>"${data[i].id}"</div>
    <ul>
                  <li class="slide" data-active>
                    <img class="featured-media">
                    <h1 class="date"></h1>
                    <p class="exerpt"></p>
                  </li>
                  <li class="slide">
                    <img class="featured-media">
                    <h1 class="date"></h1>
                    <p class="exerpt"></p>
                  </li>
                  <li class="slide">
                    <img class="featured-media">
                    <h1 class="date"></h1>
                    <p class="exerpt"></p>
                  </li>
                </ul>
    `

  }
  
}