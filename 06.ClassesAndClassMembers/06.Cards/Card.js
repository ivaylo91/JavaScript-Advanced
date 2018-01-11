let Suits = {
    SPADES: "\u2660",
    HEARTS: "\u2665",
    DIAMONDS: "\u2666",
    CLUBS: "\u2663"
};

class Card {

    constructor(face, suit) {
        this._face = face;
        this._suit = suit;
    }

    get face() {
        return this._face;
    }

    set face(value) {

        if (!Card.validFaces.includes(value)) {

            throw new Error("Invalid face");
        }

        this._face = value;
    }

    get suit() {
        return this._suit;
    }

    set suit(value) {
        if (!Object.keys(Suits).map(k => Suits[k]).includes(value)) {

            throw new Error("Invalid suit");
        }

        this._suit = value;
    }

    toString() {
        return this._face + this._suit;
    }

    static get validFaces() {

        return Card._validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    }
}

let card = new Card();
card.face = '2';
card.suit = Suits.DIAMONDS;
console.log(' ' + card);
let card2 = new Card('1', Suits.CLUBS);
console.log(' ' + card2);

