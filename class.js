var anotherObject = {
    a:2
}

var myObject = Object.create(anotherObject)

anotherObject.a
myObject.a

anotherObject.hasOwnProperty('a')
myObject.hasOwnProperty('a')

myObject.a++  //隐式屏蔽

anotherObject.a

myObject.a

myObject.hasOwnProperty('a')

var aaa = Object.create(null)

