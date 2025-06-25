//Play Game Function 
function playGame(userMove) {
    const computerMove = generateMove();
    let result;
 
    if (userMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'It\'s a tie';
        } else if (computerMove === 'Paper') {
            result = 'You lose';
        } else if (computerMove === 'Scissors') {
            result = 'You win';
        }
        
    } else if (userMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win';
        } else if (computerMove === 'Paper') {
            result = 'It\'s a tie';
        } else if (computerMove === 'Scissors') {
            result = 'You lose';
        }
        
    } else if (userMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose';
        } else if (computerMove === 'Paper') {
            result = 'You win';
        } else if (computerMove === 'Scissors') {
            result = 'It\'s a tie';
        }
    
    }
 else {
        
        result = 'Haha! You broke the game!';
    }
    if(typeof userMove === 'undefined') {
        document.getElementById('user-move').innerHTML = `Oops!`;
        document.getElementById('computer-move').innerHTML = `You forgot to choose!`;
        document.getElementById('result-text').innerText = `Haha! You broke the game!`;
    }
    else {
     // Update the images
    document.getElementById('user-move-img').src = userMoveImage(userMove);
    document.getElementById('computer-move-img').src = computerMoveImage(computerMove);
    // Update the left and right halves
    document.getElementById('user-move').innerHTML = `<b>You:</b> ${userMove}`;
    document.getElementById('computer-move').innerHTML = `<b>Computer:</b> ${computerMove}`;
    // Update the result in the UI
    document.getElementById('result-text').innerText = result;}
}

let userMove = '';
function generateMove() {
    let computerMove = '';
    const randomNumber = Math.random();     
        if(randomNumber >=0 && randomNumber < 1/3) {
            computerMove = 'Rock';
        }
        else if(randomNumber >= 1/3 && randomNumber < 2/3) {
            computerMove = 'Paper';
        }
        else {
            computerMove = 'Scissors';
        }
        return computerMove;
}

//User Image Function
function userMoveImage(userMove){
    if(userMove === 'Rock') {
        return 'images/fist-user.png';
    }
    else if(userMove === 'Paper') {
        return 'images/hand-user.png';
    }
    else {
        return 'images/scissors-user.png';
    }
}

//Computer Image Function
function computerMoveImage(computerMove){
    if(computerMove === 'Rock') {
        return 'images/fist-computer.png';
    }
    else if(computerMove === 'Paper') {
        return 'images/hand-computer.png';
    }
    else {
        return 'images/scissors-computer.png';
    }
}