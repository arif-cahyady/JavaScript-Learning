// Promisify
// Mengubah kode dengan pola Callback ke pola Promise
// Note!! kode dibawah ini tidak dapt dijalankan. jika ingin menjalankannya harus menggunakan node.js

const { promisify } = require('util'); // library yang disediakan oleh node js untuk mengubah callback menjadi promise secara otomatis

function getProvinces(countryId, callback) {
  setTimeout(() => {
    if (countryId === 'id') {
      callback(null, [
        { id: 'id-jk', name: 'Jakarta' },
        { id: 'id-bt', name: 'Banten' },
        { id: 'id-jr', name: 'Jawa Barat' },
      ]);
      return;
    }

    callback(new Error('Country not found'), null);
  }, 1000);
}

const getProvincesPromise = promisify(getProvinces)
getProvincesPromise('id')
	.then(countryId => console.log(countryId))
	.catch(err => console.log(err.message))
