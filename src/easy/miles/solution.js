// 1 - have conversion ratio 1.6km = 1 mile
//     --> function takes in km as parameter
//     --> do some maths

// 2 - store the miles as we convert
//     --> variable 

// 3 - rounds up or down to nearest mile
//     --> math.floor() - rounds down 
//     --> math.ceil() - round up
//         --> when does it round up? .5 ^
//         --> when does it round down (everything else)
//             --> if else

// 4 - output of miles
//     --> return no of miles (rounded)

const converter = number => {
    const kmToChange = number / 1.6 
    console.log('what is kmToChange? -', kmToChange)
    let newMiles = Math.round(kmToChange)
    console.log('what is new miles? -', newMiles)
return newMiles 
}

converter(9)