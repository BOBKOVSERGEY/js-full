// тернарный оператор
let num = 50;
(num == 50) ? console.log('верно') : console.log('неверно');

//если участвует одно условие то унарный инкремент или  декремент
//если участвует два условия то бинарный
//если участвует три условия то тернарный 

switch(num) {
  case num < 49:
    console.log('Неверно');
    break;
  case num > 100:
    console.log('Много');
    break;
  case num > 80:
    console.log('Все еще много');
    break;
  case 50:
    console.log('Верно');
    break;
  default:
    console.log('Something wrong');
    break;
}