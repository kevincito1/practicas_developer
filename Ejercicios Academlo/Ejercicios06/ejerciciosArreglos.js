//Crea un arreglo con los números del 1 al 400
//const numbers = [];
//for (let index = 1; index <= 400; index++) {
  //  numbers.push(index);
//}
//console.log(numbers);    

//Crea una función que reciba como parámetros 2 números, y retorne un arreglo con todos los valores en el rango de esos 2 números (incluyéndolos), por ejemplo, si recibe 1 y 4 la función debe de retornar el arreglo [1, 2, 3, 4], asumiremos que el segundo parámetro recibido es mayor al primero.

//function range (Number1, Number2) {
  //  let range = [];
    //for (let index = Number1; index <= Number2; index++) {
    //    range.push(index);        
    //}
    //console.log(range);
//}

//range(3, 25);

//Crea una función que lea un array de N cantidad de números y retorne la suma de todos esos número.

//function sumElements (array) {
  //  let suma = 0;
  // for (let index = 0; index < array.length; index++) {
   //     suma += array[index];
   // }
   // console.log(suma);
//}
//sumElements(numbers);

//Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento que se encuentra en la mitad
// En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]

function middle (array) {
    const midNumber = [];
    if (array.length % 2 === 1) {
        let mid = array.splice(array.length / 2 -0.5, 1)
        midNumber.push(mid);
        console.log(midNumber);
    }else {
        let mid = array.splice(array.length / 2 -1, 2)
        midNumber.push(mid);
    }
    return midNumber;
}

console.log(middle ([1,2,3,4]));