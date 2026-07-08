// promises in js
/* 3 states- 1.pending state, 2.resolved, 3.rejected*/ 

let promise =  new Promise((resolve,reject) => {

    if(true){
        resolve("Promise resolved");
    }else{
        reject("Promise rejected");
    }

})
promise.then((result)=>{
    console.log("Result");
}).catch((error)=>{
    console.log("Error");
})