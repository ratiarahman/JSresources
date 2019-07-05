function myFunction(){
	// console.log("clicked");
	document.getElementById("click").innerHTML = "Clicked";
}

var button = document.getElementsByTagName("button")[1];
var ul = document.querySelector("ul");
var input = document.getElementById("inputItem")

button.addEventListener("click", function(){                //mouse event 
	// console.log("Yeah! It works");
	if (input.value.length > 0) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	}
})

input.addEventListener("keypress", function(event){                //keypress event 
	// console.log(event.which);
	if (input.value.length > 0 && event.which===13) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	}
})