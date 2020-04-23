import React from 'react';
import { Body } from '../core/text';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: props.duration,
    };

    this.interval = null;
    this.timeout = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        duration: this.state.duration - 1,
      });
    }, 1000);
    this.timeout = setTimeout(
      () => this.removeTimers,
      this.props.duration * 1000
    );
  }

  componentWillUnmount() {
    this.removeTimers();
  }

  removeTimers() {
    this.interval = null;
    this.timeout = null;
  }

  render() {
    return (
      <div>
        <Body>0:{this.state.duration}</Body>
      </div>
    );
  }
}

export default Timer;
