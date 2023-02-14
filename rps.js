const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        console.log('VALID');
        return userInput;
    } else {
        console.log("ERROR");
    }
};
getUserChoice('rock');
const getComputerChoice = () => {
    var rand = Math.floor(Math.random() * 3);
    var compInput;
    switch (rand) {
        case 0:
            compInput = 'rock'
            break;
        case 1:
            compInput = 'paper';
            break
        case 2:
            compInput = 'scissors';
            break;
        default:
            break;
    }
    console.log(rand);
    return compInput;
};
var userChoice = getUserChoice('rock');
var computerChoice = getComputerChoice();

const Winner = (userChoice, computerChoice)=>{
    var tie = (userChoice===computerChoice);

    if (tie) {
        console.log('You chose ' + userChoice + '. I chose ' + computerChoice +". ITS A TIE");
    }

};



