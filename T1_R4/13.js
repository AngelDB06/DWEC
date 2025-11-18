function factorialIterativo(n) {
  if (n < 0) {
    return "No existe el factorial de números negativos";
  }
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}