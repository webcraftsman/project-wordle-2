import React from 'react';

function HappyBanner({guesses}) {
  return (
    <div className="happy banner">
      <p><strong>Congratulations!</strong> Got it in<strong> {guesses.length} {guesses.length > 1 ? 'guesses' : 'guess'}</strong>.
      </p>
    </div>
  )
}

function SadBanner({answer}) {
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  )
}

function Banner({winner, guesses, endGame, answer}) {
  return (
  <>
      {winner && <HappyBanner guesses={guesses} />}
      {endGame && !winner && <SadBanner answer={answer} />}
  </>
  )
}

export default Banner;
