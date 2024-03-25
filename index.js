// fetch("https://dummyjson.com/products/")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     data.forEach((product) => {
//       const markup = <li>${product.title}</li>;

//       document.querySelector("ul").insertAdjacentElement("beforeend", markup);
//     });
//   })
//   .catch((error) => console.log(error));

fetch("https://dummyjson.com/products/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((product) => {
      const markup = `<li>${product.title}</li>`;

      document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
    });
  })
  .catch((error) => console.error(error));

/*
async function fetchData() {
  try {
    console.log("Fetching Data");
    const response = await fetch("https://dummyjson.com/products/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetching data", error);
  }
}

console.log(fetchData());

async function renderData() {
  const container = document.querySelector(".container");
  const data = await fetchData();

  if (!data) {
    return;
  }

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = item.title;

    const body = document.createElement("p");
    body.textContent = item.body;

    card.appendChild(title);
    card.appendChild(body);
    container.appendChild(card);
  });
}

renderData();
*/
