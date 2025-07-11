
async function createPokemonList(limit = 20, offset = 0) {
    let result = await getPokemonsWithLimit(limit, offset);
    if (result.result) {
        return await createPokemonDetailsList(result.data);
    } else {
        return null;
    }

}

async function createPokemonDetailsList(myPokemons) {
    let myPokemonsWithDetails = [];
    for (let index = 0; index < myPokemons.length; index++) {
        let pokemonResult = await getPokemonWithUrl(myPokemons[index]['url']);
        if(pokemonResult.result){
            myPokemonsWithDetails.push(createOnePokemon(pokemonResult.data));
        }
    }
    return myPokemonsWithDetails;
}

function createOnePokemon(jsonResult) {
    return {
        'id': jsonResult['id'],
        'name': setFirstLetterInName(jsonResult['species']['name']),
        'abilities': createAbilitiesString(jsonResult['abilities']),
        'base_experience': jsonResult['base_experience'],
        'height': jsonResult['height'],
        'weight': jsonResult['weight'],
        'imgPath': jsonResult['sprites']['other']['home']['front_default'],
        'types': createTypesWitchIcons(jsonResult['types']),
        'stats': jsonResult['stats']
    };
}


function createAbilitiesString(abilities) {
    if (abilities.length == 1) {
        return abilities[0]['ability']['name'];
    } else {
        let ability = "";
        abilities.forEach(element => {
            ability += `${element['ability']['name']},`;
        });
        return ability.slice(0, -1);
    }
}

function createTypesWitchIcons(types) {
    let typesIconsBasePath = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/";
    let typesIconsBasePath18 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/";
    for (let index = 0; index < types.length; index++) {
        let typeIndex = getTypeIdFromUrl(types[index]['type']['url']);
        if(typeIndex == 18){
            types[index]['type']['url'] = `${typesIconsBasePath18}${typeIndex}.png`;
        }else{
            types[index]['type']['url'] = `${typesIconsBasePath}${typeIndex}.png`;
        }
        
    }

    return types;
}

function getTypeIdFromUrl(url) {
    let urlWithoutHttps = url.replace('https://', '');
    urlWithoutHttps = urlWithoutHttps.slice(0, -1);
    let strArray = urlWithoutHttps.split('/');
    return strArray[4];
}

function setFirstLetterInName(name) {
    let firstChar = name.slice(0,1).toUpperCase();
    return `${firstChar}${name.slice(1, -1)}`;
}