// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7njoATlPyzGF60LsDfujCJZ1pKJiFjnQ",
    authDomain: "bosch-bus.firebaseapp.com",
    databaseURL: "https://bosch-bus.firebaseio.com",
    projectId: "bosch-bus",
    messagingSenderId: "222527960687",
    appId: "1:222527960687:web:cd36b5877a7c224a707f9a",
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);const app = firebase.app();
let usersArray = [];
const showButton = document.getElementById("showButton");
const cardsContainer = document.getElementById("card");
const dbRef = firebase.database().ref().child("users");
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

dbRef.on("child_added", snap => {
    const li = document.createElement("li");
    li.innerText = snap.val();
    cardsContainer.appendChild(li);
});

// const showData = () => {
//     usersArray = snap.val();
//     usersArray.map(user => {
//         cardsContainer.innerHTML+=
//     `<h3>${user.Name}</h3>`
//     });

// showButton.addEventListener("click", showData);

