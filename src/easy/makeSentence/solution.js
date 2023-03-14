// Given a sentence, capitalise the first letter and add a full stop to the end. 
// However, if the sentence already ends with some form of puncutation, leave it as is.

// 1 - read sentence as a string
//     --> variable to pass sentence into 

// 2 - capitalise the first letter
//     --> isolate first letter of string
//     --> .toUpperCase

// 3 - add full stop to end if no punctuation given
//     --> check for punctuation
//     --> if nothing, add .

// 4 - return the edited sentence
//     --> return output

let sentence = 'the quick brown fox jumped over the lazy dog'

let output = sentence.toUpperCase(charAt[0])
console.log(output)