// 1, We need to know the duration and the speed of the journey 
// --->Create a function with 2 parameters
// 2, 2.Do some math
// --->Calculate the distance
// 3, Round up the the result 
// --->Round up/down the distance
//     --->if distance is 5,5 after round should be 6
//     --->if distance is 5,4 after round should be 5
function milesTravelled(minutes, speed) {
const hours = minutes / 60
   const distance = speed * hours
//    console.log(distance)
   roundedDistance = Math.round(distance)
   console.log(roundedDistance)
   return roundedDistance
}

milesTravelled(30, 55)