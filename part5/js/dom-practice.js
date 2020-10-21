/*eslint-env browser*/

//STEP 1
function clickHandler() {
    "use strict";
    window.alert("I have been clicked");
}

//STEP 2
var button2 = window.document.getElementById("button2");
button2.onclick = function () {
    "use strict";
    window.alert("I have been clicked");
};

//STEP 3
var button3 = window.document.getElementById("button3")
button3.addEventListener("click", customOnClick);

function customOnClick() {
    window.alert("I have been clicked.")
}

//STEP 4
var button4 = window.document.getElementById("button4")
button4.addEventListener("click", function() {
    window.alert("I have been clicked.")
});

//STEP 5
function init() {
    "use strict";
    var button5 = window.document.getElementById("button5")
    button5.addEventListener("click", function() {
        window.alert("I have been clicked.")
    });
}

window.addEventListener("load", init);
