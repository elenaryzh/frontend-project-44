import { runGame } from '../index.js';
import { generateRandomNumber } from '../random.js';

const findGCD = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (b !== 0) {
    a %= b;
    [a, b] = [b, a];
  }
  return a;
};

const generateGCDGame = () => {
  const num1 = generateRandomNumber(100);
  const num2 = generateRandomNumber(100);
  const correctAnswer = findGCD(num1, num2).toString();

  return {
    question: `${num1} ${num2}`,
    correctAnswer,
  };
};

export default () => runGame(generateGCDGame, 'Find the greatest common divisor of given numbers.');
