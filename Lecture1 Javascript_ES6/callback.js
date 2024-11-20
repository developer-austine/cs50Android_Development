function doSomethingAsync(callback) {
    setTimeout(function() {console.log(callback(1), 1000)})
}

doSomethingAsync(console.log)