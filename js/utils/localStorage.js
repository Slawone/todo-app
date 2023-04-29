import {name} from '../app.js';
import renderTodoList from './renderTodoList.js';

export const getTodoData = () => (localStorage.getItem(name) ?
  JSON.parse(localStorage.getItem(name)) : []);

export const setTodoData = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));

  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
  renderTodoList(tbody, getTodoData());
};
