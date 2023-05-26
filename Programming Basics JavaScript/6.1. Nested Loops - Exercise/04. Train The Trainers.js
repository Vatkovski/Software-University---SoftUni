function trainTheTrainers (input) {

    let i = 1;
    let juryCount = Number(input[0]);
    let presentation = input[i];
    i++
    let averageGrade = 0;
    let sumAllGrades = 0;
    let gradesCount = 0;
    let finalAssessment = 0;

    while (presentation !== "Finish") {
        let sum = 0;

        for (let j = 0; j < juryCount; j++) {
            let grade = Number(input[i]);
            sum += grade;
            sumAllGrades += grade;
            i++;
        }
        
        averageGrade = sum / juryCount;
        console.log(`${presentation} - ${averageGrade.toFixed(2)}.`);
        presentation = input[i];
        gradesCount++
        i++
    }

    finalAssessment = sumAllGrades / (gradesCount * juryCount)
console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`);
    
}

 trainTheTrainers(["3",
 "Arrays",
 "4.53",
 "5.23",
 "5.00",
 "Lists",
 "5.83",
 "6.00",
 "5.42",
 "Finish"])
 
 
 
 








