let pokemonRepository = (function () {
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';

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
  button.classList.add('.btn-btn-primary-btn-lg');
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
  }).catch(function (e) {
    console.error(e);
  });
}

//Shows the modal in the browser

/* let modalContainer = document.querySelector('#pokemonModal');
function showModal(pokemon) {
  modalContainer.innerHTML = '';
  let modal = document.createElement('div');
  modal.classList.add('modal');

  let closeButtonElement = document.createElement
  ('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);


  let nameElement = document.createElement('h1')
  ;
  nameElement.innerText = pokemon.name;


  let heightElement = document.createElement('p')
  ;
  heightElement.innerText = pokemon.height;

  let imageElement = document.createElement('img')
  ;
  imageElement.src = pokemon.imageUrl; */

function showModal(pokemon) {
  let modalBody = $('.modal-body');
  let modalTitle = $('.modal-title');
  let modalHeader = $('modal-header');

  modalTitle.empty();
  modalBody.empty();

  let nameElement = $('<h1>' + pokemon.name +'</h1>');

  let heightElement = $('<p>' + 'height : ' + pokemon.height + '</p>');



  modalTitle.append(nameElement);
  modal.append(closeButtonElement);
  modalBody.append(heightElement);
  //modal.append(imageElement);
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
   pokemonRepository.getAll().forEach(function (pokemonModal) {
    pokemonRepository.addListItem(pokemonModal);
   });
});

/* {
  modalContainer.classList.add('is-visible');
}

function hideModal() {
  modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' &&
  modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});

modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});


$('#show-modal').addEventListener('click', () => {
  showModal('pokemon.name', 'pokemon.height', 'pokemon.imageUrl');
});*/
