const postDetails = document.querySelector(".post-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://analogflowers.sjur.io/wp-json/wp/v2/posts/" + id;

// ?per_page=100&_embed

async function createCarousel() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    postDetails.innerHTML = "";
   
    createHtml(data);

  } catch (error) {
    console.log(error);
    postDetails.innerHTML = ("The resource can not be found", error)
    
  }
}

createCarousel();


function createHtml(data) {
  postDetails.innerHTML = 
                  `
                  <div class="details">
                    <h1>${data.date}</h1>
                    <div class="details-image" style="background-image" url("${data.content.rendered}")></div>
                  </div>
                    
                  
                  `
}
