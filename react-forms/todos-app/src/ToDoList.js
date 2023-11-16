import React, { useState } from "react";

function ToDoList() {
    const [todos, setToDos] = useState([]);

    const createToDo = newToDo => {
        setToDos(todos => [...todos, newToDo]);
    }

    const updateToDos = (id, updatedToDo) => {
        setToDos(todos => 
            todos.map(todo => todo.id === id ? {...todo, task: updateTask } : todo ));
    }

    const removeToDo = (id) => {
        setToDos(todos => todos.filter(todo => todo.id !== id));
    }

    return 
}

export default ToDoList;