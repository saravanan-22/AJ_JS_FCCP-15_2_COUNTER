let btnD = document.querySelector("#btn1");
let btnR = document.querySelector("#btn2");
let btnI = document.querySelector("#btn3");
let value = document.querySelector("#value");

btnD.addEventListener("click", () => {
  value.textContent = --value.textContent;
  if (value.textContent < 0) {
    value.className = "red";
  }
});
btnR.addEventListener("click", () => {
  value.textContent = 0;
  if (value.textContent == 0) {
    value.className = "black";
  }
});
btnI.addEventListener("click", () => {
  value.textContent = ++value.textContent;
  if (value.textContent > 0) {
    value.className = "green";
  }
});
