let currentPokemon;
let myCurrentViewList = [];

function onDialogOpen(id) {
    toggleScrollOnBody();
    document.getElementById('detail-card-dialog').showModal();
    myCurrentViewList = currentResultList.length > 0 ? currentResultList : myPokemonList;
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
    dialogMainButton.classList.add('active');
    dialogMainButton.click();
    
}

function detailCardNavButtonClick(navButtonName) {
    if(navButtonName === "main"){
        renderDetailCardDataSection(createMainTableWithValues());
    }else if(navButtonName === "stats"){
        renderDetailCardDataSection(createStatsTable());
    }
    toggleDetailCardNavButton(navButtonName);
}

function toggleDetailCardNavButton(buttonName) {
    if(buttonName === "main"){
        addClassToNavButton('detail-card-main-button', 'active');
        removeClassFromButton('detail-card-stats-button', 'active');
    }else{
        addClassToNavButton('detail-card-stats-button', 'active');
        removeClassFromButton('detail-card-main-button', 'active');
    }
}

function addClassToNavButton(buttonID, classname) {
    let button = document.getElementById(buttonID);
    if(!button.classList.contains(classname)){
        button.classList.add(classname);
    }
}

function removeClassFromButton(buttonID, classname) {
    let button = document.getElementById(buttonID);
    if(button.classList.contains(classname)){
        button.classList.remove(classname);
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

function oneStepInPokemonArrayBack(){
    let newID;
    let indexOfCurrentPokemon = myCurrentViewList.indexOf(currentPokemon);
    
    if(indexOfCurrentPokemon - 1  < 0){
        newID = myCurrentViewList[myCurrentViewList.length-1]['id'];
    }else{
        newID = myCurrentViewList[indexOfCurrentPokemon -1]['id'];
    }
   
    readDataForDetailCard(newID);
}

function oneStepInPokemonArrayForward() {
    let newID;
    let indexOfCurrentPokemon = myCurrentViewList.indexOf(currentPokemon);

    if(indexOfCurrentPokemon + 1 > myCurrentViewList.length - 1){
        newID = myCurrentViewList[0]['id'];
    }else{
        newID = myCurrentViewList[indexOfCurrentPokemon+1]['id'];
    }

    readDataForDetailCard(newID);
}

