// Map
// Tipe data yang menyimpan koleksi data dengan pasangan key dan value yang mana key nya dapat menggunkana tipe data apapun
// berbeda dengan object yang hanya memperbolehkan keynya menggunakan tipe data string atau symbol
// untuk membuat Map, maka harus menggunkan constructor Map = new Map();

const capital = new Map([
    ['Jakarta', 'Indonesia'], // petik pertama adalah key dan petik kedua adalah value
    ['London', 'Inggris'],
    ['Tokyo', 'Jepang'],
]);

// Cara mendapatkan nilai didalam Map bisa menggunakan metode get() berdasarkan key nya
console.log(capital.get('London'));

// Cara unutk menambahkan data kedalam Map bisa menggunakan metode set()
capital.set('Kuala Lumpur', 'Malaysia');
console.log(capital.get('Kuala Lumpur'));