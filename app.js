var firstNumber;
var secondNumber;
var operator;
var finalAnswer = document.getElementById("ans");

function add(){
    ans.value= parseFloat(firstNumber)+parseFloat(secondNumber);
}
function sub(){
    finalAnswer.value=firstNumber-secondNumber;
}
function mul(){
    finalAnswer.value=firstNumber*secondNumber;
}
function div(){
    finalAnswer.value=firstNumber/secondNumber;
}
function clear(){
    finalAnswer.value="";
}
function calculate(){
    if(operator == "+"){
        add();
    }
    if(operator == "-"){
        sub();
    }
    if(operator == "*"){
        mul()
    }
    if(operator == "/"){
        div();
    }
}
function show(val){
    if(val!="+"&&val!="-"&&val!="*"&&val!="/"&&val!="="&&val!="C"){
       finalAnswer.value+=val;
    }
    if(val=="+"||val=="-"||val=="*"||val=="/"){
        operator=val;
        firstNumber=finalAnswer.value;
        finalAnswer.value="";
        secondNumber=finalAnswer.value;
     }
      if(val=="="){
        secondNumber=finalAnswer.value;
        finalAnswer.value="";
        calculate();
     }
     if(val=="C"){
         clear();
     }
}