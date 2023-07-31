function matrixNxN(num) {   
    let buff = "";

    for (let i = 0; i < num; i++) {        
        buff = "";
        for (let j = 0; j < num; j++) {
            buff += `${num} `;            
        }
        console.log(buff);
    }    
}

matrixNxN(7)