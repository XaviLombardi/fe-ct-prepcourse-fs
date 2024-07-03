function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  const array = Array.from(arguments)
  if (array.length === 0){
    return 0;
  }else if (array.length === 1){
    return array[0]
  }
  else {
    let prod = 1
    for(let i = 0; i < array.length; i++){
      prod = (prod * array[i])
    }
    return prod
  }
}

module.exports = multiplicarArgumentos;


//if (arguments.length === 0) {
//  return 0;
//}
//else {
//  var resultado = arguments[0]
//  for (let i = 1; i < arguments.length; i++){
//    resultado *= arguments[i];
//  }
//  return resultado;
//}