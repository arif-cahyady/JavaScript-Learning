// Object
// Merupakan tipe data ayang dapat menampung banyak nilai dan membentuk data yang kompleks
// Object berisi pasangan key & value yang mana key seperti sebuah variabel dan value merupakan ekspresinya
// Object dibuat menggunakan tanda kurawal {}
// meskipun key adalah string, tapi kita tidak perlu menggunaka tanda "" untuk memebuat nya, kecuali nama key menggunakan karakter spesial contohnya spasi
const myObject = {
    name: "Joko Susanto",
    age: 28,
    species: "Human",
    "Hair Color": "Black",
}

// Cara memanggil Object
// menggunakan operator dot
console.log(myObject.name)

// Menggunakan kurung siku, 
// berlaku unutk memanggil semua key yang menggunakan tanda ""
console.log(myObject["Hair Color"])

// Mengubah nilai pada Object
// Mengubah nilai pada object dapat dilakukan dengan cara menggunakan asignment operator =
// meskipun inisialisasi Object menggunakan const, ini tidak akan berpengaruh ketika kita mengubah nilai dari object itu sendiri
// Hal ini karena property tidak terikat dengan inisialisasi Object itu sendiri
myObject.name = "Danang Suhendra"
myObject["Hair Color"] = "White"
console.log(myObject)

myObject.skin = "Brown" // kode ini akaan menambhakan property baru kedalam myObject, karena property yang sekarang tidak ditemukan
console.log(myObject)

// Menghapus property didalam Object
delete myObject.skin
console.log(myObject)