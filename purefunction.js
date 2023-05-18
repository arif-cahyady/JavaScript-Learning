// Pure Function
// merupakan function yang tidak bergantung pada nilai dari luar fungsi atau parameternya

let PI = 3.14;
function hitungLuas(jariJari) {
    return PI * (jariJari*jariJari) // nilai PI dapt berubah karena bergantung dari nilai di luar fungsi
}
console.log(hitungLuas(2))
// secara tidak sengaja kita mengubah nilai PI, sehingga nilai pada fungsi juga ikut berubah
PI = 7;
console.log(hitungLuas(2))

// dengan konsep pure function kita dapat mengatasinya
function hitungLingkaran(r) {
    return 3.14 *( r * r )
}
console.log(hitungLingkaran(3))

// selain tidak boleh bergantung pada nilai diluar, pure function juga tidak boleh menimbulkan efek samping pada nilai diluarnya

function personWithAge(age, person) {
    person.age = age;
    return person;
}

const person = {
    name: 'John',
}
// object person akan ikut berubah, karena perintah dari baris kode dari fungsi diatas
const createPerson = personWithAge(18, person);
console.log({
    person,
    createPerson,
})

function studentWithAge(age, student) {
    return {age, ...student}
}

const student = {
    name: "Boby",
}

const createStudent = studentWithAge(18, student)
console.log({
    student,
    createStudent,
})

/* 
Agar lebih mudah dalam mengetahui apakah fungsi yang Anda buat sudah pure atau belum, 
pastikan 3 konsep ini ada pada fungsi yang Anda buat.
    - Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
    - Hanya bergantung pada argumen yang diberikan.
    - Tidak menimbulkan efek samping.
*/
