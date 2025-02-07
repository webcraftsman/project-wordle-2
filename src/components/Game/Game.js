import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResult from '../GuessResult/GuessResult';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([]);
  const [turns, setTurns] = React.useState(1);
  const [winner, setWinner] = React.useState(false);
  const [endGame, setEndGame] = React.useState(false);

  function winnerCheck(tenativeGuess) {
    if (tenativeGuess == answer) {
      setWinner(true);
    }
  }

  function endGameCheck() {
    if (turns >= 6) {
      setEndGame(true);
    }
  }

  function handleSubmitGuess(tenativeGuess) {
    setGuesses([...guesses, tenativeGuess]);
    setTurns(turns + 1);
    winnerCheck();
    endGameCheck();
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} winnerCheck={winnerCheck} />
      <Banner winner={winner} guesses={guesses} endGame={endGame} answer={answer} />

    </>
  );
}

export default Game;
