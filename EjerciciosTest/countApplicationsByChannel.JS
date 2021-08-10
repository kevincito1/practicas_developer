// Todas las personas que crean una cuenta en Academlo vienen de algún canal, por ejemplo, algunos vienen de youtube, otros de facebook, otros más de twitter, etc.

// Este ejercicio consiste en contar cuantos usuarios han enviado su aplicación y desde que canal vienen, así que tenemos que tomar en cuenta 2 factores.

// El canal del que vienen
// Que hayan enviado su aplicación

let users = [
  {
    name: "Andrea",
    email: "andrea@gmail.com",
    channel: "youtube",
    application: null,
  },
  {
    name: "Daniela",
    email: "daniela@gmail.com",
    channel: "youtube",
    application: { country: "Colombia", state: "Bogotá" },
  },
  {
    name: "Alondra",
    email: "alondra@gmail.com",
    channel: "twitter",
    application: { country: "Colombia", state: "Bogotá" },
  },
  {
    name: "Luis",
    email: "luisa@gmail.com",
    channel: "twitter",
    application: { country: "México", state: "Nuevo León" },
  },
];

function countApplicationsByChannel(users) {
    let newArray = [];
    let channels = {};
    for(let i = 0; i < users.length; i++){
        if(users[i].application !== null){
            newArray.push(users[i]);
            if(channels[users[i].channel]){
                channels[users[i].channel]=channels[users[i].channel]+1;
            }else{
                channels[users[i].channel] = 1;
            }
        }
    }
    return channels;
}

console.log(countApplicationsByChannel(users));