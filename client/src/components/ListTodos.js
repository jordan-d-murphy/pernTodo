import React, { Fragment, useEffect, useState } from "react";

const ListToDos = () => {

    const [ todos, setTodos ] = useState([]);

    const editTodo = async (id) => {
        try {
            
        } catch (error) {
            console.error(error.message);
        }
    }

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (error) {
            console.error(error.message);
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    // console.log(todos);

    return <Fragment>
                <table className="table table-hover mt-5">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Description</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map( todo => (
                            <tr key={todo.todo_id}>
                                <th scope="row">{todo.todo_id}</th>
                                <td>{todo.description}</td>
                                <td>
                                    <button 
                                        className="btn btn-warning" 
                                        onClick={() => editTodo(todo.todo_id)}>
                                            Edit
                                    </button>
                                </td>
                                <td>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={() => deleteTodo(todo.todo_id)}>
                                            Delete
                                    </button>
                                </td>
                            </tr>   
                        ))}                                             
                    </tbody>
                </table>
            </Fragment>;
};

export default ListToDos;