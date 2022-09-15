const imgContainer = document.querySelector(".imgContainer"),
  container = document.querySelector(".container"),
  returnBtn = document.querySelector(".returnBtn"),
  searchBtn = document.querySelector(".searchBtn");

let input = document.querySelector("input").value;
console.log(input);

returnBtn.addEventListener("click", () => {
  container.style.display = "flex";
  imgContainer.style.display = "none";
});

searchBtn.addEventListener("click", () => {
  if (input != "eren") {
    return;
  } else {
    container.style.display = "none";
    imgContainer.style.display = "flex";
  }
});
