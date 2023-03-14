// 1 - list of types of coins
//     --> store coins in array?
//         --> order from largest to smallest

// 2 - input for given number
//     --> function parameter

// 3 - do some maths
//     3a - working out what coins will fit
//         --> loop that checks the largest value that will fit

//     3b - get to given number (add them all up)
//         --> keep running total < number

// 4 - output - list of coins to make given number
//     --> return list of coins
//         --> as string, showing multiples of each coin value used

coinDenominations = [100, 25, 10, 5, 1]

const coinConverter = (number) => {
    for (i = 0; i <= coinDenominations.length-1; i++) {
        let currentValue = []
        // if (currentValue < number) {

        // }
        currentValue = number - coinDenominations[i]
console.log('what is the current value? -', currentValue)
    }

}
coinConverter(101)
