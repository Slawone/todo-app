import createTitle from '../components/createTitle.js';
import createForm from '../components/createForm.js';
import createTable from '../components/createTable.js';

const renderApp = (app) => {
  const title = createTitle(3, 'Список дел');
  const form = createForm();
  const table = createTable();

  app.append(title, form, table);

  return {
    form,
    table,
  };
};

export default renderApp;
