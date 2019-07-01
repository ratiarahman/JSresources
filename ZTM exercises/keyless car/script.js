//function declaration
function checkDriverAge(){
	var age=prompt("how old are you?");
	if (Number(age)===18) {
		alert("Congrats!!");
	}
	else if (age>18) {
		alert("You can also Ride");
	}
	else{
		alert("Sorry!!");
	}
}
checkDriverAge();

//function expression

var checkDriverAge2 = function(age){
	var age;
	if (Number(age)===18) {
		console.log("Congrats!!");
	}
	else if (age>18) {
		console.log("You can also Ride");
	}
	else{
		console.log("Sorry!!");
	}
}
checkDriverAge2(2);

