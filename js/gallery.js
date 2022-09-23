
/* —————————  Gallery Page  ————————————————————————————————————————————— */

// Gallery Endpoint


// Gallery Targets
const galleryContainer = document.querySelector(".container");
const gallery = document.querySelector(".gallery");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const gurl = "https://analogflowers.sjur.io/wp-json/wp/v2/media?per_page=100&_embed" + id;

// Gallery API call
async function createGallery() {
  try {
    const response = await fetch(gurl);
    const data = await response.json();
    console.log(data);

    gallery.innerHTML = "";
   
    for (let i = 0; i < data.length; i++) {
      gallery.innerHTML += `
                            <img src="${data[i].source_url}">
                            <h1>"${data[i].caption.rendered}"</h1>
      `
    }
  } catch (error) {
    console.log(error);
    gallery.innerHTML = ("The image can not be found", error)
    
  }
}

createGallery();

