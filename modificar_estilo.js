var miElemento = document.getElementById("miElemento");


// Agrega un nuevo estilo al elemento
miElemento.style.border = "4px solid red";
miElemento.style.padding = "20px";
miElemento.style.color = "black";
var ancho = miElemento.offsetWidth;
var alto = miElemento.offsetHeight;


// Calcular la posición para centrar horizontal y verticalmente
var leftPos = (window.innerWidth - ancho) / 2;
var topPos = (window.innerHeight - alto) / 5;


// Establecer la posición
miElemento.style.position = "absolute";
miElemento.style.left = leftPos + "px";
miElemento.style.top = topPos + "px";


//darle estilo al titulo


var titulo = document.getElementById("Titulo1");


var leftPos = (window.innerWidth - ancho) / 2;
var topPos = (window.innerHeight - alto) / 8;
titulo.style.position= "absolute";
titulo.style.left = leftPos + "px";
titulo.style.top = topPos + "px";

// AGREGAR ELEMENTOS
// Añadir texto al botón
nuevoBoton.textContent = "Haz clic aquí";
// Añadir un evento al botón
nuevoBoton.addEventListener("click", function() {


    alert("¡Haz hecho clic!");
});
// Añadir el nuevo botón al final del cuerpo del documento
document.body.appendChild(nuevoBoton);


var leftPos = (window.innerWidth - ancho) / 1.9;
var topPos = (window.innerHeight - alto) / 1.4;
nuevoBoton.style.position= "absolute";
nuevoBoton.style.left = leftPos + "px";
nuevoBoton.style.top = topPos + "px";


var face = document.createElement("face")
face.style.color = "white";