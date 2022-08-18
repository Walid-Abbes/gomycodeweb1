let shop = document.getElementById("shop");

let itemdata = [
  {
    id: "a",
    name: "PS4 controller",
    price: "8000",
    description: "brand new DualShock 4 controller made by sony",
    img: "/DOM/DOM-Checkpoint/assets/images/img1.jpg",
  },
  {
    id: "b",
    name: "PS4",
    price: "694200",
    description:
      "The PlayStation 4 is a home video game console developed by Sony Computer Entertainment",
    img: "/DOM/DOM-Checkpoint/assets/images/img2.jpg",
  },
  {
    id: "c",
    name: "N°5 Chanel",
    price: "free",
    description:
      "Chanel No. 5 was the first perfume launched by French couturier Gabrielle 'Coco' Chanel in 1921",
    img: "/DOM/DOM-Checkpoint/assets/images/img3.jpg",
  },
];
let bskt = [];

function shopgen() {
  return (shop.innerHTML = itemdata
    .map((x) => {
      let { id, name, price, description, img } = x;
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
          <div id=${id} class="quantity">0</div>
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
  update();
};
let down = (id) => {
  let sitem = id;

  let search = bskt.find((x) => x.id === sitem.id);
  if (search.item === 0) return;
  else {
    search.item--;
  }
  console.log(bskt);
  update();
};
let update = (but var here) => {
  let search = bskt.find((x) => x.id === id);
  console.log(search.item);
  document.getElementById(id);
};
