// Switch Case Statement
// Memiliki fungsi yang sama dengan if statement. hanya saja dengan menggunakan Switch case statement kode kita akan lebih ringkas untuk dilihat

let language = "Japanesse"
let greeting = "null"

switch (language) {
    case "English":
        greeting = "Good Morning!"
        break; // digunakan untuk keluar dari kondisi switch
    case "France":
        greeting = "Bonjour!"
        break;
    case "Japanesse":
        greeting = "Ohaiyou Gozaimasu!"
        break; 
    default:
        greeting = "Selamat Pagi!"
        break;
}

console.log(greeting)