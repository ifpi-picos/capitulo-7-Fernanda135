let filmeLista = [];

for (let i = 0; i < 5; i++) {
  let filme = prompt('Digite algum filme:');
  filmeLista.push(filme)
}

console.log('Filmes informados:', filmeLista.sort())