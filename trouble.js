let v1 = 3;
let v2 = 4;

// removed "equals" (it was undefined)
alert("3 times 4 = " + (v1 * v2));


// getElementById (not getElementsById)
let section = document.getElementById("s1");

// style spelling and valid properties
section.style.width = "50%";
section.style.textAlign = "center";
section.style.fontFamily = "arial, serif";
section.style.fontWeight = "bold"; // FIX: stlye → style
section.style.fontStyle = "italic";
section.style.fontSize = "20px";


// RED
// getElementById capitalization
const red = document.getElementById("red");
red.innerHTML = "RED";
red.style.backgroundColor = "red";


// ORANGE
const orange = document.getElementById("orange");
// innerhtml → innerHTML
orange.innerHTML = "ORANGE";
orange.style.backgroundColor = "orange";


// YELLOW
const yellow = document.getElementById("yellow");
yellow.innerHTML = "YELLOW";
yellow.style.backgroundColor = "yellow";


// GREEN
// variable name was wrong (purple → green)
const green = document.getElementById("green");
green.innerHTML = "GREEN";
green.style.backgroundColor = "green";


// INDIGO
const indigo = document.getElementById("indigo");
indigo.innerHTML = "INDIGO";
indigo.style.backgroundColor = "indigo";


// VIOLET
const violet = document.getElementById("violet");
violet.innerHTML = "VIOLET";
violet.style.backgroundColor = "violet";
