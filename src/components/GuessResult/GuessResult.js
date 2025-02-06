import React from 'react';

function GuessResult({guess}) {
  return (
    <div class="guess-results">
      {guess.map((guess, index) => (
        <p key={index} className="guess">{guess}</p>
      ))}
    </div>
  )
}

export default GuessResult;
