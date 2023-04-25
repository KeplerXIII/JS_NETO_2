function simpleNumbersFinder(quantity) {
    
    let simpleNumbers = []
    let currentNumber = 3
    quantity = Number(quantity)

    if (quantity >= 1) {
        simpleNumbers.push(2)
    }
    
    for (currentNumber;simpleNumbers.length < quantity;currentNumber+=2) {
        let checkArray = simpleNumbers.map(x => currentNumber % x)

        if (checkArray.includes(0)) {
            continue
        }
        else {
            simpleNumbers.push(currentNumber)
        }
    }

    return simpleNumbers
}

console.log(simpleNumbersFinder(process.argv[2]))
