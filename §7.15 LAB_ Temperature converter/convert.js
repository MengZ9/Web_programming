window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   //create variables to store the input
   var inputForFehrenheit = document.getElementById("fInput");
   var inputForCelsius = document.getElementById("cInput");

   //create variable for the button
   var button = document.getElementById("convertButton");
   //create variable for error
   var error = document.getElementById("errorMessage");
   //create variable for images
   var image = document.getElementById("weatherImage");
 
   inputForCelsius.addEventListener("input", function(){
      //empty the other input box
      inputForFehrenheit.value = "";
      error.innerHTML = "";
   });

   inputForFehrenheit.addEventListener("input", function(){
      //also empty the input box
      inputForCelsius.value = "";
      error.innerHTML = ""; 
   });

   button.addEventListener("click", function(){
      //if(inputForCelsius.value.length > 0){
         if(!isNaN(parseFloat(inputForCelsius.value))){
            inputForFehrenheit.value = convertCtoF(parseFloat(inputForCelsius.value));
         }
         else if(!isNaN(parseFloat(inputForFehrenheit.value))){
            inputForCelsius.value  = convertFtoC(parseFloat(inputForFehrenheit.value));
         }
         else{
            if(inputForCelsius.value){
               error.innerHTML = inputForCelsius.value + " is not a number";
            }
            else if(inputForFehrenheit.value) {
               error.innerHTML = inputForFehrenheit.value + " is not a number";

            }
         }


         if(parseFloat(inputForFehrenheit.value) < 32){
            image.src = "cold.png";
         }
         else if(parseFloat(inputForFehrenheit.value) >= 32 && parseFloat(inputForFehrenheit.value) <= 50){
            image.src = "cool.png";
         }
         else{
            image.src = "warm.png";
         }
        
   });   

}
document.addEventListener("DOMContentLoaded", domLoaded);


function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   var fahrenheit = degreesCelsius * 9/5 + 32;
   return fahrenheit;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   var celsius = (degreesFahrenheit - 32) * 5/9;
   return celsius;
}
