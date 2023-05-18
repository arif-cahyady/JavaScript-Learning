//  Undefined values
// tipe data yang tidak memiliki sebuah nilai
let x
console.log(typeof(x)) // typeof digunakan digunakan untuk memastikan tipe data pada variabel dengan mengembalikan tipe data tersebut dalam bentuk teks.


// Number
// tipe data yang memiliki nilai berupa angka.
let y = 10
console.log(typeof(y))

// pada tipe data number kita juga dapat melakukan perhitungan aritmatika
let a = 6
let b = 10

console.log(a + b) // penjumlahan
console.log(a - b) // pengurangan
console.log(a / b) // pembagian
console.log(a * b) // perkalian
console.log(a % b) // hasil sisa bagi
console.log(a ** b) // perpangkatan

// Increment dan Decrement
// Increment adalah menjumlahkan nilai 1 pada nilai yang sekarang dan Decrement mengurangi nilai 1 pada nilai yang sekarang
// Increment ++ dan Decrement --

let c = 5
console.log(c++) // output = 5
console.log(++c) // output = 6
console.log(c--) // output = 5
console.log(--c) // output = 4


// BigInteger
// Tipe data untuk menampung lebih banyak angka. Biasanya digunakan unutk Cryptocurency atau Perhitungan waktu yang kompleks.
let angka = 1234567890123456789012345678901234567890n //tanda n adalah implementasi dari BigInteger
console.log(angka)


// String
// Tipe data yang berisikan Kata. Tanda ' atau " digunakan untuk membuat nilai string.

let Hewan = "Gajah";

// String Concatenation
// Penggabungan dua buah nilai string yang disimbolkan +.
let FirstName = " Joko"
let LastName = " Wibowo"
console.log(FirstName + " " + LastName) // Tanda petik disini digunakan unutk mengatur spasi antara dua nilai string


// String Interpolation
// Biasa disebut juga sebagai Template Literal. Disimbolkan dengan tanda `(Backtip)terletak dibawah tombol Esc
let Umur = 12
console.log(`Halo Nama Saya Joko dan Saya berumur ${Umur} tahun`)


// Boolean 
// Tipe data yang hanya memuat dua nilai yakni True dan Flase. Biasa digunakan untuk sebuah logik pemrograman

let d = 10
let e = 12

let isLess = d < e
let isGreater = d > e

console.log(isLess)
console.log(isGreater)
