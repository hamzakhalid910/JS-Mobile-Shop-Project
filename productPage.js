document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  console.log(id);

  const productDetails = await fetchData(id);
  Update(productDetails);
});
async function fetchData(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
      throw new Error("Error occurred while fetching");
    }
    return await res.json();
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
}
function Update(details) {
  const descriptionCard = document.querySelector(".descriptionContainer");
  const priceCard = document.querySelector(".priceContainer");
  const imageCard = document.querySelector(".imgContainer");

  const description = document.createElement("p1");
  description.textContent = details.description;

  const price = document.createElement("p2");
  price.textContent = details.price;
  const image = document.createElement("img");
  image.src = details.thumbnail;

  descriptionCard.appendChild(description);
  priceCard.appendChild(price);
  imageCard.appendChild(image);
  console.log(description);
}
