// let button_block = document.getElementById(block);
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
