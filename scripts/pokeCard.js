
function onDialogOpen(id) {
    console.log(id);
    toggleScrollOnBody();
    document.getElementById('detail-card-dialog').showModal();

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