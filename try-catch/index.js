try {
  console.log('Normal');
  console.log(a);
  console.log('Result');
} catch (error) {
  //console.log(error);
  console.log(error.name); // имя ошибки
  console.log(error.message); // сообщение об ошибке
  console.log(error.stack); // набор вызовов которые привели к ошибке
  console.log(`Мы получили ошибку ${error.name}`);
} finally {
  console.log('Я выполнюсь всегда');
}

console.log('yet Result');