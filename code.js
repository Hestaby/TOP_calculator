function multiply () {
	let array = arguments[0];
	let i = 1;
	let toReturn = array[0];
	while (i < array.length){
		toReturn = toReturn * array[i];
		i++;
	}
	return toReturn;
}
function add () {
	return arguments[0] + arguments[1];
}

function subtract () {
	return arguments[0] - arguments[1];
}

function sum () {
	let array = arguments[0];
	let toReturn = 0;
	for (let i = 0; i < array.length; i++){
		toReturn += array[i];
	}
	return toReturn;
}
let operands = [0,0];
function operate(){
    let operation = arguments[0];
    if (operation == `+`){

    }
}
const disp = document.querySelector(`.display`);
disp.textContent = "0";
const buttons = document.querySelectorAll()