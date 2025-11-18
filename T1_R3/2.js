function supplyCalculator(currentAge, maxAge, numDay) {
    let totalSupply = ((maxAge - currentAge) * 365) * numDay;
    let resultado = `You will need ${totalSupply} days to last you until the ripe old age of ${maxAge - currentAge}`;

    return resultado;
}