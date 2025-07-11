let offset = 0;
let limit = 20;
let myPokemonList = [];

function loadAndShow() {
    cleanPokemonContainer();
    readPokemons(limit, offset);
    enableDisableLoadButton(false);
    renderLoadingSpinner();
}


async function readPokemons(limit, offset) {
    
    let pokemonList = await createPokemonList(limit, offset);
    if(pokemonList !== null){
        myPokemonList = myPokemonList.concat(pokemonList);
        renderPokemonsFromList();
        enableDisableLoadButton(true);
    }else{
        //Fehlerseite anzeigen
    }
    
}

function renderPokemonsFromList() {
    cleanPokemonContainer();
    let pokemonContainer = document.getElementById('pokedex-section');
    for (let i = 0; i < myPokemonList.length; i++) {
        const pokemon = myPokemonList[i];
        pokemonContainer.innerHTML += getPokemonCard(pokemon);
    }
}

function renderLoadingSpinner() {
    let pokemonContainer = document.getElementById('pokedex-section');
    pokemonContainer.innerHTML += getLoadingSpinner();
}

function cleanPokemonContainer() {
    document.getElementById('pokedex-section').innerHTML = "";
}

function enableDisableLoadButton(disEn) {
    document.getElementById('load-button').disabled = !disEn;
}

function loadMorePokemons() {
    offset += 20;
    loadAndShow();
}