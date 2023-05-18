// Pewarisan (inheritance)
// Pewarisan biasanya dibuat ketika kita ingin membuat dua buah object yang hampir memiliki fungsi yang sama
// Pewarisan memiliki SuperClass (induk) dan SubClass (anak) dalam pengimplementasian nya
// SubClass dapat mewarisi sifat dari SuperClass dengan keyword extends
// kita dapat juga mengakses method dari SuperClass dengan keyword this

// SuperClass
class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        return `${this.sender} sent ${message} to ${receiver}`;
    }
}

// SubClass
class EmailService extends MailService {
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
          this.sendMessage(message, receiver);
        }, delay);
      }
}

// SubClass
class WhatsappService extends MailService {
    sendBroadcastMessage(message, receiver) { // method spesifik dari SubClass
        // for (let i = 0; i < receiver.length; i++) {
        //     return this.sendMessage(message, receiver)
            
        // }
        for (const receivers of receiver) {
          return this.sendMessage(message, receiver);
        }
      }
}

let whatsapp = new WhatsappService('+6281234567890');
console.log(whatsapp.sendMessage('Hello', '+6289876543210'));
console.log(whatsapp.sendBroadcastMessage('Hello', [+6289876543210, +6282234567890]));

 
// Instance Off
// Suatu cara untuk mengecek apakah object memiliki prototype dari class tertentu
 console.log(whatsapp instanceof WhatsappService) // akan mengembalikan true, karena whatsapp merupakan objek dari WhatsappService

 // instance of juga akan mengecek prototype dari SuperClass yang dimiliki suatu Objek
 console.log(whatsapp instanceof MailService) // akan mengembalikan true, karena MailService merupakan SuperClass dari objek whatsapp