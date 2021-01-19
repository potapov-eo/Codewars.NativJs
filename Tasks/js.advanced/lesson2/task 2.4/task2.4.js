// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

function superSum(a){
   if (a===0)return 0

      let arr=[]

    function helper (...args){
      arr=[...arr,...args]
       debugger
      if (arr.length>=a) {
         arr.length=a
         debugger
        return  arr.reduce((acc,num)=>acc+num)
      } else
      return helper
   }
   return helper
}

console.log(superSum(3)(2)(5,3));

