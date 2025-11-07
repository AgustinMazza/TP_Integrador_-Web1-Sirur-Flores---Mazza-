const imagenes = [
    "./img/BMW 120i.png",
    "./img/BMW M240i.png",
    "./img/Honda civic.png",
    "./img/Honda HRV.png",
    "./img/Peugeot 208.png",
    "./img/Renault Kwid.png",
    "./img/Toyota Corolla.png",
    "./img/VW Amarok.png",
    "./img/VW gol.png",
    "./img/VW Golf.png"
];

let indexImagenes = 0;

function loop() {
    let imagenEspecial = document.getElementById("imagenEspecial");
    imagenEspecial.alt = 'No se encontro img';

    if (indexImagenes == imagenes.length - 1) {
        indexImagenes = 0;
    } else {
        indexImagenes++;
    }
    imagenEspecial.src = imagenes[indexImagenes];
}

function pool() {
    let imagenEspecial = document.getElementById("imagenEspecial");
    imagenEspecial.alt = 'No se encontro img';

    if (indexImagenes == 0) {
        indexImagenes = imagenes.length - 1;
    } else {
        indexImagenes--;
    }
    imagenEspecial.src = imagenes[indexImagenes];
}
