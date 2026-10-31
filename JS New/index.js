


const result =document.getElementById("result");

   
let currentOperator = '';
function FuritCal(id){
 const currentElement = document.getElementById(id);
    let value = currentElement.innerHTML;

    
    if (value == '+' || value == '-' || value == '*' || value == '×' || value == '/' || value == '%') {

        if (operatorPressed == true) {
            return;
        }

        operatorPressed = true;
        currentOperator = value;

    }
    else {
        operatorPressed = false;
    }

    result.innerHTML += value;

}
function Delet(){
    result.innerHTML = ``;
}

function Together(){
  
    let text = result.innerHTML; 
    
    if(currentOperator=='+'){
        let parts=text.split('+'); 
        // bu bir string bueyen bir hisesini bolur bu men burda meselen 10/2 bele bolmede men burda / bolmeye
        //  qeder olan heseni bol messelen ['10','2'] bele bolme edir  icerisinde mende bunlari  bele hesablayiram
        let num1 = Number(parts[0]);
        let num2 = Number(parts[1]);
        result.innerHTML=num1+num2;
    }
    else if(currentOperator=='-'){
        let parts=text.split('-');
        let num1 =Number(parts[0]);
        let num2 =Number(parts[1]);
        result.innerHTML= num1-num2;
    }else if(currentOperator=='×'||currentOperator=='*'){
        let parts=text.split('×');
        let num1 =Number(parts[0]);
        let num2 =Number(parts[1]);
        result.innerHTML=num1*num2;
    }
    else if(currentOperator=='/'){
        let parts=text.split('/');
        let num1 = Number(parts[0]);
        let num2 = Number(parts[1]);
        
        if(num2 ==0){
            result.innerHTML="sifira bolune bilmez"
        }
        else{
            result.innerHTML=num1/num2;
        }


    }
    else if(currentOperator == '%'){
        let parts = text.split('%');
        let num1 = Number(parts[0]);
        let num2 = Number(parts[1]);
        result.innerHTML = num1 % num2; 
    }


}


// function backspace(){
//      let text =result.innerHTML;
//      let temporaryContainer='';

//      for(let i=0; i<text.length-1; i++){
//           temporaryContainer+=text[i]
//      }

//     result.innerHTML = temporaryContainer;
    
// }




