function examPreparation(input) {

  let averageScore = 0;
  let numberOfProblems = 0;
  let lastProblem = "";
  let numberOfPoorGrades = 0;
  let grade = 0;
  let gradeSum = 0;
  let i = 1;


  while (numberOfPoorGrades !== Number(input[0])) {

    lastProblem = input[i];
    i++
    numberOfProblems++
    grade = Number(input[i]);
    i++
    gradeSum += grade;
    averageScore = gradeSum / numberOfProblems;
    if (input[i] === "Enough") {
      console.log(`Average score: ${averageScore.toFixed(2)}`);
      console.log(`Number of problems: ${numberOfProblems}`);
      console.log(`Last problem: ${lastProblem}`);
      break;
    }
    if (grade <= 4) {
      numberOfPoorGrades++
    }
    if (numberOfPoorGrades === Number(input[0])) {
      console.log(`You need a break, ${numberOfPoorGrades} poor grades.`);
      break;
    }
  }

}

examPreparation(["2",
  "Income",
  "3",
  "Game Info",
  "6",
  "Best Player",
  "4"])














