//GUARDO ESTADO DE COLUMNA ACTIVA
let columnaActiva=1


//SELECCIONO COLUMNA
const columnas = document.querySelectorAll(".columna")


//ESCUCHO CLICK EN C/U
columnas.forEach((columna, indice) => {
    columna.addEventListener("click", function() {
        cambiarColumna(indice)
    })
})


//CAMBIO ESTADO DE LAS COLUMNAS
function cambiarColumna(indice){
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice
}