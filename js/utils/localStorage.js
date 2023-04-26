import {name} from '../app.js';

export const getTodoData = () => (localStorage.getItem(name) ?
  JSON.parse(localStorage.getItem(name)) : []);

export const setTodoData = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};
