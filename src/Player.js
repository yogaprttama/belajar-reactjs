import React, { useState } from 'react';

const Player = (props) => {

  const [score, setScore] = useState(props.score);

  const incrementScore = () => {
    setScore(score + 1);
  }

  const decrementScore  = () => {

    if(score > 1) {

      setScore(score - 1);

    } else {

      alert("Score sudah minimum");

    }

  }


  const PlayerStyle = {
    display: 'flex',
    padding: 10
  }

  const PlayerNameStyle = {
    flex: '1'
  }

  const PlayerScoreStyle = {
    width: 200
  }

  const Padding20 = {
    padding: 5
  }

  return(
    <div style={PlayerStyle}>
      <div style={PlayerNameStyle}>{props.name}</div>
      <div style={PlayerScoreStyle}>
        <button style={Padding20} onClick={decrementScore}>-</button>
        <span style={Padding20}>{score}</span>
        <button style={Padding20} onClick={incrementScore}>+</button>
      </div>
    </div>
  );

}

export default Player;
