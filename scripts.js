function computer_choice() {
    let value = Math.random();
    if (value <= 0.333) {
        return "rock";
    } else if (value<=0.66) {
        return "paper";
    } else{
        return "scissors";
    }
    }

function player_choice() {
    let value = parseInt(prompt("1 for rock, 2 for paper, 3 for scissors"));
    if (value === 1) {
        return "rock";
    } else if (value === 2) {
        return "paper";
    } else if (value === 3) {
        return "scissors";
    } else {
        return;
    }
}

function game_round() {
    
    let computer_move = computer_choice();
    let player_move = player_choice();
    if (!player_move) {
        console.log("invalid input");
        return;
    }
    if (player_move === computer_move) {
        console.log("draw");
        return;
    }
    if (player_move==="rock" && computer_move==="scissors"){
        console.log("player win round");
        return "p1";
        

    } else if (player_move==="paper" && computer_move==="rock"){
        console.log("player win round");
        return "p1";
        
    } else if (player_move==="scissors" && computer_move==="paper"){
        console.log("player win round");
        return "p1";
        
    } else {
        console.log("computer win round");
        return "c1";
    
    } 

}

function game() {
    let player_score = 0;
    let computer_score = 0;

    while (player_score<5 && computer_score<5) {
        let winner = game_round();
        if (winner==="p1"){
            player_score += 1;
            console.log(`Player: ${player_score} Computer: ${computer_score}`);
        } else if (winner==="c1"){
            computer_score += 1;
            console.log(`Player: ${player_score} Computer: ${computer_score}`);
        }
        
    }

    if (player_score===5) {
        console.log("PLAYER WIN!!");
    } else if (computer_score===5) {
        console.log("COMPUTER WIN!!");
    }

}

console.log(game());