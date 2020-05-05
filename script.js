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


animatedForm();

