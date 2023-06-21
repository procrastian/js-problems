// Create your own method for generating a random number between two other numbers.

//dice type array

const Dice = [2, 4, 6, 8, 10, 12, 20, 100]

// generate random number
function random(min, max) {
    return Math.floor(Math.random() * (max-min) + min)
}
console.log( Dice)

//input die type + call random generator
function roll(diceType) {
    return random(1, diceType)
}


