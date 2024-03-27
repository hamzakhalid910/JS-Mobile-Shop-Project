async function fetchData() {
  try {
    const res = await fetch("https://dummyjson.com/products/");
    if (!res.ok) {
      throw new Error("Error occurred while fetching data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
}
async function displayData() {
  const loader = document.getElementById("loader");
  loader.style.display = "block";
  try {
    const data = await fetchData();
    data.products.forEach((element) => {
      const container = document.querySelector(".container");
      const card = document.createElement("div");
      card.classList.add("card");

      const title = document.createElement("h2");
      title.textContent = element.title;

      const image = document.createElement("img");
      image.src = element.thumbnail;

      const price = document.createElement("price");
      price.textContent = "$" + element.price;

      const rating = document.createElement("rating");
      rating.textContent = "★" + element.rating;

      const buyNow = document.createElement("button");
      buyNow.textContent = "Buy Now";

      buyNow.addEventListener("click", function () {
        window.location.href = `productPage.html?id=${element.id}`;
      });

      card.appendChild(title);
      card.appendChild(image);
      card.appendChild(price);
      card.appendChild(rating);
      card.appendChild(buyNow);
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    loader.style.display = "none";
  }
}
displayData();
