// Assignment operator
// Operator untuk Menginisialisasi Nilai Dari suatu Variabel.
let a = 10
let b = 12

// a = b // nilai pada a akan diganti dengan nilai pada b
// console.log(a)

a += b // a = a + b
a -= b // a = a - b
a /= b // a = a / b
a *= b // a = a * b
a %= b // a = a % b


// Operator Comparison
// Operatoe logika dasar untuk membandingkan dua nilai
// == unutk membandingkan dua nilai apakah sama  (tidak identik)
// != unutk membandingkan dua nilai apakah tidak sama (tidak identik)
// === unutk membandingkan dua nilai apakah sama dan identik
// !== unutk membandingkan dua nilai apakah tidak identik
// > unutk membandingkan dua nilai apakah lebih besar
// < untuk membandingkan dua nilai apakah lebih kecil
// <= / >= unutk membandingkan dua nilai apakah lebih kecil atau lebih besar atau sama dengan

let c = 20
let d = 10
let e = 10

console.log(c <= d)
console.log(c >= d)
console.log(d <= e)


// Operator Logika
// && akan menghasilkan nilai true apabila kedua nilai bernilai benar
// || akan menghasilkan nilai true apabila salah satu nilai menghasilkan nilai benar
// ! Membalikan keadaan suatu nilai

let f = 10
let g = 20

console.log( f < g && g > f) // Output True
console.log( f < g || g < f) // Output True
console.log( !(f < g)) // Output False

