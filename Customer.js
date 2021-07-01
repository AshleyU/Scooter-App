class Customer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.downloadApp = true;
    }

    downloadApp() {
        this.downloadApp = true;
    }

    registeredDetails() {
        if(this.age > 17) {
            return "Customer is registered.";
        } else {
            return "You must be 18 or older to register.";
        }

    }

    rentScooter() {

    }

    returnScooter() {

    }
}

module.exports = Customer;