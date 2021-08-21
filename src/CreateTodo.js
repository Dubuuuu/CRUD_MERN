import { data } from 'browserslist';
import React from 'react';
import { useForm } from 'react-hook-form';

export const CreateTodo= () => {
    const {register, handleSubmit} = useForm()

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data))
    })
    return (
    <div className="conatiner">
        <div className="mt-3">
            <h3>Create Todo import</h3>
            <form>
                <div className="form-group"> 
                    <label htmlFor="text">Text:</label>
                    <input className="form-control" ref={register} type="text" name="text" id="text" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Create Todo
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}
