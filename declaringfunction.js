// Function
// Merupakan sebuah variable yang berisi blok logika. Blok logika tersebut akan dijalankan ketika nama fungsinya dipanggil

function myFunc(a,b) { // Di dalam blok spasi kita dapat menambahkan variable yang disebut dengan parameter
    return a * b
}
 console.log(myFunc(2,2))

// Parameter dan Argumen
// Parameter merupakan variabel yang akan dieksekusi didalam blok kode function
// Sedangkan Argumen merupakan nilai atau expression dari parameter itu sendiri

function greeting(language, name) { // name dan language merupakan parameter
    if (language == 'Indonesia') {
        console.log(`Selamat Pagi, ${name}`)
    } else if(language == 'Japanese') {
        console.log(`Ohaiyo Gozaimassu, ${name}`)
    } else {
        console.log(`Good Morning, ${name}`)
    }
}

greeting('Japanese','Dono') // japanese dan dono merupakan argumen

// Return
// Keyword return digunakan untuk mengembalikan nilai pada function
function greetings(language, name) { // name dan language merupakan parameter
    if (language == 'Indonesia') {
        return `Selamat Pagi, ${name}`
    } else if(language == 'Japanese') {
        return `Ohaiyo Gozaimassu, ${name}`
    } else {
        return `Good Morning, ${name}`
    }
}

let myGreeting = greetings('Indonesia', 'Dono');
console.log(myGreeting);


// Expression function
// Membuat sebuah blok function yang dijadikan sebuah nilai dan dimasukan kedalam variabel
let greetings1 = function(language, name) { 
    if (language == 'Indonesia') {
        return `Selamat Pagi, ${name}`
    } else if(language == 'Japanese') {
        return `Ohaiyo Gozaimassu, ${name}`
    } else {
        return `Good Morning, ${name}`
    }
}

console.log(greetings1('Japanese', 'Dono'));