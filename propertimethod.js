// Properti & Method
// Ada dua tipe properti yakni data properti dan acesor properti
// data properti adalah properti yang lansung menampung sebuah data
// Sedangkan acesor properti adalah properti yang diatur menggunakan getter (unutk mengambil properti didalam object) dan setter (unutk mengatur pembuatan propert pada object)

class Car {
    constructor(name) {
        this.name = name;
        this._noMachine = this._generateNoMachine();
    }
    // membuat getter
    get noMachine() {
        //getter harus mengembalikan nilai
        return this._noMachine;
    }
    // membuat setter
    set noMachine(noMachine) {
        // pada setter kita dapat mengatur apakah orang lain dapat merubah atau tidak properti ini
        // pada contoh ini kita tidak dapat mengubahnya
        console.log("Sorry,, You not allowed to change this properties.")
    }
    // membuat method
    drive() {
        console.log(`${this.name} is driving with number Machine ${this.noMachine}`)
    }

    turn(direction) {
        console.log(`${this.name} is turning to ${direction} with number Machine ${this.noMachine}`)
    }
    //membuat private method
    _generateNoMachine() {
        return `${this.name} - ${Math.floor(Math.random() * 1000)}`;
    }
}

const car1 = new Car('Fords');
console.log(car1)
car1.noMachine = "Fords-1";
console.log(car1)
car1.drive()
car1.turn("left")

// Method merupakan fungsi yang berada didalam class(*lihat baris kode nomor 23) dan dapat diakses melalui instance class tersebut(*lihat baris koed no 40)
// Method dapat menampung sebuah parameter(*lihat baris kode no 27)
// Method juga dapat mengakses nilai properti dan juga funsi pada class menggunakan keyword this
// Kita juga dapat membuat sebuah methode untuk megkekstraksi sebuah methkode agar lebih mudah dibaca
// Method internal ini biasa disebit dengan private method dan diawali dengan underscore _


// Member Visibility
