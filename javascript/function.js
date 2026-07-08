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

// function login(name) {
//     console.log(`LOGGING IN ${name}`);
// }

// function happen() {
//     console.log("Login Successful");
// }

// setTimeout(() => {
//     login("Falak");
// }, 1000);

// setTimeout(happen, 3000);

// //callback hell( pyramid of doom)

// setTimeout(() =>{
//     console.log("Step1: task1 completed..");
//     setTimeout(() =>{
//         console.log("Step2: Task2 uncomplete..");
//         setTimeout(() =>{
//             console.log("Step3 : Task 3 uncomplete..");
//             setTimeout(()=>{
//                 console.log("Step4: Task4 completed..");
//             },4000);
//         },3000);
//     },2000);
// },1000);

/* Student Registration 
1.resigterStudent
2.verifyOTP
3.generateStudentID

using callback hell show student registration complete*/

function registerStudent(name, callback) {
    setTimeout(() => {
        console.log(`Student ${name} registration successful`);
        callback(); 
    }, 1000);
}

function verifyOTP(callback) {
    setTimeout(() => {
        console.log("OTP verified successfully");
        callback(); 
    }, 3000);
}

function generateStudentID(callback) {
    setTimeout(() => {
        console.log("Student ID generated successfully");
        callback(); 
    }, 5000);
}

registerStudent("Falak", () => {
    verifyOTP(() => {
        generateStudentID(() => {
            console.log("Student Registration Complete!");
        });
    });
});

