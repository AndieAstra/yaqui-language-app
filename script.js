// Check for browser compatibility
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    console.log('Your browser supports speech recognition.');

    // Create a new instance of SpeechRecognition
    const recognition = new SpeechRecognition();

    // Set recognition properties
    recognition.continuous = true; // Keep listening until manually stopped
    recognition.interimResults = false; // Don't show interim results
    recognition.lang = 'en-US'; // Set language

    // Start recognition when the button is clicked
    const startBtn = document.getElementById('startBtn');
    const output = document.getElementById('output');

    startBtn.addEventListener('click', () => {
        recognition.start();
        console.log('Voice recognition started. Speak into the microphone.');
    });

// ----------------------------------------------------------------

    // Handle the result event
    recognition.addEventListener('result', (event) => {
        const transcript = event.results[event.resultIndex][0].transcript;
        output.textContent = transcript; // Display the recognized speech
        console.log('Recognized Text:', transcript);

        // Perform actions based on voice commands (optional)
        if (transcript.toLowerCase().includes('hello')) {
            output.textContent += ' - You said hello!';
        }
    });

    // Handle errors
    recognition.addEventListener('error', (event) => {
        console.error('Speech recognition error:', event.error);
    });

} else {
    console.log('Speech recognition is not supported in this browser.');
}

// ----------------------------------------------------------------

const canvas = document.querySelector("canvas"),
toolBtns = document.querySelectorAll(".tool"),
fillColor = document.querySelector("#fill-color"),
sizeSlider = document.querySelector("#size-slider"),
colorBtns = document.querySelectorAll(".colors .option"),
colorPicker = document.querySelector("#color-picker"),
clearCanvas = document.querySelector(".clear-canvas"),
saveImg = document.querySelector(".save-img"),
ctx = canvas.getContext("2d", {
      willReadFrequently: true,
 });

// global variables with default value
let prevMouseX, prevMouseY, snapshot,
isDrawing = false,
selectedTool = "brush",
brushWidth = 5,
selectedColor = "#black";

const setCanvasBackground = () => {
    // setting whole canvas background to white, so the downloaded img background will be white
    ctx.fillStyle = "rgb(235, 222, 197)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = selectedColor; // setting fillstyle back to the selectedColor, it'll be the brush color
}

// -------------------------------------------------
// play = document.getElementById("play");
// -------------------------------------------------

window.addEventListener("load", () => {
    // setting canvas width/height.. offsetwidth/height returns viewable width/height of an element
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBackground();
});

// -------------------------------------------------
// function playMusic(){
//     let audio = new Audio("media/audio.m4a");
//     audio.play()
// }

// play.addEventListener("click", playMusic);

function clickShapes() {
    var sound = document.getElementById('shapes');
    sound.play();
}

function clickRectangle() {
    var sound = document.getElementById('rect');
    sound.play();
}

function clickCircle() {
    var sound = document.getElementById('circle');
    sound.play();
}

function clickTriangle() {
    var sound = document.getElementById('triangle');
    sound.play();
}

function clickWhite() {
    var sound = document.getElementById('white');
    sound.play();
}
function clickBlack() {
    var sound = document.getElementById('black');
    sound.play();
}
function clickRed() {
    var sound = document.getElementById('red');
    sound.play();
}
function clickOrange() {
    var sound = document.getElementById('orange');
    sound.play();
}
function clickYellow() {
    var sound = document.getElementById('yellow');
    sound.play();
}
function clickGreen() {
    var sound = document.getElementById('green');
    sound.play();
}
function clickBlue() {
    var sound = document.getElementById('blue');
    sound.play();
}
function clickPurple() {
    var sound = document.getElementById('purple');
    sound.play();
}
function clickPink() {
    var sound = document.getElementById('pink');
    sound.play();
}
// -------------------------------------------------

const drawRect = (e) => {
    // if fillColor isn't checked draw a rect with border else draw rect w/ background
    if(!fillColor.checked) {
        // creating circle according to the mouse pointer
        return ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
    }
        ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
}

const drawCircle = (e) => {
    ctx.beginPath(); // creating new path to draw circle
    // getting radius for circle according to the mouse pointer
    let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2));
    ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI); // creating circle according to mouse pointer
    fillColor.checked ? ctx.fill() : ctx.stroke(); // if fillcolor is checked fill circle else draw border circle
}

const drawTriangle = (e) => {
    ctx.beginPath(); // creating new path to draw triangle
    ctx.moveTo(prevMouseX, prevMouseY); // moving triangle to the mouse pointer
    ctx.lineTo(e.offsetX, e.offsetY); // creating first line according to the mouse pointer
    ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY); // creating bottom line of triangle
    ctx.closePath(); // closing path of a triangle so the third line draws automatically
    fillColor.checked ? ctx.fill() : ctx.stroke(); // if fillcolor is checked fills the triangle else draws border triangle
}

// const drawLine = (e) => {
//     ctx.beginPath(); // creating new path to draw line
//     ctx.moveTo(prevMouseX, prevMouseY); // moving line to the mouse pointer
//     ctx.lineTo(e.offsetX, e.offsetY); // creating first line according to the mouse pointer
//     ctx.stroke();
// }

const startDraw = (e) => {
    isDrawing = true;
    prevMouseX = e.offsetX; // passing current mouseX position as prevMouseX value
    prevMouseY = e.offsetY; // passing current mouseY position as prevMouseY value
    ctx.beginPath(); // creating new path to draw
    ctx.lineWidth = brushWidth; // passing brushSize as line width
    // copying canvas data & passing as snapshot value... this avoids dragging the image
    ctx.strokeStyle = selectedColor;
    ctx.fillStyle = selectedColor;
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

// ** Update the eraser so that it ACTUALLY erases...

const drawing = (e) => {
    if(!isDrawing) return; // if isDrawing is false return from here
    ctx.putImageData(snapshot, 0, 0); // adding copied canvas data on to this canvas

    if(selectedTool === "brush" || selectedTool === "eraser") {
        // if selected tool is eraser then set strokeStyle to white
        // to paint white color on to the existing canvas content else set the stroke color to selected color
        ctx.strokeStyle = selectedTool === "eraser" ? "rgb(235, 222, 197)" : selectedColor;
        ctx.lineTo(e.offsetX, e.offsetY); //creating line according to mouse pointer
        ctx.stroke(); //drawing/filling line with color
    } else if(selectedTool === "rectangle"){
        drawRect(e);
    } else if(selectedTool === "circle"){
        drawCircle(e);
    } else {
        drawTriangle(e);
}}

toolBtns.forEach(btn => {
    btn.addEventListener("click", () => { // adding click event to all tool option
        // removing active class from the previous option and adding on current clicked option
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
        console.log(selectedTool);
    });
})

sizeSlider.addEventListener("change", () => brushWidth = sizeSlider.value); //passing slider value as brushSize

colorBtns.forEach(btn => {
    btn.addEventListener("click", () => {// adding click event to all color buttons
        // removing active class from the previous option and adding on current clicked option
        document.querySelector(".options .selected").classList.remove("selected");
        btn.classList.add("selected");
        selectedColor = window.getComputedStyle(btn).getPropertyValue("background-color");
    });
})

// colorPicker.addEventListener("change", () => {
//     // passing picked color value from color picker to last color btn background
//     colorPicker.parentElement.style.background = colorPicker.value;
//     colorPicker.parentElement.click();
// })

clearCanvas.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing the whole canvas
    setCanvasBackground();
})

saveImg.addEventListener("click", () => {
    const link = document.createElement("a"); // creating <a> element
    link.download = `${Date.now()}.jpg`; // passing current date as link download value
    link.href = canvas.toDataURL(); // passing canvasData as link href value
    link.click(); // clicking link to download image
})

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = false);