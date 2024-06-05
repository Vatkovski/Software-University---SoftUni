class BikeRentalService {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }

    addBikes(bikes) {
        let addedBrands = [];
        for (let bike of bikes) {
            let [brand, quantity, price] = bike.split('-');
            quantity = Number(quantity);
            price = Number(price);
            let existingBike = this.availableBikes.find(b => b.brand === brand);
            if (existingBike) {
                existingBike.quantity += quantity;
                existingBike.price = Math.max(existingBike.price, price);
            } else {
                this.availableBikes.push({ brand, quantity, price });
                addedBrands.push(brand);
            }
        }
        return `Successfully added ${addedBrands.join(', ')}`;
    }

    rentBikes(selectedBikes) {
        let totalPrice = 0;
        for (let bike of selectedBikes) {
            let [brand, quantity] = bike.split('-');
            quantity = Number(quantity);
            let availableBike = this.availableBikes.find(b => b.brand === brand);
            if (!availableBike || availableBike.quantity < quantity) {
                return "Some of the bikes are unavailable or low on quantity in the bike rental service.";
            } else {
                availableBike.quantity -= quantity;
                totalPrice += quantity * availableBike.price;
            }
        }
        return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    returnBikes(returnedBikes) {
        for (let bike of returnedBikes) {
            let [brand, quantity] = bike.split('-');
            quantity = Number(quantity);
            let availableBike = this.availableBikes.find(b => b.brand === brand);
            if (!availableBike) {
                return "Some of the returned bikes are not from our selection.";
            } else {
                availableBike.quantity += quantity;
            }
        }
        return "Thank you for returning!";
    }

    revision() {
        let output = "Available bikes:\n";
        this.availableBikes.sort((a, b) => a.price - b.price);
        for (let bike of this.availableBikes) {
            output += `${bike.brand} quantity:${bike.quantity} price:$${bike.price}\n`;
        }
        output += `The name of the bike rental service is ${this.name}, and the location is ${this.location}.`;
        return output;
    }
}


const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());
