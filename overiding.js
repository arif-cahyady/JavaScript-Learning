// Overiding
// Merupakan fitur yang memperbolehkan SubClass mendefinisikan implementasinya sendiri
// Meskipun implementasinya sudah dibuat di SuperClass

// Constructor Overiding & Method Overiding 
class MailServices {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        return `${this.sender} send ${message} to ${receiver}`
    }
}

class WhatsAppServices extends MailServices {
    // constructor overiding
    constructor(sender, isBussines) { // kita mengimplementasikan lagi constructor method, padahal pada SuperClass nya sudah dibuat
        super(sender) // method super digunakan untuk memanggil method constructor di SuperClass
        this.isBussines = isBussines; // properties yang baru di implementasikan
    }

    // Method overiding
    sendMessage(message, receiver) {
        return `${this.sender} send ${message} to ${receiver} via whatsapp`;
    }
}

const whatsapp = new WhatsAppServices('62822716171', true);
console.log(whatsapp.sendMessage('Hallo', 'Some Receiver'))
// console.log(whatsapp)