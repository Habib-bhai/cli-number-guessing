#!/usr/bin/env node

import inquirer  from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 +1);

console.log("NUMBER GUESSING GAME")

let guess: number;

let attempts = 0;


do {
    attempts++;

    const { userGuess } = await inquirer.prompt([
        {
            type: 'number',
            name: 'userGuess',
            message: `Guess a number between 1 and 10 (attempt ${attempts}) :`,
        },
      ]);
    
      guess = userGuess;
    
      if (guess > randomNumber) {
        console.log('Too high! Guess a smaller number.');
    } else if (guess < randomNumber) {
        console.log('Too low! Guess a larger number.');
      }
    
    
    if (guess === randomNumber) {
        console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
    } 
    else if(attempts ==5)
    {console.log(`you have reached your limits \n The real number is ${randomNumber}`)

    }
}
while (attempts<5 && guess !== randomNumber)
