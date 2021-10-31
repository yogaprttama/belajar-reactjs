import React from 'react';

class Player extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      score: this.props.score
    }

    this.incrementScore = this.incrementScore.bind(this)
    this.decrementScore = this.decrementScore.bind(this)
  }

  incrementScore(e) {
    this.setState({
      score: this.state.score + 1
    });
  }

  decrementScore(e) {
    if(this.state.score > 1) {
      this.setState({
        score: this.state.score - 1
      });
    } else {
      alert('nilai sudah minimum')
    }
  }

  render(){
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
        <div style={PlayerNameStyle}>{this.props.name}</div>
        <div style={PlayerScoreStyle}>
          <button style={Padding20} onClick={this.decrementScore}>-</button>
          <span style={Padding20}>{this.state.score}</span>
          <button style={Padding20} onClick={this.incrementScore}>+</button>
        </div>
      </div>
    );
  }
}

export default Player;
