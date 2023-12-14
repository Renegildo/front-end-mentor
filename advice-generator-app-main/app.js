const title = document.querySelector('.container h3');
const quote = document.querySelector('.container p');
const loading = document.querySelector('.loading');
const generateButton = document.querySelector('.container button');

async function generateAdvice() {
	loading.style.visibility = 'visible';
	quote.style.visibility = 'hidden';

	let timestamp = new Date().getTime();
	let response = await fetch(`https://api.adviceslip.com/advice?timestamp=${timestamp}`);
	let data = await response.json();

	loading.style.visibility = 'hidden';
	quote.style.visibility = 'visible';

	const advice = data.slip.advice;
	const id = data.slip.id;

	title.innerHTML = `#${id}`;
	quote.innerHTML = `"${advice}"`;
}
