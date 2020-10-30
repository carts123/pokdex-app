let pokemonRepository = (function () {
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';

function add(pokemon) {
  pokemonList.push(pokemon);
}
//function add(pokemon) {
  //  if (
    //  typeof pokemon === "object" &&
      //"name" in pokemon
    //) {
      //pokemonList.push(pokemon);
    //} else {
      //console.log("pokemon is not correct");
    //}

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
  button.addEventListener('click', function(event) {
    showDetails(pokemon);
});
}

function loadList(pokemon) {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  })
  .then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
      console.log(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  });
}

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  })
  .then(function (details) {
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}

function showDetails(pokemon) {
  pokemonRepository.loadDetails(pokemon).then(function () {
  console.log(pokemon);
  });
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails,
};
})();

//console.log(pokemonRepository.getAll());
//pokemonRepository.add({ name: 'Squirtle', height: 0.5, types: ['water']});
//console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
 pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
 });
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
