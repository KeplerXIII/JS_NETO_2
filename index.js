function defaultFunction(quantity) {
    
    let simpleNumbers = []
    let currentNumber = 3
    quantity = Number(quantity)

    if (quantity >= 1) {
        simpleNumbers.push(2)
    }

    while(simpleNumbers.length < quantity) {
        if (
            (currentNumber % simpleNumbers[0] != 0) && 
            (currentNumber % simpleNumbers[1] != 0) && 
            (currentNumber % simpleNumbers[2] != 0) && 
            (currentNumber % simpleNumbers[3] != 0)) {
            simpleNumbers.push(currentNumber)
        }
        currentNumber += 2
    }
    
    return simpleNumbers
}

console.log(defaultFunction(process.argv[2]))