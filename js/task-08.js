const createBtnEl = document.querySelector('#controls button[data-action="render"]');
const removeBtnEl = document.querySelector('#controls button[data-action="destroy"]');
const inputEl = document.querySelector('#controls input');
const containerEl = document.querySelector('#boxes');

let amount;
const elements = [];

function createBoxes(amount) {
  for (let i = 0; i < amount; i +=1) {  
    const divEl = document.createElement('div');
    divEl.style.width = `${30+10*i}px`;
    divEl.style.height =`${30+10*i}px`;
    divEl.style.backgroundColor = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)} )`;
    elements.push(divEl);
  }
  containerEl.append(...elements);
}
function destroyBoxes() {
  containerEl.innerHTML = '';
 }

inputEl.addEventListener('input', onChangeInput);
createBtnEl.addEventListener('click', onCreateBtnClick);
removeBtnEl.addEventListener('click', onRemoveBtnClick);

function onChangeInput(event) {
  amount = event.currentTarget.value;
}
function onCreateBtnClick() {
 createBoxes(amount);
}
function onRemoveBtnClick() {
 destroyBoxes();
}