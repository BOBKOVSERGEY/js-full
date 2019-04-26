let inputRub = document.getElementById('rub');
let inputUsd = document.getElementById('usd');

// срабатывает при вводе
inputRub.addEventListener('input', function () {
  // главный объект для работы с ajax запросами
  let request = new XMLHttpRequest();

  // производим настройку нашего ajax запроса
  // принимает method, url, async, login, pass
  request.open('GET', 'current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  // открываем соединение и отпрвляем запрос на сервер
  request.send();

  // status - содержит http код ответа сервера
  // statusTest - содержит тектовое содержимое ответа
  // responseText / response
  // readyState - содержит текушее состояние запроса


  // loadStart

  // вещаем обработчик события на наш запрос
  request.addEventListener('readystatechange', function () {
    if (request.readyState === 4 && request.status == 200) {
      //console.log(request.response);
      // преобразум json формат в обычный объект
      let data = JSON.parse(request.response);

      inputUsd.value = inputRub.value / data.usd;
    } else {
      inputUsd.value = 'Что то пошло не так';
    }
  });

});