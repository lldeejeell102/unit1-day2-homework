////////////////////////////////
// Easy Going
////////////////////////////////
for (let i=1; i<21; i++){
    if (i=20){
        console.log("Easy Going answered");
    }
}

////////////////////////////////
// Get Even
////////////////////////////////
for (let i=0; i<201; i+=2){
    if (i === 200){
        console.log("Get Even answered");
    }
}

////////////////////////////////
// Fizz Buzz                            
////////////////////////////////

//1. Write a javascript application that logs all numbers from 1 - 100.
for (let i = 1; i <= 100; i++){
    //2. If a number is divisible by 3 log "Fizz" instead of the number.
    if(i % 3 === 0){
        console.log("Fizz")
//3. If a number is divisible by 5 log "Buzz" instead of the number.
    } else if(i % 5 === 0){
        console.log("Buzz")
//4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
    } else if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    } else {
        console.log(i)
    }
    
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// changing Plantee's birthda
plantee[2] = plantee[2] + 1;
console.log(plantee[2])

// changing wolfy's hometown
wolfy[3] = "Gotham City"
console.log(wolfy[3])

// give D'Art second hometown
dart.push("Hawkins")
console.log(dart)

// Porgee changing Wolfy's name to Gameboy
wolfy[0] = "Gameboy"
console.log(wolfy)

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for (ninjaTurtle of ninjaTurtles){
    const upperCastNames = ninjaTurtle.toUpperCase
    console.log(ninjaTurtle)
}


////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////