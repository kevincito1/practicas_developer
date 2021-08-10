//Este ejercicio consiste en encontrar la edad que más se repite en un arreglo de estudiantes.
let students = [ 
    { name: 'Georg',
     age: 23, 
}, 
    { name: 'Andrea', 
    age: 23, 
}, 
    { name: 'Daniela', 
    age: 25, 
}, 
    { name: 'José', 
    age: 27, 
},
{ name: 'José', 
age: 27,
},
{ name: 'José', 
age: 27,
},


];

function findRepeatedAge(students) {
    let number = 0;
    for(i = 0; i < students.length; i++){
        for(j = i + 1; j < students.length; j++){
            if(students[i].age === students[j].age){
                number = students[j].age;
            }
        }
    }
    return number;
}
console.log(findRepeatedAge(students));
