let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")
let userScorepara = document.querySelector("#user-score")
let compScorepara = document.querySelector("#comp-score")
let resetbtn = document.querySelector(".reset")

const reset = () => { 
    resetbtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#fdf0d5"
    msg.style.color = "#000"
    userScorepara.innerText = userScore;
    compScorepara.innerText = computerScore;    
})
}
// index choice generate krva
const randidx= () => {
    let num = Math.floor(Math.random() * 10)
        if (num<=3) {
            return num = 0;
        }else if(num<=6 && num>3){
            return num = 1;
        }else{
            return num = 2;
        }
}




const draw = () => {
    msg.innerText = "Game was Draw. Play again!!"
    msg.style.backgroundColor = "#003049"
    msg.style.color = "#fff"

}
const genCompChoice = () => {
    const options = ["rock","paper","scissors"]
    // generated index ne computer choices ma convert krva
    randidx();
    return options[randidx()];
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        reset();
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }else{
        computerScore++;
        compScorepara.innerText = computerScore;
        reset();
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();


    if (userChoice == compChoice) {
        draw();
    }else{
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true ;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else{
            userWin = compChoice ==="rock" ? false : true;
        }
            showWinner(userWin,userChoice,compChoice);
    }

    
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
