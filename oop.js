// OOP (Object Oriented Programming)
// Terdiri dari Properties dan method
// Properties adalah nilai didalam object yang menyimpan informasi tentang object tersebut 
// Method ialah kemampuan atau aksi apa yang bisa dilakukan oleh object tersebut

const car = {
    // Properties
    color: 'red',
    maxSpeed: 1000,
    brand: 'Ford',
    // Method
    drive: () => {
        console.log('driving')
    },
    turn: () => {
        console.log('Turning')
    }
}
// Memanggil Properties
console.log(car.color)
console.log(car.maxSpeed)
// Memanggil Methods
car.turn()