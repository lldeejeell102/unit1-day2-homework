////////////////////////////////
// Easy Going
////////////////////////////////
for (let i=1; i<21; i++){
    if (i === 20){
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
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8])

favMovies.sort()
console.log(favMovies)
// 1. It altered the array to be sorted by alpha order

favMovies.pop();
console.log(favMovies)
// 2. removed movie title at the end `Volver`

favMovies.push("Guardians of the Galaxy")
console.log(favMovies)
// 3. added in Guardians of the Galaxy to the end

favMovies.reverse()
console.log(favMovies)
// 4. reversed

favMovies.shift()
console.log(favMovies)
// 5. removed the first variable

favMovies.unshift("Guardians of the Galaxy")
console.log(favMovies)
// 6. adds Guardians of the Galaxy to the beginning

favMovies.splice(favMovies.indexOf("Django Unchained"),1,"Avatar")
console.log(favMovies)
// 7. replaced Django Unchained to Avatar -- used .indexOf function to find the index automatically


console.log(favMovies.slice([favMovies.length/2]))

// 8. slice the last half of the array


let x = favMovies.slice([favMovies.length/2])
console.log(x)
// 9. store the value of your slice in a variable, console.log it

console.log(x)
// 10. final result. 


////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1);
whereIsWaldo[1].splice(2,1,"No One")
console.log(whereIsWaldo[2][1][1]);


////////////////////////////////
//  Excited Kitten
////////////////////////////////


// HINT: create an array with responses
const talkingPoints = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

// for a loop that goes for 20 times
for (i = 1; i <= 20; i++){
    // if statement for every even number
    if(i % 2 === 0){
        // random number generator
        // multiple by lenght of array (hence # of responses)
        //print out the random response
        console.log(talkingPoints[Math.round(Math.random()*(talkingPoints.length-1))])
    }else {
        console.log("Love me, pet me! HSSSSSS!")  
    }
}


////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// sort the array to get an ascending list
nums.sort();
// checking to see if it's sorted
// console.log(nums)

// Find the middle vallue of the arry
//console.log(nums.length/2)

// Round number since it'll be deimal
// Math.round((nums.length/2))

// Pring out the median via console.log
console.log(nums[Math.round(nums.length/2)])

/* ANSWER
Expected output:
=> 15
*/

////////////////////////////////
//  Hungry for More
////////////////////////////////

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  

  // It looks like I'm moving the string instead of the array element itself which also creates another arry within Thom's accessories. 
  // I'm not sure if this is the correct way to do this.
  const kristynsShoe = kristynsCloset.slice(0,1);
  console.log(kristynsShoe)
  thomsCloset[2].push(kristynsShoe)
  console.log(thomsCloset)

  console.log("Kristyn will wear " + kristynsCloset[Math.floor(Math.random()*kristynsCloset.length)] + ", " + kristynsCloset[Math.floor(Math.random()*kristynsCloset.length)] + ", and " + kristynsCloset[Math.floor(Math.random()*kristynsCloset.length)])
  console.log("Thom will wear " + thomsCloset[Math.floor(Math.random()*thomsCloset.length)] + ", " + thomsCloset[Math.floor(Math.random()*thomsCloset.length)] + ", and " + thomsCloset[Math.floor(Math.random()*thomsCloset.length)])
  