//Este ejercicio consiste en obtener el total de estudiantes que pertenecen a un país, para lo cuál recibiremos 2 arreglos, uno de estudiantes (donde cada estudiante tendrá el id del país al que pertenece) y uno de países.

students = [ 
    { name: 'Georg', 
    email: 'georg@academlo.com', 
    country_id: 1, 
}, 
    { name: 'Andrea', 
    email: 'andrea@gmail.com', 
    country_id: 2, 
}, 
    { name: 'Daniela', 
    email: 'daniela@gmail.com', 
    country_id: 2, 
} 
];
countries = [ 
    { id: 1, name: 'Mexico', 
}, 
    { id: 2, name: 'Colombia', 
} 
];
countryName = 'Colombia'

function countStudents(students, countries, countryName) {
    let nationality = 0;
    let id = 0;
    for(let i = 0; i < countries.length; i++){
        if(countries[i].name == countryName){
            id = countries[i].id;
        }
    }
    for(let j = 0; j < students.length; j++){
        if(students[j].country_id == id){
            nationality++;
        }
    }

    return nationality
}

console.log(countStudents(students, countries, countryName));