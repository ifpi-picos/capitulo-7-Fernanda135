let filmeLista = [];

for (let i = 0; i < 5; i++) {
  let filme = prompt('Digite algum filme:');
  filmeLista.push(filme)
}

function buscarFilme(titulo) {
    if(filmeLista.includes(titulo)) {
        return 'O filme foi encotrado na lista.'
    } else {
        return 'O filme não foi enctrado na lista.'
    }
}

let busca = prompt('Digite o título do filme que deseja buscar:')
console.log(buscarFilme(busca))