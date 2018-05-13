//56dcf6ecfe8b2f71a95c55912f6aed298bbde142

let anotherObject = {
    a: 2
}

let myObject = Object.create(anotherObject)

anotherObject.a
myObject.a

anotherObject.hasOwnProperty('a')
myObject.hasOwnProperty('a')

myObject.a++ //隐式屏蔽

    anotherObject.a

myObject.a

myObject.hasOwnProperty('a')

let aaa = Object.create(null)



const Task = {
    setId(ID) {
        this.id = ID
    },
    outputID() {
        console.log(this.id);
    }
}

const XYZ = Object.create(Task)

XYZ.prepareTask = function (ID, Label) {
    console.log(this);
    this.setId(ID)
    this.Label = Label
}

XYZ.outputTaskDetails = function () {
    this.outputID() 
    console.log(this.Label);
}

XYZ.prepareTask()

const bb = {
    a: 1,
    b() {
        return this.a + 1
    }
}



