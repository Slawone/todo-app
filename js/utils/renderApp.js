import title from '../components/title.js';
import form from '../components/form.js';

const renderApp = (app) => {
  app.append(title(3, 'Список дел'));
  app.append(form());
};

export default renderApp;
