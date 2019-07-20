var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

function backgroundColor(){
	var x = body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	h3.textContent = x;
	// console.log(x);
}

color1.addEventListener("input", backgroundColor());

color2.addEventListener("input", backgroundColor());

color1.addEventListener("input", backgroundColor);

color2.addEventListener("input", backgroundColor);

