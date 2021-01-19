function customFlat(a) {
    let acc = []

    function helper(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (!Array.isArray(arr[i])) {
                acc = [...acc, arr[i]]
            } else helper(arr[i])
        }
        return acc
    }

    return helper(a)

}

console.log(customFlat([1, [2, 2], 5, 8, [11, 11, 11]]))