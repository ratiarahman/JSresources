var loop = [
	"for",
	"while",
	"do,while",
	"forEach"
];

//for loop
for(var i=0; i<loop.length; i++){
	// console.log(loop[i] + "!");
	loop[i] = loop[i] + "!"; //putting ! in the loop array
}


//while loop

var okay = function (){
	var counter = 0;
	while(counter< loop.length){
	console.log(loop[counter],counter);
	// document.getElementById("demo").innerHTML = loop[counter];
	counter++;
	}
}
// document.getElementById("demo").innerHTML = okay();


//do,while loop //reverse way 
var anotherCounter = loop.length-1;
do{
	console.log(loop[anotherCounter]);
	anotherCounter--;
}while(anotherCounter>=0);

//forEach loop
loop.forEach(function(item,i){
	console.log(item,i);
}) 

//this way we can use the name of function, so better way 
function forEachLoop(item,i){
	console.log(item,i);
}

var array = [
	"hi!",
	"hello",
	"chao",
	"bye",
	"adios"
];

loop.forEach(forEachLoop);
array.forEach(forEachLoop);


//popping out all the items from loop array
// var loopLength = loop.length;
// for(var i=0; i<loopLength; i++){
// 	loop.pop();
// }
