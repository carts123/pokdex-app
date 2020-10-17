let pokemonList = [
  { name: 'Charmander', height: 0.6, types: ['steel', 'fire', 'ice']}
  { name: 'Jigglypuff', height: 0.5, types: ['bug', 'dark', 'ghost']}
  { name: 'Pidgeot', height: 1.5m, types: ['rock', 'electric', 'ice']}
  { name: 'Psyduck', height: 0.8m, types: ['grass', 'electric', 'fire']}
]
//lists pokemon name and height
for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + pokedexList[i].types)
  if (pokemonList[i].height >= 1.0) {
    document.write(pokemonList[i].height + "Wow, that’s big!")
  }
  else if (pokemonList[i].height)
}
