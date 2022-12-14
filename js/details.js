

/* —————————  Details Page  ————————————————————————————————————————————— */
  
// Details Targets
const postDetails = document.querySelector(".post-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

// Details Endpoint
const url = "https://analogflowers.sjur.io/wp-json/wp/v2/posts/" + id;

// Details API call
async function createDetails() {
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
  // Modal targets
  const apiImgs = document.querySelector(".post-details");
  const modal = document.querySelector(".modal"); //wrapper
  const modalImg = document.querySelector(".modal-image");
  const span = document.querySelector(".close");
  
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

createDetails();

// Details Html function
function createHtml(data) {
  postDetails.innerHTML = 
                  `
                    <h1>${data.date}</h1>
                    <div class="details">${data.content.rendered}</div>
                  `
}


