let offset = 0;
let limit = 20;
let myPokemonList = [];

function loadAndShow() {
    cleanPokemonContainer();
    readPokemons(limit, offset);
    enableDisableLoadButton(false);
    renderElemetInPokedexSection(getLoadingSpinner());
}


async function readPokemons(limit, offset) {
    
    let pokemonList = await createPokemonList(limit, offset);
    if(pokemonList !== null){
        myPokemonList = myPokemonList.concat(pokemonList);
        renderPokemonsFromList();
        enableDisableLoadButton(true);
    }else{
        cleanPokemonContainer();
        renderElemetInPokedexSection(getSorry());
    }
    
}

function renderPokemonsFromList(arrayList = myPokemonList) {
    cleanPokemonContainer();
    let pokemonContainer = document.getElementById('pokedex-section');
    for (let i = 0; i < arrayList.length; i++) {
        const pokemon = arrayList[i];
        pokemonContainer.innerHTML += getPokemonCard(pokemon);
    }
}

function renderElemetInPokedexSection(element) {
    let pokemonContainer = document.getElementById('pokedex-section');
    pokemonContainer.innerHTML += element;
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

function searchPokemons() {
    let searchValue = document.getElementById('searchInput').value;

    if(searchValue.length > 0 && searchValue.length < 3){
        toggleElemetvisibility(false, "input-error-label");
    }else if(searchValue.length >= 3){
        toggleElemetvisibility(true, "input-error-label");
        startSerching(searchValue);
    }else{
        toggleElemetvisibility(true, "input-error-label");
        renderPokemonsFromList();
    }
}

function toggleElemetvisibility(isValid, elementID) {
    let label = document.getElementById(elementID);
    if(!isValid && label.classList.contains('d-none')){
        label.classList.remove('d-none');
    }else if(!label.classList.contains('d-none') && isValid){
        label.classList.add('d-none');
    }
    
}

function startSerching(searchValue) {
    if(myPokemonList.length == 0){
        return;
    }

    let resultList = filterPokemonByName(searchValue);

    if(resultList.length > 0){
        renderPokemonsFromList(resultList);
    }else{
        cleanPokemonContainer();
        renderElemetInPokedexSection(getSorry());
    }
    
}

