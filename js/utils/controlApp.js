const controlApp = (form) => {
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
  };

  controlForm(form);
};

export default controlApp;
