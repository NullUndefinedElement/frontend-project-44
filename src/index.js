#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


export const calculator = (operand, randomNum1, randomNum2) => {
  const operands = ['+', '-', '*'];
  if (operand === operands[1]) {
    return String(randomNum1 - randomNum2);
  }
  if (operand === operands[2]) {
    return String(randomNum1 * randomNum2);
  }
  return String(randomNum1 + randomNum2);
};


export const gameInit = (theCorrrectAnswer, enteredResponse, userName, roundPosition) => {
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
