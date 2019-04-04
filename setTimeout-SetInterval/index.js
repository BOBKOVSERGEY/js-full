//setTimeout(func, delay, arg);
//let timerId = setTimeout(sayHello, 5000);

// останавливаем выполнение setTimeout
//clearTimeout(timerId);

// функция будет повторяться каждый раз через 3 s
//let timerId = setInterval(sayHello, 3000);
//останавливаем выполнение setInterval
//clearTimeout(timerId);
//function sayHello() {
 // console.log('Hello world');
//}

// рекурсивный вызов setTimeout
/*let timerId = setTimeout(function log() {
  console.log('Hello world');
  setTimeout(log, 2000);
});*/
let btn = document.querySelector('.btn-animate'),
    elem = document.querySelector('.big-small');

function myAnimation() {
  let pos = 0;

  let id = setInterval(frame, 10);
  // кадр
  function frame () {
    if (pos == 400) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);


let btnBlock = document.querySelector('.wrapper-btn'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
  /*if (event.target && event.target.tagName == 'BUTTON') {
    console.log('btn');
  }*/
  // если по клику на элемен он содержит класс first 
  /*if (event.target && event.target.classList.contains('first')) {
    console.log('btn');
  }*/

  // ищем совпадения 
  if (event.target && event.target.matches('button.first')) {
    console.log('btn');
  }
});