// Array
// Array ialah suatu tipe data yang dapat mengelompokan suatu nilai menjadi satu variabel
// Array  disimbolkan dengan tanda [] dan diakses menggunakan index
// Index sendiri dimuali dari angka 0

let myArray = ["Tono", 42.5, 5, "teratai", true]
console.log(myArray[0])

// Push()
// Metode push digunakan untuk menambahkan nilai di akhir array
myArray.push(null)
console.log(myArray)

// Pop
// Metode pop digunakan untuk menghilangkan nilai akhir pada array
myArray.pop()
console.log(myArray)

// Shift
// Metode unutk mengeluarkan data pertama dalam array
myArray.shift()
console.log(myArray)

// Unshift
// Metode unutuk menambahkan data diawal array
myArray.unshift("JavaScript")
console.log(myArray)

// Delete
// Metode delete digunakan untuk menghapus data didalam array, akan tetapi tidak menghapus sepenuhnya element tersebut
delete myArray[1]
console.log(myArray)

// Splice
// Metode splice digunakan untuk menghapus data sekaligus elemen didalam array tersebut
myArray.splice(1, 1) // menghapus data dari indeks ke 1 sebanyak 1 elemen
console.log(myArray) 