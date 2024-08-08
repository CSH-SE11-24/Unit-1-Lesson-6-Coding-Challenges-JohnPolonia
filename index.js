// MILD
// Create an array called truths and store 3 true facts about yourself
let truths = ["I like bear.", "I have drink before (IN DR)", "I use to have a pet bunny as a kid"]

// console log the 1st element (element is not same as index!)
console.log(truths[0])

// change the value of the last element
truths[2] = "I hate eating to much candy."

// console log the last element to check that it's changed
console.log(truths[2])

// MEDIUM
// Create a second array calles lies and store 3 fake facts about yourself
let lies = ["I hate Software Engenerring", "I like mustard.", "I hate cars."]

// delete a value from the lies array
lies.shift(lies[2])

// console log the second list to confirm the value is gone
console.log(lies[2])

// add a new lie to the lies array
lies.push("I hate dogs")

// SPICY
// pick the truths or lies array and console log the 1st element
console.log(truths[0])
console.log(lies[0])

// prompt the user to guess if it was true or false
let guess = prompt("Guess if it is true or false?")

// stretch: how could you check they are right or wrong?


