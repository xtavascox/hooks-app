import React from "react";

import { useCounter } from '../../hooks/useCounter.tsx';

import './counter.css'



export const CounterCustom = () => {

   const {state,increment,decrement,reset} = useCounter()


    return (
        <>
            <h1>Counter With Custom Hook {state} </h1>
            <hr/>
            <button className="btn btn-primary" onClick={()=>decrement()}>-1</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
            <button className="btn btn-primary" onClick={()=>increment()}>+1</button>
        </>
    )
}