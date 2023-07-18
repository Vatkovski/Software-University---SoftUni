function formatGrade(grade) {
    return grade < 3 ? `Fail (2)` :
        grade < 3.50 ? `Poor (${grade.toFixed(2)})` :
        grade < 4.50 ? `Good (${grade.toFixed(2)})` :
        grade < 5.50 ? `Very good (${grade.toFixed(2)})` :
                        `Excellent (${grade.toFixed(2)})`;
}

console.log(formatGrade(6.33));