import React, { Fragment, useState } from "react";

const EditToDo = ({ todo }) => {    

    const [ description, setDescription ] = useState(todo.description);

    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#modal${todo.todo_id}`}>Edit</button>


            <div className="modal fade" id={`modal${todo.todo_id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" 
                onClick={() => setDescription(todo.description)} >
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button 
                            type="button" 
                            className="btn-close" 
                            onClick={() => setDescription(todo.description)} 
                            data-bs-dismiss="modal"                             
                            aria-label="Close">                            
                        </button>
                    </div>
                    <div className="modal-body">
                        <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-warning" 
                            onClick={e => updateDescription(e)}>
                                Edit
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-danger" 
                            onClick={() => setDescription(todo.description)} 
                            data-bs-dismiss="modal">
                                Close
                        </button>                    
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditToDo;

