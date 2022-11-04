
function myMove(){
    var elem = document.getElementById("div");
 var pos = 0;
    var id = setInterval(move,100);
  function move(){
      if(pos == 15){
          clearInterval(id);
      }else{
          pos++;
          elem.style.left = pos + "5px";
          elem.style.top = pos + "5px";
      }
      }
}
myMove();



   