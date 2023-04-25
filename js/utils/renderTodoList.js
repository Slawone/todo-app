import createRow from '../components/createRow.js';

const renderTodoList = (elem, arr) => {
  const allRow = arr.map(createRow);
  elem.append(...allRow);
  return allRow;
};

export default renderTodoList;
