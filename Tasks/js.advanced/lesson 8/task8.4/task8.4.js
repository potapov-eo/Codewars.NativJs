 /*Task 04
Реализуйте функцию генерации чисел Фибоначчи до бесконечности*/


 function* generateDuble() {
    let i = 0
    let j = 1
    while (i >=0) {
       yield  (i + j)
       let z = j
       j = i + j
       i = z

    }
 }

 let iterator = generateDuble()
 console.log(iterator.next().value)
 console.log(iterator.next().value)
 console.log(iterator.next().value)
 console.log(iterator.next().value)
 console.log(iterator.next().value)
 console.log(iterator.next().value)
 console.log(iterator.next().value)
 console.log(iterator.next().value)



 /*for (let i of iterator) {
     console.log(i)
 }*/