const cardsContainer = document.getElementById("card");
const buttonData = document.getElementById('showData');
const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{
            label: 'Morning',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        },
        {
            label: 'Evening',
            borderColor: 'rgb(20, 232, 55)',
            data: [10, 20, 25, 22, 30, 40, 35]
        },{
            label: 'Night',
            borderColor: 'rgb(31, 96, 193)',
            data: [20, 18, 15, 32, 26, 19, 25]
        }]
    },
    // Configuration options go here
    options: {}
});

console.log(buttonData);
buttonData.addEventListener("click", ()=>{
    console.log("Hasta aqui llega");
   /* users.map(user=>{
        cardsContainer.innerHTML+=
    `<h3> ${user.Name}</h3>
    <p>${user.CheckIn}</p>
    <p>${user.Location}</p>`;
    }) */
} );
