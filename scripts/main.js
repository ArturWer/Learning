"use strict"
/* first
let text = "#";
for (let i = 0; i < 7; i++) {
	console.log(text + "\n");
	text += "#";
}*/

/* fizz buzz 
let msg = 1;
for (var i = 0; i < 100; i++) {
	if (msg % 3 === 0 && msg % 5 === 0) 
		console.log("FizzBuzz");
	else if (msg % 3 === 0)
	  console.log("Fizz");
	else if (msg % 5 === 0)
	  console.log("Buzz");
	else 
	  console.log(msg);
	msg++;
}*/

/* chess board */
let board = "", rowCount = 0, MAX = 8, startSymb = "#";
for (let i = 0; i < MAX; i++) {
	let newRow = "";
	// form new row
	for (let j = 0; j < MAX; j++) {
		newRow += startSymb;
		if (j === MAX - 1) 
			newRow += "\n";
		if (startSymb === "#")
			startSymb = " ";
		else startSymb = "#";
	}
	board += newRow;
	startSymb = newRow[1];

}
console.log(board);

/**/