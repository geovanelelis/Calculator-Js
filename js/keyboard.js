import calculate from './calculate.js';

export const clickInKeys = () =>
  inputOut.addEventListener('keydown', function (ev) {
    ev.preventDefault();
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
  });
