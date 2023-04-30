import renderTodoPage from '../utils/renderTodoPage.js';
import {todoArray} from '../app.js';
import {setTodoData} from './localStorage.js';
import {name} from '../app.js';

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

      const random = Math.random().toString().substring(2, 10);

      const formData = new FormData(e.target);
      const newContact = Object.fromEntries(formData);

      newContact.id = random;
      newContact.finished = false;

      renderTodoPage(newContact, table.tbody);

      todoArray.push(newContact);

      setTodoData(name, todoArray);

      form.reset();
      btnSubmit.disabled = true;
    });
  };

  const controlTable = (table) => {
    table.addEventListener('click', e => {
      const tr = e.target.closest('.todo');
      if (e.target.closest('.btn-del')) {
        e.target.closest('.todo').remove();

        for (let i = 0; i < todoArray.length; i += 1) {
          const item = todoArray[i];
          if (item.id === tr.dataset.id) {
            todoArray.splice(i, 1);
          }
        }
      }
      setTodoData(name, todoArray);
    });

    table.addEventListener('click', e => {
      const tr = e.target.closest('.todo');
      if (e.target.closest('.btn-end')) {
        todoArray.forEach(item => {
          if (item.id === tr.dataset.id) {
            item.finished = true;
          }
        });
      }
      setTodoData(name, todoArray);
    });
  };

  controlForm(form);
  controlTable(table);
};

export default controlApp;
