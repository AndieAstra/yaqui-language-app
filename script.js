const canvas = document.querySelector("canvas"),
toolBtns = document.querySelectorAll(".tool"),
ctx = canvas.getContext("2d");

let isDrawing = false,
selectedTool = "brush",
brushWidth = 5;

window.addEventListener("load", () => {
    // setting canvas width/height.. offsetwidth/height returns viewable width/height of an element
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

const drawRect = (e) => {
    //ctx.strokeRect(e.offsetX, eoffSetY);
}

const startDraw = () => {
    isDrawing = true;
    ctx.beginPath(); // creating new path to draw
    ctx.lineWidth = brushWidth; // passing brushSize as line width
}

const drawing = (e) => {
    if(!isDrawing) return; // if isDrawing is false return from here

    if(selectedTool === "brush") {
        ctx.lineTo(e.offsetX, e.offsetY); //creating line according to mouse pointer
        ctx.stroke(); //drawing/filling line with color
    } else if(selectedTool === "rectangle"){
        drawRect(e);
    }

}

toolBtns.forEach(btn => {
    btn.addEventListener("click", () => { // adding click event to all tool option
        // removing active class from the previous option and adding on current clicked option
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
        console.log(selectedTool);
    });
})

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mousemup", () => isDrawing = false);