const analyzer = {
  getWordCount: (text) => {
    const palabras = text;
    const arrpalabras = palabras.trim().split(" ");
    //console.log (arrpalabras);
    //console.log (arrpalabras[0].length);
    return arrpalabras.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    const caracteres = text;
    const arrcaracteres = caracteres.split("");
    //console.log (arrcaracteres);
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
      console.log (suma)
    }
    const promedio = suma / array.length;

    return (Math.round(promedio*100))/100;

    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const arrayNum = text.split(" ");
    let contador = 0;
    for (let i = 0; i < arrayNum.length; i++) {
      const arrayIn = arrayNum[i].match(/\d+/g);
      console.log(arrayIn);
      if (arrayIn !== null) {
        contador++;
      }
    }
    return contador;

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const arraySum = text.split(" ");
    let suma = 0;
    for (let i = 0; i < arraySum.length; i++) {
      const num = parseFloat(arraySum[i]);
      if (!isNaN(num)) {
        suma += num;
      }
    }
    return suma;

    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
