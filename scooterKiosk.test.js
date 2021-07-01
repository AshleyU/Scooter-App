const ScooterKiosk = require('./ScooterKiosk');

const scooterK1 = new ScooterKiosk(10, 5);

test('Can rent scooter', () => {
    expect(scooterK1.rentScooter()).toBe("Scooter rented. Enjoy!");
});

test('Can return scooter', () => {
    expect(scooterK1.returnScooter()).toBe(true);
});

test('Can collect payment', () => {
    expect(scooterK1.takePayment()).toBe("Thank you for your payment");
});