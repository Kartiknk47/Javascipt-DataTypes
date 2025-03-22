// Numbers
let x = 15;
let y = 20;

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)


// strings

let favouriteMovie = "RRR"
let msg = "I Love Watching" + favouriteMovie;

console.log(msg)

// Booleans

let isHungry = true

if (isHungry) {
    console.log('Go Eat')
} else {
    console.log('You Are Full')
}

// Objects

let favouriteAnimal = {
    name: 'Simba',
    type: 'Dog',
    age: 2,
    isFriendly: 'true'
}
console.log("animal's name is:", favouriteAnimal.name)

// Arrays

let colors = ["red","orange","blue","black","white"]
console.log(colors)
colors.push("green")
console.log(colors);
colors.pop()
console.log(colors);

// Undefined and Null

let Mystery
console.log("value", Mystery, "typeof", Mystery)

let Mystery1 = null
console.log("value", Mystery1, "typeof", Mystery1)

// Biglint

let BigNum = 1234567899517532468n;
console.log(BigNum * 2n)

// symbol
let symbolOne = Symbol("char")
let symbolTwo = Symbol("char")

console.log(symbolOne === symbolTwo);


// let, var, const 

// let
let FavColor= 'Black'
console.log(FavColor)

FavColor = 'Red'
console.log(FavColor);

// var
if(true){
    var FavNum = 47
    let FavNumOne = 16

    console.log(FavNum);
    console.log(FavNumOne);
    
}

// const

Array = ['Apple', 'Banana', 'Grapes']
console.log(Array);
Array.push('Orange')
console.log(Array);








