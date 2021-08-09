import './App.css';
import React from 'react';

// statefull Component
class Clock extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        time: new Date()
      };
  }

  tick(){
    this.setState({time: new Date()});
  }

  componentDidMount(){
    setInterval(() => this.tick(), 1000);
  }


  render(){
    return (
      <h1>Time is: {this.state.time.toLocaleTimeString()}</h1>
      )
  }
}

export default Clock;