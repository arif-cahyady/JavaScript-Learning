// Function Parameter
// Merupakan Sebuah variabel yang akan dieksekusi kedalam blok logika function itu sendiri
// parameter dapat berupa string,object, maupun array
// unutk parameter bertipe object kita dapat menggunakan destructuring object

const student = {
    id: 12,
    firstName: 'Andika',
    lastName: 'Darma',
}

function displayName({firstName, lastName}) {
    console.log(`${firstName} is ${lastName}`)
}

displayName(student)

// Default Parameters
// Fungsi pada JavaScript tidak mengecek jumlah maupun tipe argument yang diterima oleh parameter
// Sehingga apabila kita mengirimkan argumen lebih sedikit atau lebih banyak dari parameter nya, maka nilai tersebut akan bernilai undefined
// Untuk mencegah hal tersebut kita dapat menggunakan nilai default pada parameter

function perkalian(bilanganAsli, eksponen = 5) {
    let result = bilanganAsli * eksponen;
    console.log(`${bilanganAsli} * ${eksponen} = ${result}`);
}

perkalian(2)

// Rest Parameter
// Kebalikan dari spread operator, dimana rest parameter berguna untuk menggabungkan beberapa elemen/argumen menjadi satu didalam array

function hitungan(...numbers) {
    let result = 0;

    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(hitungan(1,2,3,6,5))



