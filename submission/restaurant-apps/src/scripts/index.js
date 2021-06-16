import 'regenerator-runtime';
import '../styles/main.css';
// Import all custom element
import './views/templates/index';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('#main-content'),
});

const AppHeader = document.querySelector('app-header');

window.addEventListener('hashchange', () => {
  app.renderPage();
  AppHeader.closeDrawer();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
