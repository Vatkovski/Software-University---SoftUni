function printDeckOfCards(cards) {
    function createCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = {
            'S': '\u2660', // Spades
            'H': '\u2665', // Hearts
            'D': '\u2666', // Diamonds
            'C': '\u2663'  // Clubs
        };

        if (!validFaces.includes(face) || !validSuits.hasOwnProperty(suit)) {
            return null;
        }

        return {
            face: face,
            suit: suit,
            toString: function() {
                return this.face + validSuits[this.suit];
            }
        };
    }

    let result = '';
    for (let cardStr of cards) {
        let face = cardStr.slice(0, -1);
        let suit = cardStr.slice(-1);
        let card = createCard(face, suit);

        if (card === null) {
            console.log(`Invalid card: ${cardStr}`);
            return;
        }

        result += card.toString() + ' ';
    }

    console.log(result.trim());
}

printDeckOfCards(['AS', '10D', 'KH', '2C']); 
// printDeckOfCards(['5S', '3D', 'QD', '1C']);
