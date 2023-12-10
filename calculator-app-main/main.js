const themeSelector = document.querySelector('.theme-selector');
const ball = document.querySelector('.ball');
const themeStyleSheet = document.querySelector('.theme-style-sheet');

let theme = 1;

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
		display.style.border = '0';
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
	display.style.border = '0';
	operation = '';
	display.innerHTML = '';
}

themeSelector.addEventListener('click', () => {
	switch (theme) {
		case 1:
			ball.style.transform = 'translateX(15px)';
			theme = 2;
			break;
		case 2:
			ball.style.transform = 'translateX(30px)';
			theme = 3;
			break;
		case 3:
			ball.style.transform = 'translateX(0)';
			theme = 1;
			break;
	}
	themeStyleSheet.setAttribute('href', `css/themes/theme${theme}.css`);
});
