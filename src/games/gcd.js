import { runGame, generateRandomNumber } from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generatePrimeGame = () => {
  const num = generateRandomNumber(100);
  return {
    question: `${num}`,
    correctAnswer: isPrime(num) ? 'yes' : 'no',
  };
};

export default () => runGame(generatePrimeGame, 'Answer "yes" if the number is prime, otherwise answer "no".');
