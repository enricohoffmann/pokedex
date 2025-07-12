function getPokemonCard(pokemon) {
    return `
        <div class="pokedex-card">
            <div class="pokedex-card-header">
                <p>#${pokemon['id']}</p>
                <p>${pokemon['name']}</p>
            </div>
            <div class="pokedex-card-body ${pokemon['types'][0]['type']['name']}">
                <img src="${pokemon['imgPath']}" alt="Image from pokemon: ${pokemon['name']}">
            </div>
            <div class="pokedex-card-footer">
                ${getTypeLogos(pokemon['types'])}
            </div>
        </div>
    `;
}

function getTypeLogos(types) {
    let typeDivs = "";
    for (let i = 0; i < types.length; i++) {
        typeDivs += `<img class="pokedex-type-logo" src="${types[i]['type']['url']}" alt="Type Logo">`;
    }
    return typeDivs;
}


function getLoadingSpinner(){
    return `
        <div class="loading-container">
            <img src="./assets/icons/pokedex.svg" alt="">
            <p>loading...</p>
        </div>
    `;
}

function getSorry() {
    return `<div id="pokedex-empty-section" class="pokedex-empty-section">
                <p>nothing found...</p>
            </div>`;
}