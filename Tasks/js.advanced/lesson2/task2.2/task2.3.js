// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounter(a) {
   let count = a
   return {
      increase() {
         return ++count
      },
      decrease() {
         return --count
      },
      reset() {
         return count = 0
      },
      set(z) {
         return count = z
      },

   }
}

const counter = makeCounter(5)
const counter2 = makeCounter(22)

console.log(counter.increase())
console.log(counter.decrease())
console.log(counter.set(8))
console.log(counter.reset())
console.log(counter.increase())

console.log(counter2.increase())
console.log(counter2.decrease())

