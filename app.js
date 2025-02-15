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

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;

    if(nombreAmigo == ""){
        alert("Porfavor, escriba un nombre!!");
    }else{
        amigos.push(nombreAmigo);
        limpiarValor();
    }
}

function actualizarLista() {
    //1.- Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");
    //2.- Limpiar la lista existente para evitar duplicados
    lista.innerHTML = "";

    for(let i = 0; i < amigos.leghth; i ++){
        // 4. Crear un nuevo elemento <li> para cada amigo
        const li = document.createElement('li');
        li.textContent = amigos[i]; // Asigna el nombre del amigo
        li.appendChild(li);
    }
}

asignarTextoElemento("h1", "Amigo Secreto!");
asignarTextoElemento("h2", "Escribe el nombre de tus amigos :)");
actualizarLista();