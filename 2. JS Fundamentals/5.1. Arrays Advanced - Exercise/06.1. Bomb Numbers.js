function bombNumbers(sequence, bomb) {
    let [bombNumber, bombPower] = bomb;
    let index = sequence.indexOf(bombNumber);
  
    while (index !== -1) {
      let start = Math.max(0, index - bombPower);
      let end = Math.min(sequence.length - 1, index + bombPower);
      sequence.splice(start, end - start + 1);
      index = sequence.indexOf(bombNumber);
    }
  
    return sequence.reduce((a, b) => a + b, 0);
  }

  console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],    [2, 1]));