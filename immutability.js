// Immutability
// konsep immutable artinya ketika objek telah dibuat, maka objek tersebut ntidak bleh berubah nilainya

const user = {
    firstName: "John",
    lastName: "Kendy", // contoh kita typo dalam penulisannya
}

// cara mengatasinya
const renameLastName = (lastName, user) => {
    user.lastName = lastName;
    return user;
}

const newLastName = renameLastName("Kenedy", user)
console.log(newLastName)
// objek user juga ikut berubah, padahal nini tidak boleh ikut berubah
console.log(user)

// Cara mengatasinya menggunkan konsep Immutable

const person = {
    firstName: "Harry",
    lastName: "Porter",
}

const createNewLastName = (newLastName, person) => {
    return {...person, lastName: newLastName}
}

const personWithNewLastName = createNewLastName("Potter", person)
console.log(person)
console.log(personWithNewLastName)


