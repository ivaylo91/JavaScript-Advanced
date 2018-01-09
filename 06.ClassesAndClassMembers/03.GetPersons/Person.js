class Person {

    constructor(firstname, lastname, age, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.email = email;
    }
}

function getPeople() {
    return [
        new Person("Maria", "Petrova", 22, "mp@yahoo.com"),
        new Person("SoftUni"),
        new Person("Stephan", "Nikolov", 25),
        new Person("Peter", "Kolev", 24, "ptr@gmail.com")
    ];
}

console.log(getPeople().join('\n'));
