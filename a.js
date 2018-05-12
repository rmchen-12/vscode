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
    a:2,
    foo:foo
}

var a = 'hello world'

var a = function () {
    return foo.apply(obj)
}

setTimeout(()=>{
    a()
}, 100);