const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);
inputEl.addEventListener('focus', onInputFocus);

function onInputBlur({ currentTarget }) {
  currentTarget.value.length === Number(currentTarget.dataset.length) ?
    currentTarget.classList.add('valid') :
    currentTarget.classList.add('invalid');
  } 
function onInputFocus(event) {
  event.currentTarget.classList.remove('valid', 'invalid');
}
 
  
