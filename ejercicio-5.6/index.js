/* Dado el siguiente javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. De esta forma, si
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */

const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const ejecutar = (funcion, tiempo) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      funcion(...args);
    }, tiempo);
  };
};

const iniciarFiltro = () => {
  const input = document.querySelector('[data-function="toFilterStreamers"]');
  input.addEventListener(
    'input',
    ejecutar((e) => {
      const value = e.target.value.toLowerCase();
      const resultado = streamers.filter((streamer) =>
        streamer.name.toLowerCase().includes(value)
      );
      console.log(resultado);
    }, 2000)
  );
};

iniciarFiltro();
