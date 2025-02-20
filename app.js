// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);  
    elementoHTML.innerHTML = texto;
    return;  
}

function actualizarLista() {
    //1.- Obtener el elemento de la lista
    let listaAmigos = document.getElementById("listaAmigos");
    //2.- Limpiar la lista existente para evitar duplicados
    listaAmigos.innerHTML = "";
    //3.- Recorrer el arreglo de amigos
    
    for(let i = 0; i < amigos.length; i++){
        //4.- Crear un nuevo elemento <li> para cada amigo
        const li = document.createElement("li");
        li.textContent = amigos[i]; //Asigna el nombre del amigo
        listaAmigos.appendChild(li);
    }
}

function limpiarValor(){
    document.querySelector("#amigo").value = "";
    return;
}

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    if(nombreAmigo == ""){
        alert("Porfavor, escriba un nombre!!");
        return;
    }
    
    if(amigos.includes(nombreAmigo)){
        alert(`${nombreAmigo} ya esta en la lista de amigos`)
        return;
    }

    amigos.push(nombreAmigo);
    limpiarValor();
    actualizarLista();
}

function sortearAmigo() {
    let numeroGenerado = Math.floor(Math.random()*amigos.length);

    
    if (amigos == ""){
        alert("Porfavor, ingrese un nombre antes de sortear");
        return
    }

    let resultado = document.getElementById("resultado");
    listaAmigos.innerHTML = "";
    resultado.innerHTML = `El amigo sorteado es ${amigos[numeroGenerado]}`;
    amigos = [];
}

asignarTextoElemento("h1", "Amigo Secreto!");
asignarTextoElemento("h2", "Escribe el nombre de tus amigos :)");