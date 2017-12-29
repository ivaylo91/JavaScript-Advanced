/*
Create a JS factory function that returns a Card object to hold a card’s face and suit, both set trough the
constructor. Throw an error if the card is initialized with invalid face or suit or if an attempt is made to change the
face or suit of an existing instance to an invalid value.
 */
function makeCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuit = ['S', 'H', 'D', 'C'];

    if (!validFaces.includes(face)) {
        throw new Error("Invalid face");
    }
    if (!validSuit.includes(suit)) {
        throw new Error("Invalid suit");
    }
    let card = {
        face: face,
        suit: suit,
        toString: () => {
            let suitToChar = {
                'S': "\u2660",
                'H': "\u2665",
                'D': "\u2666",
                'C': "\u2663"
            };
            return `${card.face} ${suitToChar[card.suit]}`;
        }
    };
    return card;
}

let card = makeCard('2', 'S');
console.log('' + card);
let anotherCard = makeCard('9', 'H');
console.log(anotherCard.toString());