let lang = "js";  //global scope

function right() {
    let lang = "python"; // local scope
};
console.log(lang); // let is a block scope variable ,in console lang will display "js".


var outerWear = "shirt"; // outerWear is declared in global scope

function Dress () {
    var outerWear = "jacket" // this outerWear is function scope
    return outerWear; 
   
}
console.log(Dress()); // by calling function Dress, it will return the value of outerwear of function scope that is "jacket"

console.log(outerWear); // console will display the value of outerWear declared in global scope

let myGlobal = 10;
    
function myFunction() {
   let  myLocal = 5 ;
}

function myFunction2 () {
   var output = "";

   if(typeof myGlobal != "undefined") {     // myFunction2 will check the values of myGlobal and my myLocal  
       output += "myGlobal:" + myGlobal;    // myGlobal is declared by let in global scope and mylocal in local scope    
   }                                        // for this reason myLocal will not display in console .
   if(typeof myLocal != "undefined") {
       output += "myLocal:" + myLocal;
   }
  console.log(output);
}
myFunction2();
