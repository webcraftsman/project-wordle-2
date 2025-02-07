import React from 'react';



function GuessInput({ handleSubmitGuess, winnerCheck }) {
  const [tenativeGuess, setTenativeGuess] = React.useState('');


  function handleEvent(event) {
    event.preventDefault();
    console.log({ tenativeGuess});
    handleSubmitGuess(tenativeGuess);
    winnerCheck(tenativeGuess);
    setTenativeGuess('');
  }

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          handleEvent(event);
        }}
      >
      <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          id="guess-input"
          type="text"
          value={tenativeGuess}
          onChange={(event) => {
            setTenativeGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </>

  )
}

export default GuessInput;
