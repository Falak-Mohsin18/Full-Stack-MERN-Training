function change(){
    //let element = document.getElementById("new");
    //console.log(element);

    //let element = document.getElementsByClassName("new");
    //console.log(element);
   // let element = document.getElementsByTagName("h2");
   // console.log(element);
  // let element1 = document.querySelector(".same");
   // console.log(element1);
//
 //  let element2 = document.querySelectorAll(".same");
   //console.log(element2);

   ///let changeTag= document.getElementById("new").innerHTML = "<h1>Next Heading</h1>";
  /// console.log('Tag change successfully...');

  ///let styleChange1 = document.getElementsByClassName("same")[0].style.color = "red";       
   //console.log('Style change successfully...');         
   //let styleChange2 = document.getElementsByClassName("same")[1].style.color = "black";       
   ///console.log('Style change successfully...');         
  // let styleChange3 = document.getElementsByClassName("same")[2].style.color = "blue";       
  // console.log('Style change successfully...');      
   
   //let styleChange4 = document.getElementById("para").style.display = "none";
   //console.log('Style change successfully...');

   // get an attribute from an element
 //  let result = document.getElementById("new").getAttribute("id");
  /// console.log(result);

   // set an attribute to an element
  // let nextAttribute = document.getElementById("new").setAttribute("class","newClass");
   //console.log(nextAttribute);

   // delete an attribute from an element
  // let deleteAttribute = document.getElementById("new").removeAttribute("class");
   //console.log(deleteAttribute);

   //create new element in DOM
  // let newPara = document.createElement("p");
  // newPara.innerText = "BBD University, Lucknow(Uttar Pradesh)";
  /// document.body.appendChild(newPara);

// creating new element
let newHeading =document.createElement("h1"); // Creating a new element
newHeading.innerText = "A new Heading";// Text add
document.body.appendChild(newHeading);// append in the body

let newPara = document.createElement("p"); // Creating a new element
newPara.innerText = "A new ";

let para = document.createElement("p");
para.innerText = "Hello, I am a new paragraph";
document.body.appendChild(para)

let newImage = document.createElement("img");
newImage.src = "image.jpg";
document.body.appendChild(newImage);

// remove an element 
let removeElement = document.getElementById("new");
removeElement.remove();



}