import {getPercents}  from './index.js';

// Успешное выполнение функции

test ('calculate percent from number(percent, number)', () => {
	expect(getPercents(50, 500)).toBe(250);
}); 

//Неуспешное выполнение функции. Получено значение "300", хотя 50% от 400 = 200

xtest ('calculate percent from number(percent, number)', () => {
	expect(getPercents(50, 400)).toBe(300);
}); 

//unit-тесты

describe('calculate percent from number(percent, number)', () => {
	it('function that counts percentages of a given number', () => {
	  expect(getPercents(50, 100)).toBe(50);
	  expect(getPercents(100,100)).toBe(100);
	  expect(getPercents(20,200)).toBe(40);
	});
  }); 


  //корнер- кейс, когда пользователь ввел не число
test ('entering not a number but its ok (percent, number)', () => {
	expect(getPercents('уруру', 400)).toBe('введите число');
}); 

//неуспешный корнер-кейс
xtest ('entering not a number (percent, number)', () => {
	expect(getPercents('уруру', 400)).toBe(101);
}); 



