class A {
    constructor(b) {
        this.b = b;
    }
    doThing() {
            console.log("A.doThing");
    }
}

var a = new A(new B());
a.doThing();
