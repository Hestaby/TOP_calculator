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
let operator = ``;
function operate(){
let operands = dispText.split(/[+\-*\/]/);
	if (operator == `+`)
		return parseFloat(operands[0]) + parseFloat(operands[1]);
	if (operator == `-`)
		return parseFloat(operands[0]) - parseFloat(operands[1]);
	if (operator == `*`)
		return parseFloat(operands[0]) * parseFloat(operands[1]);
	if (operator == `/`)
		return parseFloat(operands[0]) / parseFloat(operands[1]);
}
let dispText = `0`;
const disp = document.querySelector(`.display`);
disp.textContent = `${dispText}`;
const funcs = document.querySelectorAll(`.funcs`);

funcs.forEach(element => {
	element.addEventListener(`click`, event => {
		operator = element.textContent;
		dispText += `${element.textContent}`
		disp.textContent = dispText;
	})		
});
const nums = document.querySelectorAll(`.nums`);
nums.forEach(element => {
	element.addEventListener(`click`, event => {
		if (dispText != 0)
			dispText += `${element.textContent}`;
		else
			dispText = `${element.textContent}`;
		disp.textContent = dispText;
	});
});
const clear = document.querySelector(`.clear`);
clear.addEventListener(`click`, event => {
	dispText = `0`;
	disp.textContent = dispText;
});
const equals = document.querySelector(`.equals`);
equals.addEventListener(`click`, event => {
	dispText = operate();
	disp.textContent = dispText;
});