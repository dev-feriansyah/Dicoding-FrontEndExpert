import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../scripts/nongkis';
import data from '../DATA.json';

// Set Nongkis
const content = document.querySelector('#content');
const nongkiListElement = document.createElement("nongki-list");
nongkiListElement.nongkis = data.restaurants;
content.appendChild(nongkiListElement);

// Navigation
const navigation = document.querySelector('#navigation');
const navigationBtn = document.querySelector('#navigation-btn');
const navList = document.querySelector('.nav__list a');

navigationBtn.addEventListener('click', event => {
    navigation.classList.toggle('nav-open');

    let isOpen = navigation.classList.contains('nav-open');
    let ariaExpanded = isOpen ? 'true' : 'false';
    navigationBtn.setAttribute('aria-expanded', ariaExpanded);
        
    if (isOpen) {
        setTimeout(() => {
            navList.focus();
        }, 500);
    }

    event.stopPropagation();
});


