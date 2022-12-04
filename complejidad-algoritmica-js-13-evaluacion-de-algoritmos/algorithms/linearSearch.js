/**
 * Complejidad Temporal -> O(n)
 * Complejidad Espacial -> O(n)
 * Espacio Auxiliar -> Complejidad Espacial - Espacio de Entrada = O(n) - O(1) = O(1)
 */
function linearSearch(arreglo, clave) { // O(n)
  for (let indice = 0; indice < arreglo.length; indice++) { // O(n)  || CE=O(1)
    if (arreglo[indice] === clave) { // O(1)
      return indice; // O(1)
    }
  }
  return -1; // O(1)
}
