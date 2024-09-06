import readlineSync from 'readline-sync';

import getUserName from './cli.js';

const sayRulesGame = (rulesGame) => console.log(rulesGame);

const getUserAnswer = (question) => readlineSync.question(`Question: ${question}\nYour answer: `);

const isAnswerCorrect = (correctAnswer, answer) => String(correctAnswer) === String(answer);

const sayCongratulations = (userName) => console.log(`Congratulations, ${userName}!`);

// Запуск игры - принимает на вход правила, функции генерации вопроса и получения верного ответа
const runGame = (rulesGame, getQuestion, getCorrectAnswer) => {
  // Вывод приветствия и правил игры, получение имени пользователя
  const userName = getUserName();
  sayRulesGame(rulesGame);

  // Запуск цикла вопрос-ответ с проверкой результата раунда
  let isRoundEndWithoutError = true;
  for (let round = 1; round < 4; round += 1) {
    const question = getQuestion();
    const userAnswer = getUserAnswer(question);
    const correctAnswer = getCorrectAnswer(question);

    const userAnswerIsCorrect = isAnswerCorrect(correctAnswer, userAnswer);
    if (userAnswerIsCorrect) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      isRoundEndWithoutError = false;
      break;
    }
  }

  // Вывод поздравления если не было ошибок
  if (isRoundEndWithoutError) {
    sayCongratulations(userName);
  }
};

export default runGame;
