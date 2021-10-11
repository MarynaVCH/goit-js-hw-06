const delValue = document.querySelector('button[data-action="decrement"]');
const addValue = document.querySelector('button[data-action="increment"]');
const countValue = document.querySelector('#value');

let counterValue = 0;

delValue.addEventListener('click', () => {
  counterValue -= 1;
  countValue.textContent = counterValue;
});

addValue.addEventListener('click', () => {
  counterValue += 1;
  countValue.textContent = counterValue;
});
