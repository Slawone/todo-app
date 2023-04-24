const createTable = () => {
  const tableWrapper = document.createElement('div');
  tableWrapper.classList.add('table-wrapper');

  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');

  const thead = document.createElement('thead');
  thead.insertAdjacentHTML('beforeend', `
    <tr>
      <th>№</th>
      <th>Задача</th>
      <th>Статус</th>
      <th>Действия</th>
    </tr>
  `);

  const tbody = document.createElement('tbody');

  table.append(thead, tbody);
  tableWrapper.append(table);

  tableWrapper.tbody = tbody;

  return tableWrapper;
};

export default createTable;
