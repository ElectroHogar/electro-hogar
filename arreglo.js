function seleccionar(numJugador) {
    document.getElementById('jugadorSeleccionado').innerHTML = numJugador;
}

function celdaSeleccionada(numCelda, numJugador) {
    var operador = document.getElementById(numCelda).innerHTML;

    //Evaluamos si la celda fue seleccionada previamente
    if (operador == 'x' || operador == 'o' ){
        return;
    }
    
    // Evaluamos quien es el jugador para asignar su operador
    if (numJugador == 1) {
        operador = 'x';
    }else{
        operador = 'o';
    }
    document.getElementById(numCelda).innerHTML = operador;
    buscarGanador(numJugador);
}

function buscarGanador(numeroJugador) {
    var jugadas =[];
    // Creo un arreglo de arreglos para las jugadas ganadoras
    var jugadaGanadora = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ];
    var contador = 0;
    var operador;
    var bandera = false;
    var jugadaValida = true;

    //Busco el operador, de acuerdo al numero del jugador
    if (numeroJugador == 1){
        operador = 'x';
    }else{
        operador = 'o';
    }

    //Recorrer los numeros del 1 al 10
    //Obtengo la jugada del jugador...
    for(i = 1; i < 10; i++) {
        if(document.getElementById(i).innerHTML == operador){
            jugadas [ contador ] = i;
            contador++; //Adicionar una unidad
        }
    }

    //Evaluar si la jugada tiene ganadora.
    jugadaGanadora.forEach(element =>{
        element.forEach(numero => {
            if (jugadas.includes(numero)) {
                bandera =true;
            }else{
                bandera = false;
                jugadaValida = false;
            }
        });
        //Si encontro una jugada ganadora alert
        if (jugadaValida == true) {
            window.alert('Usted Gano...!!!')
        }else {
            jugadaValida = true;
        }
    });
}