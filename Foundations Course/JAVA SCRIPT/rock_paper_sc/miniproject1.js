console.log("Hello World!");

function toWords(num) {
    let ans;

    switch (num) {
        case 0:
            ans = "rock";
            break;
        case 1:
            ans = "paper";
            break;
        case 2:
            ans = "scissors";
            break;
    }

    return ans
}

function getComputerChoice() {
    //0, 1, 2
    let ans = Math.floor(Math.random() * 3);
    return ans;
}

function getHumanChoice() {
    let user = prompt("Write your choice (rock, paper, scissors):");
    let ans;

    if (user === "rock") {
        ans = 0;
    }
    else if (user === "paper") {
        ans = 1;
    }
    else if (user === "scissors") {
        ans = 2;
    }

    return ans;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Draw you both chose ${toWords(humanChoice)}!`);
        return 'd';
    }

    let result = humanChoice - computerChoice;
    /*  01 = -1 compu
        02 = -2 human

        10 = 1  human
        12 = -1 compu

        20 = 2 compu
        21 = 1 human
    */

    if (result === -1 || result === 2) {
        console.log("Computer Wins");
        console.log(`Computer chose: ${toWords(computerChoice)} and you chose: ${toWords(humanChoice)}`);
        return 'c';
    }
    else if (result === 1 || result === -2) {
        console.log("Human Wins");
        console.log(`You chose: ${toWords(humanChoice)} and Computer chose: ${toWords(computerChoice)}`);
        return 'h';
    }
    else {
        console.error("an error occured");
        return 'e';

    }

}

let human_score = 0;
let compu_score = 0;

for (let i = 0; i < 5; i++) {

    console.log(`ROUND ${i+1}`);

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    let score = playRound(humanSelection, computerSelection);

    switch (score) {
        case 'c':
            compu_score++;
            break;
        case 'h':
            human_score++;
            break;
        case 'd':
            compu_score++;
            human_score++;
            break;
        case 'e':
            break;
    }
}

if (human_score > compu_score) {
    console.log("Human Wins all!!");
}
else if (human_score < compu_score) {
    console.log("compu Wins all!!");
}
else {
    console.log("IT'S A DRAW");
}


