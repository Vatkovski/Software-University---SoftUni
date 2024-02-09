function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let classes = toStringExtension();
let person = new classes.Person('John Doe', 'john.doe@example.com');
let teacher = new classes.Teacher('Jane Doe', 'jane.doe@example.com', 'Mathematics');
let student = new classes.Student('Jimmy Doe', 'jimmy.doe@example.com', 'Physics');

console.log(person.toString()); 
console.log(teacher.toString());
console.log(student.toString()); 
