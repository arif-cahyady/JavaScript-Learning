// Loop
// Loop atau pengulangan biasanya digunakan jika kita ingin menulis suatu nilai secara berulang ulang


// For
/* for (inisialisasi; kondisi terminasi; increment/decrement) {
    console.log() // Aksi yang ingin dilakukan
}*/

for (let i = 0; i < 7; i++) {
    console.log(i)
}

// For .. of
// Sama halnya dengan for, hanya saja lebih ringkas dan biasanya digunakan unutk memecah nilai didalam array
let myArray = ["joko", "dono", "salsa", 1];

for (const myItem of myArray) {
    console.log(myItem)
}


// While
// Perulangan menggunakan while tidak terikat dengan kondisi variabel iterasi sehingga cocok digunakan untuk perulangan yang kita tidak tahu seberapa banayak perulanagn akan dibuat
let i = 1

while (i <= 10) {
    console.log(i)
    i++
}



// Do..while
// Sama halnya dengan while,akan tetapi Do..while akan menjalan kan kode didalam blok sebanayk satu kali walaupun kondidsi nya bernilai false
let x = 10

do {
    console.log(x)
} while (x < 1); // output 10, karena kondisinya bernilai false

