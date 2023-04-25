function defaultFunction(n) {
    let simpleNumbers = []
    let i = 3
    n = Number(n)
    if (n === 1) {
        simpleNumbers.push(2)
    }

    while(simpleNumbers.length < n) {
        if ((i % 2 != 0)) {
            simpleNumbers.push(i)
        }
        i += 2
    }
    
    return simpleNumbers
}

console.log(defaultFunction(process.argv[2]))