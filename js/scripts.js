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
//Used to display the pokemons details to modal when clicked
function showDetails(pokemon) {
  pokemonRepository.loadDetails(pokemon).then(function() {
  showModal(pokemon);
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

pokemonRepository.loadList().then(function() {
 pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
 });
});

//Shows the modal in the browser

let modalContainer = document.querySelector('#modal-container');
function showModal(title, text) {
  modalContainer.innerHTML = '';
  let modal = document.createElement('div');
  modal.classList.add('modal');

  let closeButtonElement = document.createElement
  ('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  let nameElement = document.createElement('<h1>' + pokemon.name + '</h1>');


  let heightElement = document.createElement('<p>' + 'Height:' + pokemon.height + '</p>');


  let imageElement = document.createElement

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modalContainer.appendChild(modal);


  modalContainer.classList.add('is-visible');
}

function hideModal() {
  modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' &&
  modalContainer.classList.contains('is-visible')) {
  }
});

modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});


document.querySelector('#show-modal').addEventListener('click', () => {
  showModal('pokemon.name', 'item.height');
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
