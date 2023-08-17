function calculate(){
    var weight=document.getElementById("weight").value;
    var height=document.getElementById("height").value;
  //  var bmi=weight/(height*height);
   var bmi=weight/Math.pow(height,2);

   var output=document.getElementById("bmi");
   bmi=Math.round(bmi)
  
   output.innerText="Your BMI is " + bmi.toString();
   var con=document.getElementById("conclusion");
   if(bmi>=18.5 && bmi<=24.5){
         conclusion.innerText="Your BMI is normal";
         conclusion.style.color="blue"
   }
   else if(bmi>=25 && bmi<=29.9){
        conclusion.innerText="Your are over weight";
        conclusion.style.color="green"
   }
   else if(bmi>=30 && bmi<=39.9){
    conclusion.innerText="Your are obese";
    conclusion.style.color="yellow"
}
else if(bmi>=40){
      conclusion.innerText="You are Morbidly obese";
      conclusion.style.color="red";
}

else{
      conclusion.innerText="You are underweight";
      conclusion.style.color="aquamarine";
      };
  
}