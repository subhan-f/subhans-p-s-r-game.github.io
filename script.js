let userScore = 0;
let compScore = 0;
let userChoice, compChoice;

const userChoices = document.querySelectorAll(".user-choice");
const compChoices = document.querySelectorAll(".comp-choice");
const msg = document.querySelector("#msg")
const scores = document.querySelectorAll(".score");

console.log();

const drawGame = () => {
    msg.innerText = "Game is draw.";
    msg.style.backgroundColor = "#081b31";
}

const winGame = () => {
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "green";
    userScore += 1;
    scores[0].firstElementChild.innerText = userScore;    
}

const loseGame = () => {
    msg.innerText = "You Lost.";
    msg.style.backgroundColor = "red";
    compScore += 1;
    scores[1].firstElementChild.innerText = compScore;
}

const roundOff = (val) => {
    const intVal = Math.floor(val);
    return ((val - intVal) >= 0.5) ? intVal + 1 : intVal;
}

const generateCompChoice = () => {
    num = Math.floor(Math.random() * 3);
    compChoices[num].style.backgroundColor = "#081b31";
    return compChoices[num].id;
}

const playGame = () => {
    compChoice = generateCompChoice();
    console.log(`Comp Choice: ${compChoice}`);
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        if(userChoice === "rock"){
            (compChoice === "paper") ? loseGame() : winGame();
        }
        else if(userChoice === "paper"){
            (compChoice === "scissor") ? loseGame() : winGame();
        }
        else if(userChoice === "scissor"){
            (compChoice === "rock") ? loseGame() : winGame();
        }
   }
}

userChoices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        console.log(`Your Choice: ${choice.id}`);
        userChoice = choice.id;
        for(let i = 0; i < 3; i++){
            compChoices[i].style.backgroundColor = "#fff";
        }
        playGame();
    })
})

