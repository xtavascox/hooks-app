import React from 'react';
import { useForm } from '../../hooks/useForm.tsx';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim() <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo)
        reset();

    }

    return (
        <>
            <h4 className='text-center'>Agregar TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type="text" name='description' placeholder='¿Que hay pa hacer que no de mucha carcel?'
                    className='form-control '
                    onChange={handleInputChange}
                    value={description} />
                <div className="d-grid gap-2">
                    <button className="btn btn-outline-warning mt-2" type="submit">Hagalo real</button>

                </div>
            </form>


        </>
    );
};
