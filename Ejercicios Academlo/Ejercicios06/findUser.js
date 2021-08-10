//Este ejercicio consiste en encontrar y devolver el primer usuario en un arreglo que tenga el el valor que recibimos de una función. La función recibirá la clave que usaremos para la búsqueda y el valor que usaremos para buscar al usuario.

let users = [ 
    { name: 'Georg', 
    email: 'georg@academlo.com', 
    age: 22 
    }, 
    { name: 'Andrea', 
    email: 'andrea@gmail.com', 
    age: 30 } 
]

function findUser(users, key, value) {
    for (let index = 0; index < users.length; index++) {
        if(users[index][key] === value){
            return users[index];
        }
        
    }
}

//console.log(findUser(users, 'email', 'georg@academlo.com'));

const result = findUser(users,'email','georg@academlo.com');
console.log(result);
