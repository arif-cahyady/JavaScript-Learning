// Spread Operator
// Berguna unutk meleburkan nilai didalam array menjadi elemen lemen baru sesuai dengan panjang arraynya
// Disimbolkan dengan tanda ...
let foods = ["Hamburger", "Mixue", "Sandwich", "Hot Dog"];

console.log(foods) // mengembalikan nilai dalam bentuk Array
console.log(...foods) // Mengembalikan nilai dalam bentuk elemen yang sudah dipecah


// Menggabungkan dua buah array menjadi array baru
let animals = ["Cow", "Chicken", "Pig", "Rabbit"]
let others = ["Horse", "Fish", "Bird", "Buffalo"]

let allAnimals = [animals, others]
console.log(allAnimals) // mengembalikan dua buah array yang dimasukan ke dalam array allAnimals

let allAnimals1 = [...animals, ...others]
console.log(allAnimals1) // mengembalikan dua buah array yang digabung menjadi  satu kedalam array allAnimals1

// Spread operator juga berlaku untuk Object