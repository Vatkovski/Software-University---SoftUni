function check_validity(x1, y1, x2, y2) {
    let first_check = Math.sqrt(Math.pow(-x1, 2) + Math.pow(-y1, 2))
    let second_check = Math.sqrt(Math.pow(-x2, 2) + Math.pow(-y2, 2))
    let both_check = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
 
    let first_validation = 'invalid'
    let second_validation = 'invalid'
    let both_validation = 'invalid'
 
    if(!first_check.toString().includes('.')){
        first_validation = 'valid';
    }
    if(!second_check.toString().includes('.')){
        second_validation = 'valid';
    }
    if(!both_check.toString().includes('.')){
        both_validation = 'valid';
    }
 
    console.log(`{${x1}, ${y1}} to {0, 0} is ${first_validation}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${second_validation}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${both_validation}`);
}

check_validity(3, 0, 0, 4)
// check_validity(2, 1, 1, 1)