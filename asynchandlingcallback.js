// Asynchronus Handling dengan Callback
// callback adalah fungsi yang disisipkan pada argumen fungsi yang asynchronus dan akan dipannngil dengan membawa data-data pada fungsi apabila proses dinyatakan selesai.


function getUsers(callback) {
    setTimeout(() => {
        const users = ['joko', 'danu', 'herman', 'dio']
        callback(users)
    }, 3000)
}

// cara memanggil callback
// kita harus memberikan argumen fungsi ketika memanggil fungsi tersebut
// fungsi ini akan dipanggil ketika proses asynchronus selesai sekaligus membawa data-data users

// getUsers((users) => {
//     console.log(users)
// })

// atau kita juga bisa mendeklarasikan fungsi callback
function usersCallback(users) {
    console.log(users)
}

getUsers(usersCallback)

// Dalam proses asynchronus, maka pasti akan berpotensi untuk menimbulkan error
// dalam hal ini, callback tidak hanya semata-mata membawa data akan tetapi juga membawa error apabila proses bermasalah
// argumen error pada callback selalu berada pada bagian kiri sebelum argumen data

function getUsers1(isOffline, callback) {
    setTimeout(() => {
        const users = ['joko', 'danu', 'herman', 'dio']

        if (isOffline) {
            callback(new Error('Maaf users sedang Offline'), null)
        }

        callback(null, users)
    }, 3000)
}

function usersCallback1(error, users)  {// fungsi callback ini menerima argumen error dan data dari fungsi getuserts
    if (error) {
        console.log('Proccess error: ', error.message)
        return;
    }
    console.log('Proccess success: ' , JSON.stringify(users))
}

getUsers1(true, usersCallback1)
getUsers1(false, usersCallback1)