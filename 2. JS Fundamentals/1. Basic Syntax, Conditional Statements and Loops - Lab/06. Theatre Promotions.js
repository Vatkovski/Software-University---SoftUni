//  IF SOLUTION
// function theatrePromotions(typeOfDay, age) {
//     let price = "";
  
//     if (typeOfDay === 'Weekday') {
//       if (age >= 0 && age <= 18) { price = "12$"; }
//       if (age >= 19 && age <= 64) { price = "18$"; }
//       if (age >= 65 && age <= 122 ) { price = "12$"; }
//       if (age < 0) { price = "Error!"; }
//       if (age > 1000) { price = "Error!"; }
//     }
  
//     if (typeOfDay === 'Weekend') {
//       if (age >= 0 && age <= 18) { price = "15$"; }
//       if (age >= 19 && age <= 64) { price = "20$"; }
//       if (age >= 65 && age <= 122) { price = "15$"; }
//       if (age < 0) { price = "Error!"; }
//       if (age > 1000) { price = "Error!"; }
//     }
  
//     if (typeOfDay === 'Holiday') {
//       if (age >= 0 && age <= 18) { price = "5$"; }
//       if (age >= 19 && age <= 64) { price = "12$"; }
//       if (age >= 65 && age <= 122) { price = "10$"; }
//       if (age < 0) { price = "Error!"; }
//       if (age > 1000) { price = "Error!"; }
//     }
//     console.log(price);
  
//   }
  
//   theatrePromotions('Weekday', 463278482);
// ...................................................................................................
// IF, SWITCH, ELSE IF, ELSE - SOLUTION
// function theatrePromotions(type, age) {

//     let price = 0;
//     if (age >= 0 && age <= 18) {
//         switch (type) {
//             case "Weekday": price = 12; break;
//             case "Weekend": price = 15; break;
//             case "Holiday": price = 5; break;
//         }
//     } else if (age > 18 && age <= 64) {
//         switch (type) {
//             case "Weekday": price = 18; break;
//             case "Weekend": price = 20; break;
//             case "Holiday": price = 12; break;
//         }
//     } else if (age > 64 && age <= 122) {
//         switch (type) {
//             case "Weekday": price = 12; break;
//             case "Weekend": price = 15; break;
//             case "Holiday": price = 10; break;
//         }
//     } else {
//         console.log("Error!");
//     }

//     if (price !== 0){
//     console.log(price + "$");
//     }
// }
// theatrePromotions('Weekday', 42);
// theatrePromotions('Holiday', -12);
// theatrePromotions('Holiday', 15);  
// ...................................................................................................
// SWITCH, IF, ELSE IF, ELSE - SOLUTION
function theatrePromotions(typeOfDay, age) {
    
    let price = 0;
    switch (typeOfDay) {
        case "Weekday":
            if (age >= 0 && age <= 18) {
                price = 12;
            } else if (age > 18 && age <= 64) {
                price = 18;
            } else if (age > 64 && age <= 122) {
                price = 12;
            }
            break;
            
        case "Weekend":
            if (age >= 0 && age <= 18) {
                price = 15;
            } else if (age > 18 && age <= 64) {
                price = 20;
            } else if (age > 64 && age <= 122) {
                price = 15;
            }
            break;
            
        case "Holiday":
            if (age >= 0 && age <= 18) {
                price = 5;
            } else if (age > 18 && age <= 64) {
                price = 12;
            } else if (age > 64 && age <= 122) {
                price = 10;
            }
            break;
    }
    
    if (age >= 0 && age <= 122) {
        console.log(price + "$");
    } else {
        console.log("Error!");
    }
    
}
theatrePromotions("Weekday", 42);
theatrePromotions("Holiday", -12);
theatrePromotions("Holiday", 15);