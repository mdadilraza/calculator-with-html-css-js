// let buttons = document.querySelectorAll("button");
// let display = document.querySelector("#display");

// let currentValue ='';


// buttons.forEach(button =>{
//     button.addEventListener('click' , () => {
//         let value=button.value;

//         function append(num){
//             currentValue+=num;
//             updateDisplay()
//         }

//         function updateDisplay(){
//             display.value=currentValue;
//         }

//         let del =() =>{
//           currentValue  =currentValue.substring(0,currentValue.length -1);
//             updateDisplay();
//         }


//        if(value ==='C'){
//         currentValue =''
//         display.value='';
//        }else if(value === '='){
//          display.value = eval(display.value)

//          currentValue =display.value;
//        }else if(value ==='del'){
//         del();

//        }
//        else{
//         append(value)
//        }

//     })
// })



let buttons = document.querySelectorAll('button');
let display = document.querySelector('#display');
let currentValue = '';
buttons.forEach(button => {
    button.addEventListener('click', () => {

        let value = button.value;

        let append = (num) => {
            currentValue += num;
            displayValue();
        }

        let displayValue = () => {
            display.value = currentValue;
        }



        if (value === 'C') {
            currentValue = '';
            display.value = '';
        }else if(value ==='del'){
           currentValue  =currentValue.substring(0 , currentValue.length -1);
             displayValue();

        }
        else if(value === '=') {
          display.value  =eval(currentValue);
          currentValue =display.value
        }
         else {
            append(value)
        }
    })
})