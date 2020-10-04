import React, { useState } from 'react';

export const CounterApp = () =>{

    const [counter, setCounter] = useState(10);

    const agregar = () =>{
        setCounter(counter + 1);
    }

    return (

        <div className="container mt-5">
            <h1>Hola Mundo</h1>
            <p>Valor: { counter } </p>
            <button className="btn btn-primary" onClick={agregar}>
                +1
            </button>
        </div>

    )

}

