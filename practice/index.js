//'use strict';

let money, time;


startBtn.addEventListener('click', function() {
  
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  money = prompt('Ваш бюджет на месяц?', '');

  // проверяем наш доход что бы он был числом
  while (isNaN(money) || money == '' || money == null) {
    money = prompt('Ваш бюджет на месяц?', '');
  }

  // зафиксировали бюджет в нашем глобальном объекте
  appData.budget = money;

  // зафиксировали время в нашем глобальном объекте
  appData.timeData = time;

  // записываем на бюджет в поле 
  budgetValue.textContent = money.toFixed();

});



let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
          b = prompt('Во сколько обойдется', '');
        // проверка типа данных
        if (typeof(a) === 'string' && typeof(a) != null  && typeof(b) != null && a != '' && b != '' && a.length < 50) {
          console.log('Done');
          appData.expenses[a] = b;
        } else {
           i = i - 1;
        }
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt('Какова сумма накоплений?'),
          percent = +prompt('Под какой процент?');
  
      appData.monthIncome = save/100/12 * percent;
  
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseIncome: function() {
    let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
    appData.income = items.split(', ');
    appData.income.push(prompt('Может что то еще?'));
    appData.income.sort();
  }
};
