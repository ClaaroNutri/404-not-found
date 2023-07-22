import {eeuu, francia, cordobes, chino, italiano, aleman, latin } from "./paises.js"

let button=document.getElementById("button")
console.log(button)

let paises=[eeuu, francia, cordobes, chino, italiano, aleman, latin]
console.log(paises)
console.log(typeof paises)

let indicePais=0

const paginaInicio=()=>{
    
    let paisActual = paises[indicePais];

        let contenedor=document.getElementById("container")
        let tituloPais=document.createElement("h1")
        let descripcionPais=document.createElement("p")
        let imagePais=document.createElement("img")
        
        tituloPais.textContent=paisActual.titulo,
        descripcionPais.textContent=paisActual.descripcion,
        imagePais.src=paisActual.img

        contenedor.innerHTML=""
    
        contenedor.appendChild(tituloPais)
        contenedor.appendChild(descripcionPais)
        contenedor.appendChild(imagePais)

        // Incrementar el índice de país actual para mostrar el siguiente país en el próximo clic
         
        indicePais++;

    // Revisar si se llegó al final de la lista de países y reiniciar el índice
        if (indicePais >= paises.length) {
        indicePais = 0;
        }

}


// Agregar un evento de clic al botón para mostrar el siguiente país
button.addEventListener("click", paginaInicio);








    