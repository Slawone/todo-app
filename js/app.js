import renderApp from './utils/renderApp.js';
import renderTodoList from './utils/renderTodoList.js';
import controlApp from './utils/controlApp.js';


const app = document.querySelector('.app-container');
app.classList.add('vh-100', 'w-100', 'd-flex',
    'align-items-center', 'justify-content-center', 'flex-column');

export const todoArray = [];

const init = () => {
  const {form, table} = renderApp(app);
  controlApp(form, table);

  renderTodoList(table, todoArray);
};

init();
