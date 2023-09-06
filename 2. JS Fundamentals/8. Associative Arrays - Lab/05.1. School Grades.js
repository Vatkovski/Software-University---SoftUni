function schoolGrades(input) {
    let students = {};

    for (const line in input) {
        let grades = input[line].split(' ');
        let name = grades.shift();
        grades = grades.map(Number);
        
        if (students[name]) {
            students[name] = students[name].concat(grades);
        } else {
            students[name] = grades;
        }              
    }
    
    let sorted = Object.entries(students).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let [name, grades] of sorted) {
        let avarage = grades.reduce((a, b) => a + b, 0) / grades.length;
        console.log(`${name}: ${avarage.toFixed(2)}`);
    }  
    
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);