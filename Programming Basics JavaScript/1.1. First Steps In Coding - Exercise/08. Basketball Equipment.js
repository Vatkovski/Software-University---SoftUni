function demo(input) {
 
    let fee = Number(input[0]);
    let shoesPrice = fee * 0.60;
    let clothesPrice = shoesPrice * 0.80;
    let ballPrice = clothesPrice / 4;
    let extraStuffPrice = ballPrice / 5;
   
    let totalPrice = fee + shoesPrice + clothesPrice + ballPrice + extraStuffPrice;
    console.log(totalPrice);
  }
  
demo(["365 "]);