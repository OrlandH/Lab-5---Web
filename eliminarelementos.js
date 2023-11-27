// Eliminación asíncrona de un elemento de un array
async function eliminarElemento(array, elemento) {
    await new Promise(resolve => setTimeout(resolve, 1000)); //Uso del await para simular una operación asíncrona que tarda algún tiempo

    const index = array.indexOf(elemento);
    if (index !== -1) {
        array.splice(index, 1);
        console.log(`Elemento ${elemento} eliminado. Array actualizado: [${array.join(', ')}]`);
    } else {
        console.log(`Elemento ${elemento} no encontrado en el array.`);
    }
}

// Función principal que utiliza async-await
async function main() {
    const miArray = [1, 2, 3, 4, 5];

    // Eliminar elementos del array de forma asíncrona
    await Promise.all([
        eliminarElemento(miArray, 2),
        eliminarElemento(miArray, 5),
        eliminarElemento(miArray, 7)
    ]);
}

// Llamada a la función principal
main();
