function playGame() {
    var computer_choice, userChoice, gameOptions = ['r', 'p', 's'];

    userChoice = window.prompt("Select either rock (r), paper (p) or scissor (s)?").toLowerCase().trim();
    var computer_choice = gameOptions[(Math.round(Math.random()*10) % 3)];

    if (userChoice === 'paper' || userChoice === 'rock' || userChoice === 'scissors' || userChoice == 's'
    || userChoice == "r" || userChoice == 'p') {

        window.console.log("CPUs choice:" + computer_choice);
        window.console.log("Your choice:" + userChoice);
        
        if(userChoice == 'scissor' || userChoice == 's'){
            if(userChoice === computer_choice){
                window.alert("The result is a tie!");
            }
            else if(computer_choice==="r"){
                window.alert("Computer chose rock & User chose scissors \n Computer Wins!");
            }
            else{
                window.alert("User chose scissors & Computer chose paper \n User Wins!");
            }
        }
        if(userChoice == "rock" || userChoice == "r"){
            if(userChoice === computer_choice){
                window.alert("The result is a tie!");
            }
            else if(computer_choice==="s"){
                window.alert("User chose Rock & Computer chose Scissors \n User Wins!");
            }
            else{
                window.alert("Computer chose Paper & User chose Rock \n Computer Wins!");
            }
        }
        if(userChoice == "paper"|| userChoice == 'p'){
            if(userChoice === computer_choice){
                window.alert("The result is a tie!");
            }
            else if(computer_choice==="r"){
                window.alert("User chose Paper & Computer chose Rock \n User Wins!");
            }
            else{
                window.alert("Computer chose Scissors & User chose Paper \n Computer Wins!");
            }
        }
    } else {
        window.alert("You have entered invalid choice...");
    }       
}

function startGame() {
    "use strict";
    var cont;
     do{
        playGame();
        cont = window.prompt("Enter Y/y to continue, enter any key to exit.").toLowerCase();
    }while (cont === "y")

}

startGame();
