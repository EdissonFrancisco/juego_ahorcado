const arrayPlabras = ["javascript", "programacion", "ordenador", "desarrollo", "tecnologia"];

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
        document.getElementById("palabra").value = "";  
        arrayPlabras.forEach(pal => {
        console.log(pal);
      });
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

export {arrayPlabras};