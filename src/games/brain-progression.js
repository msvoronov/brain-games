import {
  greetings, sayRulesGame, getUserAnswer, generateRandNumberSmall, cycleQuestionAnswer, printResultRound,
} from '../index.js';

const brainProgression = () => {  
  const userName = greetings();
  sayRulesGame('What number is missing in the progression?');
  
  const playRound = () => {
    const firstNumber = generateRandNumberSmall();
    const step = Math.max(1, generateRandNumberSmall()); // Что бы step не оказался равен 0
    const randomIndex = Math.max(1, generateRandNumberSmall() - 1); // Ограничить диапазоном "0..9"
    const progression = [];
    const progressionLength = 10;
    for (let index = 0; index < progressionLength; index += 1) {
      progression.push(firstNumber + (step * index));
    }
    const hiddenNum = progression[randomIndex];
    let question = [...progression];
    question[randomIndex] = '..';
    question = question.join(' ');
    const userAnswer = getUserAnswer(question);
    const correctAnswer = hiddenNum;
  
    if (!printResultRound(correctAnswer, userAnswer, userName)) {
      return false;
    }
    return true;
  }
  
  cycleQuestionAnswer(playRound, userName);
};

export default brainProgression;
