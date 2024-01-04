import analyzer from "./analyzer.js";

//Declaro el boton
const boton = document.getElementById("reset-button");

//funcion limpiar el textarea
function limpiar() {
  textoEntrada.value = "";
  wordCount.textContent = "Palabras: 0";
  characterCount.textContent = "Caracteres: 0";
  characterNoSpacesCount.textContent = "Caracteres excluyendo espacios: 0";
  wordLengthAverage.textContent = "Longitud de palabras: 0";
  numberCount.textContent = "Números: 0";
  numberSum.textContent = "Suma de números: 0"
}
boton.addEventListener("click", limpiar);

//Declaro el textarea
const textoEntrada = document.querySelector('textarea[name="user-input"]');


//Declaro todos los li de mi HTML
const wordCount = document.querySelector('li[data-testid="word-count"]');
const characterCount = document.querySelector("li[data-testid='character-count']");
const characterNoSpacesCount = document.querySelector('li[data-testid="character-no-spaces-count"]');
const numberCount = document.querySelector('li[data-testid="number-count"]');
const numberSum = document.querySelector('li[data-testid="number-sum"]');
const wordLengthAverage = document.querySelector('li[data-testid="word-length-average"]');

//Funcion addEventListener que porque cada vez que yo ingrese un texto ella me trae los valores calculados del analyzer y actualizo los valores de los li.
textoEntrada.addEventListener("input", function () {
  wordCount.textContent = "Palabras: " + analyzer.getWordCount(textoEntrada.value); 
  characterCount.textContent = "Caracteres: " + analyzer.getCharacterCount(textoEntrada.value); 
  characterNoSpacesCount.textContent = "Caracteres excluyendo espacios: " + analyzer.getCharacterCountExcludingSpaces(textoEntrada.value);
  numberCount.textContent = "Números: " + analyzer.getNumberCount(textoEntrada.value);
  numberSum.textContent = "Suma de números: " + analyzer.getNumberSum(textoEntrada.value); 
  wordLengthAverage.textContent = "Longitud de palabras: " + analyzer.getAverageWordLength(textoEntrada.value);
});

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
