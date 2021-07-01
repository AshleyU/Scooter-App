class ScooterKiosk {
    constructor() {
    }

    rentScooter() {
        if (Scooter.chargeScooter() === true) {
            return "Scooter rented. Enjoy!";
        } else {
            
        }
    }

    takePayment() {

    }
}

module.exports = ScooterKiosk;