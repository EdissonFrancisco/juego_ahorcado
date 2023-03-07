// Prevengo que la pagina se recarge y se borren los datos que se ingresan
document.addEventListener('click', (e) => {
  const enlace = e.target.closest('a');
  if (enlace) {
    e.preventDefault();
    window.location.href = enlace.getAttribute('href');
  }
});

/*const enlaces = document.querySelectorAll('a');

enlaces.forEach((enlace) => {
  enlace.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = enlace.getAttribute('href');
  });
});*/

// Es una funcion que crea un arreglo de palabras y retorna una palabra aleatoria
const palabraSeleccionada = (() => {
  const arrayPlabras = JSON.parse(sessionStorage.getItem('plabras')) || [];
  return arrayPlabras[Math.floor(Math.random() * arrayPlabras.length)];
});

// constante que guarda '_ giones bajos' que representan cada letra de la palabra
const palabraAdivinar = '_'.repeat(palabraSeleccionada.length);
// seleccion del elemnto del html para luego agregarle los guiones anteriores
const palabraEscondida = document.getElementById('adivinaPalabra');
if (palabraAdivinar) {
  palabraEscondida.textContent = palabraAdivinar;
}

/** palabra.html */
//declaracion de las funciones que se implementan abajo
const btnAgregar = document.getElementById("agregar");
const btnCancelar = document.getElementById("palabraCancelada");

// el elemento se asigna a una constante y se declara fuera de la funcion btnagregar
const palabraImput = document.getElementById("palabra");

if (btnAgregar !== null) {
  btnAgregar.addEventListener('click', (e) => {
    const nuevaPalabra = palabraImput.value.trim();//quito espacios de la cadena
    if (nuevaPalabra) {
      const arrayPlabras = JSON.parse(sessionStorage.getItem('plabras')) || [];
      arrayPlabras.push(nuevaPalabra);
      sessionStorage.setItem('palabras', JSON.stringify(arrayPlabras));
      palabraImput.value = '';
      alert('Palabra agregada con exito');
    } else {
      alert("El campo esta vacio");
    }
  });
}

if (btnCancelar !== null) {
  btnCancelar.addEventListener('click', (e) => {
    palabraImput.value = '';
  });
}
/** Fin palabra.html */

/** juego.html */
const btncomprobar = document.getElementById('comprobar');
const letraInput = document.getElementById('letra');

if (btncomprobar !== null) {
  btncomprobar.addEventListener('click', (e) => {
    const letra = letraInput.value.trim();
    if (letra) {
      const indice = [palabraSeleccionada].reduce((acc, l, i) => l === letra ? [...acc, i] : acc, []);
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
    letra.value = '';
  });
}

/** Fin juego.html */

/*
const arrayPlabras = JSON.parse(sessionStorage.getItem('arrayPlabras')) || [];

// funcion btn Agregar Palabra
const btnAgregar = document.getElementById("nuevaPalabra");
if (btnAgregar !== null) {
  btnAgregar.addEventListener('click', (e) => {
    e.preventDefault();
    let nuevaPalabra = document.getElementById("palabra").value;
    if (nuevaPalabra == "") {
      alert("Campo vacio no se agregaron elemnetos");
    } else {
      arrayPlabras.push(nuevaPalabra);
      // Guardar el array actualizado en sessionStorage
      sessionStorage.setItem('arrayPlabras', JSON.stringify(arrayPlabras));
      document.getElementById("palabra").value = "";
      alert("agregado con exito");
    }
  });
}

const btnCancelar = document.getElementById("palabraCancelada");
if (btnCancelar !== null) {
  btnCancelar.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("palabra").value = "";
  });
}

const palabraSeleccionada = arrayPlabras[Math.floor(Math.random() * arrayPlabras.length)];

const lineasPalabra = () => {
  const palabra = document.getElementById("adivinaPalabra");

  if (palabraSeleccionada !== undefined && palabraSeleccionada.length > 0) {
    for (let i = 0; i < palabraSeleccionada.length; i++) {
      const letraSpan = document.createElement("span");
      if (palabra !== null) {
        palabra.appendChild(letraSpan);
        const texto = document.createTextNode("_");
        letraSpan.appendChild(texto);
      }
      
    }
  }
};

lineasPalabra();

const btncomprobar = document.getElementById('comprobar');
if (btncomprobar !== null) {
  btncomprobar.addEventListener('click', (e) => {
    e.preventDefault();
    const letra = document.getElementById('letra').value;
    const palabra = document.getElementById('adivinaPalabra');
    if (letra !== null) {
      for (let i = 0; i < palabraSeleccionada.length; i++) {
        const letraSpan = palabra.children[i];
        if (palabraSeleccionada[i] === letra) {
          letraSpan.textContent = letra;
        }
      }
    }      
  });
}
*/