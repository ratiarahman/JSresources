function myFunction(){
	// console.log("clicked");
	document.getElementById("click").innerHTML = "Clicked";
}

var button = document.getElementsByTagName("button")[1];
var ul = document.querySelector("ul");
var input = document.getElementById("inputItem")

// var li = document.createElement("li");


//DRY:DON'T REPEAT YOURSELF
function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	var butt = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(butt);
	butt.innerHTML = "Delete";
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

function buttonListEvent(){
	var btn = document.querySelectorAll('li button');
btn.addEventListener("click", function(){
	for(var i=0; i<li.length; i++){
		this.parentNode.remove()
	}
})
}


button.addEventListener("click", clickEvent)

input.addEventListener("keypress", KeyEvent)




//deleting list item

var del = document.getElementById("delete");

function dele(){
	// ul.parentNode.removeChild(li);
	
	// console.log(ul.length);
	var list = document.querySelector("li");
	// console.log(list.length);
	list.remove(list[3]);
	// console.log(list.length);

}



del.addEventListener("click", dele);
	
