#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gameRules = (theCorrrectAnswer, enteredResponse, userName, roundPosition) => {
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

const calcTextRule = 'What is the result of the expression?';

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const operands = ['+', '-', '*'];

const calculator = (operand, randomNum1, randomNum2) => {
  if (operand === operands[1]) {
    return String(randomNum1 - randomNum2);
  }
  if (operand === operands[2]) {
    return String(randomNum1 * randomNum2);
  }
  return String(randomNum1 + randomNum2);
};

const calcGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(calcTextRule);
  for (let roundPosition = 1; roundPosition <= 3; roundPosition += 1) {
    const randomNum1 = randomNum(1, 10);
    const randomNum2 = randomNum(1, 10);
    const operand = operands[Math.floor(Math.random() * 3)];
    const task = `${randomNum1} ${operand} ${randomNum2}`;
    const response = calculator(operand, randomNum1, randomNum2);
    const theCorrectAnswer = response;
    const enteredResponse = readlineSync.question(`Question: ${task} \n `);
    const result = gameRules(theCorrectAnswer, enteredResponse, userName, roundPosition);
    if (result === false) {
      break;
    }
  }
}




calcGame()