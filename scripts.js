function init() {
    cleanPokemonContainer();
    readPokemons(10,0);
}


async function readPokemons(limit, offset) {
    let pokemonList = await createPokemonList(limit, offset);
    if(pokemonList !== null){
        renderPokemonsFromList(pokemonList);
    }else{
        //Fehlerseite anzeigen
    }
    
}

function renderPokemonsFromList(pokemonList) {
    let pokemonContainer = document.getElementById('pokedex-section');
    for (let i = 0; i < pokemonList.length; i++) {
        const pokemon = pokemonList[i];
        pokemonContainer.innerHTML += getPokemonCard(pokemon);
    }
}

function cleanPokemonContainer() {
    document.getElementById('pokedex-section').innerHTML = "";
}