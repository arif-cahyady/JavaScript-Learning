// Arrow function
// Arrow function mirip dengan function regular, hanya saja arrow function bersifat expression function

const sayHello = (greeting) => {
    console.log(`Hello, ${greeting}`)
}

sayHello('Good Morning')

// Apabila function hanya memiliki satu parameter, maka tidak perlu menulis tanda kurung

const sayName = nama => {
    console.log(`Good Morning, ${nama}`)
}

sayName('Dono')

// Apabila function hanya memiliki satu baris perintah, maka tidak perlu tanda kurawal

const capital = country => console.log(`I Life in ${country}`)

capital('Indonesia')

// Apabila function hanya mengembalikan nilai, maka tidak perlu menuliskan keyword return (berlaku hanya untuk satu abris perintah)

const multiply = (a,b) => a * b;
console.log(multiply(2,5))

// dengan menggunakan arrow function maka baris perintah kode kita akan terliahat lebih rapi