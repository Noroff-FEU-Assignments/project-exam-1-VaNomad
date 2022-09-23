
/* —————————  Gallery Page  ————————————————————————————————————————————— */

// Gallery Endpoint


// Gallery Targets
const galleryContainer = document.querySelector(".container");
const gallery = document.querySelector(".gallery");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const gurl = "https://analogflowers.sjur.io/wp-json/wp/v2/posts?per_page=100&_embed" + id;

// Gallery API call
async function createGallery() {
  try {
    const response = await fetch(gurl);
    const data = await response.json();
    console.log(data);

    gallery.innerHTML = "";
   
    for (let i = 0; i < data.length; i++) {
      gallery.innerHTML += `
                            <div class="card-container">
                              <img src="${data[i].content.rendered}">
                              <h1>"${data[i].title.rendered}"</h1>
                            </div>
      `
    }
  } catch (error) {
    console.log(error);
    gallery.innerHTML = ("The image can not be found", error)
    
  }
}

createGallery();

