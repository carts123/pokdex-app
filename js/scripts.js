let pokemonRepository = (function () {
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100';

//adds a new pokemon item to array
function add(pokemon) {
  pokemonList.push(pokemon);
}

// returns the pokemonList array
function getAll() {
  return pokemonList;
}
//writes the pokemon as a list of buttons
function addListItem(pokemon){
  let pokemonList = document.querySelector('.pokemon-list');
  let listpokemon = document.createElement('li');
  let button = document.createElement('button');

  button.innerText = pokemon.name;
  button.classList.add('btn-btn-primary');
  button.setAttribute('data-target', '#pokemonModal');
  button.setAttribute('data-toggle', 'modal');

  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);

  button.addEventListener('click', function(event) {
    showDetails(pokemon);
});
}

//Used to display the pokemons details to modal when clicked
function showDetails(pokemon) {
  loadDetails(pokemon).then(function() {
  showModal(pokemon);
  });
}

// fetches information from API
function loadList() {
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
      //console.log(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  });
}

// fetches pokemon details from the API
function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  })
  .then(function (details) {
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
    item.weight = details.weight;
    item.abilities = details.abilities;
  }).catch(function (e) {
    console.error(e);
  });
}

//Shows the modal in the browser

function showModal(pokemon) {
  let modalBody = $('.modal-body');
  let modalTitle = $('.modal-title');
  let modalHeader = $('modal-header');

  modalTitle.empty();
  modalBody.empty();

  let nameElement = $('<h1>' + pokemon.name +'</h1>');

  let heightElement = $('<p>' + 'height : ' + pokemon.height + '</p>');

  let weightElement = $('<p>' + 'weight : ' + pokemon.weight + '</p>');

  let typesElement = $('<p>' + 'types : ' + pokemon.types + '</p>');

  let abilitiesElement = $('<p>' + 'abilities : ' + pokemon.abilities + '</p>');

  let imageElement = $('<img class="modal-img" style="width:50%">');
  imageElement.attr('src', pokemon.imageUrl);


  modalTitle.append(nameElement);
  //modal.append(closeButtonElement);
  modalBody.append(imageElement);
  modalBody.append(heightElement);
  modalBody.append(weightElement);
  modalBody.append(typesElement);
  modalBody.append(abilitiesElement);
  //modalContainer.appendChild(modal);
}
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
  };
})();

  pokemonRepository.loadList().then(function() {
   pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
   });
});
