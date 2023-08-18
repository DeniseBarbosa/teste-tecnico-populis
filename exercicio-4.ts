function somaNumerosImpares(numeros: number[]): number {
  let soma = 0;
  
  for (const numero of numeros) {
    if (numero % 2 !== 0) {
      soma += numero;
    }
  }
  
  return soma;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const somaImpares = somaNumerosImpares(numeros);
console.log("Soma dos números ímpares:", somaImpares);
