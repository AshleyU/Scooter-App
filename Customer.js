class Customer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    downloadApp() {
        return true;
    }

    registeredDetails() {
        if(this.age > 17) {
            return "Customer is registered.";
        } else {
            return "You must be 18 or older to register.";
        }

    }
}

module.exports = Customer;