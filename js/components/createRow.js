const createRow = (obj) => {
  const tr = document.createElement('tr');
  tr.classList.add('table-light');

  const tdId = document.createElement('td');
  tdId.textContent = 1;

  const tdTask = document.createElement('td');
  tdTask.classList.add('task');
  tdTask.textContent = obj.formInput;

  const tdStatus = document.createElement('td');
  tdStatus.classList.add('status');
  tdStatus.textContent = 'В процессе';

  const tdActions = document.createElement('td');

  const btnDanger = document.createElement('button');
  btnDanger.classList.add('btn', 'btn-danger', 'me-3');
  btnDanger.textContent = 'Удалить';

  const btnSuccess = document.createElement('button');
  btnSuccess.classList.add('btn', 'btn-success');
  btnSuccess.textContent = 'Завершить';

  tdActions.append(btnDanger, btnSuccess);

  tr.append(tdId, tdTask, tdStatus, tdActions);

  tr.tdTask = tdTask;
  tr.btnSuccess = btnSuccess;

  return tr;
};

export default createRow;
