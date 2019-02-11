let arr = [
  1,
  2,
  3,
  4,
  5,
  'one',
  'two'
];

//удаляем элемент с конца
//arr.pop();

//добавляем элент в конец
//arr.push('5');

// удвляет первый элемент из массива
//arr.shift();

// добавляет элемент в начало
//arr.unshift('1');

//console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// item - сам элемент
// index - номер элемента
// array - сам массив
arr.forEach((item, index, array) => {
  console.log('Номер элемента -' + index + ': значение -' + item + ' массив ' + array);
});

let mass = [
  1,3,4,6,7
];

for (let key of mass) {
  console.log(key);
}


let answer = prompt("", ""),
    arrAnswer = [];
// пришедшие данный разюиваем по запятой
arrAnswer = answer.split(',');
console.log(arrAnswer);


let joinArr = ['one', 'two', 'three', 'four', 'five', 'six'],
// формируем из массива строку через запятую
    elementS = joinArr.join(','),
    elementSort = joinArr.sort();
    console.log(joinArr);
    console.log(elementS);


    // сортировка чисел
let numArray = [1, 15, 5, 2, 7, 3], 
  numSort = numArray.sort(compareNum);
console.log(numArray);
function compareNum(a,b) {
  return a-b;
}




