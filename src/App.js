import React from 'react';
import Players from './Players';

class App extends React.Component {
  constructor(props) {
    super(props)

    const USERS = [
      {id:1, name: "Ayi", score: 10},
      {id:2, name: "Andre", score: 20},
      {id:3, name: "Agung", score: 30}
    ];

    this.state = {
      users: USERS
    }
  }

  render() {

    const style = {
      padding: 60
    }

    return(
      <div style={style}>
        <h1>Leaderboard</h1>
        <Players members={this.state.users} />
      </div>
    );
  }
}

export default App;
