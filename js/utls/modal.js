const images = document.querySelectorAll("figure img");

// const postDetails = document.querySelector(".post-details");
// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");
// console.log(id);

// const url = "https://analogflowers.sjur.io/wp-json/wp/v2/posts/" + id;
// console.log(url);

// const loader = document.querySelector(".loader");
// console.log(postDetails);


for (i = 0; i < images.length; i++) {
  images.addEventListener("click", function (event) {
    event.target.src = modal;
  })
}

