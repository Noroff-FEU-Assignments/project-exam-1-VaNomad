
// Endpoint
const url = "https://analogflowers.sjur.io/wp-json/wp/v2/posts?per_page=100&_embed"

// Html targets
const container = document.querySelector(".blog-grid");
const loadBtn = document.querySelector(".btn-blog");

// API call
async function createBlog() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    container.innerHTML = "";
   
    createHtml(data);

  } catch (error) {
    console.log(error);
    container.innerHTML = ("The resource can not be found", error)
    
  }
}

createBlog();


// Default Html function
function createHtml(data) {
  for (let i = 0; i < data.length; i++) {
    if (i === 10) {
      break;
    }
    container.innerHTML += 
                  `
                  <a href="details.html?id=${data[i].id}" class="slide">
                    <img src="${data[i]._embedded['wp:featuredmedia']['0'].source_url}">
                    <div>  
                      <h1 class="date">"${data[i].title.rendered}"</h1>
                    </div>
                  </a>
                  `
  }
}

// "Load more" API call
async function loadMoreBlogs() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    container.innerHTML = "";
   
    loadMoreHTML(data);

  } catch (error) {
    console.log(error);
    container.innerHTML = ("The resource can not be found", error)
    
  }
}

loadMoreBlogs();

// "Load more" button event listener
loadBtn.addEventListener("click", loadMoreBlogs);


// "Load more" Html function
function loadMoreHTML(data) {
  for (let i = 0; i < data.length; i++) {
    container.innerHTML += 
                  `
                  <a href="details.html?id=${data[i].id}" class="slide">
                    <img src="${data[i]._embedded['wp:featuredmedia']['0'].source_url}">
                    <div>  
                      <h1 class="date">"${data[i].title.rendered}"</h1>
                    </div>
                  </a>
                  `
  }
}

