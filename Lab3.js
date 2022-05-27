// 1.	Организовать стек для 10 элементов.
//
// 2.	Организовать одномерный массив из 10 элементов
//
// 3.	Написать программу организации стека, занесения элементов одномерного
// массива в стек и извлечения их из стека.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let stack = {};

function injectionStack(array, stack1) {
  const element = array.pop();
  stack1[element] = element;
  return console.log(stack1, array, "injectionStack");
}

function extractionStack(stack1) {
  let first;
  for (i in stack1) {
    first = i;
  }
  delete stack1[first];
  return console.log(stack1, "extractionStack");
}

console.log(injectionStack(arr, stack));
console.log(injectionStack(arr, stack));
console.log(injectionStack(arr, stack));
console.log(extractionStack(stack));
console.log(extractionStack(stack));
