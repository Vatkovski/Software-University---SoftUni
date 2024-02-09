function personAndTeacher() {
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

    return {
        Person,
        Teacher
    }
}

let classes = personAndTeacher();
let person = new classes.Person('John Doe', 'john.doe@example.com');
let teacher = new classes.Teacher('Jane Doe', 'jane.doe@example.com', 'Mathematics');

console.log(person.name);  
console.log(teacher.subject); 
