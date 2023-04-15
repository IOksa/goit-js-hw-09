import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs={
  form: document.querySelector('form'),
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt){
  evt.preventDefault();

  const counter=refs.inputAmount.value;

    for(let pos=1; pos<=counter;pos+=1){
      let del=Number(refs.inputDelay.value)+Number((pos-1)*refs.inputStep.value);
      const promise = createPromise(pos, del);
      promise
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay} ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay} ms`);
      });
    }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({position, delay});
      }else{
      // Reject
        reject({position, delay});
      }
    }, delay);
  });
}


