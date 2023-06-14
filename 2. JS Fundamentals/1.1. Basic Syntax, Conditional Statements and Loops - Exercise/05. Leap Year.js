function leapYear(year) {
    console.log(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 'yes' : 'no');
  }
  leapYear(2000);
  
  
  
  