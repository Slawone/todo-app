import renderApp from './utils/renderApp.js';
import controlApp from './utils/controlApp.js';

const app = document.querySelector('.app-container');
app.classList.add('vh-100', 'w-100', 'd-flex',
    'align-items-center', 'justify-content-center', 'flex-column');

const init = () => {
  renderApp(app);
  controlApp();
};

init();
