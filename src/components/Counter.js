import React from 'react';
import Button from './Button';


const Counter = ({ count, increment, decrement}) => (
    <main className="counter">
        {count}
        <Button 
            function={increment}
            functionName="Increment" />
        <Button
            function={decrement}
            functionName="Decrement" />
    </main>
)

export default Counter;