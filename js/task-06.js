const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur({ currentTarget }) {
  if (currentTarget.value.length == currentTarget.dataset.length) {
    if (currentTarget.classList.contains('invalid')) {
      currentTarget.classList.replace('invalid', 'valid');
    } else currentTarget.classList.add('valid');
  } else if (currentTarget.classList.contains('valid')) {
            currentTarget.classList.replace('valid', 'invalid');
          } else currentTarget.classList.add('invalid');
}
