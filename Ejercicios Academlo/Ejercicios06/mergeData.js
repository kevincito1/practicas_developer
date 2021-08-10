//Este ejercicio consiste en mezclar la información de 2 arreglos usando como identificador el correo.

let users = [ 
    { name: 'Georg', 
    email: 'georg@academlo.com', 
}, 
    { name: 'Andrea', 
    email: 'andrea@gmail.com', 
} 
]

let attendance = [ 
    { email: 'georg@academlo.com',
     attendance: true 
}, 
    { email: 'andrea@gmail.com', 
    attendance: false 
} 
]


function mergeData(users, attendance) {
    let newArray = [];
    let newArray2 = [];
    for(i = 0; i < users.length; i++){
        for(j = 0; j < attendance.length; j++){
            if(users[i].email === attendance[j].email){
                delete users[i].email;
                newArray.push(users[i]);
                newArray2.push(attendance[j]);
                Object.assign(newArray[i], newArray2[j]);
            }           
        }        
    }
    return newArray;
}
console.log(mergeData(users, attendance));
