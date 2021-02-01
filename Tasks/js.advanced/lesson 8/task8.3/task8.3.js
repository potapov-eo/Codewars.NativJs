// Task 03
// Создать массив из чисел от 1 до 1000.
// Реализовать функцию-генератор для формирования всех пар из этого массива.
// Результат [1, 1], [1, 2], ..., [2, 1], [2, 2], ..., [1000, 1000]

let arrayToNumber = (number) => {
   let arr = []
   for (let i = 1; i <= number; i++) {
      arr.push(i)
   }
   return arr
}
let arr = arrayToNumber(100)

function* generateDuble(arr) {
   let i = 0
   let j = 0
   while (i < arr.length) {
      while (j < arr.length) {
         yield [arr[i], arr[j]]
         ++j
      }
      ++i
      j = 0
   }
}

let iterator = generateDuble(arr)


for (let i of iterator){
   console.log(i)
}
