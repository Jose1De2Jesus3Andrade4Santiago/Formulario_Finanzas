function animatedForm(){
    const arrows = document.querySelectorAll(".botonNext");
    const arrowsP = document.querySelectorAll(".botonPrevious");


    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const parent = arrow.parentElement;
            const pregunta = parent.parentElement;
            const nextQ = pregunta.nextElementSibling;
    
            cambioP(pregunta,nextQ);
            
        });
    });

    arrowsP.forEach(arroP => {
        arroP.addEventListener("click", () => {
            const parent = arroP.parentElement;
            const pregunta = parent.parentElement;
            const previousQ = pregunta.previousElementSibling;

            cambioP(pregunta,previousQ);
        });
    });

    

}

function cambioP(pregunta,cambiar){
    pregunta.classList.add('innactive');
    pregunta.classList.remove('active');
    cambiar.classList.add('active');
}

function getValue(Identificador){
    var contenido = document.getElementsByName(Identificador);
    var valor = "No ha respondido a la pregunta"
    for (var i = 0; i < contenido.length; i++){
        if(contenido[i].checked){
            valor = contenido[i].value;
        }        
    }
    return valor;
}

var respuestas = new Array(14); 

function saveValue(identificador){

    switch (identificador){
        case 'pregunta 1':
            respuestas[0]=getValue(identificador);
            break;
        case 'pregunta 2':
            respuestas[1]=getValue(identificador);
            break;
        case 'pregunta 3':
            respuestas[2]=getValue(identificador);
            break;
        case 'pregunta 4':
            respuestas[3]=getValue(identificador);
            break;
        case 'pregunta 5':
            respuestas[4]=getValue(identificador);
            break;
        case 'pregunta 6':
            respuestas[5]=getValue(identificador);
            break;
        case 'pregunta 7':
            respuestas[6]=getValue(identificador);
            break;
        case 'pregunta 8':
            respuestas[7]=getValue(identificador);
            break;
        case 'pregunta 9':
            respuestas[8]=getValue(identificador);
            break;
        case 'pregunta 10':
            respuestas[9]=getValue(identificador);
            break;
        case 'pregunta 11':
            respuestas[10]=getValue(identificador);
            break;
        case 'pregunta 12':
            respuestas[11]=getValue(identificador);
            break;
        case 'pregunta 13':
            respuestas[12]=getValue(identificador);
            break;
        default:
            respuestas[13]=getValue(identificador);
            break;
    }
}


function printAnswers(identificador){
    saveValue(identificador);
    var preguntas = ["resp pregunta 1","resp pregunta 2",
                    "resp pregunta 3","resp pregunta 4",
                    "resp pregunta 5","resp pregunta 6",
                    "resp pregunta 7","resp pregunta 8",
                    "resp pregunta 9","resp pregunta 10",
                    "resp pregunta 11","resp pregunta 12",
                    "resp pregunta 13","resp pregunta 14"];
    var objetivo = 0;

    for( var i = 0; i < preguntas.length; i++){
        objetivo = document.getElementById(preguntas[i]);
        objetivo.innerHTML = respuestas[i];
    }
}


function score(numPregunta,respuesta){
    if(numPregunta== 0 || numPregunta== 3 || numPregunta== 7 || numPregunta== 8 || numPregunta== 9 ||numPregunta== 10){
        switch(respuesta){
            case 'A':
                return 1;
            case 'B':
                return 2;
            case 'C':
                return 3;
            default:
                return 4;
        }
    }

    if(numPregunta== 12 || numPregunta== 13 || numPregunta== 11 || numPregunta== 6 || numPregunta== 5 ||numPregunta== 2){
        switch(respuesta){
            case 'A':
                return 2;
            case 'B':
                return 1;
            case 'C':
                return 3;
            default:
                return 4;
        }
    }
    if(numPregunta == 1){
        switch(respuesta){
            case 'A':
                return 4;
            case 'B':
                return 3;
            case 'C':
                return 2;
            default:
                return 1;
        }
    }

    if(numPregunta == 4){
        switch(respuesta){
            case 'A':
                return 2;
            case 'B':
                return 3;
            case 'C':
                return 1;
            default:
                return 3;
        }
    }
}
function calcularPuntaje(){
    var puntaje = 0;
    for(var i = 0; i < respuestas.length; i++){
        puntaje+=score(i,respuestas[i]);
    }
    return puntaje;
}

function InversorType(){
    var objetivo = document.getElementById("tipo de inversor");
    var puntaje = calcularPuntaje();
    alert("Tu puntaje fue: "+puntaje);
    if(respuestas[11] == 'A'){
        objetivo.innerHTML = "SOFISTICADO";
    }
    else if(puntaje < 14 ){
        objetivo.innerHTML = "ADVERSO AL RIESGO";
    }
    else if(puntaje > 14 && puntaje < 29){
        objetivo.innerHTML = "MODERADO";
    }
    else if(puntaje > 28 && puntaje < 65){
        objetivo.innerHTML = "PROPENSO AL RIESGO";
    }
    
}



animatedForm();


