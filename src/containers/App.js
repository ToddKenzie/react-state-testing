import React, { Component } from 'react';
import Counter from '../components/Counter';
 
class App extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  increment = () => {
      this.setState({count: this.state.count + 1});
  }
  decrement = () => {
      this.setState({count: this.state.count - 1});
  }
  render() {
    return <Counter
        count={this.state.count}
        increment={this.increment}
        decrement={this.decrement} />;
  }
}
export default App;