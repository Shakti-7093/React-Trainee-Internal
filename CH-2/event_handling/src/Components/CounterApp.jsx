import React from "react";

export default class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  increment() {
    this.setState({
      result: this.state.result + 1,
    });
  }
  decrement() {
    this.setState({
      result: this.state.result - 1,
    });
  }
  reset() {
    this.setState({
      result: 0,
    });
  }

  render() {
    return (
      <>
        <div>
          <h2>Counter App</h2>
          <h3 className="result">{this.state.result}</h3>
          <button className="increment" onClick={(e) => this.increment(e)}>
            Increment
          </button>
          <button className="reset" onClick={(e) => this.reset(e)}>
            Reset
          </button>
          <button className="decrement" onClick={(e) => this.decrement(e)}>
            Decrement
          </button>
        </div>
      </>
    );
  }
}
