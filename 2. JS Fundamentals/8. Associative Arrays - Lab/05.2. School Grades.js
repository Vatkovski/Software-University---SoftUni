function schoolGrades(input) {
    let students = {};
    for (let i = 0; i < input.length; i++) {
        let student = input[i].split(' ');
        let name = student[0];
        let grades = student.slice(1).map(Number);
        if (students[name]) {
            students[name] = students[name].concat(grades);
        } else {
            students[name] = grades;
        }
    }
    let result = [];
    for (let name in students) {
        let grades = students[name];
        let average = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);
        result.push(`${name}: ${average}`);
    }
    result.sort();
    console.log(result.join('\n'));
}

schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']);
