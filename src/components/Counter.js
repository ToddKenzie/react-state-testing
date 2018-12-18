import React from 'react';


const Counter = props => (
    <main className="counter">
        {props.count}
        <button className="counter-increment" onClick={props.increment}>Increment</button>
        <button className="counter-decrement" onClick={props.decrement}>Decrement</button>
    </main>
)

export default Counter;