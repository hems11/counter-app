import { useState } from "react"

const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);

   const handleIncrement = (e) => {
        e.preventDefault();
        setCounterValue(counterValue+1);
    }

    const handleDecrement = (e) => {
        e.preventDefault();
        setCounterValue(counterValue-1);
    }

    return(
    <div>
        <h1>Counter App</h1>
        <h2>Count: {counterValue}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
    )
}

export default Counter;