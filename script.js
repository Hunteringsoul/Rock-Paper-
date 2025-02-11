document.addEventListener("DOMContentLoaded", () => {
    let userScore = 0;
    let computerScore = 0;
    const choices = document.querySelectorAll(".choice");
    const user_score = document.getElementById("your_score");
    const computer_score = document.getElementById("comp_score");
    const message = document.getElementById("msg");
    const reset = document.getElementById("reset"); 

    if (!reset) {
        console.error("Reset button not found! Check your HTML.");
        return;
    }

    const genCompChoice = () => {
        const options = ["rock", "paper", "scissors"];
        const randIdx = Math.floor(Math.random() * 3);
        return options[randIdx];
    };

    const playGame = (userChoice) => {
        console.log("User choice:", userChoice);
        const computerChoice = genCompChoice();
        console.log("Computer choice:", computerChoice);
        winner(userChoice, computerChoice);
    };

    const winner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            console.log("It's a tie");
            message.innerText = `It's a tie`;
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "scissors" && computerChoice === "paper") ||
            (userChoice === "paper" && computerChoice === "rock")
        ) {
            console.log("You win");
            userScore++;
            message.innerText = `You win`;
        } else {
            console.log("Computer wins");
            computerScore++;
            message.innerText = `You lose`;
        }
        console.log(`You: ${userScore}, Comp: ${computerScore}`);
        user_score.textContent = `You: ${userScore}`;
        computer_score.textContent = `Comp: ${computerScore}`;
    };

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            console.log("Choice was clicked:", userChoice);
            playGame(userChoice);
        });
    });

    
    reset.addEventListener("click", () => {
        console.log("Reset clicked");
        userScore = 0;
        computerScore = 0;
        user_score.textContent = `You: ${userScore}`;
        computer_score.textContent = `Comp: ${computerScore}`;
        message.innerText = `Play your move`;
    });
});
