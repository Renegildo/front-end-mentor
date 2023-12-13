const tasks = document.querySelector('.tasks');
const newTaskInput = document.querySelector('.new-todo input');
let taskCounter = 0;

const themeSelector = document.querySelector('.theme-selector');
const themeStyleSheet = document.querySelector('.theme-style-sheet');
const bgImage = document.querySelector('.bg');

const allButton = document.querySelector('.all-button');
const activeButton = document.querySelector('.active-button');
const completedButton = document.querySelector('.completed-button');
const clearCompletedButton = document.querySelector('.clear-completed-button');
const itemsLeft = document.querySelector('.items-left');

function addTask() {
	taskCounter++;
	tasks.innerHTML += `
	<li class="task">
		<div class="custom-checkbox" onclick="countItemsLeft()">
			<input type="checkbox" name="" id="task${taskCounter}">
			<label for="task${taskCounter}">${newTaskInput.value}</label>
		</div>
	</li>
	`;
	newTaskInput.value = '';
	countItemsLeft();
}

function changeTheme(theme) {
	themeStyleSheet.setAttribute('href', `css/themes/${theme}.css`);
}

function hideAllTasks() {
	for (let i = 0; i < tasks.children.length; i++) {
		tasks.children[i].style.display = 'none';
	}
}

function setFilter(filter) {
	switch (filter) {
		case 'all':
			for (let i = 0; i < tasks.children.length; i++) {
				tasks.children[i].style.display = 'block';
			}
			break;
		case 'active':
			hideAllTasks();
			for (let i = 0; i < tasks.children.length; i++) {
				if (tasks.children[i].children[0].children[0].checked == false) {
					tasks.children[i].style.display = 'block';
				}
			}
			break;
		case 'completed':
			hideAllTasks();
			for (let i = 0; i < tasks.children.length; i++) {
				if (tasks.children[i].children[0].children[0].checked == true) {
					tasks.children[i].style.display = 'block';
				}
			}
			break;
		case 'clear-completed':
			for (let i = 0; i < tasks.children.length; i++) {
				tasks.children[i].children[0].children[0].checked = false;
			}
			break;
	}
}

function clearCompleted() {
	for (let i = 0; i < tasks.children.length; i++) {
		tasks.children[i].children[0].children[0].checked = false;
	}
	countItemsLeft();
}

function countItemsLeft() {
	let left = 0;
	for (let i = 0; i < tasks.children.length; i++) {
		if (tasks.children[i].children[0].children[0].checked == false) {
			left += 1;
		}
	}
	itemsLeft.innerHTML = `${left} Items left`;
}

// - ~/ Init Functions \~ - \\

function initTodo() {
	newTaskInput.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			addTask();
		}
	});
	countItemsLeft();
	console.log('todo list OK');
}

function initThemeSelector() {
	changeTheme(localStorage.getItem('theme') || 'theme1');
	if (themeStyleSheet.getAttribute('href') === 'css/themes/theme1.css') {
		themeSelector.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="currentColor" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m8 24a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m-69.66 5.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16"/></svg>
			`
	} else {
		themeSelector.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="currentColor" d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z"/></svg>
			`
	}
	themeSelector.addEventListener('click', () => {
		if (themeStyleSheet.getAttribute('href') === 'css/themes/theme1.css') {
			// ~/ Light Theme \~ - \\
			changeTheme('theme2');
			localStorage.setItem('theme', 'theme2');
			bgImage.style.backgroundImage = 'url("../images/bg-desktop-light.jpg")';
			themeSelector.innerHTML = `
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="currentColor" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m8 24a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m-69.66 5.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16"/></svg>
				`
		} else {
			// ~/ Dark Theme \~ +\\
			changeTheme('theme1');
			localStorage.setItem('theme', 'theme1');
			bgImage.style.backgroundImage = 'url("../images/bg-desktop-dark.jpg")';
			themeSelector.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="currentColor" d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z"/></svg>
			`
		}
	});
	console.log('theme selector OK');
}

initTodo();
initThemeSelector();
