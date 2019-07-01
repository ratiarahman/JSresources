function learning(){
	var array = ["Banana","Apples","Oranges","Blueberries"];
	array.shift(); //removing banana from array
    array.sort(); //sorting
    array.push("Kiwi"); //adding a fruit at the end
    array.splice(0,1);
    array.reverse();
	document.getElementById("open").innerHTML = array;

	var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
	var newarray = array2[1][1][0];
	// document.getElementById("open").innerHTML = newarray;

}


//creating object
var login ={
		username: "andrei",
		password: "supersecret"
	}
var klk = [
	{
		username: "andrei",
		password: "supersecret"
	}
];

var newsfeed = [
	{
		username: "ratia",
		password: "lol"
	},
	{
		username: "Sally",
		password: "lul"
	},
	{
		username: "Mitch",
		password: "lel"
	}
];