const inputOut = document.getElementById('inputOut');
const inputIn = document.getElementById('inputIn');

document
  .querySelectorAll('.charKey, .charKeySpecial, .charKeyMod')
  .forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
      const value = charKeyBtn.dataset.value;
      inputOut.value += value;
    });
  });

const clear = () =>
  document.getElementById('clear').addEventListener('click', function () {
    inputOut.value = '';
    inputIn.value = '';
  });

const del = () =>
  document.getElementById('del').addEventListener('click', function () {
    if (inputOut.value[inputOut.value.length - 1] === ' ') {
      inputOut.value = inputOut.value.slice(0, -3);
      return;
    } else {
      inputOut.value = inputOut.value.slice(0, -1);
      return;
    }
  });

const raiz = () =>
  document.getElementById('raiz').addEventListener('click', function () {
    inputOut.value += '( ';
  });

const equal = () =>
  document
    .querySelectorAll('.charKeySpecial, #equal')
    .forEach(function (charKeyBtn) {
      charKeyBtn.addEventListener('click', function () {
        inputIn.value += inputOut.value;
        inputOut.value = '';
      });
    });

export { clear, del, raiz, equal };
