let shop = document.getElementById("shop");

let bskt = JSON.parse(localStorage.getItem("data")) || [];

function shopgen() {
  return (shop.innerHTML = itemdata
    .map((x) => {
      let { id, name, price, description, img } = x;
      let search = bskt.find((x) => x.id === id) || [];
      return `
      <div class="itemcard" id="itemcard">
        <img
          width="216"
          src="${img}"
          alt="${name}"
        />
        <div class="details">
          <h3>${name}</h3>
          <p>
          ${description}
          </p>
        </div>
        <div class="price-quantity">
          <h2>DA ${price}</h2>
          <div class="btn">
            <i onclick = "down(${id})" class="bi bi-dash-circle"></i>
           <div id=${id} class="quantity">${
             search.item === undefined ? 0 : search.item}
           </div>
            <i onclick = "up(${id})" class="bi bi-plus-circle"></i>
          </div>
        </div>
      </div> 
      `;
    })
    .join(""));
} 
shopgen();

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
  console.log(bskt);

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

  localStorage.setItem("data", JSON.stringify(bskt));
};
let update = (id) => {
  let search = bskt.find((x) => x.id === id);
  console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calc();
};
function calc() {
  let cart = document.getElementById("amount");
  cart.innerHTML = bskt.map((x) => x.item).reduce((x, y) => x + y, 0);
}
calc();


