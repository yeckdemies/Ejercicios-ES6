/* Crea una función llamada swap que reciba un array y dos parametros que sean
indices del array. La función deberá intercambiar la posición de los valores de
los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array: */

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
];

const swap = (indice1, indice2) => {
  [fantasticFour[indice1], fantasticFour[indice2]] = [
    fantasticFour[indice2],
    fantasticFour[indice1]
  ];
  return fantasticFour;
};

console.log(swap(0, 1));
