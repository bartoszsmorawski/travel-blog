console.log("Witaj podróżniku."); // Na konsoli pojawia się komunikat.

let button__delete = document.querySelector(".button__delete");
let header__general = document.querySelector(".header__general");

button__delete.addEventListener("click", () => {
  header__general.remove();
});

let button__changeBackgroundColor = document.querySelector(".button__changeBackgroundColor");
let body = document.querySelector(".body");
let body__dark = document.querySelector(".body__dark");

button__changeBackgroundColor.addEventListener("click", () => {
  body.classList.toggle("body__dark");

  if (button__changeBackgroundColor.innerText === "Włącz ciemny motyw") {
    button__changeBackgroundColor.innerText = "Włącz jasny motyw";
  } else if (button__changeBackgroundColor.innerText === "Włącz jasny motyw") {
    button__changeBackgroundColor.innerText = "Włącz ciemny motyw ";
  }
});

let button__changeTitle = document.querySelector(
  ".button__changeTitle"
);
let changeTitle = document.querySelector(".changeTitle");

button__changeTitle.addEventListener("click", () => {
  if (changeTitle.innerText === "Dlaczego Egipt ?") {
    changeTitle.innerText = "Dlaczego Egzotyka ?";
  } else if (changeTitle.innerText === "Dlaczego Egzotyka ?") {
    changeTitle.innerText = "Dlaczego Egipt ?";
  }
});
