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

button.addEventListener("click", () => {
  const random = getRandomColor();
  color.textContent = colors[random];
  color.style.color = colors[random];
  document.body.style.backgroundColor = colors[random];
});
