const rangeEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
 
rangeEl.addEventListener('input', onRangeValue);

function onRangeValue(event) {
  spanEl.style.fontSize = event.currentTarget.valueAsNumber + 'px';
}

