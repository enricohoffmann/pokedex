let currentPokemon;

function onDialogOpen(id) {
    toggleScrollOnBody();
    document.getElementById('detail-card-dialog').showModal();
    readDataForDetailCard(id);
}

function datailCardClose(event) {
    let dialog = document.getElementById('detail-card-dialog');
    if(event.target == dialog){
        dialog.close();
        toggleScrollOnBody();
    }
}

function toggleScrollOnBody() {
    document.getElementsByTagName('body')[0].classList.toggle('dialog-open');
}

function readDataForDetailCard(id) {
    currentPokemon = getPokemonByID(id);
    if(currentPokemon == null){
        dialog.close();
    }else{
        renderDetailCard();
    }
}

function renderDetailCard() {
    let dialogContainer = document.getElementById('detail-card-container');
    dialogContainer.innerHTML = "";
    dialogContainer.innerHTML += getDetailCard(currentPokemon);
    setDialogMainButtonActiv();
}

function setDialogMainButtonActiv() {
    let dialogMainButton = document.getElementById('detail-card-main-button');
    dialogMainButton.click();
    dialogMainButton.focus();
}

function detailCardNavButtonClick(navButtonName) {
    if(navButtonName === "main"){
        renderDetailCardDataSection(createMainTableWithValues());
    }else if(navButtonName === "stats"){
        renderDetailCardDataSection(createStatsTable());
    }
}

function renderDetailCardDataSection(dataElement) {
    let dataSection = document.getElementById('detail-card-data-section');
    dataSection.innerHTML = "";
    dataSection.innerHTML += dataElement;
}

function createMainTableWithValues() {
    let base_experienceValue = currentPokemon['base_experience'];
    let heightValue = Number.parseFloat(currentPokemon['height']) / 10;
    let weightValue = Number.parseFloat(currentPokemon['weight']) / 10;
    return getMainTable(heightValue, weightValue, base_experienceValue, currentPokemon['abilities']);
}

function createStatsTable() {
    return getStatsTable(createStatsTableRowsWithValues());
}

function createStatsTableRowsWithValues() {
    const statsArray = currentPokemon['stats'];
    let statsRows = "";
    for(let i = 0; i < statsArray.length; i++){
        let currentStat = statsArray[i];
        statsRows += getStatsTableRow(currentStat['name'], currentStat['base_stat']);
    }
   
    return statsRows;
}


