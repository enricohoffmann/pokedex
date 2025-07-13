
function onDialogOpen(id) {
    console.log(id);
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
    let pokemon = getPokemonByID(id);
    if(pokemon == null){
        dialog.close();
    }else{
        renderDetailCard(pokemon)
    }
}

function renderDetailCard(pokemon) {
    let dialogContainer = document.getElementById('detail-card-container');
    //dialogContainer.innerHTML = "";

}