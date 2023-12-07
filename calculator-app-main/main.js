let operation = '';

function display(char) {
	const display = document.querySelector('.display');
	operation += char;
	display.innerHTML += char;
}

function calculate() {
	try {
		const display = document.querySelector('.display');
		display.innerHTML = eval(operation);
		operation = display.innerHTML;
		display.style.border = '1px solid #181F32';	
	} catch (error) {
		const display = document.querySelector('.display');
		display.style.border = '1px solid #D03F2F';
		console.log(error);
	}
}

function del() {
	const display = document.querySelector('.display');
   operation = display.innerHTML.slice(0, -1);
   display.innerHTML = operation;
}

function reset() {
	const display = document.querySelector('.display');
	display.style.border = '1px solid #181F32';
	operation = '';
	display.innerHTML = '';
}
