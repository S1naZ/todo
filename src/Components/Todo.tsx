import React from "react";

const Todo = ({text, todo, todos, setTodos}: { text: any, todo: any, todos: any, setTodos: any }) =>{
    const delelteHAndler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed? "completed" : " "}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check">
                    {" "}Done
                </i>
            </button>
            <button onClick={delelteHAndler} className="trash-btn">
                <i className="fas fa-trash">
                    {" "}Del
                </i>
            </button>
        </div>
    );
}

export default Todo;