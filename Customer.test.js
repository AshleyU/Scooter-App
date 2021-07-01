const Customer = require('./Customer');

const customer1 = new Customer("Alyssa", 21);

test('downloaded app', () => {
    expect(customer1.downloadApp()).toBe(true);
});

test('is registered', () => {
    expect(customer1.registeredDetails()).toBe("Customer is registered.");
});

