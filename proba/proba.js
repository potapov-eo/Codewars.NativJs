


let arrayToNumber = (number) => {
    let arr = []
    for (let i = 1; i <= number; i++) {
        arr.push(i)
    }
    return arr
}
let arr = arrayToNumber(10)

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


