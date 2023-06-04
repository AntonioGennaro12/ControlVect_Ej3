const inUrl     = document.querySelector ("#in-url");
const indBorra  = document.querySelector ("#borr-img");
const contImg   = document.querySelector ("#div-imagenes");

const NO_IMG    = "";
const MAX_IMG   = 12;
const IMG_FULL  = "¡¡¡Máximo alcanzado!!!";
const misImagenes = [];

let numImages   = 0; //se lo debe dejar listo para la próxima imagen 
let urlIgresada = NO_IMG;

contImg.innerHTML = "";

/**
 * Borra Url ingresada 
 */
function clearInput () {
    inUrl.style.color = "aliceblue";
    inUrl.value = NO_IMG;
}

/**
 * Agrega una imagen al final
 * @param {number} idx 
 */
function addImg(idx) {
    contImg.innerHTML += `
    <img src="${misImagenes[idx]}" alt="Imagen ${idx+1}">
    `;
}

/**
 * Llena Contenedor de Imagenes 
 * * @param {number} idx
 */
function llenaContImg (idx) {
    clearInput();
    for (let i=0; i< idx; i++)  {
        addImg(i);
    }
}

/**
 * Borra el contenido del Contenedor de Imagenes 
 */
function clearContImg () {
    contImg.innerHTML = "";
}

/**
 * Agrega imagen al final, llamada desde el Boton "Agrega Imag" 
 */
function agregaImg() {
    urlIgresada = inUrl.value;
    if (urlIgresada != NO_IMG) {
        if (numImages < MAX_IMG) {
            misImagenes.push(urlIgresada);
            clearInput();
            addImg (numImages);
            numImages++;
        }
        else{
            inUrl.style.color = "red";
            inUrl.value = IMG_FULL;
        }
    }
}

/**
 * Borra imagen al final, llamada desde el Boton "Borrar ultima Imag" 
 */
function borraUltima() {
    numImages = misImagenes.length;
    if (numImages != 0) {
        numImages --;
        misImagenes.pop ();
        clearContImg ();
        llenaContImg (numImages);
    }
}

/**
 * Borra imagen en una posiciòn, llamada desde el Boton "Borrar Imag en posiciòn" 
 */
function borraImg() {
    let indborrar = indBorra.value;
    console.log(indborrar);
    if ((indborrar > 0) && (indborrar <= numImages)) {
        indborrar --;
        misImagenes.splice (indborrar, 1);
        numImages = misImagenes.length;
        clearContImg ();
        llenaContImg (numImages);
    }
}
