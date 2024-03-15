export default function calculate() {
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
