const users = [ 
    { 
    name: 'Kevin', 
    email: 'kevin@gmail.com', 
    age: 31 
    }, 
    { 
    name: 'Camila', 
    email: 'camila@gmail.com', 
    age: 25 
    }, 
    { 
    name: 'Jorge', 
    email: 'jorge@gmail.com', 
    age: 30 
    } 
];

function deleteUser (users, email) {
    for (let i = 0; i < users.length; i++) {
        if ( users[i].email === email){
            users.splice(i, 1); 
        }   
    }
    return users; 
}

console.log(deleteUser(users, 'jorge@gmail.com' ));