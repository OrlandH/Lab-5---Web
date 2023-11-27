function obtenerValor() {
    event.preventDefault(); // Evitar que el formulario se envíe
    const nombre = document.getElementById('nombre').value;
    alert(`El nombre ingresado es: ${nombre}`);}