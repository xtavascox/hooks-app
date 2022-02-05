import React,{useContext} from 'react';
import { UserContext } from './UserContext.tsx';

export const LoginScreen = () => {
    const {setUser} = useContext(UserContext);
    
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button className='btn btn-primary'
            onClick={()=>setUser({id:123,name:'gustavo'})}>Crear</button>
        </div>
    );
};
