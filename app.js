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

    for(let i = 0; i < amigos.leghth; i ++){
        // 4. Crear un nuevo elemento <li> para cada amigo
        const li = document.createElement("li");
        li.textContent = amigos[i]; // Asigna el nombre del amigo
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
    let numeroGenerado = Math.ceil(Math.random()*amigos.length);

    console.log(amigos[numeroGenerado]);
    if (amigos == ""){
        asignarTextoElemento("h2","No hay amigos para sortear :c");
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es ${amigos[numeroGenerado]}`;
}

asignarTextoElemento("h1", "Amigo Secreto!");
asignarTextoElemento("h2", "Escribe el nombre de tus amigos :)");