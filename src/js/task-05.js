// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const refs = {
  nameIn: document.querySelector('#name-input'),
  nameOut: document.querySelector('#name-output'),
};

refs.nameIn.addEventListener('input', onInputChange);

function onInputChange(event) {
  // console.log(event.currentTarget.value);
  refs.nameOut.textContent = event.currentTarget.value;

  if (event.currentTarget.value === '') {
    refs.nameOut.textContent = 'Anonymous';
  }
}
