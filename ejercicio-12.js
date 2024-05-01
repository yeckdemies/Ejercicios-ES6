/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:
function findArrayIndex(array, text) {} */

// Ej array:
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
  const posicion = array.indexOf(text);
  return posicion;
};

const resultado = findArrayIndex(mainCharacters, cadenaUsuario4); //cadenaUsuario1, cadenaUsuario2, cadenaUsuario3, cadenaUsuario4

if (resultado != -1) {
  console.log(`El elemento se encuentra en la posición ${resultado}`);
} else {
  console.log(`No se ha encontrado el elemento`);
}
