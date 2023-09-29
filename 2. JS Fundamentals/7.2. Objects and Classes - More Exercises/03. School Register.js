function schoolRegister(students) {
    let register = {};

    for (let student of students) {
        let tokens = student.split(', ');
        let name = tokens[0].split(': ')[1];
        let grade = Number(tokens[1].split(': ')[1]);
        let score = Number(tokens[2].split(': ')[1]);

        if (score > 3) {
            grade++;
            if (!register[grade]) {
                register[grade] = { students: [], scores: [] };
            }
            register[grade].students.push(name);
            register[grade].scores.push(score);
        }
    }

    let sortedGrades = Object.keys(register).sort((a, b) => a - b);

    for (let grade of sortedGrades) {
        console.log(`${grade} Grade`);
        console.log(`List of students: ${register[grade].students.join(', ')}`);
        let averageScore = register[grade].scores.reduce((a, b) => a + b, 0) / register[grade].scores.length;
        console.log(`Average annual score from last year: ${averageScore.toFixed(2)}`);
        console.log();
    }
}

schoolRegister(['Student name: George, Grade: 5,    Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9,    Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8,    Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5,    Graduated with an average score: 4.20',
    'Student name: John, Grade: 9,    Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2,    Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1,    Graduated with an average score: 5.15'])