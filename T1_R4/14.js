function divisible(dividendo, divisor) {
  if (divisor === 0) {
    return "Error: no se puede dividir entre cero";
  }
  return dividendo % divisor === 0;
}