/* Usando la función anterior beneficiate de poder conocer el indice del array
para crear una función llamada removeItem que pasandole un array y un texto
como parametros (los mismos parametros que en el anterior ejercicio) llame a
la función anteriormente creada findArrayIndex y obten el indice para
posteriormente usar la función de javascript .splice() para eliminar el
elemento del array.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan
correctamente. */

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
];

const cadenaUsuario1 = 'Han Solo';
const cadenaUsuario2 = 'Han';
const cadenaUsuario3 = 'Solo';
const cadenaUsuario4 = 'Anakin';

const findArrayIndex = (array, text) => {
  return array.indexOf(text);
};

const removeItem = (array, text) => {
  const resultado = findArrayIndex(array, text);
  if (resultado != -1) {
    array.splice(resultado, 1);
  } else {
    console.log(
      `No se ha encontrado el elemento. El array permanece igual: \n`
    );
  }
  return array;
};

console.log(removeItem(mainCharacters, cadenaUsuario4)); //cadenaUsuario1, cadenaUsuario2, cadenaUsuario3, cadenaUsuario4
