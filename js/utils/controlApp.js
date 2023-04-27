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

      console.log(random);

      const formData = new FormData(e.target);
      const newContact = Object.fromEntries(formData);

      newContact.num = todoArray.length + 1;
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
      const formInput = e.target.closest('.todo').tdTask.textContent;
      if (e.target.closest('.btn-del')) {
        e.target.closest('.todo').remove();

        for (let i = 0; i < todoArray.length; i += 1) {
          const item = todoArray[i];
          if (item.formInput === formInput) {
            todoArray.splice(i, 1);
          }
        }
      }
      setTodoData(name, todoArray);
    });

    table.addEventListener('click', e => {
      const tr = e.target.closest('.todo');
      const tdTask = e.target.closest('.todo').tdTask;
      const tdStatus = e.target.closest('.todo').tdStatus;
      if (e.target.closest('.btn-end')) {
        tr.classList.remove('table-light');
        tr.classList.add('table-success');
        tdTask.classList.remove('task');
        tdTask.classList.add('text-decoration-line-through');
        tdStatus.textContent = 'Завершен';
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
