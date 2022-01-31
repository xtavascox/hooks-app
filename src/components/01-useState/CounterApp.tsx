import React, { useState } from "react";

import './counter.css'

export const CounterApp = () => {
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3:30,
        counter4:40,
    })
        const {counter1 ,counter2,counter3,counter4}=state
    const add = (): void => {
        setState({
            ...state,
            counter1:counter1+1

        })
    }
    return (
        <>
            <h1>Counter 1: {counter1} </h1>
            <h1>Counter 2: {counter2} </h1>
            <h1>Counter 3: {counter3} </h1>
            <h1>Counter 4: {counter4} </h1>
            <hr />
            <button className="btn btn-primary" onClick={add}>+1</button>
        </>
    )
}