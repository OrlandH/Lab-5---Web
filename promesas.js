function construirCasa() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const exito = true;
  
        if (exito) {
          resolve("¡La casa ha sido construida con éxito!");
        } else {
          reject("Ha ocurrido un error en la construcción de la casa.");
        }
      }, 2000);
    });
  }
  
  construirCasa()
    .then((mensaje) => {
      console.log(mensaje);
    })
    .catch((error) => {
      console.log(error);
    });