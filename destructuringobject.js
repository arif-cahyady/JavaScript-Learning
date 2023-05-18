// Destructuring Object
// Metode unutk mengambil nilai didalam object atau memecah data yang kompleks kedalam data yang lebih sederhana
const animals  = {
    wildName: "Lion",
    species: "Wildspecies",
    wol: "Brown",
}

const {wildName, species, wol} = animals
console.log(wildName, species, wol)


// Destructuring Assignment
// digunakan saat kitaingin mengeluarkan nilai pada object akan tetapi sudah ada variabel yang dibuat

const students = {
    fullName: "Joko Dariman",
    religi: "Islam",
    address: "Sanggul"
}

let fullName = "Dio Fernando";
let religi = "Kristen";

({fullName, religi} = students);
console.log(fullName, religi);

// Default Value
({fullName, religi, isMale = true} = students); // = true merupakan default valuenya
console.log(isMale);

// Assigning to Different Local Variable Names
// Menyimpan nilai destrukturing pada property object ke dalam variabel lokal yang berbeda namanya
const {
    fullName: namaLengkap, 
    religi: agama, 
    address: alamat,
} = students;

console.log(agama);