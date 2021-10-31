import React from 'react';
import Player from './Player.js'

const Players = (props) => {
  return(
    <div>
      {props.members.map((player) => {
        return <Player name={player.name} score={player.score} key={player.id}/>
      })}
    </div>
  );
}

export default Players;
