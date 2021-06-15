import 'regenerator-runtime';
import '../styles/main.css';
// Import all custom element
import './views/templates/index';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#navigation-btn'),
  drawer: document.querySelector('#navigation'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
