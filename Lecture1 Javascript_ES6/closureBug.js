function makeFunctionArray() {
    const arr = []

    for( var i = 0; i < 5; i++)  {
        arr.push(function() { console.log(i)})
    }

    console.log(i) // it willl return 5 because it is within scope of the function

    return arr
}

const functionArray = makeFunctionArray()

// console.log(i) //going to print undefined because it is not within scope

functionArray[0]() // this will console.log 5 instead of zero. Thats what is reffered to as closures