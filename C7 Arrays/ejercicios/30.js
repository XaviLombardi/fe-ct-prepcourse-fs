function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  numeros.sort()
  let repetidos = []; 
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i + 1] === numeros[i]) {
      repetidos.push(numeros[i]);
    }
  }
  return repetidos[0]
}
module.exports = encontrarElementoRepetido;