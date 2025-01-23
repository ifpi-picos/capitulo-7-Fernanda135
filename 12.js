let filmeLista = [];

for (let i = 0; i < 5; i++) {
  let filme = prompt('Digite algum filme:');
  filmeLista.push(filme)
}

for (let filme of filmeLista) {
    console.log(filme, 'Um grande filme! Ainda não vi.')
}