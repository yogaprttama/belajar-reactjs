import React, { useState } from 'react';
import Players from './Players';

const App = () => {
  
  const [userScore, setUserScore] = useState([
    { id:1, name: "Ayi", score: 10 },
    { id:2, name: "Andre", score: 20 },
    { id:3, name: "Agung", score: 30 }
  ]);

  const style = {
    padding: 60
  }

  return(
    <div style={style}>
      <h1>Leaderboard</h1>
      <Players members={userScore} />
    </div>
  );
}

export default App;
