import React,{useState,useMemo} from 'react';
import '../02-useEffect/effect.css'
import { useCounter } from '../../hooks/useCounter.tsx';
import { procesadoPesado } from '../../helpers/procesioPesado.tsx';



export const MemoHook = () => {

    const {counter,increment}=useCounter(2500)
    const [show,setShow]=useState(true)

    
    const memoProcesoPesado = useMemo(() => procesadoPesado(counter), [counter]);



  return (
    <>
    <h1>MemoHook</h1>
    <h3>Counter: {counter}</h3>
    <hr />

    <p>{memoProcesoPesado}</p>
    <button className='btn btn-outline-primary' onClick={increment}>+1</button>
    
    <button className='btn btn-primary ms-5'
    onClick={()=>{
        setShow(!show)
    }}>Show/Hide: {JSON.stringify(show)}</button>
    
    </>

  );
};
