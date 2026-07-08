// function f1(){

// }

// function f2(){

// }
// f1(f2);

function greet(name, callback){
    console.log(`hi i am ${name}`);
    callback();
}

function happen(){
    console.log("Task Completed");
}

greet("Falak", happen)