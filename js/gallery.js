
/* —————————  Gallery Page  ————————————————————————————————————————————— */

// Gallery Endpoint
const gurl = "https://analogflowers.sjur.io/wp-json/wp/v2/media/205"

// Gallery Targets
const galleryContainer = document.querySelector(".container");
const gallery = document.querySelector(".gallery");

// Gallery API call
async function createGallery() {
  try {
    const response = await fetch(gurl);
    const data = await response.json();
    console.log(data);
   
    for (let i = 0; i <= data.length; i++) {
      galleryContainer.innerHTML += `
      <img src="${data[i]}"/>
      <h1>"${data[i].title}"</h1>
      `
    }
  } catch (error) {
    console.log(error);
    galleryContainer.innerHTML = ("The image can not be found", error)
    
  }
}

createGallery();

