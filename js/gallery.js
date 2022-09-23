
/* —————————  Gallery Page  ————————————————————————————————————————————— */

// Gallery Endpoint


// Gallery Targets
const galleryContainer = document.querySelector(".gallery-container");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

console.log(galleryContainer);
console.log(gallery);


// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");
// console.log(id);

const gurl = "https://analogflowers.sjur.io/wp-json/wp/v2/pages/235?_embed";
console.log(gurl);

// Gallery API call
async function createGallery() {
  try {
    const response = await fetch(gurl);
    const data = await response.json();
    console.log(data);

    galleryContainer.innerHTML = "";

    galleryContainer.innerHTML += `
                            <div class="gallery">
                              <img src="${data.content.rendered}"/>
                             </div>
    `
   
    // for (let i = 0; i < data.length; i++) {
    //   gallery.innerHTML += `
    //                         <img src="${data[i]}"/>
    //                         <h1>"${data[i].title}"</h1>
    //   `
    // }

    // data.forEach(function () {
    //   gallery.innerHTML += `
    //                         <div>
    //                           <img src="${data.content.rendered}"/>
    //                         </div>
    //                       `
    // });  

  } catch (error) {
    console.log(error);
    galleryContainer.innerHTML = ("The image can not be found", error)
    
  }
}

createGallery();

