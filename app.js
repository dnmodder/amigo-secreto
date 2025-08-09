// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let resultado;

function agregarAmigo() {
    let amigo = document.getElementById("amigo")
    listaAmigos = document.getElementById("listaAmigos");
    if (amigo === "") {
        alert("Por favor, ingresa un nombre válido.");
    } else {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(amigo.value));
        listaAmigos.appendChild(li);
        amigos.push(amigo.value);
    }
    amigo.value = ""; // Limpiar el campo de entrada
    amigo.focus();
    return;
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    resultado = amigos[indice];
    mostrarResultado();
    limpiarListaAmigos();
}

function mostrarResultado() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "El amigo secreto es: " + resultado;
}

function limpiarListaAmigos() {
    amigos = [];
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
}