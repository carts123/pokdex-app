let pokemonList = [
  { name: 'Charmander', height: 0.6, types: ['steel', 'fire', 'ice']},
  { name: 'Jigglypuff', height: 0.5, types: ['bug', 'dark', 'ghost']},
  { name: 'Pidgeot', height: 1.5, types: ['rock', 'electric', 'ice']},
  { name: 'Psyduck', height: 0.8, types: ['grass', 'electric', 'fire']},
]
//lists pokemon name and height
for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + " ");
  if (pokemonList[i].height >= 1.0) {
    document.write("(height: " + pokemonList[i].height + ") - Wow that's big!")
  }
  else if (pokemonList[i].height < 1.0) {
    document.write("(height: " + pokemonList[i].height +")")
  }
}
