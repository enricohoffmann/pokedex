let myPokemons = [];
let myPokemonsWithDetails = [];



async function createPokemonList(limit = 20, offset = 0) {
    let resultList = await getPokemonsWithLimit(limit, offset);
    if(resultList){
        createPokemonDetailsList();
    }
}

async function createPokemonDetailsList() {
    for (let index = 0; index < myPokemons.length; index++) {
        await getPokemonWithUrl(myPokemons[index]['url']);
    }
}

function createOnePokemon(jsonResult) {
    let pokemon = {
        'id' : jsonResult['id'],
        'name' : jsonResult['species']['name'],
        'abilities' : createAbilitiesString(jsonResult['abilities']),
        'base_experience' : jsonResult['base_experience'],
        'height' : jsonResult['height'],
        'weight': jsonResult['weight'],
        'imgPath': jsonResult['sprites']['other']['home']['front_default'],
        'types' : createTypesWitchIcons(jsonResult['types']),
        'stats': jsonResult['stats']
    };

    console.log(pokemon);
    

    myPokemonsWithDetails.push(pokemon);
}


function createAbilitiesString(abilities) {
    if(abilities.lenght == 1){
        return abilities[0]['ability']['name'];
    }else{
        let ability = "";
        abilities.forEach(element => {
            ability += `${element['ability']['name']},`;
        });
        return ability.slice(0, -1);
    }
}

function createTypesWitchIcons(types) {
    let typesIconsBasePath = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/";
    for (let index = 0; index < types.length; index++) {
        let typeIndex = getTypeIdFromUrl(types[index]['type']['url']);
        types[index]['type']['url'] = `${typesIconsBasePath}${typeIndex}.png`;      
    }

    return types;
}

function getTypeIdFromUrl(url) {
    let urlWithoutHttps = url.replace('https://', '');
    urlWithoutHttps = urlWithoutHttps.slice(0, -1);
    let strArray = urlWithoutHttps.split('/');
    return strArray[4];
}