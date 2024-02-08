function createPerson(firstName, lastName) {
    let person = {
      _firstName: firstName,
      _lastName: lastName,
  
      get firstName() {
        return this._firstName;
      },
  
      set firstName(newFirstName) {
        this._firstName = newFirstName;
        this._fullName = `${newFirstName} ${this._lastName}`;
      },
  
      get lastName() {
        return this._lastName;
      },
  
      set lastName(newLastName) {
        this._lastName = newLastName;
        this._fullName = `${this._firstName} ${newLastName}`;
      },
  
      get fullName() {
        return this._fullName;
      },
  
      set fullName(newFullName) {
        let nameParts = newFullName.split(' ');
        if (nameParts.length === 2) {
          this._firstName = nameParts[0];
          this._lastName = nameParts[1];
          this._fullName = newFullName;
        }
      }
    };
  
    person._fullName = `${firstName} ${lastName}`;
    return person;
  }

  
let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); 
person.firstName = "George";
console.log(person.fullName); 
person.lastName = "Peterson";
console.log(person.fullName); 
person.fullName = "Nikola Tesla";
console.log(person.firstName); 
console.log(person.lastName); 

  