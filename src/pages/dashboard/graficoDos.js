document.addEventListener('DOMContentLoaded', function () {
    
    //todo: Gráfico de Inventario
    const inventoryCtx = document.getElementById('inventoryChart').getContext('2d');
    new Chart(inventoryCtx, {
        type: 'bar',
        data: {
            //!Para agregar más elementos al grafico, se debe de agregar el valor en el labels y en el data.
            labels: ['Frutas', 'Verduras', 'Granos'],
            datasets: [{
                label: 'Cantidad en Stock',
                data: [120, 200, 150, 80, 100],
                backgroundColor: [
                    '#e74c3c',
                    '#2ecc71',
                    '#3498db',
                    '#f39c12',
                    '#9b59b6'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Inventario por Categoría'
                }
            }
        }
    })

})

