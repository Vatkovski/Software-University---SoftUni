function tennisRanklist(input) {

    let points = 0;
    let tournamentsWon = 0;
    
    for (let i = 2; i < input.length; i++) {
      if (input[i] === "W" ) {
        points += 2000
        tournamentsWon += 1
      } else if (input[i] === "F" ) {
        points += 1200
      } else if (input[i] === "SF" ) {
        points += 720
      }
    }
    let totalPoints = Number(input[1]) + points;
    let averagePoints = points / Number(input[0]);
    let percentTournamentsWon = (tournamentsWon / Number(input[0])) * 100
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${percentTournamentsWon.toFixed(2)}%`);
    
    }
    
    tennisRanklist(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"])
    
    
    
    
    
    
    