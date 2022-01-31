import React,{useEffect,useState} from "react";
import './effect.css'
import { Message } from './Message.tsx';



export const SimpleForm = () => {

    const [state,setState]=useState({
        name:'',
        email:''
    })

   const {name,email}=state;

    useEffect(()=>{
      
    },[])
    useEffect(()=>{
        
    },[state])

    const handleInputChange=({target})=>{
        
        setState({
            ...state,
            [target.name]:target.value
        })
    }

    return(
        <>
            <h1>useEffect </h1>
            <hr/>
            <div className="form-group">
                <input type="text" name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange} />
            </div>

            <div className="form-group">
                <input type="text" 
                name="email"
                className="form-control"
                placeholder="email@email.com"
                autoComplete="off"
                value={email}
                onChange={handleInputChange} />
            </div>

            {(name==='123') && <Message />}
        </>
    )
}