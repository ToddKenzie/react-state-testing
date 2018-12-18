import React, { Component } from 'react';
 
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
    return (
      <main>
          {this.state.count}
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
      </main>
    );
  }
}
export default App;