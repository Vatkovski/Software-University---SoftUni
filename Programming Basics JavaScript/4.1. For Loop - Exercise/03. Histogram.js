function histogram(input) {
    let n = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
  
    for (let i = 1; i <= n; i++) {
      let currentNum = Number(input[i]);
  
      if (currentNum < 200) {
        p1++;
      } else if (currentNum < 400) {
        p2++;
      } else if (currentNum < 600) {
        p3++;
      } else if (currentNum < 800) {
        p4++;
      } else {
        p5++;
      }
    }
  
    let percentP1 = (p1 / n) * 100;
    let percentP2 = (p2 / n) * 100;
    let percentP3 = (p3 / n) * 100;
    let percentP4 = (p4 / n) * 100;
    let percentP5 = (p5 / n) * 100;
  
    console.log(percentP1.toFixed(2) + "%");
    console.log(percentP2.toFixed(2) + "%");
    console.log(percentP3.toFixed(2) + "%");
    console.log(percentP4.toFixed(2) + "%");
    console.log(percentP5.toFixed(2) + "%");
  }
  
  histogram(["4", "1", "2", "999", "609"]);
  