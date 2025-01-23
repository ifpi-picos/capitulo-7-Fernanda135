let filmeLista = [];

for (let i = 0; i < 5; i++) {
  let filme = prompt('Digite algum filme:');
  filmeLista.push(filme)
}

for (let i = 0; i < filmeLista.length; i++) {
    console.log(filmeLista[i]);
  }