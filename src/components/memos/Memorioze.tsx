import React,{useState} from 'react';
import '../02-useEffect/effect.css'
import { useCounter } from '../../hooks/useCounter.tsx';
import { Small } from './Small.tsx';


export const Memorioze = () => {

    const {counter,increment}=useCounter(10)
    const [show,setShow]=useState(true)




  return (
    <>
    <h1>Counter: <Small value={counter}/></h1>
    <hr />
    <button className='btn btn-outline-primary' onClick={increment}>+1</button>
    
    <button className='btn btn-primary ms-5'
    onClick={()=>{
        setShow(!show)
    }}>Show/Hide: {JSON.stringify(show)}</button>
    
    </>

  );
};
