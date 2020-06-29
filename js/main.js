'use strict'
const container = document.querySelector("#loop");
const otro = document.querySelector("#otro");
let options = {
    'x':container.clientWidth/2 - 150,
    'y':container.clientHeight/2
}

let opciones2 = {
    'x':container.clientWidth/2 - 150,
    'y':(container.clientHeight/2)+40
}

console.log("width: "+container.clientWidth/2+" height: "+container.clientHeight/2)

let text = new Text(0,container.clientHeight/2,"Innovacion y diseño",options)
let text2 = new Text(container.clientWidth/2-150,container.clientHeight,"Desarrollo de apps", opciones2)
let text3 = new Text(container.clientWidth/2-150,container.clientHeight,"Vanguardia en tecnologias",opciones2)
let cont = new Container(0,0);
cont.appendChild(text);
cont.appendChild(text2);
let loop = new Loop(3000,container,[cont,text3]);
