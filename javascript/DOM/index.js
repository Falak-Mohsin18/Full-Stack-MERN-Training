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

   let result = document.getElementById("new").getAttribute("id");
   console.log(result);

   let nextAttribute = document.getElementById("new").setAttribute("class","newClass");
   console.log(result);
}