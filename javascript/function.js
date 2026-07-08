// function f1(){

// }

// function f2(){

// }
// f1(f2);

// function greet(name, callback){
//     console.log(`hi i am ${name}`);
//     callback();
// }

// function happen(){
//     console.log("Task Completed");
// }

// greet("Falak", happen)

// function checkresult(marks, callback) {
//     if (marks > 40) {
//         console.log("Pass");
//         callback();
//     } else {
//         console.log("Fail");
//     }
// }

// function happen() {
//     console.log("student passed");
// }

// checkresult(50, happen);

// function greet(){
//     console.log("I am a Student....");
// }
// setTimeout(greet,5000);

function login(name) {
    console.log(`LOGGING IN ${name}`);
}

function happen() {
    console.log("Login Successful");
}

setTimeout(() => {
    login("Falak");
}, 1000);

setTimeout(happen, 3000);