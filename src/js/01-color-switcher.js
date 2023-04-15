const refs={
    buttonStart: document.querySelector('button[data-start]'),
    buttonStop: document.querySelector('button[data-stop]'),
    bodyEl: document.querySelector('body'),
};

let intervalId = null;
const DELAY=1000;


refs.buttonStop.disabled=true;
refs.buttonStart.addEventListener('click', onClickBtnStart);
refs.buttonStop.addEventListener('click', onClickBtnStop);


function onClickBtnStart(){
    refs.buttonStart.disabled=true;
    refs.buttonStop.disabled=false;
    intervalId=setInterval(() => {
        refs.bodyEl.style.backgroundColor=getRandomHexColor();  
    }, DELAY);
   
}

function onClickBtnStop(){
    refs.buttonStart.disabled = false;
    refs.buttonStop.disabled = true;
    clearInterval(intervalId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }