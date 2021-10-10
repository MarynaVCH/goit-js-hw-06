const categoriesEl = document.querySelector('#categories');
// console.log(categoriesEl);

const itemEl = categoriesEl.querySelectorAll('li.item');
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent},
Elements: ${el.lastElementChild.children.length}`);
});
