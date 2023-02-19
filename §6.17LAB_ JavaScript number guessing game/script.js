function playGuessingGame(numToGuess, totalGuesses = 10){
    let count = 0;
    let answer;
    while(count < totalGuesses){
        answer = prompt(count === 0 ? "Enter a number between 1 and 100." :
        (isNaN(answer) ? "Please enter a number." :
        (answer < numToGuess ? `${answer} is too small. Guess a larger number.` :
        `${answer} is too large. Guess a smaller number.`)));

        if(answer === null){
            break;
        }

        answer = Number(answer);

        if (isNaN(answer)){
            continue;
        }

        count++;

        if (answer === numToGuess){
            return count;
        }
    }
    return 0;
}// Your solution goes here 


