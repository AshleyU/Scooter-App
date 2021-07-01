const Customer = require('./Customer');

test('is registered', () => {
    const customer1 = new Customer("Alyssa", 21);
    expect(customer1.registeredDetails()).toBe("Customer is registered.");
});