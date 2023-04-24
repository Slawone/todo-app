const form = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex',
      'align-items-center', 'mb-3');

  const label = document.createElement('label');
  label.classList.add('form-group', 'me-3', 'mb-0');

  const input = document.createElement('input');
  input.type = 'text';
  input.classList.add('form-control');
  input.name = 'input';
  input.placeholder = 'Ввести задачу';

  label.append(input);
  form.append(label);

  return form;
};

export default form;
