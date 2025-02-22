import { runGame, generateRandomNumber } from '../index.js';

const generateProgressionGame = () => {
  const start = generateRandomNumber(20);
  const step = Math.floor(Math.random() * 10) + 1;
  const length = Math.floor(Math.random() * 6) + 5;

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  const hiddenIndex = Math.floor(Math.random() * length);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  return {
    question: progression.join(' '),
    correctAnswer,
  };
};

export default () => runGame(generateProgressionGame, 'What number is missing in the progression?');
