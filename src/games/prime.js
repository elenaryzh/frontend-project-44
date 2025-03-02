import runGame from '../index.js';
import generateRandomNumber from '../random.js';

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

const generatePrimeGame = () => {
  const num = generateRandomNumber(50);
  return {
    question: `${num}`,
    correctAnswer: isPrime(num) ? 'yes' : 'no',
  };
};

const startPrimeGame = () => runGame(generatePrimeGame, 'Answer "yes" if given number is prime. Otherwise answer "no".');

export default startPrimeGame;
