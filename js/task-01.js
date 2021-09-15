// const listEl = document.querySelectorAll('.item');
// console.log(`В списке ${listEl.length} категории.`);
// listEl.forEach(element => {
//   console.log(`Категория: ${element.querySelector('h2').textContent}`);
//   console.log(`Количество элементов: ${element.querySelectorAll('li').length}`);

// });
const listEl = document.querySelector('#categories');
const categoryNameEl = document.querySelectorAll('.item');

console.dir(`В списке ${listEl.children.length} категории.`);

categoryNameEl.forEach(element => {
  console.log(`Категория: ${element.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${element.lastElementChild.children.length}`);
});