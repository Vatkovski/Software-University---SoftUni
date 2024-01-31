function createCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = {
        'S': '\u2660', // Spades
        'H': '\u2665', // Hearts
        'D': '\u2666', // Diamonds
        'C': '\u2663'  // Clubs
    };

    if (!validFaces.includes(face)) {
        throw new Error('Invalid card face!');
    }

    if (!validSuits.hasOwnProperty(suit)) {
        throw new Error('Invalid card suit!');
    }

    return {
        face: face,
        suit: suit,
        toString: function() {
            return this.face + validSuits[this.suit];
        }
    };
}

let card = createCard('A', 'S');
// let card = createCard('1', 'C'); // Throws Error: Invalid card face!

console.log(card.toString());
