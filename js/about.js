
/* —————————  Gallery Page  ————————————————————————————————————————————— */

// Gallery Targets
const aboutContainer = document.querySelector(".about-container");

const loader = document.querySelector(".loader");

// Gallery Endpoint
const gurl = "https://analogflowers.sjur.io/wp-json/wp/v2/pages/134?_embed";
console.log(aurl);

// Gallery API call
async function fetchAbout() {
  try {
    const response = await fetch(gurl);
    const data = await response.json();
    console.log(data);

    aboutContainer.innerHTML = "";

    aboutContainer.innerHTML += `
                            <div class="about">
                              ${data.content.rendered}
                             </div>
    `

  } catch (error) {
    console.log(error);
    aboutContainer.innerHTML = ("The image can not be found", error)
    
  }
}