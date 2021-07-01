const Customer = require('./Customer');

const customer1 = new Customer("Alyssa", 21);
const customer2 = new Customer("Sebastian", 11);

test('downloaded app', () => {
    expect(customer1.downloadApp()).toBe(true);
});

test('is registered', () => {
    expect(customer1.registeredDetails()).toBe("Customer is registered.");
    expect(customer2.registeredDetails()).toBe("You must be 18 or older to register.");
});



