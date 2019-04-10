let box = document.querySelector('.box'),
    btn = document.querySelector('.btn');


// получаем ширину выбранного блока - padding и полосы прокрутки
let width = box.clientWidth;
let height = box.clientHeight;
console.log(width);
console.log(height);

// получаем полную ширину выбранного блока
let offsetWidth = box.offsetWidth;
let offsetHeight = box.offsetHeight;
console.log(offsetWidth);
console.log(offsetHeight);

// получаем полную ширину со скролом выбранного блока
let scrollWidth = box.scrollWidth;
let scrollHeight = box.scrollHeight;
console.log(scrollWidth);
console.log(scrollHeight);

btn.addEventListener('click', function() {
  //box.style.height = box.scrollHeight + 'px';
  
  box.scrollTop = 0;
});