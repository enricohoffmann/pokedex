function init() {
    myPokemons = [];
    myPokemonsWithDetails = [];
    readPokemons(10,0);
}


async function readPokemons(limit, offset) {
    await createPokemonList(limit, offset);
    console.log(myPokemonsWithDetails);
    
}