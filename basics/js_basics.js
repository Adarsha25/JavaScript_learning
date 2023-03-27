let a = 4
console.log(a++) // post increment, a will be 4 and in the next line it will be 5
console.log(++a) // pre icrement, a will be assigned 6 in this line
console.log(a--) //post decrement, a will be 6 and in the next line it will be 5
console.log(--a) //pre decrement,  a will be assigned 4

// string concatenation
let p = 'Hello', q = 'Adarsha', r = 5, s = 8
console.log(p + q) // logs Hello Adarsha
console.log(p - q) // logs Nan, - operators can be used for numbers only
console.log(r + p) // logs 5Hello
console.log(r + s) // logs 13

// conditional operators
/* <condition> ? <value1> : <value2>; */
let n = 10, m = 15

let c = n > m? n : m
console.log(c) // returns 15, as the condition is false it returns the value 2 
let d = n < m? n : m
console.log(d) // returns 10, as the condition is true it returns the value 1

// Template string
var e = `This is 
multiple line string
with template.`
console.log(e)

// The template string (using backticks) is used when you want to 
// include the value of a variable or expressions into a string.

let price = 200, nos = 10
console.log(`The total bill amounts to Rs ${price*nos} `)

// Escaping the quotes
let s1 = "This is 'simple' string";

let s2 = 'This is "simple" string';

let s3 = `This is 'simple' and "easy" string`;



// Objects
var obj ={
    first_name: "Adarsha",
    last_name: "S",
    age: 23,
    fav_color: "Green"
}
// accessing the value of object
console.log(obj.first_name)
console.log(obj["fav_color"])

// object constructor
var adi = new Object()
adi.firstName = "Adarsha"
adi.lastName = "S"
adi.age = 23

console.log(adi)    


// Array
let arr = [1,2,3,4,5,6,7]
console.log(arr[4])

// concat()
let arr1 = [1,2,3,4], arr2 = [5,6,7,8]
console.log(arr1.concat(arr2))

// forEach()
// let dc = [1,2,3,4,5,6]
// console.log(dc.forEach())

// Type of
// Data type    Type of
// string    -   string
// Number    -   Number
// Boolean   -   Boolean
// Array     -   Object
// Object    -   Object
// Null      -   Object
// Symbol    -   Symbol
// undefined -   undefined


// Null and Undefined

let soso = null
console.log(typeof soso)  // object

// Sorting 
// Bubble Sort
function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < (arr.length-i-1); j++){
            if (arr[j] > arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
   console.log(arr) 
}
 

var asc = [1,4,2,63,7,9]

bubbleSort(asc)

// Bubble sort in descending order
function bubbSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < (arr.length-i-1); j++){
            if (arr[j] < arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
   console.log(arr) 
}
 

var asc = [1,4,2,63,7,9]

bubbSort(asc)


// Insertion Sort

function insertionSort(ary){
    for(let i = 1; i < ary.length; i++){
        for(let j = i-1; j > -1; j--){
            if(ary[j+1] < ary[j]){
                [ary[j+1], ary[j]] = [ary[j], ary[j+1]]
            }
        }
    }
    return ary;
}

var temp = [2,3,1,5,8,6,4]

console.log(insertionSort(temp))



// Selection Sort
function selectionSort(arr){
    let min;

    for(let i = 0; i < arr.length; i++){
        min = i;

        for (let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min !== i){
            [arr[min],arr[i]] = [arr[i],arr[min]]
        }
    }
    console.log(arr)
}
var ascend = [5,3,6,2,9,1]
selectionSort(ascend)

// remove duplicate from the array
// using filter()
let arra = [1,1,2,3,4,4,5,5]

function removeduplicate(arr){
    return arr.filter((item, index) => arr.indexOf(item) === index)
}
console.log(removeduplicate(arra))

// using forEach() feature of ES6(ES2015)
let newArr = [2,3,4,5,6,4,3,4,2,2,3,6,7]

function removeDups(arr){
    let unique = []
    arr.forEach(element => {
        if (!unique.includes(element)){
            unique.push(element)
        }
    })
    return unique
}
console.log(removeDups(newArr))

// 
let math = {
    add : (a, b) => a+b,
    sub : (a,b) => a-b,
    mult : (a,b) => a*b,
    div : (a,b) => a/b
}

let addition = math.add(1,2)
console.log(addition)

let subtraction = math.sub(1,2)
console.log(subtraction)

let multiply = math.mult(2,3)
console.log(multiply)

let divide = math.div(4,2)
console.log(divide)


let dsa = [1,2,3,4,5]
console.log(dsa.pop())