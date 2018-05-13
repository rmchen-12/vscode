function foo() {
    console.log(this.a);
}

var obj = {
    a: 2
}

// foo.call(obj)

function foo() {
    console.log(this.a);
}

var obj = {
    a: 2
}

var bar = function () {
    foo.call(obj)
}

// bar()

// setTimeout(bar, 100);

// bar.call(global)

function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
}

var a = 'hello world'

var a = function () {
    return foo.apply(obj)
}

setTimeout(() => {
    a()
}, 100);

var myObject = {
    a: 2
}

var aa = Object.getOwnPropertyDescriptor(myObject, "a")

// console.log(aa);

var myarray = [1, 2, 3]
var it = myarray[Symbol.iterator]()

it.next()
it.next()
it.next()
var a = it.next()