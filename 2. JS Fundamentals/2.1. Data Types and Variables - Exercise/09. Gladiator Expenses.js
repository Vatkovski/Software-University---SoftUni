function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  
    let brokenHelmet = Math.floor(lostFights / 2) * helmetPrice;
    let brokenSword = Math.floor(lostFights / 3) * swordPrice;
    let brokenShield = Math.floor(lostFights / 6) * shieldPrice;
    let brokenArmor = Math.floor(lostFights / 12) * armorPrice;

    let total = brokenArmor + brokenShield + brokenSword + brokenHelmet;
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);

    /*
    let expenses = 0;
        let shieldBreaks = 0;
    
        for (let i = 1; i <= lostFights; i++) {
            let helmetIsBroken = false;
            let swordIsBroken = false;
    
            if (i % 2 === 0) {
                helmetIsBroken = true;
                expenses += helmetPrice;
            }
    
            if (i % 3 === 0) {
                swordIsBroken = true;
                expenses += swordPrice;
            }
    
            if (helmetIsBroken && swordIsBroken) {
                expenses += shieldPrice;
                shieldBreaks++;
                if (shieldBreaks % 2 === 0) {
                    expenses += armorPrice;
                }
            }
        }
        console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
    }
    gladiatorExpenses(7, 2, 3, 4, 5);
    */
    
    /*
        let brokenHelmet = 0;
        let brokenSword = 0;
        let brokenShield = 0;
        let brokenArmor = 0;
        for (let i = 1; i <= lostFights; i++) {
            if (i % 2 === 0) {
                brokenHelmet++;
            }       
            if (i % 3 === 0) {
                brokenSword++;
            }   
            if (i % 2 === 0 && i % 3 === 0) {
                brokenShield++;
                if (brokenShield % 2 === 0 ) {
                    brokenArmor++;
                }
            }
        }
        let total = brokenHelmet * helmetPrice + brokenSword * swordPrice + brokenShield * shieldPrice + brokenArmor * armorPrice;
        console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
    }   
    gladiatorExpenses(23,
        12.50,
        21.50,
        40,
        200
        );
    
    */