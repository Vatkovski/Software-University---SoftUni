class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        const existingFlight = this.flights.find(flight => flight.flightNumber === flightNumber);
        if (existingFlight) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        } else {
            this.flights.push({ flightNumber, destination, departureTime, price });
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        }
    }

    bookFlight(passengerName, flightNumber) {
        const flight = this.flights.find(flight => flight.flightNumber === flightNumber);
        if (!flight) {
            return `Flight ${flightNumber} is not available for booking.`;
        } else {
            this.bookings.push({ passengerName, flightNumber });
            this.bookingsCount++;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
        }
    }

    cancelBooking(passengerName, flightNumber) {
        const index = this.bookings.findIndex(booking => booking.passengerName === passengerName && booking.flightNumber === flightNumber);
        if (index === -1) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        } else {
            this.bookings.splice(index, 1);
            this.bookingsCount--;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
        }
    }

    showBookings(criteria) {
        if (this.bookings.length === 0) {
            throw new Error(`No bookings have been made yet.`);
        }

        let filteredBookings;
        if (criteria === "all") {
            filteredBookings = this.bookings;
        } else if (criteria === "cheap") {
            filteredBookings = this.bookings.filter(booking => {
                const flight = this.flights.find(f => f.flightNumber === booking.flightNumber);
                return flight.price <= 100;
            });
        } else if (criteria === "expensive") {
            filteredBookings = this.bookings.filter(booking => {
                const flight = this.flights.find(f => f.flightNumber === booking.flightNumber);
                return flight.price > 100;
            });
        }

        if (filteredBookings.length === 0) {
            if (criteria === "cheap") {
                return "No cheap bookings found.";
            } else if (criteria === "expensive") {
                return "No expensive bookings found.";
            }
        }

        let message;
        if (criteria === "all") {
            message = `All bookings(${this.bookingsCount}):`;
        } else if (criteria === "cheap") {
            message = "Cheap bookings:";
        } else if (criteria === "expensive") {
            message = "Expensive bookings:";
        }

        const bookingsInfo = filteredBookings.map(booking => `${booking.passengerName} booked for flight ${booking.flightNumber}.`);
        return [message, ...bookingsInfo].join("\n");
    }
}

// Test cases
const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));








