var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.getElementById("demo");
var color4 = document.getElementById("one");
var body = document.querySelector("body");

function initial(){
	color3.value = color1.value;
	color4.value = color2.value;
}

initial();

function random(){
	
	var x = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	var y = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  	//return x;
  	document.getElementById("demo").value = x;
  	document.getElementById("one").value = y;

  	var z = body.style.background = "linear-gradient(to right," + color3.value + "," + color4.value + ")";
	h3.textContent = z;
}

function backgroundColor(){
	var x = body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	h3.textContent = x;
	// console.log(x);	
}

backgroundColor();
// color1.addEventListener("input", backgroundColor());

// color2.addEventListener("input", backgroundColor());
color1.addEventListener("input", backgroundColor);
color2.addEventListener("input", backgroundColor);

