
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

    const expReg = /^[a-zA-ZñÑ]+$/;
    const esPalabra = expReg.test(nuevaPalabra);

    if ((nuevaPalabra.length <= 15 || nuevaPalabra.length > 15) && esPalabra === false) { alert("no es una palabra o es muy larga, ingrese palabras sin asentos"); return; }

    arrayPlabras.push(nuevaPalabra.toUpperCase());
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

export default arrayPlabras;

/** Fin palabra.html */



