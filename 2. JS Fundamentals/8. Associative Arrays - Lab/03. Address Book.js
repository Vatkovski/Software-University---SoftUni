function printAddressBook(input) {
    let addressBook = {};
 
for (const line of input) {
    let [name, address] = line.split(':');    

    addressBook[name] = address;
    }

    let addressBookEntries = Object.entries(addressBook);
    addressBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]))

for (const entry of addressBookEntries) {
        let name = entry[0];
        let address = entry[1];

        console.log(`${name} -> ${address}`);
    }

//alternative solution
// for (const [name, address] of addressBookEntries) {
//     console.log(`${name} -> ${address}`);
// }
}

printAddressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);