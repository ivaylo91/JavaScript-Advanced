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

class Teacher extends Person {

    constructor(name, email, subject) {

        super(name, email);
        this.subject = subject;
    }

    toString() {
        let base = super.toString();
        return `${base},subject:${this.subject})`;
    }
}

class Student extends Person {

    constructor(name, email, course) {
        super(name, email);
        this.course = course;
    }

    toString() {
        let base = super.toString();
        return `${base},course:${this.course})`;
    }
}

let person = new Person("Maria", "maria@yahoo.bg");
let teacher = new Teacher("Ivan", "ivan@ivan.bg", "history");
let student = new Student("Pesho", "pesho@gmail.com", "Math");

console.log(person.toSpiciesString());
console.log(person.toString());
console.log(teacher.toString());
console.log(student.toString());