class Ticket {

    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }

    printTickets(arr,criteria) {
        let result = [];

        for (let values of arr) {
            let [destination, price, status] = values.split('|');
            let ticket = new Ticket(destination, price, status);
            result.push(ticket);
        }

        return result.sort((a, b) => a[criteria] > b[criteria]);
    }
}

let ticket = new Ticket();
console.log(ticket.printTickets(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination'));;