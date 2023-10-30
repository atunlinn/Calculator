
let currentValue="";
let previousValue="";
let operator="";
let deleteNum=document.querySelector('#deleteNum')

document.addEventListener("DOMContentLoaded",function(){

let numbers=document.querySelectorAll('#number')
let operators=document.querySelectorAll('#operator')
let equal=document.querySelector('#equal')


let previousNumber=document.querySelector('.previousNum')
let currentNumber=document.querySelector('.currentNum')
let clear=document.querySelector('#clear')
let decimal=document.querySelector('#decimal')

 numbers.forEach(function(number){
    number.addEventListener("click",function(e){
    
        currentValue +=e.target.textContent
        
       currentNumber.textContent =currentValue
     console.log(currentValue)
       
    })
 })

operators.forEach(function(op){
    op.addEventListener('click',function(e){
        operator=op
        operator=e.target.textContent
        previousValue=currentValue
        currentValue=""
        previousNumber.textContent=previousValue+""+operator
        currentNumber.textContent=currentValue
    })


  equal.addEventListener('click',function(){
    const result=operate(previousValue,currentValue,operator)
    previousNumber.textContent=""
    currentNumber.textContent=result;
  })
   
  


  clear.addEventListener('click',function(){
    currentValue=''
    previousValue=''
    operator=""
    previousNumber.textContent=previousValue
    currentNumber.textContent=currentValue
 })

  

})


  decimal.addEventListener('click',function(){
    if(!currentValue.includes(".")){
        currentValue +="."
    }
  })



})
let previousNumber=document.querySelector('.previousNum')
let operators=document.querySelectorAll('#operator')
let currentNumber=document.querySelector('.currentNum')
deleteNum.addEventListener('click',function(){
    if(currentValue!==""){
    let newValue=currentValue.slice(0,-1)
    currentValue=newValue
    currentNumber.textContent=currentValue
} 

if(previousValue!==""){
    let newValue=previousNumber.textContent.slice(0,-1)
    previousValue=newValue
    previousNumber.textContent=previousValue
}
  }
)







function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}
function remainder(a,b){
    return a % b
}
function operate(num1,num2,operator){
    previousValue=Number(previousValue)
    currentValue=Number(currentValue)


    if(operator==="+")
    {
      return  add(num1,num2)
    }else if (operator==="-"){
      return  subtract(num1,num2)
    }else if(operator==="*"){
      return  multiply(num1,num2)
    }else if(operator==="/"){
      return  divide(num1,num2)
    }else if(operator==="%"){
        return remainder(num1,num2)
    }
}

