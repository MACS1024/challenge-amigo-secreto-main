// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);  
    elementoHTML.innerHTML = texto;
    return;  
}

function limpiarValor(){
    document.querySelector("#amigo").value = "";
}

asignarTextoElemento("h1", "Amigo Secreto!");
asignarTextoElemento("h2", "Escribe el nombre de tus amigos :)");

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;

    if(nombreAmigo == ""){
        alert("Porfavor, escriba un nombre!!");
    }else{
        amigos.push(nombreAmigo);
        limpiarValor();
        console.log(amigos);
    }
}
