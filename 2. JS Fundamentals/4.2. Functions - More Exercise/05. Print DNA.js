function printHelix(num) {
    let sequence = "ATCGTTAGGG";
    let count = 0;
  
    for (let i = 0; i < num * 2; i += 2) {
      if (count % 4 === 0) {
        console.log(
          `**${sequence[i % sequence.length]}${
            sequence[(i + 1) % sequence.length]
          }**`
        );
      } else if (count % 4 === 1 || count % 4 === 3) {
        console.log(
          `*${sequence[i % sequence.length]}--${
            sequence[(i + 1) % sequence.length]
          }*`
        );
      } else if (count % 4 === 2) {
        console.log(
          `${sequence[i % sequence.length]}----${
            sequence[(i + 1) % sequence.length]
          }`
        );
      }
      count += 1;
    }
  }
  
  printHelix(4);
  printHelix(10);