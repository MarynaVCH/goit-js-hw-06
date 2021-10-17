const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const itemEl = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const vegetables = document.createElement('li');
  vegetables.classList.add('item');
  vegetables.textContent = `${element}`;
  return vegetables;
});

itemEl.prepend(...elements);

// ingredients.forEach(ingredient => {
//   const vegetables = document.createElement('li');
//   vegetables.classList.add('item');
//   vegetables.textContent = ingredient;

//   itemEl.append(vegetables);
// });

// console.log(itemEl);
