import toggleMode from './toggleMode.js';
import { clear, del, equal, raiz } from './specialKeys.js';
import calculate from './calculate.js';
import { clickInKeys } from './keyboard.js';

clear();
del();
equal();
raiz();
clickInKeys();

document
  .querySelectorAll('#switchLight, #switchDark')
  .forEach(function (element) {
    element.addEventListener('click', toggleMode);
  });
document.getElementById('equal').addEventListener('click', calculate);
