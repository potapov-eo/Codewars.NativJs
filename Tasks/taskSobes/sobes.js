//FACTORIAL

let factorial = (n) => {
    let res = 1
    for (let i = 2; i <= n; i++) {
        res = res * i
    }
    return res
}

let factorial2 = (n) => (n > 1) ? n * factorial(n - 1) : 1


function factorial1(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

//CASTOM SORT BUBLE

let sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let wasSwap = false;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true
            }
        }
        if (!wasSwap) break
    }
    return arr
}


let strrr = (str) => {
    return str.split("")
        .filter((el, i, arr) => arr.indexOf(el) !== arr.lastIndexOf(el))
        .reduce((acc, el) => {
                        acc[el] = (acc[el] || 0) + 1
            return acc
        }, {})
}