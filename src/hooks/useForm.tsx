import {useState} from 'react';


export const useForm = (initialState:object={}) => {
  
const[values,setValues]=useState(initialState)

const handleInputChange=({target})=>{
    setValues({
        ...values,
        [target.name]:target.value
    })
}

return [values,handleInputChange]

};
