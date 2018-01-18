class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;

    }

    toString() {
        let className = this.constructor.name;
        return `${className}(name:${this.name},email:${this.email})`;
    }
}

function extendsPrototype(baseClass) {
    baseClass.prototype.species = 'Human';
    baseClass.prototype.toSpicesString = function () {

        return `I am species ${this.species}.${this.toString()}`;
    }
}

let person = new Person('Ivan', 'ivan@yahoo.com');
extendsPrototype(Person);
console.log(person.toSpicesString());