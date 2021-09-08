const decrementButEl = document.querySelector('#counter button[data-action="decrement"]');
const incrementButEl = document.querySelector('#counter button[data-action="increment"]');
const counterValueEl = document.querySelector('#value');
 
let counterValue = 0;

function increment() {
  counterValueEl.textContent = ++counterValue;
}
function decrement() {
  counterValueEl.textContent = --counterValue;
}

incrementButEl.addEventListener('click', increment);
decrementButEl.addEventListener('click', decrement);