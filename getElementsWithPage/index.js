let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    btns = document.querySelectorAll('.btn'),
    wrapperBtn = document.querySelector('.wrapper-btn');

box.style.backgroundColor = '#000';
btn[1].style.borderRadius = '100%';

for (let i = 0; i< btn.length; i++) {
  btn[i].style.border = 'none';
  btn[i].style.width = '100px';
  btn[i].style.height = '100px';
}

btns.forEach(function(selfitem, i, selfarray) {
  selfitem.style.backgroundColor = 'red';
  //console.log(selfitem);
  //console.log(i);
  //console.log(selfarray);
});

// создаем div элемент 
let div = document.createElement('div'),
    // создаем текст
    text = document.createTextNode('some text');

    // присваиваем клас
div.classList.add('black');

// возьмем наш див и добавим его в конец body 
//document.body.appendChild(div);

// appendChild - добавление в конец элемента
//wrapperBtn.appendChild(div);

// вставляется перед указываемм элементом
document.body.insertBefore(div, wrapperBtn);

// удаление элемента со страницы
document.body.removeChild(box);

// замена 6 элемена вторым
wrapperBtn.replaceChild(btns[1], btns[5]);

//div.innerHTML = '<p>Hello, world</p>';
div.textContent = 'new';



console.log(div);