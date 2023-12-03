import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    };
  
    render() {
        return (
            <div className="counter">
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}

export default Counter;
