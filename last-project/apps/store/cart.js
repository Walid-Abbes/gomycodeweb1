let label = document.getElementById("label");
let shopkart = document.getElementById("shopkart");
let bskt = JSON.parse(localStorage.getItem("data")) || [];

function calc() {
  let cart = document.getElementById("amount");
  cart.innerHTML = bskt.map((x) => x.item).reduce((x, y) => x + y, 0);
}
calc();

function kartGen() {
  if (bskt.length !== 0) {
    return (shopkart.innerHTML = bskt
      .map((x) => {
        let { id, item } = x;
        let search = itemdata.find((y) => y.id === id) || [];
        let { img, name, price } = search;
        return `
        <div class="cart-item">
        <img  src="${img}" alt="">
        <div class="info">
        <div class="price-x">
        <h4 class ="price-t">
        <p> ${name}</p>
        <p class ="price-k" > DA ${price}</p>
        </h4>
        <i onclick="removeItem(${id})" class="bi bi-x-circle"></i>
        </div>
        <div class="dtf">
         <div class="btn">
         <i onclick = "down(${id})" class="bi bi-dash-circle"></i>
         <div id=${id} class="quantity">${item}</div>
         <i onclick = "up(${id})" class="bi bi-plus-circle"></i>
         </div>
         <h3>$ ${item * price}</h3>
         </div>
        </div>
        </div>
        `;
      })
      .join(""));
  } else {
    shopkart.innerHTML = ``;
    label.innerHTML = `
    <h3>Your cart is empty</h3>
    <a href="store.html"> <button class="home">Back to shop</button> </a>
    `;
  }
}
kartGen();
let up = (id) => {
  let sitem = id;

  let search = bskt.find((x) => x.id === sitem.id);
  if (search === undefined) {
    bskt.push({
      id: sitem.id,
      item: 1,
    });
  } else {
    search.item++;
  }
  kartGen();

  update(sitem.id);
  localStorage.setItem("data", JSON.stringify(bskt));
};
let down = (id) => {
  let sitem = id;

  let search = bskt.find((x) => x.id === sitem.id);
  if (search === undefined) return;
  if (search.item === 0) return;
  else {
    search.item--;
  }
  console.log(bskt);
  update(sitem.id);

  bskt = bskt.filter((x) => x.item !== 0);
  kartGen();

  localStorage.setItem("data", JSON.stringify(bskt));
};
let update = (id) => {
  let search = bskt.find((x) => x.id === id);
  kartGen();
  document.getElementById(id).innerHTML = search.item;
  calc();
  bill();
};
function calc() {
  let cart = document.getElementById("amount");
  cart.innerHTML = bskt.map((x) => x.item).reduce((x, y) => x + y, 0);
}

let removeItem = (id) => {
  let st = id;
  bskt = bskt.filter((x) => x.id !== st.id);
  kartGen();
  calc();
  bill();
  localStorage.setItem("data", JSON.stringify(bskt));
};

function bill() {
  if (bskt.length !== 0) {
    let amount = bskt
      .map((x) => {
        let { item, id } = x;
        let search = itemdata.find((y) => y.id === id) || [];
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    label.innerHTML = `
      <h2> Your bill : DA ${amount}</h2>
      <button onclick="cancel()" class="cancel">Cancel payment</button>
      <button onclick="cancel()" class="pay">Proceed payment</button>
      `;
  } else {
  }
}
bill();

function cancel() {
  bskt = [];
  kartGen();
  calc();
  localStorage.setItem("data", JSON.stringify(bskt));
}
