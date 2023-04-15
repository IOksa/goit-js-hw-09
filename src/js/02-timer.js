// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs={
    butStart: document.querySelector('button[data-start]'),
    spanDays: document.querySelector('span[data-days]'),
    spanHours: document.querySelector('span[data-hours]'),
    spanMinutes: document.querySelector('span[data-minutes]'),
    spanSeconds: document.querySelector('span[data-seconds]'),
    input: document.querySelector('#datetime-picker'),
};

let selectedTime=null;
let intervalId = null;
const DELAY=1000;

refs.butStart.disabled=true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {              
        const currentTime = Date.now();

        if((selectedDates[0]-currentTime)>0){
            refs.butStart.disabled=false;
            selectedTime=selectedDates[0];
            }
            else{
                Notify.failure('Please choose a date in the future');
            
            }

    },
};

flatpickr("#datetime-picker", options);

refs.butStart.addEventListener('click', onClickBtnStart);

function onClickBtnStart(){
    refs.butStart.disabled=true;
    refs.input.disabled=true;
    

    intervalId=setInterval(() => {   
        const currentTime = Date.now();
        const convertData=convertMs(selectedTime-currentTime);

        drawTimer(convertData);

        if((convertData.days===0 && convertData.hours===0 && convertData.minutes===0 && convertData.seconds===0)){
            clearInterval(intervalId);
            refs.input.disabled=false;
       
           
        }
    }, DELAY);
   
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}

function drawTimer({days, hours, minutes, seconds}){
    refs.spanDays.textContent=addLeadingZero(days);
    refs.spanHours.textContent=addLeadingZero(hours);
    refs.spanMinutes.textContent=addLeadingZero(minutes);
    refs.spanSeconds.textContent=addLeadingZero(seconds);
}

function addLeadingZero(value){
    return String(value).padStart(2, '0');
}
  