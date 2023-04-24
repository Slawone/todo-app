const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex',
      'align-items-center', 'mb-3');

  const label = document.createElement('label');
  label.classList.add('form-group', 'me-3', 'mb-0');

  const input = document.createElement('input');
  input.type = 'text';
  input.classList.add('form-control');
  input.name = 'form-input';
  input.placeholder = 'Ввести задачу';

  const btnSubmit = document.createElement('button');
  btnSubmit.type = 'submit';
  btnSubmit.classList.add('btn', 'btn-primary', 'me-3');
  btnSubmit.textContent = 'Сохранить';
  btnSubmit.disabled = true;

  const btnReset = document.createElement('button');
  btnReset.type = 'reset';
  btnReset.classList.add('btn', 'btn-warning');
  btnReset.textContent = 'Очистить';

  label.append(input);
  form.append(label, btnSubmit, btnReset);

  form.input = input;
  form.btnSubmit = btnSubmit;
  form.btnReset = btnReset;

  return form;
};

export default createForm;
