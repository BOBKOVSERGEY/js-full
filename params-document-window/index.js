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

// получаем все данные по элементу - 4 параметра
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().left);

btn.addEventListener('click', function() {
  //box.style.height = box.scrollHeight + 'px';
  
  box.scrollTop = 0;
});


// получаем ширину документа
console.log(document.documentElement.clientWidth);

// получаем высоту документа
console.log(document.documentElement.clientHeight);

// получаем значение на сколько я прокрутил от верха
console.log(document.documentElement.scrollTop);

// этот код будет прокручивать страницу в самое начало
// -- document.documentElement.scrollTop = 0;


// проскролить сверху
//scrollBy(0, 200);

// перемещаемся по страинце
//scrollTo(0, 200);