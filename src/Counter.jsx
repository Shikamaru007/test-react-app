
import React, { useState } from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    const reset = () => {
        setCount(0);
    }

    return( <>
                <div className="counter">
                    <h1>{count}</h1>
                    <div className="buttons">
                        <button onClick={decrease}>Decrease</button>
                        <button onClick={reset}>Reset</button>
                        <button onClick={increase}>Increase</button>
                    </div>
                </div>
            </>
    )

}

export default Counter;