// Prevengo que la pagina se recarge y se borren los datos que se ingresan 
document.addEventListener('click', (e) => {
  const enlace = e.target.closest('a');
  if (enlace) {
    e.preventDefault();
    window.location.href = enlace.getAttribute('href');
  }
});

const arrayPlabras = JSON.parse(sessionStorage.getItem('palabras')) || [];

/** palabra.html */
//declaracion de las funciones que se implementan abajo 
const btnAgregar = document.getElementById("agregar");
const btnCancelar = document.getElementById("palabraCancelada");

// el elemento se asigna a una constante y se declara fuera de la funcion btnagregar 
const palabraImput = document.getElementById("palabra");

if (btnAgregar !== null) {
  btnAgregar.addEventListener('click', (e) => {
    e.preventDefault();
    const nuevaPalabra = palabraImput.value.trim();//quito espacios de la cadena 
    if (!nuevaPalabra) { alert("El campo está vacío"); return; }
    arrayPlabras.push(nuevaPalabra);
    sessionStorage.setItem('palabras', JSON.stringify(arrayPlabras));
    palabraImput.value = '';
    alert('Palabra agregada con exito');
  });
}

if (btnCancelar !== null) {
  btnCancelar.addEventListener('click', (e) => {
    palabraImput.value = '';
  });
}
/** Fin palabra.html */

/** juego.html */

const palabraSeleccionada = arrayPlabras[Math.floor(Math.random() * arrayPlabras.length)]; 


const palabraAdivinar = '_'.repeat(palabraSeleccionada.length);
const palabraEscondida = document.getElementById('adivinaPalabra');
palabraEscondida.textContent = palabraAdivinar;

const btncomprobar = document.getElementById('comprobar');
const letraInput = document.getElementById('letra');

if (btncomprobar !== null) {
  btncomprobar.addEventListener('click', (e) => {
    e.preventDefault();    
    const letra = letraInput.value.trim();

    if (letra) {
      
      const indice = [...palabraSeleccionada].reduce((acc, l, i) => l === letra ? [...acc, i] : acc, []);
      if (indice.length > 0) {
        const palabraAdivinarArr = [...palabraAdivinar];
        
        indice.forEach(item => palabraAdivinarArr[item] = letra);
        
        palabraAdivinar = palabraAdivinarArr.join('');
        palabraEscondida.textContent = palabraAdivinar;
        if (palabraAdivinar === palabraSeleccionada) {
          alert('¡Felicidades, has adivinado la palabra!');
        }
      } 
    }
    //letra.value = '';
  });
}
/** Fin juego.html */
