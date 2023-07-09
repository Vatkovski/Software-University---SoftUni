function dayOfWeek(day) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (day >= 1 && 7 >= day) {
        console.log(days[day-1]);
    } else {
        console.log("Invalid day!");
    }
    // switch (input) {
    //  case 1: console.log('Monday');break;
    //  case 2: console.log('Tuesday');break;
    //  case 3: console.log('Wednesday');break;
    //  case 4: console.log('Thursday');break;
    //  case 5: console.log('Friday');break;
    //  case 6: console.log('Saturday');break;
    //  case 7: console.log('Sunday');break;
    //  default: console.log('Invalid day!');break;
    // }
 }
 
 dayOfWeek(1);