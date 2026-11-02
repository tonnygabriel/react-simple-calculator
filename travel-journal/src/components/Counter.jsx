import { useEffect, useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    useEffect(()=> {
        document.title = `Count: ${count}`;
    }, [count]);
    const increaseCount = ()=>{
        setCount(count + 1);
    }
     const decreaseCount = ()=>{
        setCount(count -1);
    }

    return(
        <div className="btn">
            <h1>
                Count: {count}
                
            </h1> <br />
            <button onClick={increaseCount}>
                Increment
            </button>
            <button onClick={decreaseCount}>
                Decrement
            </button>
        </div>
    )
}