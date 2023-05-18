// Promise Static Method

// Promise.all()
// promise all digunakan untuk mengeksekusi banyak promise secara paralel.
// nilai pada tiap-tiap resolve yand dibawa akan dimasukan kedalam satu array
// pada saat nilai bernilai reject, makan promise akan langsung mengembalikan nilai reject dan menghentikan proses lainnya

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));
const promise4 = new Promise((resolve) => setTimeout(() => resolve(4), 4000));

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))

// Promise.race()
// promise race digunakan untuk mengeksekusi banyak promise secara paralalel,
// akan tetapi hanya mengembalikan nilai dari suatau proses tercepat saja
// jika terdapat rejected pada proses dan yang paling cepat, makaz nilai rejected akan dikambalikan


const promise5 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups'), 1000)))
const promise6 = new Promise((resolve, reject) => setTimeout(() => resolve(2), 8000))

Promise.race([promise5, promise6])
    .then(values => console.log(values))
    .catch(err => console.log(err.message))


// Promise.allSettled
// mirip dengan promise.all, hanya saja mengembalikan nilai dalam array of object dan seluruh nilai hasil proses (baik yang reject maupun resolve)

const promise7 = new Promise((resolve) => setTimeout(() => resolve(2), 2000))
const promise8 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Invalid')), 3000))

Promise.allSettled([promise7, promise8]).then(values => console.log(values)).catch(err => console.error(err.message))


// Promise.any()
// Sama kerjanya dengan promise.race, hanya saja mengembalikan nilai yang bersifat fullfield
// Apabila seluruh proses bernilai rejected, maka akan mengembalikan nilai All Promise were rejected
