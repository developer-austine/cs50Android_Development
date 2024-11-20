// const x = [0,1,2,3]

// function addOne(number) { return number +1}

// addOne(1)

// // [function: map] 
// x.map(addOne) // returns the array as follows [1,2,3,4]

// function isGreaterThanOne(number) {
//     return num > 1
// }

// isGreaterThanOne(100) // true
// isGreaterThanOne(1) //false

// x.filter(isGreaterThanOne) // this will return the array [2.3] because they are greater than one 

// function add(x, y) { return x + y}

// add(1,2)

// x.reduce(add)

function map(arr, fn) {
    const newArr = []

    for(let i = 0; i < arr.length; i++) {
        let val = arr[i]
        mewArr.push(fn(val))
    }
   return mewArr
}

function addOne(num) { return num + 1}

const x = [0,1,2,3]

console.log(map(x, addOne)) // it will output [1,2,3,4]