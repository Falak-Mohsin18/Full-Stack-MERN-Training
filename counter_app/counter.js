let count = document.getElementById("count");
   
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");

let counter = 0;

increment.addEventListener("click", function() {
    counter++;
    count.innerText = counter;
});
decrement.addEventListener("click", function() {
    counter--;
    count.innerText = counter;
});
reset.addEventListener("click", function() {
    counter = 0;
    count.innerText = counter;
});
