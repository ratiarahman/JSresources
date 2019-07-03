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
var counter = 0;
while(counter< loop.length){
	console.log(loop[counter]);
	counter++;
}

//popping out all the items from loop array
// var loopLength = loop.length;
// for(var i=0; i<loopLength; i++){
// 	loop.pop();
// }
