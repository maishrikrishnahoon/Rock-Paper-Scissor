let userScore=0;
let botScore=0;

const moves= document.querySelectorAll(".move");
const msg= document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const botScorePara = document.querySelector("#comp-score");
const genBotChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame= () => {
    msg.innerText="Game was Draw";
    msg.style.backgroundColor = "#081b31";

};

const showWinner= (userWin, userChoice, botChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText= `You Win! Your ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        botScore++;
        botScorePara.innerText= botScore;        
        msg.innerText= `You Lost! Your ${botChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
    
    };


const playGame = (userChoice) => {
    console.log("user choice= ", userChoice);
    const botChoice = genBotChoice();
    console.log("comp choice= ",botChoice);

    if(userChoice==botChoice){
        drawGame();

    }   else {
        let userWin=true;
        if(userChoice==="rock"){
            userWin = botChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            userWin = botChoice==="scissors" ? false : true;
        }else {
           userWin = botChoice==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, botChoice);

    }
    

};

moves.forEach((move) => {
    
    move.addEventListener("click", ()=>{
        const userChoice= move.getAttribute("id");
        playGame(userChoice);
        
    
    });

    
});