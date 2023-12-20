const analyzer = {  
  getWordCount: (text) => {
    let palabras = text;
    let arrpalabras = palabras.split(" ");
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
    const excluir= text;
    const espacios =excluir.trim().replace(/[^\w\s]|_/g, "").replace(/\s+/g, '');   
    return espacios.length; 
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {   
    const array= text.split(" ");
    let suma=0;

    for(let i=0; i<array.length; i++){
      suma += array[i].length;
    }
    let promedio = suma / array.length;

    return promedio.toFixed(2);
    

    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {

    const arraynum = text.split(" ");
    let contador = 0;
    for(let i=0; i<arraynum.length; i++){
      let arrayin=arraynum[i].match(/\d+/g);
      if(arrayin === null){
        contador = contador;
      } else{
        contador++;
      }

      }
    return contador
  
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
