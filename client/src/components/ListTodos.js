import React, { Fragment, useEffect, useState } from "react";

const ListToDos = () => {

    const [ todos, setTodos ] = useState([]);

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
                            <tr>
                                <th scope="row">{todo.todo_id}</th>
                                <td>{todo.description}</td>
                                <td>"Edit"</td>
                                <td>"Delete"</td>
                            </tr>   
                        ))}                                             
                    </tbody>
                </table>
            </Fragment>;
};

export default ListToDos;