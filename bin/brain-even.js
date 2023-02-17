import readlineSync from 'readline-sync';

const isEvenTextRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameRules = (theCorrrectAnswer, enteredResponse, userName, roundPosition) => {
  let result = 'true';
  if (theCorrrectAnswer === enteredResponse) {
    console.log('Correct!');
  } else {
    result = 'false';
    console.log(`'${enteredResponse}' is wrong answer ;(. Correct answer was '${theCorrrectAnswer}'. Let's try again, ${userName}!`);
  }
  if (roundPosition >= 3) {
    console.log(`Congratulations, ${userName}!`);
  }
  return result;
}

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(isEvenTextRule);
  for (let roundPosition = 0; roundPosition <= 3; roundPosition += 1) {
    const questionNum = randomNum(1, 100);
    const isEven = (num) => num % 2 === 0;
    const theCorrrectAnswer = isEven(questionNum) ? 'yes' : 'no';
    const enteredResponse = readlineSync.question(`Question: ${questionNum} \n `);
    const result = gameRules(theCorrrectAnswer, enteredResponse, userName, roundPosition);
    if (result === 'false') {
      break;
    }
  }
}

evenGame();
gameRules();



