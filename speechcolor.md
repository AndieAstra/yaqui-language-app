var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechRecognitionEvent =
  SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var colors = [
  "aqua",
  "azure",
  "beige",
  "bisque",
  "black",
  "blue",
  "brown",
  "chocolate",
  "coral",
  "crimson",
  "cyan",
  "fuchsia",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "green",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lime",
  "linen",
  "magenta",
  "maroon",
  "moccasin",
  "navy",
  "olive",
  "orange",
  "orchid",
  "peru",
  "pink",
  "plum",
  "purple",
  "red",
  "salmon",
  "sienna",
  "silver",
  "snow",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "white",
  "yellow",
];

const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");
const hints = document.querySelector(".hints");
const startBtn = document.querySelector("button");

let colorHTML = "";
colors.forEach(function (v, i, a) {
  console.log(v, i);
  colorHTML += '<span style="background-color:' + v + ';"> ' + v + " </span>";
});
hints.innerHTML =
  "Press the button then say a color to change the background color of the app. Try " +
  colorHTML +
  ".";

startBtn.onclick = function () {
  recognition.start();
  console.log("Ready to receive a color command.");
};

recognition.onresult = function (event) {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = "Result received: " + color + ".";
  bg.style.backgroundColor = color;
  console.log("Confidence: " + event.results[0][0].confidence);
};

recognition.onspeechend = function () {
  recognition.stop();
};

recognition.onnomatch = function (event) {
  diagnostic.textContent = "I didn't recognise that color.";
};

recognition.onerror = function (event) {
  diagnostic.textContent = "Error occurred in recognition: " + event.error;
};

==============================================================
Research Links
==============================================================

https://codepen.io/patrickliu/pen/ErNWPM?editors=0010

https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/lang

https://webaudio.github.io/web-speech-api/#introduction

https://duckduckgo.com/?q=how+to+use+custom+speech+grammar+list+web+speech+api&ia=web

https://stackoverflow.com/questions/53222408/using-grammar-with-web-speech-api

https://duckduckgo.com/?q=javascript+web+speech+api+custom+translation&ia=web

https://css-tricks.com/using-the-web-speech-api-for-multilingual-translations/

https://medium.com/@inboxamarbalu/building-a-voice-translation-app-with-google-translate-api-web-speech-api-and-transliteration-in-701e65d58747

https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition