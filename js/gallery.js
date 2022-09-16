
const url = "https://analogflowers.sjur.io/wp-json/wp/v2/media/205"

const container = document.querySelector(".container");
const gallery = document.querySelector(".gallery");

async function createGallery() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
   
    for (let i = 0; i <= data.length; i++) {
      container.innerHTML += `
      <img src="${data[i]}"/>
      <h1>"${data[i].title}"</h1>
      `
    }
  } catch (error) {
    console.log(error);
    container.innerHTML = ("The image can not be found", error)
    
  }
}

createGallery();



