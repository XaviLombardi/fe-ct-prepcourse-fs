function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  let P1 = str1;
  let P2 = str2;
  let P3 = str3;
  let PFINAL = "";

  for(let i = 0; i < Math.max(P1.length, P2.length, P3.length); i++) {
    if(i < P1.length){
      PFINAL += P1[i];
    }
    if(i < P2.length){
      PFINAL += P2[i];
    }
    if(i < P3.length){
      PFINAL += P3[i];
    }
  }
  return PFINAL;
}

module.exports = combine;