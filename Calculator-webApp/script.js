// ----Lets Start

let string=""
let display = document.querySelector('input');
let buttons= Array.from(document.querySelectorAll("button"));

buttons.forEach((button)=>{

 button.addEventListener('click', (e)=> {
        

    if(e.target.innerText == "=") {
        string = eval(string);
        display.value = string;
    } 

  else  if(e.target.innerText == "AC") {
        string = "";
        display.value = string;
    }
  
   else if(e.target.innerHTML == "DEL") {
       
      string = string + e.target.innerText ;
      string = string.substring(0,(string.length-4));
      display.value = string;
        
    }
  else{  
    
        string = string + e.target.innerText;
        display.value = string;
    }
    
        });

    });



