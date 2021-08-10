// Este ejercicio consiste en ordenar por 'score' de menor a mayor un arreglo de usuarios.

let users = [
  { name: "Georg", email: "georg@academlo.com", score: 100 },
  { name: "Andrea", email: "andrea@gmail.com", score: 70 },
  { name: "Andrés", email: "andres@gmail.com", score: 34 },
];

function orderUsersByScore(users) {
  let newArray = [];
  for (let i = 0; i < users.length; i++) {
    newArray.push(users[i]);
    newArray.sort(function (a, b) {
      if (a.score < b.score) {
        return -1;
      }
    });
  }
  return newArray;
}

console.log(orderUsersByScore(users));
