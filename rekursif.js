// Rekursif
// merupakan fungsi yang memanggil dirinya sendiri

function hitungFaktor(n) {
    if (n === 0) {
        return;
    }
    console.log(n)
    return hitungFaktor(n-1)
    
}

hitungFaktor(10)