import readlineSync from 'readline-sync';

export const sayRulesGame = (rulesGame) => console.log(rulesGame);

export const getUserAnswer = (question) => readlineSync.question(`Question: ${question}\nYour answer: `);

export const generateRandNumber = () => Math.round(Math.random() * 100);

export const generateRandNumberSmall = () => Math.round(Math.random() * 10);

export const isAnswerCorrect = (correctAnswer, answer) => correctAnswer.toString() === answer.toString();

export const printResultRound = (correctAnswer, userAnswer, userName) => {
  if (isAnswerCorrect(correctAnswer, userAnswer)) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    return false;
  }
};

export const congratsIfRoundLast = (roundNumber, userName) => {
    if (roundNumber === 3) {
      console.log(`Congratulations, ${userName}!`)
    }
  };
