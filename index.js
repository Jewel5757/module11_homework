//Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.

export function getPercents(percent, number) {
  let result;
  if ((!isNaN(percent))&&(!isNaN(number))){
    result = number/100*percent;
  } else {
    result = 'введите число';
  }
  return result;
}



