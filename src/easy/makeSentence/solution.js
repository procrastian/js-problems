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

// function stringToSentence(aString) {
//     return aString.charAt().toUpperCase() + aString.slice(1)
//   }
// console.log(stringToSentence('the quick brown fox jumped over the lazy dog'))
  
function stringToSentence(aString) {
    const lastChar = aString[aString.length -1]
    if (lastChar === '.' || lastChar === ',' ||lastChar === '!' ||lastChar === '?') {
        newString = aString
    } else {
        newString = aString + '.'
    }
    return newString.charAt().toUpperCase() + newString.slice(1)
  }
console.log(stringToSentence('the quick brown fox jumped over the lazy dog'))
  