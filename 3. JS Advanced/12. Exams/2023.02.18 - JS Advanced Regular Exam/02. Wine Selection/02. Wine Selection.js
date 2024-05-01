class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error("Not enough space in the cellar.");
        }
        this.wines.push({ wineName, wineType, price, paid: false });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const wine = this.wines.find(w => w.wineName === wineName);
        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }
        wine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const wineIndex = this.wines.findIndex(w => w.wineName === wineName);
        if (wineIndex === -1) {
            throw new Error("The wine, you're looking for, is not found.");
        }
        if (!this.wines[wineIndex].paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }
        this.wines.splice(wineIndex, 1);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        const filteredWines = wineType ? this.wines.filter(w => w.wineType === wineType) : this.wines;
        if (wineType && filteredWines.length === 0) {
            throw new Error(`There is no ${wineType} in the cellar.`);
        }

        let result = `You have space for ${this.space - this.wines.length} bottles more.\n`;
        result += `You paid ${this.bill}$ for the wine.\n`;
        result += filteredWines.sort((a, b) => a.wineName.localeCompare(b.wineName))
            .map(w => `${w.wineName} > ${w.wineType} - ${w.paid ? 'Has Paid' : 'Not Paid'}.`)
            .join('\n');
        return result;
    }
}