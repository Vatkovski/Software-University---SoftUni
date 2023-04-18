// Define a function named skiTrip that takes an array of input values as a parameter
function skiTrip(input) {

    // Extract the input values into separate variables using destructuring
    const days = Number(input[0]); // Number of days Atanas will stay in the hotel
    const typeOFRoom = input[1]; // Type of room Atanas will stay in
    const evaluation = input[2]; // Whether Atanas' evaluation of the hotel is positive or negative
    const nights = days - 1; // Calculate the number of nights Atanas will stay in the hotel
  
    // Define constants for the prices of each type of room
    const roomForOnePersonPrice = 18;
    const apartmentPrice = 25;
    const presidentApartmentPrice = 35;
  
    // Initialize a variable to hold the total cost of Atanas' stay
    let totalCost = 0;
  
    // Use a switch statement to calculate the cost of Atanas' stay based on the type of room he will stay in
    switch (typeOFRoom) {
      case "room for one person":
        // If Atanas is staying in a room for one person, calculate the total cost based on the price per night
        totalCost = roomForOnePersonPrice * nights;
        break;
      case "apartment":
        // If Atanas is staying in an apartment, calculate the total cost based on the price per night and the discount based on the length of stay
        totalCost = apartmentPrice * nights;
        if (days < 10) {
          totalCost *= 0.7;
        } else if (days >= 10 && days <= 15) {
          totalCost *= 0.65;
        } else {
          totalCost *= 0.5;
        }
        break;
      case "president apartment":
        // If Atanas is staying in a presidential apartment, calculate the total cost based on the price per night and the discount based on the length of stay
        totalCost = presidentApartmentPrice * nights;
        if (days < 10) {
          totalCost *= 0.9;
        } else if (days >= 10 && days <= 15) {
          totalCost *= 0.85;
        } else {
          totalCost *= 0.8;
        }
        break;
    }
  
    // Apply the additional charge or discount based on Atanas' evaluation of the hotel
    if (evaluation === "positive") {
      totalCost *= 1.25;
    } else {
      totalCost *= 0.9;
    }
  
    // Print the total cost of Atanas' stay to the console with 2 decimal places
    console.log(totalCost.toFixed(2));
  }
  