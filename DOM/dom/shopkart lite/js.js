const products = [
  {
    id: "a",
    name: "Violet Evergarden",
    price: "1500",
    description: "",
    img: "/last-project/assets/books/bookC1.jpg",
  },
  {
    id: "b",
    name: "Lord of the flies",
    price: "1500",
    description: "",
    img: "/last-project/assets/books/bookC2.jpg",
  },
  {
    id: "c",
    name: "Metro 2033",
    price: "1500",
    description: "",
    img: "/last-project/assets/books/bookC3.jpg",
  },

  {
    id: "d",
    name: "NieR: Automata long story short",
    price: "1500",
    description: "",
    img: "/last-project/assets/books/bookC4.jpg",
  },
];

const container = document.querySelector(".container");
const cart = document.querySelector(".toggle");
const count = document.querySelector(".count");
const toggle = document.querySelector(".cart");

products.map((product) => {
  container.innerHTML += `
    <div class="product">
    <img src="${product.img}" />
    <h2>${product.name}</h2>
    <div class="price"><p>${product.price}</p>
    <button class="btn btn-primary">Buy</button></div>
    </div>
    `;
});
