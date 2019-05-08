// записываем данные
//localStorage.setItem('number','1');

// получаем данные по ключу
//console.log(localStorage.getItem('number'));

// удаляем о ключу
//localStorage.removeItem('number');


// очищаем полностью хранилище
//localStorage.clear();

window.addEventListener('DOMContentLoaded', function () {
  let checkbox = document.getElementById('rememberMe'),
      change = document.getElementById('change'),
      box = document.querySelector('.box');

  if (localStorage.getItem('isChecked') === 'true') {
    checkbox.checked = true;
  }

  if (localStorage.getItem('bg') === 'changed') {
    box.style.background = 'orangered';
  }

  checkbox.addEventListener('click', function () {
    if (localStorage.getItem('isChecked') === 'true') {
      localStorage.setItem('isChecked', false);
    } else {
      localStorage.setItem('isChecked', true);
    }
  });

  change.addEventListener('click', function () {
    localStorage.setItem('bg', 'changed');
    box.style.background = 'orangered';
  });

  let persone = {
    name: 'Alex',
    age: 25,
    tech: [
      'mobile',
      'notebook'
    ]
  };

  let serializePersone = JSON.stringify(persone);

  localStorage.setItem('alex', serializePersone);

  console.log(JSON.parse(localStorage.getItem('alex')));

});

