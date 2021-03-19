

var add = document.body.querySelector(".add");
var subtract = document.body.querySelector(".subtract");
var multiply = document.body.querySelector(".multiply");
var divide = document.body.querySelector(".divide");
var answer = document.body.querySelector("p");

add.addEventListener("click", ()=> {
    var num1 = parseInt(document.body.querySelector("#num1").value);
    var num2 = parseInt(document.body.querySelector("#num2").value);
    var result = num1 + num2;

    answer.innerHTML = "Answer: " + result;
});

subtract.addEventListener("click", ()=> {
    var num1 = parseInt(document.body.querySelector("#num1").value);
    var num2 = parseInt(document.body.querySelector("#num2").value);
    var result = num1 - num2;

    answer.innerHTML = "Answer: " + result;
});

multiply.addEventListener("click", ()=> {
    var num1 = parseInt(document.body.querySelector("#num1").value);
    var num2 = parseInt(document.body.querySelector("#num2").value);
    var result = num1 * num2;

    answer.innerHTML = "Answer: " + result;
});

divide.addEventListener("click", ()=> {
    var num1 = parseInt(document.body.querySelector("#num1").value);
    var num2 = parseInt(document.body.querySelector("#num2").value);
    var result = (num1 / num2).toFixed(2);  // rounds to two decimal places

    answer.innerHTML = "Answer: " + result;
});
