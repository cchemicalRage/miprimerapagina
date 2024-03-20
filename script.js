//alert("Hola este es mi Javascript");
let nombre = "Marta";
nombre = "Maria" ;
var nombre1 = "Marta"
const nombre2 = "Marta";
console.log(nombre);
console.log(nombre1);
console.log(nombre2);
let contenidoTitulo = "Nombre";
let titulo =document.querySelector(".titulo")
titulo.innerHTML = contenidoTitulo;
//Condicionales
let textoTitulo = titulo.innerText;
console.log(textoTitulo);
if(textoTitulo == "Nombre"){
    titulo.innerHTML = "presentacion";
} else {
console.log ("no se cumple");
}

let segundonombre = "Marcos"
let ciudad = "Lima-San Juan De Miraflores"
let gusto = "fútbol"

let parrafo = document.querySelector(".parrafo1");

function cambiartexto(segundonombre,ciudad,gusto){
    let contenido = `¡Bienvenido a mi página! Aquí, aprenderás más sobre mí.
    Me llamo ${segundonombre}, nací en Lima y vivo en ${ciudad}. Me gusta el ${gusto} y salir a pasear en días de sol.
    Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen`;

    return contenido;
}
parrafo.innerHTML = cambiartexto(segundonombre,ciudad,gusto);