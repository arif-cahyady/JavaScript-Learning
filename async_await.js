// ASync and Await
// sintaks async dan await, dapat melakukan proses asynchronus layaknya proses synchronus
// hal ini membuat kode lebih mudah dipahami, dan menghindari callback hell
// sintaks async mengembalikan nilai Promise, sehingga sintaks yang ada pada promise dapat jalan pada async
// contohnya adalah then dan catch

function withDrawMoney(amount) {
    // console.log(amount)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 100) {
          reject(new Error('Not enough money to withdraw'));
        }
  
        resolve(amount);
      }, 1000);
    });
  }
  
  function buyCinemaTicket(money) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (money < 10) {
          reject(new Error('not enough money to buy ticket'));
        }
        resolve('ticket-1');
    }, 1000);
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ticket) {
        reject(new Error('no ticket'));
      }

      resolve('enjoy the movie');
    }, 1000);
  });
}


async function watchMovie() {
    try {
        const money = await withDrawMoney(10);
        console.log(money);
        const ticket = await buyCinemaTicket(money);
        console.log(ticket)
        const result = await goInsideCinema(ticket);

        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

watchMovie()