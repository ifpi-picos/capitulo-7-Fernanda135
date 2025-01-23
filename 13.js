let filmeLista = [];

for (let i = 0; i < 5; i++) {
  let filme = prompt('Digite algum filme:');
  filmeLista.push(filme)
};

let recomendados = [];

for (let i = 0; i < 2; i++) {
    let recomendacao = prompt('Digite uma recomendção dos fimes anteriores:');
    recomendados.push(recomendacao)
}

console.log("Filmes informados:", filmeLista);
console.log('Suas recomendações são:', recomendados)