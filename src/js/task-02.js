const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsListEl = document.querySelector('#ingredients');

const makeIngredientsList = ingredients => {
   return ingredients.map(ingredient => {
      const ingredientEl = document.createElement('li');
      ingredientEl.textContent = ingredient;
      return ingredientEl;
  })
}
const ingredientsList = makeIngredientsList(ingredients);

ingredientsListEl.append(...ingredientsList);
