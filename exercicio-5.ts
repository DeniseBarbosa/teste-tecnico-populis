function analisarNumeros(numeros: number[]): Record<string, number> {
  if (numeros.length === 0) {
    throw new Error("O array está vazio.");
  }

  const soma = numeros.reduce((acc, num) => acc + num, 0);
  const media = soma / numeros.length;
  const maximo = Math.max(...numeros);
  const minimo = Math.min(...numeros);

  const resultado = {
    soma,
    media,
    maximo,
    minimo
  };

  return resultado;
  
}

const numeros = [10, 5, 8, 12, 3, 7];
const informacoes = analisarNumeros(numeros);
console.log(informacoes);
