
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
  // Modal targets
  const apiImgs = document.querySelector(".gallery");
  const modal = document.querySelector(".modal"); //wrapper
  const modalImg = document.querySelector(".modal-image");
  const span = document.querySelector(".close");
  // const apiImg = document.querySelector("figure img");
  
  // for (let i = 0; i < apiImgs.length; i++) {
  //   console.log(i);
  // }
  

  // Modal Open
  apiImgs.onclick = function (event) {
  modal.style.display = "block";
  modalImg.src = event.target.src;
  }
  // Modal Close w/span
  span.onclick = function () {
  modal.style.display = "none";
  }
  // Modal Close w/outside click
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }










}

createGallery();

