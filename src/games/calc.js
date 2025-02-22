import { runGame, generateRandomNumber } from '../index.js';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '*') {
    return num1 * num2;
  }
  return null;
};

const generateCalcGame = () => {
  const num1 = generateRandomNumber(20); 
  const num2 = generateRandomNumber(20); 
  const operator = operators[Math.floor(Math.random() * operators.length)];

  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: String(calculate(num1, num2, operator)), 
  };
};

export default () => runGame(generateCalcGame, 'What is the result of the expression?');
