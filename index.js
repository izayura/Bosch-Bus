document.getElementById('mapGraphic2').style.display = 'none';
        document.getElementById('myChart').style.display = 'block';
        document.getElementById('map').style.display = 'none';
        document.getElementById('mapGraphic').style.display = 'block';

let button_block2 = document.getElementById('mapGraphic2');
button_block2.addEventListener('click', () => {
        console.log(document.getElementById('myChart'))
        document.getElementById('mapGraphic2').style.display = 'none';
        document.getElementById('myChart').style.display = 'block';
        document.getElementById('map').style.display = 'none';
        document.getElementById('mapGraphic').style.display = 'block';
});

let button_block = document.getElementById('mapGraphic');
button_block.addEventListener('click', () => {
        console.log(document.getElementById('myChart'))
        document.getElementById('myChart').style.display = 'none';
        document.getElementById('map').style.display = 'block';
        document.getElementById('mapGraphic').style.display = 'none';
        document.getElementById('mapGraphic2').style.display = 'block';
});


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
    let dbRef = firebase.database().ref().child("users");
    const showButton = document.getElementById("showButton");
    const cardsContainer = document.getElementById("card");    

dbRef.on("child_added", snap => {
        // const li = document.createElement("li");
        cardsContainer.innerHTML +=
         `<h3>${snap.val().Name}</h3>
         <p id="hour">${snap.val().CheckIn}</p>
         <p>${snap.val().Location}</p>`
        // li.innerText = snap.val().Name;
        // cardsContainer.appendChild(li);
        
    });

document.getElementById("morning").addEventListener("click", ()=>{
        cardsContainer.innerHTML="";
        dbRef.on("child_added", snap => {
                // const li = document.createElement("li");
                if(snap.val().CheckIn==="6hr"){
                cardsContainer.innerHTML +=
                 `<h3>${snap.val().Name}</h3>
                 <p id="hour">${snap.val().CheckIn}</p>
                 <p>${snap.val().Location}</p>`
                }                
            });
    })

    document.getElementById("evening").addEventListener("click", ()=>{
        cardsContainer.innerHTML="";
        dbRef.on("child_added", snap => {
                // const li = document.createElement("li");
                if(snap.val().CheckIn==="14hr"){
                cardsContainer.innerHTML +=
                 `<h3>${snap.val().Name}</h3>
                 <p id="hour">${snap.val().CheckIn}</p>
                 <p>${snap.val().Location}</p>`
                }                
            });
    })

 document.getElementById("night").addEventListener("click", ()=>{
        cardsContainer.innerHTML="";
        dbRef.on("child_added", snap => {
                // const li = document.createElement("li");
                if(snap.val().CheckIn==="22hr"){
                cardsContainer.innerHTML +=
                 `<h3>${snap.val().Name}</h3>
                 <p id="hour">${snap.val().CheckIn}</p>
                 <p>${snap.val().Location}</p>`
                }                
            });
    })