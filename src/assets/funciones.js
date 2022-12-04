//async = indica que va a ser una funcion asincronica

const consultarBDD = async (ruta) => {
    const response = await fetch(ruta)
    const productos = await response.json()
    return productos
}

export {consultarBDD}