function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  promedio = 0
  for (let i = 0; i < resultadosTest.length; i++){
    promedio += resultadosTest[i];
  } 
  promedio = promedio / resultadosTest.length;
  return promedio;
}

module.exports = promedioResultadosTest;
