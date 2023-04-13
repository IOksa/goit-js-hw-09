const refs={
    buttonStart: document.querySelector('button[data-start]'),
    buttonStop: document.querySelector('button[data-stop]'),
    bodyEl: document.querySelector('body'),
};

let intervalId = null;
const DELAY=1000;

refs.buttonStop.classList.add('disabled');
refs.buttonStart.addEventListener('click', onClickBtnStart);
refs.buttonStop.addEventListener('click', onClickBtnStop);


function onClickBtnStart(){
    refs.buttonStart.classList.add('disabled');
    refs.buttonStop.classList.remove('disabled');
    intervalId=setInterval(() => {
        refs.bodyEl.style.backgroundColor=getRandomHexColor();  
    }, DELAY);
   
}

function onClickBtnStop(){
    refs.buttonStart.classList.remove('disabled');
    refs.buttonStop.classList.add('disabled');
    clearInterval(intervalId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }