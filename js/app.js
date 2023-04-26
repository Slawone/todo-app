import renderApp from './utils/renderApp.js';
import renderTodoList from './utils/renderTodoList.js';
import controlApp from './utils/controlApp.js';
import {getTodoData} from './utils/localStorage.js';


const app = document.querySelector('.app-container');
app.classList.add('vh-100', 'w-100', 'd-flex',
    'align-items-center', 'justify-content-center', 'flex-column');

export const name = prompt('Введите ваше имя');

export const todoArray = getTodoData(name);

// localStorage.clear();

const init = () => {
  const {form, table} = renderApp(app, name);
  controlApp(form, table);

  renderTodoList(table.tbody, todoArray);
};

init();
