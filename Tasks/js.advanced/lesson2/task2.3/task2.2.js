// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter(a){
   let count = 0
   return ()=>count++
}


const counter = makeCounter()
const counter2 = makeCounter()
counter()
counter()
counter2()
counter()
console.log("1.2.1.3")
