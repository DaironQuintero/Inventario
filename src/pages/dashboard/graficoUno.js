document.addEventListener('DOMContentLoaded', function () {

    //todo: Gráfico de Ingresos
    const incomeCtx = document.getElementById('incomeChart').getContext('2d');
    new Chart(incomeCtx, {
        type: 'line',
        data: {
            //!Para agregar más elementos al grafico, se debe de agregar el valor en el labels y en el data.
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            datasets: [{
                label: 'Ingresos',
                data: [65000, 59000, 80000, 81000, 56000, 55000],
                fill: false,
                borderColor: '#3498db',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Ingresos Mensuales'
                }
            }
        }
    })

})