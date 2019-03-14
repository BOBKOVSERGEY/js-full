let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');
//console.log(btn);

btn[0].addEventListener('click', function(event) {
  let target = event.target;
  //target.style.display = 'none';
  console.log(event);
  console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});


/*btn[0].addEventListener('mouseenter', function(e) {
  console.log('вы навели на первую кнопку');
});

btn[0].addEventListener('mouseleave', function(e) {
  console.log('вы убрали курсор с первой кнопки');
});*/

wrap.addEventListener('click', function(event) {
  console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

link.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

// item - это каждая кнопка которая есть на странице
btn.forEach(function(item, i) {
  item.addEventListener('mouseleave', function() {
    console.log('Мы вышли с кнопки ' + (i+1));
  });
}) ;
