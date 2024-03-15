import toggleMode from './toggleMode.js';
import { clear, del, equal, raiz } from './specialKeys.js';
import calculate from './calculate.js';
import { clickInKeys } from './keyboard.js';

toggleMode();
clear();
del();
equal();
raiz();
clickInKeys();

document.getElementById('equal').addEventListener('click', calculate);
