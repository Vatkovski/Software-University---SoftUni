function login(input) {
    let username = input[0];
    let correctPassword = username.split('').reverse().join('');
    for (let i = 1; i <= input.length; i++) {
     let password = input[i];
 
     if (i>4) {
         console.log(`User ${username} blocked!`);
         return;
     }
     if (password === correctPassword) {
         console.log(`User ${username} logged in.`);
         break;
     } else {
         console.log(`Incorrect password. Try again.`);      
     }
     
    }
 }
 // login(['Acer','login','go','let me in','recA']);
 // login(['momo','omom']);
 login(['sunny','rainy','cloudy','sunny','not sunny'])
 
 
 
 