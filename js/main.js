'use strict'
const container = document.querySelector("#loop");
const otro = document.querySelector("#otro");

let text = new Text(
    {
        left: container.clientWidth/2,
        top: container.clientHeight,
        content:"Desarrollo de apps",
        animated:{
            opacity: 1,
            top: container.clientHeight/2-100,
            left: container.clientWidth/2
        },
        styles:{
            fontFamily: "Roboto",
            fontSize: "25px",
            fontWeight: "normal",
        }
    }
);

let text2 = new Text(
    {
        left: container.clientWidth/2 - 100,
        top: container.clientHeight,
        content: "Osmiun",
        animated:{
            opacity: 1,
            left: container.clientWidth/2 - 100,
            top: container.clientHeight/2,
        },
        styles:{
            fontFamily: "Montserrat",
            fontSize: "70px",
            fontWeight: "bold",
        }
    }
);

let img = new Img(
    {
        left: 0,
        top: container.clientHeight,
        src: "../img/fondoanimacion.png",
        animated:{
            top: container.clientHeight/2-150,
            left: 0,
            opacity: 0.9,
        },
        styles:{
            fontFamily: "Roboto",
            fontSize: "40px",
            transition: "2s",
        } 
    }
)

let cont = new Container(
    {
        left:0,
        top:0,
        elements: [img, text],
        animated:{
            opacity: 1,
            top: 150,
            left: 0
        },
        styles:{
            fontFamily: "Roboto",
            fontSize: "40px",
            fontWeight: "bold",
        }
    }
);

let loop = new Loop(3000,container,[cont,text2]);
