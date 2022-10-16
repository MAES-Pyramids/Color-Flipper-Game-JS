const colors = [
  "rgb(33, 146, 255)",
  "rgba(56, 229, 77)",
  "rgb(156, 255, 46)",
  "rgba(253, 255, 0)",
  "rgba(234, 4, 126)",
  "rgb(255, 109, 40)",
  "rgba(252, 231, 0)",
  "rgba(0, 245, 255)",
];

const button = document.getElementById("btn");
const color = document.querySelector(".color");
//------------------------------------------------
function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}

const oldColor = [];
function uniqueColor(color) {
  if (oldColor.at(-1) == color) {
    return false;
  }
  oldColor.push(color);
  return true;
}

button.addEventListener("click", () => {
  let random = getRandomColor();
  if (!uniqueColor(random)) random = getRandomColor();

  color.textContent = colors[random];
  color.style.color = colors[random];
  document.body.style.backgroundColor = colors[random];
});
