// Untuk menangani error pada JavaScript kita dapat menggunakan blok kode try catch
// taruh kode yang berpotensi error pada blok try
// apabila terdapat error pada blok try maka blok kode catch akan dijalankan

try {
    console.log("Kode ini tidak Error");
    errorCode; // baris kode ini kana error, karena errorCode tidak pernah didefinisikan
    console.log("Kode ini tidak Error")
} catch (error) { // parameter error dapat diganti oleh apapun

    console.log(error.name) // untuk memunculkan nama errornya
    console.log(error.message) // unutk memunculka pesan kesalhannya
    console.log(error.stack) // untuk memunculkan baris kode yang salah
}

// Try Catch Finnaly
// Blok kode ini akan dijalankan, apapun yang terjadi
try {
    console.log("Kode ini Berhasil!!!");
    errorCode; // baris kode ini kana error, karena errorCode tidak pernah didefinisikan
    console.log("Kode ini Berhasil!!!")
} catch (error) { // parameter error dapat diganti oleh apapun

    console.log(error.name) // untuk memunculkan nama errornya
    console.log(error.message) // unutk memunculka pesan kesalhannya
    console.log(error.stack) // untuk memunculkan baris kode yang salah
} finally {
    console.log("Kode ini akan tetap dijalankan")
}