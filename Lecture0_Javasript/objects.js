
//using objects notation

const o = new Object ()
o.firstname = 'Jonathan'
o.lastname="Castor"
o.isTeaching= true
o.greet = function() {
    console.log("Hi")
}

//using object literals
 
const o2 = {}
o.firstname= "Jordan"
o['lastname'] = 'Castor'
const key = 'isTeaching'
o[key] = true
o['greet'] = function() {
    console.log('Hi')
}

//using inline method 

const o3 = {
    firstname: 'Jordan',
    lastname: 'Castor',
    isTeaching: true,
    greet: function() {
        console.log('Hi')
    }, //nesting of objects
    address: {
        street: 'Main St',
        number: 123
    },
}