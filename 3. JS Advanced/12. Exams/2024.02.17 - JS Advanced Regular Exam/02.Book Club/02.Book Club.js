class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        const existingBook = this.books.find(book => book.title === title && book.author === author);
        if (existingBook) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        } else {
            this.books.push({ title, author });
            return `The book "${title}" by ${author} has been added to ${this.library} library.`;
        }
    }

    addMember(memberName) {
        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`;
        } else {
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`;
        }
    }

    assignBookToMember(memberName, bookTitle) {
        const memberExists = this.members.includes(memberName);
        if (!memberExists) {
            throw new Error(`Member ${memberName} not found.`);
        }

        const bookIndex = this.books.findIndex(book => book.title === bookTitle);
        if (bookIndex === -1) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        const [assignedBook] = this.books.splice(bookIndex, 1);
        return `Member ${memberName} has been assigned the book "${assignedBook.title}" by ${assignedBook.author}.`;
    }

    generateReadingReport() {
        if (this.members.length === 0) {
            return "No members in the book club.";
        }
        if (this.books.length === 0) {
            return "No available books in the library.";
        }

        let report = `Available Books in ${this.library} library:`;
        this.books.forEach(book => {
            report += `\n"${book.title}" by ${book.author}`;
        });

        return report;
    }
}

// Example usage
const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
try {
    console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));
} catch (error) {
    console.error(error.toString());
}

const myBookClub2 = new BookClub('The Bookaholics');
console.log(myBookClub2.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub2.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub2.addBook("1984", "George Orwell"));
console.log(myBookClub2.addMember("Alice"));
console.log(myBookClub2.addMember("Alice"));
console.log(myBookClub2.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub2.generateReadingReport());

const myBookClub3 = new BookClub('The Bookaholics');
console.log(myBookClub3.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub3.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub3.addBook("1984", "George Orwell"));
console.log(myBookClub3.addMember("Alice"));
console.log(myBookClub3.addMember("Peter"));
try {
    console.log(myBookClub3.assignBookToMember("Peter", "The Da Vinci Code"));
} catch (error) {
    console.error(error.toString());
}

const myBookClub4 = new BookClub('The Bookaholics');
console.log(myBookClub4.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub4.addBook("1984", "George Orwell"));
console.log(myBookClub4.addMember("Alice"));
console.log(myBookClub4.addMember("Peter"));
console.log(myBookClub4.assignBookToMember("Peter", "1984"));
console.log(myBookClub4.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub4.generateReadingReport());
