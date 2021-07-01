const Customer = require("./Customer");
const Scooter = require("./Scooter");

class ScooterKiosk {
    constructor(kioskNumber, availableScooters) {
        this.kioskNumber = kioskNumber;
        this.availableScooters = availableScooters;
    }

    rentScooter() {
        if (this.availableScooters > 0) {
            return "Scooter rented. Enjoy!";
        } else {
            return "This scooter is not charged.";
        }
    }

    returnScooter() {
        if(this.rentScooter() === "Scooter rented. Enjoy!") {
            return true;
        }
    }

    takePayment() {
        if(this.returnScooter() === true) {
            return "Thank you for your payment";
        } 
    }
}

module.exports = ScooterKiosk;