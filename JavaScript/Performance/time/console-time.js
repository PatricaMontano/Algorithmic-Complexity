function contar(n) {
    for (var i = 0; i < n; i++){
        console.log(i);
    }
}
console.time("duracion-algoritmo-contar");
contar(5);
console.timeEnd("duracion-algoritmo-contar");