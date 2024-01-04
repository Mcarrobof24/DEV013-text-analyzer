const analyzer = {
  getWordCount: (text) => {
    const palabras = text;
    const arrpalabras = palabras.trim().split(" ");
    return arrpalabras.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    const caracteres = text;
    const arrcaracteres = caracteres.split("");
    return arrcaracteres.length;

    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const excluir = text;
    const espacios = excluir
      .trim()
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, "");
    return espacios.length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    const array = text.split(" ");
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      suma += array[i].length;
    }
    const promedio = suma / array.length;
    return Math.round(promedio * 100) / 100;

    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //const arrayNum = text.match(/\b\d+(\.\d+)?\b/g);
    //return arrayNum ? arrayNum.length : 0;
    const arrayNum = text.split(" ");
    let contador = 0;
    for (let i = 0; i < arrayNum.length; i++) {
      const arrayIn = arrayNum[i].replace(/\.$/, "");
      if (!isNaN(arrayIn) && arrayIn !== "") {
        contador++;
      }
    }
    return contador;
    
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const array = text.match(/\b\d+(\.\d+)?\b/g);
    let suma = 0;
    if (array === null) {
      return 0;
    } else {
      suma = array.reduce((sum, num) => {
        return sum + parseFloat(num);
      }, 0);
      return suma;
    }
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
