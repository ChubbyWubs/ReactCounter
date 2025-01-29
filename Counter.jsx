import React, { useState } from 'react';


function Counter({setNum}) {

    //increment
    const increment = () => {
        setNum((prevNum) => prevNum + 1);
    }

    //decrement
    const decrement = () => {
        setNum((prevNum) => prevNum - 1);
    }
    //reset
    const reset = () => {
        setNum((prevNum) => prevNum = 0);;
    }
    return(
        <div>
            <button className="counter-button" onClick={increment}>Increment</button>
            <button className="counter-button" onClick={reset}>0</button>
            <button className="counter-button" onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Counter;