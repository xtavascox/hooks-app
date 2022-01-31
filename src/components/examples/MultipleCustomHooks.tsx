import React from 'react';
import { useFetch } from '../../hooks/useFetch.tsx';
import '../02-useEffect/effect.css'
import { useCounter } from '../../hooks/useCounter.tsx';


export const MultipleCustomHooks = () => {
    const {counter,increment,decrement}=useCounter();
    const { loading,data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author,quote}=!!data && data[0]
    return (
        <div>
            <h1>Breaking Bad</h1>
            <hr />
            {loading ?
                (
                    <div className='alert alert-info text-center'> Loading....</div>
                )
                : (
                    <blockquote className='blockquote text-end'>
                        <p>{quote}</p>
                        <footer className='blockquote-footer'>{author}</footer>
                    </blockquote>
                )
            }

        <button className='btn btn-primary' onClick={decrement}>anterior</button>
        <button className='btn btn-primary' onClick={increment}>Siguiente</button>


        </div>
    )
};
