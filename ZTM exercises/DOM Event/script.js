// import {DeleteList()} from 'app';

function myFunction(){
	// console.log("clicked");
	document.getElementById("click").innerHTML = 'Clicked';
}

var button = document.getElementsByTagName("button")[1];
var ul = document.querySelector("ul");
var input = document.getElementById("inputItem");
var li = document.getElementsByTagName("li");

// var div = document.getElementById("div");

// var li = document.createElement("li");

function createDeleteButton() {
    for (var i = 0; i < li.length; i++) {
        var createDeleteButton = document.createElement("button"); 
        li[i].appendChild(createDeleteButton);
        createDeleteButton.innerHTML = "Delete";
        DeleteList();
    }
}

// DeleteList();

//DRY:DON'T REPEAT YOURSELF
function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	var button = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(button);
	button.innerHTML = "Delete";
	input.value = "";
	DeleteList();
	// var att =document.createAttribute("class");
	// att.value="demo";
	// button.setAttributeNode(att);
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

//deleting list item

var del = document.getElementById("delete");

function dlt(){
	
	ul.innerHTML= "";
	
}
del.addEventListener("click", dlt);

function DeleteList(){
	var listButton = document.querySelectorAll('li button');
 	for (var i = 0; i<listButton.length; i++) {
 		listButton[i].addEventListener("click", Delete);
 	}
 }

function Delete(){
 		for (var i = 0; i<li.length; i++) {
 		this.parentNode.remove();
 		}
}

createDeleteButton();


// const a = "beep";
// const b = "boop";
// console.log(a+b && b); //return b
// console.log(a && b); //return b
// console.log(a && a+b); //return a+b
// console.log(b && a); //return a
	



