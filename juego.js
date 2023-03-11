import arrayPlabras from "./agregarPalabra.js";

// Prevengo que la pagina se recarge y se borren los datos que se ingresan
document.addEventListener('click', (e) => {
  const enlace = e.target.closest('a');
  if (enlace) {
    e.preventDefault();
    window.location.href = enlace.getAttribute('href');
  }
});

/** juego.html */

let palabraSeleccionada = '';

if (arrayPlabras.length > 0) {
  palabraSeleccionada = arrayPlabras[Math.floor(Math.random() * arrayPlabras.length)];
}
console.log(palabraSeleccionada);

// constante que guarda '_ giones bajos' que representan cada letra de la palabra
const palabraEscondida = document.getElementById('adivinaPalabra');
if (palabraSeleccionada) {
  const palabraAdivinar = '_'.repeat(palabraSeleccionada.length);
  palabraEscondida.textContent = palabraAdivinar;
}

const btncomprobar = document.getElementById('comprobar');
const letraInput = document.getElementById('letra');

let vidasPerdidas = 0;

btncomprobar.addEventListener('click', (e) => {
  e.preventDefault();
  let hafallo = true;
  const letra = letraInput.value.trim().toUpperCase();

  let validado = /^[a-zA-ZñÑ]+$/.test(letra);
  if (!validado) { alert('ingrese una letra valida'); }

  const indice = obtenerIndice(palabraSeleccionada, letra);

  if (indice.length > 0) {
    mostrarLetraEnPalabra(letra, indice);
    hafallo = false;
  } else {
    dibujarAhorcado();
  }

  if (palabraEscondida.textContent === palabraSeleccionada) {
    alert('¡Felicidades, has adivinado la palabra!');
  }

  letraInput.value = '';
});


const obtenerIndice = function (palabraSeleccionada, letra) {
  return [...palabraSeleccionada].reduce((acc, l, i) => l === letra ? [...acc, i] : acc, []);
}

const mostrarLetraEnPalabra = function (letra, indice) {
  const palabraAdivinarArr = [...palabraEscondida.textContent];
  indice.forEach(item => palabraAdivinarArr[item] = letra);
  palabraEscondida.textContent = palabraAdivinarArr.join('');
}

const dibujarAhorcado = function () {
  vidasPerdidas++;
  document.getElementById('colgado').style.backgroundPosition = -(185 * vidasPerdidas) + 'px 50%'
  if (vidasPerdidas == 6) {
    document.querySelector('.seccion_dibujo').style.display = 'none';
    document.querySelector('.seccion_letra').style.display = 'none';
    document.querySelector('.activar').style.display = 'block';
  }
}

/** Fin juego.html */