function oldBooks(input) {

    let book = input[0];
  let i = 1;
    while (i <= input.length) {
      if (book === input[i]) {
        console.log(`You checked ${i -1} books and found it.`);
        break;
      }
  
      if (input[i] === "No More Books") {
  
        console.log(`The book you search is not here!`);
        console.log(`You checked ${i -1} books.`);
        break;
      }
      i++
    }
  
  }
  
  oldBooks(["The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books"])
  
  
  
  
  
  
  
  
  
  
  