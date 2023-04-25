import createRow from '../components/createRow.js';

const renderTodoPage = (todo, list) => {
  list.append(createRow(todo));
};

export default renderTodoPage;
