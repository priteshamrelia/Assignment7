//STEP 1
function halfNumber(num) {
    if (!isNaN(num)) {
        var res = num / 2;
        return res;
    }
}
var number = parseInt(prompt("Enter a number below :"));
window.console.log("Half of " + number + " is " + halfNumber(number) + ".");

//STEP 2
function squareNumber(num) {
    if (!isNaN(num)) {
        return num * num;
    }
}
var number = parseInt(prompt("Enter a number to be squared :"));
window.console.log("The result of squaring the number " + number + " is " + squareNumber(number) + ".");


//STEP 3
function percentOf(firstNum, secondNum) {
    if (!(isNaN(firstNum) && isNaN(secondNum))) {
        return (firstNum / secondNum) * 100;
    }

}
var number1 = parseInt(prompt("Enter First Number"));
var number2 = parseInt(prompt("Enter Second Number"));
window.console.log(number1 + " is " + percentOf(number1, number2) + "% of " + number2 + ".");

//STEP 4
function findModulus(firstNum, secondNum) {
    if (!(isNaN(firstNum) && isNaN(secondNum))) {
        return (firstNum % secondNum);
    }
}

var number1 = parseInt(prompt("Enter First Number :"));
var number2 = parseInt(prompt("Enter Second Number :"));
window.console.log(findModulus(number1, number2) + " is the modulus of " + number1 + " and " + number2 + ".");


//STEP 5
function addNumbers(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            sum += Number(arr[i]);
        }
    }
    window.console.log("The sum is "+ sum);
}

var arr = window.prompt("Enter numbers seprated by commas").trim().split(",");
addNumbers(arr);
