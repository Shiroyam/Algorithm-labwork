//1.	Организовать одномерный массив из 10 элементов.
//      (Конкретные значения можно взять произвольно).
//
//2.	Написать программу сортировки этого массив по возрастанию,
//      использовав любой из рассмотренных методов.

let arr = [1, 3, 2, 4, 0, -1, 7, 8, 9, 10];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

console.log(selectionSort(arr));
