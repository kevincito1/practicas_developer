//Este ejercicio consiste en sumar todos los números pares en un rango de 2 números (sin incluir a los 2 números).
// function sumEvens(start, end) {
//     let result = 0;
//     for(i = start + 2; i < end; i++){
//         result++;
//     }
//     return result;
// }

// console.log(sumEvens(20,30));

function sumEvens(start, end) {
    let even = [];
    let sum = 0;
    for (let i = start ; i < end; i++) {
        if (i % 2 === 0 && i!==start) {
            even.push(i);
        }
    }
    console.log(even);

    for (let index = 0; index < even.length; index++) {
         sum = even[index] + sum;
    }
    return sum;
}

const result = sumEvens(20, 30);
console.log(result);