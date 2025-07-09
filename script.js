const result = document.getElementById("result");
const input = document.getElementById("input");

const CalculateListeners = [];

let firstOperand = undefined;
let secondOperand = undefined;
let operator = undefined;
let answer = undefined;

const One = document.getElementById("One");
const Two = document.getElementById("Two");
const Three = document.getElementById("Three");
const Four = document.getElementById("Four");
const Five = document.getElementById("Five");
const Six = document.getElementById("Six");
const Seven = document.getElementById("Seven");
const Eight = document.getElementById("Eight");
const Nine = document.getElementById("Nine");
const Zero = document.getElementById("Zero");

const UpdateDisplay = () => {
	input.textContent = `${firstOperand === undefined ? "" : firstOperand} ${operator === undefined ? "" : operator} ${secondOperand === undefined ? "" : secondOperand}`;
	result.textContent = answer === undefined ? "" : answer;
}

const addInput = (n) => {
	if (operator === undefined) {
		firstOperand = firstOperand == undefined ? n : firstOperand + n;
	}
	else {
		secondOperand = secondOperand == undefined ? n : secondOperand + n;
	}

	UpdateDisplay();
}

const clearAll = () => {
	firstOperand = undefined;
	secondOperand = undefined;
	operator = undefined;
	answer = undefined;
	UpdateDisplay();
}

const setOperator = (o) => {
	if (firstOperand == undefined) {
		return
	}
	operator = o;
	UpdateDisplay();
}

const Calculate = () => {
	const callback = CalculateListeners.find((cbs) => cbs.operator == operator)?.listener;
	if (callback) {
		answer = callback(parseFloat(firstOperand), parseFloat(secondOperand));
		UpdateDisplay();
	}
	else {
		console.error("Calculate Logic Not Found");
	}
}

const AddCalculateLogic = (operator, listener) => {
	CalculateListeners.push({operator,listener});
}


//Listeners
One.addEventListener("click", ()=>{
	addInput("1");
})


Two.addEventListener("click", ()=>{
	addInput("2");
})


Three.addEventListener("click", ()=>{
	addInput("3");
})


Four.addEventListener("click", ()=>{
	addInput("4");
})


Five.addEventListener("click", ()=>{
	addInput("5");
})


Six.addEventListener("click", ()=>{
	addInput("6");
})


Seven.addEventListener("click", ()=>{
	addInput("7");
})


Eight.addEventListener("click", ()=>{
	addInput("8");
})


Nine.addEventListener("click", ()=>{
	addInput("9");
})


Zero.addEventListener("click", ()=>{
	addInput("0");
})

document.getElementById("Clear").addEventListener("click",()=>{
	clearAll();
})
document.getElementById("Period").addEventListener("click", ()=>{
	addInput(".");
})

document.getElementById("Add_btn").addEventListener("click", ()=>{
	setOperator("+");
})
document.getElementById("Sub_btn").addEventListener("click", ()=>{
	setOperator("-");	
})
document.getElementById("Mul_btn").addEventListener("click", ()=>{
	setOperator("*");	
})
document.getElementById("Div_btn").addEventListener("click", ()=>{
	setOperator("/");	
})

document.getElementById("Equals").addEventListener("click",Calculate)
