const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex',
      'align-items-start', 'flex-column', 'mb-3');

  const label = document.createElement('label');
  label.classList.add('form-group', 'me-3', 'mb-0');

  const input = document.createElement('input');
  input.type = 'text';
  input.classList.add('form-control');
  input.name = 'formInput';
  input.placeholder = 'Ввести задачу';

  const error = document.createElement('div');
  error.classList.add('error');
  error.textContent = 'Строка не должна начинаться с пробела!';
  error.style.display = 'none';
  error.style.color = 'red';

  const btnSubmit = document.createElement('button');
  btnSubmit.type = 'submit';
  btnSubmit.classList.add('btn', 'btn-primary', 'me-3');
  btnSubmit.textContent = 'Сохранить';
  btnSubmit.disabled = true;

  const btnReset = document.createElement('button');
  btnReset.type = 'reset';
  btnReset.classList.add('btn', 'btn-warning');
  btnReset.textContent = 'Очистить';

  const formWrapper = document.createElement('div');
  formWrapper.classList.add('d-flex', 'align-items-start');

  label.append(input);
  formWrapper.append(label, btnSubmit, btnReset);
  form.append(formWrapper, error);

  form.input = input;
  form.error = error;
  form.btnSubmit = btnSubmit;
  form.btnReset = btnReset;

  return form;
};

export default createForm;
