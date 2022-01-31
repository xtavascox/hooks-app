import { useState} from 'react';


export const useCounter=(initialState:number=1):object=>{

    const [counter,setCounter]=useState(initialState)

    const increment =(factor:number=1):void=>{
        setCounter(counter+1)
    }
    const decrement =(factor:number=1):void=>{
        setCounter(counter-1)
    }
    const reset =():void=>{
        setCounter(initialState)
    }

    return{
        counter,
        increment,
        decrement,
        reset
    }
}