function learning(){
	var array = ["Banana","Apples","Oranges","Blueberries"];
	array.shift();
    array.sort();
    array.push("Kiwi");
    array.splice(0,1);
    array.reverse();
	document.getElementById("open").innerHTML = array;

	var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
	var newarray = array2[1][1][0];
	// document.getElementById("open").innerHTML = newarray;

}

//removing banana from array
// array.shift();

//sorting
// array.sort();

//adding a fruit at the end
// array.push("Kiwi");