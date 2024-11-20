function PrintOne() {
    console.log('one')
}

function PrintTwo() {
    console.log('two')
}

function PrintThree() {
    console.log('three')
}

setTimeout(PrintOne(), 1000)
setTimeout(PrintTwo(), 0)
PrintThree();