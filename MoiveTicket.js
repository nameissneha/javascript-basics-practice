// 4) Movie Ticket Pricing

// Ticket price depends on age. For adults (12–59), students get cheaper.


let age = 222;
let isStudent = true;

let ticketPrice = 0;


if (age <12){
    price = 50;
} else if (age >= 12 && age <= 25) {

    if (isStudent === true ) {
        ticketPrice = 80;
    } else { 
        ticketPrice = 100;
    }
}
else {
    ticketPrice = 120;
}

console.log("Ticket Price:", ticketPrice);