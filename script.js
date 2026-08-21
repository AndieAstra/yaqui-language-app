const canvas = document.querySelector("canvas"),
ctx = canvas.getContext("2d");

const drawing = (e) => {
    ctx.lineTo(e.offsetX, e.offsetY); //creating line according to mouse pointer
    ctx.stroke(); //drawing/filling line with color
}

canvas.addEventListener("mousemove", drawing)