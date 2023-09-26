function parseInput(input) {
    const matrix = input.slice(0, -1).map(row => row.split(' ').map(Number));
    const bombs = input[input.length - 1].split(' ').map(pair => pair.split(',').map(Number));
    return { matrix, bombs };
  }
  
  function simulate(matrix, bombs) {
    let damage = 0;
    let kills = 0;
  
    for (const [bombRow, bombCol] of bombs) {
      const bombValue = matrix[bombRow][bombCol];
      for (let row = Math.max(0, bombRow - 1); row <= Math.min(matrix.length - 1, bombRow + 1); row++) {
        for (let col = Math.max(0, bombCol - 1); col <= Math.min(matrix[0].length - 1, bombCol + 1); col++) {
          matrix[row][col] = Math.max(0, matrix[row][col] - bombValue);
          if (row === bombRow && col === bombCol) {
            damage += bombValue;
            kills++;
          }
        }
      }
    }
  
    for (const row of matrix) {
      for (const cell of row) {
        if (cell > 0) {
          damage += cell;
          kills++;
        }
      }
    }
  
    return { damage, kills };
  }
  
  function bunnyKill(input) {
    const { matrix, bombs } = parseInput(input);
    const { damage, kills } = simulate(matrix, bombs);
    return [damage, kills];
  }
  

bunnyKill(['10 10 10',
'10 10 10',
'10 10 10',
'0,0'])