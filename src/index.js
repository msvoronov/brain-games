import readlineSync from 'readline-sync';

export { default as greetings } from './cli.js';

export const sayRulesGame = (rulesGame) => console.log(rulesGame);

export const getUserAnswer = (question) => readlineSync.question(`Question: ${question}\nYour answer: `);

export const generateRandNumber = () => Math.round(Math.random() * 100);

export const generateRandNumberSmall = () => Math.round(Math.random() * 10);

export const isAnswerCorrect = (correctAnswer, answer) => String(correctAnswer) === String(answer);

export const printResultRound = (correctAnswer, userAnswer, userName) => {
  if (isAnswerCorrect(correctAnswer, userAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  return false;
};

const congrats = (userName) => console.log(`Congratulations, ${userName}!`);
export const cycleQuestionAnswer = (playRound, userName) => {
  let isRoundEndWithoutError = true;
  for (let round = 1; round < 4; round += 1) {
    isRoundEndWithoutError = playRound();
    if (!isRoundEndWithoutError) {
      break;
    }
  }
  if (isRoundEndWithoutError) {
    congrats(userName);
  }
};
