const url = "https://analogflowers.sjur.io/wp-json/wp/v2/posts?per_page=100&_embed"

const container = document.querySelector(".blog-grid");

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


function createHtml(data) {
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