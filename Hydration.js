var glass
function calLitres(){
     glass=document.getElementById("glasses").value;
    var litres=glass*0.24;
    document.getElementById("litdiv").style.display='block';
    document.getElementById("litres").innerHTML=litres + " litres";
    


}
function clearLitre(){
   document.getElementById("glasses").value="";
 
    document.getElementById("litdiv").style.display='none';
  }