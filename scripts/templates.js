function getPokemonCard(pokemon) {
    return `
        <div class="pokedex-card" onclick="onDialogOpen(${pokemon['id']})">
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


function getDetailCard(pokemon) {
    return `
    <div class="detail-card-header">
            <p>#${pokemon['id']}</p>
            <p>${pokemon['name']}</p>
        </div>
        <div class="detail-card-body ${pokemon['types'][0]['type']['name']}">
            <img src="${pokemon['imgPath']}" alt="Image from pokemon: ${pokemon['name']}">
        </div>
        <div class="detail-card-footer">
            ${getTypeLogos(pokemon['types'])}
        </div>
        <nav class="detail-card-nav">
            <button id="detail-card-main-button" type="button" class="dialog-nav-btn" onclick="detailCardNavButtonClick('main')" >main</button>
            <button type="button" class="dialog-nav-btn" onclick="detailCardNavButtonClick('stats')">stats</button>
        </nav>
        <section id="detail-card-data-section" class="detail-card-data-section">
        </section>
    `;
}

function getMainTable(heightValue, weightValue, experianceValue, abilitiesValue) {
    return `
        <table class="detail-card-main-table">
            <tr>
                <td>Height</td>
                <td>:</td>
                <td>${heightValue} m</td>
            </tr>
            <tr>
                <td>Weight</td>
                <td>:</td>
                <td>${weightValue} kg</td>
            </tr>
            <tr>
                <td class="table-main-col-1">Base experience</td>
                <td>:</td>
                <td>${experianceValue}</td>
            </tr>
            <tr>
                <td>Abilities</td>
                <td>:</td>
                <td>${abilitiesValue}</td>
            </tr>
        </table>
    `;
}

function getStatsTable(statsData) {
    return `
        <table class="detail-card-stats-table">
            <tbody>
                ${statsData}
            </tbody>
        </table>
    `;
}




function getStatsTableRow(statsName, statsValue) {
    return `
    <tr>
        <td>${statsName}</td>
        <td class="table-progress-bar">
            <div class="meter red nostripes">
                <span style="width: ${statsValue}%"></span>
            </div>
        </td>
    </tr>
    `;
}

