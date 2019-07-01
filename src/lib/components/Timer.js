import React from "react";
import Clock from './Clock';
import Input from './Input';
import Button from './Button';
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      running: false,
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(this.state.running !== prevState.running){
      switch(this.state.running) {
        case true:
          this.handleStart();
          break;
        default:
            
      }
    }
  }
  
  handleStart () {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState(
        {count: newCount >= 0 ? newCount : 0}
      );
    }, 1000);
  }
  
  handleStop () {
    if(this.timer) {
      clearInterval(this.timer);
      this.setState(
        {running:false}
      );
    }
  }
  
  handleReset () {
    this.setState(
      {count: 0}
    );
  }
  
  handleCountdown (seconds) {
    this.setState({
      count: seconds,
      running: true
    })
  }
  
  render() {
    const {count} = this.state;
    return (
      <div className="container">
        <Clock time={count}/>
        <Input onSetCountdown={this.handleCountdown.bind(this)}/>
        <Button label="stop" onClickHandler={this.handleStop.bind(this)}/>
        <Button label="reset" onClickHandler={this.handleReset.bind(this)}/>
      </div>
    )
  }
}

export default Timer;
