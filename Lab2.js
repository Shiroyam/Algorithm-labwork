//1.	Организовать одномерный массив из 10 элементов.
//
//2.	Написать программу поиска минимального элемента этого массива,
//      использовав любой из рассмотренных методов.

const arr = [1, 2, 3, -4, 5, 6, -9, 8, 10];

function searchMin(array) {
  let min = 9999;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } 
  }
  return min;
}

console.log(searchMin(arr));
