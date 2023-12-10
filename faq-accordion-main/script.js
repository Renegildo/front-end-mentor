const listItems = document.querySelectorAll('.li-header');
const pItems = document.querySelectorAll('p');
const plusSigns = document.querySelectorAll('.li-header img');

for (let i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener('click', () => {
		if (pItems[i].style.display == 'none') {
			pItems[i].style.display = 'block';
			plusSigns[i].setAttribute('src', '/assets/images/icon-minus.svg');
		} else {
			pItems[i].style.display = 'none';
			plusSigns[i].setAttribute('src', '/assets/images/icon-plus.svg');
		}
	})
}

for (let i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener('mouseover', () => {
		listItems[i].children[0].style.color = 'var(--purple)';
	});
	listItems[i].addEventListener('mouseout', () => {
		listItems[i].children[0].style.color = 'var(--dark-purple)';
	});
}
