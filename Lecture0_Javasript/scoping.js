thisIsHoisted() //no error will occcur since hoisting occurs in functions//But it doesn't work in some other cases
thisIsNotHoisted() // an error occurs because this function is declared as a constant and therefore cannnot be changed

const thisIsAconst = 50 

// thisIsAconst ++ //will actually produce an error message since we had already declared it as a constant

const constObj = {}

constObj.a = 'a'

let thisIsALet = 51

thisIsALet = 50 // it will change the value of let

function thisIsHoisted () {
    console.log('this is a function declared at the bottom of a file')
}

const thisIsNotHoisted = function() {
    console.log('should this be hoisted?')
}