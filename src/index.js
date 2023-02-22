#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gameInit = (theCorrrectAnswer, enteredResponse, userName, roundPosition) => {
    let result = true;
    if (roundPosition >= 3) {
      console.log('Correct!');
      console.log(`Congratulations, ${userName}!`);
      return result;
    }
    if (theCorrrectAnswer === enteredResponse) {
      console.log('Correct!');
      return result;
    } else {
      result = false;
      console.log(`'${enteredResponse}' is wrong answer ;(. Correct answer was '${theCorrrectAnswer}'. Let's try again, ${userName}!`);
      return result;
    }
  }
export default gameInit;