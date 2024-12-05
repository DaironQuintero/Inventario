// Seleccionar elementos
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

// Función para abrir la pestaña
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Función para cerrar pestaña
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

//Todo: Función botones editar y eliminar
function botones(){
    console.log('se hizo clik')
}

//!Boton editar
document.addEventListener("DOMContentLoaded", () => {
    const editButtons = document.querySelectorAll(".edit-button");
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementById("closeModalBtn");

    // Inputs del formulario
    const nameInput = document.getElementById("nameInput");
    const categoriaInput = document.getElementById("categoriaInput");
    const unidadInput = document.getElementById("unidadInput");
    const precioInput = document.getElementById("precioInput");

    let currentRow; // Para guardar la fila actual

    editButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Capturar la fila correspondiente
            const row = button.closest("tr");
            currentRow = row;

            // Extraer los valores de la fila
            const cells = row.querySelectorAll("td");
            const nombre = cells[0].textContent;
            const categoria = cells[1].textContent;
            const unidad = cells[2].textContent;
            const precio = cells[3].textContent.split(" ")[0]; // Separar el precio del botón

            // Rellenar los campos del formulario
            nameInput.value = nombre.trim();
            categoriaInput.value = categoria.trim();
            unidadInput.value = unidad.trim();
            precioInput.value = precio.trim();

            // Mostrar el modal
            modal.style.display = "block";
        });
    });

    // Cerrar el modal
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Guardar los cambios
    const form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar recargar la página

        // Actualizar los datos en la fila seleccionada
        currentRow.querySelectorAll("td")[0].textContent = nameInput.value;
        currentRow.querySelectorAll("td")[1].textContent = categoriaInput.value;
        currentRow.querySelectorAll("td")[2].textContent = unidadInput.value;
        currentRow.querySelectorAll("td")[3].innerHTML = `${precioInput.value}
            <button class="buttons"><img src="/src/assets/trash-2.png" alt="iconTrash"></button>
            <button class="buttons edit-button" data-index="${Array.from(currentRow.parentElement.children).indexOf(currentRow)}"><img src="/src/assets/square-pen.png" alt="iconUpdate"></button>`;

        // Cerrar el modal
        modal.style.display = "none";
    });
});
