// Throwing Errors
// thrwing error digunakan untuk membuat baris kode masuk kedalam blok catch
// hal ini digunakan ketika kita ingin memvalidasi suatu nilai dari objek tertentu

// const json = '{"age": 12}'

// try {
//     const user = JSON.parse(json)

//     if (!user.name) { // blok kode ini akan mengecek dari objek json diatas
//         throw new SyntaxError("'Name is required'")
//     }
//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(`JSON.Error: ${error.message}`)
// }


class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

try {
    throw new MyCustomError("This is an error");
} catch (e) {
    console.log(e.message);
}