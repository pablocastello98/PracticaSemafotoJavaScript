var rojo = document.querySelector('#red');
var amarillo = document.querySelector('#yellow');
var verde = document.querySelector('#green');
var contador = 0;

function coloresGris(){
    rojo.style.backgroundColor = 'gray';
    amarillo.style.backgroundColor = 'gray';
    verde.style.backgroundColor = 'gray';
}

function colores(cuenta){
    switch(cuenta){
        case 1:
            rojo.style.backgroundColor = 'red';
            break;
        case 2:
            amarillo.style.backgroundColor = 'yellow';
            break;
        case 3:
            verde.style.backgroundColor = 'green';
            break;
    }
}

function cambiarLuz(){
    coloresGris();
    contador++;

    colores(contador);

    if (contador >= 3){
        contador = 0;
    }
    
}
