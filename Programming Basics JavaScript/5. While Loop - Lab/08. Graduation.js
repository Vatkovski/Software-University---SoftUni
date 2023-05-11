function graduation(input) {

  let sumOfYearGrades = 0;
  let fail = 0;
  let grade = 1;
  let averageGrade = 0;
  
  while (grade <= 12) {
      let yearGrade = Number(input[grade]);
      sumOfYearGrades += yearGrade;
      averageGrade = sumOfYearGrades / grade;
  
      if (yearGrade < 4) {
          fail++
      }
      
      if (fail > 1) {
          console.log(`${input[0]} has been excluded at ${grade -1} grade`);
          break;
      } 
  
      if (grade >= 12) {
          console.log(`${input[0]} graduated. Average grade: ${averageGrade.toFixed(2)}`);
          break;
      }
   grade++
  }
  }
  
  
  
  graduation(["Mimi", 
  "5",
  "6",
  "5",
  "6",
  "5",
  "6",
  "6",
  "2",
  "3"])
  
  
  
  
  
  
  
  
  
  
  