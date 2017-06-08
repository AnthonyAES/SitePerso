//Polyfill du foreach
if (NodeList.prototype.forEach === undefined) {
    NodeList.prototype.forEach = function(callback) {
        [].forEach.call(this, callback);
    }
}

var links = document.querySelectorAll('div.p-box a')

function closeDialog() {
    var popupModal = document.querySelector('.default-popup');
    Avgrund.hide();
    popupModal.id = 'default-popup';
}

var createModal = function(id){
    var popupModal = document.querySelector('.default-popup');
    var newPopup = popupModal.id + id;
    var imgModal = document.querySelector('aside img');
    var linkImg = document.querySelector('aside a');
    imgModal.src = 'images/portfolio/modal/' + id + '.png';
    linkImg.href = 'images/portfolio/modal/' + id + '.png';
    popupModal.id = newPopup;
}

links.forEach(function (link) {
    link.addEventListener('click', function openDialog() {
        var id = this.id.replace('modal-', '');
        var titleModal = document.querySelector('a#modal-'+id+' h2.titres').innerText;
        console.log(titleModal);
        createModal(id);
        var h2Modal = document.querySelector('.default-popup h2');
        h2Modal.innerText = titleModal;
        Avgrund.show( "#default-popup" + id );
    });
});