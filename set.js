// Set
// Tipe data yang berisi kumpulan nilai (set Of values)
// Set tidak terikat oleh indeks dan juga tidak beraturan
const mySet = new Set([1,2,2,4,3,5,6,5,7]);

console.log(mySet);

// Menambahkan data kedalam set
mySet.add(9); // data yang ingin dimasukan tidak boleh sama dengan data yang diatas, karena didalm set jika ada data yang sama maka akan diabaikan

console.log(mySet);
// Menghapus data didalam set
mySet.delete(2); // 2 disini bukan indeks melainkan nilai itu sendiri
mySet.delete(5); 

console.log(mySet);



