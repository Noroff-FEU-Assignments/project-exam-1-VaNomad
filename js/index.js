/* —————————  Carousel  ————————————————————————————————————————————— */

// Carousel Endpoint
const curl = "https://analogflowers.sjur.io/wp-json/wp/v2/posts?per_page=20&_embed"

// Carousel Targets
const sliderContainer = document.querySelector(".slider-container ");

// Carousel API call
async function createCarousel() {
  try {
    const response = await fetch(curl);
    const data = await response.json();
    console.log(data);
    
    sliderContainer.innerHTML = "";
   
    createHtml(data);

  } catch (error) {
    console.log(error);
    sliderContainer.innerHTML = ("The resource can not be found", error)
    
  }
}

createCarousel();

// Carousel Html function
function createHtml(data) {
  for (let i = 0; i < data.length; i++) {
    if (i === 9) {
      break;
    }
    sliderContainer.innerHTML += 
                  `
                  <a href="details.html?id=${data[i].id}" class="slide">
                    <div class="slide-content">
                      <img src="${data[i]._embedded['wp:featuredmedia']['0'].source_url}">
                      <div class>
                        <h2 class="slide-date">${data[i].title.rendered}</h2>
                      </div>
                    </div>
                  </a>
                  `
  }
}

// Carousel Arrows
const arrowLeft = document.querySelector(".fa-chevron-left");
const arrowRight = document.querySelector(".fa-chevron-right");

arrowLeft.addEventListener("click", function () {
  sliderContainer.scrollLeft -= 361;
})
arrowRight.addEventListener("click", function () {
  sliderContainer.scrollLeft += 361;
})

