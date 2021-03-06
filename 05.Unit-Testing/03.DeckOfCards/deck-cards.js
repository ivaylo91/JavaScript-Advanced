/*
  Write a JS function that takes a deck of cards as a string array and prints them as a sequence of cards (space
separated). Print &quot;Invalid card: [card]&quot; when an invalid card definition is passed as input. Use the solution from the
previous task to generate the cards.
 */
function printDeckOfCards(cards) {
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

    let deck = [];

    for (let cardAsString of cards) {
        let face = cardAsString.substring(0, cardAsString.length - 1);
        let suit = cardAsString[cardAsString.length - 1];

        try {
            deck.push(makeCard(face, suit));
        } catch (err) {
            console.log(`Invalid card: ${cardAsString}`);
        }
    }

    return deck.join(' ')
}

console.log(printDeckOfCards(['AS', '10D', 'RH', '2C']));