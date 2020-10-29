let pokemonRepository = (function () {
let pokemonList = [
  {
    name: 'Charmander', height: 0.6, types: ['steel', 'fire', 'ice']
  },
  {
    name: 'Jigglypuff', height: 0.5, types: ['bug', 'dark', 'ghost']
  },
  {
    name: 'Pidgeot', height: 1.5, types: ['rock', 'electric', 'ice']
  },
  {
    name: 'Psyduck', height: 0.8, types: ['grass', 'electric', 'fire']
  },
];

function add(pokemon) {
  pokemonList.push(pokemon);
}

function getAll() {
  return pokemonList;
}
//writes the pokemon as a list of buttons
function addListItem(pokemon){
  let pokemonList = document.querySelector('.pokemon-list');
  let listpokemon = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('.button-class');
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
  button.addEventListener('click',() => {
    showDetails(pokemon);
  });
}

function showDetails(pokemon) {
  console.log(pokemon);
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem
};
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Squirtle', height: 0.5, types: ['water']});
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {

  pokemonRepository.addListItem(pokemon);
});



//for (let i = 0; i < pokemonList.length; i++) {
//  document.write(pokemonList[i].name + " ");
//  if (pokemonList[i].height >= 1.0) {
//    document.write("(height: " + pokemonList[i].height + ") - Wow that's big! <br/>")
//  }
//  else if (pokemonList[i].height < 1.0) {
  //  document.write("(height: " + pokemonList[i].height +")<br/>")
  //}
//}
