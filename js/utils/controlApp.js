import createRow from '../components/createRow.js';

const controlApp = (form, table) => {
  const controlForm = (form) => {
    const {input, btnSubmit, btnReset} = form;

    input.addEventListener('input', e => {
      e.preventDefault();
      if (input.value.length > 0) {
        btnSubmit.disabled = false;
      } else {
        btnSubmit.disabled = true;
      }
    });

    btnReset.addEventListener('click', () => {
      btnSubmit.disabled = true;
    });

    form.addEventListener('submit', e => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const newContact = Object.fromEntries(formData);

      const newRow = createRow(newContact);

      table.tbody.append(newRow);

      form.reset();
      btnSubmit.disabled = true;
    });
  };

  controlForm(form);
};

export default controlApp;
