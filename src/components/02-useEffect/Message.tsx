import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    })
    const { x, y } = coords

    useEffect(() => {

        const mouseMov = (e) => {
            setCoords({ x: e.x, y: e.y })
        }

        window.addEventListener('mousemove', mouseMov)

        return () => {
            window.removeEventListener('mousemove', mouseMov)
        };
        
    }, []);




    return (
        <div>
            <h3>eres genial</h3>
            <p>x: {x}  y: {y}</p>
        </div>


    );
};
