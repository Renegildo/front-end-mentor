const board = document.querySelector('.board');
const xIcon = '<svg style="color: var(--cyan);" class="x" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 8 8"><path fill="currentColor" d="M1.41 0L0 1.41l.72.72L2.5 3.94L.72 5.72L0 6.41l1.41 1.44l.72-.72l1.81-1.81l1.78 1.81l.69.72l1.44-1.44l-.72-.69l-1.81-1.78l1.81-1.81l.72-.72L6.41 0l-.69.72L3.94 2.5L2.13.72z"></path></svg>';
const oIcon = '<svg style="color: var(--yellow);" class="o" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 448 512"><path fill="currentColor" d="M224 96a160 160 0 1 0 0 320a160 160 0 1 0 0-320m224 160a224 224 0 1 1-448 0a224 224 0 1 1 448 0"></path></svg>';

const winPopup = document.querySelector('.pop-up.win');
const losePopup = document.querySelector('.pop-up.lose');
const tiePopup = document.querySelector('.pop-up.tie');
const overlay = document.querySelector('.overlay');

const turn = document.querySelector('.turn');

let allOcuped = false;
let pos;
let canMove = true;
let cpuCanMove = true;

const winsH4 = document.querySelector('#wins')
const losesH4 = document.querySelector('#loses')
const tiesH4 = document.querySelector('#ties')

let wins = 0;
let loses = 0;
let ties = 0;

function resetBoard() {
	for (let i = 0; i < board.children.length; i++) {
		board.children[i].style.backgroundColor = 'var(--box-color)';
		board.children[i].style.backgroundColor = 0;
		board.children[i].style.color = 'var(--cyan)';
		board.children[i].innerHTML = '';
	}
	canMove = true;
	cpuCanMove = true;
	turn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 8 8"><path fill="currentColor" d="M1.41 0L0 1.41l.72.72L2.5 3.94L.72 5.72L0 6.41l1.41 1.44l.72-.72l1.81-1.81l1.78 1.81l.69.72l1.44-1.44l-.72-.69l-1.81-1.78l1.81-1.81l.72-.72L6.41 0l-.69.72L3.94 2.5L2.13.72z"/></svg> <span>TURN</span>';
}

function checkLose() {
	pos = board.children;
	// Horizontal
	if (pos[0].innerHTML === oIcon && pos[1].innerHTML === oIcon && pos[2].innerHTML === oIcon) {
		pos[0].style.backgroundColor = 'var(--yellow)';
		pos[0].children[0].style.color = 'var(--box-color)';

		pos[1].style.backgroundColor = 'var(--yellow)';
		pos[1].children[0].style.color = 'var(--box-color)';

		pos[2].style.backgroundColor = 'var(--yellow)';
		pos[2].children[0].style.color = 'var(--box-color)';
		return true;
	} else if (pos[3].innerHTML === oIcon && pos[4].innerHTML === oIcon && pos[5].innerHTML === oIcon) {
		pos[3].style.backgroundColor = 'var(--yellow)';
		pos[3].children[0].style.color = 'var(--box-color)';

		pos[4].style.backgroundColor = 'var(--yellow)';
		pos[4].children[0].style.color = 'var(--box-color)';

		pos[5].style.backgroundColor = 'var(--yellow)';
		pos[5].children[0].style.color = 'var(--box-color)';
		return true;
	} else if (pos[6].innerHTML === oIcon && pos[7].innerHTML === oIcon && pos[8].innerHTML === oIcon) {
		pos[6].style.backgroundColor = 'var(--yellow)';
		pos[6].children[0].style.color = 'var(--box-color)';

		pos[7].style.backgroundColor = 'var(--yellow)';
		pos[7].children[0].style.color = 'var(--box-color)';

		pos[8].style.backgroundColor = 'var(--yellow)';
		pos[8].children[0].style.color = 'var(--box-color)';
		return true;
	}
	// Vertical
	if (pos[0].innerHTML === oIcon && pos[3].innerHTML === oIcon && pos[6].innerHTML === oIcon) {
		pos[0].style.backgroundColor = 'var(--yellow)';
		pos[0].children[0].style.color = 'var(--box-color)';

		pos[3].style.backgroundColor = 'var(--yellow)';
		pos[3].children[0].style.color = 'var(--box-color)';

		pos[6].style.backgroundColor = 'var(--yellow)';
		pos[6].children[0].style.color = 'var(--box-color)';
		return true;
	} else if (pos[1].innerHTML === oIcon && pos[4].innerHTML === oIcon && pos[7].innerHTML === oIcon) {
		pos[1].style.backgroundColor = 'var(--yellow)';
		pos[1].children[0].style.color = 'var(--box-color)';

		pos[4].style.backgroundColor = 'var(--yellow)';
		pos[4].children[0].style.color = 'var(--box-color)';

		pos[7].style.backgroundColor = 'var(--yellow)';
		pos[7].children[0].style.color = 'var(--box-color)';
		return true;
	} else if (pos[2].innerHTML === oIcon && pos[5].innerHTML === oIcon && pos[8].innerHTML === oIcon) {
		pos[2].style.backgroundColor = 'var(--yellow)';
		pos[2].children[0].style.color = 'var(--box-color)';

		pos[5].style.backgroundColor = 'var(--yellow)';
		pos[5].children[0].style.color = 'var(--box-color)';

		pos[8].style.backgroundColor = 'var(--yellow)';
		pos[8].children[0].style.color = 'var(--box-color)';
		return true;
	}
	// Diagonal
	if (pos[0].innerHTML === oIcon && pos[4].innerHTML === oIcon && pos[8].innerHTML === oIcon) {
		pos[0].style.backgroundColor = 'var(--yellow)';
		pos[0].children[0].style.color = 'var(--box-color)';

		pos[4].style.backgroundColor = 'var(--yellow)';
		pos[4].children[0].style.color = 'var(--box-color)';

		pos[8].style.backgroundColor = 'var(--yellow)';
		pos[8].children[0].style.color = 'var(--box-color)';
		return true;
	} else if (pos[2].innerHTML === oIcon && pos[4].innerHTML === oIcon && pos[6].innerHTML === oIcon) {
		pos[2].style.backgroundColor = 'var(--yellow)';
		pos[2].children[0].style.color = 'var(--box-color)';

		pos[4].style.backgroundColor = 'var(--yellow)';
		pos[4].children[0].style.color = 'var(--box-color)';

		pos[6].style.backgroundColor = 'var(--yellow)';
		pos[6].children[0].style.color = 'var(--box-color)';
		return true;
	}
	// Caiu em nenhum dos if's acima
	return false;
}

function checkWin() {
	pos = board.children;
	// Horizontal
	if (pos[0].innerHTML === xIcon && pos[1].innerHTML === xIcon && pos[2].innerHTML === xIcon) {
		pos[0].style.backgroundColor = 'var(--cyan)';
		pos[0].children[0].style.color = '#1F3540';

		pos[1].style.backgroundColor = 'var(--cyan)';
		pos[1].children[0].style.color = '#1F3540';
		
		pos[2].style.backgroundColor = 'var(--cyan)';
		pos[2].children[0].style.color = '#1F3540';
		return true;
	} else if (pos[3].innerHTML === xIcon && pos[4].innerHTML === xIcon && pos[5].innerHTML === xIcon) {
		pos[3].style.backgroundColor = 'var(--cyan)';
		pos[3].children[0].style.color = '#1F3540';

		pos[4].style.backgroundColor = 'var(--cyan)';
		pos[4].children[0].style.color = '#1F3540';
		
		pos[5].style.backgroundColor = 'var(--cyan)';
		pos[5].children[0].style.color = '#1F3540';
		return true;
	} else if (pos[6].innerHTML === xIcon && pos[7].innerHTML === xIcon && pos[8].innerHTML === xIcon) {
		pos[6].style.backgroundColor = 'var(--cyan)';
		pos[6].children[0].style.color = '#1F3540';

		pos[7].style.backgroundColor = 'var(--cyan)';
		pos[7].children[0].style.color = '#1F3540';
		
		pos[8].style.backgroundColor = 'var(--cyan)';
		pos[8].children[0].style.color = '#1F3540';
		return true;
	}
	// Vertical
	if (pos[0].innerHTML === xIcon && pos[3].innerHTML === xIcon && pos[6].innerHTML === xIcon) {
		pos[0].style.backgroundColor = 'var(--cyan)';
		pos[0].children[0].style.color = '#1F3540';

		pos[3].style.backgroundColor = 'var(--cyan)';
		pos[3].children[0].style.color = '#1F3540';
		
		pos[6].style.backgroundColor = 'var(--cyan)';
		pos[6].children[0].style.color = '#1F3540';
		return true;
	} else if (pos[1].innerHTML === xIcon && pos[4].innerHTML === xIcon && pos[7].innerHTML === xIcon) {
		pos[1].style.backgroundColor = 'var(--cyan)';
		pos[1].children[0].style.color = '#1F3540';

		pos[4].style.backgroundColor = 'var(--cyan)';
		pos[4].children[0].style.color = '#1F3540';
		
		pos[7].style.backgroundColor = 'var(--cyan)';
		pos[7].children[0].style.color = '#1F3540';
		return true;
	} else if (pos[2].innerHTML === xIcon && pos[5].innerHTML === xIcon && pos[8].innerHTML === xIcon) {
		pos[2].style.backgroundColor = 'var(--cyan)';
		pos[2].children[0].style.color = '#1F3540';

		pos[5].style.backgroundColor = 'var(--cyan)';
		pos[5].children[0].style.color = '#1F3540';
		
		pos[8].style.backgroundColor = 'var(--cyan)';
		pos[8].children[0].style.color = '#1F3540';
		return true;
	}
	// Diagonal
	if (pos[0].innerHTML === xIcon && pos[4].innerHTML === xIcon && pos[8].innerHTML === xIcon) {
		pos[0].style.backgroundColor = 'var(--cyan)';
		pos[0].children[0].style.color = '#1F3540';

		pos[4].style.backgroundColor = 'var(--cyan)';
		pos[4].children[0].style.color = '#1F3540';
		
		pos[8].style.backgroundColor = 'var(--cyan)';
		pos[8].children[0].style.color = '#1F3540';
		return true;
	} else if (pos[2].innerHTML === xIcon && pos[4].innerHTML === xIcon && pos[6].innerHTML === xIcon) {
		pos[2].style.backgroundColor = 'var(--cyan)';
		pos[2].children[0].style.color = '#1F3540';

		pos[4].style.backgroundColor = 'var(--cyan)';
		pos[4].children[0].style.color = '#1F3540';
		
		pos[6].style.backgroundColor = 'var(--cyan)';
		pos[6].children[0].style.color = '#1F3540';
		return true;
	}
	// Caiu em nenhum dos if's acima
	return false;
}

function cpuMove() {
	if (!cpuCanMove) {
		return;
	}
	allOcuped = true;
	for (let i = 0; i < board.children.length; i++) {
		if (board.children[i].innerHTML === '') {
			allOcuped = false;
		}
	}
	if (allOcuped) {
		return;
	}

	let randomNum = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
	while (board.children[randomNum].innerHTML !== '') {
		randomNum = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
	}
	board.children[randomNum].innerHTML = oIcon;
	if (checkLose()) {
		losePopup.style.display = 'flex';
		overlay.style.display = 'block';
		loses++;
		losesH4.innerHTML = loses;
		return;
	}
	turn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 8 8"><path fill="currentColor" d="M1.41 0L0 1.41l.72.72L2.5 3.94L.72 5.72L0 6.41l1.41 1.44l.72-.72l1.81-1.81l1.78 1.81l.69.72l1.44-1.44l-.72-.69l-1.81-1.78l1.81-1.81l.72-.72L6.41 0l-.69.72L3.94 2.5L2.13.72z"/></svg> <span>TURN</span>';
	canMove = true;
}

function playerMove(position) {
	if (board.children[position].innerHTML === '' && canMove) {
		board.children[position].innerHTML = xIcon;
		turn.innerHTML = '<svg style="color: var(--dark-white);" class="o" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512"><path fill="currentColor" d="M224 96a160 160 0 1 0 0 320a160 160 0 1 0 0-320m224 160a224 224 0 1 1-448 0a224 224 0 1 1 448 0"></path></svg> <span>TURN</span>';
		setTimeout(cpuMove, 500);
		canMove = false;
		if (checkWin()) {
			winPopup.style.display = 'flex';
			overlay.style.display = 'block';
			wins++;
			winsH4.innerHTML = wins;
			cpuCanMove = false;
			return;
		}
		allOcuped = true;
		for (let i = 0; i < board.children.length; i++) {
			if (board.children[i].innerHTML === '') {
				allOcuped = false;
			}
		}
		if (allOcuped && !checkWin() && !checkLose()) {
			tiePopup.style.display = 'flex';
			overlay.style.display = 'block';
			ties++;
			tiesH4.innerHTML = ties;
		}
	}
}

function quitPopup() {
	winPopup.style.display = 'none';
	tiePopup.style.display = 'none';
	losePopup.style.display = 'none';
	overlay.style.display = 'none';
}

function nextRound() {
	resetBoard();
	winPopup.style.display = 'none';
	losePopup.style.display = 'none';
	tiePopup.style.display = 'none';
	overlay.style.display = 'none';
}
