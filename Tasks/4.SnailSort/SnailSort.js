/*
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:
         [[1,2,3,4,5],
          [1,2,3,4,5],
          [1,2,3,4,5],
          [1,2,3,4,5],
          [7,6,5,4,3]]

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/
snail = function (array) {
    if (array[0] == 0) {
        return []
    }
    let HelperFn = (arrs, arr) => {
        if (arrs.length === 1) {
            return arr.concat(arrs[0][0])
        }
        if (arrs.length === 0) {
            return arr
        }
        if (Array.isArray(arrs[0])) {
            arr = [...arr, ...arrs[0]]
        }
        for (let i = 1; i < arrs.length - 1; i++) {
            arr.push(arrs[i][arrs.length - 1])
        }
        arr = [...arr, ...arrs[arrs.length - 1].reverse()]
        for (let i = arrs.length - 2; i > 0; i--) {
            arr.push(arrs[i][0])
        }
        let nextArr = []
        for (let i = 1; i < arrs.length - 1; i++) {
            nextArr.push(arrs[i].slice(1, arrs.length - 1))
        }
        return HelperFn(nextArr, arr)
    }
    return HelperFn(array, [])
}
console.log(snail([[1, 2, 3],
    [8, 11, 4],
    [7, 6, 5]]))
//console.log(snail([[]])=== [])
//console.log(snail([[1]]), [1])
//console.log(snail(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22,
// 23, 24, 25]])=== [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]))
//console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9],
// [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]])=== [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36])
