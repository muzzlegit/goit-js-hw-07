const elements = {
  input: document.querySelector('#name-input'),
  label: document.querySelector('#name-output'),
};

elements.input.addEventListener('input', onInpuText);

function onInpuText(event) {
  event.currentTarget.value === '' ?
    elements.label.textContent = 'незнакомец' :
    elements.label.textContent = event.currentTarget.value;
}
