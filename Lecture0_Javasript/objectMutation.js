//object mutation is the changing of a value of an object by redeclaring its value

const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'Key',
    },
}

const o2 =  Object.assign({}, o) //cloning an object. This code here will be the same as the object redeclared earlier o

// o2.a= 'New Value'

// console.log(o2.a) // this will output the value "New Value"

//deep copy
function deepCopy(obj) {
    //check if vals are objects
    //if so, copy that object (deep copy)
    //else, return a value
    const keys = Object.keys(obj)

    const newObject = {}

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if(typeof obj[keys[i]] === 'object') {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key]
        }
    }
    return newObject
}

const o3 = deepCopy(o)

o.obj.key = 'New Key'
console.log(o3.obj.key) 