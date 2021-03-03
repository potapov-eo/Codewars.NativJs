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



/*for (let i of iterator) {
    console.log(i)
}*/


