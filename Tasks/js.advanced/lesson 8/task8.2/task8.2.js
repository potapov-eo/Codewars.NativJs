// Task 02
// Наишите функцию-генератор, которая генерирует числа в диапазоне от start до end.
function *generate (start, end){
   let i=1
   while (i>0)
   {
      yield start+(end - start)* Math.random()
   }
}
let iterator=generate(20,30)
console.log(iterator.next().value)
console.log(iterator.next().value)