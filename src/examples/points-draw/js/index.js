const startBtn = document.querySelector('.handler-container-btn');
const prizeList = document.querySelectorAll('.prize-list');
const dialogContainer = document.querySelector('.dialog-container');
const prizeContent = document.querySelector('.dialog-container .content');

const closeBtn = document.querySelector('.close');
const confirmBtn = document.querySelector('.dialog-main-footer .button');
const prizeNumber = document.querySelector('.prize-number');

let index = -1;
let timer = null;
let number = 5;
let currentIndex = null;

function init() {
  prizeNumber.innerHTML = number;
  startBtn.addEventListener('click', onStartBtnClick);
  closeBtn.addEventListener('click', onCloseBtnClick);
  confirmBtn.addEventListener('click', onConfirmBtnClick);
}

const openDialog = () => {
  prizeNumber.innerHTML = --number;
  if (number === 0) {
    document.querySelector('.dialog-main-footer .button').innerHTML = '确定';
  }
  dialogContainer.style.display = 'block';
  if (currentIndex === 4) {
    prizeContent.innerHTML = '很遗憾您没有中奖';
  } else {
    prizeContent.innerHTML = '恭喜您获得' + document.querySelector('.active span').innerHTML;
  }
};

const runGame = () => {
  var random = Math.floor(Math.random() * 6000 + 3000);
  timer = setInterval(function () {
    random -= 200;
    if (random < 200) {
      clearInterval(timer);
      timer = null;
      openDialog();
      return;
    }
    currentIndex = ++index % prizeList.length;
    prizeList.forEach(function (node) {
      node.classList.remove('active');
    });
    prizeList[currentIndex].classList.add('active');
  }, 50);
};

const onStartBtnClick = () => {
  if (timer) return;
  index = -1;
  if (number === 0) return;
  runGame();
};

const onCloseBtnClick = () => {
  dialogContainer.style.display = 'none';
};

const onConfirmBtnClick = () => {
  index = -1;
  dialogContainer.style.display = 'none';
  if (number === 0 || timer) return;
  runGame();
};

init();
