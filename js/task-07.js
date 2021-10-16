// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const refs = {
  size: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

refs.size.addEventListener('input', event => {
  const size = refs.size.value;
  console.log(size);

  refs.span.style.fontSize = refs.size.value + 'px';
});
