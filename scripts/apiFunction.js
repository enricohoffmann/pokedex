async function getPokemonsWithLimit(limit = 20, offset = 0) {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    let result = await getApiRequest(url);

    if(result.status === 200){
        let resultAsJson = await result.json();
        myPokemons = resultAsJson['results'];
        return true;
    }else{
        return false;
    }
    
}

async function getPokemonWithUrl(url) {
    let result = await getApiRequest(url);

    if(result.status === 200){
        let resultAsJson = await result.json();
        createOnePokemon(resultAsJson);
    }
}


async function getApiRequest(url) {
    let response;
    try {
        response = await fetch(url);

        if(!response.ok){
            throw new Error(`Status: ${response.status}`);
        }

        return response;

    } catch (error) {
        return response;
    }
}
