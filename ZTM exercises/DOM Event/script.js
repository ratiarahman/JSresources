function myFunction(){
	// console.log("clicked");
	document.getElementById("click").innerHTML = "Clicked";
}

var button = document.getElementsByTagName("button")[1];
var ul = document.querySelector("ul");
var input = document.getElementById("inputItem")

var li = document.createElement("li");

//DRY:DON'T REPEAT YOURSELF
function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function clickEvent(){                          //mouse event 
	// console.log("Yeah! It works");
	if (inputLength() > 0) {
	createListElement();
	}
}

function KeyEvent(event){                       //keypress event //event.keyCode also okay
	// console.log(event.which);
	if (inputLength() > 0 && event.which===13) {
	createListElement();
	}
}

button.addEventListener("click", clickEvent)

input.addEventListener("keypress", KeyEvent)

var del = document.getElementById("delete");

del.addEventListener("click", function(){
	// ul.parentNode.removeChild(li);
	createListElement(li).remove();
})