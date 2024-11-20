function addOne () {
    // throw new Error('oh no, an error') // this is a test to proove js indeed keeps ttrack of the call satck
    return num + 1
}

function getNum() {
    return addOne(10)
}

function c() {
    console.log(getNum() + getNum())
}

c() // this is an example of a LIFO execution i.e Last In First Out