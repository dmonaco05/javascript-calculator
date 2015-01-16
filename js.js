<script>
var first = "",
    second = "",
    total = "",
    math = "",
    clear = "",
    btnValue = document.getElementsByClassName('numbers'),
    btnEqual = document.getElementsByClassName('equals'),
    value = document.getElementsByClassName('output'),
    btnSymbol = document.getElementsByClassName('mathBtn');

// GET FIRST NUMBER
for(i=0; i < first.length; i++){
  btnValue[i].onclick = function(e){
    var which = this.getAttribute('data-number');
    first = first + which;
  }
}
// GET MATH SYMBOL
btnSymbol.onclick = function(e){
  math = this.getAttribute('data-type');
}
// GET 2ND NUMBER
for(i=0; i < second.length; i++){
  btnValue[i].onclick = function(e){
    var which = this.getAttribute('data-number');
    second = second + which;
  }
}
// EQUALS COMAND
btnEqual.onclick = function(e){
  if(math === "add"){
    total = parseFloat(first) + parseFloat(second);
  }
  else if(math === "sub"){
    total = parseFloat(first) - parseFloat(second);
  }
  else if(math === "mult"){
    total = parseFloat(first) * parseFloat(second);
  }
  else if(math === "div"){
    total = parseFloat(first) / parseFloat(second);
  }
  else{
    total = clear;
  }
}
// OUTPUT TOTAL TO SCREEN

</script>
