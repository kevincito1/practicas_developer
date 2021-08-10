//let user = [{
  //  name: 'Kevin Rodas',
  //  email: 'kevin.rodas.cuartas@gmail.com',
  //  gender: 'Male'
//}]

//function getEmail (user){
  //  return user[0].email;
//}

//console.log(getEmail(user));

let users = [ 
    { name: 'Erik',
      email: 'erik@academlo.com',
      gender: 'Male' 
    }, 
    { name: 'Georg', 
      email: 'georg@academlo.com', 
      gender: 'Male' 
    } 
]

function getEmails(users) {
    let newArray = [];
    for (let index = 0; index < users.length; index++) {
          newArray.push(users[index].email);               
    }
    return newArray;
 }

console.log(getEmails(users));