import createTitle from '../components/title.js';
import createForm from '../components/form.js';

const renderApp = (app) => {
  const title = createTitle(3, 'Список покупок');
  const form = createForm();

  app.append(title, form);

  return {
    form,
  };
};

export default renderApp;
