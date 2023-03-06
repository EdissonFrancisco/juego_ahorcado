import {arrayPlabras} from "./agregarPalabra.js";

const palabraSeleccionada = arrayPlabras[Math.floor(Math.random() * arrayPlabras.length)];

const lineasPalabra = () => {
  const palabra = document.getElementById("adivinaPalabra");

  for (let i = 0; i < palabraSeleccionada.length; i++) {
    const letraSpan = document.createElement("span");
    palabra.appendChild(letraSpan);
    const texto = document.createTextNode("_ ");
    letraSpan.appendChild(texto);
  }
}

lineasPalabra();

const vidas = 4;




