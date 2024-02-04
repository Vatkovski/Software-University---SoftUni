function manageTickets(ticketDescriptions, sortingCriterion) {
    class Ticket {
        constructor(destination, price, status) {
          this.destination = destination;
          this.price = price;
          this.status = status;
        }
      }
    const tickets = [];
  

    ticketDescriptions.forEach(description => {
      const [destination, price, status] = description.split('|');
      tickets.push(new Ticket(destination, parseFloat(price), status));
    });
  

    tickets.sort((a, b) => {
      switch (sortingCriterion) {
        case 'destination':
          return a.destination.localeCompare(b.destination);
        case 'price':
          return a.price - b.price;
        case 'status':
          return a.status.localeCompare(b.status);
        default:
          throw new Error(`Invalid sorting criterion: ${sortingCriterion}`);
      }
    });
  
    return tickets;
  }
  
  const ticketDescriptions = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
  ];
  
  const sortedTicketsByDestination = manageTickets(ticketDescriptions, 'destination');
  console.log(sortedTicketsByDestination);
  
  const sortedTicketsByStatus = manageTickets(ticketDescriptions, 'status');
  console.log(sortedTicketsByStatus);
  