import './styles/main.css';

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');

hamburgerButtonElement.addEventListener('click', event => {
    drawerElement.classList.toggle('open');
    hamburgerButtonElement.textContent = drawerElement.classList.contains('open') ? '✖' : '☰';
    event.stopPropagation();
});

