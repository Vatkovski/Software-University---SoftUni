class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error('Not enough space in the cellar.');
        }
        this.wines.push({ wineName, wineType, price, payed: false });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    };

    payWineBottle(wineName, price) {
        const findWine = this.wines.find(b => b.wineName === wineName);

        if (!findWine) {
            throw new Error(`${wineName} is not in the cellar.`);
        };

        if (findWine.payed) {
            throw new Error(`${wineName} has already been paid.`)
        } else {
            this.bill+=price;
            findWine.payed = true;
            return `You bought a ${findWine.wineName} for a ${price}$.`
        }
    }

    openBottle(wineName) {
        const findWine = this.wines.find(b => b.wineName == wineName);

        if (!findWine) {
            throw new Error("The wine, you're looking for, is not found.");
        };

        if (!findWine.payed) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        } else {
            const index = this.wines.indexOf(findWine);
            this.wines.splice(index, 1);
            return `You drank a bottle of ${wineName}.`
        }
    };


    cellarRevision(wineType) {
        if (!wineType) {
            let sortedWines = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            let result = [];
            result.push(`You have space for ${ this.space - this.wines.length } bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);
            sortedWines.map((b) => {
                let paid = b.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${b.wineName} > ${b.wineType} - ${paid}.`);
            });
            
            return result.join('\n').trim();
            

        } else {
            let findWine = this.wines.find(b => b.wineType == wineType);

            if (findWine) {
                let result = [];
                let paid = findWine.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${findWine.wineName} > ${findWine.wineType} - ${paid}.`);
                return result.join('\n').trim();
            } else {
                throw new Error(`There is no ${wineType} in the cellar.`)
            }
        }
    }
}
// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));


// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
// console.log(selection.cellarRevision('Rose'));


// const selection = new WineSelection(5)
// selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
// selection.payWineBottle('Bodegas Godelia Mencía', 144);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// console.log(selection.cellarRevision());



//Testing cellarRevision()
// const WineSelection = result;
// let selection = new WineSelection(5);

// const selection = new WineSelection(5)

// selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);

// console.log(selection.cellarRevision());

// assert.equal(selection.cellarRevision(), 
// `You have space for 2 bottles more.
// Bodegas Godelia Mencía > Rose - Not Paid.
// Cabernet Sauvignon Napa Valley > Red - Not Paid.
// Sauvignon Blanc Marlborough > White - Not Paid.`);

