const main = document.querySelector('main');
const root = document.querySelector(':root');
const inputOut = document.getElementById('inputOut');
const inputIn = document.getElementById('inputIn');
const allowedKeys = [
  '(',
  ')',
  '/',
  '*',
  '-',
  '+',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
  '1',
  '0',
  '.',
  '%',
  '^',
  ' ',
];

function toggleMode() {
  const html = document.documentElement;
  const switchDark = document.getElementById('switchDark');
  const switchLight = document.getElementById('switchLight');

  if (html.classList.toggle('dark')) {
    switchDark.style.color = '#fff';
    switchLight.style.color = '#929292';
  } else {
    switchDark.style.color = '#929292';
    switchLight.style.color = '#2f343f';
  }
}

document
  .querySelectorAll(
    '.charKey, .charKeySpecial, .charKeySpecialSecondary, .charKeyMod'
  )
  .forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
      const value = charKeyBtn.dataset.value;
      inputOut.value += value;
    });
  });

document.getElementById('clear').addEventListener('click', function () {
  inputOut.value = '';
  inputIn.value = '';
});

document.getElementById('del').addEventListener('click', function () {
  if (inputOut.value[inputOut.value.length - 1] === ' ') {
    inputOut.value = inputOut.value.slice(0, -3);
    return;
  } else {
    inputOut.value = inputOut.value.slice(0, -1);
    return;
  }
});

document.getElementById('raiz').addEventListener('click', function () {
  inputOut.value += '( ';
});

document
  .querySelectorAll('.charKeySpecial, #equal')
  .forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
      inputIn.value += inputOut.value;
      inputOut.value = '';
    });
  });

inputOut.addEventListener('keydown', function (ev) {
  ev.preventDefault();
  const value = ev.key;

  if (allowedKeys.includes(ev.key)) {
    inputOut.value += ev.key;
    return;
  }

  if (ev.key === 'Backspace') {
    if (inputOut.value[inputOut.value.length - 1] === ' ') {
      inputOut.value = inputOut.value.slice(0, -3);
      return;
    } else {
      inputOut.value = inputOut.value.slice(0, -1);
      return;
    }
  }

  if (ev.key === 'Enter') {
    calculate();
  }

  if (value === '÷') {
    resultInput.value += '/';
  }

  if (value === '×') {
    resultInput.value += '*';
  }

  if (value === '√') {
    resultInput.value += 'Math.sqrt';
  }
});

document.getElementById('equal').addEventListener('click', calculate);

function calculate() {
  try {
    const result = eval(
      (inputIn.value + inputOut.value)
        .replace(/√/g, 'Math.sqrt')
        .replace(/÷/g, '/')
        .replace(/×/g, '*')
    );

    if (isNaN(result) || !isFinite(result)) {
      throw new Error('Erro na expressão');
    }

    inputOut.value = result;
    inputIn.value = '';
  } catch (error) {
    inputOut.value = '';
    inputIn.value = '';
  }
}
