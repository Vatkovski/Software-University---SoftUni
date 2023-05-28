function cinemaTickets(input) {
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
  
    while (input.length > 0) {
      let movie = input.shift();
      if (movie === "Finish") break;
  
      let availableSeats = parseInt(input.shift());
      let soldTickets = 0;
  
      while (true) {
        let ticketType = input.shift();
        if (ticketType === "End") break;
  
        soldTickets++;
        totalTickets++;
  
        switch (ticketType) {
          case "student":
            studentTickets++;
            break;
          case "standard":
            standardTickets++;
            break;
          case "kid":
            kidTickets++;
            break;
        }
  
        if (soldTickets === availableSeats) break;
      }
  
      let percentageFull = (soldTickets / availableSeats) * 100;
      console.log(`${movie} - ${percentageFull.toFixed(2)}% full.`);
    }
  
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
  }
  
  cinemaTickets([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
  ]);
  