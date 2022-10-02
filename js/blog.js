/* —————————  Blog Page  ————————————————————————————————————————————— */

// Blog Endpoint
const burl = "https://analogflowers.sjur.io/wp-json/wp/v2/posts?per_page=100&_embed"

// Blog targets
const container = document.querySelector(".blog-grid");
const loadBtn = document.querySelector(".btn-blog");

// Blog API call
async function createBlog() {
  try {
    const response = await fetch(burl);
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

// Blog Html function
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
                      <h1 class="date">${data[i].title.rendered}</h1>
                    </div>
                  </a>
                  `
  }
}

// Blog "Load more" API call
async function loadMoreBlogs() {
  try {
    const response = await fetch(burl);
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

// Blog "Load more" button event listener
loadBtn.addEventListener("click", loadMoreBlogs);

// Blog "Load more" Html function
function loadMoreHTML(data) {
  console.log("hello");
  
  for (let i = 0; i < data.length; i++) {
    container.innerHTML += 
                  `
                  <a href="details.html?id=${data[i].id}" class="slide">
                    <img src="${data[i]._embedded['wp:featuredmedia']['0'].source_url}">
                    <div>  
                      <h2 class="date">${data[i].title.rendered}</h2>
                    </div>
                  </a>
                  `
  }
}

