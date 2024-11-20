function makeHellofFunction() {
    const message = 'Hello!'

    function sayHello() {
        console.log(message)
    }
    return sayHello
}

const sayHello = makeHelloFunction()

console.log('typeof message: ' , typeof message)  // it will output undefined 

console.log(sayHello.toString())

sayHello()

