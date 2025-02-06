import React from 'react';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';
import { range } from '../../utils.js';

function GuessResult({guesses, answer}) {
  return (
    <div class="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess key={num} value={guesses[num]} answer={answer} />
        ))}
      </div>
  )
}

export default GuessResult;
