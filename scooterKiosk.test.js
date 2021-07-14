const ScooterKiosk = require('./ScooterKiosk');

const scooterK1 = new ScooterKiosk(10, 5);
const scooterK2 = new ScooterKiosk(15, 0);

test('Can rent scooter', () => {
    expect(scooterK1.rentScooter()).toBe("Scooter rented. Enjoy!");
    expect(scooterK2.rentScooter()).toBe("This scooter is not charged.");
});

test('Can return scooter', () => {
    expect(scooterK1.returnScooter()).toBe(true);
    expect(scooterK2.returnScooter()).toBe(false);
});

test('Can collect payment', () => {
    expect(scooterK1.takePayment()).toBe("Thank you for your payment");
    expect(scooterK2.takePayment()).toBe("Please return your scooter to pay");
});


console.log("test");