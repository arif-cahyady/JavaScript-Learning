// Destructring Array
// Sama halnya dengan destructuring Object, akan tetapi destructuring array tidak terikat dengan nama propertinya melainkan tempat nya (index nya)
// Destructuring array menggunakan tanda []

const students = ["Deo", "Rio", "Jefri"];

// const [oneStudent, twoStudent, threeStudent] = students; //atau jikaingin menampilkan hanya satu nilai maka cukup ditulis
const [ , , threeStudent] = students; 
console.log(threeStudent);

// Destructuring assignment pada Array
let otherStudent = "Jafri";

[otherStudent] = students; // tidak perlu dimasukan ke kurung siku
console.log(otherStudent);


// Pertukaran nilai menggunakan Destructuring Assignment pada Array
let a = 1;
let b = 2;

[a,b] = [b,a]
console.log(a,b);


// Nilai Defalut pada Destructuring Array
const foods = ["Hamburger", "Sandwich", "Cake", "Bread"];

const [oneFoods, twoFoods, threeFoods, fourFoods, otherFoods = "Pizza"] = foods;
console.log(otherFoods);