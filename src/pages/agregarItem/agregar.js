// Seleccionar elementos
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');
// Función para abrir el modal
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Función para cerrar el modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

//Función botones editar u eliminar
function botones(){
    console.log('se hizo clik')
}