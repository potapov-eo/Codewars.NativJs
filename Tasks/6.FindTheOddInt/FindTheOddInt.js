/*Given an array of integers, find the one that appears an odd number of times.
    There will always be only one integer that appears an odd number of times.

    Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.
    Всегда будет только одно целое число, которое встречается нечетное количество раз.*/

function findOdd(arr) {
let res=arr[0]
   arr.forEach((num)=>{
     if ( arr.filter((n)=>n===num).length % 2 !== 0 ){
        res= num
     }
  })
   return res
}
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))

