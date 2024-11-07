var menuknop = document.querySelector('button');
var menulijst = document.querySelector('ul');

function toonMenu() {
 menulijst.classList.toggle('toonMenu');
}

menuknop.addEventListener('click', toonMenu);

