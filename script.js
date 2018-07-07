var css = document.querySelector("h3");
var rand = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
	body.style.background = "linear-gradient(to right, "+ color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background +";";
	
}

var btn = document.createElement("button");
btn.appendChild(document.createTextNode("Randomize!"));
rand.appendChild(btn);
btn.onclick = randomize;


function randomize(){
	color1.value = randomColors();
	color2.value = randomColors();
	setGradient();
}

function randomColors(){
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

setGradient();

color1.addEventListener("input", setGradient);
	
color2.addEventListener("input", setGradient);

btn.addEventListener("onclick", randomize)



// 1. Write code so that the colour inputs match the background generated on the first page load. 

// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.