// Déclaration des variables
var pIv = document.querySelector('#p-iv');
var pWd = document.querySelector('#p-webd');
var pSw = document.querySelector('#p-sitew');
        
var btnAll = document.querySelector('.btnall');
var btnIv = document.querySelector('.btniv');
var btnWd = document.querySelector('.btnwd');
var btnSw = document.querySelector('.btnsw');
        
// Ajout d'un écouteur d'évenements au boutons
btnAll.addEventListener('click', showAll);
btnIv.addEventListener('click', onlyIv);
btnWd.addEventListener('click', onlyWd);
btnSw.addEventListener('click', onlySw);
        
// Déclaration des fonctions
function showAll() {
    pIv.classList.remove('dontshow');
    pWd.classList.remove('dontshow');
    pSw.classList.remove('dontshow');
    
    btnIv.classList.remove('active2');
    btnAll.classList.add('active2');
    btnWd.classList.remove('active2');
    btnSw.classList.remove('active2');
}

function onlyIv() {
    pIv.classList.remove('dontshow');
    pWd.classList.add('dontshow');
    pSw.classList.add('dontshow');
    
    btnIv.classList.add('active2');
    btnAll.classList.remove('active2');
    btnWd.classList.remove('active2');
    btnSw.classList.remove('active2');
}

function onlyWd() {
    pIv.classList.add('dontshow');
    pWd.classList.remove('dontshow');
    pSw.classList.add('dontshow');
    
    btnIv.classList.remove('active2');
    btnAll.classList.remove('active2');
    btnWd.classList.add('active2');
    btnSw.classList.remove('active2');
}

function onlySw() {
    pIv.classList.add('dontshow');
    pWd.classList.add('dontshow');
    pSw.classList.remove('dontshow');
    
    btnIv.classList.remove('active2');
    btnAll.classList.remove('active2');
    btnWd.classList.remove('active2');
    btnSw.classList.add('active2');
}