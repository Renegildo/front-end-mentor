const title = document.querySelector('.container h3');
const quote = document.querySelector('.container p');
const loading = document.querySelector('.loading');
const generateButton = document.querySelector('.container button');

async function generateQuote() {
	let response = await fetch('https://api.adviceslip.com/advice');
	loading.style.visibility = 'visible';
	quote.style.visibility = 'hidden';
	let data = await response.json();
	loading.style.visibility = 'hidden';
	quote.style.visibility = 'visible';

	quote.innerHTML = `"${data.slip.advice}"`;
	console.log(data.slip.advice);
	title.innerHTML = `ADVICE #${data.slip.id}`;
	console.log(data.slip.id);
}
