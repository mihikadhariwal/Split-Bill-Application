window.onload=()=>{
const inputtext1=document.querySelector('.inputfield1');
const inputtext2=document.querySelector('.inputfield2');
const buttons=document.querySelectorAll('.button');
const totalamt=document.querySelector('.totalamt');

//button functionality
var count=1;
buttons.forEach(button =>{ //looping through each of the two buttons
    button.addEventListener('click', (e) =>{
       // console.log(e.target.innerText);
       if(e.target.innerText==='+'){
       document.getElementById("noofpple").innerHTML=count+=1; //if the plus button is selected, increment count by 1
       calculation(val, val1, count);
    }
       else if(e.target.innerText==='-' && count!=1){
        document.getElementById("noofpple").innerHTML=count-=1;
        calculation(val, val1, count); //if the minus button is pressed, decrement count by 1
       }
       
    })
})
}

//checking if total amount input field is only a decimal, and blocking all other character inputs
var RegExp = new RegExp(/^\d*\.?\d*$/); //regex format for a decimal number
//var val = document.getElementById("inputfield1").value; //blank space before anything is inputted
function valid(elem) {
	if (RegExp.test(elem.value)) { //checking if the input matches the required format
			val = elem.value; //allow it to be entered by the user by storing it in the blank space
            //valid character
		} 
        else {
			elem.value = val; //else overwrite the input with a blank space => this essentially doesn't allow any other character input
            //invalid character
		}
        calculation(val, val1);
	}

//validating for tip input and also makng sure all inputs are between 0 and 100%
var RegExp = new RegExp(/^\d*\.?\d*$/);
//var val = document.getElementById("inputfield1").value;
function valid1(elem) {
    if (RegExp.test(elem.value) && (elem.value>=0 && elem.value<=100)) {
            val1 = elem.value;
            //valid character
        } 
        else {
            elem.value = val1;
            //invalid character
        }
        calculation(val, val1);
    }

//actual calculation done here
function calculation(amount, tip, count=1){
    if(amount===""){ //if total amount input space hasn't been filled up yet, assume the total to be zero
         totalperperson=0;
         document.getElementById("totalamt").innerHTML=totalperperson;
    }
    if(tip===""){
        tip=0; //if the tip hasn't been filled, assume tip to be 0
        document.getElementById("totalamt").innerHTML=totalperperson;
    }
    amount=parseFloat(amount); //converting the string imput into a numeric value
    tip=parseFloat(tip);
     if(amount===amount && tip===tip){ //if not a NaN value (NaN is the only value which is considered unequal to itself)
       totalperperson=((tip/100.0*amount)+amount)/count;
       totalperperson = totalperperson.toFixed(2); //rounding off to 2 decimal numbers
      document.getElementById("totalamt").innerHTML=totalperperson;
    }
}




