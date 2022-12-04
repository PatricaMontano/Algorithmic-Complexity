const performance = require('perf_hooks');

function contar(n) {
    for (var i = 0; i < n; i++){
        console.log(i);
    }
}
let start = performance.performance.now();
contar(5);
let end = performance.performance.now();

let duration = end - start;

console.log(`El algoritmo contar ha durado ${duration}ms`);