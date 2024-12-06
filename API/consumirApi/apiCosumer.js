const urlApi = 'http://localhost:3000/productos' 

let id = document.querySelector('#id')
let nombre = document.querySelector('#nombre')
let categoria = document.querySelector('#categoria')
let precio = document.querySelector('#precio')
let unidad = document.querySelector('#unidad')
let stock = document.querySelector('#stock')
let descripcion = document.querySelector('#descripcion')

async function getProducts (){
    const respuesta = await axios(urlApi) //? se obtienen productos por medio de la URL
    console.log(respuesta.data); //?data almacena los datos de respuesta

    id.textContent = respuesta.data[0].id
    nombre.textContent = respuesta.data[0].nombre
    categoria.textContent = respuesta.data[0].categoria
    precio.textContent = respuesta.data[0].precio
    unidad.textContent = respuesta.data[0].unidad
} 
getProducts()

