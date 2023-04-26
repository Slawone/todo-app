import createRow from '../components/createRow.js';

const renderTodoList = (elem, arr) => {
  const allRow = arr.map((item, index) => createRow(item, index + 1));
  elem.append(...allRow);
  return allRow;
};

export default renderTodoList;
