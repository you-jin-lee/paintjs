canvas = document.getElementById("jsCanvas");
ctx = canvas.getContext("2d");

canvas.height = 400;
canvas.width = 400;

ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

let painting = false;

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

function handleMouseMove(event) {}

if (canvas) {
  canvas.addEventListener("onMouse", startPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("mousemove", handleMouseMove);
}
