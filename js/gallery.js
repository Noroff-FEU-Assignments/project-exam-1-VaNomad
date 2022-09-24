
/* —————————  Gallery Page  ————————————————————————————————————————————— */

// Gallery Targets
const galleryContainer = document.querySelector(".gallery-container");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

// Gallery Endpoint
const gurl = "https://analogflowers.sjur.io/wp-json/wp/v2/pages/235?_embed";
console.log(gurl);

// Gallery API call
async function createGallery() {
  try {
    const response = await fetch(gurl);
    const data = await response.json();
    console.log(data);

    gallery.innerHTML = "";

    gallery.innerHTML += `
                            <div class="gallery-image">
                              ${data.content.rendered}
                             </div>
    ` 

  } catch (error) {
    console.log(error);
    gallery.innerHTML = ("The image can not be found", error)
    
  }
}

createGallery();

