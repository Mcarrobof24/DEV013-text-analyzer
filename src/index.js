import analyzer from "./analyzer.js";

//Declaro el boton
const boton = document.getElementById("reset-button");

//funcion limpiar el textarea
function limpiar() {
  textoEntrada.value = "";
  wordCount.textContent = "Recuento de palabras: 0";
  characterCount.textContent = "Recuento de caracteres: 0";
  characterNoSpacesCount.textContent = "Recuento de caracteres excluyendo espacios y signos de puntuación: 0";
  wordLengthAverage.textContent = "Longitud media de palabras: 0";
  numberCount.textContent = "Recuento de números: 0";
  numberSum.textContent = "Suma total de números: 0"
}
boton.addEventListener("click", limpiar);

//Declaro el textarea
const textoEntrada = document.querySelector('textarea[name="user-input"]');

//------CALCULO PALABRAS-----//
//Declaro el primer li de recuento de palabras
const wordCount = document.querySelector('li[data-testid="word-count"]');
//RECUENTO DE PALABRAS (Tomo el valor de analyzer.js y lo agrego a mi li)
textoEntrada.addEventListener("input", function () {
  wordCount.textContent = "Recuento de palabras: " + analyzer.getWordCount(textoEntrada.value);
});

//------CALCULO CARACTERES-----//
//Declaro el segundo li de recuento de caracteres
const characterCount = document.querySelector("li[data-testid='character-count']");
//RECUENTO DE CARACTERES (Tomo el valor de analyzer.js y lo agrego a mi li)
textoEntrada.addEventListener("input", function () {
  characterCount.textContent = "Recuento de caracteres: " + analyzer.getCharacterCount(textoEntrada.value);
});

///------CALCULO DE CARACTERES SIN ESPACIOS Y SIGNOS DE PUNTUACION-----------
//Declaro el tercer li de recuento de caracteres excluyendo espacios y signos de puntuacion
const characterNoSpacesCount = document.querySelector('li[data-testid="character-no-spaces-count"]');
textoEntrada.addEventListener("input", function () {
  characterNoSpacesCount.textContent = "Recuento de caracteres excluyendo espacios y signos de puntuación: " + analyzer.getCharacterCountExcludingSpaces(textoEntrada.value);
});

//------- CALCULO DE RECUENTO DE NUMEROS-------------
//Declaro el cuarto li de recuento de numeros
const numberCount = document.querySelector('li[data-testid="number-count"]');
textoEntrada.addEventListener("input", function () {
  numberCount.textContent = "Recuento de números: " + analyzer.getNumberCount(textoEntrada.value);
});

//------- CALCULO DE LA SUMA DE LOS NUMEROS --------
//Declaro el quinto li suma total de numeros
const numberSum = document.querySelector('li[data-testid="number-sum"]');
textoEntrada.addEventListener("input", function () {
  numberSum.textContent = "Suma total de números: " + analyzer.getNumberSum(textoEntrada.value);
});

//---- CALCULO DE LA LONGITUD MEDIA DE LAS PALABRAS
//Declaro el sexto li de longitud media de las palabras
const wordLengthAverage = document.querySelector('li[data-testid="word-length-average"]');
textoEntrada.addEventListener("input", function () {
  wordLengthAverage.textContent = "Longitud media de palabras: " + analyzer.getAverageWordLength(textoEntrada.value);
});
//textarea textoEntrada
//textoEntrada.addEventListener('input', function(e){
//function contarPalabras(e){
//const target = e.target;
//const longitudAct = target.value.length;
//return longitudAct
//}
//wordCount.textContent = wordCount.textContent + contarPalabras();

//})

//textarea textoEntrada
//textoEntrada.addEventListener('input',function(e){
//palabras
//wordCount.textContent= wordCount.textContent + analyzer.getWordCount(e.target.value);
//caracteres
//characterCount.textContent= characterCount.textContent + analyzer.getCharacterCount(e.target.value);
//caracteres excluyendo espaciones y signos de puntuacion
//characterNoSpacesCount.textContent= characterNoSpacesCount.textContent + analyzer.getCharacterCountExcludingSpaces(e.target.value);
//recuento de numeros
//numberCount.textContent= numberCount.textContent + analyzer.getNumberCount(e.target.value);
//suma de numeros
//numberSum.textContent= numberSum.textContent + analyzer.getNumberSum(e.target.value);
// longitud promedio de palabras
//wordLengthAverage.textContent= wordLengthAverage.textContent + analyzer.getAverageWordLength(e.target.value);

//})

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
