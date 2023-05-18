// Constructor function
// Ada dua cara untuk membuat constructor function, yakni

// Prototype constructor
function Car(color, brand, maxSpeed) {
    this.color = color;
    this.brand = brand;
    this.maxSpeed = maxSpeed;
}

Car.prototype.drive = function() {
    console.log(`${this.brand} with color ${this.color} is Driving`)
}


Car.prototype.turn = function() {
    console.log(`${this.brand} with color ${this.color} is Turning`)
}

const car1 = new Car('Red', 'Toyota', 1000);
const car2 = new Car('Black', 'Audi', 900);

console.log(car1)

car1.drive()



// Class Constructor
class Motor {
    constructor(name, color, maxSpeed) {
        this.name = name;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }

    drive() {
        console.log(`${this.name} with color ${this.color} is driving in ${this.maxSpeed} km/h`)
    }

    turn() {
        console.log(`${this.name} with color ${this.color} is turning in ${this.maxSpeed} km/h`)
    }
}


const motor1 = new Motor('Ninja', 'red', 200)
const motor2 = new Motor('Supra', 'green', 400)

console.log(motor1)

motor2.drive()