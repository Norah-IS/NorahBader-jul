import {useState} from "react";
import { useEffect } from "react";
/*
function Counter(){
    const[count,setCount]=useState(0);
    function increment(){
        setCount(value=>value+1);
    }
    function decrement(){
        setCount(value=>value-1);

    }
    return(
        <div>
        <p>Counter value {count}</p>
        <button className={"button"} onClick={()=> increment()}>increase value</button>
        <button className={"button"} onClick={()=> decrement()}>decrease value</button>
        </div>
    )*/
function Counter(){
    const[count,setCount]=useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(value => value+1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return(
        <p>DONE: {count}</p>
    );
}
//}
export default Counter;
