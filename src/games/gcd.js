import { runGame, generateRandomNumber } from '../index.js';

const findGCD = (num1, num2) => {
  while (num2 !== 0) {
    num1 = num1 % num2;
    [num1, num2] = [num2, num1];
  }
  return num1;
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
