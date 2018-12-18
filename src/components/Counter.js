import React from 'react';
import Button from './Button';


const Counter = props => (
    <main className="counter">
        {props.count}
        <Button 
            function={props.increment}
            functionName="Increment" />
        <Button
            function={props.decrement}
            functionName="Decrement" />
    </main>
)

export default Counter;