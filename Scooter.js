class Scooter {
    constructor(scooterId) {
        this.scooterId = scooterId;
    }
    
    async charge() {
        console.log('Starting charge');

        await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds

        console.log('Charge complete');   
    }
}

module.exports = Scooter;