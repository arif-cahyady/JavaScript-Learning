// Asynchronus Handling dengan Promise

// Promise pada JavaScript memiliki 3 kondisi yakni:
/*
 - Pending = keadaan promise sedang berjalan
 - Fulfield = keadaan promise terpenuhi
 - Rejected = keadan promise ditolak
*/

// Promise dapat mmbawa data dan juga error layaknya callback, hanya saja penerapnnya berbeda
// Pada promise data dapat dibawa pada objek resolve, dan error dapat dibawa pada objek reject
// Kedua objek tersebut dapat ditangkap menggunakan function then() dan catch()
// Then akan menangkap objek data dan catch akan menangkap objek error
// Pada saat ingin menggunakan Promise kita perlu mereturn constructor promise nya yakni new Promise

function getUser(isOffline) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const users = ["Joko", "Andi", "Dodi"];
            if (isOffline) {
                reject(new Error('User is offline'))
                return;
            }
            resolve(users)
            
        }, 3000);
    })
}

getUser(false)
    .then(users => console.log(users))
    .catch(err => console.log(err.message))