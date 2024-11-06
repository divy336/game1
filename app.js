let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScor = document.querySelector("#user-score");
const computerscore = document.querySelector("#comp-score");
const result = document.querySelector("#result");

const showWinner = (userWinn, userChoice, compChoice) => {
    if (userWinn) {
        userScore++;
        alert("you winn 😅");
        userScor.innerHTML = userScore;

        console.log("user are winn");
        msg.innerHTML = "You winn 😎";

        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        alert("Better luck next time🙄 ");
        console.log("computer are winn");
        computerscore.innerHTML = compScore;

        msg.innerHTML = "you loss 😶😑";



        msg.style.backgroundColor = "red";
    }
}





const genComputerChoice = () => {
    const options = ["rock", "paper", "scissers"];
    const randIx = Math.floor(Math.random() * 3);
    return options[randIx];

};
const drawGame = () => {
    console.log("game was draw");
    msg.innerHTML = "game was draw 🤫🤥";
    alert("play again");
    msg.style.backgroundColor = "gray";


}


//play game function//
const playGame = (userChoice) => {
    console.log("user cloice is ", userChoice);
    const compChoice = genComputerChoice();
    console.log("computer cloice is ", compChoice);

    if (userChoice == compChoice) {
        drawGame();
    } else {
        let userWinn = true;
        if (userChoice === "rock") {
            //paper secciser
            userWinn = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //secciser rock
            userWinn = compChoice === "scissors" ? false : true;
        } else {
            //rock,paper
            userWinn = compChoice === "rock" ? false : true;
        }
        showWinner(userWinn, userChoice, compChoice);
    }

};


//this function are user select function //
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});




/*const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const uderchoice = choice.getAttribute("id");
        console.log("you select ", uderchoice)

    });
});*/