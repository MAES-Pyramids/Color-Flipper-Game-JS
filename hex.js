const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");
//------------------------------------------------
function getRandomColor() {
  return Math.floor(Math.random() * hex.length);
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
  let hexString = "#";
  for (let i = 0; i < 6; i++) {
    hexString += hex[getRandomColor()];
  }
  if (!uniqueColor(hexString)) return;

  color.textContent = hexString;
  color.style.color = hexString;
  document.body.style.backgroundColor = hexString;
});
