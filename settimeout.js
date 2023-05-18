// Set time out
// Sebuah fungsi yang digunakan untuk melakukan penjadwalan pemanggilan sebuah fungsi sekaligus menjadikan nya sebagai Asynchronus
/*
Fungsi tersebut menerima dua argumen dengan penjelasan berikut.
 - Argumen pertama merupakan sebuah fungsi yang akan dipanggil secara terjadwal dan asynchronous.
 - Argumen kedua merupakan delay waktu dalam satuan milisecond yang menentukan delay dari pemanggilan fungsi pada argumen pertama.
*/

console.log("Halo Selamat Datang")

setTimeout(() => {
    console.log("Terimakasih Telah Berkunjung")
}, 3000) // berapa lama fungsi didalam ini akan dijalankan, dalam hal ini adalah 3 detik

console.log("Ada yang bisa kami bantu?") // kode ini akan dijalankan terlebih dahulu