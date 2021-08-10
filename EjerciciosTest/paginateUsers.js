// Este ejercicio consiste en devolver los elementos de un arreglo en bloques de 2, cada bloque representa una página, por ejemplo: los primeros 2 elementos son la primer página, los siguientes 2 elementos son la segunda página, etc.

let users = [ 
    { name: 'Daniela',
     email: 'daniela@academlo.com',
}, 
    { name: 'Juan', 
    email: 'juan@academlo.com', 
}, 
    { name: 'Luis', 
    email: 'luis@academlo.com', 
}, 
    { name: 'Pedro', 
    email: 'pedro@academlo.com', 
} 
];
page=2

function paginateUsers(users, page) {
        const correctPage = page*2-2;
        return [users[correctPage],users[correctPage+1]]; 
    }
    console.log(paginateUsers(users, page));