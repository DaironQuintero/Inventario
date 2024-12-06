const url = 'http://localhost:3000/productos' //? Importamos el endpoin

//! GET => Obtener datos
async function iterarValores(){

    for(let i = 0; i < 9 ; i++ ){

        //Todo: variables js de html
       let id = document.querySelector(`#id${i}`)
       let name = document.querySelector(`#name${i}`)
       let categoria = document.querySelector(`#categoria${i}`)
       let unidad = document.querySelector(`#unidad${i}`)
       let precio = document.querySelector(`#precio${i}`)

        //Todo: Respuesta de API
       const response = await axios(url) 

        //Todo: Asignación de valores
       id.innerHTML = response.data[i].id
       name.innerHTML = response.data[i].nombre
       categoria.innerHTML = response.data[i].categoria
       unidad.innerHTML = response.data[i].unidad
       precio.innerHTML = response.data[i].precio
        
    }
};

//!POST => Crear datos

function createProduct(){

    //Todo: Variable js y html
    let nameInput = document.querySelector('#nameInput')
    let categoriaInput = document.querySelector('#categoriaInput')
    let unidadInput = document.querySelector('#unidadInput')
    let precioInput = document.querySelector('#precioInput')

    //Todo: Objeto para petición de Post
    let product = {
        nombre: nameInput.value,
        categoria: categoriaInput.value,
        precio: precioInput.value,
        unidad: unidadInput.value
    }
    return product;
}

//Todo: Enviar Objeto a API
async function postData() {

    //Todo: Respuesta de API
    const response = await axios.post(url, createProduct()) 
    console.log(response.data)
}

// //!PUT => Modificar datos
// async function modificarProductos(id) {

//     let product = {
//         nombre: "Manzana",
//         categoria: "Fruta",
//         precio: 2000,
//         unidad: "20 kg"
//     }

//     const response = await axios.put(`${url}/${id}`,product) 
//     console.log(response.data);
    
// }
// // modificarProductos(1)
// const elements = document.querySelectorAll('tr')

// elements.forEach(element => {
//     element.addEventListener('clik', (event) =>{
//         alert('hiciste clik en el id: ', event.target.id)
//     })
// })