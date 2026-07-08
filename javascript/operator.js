// string concatenation
let str1 = "Falak";
let str2 = "Mohsin";
// + operator used to concatenate two strings
let result = "My name is " + str1 + " " + str2;
console.log(result); // Output: My name is Falak Mohsin

let str3 = "Full Stack";
let str4 = "Developer";
// + operator used to concatenate two strings
let result2 = "I am a " + str3 + " " + str4;
console.log(result2); // Output: I am a Full Stack Developer

//Destructuring
let array = [1, 2, 3, 4, 5];

// push, pop, shift, unshift,length
array.push(6); // adds 6 to the end of the array
console.log(array);

array.pop(); // removes the last element from the array
console.log(array);

array.shift(); // removes the first element from the array
console.log(array);

array.unshift(0); // adds 0 to the beginning of the array
console.log(array);

console.log(array.length);   

let subset =  array.slice(1, 4); // creates a new array with elements from index 1 to 3
console.log(subset); // Output: [2, 3, 4]

let newsubset= array.slice(1, 2); // removes elements from index 1 to 3 and returns them
console.log(newsubset);

let arr =[1,2,3,4];

let newsubset2= arr.splice(0, 2); // removes elements from index 0 to 1 and returns them
console.log(newsubset2);

//Map, Reduce, Filter in array

// map- size of array changes but value are changed
let numbers = [2, 3, 4];
let newarray = numbers.map(num => num * num);
console.log(newarray); // Output: [4, 9, 16]

//filter - size of array changes but value remains same

let numbers2 = [9,15,30,40];
let newarray2 = numbers2.filter(nums => nums >20);
console.log(newarray2);

//reduce-size of array changes but value remains same
let arr3 = [3,4,5,7];
let result1 = arr3.reduce((total, num) => total+num,0);
console.log(result1);

//destructuring

let array3 =[1,2,3,4];
const[x,y,z,w] = array3;
console.log(x,y,z,w);

// let obj = {
//     name: "Falak",
//     age: 21,
//     role: "Student"
// };

// const { name, age, role } = obj;

// console.log(name, age, role);

// let obj2 = {
//     name: "Falak",
//     age: 21,
//     gender: "Female",
//     address: {
//         city: "Lucknow",
//         state: "Uttar Pradesh",
//         pincode: 226010
//     }
// };

// const {name, age, gender, address : {city,state,pincode}} = obj2;

// console.log(name, age, gender, city,state,pincode);


// spread operator

let obj3 = {
    name: "Falak Mohsin",
    age: 21
}

let obj4 = {
    ...obj3,
    coutry: "India",
    state: "Uttar Pradesh"
}
console.log(obj4.age);
console.log(obj4.name);

