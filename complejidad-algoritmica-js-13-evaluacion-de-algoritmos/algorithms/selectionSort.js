/**
 * Complejidad Temporal -> O(n^2)
 * Complejidad Espacial -> O(n)
 * Espacio Auxiliar -> O(1)
 */
function selectionSort(arreglo) { // O(n)
  let longitud = arreglo.length;   // O(1)

  for (let i = 0; i < longitud; i++) {  // O(n)     || CE= O(1)
    let minimo = i;                     // O(1)
    for (let j = i + 1; j < longitud; j++) {  // O(n)  || CE= O(1)
      if (arreglo[j] < arreglo[minimo]) {     // O(n)
        minimo = j;   // O(1)
      }
    }
    if (minimo != i) {  // O(1)
      let temporal = arreglo[i];  // O(1)
      arreglo[i] = arreglo[minimo]; // O(1)
      arreglo[minimo] = temporal;   // O(1)
    }
  }
  return arreglo; // O(1)
}
