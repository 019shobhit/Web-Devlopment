let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPoint = document.querySelector("#user-score");
const compPoint = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const drawGame = () => {
    msg.innerText = "Game was drawn";
    msg.style.backgroundColor ="#081b31";

}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore ++;
        userPoint.innerText = userScore;
        msg.innerText =`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compScore ++;
        compPoint.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="red";

    }
}

const playGame = (userChoice) => {
    // Generete computer choice
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        // draw
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors"? false : true;
        }
        else{
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});