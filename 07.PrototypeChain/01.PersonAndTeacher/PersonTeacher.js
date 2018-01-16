class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;

    }
}

class Teacher extends Person {

    constructor(name, email, subject) {

        super(name, email);
        this.subject = subject;
    }
}

function personAndTeacher(Person, Teacher) {

    return {
        Person,
        Teacher
    }
}

let person = new Person('Pesho', 'pesho@yahoo.com');
let teacher = new Teacher('Gosho', 'gosho@goshev.com', 'Math');

console.log(personAndTeacher(person, teacher));