//Generate number using Math class
var number1 = Math.floor((Math.random()*10) + 1);
var number2 = Math.floor((Math.random()*10) + 1);

//Assign the generated number to the HTML
document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number2;

//Answer variable
var answer = number1 + number2

//Validate answer
//querySelector is used to return the first element the specified the CSS selector(s)
var checkAnswer = document.querySelector('input[type=text]');
var value = checkAnswer.value
var btn = document.querySelector('input[type=button][value=Check]');

//Button onclick function
//Actual validation
btn.onclick = function() {
    value = checkAnswer.value;
    if (value == answer) {
        alert("You are correct");
    } 
    else {
        alert("You are incorrect, the answer was " + answer);
    }
    
    //After validation, here is what is displayed
    document.querySelector("input[type=text]").value = "";
    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";
    
    //Generate new random number
    number1 = Math.floor((Math.random()*10) + 1);
    number2 = Math.floor((Math.random()*10) + 1);

    //Assign the generated number to the HTML
    document.getElementById("number1").innerHTML = number1;
    document.getElementById("number2").innerHTML = number2;
    
    answer = number1 + number2;
    
}