
/* —————————  Gallery Page  ————————————————————————————————————————————— */

// Gallery Targets
const aboutContainer = document.querySelector(".about-container");

const loader = document.querySelector(".loader");

// Gallery Endpoint
const aurl = "https://analogflowers.sjur.io/wp-json/wp/v2/pages/134?_embed";
console.log(aurl);

// Gallery API call
async function fetchAbout() {
  try {
    const response = await fetch(aurl);
    const data = await response.json();
    console.log(data);

    aboutContainer.innerHTML = "";

  

    aboutContainer.innerHTML = 
    `
                             <div class="about-box">
                             <h1 class="page-title">about</h1>
                               <div class="about-content">${data.content.rendered}</div>
                              </div>
    `

  } catch (error) {
    console.log(error);
    aboutContainer.innerHTML = ("The image can not be found", error)
    
  }
}

fetchAbout();

// function createAbout(data) {
//   console.log(data);
  
  
//     aboutContainer.innerHTML =
//       `
//                    <div class="about-content">
//                     <h1 class="page-title">hello</h1>
//                      <img src="https://analogflowers.sjur.io/wp-content/uploads/2022/09/9E8AAD11-4975-490B-9FCA-0F71830EF8A7_1_105_c.jpg">
//                      <h2>"${data.excerpt.rendered}"</h2>
//                      <p></p> 
//                    </div>
//                      `
   
// }
 
